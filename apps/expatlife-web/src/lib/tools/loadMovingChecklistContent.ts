/**
 * Load moving checklist content from Git (JSON). Replace with CMS client when ready.
 * Server-only: uses fs.
 */

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import type { MovingChecklistTaskRaw } from "./moving-checklist/types";
import type { CountryOverlaysMap } from "./moving-checklist/applyCountryOverlays";
import type { ConditionOverlaysMap } from "./moving-checklist/applyConditionOverlays";
import type { AffiliateMappingConfig } from "./moving-checklist/resolveMovingChecklistAffiliates";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "tools", "moving-checklist");

function loadJson<T>(filename: string): T | null {
  const filePath = path.join(CONTENT_DIR, filename);
  if (!existsSync(filePath)) return null;
  try {
    const raw = readFileSync(filePath, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export type ToolExplanatorySection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
};

export type MovingChecklistMeta = {
  hero: {
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    introBullets: string[];
    image?: { src: string; alt: string };
    imageFallback?: { src: string; alt: string };
  };
  seo: { introParagraphs: string[] };
  toolPanel: { whatYouGetTitle: string; whatYouGetItems: string[] };
  results: { title: string; summaryPrefix?: string };
  disclosure: string;
  originCountries?: Array<{ value: string; label: string }>;
  relatedLinks: Record<string, { label: string; href: string }>;
  explanatorySections?: ToolExplanatorySection[];
  infographic?: { src: string; alt: string };
};

export type MovingChecklistExample = {
  id: string;
  title: string;
  summary: string;
  inputs: Record<string, string>;
  topTasks: string[];
  links?: Array<{ label: string; href: string }>;
};

export type MovingChecklistFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type MovingChecklistTaskData = {
  genericTasks: MovingChecklistTaskRaw[];
  overlayTasks: MovingChecklistTaskRaw[];
  countryOverlays: CountryOverlaysMap;
  conditionOverlays: ConditionOverlaysMap;
};

export type MovingChecklistDocumentsData = {
  categories: string[];
  items: Array<{
    id: string;
    label: string;
    category: string;
    conditions: Record<string, string[] | undefined>;
    whyItMatters: string;
  }>;
};

export function loadMovingChecklistMeta(): MovingChecklistMeta | null {
  return loadJson<MovingChecklistMeta>("meta.json");
}

export function loadMovingChecklistExamples(): MovingChecklistExample[] {
  const data = loadJson<MovingChecklistExample[]>("examples.json");
  return Array.isArray(data) ? data : [];
}

export function loadMovingChecklistFaq(): MovingChecklistFaqItem[] {
  const data = loadJson<MovingChecklistFaqItem[]>("faq.json");
  return Array.isArray(data) ? data : [];
}

export function loadMovingChecklistTaskData(): MovingChecklistTaskData | null {
  const genericTasks = loadJson<MovingChecklistTaskRaw[]>("generic-tasks.json");
  const overlayTasks = loadJson<MovingChecklistTaskRaw[]>("overlay-tasks.json");
  const countryOverlays = loadJson<CountryOverlaysMap>("country-overlays.json");
  const conditionOverlays = loadJson<ConditionOverlaysMap>("condition-overlays.json");
  if (!genericTasks || !Array.isArray(genericTasks)) return null;
  return {
    genericTasks,
    overlayTasks: Array.isArray(overlayTasks) ? overlayTasks : [],
    countryOverlays: countryOverlays ?? {},
    conditionOverlays: conditionOverlays ?? {},
  };
}

export function loadMovingChecklistDocuments(): MovingChecklistDocumentsData | null {
  return loadJson<MovingChecklistDocumentsData>("documents.json");
}

export function loadMovingChecklistAffiliateMapping(): AffiliateMappingConfig | null {
  return loadJson<AffiliateMappingConfig>("affiliate-mapping.json");
}

/** Documents dataset for buildDocumentsList (same shape as before). */
export function loadMovingChecklistDatasets(): { documents: MovingChecklistDocumentsData } | null {
  const documents = loadMovingChecklistDocuments();
  if (!documents) return null;
  return { documents };
}
