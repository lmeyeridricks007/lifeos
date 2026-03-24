/**
 * Server-only: “Recommended services” grids on marketing and tool pages, sourced from
 * `COMPANIES_REGISTRY` priority order (see `getRecommendedGuideServicesFromRegistry`).
 */

import type { GuideSectionServiceResolved } from "@/src/lib/guides/types";
import {
  getRecommendedGuideServicesFromRegistry,
  type GuideRegistryRecommendationStrategy,
} from "@/src/lib/guides/registryRecommendedServices";

export type PageRecommendedProviderCard = {
  name: string;
  url: string;
  useFor: string;
  logo?: { src: string; alt: string };
  /** Cost / pricing note when the layout shows a second line */
  priceRange?: string;
};

const INDEPENDER: PageRecommendedProviderCard = {
  name: "Independer",
  url: "https://www.independer.nl/",
  useFor: "Compare Dutch basic health and other insurance when you are choosing a policy.",
  logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" },
  priceRange: "Free comparison; insurer premiums vary.",
};

function fromResolved(s: GuideSectionServiceResolved): PageRecommendedProviderCard {
  return {
    name: s.name,
    url: s.url,
    useFor: s.description,
    logo: s.logo,
    priceRange: s.indicativeCost,
  };
}

export function buildPageRecommendedProviderCards(options: {
  categories: readonly string[];
  limit: number;
  strategy?: GuideRegistryRecommendationStrategy;
  append?: PageRecommendedProviderCard[];
}): PageRecommendedProviderCard[] {
  const resolved = getRecommendedGuideServicesFromRegistry(
    options.categories,
    options.limit,
    options.strategy
  );
  return [...resolved.map(fromResolved), ...(options.append ?? [])];
}

/** Visa tools, document checker, compare-visas — legal, consultants, money, housing, mobile, health, expat support + comparison */
export function getVisaRelocationMarketingRecommendedCards(): PageRecommendedProviderCard[] {
  return buildPageRecommendedProviderCards({
    categories: [
      "immigration-lawyers",
      "visa-consultants",
      "banks",
      "housing-platforms",
      "mobile-connectivity",
      "health-insurance",
      "relocation-agencies",
    ],
    limit: 7,
    strategy: "round-robin",
    append: [INDEPENDER],
  });
}

/** Relocation cost estimator + moving-from hub — shipping/consultants + core setup categories */
export function getRelocationCostMarketingRecommendedCards(): PageRecommendedProviderCard[] {
  return buildPageRecommendedProviderCards({
    categories: [
      "visa-consultants",
      "relocation-services",
      "banks",
      "housing-platforms",
      "mobile-connectivity",
      "health-insurance",
    ],
    limit: 6,
    strategy: "round-robin",
    append: [INDEPENDER],
  });
}
