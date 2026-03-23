/**
 * Types for the cities overview hub page (/netherlands/cities/).
 * Reusable for future country city overviews (e.g. /germany/cities/).
 */

export type CitiesOverviewSEO = {
  title: string;
  description: string;
  keywords: string[];
};

export type CitiesOverviewHero = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: { src: string; alt: string; caption?: string; imagePrompt?: string };
  ctas: Array<{ label: string; href: string; primary?: boolean }>;
};

export type CityComparisonRow = {
  slug: string;
  name: string;
  detailHref: string;
  comingSoon?: boolean;
  bestFor: string;
  vibe: string;
  costBand: string;
  housingPressure: string;
  commuteFit: string;
  sectors: string[];
  newcomerSupportName: string;
  newcomerSupportHref?: string;
};

export type QuickFitCard = {
  label: string;
  cityName: string;
  cityHref: string;
  comingSoon?: boolean;
};

export type MajorCityCard = {
  slug: string;
  name: string;
  detailHref: string;
  comingSoon?: boolean;
  /** Editorial card image (often same asset as the city hub hero). */
  image?: { src: string; alt: string };
  overview: string;
  whoChooses: string;
  whyExpatsPick: string;
  strengths: string[];
  tradeoffs: string[];
  newcomerSupport: { name: string; href: string; type?: "official" };
  costBand: string;
  costNote?: string;
  stats?: {
    jobs: number | null;
    businesses: number | null;
    sourceLabel: string;
    sourceHref?: string;
  };
  sectorHighlights: string[];
  ctaLabel: string;
};

export type ExpatPersona = {
  id: string;
  title: string;
  recommendedCities: Array<{ name: string; href: string; comingSoon?: boolean; why: string }>;
  watchOut?: string;
};

export type CityCostRow = {
  cityName: string;
  cityHref: string;
  comingSoon?: boolean;
  rent1Bed: string;
  rentFamily?: string;
  groceries?: string;
  transport?: string;
  healthInsurance?: string;
  affordabilityBand: string;
  note?: string;
};

export type CityJobsRow = {
  cityName: string;
  cityHref: string;
  comingSoon?: boolean;
  jobsCount: number | null;
  businessesCount: number | null;
  sourceLabel: string;
  sourceHref?: string;
  sectorHighlights: string[];
};

export type NewcomerSupportCard = {
  id: string;
  name: string;
  cityOrRegion: string;
  description: string;
  whatItHelpsWith: string[];
  audience: string;
  url: string;
  isOfficial: boolean;
};

export type CitiesExampleScenario = {
  title: string;
  cityName: string;
  cityHref: string;
  comingSoon?: boolean;
  summary: string;
  whyCity: string;
  tradeoffs: string;
  nextSteps: string;
  internalLinks?: Array<{ label: string; href: string }>;
};

export type CitiesRelatedGuideBlock = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

export type CitiesOfficialSource = {
  label: string;
  url: string;
  category: string;
};

export type CitiesToolCard = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "coming_soon";
};

export type SecondaryCityCard = {
  name: string;
  detailHref?: string;
  comingSoon: boolean;
  brief?: string;
};

export type NetherlandsCitiesOverviewData = {
  slug: string;
  country: string;
  path: string;
  /** Scheduled publishing metadata (documentation + consistent content dating). */
  publish: boolean;
  publishDate: string;
  seo: CitiesOverviewSEO;
  hero: CitiesOverviewHero;
  /** H2 + body for the overview section (e.g. “How to use this guide”). */
  guideIntro: {
    heading: string;
    paragraphs: string[];
  };
  /** Editorial framing above the comparison table. */
  hubComparisonIntro?: {
    paragraphs: string[];
    dimensions: string[];
  };
  /** Links to service category pages (route-safe filtering happens at render when needed). */
  hubServiceLinks?: Array<{ label: string; href: string; description?: string }>;
  /** Single block of internal guide links for the hub. */
  hubGuideBlock?: CitiesRelatedGuideBlock;
  /** Bottom-of-page discovery cards. */
  exploreNextCards?: Array<{ label: string; href: string; description: string }>;
  tocItems: Array<{ id: string; label: string }>;
  intro: {
    paragraphs: string[];
    links: Array<{ label: string; href: string }>;
  };
  quickFitCards: QuickFitCard[];
  comparisonRows: CityComparisonRow[];
  majorCityCards: MajorCityCard[];
  personas: ExpatPersona[];
  costComparison: CityCostRow[];
  jobsSnapshot: CityJobsRow[];
  newcomerSupport: NewcomerSupportCard[];
  secondaryCities: SecondaryCityCard[];
  exampleScenarios: CitiesExampleScenario[];
  faqs: Array<{ q: string; a: string }>;
  officialSources: CitiesOfficialSource[];
  relatedGuides: CitiesRelatedGuideBlock[];
  tools: CitiesToolCard[];
};
