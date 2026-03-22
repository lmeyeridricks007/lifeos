/**
 * Resolve which overlay task IDs to add based on input conditions.
 */

import type { MovingChecklistInputExtended } from "./types";

export type ConditionOverlaysMap = Record<string, string[]>;

function getConditionKey(key: string, value: string | boolean): string {
  const v = value === true ? "true" : value === false ? "false" : String(value);
  return `${key}_${v}`;
}

/**
 * Returns task IDs to add for the given extended input.
 * Keys in conditionOverlays are like "employment_job-offer", "housingReadiness_no-place-yet", "shippingNeeds_true".
 */
export function applyConditionOverlays(
  input: MovingChecklistInputExtended,
  conditionOverlays: ConditionOverlaysMap
): string[] {
  const ids: string[] = [];

  const checks: Array<[keyof MovingChecklistInputExtended, string | boolean]> = [
    ["employment", input.employment],
    ["household", input.household],
    ["housingReadiness", input.housingReadiness],
    ["kidsSchoolNeeds", input.kidsSchoolNeeds],
    ["shippingNeeds", input.shippingNeeds],
    ["largeMoneyTransfer", input.largeMoneyTransfer],
    ["hasCoreDocsReady", input.hasCoreDocsReady],
    ["needsTemporaryHousing", input.needsTemporaryHousing],
  ];

  for (const [key, value] of checks) {
    if (value === undefined) continue;
    const conditionKey = getConditionKey(key, value);
    const list = conditionOverlays[conditionKey];
    if (list?.length) ids.push(...list);
  }

  return ids;
}
