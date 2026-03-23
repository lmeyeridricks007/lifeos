import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { loadAllProviders } from "@/src/lib/affiliates/loadAffiliates";
import type { AffiliatePlacement } from "@/src/lib/affiliates/types";
import type { AffiliateProviderRegistryRow } from "./unified-registry-types";

const PLACEMENTS_DIR = path.join(process.cwd(), "src", "content", "affiliates", "placements");

function placementIdsByProviderId(): Record<string, string[]> {
  const map: Record<string, Set<string>> = {};
  if (!existsSync(PLACEMENTS_DIR)) return {};
  for (const file of readdirSync(PLACEMENTS_DIR)) {
    if (!file.endsWith(".json")) continue;
    const placementId = file.replace(/\.json$/i, "");
    let placement: AffiliatePlacement;
    try {
      const raw = readFileSync(path.join(PLACEMENTS_DIR, file), "utf8");
      placement = JSON.parse(raw) as AffiliatePlacement;
    } catch {
      continue;
    }
    for (const item of placement.items ?? []) {
      const pid = item.providerId;
      if (!pid) continue;
      if (!map[pid]) map[pid] = new Set();
      map[pid].add(placementId);
    }
  }
  return Object.fromEntries(
    Object.entries(map).map(([k, set]) => [
      k,
      Array.from(set).sort((a, b) => a.localeCompare(b)),
    ])
  );
}

/**
 * Rows for `src/content/affiliates/providers/*.json` + placement references.
 * Legacy `packages/content/affiliates` is unused (empty); add a separate loader if populated later.
 */
export function buildAffiliateProviderRegistryRows(): AffiliateProviderRegistryRow[] {
  const byPlacement = placementIdsByProviderId();
  const providers = loadAllProviders();
  const surfaces = [
    "AffiliateBlock",
    "AffiliateCardGrid",
    "AffiliateComparison",
    "loadPlacementWithProviders",
    "app/api/affiliate-placement",
  ] as const;

  return providers.map((p) => ({
    rowKind: "affiliate-provider",
    registryId: `affiliate-provider/${p.id}`,
    category: "affiliate-provider",
    sourcePage: `src/content/affiliates/providers/${p.id}.json`,
    surfaces: [...surfaces],
    providerId: p.id,
    name: p.name,
    tagline: p.tagline,
    primaryOutUrl: p.cta.href,
    isAffiliateLink: p.cta.isAffiliate,
    categoryIds: [...p.categoryIds],
    placementIds: byPlacement[p.id] ?? [],
  }));
}
