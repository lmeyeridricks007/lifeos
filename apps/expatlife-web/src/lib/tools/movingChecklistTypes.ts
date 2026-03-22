/**
 * Types for the moving checklist tool. Content is loaded from JSON; these types describe the shape.
 */

export type MovingChecklistInput = {
  from: string;
  stage: "before-move" | "arriving-soon" | "already-arrived";
  household: "solo" | "partner" | "kids";
  employment: "job-offer" | "employed" | "searching";
  region: "eu" | "non-eu";
  city?: string;
};

export type TaskCondition = Record<string, string[] | undefined>;

export type ChecklistTask = {
  id: string;
  label: string;
  phase: "beforeMove" | "afterArrival" | "first90Days";
  priority: number;
  conditions: TaskCondition;
  description: string;
  relatedGuideHref: string | null;
};

export type ChecklistTaskGroup = {
  phase: "beforeMove" | "afterArrival" | "first90Days";
  phaseLabel: string;
  tasks: Array<{
    id: string;
    label: string;
    description: string;
    relatedGuideHref: string | null;
    highPriority?: boolean;
  }>;
};

export type MovingChecklistResult = {
  summary: string;
  groups: ChecklistTaskGroup[];
};

export type DocumentItem = {
  id: string;
  label: string;
  category: string;
  conditions: TaskCondition;
  whyItMatters: string;
};

export type DocumentsByCategory = Record<
  string,
  Array<{ id: string; label: string; whyItMatters: string }>
>;

export type RelevantLink = {
  label: string;
  href: string;
  type?: "hub" | "pillar" | "documents" | "timeline" | "first30" | "first90" | "origin";
};

export type RulesConfig = {
  stageWeighting: Record<string, Record<string, number>>;
  highPriorityTaskIds: string[];
  distanceCategories: Record<string, string[]>;
  summaryTemplates: Record<string, string>;
};

export type TasksDataset = {
  beforeMove: ChecklistTask[];
  afterArrival: ChecklistTask[];
  first90Days: ChecklistTask[];
};

export type MovingChecklistDatasets = {
  tasks?: TasksDataset;
  documents: { categories: string[]; items: DocumentItem[] };
  rules?: RulesConfig;
};
