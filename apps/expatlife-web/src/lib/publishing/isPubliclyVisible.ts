/**
 * Scheduled publishing: registry-driven `publish` + `publishDate`.
 * Date-only strings use start of day UTC (content is public once that calendar day begins in UTC).
 *
 * `publishDate` is bypassed (but never `publish: false`) when: preview env vars, Vercel Preview,
 * or **`next dev`** (`NODE_ENV === "development"`) so local work matches production routes without
 * editing dates. Use `CONTENT_PREVIEW=true` for `next start` / production builds before a date.
 *
 * **Local “what production will show”:** append `?preview=true` to any URL in `next dev`. Middleware
 * sets a short-lived cookie + request header so server and client visibility match live (dates enforced).
 * Use `?preview=false` to clear the cookie and return to default dev bypass.
 */

import { DEV_SIMULATE_LIVE_COOKIE, DEV_SIMULATE_LIVE_HEADER } from "@/src/lib/publishing/devSimulateLive";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function isDevSimulateLiveFromBrowserCookie(): boolean {
  if (typeof window === "undefined") return false;
  return window.document.cookie
    .split(";")
    .some((c) => c.trim().startsWith(`${DEV_SIMULATE_LIVE_COOKIE}=1`));
}

/**
 * Server / SSR (no `window`): read middleware-forwarded header or cookie. Not used in Edge middleware
 * (use `isPubliclyVisible`’s `enforcePublishDates` there instead).
 */
function isDevSimulateLiveFromNodeRequest(): boolean {
  try {
    const { headers, cookies } = require("next/headers") as typeof import("next/headers");
    if (headers().get(DEV_SIMULATE_LIVE_HEADER) === "1") return true;
    if (cookies().get(DEV_SIMULATE_LIVE_COOKIE)?.value === "1") return true;
  } catch {
    /* not in Next request context (e.g. scripts) */
  }
  return false;
}

export function shouldBypassPublishDateForPreview(): boolean {
  if (process.env.NODE_ENV === "development") {
    if (isDevSimulateLiveFromBrowserCookie()) return false;
    if (isDevSimulateLiveFromNodeRequest()) return false;
    return true;
  }
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
  now: Date,
  options?: { enforcePublishDates?: boolean }
): boolean {
  if (publish === false) return false;
  if (!options?.enforcePublishDates && shouldBypassPublishDateForPreview()) return true;

  const instant = parsePublishInstant(publishDate);
  if (instant == null) return true;
  return now.getTime() >= instant;
}
