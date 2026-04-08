/**
 * Registry-backed slice: `mobile-connectivity` only (see `getUtilitiesServicesGroupedRecommendations`).
 * All other planner groups (energy comparators and retailers, water, broadband/TV, insulation, home insurance)
 * live in `utilitiesPlannerCompanyShortlists.ts` so URLs and copy stay in one place.
 * Contextual reordering: `contextualizeUtilitiesServiceGroups` in `pageRegistryRecommendations.ts`.
 */
export type UtilitiesRegistryCardStrategy = "sequential" | "round-robin";

export type UtilitiesRecommendedServiceGroupConfig = {
  /** Stable key for reordering / A-B tests */
  id: string;
  title: string;
  description: string;
  registryCategories: readonly string[];
  cardLimit: number;
  strategy: UtilitiesRegistryCardStrategy;
  /** Shown near the group in UI — reminds readers these are editorial picks, not live tariffs */
  planningNote?: string;
};

export const utilitiesRecommendedServices: readonly UtilitiesRecommendedServiceGroupConfig[] = [
  {
    id: "mobile-sim-only",
    title: "Mobile & SIM-only",
    description:
      "Dutch mobile networks and SIM-only brands. Home broadband is contracted separately; check coverage and install lead times at your address on each provider’s site.",
    registryCategories: ["mobile-connectivity"],
    cardLimit: 5,
    strategy: "sequential",
    planningNote: "Promotions change often; registry order is a starting shortlist, not a live quote.",
  },
];
