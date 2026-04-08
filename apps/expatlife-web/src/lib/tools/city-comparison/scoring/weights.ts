import type { CityComparisonInput, ScenarioRankingMode, TriPreference } from "../types";
import type { DimensionWeights } from "./types";

function triWeight(t: TriPreference): number {
  switch (t) {
    case "low":
      return 0.72;
    case "high":
      return 1.38;
    case "medium":
    default:
      return 1;
  }
}

export function pickScenarioMode(input: CityComparisonInput): ScenarioRankingMode {
  const t = input.scenarioToggles;
  const order: ScenarioRankingMode[] = [
    "cost_first",
    "lifestyle_first",
    "family_first",
    "commute_first",
    "balanced",
  ];
  for (const m of order) {
    if (t[m]) return m;
  }
  return "balanced";
}

function scenarioMultiplier(
  mode: ScenarioRankingMode
): Partial<Record<keyof DimensionWeights, number>> {
  switch (mode) {
    case "cost_first":
      return { affordability: 1.55, commute: 0.92, family: 0.95, expatEase: 0.95, lifestyle: 0.9, career: 0.95 };
    case "lifestyle_first":
      return { lifestyle: 1.5, affordability: 0.9, commute: 0.95, family: 1, expatEase: 1.05, career: 0.95 };
    case "family_first":
      return { family: 1.55, commute: 1.05, affordability: 0.95, lifestyle: 1, expatEase: 1, career: 0.92 };
    case "commute_first":
      return { commute: 1.55, affordability: 0.95, family: 0.98, expatEase: 1, lifestyle: 0.95, career: 1.02 };
    case "balanced":
    default:
      return {};
  }
}

/** Base dimension weights from sliders; commute collapses when remote. */
export function buildDimensionWeights(input: CityComparisonInput): DimensionWeights {
  const remote = input.workMode === "remote";
  const w: DimensionWeights = {
    affordability: triWeight(input.budgetSensitivity),
    commute: remote ? 0.28 : triWeight(input.budgetSensitivity) * 0.22 + 0.82,
    family: triWeight(input.familySchoolImportance),
    expatEase: triWeight(input.internationalPref),
    lifestyle: triWeight(input.nightlifePref) * 0.48 + triWeight(input.natureCalmPref) * 0.48 + 0.28,
    career: triWeight(input.careerPriority),
  };
  const adj = scenarioMultiplier(pickScenarioMode(input));
  (Object.keys(w) as (keyof DimensionWeights)[]).forEach((k) => {
    if (adj[k]) w[k] *= adj[k]!;
  });
  return w;
}

/** Fixed weights for alternate scenario rows (deterministic). */
export function weightsForScenarioLens(lens: "balanced" | "budget" | "family" | "commute" | "lifestyle" | "remote"): DimensionWeights {
  switch (lens) {
    case "budget":
      return {
        affordability: 1.65,
        commute: 0.88,
        family: 0.92,
        expatEase: 0.92,
        lifestyle: 0.88,
        career: 0.92,
      };
    case "family":
      return {
        family: 1.62,
        commute: 1.05,
        affordability: 0.95,
        expatEase: 1.02,
        lifestyle: 0.98,
        career: 0.9,
      };
    case "commute":
      return {
        commute: 1.62,
        affordability: 0.94,
        family: 0.98,
        expatEase: 1,
        lifestyle: 0.94,
        career: 1.05,
      };
    case "lifestyle":
      return {
        lifestyle: 1.58,
        affordability: 0.9,
        commute: 0.95,
        family: 1,
        expatEase: 1.08,
        career: 0.92,
      };
    case "remote":
      return {
        affordability: 1.12,
        commute: 0.22,
        family: 1.05,
        expatEase: 1.02,
        lifestyle: 1.08,
        career: 1.02,
      };
    case "balanced":
    default:
      return {
        affordability: 1,
        commute: 1,
        family: 1,
        expatEase: 1,
        lifestyle: 1,
        career: 1,
      };
  }
}

export function weightedOverall(dims: Record<keyof DimensionWeights, number>, weights: DimensionWeights): number {
  let num = 0;
  let den = 0;
  (Object.keys(weights) as (keyof DimensionWeights)[]).forEach((k) => {
    num += dims[k] * weights[k];
    den += weights[k];
  });
  if (den <= 0) return 50;
  return Math.round(num / den);
}
