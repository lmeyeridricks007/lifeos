/**
 * Resolve paths to files under `public/` without reading the filesystem at runtime.
 *
 * `existsSync` / `readdirSync` on `public/**` makes Next.js output file tracing attach
 * entire image trees (~350MB+) to serverless functions (Vercel 250MB unzipped limit).
 * Static assets are served from CDN; server code only needs URL strings.
 *
 * When adding a new origin-country hero, add its slug to `ORIGIN_COUNTRY_HERO_SLUGS`.
 */

/** Slugs with `/images/countries/{slug}-to-netherlands-hero.webp` (and usually .png). */
const ORIGIN_COUNTRY_HERO_SLUGS = new Set([
  "argentina",
  "australia",
  "brazil",
  "canada",
  "chile",
  "denmark",
  "france",
  "germany",
  "india",
  "indonesia",
  "ireland",
  "italy",
  "japan",
  "kenya",
  "mexico",
  "new-zealand",
  "nigeria",
  "norway",
  "pakistan",
  "philippines",
  "singapore",
  "south-africa",
  "south-korea",
  "spain",
  "sweden",
  "switzerland",
  "turkey",
  "uae",
  "united-kingdom",
  "united-states",
]);

const INFOGRAPHIC_FILENAME = /^[a-zA-Z0-9._-]+$/;

/** Hero for origin-country moving guides: per-slug asset or global relocation hero. */
export function resolveOriginCountryHeroSrc(slug: string): string {
  const exclusive = resolveOriginCountryHeroSrcExclusive(slug);
  if (exclusive) return exclusive;
  return "/images/relocation-planning-netherlands-hero.png";
}

/** Only `/images/countries/*` heroes — no global fallback (for templates that supply their own placeholder). */
export function resolveOriginCountryHeroSrcExclusive(slug: string): string | undefined {
  if (!ORIGIN_COUNTRY_HERO_SLUGS.has(slug)) return undefined;
  return `/images/countries/${slug}-to-netherlands-hero.webp`;
}

/** Optional infographic under `/images/infographics/` when the filename is a safe basename. */
export function resolveInfographicSrc(filename: string): string | undefined {
  if (!INFOGRAPHIC_FILENAME.test(filename)) return undefined;
  return `/images/infographics/${filename}`;
}
