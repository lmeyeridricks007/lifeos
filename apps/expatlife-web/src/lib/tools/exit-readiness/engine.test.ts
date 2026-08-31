import { describe, expect, it } from "vitest";
import { calculateExitReadiness } from "./engine";
import { DEFAULT_EXIT_READINESS_INPUT } from "./types";

describe("calculateExitReadiness", () => {
  it("returns largely_ready when most items done", () => {
    const result = calculateExitReadiness({
      ...DEFAULT_EXIT_READINESS_INPUT,
      departureTiming: "one_to_three_months",
      municipalityDeregistration: "done_or_planned",
      housingLease: "done_or_planned",
      healthInsurance: "done_or_planned",
      toeslagen: "done_or_planned",
      employerPayroll: "done_or_planned",
      taxRecords: "done_or_planned",
      bankContracts: "done_or_planned",
      destinationRegistration: "done_or_planned",
    });
    expect(result.band).toBe("largely_ready");
    expect(result.headline.toLowerCase()).not.toMatch(/cleared to leave/);
  });

  it("returns early_planning when many gaps", () => {
    const result = calculateExitReadiness({
      ...DEFAULT_EXIT_READINESS_INPUT,
      departureTiming: "later",
      municipalityDeregistration: "not_started",
      housingLease: "not_started",
      healthInsurance: "not_started",
      toeslagen: "not_started",
      employerPayroll: "not_started",
      taxRecords: "not_started",
      bankContracts: "not_started",
      destinationRegistration: "not_started",
    });
    expect(result.band).toBe("early_planning");
    expect(result.pendingActions.length).toBeGreaterThan(0);
  });

  it("escalates when leaving within a month with open deregistration", () => {
    const result = calculateExitReadiness({
      ...DEFAULT_EXIT_READINESS_INPUT,
      departureTiming: "within_1_month",
      municipalityDeregistration: "not_started",
      taxRecords: "not_started",
    });
    expect(result.escalate).toBe(true);
    expect(["needs_careful_review", "close_with_gaps", "early_planning"]).toContain(result.band);
  });
});
