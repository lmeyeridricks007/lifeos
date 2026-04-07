import type { ThirtyPercentCalculatorInputs } from "./types";

export function grossAnnualFromInputs(inputs: ThirtyPercentCalculatorInputs): number {
  const base = inputs.salaryInputType === "monthly" ? inputs.grossSalary * 12 : inputs.grossSalary;
  const bonus = inputs.bonusAnnual != null && Number.isFinite(inputs.bonusAnnual) ? Math.max(0, inputs.bonusAnnual) : 0;
  return base + bonus;
}
