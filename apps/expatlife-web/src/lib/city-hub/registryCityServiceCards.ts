import type { CityHubPageData, CityServiceCard } from "@/src/lib/city-hub/types";
import {
  getRecommendedGuideServicesFromRegistry,
  type GuideRegistryRecommendationStrategy,
} from "@/src/lib/guides/registryRecommendedServices";
import type { GuideSectionServiceResolved } from "@/src/lib/guides/types";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";

function registryResolvedToCityCard(
  resolved: GuideSectionServiceResolved,
  index: number,
  displayCategory: string
): CityServiceCard {
  let id: string;
  try {
    const host = new URL(resolved.url).hostname.replace(/^www\./, "");
    id = `registry-${host.replace(/[^a-z0-9]+/gi, "-")}`;
  } catch {
    id = `registry-${resolved.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}-${index}`;
  }
  return {
    id,
    name: resolved.name,
    category: displayCategory,
    description: resolved.description,
    bestFor: resolved.reason,
    costNote: resolved.indicativeCost,
    url: resolved.url,
    isOfficial: false,
    logo: resolved.logo
      ? {
          src: normalizeExternalProviderLogoSrc(resolved.logo.src),
          alt: resolved.logo.alt || `${resolved.name} logo`,
        }
      : undefined,
  };
}

/**
 * City hub service cards from `COMPANIES_REGISTRY` priority order (same source as guide “recommended services”).
 */
export function cityHubCardsFromRegistry(
  categories: readonly string[],
  limit: number,
  displayCategory: string,
  strategy?: GuideRegistryRecommendationStrategy
): CityServiceCard[] {
  const resolved = getRecommendedGuideServicesFromRegistry(
    categories,
    limit,
    strategy ?? (categories.length > 1 ? "round-robin" : "sequential")
  );
  return resolved.map((r, i) => registryResolvedToCityCard(r, i, displayCategory));
}

/**
 * Merges registry-backed health and housing cards into city hub data when those lists are omitted.
 * Used by `CityHubTemplate` for every NL city page so behaviour stays consistent.
 */
export function withCityHubRegistryCards(data: CityHubPageData): CityHubPageData {
  return {
    ...data,
    healthInsurance: {
      ...data.healthInsurance,
      services:
        data.healthInsurance.services !== undefined
          ? data.healthInsurance.services
          : cityHubCardsFromRegistry(["health-insurance"], 3, "Insurance", "sequential"),
    },
    housingCosts: {
      ...data.housingCosts,
      services:
        data.housingCosts.services !== undefined
          ? data.housingCosts.services
          : cityHubCardsFromRegistry(["housing-platforms"], 3, "Housing / relocation", "sequential"),
    },
  };
}
