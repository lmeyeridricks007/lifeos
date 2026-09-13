/**
 * Display helpers for freshness / trust strips.
 */

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/** Format ISO YYYY-MM-DD → "13 September 2026". */
export function formatFreshnessDisplayDate(isoDate: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim());
  if (!m) return isoDate.trim();
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (!year || month < 1 || month > 12 || day < 1 || day > 31) return isoDate.trim();
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

/** "Last reviewed: 13 September 2026" */
export function formatLastReviewedLine(isoDate: string): string {
  return `Last reviewed: ${formatFreshnessDisplayDate(isoDate)}`;
}

/**
 * Full ATF line with optional statutory window.
 * Example: "Last reviewed: 13 September 2026 · Effective: 1 July 2026–31 December 2026"
 */
export function formatLastReviewedWithEffective(
  isoDate: string,
  effectivePeriodLabel?: string | null
): string {
  const base = formatLastReviewedLine(isoDate);
  const period = effectivePeriodLabel?.trim();
  return period ? `${base} · Effective: ${period}` : base;
}

/**
 * Parse a display or prefixed last-reviewed string into ISO YYYY-MM-DD when possible.
 * Supports: "2026-09-13", "Last reviewed: 13 September 2026", "13 September 2026 · Effective: …"
 */
export function parseLastReviewedToIso(raw: string | null | undefined): string | null {
  if (!raw?.trim()) return null;
  const text = raw.trim();

  const isoDirect = text.match(/\b(20\d{2}-\d{2}-\d{2})\b/);
  if (isoDirect) return isoDirect[1];

  const monthIndex = (name: string) =>
    MONTHS.findIndex((m) => m.toLowerCase() === name.toLowerCase());

  const display = text.match(
    /\b(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(20\d{2})\b/i
  );
  if (display) {
    const day = Number(display[1]);
    const mi = monthIndex(display[2]);
    const year = Number(display[3]);
    if (mi >= 0 && day >= 1 && day <= 31) {
      return `${year}-${String(mi + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    }
  }

  return null;
}

/** Prefer curated ISO; never invent build-day. */
export function resolveSchemaDateModified(options: {
  lastModifiedIso?: string | null;
  lastReviewedIso?: string | null;
  lastReviewedText?: string | null;
  publishDateIso?: string | null;
}): string | null {
  if (options.lastModifiedIso?.trim()) return options.lastModifiedIso.trim();
  if (options.lastReviewedIso?.trim()) return options.lastReviewedIso.trim();
  const fromText = parseLastReviewedToIso(options.lastReviewedText);
  if (fromText) return fromText;
  if (options.publishDateIso?.trim()) {
    // Reject future publish dates as dateModified (scheduled go-live ≠ review).
    const pub = options.publishDateIso.trim();
    const today = new Date().toISOString().slice(0, 10);
    if (pub <= today) return pub;
  }
  return null;
}
