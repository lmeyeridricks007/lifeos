/**
 * Barrel: childcare config + schedule defaults + backward-compatible names.
 * Prefer importing from `./config` or `./childcareHelpers` in new code.
 */
import type { ChildcareTaxYear } from "@/src/types/tools/childcare";
import {
  CHILDCARE_BENEFIT_PLANNING_META,
  childcareBenefitBandsByYear,
  childcareProviderAnchorsByCity,
  childcareRatesByYear,
  childcareReimbursableHoursCapByYear,
  childcareSetupAssumptions,
  getProviderAnchorHourlyEur,
} from "@/src/lib/tools/childcare/config";
import {
  benefitEligibilityMultiplier,
  DEFAULT_HOURS_PER_DAY,
  getChildcareReimbursementPercent,
  monthlyHoursFactor,
} from "@/src/lib/tools/childcare/childcareHelpers";

export {
  CHILDCARE_BENEFIT_PLANNING_META,
  childcareBenefitBandsByYear,
  childcareProviderAnchorsByCity,
  childcareRatesByYear,
  childcareReimbursableHoursCapByYear,
  childcareSetupAssumptions,
};

/** @deprecated Use `childcareRatesByYear` or `getChildcareOfficialCap`. */
export const CHILDCARE_OFFICIAL_CAPS_BY_YEAR = childcareRatesByYear;

export const MAX_REIMBURSABLE_HOURS_PER_CHILD_MONTH = childcareReimbursableHoursCapByYear[2026];

export { DEFAULT_HOURS_PER_DAY, monthlyHoursFactor, benefitEligibilityMultiplier, getProviderAnchorHourlyEur };

/** @deprecated Use `getProviderAnchorHourlyEur`. */
export const getModelHourlyRateEur = getProviderAnchorHourlyEur;

/**
 * @deprecated Use `getChildcareReimbursementPercent(year, income, childIndex, householdType)`.
 * Returns first-child / couple planning % for display parity with older UI.
 */
export function lookupReimbursementFraction(annualIncomeEur: number, year: ChildcareTaxYear): number {
  return getChildcareReimbursementPercent(year, annualIncomeEur, 0, "couple");
}
