/**
 * Lightweight line kind for unresolved bucketing (deterministic heuristics).
 */
import { normalizeForAlias } from "@/src/lib/tools/payslip/decoder/parsePayslipLines";
import { findMoneyTokensInLine } from "@/src/lib/tools/payslip/parse/amounts";

export type PayslipLineKind =
  | "probable_header"
  | "probable_identity"
  | "probable_address"
  | "probable_metadata"
  | "probable_earnings_row"
  | "probable_deduction_row"
  | "probable_tax_row"
  | "probable_pension_row"
  | "probable_total_row"
  | "probable_time_row"
  | "probable_ruling_row"
  | "probable_bank_line"
  | "probable_noise"
  | "unknown";

export function classifyLineKind(rawLine: string): PayslipLineKind {
  const n = normalizeForAlias(rawLine);
  const hasMoney = findMoneyTokensInLine(rawLine).length > 0;

  if (/^(jan|feb|mrt|apr|mei|jun|jul|aug|sep|okt|nov|dec)\b/i.test(rawLine) && rawLine.length < 80) {
    return "probable_metadata";
  }

  if (/\b(iban|bic)\b/i.test(rawLine)) return "probable_bank_line";
  if (/\b(ytd|year to date|cumulative|cumulatief)\b/i.test(rawLine) && rawLine.length < 100) return "probable_header";

  if (/\b(30\s*%\s*(tb|bt|rul)|corr\.?\s*30|extraterritorial|expat allowance)\b/i.test(rawLine.toLowerCase())) {
    return "probable_ruling_row";
  }

  if (/\b(loonheff|loonhef|belasting|tax|withholding)\b/i.test(n) && hasMoney) return "probable_tax_row";
  if (/\b(pensioen|pension)\b/i.test(n) && hasMoney) return "probable_pension_row";
  if (/\b(betalingen|inhoudingen|total earnings|total deductions|payments|deductions)\b/i.test(n) && hasMoney) {
    return "probable_total_row";
  }
  if (/\b(dagen|uren|days|hours|gewerkt|worked)\b/i.test(n) && hasMoney) return "probable_time_row";

  if (/\b(salaris|gross|netto|net pay|loon|wage|bonus|commission|allowance)\b/i.test(n) && hasMoney) {
    return "probable_earnings_row";
  }
  if (/\b(inh|premie|deduction|withhold)\b/i.test(n) && hasMoney) return "probable_deduction_row";

  if (/\b(straat|laan|weg|postcode|amsterdam|rotterdam)\b/i.test(n) && !hasMoney) return "probable_address";
  if (/^(dhr|mw|mevr)\b/i.test(n) && !hasMoney) return "probable_identity";

  if (!hasMoney && rawLine.length < 100 && !/\d{4}/.test(rawLine)) return "probable_metadata";
  if (!hasMoney && rawLine.length < 40) return "probable_noise";

  return "unknown";
}
