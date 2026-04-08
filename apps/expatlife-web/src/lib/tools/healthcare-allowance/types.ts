import type { HealthcareAllowanceTaxYear } from "./config/healthcareAllowanceRulesByYear";

export type InsuranceStatus = "yes" | "no" | "starting_soon";
export type HouseholdType = "single" | "with_toeslagpartner";
export type IncomeEntryMode = "annual" | "monthly_gross";
export type EntitledInsurance = "yes" | "no" | "unsure";
export type LivingNl = "yes" | "no";
export type PremiumMode = "average" | "manual";
export type YearEstimateMode = "remaining" | "full_year" | "both";

export type LikelyEligibility = "likely_eligible" | "borderline" | "likely_not_eligible";

export type HealthcareAllowanceInputs = {
  taxYear: HealthcareAllowanceTaxYear;
  age: number;
  insuranceStatus: InsuranceStatus;
  insuranceStartMonth: number;
  insuredFullYear: boolean;
  livingInNl: LivingNl;
  entitledToDutchInsurance: EntitledInsurance;
  premiumMode: PremiumMode;
  monthlyPremiumManual: number;
  householdType: HouseholdType;
  partnerIncludedForYear: boolean;
  partnerInsuredToo: boolean | null;
  incomeEntryMode: IncomeEntryMode;
  annualIncomeYou: number;
  monthlyGrossYou: number;
  annualIncomePartner: number;
  monthlyGrossPartner: number;
  incomeNotSure: boolean;
  assetsYouJan1: number;
  assetsPartnerJan1: number;
  allowanceMonthsThisYear: number | null;
  movingMidYear: boolean;
  yearEstimateMode: YearEstimateMode;
};

export type SummaryCard = {
  id: string;
  label: string;
  value: string;
  hint?: string;
};

export type HealthcareAllowanceComputation = {
  configYear: HealthcareAllowanceTaxYear;
  /** Same as `likelyEligibility` — primary name for consumers. */
  eligibilityStatus: LikelyEligibility;
  eligibilityReasons: string[];
  incomeThresholdUsed: number;
  assetThresholdUsed: number;
  combinedIncomeUsed: number;
  combinedAssetsUsed: number;
  /** Income after missing-income or uncertainty rules (for screening and taper). */
  testIncomeAnnual: number;
  testAssetsTotal: number;
  usedMissingIncomeAssumption: boolean;
  monthlyAllowanceEstimate: number;
  annualAllowanceEstimateProrated: number;
  annualAllowanceEstimateFullYear: number;
  monthlyNetPremiumEstimate: number;
  annualNetPremiumEstimateProrated: number;
  annualNetPremiumEstimateFullYear: number;
  grossMonthlyPremium: number;
  allowanceMonthsInYear: number;
  riskFlags: string[];
  recommendationText: string;
  /** Validation errors and warnings from `validateHealthcareAllowanceInputs`. */
  validationNotes: string[];

  /** @deprecated Use `eligibilityStatus`. */
  likelyEligibility: LikelyEligibility;
  /** @deprecated Use `monthlyAllowanceEstimate`. */
  estimatedMonthlyAllowanceFullRate: number;
  /** @deprecated Use `monthlyAllowanceEstimate`. */
  estimatedMonthlyAllowance: number;
  /** @deprecated Use `annualAllowanceEstimateProrated`. */
  estimatedAnnualAllowanceProrated: number;
  /** @deprecated Use `annualAllowanceEstimateFullYear`. */
  estimatedAnnualAllowanceFullYear: number;
  /** @deprecated Use `monthlyNetPremiumEstimate`. */
  estimatedMonthlyNetPremium: number;
  /** @deprecated Use `annualNetPremiumEstimateProrated`. */
  estimatedAnnualNetPremiumProrated: number;
  /** @deprecated Use `annualNetPremiumEstimateFullYear`. */
  estimatedAnnualNetPremiumFullYear: number;

  guidanceActions: string[];
  summaryCards: SummaryCard[];
  whatAffectsMost: string[];
  repaymentRiskNotes: string[];
};

export type HealthcareAllowanceExportPayload = {
  siteName: string;
  generatedAtIso: string;
  disclaimer: string;
  calculatorCanonicalUrl: string;
  inputs: HealthcareAllowanceInputs;
  result: HealthcareAllowanceComputation;
  /** Optional plain-English bullets (same as on-screen “What this likely means”). */
  plainEnglishSummaryLines?: string[];
};
