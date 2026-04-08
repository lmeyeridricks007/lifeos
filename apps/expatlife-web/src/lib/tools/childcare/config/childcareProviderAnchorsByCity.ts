/**
 * Indicative provider hourly rates (€) before benefit — for planning when the user does not enter a quote.
 * Tiered by city cost pressure; may exceed statutory caps (surfaced separately in the engine).
 */
import type { CareType, ChildcareCityId, ProviderCostTier } from "@/src/types/tools/childcare";

type CityTierRates = Record<ProviderCostTier, Record<CareType, number>>;

export const childcareProviderAnchorsByCity: Record<ChildcareCityId, CityTierRates> = {
  amsterdam: {
    low: { daycare: 9.8, bso: 8.6, gastouder: 7.4 },
    standard: { daycare: 11.9, bso: 10.4, gastouder: 8.95 },
    premium: { daycare: 13.5, bso: 11.8, gastouder: 10.2 },
  },
  rotterdam: {
    low: { daycare: 9.4, bso: 8.3, gastouder: 7.1 },
    standard: { daycare: 11.4, bso: 9.9, gastouder: 8.6 },
    premium: { daycare: 13.0, bso: 11.2, gastouder: 9.7 },
  },
  "the-hague": {
    low: { daycare: 9.5, bso: 8.35, gastouder: 7.15 },
    standard: { daycare: 11.5, bso: 10.0, gastouder: 8.65 },
    premium: { daycare: 13.1, bso: 11.3, gastouder: 9.75 },
  },
  utrecht: {
    low: { daycare: 9.7, bso: 8.5, gastouder: 7.3 },
    standard: { daycare: 11.8, bso: 10.25, gastouder: 8.85 },
    premium: { daycare: 13.4, bso: 11.6, gastouder: 10.05 },
  },
  eindhoven: {
    low: { daycare: 9.0, bso: 7.95, gastouder: 6.85 },
    standard: { daycare: 10.9, bso: 9.5, gastouder: 8.25 },
    premium: { daycare: 12.4, bso: 10.8, gastouder: 9.35 },
  },
  haarlem: {
    low: { daycare: 9.6, bso: 8.45, gastouder: 7.25 },
    standard: { daycare: 11.65, bso: 10.15, gastouder: 8.75 },
    premium: { daycare: 13.2, bso: 11.45, gastouder: 9.9 },
  },
  leiden: {
    low: { daycare: 9.45, bso: 8.32, gastouder: 7.12 },
    standard: { daycare: 11.45, bso: 9.95, gastouder: 8.58 },
    premium: { daycare: 13.0, bso: 11.25, gastouder: 9.65 },
  },
  delft: {
    low: { daycare: 9.5, bso: 8.38, gastouder: 7.18 },
    standard: { daycare: 11.55, bso: 10.05, gastouder: 8.68 },
    premium: { daycare: 13.05, bso: 11.32, gastouder: 9.78 },
  },
  groningen: {
    low: { daycare: 8.85, bso: 7.85, gastouder: 6.75 },
    standard: { daycare: 10.7, bso: 9.35, gastouder: 8.1 },
    premium: { daycare: 12.2, bso: 10.65, gastouder: 9.2 },
  },
  tilburg: {
    low: { daycare: 8.9, bso: 7.88, gastouder: 6.78 },
    standard: { daycare: 10.8, bso: 9.4, gastouder: 8.12 },
    premium: { daycare: 12.3, bso: 10.7, gastouder: 9.22 },
  },
  breda: {
    low: { daycare: 8.92, bso: 7.9, gastouder: 6.8 },
    standard: { daycare: 10.85, bso: 9.42, gastouder: 8.15 },
    premium: { daycare: 12.35, bso: 10.72, gastouder: 9.25 },
  },
  "arnhem-nijmegen": {
    low: { daycare: 8.95, bso: 7.92, gastouder: 6.82 },
    standard: { daycare: 10.9, bso: 9.45, gastouder: 8.18 },
    premium: { daycare: 12.4, bso: 10.75, gastouder: 9.28 },
  },
  other: {
    low: { daycare: 8.8, bso: 7.8, gastouder: 6.7 },
    standard: { daycare: 10.65, bso: 9.3, gastouder: 8.05 },
    premium: { daycare: 12.1, bso: 10.6, gastouder: 9.15 },
  },
};

export function getProviderAnchorHourlyEur(
  city: ChildcareCityId,
  tier: ProviderCostTier,
  careType: CareType
): number {
  return childcareProviderAnchorsByCity[city][tier][careType];
}
