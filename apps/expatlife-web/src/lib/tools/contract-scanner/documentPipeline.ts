import type {
  ContractEntitlements,
  DocumentInputSource,
  DocumentProcessingResult,
  ExtractionMethod,
} from "@/src/lib/tools/contract-scanner/architectureTypes";
import type { ContractPdfExtractResult } from "@/src/lib/tools/contract-scanner/pdfExtract";
import type { ExtractionQuality } from "@/src/lib/tools/contract-scanner/types";

function resolvePdfDocumentSource(quality: ExtractionQuality, likelyScanned: boolean): DocumentInputSource {
  if (likelyScanned || quality === "poor") return "pdf_scanned";
  return "pdf_text";
}

function computeOcrRecommended(quality: ExtractionQuality, likelyScanned: boolean): boolean {
  return likelyScanned || quality === "poor";
}

/**
 * Maps PDF text-layer extraction + quality heuristics to a structured pipeline result.
 * OCR is never run here — only flags for future entitlement-gated OCR.
 */
export function buildDocumentProcessingResultFromPdfExtract(
  extract: ContractPdfExtractResult,
  entitlements: ContractEntitlements
): DocumentProcessingResult {
  const documentInputSource = resolvePdfDocumentSource(extract.extractionQuality, extract.likelyScannedDocument);
  const extractionMethod: ExtractionMethod = "pdf_text";
  const ocrRecommended = computeOcrRecommended(extract.extractionQuality, extract.likelyScannedDocument);
  const ocrAvailable = entitlements.ocrEnabled === true;

  return {
    extractedText: extract.extractedText,
    extractionQuality: extract.extractionQuality,
    extractionWarnings: extract.extractionWarnings,
    textLength: extract.textLength,
    pageCount: extract.pageCount,
    documentInputSource,
    extractionMethod,
    likelyScannedDocument: extract.likelyScannedDocument,
    ocrRecommended,
    ocrAvailable,
  };
}

/** Paste path: no byte extraction; OCR not applicable. */
export function buildDocumentProcessingResultForPaste(
  normalizedText: string,
  entitlements: ContractEntitlements
): DocumentProcessingResult {
  return {
    extractedText: normalizedText,
    extractionQuality: "good",
    extractionWarnings: [],
    textLength: normalizedText.length,
    pageCount: 0,
    documentInputSource: "paste_text",
    extractionMethod: "none",
    likelyScannedDocument: false,
    ocrRecommended: false,
    ocrAvailable: entitlements.ocrEnabled === true,
  };
}

/** Checklist path: no document bytes. */
export function buildDocumentProcessingResultForChecklist(entitlements: ContractEntitlements): DocumentProcessingResult {
  return {
    extractedText: "",
    extractionQuality: "good",
    extractionWarnings: [],
    textLength: 0,
    pageCount: 0,
    documentInputSource: "checklist_manual",
    extractionMethod: "none",
    likelyScannedDocument: false,
    ocrRecommended: false,
    ocrAvailable: entitlements.ocrEnabled === true,
  };
}
