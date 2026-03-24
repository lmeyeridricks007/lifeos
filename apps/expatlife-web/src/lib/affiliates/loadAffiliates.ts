/**
 * Load affiliate content from Git (JSON). Replace with CMS client when ready.
 * Uses fs so content is server-only; keep serializable when passing to client.
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import type { GuideSectionServiceResolved } from "@/src/lib/guides/types";
import { getRecommendedGuideServicesFromRegistry } from "@/src/lib/guides/registryRecommendedServices";
import type { AffiliateProvider, AffiliateCategory, AffiliatePlacement } from "./types";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content", "affiliates");

function stableRegistryProviderId(url: string, index: number): string {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "").replace(/\./g, "-");
    return `registry-${host}-${index}`;
  } catch {
    return `registry-slot-${index}`;
  }
}

/** Map registry slice row to affiliate card shape (pillar placements, tools). */
function registryGuideServiceToAffiliateProvider(
  resolved: GuideSectionServiceResolved,
  id: string,
  categoryIds: string[]
): AffiliateProvider {
  const hasLogo = Boolean(resolved.logo?.src?.trim());
  return {
    id,
    name: resolved.name,
    tagline: resolved.description,
    categoryIds,
    countries: { destination: ["netherlands"], origin: ["*"] },
    badges: [],
    highlights: [],
    cta: {
      label: `View ${resolved.name}`,
      href: resolved.url,
      isAffiliate: true,
    },
    disclosure: "Third-party service; confirm pricing and terms on the provider site.",
    logo: hasLogo
      ? { src: resolved.logo!.src, alt: resolved.logo!.alt || `${resolved.name} logo` }
      : { src: "", alt: resolved.name },
  };
}

function categoryIdsForRegistryCategories(categories: readonly string[]): string[] {
  if (categories.includes("housing-platforms")) return ["housing"];
  if (categories.includes("banks")) return ["banking"];
  if (categories.includes("mobile-connectivity")) return ["mobile"];
  if (categories.includes("health-insurance")) return ["insurance"];
  return ["services"];
}

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

  if (placement.registryProviders?.categories?.length) {
    const rp = placement.registryProviders;
    const resolved = getRecommendedGuideServicesFromRegistry(
      rp.categories,
      rp.limit ?? 3,
      rp.strategy
    );
    const catIds = categoryIdsForRegistryCategories(rp.categories);
    resolved.forEach((s, i) => {
      const provider = registryGuideServiceToAffiliateProvider(s, stableRegistryProviderId(s.url, i), catIds);
      if (!providerMatchesCountry(provider, destinationCountry, originCountry)) return;
      items.push({ provider, reason: "", meta: undefined });
    });
  } else {
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
  }

  return { placement, items };
}
