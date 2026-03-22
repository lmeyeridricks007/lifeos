/**
 * Typed state model for the Visa Timeline Estimator tool.
 * Used by the multi-step wizard and the timeline engine.
 */

export type VisaTimelineRoute =
  | "highly-skilled-migrant"
  | "eu-blue-card"
  | "self-employed"
  | "daft"
  | "student"
  | "partner-family"
  | "not-sure";

export type TravelDistanceBand = "nearby-europe" | "medium-haul" | "long-haul" | "not-sure";

export type CurrentStage =
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

export type DocumentBottleneck =
  | "passport-identity"
  | "employer-contract"
  | "study-admission"
  | "business-docs"
  | "partner-family-docs"
  | "civil-documents"
  | "translations-apostille"
  | "not-sure";

export type YesNoUnsure = "yes" | "no" | "not-sure";

export type TargetMoveWindow =
  | "within-1-month"
  | "1-3-months"
  | "3-6-months"
  | "6-plus-months"
  | "not-sure";

export type PracticalTimingArea =
  | "temporary-housing"
  | "flights-travel"
  | "shipping-luggage"
  | "municipality-registration"
  | "bank-phone-insurance"
  | "family-school"
  | "pet-logistics"
  | "none";

export interface VisaTimelineEstimatorAnswers {
  primaryRoute: VisaTimelineRoute;
  countryCode: string;
  travelDistanceBand: TravelDistanceBand;
  currentStage: CurrentStage;
  documentReadinessLevel: DocumentReadinessLevel;
  documentBottleneck: DocumentBottleneck;
  /** Work routes: sponsor ready */
  sponsorReadyStatus: YesNoUnsure;
  /** Work routes: application started with employer */
  applicationStartedWithEmployer: YesNoUnsure;
  /** Student: admission confirmed */
  admissionReadyStatus: YesNoUnsure;
  /** Student: study start date fixed */
  studyStartDateFixed: YesNoUnsure;
  /** Self-employed / DAFT: business docs prepared */
  businessReadinessStatus: YesNoUnsure;
  /** Self-employed / DAFT: still deciding between DAFT and Self-Employed */
  stillDecidingDaftVsSelfEmployed: YesNoUnsure;
  /** Partner / Family: sponsor situation clear */
  sponsorSituationClear: YesNoUnsure;
  /** Partner / Family: relationship / family docs ready */
  familyDocReadinessStatus: YesNoUnsure;
  includedTimingAreas: PracticalTimingArea[];
  targetMoveWindow: TargetMoveWindow;
}

export type TimelinePhaseGroup =
  | "do-now"
  | "next"
  | "wait-period"
  | "after-approval"
  | "after-arrival";

export interface TimelinePhaseItem {
  id: string;
  stepTitle: string;
  timingEstimate: string;
  whyItMatters: string;
  group: TimelinePhaseGroup;
  relatedGuideHref?: string;
}

export interface TimelineEstimateResult {
  lowEstimateDays: number;
  highEstimateDays: number;
  officialDecisionPeriod: { label: string; days: number; sourceHref: string };
  totalPrepEstimate: { lowDays: number; highDays: number };
  postApprovalEstimate: { lowDays: number; highDays: number };
  overallTimelineLabel: string;
  phaseBreakdown: TimelinePhaseItem[];
  keyBottlenecks: Array<{ id: string; label: string; description: string }>;
  urgencyWarnings: string[];
  personalizedNextSteps: Array<{ label: string; href?: string }>;
  recommendedGuides: Array<{ label: string; href: string }>;
  recommendedTools: Array<{ label: string; href: string }>;
  targetMoveRealistic: "realistic" | "tight" | "aggressive" | "unknown";
}
