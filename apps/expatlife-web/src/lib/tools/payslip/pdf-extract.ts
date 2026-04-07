/**
 * Buffer-based PDF text extraction (digitally generated PDFs only — no OCR).
 * Uses dynamic import so Next.js does not evaluate pdf-parse at module load.
 *
 * Scanned PDFs: poor/empty text here is expected; paid OCR would run separately (see ocr/OcrProvider.ts,
 * docs/tools/payslip-decoder-future-ocr.md). Do not add OCR into this module — keep extraction strategies separate.
 */
export type PdfExtractOk = { text: string; pageCount: number };

export async function extractTextFromPdfBuffer(buffer: Buffer): Promise<PdfExtractOk> {
  if (!buffer?.length) {
    throw new Error("EMPTY_PDF");
  }
  const header = buffer.subarray(0, 5).toString("utf8");
  if (header !== "%PDF-") {
    throw new Error("NOT_PDF");
  }

  try {
    const mod = await import("pdf-parse");
    const pdfParse = mod.default as (b: Buffer) => Promise<{ text?: string; numpages?: number }>;
    const data = await pdfParse(buffer);
    const text = typeof data.text === "string" ? data.text : "";
    const pageCount = typeof data.numpages === "number" ? data.numpages : 0;
    return { text, pageCount };
  } catch {
    throw new Error("PDF_PARSE_FAILED");
  }
}

/** Alias for ingestion layer naming (`extractTextFromPdf` ↔ PDF buffer in memory). */
export const extractTextFromPdf = extractTextFromPdfBuffer;

export function userSafePdfError(code: string): string {
  switch (code) {
    case "NOT_PDF":
      return "Upload a PDF file only.";
    case "EMPTY_PDF":
      return "The PDF file appears empty.";
    case "PDF_PARSE_FAILED":
      return "We could not read text from this PDF. It may be corrupted, encrypted, or not a standard text-based PDF.";
    default:
      return "Something went wrong while reading the PDF. Try pasting the text instead.";
  }
}
