/**
 * Content loader abstraction for affiliate data.
 * All affiliate content is loaded from Git JSON; replace with CMS client when ready.
 */

import path from "node:path";
import { readFile } from "node:fs/promises";
import type {
  AffiliateProvidersRegistry,
  AffiliateCategoriesRegistry,
  PlacementsRegistry,
} from "./types";

/** Resolve path to packages/content/affiliates. Uses process.cwd() (app root) in monorepo. */
function getAffiliatesContentPath(): string {
  return path.join(process.cwd(), "..", "..", "packages", "content", "affiliates");
}

const contentRoot = getAffiliatesContentPath();

async function loadJson<T>(filename: string): Promise<T> {
  const filePath = path.join(contentRoot, filename);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

/** Load all providers from content registry */
export async function loadProviders(): Promise<AffiliateProvidersRegistry> {
  return loadJson<AffiliateProvidersRegistry>("providers.json");
}

/** Load all categories from content registry */
export async function loadCategories(): Promise<AffiliateCategoriesRegistry> {
  return loadJson<AffiliateCategoriesRegistry>("categories.json");
}

/** Load placements (page -> category -> provider ids) from content registry */
export async function loadPlacements(): Promise<PlacementsRegistry> {
  return loadJson<PlacementsRegistry>("placements.json");
}

/** Load full affiliate registry (providers + categories + placements) */
export async function loadAffiliates(): Promise<{
  providers: AffiliateProvidersRegistry;
  categories: AffiliateCategoriesRegistry;
  placements: PlacementsRegistry;
}> {
  const [providers, categories, placements] = await Promise.all([
    loadProviders(),
    loadCategories(),
    loadPlacements(),
  ]);
  return { providers, categories, placements };
}
