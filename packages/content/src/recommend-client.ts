import type { EntityRef, RecommendationsJson } from "./types";

export type { EntityRef, RecommendationsJson, NlMovingHub } from "./types";

function matchesWhen(
  selections: Record<string, string>,
  when: Record<string, string>
): boolean {
  return Object.entries(when).every(([k, v]) => selections[k] === v);
}

/**
 * Deterministic recommendations from hub JSON rules (client-safe).
 */
export function recommend(
  selections: Record<string, string>,
  data: RecommendationsJson
): { pages: EntityRef[]; tools: EntityRef[]; basedOn: string[] } {
  const pages: EntityRef[] = [];
  const tools: EntityRef[] = [];
  const basedOn: string[] = [];
  const seenP = new Set<string>();
  const seenT = new Set<string>();

  for (const rule of data.rules) {
    if (!matchesWhen(selections, rule.when)) continue;
    if (rule.because) basedOn.push(rule.because);
    for (const id of rule.pages ?? []) {
      const ref = data.entities.pages[id];
      if (ref && !seenP.has(ref.href)) {
        seenP.add(ref.href);
        pages.push(ref);
      }
    }
    for (const id of rule.tools ?? []) {
      const ref = data.entities.tools[id];
      if (ref && !seenT.has(ref.href)) {
        seenT.add(ref.href);
        tools.push(ref);
      }
    }
  }

  return { pages, tools, basedOn };
}
