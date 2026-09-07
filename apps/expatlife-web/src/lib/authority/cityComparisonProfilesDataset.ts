import { NORMALIZED_CITY_PROFILES } from "@/src/lib/tools/city-comparison/scoring/normalizedProfiles";
import { csvDownloadResponse, jsonDownloadResponse, toCsv } from "@/src/lib/authority/downloadHelpers";

export const CITY_COMPARISON_PROFILES_AS_OF = "2026-08" as const;
export const CITY_COMPARISON_PATH = "/netherlands/tools/city-comparison" as const;

export function buildCityComparisonProfilesDataset() {
  const profiles = Object.values(NORMALIZED_CITY_PROFILES).map((p) => ({
    id: p.id,
    displayName: p.displayName,
    colProxy: p.colProxy,
    rentPlanningMult: p.rentPlanningMult,
    rentLevel: p.rentLevel,
    livingCostLevel: p.livingCostLevel,
    careerStrength: p.careerStrength,
    expatEase: p.expatEase,
    familyFit: p.familyFit,
    nightlife: p.nightlife,
    calmNature: p.calmNature,
    commuteHubStrength: p.commuteHubStrength,
    internationalSchoolSupport: p.internationalSchoolSupport,
    languageBarrierEase: p.languageBarrierEase,
    comments: p.comments,
  }));

  return {
    meta: {
      id: "expatcopilot-city-comparison-profiles",
      title: "ExpatCopilot Netherlands city comparison normalized profiles",
      path: CITY_COMPARISON_PATH,
      asOf: CITY_COMPARISON_PROFILES_AS_OF,
      scale: "1–10 editorial attributes (higher rentLevel / livingCostLevel = more expensive)",
      licenseNote:
        "Editorial scoring heuristics owned by ExpatCopilot. Not an official ranking. Redistribution permitted with attribution and as-of date.",
      methodology:
        "Profiles feed weighted scenario scoring (balanced / cost / lifestyle / family / commute). Commute and COL bridges apply additional heuristics at runtime.",
    },
    profiles,
  };
}

export function cityComparisonProfilesJsonResponse(): Response {
  return jsonDownloadResponse(
    buildCityComparisonProfilesDataset(),
    `expatcopilot-city-comparison-profiles-${CITY_COMPARISON_PROFILES_AS_OF}.json`
  );
}

export function cityComparisonProfilesCsvResponse(): Response {
  const rows = Object.values(NORMALIZED_CITY_PROFILES).map((p) => [
    p.id,
    p.displayName,
    p.colProxy,
    p.rentLevel,
    p.livingCostLevel,
    p.careerStrength,
    p.expatEase,
    p.familyFit,
    p.nightlife,
    p.calmNature,
    p.commuteHubStrength,
    p.internationalSchoolSupport,
    p.languageBarrierEase,
    p.comments,
  ]);
  const csv = toCsv(
    [
      "city_id",
      "display_name",
      "col_proxy",
      "rent_level",
      "living_cost_level",
      "career_strength",
      "expat_ease",
      "family_fit",
      "nightlife",
      "calm_nature",
      "commute_hub",
      "intl_schools",
      "language_ease",
      "comments",
    ],
    rows
  );
  return csvDownloadResponse(csv, `expatcopilot-city-comparison-profiles-${CITY_COMPARISON_PROFILES_AS_OF}.csv`);
}
