import type { DocumentProcessingResult } from "@/src/lib/tools/contract-scanner/architectureTypes";
import {
  buildDocumentProcessingResultForChecklist,
  buildDocumentProcessingResultForPaste,
  buildDocumentProcessingResultFromPdfExtract,
} from "@/src/lib/tools/contract-scanner/documentPipeline";
import { getDefaultContractEntitlements } from "@/src/lib/tools/contract-scanner/entitlements";
import type { ContractPdfExtractResult } from "@/src/lib/tools/contract-scanner/pdfExtract";
import type { ContractScanInput, ContractScanResult } from "@/src/lib/tools/contract-scanner/types";

function entitlementsForInput(input: ContractScanInput) {
  return input.entitlementsSnapshot ?? getDefaultContractEntitlements();
}

/** Resolve or synthesize the document stage from input (free tier: deterministic defaults). */
export function resolveDocumentProcessing(input: ContractScanInput): DocumentProcessingResult {
  if (input.documentProcessing) {
    return input.documentProcessing;
  }
  const ent = entitlementsForInput(input);
  if (input.mode === "checklist") {
    return buildDocumentProcessingResultForChecklist(ent);
  }
  if (input.mode === "paste") {
    return buildDocumentProcessingResultForPaste(input.text.trim(), ent);
  }
  const synthetic: ContractPdfExtractResult = {
    extractedText: input.text,
    extractionQuality: input.extractionQuality ?? "partial",
    extractionWarnings: input.extractionWarnings ?? [],
    textLength: input.text.length,
    likelyScannedDocument: input.likelyScannedDocument ?? false,
    pageCount: input.pdfPageCount ?? 1,
  };
  return buildDocumentProcessingResultFromPdfExtract(synthetic, ent);
}

/** Attach pipeline metadata to a scan result (basic insight level only today). */
export function mergePipelineIntoResult(result: ContractScanResult, input: ContractScanInput): ContractScanResult {
  const dp = resolveDocumentProcessing(input);
  return {
    ...result,
    documentProcessing: dp,
    documentInputSource: dp.documentInputSource,
    extractionMethod: dp.extractionMethod,
    insightLevel: "basic",
    ocrRecommended: dp.ocrRecommended,
    ocrAvailable: dp.ocrAvailable,
    extractionQuality: result.extractionQuality ?? dp.extractionQuality,
    likelyScannedDocument: result.likelyScannedDocument ?? dp.likelyScannedDocument,
    extractionWarnings: result.extractionWarnings ?? dp.extractionWarnings,
  };
}
