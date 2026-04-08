import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";
import type { CityComparisonId } from "../types";

import type { AffordabilityBand, CommutePracticality, ResultConfidenceLevel } from "../types";

/** Alias for matrix cells (same union as public CommutePracticality). */
export type CommutePracticalityClass = CommutePracticality;

/**
 * Editorial city profile: all attributes on 1–10 (higher = more of that attribute).
 * Not statistical — comparable only inside this tool.
 */
export type NormalizedCityProfile = {
  id: CityComparisonId;
  displayName: string;
  colProxy: ColCity;
  rentPlanningMult: number;
  rentLevel: number;
  livingCostLevel: number;
  careerStrength: number;
  expatEase: number;
  familyFit: number;
  nightlife: number;
  calmNature: number;
  commuteHubStrength: number;
  internationalSchoolSupport: number;
  languageBarrierEase: number;
  /** Short editorial line for trade-off cards. */
  comments: string;
};

export type { AffordabilityBand, ResultConfidenceLevel };

/** Optional structured hints for commute UI (merged with class defaults). */
export type CommuteModeMetricStrings = {
  typicalOneWay: string;
  reliability: string;
  costRough: string;
};

export type CommuteMatrixCell = {
  practicality: CommutePracticalityClass;
  trainPt: string;
  bike: string;
  car: string;
  metrics?: Partial<Record<"train_pt" | "bike" | "car", Partial<CommuteModeMetricStrings>>>;
  /** Strikes, engineering works, crowding — corridor-level, plain language. */
  corridorDisruption?: string;
};

export type DimensionWeights = {
  affordability: number;
  commute: number;
  family: number;
  expatEase: number;
  lifestyle: number;
  career: number;
};

export type CityDimensionScores100 = {
  affordability: number;
  commute: number;
  family: number;
  expatEase: number;
  lifestyle: number;
  career: number;
};
