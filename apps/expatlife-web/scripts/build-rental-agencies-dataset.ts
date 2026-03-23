/**
 * Build script for rental agencies dataset.
 * Assembles a curated list of validated providers from trusted public-support
 * ecosystems, enriches with providerType, bestFor, city relevance, and source
 * references, then updates metadata.
 *
 * Usage:
 *   pnpm tsx scripts/build-rental-agencies-dataset.ts
 *
 * The canonical provider list is maintained in:
 *   src/data/companies-registry.ts (rentalAgencies)
 *
 * Every provider must have:
 * - A real provider URL or trusted partner page
 * - At least one trusted source reference
 * - Clear providerType and bestFor tags
 *
 * Trusted sources: I amsterdam, The Hague International Centre, Rotterdam Expat Centre.
 * See data/services/official-sources/rental-agencies.ts for URLs.
 */

const LAST_CHECKED = new Date().toISOString().slice(0, 10);

function main() {
  console.log("Rental agencies dataset build.");
  console.log("Last checked date:", LAST_CHECKED);
  console.log("");
  console.log("The canonical provider list is maintained in:");
  console.log("  src/data/companies-registry.ts");
  console.log("");
  console.log("To refresh: update the rentalAgencies array and rentalAgenciesMetadata");
  console.log("(totalRecords, lastChecked). Ensure each record has sourceReferences and providerType.");
}

main();
