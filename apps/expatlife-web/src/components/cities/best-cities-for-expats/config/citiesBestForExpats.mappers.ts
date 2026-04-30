import type {
  BestCitiesComparisonCity,
  BestCitiesProfileCard,
  BestCitiesProfileCardAccent,
  BestCitiesScenario,
  BestCitiesStartHereCard,
  CitiesBestForExpatsCityCardConfig,
  CitiesBestForExpatsContinueCardConfig,
  CitiesBestForExpatsHelpfulToolsShellConfig,
  CitiesBestForExpatsProfileCardConfig,
  CitiesBestForExpatsScenarioConfig,
  CitiesBestForExpatsStartCardConfig,
} from "./citiesBestForExpats.types";

const PROFILE_CARD_ACCENTS: readonly BestCitiesProfileCardAccent[] = [
  "sky",
  "violet",
  "emerald",
  "amber",
  "rose",
  "cyan",
  "indigo",
  "teal",
  "fuchsia",
] as const;

function normalizeProfileAccent(a?: BestCitiesProfileCardAccent): BestCitiesProfileCardAccent {
  return a && PROFILE_CARD_ACCENTS.includes(a) ? a : "sky";
}

function joinTradeoffs(lines: string[]): string {
  return lines.map((t) => t.trim()).filter(Boolean).join(" ");
}

export function mapStartCardToViewModel(c: CitiesBestForExpatsStartCardConfig): BestCitiesStartHereCard {
  return {
    id: c.id,
    iconKey: c.iconKey,
    title: c.title,
    intro: c.intro,
    keyPoints: c.keyPoints,
    quickLinks: c.quickLinks?.length ? [...c.quickLinks] : undefined,
    quickLinksLabel: c.quickLinksLabel,
    cta: { label: c.cta.label ?? "Open", href: c.cta.href },
  };
}

export function mapCityCardToViewModel(c: CitiesBestForExpatsCityCardConfig): BestCitiesComparisonCity {
  return {
    id: c.id,
    name: c.name,
    href: c.guide.href,
    tagline: c.intro,
    bestFor: c.bestFor,
    tradeOffs: joinTradeoffs(c.tradeoffs),
    levels: c.levels,
    featured: c.visualKey === "core-hub",
  };
}

export function mapScenarioToViewModel(c: CitiesBestForExpatsScenarioConfig): BestCitiesScenario {
  return {
    id: c.id,
    title: c.title,
    chips: c.tags,
    intro: c.intro,
    picks: c.picks.map((p) => ({
      name: p.name,
      href: p.href,
      why: p.why,
      ...(p.highlights?.length ? { highlights: [...p.highlights] } : {}),
    })),
    tradeOffLines: c.tradeoffs.map((t) => t.trim()).filter(Boolean),
    toolHint: c.toolHint?.label ? { label: c.toolHint.label, href: c.toolHint.href } : undefined,
  };
}

export function mapProfileCardToViewModel(c: CitiesBestForExpatsProfileCardConfig): BestCitiesProfileCard {
  return {
    id: c.id,
    name: c.name,
    href: c.guide.href,
    personality: c.intro,
    bestFor: c.bestFor,
    watchOuts: joinTradeoffs(c.tradeoffs),
    tags: c.tags?.length ? [...c.tags] : undefined,
    nextLinks: c.nextLinks.map((l) => ({ label: l.label ?? l.href, href: l.href })),
    image: c.heroImage,
    accent: normalizeProfileAccent(c.accent),
  };
}

export function mapHelpfulToolsToViewModel(shell: CitiesBestForExpatsHelpfulToolsShellConfig) {
  return {
    id: shell.id,
    eyebrow: shell.eyebrow,
    title: shell.title,
    subtitle: shell.subtitle,
    sections: shell.sections.map((s) => ({
      eyebrow: s.eyebrow,
      description: s.description,
      items: s.items.map((it) => ({
        title: it.title,
        description: it.description,
        href: it.link.href,
      })),
    })),
  };
}

export function mapContinueCardToViewModel(c: CitiesBestForExpatsContinueCardConfig) {
  return {
    id: c.id,
    title: c.title,
    description: c.description,
    href: c.link.href,
    ctaLabel: c.ctaLabel,
  };
}
