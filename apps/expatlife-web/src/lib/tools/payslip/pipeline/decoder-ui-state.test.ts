import test from "node:test";
import assert from "node:assert/strict";
import {
  buildDecodeCapabilitiesFromFlags,
  buildScannedPdfHints,
  derivePayslipDecoderUiStates,
} from "@/src/lib/tools/payslip/pipeline/decoder-ui-state";
import type { PayslipFeatureFlags } from "@/lib/config/payslip-features";
import { ANONYMOUS_FREE_PAYSLIP_ENTITLEMENTS, type PayslipEntitlements } from "@/lib/entitlements/payslip-entitlements";
import { DisabledPayslipOcrProvider } from "@/src/lib/tools/payslip/ocr/OcrProvider";

const allOff: PayslipFeatureFlags = { enableOcr: false, enableImageUpload: false, enablePremiumInsights: false };

const paidLikeEntitlements: PayslipEntitlements = {
  ...ANONYMOUS_FREE_PAYSLIP_ENTITLEMENTS,
  canUseOcr: true,
  canUseImageUpload: true,
  canUsePremiumInsights: true,
};

test("capabilities respect flags and OCR provider isEnabled", () => {
  const disabled = new DisabledPayslipOcrProvider();
  const caps = buildDecodeCapabilitiesFromFlags(
    { ...allOff, enableOcr: true, enableImageUpload: true },
    disabled,
    paidLikeEntitlements
  );
  assert.equal(caps.ocrFromPdf, false);
  assert.equal(caps.ocrFromImage, false);
  assert.equal(caps.premiumInsights, false);
});

test("entitlements can block OCR even when flags and provider are on", () => {
  const caps = buildDecodeCapabilitiesFromFlags(
    { enableOcr: true, enableImageUpload: true, enablePremiumInsights: true },
    { isEnabled: () => true },
    ANONYMOUS_FREE_PAYSLIP_ENTITLEMENTS
  );
  assert.equal(caps.ocrFromPdf, false);
  assert.equal(caps.ocrFromImage, false);
  assert.equal(caps.premiumInsights, false);
});

test("paid-like entitlements plus live OCR unlock OCR capabilities", () => {
  const caps = buildDecodeCapabilitiesFromFlags(
    { enableOcr: true, enableImageUpload: true, enablePremiumInsights: true },
    { isEnabled: () => true },
    paidLikeEntitlements
  );
  assert.equal(caps.ocrFromPdf, true);
  assert.equal(caps.ocrFromImage, true);
  assert.equal(caps.premiumInsights, true);
});

test("scanned PDF hints: ocr available only when capability on", () => {
  const hintsOff = buildScannedPdfHints({
    documentSource: "pdf_text",
    likelyScannedDocument: true,
    decodeCapabilities: { ocrFromPdf: false, ocrFromImage: false, premiumInsights: false },
  });
  assert.equal(hintsOff.ocrAvailable, false);
  const hintsOn = buildScannedPdfHints({
    documentSource: "pdf_text",
    likelyScannedDocument: true,
    decodeCapabilities: { ocrFromPdf: true, ocrFromImage: false, premiumInsights: false },
  });
  assert.equal(hintsOn.ocrAvailable, true);
});

test("decoder UI states include disabled premium/image when flags off", () => {
  const states = derivePayslipDecoderUiStates({
    documentSource: "pasted_text",
    likelyScannedDocument: false,
    processingFlowState: "paste",
    flags: allOff,
    entitlements: ANONYMOUS_FREE_PAYSLIP_ENTITLEMENTS,
  });
  assert.ok(states.includes("image_upload_disabled"));
  assert.ok(states.includes("premium_insights_disabled"));
});

test("image upload state respects entitlements when flag is on", () => {
  const flagsImageOn: PayslipFeatureFlags = { enableOcr: false, enableImageUpload: true, enablePremiumInsights: false };
  const anonymous = derivePayslipDecoderUiStates({
    documentSource: "pasted_text",
    likelyScannedDocument: false,
    processingFlowState: "paste",
    flags: flagsImageOn,
    entitlements: ANONYMOUS_FREE_PAYSLIP_ENTITLEMENTS,
  });
  assert.ok(anonymous.includes("image_upload_disabled"));

  const entitled = derivePayslipDecoderUiStates({
    documentSource: "pasted_text",
    likelyScannedDocument: false,
    processingFlowState: "paste",
    flags: flagsImageOn,
    entitlements: { ...ANONYMOUS_FREE_PAYSLIP_ENTITLEMENTS, canUseImageUpload: true },
  });
  assert.ok(!entitled.includes("image_upload_disabled"));
});
