/**
 * City anchors for municipality-style monthly bands and a mild nudge on optional connectivity expectations.
 * Values are editorial planning coefficients — not gemeente assessments or market rents.
 */
import type { UsCity } from "../types";

export type UtilitiesCityAnchor = {
  /** Planning €/month for gemeente-linked household charges (annualized mental math = ×12) */
  municipalityMonthlyEur: number;
  /** Soft multiplier on optional bundle “feel” (e.g. slightly higher optional spend in expensive cities) */
  optionalBundleNudge: number;
  /** Human label for UI */
  label: string;
  /** Broad assumption note for tooltips */
  assumptionComment: string;
};

export type UtilitiesCityAnchorsMap = Record<UsCity, UtilitiesCityAnchor>;

export const UTILITIES_CITY_ANCHORS: UtilitiesCityAnchorsMap = {
  amsterdam: {
    municipalityMonthlyEur: 92,
    optionalBundleNudge: 1.06,
    label: "Amsterdam",
    assumptionComment:
      "Higher-cost metro; local charge band nudged up — still not your actual assessment letter.",
  },
  rotterdam: {
    municipalityMonthlyEur: 78,
    optionalBundleNudge: 1.02,
    label: "Rotterdam",
    assumptionComment: "Randstad band; broad average for planning until you know the gemeente.",
  },
  "the-hague": {
    municipalityMonthlyEur: 85,
    optionalBundleNudge: 1.03,
    label: "The Hague",
    assumptionComment: "International city mix; municipality line is a band, not a quote.",
  },
  utrecht: {
    municipalityMonthlyEur: 88,
    optionalBundleNudge: 1.05,
    label: "Utrecht",
    assumptionComment: "Tight housing market city; local charges modeled slightly above mid-tier.",
  },
  eindhoven: {
    municipalityMonthlyEur: 72,
    optionalBundleNudge: 1.0,
    label: "Eindhoven",
    assumptionComment: "Brabant tech region; mid anchor for planning.",
  },
  haarlem: {
    municipalityMonthlyEur: 86,
    optionalBundleNudge: 1.05,
    label: "Haarlem",
    assumptionComment: "Randstad commuter belt; charges nudged vs national median.",
  },
  leiden: {
    municipalityMonthlyEur: 76,
    optionalBundleNudge: 1.01,
    label: "Leiden",
    assumptionComment: "University city; still use official gemeente figures when budgeting firmly.",
  },
  delft: {
    municipalityMonthlyEur: 74,
    optionalBundleNudge: 1.0,
    label: "Delft",
    assumptionComment: "Smaller city anchor — wide error bars until you live there.",
  },
  groningen: {
    municipalityMonthlyEur: 68,
    optionalBundleNudge: 0.98,
    label: "Groningen",
    assumptionComment: "Northern city; lower anchor than Randstad metros (planning only).",
  },
  breda: {
    municipalityMonthlyEur: 70,
    optionalBundleNudge: 0.98,
    label: "Breda",
    assumptionComment: "Southern city band; not neighborhood-specific.",
  },
  tilburg: {
    municipalityMonthlyEur: 69,
    optionalBundleNudge: 0.97,
    label: "Tilburg",
    assumptionComment: "Broad Brabant planning coefficient.",
  },
  "arnhem-nijmegen": {
    municipalityMonthlyEur: 73,
    optionalBundleNudge: 1.0,
    label: "Arnhem / Nijmegen",
    assumptionComment: "Combined regional anchor — split gemeentes differ in reality.",
  },
  other: {
    municipalityMonthlyEur: 75,
    optionalBundleNudge: 1.0,
    label: "Other Netherlands",
    assumptionComment: "Fallback when you have not picked a listed city — replace with local data when possible.",
  },
};

/** Strip UI-only fields for the numeric engine */
export function utilitiesCityAnchorsForEngine(): Record<
  UsCity,
  { municipalityMonthlyEur: number; optionalBundleNudge: number; label: string }
> {
  const out = {} as Record<UsCity, { municipalityMonthlyEur: number; optionalBundleNudge: number; label: string }>;
  (Object.keys(UTILITIES_CITY_ANCHORS) as UsCity[]).forEach((city) => {
    const row = UTILITIES_CITY_ANCHORS[city];
    out[city] = {
      municipalityMonthlyEur: row.municipalityMonthlyEur,
      optionalBundleNudge: row.optionalBundleNudge,
      label: row.label,
    };
  });
  return out;
}
