/**
 * Load NL Moving guide content from Git-based JSON. Server-only (uses fs).
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import type { GuideData, GuideRegistry } from "./types";

const GUIDES_ROOT = path.join(process.cwd(), "src", "content", "guides", "netherlands", "moving");
const REGISTRY_PATH = path.join(GUIDES_ROOT, "registry.json");

function loadJson<T>(filePath: string): T {
  const raw = readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}

export function loadGuideRegistry(): GuideRegistry | null {
  if (!existsSync(REGISTRY_PATH)) return null;
  return loadJson<GuideRegistry>(REGISTRY_PATH);
}

export function getGuideSlugs(): string[] {
  const registry = loadGuideRegistry();
  if (!registry) return [];
  return registry.guides.map((g) => g.slug);
}

export function isGuideSlug(slug: string): boolean {
  const registry = loadGuideRegistry();
  if (!registry) return false;
  return registry.guides.some((g) => g.slug === slug);
}

export function loadGuideBySlug(slug: string): GuideData | null {
  const filePath = path.join(GUIDES_ROOT, `${slug}.json`);
  if (!existsSync(filePath)) return null;
  return loadJson<GuideData>(filePath);
}
