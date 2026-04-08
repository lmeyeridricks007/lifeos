import type { CityComparisonId, CityComparisonInput } from "../../types";

/**
 * Developer fixtures for deterministic regression checks on the city comparison
 * scoring engine. Each entry documents an intended tendency (not ML — safe to
 * adjust copy if formulas change, but keep behavioral intent).
 */

export type RegressionExpectation = {
  /** Best-ranked city id must match. */
  firstCityId?: CityComparisonId;
  /** `below` must appear earlier in the ranking than `amsterdam`. */
  amsterdamRanksBelow?: CityComparisonId;
  /** First id must have strictly lower modelled total monthly outflow than second. */
  lowerOutflowThan?: readonly [CityComparisonId, CityComparisonId];
  /** Every row’s commute practicality must be null (e.g. remote). */
  commutePracticalityAllNull?: true;
  /** Expected ranking length after sanitize. */
  rankingLength?: number;
};

export type CityComparisonRegressionFixture = {
  id: string;
  /** Plain-language what the engine should reflect. */
  tendency: string;
  partial: Partial<CityComparisonInput>;
  expect: RegressionExpectation;
};

const scenario = (
  active: keyof CityComparisonInput["scenarioToggles"]
): CityComparisonInput["scenarioToggles"] => ({
  balanced: active === "balanced",
  cost_first: active === "cost_first",
  lifestyle_first: active === "lifestyle_first",
  family_first: active === "family_first",
  commute_first: active === "commute_first",
});

export const CITY_COMPARISON_REGRESSION_FIXTURES: readonly CityComparisonRegressionFixture[] = [
  {
    id: "commute_first_eindhoven_office",
    tendency: "With office in Eindhoven and commute-first lens, Eindhoven should lead the set.",
    partial: {
      workMode: "office",
      officeCity: "eindhoven",
      maxCommute: "under30",
      scenarioToggles: scenario("commute_first"),
      selectedCities: ["amsterdam", "rotterdam", "eindhoven", "utrecht"],
    },
    expect: { firstCityId: "eindhoven" },
  },
  {
    id: "family_first_amsterdam_trails_family_hubs",
    tendency: "High family weight + family-first lens should push Amsterdam behind Utrecht / The Hague / Rotterdam on overall order.",
    partial: {
      familySchoolImportance: "high",
      scenarioToggles: scenario("family_first"),
      selectedCities: ["amsterdam", "rotterdam", "utrecht", "the-hague"],
    },
    expect: { amsterdamRanksBelow: "the-hague" },
  },
  {
    id: "lifestyle_first_nightlife_amsterdam_over_groningen",
    tendency: "High nightlife + lifestyle-first lens and comfortable net should favour Amsterdam over Groningen on headline score.",
    partial: {
      monthlyNetSalary: 6500,
      nightlifePref: "high",
      natureCalmPref: "low",
      scenarioToggles: scenario("lifestyle_first"),
      selectedCities: ["amsterdam", "groningen"],
    },
    expect: { firstCityId: "amsterdam", rankingLength: 2 },
  },
  {
    id: "col_anchor_eindhoven_cheaper_than_amsterdam",
    tendency: "Same household inputs — Eindhoven modelled total outflow should stay below Amsterdam (shared COL bridge).",
    partial: {
      selectedCities: ["amsterdam", "eindhoven"],
      householdType: "single",
      monthlyNetSalary: 3800,
    },
    expect: { lowerOutflowThan: ["eindhoven", "amsterdam"], rankingLength: 2 },
  },
  {
    id: "remote_commute_practicality_suppressed",
    tendency: "Remote work: commute matrix classes are not applied; practicality stays null while scores still compute.",
    partial: {
      workMode: "remote",
      householdType: "custom",
      adultsCount: 2,
      childrenCount: 2,
      monthlyNetSalary: 4200,
      selectedCities: ["delft", "leiden", "haarlem"],
    },
    expect: { commutePracticalityAllNull: true, rankingLength: 3 },
  },
];
