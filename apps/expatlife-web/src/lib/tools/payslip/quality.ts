import { PAYROLL_KEYWORDS } from "@/src/lib/tools/payslip/constants";
import type { ExtractionQualityAssessment, ExtractionQualityLevel } from "@/src/lib/tools/payslip/types";

function countPayrollKeywords(text: string): number {
  const lower = text.toLowerCase();
  let hits = 0;
  for (const kw of PAYROLL_KEYWORDS) {
    if (lower.includes(kw)) hits += 1;
  }
  return hits;
}

/** Ratio of printable / payroll-useful characters vs non-space body (letters, digits, common money punctuation). */
export function printableRatio(text: string): number {
  const body = text.replace(/\s/g, "");
  if (!body.length) return 0;
  let ok = 0;
  for (let i = 0; i < body.length; i++) {
    const c = body[i];
    const code = body.charCodeAt(i);
    if (
      (code >= 48 && code <= 57) ||
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122) ||
      "€.,-+()%/:".includes(c)
    ) {
      ok += 1;
    }
  }
  return ok / body.length;
}

function labelForLevel(level: ExtractionQualityLevel): string {
  switch (level) {
    case "good":
      return "Good extraction";
    case "partial":
      return "Partial extraction";
    case "poor":
      return "Low-confidence extraction";
    default:
      return "Partial extraction";
  }
}

/**
 * Heuristic quality for text-based PDFs / paste. Not OCR — scanned PDFs often land as poor/empty.
 */
export function assessExtractionQuality(text: string): ExtractionQualityAssessment {
  const normalized = text.trim();
  const charCount = normalized.length;
  const lineCount = normalized ? normalized.split(/\n/).length : 0;
  const payrollKeywordHits = countPayrollKeywords(normalized);
  const pr = printableRatio(normalized);

  const warnings: string[] = [];

  if (charCount < 40) {
    warnings.push("Very little text was recovered — the PDF may be image-only or heavily protected.");
  } else if (charCount < 120 && payrollKeywordHits < 2) {
    warnings.push("Text is short and payroll terms are sparse — decoding may miss important lines.");
  }

  if (pr < 0.42 && charCount > 30) {
    warnings.push("Many unusual characters were detected — encoding or extraction may be unreliable.");
  }

  let level: ExtractionQualityLevel = "partial";

  const goodShape =
    charCount >= 220 && payrollKeywordHits >= 4 && pr >= 0.62 && lineCount >= 6;
  const poorShape =
    charCount < 70 ||
    pr < 0.38 ||
    (charCount < 400 && payrollKeywordHits === 0) ||
    (charCount < 160 && payrollKeywordHits < 2);

  if (goodShape) level = "good";
  else if (poorShape) level = "poor";
  else level = "partial";

  return {
    level,
    label: labelForLevel(level),
    warnings,
    metrics: { charCount, lineCount, payrollKeywordHits, printableRatio: pr },
  };
}

/** Safe, non-PII bullets for dev diagnostics only. */
export function buildExtractionQualityExplanation(metrics: ExtractionQualityAssessment["metrics"]): string[] {
  const lines: string[] = [];
  lines.push(`Character count: ${metrics.charCount} (more text usually improves matching).`);
  lines.push(`Line count: ${metrics.lineCount}.`);
  lines.push(`Payroll keyword hits: ${metrics.payrollKeywordHits} (from a fixed Dutch/English list).`);
  lines.push(`Printable ratio: ${(metrics.printableRatio * 100).toFixed(1)}% (low values suggest garbled extraction).`);
  return lines;
}
