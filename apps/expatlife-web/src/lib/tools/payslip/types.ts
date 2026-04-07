/** Shared types for payslip text extraction, parsing, and API responses. */

import type { PayslipDecoderDiagnostics, PayslipDecoderResult } from "@/src/lib/tools/payslip/decoder/types";

/** Where the bytes/text came from (upload kind), not the extraction engine. */
export type DocumentInputSource = "pasted_text" | "pdf_text" | "pdf_scanned" | "image_ocr";

/** How plaintext was obtained from the document. */
export type DocumentExtractionMethod = "none" | "pdf_text" | "ocr";

/**
 * Post-decode flow flags for UI and future premium gates.
 * Only a subset is returned today; reserved values document the roadmap.
 */
export type PayslipProcessingFlowState =
  | "paste"
  | "pdf_text_ok"
  | "pdf_likely_scanned"
  | "ocr_required"
  | "ocr_unavailable"
  | "image_upload_premium"
  | "insights_premium";

/** What the server can do today vs future paid tiers (all false in v1). */
export type PayslipDecodeCapabilities = {
  ocrFromPdf: boolean;
  ocrFromImage: boolean;
  premiumInsights: boolean;
};

export const DEFAULT_PAYSLIP_DECODE_CAPABILITIES: PayslipDecodeCapabilities = {
  ocrFromPdf: false,
  ocrFromImage: false,
  premiumInsights: false,
};

/** UI / product states for free vs future premium flows (several can apply at once). */
export type PayslipDecoderUiState =
  | "text_pdf_supported"
  | "scanned_pdf_requires_ocr"
  | "image_upload_disabled"
  | "premium_insights_disabled";

export type PayslipScannedPdfHints = {
  scannedLikely: boolean;
  ocrRecommended: boolean;
  ocrAvailable: boolean;
};

export type PayslipPremiumInsightItem = {
  id: string;
  title: string;
  detail: string;
};

/** Placeholder block for paid “deeper insights”; `items` empty while disabled. */
export type PayslipPremiumInsightsBlock = {
  enabled: boolean;
  items: PayslipPremiumInsightItem[];
};

export type MoneyConfidence = "high" | "medium" | "low";

export type MoneyField = {
  /** Canonical display name for the concept. */
  label: string;
  /** Substring / phrase that triggered the match. */
  labelFound?: string;
  /** Amount as on the payslip (may include €, separators). */
  amount: string;
  /** Parsed numeric value for comparisons (European conventions). */
  normalizedAmount: number;
  sourceLine: string;
  confidence: MoneyConfidence;
  /** Year-to-date column when detected (decoder v2). */
  ytdAmount?: string;
  ytdNormalizedAmount?: number;
};

export type DeductionField = {
  label: string;
  labelFound?: string;
  amount?: string;
  normalizedAmount?: number;
  sourceLine: string;
  confidence: MoneyConfidence;
};

export type DecodedTerm = {
  term: string;
  note?: string;
};

/** When multiple lines compete (e.g. net pay), exposed to the user — no silent pick. */
export type AmountCandidate = {
  field: string;
  labelFound: string;
  rawLine: string;
  amountDisplay: string;
  normalizedAmount: number;
  rule: string;
  score: number;
};

export type GlossaryLineHighlight = {
  termId: string;
  term: string;
  matchedLines: string[];
  /** True when we also extracted a structured value for this concept. */
  parsedIntoValue: boolean;
};

export type PayslipParseResult = {
  period?: string;
  employerName?: string;
  employeeName?: string;
  grossSalary?: MoneyField;
  netSalary?: MoneyField;
  taxableWage?: MoneyField;
  wageTax?: MoneyField;
  holidayAllowance?: MoneyField;
  pensionEmployee?: MoneyField;
  pensionEmployer?: MoneyField;
  socialContributions?: MoneyField;
  /** Bijzonder tarief line when a monetary or % line was matched (often % only — may be absent). */
  specialWithholdingRate?: MoneyField;
  reimbursements?: MoneyField[];
  deductions?: DeductionField[];
  notableTerms?: DecodedTerm[];
  warnings?: string[];
  unmappedLines?: string[];
  ambiguousNetCandidates?: AmountCandidate[];
  glossaryHighlights?: GlossaryLineHighlight[];
};

export type ExtractionQualityLevel = "good" | "partial" | "poor";

export type ExtractionQualityAssessment = {
  level: ExtractionQualityLevel;
  label: string;
  warnings: string[];
  metrics: {
    charCount: number;
    lineCount: number;
    payrollKeywordHits: number;
    printableRatio: number;
  };
};

export type PayslipInputSource = "text" | "pdf";

/** Dev-only diagnostics — never log raw payslip text; rules are safe metadata. */
export type ParseDiagnostics = {
  matchedRules: Array<{ rule: string; lineIndex: number; field: string }>;
  rejectedCandidates: Array<{
    reason: string;
    linePreview: string;
    rule: string;
    normalizedAmount: number;
  }>;
  /** Human-readable extraction quality factors (no PII). */
  qualityExplanation: string[];
  /** Decoder v2 structured diagnostics (development only). */
  decoderDiagnostics?: PayslipDecoderDiagnostics;
};

export type DecodeHints = {
  partialDecode: boolean;
  /** User-facing labels for common fields we did not find. */
  missingFields: string[];
  suggestCheckRawText: boolean;
  summaryLine: string;
};

export type PayslipDecodeResponse = {
  extractedText: string;
  extractionQuality: ExtractionQualityLevel;
  extractionQualityLabel: string;
  extractionWarnings: string[];
  parsedPayslip: PayslipParseResult;
  summaryMessage: string;
  decodeHints?: DecodeHints;
  /** Legacy coarse input channel for analytics and existing UI. */
  inputSource: PayslipInputSource;
  sanitizedFileName?: string;
  /** Present only when `NODE_ENV === 'development'` on the server. */
  parseDiagnostics?: ParseDiagnostics;
  /** Structured document source (paste vs PDF text layer vs future OCR). */
  documentSource: DocumentInputSource;
  extractionMethod: DocumentExtractionMethod;
  /** True when a PDF upload’s text layer looks like a scanned document. */
  likelyScannedDocument: boolean;
  processingFlowState: PayslipProcessingFlowState;
  decodeCapabilities: PayslipDecodeCapabilities;
  /** Parser + future insight warnings (PII-safe); see also `parsedPayslip.warnings`. */
  processingWarnings: string[];
  decoderUiStates: PayslipDecoderUiState[];
  scannedPdfHints: PayslipScannedPdfHints;
  premiumInsights: PayslipPremiumInsightsBlock;
  /** Deterministic decoder v2 — primary structured output for the payslip UI. */
  decoderResult: PayslipDecoderResult;
};

export type ExplanationCard = {
  id: string;
  title: string;
  explanation: string;
  sourceLine?: string;
  /** Phrase that triggered the parser rule. */
  labelFound?: string;
  /** Numeric value after normalizing European formats. */
  normalizedAmount?: number;
  confidence: MoneyConfidence;
  kind: "money" | "deduction" | "term";
};
