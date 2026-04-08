import type { ExtractionQuality } from "@/src/lib/tools/contract-scanner/types";

export type TextQualityAssessment = {
  quality: ExtractionQuality;
  likelyScannedDocument: boolean;
  warnings: string[];
};

/**
 * Heuristic quality for PDF text layers (no OCR). Poor quality often indicates scanned PDFs.
 */
export function assessExtractionQuality(text: string, pageCount: number): TextQualityAssessment {
  const trimmed = text.trim();
  const len = trimmed.length;
  const warnings: string[] = [];

  if (len < 80) {
    return {
      quality: "poor",
      likelyScannedDocument: true,
      warnings: [
        "Very little text was extracted. This file appears to be scanned or image-based. Free mode currently supports text-based PDFs only. Paste the contract text manually if possible.",
      ],
    };
  }

  const letters = (trimmed.match(/[a-zA-ZàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿĀ-ž]/g) ?? []).length;
  const letterRatio = len > 0 ? letters / len : 0;
  const words = trimmed.split(/\s+/).filter((w) => w.length > 1).length;
  const avgCharsPerPage = pageCount > 0 ? len / pageCount : len;

  if (letterRatio < 0.45) {
    warnings.push("Extracted text has an unusual character mix; it may be corrupted or mostly non-text.");
  }

  if (pageCount >= 2 && avgCharsPerPage < 120) {
    warnings.push("Very little text per page — common for scanned PDFs without a text layer.");
  }

  let likelyScanned = false;
  if (pageCount >= 1 && avgCharsPerPage < 100) likelyScanned = true;
  if (len < 400 && pageCount >= 2) likelyScanned = true;
  if (letterRatio < 0.5 && len < 2000) likelyScanned = true;

  if (likelyScanned) {
    warnings.push(
      "This file appears to be scanned or image-based. Free mode currently supports text-based PDFs only. Paste the contract text manually if possible."
    );
  }

  let quality: ExtractionQuality;
  if (likelyScanned || len < 200 || (pageCount >= 2 && avgCharsPerPage < 150)) {
    quality = "poor";
  } else if (words < 120 || letterRatio < 0.55 || avgCharsPerPage < 350) {
    quality = "partial";
  } else {
    quality = "good";
  }

  return { quality, likelyScannedDocument: likelyScanned, warnings };
}
