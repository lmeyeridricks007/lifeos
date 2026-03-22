import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { DocumentEntry } from "@/src/lib/tools/document-readiness/types";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "tools", "document-readiness");

function loadJson<T>(filename: string): T | null {
  const filePath = path.join(CONTENT_DIR, filename);
  if (!existsSync(filePath)) return null;
  try {
    return JSON.parse(readFileSync(filePath, "utf8")) as T;
  } catch {
    return null;
  }
}

export type DocumentReadinessInput = {
  scenario: "work" | "partner" | "family" | "unsure";
  hasPassport: "yes" | "no";
  hasCivilCertificates: "yes" | "no" | "na";
  hasProofOfAddress: "yes" | "no" | "soon";
  hasEmploymentDocs: "yes" | "no" | "na";
  from: string;
  notes?: string;
};

/** @deprecated Use DocumentEntry from document-readiness/types. Kept for transition. */
export type DocumentCatalogItem = {
  id: string;
  label: string;
  category: "identity" | "employment" | "housing" | "family" | "education" | "travel";
  core: boolean;
  conditions: { scenario?: DocumentReadinessInput["scenario"][] };
  whyItMatters: string;
  commonUses: string[];
  whereToGetIt: string;
  whoToContact: string;
  costNote: string;
  relatedGuideHref?: string;
};

export type { DocumentEntry };

export type DocumentReadinessRules = {
  scenarioPriority: Record<
    DocumentReadinessInput["scenario"],
    { high: string[]; medium: string[]; optional: string[] }
  >;
  inputInterpretation: Record<string, Record<string, string>>;
  priorityOrder: Array<"high" | "medium" | "optional">;
  statusPriority: Record<"ready" | "missing" | "pending" | "not_applicable", number>;
};

export type ScoringConfig = {
  weights: {
    passport: number;
    civilDocs: number;
    proofOfAddress: number;
    employmentDocs: number;
    scenarioCoverage: number;
  };
  bands: Array<{ min: number; max: number; label: string }>;
};

export type PackOutlineItem = {
  id: "identity" | "employment" | "housing" | "family" | "education" | "travel";
  label: string;
  intro: string;
};

export type DocumentReadinessDatasets = {
  documents: DocumentEntry[];
  rules: DocumentReadinessRules;
  scoring: ScoringConfig;
  packOutline: PackOutlineItem[];
};

export type ToolExplanatorySection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
};

export type DocumentReadinessMeta = {
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
  results: { title: string };
  disclosure: string;
  originCountries?: Array<{ value: string; label: string }>;
  relatedLinks: Record<string, { label: string; href: string }>;
  explanatorySections?: ToolExplanatorySection[];
  infographic?: { src: string; alt: string };
};

export type DocumentReadinessExample = {
  id: string;
  title: string;
  inputs: Partial<DocumentReadinessInput>;
  summary: string;
  topMissingDocuments: string[];
};

export type DocumentReadinessFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export function loadDocumentReadinessMeta(): DocumentReadinessMeta | null {
  return loadJson<DocumentReadinessMeta>("meta.json");
}

export function loadDocumentReadinessDatasets(): DocumentReadinessDatasets | null {
  const documents = loadJson<DocumentEntry[]>("documents.json");
  const rules = loadJson<DocumentReadinessRules>("rules.json");
  const scoring = loadJson<ScoringConfig>("scoring.json");
  const packOutline = loadJson<PackOutlineItem[]>("packOutline.json");
  if (!documents || !Array.isArray(documents) || !rules || !scoring || !packOutline) return null;
  return { documents, rules, scoring, packOutline };
}

export function loadDocumentReadinessExamples(): DocumentReadinessExample[] {
  const data = loadJson<DocumentReadinessExample[]>("examples.json");
  return Array.isArray(data) ? data : [];
}

export function loadDocumentReadinessFaq(): DocumentReadinessFaqItem[] {
  const data = loadJson<DocumentReadinessFaqItem[]>("faq.json");
  return Array.isArray(data) ? data : [];
}
