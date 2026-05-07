import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import type { TaxGuideStartingPointScenario } from "@/src/components/money/tax-guide-for-expats/TaxGuideStartingPointSelector";
import type { MoneyTaxGuideToolKey } from "../tax-guide-for-expats/taxGuideContent.types";
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

function pushStepUnique(out: { label: string; href: string }[], step: { label: string; href: string }) {
  const sig = `${step.href}::${step.label}`;
  if (!out.some((x) => `${x.href}::${x.label}` === sig)) out.push(step);
}

function scenarioStepsFromConfig(c: MoneyExpatTaxesScenarioCardConfig): readonly { label: string; href: string }[] {
  const out: { label: string; href: string }[] = [];
  for (const row of resolveRelatedTools(c.relatedTools ?? [])) {
    pushStepUnique(out, row);
  }
  for (const key of c.relatedToolKeys) {
    const r = resolveTaxGuideTool(key);
    pushStepUnique(out, { label: r.label, href: r.href });
  }
  for (const key of c.relatedGuideKeys ?? []) {
    const r = resolveTaxGuideTool(key as MoneyTaxGuideToolKey);
    pushStepUnique(out, { label: r.label, href: r.href });
  }
  for (const a of c.relatedAnchors ?? []) {
    pushStepUnique(out, { label: a.label, href: `#${a.id}` });
  }
  for (const sk of c.relatedServiceKeys ?? []) {
    const row = moneyExpatTaxesServiceRegistry[sk];
    pushStepUnique(out, { label: row.label, href: row.href });
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
    whatToCheck: c.whatToCheck.length > 0 ? [...c.whatToCheck] : undefined,
    cautionLevel: c.cautionLevel,
    steps: scenarioStepsFromConfig(c),
  }));
}

/** All tools, guides, in-page anchors, and hub links for a signal card (deduped). */
function riskAllLinks(c: MoneyExpatTaxesRiskSignalCardConfig): readonly { label: string; href: string }[] {
  const out: { label: string; href: string }[] = [];
  for (const row of resolveRelatedTools(c.relatedTools ?? [])) {
    pushStepUnique(out, row);
  }
  for (const key of c.relatedToolKeys ?? []) {
    const r = resolveTaxGuideTool(key);
    pushStepUnique(out, { label: r.label, href: r.href });
  }
  for (const key of c.relatedGuideKeys ?? []) {
    const r = resolveTaxGuideTool(key as MoneyTaxGuideToolKey);
    pushStepUnique(out, { label: r.label, href: r.href });
  }
  for (const a of c.relatedAnchors ?? []) {
    pushStepUnique(out, { label: a.label, href: `#${a.id}` });
  }
  for (const sk of c.relatedServiceKeys ?? []) {
    const row = moneyExpatTaxesServiceRegistry[sk];
    pushStepUnique(out, { label: row.label, href: row.href });
  }
  if (out.length === 0) {
    pushStepUnique(out, { href: "#situation-selector", label: "Find your tax situation" });
  }
  return out;
}

export function resolveExpatTaxesRiskSignalCards(cards: readonly MoneyExpatTaxesRiskSignalCardConfig[]) {
  return cards.map((c) => ({
    id: c.id,
    title: c.title,
    whyItMatters: c.whyItMatters,
    recommendedNextStep: c.recommendedAction,
    relatedLinks: riskAllLinks(c),
    cautionLevel: c.cautionLevel,
  }));
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
