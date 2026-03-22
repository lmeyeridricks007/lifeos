/**
 * Deterministic rules engine for the moving checklist tool.
 * No AI/LLM — all logic is pure and based on input + JSON content.
 */

import type {
  MovingChecklistInput,
  MovingChecklistResult,
  ChecklistTask,
  ChecklistTaskGroup,
  DocumentsByCategory,
  RelevantLink,
  MovingChecklistDatasets,
  RulesConfig,
} from "./movingChecklistTypes";

const PHASE_LABELS: Record<string, string> = {
  beforeMove: "Before the move",
  afterArrival: "After arrival",
  first90Days: "First 90 days",
};

const MAX_TASKS_PER_GROUP = 8;

function matchesCondition(conditions: Record<string, string[] | undefined>, input: MovingChecklistInput): boolean {
  for (const [key, allowed] of Object.entries(conditions)) {
    if (!allowed || allowed.length === 0) continue;
    const inputVal = (input as Record<string, string>)[key];
    if (inputVal == null) continue;
    const normalized = Array.isArray(allowed) ? allowed : [allowed];
    if (!normalized.includes(inputVal)) return false;
  }
  return true;
}

function getStageWeights(stage: MovingChecklistInput["stage"], rules: RulesConfig): Record<string, number> {
  return rules.stageWeighting[stage] ?? { beforeMove: 1, afterArrival: 1, first90Days: 1 };
}

const DEFAULT_RULES: RulesConfig = {
  stageWeighting: {},
  highPriorityTaskIds: [],
  distanceCategories: {},
  summaryTemplates: {},
};

export function buildMovingChecklist(
  input: MovingChecklistInput,
  datasets: MovingChecklistDatasets
): MovingChecklistResult {
  const tasksData = datasets.tasks ?? { beforeMove: [], afterArrival: [], first90Days: [] };
  const effectiveRules = datasets.rules ?? DEFAULT_RULES;
  const weights = getStageWeights(input.stage, effectiveRules);
  const highPriorityIds = new Set(effectiveRules.highPriorityTaskIds ?? []);

  const allTasks: ChecklistTask[] = [
    ...tasksData.beforeMove,
    ...tasksData.afterArrival,
    ...tasksData.first90Days,
  ];

  const filtered: ChecklistTask[] = [];
  const seen = new Set<string>();
  for (const task of allTasks) {
    if (!matchesCondition(task.conditions, input)) continue;
    if (seen.has(task.id)) continue;
    seen.add(task.id);
    filtered.push(task);
  }

  const byPhase = {
    beforeMove: filtered.filter((t) => t.phase === "beforeMove"),
    afterArrival: filtered.filter((t) => t.phase === "afterArrival"),
    first90Days: filtered.filter((t) => t.phase === "first90Days"),
  };

  const sortByWeightAndPriority = (a: ChecklistTask, b: ChecklistTask) => {
    const wA = (weights[a.phase] ?? 1) * (highPriorityIds.has(a.id) ? 2 : 1);
    const wB = (weights[b.phase] ?? 1) * (highPriorityIds.has(b.id) ? 2 : 1);
    if (wB !== wA) return wB - wA;
    return a.priority - b.priority;
  };

  const groups: ChecklistTaskGroup[] = (
    ["beforeMove", "afterArrival", "first90Days"] as const
  ).map((phase) => {
    const list = [...byPhase[phase]].sort(sortByWeightAndPriority).slice(0, MAX_TASKS_PER_GROUP);
    return {
      phase,
      phaseLabel: PHASE_LABELS[phase] ?? phase,
      tasks: list.map((t) => ({
        id: t.id,
        label: t.label,
        description: t.description,
        relatedGuideHref: t.relatedGuideHref,
        highPriority: highPriorityIds.has(t.id),
      })),
    };
  });

  const summary = buildPersonalizedSummary(input, datasets);

  return { summary, groups };
}

export function buildDocumentsList(
  input: MovingChecklistInput,
  datasets: MovingChecklistDatasets
): DocumentsByCategory {
  const { documents } = datasets;
  const byCategory: DocumentsByCategory = {};

  for (const item of documents.items) {
    if (!matchesCondition(item.conditions, input)) continue;
    const cat = item.category;
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push({
      id: item.id,
      label: item.label,
      whyItMatters: item.whyItMatters,
    });
  }

  const order = documents.categories ?? Object.keys(byCategory);
  const sorted: DocumentsByCategory = {};
  for (const cat of order) {
    if (byCategory[cat]?.length) sorted[cat] = byCategory[cat];
  }
  for (const cat of Object.keys(byCategory)) {
    if (!sorted[cat]) sorted[cat] = byCategory[cat];
  }
  return sorted;
}

const ORIGIN_SLUG_MAP: Record<string, string> = {
  "south-africa": "south-africa",
  india: "india",
  germany: "germany",
  "united-kingdom": "united-kingdom",
  uk: "united-kingdom",
  spain: "spain",
  france: "france",
  belgium: "belgium",
  poland: "poland",
  italy: "italy",
  "united-states": "united-states",
  usa: "united-states",
  australia: "australia",
  brazil: "brazil",
  canada: "canada",
  japan: "japan",
};

export function buildRelevantLinks(
  input: MovingChecklistInput,
  metaRelated: Record<string, { label: string; href: string }>
): RelevantLink[] {
  const withFrom = (href: string) => `${href}${href.includes("?") ? "&" : "?"}from=${encodeURIComponent(input.from)}`;
  const links: RelevantLink[] = [];
  if (metaRelated.hub) links.push({ ...metaRelated.hub, href: withFrom(metaRelated.hub.href), type: "hub" });
  if (metaRelated.pillar) links.push({ ...metaRelated.pillar, href: withFrom(metaRelated.pillar.href), type: "pillar" });
  if (metaRelated.documents) links.push({ ...metaRelated.documents, href: withFrom(metaRelated.documents.href), type: "documents" });
  if (metaRelated.timeline) links.push({ ...metaRelated.timeline, href: withFrom(metaRelated.timeline.href), type: "timeline" });
  if (input.stage === "before-move" || input.stage === "arriving-soon") {
    if (metaRelated.first30) links.push({ ...metaRelated.first30, href: withFrom(metaRelated.first30.href), type: "first30" });
  }
  if (metaRelated.first90) links.push({ ...metaRelated.first90, href: withFrom(metaRelated.first90.href), type: "first90" });

  const originSlug = ORIGIN_SLUG_MAP[input.from] ?? input.from?.toLowerCase()?.replace(/\s+/g, "-") ?? "general";
  links.push({
    label: `Moving to the Netherlands from ${originSlug.replace(/-/g, " ")}`,
    href: `/netherlands/moving/moving-to-netherlands-from/${originSlug}/`,
    type: "origin",
  });

  return links;
}

function originLabel(originSlug: string): string {
  return originSlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function buildPersonalizedSummary(
  input: MovingChecklistInput,
  datasets: MovingChecklistDatasets
): string {
  const rules = datasets.rules ?? DEFAULT_RULES;
  const t = rules.summaryTemplates ?? {};
  const origin = originLabel(input.from);

  const parts: string[] = [];

  if (input.stage === "before-move") {
    const employment = input.employment === "job-offer" ? "job offer" : input.employment === "employed" ? "job secured" : "job search";
    parts.push((t.beforeMove ?? "Moving from {origin} with a {employment} often means preparing documents early and planning your first admin steps soon after arrival.")
      .replace("{origin}", origin)
      .replace("{employment}", employment));
  } else if (input.stage === "arriving-soon") {
    parts.push(t.arrivingSoon ?? "If you're arriving soon, focus on registration, banking, and health insurance in your first days, then work through the first 90 days list.");
  } else if (input.stage === "already-arrived") {
    parts.push(t.alreadyArrived ?? "If you've already arrived, the focus often shifts toward registration, banking, and making your first 90 days more predictable.");
  }

  if (input.household === "partner") {
    parts.push(t.withPartner ?? "Moving with a partner means extra documents and possibly joint registration steps — we've included those where relevant.");
  }
  if (input.household === "kids") {
    parts.push(t.withKids ?? "With children, school registration and family documents are important; we've highlighted those tasks.");
  }
  if (input.region === "non-eu") {
    parts.push(t.nonEu ?? "As a non-EU national, allow time for residence and work permit steps and keep your document pack ready.");
  }
  if (input.employment === "searching") {
    parts.push(t.searching ?? "If you're still searching for work, we've included admin readiness and job-search–friendly tasks.");
  }

  return parts.length > 0 ? parts.join(" ") : `Personalized checklist for moving from ${origin}. Confirm all steps with official sources.`;
}

export function buildAffiliateContext(
  input: MovingChecklistInput,
  _results: MovingChecklistResult
): { arrivalStage?: string; household?: string; jobStatus?: string; nationalityRegion?: string } {
  const stageMap: Record<string, string> = {
    "before-move": "before",
    "arriving-soon": "after",
    "already-arrived": "after",
  };
  return {
    arrivalStage: stageMap[input.stage],
    household: input.household,
    jobStatus: input.employment,
    nationalityRegion: input.region,
  };
}
