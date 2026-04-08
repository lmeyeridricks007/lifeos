import { healthcareWarningsConfig } from "./config/healthcareWarningsConfig";
import type { HealthcareAllowanceInputs } from "./types";

export function buildWhatAffectsMost(inputs: HealthcareAllowanceInputs): string[] {
  const items = [
    "Annual income (yours and, with a toeslagpartner, your partner’s)",
    "Whether a toeslagpartner is included for the allowance year",
    "Savings and investments counted on 1 January (not your monthly cash flow)",
    "Dutch basic insurance status and how many months you are insured this year",
    "The premium you compare against (average vs your own policy)",
  ];
  if (inputs.incomeNotSure) {
    items.push("Income uncertainty — we stress-test higher using the configured uplift in rules");
  }
  return items;
}

export function buildRepaymentRiskNotes(inputs: HealthcareAllowanceInputs): string[] {
  const notes = [...healthcareWarningsConfig.repaymentStandard];
  if (inputs.insuranceStatus === "starting_soon" || !inputs.insuredFullYear) {
    notes.push(
      "Part-year insurance changes both allowance months and how annual totals add up — align months with your real policy dates."
    );
  }
  return notes;
}

export function buildGuidanceActions(inputs: HealthcareAllowanceInputs): string[] {
  const actions = [
    "Arrange Dutch basic health insurance if you are required to hold it.",
    "Collect a realistic annual income picture (payslips, contract, or adviser input).",
    "Confirm toeslagpartner rules for your household and whether combined thresholds apply.",
    "Review 1 January assets that count toward the allowance test (not day-to-day balances only).",
    "Apply or update your details through Dienst Toeslagen when you are ready.",
  ];
  if (inputs.incomeNotSure) {
    actions.push("Re-run this estimate once you have firmer income figures.");
  }
  return actions;
}
