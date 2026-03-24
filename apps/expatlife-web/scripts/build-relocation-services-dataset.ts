/**
 * Builds or refreshes the relocation-services provider dataset for the top-level
 * relocation-services hub page. The hub uses a BROADER set than relocation-agencies:
 * core relocation agencies plus providers from trusted expat-centre ecosystems
 * (e.g. Packimpex, Eurohome, Royal De Gruijter, Utility Direct).
 *
 * Usage:
 *   pnpm tsx scripts/build-relocation-services-dataset.ts
 *
 * Current approach:
 * - relocation-services providers = relocation-agencies providers + additionalProviders
 *   (see src/data/companies-registry.ts)
 * - To refresh: run scripts/fetch-relocation-agencies.ts first to update
 *   relocation-agencies.ts, then this list stays in sync.
 * - To add new providers: add records to RELOCATION_SERVICES_ADDITIONAL_DATA in
 *   src/data/companies-registry.ts, with sourceEcosystems,
 *   sourcePages, and lastChecked. Optionally run this script to validate or
 *   merge from external source JSON.
 *
 * For a full ingestion pipeline (fetch + parse + dedupe + write):
 * 1. Fetch trusted source pages (see official-sources/relocation-services.ts)
 * 2. Extract provider name, URL, description, city, service tags, ecosystem
 * 3. Deduplicate by normalized slug (merge sourceEcosystems/sourcePages)
 * 4. Merge with existing relocation-agencies list; append new providers
 * 5. Write to relocation-services.ts or normalized JSON; update metadata
 */

// No-op when run: actual data lives in src/data/companies-registry.ts
// and is composed from relocation-agencies + additionalProviders there.
console.log("Relocation services dataset is maintained in src/data/companies-registry.ts");
console.log("To add providers: edit additionalProviders in that file and set lastChecked.");
