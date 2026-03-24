/**
 * Types for NL Moving deep SEO guide pages. Content is Git-based JSON (CMS-ready).
 */

export type GuideHero = {
  eyebrow?: string;
  badges?: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
    priority?: boolean;
  };
};

export type GuideQuickAnswer = {
  label: string;
  value: string;
};

export type GuideCallout = {
  type: "info" | "tip" | "warning";
  title: string;
  text: string;
  /** Optional link to official source or further reading (opens in new tab when external). */
  href?: string;
  /** Label for the link when href is set (defaults to "View source" or the URL). */
  linkLabel?: string;
};

export type GuidePersonaExample = {
  title: string;
  text: string;
};

/** Optional table for a section (e.g. cost ranges, variability). */
export type GuideSectionTable = {
  headers: string[];
  rows: string[][];
};

/** Optional highlighted summary box (e.g. typical total budget). */
export type GuideSectionSummaryBox = {
  title: string;
  value: string;
  note?: string;
};

/** Section-specific service recommendation (e.g. banking, insurance by section). */
export type GuideSectionService = {
  name: string;
  description: string;
  url: string;
  indicativeCost?: string;
  reason?: string;
  /** Optional logo (e.g. from /images/affiliates/logos/). When set, shown instead of initials. */
  logo?: { src: string; alt: string };
};

/** Bank comparison entry for a detailed comparison section (features, pros, cons, costs, link). */
export type GuideBankComparison = {
  name: string;
  overview: string;
  type: "traditional" | "digital" | "platform";
  features?: string[];
  pros?: string[];
  cons?: string[];
  typicalCosts?: string;
  websiteUrl: string;
  /** Optional logo (e.g. from /images/affiliates/logos/). */
  logo?: { src: string; alt: string };
};

/** Health insurer comparison entry for provider directory (overview, costs, link, expat note). */
export type GuideInsurerComparison = {
  name: string;
  overview: string;
  /** Parent group / concern if relevant (e.g. Achmea, VGZ). */
  parentGroup?: string;
  features?: string[];
  pros?: string[];
  cons?: string[];
  typicalCosts?: string;
  websiteUrl: string;
  /** Optional compare / contact URL (e.g. Independer). */
  compareUrl?: string;
  /** Short note on expat fit or who it may suit. */
  expatNote?: string;
  /** Optional logo (e.g. from /images/affiliates/logos/). */
  logo?: { src: string; alt: string };
};

export type GuideSection = {
  id: string;
  heading: string;
  body?: string[];
  bullets?: string[];
  callout?: GuideCallout;
  personaExample?: GuidePersonaExample;
  internalCta?: { label: string; href: string };
  /** Optional list of internal links to show after section content. */
  links?: Array<{ label: string; href: string }>;
  /** Optional CTA block below section (e.g. two buttons for tools). */
  ctaBlock?: {
    title: string;
    supportingText: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  affiliatePlacementId?: string;
  image?: { src: string; alt: string; caption?: string };
  /** Optional table (e.g. cost ranges, variability). */
  table?: GuideSectionTable;
  /** When set, the table cell at this column index (0-based) is rendered as an external link using tableLinkUrl. */
  tableLinkColumnIndex?: number;
  /** URL for the link column when tableLinkColumnIndex is set (e.g. comparison site). */
  tableLinkUrl?: string;
  /** Optional summary box (e.g. typical total). */
  summaryBox?: GuideSectionSummaryBox;
  /** Optional section-specific service recommendations (curated list with links). */
  services?: GuideSectionService[];
  /** When set, section is rendered as a 3-phase timeline (Before move / Arrival week / First 90 days). */
  timelineStages?: {
    beforeMove: string[];
    arrivalWeek: string[];
    first90Days: string[];
  };
  /** When set, section is rendered with visual visa-route cards (commonRoutes + notes). */
  visaRoutes?: {
    commonRoutes: string[];
    notes: string[];
  };
  /** When set, section is rendered as numbered step cards (e.g. priority checklist). */
  steps?: string[];
  /** When set, section is rendered as detailed bank comparison cards (overview, features, pros, cons, costs, link). */
  bankComparisons?: GuideBankComparison[];
  /** When set, section is rendered as health insurer directory cards (overview, costs, link, expat note). */
  insurerComparisons?: GuideInsurerComparison[];
};

export type GuideToolCta = {
  key?: string;
  label: string;
  href: string;
  /** Short description of when to use this tool. */
  description?: string;
  /** CTA button/link text (e.g. "Open checklist tool →"). */
  ctaLabel?: string;
};

/** Optional hero CTA block below the header. */
export type GuideHeroCta = {
  title: string;
  supportingText: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** Optional extra secondary buttons (e.g. second and third CTA). */
  secondaryCtas?: Array<{ label: string; href: string }>;
  /** Optional tertiary text link (e.g. "Plan your first 90 days"). */
  tertiaryCtaLabel?: string;
  tertiaryCtaHref?: string;
  /** Optional helper text link (e.g. "Read the full Moving to the Netherlands guide"). */
  helperLinkLabel?: string;
  helperLinkHref?: string;
  /** Optional row of supporting links below buttons (e.g. moving guide, documents, timeline). */
  supportingLinks?: Array<{ label: string; href: string }>;
};

/** Optional mid-page or end CTA card. */
export type GuideCtaCard = {
  badge?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Optional CTA band above or below the Tools section (conversion-focused). */
export type GuideToolsCtaBand = {
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tertiaryLabel?: string;
  tertiaryHref?: string;
};

export type GuideTocItem = { id: string; label: string };

/** Optional progression/timeline block (e.g. First 30 / Day 30–60 / First 90). */
export type GuideProgressionStage = { label: string; description: string };

/** Optional HowTo steps for structured data (e.g. checklist-style guide). */
export type GuideHowToStep = { name: string; text?: string };

export type GuideFeaturedTool = {
  label: string;
  href: string;
};

export type GuideExampleScenario = {
  title: string;
  summary: string;
  href: string;
  /** Optional CTA text (e.g. "Use this scenario"); when not set, default is used. */
  ctaLabel?: string;
};

/** Example budget card (indicative ranges for planning). */
export type GuideExampleBudget = {
  title: string;
  items: string[];
  totalRange: string;
  note: string;
};

/** Country-specific translation/legalisation workflow (document translation guide). */
export type GuideDocumentTranslationCountryExample = {
  country: string;
  countryCode: string;
  summary: string;
  workflow: string[];
  officialUrl: string;
  note?: string;
};

/** Document type that often needs translation (document translation guide). */
export type GuideDocumentTranslationDocumentType = {
  id: string;
  label: string;
  whereUsed: string[];
  legalisationRelevant: boolean;
  relatedGuideHref?: string;
  relatedGuideLabel?: string;
};

/** Indicative cost range (document translation guide). */
export type GuideDocumentTranslationCostItem = {
  id: string;
  label: string;
  range: string;
  note?: string;
};

/** Sworn translator resource or agency card (document translation guide). */
export type GuideDocumentTranslationTranslatorResource = {
  id: string;
  name: string;
  description: string;
  url: string;
  /** Optional logo path (e.g. /images/partners/...). */
  logo?: { src: string; alt: string };
  /** Indicative cost note (e.g. "From ~€45 per page" or "Request a quote"). */
  costNote?: string;
  /** If true, present as official register rather than commercial provider. */
  isOfficialRegister?: boolean;
};

export type GuideData = {
  slug: string;
  path: string;
  title: string;
  metaTitle?: string;
  breadcrumbLabel?: string;
  subtitle?: string;
  description: string;
  hero: GuideHero;
  /** Optional "On this page" sidebar entries (id + label). */
  tocItems?: GuideTocItem[];
  /** Optional 3-phase progression block (e.g. First 30 Days / Day 30–60 / First 90 Days). */
  progressionStages?: GuideProgressionStage[];
  /** Optional HowTo steps for JSON-LD (checklist-style guide). */
  howToSteps?: GuideHowToStep[];
  /** Optional CTA block shown under the hero. */
  heroCta?: GuideHeroCta;
  /** Optional CTA card shown mid-page (e.g. after documents section). */
  midPageCta?: GuideCtaCard;
  /** When set, render midPageCta immediately after the section with this id (e.g. "1-2-months-before"). */
  midPageCtaAfterSectionId?: string;
  /** Optional CTA block before FAQ (e.g. bottom conversion panel). */
  endCta?: {
    title: string;
    supportingText: string;
    ctaLabel: string;
    ctaHref: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  };
  /** Optional CTA band above the Tools section (conversion-focused). */
  toolsCtaBand?: GuideToolsCtaBand;
  /** Optional intro for the useful services section. */
  servicesIntro?: string;
  /** Optional heading for the useful services section. */
  servicesSectionTitle?: string;
  quickAnswers: GuideQuickAnswer[];
  sections: GuideSection[];
  featuredTools?: GuideFeaturedTool[];
  toolCtas: GuideToolCta[];
  exampleScenarios?: GuideExampleScenario[];
  /** Optional section title for scenarios (e.g. "Typical relocation scenarios from South Africa"). */
  scenariosSectionTitle?: string;
  /** Optional intro paragraph explaining what scenarios are for. */
  scenariosSectionIntro?: string;
  /** Optional example relocation budgets (indicative ranges). */
  exampleBudgets?: GuideExampleBudget[];
  /** Optional country workflow examples (document translation guide; merged from data file). */
  documentTranslationCountryExamples?: GuideDocumentTranslationCountryExample[];
  /** Optional country examples for document legalisation guide (same card shape as translation). */
  documentLegalizationCountryExamples?: GuideDocumentTranslationCountryExample[];
  /** Optional document types list (document translation guide; merged from data file). */
  documentTranslationDocumentTypes?: GuideDocumentTranslationDocumentType[];
  /** Optional cost ranges (document translation guide; merged from data file). */
  documentTranslationCostRanges?: GuideDocumentTranslationCostItem[];
  /** Optional timing ranges (document translation guide). */
  documentTranslationTiming?: Array<{ label: string; range: string }>;
  /** Optional cost disclaimer (document translation guide). */
  documentTranslationCostDisclaimer?: string;
  /** Optional sworn translator resources / agencies (document translation guide; merged from data file). */
  documentTranslationTranslatorResources?: GuideDocumentTranslationTranslatorResource[];
  internalLinks: GuideInternalLinks;
  /** Optional "Start here" sidebar links (task-oriented); when set, overrides hub + pillar in sidebar. */
  sidebarStartLinks?: GuideSidebarStartLink[];
  faq: GuideFaqItem[];
  resourcesAffiliatePlacementId?: string;
  disclosure?: string;
  lastUpdated?: string;
  /** Optional ISO date for structured data (origin-country guides with a scheduled publish date). */
  publishDate?: string;
  /** Optional H2 placed above the quick-answer / snapshot cards. */
  quickAnswersTitle?: string;
  /** Optional override for the “Related guides” section heading. */
  relatedGuidesSectionTitle?: string;
  /** End-of-page CTA cards (e.g. “Plan your move further”). */
  exploreNextCards?: Array<{
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  }>;
};

export type GuideInternalLinks = {
  hub: { label: string; href: string };
  pillar: { label: string; href: string };
  related: Array<{ label: string; href: string }>;
};

/** Optional task-oriented "Start here" sidebar links; when set, used instead of hub + pillar. */
export type GuideSidebarStartLink = { label: string; href: string };

export type GuideFaqItem = {
  q: string;
  a: string;
};

export type RegistryGuide = {
  slug: string;
  path: string;
  title?: string;
  description?: string;
  category: string;
  priority: number;
  comingSoon?: boolean;
  /** Explicit `false` hides the guide regardless of date. Omitted/`true` = allowed if `publishDate` has passed. */
  publish?: boolean;
  /** `YYYY-MM-DD` (UTC start of day) or full ISO datetime. Omitted = no date gate. */
  publishDate?: string;
};

export type GuideRegistry = {
  hubPath: string;
  pillarPath: string;
  toolPaths: Record<string, string>;
  guides: RegistryGuide[];
};
