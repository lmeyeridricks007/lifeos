/**
 * Types for the expat services hub page (/netherlands/services/).
 * Reusable for future country hubs: /germany/services/, /france/services/, etc.
 */

export type ServicesHubSEO = {
  title: string;
  description: string;
  keywords: string[];
};

export type ServicesHubHero = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
    /** Prompt for future image generation / CMS. */
    imagePrompt?: string;
  };
  ctas: Array<{ label: string; href: string; primary?: boolean }>;
};

export type ServiceCategoryCard = {
  slug: string;
  name: string;
  href: string;
  description: string;
  examples: string[];
  bestForStage: string;
  /** e.g. "immigration-legal" | "banking-insurance" | "housing-relocation" for grouping on hub. */
  group?: string;
  /** When true, show in Featured services on hub and nav. */
  featured?: boolean;
};

export type RelocationStageBlock = {
  id: string;
  title: string;
  description?: string;
  categorySlugs: string[];
  /** Resolved hrefs for linking (e.g. /netherlands/services/immigration-visas/) */
  categoryHrefs?: Array<{ label: string; href: string }>;
};

export type FeaturedCategoryHighlight = {
  slug: string;
  title: string;
  intro: string;
  providerExamples: string[];
  href: string;
  guideLinks?: Array<{ label: string; href: string }>;
};

export type PopularNeedCard = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export type ServicesRelatedGuideBlock = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

export type ServicesToolCard = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "coming_soon";
};

export type ServicesHubPageData = {
  slug: string;
  country: string;
  path: string;
  seo: ServicesHubSEO;
  hero: ServicesHubHero;
  tocItems: Array<{ id: string; label: string }>;
  intro: {
    heading: string;
    paragraphs: string[];
    links: Array<{ label: string; href: string }>;
    disclaimer?: string;
  };
  categories: ServiceCategoryCard[];
  stages: RelocationStageBlock[];
  popularNeeds: PopularNeedCard[];
  highlights: FeaturedCategoryHighlight[];
  howItWorks: {
    heading: string;
    paragraphs: string[];
    disclosure: string[];
  };
  /** Trust and methodology links shown after editorial disclosure. */
  trustLinks?: Array<{ label: string; href: string }>;
  /** Optional short site publisher note for E-E-A-T (e.g. who runs the site). */
  publisherNote?: string;
  relatedGuides: ServicesRelatedGuideBlock[];
  tools: ServicesToolCard[];
  faqs: Array<{ q: string; a: string }>;
};
