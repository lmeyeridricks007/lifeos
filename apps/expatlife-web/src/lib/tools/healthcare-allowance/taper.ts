import type { HealthcareAllowanceTaperConfig } from "./config/healthcareAllowanceRulesByYear";

export type PlateauLinearTaperParams = {
  testIncomeAnnual: number;
  incomeThreshold: number;
  maxMonthlyAllowance: number;
  taper: HealthcareAllowanceTaperConfig;
};

/**
 * Plateau then linear taper (planning-only):
 * - From €0 income up to `plateauIncomeFractionOfThreshold × threshold`, the estimate stays at `maxMonthlyAllowance`.
 * - Between that plateau edge and the threshold, the allowance falls linearly to €0.
 * - At or above the threshold, allowance is €0.
 *
 * This keeps “well below threshold” estimates at the illustrative maximum longer than a single straight line from (0,max) to (threshold,0),
 * while still collapsing to zero by the income ceiling — transparent and easy to tune per year in config.
 */
export function applyPlateauThenLinearTaper(params: PlateauLinearTaperParams): number {
  const { testIncomeAnnual, incomeThreshold, maxMonthlyAllowance, taper } = params;
  const income = Number.isFinite(testIncomeAnnual) ? Math.max(0, testIncomeAnnual) : 0;
  const thr = Number.isFinite(incomeThreshold) && incomeThreshold > 0 ? incomeThreshold : 0;
  const maxM = Number.isFinite(maxMonthlyAllowance) && maxMonthlyAllowance > 0 ? maxMonthlyAllowance : 0;

  if (thr <= 0 || maxM <= 0) return 0;
  if (income >= thr) return 0;

  const p = Math.min(0.999, Math.max(0, taper.plateauIncomeFractionOfThreshold));
  const plateauEdge = p * thr;
  if (income <= plateauEdge) return maxM;

  const span = thr - plateauEdge;
  if (span <= 0) return 0;
  const t = (income - plateauEdge) / span;
  return maxM * (1 - t);
}
