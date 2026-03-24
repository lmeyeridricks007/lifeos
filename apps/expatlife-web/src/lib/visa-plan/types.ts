/**
 * Typed state model for the Visa Application Plan tool.
 * Used by the multi-step wizard and the plan generation engine.
 */

export type VisaPlanRoute =
  | "highly-skilled-migrant"
  | "eu-blue-card"
  | "self-employed"
  | "daft"
  | "student"
  | "partner-family"
  | "not-sure";

export type CitizenshipCategory = "eu" | "non-eu" | "not-sure";

export type HouseholdType =
  | "just-me"
  | "partner"
  | "partner-and-children"
  | "children-only"
  | "pet"
  | "not-sure";

export type ApplicationStage =
  | "just-exploring"
  | "chosen-route"
  | "gathering-documents"
  | "ready-to-apply"
  | "already-submitted"
  | "approved-planning-move";

export type DocumentReadinessLevel =
  | "most-ready"
  | "some-ready"
  | "barely-started"
  | "not-sure";

export type MissingDocumentArea =
  | "passport-identity"
  | "employer-contract"
  | "study-admission"
  | "partner-family-docs"
  | "business-docs"
  | "civil-documents"
  | "translations-apostille"
  | "not-sure";

export type TargetMoveWindow =
  | "within-1-month"
  | "1-3-months"
  | "3-6-months"
  | "6-plus-months"
  | "not-sure";

export type PracticalSetupNeed =
  | "temporary-housing"
  | "long-term-housing"
  | "bank-account"
  | "insurance"
  | "flights"
  | "shipping"
  | "municipality-registration"
  | "school-family-setup"
  | "pet-logistics"
  | "not-sure";

export interface VisaApplicationPlanAnswers {
  primaryRoute: VisaPlanRoute;
  countryCode: string;
  citizenshipCategory: CitizenshipCategory;
  householdType: HouseholdType;
  includesPets: boolean;
  applicationStage: ApplicationStage;
  documentReadinessLevel: DocumentReadinessLevel;
  missingDocumentAreas: MissingDocumentArea[];
  targetMoveWindow: TargetMoveWindow;
  hasFixedStartDate: boolean;
  practicalSetupNeeds: PracticalSetupNeed[];
}

export type PlanPhaseId =
  | "confirm-route"
  | "prepare-documents"
  | "submit-application"
  | "wait-pre-move"
  | "travel-arrival"
  | "first-30-90-days";

export interface PlanTask {
  id: string;
  title: string;
  explanation?: string;
  whyItMatters?: string;
  relatedGuideHref?: string;
  phase: PlanPhaseId;
  group: "do-now" | "next" | "later" | "after-approval" | "after-arrival";
}

export interface CostMilestone {
  id: string;
  label: string;
  description: string;
  when?: string;
}

export interface RiskFlag {
  id: string;
  label: string;
  description: string;
}

export interface VisaPlanResult {
  readinessLevel: "high" | "medium" | "low";
  urgencyLevel: "high" | "medium" | "low";
  personalizedSummary: string[];
  timelinePhases: Array<{ id: PlanPhaseId; title: string; tasks: PlanTask[] }>;
  priorityTasksNow: PlanTask[];
  nextTasks: PlanTask[];
  laterTasks: PlanTask[];
  costMilestones: CostMilestone[];
  riskFlags: RiskFlag[];
  recommendedGuides: Array<{ label: string; href: string }>;
  recommendedTools: Array<{ label: string; href: string }>;
  nextBestActions: Array<{ label: string; href?: string }>;
}
