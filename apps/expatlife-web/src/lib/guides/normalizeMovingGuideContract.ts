/**
 * Phase 4: normalize moving-guide JSON after registry expansion so pages follow the
 * guide contract without duplicate CTAs, generic tool sprawl, or unbounded section counts
 * (where sections are plain body/bullet/link blocks).
 */

import type { GuideData, GuideHeroCta, GuideSection, GuideToolCta } from "./types";

const MAX_CONTEXTUAL_TOOL_CTAS = 3;
const MAX_MAJOR_SECTIONS = 6;
const MAX_RELATED_LINKS = 10;

/** TOC entries that point to page regions outside the main `sections` array. */
const NON_SECTION_TOC_IDS = new Set([
  "tools",
  "featured-tools",
  "faq",
  "related-guides",
  "related-services",
  "useful-services",
  "example-scenarios",
]);

export function normalizeHref(href: string): string {
  const trimmed = href.trim();
  const noHash = trimmed.split("#")[0] ?? trimmed;
  if (noHash === "" || noHash === "/") return "/";
  return noHash.replace(/\/+$/, "") || "/";
}

function hrefsEqual(a: string, b: string): boolean {
  return normalizeHref(a) === normalizeHref(b);
}

function isPlainMergeableSection(s: GuideSection): boolean {
  return (
    !s.table &&
    !s.steps &&
    !s.bankComparisons &&
    !s.insurerComparisons &&
    !s.timelineStages &&
    !s.visaRoutes &&
    !s.salaryComparisonExamples
  );
}

function dedupeLinks<T extends { href: string }>(items: T[] | undefined, max: number): T[] | undefined {
  if (!items?.length) return items;
  const seen = new Set<string>();
  const out: T[] = [];
  for (const item of items) {
    const k = normalizeHref(item.href);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(item);
    if (out.length >= max) break;
  }
  return out;
}

function dedupeToolCtas(ctas: GuideToolCta[] | undefined): GuideToolCta[] | undefined {
  if (!ctas?.length) return ctas;
  const seen = new Set<string>();
  const out: GuideToolCta[] = [];
  for (const c of ctas) {
    const k = normalizeHref(c.href);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(c);
    if (out.length >= MAX_CONTEXTUAL_TOOL_CTAS) break;
  }
  return out;
}

function mergeTwoPlainSections(a: GuideSection, b: GuideSection): GuideSection {
  const bodyA = a.body ?? [];
  const bodyB = b.body ?? [];
  const mergedBody = [...bodyA, `**${b.heading}**`, ...bodyB];
  return {
    id: `${a.id}_with_${b.id}`,
    heading: a.heading,
    body: mergedBody,
    bullets: [...(a.bullets ?? []), ...(b.bullets ?? [])],
    links: dedupeLinks([...(a.links ?? []), ...(b.links ?? [])], 24),
    callout: a.callout ?? b.callout,
    internalCta: a.internalCta ?? b.internalCta,
    personaExample: a.personaExample ?? b.personaExample,
    image: a.image ?? b.image,
    affiliatePlacementId: a.affiliatePlacementId ?? b.affiliatePlacementId,
    ctaBlock: a.ctaBlock ?? b.ctaBlock,
    recommendedRegistryServices: a.recommendedRegistryServices ?? b.recommendedRegistryServices,
    ...(a.services?.length || b.services?.length
      ? { services: [...(a.services ?? []), ...(b.services ?? [])] }
      : {}),
  };
}

/**
 * Merge adjacent plain sections until at most `max` sections, or no adjacent plain pair remains.
 */
function collapseAdjacentPlainSections(sections: GuideSection[], max: number): GuideSection[] {
  let out = sections.slice();
  let guard = 0;
  while (out.length > max && guard < 200) {
    guard++;
    let merged = false;
    for (let i = 0; i < out.length - 1; i++) {
      if (isPlainMergeableSection(out[i]) && isPlainMergeableSection(out[i + 1])) {
        out[i] = mergeTwoPlainSections(out[i], out[i + 1]);
        out.splice(i + 1, 1);
        merged = true;
        break;
      }
    }
    if (!merged) break;
  }
  return out;
}

function mergeTailWhenAllPlain(sections: GuideSection[], max: number): GuideSection[] {
  if (sections.length <= max) return sections;
  const head = sections.slice(0, max - 1);
  const tail = sections.slice(max - 1);
  if (tail.length === 0) return sections;
  if (!tail.every(isPlainMergeableSection)) return sections;

  const first = tail[0]!;
  const rest = tail.slice(1);
  let merged: GuideSection = { ...first };
  for (const s of rest) {
    merged = mergeTwoPlainSections(merged, s);
  }
  merged.id = "additional-guidance";
  merged.heading = "Additional guidance";
  return [...head, merged];
}

function stripRedundantHeroEndAndBand(data: GuideData): void {
  const hero = data.heroCta;
  if (!hero) return;

  const heroPrimary = hero.primaryCtaHref;

  if (data.endCta && hrefsEqual(data.endCta.ctaHref, heroPrimary)) {
    delete data.endCta;
  }

  if (data.midPageCta && hrefsEqual(data.midPageCta.ctaHref, heroPrimary)) {
    delete data.midPageCta;
    delete data.midPageCtaAfterSectionId;
  }

  if (data.toolsCtaBand && hrefsEqual(data.toolsCtaBand.primaryHref, heroPrimary)) {
    delete data.toolsCtaBand;
  }

  if (data.endCta && data.toolsCtaBand && hrefsEqual(data.endCta.ctaHref, data.toolsCtaBand.primaryHref)) {
    const sameTitle =
      data.endCta.title.trim().toLowerCase() === data.toolsCtaBand.title.trim().toLowerCase();
    if (sameTitle) {
      delete data.endCta;
    }
  }
}

function trimHeroSupportingLinks(hero: GuideHeroCta | undefined): void {
  if (!hero?.supportingLinks?.length) return;
  hero.supportingLinks = dedupeLinks(hero.supportingLinks, 8);
}

function syncTocAfterSectionMerge(out: GuideData, sectionCountBefore: number): void {
  if (!out.tocItems?.length || !out.sections?.length) return;
  if (out.sections.length === sectionCountBefore) return;

  const sectionIds = new Set(out.sections.map((s) => s.id));
  const kept = out.tocItems.filter(
    (t) => NON_SECTION_TOC_IDS.has(t.id) || sectionIds.has(t.id)
  );
  const seen = new Set(kept.map((t) => t.id));
  for (const s of out.sections) {
    if (!seen.has(s.id)) {
      kept.push({
        id: s.id,
        label: s.heading.length > 48 ? `${s.heading.slice(0, 45)}…` : s.heading,
      });
      seen.add(s.id);
    }
  }
  out.tocItems = kept;
}

/** Apply contract normalization (mutates a deep clone). */
export function normalizeMovingGuideContract(data: GuideData): GuideData {
  const sectionCountBefore = data.sections?.length ?? 0;
  const out = structuredClone(data) as GuideData;

  const toolCtas = dedupeToolCtas(out.toolCtas);
  if (toolCtas !== undefined) {
    out.toolCtas = toolCtas;
  }

  stripRedundantHeroEndAndBand(out);
  trimHeroSupportingLinks(out.heroCta);

  if (out.internalLinks?.related) {
    out.internalLinks = {
      ...out.internalLinks,
      related: dedupeLinks(out.internalLinks.related, MAX_RELATED_LINKS) ?? [],
    };
  }

  if (out.exploreNextCards?.length) {
    const seen = new Set<string>();
    out.exploreNextCards = out.exploreNextCards.filter((c) => {
      const k = normalizeHref(c.ctaHref);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

  if (out.featuredTools?.length) {
    const seen = new Set<string>();
    out.featuredTools = out.featuredTools.filter((t) => {
      const k = normalizeHref(t.href);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }

  if (out.sections?.length) {
    let sections = collapseAdjacentPlainSections(out.sections, MAX_MAJOR_SECTIONS);
    if (sections.length > MAX_MAJOR_SECTIONS) {
      sections = mergeTailWhenAllPlain(sections, MAX_MAJOR_SECTIONS);
    }
    out.sections = sections;
    syncTocAfterSectionMerge(out, sectionCountBefore);
  }

  return out;
}

/** Same contract normalization for visa, country, and other non-JSON guide pipelines. */
export const normalizeGuideContract = normalizeMovingGuideContract;
