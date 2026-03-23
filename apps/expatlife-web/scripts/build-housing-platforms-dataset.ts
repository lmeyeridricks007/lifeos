/**
 * Build script for housing platforms dataset.
 * Assembles a curated list of validated providers, enriches with category type,
 * best-for tags, and trusted source references, then outputs normalized data.
 *
 * Because this category is not sourced from a single official registry, the
 * initial dataset is curated. Every provider must have:
 * - A real provider URL
 * - At least one trusted source reference
 * - Clear category type and best-for tags
 *
 * Usage:
 *   pnpm tsx scripts/build-housing-platforms-dataset.ts
 *
 * Output: Updates src/data/companies-registry.ts housingPlatforms (or a JSON
 * file that the app imports). For a full pipeline, extend to:
 * 1. Read curated provider list (e.g. from a config or JSON)
 * 2. Optionally fetch provider pages to validate URLs and extract descriptions
 * 3. Enrich with categoryType, bestFor, sourceReferences
 * 4. Write normalized records and update metadata (totalRecords, lastChecked)
 *
 * Trusted source URLs (see data/services/official-sources/housing-platforms.ts):
 * - Government.nl rented housing, Huurcommissie
 * - I amsterdam student accommodation, temporary accommodation
 * - HousingAnywhere, Funda, Pararius, etc.
 */

const LAST_CHECKED = new Date().toISOString().slice(0, 10);

function main() {
  console.log("Housing platforms dataset build.");
  console.log("Last checked date:", LAST_CHECKED);
  console.log("");
  console.log("The canonical provider list is maintained in:");
  console.log("  src/data/companies-registry.ts");
  console.log("");
  console.log("To refresh the dataset:");
  console.log("  1. Update the housingPlatforms array with new or changed providers.");
  console.log("  2. Ensure each record has: slug, name, providerUrl, categoryType,");
  console.log("     shortDescription, bestFor[], sourceReferences[], lastChecked.");
  console.log("  3. Update housingPlatformsMetadata.totalRecords and lastChecked.");
  console.log("");
  console.log("Optional: extend this script to fetch provider pages, validate URLs,");
  console.log("and merge in descriptions or fee notes from trusted sources.");
}

main();
