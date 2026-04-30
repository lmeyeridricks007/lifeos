import { resolveTaxGuideTool } from "../tax-guide-for-expats/taxGuideToolRegistry";
import { MONEY_TAX_RESIDENCY_SERVICE_REGISTRY } from "../tax-residency-nl/config/moneyTaxResidencyServiceRegistry";
import type {
  MoneyTaxReturnChecklistCategoryConfig,
  MoneyTaxReturnRelatedLinkDef,
  MoneyTaxReturnSignalCardConfig,
} from "./moneyTaxReturnTypes";

export type ResolvedTaxReturnRelatedLink = { href: string; label: string };

export function resolveMoneyTaxReturnRelatedLink(def: MoneyTaxReturnRelatedLinkDef): ResolvedTaxReturnRelatedLink {
  if (def.kind === "tool") {
    const r = resolveTaxGuideTool(def.key, def.label);
    return { href: r.href, label: r.label };
  }
  return { href: def.href, label: def.label };
}

export function resolveMoneyTaxReturnSignalCard(card: MoneyTaxReturnSignalCardConfig): {
  id: string;
  title: string;
  whyItMatters: string;
  recommendedAction: string;
  cautionLevel: MoneyTaxReturnSignalCardConfig["cautionLevel"];
  relatedLinks: ResolvedTaxReturnRelatedLink[];
} {
  const toolLinks = card.relatedToolKeys.map((key) => resolveTaxGuideTool(key));
  const serviceLinks = card.relatedServiceKeys.map((key) => MONEY_TAX_RESIDENCY_SERVICE_REGISTRY[key]);
  const extra = (card.extraLinks ?? []).map(resolveMoneyTaxReturnRelatedLink);
  const relatedLinks: ResolvedTaxReturnRelatedLink[] = [...toolLinks, ...serviceLinks, ...extra];
  return {
    id: card.id,
    title: card.title,
    whyItMatters: card.whyItMatters,
    recommendedAction: card.recommendedAction,
    cautionLevel: card.cautionLevel,
    relatedLinks,
  };
}

export function resolveMoneyTaxReturnChecklistCategory(cat: MoneyTaxReturnChecklistCategoryConfig): {
  id: string;
  title: string;
  description: string;
  appliesWhen: string;
  items: readonly string[];
  relatedLinks: ResolvedTaxReturnRelatedLink[];
} {
  return {
    id: cat.id,
    title: cat.title,
    description: cat.description,
    appliesWhen: cat.appliesWhen,
    items: cat.items,
    relatedLinks: cat.relatedLinks.map(resolveMoneyTaxReturnRelatedLink),
  };
}
