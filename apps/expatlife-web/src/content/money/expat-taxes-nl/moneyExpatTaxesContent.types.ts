/**
 * Config-first types for Expat Taxes Netherlands (Money).
 * Editorial tax-year label only — numeric thresholds live in tools / official registry.
 */

import type {
  MoneyTaxGuideContentBlock,
  MoneyTaxGuideMisunderstandingConfig,
  MoneyTaxGuideOfficialSourceKey,
  MoneyTaxGuideRelatedToolDef,
  MoneyTaxGuideSectionConfig,
  MoneyTaxGuideToolKey,
} from "../tax-guide-for-expats/taxGuideContent.types";

export const MONEY_EXPAT_TAXES_CONTENT_TAX_YEAR = "2026" as const;

/** Service / hub links surfaced from scenario & risk cards (not provider endorsements). */
export type MoneyExpatTaxesServiceKey =
  | "taxesHub"
  | "servicesAll"
  | "banks"
  | "healthInsurance"
  | "relocationServices"
  | "visaConsultants"
  | "immigrationLawyers";

export type MoneyExpatTaxesCautionLevel = "low" | "medium" | "high";

/** Start-here cards (“why expat taxes differ”). */
export type MoneyExpatTaxesStartCardConfig = MoneyTaxGuideContentBlock;

/** Main narrative sections (employment, ruling, Box 3, …). */
export type MoneyExpatTaxesSectionConfig = MoneyTaxGuideSectionConfig & {
  /** Optional callout above body (e.g. Box 3 plain-language hook). */
  memoryHook?: string;
};

export type MoneyExpatTaxesScenarioAnchor = { readonly id: string; readonly label: string };

/**
 * Scenario picker row: maps to TaxGuideStartingPointSelector after resolution.
 * `situation` → picker tab label; steps are built from tool keys, anchors, then services.
 */
export type MoneyExpatTaxesScenarioCardConfig = {
  readonly id: string;
  readonly situation: string;
  readonly title: string;
  readonly whyItMatters: string;
  readonly recommendedAction: string;
  readonly cautionLevel?: MoneyExpatTaxesCautionLevel;
  readonly relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  readonly relatedAnchors?: readonly MoneyExpatTaxesScenarioAnchor[];
  readonly relatedServiceKeys?: readonly MoneyExpatTaxesServiceKey[];
  readonly cautionNote?: string;
  readonly relatedTools?: readonly MoneyTaxGuideRelatedToolDef[];
  readonly officialSourceKeys?: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyExpatTaxesRiskSignalCardConfig = {
  readonly id: string;
  readonly title: string;
  /** Optional one-line context (not rendered separately today — folded into copy if needed). */
  readonly situation?: string;
  readonly whyItMatters: string;
  readonly recommendedAction: string;
  readonly cautionLevel: MoneyExpatTaxesCautionLevel;
  readonly relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  readonly relatedAnchors?: readonly MoneyExpatTaxesScenarioAnchor[];
  readonly relatedServiceKeys?: readonly MoneyExpatTaxesServiceKey[];
  readonly cautionNote?: string;
  readonly relatedTools?: readonly MoneyTaxGuideRelatedToolDef[];
  readonly officialSourceKeys?: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyExpatTaxesRiskSignalsShellConfig = {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly intro: string;
  readonly cards: readonly MoneyExpatTaxesRiskSignalCardConfig[];
};

export type MoneyExpatTaxesMisunderstandingRowConfig = MoneyTaxGuideMisunderstandingConfig;

export type MoneyExpatTaxesFaqItemConfig = {
  readonly q: string;
  readonly a: string;
};

export type MoneyExpatTaxesRecommendedServicesConfig = {
  readonly id: string;
  readonly placementId: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly intro: string;
  readonly cautionNote?: string;
  readonly relatedTools?: readonly MoneyTaxGuideRelatedToolDef[];
  readonly officialSourceKeys?: readonly MoneyTaxGuideOfficialSourceKey[];
};
