/** Public affiliate “types” for contextual guide blocks (maps to resolver topics). */
export type ContextualAffiliateCategory =
  | "banking"
  | "insurance"
  | "housing"
  | "utilities"
  | "mobility"
  | "recommended";

export type ContextualAffiliateConfig =
  | { type: ContextualAffiliateCategory }
  | { type: "combined"; categories: ContextualAffiliateCategory[] };

function configKey(c: ContextualAffiliateConfig): string {
  if (c.type === "combined") {
    return `combined:${[...c.categories].sort().join(",")}`;
  }
  return c.type;
}

export function dedupeMidEnd(
  mid: ContextualAffiliateConfig | null | undefined,
  end: ContextualAffiliateConfig | null | undefined
): { mid: ContextualAffiliateConfig | null; end: ContextualAffiliateConfig | null } {
  const m = mid ?? null;
  const e = end ?? null;
  if (m && e && configKey(m) === configKey(e)) {
    return { mid: m, end: null };
  }
  return { mid: m, end: e };
}
