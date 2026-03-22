/**
 * Get affiliate providers for a page and category from placements + providers.
 */

import { loadPlacements } from "./loadAffiliates";
import { getAffiliateProvider } from "./getAffiliateProvider";
import type { AffiliateProvider } from "./types";

/**
 * Returns providers for a given page path and category, in placement order.
 * Returns [] if page or category not in placements.
 */
export async function getAffiliatesForCategory(
  pagePath: string,
  category: string
): Promise<AffiliateProvider[]> {
  const placements = await loadPlacements();
  const pagePlacements = placements[pagePath];
  if (!pagePlacements) return [];

  const providerIds = pagePlacements[category];
  if (!providerIds?.length) return [];

  const providers: AffiliateProvider[] = [];
  for (const id of providerIds) {
    const provider = await getAffiliateProvider(id);
    if (provider) providers.push(provider);
  }
  return providers;
}
