/**
 * Orchestrates ingestion output (raw text + source metadata) through:
 * normalize → extraction quality → scanned heuristic → parse → insights.
 *
 * OCR is **not** invoked here today — the route supplies text. If OCR runs upstream, pass the merged string and set
 * `documentSource` / `extractionMethod` accordingly (`types.ts`). Keeps parsing and insights deterministic.
 * Premium gating for **insights** is handled via flags into `buildPayslipInsightLayers`; entitlement should be
 * enforced before this function receives paid-only requests. Blueprint: docs/tools/payslip-decoder-future-ocr.md
 */
import { getPayslipFeatureFlags } from "@/lib/config/payslip-features";
import { getPayslipEntitlements } from "@/lib/entitlements/payslip-entitlements";
import { SCANNED_PDF_HINT } from "@/src/lib/tools/payslip/constants";
import { buildPayslipInsightLayers } from "@/src/lib/tools/payslip/insights/payslip-insights";
import type { DocumentProcessingResult, ProcessPayslipDocumentInput } from "@/src/lib/tools/payslip/pipeline/document-types";
import {
  buildDecodeCapabilitiesFromFlags,
  buildScannedPdfHints,
  derivePayslipDecoderUiStates,
} from "@/src/lib/tools/payslip/pipeline/decoder-ui-state";
import { deriveProcessingFlowState } from "@/src/lib/tools/payslip/pipeline/flow-state";
import { normalizeExtractedText } from "@/src/lib/tools/payslip/pipeline/normalize";
import { parsePayslipFromNormalized } from "@/src/lib/tools/payslip/pipeline/parse-layer";
import { computeLikelyScannedDocument } from "@/src/lib/tools/payslip/pipeline/scanned-detection";
import { assessExtractionQuality, buildExtractionQualityExplanation } from "@/src/lib/tools/payslip/quality";
import { getPayslipOcrProvider } from "@/src/lib/tools/payslip/ocr/OcrProvider";
import type { PayslipDecodeResponse, PayslipInputSource } from "@/src/lib/tools/payslip/types";

function countDecoderFields(dr: DocumentProcessingResult["parser"]["decoderResult"]): number {
  return dr.fields.filter(
    (f) =>
      f.periodAmount?.normalized != null ||
      f.ytdAmount?.normalized != null ||
      f.key === "employer_name" ||
      f.key === "employee_name" ||
      f.key === "period_label"
  ).length;
}

export function processPayslipDocument(input: ProcessPayslipDocumentInput): DocumentProcessingResult {
  const entitlements = input.entitlements ?? getPayslipEntitlements();
  const normalizedText = normalizeExtractedText(input.rawText);
  const quality = assessExtractionQuality(normalizedText);
  const likelyScannedDocument = computeLikelyScannedDocument({
    documentSource: input.documentSource,
    extractionMethod: input.extractionMethod,
    quality,
  });

  const extractionWarnings = [...quality.warnings];
  if (likelyScannedDocument) {
    const alreadyHasScannedHint = extractionWarnings.some((w) =>
      /scanned|image-only|image-based|text-based PDFs only/i.test(w)
    );
    if (!alreadyHasScannedHint) {
      extractionWarnings.unshift(SCANNED_PDF_HINT);
    }
  }

  const includeDiag = process.env.NODE_ENV === "development";
  const { result: parsedPayslip, diagnostics, decoderResult } = parsePayslipFromNormalized(normalizedText, {
    includeDiagnostics: includeDiag,
    extractionQuality: quality.level,
  });

  const diagnosticsOut =
    includeDiag && diagnostics
      ? {
          ...diagnostics,
          qualityExplanation: buildExtractionQualityExplanation(quality.metrics),
        }
      : undefined;

  const flags = getPayslipFeatureFlags();
  const insightLayers = buildPayslipInsightLayers({
    extractionQuality: quality.level,
    parsed: parsedPayslip,
    enablePremiumInsights: flags.enablePremiumInsights && entitlements.canUsePremiumInsights,
  });

  const flowState = deriveProcessingFlowState({
    documentSource: input.documentSource,
    likelyScannedDocument,
  });

  const doc: DocumentProcessingResult = {
    transientDocument: {
      sourceType: input.documentSource,
      extractionMethod: input.extractionMethod,
      rawText: input.rawText,
      normalizedText,
      sanitizedFileName: input.sanitizedFileName,
    },
    extraction: {
      quality,
      extractionWarnings,
      likelyScannedDocument,
    },
    parser: {
      result: parsedPayslip,
      diagnostics: diagnosticsOut,
      decoderResult,
    },
    insights: insightLayers.basic,
    premiumInsightsBlock: insightLayers.premium,
    flowState,
    processingMetadata: {
      parserFieldCount: countDecoderFields(decoderResult),
      ambiguousNet: (parsedPayslip.ambiguousNetCandidates?.length ?? 0) > 0,
    },
  };

  return doc;
}

/** Maps pipeline output to the public API shape (backward compatible + extended fields). */
export function toPayslipDecodeResponse(
  r: DocumentProcessingResult,
  legacyInputSource: PayslipInputSource,
  entitlements = getPayslipEntitlements()
): PayslipDecodeResponse {
  const flags = getPayslipFeatureFlags();
  const ocr = getPayslipOcrProvider();
  const decodeCapabilities = buildDecodeCapabilitiesFromFlags(flags, ocr, entitlements);
  const scannedPdfHints = buildScannedPdfHints({
    documentSource: r.transientDocument.sourceType,
    likelyScannedDocument: r.extraction.likelyScannedDocument,
    decodeCapabilities,
  });
  const decoderUiStates = derivePayslipDecoderUiStates({
    documentSource: r.transientDocument.sourceType,
    likelyScannedDocument: r.extraction.likelyScannedDocument,
    processingFlowState: r.flowState,
    flags,
    entitlements,
  });

  return {
    extractedText: r.transientDocument.normalizedText,
    extractionQuality: r.extraction.quality.level,
    extractionQualityLabel: r.extraction.quality.label,
    extractionWarnings: r.extraction.extractionWarnings,
    parsedPayslip: r.parser.result,
    summaryMessage: r.insights.summaryMessage,
    decodeHints: r.insights.decodeHints,
    inputSource: legacyInputSource,
    sanitizedFileName: r.transientDocument.sanitizedFileName,
    parseDiagnostics: r.parser.diagnostics,
    documentSource: r.transientDocument.sourceType,
    extractionMethod: r.transientDocument.extractionMethod,
    likelyScannedDocument: r.extraction.likelyScannedDocument,
    processingFlowState: r.flowState,
    decodeCapabilities,
    processingWarnings: r.insights.processingWarnings,
    decoderUiStates,
    scannedPdfHints,
    premiumInsights: r.premiumInsightsBlock,
    decoderResult: r.parser.decoderResult,
  };
}
