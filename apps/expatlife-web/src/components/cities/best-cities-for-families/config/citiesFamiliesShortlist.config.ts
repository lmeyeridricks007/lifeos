import type { FamiliesCityFamilyLens, FamiliesCityRegistryEntry } from "./citiesFamiliesCities.config";
import { citiesFamiliesCities } from "./citiesFamiliesCities.config";

export type FamiliesCityTier = "tier1" | "tier2" | "context";

/** Shortlist row — built from `citiesFamiliesCities` + tier assignment. */
export type FamiliesShortlistCityConfig = {
  id: string;
  name: string;
  tier: FamiliesCityTier;
  tagline: string;
  bestFor: string;
  tradeOffs: string;
  levels: { costPressure: FamiliesCityRegistryEntry["costLevel"]; familyFit: FamiliesCityRegistryEntry["familyFit"] };
  href: string;
  ctaLabel?: string;
  familyLens?: FamiliesCityFamilyLens;
};

const byId = new Map(citiesFamiliesCities.map((c) => [c.id, c]));

function toShortlistCity(tier: FamiliesCityTier, id: string): FamiliesShortlistCityConfig {
  const c = byId.get(id);
  if (!c) {
    throw new Error(`[citiesFamiliesShortlist] Unknown city id: "${id}"`);
  }
  return {
    id: c.id,
    name: c.name,
    tier,
    tagline: c.tagline,
    bestFor: c.bestFor,
    tradeOffs: c.watchOuts,
    levels: { costPressure: c.costLevel, familyFit: c.familyFit },
    href: c.href,
    ctaLabel: c.ctaLabel,
    familyLens: c.familyLens,
  };
}

const TIER1_IDS = ["utrecht", "haarlem", "leiden", "delft", "amstelveen"] as const;
const TIER2_IDS = ["amersfoort", "breda", "eindhoven", "groningen", "arnhem-nijmegen"] as const;
const CONTEXT_IDS = ["amsterdam", "rotterdam"] as const;

export const citiesFamiliesShortlistTier1: FamiliesShortlistCityConfig[] = TIER1_IDS.map((id) =>
  toShortlistCity("tier1", id)
);

export const citiesFamiliesShortlistTier2: FamiliesShortlistCityConfig[] = TIER2_IDS.map((id) =>
  toShortlistCity("tier2", id)
);

export const citiesFamiliesShortlistContext: FamiliesShortlistCityConfig[] = CONTEXT_IDS.map((id) =>
  toShortlistCity("context", id)
);
