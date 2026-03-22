/**
 * Resolve which overlay task IDs to add based on origin country.
 */

import type { MovingChecklistInputExtended } from "./types";

export type CountryOverlaysMap = Record<string, string[]>;

/**
 * Returns task IDs to add for the given origin country.
 * Origin is normalized to lowercase with spaces replaced by hyphens.
 */
export function applyCountryOverlays(
  input: MovingChecklistInputExtended,
  countryOverlays: CountryOverlaysMap
): string[] {
  const origin = (input.from || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
  if (!origin) return [];
  return countryOverlays[origin] ?? [];
}
