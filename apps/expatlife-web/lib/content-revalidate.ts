/** Production and Preview builds: ISR interval in seconds (8 hours). */
export const CONTENT_REVALIDATE_SECONDS = 8 * 60 * 60;

/**
 * Use for `export const revalidate = ...` on App Router pages and `sitemap.ts`.
 *
 * - **`next dev`:** `0` — no ISR staleness while editing locally.
 * - **Production / Vercel Preview:** {@link CONTENT_REVALIDATE_SECONDS}.
 */
export const CONTENT_REVALIDATE =
  process.env.NODE_ENV === "development" ? 0 : CONTENT_REVALIDATE_SECONDS;
