import { describe, expect, it } from "vitest";
import { calculateExamReadiness } from "./engine";
import { DEFAULT_EXAM_READINESS_INPUT, type ExamReadinessInput } from "./types";

describe("calculateExamReadiness", () => {
  it("returns ready_to_book_verify when most modules are strong", () => {
    const input: ExamReadinessInput = {
      ...DEFAULT_EXAM_READINESS_INPUT,
      targetLevel: "a2_secure_residence",
      reading: "comfortable",
      writing: "comfortable",
      speaking: "passed",
      listening: "comfortable",
      knm: "comfortable",
      knmMaterials: "yes_post_july_2025",
      participationModules: "not_applicable",
    };
    const result = calculateExamReadiness(input);
    expect(result.band).toBe("ready_to_book_verify");
    expect(result.headline.toLowerCase()).not.toMatch(/you will pass/);
  });

  it("returns early_prep when many modules not started", () => {
    const result = calculateExamReadiness({
      ...DEFAULT_EXAM_READINESS_INPUT,
      targetLevel: "b1_wi2021",
      reading: "not_started",
      writing: "not_started",
      speaking: "not_started",
      listening: "practicing",
      knm: "not_started",
      knmMaterials: "unsure",
    });
    expect(result.band).toBe("early_prep");
  });

  it("returns refresh_knm_materials when older KNM materials flagged", () => {
    const result = calculateExamReadiness({
      ...DEFAULT_EXAM_READINESS_INPUT,
      targetLevel: "a2_secure_residence",
      reading: "comfortable",
      writing: "comfortable",
      speaking: "comfortable",
      listening: "comfortable",
      knm: "practicing",
      knmMaterials: "older_materials",
    });
    expect(result.band).toBe("refresh_knm_materials");
  });

  it("returns prioritize_weak_modules for mixed practice", () => {
    const result = calculateExamReadiness({
      ...DEFAULT_EXAM_READINESS_INPUT,
      targetLevel: "b1_wi2021",
      reading: "comfortable",
      writing: "practicing",
      speaking: "comfortable",
      listening: "practicing",
      knm: "practicing",
      knmMaterials: "yes_post_july_2025",
      participationModules: "not_applicable",
    });
    expect(result.band).toBe("prioritize_weak_modules");
    expect(result.priorityModules.length).toBeGreaterThan(0);
  });
});
