import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "tools", "first-90-days");

function loadJson<T>(filename: string): T | null {
  const filePath = path.join(CONTENT_DIR, filename);
  if (!existsSync(filePath)) return null;
  try {
    return JSON.parse(readFileSync(filePath, "utf8")) as T;
  } catch {
    return null;
  }
}

export type First90DaysInput = {
  arrivalStage: "arriving-soon" | "already-arrived" | "arrived-a-while-ago";
  household: "solo" | "partner" | "kids";
  startingJobSoon: "yes" | "no";
  needsIntegrationAwareness: "yes" | "no";
  from: string;
  arrivalDate?: string;
  needsDrivingSoon?: boolean;
  housingSituation?: "temporary" | "stable-rental" | "still-looking" | "with-family-or-friends";
  hasBankAccountAlready?: boolean;
  hasBSNAlready?: boolean;
  wantsLanguageSupport?: boolean;
  hasKidsAdminNeeds?: boolean;
  needsUtilitiesSetup?: boolean;
};

type Conditions = {
  arrivalStage?: First90DaysInput["arrivalStage"][];
  household?: First90DaysInput["household"][];
  startingJobSoon?: First90DaysInput["startingJobSoon"][];
  needsIntegrationAwareness?: First90DaysInput["needsIntegrationAwareness"][];
};

export type TimelineGroup = "week1to2" | "week3to4" | "month2" | "month3";

export type First90DaysMilestone = {
  id: string;
  label: string;
  group: TimelineGroup;
  priority: number;
  conditions: Conditions;
  description: string;
  relatedGuideHref?: string;
};

export type UnknownItem = {
  id: string;
  label: string;
  conditions: Conditions;
  whyItMatters: string;
};

export type ReadinessRuleSet = {
  weights: Record<keyof First90DaysInput, number>;
  bands: Array<{ min: number; max: number; label: string }>;
};

export type First90DaysDatasets = {
  milestones: Record<TimelineGroup, First90DaysMilestone[]>;
  unknowns: UnknownItem[];
  readinessRules: ReadinessRuleSet;
};

export type ToolExplanatorySection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
};

export type First90DaysMeta = {
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

export type First90DaysExample = {
  id: string;
  title: string;
  inputs: Partial<First90DaysInput>;
  summary: string;
  topWeek1to2Priorities: string[];
  topMonth2Priorities: string[];
};

export type First90DaysFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export function loadFirst90DaysMeta(): First90DaysMeta | null {
  return loadJson<First90DaysMeta>("meta.json");
}

export function loadFirst90DaysDatasets(): First90DaysDatasets | null {
  const milestones = loadJson<Record<TimelineGroup, First90DaysMilestone[]>>("milestones.json");
  const unknowns = loadJson<UnknownItem[]>("unknowns.json");
  const readinessRules = loadJson<ReadinessRuleSet>("readinessRules.json");
  if (!milestones || !unknowns || !readinessRules) return null;
  return { milestones, unknowns, readinessRules };
}

/** V2 dataset for refactored 90-day planner (generic tasks, overlays, unknowns, affiliates). */
export type First90DaysDatasetsV2 = {
  genericTasks: Array<Record<string, unknown>>;
  countryTasks: Array<Record<string, unknown>>;
  countryOverlays: Record<string, string[]> | null;
  conditionOverlays: Record<string, string[]> | null;
  unknowns: Array<Record<string, unknown>>;
  affiliateMapping: Record<string, unknown> | null;
  taskContacts: Record<string, { name: string; website: string; contactSummary: string }> | null;
};

export function loadFirst90DaysDatasetsV2(): First90DaysDatasetsV2 {
  const genericTasks = loadJson<Array<Record<string, unknown>>>("generic-tasks.json") ?? [];
  const countryTasks = loadJson<Array<Record<string, unknown>>>("country-tasks.json") ?? [];
  const countryOverlays = loadJson<Record<string, string[]>>("country-overlays.json") ?? null;
  const conditionOverlays = loadJson<Record<string, string[]>>("condition-overlays.json") ?? null;
  const unknowns = loadJson<Array<Record<string, unknown>>>("unknowns.json") ?? [];
  const affiliateMapping = loadJson<Record<string, unknown>>("affiliate-mapping.json") ?? null;
  const taskContacts =
    loadJson<Record<string, { name: string; website: string; contactSummary: string }>>(
      "task-contacts.json"
    ) ?? null;
  return {
    genericTasks,
    countryTasks,
    countryOverlays,
    conditionOverlays,
    unknowns,
    affiliateMapping,
    taskContacts,
  };
}

export function loadFirst90DaysExamples(): First90DaysExample[] {
  const scenarios = loadJson<First90DaysExample[]>("scenarios.json");
  if (Array.isArray(scenarios)) return scenarios;
  const examples = loadJson<First90DaysExample[]>("examples.json");
  return Array.isArray(examples) ? examples : [];
}

export function loadFirst90DaysFaq(): First90DaysFaqItem[] {
  const faq = loadJson<First90DaysFaqItem[]>("faq.json");
  return Array.isArray(faq) ? faq : [];
}
