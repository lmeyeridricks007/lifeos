import type {
  CitiesBestForExpatsContinueCardConfig,
  CitiesBestForExpatsExploreCardsConfig,
  CitiesBestForExpatsHelpfulToolsShellConfig,
  CitiesBestForExpatsMisunderstandingConfig,
  CitiesBestForExpatsRelatedGuideBlocksConfig,
  CitiesBestForExpatsScenarioConfig,
  CitiesBestForExpatsTradeoffCalloutConfig,
} from "../../best-cities-for-expats/config/citiesBestForExpats.types";

/** Rent pressure signal on shortlist cards (unchanged UI semantics). */
export type CitiesCheapestCostLevel = "low" | "medium-low";

export type CitiesCheapestCityLink = {
  href: string;
  label: string;
  /** Shortlist footer CTA; defaults to first link when omitted. */
  isPrimary?: boolean;
};

export type CitiesCheapestCityProfileSlice = {
  intro: string;
  /** Overrides card-level `bestFor` strings for the profile grid. */
  bestFor?: string[];
  /** Overrides card-level `tradeoffs` for the profile grid. */
  tradeoffs?: string[];
  nextLinks: { href: string; label: string }[];
};

/**
 * Canonical city row for cheapest-cities content — reuse for shortlist cards
 * and (when `profile` is set) decision-profile cards.
 */
export type CitiesCheapestCityCard = {
  id: string;
  name: string;
  costLevel: CitiesCheapestCostLevel;
  specialNote?: string;
  tagline: string;
  tags: string[];
  bestFor: string[];
  tradeoffs: string[];
  links: CitiesCheapestCityLink[];
  profile?: CitiesCheapestCityProfileSlice;
};

export type CitiesCheapestStartCard = {
  id: string;
  title: string;
  body: string;
};

export type CitiesCheapestValueArchetype = {
  id: string;
  title: string;
  body: string;
};

export type CitiesCheapestAffiliateBlocksConfig = {
  placementId: string;
  categoryLinks: readonly { href: string; label: string }[];
  sectionCopy: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  browseLabel: string;
};

export type {
  CitiesBestForExpatsContinueCardConfig,
  CitiesBestForExpatsExploreCardsConfig,
  CitiesBestForExpatsHelpfulToolsShellConfig,
  CitiesBestForExpatsMisunderstandingConfig,
  CitiesBestForExpatsRelatedGuideBlocksConfig,
  CitiesBestForExpatsScenarioConfig,
  CitiesBestForExpatsTradeoffCalloutConfig,
};

export type { PillarFaqItem } from "@expatlife/content";
