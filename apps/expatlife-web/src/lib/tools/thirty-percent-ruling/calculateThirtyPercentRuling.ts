/**
 * Orchestrator: 30% ruling planning estimates (V1 API + V2 net comparison).
 * Formulas live in allowance / eligibility / netComparison / assumptions.
 */

import { THIRTY_PCT_RULES_2026, DEFAULT_INDICATIVE_TAX_MODEL_2026, type IndicativeTaxModel } from "./assumptions";
import { buildYearEstimate } from "./allowance";
import type {
  PrimaryEligibilityStatus,
  ThirtyPercentCalculatorInputs,
  ThirtyPercentCalculatorResult,
  ThirtyPercentEligibilityBand,
} from "./types";
import { buildPrimaryEligibilityOutcome } from "./primaryEligibility";
import { normalizeThirtyPercentInputs } from "./normalizeInputs";
import { buildIndicativeNetComparison } from "./netComparison";

export { THIRTY_PCT_RULES_2026 } from "./assumptions";
export type {
  ThirtyPercentCalculatorInputs,
  ThirtyPercentCalculatorResult,
  ThirtyPercentYearEstimate,
  ThirtyPercentEligibilityBand,
  IndicativeNetComparison,
  ThirtyRulingScenario,
  DownloadSummaryPayload,
  PrimaryEligibilityOutcome,
  PrimaryEligibilityStatus,
  TriStateAnswer,
  EmployeeCategory,
} from "./types";
export { eligibilityBandLabel } from "./eligibility";
import { grossAnnualFromInputs } from "./gross";

export { grossAnnualFromInputs };

export type CalculateThirtyPercentOptions = {
  /** When true (default), attach indicative net comparison using simplified tax model. */
  includeNetComparison?: boolean;
  taxModel?: IndicativeTaxModel;
};

function legacyBandFromPrimary(
  status: PrimaryEligibilityStatus,
  meetsThreshold: boolean,
  salaryNormWaived: boolean
): ThirtyPercentEligibilityBand {
  switch (status) {
    case "likely_eligible":
      return "likely_eligible";
    case "possibly_eligible":
    case "insufficient_information":
      return "possibly_eligible";
    case "unlikely_eligible":
      if (!meetsThreshold && !salaryNormWaived) return "threshold_not_met";
      return "unlikely_eligible";
    default:
      return "possibly_eligible";
  }
}

export function calculateThirtyPercentRuling(
  inputs: ThirtyPercentCalculatorInputs,
  options?: CalculateThirtyPercentOptions
): ThirtyPercentCalculatorResult | null {
  const includeNet = options?.includeNetComparison !== false;
  const taxModel = options?.taxModel ?? DEFAULT_INDICATIVE_TAX_MODEL_2026;

  const norm = normalizeThirtyPercentInputs(inputs);

  const grossAnnual = grossAnnualFromInputs(norm);
  if (!Number.isFinite(grossAnnual) || grossAnnual <= 0) return null;

  const year = Number.isFinite(norm.calculationYear) ? norm.calculationYear : 2026;
  const primary = buildYearEstimate({
    label: year >= 2027 ? String(year) : `${year} (30% rules)`,
    year,
    grossAnnual,
    age: norm.age,
    qualifyingMasters: norm.qualifyingMasters,
    monthsApplicable: norm.monthsApplicable,
    inputs: norm,
  });

  const warnings: string[] = [];
  if (norm.salaryIncludesHolidayAllowance) {
    warnings.push(
      "You indicated your salary may already include holiday allowance. Official wage norms can differ — confirm how your payroll reports taxable wages for the ruling."
    );
  }
  if (primary.monthsApplicable < 12) {
    warnings.push(
      `Partial year: the untaxed allowance is prorated over ${primary.monthsApplicable} month(s) in this estimate.`
    );
  }
  if (primary.isSalaryCapped) {
    warnings.push(
      `Salary exceeds the ${THIRTY_PCT_RULES_2026.salaryCapAnnual.toLocaleString("en-NL")} cap used for this facility — allowance is calculated on the capped amount only.`
    );
  }
  if (year === 2026 && !norm.includeFutureYearPreview) {
    warnings.push('Turn on “2027 preview” under Advanced to see how a 27% facility percentage could change the estimate.');
  }
  const customUsed = norm.customAllowancePercent ?? norm.employerAllowancePercent;
  if (customUsed != null) {
    warnings.push("Employers may apply a lower tax-free allowance than the statutory maximum — your payroll may differ.");
  }
  warnings.push(
    "Final eligibility, approval, and payslip treatment depend on the Belastingdienst, your employer, and your specific facts."
  );

  const primaryEligibility = buildPrimaryEligibilityOutcome(norm, primary);
  const salaryNormWaived = norm.employeeCategory === "researcher" || norm.employeeCategory === "doctor_training";
  const eligibilityBand = legacyBandFromPrimary(
    primaryEligibility.status,
    primary.meetsSalaryThreshold,
    salaryNormWaived
  );

  let preview2027 = undefined;
  if (norm.includeFutureYearPreview && year < 2027) {
    preview2027 = buildYearEstimate({
      label: "2027 preview (27% facility)",
      year: 2027,
      grossAnnual,
      age: norm.age,
      qualifyingMasters: norm.qualifyingMasters,
      monthsApplicable: norm.monthsApplicable,
      inputs: norm,
    });
  }

  let netComparison = undefined;
  if (includeNet) {
    netComparison = buildIndicativeNetComparison(grossAnnual, primary, taxModel);
  }

  return { eligibilityBand, primaryEligibility, warnings, primary, preview2027, netComparison };
}
