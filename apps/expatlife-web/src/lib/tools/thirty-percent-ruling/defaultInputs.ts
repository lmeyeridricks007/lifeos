import { normalizeThirtyPercentInputs } from "./normalizeInputs";
import type { ThirtyPercentCalculatorInputs } from "./types";

export const THIRTY_PERCENT_DEFAULT_INPUTS: ThirtyPercentCalculatorInputs = {
  salaryInputType: "annual",
  grossSalary: 65_000,
  calculationYear: 2026,
  age: 32,
  qualifyingMasters: false,
  monthsApplicable: 12,
  employerWillApply: true,
  employerApplyIntent: "yes",
  recruitedFromAbroad: "unsure",
  distanceRule150km: "unsure",
  priorThirtyPercentRuling: "unsure",
  changingEmployerInNL: "no",
  employeeCategory: "regular",
  startMonth: null,
  customAllowancePercent: null,
  employerAllowancePercent: null,
  includeFutureYearPreview: false,
  bonusAnnual: null,
  salaryIncludesHolidayAllowance: false,
};

export function mergeThirtyPercentInputs(partial: Partial<ThirtyPercentCalculatorInputs>): ThirtyPercentCalculatorInputs {
  return normalizeThirtyPercentInputs({ ...THIRTY_PERCENT_DEFAULT_INPUTS, ...partial } as ThirtyPercentCalculatorInputs);
}
