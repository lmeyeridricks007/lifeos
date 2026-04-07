import { THIRTY_PCT_RULES_2026, effectiveCustomAllowancePercent, normalizeEmployerAllowancePercent } from "./assumptions";
import type { ThirtyPercentCalculatorInputs, ThirtyPercentYearEstimate } from "./types";

export function clampMonths(m: number): number {
  if (!Number.isFinite(m)) return 12;
  return Math.min(12, Math.max(1, Math.round(m)));
}

export function statutoryPercentForYear(year: number): number {
  return year >= 2027 ? THIRTY_PCT_RULES_2026.facilityPercentFrom2027Preview : THIRTY_PCT_RULES_2026.facilityPercentThrough2026;
}

export function applicableThresholdAnnual(age: number, qualifyingMasters: boolean): number {
  if (age < 30 && qualifyingMasters) return THIRTY_PCT_RULES_2026.thresholdUnder30MastersAnnual;
  return THIRTY_PCT_RULES_2026.thresholdStandardAnnual;
}

export function resolveAllowancePercent(statutory: number, customPercent?: number | null): number {
  const normalized = normalizeEmployerAllowancePercent(customPercent ?? null, statutory);
  if (normalized == null) return statutory;
  return Math.min(normalized / 100, statutory);
}

export function buildYearEstimate(args: {
  label: string;
  year: number;
  grossAnnual: number;
  age: number;
  qualifyingMasters: boolean;
  monthsApplicable: number;
  inputs: ThirtyPercentCalculatorInputs;
}): ThirtyPercentYearEstimate {
  const months = clampMonths(args.monthsApplicable);
  const monthsFactor = months / 12;
  const threshold = applicableThresholdAnnual(args.age, args.qualifyingMasters);
  const meetsSalaryThreshold = args.grossAnnual >= threshold;
  const cappedBase = Math.min(args.grossAnnual, THIRTY_PCT_RULES_2026.salaryCapAnnual);
  const isSalaryCapped = args.grossAnnual > THIRTY_PCT_RULES_2026.salaryCapAnnual;
  const statutory = statutoryPercentForYear(args.year);
  const custom = effectiveCustomAllowancePercent(args.inputs);
  const allowancePercentApplied = resolveAllowancePercent(statutory, custom);
  const maxUntaxedAllowanceAnnual = cappedBase * allowancePercentApplied * monthsFactor;
  const taxableSalaryEstimateAnnual = Math.max(0, args.grossAnnual - maxUntaxedAllowanceAnnual);
  const monthlyUntaxedAllowance = maxUntaxedAllowanceAnnual / 12;
  const monthlyTaxableSalaryEstimate = taxableSalaryEstimateAnnual / 12;

  return {
    label: args.label,
    facilityPercent: statutory,
    applicableThresholdAnnual: threshold,
    meetsSalaryThreshold,
    grossAnnual: args.grossAnnual,
    cappedBaseAnnual: cappedBase,
    isSalaryCapped,
    monthsApplicable: months,
    monthsFactor,
    allowancePercentApplied,
    maxUntaxedAllowanceAnnual,
    taxableSalaryEstimateAnnual,
    monthlyUntaxedAllowance,
    monthlyTaxableSalaryEstimate,
  };
}
