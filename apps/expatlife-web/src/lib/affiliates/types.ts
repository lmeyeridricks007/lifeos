/**
 * Affiliate content types. CMS-ready: swap loader for CMS client later.
 */

export type AffiliateProvider = {
  id: string;
  name: string;
  tagline: string;
  categoryIds: string[];
  countries: { destination: string[]; origin: string[] };
  badges: string[];
  highlights: string[];
  cta: { label: string; href: string; isAffiliate: boolean };
  disclosure: string;
  logo: { src: string; alt: string };
};

export type AffiliateCategory = {
  id: string;
  label: string;
  description: string;
  icon: string;
};

export type PlacementItem = {
  providerId: string;
  reason: string;
  meta?: Record<string, string>;
};

export type ComparisonField = {
  key: string;
  label: string;
};

export type AffiliatePlacement = {
  id: string;
  destinationCountry: string;
  originCountry: string;
  context: { pageType: string; route: string; slot: string };
  variant: "cards" | "comparison" | "compact-list";
  title: string;
  intro: string;
  categoryOrder: string[];
  items: PlacementItem[];
  disclosure: string;
  comparisonFields?: ComparisonField[];
};

/** Optional context for tool results (future personalization). */
export type ToolResultContext = {
  arrivalStage?: string;
  household?: string;
  jobStatus?: string;
  nationalityRegion?: string;
  [key: string]: string | undefined;
};
