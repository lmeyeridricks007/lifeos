/**
 * Client-safe URL segments for origin-country guides (no Node/fs).
 * Hub: app/netherlands/moving-to-netherlands-from/page.tsx
 * Country pages: app/netherlands/moving/moving-to-netherlands-from/[country]/page.tsx
 */

/** Browse hub — lists all published “moving from [country]” guides. */
export const ORIGIN_COUNTRY_INDEX_PATH = "/netherlands/moving-to-netherlands-from";

/** Individual guide URLs: `${ORIGIN_COUNTRY_GUIDE_BASE_PATH}/${slug}/` */
export const ORIGIN_COUNTRY_GUIDE_BASE_PATH = "/netherlands/moving/moving-to-netherlands-from";
