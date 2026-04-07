/** Payroll-related Dutch (and common export) keywords for extraction quality heuristics. */
export const PAYROLL_KEYWORDS = [
  "bruto",
  "netto",
  "loon",
  "loonheffing",
  "loonbelasting",
  "vakantiegeld",
  "vakantietoeslag",
  "pensioen",
  "premies",
  "sv loon",
  "sv-loon",
  "belastbaar loon",
  "uitbetaald",
  "netto uitbetaling",
  "salaris",
  "werkgeversbijdrage",
  "werknemersbijdrage",
  "uurloon",
  "periode",
  "loonstrook",
  "loonstaat",
  "inhouding",
  "vergoeding",
  "toeslag",
  "reservering",
  "ytd",
  "gross",
  "net pay",
  "taxable",
  "withholding",
] as const;

/** Default max upload size (bytes). Override with PAYSLIP_DECODER_MAX_BYTES. */
export const PAYSLIP_DEFAULT_MAX_BYTES = 10 * 1024 * 1024;

/** Max pasted / extracted text length to bound CPU and payloads. */
export const PAYSLIP_MAX_TEXT_CHARS = 500_000;

export function getPayslipMaxUploadBytes(): number {
  const raw = process.env.PAYSLIP_DECODER_MAX_BYTES;
  if (!raw) return PAYSLIP_DEFAULT_MAX_BYTES;
  const n = parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? Math.min(n, 20 * 1024 * 1024) : PAYSLIP_DEFAULT_MAX_BYTES;
}

export const SCANNED_PDF_HINT =
  "This file appears to be scanned or image-based. Free mode currently supports text-based PDFs only. You can paste the text manually if available.";
