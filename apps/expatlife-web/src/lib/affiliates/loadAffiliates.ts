/**
 * Load affiliate content from Git (JSON). Replace with CMS client when ready.
 * Uses fs so content is server-only; keep serializable when passing to client.
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import type { AffiliateProvider, AffiliateCategory, AffiliatePlacement } from "./types";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content", "affiliates");

function loadJson<T>(filePath: string): T {
  const raw = readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}

/** Load a single provider by id (filename without .json). */
export function loadProvider(id: string): AffiliateProvider | null {
  const filePath = path.join(CONTENT_ROOT, "providers", `${id}.json`);
  if (!existsSync(filePath)) return null;
  return loadJson<AffiliateProvider>(filePath);
}

/** Load all providers from providers/ directory. */
export function loadAllProviders(): AffiliateProvider[] {
  const dir = path.join(CONTENT_ROOT, "providers");
  if (!existsSync(dir)) return [];
  const files = readdirSync(dir).filter((f) => f.endsWith(".json"));
  const providers: AffiliateProvider[] = [];
  for (const file of files) {
    try {
      const p = loadJson<AffiliateProvider>(path.join(dir, file));
      if (p?.id) providers.push(p);
    } catch {
      // skip invalid
    }
  }
  return providers;
}

/** Load a single category by id. */
export function loadCategory(id: string): AffiliateCategory | null {
  const filePath = path.join(CONTENT_ROOT, "categories", `${id}.json`);
  if (!existsSync(filePath)) return null;
  return loadJson<AffiliateCategory>(filePath);
}

/** Load a placement by id (filename = id + .json). */
export function loadPlacement(placementId: string): AffiliatePlacement | null {
  const filePath = path.join(CONTENT_ROOT, "placements", `${placementId}.json`);
  if (!existsSync(filePath)) return null;
  return loadJson<AffiliatePlacement>(filePath);
}

/**
 * Check if a provider matches destination and origin targeting.
 * origin "*" means all origins. destination is usually a single country slug.
 */
export function providerMatchesCountry(
  provider: AffiliateProvider,
  destinationCountry: string,
  originCountry: string | undefined
): boolean {
  const dest = provider.countries.destination;
  const origin = provider.countries.origin;
  if (!dest.includes(destinationCountry) && !dest.includes("*")) return false;
  if (origin.includes("*")) return true;
  if (!originCountry) return true;
  return origin.includes(originCountry);
}

/**
 * Load placement and resolve items to full providers, filtered by country.
 * Returns placement + resolved items (provider + reason + meta) for rendering.
 */
export function loadPlacementWithProviders(
  placementId: string,
  destinationCountry: string,
  originCountry: string | undefined
): {
  placement: AffiliatePlacement;
  items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }>;
} | null {
  const placement = loadPlacement(placementId);
  if (!placement) return null;

  const items: Array<{ provider: AffiliateProvider; reason: string; meta?: Record<string, string> }> = [];
  for (const item of placement.items) {
    const provider = loadProvider(item.providerId);
    if (!provider) continue;
    if (!providerMatchesCountry(provider, destinationCountry, originCountry)) continue;
    items.push({
      provider,
      reason: item.reason,
      meta: item.meta,
    });
  }

  return { placement, items };
}
