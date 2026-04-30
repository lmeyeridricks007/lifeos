/**
 * Config-first content for Netherlands Tax Guide for Expats.
 * Tax-year label is editorial only — no numeric thresholds in this layer.
 */

export const MONEY_TAX_GUIDE_CONTENT_TAX_YEAR = "2026" as const;

/** Internal tools and hubs referenced from prose (resolve to href via registry). */
export type MoneyTaxGuideToolKey =
  | "salaryNet"
  | "ruling"
  | "payslip"
  | "healthcare"
  | "doubleTax"
  | "jobOffer"
  | "col"
  | "rent"
  | "childcare"
  | "workingNl"
  | "employmentType"
  | "expatTaxesGuide"
  | "taxGuideForExpats"
  | "howTaxesWorkInNl"
  | "taxResidencyNl"
  | "taxReturnNl"
  | "thirtyPercentRulingGuide"
  | "taxAdvisorsExpats"
  | "taxesHub"
  | "taxesTools"
  | "moneyTools"
  | "citiesHub"
  | "taxAdvisorsGuide";

/** Stable keys for Belastingdienst / government URLs — URLs live in officialSourceRegistry only. */
export type MoneyTaxGuideOfficialSourceKey =
  | "bd_income_tax_individuals"
  | "bd_filing_return"
  | "bd_payroll_taxes"
  | "bd_30_percent_facility"
  | "toeslagen_portal"
  | "bd_international_en"
  | "gov_income_tax_allowances"
  | "bd_multiple_countries_double_taxation"
  | "bd_when_tax_treaty_concluded"
  | "bd_immigration_emigration_tax_return"
  | "bd_bsn_citizen_service_number"
  | "bd_inform_change_of_address";

export type MoneyTaxGuideRelatedToolDef =
  | { kind: "tool"; key: MoneyTaxGuideToolKey; label?: string }
  | { kind: "link"; href: string; label: string };

/** Shared block shape for yearly text updates without touching UI. */
export type MoneyTaxGuideContentBlock = {
  id: string;
  title: string;
  intro: string;
  keyPoints: readonly string[];
  cautionNote?: string;
  relatedTools: readonly MoneyTaxGuideRelatedToolDef[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxGuideStartCardConfig = MoneyTaxGuideContentBlock;

export type MoneyTaxGuideScenarioCardConfig = {
  id: string;
  pickerLabel: string;
  title: string;
  /** Maps to scenario picker “why it matters” copy. */
  intro: string;
  /** Maps to “what to do next” copy. */
  recommendedNextAction: string;
  keyPoints: readonly string[];
  cautionNote?: string;
  relatedTools: readonly MoneyTaxGuideRelatedToolDef[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
};

/** Main narrative sections (excluding boxes, FAQ, journey steps). */
export type MoneyTaxGuideSectionConfig = MoneyTaxGuideContentBlock & {
  eyebrow: string;
  subtitle: string;
  subtitleMarkdown?: boolean;
  /** Optional horizontal flow labels (e.g. how Dutch tax works). */
  flowSteps?: readonly string[];
};

export type MoneyTaxGuideJourneyStepConfig = {
  number: number;
  title: string;
  intro: string;
  keyPoints: readonly string[];
  cautionNote?: string;
  relatedTools: readonly MoneyTaxGuideRelatedToolDef[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxGuideBoxCardConfig = {
  id: string;
  title: string;
  intro: string;
  keyPoints: readonly string[];
  cautionNote?: string;
  relatedTools: readonly MoneyTaxGuideRelatedToolDef[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxGuideBoxSectionConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  subtitleMarkdown?: boolean;
  cautionNote: string;
  cards: readonly MoneyTaxGuideBoxCardConfig[];
  relatedTools: readonly MoneyTaxGuideRelatedToolDef[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxGuideMisunderstandingConfig = {
  id: string;
  title: string;
  intro: string;
  keyPoints: readonly string[];
  cautionNote?: string;
  relatedTools: readonly MoneyTaxGuideRelatedToolDef[];
  officialSourceKeys: readonly MoneyTaxGuideOfficialSourceKey[];
};

export type MoneyTaxGuideFaqItemConfig = {
  q: string;
  a: string;
};

export type MoneyTaxGuideRelatedToolGroupConfig = {
  eyebrow: string;
  description: string;
  items: readonly {
    title: string;
    description: string;
    cta: string;
    tool: MoneyTaxGuideToolKey;
  }[];
};
