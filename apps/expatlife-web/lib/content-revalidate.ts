/** Production and Preview builds: ISR interval in seconds (1 hour) — balances freshness vs static cache. */
export const CONTENT_REVALIDATE_SECONDS = 3600;

/**
 * Use for `export const revalidate = ...` on App Router pages and `sitemap.ts`.
 *
 * - **`next dev`:** `0` — no ISR staleness while editing locally.
 * - **Production / Vercel Preview:** {@link CONTENT_REVALIDATE_SECONDS}.
 */
export const CONTENT_REVALIDATE =
  process.env.NODE_ENV === "development" ? 0 : CONTENT_REVALIDATE_SECONDS;
