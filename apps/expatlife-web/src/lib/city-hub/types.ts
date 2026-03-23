/**
 * Types for city hub pages (e.g. Amsterdam, Rotterdam).
 * Supports programmatic rollout to other NL cities.
 */

export type CityHubSEO = {
  title: string;
  description: string;
  keywords: string[];
};

export type CityHubHero = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  /** Hero image; path or URL. */
  image?: {
    src: string;
    alt: string;
    caption?: string;
    priority?: boolean;
    /** Prompt for future image generation / CMS. */
    imagePrompt?: string;
  };
  ctas: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
};

export type CityQuickFact = {
  label: string;
  value: string;
};

export type CityProcessStep = {
  title: string;
  body?: string;
};

export type CityCostCard = {
  label: string;
  value: string;
  note?: string;
  /** e.g. "Typical estimate" */
  disclaimer?: string;
};

export type CityExampleScenario = {
  title: string;
  summary: string;
  needsFirst: string[];
  documents: string[];
  timing: string;
  mistakes: string[];
};

export type CityServiceCard = {
  id: string;
  name: string;
  category: string;
  description: string;
  bestFor?: string;
  costNote?: string;
  url: string;
  isOfficial?: boolean;
  logo?: { src: string; alt: string };
};

export type CityToolCard = {
  label: string;
  href: string;
  description?: string;
  status?: "live" | "coming_soon";
};

export type CityOfficialSource = {
  label: string;
  url: string;
  category: string;
};

export type CityRelatedGuideBlock = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

export type CityTocItem = {
  id: string;
  label: string;
};

/** Structured "Living in {City} as an Expat" section. */
export type CityOverviewSection = {
  heading: string;
  paragraphs: string[];
};

/** Single reason card for "Why Expats Choose {City}". */
export type CityReasonCard = {
  title: string;
  explanation: string;
  whoItSuits: string;
};

/** Jobs and companies ecosystem snapshot. */
export type CityJobsEcosystem = {
  heading: string;
  companiesCount: number | null;
  jobsCount: number | null;
  sourceLabel?: string;
  sourceHref?: string;
  industries: string[];
  majorEmployers: string[];
};

/** One row in the Dutch cities comparison table. */
export type CityComparisonRow = {
  city: string;
  cityHref: string;
  bestFor: string;
  typicalJobs: string;
  lifestyle: string;
  housingCost: string;
  commute: string;
};

/** "Who typically moves to {City}" section. */
export type CityExpatsProfile = {
  heading: string;
  profiles: string[];
};

export type CityHubPageData = {
  slug: string;
  country: string;
  name: string;
  path: string;
  /** When true with `publishDate`, used for Article JSON-LD `dateModified` and editorial consistency. */
  publish?: boolean;
  publishDate?: string;
  seo: CityHubSEO;
  hero: CityHubHero;
  tocItems: CityTocItem[];
  quickFacts: CityQuickFact[];
  /** Optional H2 above quick facts (e.g. “Haarlem at a Glance”). */
  quickFactsHeading?: string;
  /** Optional second narrative block (e.g. “What it’s like to live here”). */
  lifeInCity?: CityOverviewSection;
  /** Trade-offs / caveats section (render order may follow `hubLayout`). */
  tradeOffs?: { heading: string; paragraphs: string[] };
  /**
   * `amsterdam-area-alternative`: intro-first layout, quick facts after intro, optional reorder of
   * comparison vs profiles. Default matches Amsterdam/Utrecht-style pages.
   */
  hubLayout?: "default" | "amsterdam-area-alternative";
  /**
   * With `amsterdam-area-alternative`, render first 30 days, who-moves-here, and trade-offs
   * immediately after the opening blocks (before Overview and registration/admin sections).
   * City comparison stays after services.
   */
  earlyPracticalSections?: boolean;
  /** Override “Official Sources” H2 (default in template). */
  officialSourcesHeading?: string;
  /** Override default intro paragraph above the official links list. */
  officialSourcesIntro?: string;
  /** Override city links strip title (default: “Other Popular Dutch Cities for Expats”). */
  cityLinksSectionTitle?: string;
  /** Override H2 above related guide blocks. */
  relatedGuidesSectionTitle?: string;
  /** Override example scenarios section title + intro. */
  exampleScenariosHeading?: string;
  exampleScenariosIntro?: string;
  /** Override “Useful Services for Newcomers in {name}” heading. */
  servicesExpatsHeading?: string;
  /** Optional: "Living in {City} as an Expat" narrative section. */
  cityOverview?: CityOverviewSection;
  /** Optional: "Why Expats Choose {City}" reason cards. */
  whyExpatsChoose?: { heading: string; reasons: CityReasonCard[] };
  /** Optional: "Jobs and Companies in {City}" stats and employers. */
  jobsEcosystem?: CityJobsEcosystem;
  /** Optional: "Comparing Dutch Cities" – table rows come from shared data; heading + CTA only. */
  cityComparison?: { heading: string; ctaLabel: string; ctaHref: string };
  /** Optional: "Who typically moves to {City}" profile list. */
  whoMovesHere?: CityExpatsProfile;
  overview: {
    paragraphs: string[];
    links: Array<{ label: string; href: string }>;
  };
  /** Registration section content */
  registration: {
    heading: string;
    body: string[];
    steps: string[];
    checklist: string[];
    officialSourceLinks: Array<{ label: string; url: string }>;
    internalLinks: Array<{ label: string; href: string }>;
  };
  /** BSN + DigiD section */
  bsnDigid: {
    heading: string;
    body: string[];
    digidRequirements: string[];
    examples: string[];
    plannedPageLinks: Array<{ label: string; href: string }>;
  };
  /** Health insurance section */
  healthInsurance: {
    heading: string;
    body: string[];
    advice: string[];
    internalLink: { label: string; href: string };
  };
  /** Banking section */
  banking: {
    heading: string;
    body: string[];
    typicalNeeds: string[];
    services: CityServiceCard[];
    internalLink: { label: string; href: string };
  };
  /** Housing + cost of living */
  housingCosts: {
    heading: string;
    body: string[];
    costCards: CityCostCard[];
    neighborhoodsNote?: string;
    warning?: string;
    internalLinks: Array<{ label: string; href: string }>;
  };
  /** Transport section */
  transport: {
    heading: string;
    body: string[];
    goodToKnow: string[];
  };
  /** Services for expats (grouped) */
  servicesIntro?: string;
  /** First 30 days roadmap */
  first30Days: {
    heading: string;
    weeks: Array< { week: string; items: string[] }>;
    internalLinks: Array<{ label: string; href: string }>;
  };
  exampleScenarios: CityExampleScenario[];
  commonMistakes: Array<{
    mistake: string;
    internalLink?: { label: string; href: string };
  }>;
  tools: CityToolCard[];
  faqs: Array<{ q: string; a: string }>;
  officialSources: CityOfficialSource[];
  relatedGuides: CityRelatedGuideBlock[];
  /** Other city hub links (Rotterdam, Utrecht, etc.) */
  cityLinks: Array<{ label: string; href: string; comingSoon?: boolean }>;
};
