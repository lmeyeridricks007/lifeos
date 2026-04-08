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

/** Cost of living calculator — banks, housing search, health, relocation help. */
export function getCostOfLivingRecommendedCards(): PageRecommendedProviderCard[] {
  return buildPageRecommendedProviderCards({
    categories: ["banks", "housing-platforms", "health-insurance", "relocation-agencies", "mobile-connectivity"],
    limit: 6,
    strategy: "round-robin",
    append: [INDEPENDER],
  });
}

/** City comparison — housing search, agents, banks, health, relocation (planning order). */
export function getCityComparisonRecommendedCards(): PageRecommendedProviderCard[] {
  return buildPageRecommendedProviderCards({
    categories: [
      "housing-platforms",
      "rental-agencies",
      "banks",
      "health-insurance",
      "relocation-agencies",
      "relocation-services",
    ],
    limit: 8,
    strategy: "round-robin",
    append: [INDEPENDER],
  });
}

export type CityComparisonServiceGroup = {
  title: string;
  description?: string;
  cards: PageRecommendedProviderCard[];
};

/** Grouped by likely next step after picking a city shortlist (editorial order). */
export function getCityComparisonGroupedRecommendations(): CityComparisonServiceGroup[] {
  return [
    {
      title: "Housing platforms",
      description: "Browse listings once you have a rough city and monthly budget band from the comparison.",
      cards: buildPageRecommendedProviderCards({
        categories: ["housing-platforms"],
        limit: 4,
        strategy: "sequential",
      }),
    },
    {
      title: "Rental agencies",
      description: "Agencies and viewing support — confirm city coverage, fees, and contract terms directly.",
      cards: buildPageRecommendedProviderCards({
        categories: ["rental-agencies"],
        limit: 4,
        strategy: "sequential",
      }),
    },
    {
      title: "Bank accounts",
      description: "Everyday banking after you know where you will register and work.",
      cards: buildPageRecommendedProviderCards({
        categories: ["banks"],
        limit: 3,
        strategy: "sequential",
      }),
    },
    {
      title: "Health insurance",
      description: "Basic Dutch health insurance is mandatory for most residents — compare policies, not just premium teasers.",
      cards: buildPageRecommendedProviderCards({
        categories: ["health-insurance"],
        limit: 4,
        strategy: "sequential",
        append: [INDEPENDER],
      }),
    },
    {
      title: "Relocation support",
      description: "When you want coordinated help with housing, schools, or employer-sponsored moves.",
      cards: buildPageRecommendedProviderCards({
        categories: ["relocation-agencies", "relocation-services"],
        limit: 5,
        strategy: "round-robin",
      }),
    },
  ];
}

/** Rent affordability — split bundles for contextual sections (housing vs banks vs health vs relocation). */
export type RentAffordabilityServiceBundles = {
  housing: PageRecommendedProviderCard[];
  banks: PageRecommendedProviderCard[];
  health: PageRecommendedProviderCard[];
  relocation: PageRecommendedProviderCard[];
};

export function getRentAffordabilityServiceBundles(): RentAffordabilityServiceBundles {
  return {
    housing: buildPageRecommendedProviderCards({
      categories: ["housing-platforms"],
      limit: 4,
      strategy: "sequential",
    }),
    banks: buildPageRecommendedProviderCards({
      categories: ["banks"],
      limit: 4,
      strategy: "sequential",
    }),
    health: buildPageRecommendedProviderCards({
      categories: ["health-insurance"],
      limit: 4,
      strategy: "sequential",
      append: [INDEPENDER],
    }),
    relocation: buildPageRecommendedProviderCards({
      categories: ["relocation-agencies", "relocation-services"],
      limit: 5,
      strategy: "round-robin",
    }),
  };
}

/** Curated expat tax advisors for 30% ruling planning — direct provider sites (no affiliate IDs in registry). */
/** Payroll / relocation style providers for salary planning tool — from registry (editorial order). */
export function getDutchSalaryNetPayrollRelocationCards(): PageRecommendedProviderCard[] {
  return buildPageRecommendedProviderCards({
    categories: ["relocation-services", "relocation-agencies"],
    limit: 6,
    strategy: "round-robin",
  });
}

export function getDutchSalaryNetPayrollServiceCards(): PageRecommendedProviderCard[] {
  return buildPageRecommendedProviderCards({
    categories: ["relocation-services"],
    limit: 4,
    strategy: "sequential",
  });
}

export function getDutchSalaryNetRelocationConsultantCards(): PageRecommendedProviderCard[] {
  return buildPageRecommendedProviderCards({
    categories: ["relocation-agencies"],
    limit: 4,
    strategy: "sequential",
  });
}

/** Banks for salary-net tool shortlist (registry order). */
export function getDutchSalaryNetBankCards(): PageRecommendedProviderCard[] {
  return buildPageRecommendedProviderCards({
    categories: ["banks"],
    limit: 6,
    strategy: "sequential",
  });
}

export function getThirtyPercentRulingTaxAdvisorCards(): PageRecommendedProviderCard[] {
  return [
    {
      name: "Blue Umbrella",
      url: "https://www.blueumbrella.nl/",
      useFor: "Dutch tax filing and expat-focused support — useful for ruling-related questions, payroll context, and annual returns.",
      priceRange: "Paid services; confirm pricing for your case.",
    },
    {
      name: "TaxSavers",
      url: "https://www.taxsavers.nl/",
      useFor: "Tax returns and advice aimed at internationals; helpful when you want hands-on filing or a second opinion on ruling paperwork.",
      priceRange: "Paid services; check current rates.",
    },
    {
      name: "Expatax",
      url: "https://www.expatax.nl/",
      useFor: "Expat income tax guidance and ruling-related planning for employees in the Netherlands.",
      priceRange: "Paid services; confirm scope before engaging.",
    },
  ];
}
