import { DEFAULT_HEALTHCARE_ALLOWANCE_YEAR } from "./config/healthcareAllowanceRulesByYear";
import { healthcarePremiumDefaultsByYear } from "./config/healthcarePremiumDefaultsByYear";
import type { HealthcareAllowanceInputs } from "./types";

const y = DEFAULT_HEALTHCARE_ALLOWANCE_YEAR;
const prem = healthcarePremiumDefaultsByYear[y];

export const HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS: HealthcareAllowanceInputs = {
  taxYear: y,
  age: 30,
  insuranceStatus: "yes",
  insuranceStartMonth: 1,
  insuredFullYear: true,
  livingInNl: "yes",
  entitledToDutchInsurance: "yes",
  premiumMode: "average",
  monthlyPremiumManual: prem.averageBasicPremiumMonthly,
  householdType: "single",
  partnerIncludedForYear: false,
  partnerInsuredToo: null,
  incomeEntryMode: "annual",
  annualIncomeYou: 32_000,
  monthlyGrossYou: 2_800,
  annualIncomePartner: 0,
  monthlyGrossPartner: 0,
  incomeNotSure: false,
  assetsYouJan1: 15_000,
  assetsPartnerJan1: 0,
  allowanceMonthsThisYear: null,
  movingMidYear: false,
  yearEstimateMode: "both",
};

export function mergeHealthcareAllowanceInputs(partial: Partial<HealthcareAllowanceInputs> | null | undefined): HealthcareAllowanceInputs {
  if (!partial || typeof partial !== "object") return { ...HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS };
  return { ...HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS, ...partial, taxYear: partial.taxYear ?? HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS.taxYear };
}
