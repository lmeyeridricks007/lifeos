/**
 * Housing-type multipliers applied to the energy planning anchor (and related scaling).
 * 1.0 = medium apartment baseline. Not square-metre accurate.
 */
import type { UsHousingType } from "../types";

export type UtilitiesHousingMultiplierEntry = {
  id: UsHousingType;
  multiplier: number;
  /** Expat-friendly explanation */
  rationale: string;
};

export const UTILITIES_HOUSING_MULTIPLIER_ROWS: readonly UtilitiesHousingMultiplierEntry[] = [
  {
    id: "student_room",
    multiplier: 0.55,
    rationale: "Small occupied volume; often partial utilities or bundles — still confirm the lease.",
  },
  {
    id: "studio",
    multiplier: 0.72,
    rationale: "Single open unit; lower heating footprint than multi-room homes on average.",
  },
  {
    id: "apartment",
    multiplier: 1,
    rationale: "Reference archetype for the model (not your actual EPC or orientation).",
  },
  {
    id: "terraced",
    multiplier: 1.12,
    rationale: "More external wall / stair volume than a flat; insulation varies wildly by era.",
  },
  {
    id: "larger_house",
    multiplier: 1.35,
    rationale: "Detached / large volume homes — biggest spread vs real bills; use efficiency fields next.",
  },
] as const;

/** Engine-shaped map */
export const UTILITIES_HOUSING_MULTIPLIERS: Record<UsHousingType, number> = {
  student_room: 0.55,
  studio: 0.72,
  apartment: 1,
  terraced: 1.12,
  larger_house: 1.35,
};
