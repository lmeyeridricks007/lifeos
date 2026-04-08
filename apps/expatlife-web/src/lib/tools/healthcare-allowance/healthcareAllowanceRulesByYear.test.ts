import { describe, expect, it } from "vitest";
import { healthcareAllowanceRulesByYear } from "./config/healthcareAllowanceRulesByYear";
import { healthcarePremiumDefaultsByYear } from "./config/healthcarePremiumDefaultsByYear";

describe("healthcareAllowanceRulesByYear (2026)", () => {
  it("matches published planning figures for the estimator", () => {
    const r = healthcareAllowanceRulesByYear[2026];
    expect(r.singleMaxIncome).toBe(40_857);
    expect(r.partnerMaxCombinedIncome).toBe(51_142);
    expect(r.singleMaxAssets).toBe(146_011);
    expect(r.partnerMaxCombinedAssets).toBe(184_633);
    expect(r.maxMonthlyAllowance).toBe(131);
  });
});

describe("healthcarePremiumDefaultsByYear (2026)", () => {
  it("exposes average basic premium default", () => {
    expect(healthcarePremiumDefaultsByYear[2026].averageBasicPremiumMonthly).toBe(157);
  });
});
