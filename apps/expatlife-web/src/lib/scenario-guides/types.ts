/**
 * Data model for scenario / decision SEO pages in the Netherlands relocation cluster.
 * Used by ScenarioGuideTemplate; content is loaded from src/content/netherlands/scenario-guides.
 */

export type ScenarioGuideSection = {
  id: string;
  title: string;
  subtitle?: string;
  body?: string[];
  bullets?: string[];
  /** Example scenario callouts */
  scenarios?: Array<{ title: string; body: string }>;
  /** Optional internal CTA at end of section */
  cta?: { label: string; href: string };
};

export type ScenarioGuideComparisonTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type ScenarioGuideFaqItem = {
  q: string;
  a: string;
};

export type ScenarioGuideRelatedLink = {
  label: string;
  href: string;
  description?: string;
};

export type ScenarioGuideContent = {
  slug: string;
  path: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  h1: string;
  eyebrow?: string;
  intro: string[];
  quickAnswer: string;
  /** "What this usually depends on" bullets */
  dependsOn?: string[];
  sections: ScenarioGuideSection[];
  comparisonTable?: ScenarioGuideComparisonTable;
  /** Practical checklist / next steps */
  checklist?: Array<{ label: string; href?: string }>;
  /** Common mistakes / gotchas */
  mistakes?: Array<{ title: string; body: string }>;
  faq: ScenarioGuideFaqItem[];
  relatedGuides: ScenarioGuideRelatedLink[];
  /** Tool slugs resolved via getToolBySlug (move-immigration category) */
  relatedTools: string[];
  /** Optional service/affiliate mentions */
  relatedServices?: Array<{ name: string; description: string; href?: string }>;
};
