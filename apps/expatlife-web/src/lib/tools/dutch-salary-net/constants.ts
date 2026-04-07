import { THIRTY_PCT_RULES_2026 } from "@/src/lib/tools/thirty-percent-ruling/assumptions";

/** 30% facility maximum salary base (2026 planning — same source as ruling tool). */
export const RULING_SALARY_BASE_CAP_ANNUAL = THIRTY_PCT_RULES_2026.salaryCapAnnual;

export const STATUTORY_RULING_PERCENT_MAX = THIRTY_PCT_RULES_2026.facilityPercentThrough2026;

/** Legislative preview (e.g. 27% from 2027) — fraction from same source as the 30% eligibility tool. */
export const FACILITY_FRACTION_2027_PREVIEW = THIRTY_PCT_RULES_2026.facilityPercentFrom2027Preview;

/**
 * Simplified box-1 style wedge for planning (not Belastingdienst payroll tables).
 * Band 1 ≈36.97% up to ~€75k; top slice 49.5%.
 */
export const INDICATIVE_SALARY_TAX_MODEL_2026 = {
  id: "nl-salary-net-indicative-2026-v1",
  label: "Indicative 2026 simplified bands (planning only)",
  brackets: [
    { upToExclusive: 75_000, marginalRate: 0.3697 },
    { upToExclusive: Number.POSITIVE_INFINITY, marginalRate: 0.495 },
  ],
} as const;

/** Rough employee Zvw-style levy ceiling (planning). */
export const INDICATIVE_ZWV_CEILING_ANNUAL = 75_518;

/** Approximate combined employee health levy for modelling when “social” is enabled. */
export const INDICATIVE_ZWV_EMPLOYEE_RATE = 0.0575;

export function approximateGeneralTaxCredit(taxableAnnual: number): number {
  if (!Number.isFinite(taxableAnnual) || taxableAnnual <= 0) return 0;
  return Math.max(0, Math.min(2_650, 2_900 - taxableAnnual * 0.018));
}

export function approximateLabourTaxCredit(taxableAnnual: number): number {
  if (!Number.isFinite(taxableAnnual) || taxableAnnual <= 0) return 0;
  return Math.max(0, Math.min(4_000, 4_350 - taxableAnnual * 0.024));
}
