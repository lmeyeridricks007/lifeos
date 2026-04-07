/**
 * Future paid OCR adapter — gated by `ENABLE_PAYSLIP_OCR` (see `lib/config/payslip-features.ts`).
 * Wire a real provider (Azure Document Intelligence, Google Vision, Tesseract, etc.) behind this interface.
 *
 * Integration blueprint (auth, privacy, cost, adapter layout): docs/tools/payslip-decoder-future-ocr.md
 *
 * TODO(paid rollout):
 * - Add `ocr/providers/<vendor>.ts` classes implementing this interface; keep SDK imports isolated there.
 * - `getPayslipOcrProvider()` should select vendor via env (e.g. PAYSLIP_OCR_PROVIDER) after the feature flag.
 * - Premium / registered entitlement should be enforced in the API route (or a thin `runOcrIfEligible` helper)
 *   before calling `extractTextFromImageOrScannedPdf` — do not rely on env flags alone for access control.
 */
import { getPayslipFeatureFlags } from "@/lib/config/payslip-features";

export type OcrExtractInput = {
  /** In-memory document bytes only (v1 policy: no disk persistence). */
  buffer: Buffer;
  mimeType: string;
  /** Future: locale hints, page range, DPI. */
  hints?: Record<string, string>;
};

export type OcrExtractOk = {
  text: string;
  /** Future: average confidence 0–1 for UI / billing / thresholding (see future-ocr.md “Confidence model”). */
  meanConfidence?: number;
};

export interface OcrProvider {
  readonly id: string;
  /** When false, the pipeline must not call extract (free tier / feature flag off). */
  isEnabled(): boolean;
  /**
   * Extract text from scanned PDFs or raster images.
   * @throws When disabled or provider error — callers map to structured `ocr_unavailable` / user-safe messages.
   */
  extractTextFromImageOrScannedPdf(input: OcrExtractInput): Promise<OcrExtractOk>;
}

/**
 * Stub used while OCR is disabled. The payslip route never invokes this in v1;
 * it exists so a future paid branch can `getPayslipOcrProvider()` without refactors.
 */
export class DisabledPayslipOcrProvider implements OcrProvider {
  readonly id = "disabled";

  isEnabled(): boolean {
    return false;
  }

  async extractTextFromImageOrScannedPdf(_input: OcrExtractInput): Promise<OcrExtractOk> {
    throw new Error("PAYSLIP_OCR_DISABLED");
  }
}

const singletonDisabled = new DisabledPayslipOcrProvider();

/** Resolve OCR implementation (feature-flag + provider hook point). */
export function getPayslipOcrProvider(): OcrProvider {
  const flags = getPayslipFeatureFlags();
  if (!flags.enableOcr) {
    return singletonDisabled;
  }
  // TODO(paid): return new concrete provider when implemented; `isEnabled()` must reflect both config and runtime health.
  // See docs/tools/payslip-decoder-future-ocr.md — compare providers before locking one vendor.
  return singletonDisabled;
}
