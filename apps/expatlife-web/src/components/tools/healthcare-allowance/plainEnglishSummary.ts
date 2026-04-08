import type { HealthcareAllowanceComputation, HealthcareAllowanceInputs } from "@/src/lib/tools/healthcare-allowance/types";
import { formatHealthcareEur, formatHealthcareEurMonthly } from "@/src/lib/tools/healthcare-allowance/format";

/**
 * Short, user-facing lines for the “What this likely means for you” panel (planning tone).
 */
export function buildPlainEnglishSummaryLines(
  result: HealthcareAllowanceComputation,
  inputs: HealthcareAllowanceInputs
): string[] {
  const lines: string[] = [];
  const year = inputs.taxYear;
  const partnerCombined =
    inputs.householdType === "with_toeslagpartner" && inputs.partnerIncludedForYear;
  const ratio = result.incomeThresholdUsed > 0 ? result.testIncomeAnnual / result.incomeThresholdUsed : 0;

  if (result.eligibilityStatus === "likely_not_eligible") {
    lines.push("On the answers you entered, this simplified check suggests you are likely outside the usual zorgtoeslag path in our model.");
  } else if (result.eligibilityStatus === "borderline") {
    lines.push("You are close to an income or asset limit, or something important is unclear — treat this as a sensitivity check, not a yes/no.");
  } else {
    lines.push("Against this simplified screen, you do not hit the automatic blocks we apply for income, assets, age, and insurance in the model.");
  }

  if (partnerCombined) {
    lines.push("Because you included a toeslagpartner, we combined income and assets and used the higher partner ceilings for the test.");
  }

  if (result.usedMissingIncomeAssumption) {
    lines.push(
      "You entered €0 combined income, so we applied a conservative high test income (a fraction of the ceiling) — enter real figures as soon as you can."
    );
  } else if (ratio > 0 && ratio < 0.45) {
    lines.push(`Your test income is comfortably below the ${year} planning threshold we use (€${result.incomeThresholdUsed.toLocaleString("en-NL")}).`);
  } else if (ratio >= 0.45 && ratio < 0.92 && result.eligibilityStatus !== "likely_not_eligible") {
    lines.push(
      `Your test income is in the mid-to-upper part of the window under the ${year} ceiling — the estimate tapers, so the monthly figure is more modest than the maximum.`
    );
  }

  if (result.monthlyAllowanceEstimate > 0 && result.eligibilityStatus !== "likely_not_eligible") {
    lines.push(
      `If this pattern held all year, your illustrative premium after the estimated allowance could be around ${formatHealthcareEurMonthly(result.monthlyNetPremiumEstimate)} (gross premium in the model minus estimated allowance).`
    );
  } else if (result.monthlyAllowanceEstimate <= 0) {
    lines.push(
      `With no estimated allowance in this run, your model premium stays at the gross line (${formatHealthcareEurMonthly(result.grossMonthlyPremium)}).`
    );
  }

  if (result.allowanceMonthsInYear > 0 && result.allowanceMonthsInYear < 12) {
    lines.push(
      `You are viewing a partial year (${result.allowanceMonthsInYear} month(s)) — the prorated annual allowance is ${formatHealthcareEur(result.annualAllowanceEstimateProrated)} in this model.`
    );
  }

  lines.push(
    "Official amounts come from Dienst Toeslagen — this tool only helps you plan and compare scenarios."
  );

  return lines;
}
