/**
 * Validates affiliate content: provider ids, categories, placements, and logo files.
 * Run from app root: npm run validate:affiliates (or npx tsx scripts/validate-affiliates.ts)
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const APP_ROOT = path.resolve(__dirname, "..");
const AFFILIATES_CONTENT = path.join(APP_ROOT, "..", "..", "packages", "content", "affiliates");

function loadJson<T>(filePath: string): T {
  const raw = readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}

type ProvidersJson = Record<string, { id: string; category: string; logo?: string }>;
type CategoriesJson = Record<string, { title?: string }>;
type PlacementsJson = Record<string, Record<string, string[]>>;

function main(): void {
  let hasError = false;

  const providersPath = path.join(AFFILIATES_CONTENT, "providers.json");
  const categoriesPath = path.join(AFFILIATES_CONTENT, "categories.json");
  const placementsPath = path.join(AFFILIATES_CONTENT, "placements.json");

  if (!existsSync(providersPath)) {
    console.error("Missing:", providersPath);
    process.exit(1);
  }
  if (!existsSync(categoriesPath)) {
    console.error("Missing:", categoriesPath);
    process.exit(1);
  }
  if (!existsSync(placementsPath)) {
    console.error("Missing:", placementsPath);
    process.exit(1);
  }

  const providers = loadJson<ProvidersJson>(providersPath);
  const categories = loadJson<CategoriesJson>(categoriesPath);
  const placements = loadJson<PlacementsJson>(placementsPath);

  const providerIds = new Set(Object.keys(providers));
  const categoryIds = new Set(Object.keys(categories));

  for (const [id, p] of Object.entries(providers)) {
    if (p.id !== id) {
      console.error(`Provider id mismatch: key "${id}" has id "${p.id}"`);
      hasError = true;
    }
    if (!categoryIds.has(p.category)) {
      console.error(`Provider "${id}" has invalid category: "${p.category}"`);
      hasError = true;
    }
  }

  for (const [page, pagePlacements] of Object.entries(placements)) {
    for (const [cat, ids] of Object.entries(pagePlacements)) {
      if (!categoryIds.has(cat)) {
        console.error(`Placement page "${page}" has invalid category: "${cat}"`);
        hasError = true;
      }
      for (const id of ids) {
        if (!providerIds.has(id)) {
          console.error(`Placement page "${page}" category "${cat}" references unknown provider: "${id}"`);
          hasError = true;
        }
      }
    }
  }

  for (const [id, p] of Object.entries(providers)) {
    const logo = (p as { logo?: string }).logo;
    if (logo?.startsWith("/")) {
      const logoPath = path.join(APP_ROOT, "public", logo.slice(1));
      if (!existsSync(logoPath)) {
        console.error(`Logo missing for provider "${id}": ${logo}`);
        hasError = true;
      }
    }
  }

  if (hasError) {
    console.error("Validation failed.");
    process.exit(1);
  }

  console.log("Affiliate validation passed: providers, categories, placements, and logos OK.");
}

main();
