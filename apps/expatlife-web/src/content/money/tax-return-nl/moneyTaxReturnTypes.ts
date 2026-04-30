import type { MoneyTaxGuideToolKey } from "../tax-guide-for-expats/taxGuideContent.types";
import type { MoneyTaxResidencyServiceDirectoryKey } from "../tax-residency-nl/config/moneyTaxResidencyTypes";

/** Optional service directory rows (same registry as tax residency — Netherlands services hub). */
export type MoneyTaxReturnServiceKey = MoneyTaxResidencyServiceDirectoryKey;

export type MoneyTaxReturnRelatedLinkDef =
  | { kind: "tool"; key: MoneyTaxGuideToolKey; label?: string }
  | { kind: "link"; href: string; label: string };

export type MoneyTaxReturnSignalCautionLevel = "low" | "medium" | "high";

/** Annual-return “signals” — keys resolve to href/label in UI; no URLs in config. */
export type MoneyTaxReturnSignalCardConfig = {
  id: string;
  title: string;
  whyItMatters: string;
  recommendedAction: string;
  cautionLevel: MoneyTaxReturnSignalCautionLevel;
  relatedToolKeys: readonly MoneyTaxGuideToolKey[];
  relatedServiceKeys: readonly MoneyTaxReturnServiceKey[];
  /** Anchors or non-tool internal links (optional). */
  extraLinks?: readonly MoneyTaxReturnRelatedLinkDef[];
};

export type MoneyTaxReturnChecklistCategoryConfig = {
  id: string;
  title: string;
  description: string;
  appliesWhen: string;
  items: readonly string[];
  relatedLinks: readonly MoneyTaxReturnRelatedLinkDef[];
};

export type MoneyTaxReturnStartCardConfig = {
  id: string;
  title: string;
  body: string;
};

export type MoneyTaxReturnBoxCardConfig = {
  id: string;
  title: string;
  body: string;
};

export type MoneyTaxReturnMisunderstandingConfig = {
  id: string;
  title: string;
  body: string;
};

export type MoneyTaxReturnFaqItemConfig = {
  q: string;
  a: string;
};

export type MoneyTaxReturnWhoCardConfig = {
  id: string;
  title: string;
  whyItMatters: string;
  whatToCheckNext: string;
  relatedToolKey: MoneyTaxGuideToolKey;
  relatedToolLabel?: string;
};
