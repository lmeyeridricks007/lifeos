import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "tools", "arrival-planner");

function loadJson<T>(filename: string): T | null {
  const filePath = path.join(CONTENT_DIR, filename);
  if (!existsSync(filePath)) return null;
  try {
    return JSON.parse(readFileSync(filePath, "utf8")) as T;
  } catch {
    return null;
  }
}

export type ArrivalPlannerInput = {
  from: string;
  arrivalDate?: string;
  addressStatus: "yes" | "soon" | "no";
  household: "solo" | "partner" | "kids";
  needBankingSoon: "yes" | "no";
};

/** Extended input for task resolution (origin + conditions) */
export type ArrivalPlannerInputExtended = {
  originCountry: string;
  arrivalDate?: string;
  addressStatus: "yes" | "soon" | "no";
  household: "solo" | "partner" | "kids";
  needBankingSoon: "yes" | "no";
  startingJobSoon?: boolean;
  thirtyRulingRelevant?: "unknown" | "likely" | "no";
  planningToDrive?: boolean;
  shippingHouseholdGoods?: boolean;
  documentPrepStatus?: "unknown" | "mostly-ready" | "missing-some-documents";
  familyAdminNeeded?: boolean;
};

type ArrivalCondition = {
  addressStatus?: Array<ArrivalPlannerInput["addressStatus"]>;
  household?: Array<ArrivalPlannerInput["household"]>;
  needBankingSoon?: Array<ArrivalPlannerInput["needBankingSoon"]>;
};

export type ArrivalMilestone = {
  id: string;
  label: string;
  group: "firstWeek" | "firstMonth";
  priority: number;
  conditions: ArrivalCondition;
  description: string;
  relatedGuideHref?: string;
};

export type ArrivalAppointment = {
  id: string;
  label: string;
  conditions: ArrivalCondition;
  whyItMatters: string;
  note?: string;
};

export type ArrivalReminder = {
  id: string;
  label: string;
  conditions: ArrivalCondition;
};

export type ArrivalRules = {
  weights: {
    addressStatus: Record<ArrivalPlannerInput["addressStatus"], Record<string, number>>;
    needBankingSoon: Record<ArrivalPlannerInput["needBankingSoon"], number>;
    household: Record<ArrivalPlannerInput["household"], { familyBoost: number }>;
  };
  highPriorityByStatus: Record<ArrivalPlannerInput["addressStatus"], string[]>;
  bankingPriorityIds: string[];
  householdPriorityIds: Record<ArrivalPlannerInput["household"], string[] | undefined>;
  distanceCategories: {
    farDistanceOrigins: string[];
    regionalOrigins: string[];
  };
  summaryFragments: Record<string, string>;
};

export type ArrivalPlannerDatasets = {
  milestones: {
    firstWeek: ArrivalMilestone[];
    firstMonth: ArrivalMilestone[];
  };
  appointments: ArrivalAppointment[];
  reminders: ArrivalReminder[];
  rules: ArrivalRules;
};

export type ToolExplanatorySection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
};

export type ArrivalPlannerMeta = {
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
  cta: { generateLabel: string };
  originCountries?: Array<{ value: string; label: string }>;
  relatedLinks: Record<string, { label: string; href: string }>;
  explanatorySections?: ToolExplanatorySection[];
  infographic?: { src: string; alt: string };
};

export type ArrivalPlannerExample = {
  id: string;
  title: string;
  inputs: Partial<ArrivalPlannerInput>;
  summary: string;
  firstWeekHighlights: string[];
  firstMonthHighlights: string[];
  ctaLabel?: string;
};

export type ArrivalPlannerFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export function loadArrivalPlannerMeta(): ArrivalPlannerMeta | null {
  return loadJson<ArrivalPlannerMeta>("meta.json");
}

export function loadArrivalPlannerDatasets(): ArrivalPlannerDatasets | null {
  const milestones = loadJson<ArrivalPlannerDatasets["milestones"]>("milestones.json");
  const appointments = loadJson<ArrivalPlannerDatasets["appointments"]>("appointments.json");
  const reminders = loadJson<ArrivalPlannerDatasets["reminders"]>("reminders.json");
  const rules = loadJson<ArrivalPlannerDatasets["rules"]>("rules.json");
  if (!milestones || !appointments || !reminders || !rules) return null;
  return { milestones, appointments, reminders, rules };
}

export function loadArrivalPlannerExamples(): ArrivalPlannerExample[] {
  const examples = loadJson<ArrivalPlannerExample[]>("examples.json");
  return Array.isArray(examples) ? examples : [];
}

export function loadArrivalPlannerFaq(): ArrivalPlannerFaqItem[] {
  const faq = loadJson<ArrivalPlannerFaqItem[]>("faq.json");
  return Array.isArray(faq) ? faq : [];
}

/** New data-driven task system */
export type ArrivalPlannerCountry = {
  slug: string;
  label: string;
  regionGroup: "eu-eea-swiss" | "non-eu";
  distanceCategory: "near" | "medium" | "far";
  countryDocumentSourceName?: string;
  countryDocumentSourceWebsite?: string;
  countryDocumentSourceSummary?: string;
  countryGuideHref?: string;
  typicalArrivalNotes?: string[];
};

export type ArrivalTaskRaw = {
  id: string;
  title: string;
  stage: string;
  group?: string;
  category: string;
  priority: "high" | "medium" | "low";
  audience: string[];
  what: string;
  why: string;
  timeline: string;
  dependsOn?: string[];
  whenVisible?: Record<string, string[]>;
  whoToContact: string[];
  officialLinks: string[];
  affiliateCategories: string[];
  tags: string[];
  documentsNeeded?: string[];
  where?: string;
  cost?: string;
  appointmentNeeded?: boolean;
  blockers?: string[];
  notes?: string;
  countrySpecificNote?: string;
  relatedGuideLinks?: string[];
  relatedToolLinks?: string[];
};

export type ArrivalPlannerTaskData = {
  countries: ArrivalPlannerCountry[];
  genericTasks: ArrivalTaskRaw[];
  overlayTasks: ArrivalTaskRaw[];
  regionOverlays: Record<string, string[]>;
  distanceOverlays: Record<string, string[]>;
  countryOverlays: Record<string, string[]>;
  conditionOverlays: Record<string, string[]>;
  taskContacts: Record<string, { name: string; website: string; contactSummary: string }>;
  scenarios: Array<{
    id: string;
    type: "generic" | "country";
    originCountry?: string;
    title: string;
    inputs: Record<string, string>;
    summary: string;
    firstWeekHighlights: string[];
    firstMonthHighlights: string[];
  }>;
};

export function loadArrivalPlannerTaskData(): ArrivalPlannerTaskData | null {
  const countries = loadJson<ArrivalPlannerCountry[]>("countries.json");
  const genericTasks = loadJson<ArrivalTaskRaw[]>("generic-tasks.json");
  const overlayTasks = loadJson<ArrivalTaskRaw[]>("overlay-tasks.json");
  const regionOverlays = loadJson<Record<string, string[]>>("region-overlays.json");
  const distanceOverlays = loadJson<Record<string, string[]>>("distance-overlays.json");
  const countryOverlays = loadJson<Record<string, string[]>>("country-overlays.json");
  const conditionOverlays = loadJson<Record<string, string[]>>("condition-overlays.json");
  const taskContacts = loadJson<Record<string, { name: string; website: string; contactSummary: string }>>("task-contacts.json");
  const scenarios = loadJson<ArrivalPlannerTaskData["scenarios"]>("scenarios.json");

  if (
    !countries?.length ||
    !genericTasks?.length ||
    !overlayTasks ||
    !regionOverlays ||
    !distanceOverlays ||
    !countryOverlays ||
    !conditionOverlays ||
    !taskContacts ||
    !scenarios?.length
  ) {
    return null;
  }

  return {
    countries,
    genericTasks,
    overlayTasks,
    regionOverlays,
    distanceOverlays,
    countryOverlays,
    conditionOverlays,
    taskContacts,
    scenarios,
  };
}
