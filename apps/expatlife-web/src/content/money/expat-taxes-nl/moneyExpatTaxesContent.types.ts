/**
 * Config-first types for Expat Taxes Netherlands (Money).
 * Editorial tax-year label only — numeric thresholds live in tools / official registry.
 */

import type { MoneyExpatTaxesCautionTier } from "./moneyExpatTaxesCautionUi";
import type {
  MoneyTaxGuideContentBlock,
  MoneyTaxGuideMisunderstandingConfig,
  MoneyTaxGuideOfficialSourceKey,
  MoneyTaxGuideRelatedToolDef,
  MoneyTaxGuideSectionConfig,
  MoneyTaxGuideToolKey,
} from "../tax-guide-for-expats/taxGuideContent.types";

export type { MoneyExpatTaxesCautionTier } from "./moneyExpatTaxesCautionUi";

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

/** Guide-style registry keys (resolve via `resolveTaxGuideTool`). */
export type MoneyExpatTaxesGuideKey =
  | "howTaxesWorkInNl"
  | "taxReturnNl"
  | "thirtyPercentRulingGuide"
  | "taxGuideForExpats"
  | "taxResidencyNl"
  | "taxAdvisorsExpats"
  | "expatTaxesGuide";

/** Start-here cards (“why expat taxes differ”). */
export type MoneyExpatTaxesStartCardConfig = MoneyTaxGuideContentBlock;

/** Main narrative sections — extends shared tax-guide block with optional memory hook. */
export type MoneyExpatTaxesSectionConfig = MoneyTaxGuideSectionConfig & {
  readonly memoryHook?: string;
};

export type MoneyExpatTaxesScenarioAnchor = { readonly id: string; readonly label: string };

/**
 * Scenario picker row: maps to TaxGuideStartingPointSelector after resolution.
 * `situation` → picker tab label; steps merge `relatedTools`, tool keys, guide keys, anchors, services.
 */
export type MoneyExpatTaxesScenarioCardConfig = {
  readonly id: string;
  readonly situation: string;
  readonly title: string;
  readonly whyItMatters: string;
  readonly whatToCheck: readonly string[];
  readonly recommendedAction: string;
  readonly cautionLevel: MoneyExpatTaxesCautionTier;
  readonly relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  /** Guide routes (resolved via tool registry). Omit when empty. */
  readonly relatedGuideKeys?: readonly MoneyExpatTaxesGuideKey[];
  readonly relatedAnchors?: readonly MoneyExpatTaxesScenarioAnchor[];
  readonly relatedServiceKeys?: readonly MoneyExpatTaxesServiceKey[];
  readonly relatedTools?: readonly MoneyTaxGuideRelatedToolDef[];
  readonly officialSourceKeys?: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyExpatTaxesRiskSignalCardConfig = {
  readonly id: string;
  readonly title: string;
  readonly situation?: string;
  readonly whyItMatters: string;
  readonly recommendedAction: string;
  readonly cautionLevel: MoneyExpatTaxesCautionTier;
  /** Calculators / tools from the tax registry — omit when the card is anchor- or guide-only. */
  readonly relatedToolKeys?: readonly MoneyTaxGuideToolKey[];
  readonly relatedGuideKeys?: readonly MoneyExpatTaxesGuideKey[];
  readonly relatedAnchors?: readonly MoneyExpatTaxesScenarioAnchor[];
  readonly relatedServiceKeys?: readonly MoneyExpatTaxesServiceKey[];
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
