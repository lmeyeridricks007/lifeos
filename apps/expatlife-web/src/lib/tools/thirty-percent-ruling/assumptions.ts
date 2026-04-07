/**
 * Configurable rules and indicative tax models — update independently of UI.
 */

import type { ThirtyPercentCalculatorInputs } from "./types";

export const THIRTY_PCT_RULES_2026 = {
  thresholdStandardAnnual: 48_013,
  thresholdUnder30MastersAnnual: 36_497,
  salaryCapAnnual: 262_000,
  maxUntaxedFullYearAtCap: 78_600,
  facilityPercentThrough2026: 0.3,
  facilityPercentFrom2027Preview: 0.27,
} as const;

/** Employer allowance % must be in [0, statutoryMax] where statutory max is 30% or 27% etc. Upper hard cap for data entry sanity. */
export const EMPLOYER_ALLOWANCE_PERCENT_HARD_MAX = 35;

/**
 * Simplified progressive “wedge” on annual taxable income for indicative net comparison only.
 * Not Belastingdienst payroll tables — replace when you wire official rates.
 */
export type IndicativeTaxBracket = {
  /** Upper bound of this slice (exclusive); use Infinity for top slice. */
  upToExclusive: number;
  /** Marginal combined employer+employee wedge used for planning deltas only. */
  marginalRate: number;
};

export type IndicativeTaxModel = {
  id: string;
  label: string;
  brackets: IndicativeTaxBracket[];
  /** Rough fixed offset to mimic generic heffingskorting / effect — subtracted from raw tax, floored at 0. */
  approximateTaxCreditAnnual: number;
  footnotes: string[];
};

export const DEFAULT_INDICATIVE_TAX_MODEL_2026: IndicativeTaxModel = {
  id: "nl-indicative-2026-v1",
  label: "Simplified NL-style progressive wedge (2026 planning)",
  brackets: [
    { upToExclusive: 38_441, marginalRate: 0.37 },
    { upToExclusive: 76_817, marginalRate: 0.375 },
    { upToExclusive: Number.POSITIVE_INFINITY, marginalRate: 0.495 },
  ],
  approximateTaxCreditAnnual: 2_800,
  footnotes: [
    "Uses coarse brackets and a single approximate credit — not official loonbelasting tables.",
    "Excludes Zvw employee part, income-dependent contributions, pension, and specific credits.",
    "Use only to compare with-ruling vs without-ruling taxable bases, not to predict your payslip.",
  ],
};

export function normalizeEmployerAllowancePercent(
  raw: number | null | undefined,
  statutoryMaxFraction: number
): number | null {
  if (raw == null || !Number.isFinite(raw)) return null;
  const clamped = Math.min(Math.max(raw, 0), EMPLOYER_ALLOWANCE_PERCENT_HARD_MAX);
  const maxPct = statutoryMaxFraction * 100;
  return Math.min(clamped, maxPct);
}

/** Merge legacy field names — employerAllowancePercent wins if both set. */
export function effectiveCustomAllowancePercent(inputs: ThirtyPercentCalculatorInputs): number | null {
  const a = inputs.employerAllowancePercent;
  const b = inputs.customAllowancePercent;
  if (a != null && Number.isFinite(a)) return a;
  if (b != null && Number.isFinite(b)) return b;
  return null;
}
