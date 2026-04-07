import type { TopNavKey } from "./types";

/**
 * Old → new top-level nav keys (Phase 0 → Phase 1 IA).
 *
 * | Legacy `TopNavKey` (`types.pre-phase1.ts`) | Current pillar |
 * |---------------------------------------------|----------------|
 * | `move`                                      | `moving`       |
 * | `culture`                                   | `culture` (top-level Culture mega) |
 * | `work` (Phase 1 employment pillar)          | `culture` nav removed; URLs map to `money` / `moving` for active state |
 * | `home`                                      | _(none — empty shell; callers should treat as no selection)_ |
 *
 * Legacy `start_here` merged into `moving` (same paths / active highlighting).
 * `cities`, `services` have no legacy string equivalents. `about` was removed from top nav.
 */
export const LEGACY_TOP_NAV_KEY_TO_CURRENT: Readonly<Partial<Record<string, TopNavKey | null>>> = {
  move: "moving",
  culture: "culture",
  home: null,
  start_here: "moving",
  /** Top-level About nav removed; treat as no selection. */
  about: null,
  /** Old employment pillar key → highlight Money in nav (bookmarks / stored state). */
  work: "money",
};

/** Legacy `menu-features.json` `domainMenus` keys still passed from scripts or forks. */
export const LEGACY_DOMAIN_MENU_KEY_TO_CURRENT: Readonly<Record<string, string>> = {
  /** Old “Move” pillar tool strip → same tool list as `moving`. */
  move: "moving",
  /** Old Work pillar employment tools → Money domain menu. */
  work: "money",
  /** Deprecated pillar; tool strip uses `moving`. */
  start_here: "moving",
};

const CURRENT_TOP_NAV_KEYS = new Set<TopNavKey>([
  "moving",
  "cities",
  "money",
  "services",
  "tools",
  "living",
  "culture",
]);

/**
 * Map a stored or external string to the current `TopNavKey`, or `null` if unknown / legacy `home`.
 * Use for bookmarks, query params, or third-party embeds that still emit old keys.
 */
export function normalizeTopNavKey(input: string): TopNavKey | null {
  if (CURRENT_TOP_NAV_KEYS.has(input as TopNavKey)) {
    return input as TopNavKey;
  }
  const mapped = LEGACY_TOP_NAV_KEY_TO_CURRENT[input];
  if (mapped === null) return null;
  if (mapped) return mapped;
  return null;
}

/**
 * Resolve `menu-features.json` `domainMenus` lookup keys after the nine-pillar rename.
 * Keeps `getDomainFeaturedTools("move")` working like `getDomainFeaturedTools("moving")`.
 */
export function normalizeDomainMenuKey(menuKey: string): string {
  return LEGACY_DOMAIN_MENU_KEY_TO_CURRENT[menuKey] ?? menuKey;
}
