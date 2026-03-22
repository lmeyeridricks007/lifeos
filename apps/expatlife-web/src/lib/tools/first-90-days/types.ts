/**
 * Types for the First 90 Days settlement planner (refactored).
 */

export type NinetyDayPhase =
  | "arrival-carry-over"
  | "early-setup"
  | "stabilizing-routines"
  | "longer-term-setup";

export const PHASE_LABELS: Record<NinetyDayPhase, string> = {
  "arrival-carry-over": "Arrival carry-over (Week 1–2)",
  "early-setup": "Early setup (Week 3–4)",
  "stabilizing-routines": "Stabilizing routines (Month 2)",
  "longer-term-setup": "Longer-term setup (Month 3)",
};

export type First90DaysInputExtended = {
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

export type TaskConditions = {
  arrivalStage?: string[];
  household?: string[];
  startingJobSoon?: string[];
  needsIntegrationAwareness?: string[];
};

export type TaskContactRef = {
  name: string;
  website: string;
  contactSummary: string;
};

export type NinetyDayTask = {
  id: string;
  title: string;
  phase: NinetyDayPhase;
  weekRange: string;
  category: string;
  priority: string;
  shortDescription: string;
  whyItMatters: string;
  whatThisInvolves: string[];
  whenToDoIt: string;
  dependencies: string[];
  typicalSteps: string[];
  countryNotes: Record<string, string>;
  relatedGuides: string[];
  affiliateCategories: string[];
  whoToContact: string[];
  conditions?: TaskConditions;
};

export type NinetyDayUnknown = {
  id: string;
  title: string;
  whyItMatters: string;
  suggestedNextStep?: string;
  relatedGuide?: string;
  conditions?: TaskConditions;
};

export type NinetyDayRoadmapSummary = {
  summary: string;
  focusFirst: string;
  stabilizeByMonth2: string;
  buildByMonth3: string;
};

export type TasksByPhase = Record<NinetyDayPhase, NinetyDayTask[]>;

export type AffiliateContext = {
  categoryOrder: string[];
  emphasis: string;
};
