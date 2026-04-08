import type { MaxCommute } from "../types";
import { commuteClassToBaseScore } from "./commuteMatrix";
import type { CommutePracticalityClass } from "./types";

/**
 * Stricter max-commute tolerance → boost score requirement (penalize long classes).
 * under20 = least tolerance for long commutes.
 */
export function maxCommuteMultiplier(max: MaxCommute): number {
  switch (max) {
    case "under20":
      return 1.14;
    case "under30":
      return 1.08;
    case "under45":
      return 1;
    case "under60":
      return 0.94;
    default:
      return 1;
  }
}

/**
 * Commute dimension 0–100: base from practicality class, adjusted by user tolerance and hub strength (1–10).
 * Remote workers: commute dimension uses hub strength only (office not binding).
 */
export function computeCommuteDimensionScore(
  practicality: CommutePracticalityClass | null,
  maxCommute: MaxCommute,
  remote: boolean,
  commuteHubStrength1to10: number
): number {
  if (remote) {
    return Math.round(68 + commuteHubStrength1to10 * 2.8);
  }
  if (practicality == null) {
    return Math.round(70 + commuteHubStrength1to10 * 2.5);
  }
  let s = commuteClassToBaseScore(practicality);
  s = Math.round(s * maxCommuteMultiplier(maxCommute));
  s += Math.round((commuteHubStrength1to10 - 5.5) * 1.4);
  return Math.max(6, Math.min(99, s));
}
