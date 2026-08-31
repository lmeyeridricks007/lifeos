import { describe, expect, it } from "vitest";
import { calculatePermanentResidenceEligibility } from "./engine";
import { DEFAULT_PR_ELIGIBILITY_INPUT, type PrEligibilityInput } from "./types";

describe("calculatePermanentResidenceEligibility", () => {
  it("returns likely_ready_to_verify for strong HSM answers", () => {
    const input: PrEligibilityInput = {
      ...DEFAULT_PR_ELIGIBILITY_INPUT,
      residenceYears: "over_five",
      permitType: "hsm",
      continuity: "continuous_on_time",
      absences: "none_or_short",
      brpRegistered: "yes",
      integration: "diploma_a2_or_higher",
      permitValid: "yes",
      age18Plus: "yes",
    };
    const result = calculatePermanentResidenceEligibility(input);
    expect(result.band).toBe("likely_ready_to_verify");
    expect(result.gaps).toHaveLength(0);
    expect(result.headline.toLowerCase()).not.toContain("eligible");
  });

  it("returns early_planning under five years", () => {
    const result = calculatePermanentResidenceEligibility({
      ...DEFAULT_PR_ELIGIBILITY_INPUT,
      residenceYears: "three_to_four",
      integration: "diploma_a2_or_higher",
    });
    expect(result.band).toBe("early_planning");
  });

  it("returns close_with_gaps when integration incomplete at five years", () => {
    const result = calculatePermanentResidenceEligibility({
      ...DEFAULT_PR_ELIGIBILITY_INPUT,
      residenceYears: "about_five",
      integration: "not_started",
    });
    expect(result.band).toBe("close_with_gaps");
    expect(result.gaps.length).toBeGreaterThan(0);
  });

  it("flags already long-term status", () => {
    const result = calculatePermanentResidenceEligibility({
      ...DEFAULT_PR_ELIGIBILITY_INPUT,
      permitType: "already_permanent",
    });
    expect(result.band).toBe("already_long_term");
  });

  it("escalates when permit is invalid", () => {
    const result = calculatePermanentResidenceEligibility({
      ...DEFAULT_PR_ELIGIBILITY_INPUT,
      residenceYears: "over_five",
      integration: "exemption",
      permitValid: "no",
    });
    expect(result.band).toBe("needs_careful_review");
    expect(result.escalate).toBe(true);
  });
});
