/**
 * Extended moving checklist input for task resolution and UI.
 * Focus: pre-move preparation, travel & relocation, short arrival handoff.
 */
export type MovingChecklistInputExtended = {
  from: string;
  stage: "before-move" | "arriving-soon" | "already-arrived";
  household: "solo" | "partner" | "kids";
  employment: "job-offer" | "employed" | "searching";
  region: "eu" | "non-eu";
  city?: string;
  /** What is your housing situation for arrival? */
  housingReadiness: "no-place-yet" | "temporary-place" | "confirmed-rental" | "employer-arranged";
  /** Will you ship household goods or luggage beyond standard travel baggage? */
  shippingNeeds: boolean;
  /** Do you need to plan school or childcare-related preparation? */
  kidsSchoolNeeds: boolean;
  /** Will you likely move savings or larger funds internationally? */
  largeMoneyTransfer: boolean;
  /** Do you already have your core documents ready? */
  hasCoreDocsReady: boolean;
  /** Will you need temporary accommodation first? */
  needsTemporaryHousing: boolean;
};

export type MovingChecklistPhase =
  | "preparation"
  | "finalPreparation"
  | "travelRelocation"
  | "arrivalEssentials";

export type MovingChecklistCategory =
  | "documents"
  | "housing"
  | "travel"
  | "finance"
  | "employment"
  | "family"
  | "admin"
  | "handoff";

export type MovingChecklistTaskRaw = {
  id: string;
  title: string;
  phase: MovingChecklistPhase;
  category: MovingChecklistCategory;
  priority: "high" | "medium" | "low";
  shortDescription: string;
  whyItMatters: string;
  whatThisInvolves: string[];
  whenToDoIt: string;
  dependencies: string[];
  /** Optional ordered steps for users to follow. */
  typicalSteps?: string[];
  countryNotes?: Record<string, string>;
  relatedGuides: string[];
  affiliateCategories: string[];
  /** When to show this task; key = input field, value = allowed values */
  whenVisible?: Record<string, string[]>;
};

export type MovingChecklistTaskResolved = MovingChecklistTaskRaw & {
  /** Resolved country note for current origin, if any */
  countryNote?: string;
};

export type MovingChecklistTaskGroup = {
  phase: MovingChecklistPhase;
  phaseLabel: string;
  phaseGoal?: string;
  tasks: MovingChecklistTaskResolved[];
};

export type MovingChecklistResolved = {
  summary: string;
  groups: MovingChecklistTaskGroup[];
};
