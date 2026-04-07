import type { DocumentExtractionMethod, DocumentInputSource, ExtractionQualityAssessment } from "@/src/lib/tools/payslip/types";

/**
 * Heuristic: PDF text layer exists but content looks like a scanned/image PDF
 * (little text, sparse payroll tokens, garbled ratio).
 * Paste path never returns true — user supplied text directly.
 */
export function computeLikelyScannedDocument(params: {
  documentSource: DocumentInputSource;
  extractionMethod: DocumentExtractionMethod;
  quality: ExtractionQualityAssessment;
}): boolean {
  if (params.documentSource !== "pdf_text") return false;
  if (params.extractionMethod !== "pdf_text") return false;

  const { level, metrics } = params.quality;
  const { charCount, payrollKeywordHits, printableRatio } = metrics;

  const clearlyTextBased =
    level === "good" ||
    (charCount >= 350 && payrollKeywordHits >= 5 && printableRatio >= 0.58);

  if (clearlyTextBased) return false;

  if (level === "poor") return true;
  if (charCount < 80) return true;
  if (payrollKeywordHits === 0 && charCount < 600) return true;
  if (charCount < 200 && payrollKeywordHits < 2) return true;
  if (printableRatio < 0.4 && charCount > 40) return true;

  return false;
}
