import {
  DEFAULT_HEALTHCARE_ALLOWANCE_YEAR,
  healthcareAllowanceRulesByYear,
  isSupportedHealthcareAllowanceYear,
} from "./config/healthcareAllowanceRulesByYear";
import { healthcarePremiumDefaultsByYear } from "./config/healthcarePremiumDefaultsByYear";
import {
  buildRecommendationText,
  buildTestIncomeAndAssets,
  computeMonthlyAllowanceFromTaperModel,
  estimateNetPremium,
  evaluateHealthcareAllowanceAgainstThresholds,
  getHealthcareRiskFlags,
  prorateHealthcareAllowance,
  resolveEligibleAllowanceMonths,
  thresholdsForHousehold,
} from "./engine";
import { formatHealthcareEur, formatHealthcareEurMonthly } from "./format";
import type { HealthcareAllowanceComputation, HealthcareAllowanceInputs, SummaryCard } from "./types";
import { buildGuidanceActions, buildRepaymentRiskNotes, buildWhatAffectsMost } from "./warnings";
import { hasMalformedMoneyFields, validateHealthcareAllowanceInputs } from "./validation";

export { combinedReportedIncome as combinedIncomeForModel, combinedReportedAssets as combinedAssetsForModel } from "./engine";

export function computeHealthcareAllowance(inputs: HealthcareAllowanceInputs): HealthcareAllowanceComputation {
  const year = isSupportedHealthcareAllowanceYear(inputs.taxYear) ? inputs.taxYear : DEFAULT_HEALTHCARE_ALLOWANCE_YEAR;
  const rules = healthcareAllowanceRulesByYear[year];
  const premDefaults = healthcarePremiumDefaultsByYear[year];

  const val = validateHealthcareAllowanceInputs(inputs);
  const validationNotes = [...val.errors, ...val.warnings];
  const inputBroken = !val.isValid || hasMalformedMoneyFields(inputs);

  const { incomeThreshold, assetThreshold } = thresholdsForHousehold(inputs, rules);
  const testCtx = buildTestIncomeAndAssets(inputs, rules, incomeThreshold);
  const eligibility = evaluateHealthcareAllowanceAgainstThresholds(
    inputs,
    rules,
    testCtx.testIncomeAnnual,
    testCtx.testAssetsTotal,
    incomeThreshold,
    assetThreshold
  );

  const allowanceMonthsInYear = resolveEligibleAllowanceMonths(inputs);

  const grossMonthlyPremium =
    inputs.premiumMode === "average" ? premDefaults.averageBasicPremiumMonthly : Math.max(0, inputs.monthlyPremiumManual);

  const hardFailForAllowance = eligibility.hardFail || inputBroken;

  let monthlyAllowanceEstimate = computeMonthlyAllowanceFromTaperModel(
    testCtx.testIncomeAnnual,
    incomeThreshold,
    rules,
    hardFailForAllowance
  );

  if (inputBroken) {
    monthlyAllowanceEstimate = 0;
  }

  const annualAllowanceEstimateProrated = prorateHealthcareAllowance(monthlyAllowanceEstimate, allowanceMonthsInYear);
  const annualAllowanceEstimateFullYear = prorateHealthcareAllowance(monthlyAllowanceEstimate, 12);

  const monthlyNetPremiumEstimate = estimateNetPremium(grossMonthlyPremium, monthlyAllowanceEstimate);
  const annualNetPremiumEstimateProrated = grossMonthlyPremium * Math.min(12, Math.max(0, allowanceMonthsInYear)) - annualAllowanceEstimateProrated;
  const annualNetPremiumEstimateFullYear = grossMonthlyPremium * 12 - annualAllowanceEstimateFullYear;

  const eligibilityStatus = eligibility.eligibilityStatus;
  const eligibilityReasons = inputBroken
    ? [...val.errors, ...eligibility.eligibilityReasons]
    : eligibility.eligibilityReasons;

  const riskFlags = getHealthcareRiskFlags(inputs, {
    eligibilityStatus,
    usedMissingIncomeAssumption: testCtx.usedMissingIncomeAssumption,
    validationErrorCount: val.errors.length,
  });

  const recommendationText = buildRecommendationText({
    eligibilityStatus,
    monthlyAllowanceEstimate,
    usedMissingIncomeAssumption: testCtx.usedMissingIncomeAssumption,
  });

  const incomeLabel =
    inputs.householdType === "with_toeslagpartner" && inputs.partnerIncludedForYear
      ? "Combined income used (model)"
      : "Your income used (model)";

  const assetLabel =
    inputs.householdType === "with_toeslagpartner" && inputs.partnerIncludedForYear
      ? "Combined 1 Jan assets (model)"
      : "Your 1 Jan assets (model)";

  const summaryCards: SummaryCard[] = [
    {
      id: "eligibility",
      label: "Likely eligibility",
      value:
        eligibilityStatus === "likely_eligible"
          ? "Likely eligible"
          : eligibilityStatus === "borderline"
            ? "Borderline — check carefully"
            : "Likely not eligible",
      hint: "Simplified screen only — not a benefit decision.",
    },
    {
      id: "monthly_allowance",
      label: "Estimated monthly allowance",
      value: formatHealthcareEurMonthly(monthlyAllowanceEstimate),
      hint: "If you were eligible for every month at this income level.",
    },
    {
      id: "annual_allowance",
      label: "Estimated annual allowance",
      value: `${formatHealthcareEur(annualAllowanceEstimateProrated)} (${allowanceMonthsInYear} mo)`,
      hint: `Full-year at this rate: ${formatHealthcareEur(annualAllowanceEstimateFullYear)}.`,
    },
    {
      id: "net_premium",
      label: "Estimated net monthly premium",
      value: formatHealthcareEurMonthly(monthlyNetPremiumEstimate),
      hint: `Gross premium model ${formatHealthcareEurMonthly(grossMonthlyPremium)} minus estimated allowance.`,
    },
    {
      id: "income_used",
      label: incomeLabel,
      value: `${formatHealthcareEur(testCtx.reportedIncomeAnnual)}${testCtx.usedMissingIncomeAssumption ? " (missing → conservative test)" : ""} / ${formatHealthcareEur(testCtx.testIncomeAnnual)} (test${inputs.incomeNotSure && !testCtx.usedMissingIncomeAssumption ? ", stressed" : ""})`,
      hint: `Threshold: ${formatHealthcareEur(incomeThreshold)} (${year} model).`,
    },
    {
      id: "assets",
      label: assetLabel,
      value: formatHealthcareEur(testCtx.reportedAssetsTotal),
      hint: `Threshold: ${formatHealthcareEur(assetThreshold)} (${year} model).`,
    },
  ];

  return {
    configYear: year,
    eligibilityStatus,
    eligibilityReasons,
    incomeThresholdUsed: incomeThreshold,
    assetThresholdUsed: assetThreshold,
    combinedIncomeUsed: testCtx.reportedIncomeAnnual,
    combinedAssetsUsed: testCtx.reportedAssetsTotal,
    testIncomeAnnual: testCtx.testIncomeAnnual,
    testAssetsTotal: testCtx.testAssetsTotal,
    usedMissingIncomeAssumption: testCtx.usedMissingIncomeAssumption,
    monthlyAllowanceEstimate,
    annualAllowanceEstimateProrated,
    annualAllowanceEstimateFullYear,
    monthlyNetPremiumEstimate,
    annualNetPremiumEstimateProrated,
    annualNetPremiumEstimateFullYear,
    grossMonthlyPremium,
    allowanceMonthsInYear,
    riskFlags,
    recommendationText,
    validationNotes,

    likelyEligibility: eligibilityStatus,
    estimatedMonthlyAllowanceFullRate: monthlyAllowanceEstimate,
    estimatedMonthlyAllowance: monthlyAllowanceEstimate,
    estimatedAnnualAllowanceProrated: annualAllowanceEstimateProrated,
    estimatedAnnualAllowanceFullYear: annualAllowanceEstimateFullYear,
    estimatedMonthlyNetPremium: monthlyNetPremiumEstimate,
    estimatedAnnualNetPremiumProrated: annualNetPremiumEstimateProrated,
    estimatedAnnualNetPremiumFullYear: annualNetPremiumEstimateFullYear,

    guidanceActions: buildGuidanceActions(inputs),
    summaryCards,
    whatAffectsMost: buildWhatAffectsMost(inputs),
    repaymentRiskNotes: buildRepaymentRiskNotes(inputs),
  };
}
