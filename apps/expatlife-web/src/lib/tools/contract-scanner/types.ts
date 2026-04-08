/**
 * Dutch employment contract / offer scanner — planning & awareness only.
 * Pipeline architecture types: `architectureTypes.ts`, `documentPipeline.ts`, `providers.ts`.
 */

import type {
  ContractEntitlements,
  ContractInsightLevel,
  DocumentInputSource,
  DocumentProcessingResult,
  ExtractionMethod,
  ExtractionQuality,
} from "@/src/lib/tools/contract-scanner/architectureTypes";

export type InputMode = "paste" | "pdf" | "checklist";

export type { ExtractionQuality } from "@/src/lib/tools/contract-scanner/architectureTypes";

export type ContractType = "permanent" | "fixed_term" | "temporary" | "unknown";

export type ConfidenceTier = "low" | "medium" | "high";

export type OverallConcernLevel = "low_concern" | "moderate_concern" | "elevated_concern" | "high_review_recommended";

export type FindingRiskLabel =
  | "common_standard"
  | "worth_confirming"
  | "potentially_restrictive"
  | "broad_strong_wording"
  | "missing_unclear"
  | "review_before_signing";

export type ClauseCategory =
  | "contract_structure"
  | "salary_compensation"
  | "notice_termination"
  | "restrictive_clauses"
  | "working_time"
  | "sick_leave_absence"
  | "vacation_leave"
  | "expat_immigration"
  | "policy_data";

export type RiskScoreDimension =
  | "salary_clarity"
  | "termination_clarity"
  | "restrictive_clauses"
  | "overtime_work_time"
  | "expat_immigration"
  | "repayment_clawback"
  | "missing_information"
  | "policy_dependency";

export type ClauseFinding = {
  id: string;
  category: ClauseCategory;
  subcategory: string;
  snippet: string;
  explanation: string;
  whyItMatters: string;
  riskLabel: FindingRiskLabel;
  questionToAsk: string;
  confidence: ConfidenceTier;
  /** True when match text suggests unusually broad or underspecified wording */
  appearsBroad?: boolean;
  /** Character range in normalized text (dedup / confidence context). */
  matchSpan?: { start: number; end: number };
};

export type RiskCategoryResult = {
  dimension: RiskScoreDimension;
  /** 0 = low concern, 100 = prioritize review */
  score: number;
  summary: string;
};

export type MissingItem = {
  id: string;
  label: string;
  detail: string;
};

export type HRQuestion = {
  id: string;
  text: string;
  relatedFindingId?: string;
};

export type KeyRiskCard = {
  id: string;
  title: string;
  badge: FindingRiskLabel;
  summary: string;
};

export type ChecklistContractType = "permanent" | "fixed_term" | "temporary_unknown";

export type TriState = "yes" | "no" | "unknown";

export type ContractChecklistAnswers = {
  contractType: ChecklistContractType;
  salaryPresent: TriState;
  holidayAllowance: TriState;
  pension: TriState;
  bonusVariable: TriState;
  probation: TriState;
  noticePeriod: TriState;
  nonCompete: TriState;
  sideJobRestriction: TriState;
  overtimeClause: TriState;
  handbookReference: TriState;
  relocationRepayment: TriState;
  visaSponsor: TriState;
  thirtyPercentRuling: TriState;
  remoteHybrid: TriState;
};

export type ContractScanInput = {
  mode: InputMode;
  /** Normalized text used for analysis (paste or post-PDF extract) */
  text: string;
  /** Original extraction quality when mode === pdf */
  extractionQuality?: ExtractionQuality;
  likelyScannedDocument?: boolean;
  /** Warnings from PDF text layer step (passed through to result). */
  extractionWarnings?: string[];
  /** Page count from PDF extract (improves pipeline metadata when present). */
  pdfPageCount?: number;
  /**
   * When set (e.g. from `/api/tools/contract-scanner/extract`), used as source of truth for OCR flags.
   * Otherwise derived inside `runContractScan` from mode + extraction fields.
   */
  documentProcessing?: DocumentProcessingResult;
  /** Optional snapshot for future auth; defaults applied when omitted. */
  entitlementsSnapshot?: ContractEntitlements;
  checklist?: ContractChecklistAnswers;
};

export type ContractScanResult = {
  mode: InputMode;
  contractType: ContractType;
  contractTypeConfidence: ConfidenceTier;
  overallConcern: OverallConcernLevel;
  scanConfidence: ConfidenceTier;
  topConcerns: string[];
  suggestedNextStep: string;
  categoryScores: RiskCategoryResult[];
  findings: ClauseFinding[];
  hrQuestions: HRQuestion[];
  missingItems: MissingItem[];
  keyRiskCards: KeyRiskCard[];
  normalizedText: string;
  normalizedTextLength: number;
  extractionQuality?: ExtractionQuality;
  likelyScannedDocument?: boolean;
  extractionWarnings?: string[];
  /** Full extraction-stage snapshot when applicable. */
  documentProcessing?: DocumentProcessingResult;
  documentInputSource?: DocumentInputSource;
  extractionMethod?: ExtractionMethod;
  insightLevel?: ContractInsightLevel;
  ocrRecommended?: boolean;
  ocrAvailable?: boolean;
};
