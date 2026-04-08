import { describe, expect, it } from "vitest";
import {
  checkHealthcareAllowanceEligibility,
  estimateHealthcareAllowanceAmount,
  estimateNetPremium,
  prorateHealthcareAllowance,
  resolveEligibleAllowanceMonths,
} from "./engine";
import { mergeHealthcareAllowanceInputs } from "./defaultInputs";

describe("prorateHealthcareAllowance", () => {
  it("clamps months to 0–12", () => {
    expect(prorateHealthcareAllowance(100, 6)).toBe(600);
    expect(prorateHealthcareAllowance(100, 99)).toBe(1200);
    expect(prorateHealthcareAllowance(100, -3)).toBe(0);
  });
});

describe("estimateNetPremium", () => {
  it("never returns negative net premium", () => {
    expect(estimateNetPremium(100, 150)).toBe(0);
    expect(estimateNetPremium(100, 100)).toBe(0);
    expect(estimateNetPremium(100, 50)).toBe(50);
  });
});

describe("checkHealthcareAllowanceEligibility / estimateHealthcareAllowanceAmount (input, year)", () => {
  it("matches taper path for a simple single profile", () => {
    const input = mergeHealthcareAllowanceInputs({
      annualIncomeYou: 25_000,
      householdType: "single",
      assetsYouJan1: 5_000,
    });
    const e = checkHealthcareAllowanceEligibility(input, 2026);
    const m = estimateHealthcareAllowanceAmount(input, 2026);
    expect(e.hardFail).toBe(false);
    expect(m).toBeGreaterThan(0);
  });
});

describe("resolveEligibleAllowanceMonths", () => {
  it("returns 0 when insurance is no", () => {
    const i = mergeHealthcareAllowanceInputs({ insuranceStatus: "no" });
    expect(resolveEligibleAllowanceMonths(i)).toBe(0);
  });

  it("returns 12 when insured full year", () => {
    const i = mergeHealthcareAllowanceInputs({ insuredFullYear: true, insuranceStatus: "yes" });
    expect(resolveEligibleAllowanceMonths(i)).toBe(12);
  });

  it("derives months from July start", () => {
    const i = mergeHealthcareAllowanceInputs({
      insuredFullYear: false,
      insuranceStartMonth: 7,
      insuranceStatus: "yes",
    });
    expect(resolveEligibleAllowanceMonths(i)).toBe(6);
  });

  it("respects override clamped to 1–12", () => {
    const i = mergeHealthcareAllowanceInputs({ allowanceMonthsThisYear: 3 });
    expect(resolveEligibleAllowanceMonths(i)).toBe(3);
  });
});
