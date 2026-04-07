/**
 * Normalization layer: whitespace, PDF artifacts, duplicate line collapse.
 * Numeric parsing formats live in `parse/amounts.ts` (parser layer).
 */
import { normalizePayslipText } from "@/src/lib/tools/payslip/format";

export function normalizeExtractedText(rawText: string): string {
  return normalizePayslipText(rawText);
}
