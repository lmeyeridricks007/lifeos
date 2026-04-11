import type {
  BestCitiesComparisonCity,
  BestCitiesProfileCard,
  BestCitiesScenario,
  BestCitiesStartHereCard,
  CitiesBestForExpatsCityCardConfig,
  CitiesBestForExpatsContinueCardConfig,
  CitiesBestForExpatsHelpfulToolsShellConfig,
  CitiesBestForExpatsProfileCardConfig,
  CitiesBestForExpatsScenarioConfig,
  CitiesBestForExpatsStartCardConfig,
} from "./citiesBestForExpats.types";

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
    picks: c.picks,
    tradeOffs: joinTradeoffs(c.tradeoffs),
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
    nextLinks: c.nextLinks.map((l) => ({ label: l.label ?? l.href, href: l.href })),
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
