import type { TriPreference } from "../types";
import type { NormalizedCityProfile } from "./types";

/** Map user tri-preference to same 1–10 scale as city attributes (deterministic). */
export function triToPlanningScale(t: TriPreference): number {
  switch (t) {
    case "low":
      return 3;
    case "high":
      return 8.5;
    case "medium":
    default:
      return 5.5;
  }
}

/**
 * Alignment score 0–100: closer match between user want-level and city attribute (both 1–10).
 * Formula: 100 - |delta| * 10, clamped.
 */
export function alignmentScore110(userWant: number, cityAttr: number): number {
  const d = Math.abs(userWant - cityAttr);
  return Math.max(0, Math.min(100, Math.round(100 - d * 10.5)));
}

export function computeLifestyleScore(
  nightlifePref: TriPreference,
  calmPref: TriPreference,
  profile: NormalizedCityProfile
): number {
  const n = alignmentScore110(triToPlanningScale(nightlifePref), profile.nightlife);
  const c = alignmentScore110(triToPlanningScale(calmPref), profile.calmNature);
  return Math.round(0.5 * n + 0.5 * c);
}

export function computeFamilyScore(familyPriority: TriPreference, profile: NormalizedCityProfile): number {
  return alignmentScore110(triToPlanningScale(familyPriority), profile.familyFit);
}

export function computeCareerScore(careerPriority: TriPreference, profile: NormalizedCityProfile): number {
  return alignmentScore110(triToPlanningScale(careerPriority), profile.careerStrength);
}

export function computeExpatScore(internationalPref: TriPreference, profile: NormalizedCityProfile): number {
  const intl = alignmentScore110(triToPlanningScale(internationalPref), profile.expatEase);
  const lang = alignmentScore110(triToPlanningScale(internationalPref), profile.languageBarrierEase);
  return Math.round(0.62 * intl + 0.38 * lang);
}
