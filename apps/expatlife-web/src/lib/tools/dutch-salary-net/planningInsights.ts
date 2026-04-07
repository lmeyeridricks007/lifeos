import type { SalaryNetComputation } from "./types";

/**
 * Rule-based planning copy — not market benchmarking or legal advice.
 */
export function buildPlanningInsights(result: SalaryNetComputation): string[] {
  const lines: string[] = [];
  const { grossAnnual, netAnnual, rulingPercentApplied, monthlyNetDeltaWithVsWithoutRuling, inputs } = result;
  const pensionPct = inputs.pensionEmployeePercent;
  const hasRuling = rulingPercentApplied > 0;

  if (grossAnnual > 0) {
    const takeHomeRatio = netAnnual / grossAnnual;
    if (takeHomeRatio >= 0.65) {
      lines.push(
        "For this gross level, the indicative net share of your package looks relatively strong — still confirm with payroll because credits and deductions vary."
      );
    } else if (takeHomeRatio < 0.52) {
      lines.push(
        "A large share of this package goes to tax and modelled deductions in this scenario — small changes to pension, social, or ruling assumptions can move net meaningfully."
      );
    }
  }

  if (hasRuling && Math.abs(monthlyNetDeltaWithVsWithoutRuling) >= 150) {
    lines.push(
      "The 30% ruling creates a meaningful uplift in this scenario: most of that comes from lower taxable wages on the same gross, not from a higher salary offer."
    );
  }

  if (hasRuling) {
    lines.push(
      "If the ruling is not granted or not applied on payroll, take-home changes materially — validate with HR and the eligibility tool before you sign."
    );
  }

  if (pensionPct != null && pensionPct >= 8) {
    lines.push(
      "Pension % is set high in this model; it materially reduces taxable base and net cash today. Check your actual plan rules and employer match."
    );
  }

  if (inputs.includeSocialContributions) {
    lines.push("Social (Zvw-style) is included in this estimate — turning it off would increase indicative net but may not match your payslip.");
  }

  if (!inputs.includeGeneralTaxCredit || !inputs.includeLabourTaxCredit) {
    lines.push("Some approximate tax credits are turned off — real net is often lower when credits apply.");
  }

  return lines.slice(0, 5);
}
