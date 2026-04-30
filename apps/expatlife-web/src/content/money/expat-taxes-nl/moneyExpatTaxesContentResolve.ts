import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import type { TaxGuideStartingPointScenario } from "@/src/components/money/tax-guide-for-expats/TaxGuideStartingPointSelector";
import { buildOfficialSourcesReferences, resolveRelatedTools } from "../tax-guide-for-expats/taxGuideContentResolve";
import { resolveTaxGuideTool } from "../tax-guide-for-expats/taxGuideToolRegistry";
import type {
  MoneyExpatTaxesRiskSignalCardConfig,
  MoneyExpatTaxesScenarioCardConfig,
  MoneyExpatTaxesSectionConfig,
  MoneyExpatTaxesStartCardConfig,
} from "./moneyExpatTaxesContent.types";
import { moneyExpatTaxesServiceRegistry } from "./moneyExpatTaxesServiceRegistry";
import { moneyExpatTaxesOfficialSources } from "./moneyExpatTaxesOfficialSources";

export function splitIntroToBodyParagraphs(intro: string): readonly string[] {
  const parts = intro.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
  return parts.length > 0 ? parts : [intro];
}

export function buildExpatTaxesOfficialReferences(): MoveVisaResidencyReferences {
  const official = moneyExpatTaxesOfficialSources;
  return buildOfficialSourcesReferences({
    sectionId: official.sectionId,
    sectionTitle: official.sectionTitle,
    disclaimer: official.disclaimer,
    groups: official.groups.map((g) => ({ id: g.id, title: g.title, keys: [...g.keys] })),
  });
}

function scenarioStepsFromConfig(c: MoneyExpatTaxesScenarioCardConfig): readonly { label: string; href: string }[] {
  const extra = c.relatedTools?.length ? resolveRelatedTools(c.relatedTools) : [];
  if (extra.length > 0) return extra;

  const out: { label: string; href: string }[] = [];
  for (const key of c.relatedToolKeys) {
    const r = resolveTaxGuideTool(key);
    out.push({ label: r.label, href: r.href });
  }
  for (const a of c.relatedAnchors ?? []) {
    out.push({ label: a.label, href: `#${a.id}` });
  }
  for (const sk of c.relatedServiceKeys ?? []) {
    const row = moneyExpatTaxesServiceRegistry[sk];
    out.push({ label: row.label, href: row.href });
  }
  return out;
}

export function resolveExpatTaxesScenarioCards(
  cards: readonly MoneyExpatTaxesScenarioCardConfig[]
): readonly TaxGuideStartingPointScenario[] {
  return cards.map((c) => ({
    id: c.id,
    pickerLabel: c.situation,
    title: c.title,
    whyItMatters: c.whyItMatters,
    recommendedNextAction: c.recommendedAction,
    steps: scenarioStepsFromConfig(c),
  }));
}

function riskPrimaryLink(c: MoneyExpatTaxesRiskSignalCardConfig): { href: string; label: string } {
  const extra = c.relatedTools && c.relatedTools.length > 0 ? resolveRelatedTools(c.relatedTools) : [];
  if (extra[0]) return extra[0];
  if (c.relatedToolKeys[0]) {
    const r = resolveTaxGuideTool(c.relatedToolKeys[0]);
    return { href: r.href, label: r.label };
  }
  const a = c.relatedAnchors?.[0];
  if (a) return { href: `#${a.id}`, label: a.label };
  const sk = c.relatedServiceKeys?.[0];
  if (sk) return moneyExpatTaxesServiceRegistry[sk];
  return { href: "#situation-selector", label: "Situation selector" };
}

export function resolveExpatTaxesRiskSignalCards(cards: readonly MoneyExpatTaxesRiskSignalCardConfig[]) {
  return cards.map((c) => {
    const primary = riskPrimaryLink(c);
    return {
      id: c.id,
      title: c.title,
      whyItMatters: c.whyItMatters,
      recommendedNextStep: c.recommendedAction,
      related: primary,
      cautionLevel: c.cautionLevel,
    };
  });
}

export function resolveExpatTaxesSectionForView(section: MoneyExpatTaxesSectionConfig) {
  const links = resolveRelatedTools(section.relatedTools);
  return {
    id: section.id,
    eyebrow: section.eyebrow,
    title: section.title,
    subtitle: section.subtitle,
    bodyParagraphs: splitIntroToBodyParagraphs(section.intro),
    memoryHook: section.memoryHook,
    scannablePoints: [...section.keyPoints],
    links,
    cautionNote: section.cautionNote,
    officialSourceKeys: section.officialSourceKeys,
  };
}

export function resolveExpatTaxesStartCards(cards: readonly MoneyExpatTaxesStartCardConfig[]) {
  return cards.map((c) => ({
    id: c.id,
    title: c.title,
    intro: c.intro,
    keyPoints: [...c.keyPoints],
  }));
}
