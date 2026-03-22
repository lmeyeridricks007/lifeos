import type { First90DaysInputExtended } from "./types";

export type ConditionOverlaysMap = Record<string, string[]>;

function getKey<K extends keyof First90DaysInputExtended>(
  key: K,
  value: First90DaysInputExtended[K]
): string | null {
  if (value === undefined || value === null) return null;
  return `${key}_${String(value)}`;
}

/**
 * Returns the list of task IDs to add based on input conditions
 * (e.g. startingJobSoon_yes, hasBankAccountAlready_false).
 */
export function applyConditionTaskOverlays(
  input: First90DaysInputExtended,
  conditionOverlays: ConditionOverlaysMap | null
): string[] {
  if (!conditionOverlays) return [];
  const ids = new Set<string>();

  const keys: (keyof First90DaysInputExtended)[] = [
    "startingJobSoon",
    "hasBankAccountAlready",
    "hasBSNAlready",
    "housingSituation",
    "hasKidsAdminNeeds",
    "needsDrivingSoon",
    "needsUtilitiesSetup",
    "wantsLanguageSupport",
    "needsIntegrationAwareness",
  ];

  for (const key of keys) {
    const value = input[key];
    const overlayKey = getKey(key, value);
    if (overlayKey && conditionOverlays[overlayKey]) {
      for (const id of conditionOverlays[overlayKey]) ids.add(id);
    }
  }

  return Array.from(ids);
}
