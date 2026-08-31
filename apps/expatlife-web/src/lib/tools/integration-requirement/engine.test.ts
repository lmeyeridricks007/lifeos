import { describe, expect, it } from "vitest";
import { calculateIntegrationRequirement } from "./engine";
import { DEFAULT_INTEGRATION_REQUIREMENT_INPUT, type IntegrationRequirementInput } from "./types";

describe("calculateIntegrationRequirement", () => {
  it("returns follow_obligation_duo_gemeente when obligated", () => {
    const input: IntegrationRequirementInput = {
      ...DEFAULT_INTEGRATION_REQUIREMENT_INPUT,
      obligationLetter: "yes_obligated",
      cohort: "wi2021",
      residenceBasis: "family",
    };
    const result = calculateIntegrationRequirement(input);
    expect(result.band).toBe("follow_obligation_duo_gemeente");
  });

  it("returns likely_no_obligation_plan_secure for HSM without obligation aiming at PR", () => {
    const result = calculateIntegrationRequirement({
      ...DEFAULT_INTEGRATION_REQUIREMENT_INPUT,
      residenceBasis: "hsm",
      obligationLetter: "no_not_obligated",
      goal: "permanent_residence",
      exemptionSignal: "none_known",
      cohort: "unsure",
    });
    expect(result.band).toBe("likely_no_obligation_plan_secure");
    expect(result.headline.toLowerCase()).not.toMatch(/you are exempt/);
  });

  it("returns verify_exemption_path when exemption exploring", () => {
    const result = calculateIntegrationRequirement({
      ...DEFAULT_INTEGRATION_REQUIREMENT_INPUT,
      obligationLetter: "no_not_obligated",
      exemptionSignal: "exemption_exploring",
    });
    expect(result.band).toBe("verify_exemption_path");
  });

  it("returns already_secure_status for already permanent", () => {
    const result = calculateIntegrationRequirement({
      ...DEFAULT_INTEGRATION_REQUIREMENT_INPUT,
      residenceBasis: "already_permanent",
    });
    expect(result.band).toBe("already_secure_status");
  });

  it("returns needs_careful_review when obligation unsure", () => {
    const result = calculateIntegrationRequirement({
      ...DEFAULT_INTEGRATION_REQUIREMENT_INPUT,
      obligationLetter: "unsure",
      residenceBasis: "hsm",
    });
    expect(result.band).toBe("needs_careful_review");
    expect(result.escalate).toBe(true);
  });
});
