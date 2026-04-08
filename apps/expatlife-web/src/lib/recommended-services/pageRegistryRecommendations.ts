/**
 * Server-only: “Recommended services” grids on marketing and tool pages, sourced from
 * `COMPANIES_REGISTRY` priority order (see `getRecommendedGuideServicesFromRegistry`).
 */

import type { GuideSectionServiceResolved } from "@/src/lib/guides/types";
import {
  getRecommendedGuideServicesFromRegistry,
  type GuideRegistryRecommendationStrategy,
} from "@/src/lib/guides/registryRecommendedServices";
import type { UtilitiesServicesInput } from "@/src/lib/tools/utilities-services/types";
import {
  UTILITIES_BROADBAND_TV_CARDS,
  UTILITIES_ENERGY_COMPARATOR_CARDS,
  UTILITIES_ENERGY_SUPPLIER_CARDS,
  UTILITIES_HOME_INSURANCE_CARDS,
  UTILITIES_INSULATION_EFFICIENCY_CARDS,
  UTILITIES_PLANNER_GROUP_TITLES,
  UTILITIES_WATER_CARDS,
  type UtilitiesPlannerCompanyCard,
} from "@/src/lib/tools/utilities-services/utilitiesPlannerCompanyShortlists";

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

/** Childcare cost estimator — relocation, housing search, health, tax help, banks. */
export function getChildcareRecommendedCards(): PageRecommendedProviderCard[] {
  return buildPageRecommendedProviderCards({
    categories: [
      "relocation-agencies",
      "relocation-services",
      "housing-platforms",
      "banks",
      "health-insurance",
      "visa-consultants",
    ],
    limit: 6,
    strategy: "round-robin",
    append: [INDEPENDER],
  });
}

/** Editorial groupings for the childcare estimator (external services + official portals as cards). */
export type ChildcareRecommendedServiceGroup = {
  title: string;
  description?: string;
  cards: PageRecommendedProviderCard[];
};

const CHILDCARE_OFFICIAL_CONTEXT_CARDS: PageRecommendedProviderCard[] = [
  {
    name: "Rijksoverheid — Kinderopvang",
    url: "https://www.rijksoverheid.nl/onderwerpen/kinderopvang",
    useFor:
      "Neutral overview of childcare types in the Netherlands and how registration fits — use before you shortlist individual providers.",
    priceRange: "Public information.",
  },
  {
    name: "Belastingdienst — Kinderopvangtoeslag",
    url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/toeslagen/kinderopvangtoeslag/kinderopvangtoeslag",
    useFor: "Official childcare benefit hub: rules, updates, and links to applications — not a substitute for reading your award letter.",
    priceRange: "Government site.",
  },
];

/** Grouped recommendations: childcare context, relocation, housing, banking, health, tax, visa. */
export function getChildcareGroupedRecommendations(): ChildcareRecommendedServiceGroup[] {
  return [
    {
      title: "Childcare search & official context",
      description:
        "Government pages define care types and benefit rules; providers and agencies set prices and contracts. Use both, not one or the other.",
      cards: CHILDCARE_OFFICIAL_CONTEXT_CARDS,
    },
    {
      title: "Relocation services",
      description: "Help with housing, schools, or employer-sponsored moves — confirm city coverage and fees before you engage.",
      cards: buildPageRecommendedProviderCards({
        categories: ["relocation-agencies", "relocation-services"],
        limit: 4,
        strategy: "round-robin",
      }),
    },
    {
      title: "Housing search",
      description: "Listings and agents interact directly with commute distance to childcare and school — budget them together.",
      cards: buildPageRecommendedProviderCards({
        categories: ["housing-platforms"],
        limit: 4,
        strategy: "sequential",
      }),
    },
    {
      title: "Banking for families",
      description: "Everyday accounts for rent, deposits, and childcare direct debits — features matter as much as brand.",
      cards: buildPageRecommendedProviderCards({
        categories: ["banks"],
        limit: 4,
        strategy: "sequential",
      }),
    },
    {
      title: "Health insurance",
      description: "Basic Dutch health insurance is mandatory for most residents — compare cover, not teaser premiums alone.",
      cards: buildPageRecommendedProviderCards({
        categories: ["health-insurance"],
        limit: 3,
        strategy: "sequential",
        append: [INDEPENDER],
      }),
    },
    {
      title: "Expat tax advisors",
      description: "When income, allowances, and payroll interact beyond what a planner can safely assume.",
      cards: getThirtyPercentRulingTaxAdvisorCards(),
    },
    {
      title: "Visa & immigration consultants",
      description: "If permits or start dates drive when childcare can begin, confirm timelines with qualified immigration support.",
      cards: buildPageRecommendedProviderCards({
        categories: ["visa-consultants"],
        limit: 3,
        strategy: "sequential",
      }),
    },
  ];
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

/** Healthcare allowance — insurers, tax help, relocation, banks, COL/rent tools context. */
export type HealthcareAllowanceServiceBundles = {
  health: PageRecommendedProviderCard[];
  tax: PageRecommendedProviderCard[];
  relocation: PageRecommendedProviderCard[];
  banks: PageRecommendedProviderCard[];
};

export function getHealthcareAllowanceServiceBundles(): HealthcareAllowanceServiceBundles {
  return {
    health: buildPageRecommendedProviderCards({
      categories: ["health-insurance"],
      limit: 4,
      strategy: "sequential",
      append: [INDEPENDER],
    }),
    tax: getThirtyPercentRulingTaxAdvisorCards(),
    relocation: buildPageRecommendedProviderCards({
      categories: ["relocation-agencies", "relocation-services"],
      limit: 4,
      strategy: "round-robin",
    }),
    banks: buildPageRecommendedProviderCards({
      categories: ["banks"],
      limit: 4,
      strategy: "sequential",
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

export type UtilitiesServicesServiceGroup = {
  title: string;
  description?: string;
  cards: PageRecommendedProviderCard[];
};

const NL_UTILITIES_GUIDE_CARD: PageRecommendedProviderCard = {
  name: "Utilities in the Netherlands (guide)",
  url: "/netherlands/living/utilities/",
  useFor: "Editorial context on energy, water, internet, and gemeente-linked charges before you compare retail offers.",
  priceRange: "Free guide on ExpatCopilot",
};

function utilitiesPlannerCards(cards: UtilitiesPlannerCompanyCard[]): PageRecommendedProviderCard[] {
  return cards as PageRecommendedProviderCard[];
}

const ACM_ENERGY_CONSUMER_CARD: PageRecommendedProviderCard = {
  name: "ACM — energy for consumers",
  url: "https://www.acm.nl/en/market-regulation/sectors/energy/energy-for-consumers",
  useFor: "Dutch competition authority guidance on switching, contracts, and consumer rights in energy retail.",
  priceRange: "Official information — no sales.",
};

const NL_MOBILE_HUB_CARD: PageRecommendedProviderCard = {
  name: "Mobile & internet in the Netherlands",
  url: "/netherlands/services/mobile-connectivity/",
  useFor: "Connectivity category hub — SIM-only, bundles, and broadband context for expat households.",
  priceRange: "Free guides and shortlists",
};

function utilitiesServiceGroupsCore(): UtilitiesServicesServiceGroup[] {
  const t = UTILITIES_PLANNER_GROUP_TITLES;
  return [
    {
      title: t.understanding,
      description:
        "Start with how Dutch bills are structured—then use the company shortlists below for tariffs, contracts, and postcode checks.",
      cards: [NL_UTILITIES_GUIDE_CARD, ACM_ENERGY_CONSUMER_CARD],
    },
    {
      title: t.compareEnergy,
      description:
        "Comparison sites aggregate retail offers; you still sign with one supplier. Skip aggressive switching if your lease bundles energy with rent.",
      cards: utilitiesPlannerCards(UTILITIES_ENERGY_COMPARATOR_CARDS),
    },
    {
      title: t.energyRetailers,
      description:
        "Nationwide electricity and gas retailers you may contract with directly—always run an address check and read contract length and green-power claims.",
      cards: utilitiesPlannerCards(UTILITIES_ENERGY_SUPPLIER_CARDS),
    },
    {
      title: t.water,
      description:
        "Tap water is a regional monopoly: one company bills your address. Use Rijksoverheid, VEWIN, or your letterbox invoice to confirm which applies—do not “shop” multiple water retailers.",
      cards: utilitiesPlannerCards(UTILITIES_WATER_CARDS),
    },
    {
      title: t.broadbandTv,
      description:
        "Fixed internet and TV bundles (Ziggo cable, KPN/Odido/DELTA fibre, etc.). Line speeds and install dates depend on what is already built to your flat or house.",
      cards: utilitiesPlannerCards(UTILITIES_BROADBAND_TV_CARDS),
    },
    {
      title: t.insulation,
      description:
        "Official subsidies and independent advice for insulation and efficiency—especially relevant for owners and long lets; installers quote separately.",
      cards: utilitiesPlannerCards(UTILITIES_INSULATION_EFFICIENCY_CARDS),
    },
    {
      title: t.homeInsurance,
      description:
        "Contents (inboedel) and liability (aansprakelijkheid) cover for your household—not the same as mandatory Dutch basic health insurance.",
      cards: utilitiesPlannerCards(UTILITIES_HOME_INSURANCE_CARDS),
    },
    {
      title: t.mobile,
      description:
        "SIM-only and mobile plans from our reviewed shortlist; pair with a separate home internet contract unless you rely on tethering.",
      cards: buildPageRecommendedProviderCards({
        categories: ["mobile-connectivity"],
        limit: 5,
        strategy: "sequential",
      }),
    },
  ];
}

/** Utilities planner — mobile/broadband from registry; editorial + official energy context; contextual tariff comparators. */
export function getUtilitiesServicesGroupedRecommendations(): UtilitiesServicesServiceGroup[] {
  return utilitiesServiceGroupsCore();
}

/**
 * Reorders and augments recommendation groups using calculator inputs from the shareable URL (`?s=`).
 * When `input` is null (no URL state), returns `base` unchanged.
 */
export function contextualizeUtilitiesServiceGroups(
  base: UtilitiesServicesServiceGroup[],
  input: UtilitiesServicesInput | null
): UtilitiesServicesServiceGroup[] {
  if (!input) return base;

  const t = UTILITIES_PLANNER_GROUP_TITLES;
  const placed = new Set<string>();
  const out: UtilitiesServicesServiceGroup[] = [];

  /** When rent likely includes energy, push retail comparators and suppliers below connectivity and insurance. */
  const energyLikelyBundled =
    input.utilitiesIncludedInRent === "yes" &&
    (input.landlordBuildingIncludesServices === "yes" || input.landlordBuildingIncludesServices === "unsure");

  let ordered = [...base];
  if (energyLikelyBundled) {
    const demote = new Set<string>([t.compareEnergy, t.energyRetailers]);
    const head = ordered.filter((g) => !demote.has(g.title));
    const tail = ordered.filter((g) => demote.has(g.title));
    ordered = [...head, ...tail];
  }

  const telecomHeavy = input.includeInternet || input.includeMobile || input.includeTvMedia;
  if (telecomHeavy) {
    const bb = ordered.find((g) => g.title === t.broadbandTv);
    if (bb) {
      out.push(bb);
      placed.add(bb.title);
    }
    const mobileGroup = ordered.find((g) => g.title === t.mobile);
    if (mobileGroup) {
      out.push({ ...mobileGroup, cards: [NL_MOBILE_HUB_CARD, ...mobileGroup.cards] });
      placed.add(mobileGroup.title);
    }
  }

  const insHeavy = input.includeContentsInsurance || input.includeLiabilityInsurance;
  if (insHeavy) {
    const ins = ordered.find((g) => g.title === t.homeInsurance);
    if (ins && !placed.has(ins.title)) {
      out.push(ins);
      placed.add(ins.title);
    }
  }

  for (const g of ordered) {
    if (!placed.has(g.title)) out.push(g);
  }

  return out;
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
