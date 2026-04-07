/**
 * Free vs future-premium UI state derived from extraction outcome + feature flags.
 *
 * TODO(paid): When OCR is live, set `decodeCapabilities` from real provider `isEnabled()` + user entitlement;
 * extend `decoderUiStates` if new UX states are needed. Blueprint: docs/tools/payslip-decoder-future-ocr.md
 */
import type { PayslipFeatureFlags } from "@/lib/config/payslip-features";
import type { PayslipEntitlements } from "@/lib/entitlements/payslip-entitlements";
import type {
  DocumentInputSource,
  PayslipDecodeCapabilities,
  PayslipDecoderUiState,
  PayslipProcessingFlowState,
  PayslipScannedPdfHints,
} from "@/src/lib/tools/payslip/types";

/** Effective capabilities = product flags + OCR provider health + per-user entitlements. */
export function buildDecodeCapabilitiesFromFlags(
  flags: PayslipFeatureFlags,
  ocr: { isEnabled(): boolean },
  entitlements: PayslipEntitlements
): PayslipDecodeCapabilities {
  const ocrLive = ocr.isEnabled();
  return {
    ocrFromPdf: flags.enableOcr && ocrLive && entitlements.canUseOcr,
    ocrFromImage:
      flags.enableImageUpload && ocrLive && entitlements.canUseImageUpload && entitlements.canUseOcr,
    premiumInsights: flags.enablePremiumInsights && entitlements.canUsePremiumInsights,
  };
}

export function buildScannedPdfHints(params: {
  documentSource: DocumentInputSource;
  likelyScannedDocument: boolean;
  decodeCapabilities: PayslipDecodeCapabilities;
}): PayslipScannedPdfHints {
  const scannedLikely = params.likelyScannedDocument && params.documentSource === "pdf_text";
  return {
    scannedLikely,
    ocrRecommended: scannedLikely,
    ocrAvailable: scannedLikely && params.decodeCapabilities.ocrFromPdf,
  };
}

export function derivePayslipDecoderUiStates(params: {
  documentSource: DocumentInputSource;
  likelyScannedDocument: boolean;
  processingFlowState: PayslipProcessingFlowState;
  flags: PayslipFeatureFlags;
  entitlements: PayslipEntitlements;
}): PayslipDecoderUiState[] {
  const states: PayslipDecoderUiState[] = [];

  if (!params.flags.enableImageUpload || !params.entitlements.canUseImageUpload) {
    states.push("image_upload_disabled");
  }
  if (!params.flags.enablePremiumInsights || !params.entitlements.canUsePremiumInsights) {
    states.push("premium_insights_disabled");
  }

  if (params.documentSource === "pdf_text" && params.processingFlowState === "pdf_text_ok" && !params.likelyScannedDocument) {
    states.push("text_pdf_supported");
  }

  if (params.likelyScannedDocument && params.documentSource === "pdf_text") {
    states.push("scanned_pdf_requires_ocr");
  }

  return states;
}
