import type { First90DaysInputExtended } from "./types";

export type CountryOverlaysMap = Record<string, string[]>;

/**
 * Returns the list of task IDs to add for the user's origin country.
 */
export function applyCountryTaskOverlays(
  from: string,
  countryOverlays: CountryOverlaysMap | null
): string[] {
  if (!countryOverlays) return [];
  const normalized = from?.trim().toLowerCase().replace(/\s+/g, "-") || "";
  return countryOverlays[normalized] ?? [];
}
