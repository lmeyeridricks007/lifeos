/**
 * Usage-level multipliers (mainly energy and related variable load).
 * Not smart-meter data — “low / average / high” is self-reported lifestyle bands.
 */
import type { UsUsageLevel } from "../types";

export type UtilitiesUsageMultiplierEntry = {
  id: UsUsageLevel;
  multiplier: number;
  label: string;
  expatGuidance: string;
};

export const UTILITIES_USAGE_MULTIPLIER_ROWS: readonly UtilitiesUsageMultiplierEntry[] = [
  {
    id: "low",
    multiplier: 0.78,
    label: "Low",
    expatGuidance: "Away from home often, frugal heating, limited always-on devices.",
  },
  {
    id: "average",
    multiplier: 1,
    label: "Average",
    expatGuidance: "Typical working household — middle of a very wide real range.",
  },
  {
    id: "high",
    multiplier: 1.22,
    label: "High",
    expatGuidance: "Heavy cooking, heating comfort, gaming, or multiple people home often.",
  },
] as const;

export const UTILITIES_USAGE_MULTIPLIERS: Record<UsUsageLevel, number> = {
  low: 0.78,
  average: 1,
  high: 1.22,
};
