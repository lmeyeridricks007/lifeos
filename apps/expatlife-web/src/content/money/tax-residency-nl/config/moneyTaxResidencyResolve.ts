import type { TaxJourneyFlowStep } from "@/src/components/money/tax-guide-for-expats/TaxJourneyFlow";
import { TAX_RESIDENCY_NL_PATH } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { resolveRelatedTools } from "../../tax-guide-for-expats/taxGuideContentResolve";
import type { MoneyTaxGuideRelatedToolDef } from "../../tax-guide-for-expats/taxGuideContent.types";
import { resolveTaxGuideTool } from "../../tax-guide-for-expats/taxGuideToolRegistry";
import type {
  MoneyTaxResidencyComparisonCardConfig,
  MoneyTaxResidencyJourneyStepConfig,
  MoneyTaxResidencyRelatedToolsSectionConfig,
  MoneyTaxResidencyServiceDirectoryKey,
  MoneyTaxResidencySignalCardConfig,
  TaxResidencyCautionLevel,
  TaxResidencyJourneyLinkDef,
  TaxResidencyRelatedLinkDef,
} from "./moneyTaxResidencyTypes";
import { MONEY_TAX_RESIDENCY_SERVICE_REGISTRY } from "./moneyTaxResidencyServiceRegistry";

function linkDefsToRelatedToolDefs(defs: readonly TaxResidencyRelatedLinkDef[]): MoneyTaxGuideRelatedToolDef[] {
  return defs.map((d) =>
    d.kind === "tool" ? { kind: "tool" as const, key: d.key, label: d.label } : { kind: "link" as const, href: d.href, label: d.label }
  );
}

export function resolveTaxResidencyRelatedLinks(defs: readonly TaxResidencyRelatedLinkDef[]) {
  return resolveRelatedTools(linkDefsToRelatedToolDefs(defs));
}

export function resolveTaxResidencyServiceKeys(keys: readonly MoneyTaxResidencyServiceDirectoryKey[]) {
  return keys.map((k) => MONEY_TAX_RESIDENCY_SERVICE_REGISTRY[k]);
}

/** Primary CTA for signal card: explicit link, else first tool, else first service, else null. */
export function resolveSignalPrimaryRelated(card: MoneyTaxResidencySignalCardConfig): { href: string; label: string } | null {
  if (card.primaryLink) return card.primaryLink;
  if (card.relatedToolKeys.length > 0) {
    const t = resolveTaxGuideTool(card.relatedToolKeys[0]!);
    return { href: t.href, label: t.label };
  }
  if (card.relatedServiceKeys.length > 0) {
    return MONEY_TAX_RESIDENCY_SERVICE_REGISTRY[card.relatedServiceKeys[0]!]!;
  }
  return null;
}

export function resolveSignalToolLinks(card: MoneyTaxResidencySignalCardConfig) {
  return card.relatedToolKeys.map((key) => resolveTaxGuideTool(key));
}

export function resolveSignalServiceLinks(card: MoneyTaxResidencySignalCardConfig) {
  return resolveTaxResidencyServiceKeys(card.relatedServiceKeys);
}

export type AssembledSignalCard = MoneyTaxResidencySignalCardConfig & {
  caution: TaxResidencyCautionLevel;
  nextStep: string;
  related: { href: string; label: string };
  toolLinks: { href: string; label: string }[];
  serviceLinks: { href: string; label: string }[];
};

export function assembleSignalCards(
  cards: readonly MoneyTaxResidencySignalCardConfig[],
  canonicalPath: typeof TAX_RESIDENCY_NL_PATH
): AssembledSignalCard[] {
  return cards.map((c) => {
    const primary = resolveSignalPrimaryRelated(c);
    const toolLinks = resolveSignalToolLinks(c);
    const serviceLinks = resolveSignalServiceLinks(c);
    const fallback =
      primary ??
      ({ href: `${canonicalPath}#helpful-tools`, label: "Helpful tools on this page" } as const);
    return {
      ...c,
      caution: c.cautionLevel,
      nextStep: c.recommendedAction,
      related: fallback,
      toolLinks,
      serviceLinks,
    };
  });
}

function resolveJourneyLink(d: TaxResidencyJourneyLinkDef): { href: string; label: string } {
  if (d.kind === "tool") {
    const r = resolveTaxGuideTool(d.key, d.label);
    return { href: r.href, label: r.label };
  }
  return { href: d.href, label: d.label };
}

export function assembleJourneySteps(steps: readonly MoneyTaxResidencyJourneyStepConfig[]): readonly TaxJourneyFlowStep[] {
  return steps.map((s, i) => ({
    number: i + 1,
    title: s.title,
    body: s.body,
    examples: s.examples ? [...s.examples] : [],
    links: s.linkDefs.map(resolveJourneyLink),
  }));
}

export type AssembledComparisonCard = MoneyTaxResidencyComparisonCardConfig & {
  relatedResolved: { href: string; label: string }[];
};

export function assembleComparisonCards(cards: readonly MoneyTaxResidencyComparisonCardConfig[]): AssembledComparisonCard[] {
  return cards.map((c) => ({
    ...c,
    relatedResolved: resolveTaxResidencyRelatedLinks(c.relatedLinks),
  }));
}

export function assembleRelatedToolsSections(sections: readonly MoneyTaxResidencyRelatedToolsSectionConfig[]) {
  return sections.map((s) => ({
    eyebrow: s.eyebrow,
    description: s.description,
    items: s.items.map((it) => {
      if ("toolKey" in it) {
        const r = resolveTaxGuideTool(it.toolKey);
        return { title: it.title, description: it.description, href: r.href, cta: it.cta };
      }
      return { title: it.title, description: it.description, href: it.href, cta: it.cta };
    }),
  }));
}
