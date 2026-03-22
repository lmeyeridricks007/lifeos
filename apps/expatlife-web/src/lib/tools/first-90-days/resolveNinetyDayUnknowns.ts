import type { First90DaysInputExtended } from "./types";
import type { NinetyDayUnknown } from "./types";
import type { TaskConditions } from "./types";

function matchesConditions(
  conditions: TaskConditions | undefined,
  input: First90DaysInputExtended
): boolean {
  if (!conditions) return true;
  const record = input as Record<string, string | boolean | undefined>;
  for (const [key, allowed] of Object.entries(conditions)) {
    if (!allowed || allowed.length === 0) continue;
    const value = record[key];
    if (value === undefined) continue;
    if (!allowed.includes(String(value))) return false;
  }
  return true;
}

/**
 * Resolves unknowns to confirm, filtered by input.
 */
export function resolveNinetyDayUnknowns(
  input: First90DaysInputExtended,
  unknowns: NinetyDayUnknown[]
): NinetyDayUnknown[] {
  return unknowns
    .filter((u) => matchesConditions(u.conditions, input))
    .slice(0, 10);
}
