import type {
  BestCitiesProfileCardAccent,
  CitiesBestForExpatsProfileCardConfig,
} from "../../best-cities-for-expats/config/citiesBestForExpats.types";
import { mapProfileCardToViewModel } from "../../best-cities-for-expats/config/citiesBestForExpats.mappers";
import type { CitiesCheapestCityCard } from "./citiesCheapest.types";

const PROFILE_ACCENTS: readonly BestCitiesProfileCardAccent[] = [
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

/** Hero tiles for profile decision cards (subset of shortlist cities with `profile`). */
const PROFILE_HERO_BY_CITY_ID: Record<string, { src: string; alt: string }> = {
  groningen: {
    src: "/images/heroes/groningen-expat-city-hero.png",
    alt: "Groningen city centre — northern Netherlands expat context",
  },
  tilburg: {
    src: "/images/heroes/tilburg-expat-city-hero.png",
    alt: "Tilburg Brabant city centre",
  },
  breda: {
    src: "/images/heroes/breda-expat-city-hero.png",
    alt: "Breda historic southern city",
  },
  arnhem: {
    src: "/images/heroes/arnhem-expat-city-hero.png",
    alt: "Arnhem Gelderland city and green surroundings",
  },
  maastricht: {
    src: "/images/heroes/maastricht-expat-city-hero.png",
    alt: "Maastricht historic centre on the Meuse",
  },
  eindhoven: {
    src: "/images/heroes/eindhoven-city-hub-hero.png",
    alt: "Eindhoven Brainport tech and city atmosphere",
  },
};

function joinLines(lines: string[], joiner: string): string {
  return lines.map((t) => t.trim()).filter(Boolean).join(joiner);
}

function primaryLink(c: CitiesCheapestCityCard): { href: string; label: string } {
  const explicit = c.links.find((l) => l.isPrimary);
  if (explicit) return { href: explicit.href, label: explicit.label };
  const first = c.links[0];
  if (!first) throw new Error(`Cheapest city "${c.id}" has no links`);
  return { href: first.href, label: first.label };
}

export type CheapestShortlistCityVm = {
  id: string;
  name: string;
  costBand: CitiesCheapestCityCard["costLevel"];
  costBandLabel: string;
  specialNote?: string;
  tagline: string;
  tags: string[];
  bestFor: string;
  tradeOffs: string;
  cta: { href: string; label: string };
};

export function mapCheapestCityCardToShortlistVm(c: CitiesCheapestCityCard): CheapestShortlistCityVm {
  return {
    id: c.id,
    name: c.name,
    costBand: c.costLevel,
    costBandLabel: c.costLevel === "low" ? "Lower rent pressure" : "Medium-low rent pressure",
    specialNote: c.specialNote,
    tagline: c.tagline,
    tags: c.tags,
    bestFor: joinLines(c.bestFor, " "),
    tradeOffs: joinLines(c.tradeoffs, " "),
    cta: primaryLink(c),
  };
}

function cityCardToProfileConfig(c: CitiesCheapestCityCard, profileIndex: number): CitiesBestForExpatsProfileCardConfig {
  const p = c.profile;
  if (!p) throw new Error(`City "${c.id}" has no profile slice`);
  const guide = primaryLink(c);
  const bestForSource = p.bestFor ?? c.bestFor;
  const tradeSource = p.tradeoffs ?? c.tradeoffs;
  const hero = PROFILE_HERO_BY_CITY_ID[c.id];
  return {
    id: c.id,
    name: c.name,
    guide: { href: guide.href, label: guide.label },
    intro: p.intro,
    bestFor: joinLines(bestForSource, " "),
    tradeoffs: tradeSource,
    nextLinks: p.nextLinks.map((l) => ({ href: l.href, label: l.label })),
    heroImage: hero,
    accent: PROFILE_ACCENTS[profileIndex % PROFILE_ACCENTS.length],
  };
}

/** Profile grid uses cities that define a `profile` slice, in config order. */
export function mapCheapestCityCardsToProfileViewModels(cities: readonly CitiesCheapestCityCard[]) {
  return cities.filter((c) => c.profile).map((c, i) => mapProfileCardToViewModel(cityCardToProfileConfig(c, i)));
}
