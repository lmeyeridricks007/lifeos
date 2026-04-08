import type {
  DoubleTaxAwarenessInput,
  FilingPriority,
  IncomeType,
  ResidencyAssessmentKey,
  ResidencyConfidence,
  RiskLevel,
  YesNoNotSure,
} from "./types";

export function clampInt(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.round(value)));
}

export function riskMax(a: RiskLevel, b: RiskLevel): RiskLevel {
  const rank: Record<RiskLevel, number> = { low: 1, medium: 2, high: 3 };
  return rank[a] >= rank[b] ? a : b;
}

export function formatPriority(priority: FilingPriority): string {
  if (priority === "high") return "High priority";
  if (priority === "medium") return "Medium priority";
  return "Lower priority";
}

export function toCountryLabel(code: string): string {
  if (!code || code === "none") return "No extra country selected";
  if (code === "other") return "Another country";
  return code;
}

export function triLabel(value: YesNoNotSure): string {
  if (value === "yes") return "Yes";
  if (value === "no") return "No";
  return "Not sure";
}

export function incomeTypeLabel(type: IncomeType): string {
  const map: Record<IncomeType, string> = {
    salary_dutch_employer: "Salary from Dutch employer",
    salary_foreign_employer: "Salary from foreign employer",
    salary_remote_work: "Remote work salary",
    freelance_self_employed: "Freelance / self-employed income",
    rental_income_nl: "Rental income from property in the Netherlands",
    rental_income_abroad: "Rental income from property abroad",
    dividends_investments: "Dividends, interest, or investments",
    foreign_business_income: "Foreign business income",
    pension_income: "Pension income",
    other_mixed: "Other / mixed income",
  };
  return map[type];
}

export function residencyHeadline(key: ResidencyAssessmentKey): string {
  const map: Record<ResidencyAssessmentKey, string> = {
    likely_dutch_resident: "Planning signal: likely Dutch tax residency",
    likely_non_resident: "Planning signal: likely not Dutch tax resident (Dutch-source income may still matter)",
    possible_dual_residency: "Directional outcome: possible dual-residency pattern — treaty tie-breaker may matter",
    insufficient_or_mixed_signals: "Mixed or incomplete signals — residency direction is unclear from these inputs",
  };
  return map[key];
}

export function formatResidencyConfidence(confidence: ResidencyConfidence): string {
  const map: Record<ResidencyConfidence, string> = {
    low: "low",
    medium: "medium",
    medium_high: "medium–high",
    high: "high",
  };
  return map[confidence];
}

export function calculateDaySignals(input: DoubleTaxAwarenessInput): { nlDays: number | null; otherDays: number | null } {
  const nl = input.approxDaysInNl != null ? clampInt(input.approxDaysInNl, 0, 366) : null;
  const other = input.approxDaysInOtherCountry != null ? clampInt(input.approxDaysInOtherCountry, 0, 366) : null;
  return { nlDays: nl, otherDays: other };
}
