import type { PillarFaqItem } from "@expatlife/content";
import type { MovePillarExploreCard } from "@/src/components/moving/MovePillarExploreGrid";
import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";

/** Signal levels used on city comparison cards (unchanged UI semantics). */
export type BestCitiesLevel = "high" | "medium" | "mixed" | "lower";

/** Lucide-backed keys for Start-here cards. */
export type CitiesBestForExpatsStartIconKey = "work" | "affordability" | "family" | "lifestyle";

/** Visual treatment for city option cards (maps to featured / badge). */
export type CitiesBestForExpatsVisualKey = "core-hub" | "strong-option";

/** Optional metadata on internal links (analytics, future use). */
export type CitiesBestForExpatsInternalLink = {
  href: string;
  label?: string;
  description?: string;
};

export type CitiesBestForExpatsStartCardConfig = {
  id: string;
  iconKey: CitiesBestForExpatsStartIconKey;
  title: string;
  intro: string;
  keyPoints: string[];
  tags?: string[];
  tradeoffs?: string[];
  cta: CitiesBestForExpatsInternalLink;
};

export type CitiesBestForExpatsCityCardConfig = {
  id: string;
  name: string;
  guide: CitiesBestForExpatsInternalLink;
  intro: string;
  bestFor: string;
  tradeoffs: string[];
  tags?: string[];
  visualKey: CitiesBestForExpatsVisualKey;
  levels: {
    costPressure: BestCitiesLevel;
    internationalFeel: BestCitiesLevel;
    familyFit: BestCitiesLevel;
    connectivity: BestCitiesLevel;
  };
};

export type CitiesBestForExpatsScenarioPick = {
  name: string;
  href: string;
  why: string;
};

export type CitiesBestForExpatsScenarioConfig = {
  id: string;
  title: string;
  intro: string;
  bestFor?: string;
  tradeoffs: string[];
  tags: string[];
  picks: CitiesBestForExpatsScenarioPick[];
  toolHint?: CitiesBestForExpatsInternalLink;
};

export type CitiesBestForExpatsTradeoffCalloutConfig = {
  id: string;
  title: string;
  body: string;
  tags?: string[];
};

export type CitiesBestForExpatsMisunderstandingConfig = {
  id: string;
  title: string;
  body: string;
  tags?: string[];
};

export type CitiesBestForExpatsProfileCardConfig = {
  id: string;
  name: string;
  guide: CitiesBestForExpatsInternalLink;
  intro: string;
  bestFor: string;
  tradeoffs: string[];
  tags?: string[];
  nextLinks: CitiesBestForExpatsInternalLink[];
};

export type CitiesBestForExpatsHelpfulToolItemConfig = {
  title: string;
  description: string;
  link: CitiesBestForExpatsInternalLink;
};

export type CitiesBestForExpatsHelpfulToolsSectionConfig = {
  eyebrow: string;
  description?: string;
  items: CitiesBestForExpatsHelpfulToolItemConfig[];
};

export type CitiesBestForExpatsHelpfulToolsShellConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: CitiesBestForExpatsHelpfulToolsSectionConfig[];
};

export type CitiesBestForExpatsContinueCardConfig = {
  id: string;
  title: string;
  description: string;
  link: CitiesBestForExpatsInternalLink;
  ctaLabel: string;
};

/** Category strip links for `MoveGuideAffiliateSupportBlock` — label required for display. */
export type CitiesBestForExpatsServiceCategoryLink = {
  href: string;
  label: string;
};

export type CitiesBestForExpatsRecommendedServicesConfig = {
  affiliatePlacementId: string;
  serviceCategoryLinks: readonly CitiesBestForExpatsServiceCategoryLink[];
};

/** FAQ + references re-use existing product types at the page boundary. */
export type CitiesBestForExpatsFaqConfig = readonly PillarFaqItem[];
export type CitiesBestForExpatsReferencesConfig = MoveVisaResidencyReferences;
export type CitiesBestForExpatsRelatedGuideBlocksConfig = readonly CityRelatedGuideBlock[];
export type CitiesBestForExpatsExploreCardsConfig = readonly MovePillarExploreCard[];

// --- View model shapes (consumed by React components; stable public API) ---

export type BestCitiesStartHereCard = {
  id: string;
  iconKey: CitiesBestForExpatsStartIconKey;
  title: string;
  intro: string;
  keyPoints: string[];
  cta: { label: string; href: string };
};

export type BestCitiesComparisonCity = {
  id: string;
  name: string;
  href: string;
  tagline: string;
  bestFor: string;
  tradeOffs: string;
  levels: {
    costPressure: BestCitiesLevel;
    internationalFeel: BestCitiesLevel;
    familyFit: BestCitiesLevel;
    connectivity: BestCitiesLevel;
  };
  featured?: boolean;
};

export type BestCitiesScenario = {
  id: string;
  title: string;
  chips?: string[];
  intro: string;
  picks: Array<{ name: string; href: string; why: string }>;
  tradeOffs: string;
  toolHint?: { label: string; href: string };
};

export type BestCitiesProfileCard = {
  id: string;
  name: string;
  href: string;
  personality: string;
  bestFor: string;
  watchOuts: string;
  nextLinks: Array<{ label: string; href: string }>;
};
