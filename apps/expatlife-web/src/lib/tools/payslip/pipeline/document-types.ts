/**
 * In-memory pipeline shapes: transient payload, layer outputs, full processing result.
 * Public enums live in `types.ts` to avoid circular imports with API types.
 */

import type { PayslipEntitlements } from "@/lib/entitlements/payslip-entitlements";
import type {
  DecodeHints,
  DocumentExtractionMethod,
  DocumentInputSource,
  ExtractionQualityAssessment,
  ParseDiagnostics,
  PayslipParseResult,
  PayslipPremiumInsightsBlock,
  PayslipProcessingFlowState,
} from "@/src/lib/tools/payslip/types";

/** In-memory payload only — never persisted in v1. */
export type TransientDocumentPayload = {
  sourceType: DocumentInputSource;
  extractionMethod: DocumentExtractionMethod;
  /** Raw text before normalization (paste or PDF text layer). */
  rawText: string;
  /** After normalization layer. */
  normalizedText: string;
  sanitizedFileName?: string;
};

/** Extraction + quality layer output (before parsing). */
export type ExtractionLayerResult = {
  quality: ExtractionQualityAssessment;
  extractionWarnings: string[];
  likelyScannedDocument: boolean;
};

import type { PayslipDecoderResult } from "@/src/lib/tools/payslip/decoder/types";

export type ParserLayerResult = {
  result: PayslipParseResult;
  diagnostics?: ParseDiagnostics;
  decoderResult: PayslipDecoderResult;
};

/** Insight layer: human copy, hints, merged warnings (no new numbers). */
export type PayslipInsightsPayload = {
  decodeHints?: DecodeHints;
  summaryMessage: string;
  /** Top-level warnings from parser + future insight rules (PII-safe strings only). */
  processingWarnings: string[];
};

/**
 * Full in-memory processing result — suitable for unit tests and future metadata persistence.
 */
export type DocumentProcessingResult = {
  transientDocument: TransientDocumentPayload;
  extraction: ExtractionLayerResult;
  parser: ParserLayerResult;
  insights: PayslipInsightsPayload;
  premiumInsightsBlock: PayslipPremiumInsightsBlock;
  flowState: PayslipProcessingFlowState;
  /** Safe to log/store later — no raw payslip body. */
  processingMetadata: {
    parserFieldCount: number;
    ambiguousNet: boolean;
  };
};

export type ProcessPayslipDocumentInput = {
  rawText: string;
  documentSource: DocumentInputSource;
  extractionMethod: DocumentExtractionMethod;
  sanitizedFileName?: string;
  /** When omitted, `getPayslipEntitlements()` is used (anonymous free tier). */
  entitlements?: PayslipEntitlements;
};
