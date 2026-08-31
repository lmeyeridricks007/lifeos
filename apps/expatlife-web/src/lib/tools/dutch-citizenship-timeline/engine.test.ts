import { describe, expect, it } from "vitest";
import { calculateDutchCitizenshipTimeline } from "./engine";
import { DEFAULT_CITIZENSHIP_TIMELINE_INPUT, type CitizenshipTimelineInput } from "./types";

describe("calculateDutchCitizenshipTimeline", () => {
  it("returns likely_ready_to_book_gemeente for strong naturalisation answers", () => {
    const input: CitizenshipTimelineInput = {
      ...DEFAULT_CITIZENSHIP_TIMELINE_INPUT,
      routeFocus: "naturalisation",
      residenceYears: "over_five",
      continuity: "continuous_on_time",
      integration: "diploma_a2_or_higher",
      renunciation: "willing",
      longTermStatus: "dutch_pr",
      age18Plus: "yes",
    };
    const result = calculateDutchCitizenshipTimeline(input);
    expect(result.band).toBe("likely_ready_to_book_gemeente");
    expect(result.gaps).toHaveLength(0);
    expect(result.headline.toLowerCase()).not.toMatch(/\beligible\b/);
  });

  it("returns early_planning under five years", () => {
    const result = calculateDutchCitizenshipTimeline({
      ...DEFAULT_CITIZENSHIP_TIMELINE_INPUT,
      residenceYears: "under_3",
      integration: "not_started",
    });
    expect(result.band).toBe("early_planning");
  });

  it("returns option_check_first when option is selected", () => {
    const result = calculateDutchCitizenshipTimeline({
      ...DEFAULT_CITIZENSHIP_TIMELINE_INPUT,
      routeFocus: "option_maybe",
      residenceYears: "over_five",
      integration: "diploma_a2_or_higher",
      renunciation: "willing",
    });
    expect(result.band).toBe("option_check_first");
  });

  it("returns prep_milestones when integration incomplete near five years", () => {
    const result = calculateDutchCitizenshipTimeline({
      ...DEFAULT_CITIZENSHIP_TIMELINE_INPUT,
      residenceYears: "about_five",
      integration: "in_progress",
      renunciation: "unsure",
    });
    expect(result.band).toBe("prep_milestones");
    expect(result.gaps.length).toBeGreaterThan(0);
  });

  it("escalates when renunciation is not ready", () => {
    const result = calculateDutchCitizenshipTimeline({
      ...DEFAULT_CITIZENSHIP_TIMELINE_INPUT,
      residenceYears: "over_five",
      integration: "exemption",
      renunciation: "not_ready",
    });
    expect(result.band).toBe("needs_careful_review");
    expect(result.escalate).toBe(true);
  });

  it("uses start month for rough horizon copy when provided", () => {
    const now = new Date();
    const start = new Date(Date.UTC(now.getUTCFullYear() - 3, now.getUTCMonth(), 1));
    const month = `${start.getUTCFullYear()}-${String(start.getUTCMonth() + 1).padStart(2, "0")}`;
    const result = calculateDutchCitizenshipTimeline({
      ...DEFAULT_CITIZENSHIP_TIMELINE_INPUT,
      residenceYears: "three_to_four",
      residenceStartMonth: month,
    });
    expect(result.earliestApplyWindow.toLowerCase()).toContain("month");
  });
});
