import { describe, expect, it } from "vitest";
import { healthcareAllowanceRulesByYear } from "./config/healthcareAllowanceRulesByYear";
import { applyPlateauThenLinearTaper } from "./taper";

const rules2026 = healthcareAllowanceRulesByYear[2026];

describe("applyPlateauThenLinearTaper", () => {
  it("holds max allowance through the configured plateau share of threshold", () => {
    const thr = 40_857;
    const income = 0.2 * thr;
    const m = applyPlateauThenLinearTaper({
      testIncomeAnnual: income,
      incomeThreshold: thr,
      maxMonthlyAllowance: rules2026.maxMonthlyAllowance,
      taper: rules2026.taper,
    });
    expect(m).toBe(rules2026.maxMonthlyAllowance);
  });

  it("interpolates linearly between plateau edge and threshold", () => {
    const thr = 40_857;
    const p = rules2026.taper.plateauIncomeFractionOfThreshold;
    const income = 0.5 * thr;
    const plateauEdge = p * thr;
    const span = thr - plateauEdge;
    const t = (income - plateauEdge) / span;
    const expected = rules2026.maxMonthlyAllowance * (1 - t);
    const m = applyPlateauThenLinearTaper({
      testIncomeAnnual: income,
      incomeThreshold: thr,
      maxMonthlyAllowance: rules2026.maxMonthlyAllowance,
      taper: rules2026.taper,
    });
    expect(m).toBeCloseTo(expected, 5);
  });

  it("returns zero at or above threshold", () => {
    const thr = 40_857;
    expect(
      applyPlateauThenLinearTaper({
        testIncomeAnnual: thr,
        incomeThreshold: thr,
        maxMonthlyAllowance: rules2026.maxMonthlyAllowance,
        taper: rules2026.taper,
      })
    ).toBe(0);
  });
});
