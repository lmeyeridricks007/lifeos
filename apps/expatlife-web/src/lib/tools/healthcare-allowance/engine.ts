import {
  DEFAULT_HEALTHCARE_ALLOWANCE_YEAR,
  healthcareAllowanceRulesByYear,
  isSupportedHealthcareAllowanceYear,
  type HealthcareAllowanceRulesYear,
  type HealthcareAllowanceTaxYear,
} from "./config/healthcareAllowanceRulesByYear";
import { healthcarePremiumDefaultsByYear } from "./config/healthcarePremiumDefaultsByYear";
import { healthcareWarningsConfig } from "./config/healthcareWarningsConfig";
import { applyPlateauThenLinearTaper } from "./taper";
import type { HealthcareAllowanceInputs, LikelyEligibility } from "./types";

export type HealthcareEligibilityCheck = {
  eligibilityStatus: LikelyEligibility;
  eligibilityReasons: string[];
  hardFail: boolean;
};

export function getHealthcareAllowanceRules(year: number): HealthcareAllowanceRulesYear | null {
  if (!isSupportedHealthcareAllowanceYear(year)) return null;
  return healthcareAllowanceRulesByYear[year];
}

export function getHealthcarePremiumDefaultsForYear(year: number) {
  return healthcarePremiumDefaultsByYear[year as HealthcareAllowanceTaxYear] ?? null;
}

export function thresholdsForHousehold(
  input: HealthcareAllowanceInputs,
  rules: HealthcareAllowanceRulesYear
): { incomeThreshold: number; assetThreshold: number; usePartnerAggregation: boolean } {
  const usePartnerAggregation = input.householdType === "with_toeslagpartner" && input.partnerIncludedForYear;
  return {
    incomeThreshold: usePartnerAggregation ? rules.partnerMaxCombinedIncome : rules.singleMaxIncome,
    assetThreshold: usePartnerAggregation ? rules.partnerMaxCombinedAssets : rules.singleMaxAssets,
    usePartnerAggregation,
  };
}

function monthCountFromInsuranceStart(startMonth: number): number {
  const m = Math.min(12, Math.max(1, Math.round(startMonth)));
  return Math.max(0, Math.min(12, 13 - m));
}

/**
 * Eligible allowance months in the calendar year (0–12), after clamping override to 1–12 when set.
 */
export function resolveEligibleAllowanceMonths(input: HealthcareAllowanceInputs): number {
  if (input.allowanceMonthsThisYear != null) {
    const raw = Math.round(input.allowanceMonthsThisYear);
    return Math.max(1, Math.min(12, raw));
  }
  if (input.insuranceStatus === "no") return 0;
  if (input.insuredFullYear) return 12;
  return monthCountFromInsuranceStart(input.insuranceStartMonth);
}

export function combinedReportedIncome(input: HealthcareAllowanceInputs): number {
  const you = input.incomeEntryMode === "monthly_gross" ? input.monthlyGrossYou * 12 : input.annualIncomeYou;
  const partner =
    input.householdType === "with_toeslagpartner" && input.partnerIncludedForYear
      ? input.incomeEntryMode === "monthly_gross"
        ? input.monthlyGrossPartner * 12
        : input.annualIncomePartner
      : 0;
  return you + partner;
}

export function combinedReportedAssets(input: HealthcareAllowanceInputs): number {
  const you = input.assetsYouJan1;
  const partner =
    input.householdType === "with_toeslagpartner" && input.partnerIncludedForYear ? input.assetsPartnerJan1 : 0;
  return you + partner;
}

export type TestIncomeAssetContext = {
  reportedIncomeAnnual: number;
  reportedAssetsTotal: number;
  testIncomeAnnual: number;
  testAssetsTotal: number;
  usedMissingIncomeAssumption: boolean;
};

/**
 * Derives test income/assets for screening and taper. Missing income (combined reported = 0) uses a conservative
 * fraction of the income threshold — planning-only, see rules config.
 */
export function buildTestIncomeAndAssets(
  input: HealthcareAllowanceInputs,
  rules: HealthcareAllowanceRulesYear,
  incomeThreshold: number
): TestIncomeAssetContext {
  const reportedIncomeAnnual = combinedReportedIncome(input);
  const reportedAssetsTotal = combinedReportedAssets(input);

  let usedMissingIncomeAssumption = false;
  let testIncomeAnnual = reportedIncomeAnnual;

  if (reportedIncomeAnnual === 0) {
    usedMissingIncomeAssumption = true;
    testIncomeAnnual = incomeThreshold * rules.missingIncomeTestIncomeFractionOfThreshold;
  } else if (input.incomeNotSure) {
    testIncomeAnnual = reportedIncomeAnnual * rules.incomeUncertaintyUplift;
  }

  const testAssetsTotal = reportedAssetsTotal;
  return { reportedIncomeAnnual, reportedAssetsTotal, testIncomeAnnual, testAssetsTotal, usedMissingIncomeAssumption };
}

/** Core eligibility screen when thresholds and test income/assets are already known. */
export function evaluateHealthcareAllowanceAgainstThresholds(
  input: HealthcareAllowanceInputs,
  rules: HealthcareAllowanceRulesYear,
  testIncomeAnnual: number,
  testAssetsTotal: number,
  incomeThreshold: number,
  assetThreshold: number
): HealthcareEligibilityCheck {
  const reasons: string[] = [];
  let hardFail = false;

  if (input.age < rules.minAgeForEstimate) {
    hardFail = true;
    reasons.push(`Zorgtoeslag normally requires you to be ${rules.minAgeForEstimate} or older.`);
  }

  if (input.insuranceStatus === "no") {
    hardFail = true;
    reasons.push("Without Dutch basic health insurance in the benefit period, healthcare allowance is generally not available.");
  }

  if (input.livingInNl === "no") {
    hardFail = true;
    reasons.push("Living outside the Netherlands usually disqualifies you from Dutch healthcare allowance.");
  }

  if (input.entitledToDutchInsurance === "no") {
    hardFail = true;
    reasons.push("If you are not entitled to Dutch basic insurance, this allowance model treats you as outside the normal zorgtoeslag path.");
  }

  if (input.entitledToDutchInsurance === "unsure") {
    reasons.push(healthcareWarningsConfig.unsureInsuranceEntitlement);
  }

  if (input.insuranceStatus === "starting_soon") {
    reasons.push(healthcareWarningsConfig.insuranceStartingSoon);
  }

  if (!hardFail && testIncomeAnnual >= incomeThreshold) {
    hardFail = true;
    reasons.push(
      `Your model income is at or above the planning income threshold we use (€${incomeThreshold.toLocaleString("en-NL")}), so this tool treats you as likely not income-eligible.`
    );
  }

  if (!hardFail && testAssetsTotal >= assetThreshold) {
    hardFail = true;
    reasons.push(
      `Combined 1 January assets in the model reach or exceed the asset ceiling we use (€${assetThreshold.toLocaleString("en-NL")}).`
    );
  }

  if (!hardFail && testAssetsTotal >= assetThreshold * rules.borderline.assetFractionOfThreshold) {
    reasons.push("Assets are close to the model ceiling — small changes could remove eligibility.");
  }

  if (!hardFail && testIncomeAnnual >= incomeThreshold * rules.borderline.incomeFractionOfThreshold) {
    reasons.push("Income is close to the model ceiling — allowance estimates taper sharply here and small raises can remove eligibility.");
  }

  let eligibilityStatus: LikelyEligibility = "likely_eligible";
  if (hardFail) {
    eligibilityStatus = "likely_not_eligible";
  } else if (
    testIncomeAnnual >= incomeThreshold * rules.borderline.incomeFractionOfThreshold ||
    testAssetsTotal >= assetThreshold * rules.borderline.assetFractionOfThreshold ||
    input.entitledToDutchInsurance === "unsure"
  ) {
    eligibilityStatus = "borderline";
  }

  if (!hardFail && eligibilityStatus === "likely_eligible") {
    reasons.push(
      "Against this simplified screen, income and assets sit below the model thresholds and insurance or timing assumptions do not trigger an automatic block."
    );
  }

  return { eligibilityStatus, eligibilityReasons: reasons, hardFail };
}

/**
 * Monthly allowance from the plateau + linear taper model. Returns 0 if `hardFail` (screening failed).
 */
export function computeMonthlyAllowanceFromTaperModel(
  testIncomeAnnual: number,
  incomeThreshold: number,
  rules: HealthcareAllowanceRulesYear,
  hardFail: boolean
): number {
  if (hardFail) return 0;
  return applyPlateauThenLinearTaper({
    testIncomeAnnual,
    incomeThreshold,
    maxMonthlyAllowance: rules.maxMonthlyAllowance,
    taper: rules.taper,
  });
}

/**
 * Full eligibility check for a calendar year: loads rules, derives thresholds and test income/assets.
 * Does not run numeric validation — use with sanitized inputs or alongside `validateHealthcareAllowanceInputs`.
 */
export function checkHealthcareAllowanceEligibility(
  input: HealthcareAllowanceInputs,
  year: HealthcareAllowanceTaxYear
): HealthcareEligibilityCheck {
  const y = isSupportedHealthcareAllowanceYear(year) ? year : DEFAULT_HEALTHCARE_ALLOWANCE_YEAR;
  const rules = healthcareAllowanceRulesByYear[y];
  const { incomeThreshold, assetThreshold } = thresholdsForHousehold(input, rules);
  const ctx = buildTestIncomeAndAssets(input, rules, incomeThreshold);
  return evaluateHealthcareAllowanceAgainstThresholds(
    input,
    rules,
    ctx.testIncomeAnnual,
    ctx.testAssetsTotal,
    incomeThreshold,
    assetThreshold
  );
}

/**
 * Monthly allowance estimate for the year (rules + thresholds + taper). Ignores URL/storage validation — planning snapshot only.
 */
export function estimateHealthcareAllowanceAmount(input: HealthcareAllowanceInputs, year: HealthcareAllowanceTaxYear): number {
  const y = isSupportedHealthcareAllowanceYear(year) ? year : DEFAULT_HEALTHCARE_ALLOWANCE_YEAR;
  const rules = healthcareAllowanceRulesByYear[y];
  const { incomeThreshold, assetThreshold } = thresholdsForHousehold(input, rules);
  const ctx = buildTestIncomeAndAssets(input, rules, incomeThreshold);
  const e = evaluateHealthcareAllowanceAgainstThresholds(
    input,
    rules,
    ctx.testIncomeAnnual,
    ctx.testAssetsTotal,
    incomeThreshold,
    assetThreshold
  );
  return computeMonthlyAllowanceFromTaperModel(ctx.testIncomeAnnual, incomeThreshold, rules, e.hardFail);
}

export function prorateHealthcareAllowance(monthlyAmount: number, eligibleMonths: number): number {
  const m = Number.isFinite(eligibleMonths) ? Math.round(eligibleMonths) : 0;
  const clamped = Math.max(0, Math.min(12, m));
  const monthly = Number.isFinite(monthlyAmount) && monthlyAmount > 0 ? monthlyAmount : 0;
  return monthly * clamped;
}

export function estimateNetPremium(monthlyPremium: number, monthlyAllowance: number): number {
  const prem = Number.isFinite(monthlyPremium) ? monthlyPremium : 0;
  const allow = Number.isFinite(monthlyAllowance) && monthlyAllowance > 0 ? monthlyAllowance : 0;
  if (prem < 0) return 0;
  return Math.max(0, prem - allow);
}

export function getHealthcareRiskFlags(
  input: HealthcareAllowanceInputs,
  result: {
    eligibilityStatus: LikelyEligibility;
    usedMissingIncomeAssumption: boolean;
    /** Strict validation errors (e.g. negative or non-finite numbers) — engine may zero allowance. */
    validationErrorCount: number;
  }
): string[] {
  const flags: string[] = [];
  if (result.validationErrorCount > 0) {
    flags.push(healthcareWarningsConfig.validationAdjusted);
  }
  if (result.usedMissingIncomeAssumption) {
    flags.push(healthcareWarningsConfig.missingIncomeConservative);
  }
  if (input.incomeNotSure && !result.usedMissingIncomeAssumption) {
    flags.push(healthcareWarningsConfig.incomeUncertainty);
  }
  if (result.eligibilityStatus === "borderline") {
    flags.push(healthcareWarningsConfig.borderlineStatus);
  }
  if (input.movingMidYear && !input.insuredFullYear) {
    flags.push(healthcareWarningsConfig.midYearMove);
  }
  return flags;
}

export function buildRecommendationText(params: {
  eligibilityStatus: LikelyEligibility;
  monthlyAllowanceEstimate: number;
  usedMissingIncomeAssumption: boolean;
}): string {
  const { eligibilityStatus, monthlyAllowanceEstimate, usedMissingIncomeAssumption } = params;
  if (usedMissingIncomeAssumption) {
    return "Enter your real annual or monthly income to replace the conservative missing-income assumption. Until then, treat every figure as a lower bound on allowance, not a forecast.";
  }
  if (eligibilityStatus === "likely_not_eligible") {
    return "Against this simplified model you look unlikely to receive allowance on the answers given. If your situation is more nuanced, check Dienst Toeslagen or a benefits adviser before you assume zero.";
  }
  if (eligibilityStatus === "borderline") {
    return "You are close to an income or asset ceiling, or entitlement is unclear — use this as a sensitivity check only and confirm with Dienst Toeslagen before you budget tightly.";
  }
  if (monthlyAllowanceEstimate <= 0) {
    return "Estimated allowance is zero in this run — review income, assets, insurance, and partner settings, then apply or update through Dienst Toeslagen if you still believe you qualify.";
  }
  return "Figures are indicative only: apply through Dienst Toeslagen for a formal decision, keep income and assets updated, and expect corrections if your situation changes during the year.";
}

/** @deprecated Use combinedReportedIncome — alias for backwards compatibility. */
export const combinedIncomeForModel = combinedReportedIncome;
/** @deprecated Use combinedReportedAssets — alias for backwards compatibility. */
export const combinedAssetsForModel = combinedReportedAssets;
