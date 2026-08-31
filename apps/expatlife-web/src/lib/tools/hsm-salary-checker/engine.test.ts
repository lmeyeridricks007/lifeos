import { describe, expect, it } from "vitest";
import { calculateHsmSalary } from "./engine";
import { HSM_SALARY_THRESHOLDS_EUR } from "./thresholds";
import { DEFAULT_HSM_SALARY_INPUT, type HsmSalaryInput } from "./types";

describe("calculateHsmSalary", () => {
  it("returns likely_meets_standard_floor when 30+ clears the floor", () => {
    const input: HsmSalaryInput = {
      ...DEFAULT_HSM_SALARY_INPUT,
      grossMonthly: 6200,
      ageBand: "thirty_plus",
      holidayPayIncluded: "no",
      reducedCriterion: "no",
      sponsorStatus: "recognized",
    };
    const result = calculateHsmSalary(input);
    expect(result.band).toBe("likely_meets_standard_floor");
    expect(result.applicableFloorEur).toBe(HSM_SALARY_THRESHOLDS_EUR.thirtyPlus);
    expect(result.headline.toLowerCase()).not.toMatch(/approved/);
  });

  it("returns below_floor when under the age-band amount", () => {
    const result = calculateHsmSalary({
      ...DEFAULT_HSM_SALARY_INPUT,
      grossMonthly: 4000,
      ageBand: "thirty_plus",
      holidayPayIncluded: "no",
      reducedCriterion: "no",
      sponsorStatus: "recognized",
    });
    expect(result.band).toBe("below_floor");
    expect(result.gapToFloorEur).toBeGreaterThan(0);
  });

  it("returns meets_only_if_reduced_applies when reduced claimed and mid-range", () => {
    const result = calculateHsmSalary({
      ...DEFAULT_HSM_SALARY_INPUT,
      grossMonthly: 3500,
      ageBand: "under_30",
      reducedCriterion: "yes_claim",
      holidayPayIncluded: "no",
      sponsorStatus: "recognized",
    });
    expect(result.band).toBe("meets_only_if_reduced_applies");
    expect(result.escalate).toBe(true);
  });

  it("returns near_threshold_verify_components when holiday pay may be included", () => {
    const result = calculateHsmSalary({
      ...DEFAULT_HSM_SALARY_INPUT,
      grossMonthly: 6000,
      ageBand: "thirty_plus",
      holidayPayIncluded: "yes_or_mixed",
      reducedCriterion: "no",
    });
    expect(result.band).toBe("near_threshold_verify_components");
  });

  it("returns needs_careful_review when age is unsure", () => {
    const result = calculateHsmSalary({
      ...DEFAULT_HSM_SALARY_INPUT,
      ageBand: "unsure",
      grossMonthly: 5000,
    });
    expect(result.band).toBe("needs_careful_review");
  });

  it("uses under-30 floor when age band is under_30", () => {
    const result = calculateHsmSalary({
      ...DEFAULT_HSM_SALARY_INPUT,
      grossMonthly: 5000,
      ageBand: "under_30",
      holidayPayIncluded: "no",
      reducedCriterion: "no",
      sponsorStatus: "recognized",
    });
    expect(result.applicableFloorEur).toBe(HSM_SALARY_THRESHOLDS_EUR.under30);
    expect(result.band).toBe("likely_meets_standard_floor");
  });
});
