import type { ColCity } from "@/src/lib/calculators/cost-of-living/types";
import type { CityComparisonId } from "./types";
import { getNormalizedCityProfile, scale1to100 } from "./scoring/normalizedProfiles";

/**
 * Legacy shape for colBridge / any consumer expecting 0–100 editorial fields.
 * Derived from normalized 1–10 profiles — single source of truth in `scoring/normalizedProfiles.ts`.
 */
export type CityQualitativeProfile = {
  id: CityComparisonId;
  displayName: string;
  colProxy: ColCity;
  rentPlanningMult: number;
  careerStrength: number;
  expatFriendliness: number;
  familyFriendliness: number;
  nightlife: number;
  calmNature: number;
  commuteConnectivity: number;
  internationalSchoolsProxy: number;
  rentPressureIndex: number;
  shortTagline: string;
};

export function getCityComparisonProfile(id: CityComparisonId): CityQualitativeProfile {
  const n = getNormalizedCityProfile(id);
  return {
    id: n.id,
    displayName: n.displayName,
    colProxy: n.colProxy,
    rentPlanningMult: n.rentPlanningMult,
    careerStrength: scale1to100(n.careerStrength),
    expatFriendliness: scale1to100(n.expatEase),
    familyFriendliness: scale1to100(n.familyFit),
    nightlife: scale1to100(n.nightlife),
    calmNature: scale1to100(n.calmNature),
    commuteConnectivity: scale1to100(n.commuteHubStrength),
    internationalSchoolsProxy: scale1to100(n.internationalSchoolSupport),
    rentPressureIndex: scale1to100(n.rentLevel),
    shortTagline: n.comments,
  };
}
