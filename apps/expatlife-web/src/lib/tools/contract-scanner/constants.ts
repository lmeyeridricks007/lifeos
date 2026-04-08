/**
 * Free/basic tier limits. Architecture and roadmap:
 * `docs/tools/employment-contract-risk-scanner-future.md`
 *
 * Code entry points: `architectureTypes.ts`, `documentPipeline.ts`, `pipelineMerge.ts`,
 * `entitlements.ts`, `providers.ts`, `inputTabs.ts`.
 */
/** Max upload for text-based PDF extraction (free tier). */
export const CONTRACT_SCANNER_MAX_PDF_MB = 15;
export const CONTRACT_SCANNER_MAX_PDF_BYTES = CONTRACT_SCANNER_MAX_PDF_MB * 1024 * 1024;

/** Max characters accepted for paste / extracted text before analysis. */
export const CONTRACT_SCANNER_MAX_TEXT_CHARS = 400_000;
