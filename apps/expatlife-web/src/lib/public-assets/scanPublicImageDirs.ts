import { readdirSync } from "node:fs";
import path from "node:path";

/**
 * Resolve paths to files under `public/` **without** `existsSync(join(cwd, "public", <dynamic>))`,
 * which makes Next.js output file tracing attach the entire `public` tree (~200MB+) to serverless
 * functions (Vercel 250MB unzipped limit).
 *
 * Only `readdirSync` on fixed subdirectories is used so traces stay scoped to those folders.
 */

const cwd = process.cwd();
const COUNTRIES_DIR = path.join(cwd, "public", "images", "countries");
const INFOGRAPHICS_DIR = path.join(cwd, "public", "images", "infographics");

function readNames(dir: string): Set<string> {
  try {
    return new Set(readdirSync(dir));
  } catch {
    return new Set();
  }
}

let countryFiles: Set<string> | null = null;
let infographicFiles: Set<string> | null = null;

function countryFilenameSet(): Set<string> {
  if (!countryFiles) countryFiles = readNames(COUNTRIES_DIR);
  return countryFiles;
}

function infographicFilenameSet(): Set<string> {
  if (!infographicFiles) infographicFiles = readNames(INFOGRAPHICS_DIR);
  return infographicFiles;
}

/** Hero for origin-country moving guides: per-slug asset or global relocation hero. */
export function resolveOriginCountryHeroSrc(slug: string): string {
  const exclusive = resolveOriginCountryHeroSrcExclusive(slug);
  if (exclusive) return exclusive;
  return "/images/relocation-planning-netherlands-hero.png";
}

/** Only `/images/countries/*` heroes — no global fallback (for templates that supply their own placeholder). */
export function resolveOriginCountryHeroSrcExclusive(slug: string): string | undefined {
  const files = countryFilenameSet();
  const webp = `${slug}-to-netherlands-hero.webp`;
  const png = `${slug}-to-netherlands-hero.png`;
  if (files.has(webp)) return `/images/countries/${webp}`;
  if (files.has(png)) return `/images/countries/${png}`;
  return undefined;
}

/** Optional infographic under `/images/infographics/` when the file is present on disk. */
export function resolveInfographicSrc(filename: string): string | undefined {
  if (!infographicFilenameSet().has(filename)) return undefined;
  return `/images/infographics/${filename}`;
}
