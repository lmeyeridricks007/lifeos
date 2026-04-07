import { allMonetizationProviders } from "@/src/data/monetization/providers";
import type { MonetizationProvider } from "@/src/lib/monetization/types";
import type { MonetizationProviderCategory } from "@/src/lib/monetization/types";

export type { MonetizationProviderCategory };

/** Active providers in one monetization category, stable sort by array order in seed files. */
export function getActiveProvidersByCategory(category: MonetizationProviderCategory): MonetizationProvider[] {
  return allMonetizationProviders.filter((p) => p.category === category && p.status === "active");
}

function normalizeContextToken(raw: string): string {
  return raw.trim().replace(/^\/+|\/+$/g, "").toLowerCase();
}

/**
 * Match `recommendedForContexts` against a context token such as `netherlands/banks` or `banks`.
 * Exact match wins; also matches when the tag ends with `/${needle}` or needle ends with `/${tag}`.
 */
function contextMatches(providerContexts: string[], needle: string): boolean {
  const n = normalizeContextToken(needle);
  if (!n) return false;
  return providerContexts.some((tag) => {
    const t = normalizeContextToken(tag);
    if (t === n) return true;
    if (t.endsWith(`/${n}`)) return true;
    if (n.endsWith(`/${t}`)) return true;
    return false;
  });
}

export type RecommendedProvidersOptions = {
  limit?: number;
  /** When set, keep providers whose `recommendedForStages` is empty or includes this stage. */
  stage?: string;
};

/**
 * Active providers whose `recommendedForContexts` matches the given context string.
 */
export function getRecommendedProvidersByContext(
  context: string,
  options?: RecommendedProvidersOptions
): MonetizationProvider[] {
  const { limit = 6, stage } = options ?? {};

  let list = allMonetizationProviders.filter(
    (p) => p.status === "active" && contextMatches(p.recommendedForContexts, context)
  );

  if (stage) {
    const st = stage.trim().toLowerCase();
    const narrowed = list.filter(
      (p) =>
        p.recommendedForStages.length === 0 ||
        p.recommendedForStages.some((s) => s.toLowerCase() === st)
    );
    if (narrowed.length > 0) list = narrowed;
  }

  return list.slice(0, limit);
}
