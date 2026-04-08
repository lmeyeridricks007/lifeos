import { getDefaultContractEntitlements } from "@/src/lib/tools/contract-scanner/entitlements";
import type { InputMode } from "@/src/lib/tools/contract-scanner/types";

/**
 * Mirrors `ContractEntitlements.imageUploadTabEnabled` (free tier: false).
 * When entitlements come from auth, derive tab visibility from the same flag server-side or via props.
 */
export const CONTRACT_SCANNER_IMAGE_UPLOAD_TAB_ENABLED = getDefaultContractEntitlements().imageUploadTabEnabled;

export type ContractScannerInputTabDef =
  | {
      kind: "input_mode";
      mode: InputMode;
      label: string;
      enabled: boolean;
    }
  | {
      kind: "future_image_ocr";
      label: string;
      enabled: boolean;
      /** Future `InputMode` value when implemented. */
      futureMode: "image_ocr";
    };

/**
 * Single source for tab order and labels. Free tier: first three entries only (all `input_mode`).
 */
export const CONTRACT_SCANNER_INPUT_TAB_DEFINITIONS: ContractScannerInputTabDef[] = [
  { kind: "input_mode", mode: "paste", label: "Paste text", enabled: true },
  { kind: "input_mode", mode: "pdf", label: "Upload PDF", enabled: true },
  { kind: "input_mode", mode: "checklist", label: "Manual checklist", enabled: true },
  {
    kind: "future_image_ocr",
    label: "Image upload (OCR)",
    enabled: CONTRACT_SCANNER_IMAGE_UPLOAD_TAB_ENABLED,
    futureMode: "image_ocr",
  },
];

/** Tabs that should render in the current product. */
export function getVisibleContractScannerInputTabs(): Extract<ContractScannerInputTabDef, { kind: "input_mode" }>[] {
  return CONTRACT_SCANNER_INPUT_TAB_DEFINITIONS.filter(
    (t): t is Extract<ContractScannerInputTabDef, { kind: "input_mode" }> =>
      t.kind === "input_mode" && t.enabled === true
  );
}
