import { describe, expect, it } from "vitest";
import { calculateDualCitizenshipAwareness } from "./engine";
import { DEFAULT_DUAL_CITIZENSHIP_INPUT, type DualCitizenshipAwarenessInput } from "./types";

describe("calculateDualCitizenshipAwareness", () => {
  it("returns likely_must_renounce for default naturalisation willing case", () => {
    const input: DualCitizenshipAwarenessInput = {
      ...DEFAULT_DUAL_CITIZENSHIP_INPUT,
      routeFocus: "naturalisation",
      homeCountryRenounce: "allows_renounce",
      possibleException: "none_known",
      willingToRenounce: "yes",
    };
    const result = calculateDualCitizenshipAwareness(input);
    expect(result.band).toBe("likely_must_renounce");
    expect(result.headline.toLowerCase()).not.toMatch(/you can keep dual/);
  });

  it("returns option_may_skip_renunciation when option selected", () => {
    const result = calculateDualCitizenshipAwareness({
      ...DEFAULT_DUAL_CITIZENSHIP_INPUT,
      routeFocus: "option_maybe",
    });
    expect(result.band).toBe("option_may_skip_renunciation");
  });

  it("returns possible_exception_to_document when exception flagged", () => {
    const result = calculateDualCitizenshipAwareness({
      ...DEFAULT_DUAL_CITIZENSHIP_INPUT,
      routeFocus: "naturalisation",
      possibleException: "married_or_partner_dutch",
      willingToRenounce: "no",
      homeCountryRenounce: "allows_renounce",
    });
    expect(result.band).toBe("possible_exception_to_document");
  });

  it("returns prefer_pr_for_now when unwilling and no exception", () => {
    const result = calculateDualCitizenshipAwareness({
      ...DEFAULT_DUAL_CITIZENSHIP_INPUT,
      routeFocus: "naturalisation",
      possibleException: "none_known",
      willingToRenounce: "no",
      homeCountryRenounce: "allows_renounce",
    });
    expect(result.band).toBe("prefer_pr_for_now");
  });

  it("returns home_country_friction when home forbids renunciation", () => {
    const result = calculateDualCitizenshipAwareness({
      ...DEFAULT_DUAL_CITIZENSHIP_INPUT,
      routeFocus: "naturalisation",
      homeCountryRenounce: "forbids_renounce",
      possibleException: "none_known",
      willingToRenounce: "yes",
    });
    expect(result.band).toBe("home_country_friction");
  });
});
