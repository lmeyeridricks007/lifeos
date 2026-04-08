import { describe, expect, it } from "vitest";
import { healthcareAllowanceRulesByYear } from "./config/healthcareAllowanceRulesByYear";
import { computeHealthcareAllowance } from "./computeHealthcareAllowance";
import { applyPlateauThenLinearTaper } from "./taper";
import { HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS, mergeHealthcareAllowanceInputs } from "./defaultInputs";

const r2026 = healthcareAllowanceRulesByYear[2026];

describe("computeHealthcareAllowance", () => {
  it("single: zero allowance when income is at/above threshold", () => {
    const inputs = mergeHealthcareAllowanceInputs({
      ...HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS,
      householdType: "single",
      partnerIncludedForYear: false,
      annualIncomeYou: r2026.singleMaxIncome,
      incomeEntryMode: "annual",
      incomeNotSure: false,
    });
    const res = computeHealthcareAllowance(inputs);
    expect(res.eligibilityStatus).toBe("likely_not_eligible");
    expect(res.monthlyAllowanceEstimate).toBe(0);
    expect(res.likelyEligibility).toBe(res.eligibilityStatus);
  });

  it("partner: combined income below partner threshold → eligible estimate with positive allowance", () => {
    const inputs = mergeHealthcareAllowanceInputs({
      householdType: "with_toeslagpartner",
      partnerIncludedForYear: true,
      annualIncomeYou: 20_000,
      annualIncomePartner: 15_000,
      incomeEntryMode: "annual",
      assetsYouJan1: 5_000,
      assetsPartnerJan1: 5_000,
    });
    const res = computeHealthcareAllowance(inputs);
    expect(res.incomeThresholdUsed).toBe(r2026.partnerMaxCombinedIncome);
    expect(res.eligibilityStatus).not.toBe("likely_not_eligible");
    expect(res.monthlyAllowanceEstimate).toBeGreaterThan(0);
  });

  it("partner: combined income above partner threshold → ineligible", () => {
    const inputs = mergeHealthcareAllowanceInputs({
      householdType: "with_toeslagpartner",
      partnerIncludedForYear: true,
      annualIncomeYou: 30_000,
      annualIncomePartner: 30_000,
      incomeEntryMode: "annual",
      assetsYouJan1: 10_000,
      assetsPartnerJan1: 10_000,
    });
    const res = computeHealthcareAllowance(inputs);
    expect(res.incomeThresholdUsed).toBe(r2026.partnerMaxCombinedIncome);
    expect(res.assetThresholdUsed).toBe(r2026.partnerMaxCombinedAssets);
    expect(res.eligibilityStatus).toBe("likely_not_eligible");
  });

  it("ineligible when assets reach single cap", () => {
    const inputs = mergeHealthcareAllowanceInputs({
      annualIncomeYou: 20_000,
      assetsYouJan1: r2026.singleMaxAssets,
      householdType: "single",
    });
    const res = computeHealthcareAllowance(inputs);
    expect(res.eligibilityStatus).toBe("likely_not_eligible");
    expect(res.monthlyAllowanceEstimate).toBe(0);
  });

  it("plateau+taper: mid-threshold income gives two-thirds of max (2026 plateau 25%)", () => {
    const thr = r2026.singleMaxIncome;
    const inputs = mergeHealthcareAllowanceInputs({
      annualIncomeYou: thr / 2,
      incomeEntryMode: "annual",
      assetsYouJan1: 0,
    });
    const res = computeHealthcareAllowance(inputs);
    const expected = applyPlateauThenLinearTaper({
      testIncomeAnnual: thr / 2,
      incomeThreshold: thr,
      maxMonthlyAllowance: r2026.maxMonthlyAllowance,
      taper: r2026.taper,
    });
    expect(res.monthlyAllowanceEstimate).toBeCloseTo(expected, 5);
    expect(res.monthlyAllowanceEstimate).toBeCloseTo((r2026.maxMonthlyAllowance * 2) / 3, 5);
  });

  it("near-threshold: small positive estimate when still below ceiling", () => {
    const thr = r2026.singleMaxIncome;
    const income = Math.floor(thr * 0.96);
    const inputs = mergeHealthcareAllowanceInputs({
      annualIncomeYou: income,
      incomeEntryMode: "annual",
      assetsYouJan1: 0,
    });
    const res = computeHealthcareAllowance(inputs);
    expect(res.eligibilityStatus).not.toBe("likely_not_eligible");
    expect(res.monthlyAllowanceEstimate).toBeGreaterThan(0);
    expect(res.monthlyAllowanceEstimate).toBeLessThan(r2026.maxMonthlyAllowance * 0.5);
  });

  it("manual premium override is used for gross and net premium", () => {
    const custom = 199;
    const inputs = mergeHealthcareAllowanceInputs({
      premiumMode: "manual",
      monthlyPremiumManual: custom,
      annualIncomeYou: 20_000,
      incomeEntryMode: "annual",
      assetsYouJan1: 0,
    });
    const res = computeHealthcareAllowance(inputs);
    expect(res.grossMonthlyPremium).toBe(custom);
    expect(res.monthlyNetPremiumEstimate).toBeCloseTo(custom - res.monthlyAllowanceEstimate, 5);
  });

  it("prorates annual allowance by insured months", () => {
    const inputs = mergeHealthcareAllowanceInputs({
      insuredFullYear: false,
      insuranceStartMonth: 7,
      insuranceStatus: "yes",
      annualIncomeYou: 25_000,
    });
    const res = computeHealthcareAllowance(inputs);
    expect(res.allowanceMonthsInYear).toBe(6);
    expect(res.annualAllowanceEstimateProrated).toBeCloseTo(res.monthlyAllowanceEstimate * 6, 5);
  });

  it("missing income (zero combined): uses conservative test income and flags", () => {
    const inputs = mergeHealthcareAllowanceInputs({
      annualIncomeYou: 0,
      monthlyGrossYou: 0,
      incomeEntryMode: "annual",
      assetsYouJan1: 5_000,
      incomeNotSure: false,
    });
    const res = computeHealthcareAllowance(inputs);
    expect(res.usedMissingIncomeAssumption).toBe(true);
    expect(res.testIncomeAnnual).toBeCloseTo(r2026.singleMaxIncome * r2026.missingIncomeTestIncomeFractionOfThreshold, 2);
    expect(res.riskFlags.some((f) => f.toLowerCase().includes("missing"))).toBe(true);
    expect(res.recommendationText.toLowerCase()).toContain("income");
  });

  it("negative income fails validation and zeros allowance", () => {
    const inputs = mergeHealthcareAllowanceInputs({
      ...HEALTHCARE_ALLOWANCE_DEFAULT_INPUTS,
      annualIncomeYou: -5_000,
    });
    const res = computeHealthcareAllowance(inputs);
    expect(res.validationNotes.some((n) => n.includes("negative"))).toBe(true);
    expect(res.monthlyAllowanceEstimate).toBe(0);
  });

  it("under min age: ineligible for estimate", () => {
    const inputs = mergeHealthcareAllowanceInputs({ age: 17 });
    const res = computeHealthcareAllowance(inputs);
    expect(res.eligibilityStatus).toBe("likely_not_eligible");
    expect(res.monthlyAllowanceEstimate).toBe(0);
  });

  it("surfaces explicit outputs on result object", () => {
    const res = computeHealthcareAllowance(mergeHealthcareAllowanceInputs({}));
    expect(typeof res.combinedIncomeUsed).toBe("number");
    expect(typeof res.combinedAssetsUsed).toBe("number");
    expect(typeof res.recommendationText).toBe("string");
    expect(Array.isArray(res.eligibilityReasons)).toBe(true);
    expect(Array.isArray(res.riskFlags)).toBe(true);
  });
});
