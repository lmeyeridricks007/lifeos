import type { DoubleTaxAwarenessInput, IncomeType, RiskLevel } from "./types";

export const DUTCH_RESIDENCY_SIGNAL_WEIGHTS = {
  registeredInNlBrp: 3,
  monthsInNetherlandsMajority: 3,
  nlDaysOver183: 4,
  permanentHomeNl: 2,
  familyMostlyInNl: 2,
  mainWorkPhysicallyInNl: 2,
  planningToStayLongerThanYear: 2,
  employerInNl: 1,
  payrollInNl: 1,
} as const;

export const FOREIGN_OR_MIXED_SIGNAL_WEIGHTS = {
  permanentHomeAbroad: 2,
  monthsAbroadMajority: 3,
  otherDaysOver183: 4,
  foreignEmployer: 2,
  foreignPayroll: 2,
  mixedWorkLocations: 2,
  commutingCrossBorder: 2,
  foreignIncomeTypes: 2,
} as const;

export const HIGH_COMPLEXITY_INCOME_TYPES: IncomeType[] = [
  "freelance_self_employed",
  "foreign_business_income",
  "pension_income",
  "other_mixed",
];

export const FOREIGN_LINKED_INCOME_TYPES: IncomeType[] = [
  "salary_foreign_employer",
  "salary_remote_work",
  "rental_income_abroad",
  "dividends_investments",
  "foreign_business_income",
  "pension_income",
  "other_mixed",
];

export function riskFromScore(score: number): RiskLevel {
  if (score >= 8) return "high";
  if (score >= 4) return "medium";
  return "low";
}

export function hasForeignLinkedIncome(input: DoubleTaxAwarenessInput): boolean {
  return input.incomeTypes.some((type) => FOREIGN_LINKED_INCOME_TYPES.includes(type));
}
