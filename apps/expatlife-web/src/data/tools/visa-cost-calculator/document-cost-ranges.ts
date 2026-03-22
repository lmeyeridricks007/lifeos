/**
 * Document preparation cost ranges (translation, apostille, legalization, certified copies).
 * Planning estimates only; provider prices vary.
 */

export type DocumentCostRange = {
  id: string;
  label: string;
  lowEur: number;
  highEur: number;
  note?: string;
};

/** Per-document-type rough ranges (per item or per set). */
export const DOCUMENT_COST_RANGES: DocumentCostRange[] = [
  { id: "translation", label: "Certified translation (per doc)", lowEur: 35, highEur: 120, note: "Varies by language and provider." },
  { id: "apostille", label: "Apostille (per document)", lowEur: 20, highEur: 80, note: "Depends on country and authority." },
  { id: "legalization", label: "Legalization (per document)", lowEur: 50, highEur: 150, note: "When apostille not applicable." },
  { id: "certified-copies", label: "Certified copies", lowEur: 10, highEur: 50, note: "Per copy; notary or authority fees." },
  { id: "replacement-civil", label: "Replacement civil documents", lowEur: 25, highEur: 100, note: "Birth, marriage, etc.; varies by country." },
];

/** Default document prep range when "not sure" or multiple flags. */
export const DEFAULT_DOCUMENT_PREP_RANGE = { low: 100, high: 600 };

/** Multipliers by readiness level (applied to base range). */
export const READINESS_MULTIPLIERS: Record<string, { low: number; high: number }> = {
  "mostly-ready": { low: 0.3, high: 0.6 },
  "partly-ready": { low: 0.6, high: 1 },
  "hardly-started": { low: 1, high: 1.5 },
  "": { low: 0.8, high: 1.2 },
};
