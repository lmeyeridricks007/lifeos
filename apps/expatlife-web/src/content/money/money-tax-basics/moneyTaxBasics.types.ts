/**
 * Config-first types for “How Taxes Work in the Netherlands” (NL tax basics).
 * Reuses registry keys from the tax guide layer — URLs and labels resolve in the builder.
 */

import type {
  MoneyTaxGuideOfficialSourceKey,
  MoneyTaxGuideRelatedToolDef,
  MoneyTaxGuideToolKey,
} from "../tax-guide-for-expats/taxGuideContent.types";

/** Editorial tax-year label for future year-scoped copy (no numeric thresholds here). */
export type MoneyTaxBasicsTaxYearLabel = string;

/** Shared section envelope — yearly editors update strings and keys only. */
export type MoneyTaxBasicsContentSection = {
  id: string;
  title: string;
  intro: string;
  keyPoints: readonly string[];
  cautionNote?: string;
  relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxBasicsStartHereConfig = MoneyTaxBasicsContentSection & {
  eyebrow: string;
  cards: readonly MoneyTaxBasicsStartCard[];
};

export type MoneyTaxBasicsStartCard = {
  id: string;
  title: string;
  intro: string;
  keyPoints: readonly string[];
  cautionNote?: string;
  relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxBasicsJourneyConfig = MoneyTaxBasicsContentSection & {
  eyebrow: string;
  steps: readonly MoneyTaxBasicsJourneyStep[];
};

export type MoneyTaxBasicsJourneyStep = {
  number: number;
  title: string;
  intro: string;
  keyPoints: readonly string[];
  cautionNote?: string;
  relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxBasicsPayrollReturnConfig = MoneyTaxBasicsContentSection & {
  eyebrow: string;
  /** Shown as section subtitle (markdown). */
  subtitle: string;
  timingHighlight: readonly MoneyTaxBasicsPayrollTimingLane[];
  comparisonCards: readonly MoneyTaxBasicsPayrollComparisonCard[];
  payrollCtaToolKeys: readonly MoneyTaxGuideToolKey[];
};

export type MoneyTaxBasicsPayrollTimingLane = {
  id: string;
  title: string;
  kicker: string;
  body: string;
  keyPoints?: readonly string[];
  cautionNote?: string;
  relatedToolKeys?: readonly MoneyTaxGuideToolKey[];
  officialSourceKeys?: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxBasicsPayrollComparisonCard = {
  id: string;
  title: string;
  body: string;
  keyPoints?: readonly string[];
  cautionNote?: string;
  relatedToolKeys?: readonly MoneyTaxGuideToolKey[];
  officialSourceKeys?: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxBasicsTaxBoxesConfig = MoneyTaxBasicsContentSection & {
  eyebrow: string;
  subtitle: string;
  /** Shown in the UI as the amber callout under the cards. */
  note: string;
  cards: readonly MoneyTaxBasicsBoxCard[];
};

export type MoneyTaxBasicsBoxCard = {
  id: string;
  boxNumber: 1 | 2 | 3;
  plainName: string;
  simpleExplanation: string;
  commonExamples: readonly string[];
  whoShouldCare: string;
  relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  keyPoints?: readonly string[];
  cautionNote?: string;
  officialSourceKeys?: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxBasicsDecisionSectionConfig = MoneyTaxBasicsContentSection & {
  eyebrow: string;
  cards: readonly MoneyTaxBasicsDecisionCard[];
};

/** intro = why it matters; keyPoints[0] = next action (convention for this page). */
export type MoneyTaxBasicsDecisionCard = {
  id: string;
  title: string;
  intro: string;
  keyPoints: readonly [string, ...string[]];
  cautionNote?: string;
  relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  /** In-page anchors on the foundation URL — resolved at build time (use `[]` when none). */
  internalAnchors: readonly { hash: string; label: string }[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxBasicsMisunderstandingsConfig = MoneyTaxBasicsContentSection & {
  eyebrow: string;
  rows: readonly { id: string; title: string; body: string }[];
};

export type MoneyTaxBasicsFaqConfig = MoneyTaxBasicsContentSection & {
  items: readonly MoneyTaxBasicsFaqItem[];
};

export type MoneyTaxBasicsFaqItem = {
  q: string;
  a: string;
  keyPoints?: readonly string[];
  cautionNote?: string;
  relatedToolKeys?: readonly MoneyTaxGuideToolKey[];
  officialSourceKeys?: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxBasicsOfficialSourcesConfig = {
  taxYearLabel: MoneyTaxBasicsTaxYearLabel;
  sectionId: string;
  sectionTitle: string;
  intro: string;
  keyPoints: readonly string[];
  cautionNote?: string;
  relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
  groups: readonly {
    id: string;
    title: string;
    keys: readonly MoneyTaxGuideOfficialSourceKey[];
  }[];
};

export type MoneyTaxBasicsRelatedToolsConfig = MoneyTaxBasicsContentSection & {
  eyebrow: string;
  sections: readonly MoneyTaxBasicsRelatedToolGroup[];
};

export type MoneyTaxBasicsRelatedToolGroup = {
  eyebrow: string;
  description: string;
  keyPoints?: readonly string[];
  cautionNote?: string;
  relatedToolKeys?: readonly MoneyTaxGuideToolKey[];
  officialSourceKeys?: readonly MoneyTaxGuideOfficialSourceKey[];
  items: readonly {
    title: string;
    intro: string;
    ctaLabel: string;
    toolKey: MoneyTaxGuideToolKey;
    keyPoints?: readonly string[];
    cautionNote?: string;
    officialSourceKeys?: readonly MoneyTaxGuideOfficialSourceKey[];
  }[];
};

export type MoneyTaxBasicsRecommendedServicesConfig = MoneyTaxBasicsContentSection & {
  eyebrow: string;
  whenHelpBullets: readonly string[];
};

/** Optional expat-facing cross-links kept out of core NL-basics JSON. */
export type MoneyTaxBasicsExpatCrossLinksConfig = {
  pillarBridgeLinks: readonly MoneyTaxGuideRelatedToolDef[];
};
