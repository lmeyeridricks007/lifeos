/**
 * Modeled service lines for the Utilities & Services Comparison Tool.
 * Planning bands only — labels describe what the row represents, not a live bill.
 */
import type { UsServiceCategoryId, UsServiceClassification } from "../types";

export type UtilitiesDefaultClassification = Exclude<UsServiceClassification, "may_already_be_included">;

export type UtilitiesServiceCategoryConfig = {
  id: UsServiceCategoryId;
  /** Full label for results tables and export */
  label: string;
  /** Short chip / mobile label */
  shortLabel: string;
  /** Included in “essential” monthly subtotal when the line has spend in this run */
  essentialWhenEnabled: boolean;
  /** Baseline compare-vs-fixed hint before lease/inclusion overrides */
  defaultClassification: UtilitiesDefaultClassification;
  /** Display order in breakdown (lower first) */
  sortOrder: number;
  /** One-line expat context for tooltips or cards */
  expatSummary: string;
  /** Honest scope: what this row is NOT */
  planningScopeNote: string;
};

export const UTILITIES_SERVICE_CATEGORIES: readonly UtilitiesServiceCategoryConfig[] = [
  {
    id: "energy",
    label: "Energy (electricity + gas / heat)",
    shortLabel: "Energy",
    essentialWhenEnabled: true,
    defaultClassification: "actively_compare",
    sortOrder: 10,
    expatSummary:
      "Usually the largest variable retail line when you hold the contract — tariff type and building efficiency matter more than city choice.",
    planningScopeNote:
      "Not your supplier quote, meter profile, or dynamic tariff hour-by-hour. A rounded monthly band from housing, usage, and heating archetypes.",
  },
  {
    id: "water",
    label: "Water",
    shortLabel: "Water",
    essentialWhenEnabled: true,
    defaultClassification: "usually_local_fixed",
    sortOrder: 20,
    expatSummary:
      "Regional drinking water and wastewater regime — you clarify billing (you vs landlord), not shop ten ‘water brands’.",
    planningScopeNote:
      "Broad household band; real levies depend on your water company and how service costs pass through your lease.",
  },
  {
    id: "internet",
    label: "Home internet / broadband",
    shortLabel: "Internet",
    essentialWhenEnabled: true,
    defaultClassification: "actively_compare",
    sortOrder: 30,
    expatSummary:
      "Compare speed, install lead time, and contract — fiber at your socket beats city averages in the real world.",
    planningScopeNote:
      "Tier placeholders only until you check address availability; promos and hardware rules change outcomes.",
  },
  {
    id: "mobile",
    label: "Mobile",
    shortLabel: "Mobile",
    essentialWhenEnabled: true,
    defaultClassification: "actively_compare",
    sortOrder: 40,
    expatSummary:
      "SIM-only vs bundles; scale by lines, data, and whether you still need a foreign number overlap.",
    planningScopeNote:
      "Per-line planning bands — not handset financing or roaming promo math.",
  },
  {
    id: "municipality",
    label: "Municipality & local household charges",
    shortLabel: "Gemeente / local",
    essentialWhenEnabled: true,
    defaultClassification: "usually_local_fixed",
    sortOrder: 50,
    expatSummary:
      "Waste, sewer, and similar household charges follow local rules — expect letters on their own schedule.",
    planningScopeNote:
      "City anchor × household shape; not your actual afvalstoffenheffing or rioolheffing letter.",
  },
  {
    id: "media_bundle",
    label: "TV / media bundle",
    shortLabel: "TV / media",
    essentialWhenEnabled: false,
    defaultClassification: "optional",
    sortOrder: 60,
    expatSummary:
      "Optional sport or TV add-ons on top of broadband — compare total cost vs streaming stack.",
    planningScopeNote:
      "Single placeholder when enabled; real bundles are provider-specific.",
  },
  {
    id: "contents_insurance",
    label: "Contents (home contents) insurance",
    shortLabel: "Contents",
    essentialWhenEnabled: false,
    defaultClassification: "actively_compare",
    sortOrder: 70,
    expatSummary:
      "Inboedel — compare limits for bikes, electronics, and theft-away-from-home, not teaser premium alone.",
    planningScopeNote:
      "Rounded typical premium band; exclusions and deductibles shift real price.",
  },
  {
    id: "liability_insurance",
    label: "Liability (aansprakelijkheid) insurance",
    shortLabel: "Liability",
    essentialWhenEnabled: false,
    defaultClassification: "actively_compare",
    sortOrder: 80,
    expatSummary:
      "Cheap third-party cover with different exclusions — often bought next to contents insurance.",
    planningScopeNote:
      "Placeholder monthly band; verify sports, rental, or drone exclusions if relevant.",
  },
] as const;

export type UtilitiesServiceCategoryIdFromConfig = (typeof UTILITIES_SERVICE_CATEGORIES)[number]["id"];
