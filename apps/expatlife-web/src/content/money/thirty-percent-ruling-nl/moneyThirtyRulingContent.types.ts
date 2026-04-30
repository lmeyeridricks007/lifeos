import type { MoneyTaxGuideToolKey } from "../tax-guide-for-expats/taxGuideContent.types";

/**
 * Extra link targets for this guide (anchors and calculator deep links).
 * Numeric tax rules live in calculator config — not in these strings.
 */
export type MoneyThirtyRulingExtraLinkKey =
  | "rulingToolInputs"
  | "guideEligibility"
  | "guideEmployeeEmployer"
  | "guideSalaryNetCaps"
  | "guideTaxYearChanges"
  | "guideRecommendedServices";

/** Keys allowed in `relatedToolKeys` across 30% ruling content configs. */
export type MoneyThirtyRulingRelatedToolKey = MoneyTaxGuideToolKey | MoneyThirtyRulingExtraLinkKey;

export type MoneyThirtyRulingResolvedLink = { href: string; label: string };

export type MoneyThirtyRulingStartCardConfig = {
  id: string;
  title: string;
  /** Markdown `bold` segments ok — educational only. */
  body: string;
};

export type MoneyThirtyRulingDecisionCardConfig = {
  id: string;
  situation: string;
  whyItMatters: string;
  nextAction: string;
  relatedToolKeys: readonly MoneyThirtyRulingRelatedToolKey[];
  /** Optional labels aligned with `relatedToolKeys` (use when CTA copy should differ from tool registry defaults). */
  relatedLinkLabels?: readonly (string | undefined)[];
};

export type MoneyThirtyRulingEligibilityFactorConfig = {
  id: string;
  title: string;
  plainEnglishExplanation: string;
  whyItMatters: string;
  cautionNote: string;
  relatedToolKeys: readonly MoneyThirtyRulingRelatedToolKey[];
};

export type MoneyThirtyRulingAudienceBlockConfig = {
  id: string;
  title: string;
  body: string;
};

export type MoneyThirtyRulingAudienceTabsConfig = {
  employeeTabLabel: string;
  employerTabLabel: string;
  employeeSections: readonly MoneyThirtyRulingAudienceBlockConfig[];
  /** Keys resolved to tool strip in employee tab. */
  employeeToolKeys: readonly MoneyTaxGuideToolKey[];
  employerObligationDisclaimer: string;
  employerSections: readonly MoneyThirtyRulingAudienceBlockConfig[];
  footNote: string;
};

export type MoneyThirtyRulingSalaryFlowStepConfig = {
  id: string;
  title: string;
  body: string;
  relatedToolKeys: readonly MoneyThirtyRulingRelatedToolKey[];
};

export type MoneyThirtyRulingMisunderstandingConfig = {
  id: string;
  title: string;
  body: string;
};

export type MoneyThirtyRulingFaqItemConfig = {
  q: string;
  a: string;
};
