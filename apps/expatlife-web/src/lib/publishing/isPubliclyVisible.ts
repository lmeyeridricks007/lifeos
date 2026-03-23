/**
 * Scheduled publishing: registry-driven `publish` + `publishDate`.
 * Date-only strings use start of day UTC (content is public once that calendar day begins in UTC).
 *
 * `publishDate` is bypassed (but never `publish: false`) when: preview env vars, Vercel Preview,
 * or **`next dev`** (`NODE_ENV === "development"`) so local work matches production routes without
 * editing dates. Use `CONTENT_PREVIEW=true` for `next start` / production builds before a date.
 */

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function shouldBypassPublishDateForPreview(): boolean {
  if (process.env.NODE_ENV === "development") return true;
  if (process.env.CONTENT_PREVIEW === "true") return true;
  if (process.env.VERCEL_ENV === "preview") return true;
  if (process.env.NEXT_PUBLIC_CONTENT_PREVIEW === "true") return true;
  return false;
}

/** Start of UTC calendar day for YYYY-MM-DD. */
export function startOfUtcDayFromDateOnly(dateStr: string): number | null {
  if (!ISO_DATE.test(dateStr.trim())) return null;
  const [y, m, d] = dateStr.split("-").map(Number);
  if (!y || m < 1 || m > 12 || d < 1 || d > 31) return null;
  return Date.UTC(y, m - 1, d, 0, 0, 0, 0);
}

/**
 * Effective instant when the item becomes visible (UTC ms), or null if no date gate.
 * `publishDate` empty/undefined → no date gate (still subject to `publish === false`).
 */
export function parsePublishInstant(publishDate: string | undefined): number | null {
  if (publishDate == null || String(publishDate).trim() === "") return null;
  const s = String(publishDate).trim();
  if (ISO_DATE.test(s)) {
    return startOfUtcDayFromDateOnly(s);
  }
  const t = Date.parse(s);
  if (Number.isNaN(t)) return null;
  return t;
}

/**
 * @param publish — explicit `false` hides; missing/`true` allows (subject to date).
 * @param publishDate — optional; YYYY-MM-DD (UTC start) or full ISO datetime.
 */
export function isPubliclyVisible(
  publish: boolean | undefined,
  publishDate: string | undefined,
  now: Date
): boolean {
  if (publish === false) return false;
  if (shouldBypassPublishDateForPreview()) return true;

  const instant = parsePublishInstant(publishDate);
  if (instant == null) return true;
  return now.getTime() >= instant;
}
