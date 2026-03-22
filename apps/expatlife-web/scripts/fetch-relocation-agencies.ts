/**
 * Fetches and normalizes relocation provider data from trusted expat-centre and
 * public-support ecosystem pages (IN Amsterdam, The Hague International Centre,
 * Rotterdam Expat Centre). Writes normalized provider records for the
 * relocation-agencies category page.
 *
 * Usage:
 *   pnpm tsx scripts/fetch-relocation-agencies.ts
 *
 * Output: Updates or generates normalized data in src/data/services/providers/relocation-agencies.ts
 * For a full pipeline, extend this script to:
 * 1. Fetch each trusted source URL
 * 2. Parse partner/directory listings (HTML structure varies by site)
 * 3. Extract provider name, URL, description, city, service tags
 * 4. Deduplicate by normalized provider name/slug
 * 5. Merge sourceEcosystems and sourcePages for providers appearing in multiple sources
 * 6. Write normalized JSON or TS output and update metadata (totalRecords, lastChecked)
 *
 * Trusted source URLs (see data/services/official-sources/relocation-agencies.ts):
 * - I amsterdam partner list
 * - The Hague International Centre service providers & relocation partners
 * - Rotterdam Expat Centre location/partner pages
 */

import * as fs from "fs";
import * as path from "path";

const TRUSTED_SOURCES = [
  "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/expat2holland",
  "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/partner-list/all/partners/jimble",
  "https://www.thehagueinternationalcentre.nl/service-providers",
  "https://www.thehagueinternationalcentre.nl/partners/relocation-services/rsh-relocation-and-immigration-services",
  "https://www.thehagueinternationalcentre.nl/partners/relocation-services/relocaid",
  "https://www.thehagueinternationalcentre.nl/partners/relocation-services/access",
  "https://www.thehagueinternationalcentre.nl/partners/relocation-services/altair-global",
  "https://rotterdamexpatcentre.nl/location/pasbms-immigration-and-relocation-services/",
  "https://rotterdamexpatcentre.nl/location/hr-expat-services/",
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type RawProvider = {
  name: string;
  url?: string;
  description?: string;
  ecosystem: string;
  sourcePage: string;
  cityRelevance: string[];
  serviceTags: string[];
};

function inferEcosystem(sourcePage: string): string {
  if (sourcePage.includes("iamsterdam.com")) return "IN Amsterdam";
  if (sourcePage.includes("thehagueinternationalcentre")) return "The Hague International Centre";
  if (sourcePage.includes("rotterdamexpatcentre")) return "Rotterdam Expat Centre";
  return "Other";
}

async function fetchPage(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { "User-Agent": "ExpatLife/1.0 (relocation provider ingestion)" },
  });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${url}`);
  return res.text();
}

/**
 * Placeholder parser: in production, implement site-specific HTML parsing
 * to extract provider name, URL, description from each trusted page.
 * Structure differs per site (I amsterdam partner pages vs The Hague partner pages vs Rotterdam location pages).
 */
async function extractProvidersFromPage(url: string, html: string): Promise<RawProvider[]> {
  const ecosystem = inferEcosystem(url);
  // TODO: Parse HTML - e.g. cheerio or regex for partner name, link, description.
  // For now return empty; the hand-curated list in relocation-agencies.ts is the source of truth.
  return [];
}

async function main() {
  const lastChecked = new Date().toISOString().slice(0, 10);
  const allRaw: RawProvider[] = [];

  for (const url of TRUSTED_SOURCES) {
    try {
      console.log("Fetching", url);
      const html = await fetchPage(url);
      const providers = await extractProvidersFromPage(url, html);
      allRaw.push(...providers);
    } catch (err) {
      console.warn("Failed to fetch or parse", url, err);
    }
  }

  // Deduplicate by normalized name (slug)
  const bySlug = new Map<string, { raw: RawProvider; sources: string[]; pages: string[] }>();
  for (const raw of allRaw) {
    const slug = slugify(raw.name) || "unknown";
    const existing = bySlug.get(slug);
    if (existing) {
      if (!existing.pages.includes(raw.sourcePage)) existing.pages.push(raw.sourcePage);
      if (!existing.sources.includes(raw.ecosystem)) existing.sources.push(raw.ecosystem);
    } else {
      bySlug.set(slug, {
        raw,
        sources: [raw.ecosystem],
        pages: [raw.sourcePage],
      });
    }
  }

  // Build normalized records (when extraction is implemented)
  const normalized = Array.from(bySlug.entries()).map(([slug, { raw, sources, pages }]) => ({
    slug,
    name: raw.name,
    providerUrl: raw.url,
    sourceEcosystems: sources,
    cityRelevance: raw.cityRelevance?.length ? raw.cityRelevance : [],
    shortDescription: raw.description || "",
    serviceTags: raw.serviceTags?.length ? raw.serviceTags : ["relocation"],
    isOfficial: false,
    sourcePages: pages,
    lastChecked,
  }));

  console.log("Extracted", normalized.length, "providers (script scaffold; implement HTML parsing to populate from live pages).");
  console.log("Current provider list is maintained in src/data/services/providers/relocation-agencies.ts");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
