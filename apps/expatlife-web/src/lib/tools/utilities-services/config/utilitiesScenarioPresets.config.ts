import type { UtilitiesServicesInput } from "../types";

/**
 * Worked examples: patches merge on top of form defaults.
 * Deep links: use existing `buildUtilitiesServicesPresetHref` with these ids.
 */
export type UtilitiesScenarioPreset = {
  id: string;
  title: string;
  /** One short paragraph for card body — planning story, not a quote. */
  body: string;
  inputPatch: Partial<UtilitiesServicesInput>;
};

export const utilitiesScenarioPresets: readonly UtilitiesScenarioPreset[] = [
  {
    id: "studio-amsterdam",
    title: "Studio in Amsterdam (single renter)",
    body: "Small studio, single adult, one mobile line, standard internet. Typical first-job or student-adjacent setup — energy and internet stay the main comparison levers.",
    inputPatch: {
      city: "amsterdam",
      housingType: "studio",
      householdType: "single",
      adultsCount: 1,
      childrenCount: 0,
      mobileLines: 1,
      sizeBand: "small",
      utilitiesIncludedInRent: "no",
      landlordBuildingIncludesServices: "no",
      plannerMode: "detailed",
    },
  },
  {
    id: "apartment-rotterdam",
    title: "Apartment in Rotterdam (couple)",
    body: "Medium apartment, two adults, dual mobile lines, internet on. Good baseline for Randstad renters comparing broadband tiers before signing.",
    inputPatch: {
      city: "rotterdam",
      housingType: "apartment",
      householdType: "couple",
      adultsCount: 2,
      childrenCount: 0,
      mobileLines: 2,
      sizeBand: "medium",
      utilitiesIncludedInRent: "unsure",
      landlordBuildingIncludesServices: "unsure",
    },
  },
  {
    id: "family-utrecht",
    title: "Family in Utrecht",
    body: "Two adults, two children, medium apartment, average usage. Municipality and water awareness lines matter more; still compare energy and mobile per line.",
    inputPatch: {
      city: "utrecht",
      housingType: "apartment",
      householdType: "family",
      adultsCount: 2,
      childrenCount: 2,
      mobileLines: 2,
      sizeBand: "medium",
      usageLevel: "average",
      utilitiesIncludedInRent: "no",
      landlordBuildingIncludesServices: "no",
    },
  },
  {
    id: "older-house",
    title: "Older / less efficient house",
    body: "Larger house, low insulation band, gas heating. Energy dominates monthly bands — pair with the cost-of-living calculator for the full household picture.",
    inputPatch: {
      housingType: "larger_house",
      sizeBand: "large",
      energyQuality: "low",
      heating: "gas",
      usageLevel: "average",
      plannerMode: "detailed",
      utilitiesIncludedInRent: "no",
      landlordBuildingIncludesServices: "no",
    },
  },
  {
    id: "efficient-apartment",
    title: "Energy-efficient apartment",
    body: "Same household shape as many urban renters but with a newer/efficient shell — energy still matters, yet the gap to the older-house preset is visible in scenarios.",
    inputPatch: {
      housingType: "apartment",
      sizeBand: "medium",
      energyQuality: "efficient",
      heating: "gas",
      usageLevel: "average",
      plannerMode: "detailed",
      utilitiesIncludedInRent: "no",
      landlordBuildingIncludesServices: "no",
    },
  },
  {
    id: "shared-utilities-included",
    title: "Shared housing — utilities included",
    body: "House share with rent that likely bundles core utilities. The model dampens self-contracted energy/water; focus shifts to mobile, insurance, and what the lease actually promises.",
    inputPatch: {
      householdType: "house_share",
      housingType: "apartment",
      adultsCount: 2,
      utilitiesIncludedInRent: "yes",
      landlordBuildingIncludesServices: "yes",
      mobileLines: 2,
    },
  },
  {
    id: "remote-worker-fast-internet",
    title: "Remote worker — fast internet",
    body: "WFH-heavy with a fast tier and detailed planner fields on. Expect higher internet and a wider energy band; book installation early in your real timeline.",
    inputPatch: {
      wfhHeavy: true,
      includeInternet: true,
      internetTier: "fast",
      priority: "quality",
      plannerMode: "detailed",
      moveStage: "moving_soon",
      utilitiesIncludedInRent: "no",
      landlordBuildingIncludesServices: "no",
    },
  },
];
