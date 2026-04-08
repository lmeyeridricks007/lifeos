import type { ChildcareChildInput, ChildcareEstimatorInput } from "@/src/types/tools/childcare";

export type ChildcareChildFormIssue = {
  childId: string;
  label: string;
  message: string;
};

/** Friendly checks for incomplete UI state (engine still applies fallbacks). */
export function getChildcareFormChildIssues(children: ChildcareChildInput[]): ChildcareChildFormIssue[] {
  const out: ChildcareChildFormIssue[] = [];
  for (const c of children) {
    if (c.hoursInputMode === "days_per_week" && c.daysPerWeek <= 0) {
      out.push({
        childId: c.id,
        label: c.label,
        message: "Add at least one care day per week, or switch to hours per month.",
      });
    }
    if (c.hoursInputMode === "hours_per_month" && (c.hoursPerMonth == null || c.hoursPerMonth <= 0)) {
      out.push({
        childId: c.id,
        label: c.label,
        message: "Enter monthly hours, or switch to days per week.",
      });
    }
    if (
      c.rateMode === "manual" &&
      (c.manualHourlyRateEur == null || !Number.isFinite(c.manualHourlyRateEur) || c.manualHourlyRateEur <= 0)
    ) {
      out.push({
        childId: c.id,
        label: c.label,
        message: "Enter your quoted hourly rate, or choose model rate.",
      });
    }
  }
  return out;
}

export function childcareIncomeLooksMissing(input: ChildcareEstimatorInput): boolean {
  const v = input.benefit.annualHouseholdIncomeEur;
  return !Number.isFinite(v) || v <= 0;
}
