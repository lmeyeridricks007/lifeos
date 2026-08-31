export type ModuleStatus = "not_started" | "practicing" | "comfortable" | "passed" | "unsure";

export type TargetLevel = "a2_secure_residence" | "b1_wi2021" | "unsure";

export type ParticipationModules =
  | "not_applicable"
  | "not_started"
  | "in_progress"
  | "done"
  | "unsure";

export type KnmMaterials = "yes_post_july_2025" | "older_materials" | "unsure";

export type BookingWindow = "within_3_months" | "later" | "already_booked" | "unsure";

export type ExamReadinessBand =
  | "ready_to_book_verify"
  | "prioritize_weak_modules"
  | "early_prep"
  | "refresh_knm_materials"
  | "needs_careful_review";

export type ExamReadinessInput = {
  targetLevel: TargetLevel;
  reading: ModuleStatus;
  writing: ModuleStatus;
  speaking: ModuleStatus;
  listening: ModuleStatus;
  knm: ModuleStatus;
  participationModules: ParticipationModules;
  knmMaterials: KnmMaterials;
  bookingWindow: BookingWindow;
};

export type ExamReadinessChecklistItem = {
  id: string;
  label: string;
  status: "strength" | "gap" | "watch" | "info";
  detail: string;
};

export type ExamReadinessNextStep = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
};

export type ExamReadinessResult = {
  band: ExamReadinessBand;
  headline: string;
  summary: string;
  confidenceNote: string;
  checklist: ExamReadinessChecklistItem[];
  priorityModules: string[];
  nextSteps: ExamReadinessNextStep[];
  escalate: boolean;
  escalateReasons: string[];
};

export const DEFAULT_EXAM_READINESS_INPUT: ExamReadinessInput = {
  targetLevel: "unsure",
  reading: "practicing",
  writing: "practicing",
  speaking: "practicing",
  listening: "practicing",
  knm: "not_started",
  participationModules: "unsure",
  knmMaterials: "unsure",
  bookingWindow: "later",
};
