/**
 * In-memory PDF text extraction for the contract scanner.
 * Reuses the shared pdf-parse wrapper (no OCR). Future: optional OCR pipeline when entitled.
 */

import { extractTextFromPdfBuffer } from "@/src/lib/tools/payslip/pdf-extract";
import { assessExtractionQuality } from "@/src/lib/tools/contract-scanner/textQuality";
import { normalizeContractText } from "@/src/lib/tools/contract-scanner/format";
import type { ExtractionQuality } from "@/src/lib/tools/contract-scanner/types";

export type ContractPdfExtractResult = {
  extractedText: string;
  extractionQuality: ExtractionQuality;
  extractionWarnings: string[];
  textLength: number;
  likelyScannedDocument: boolean;
  pageCount: number;
};

export async function extractContractPdfInMemory(buffer: Buffer): Promise<ContractPdfExtractResult> {
  const { text: raw, pageCount } = await extractTextFromPdfBuffer(buffer);
  const normalized = normalizeContractText(raw);
  const { quality, likelyScannedDocument, warnings } = assessExtractionQuality(normalized, pageCount);
  return {
    extractedText: normalized,
    extractionQuality: quality,
    extractionWarnings: warnings,
    textLength: normalized.length,
    likelyScannedDocument,
    pageCount,
  };
}

export { userSafePdfError } from "@/src/lib/tools/payslip/pdf-extract";
