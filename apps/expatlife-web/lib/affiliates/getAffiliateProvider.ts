/**
 * Get a single affiliate provider by id from the content registry.
 */

import { loadProviders } from "./loadAffiliates";
import type { AffiliateProvider } from "./types";

/**
 * Returns the provider for the given id, or null if not found.
 */
export async function getAffiliateProvider(id: string): Promise<AffiliateProvider | null> {
  const providers = await loadProviders();
  return providers[id] ?? null;
}
