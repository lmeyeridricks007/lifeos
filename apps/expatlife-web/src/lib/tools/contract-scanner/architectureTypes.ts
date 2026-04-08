/**
 * Cross-cutting types for the contract scanner pipeline (free + future paid).
 * See docs/tools/employment-contract-risk-scanner-future.md.
 */

/** PDF / document text-layer quality heuristic (also used for paste stub). */
export type ExtractionQuality = "good" | "partial" | "poor";

/** How the user supplied document content (UI / ingestion channel). */
export type DocumentInputSource =
  | "paste_text"
  | "pdf_text"
  | "pdf_scanned"
  /** Reserved for image upload + OCR tab (UI hidden until product enables it). */
  | "image_ocr"
  /** No file: rules-only path. */
  | "checklist_manual";

/** How text was obtained from bytes (if any). */
export type ExtractionMethod = "none" | "pdf_text" | "ocr";

/** Insight tier; free tier is always `basic` today. */
export type ContractInsightLevel = "basic" | "premium";

/**
 * Feature gates for future auth/billing. All false in production free mode.
 * Later: resolve from session / plan (not implemented).
 */
export type ContractEntitlements = {
  /** User may run server-side OCR on scanned PDFs or images. */
  ocrEnabled: boolean;
  /** Deeper explanations / negotiation copy (e.g. LLM). */
  premiumInsightsEnabled: boolean;
  /** Show image upload tab and accept image/* uploads. */
  imageUploadTabEnabled: boolean;
  /** Persist scans server-side / history UI. */
  savedHistoryEnabled: boolean;
  /** Side-by-side compare two extractions (future). */
  compareContractsEnabled: boolean;
};

/**
 * Normalized output of the document/extraction stage (before deterministic parsing).
 * Returned from PDF API and mirrored on scan results when applicable.
 */
export type DocumentProcessingResult = {
  extractedText: string;
  extractionQuality: ExtractionQuality;
  extractionWarnings: string[];
  textLength: number;
  pageCount: number;
  documentInputSource: DocumentInputSource;
  extractionMethod: ExtractionMethod;
  likelyScannedDocument: boolean;
  /** Heuristic: OCR would likely improve text (scanned PDF / poor text layer). */
  ocrRecommended: boolean;
  /** Entitlement: OCR can be invoked (false in free tier). */
  ocrAvailable: boolean;
};
