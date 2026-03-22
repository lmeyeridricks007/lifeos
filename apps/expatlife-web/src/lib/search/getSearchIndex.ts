/**
 * Cached, live-only search index. Every document is re-checked with `isRouteLive`
 * so the search surface cannot outpace route-registry updates.
 */

import { normalizeSitePath } from "@/src/data/site/route-registry";
import { isRouteLive } from "@/src/lib/routes/routeStatus";
import { buildAllSearchDocuments } from "./buildSearchIndex";
import type { SearchDocument } from "./searchDocument";

let cached: SearchDocument[] | null = null;

export function getSearchIndex(): SearchDocument[] {
  if (cached) return cached;

  const seen = new Set<string>();
  const live: SearchDocument[] = [];

  for (const doc of buildAllSearchDocuments()) {
    if (!doc.href?.startsWith("/")) continue;
    if (!isRouteLive(doc.href)) continue;
    const key = normalizeSitePath(doc.href);
    if (seen.has(key)) continue;
    seen.add(key);
    live.push(doc);
  }

  cached = live;
  return cached;
}

/** Test / hot-reload helper — not used in production paths. */
export function __resetSearchIndexCacheForTests(): void {
  cached = null;
}
