import type { DocumentInputSource, PayslipProcessingFlowState } from "@/src/lib/tools/payslip/types";

export function deriveProcessingFlowState(params: {
  documentSource: DocumentInputSource;
  likelyScannedDocument: boolean;
}): PayslipProcessingFlowState {
  if (params.documentSource === "pasted_text") return "paste";
  if (params.likelyScannedDocument) return "pdf_likely_scanned";
  if (params.documentSource === "pdf_text") return "pdf_text_ok";
  if (params.documentSource === "pdf_scanned") return "ocr_required";
  if (params.documentSource === "image_ocr") return "image_upload_premium";
  return "pdf_text_ok";
}
