/**
 * Content freshness / trust-signal contract for ExpatCopilot.
 *
 * A Last reviewed date must represent an actual editorial or statutory review.
 * Never stamp "today" across pages without validating content.
 */

export type FreshnessSensitivity = "HIGH_SENSITIVITY" | "MEDIUM_SENSITIVITY" | "EVERGREEN";

export type OfficialSourceRef = {
  label: string;
  href: string;
};

/**
 * Canonical freshness metadata for high-sensitivity (and selected medium) pages.
 * ISO dates are YYYY-MM-DD. Display labels are human-readable for ATF UI.
 */
export type ContentFreshnessMeta = {
  sensitivity: FreshnessSensitivity;
  /** ISO date of the last actual content/statutory review. */
  lastReviewed: string;
  /** Optional ISO date when substantive copy last changed (defaults to lastReviewed). */
  lastModified?: string;
  /** Statutory / figure window start (ISO), when applicable. */
  effectiveFrom?: string;
  /** Statutory / figure window end (ISO), when applicable. */
  effectiveTo?: string;
  /** Preformatted effective window, e.g. "1 July 2026–31 December 2026". */
  effectivePeriodLabel?: string;
  officialSources: readonly OfficialSourceRef[];
  /** Short note on what was reviewed (for inventory / editors). */
  reviewNotes?: string;
};

export type FreshnessInventoryRow = {
  url: string;
  sensitivity: FreshnessSensitivity;
  lastReviewedVisible: string;
  schemaDateModified: string;
  officialSources: string;
  effectivePeriod: string;
  action: string;
  status: "IMPLEMENTED" | "PARTIAL" | "PENDING" | "N_A";
};
