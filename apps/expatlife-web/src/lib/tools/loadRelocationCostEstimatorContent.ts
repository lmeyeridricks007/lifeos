import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "tools", "relocation-cost-estimator");

function loadJson<T>(filename: string): T | null {
  const filePath = path.join(CONTENT_DIR, filename);
  if (!existsSync(filePath)) return null;
  try {
    return JSON.parse(readFileSync(filePath, "utf8")) as T;
  } catch {
    return null;
  }
}

export type RelocationCostEstimatorMeta = {
  hero: {
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel?: string | null;
    secondaryCtaHref?: string | null;
    introBullets?: string[];
    image?: { src: string; alt: string };
    imageFallback?: { src: string; alt: string };
    badges?: string[];
    supportingLinks?: Array<{ label: string; href: string }>;
  };
  seo: { introParagraphs: string[] };
  toolPanel: {
    whatYouGetTitle: string;
    whatYouGetItems: string[];
  };
  disclosure: string;
  ctaBlock: {
    title: string;
    text: string;
    checklistHref: string;
    checklistLabel: string;
    first90Href: string;
    first90Label: string;
  };
  pdfButtonLabel: string;
  recommendationsIntro?: string;
  explanatorySections?: Array<{
    id: string;
    title: string;
    body: string[];
  }>;
};

export type RelocationCostEstimatorFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export function loadRelocationCostEstimatorMeta(): RelocationCostEstimatorMeta | null {
  return loadJson<RelocationCostEstimatorMeta>("meta.json");
}

export function loadRelocationCostEstimatorFaq(): RelocationCostEstimatorFaqItem[] {
  const faq = loadJson<RelocationCostEstimatorFaqItem[]>("faq.json");
  return Array.isArray(faq) ? faq : [];
}
