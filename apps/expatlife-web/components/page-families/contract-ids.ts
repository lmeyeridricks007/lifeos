/**
 * Stable DOM ids for page-family contracts (anchors, scroll-margin, analytics).
 * Prefer these over ad-hoc strings in page templates.
 */

export const GUIDE_SECTION_IDS = {
  hero: "guide-hero",
  atAGlance: "guide-at-a-glance",
  keySections: "guide-key-sections",
  tools: "guide-tools",
  scenario: "guide-scenario",
  related: "guide-related-next",
  faq: "guide-faq",
} as const;

export const TOOL_SECTION_IDS = {
  hero: "tool-hero",
  helpsWith: "tool-helps-with",
  surface: "tool-surface",
  howToUse: "tool-how-to-use",
  whatNext: "tool-what-happens-next",
  faqOrTrust: "tool-faq-or-trust",
} as const;

export const HUB_SECTION_IDS = {
  hero: "hub-hero",
  purpose: "hub-purpose",
  pathways: "hub-pathways",
  tools: "hub-tools",
  categories: "hub-categories",
  related: "hub-related-next",
  faq: "hub-faq",
} as const;

export const ARTICLE_SECTION_IDS = {
  hero: "article-hero",
  summary: "article-summary",
  body: "article-body",
  contextualTools: "article-contextual-tools",
  related: "article-related",
  faq: "article-faq",
} as const;

export type PageFamilyKind = "guide" | "tool" | "hub" | "article";
