export type YesNoUnsure = "yes" | "no" | "unsure";

export type CitizenshipRouteFocus = "naturalisation" | "option_maybe" | "unsure";

export type ResidenceYearsBand =
  | "under_3"
  | "three_to_four"
  | "about_five"
  | "over_five"
  | "unsure";

export type ContinuityStatus =
  | "continuous_on_time"
  | "job_search_used"
  | "gaps_or_late"
  | "unsure";

export type IntegrationStatus =
  | "diploma_a2_or_higher"
  | "wi2021_certificate"
  | "exemption"
  | "in_progress"
  | "not_started"
  | "unsure";

export type RenunciationStance = "willing" | "possible_exception" | "not_ready" | "unsure";

export type LongTermStatus = "none" | "dutch_pr" | "eu_ltr" | "unsure";

export type CitizenshipTimelineBand =
  | "option_check_first"
  | "early_planning"
  | "prep_milestones"
  | "likely_ready_to_book_gemeente"
  | "needs_careful_review";

export type CitizenshipTimelineInput = {
  routeFocus: CitizenshipRouteFocus;
  residenceYears: ResidenceYearsBand;
  continuity: ContinuityStatus;
  integration: IntegrationStatus;
  renunciation: RenunciationStance;
  longTermStatus: LongTermStatus;
  age18Plus: YesNoUnsure;
  /** Optional ISO month `YYYY-MM` for rough horizon maths. */
  residenceStartMonth: string;
};

export type TimelineMilestone = {
  id: string;
  label: string;
  timingLabel: string;
  status: "done" | "next" | "later" | "blocker" | "info";
  detail: string;
};

export type CitizenshipNextStep = {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
};

export type CitizenshipTimelineResult = {
  band: CitizenshipTimelineBand;
  headline: string;
  summary: string;
  confidenceNote: string;
  earliestApplyWindow: string;
  decisionPeriodNote: string;
  milestones: TimelineMilestone[];
  gaps: string[];
  nextSteps: CitizenshipNextStep[];
  escalate: boolean;
  escalateReasons: string[];
};

export const DEFAULT_CITIZENSHIP_TIMELINE_INPUT: CitizenshipTimelineInput = {
  routeFocus: "naturalisation",
  residenceYears: "about_five",
  continuity: "continuous_on_time",
  integration: "in_progress",
  renunciation: "unsure",
  longTermStatus: "none",
  age18Plus: "yes",
  residenceStartMonth: "",
};
