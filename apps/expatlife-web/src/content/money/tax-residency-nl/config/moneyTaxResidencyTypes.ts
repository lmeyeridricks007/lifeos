import type { MoneyTaxGuideToolKey } from "../../tax-guide-for-expats/taxGuideContent.types";

/** Signal card caution tier — maps to UI chips (simple / worth checking / consider support). */
export type TaxResidencyCautionLevel = "low" | "medium" | "high";

/** Service directory rows aligned with `taxResidencyNlServiceCategoryLinks` — for optional signal CTAs. */
export type MoneyTaxResidencyServiceDirectoryKey =
  | "allServices"
  | "banks"
  | "healthInsurance"
  | "relocationServices"
  | "visaConsultants"
  | "immigrationLawyers";

/** Resolve to internal tools or arbitrary internal paths (anchors, Move pages). */
export type TaxResidencyRelatedLinkDef =
  | { kind: "tool"; key: MoneyTaxGuideToolKey; label?: string }
  | { kind: "link"; href: string; label: string };

export type TaxResidencyJourneyLinkDef = TaxResidencyRelatedLinkDef;

export type MoneyTaxResidencySignalCardConfig = {
  id: string;
  title: string;
  whyItMatters: string;
  recommendedAction: string;
  cautionLevel: TaxResidencyCautionLevel;
  relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  relatedServiceKeys: readonly MoneyTaxResidencyServiceDirectoryKey[];
  /** In-page or Move links when no tool/service key applies. */
  primaryLink?: { href: string; label: string };
};

export type MoneyTaxResidencyJourneyStepConfig = {
  title: string;
  body: string;
  examples?: readonly string[];
  linkDefs: readonly TaxResidencyJourneyLinkDef[];
};

export type MoneyTaxResidencyComparisonCardConfig = {
  id: string;
  concept: string;
  plainEnglishExplanation: string;
  whatItDoes: string;
  whatItDoesNotDecide: string;
  relatedLinks: readonly TaxResidencyRelatedLinkDef[];
};

export type MoneyTaxResidencyStartCardConfig = {
  id: string;
  title: string;
  intro: string;
  keyPoints: readonly string[];
};

export type MoneyTaxResidencyInfluenceCardConfig = {
  id: string;
  title: string;
  body: string;
  examples: readonly string[];
};

export type MoneyTaxResidencyMisunderstandingRowConfig = {
  id: string;
  title: string;
  body: string;
};

export type MoneyTaxResidencyFaqItemConfig = {
  q: string;
  a: string;
};

export type MoneyTaxResidencyRelatedToolItemConfig =
  | {
      title: string;
      description: string;
      cta: string;
      toolKey: MoneyTaxGuideToolKey;
    }
  | {
      title: string;
      description: string;
      cta: string;
      href: string;
    };

export type MoneyTaxResidencyRelatedToolsSectionConfig = {
  eyebrow: string;
  description: string;
  items: readonly MoneyTaxResidencyRelatedToolItemConfig[];
};
