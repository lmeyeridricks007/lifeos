/**
 * Deterministic payslip decoder domain model (v2 pipeline).
 * API maps this to legacy `PayslipParseResult` for backward compatibility.
 */

export type DecoderInputMode = "paste" | "pdf";

export type ExtractionQuality = "good" | "partial" | "poor";

export type FieldConfidence = "high" | "medium" | "low";

export type PayslipFieldKey =
  | "gross_salary"
  | "net_salary"
  | "wage_tax"
  /** Loonheffing / loonhef on taxable table (TB) column — distinct from generic loonheffing on some slips. */
  | "wage_tax_tb"
  /** Loonheffing bijzonder tarief (TBB), often shown with a percentage. */
  | "wage_tax_tbb"
  | "holiday_allowance"
  | "holiday_allowance_base"
  | "pension_employee"
  | "pension_taxable_base"
  | "taxable_wage_base"
  | "health_insurance_wage_base"
  | "labour_credit"
  | "general_tax_credit"
  | "tax_free_reimbursement"
  | "deductions_total"
  | "payments_total"
  | "wga_deduction"
  | "ww_deduction"
  | "zw_deduction"
  | "whk_deduction"
  | "social_insurance"
  | "social_fund"
  | "days_worked"
  | "hours_worked"
  | "hourly_wage"
  | "bank_payment"
  | "iban"
  | "bonus"
  | "commission"
  | "thirteenth_month"
  | "overtime_pay"
  | "overtime_hours"
  | "travel_allowance"
  | "reimbursement_total"
  | "taxable_reimbursement"
  | "ruling_correction_taxable"
  | "ruling_correction_special"
  | "ruling_percentage"
  | "expat_allowance"
  | "period_label"
  | "employer_name"
  | "employee_name"
  | "job_title"
  | "start_date"
  | "employee_number"
  | "payroll_number"
  | "payroll_frequency"
  | "tax_table"
  | "cost_center"
  | "department"
  | "contract_type"
  | "processing_date"
  | "period_start"
  | "period_end";

export type MatchSource = "exact_label" | "alias_label" | "regex_label" | "row_inference" | "context_inference";

export type ParsedAmount = {
  raw: string;
  normalized: number | null;
  currency: "EUR";
  sign: "positive" | "negative" | "unknown";
};

export type ExtractedField = {
  key: PayslipFieldKey;
  label: string;
  canonicalLabel: string;
  explanation: string;
  periodAmount?: ParsedAmount;
  ytdAmount?: ParsedAmount;
  taxableAmount?: ParsedAmount;
  /** Withholding rate when the row includes a percentage (e.g. Loonhef TBB 49,50%). */
  ratePercent?: number;
  /** nl / en when inferred from alias language tags. */
  language?: "nl" | "en" | "mixed";
  rawLine: string;
  rawLabelMatch: string;
  source: MatchSource;
  confidence: FieldConfidence;
  notes?: string[];
};

export type PayrollSignal =
  | "has_30_ruling_lines"
  | "has_pension_deduction"
  | "has_holiday_allowance"
  | "has_net_payment"
  | "has_ytd_columns"
  | "has_taxable_wage_base"
  | "has_health_insurance_wage_base"
  | "has_english_labels"
  | "has_hourly_or_time_rows"
  | "has_bonus_or_variable_pay";

export type UnresolvedLineCategory =
  | "metadata"
  | "address_or_identity"
  | "probable_payment_line"
  | "probable_deduction_line"
  | "technical_header"
  | "probable_tax_row"
  | "probable_pension_row"
  | "probable_total_row"
  | "probable_time_row"
  | "probable_ruling_row"
  | "probable_bank_line"
  | "unknown";

export type UnresolvedLine = {
  rawLine: string;
  category: UnresolvedLineCategory;
  probableMeaning?: string;
};

export type PayslipGlossaryEntry = {
  term: string;
  description: string;
  examples?: string[];
  confidence: FieldConfidence;
  mapped: boolean;
};

export type PayslipDecoderDiagnostics = {
  normalizedLines: string[];
  matchedFields: ExtractedField[];
  aliasHits: Array<{ alias: string; key: PayslipFieldKey; line: string }>;
  unresolvedLines: UnresolvedLine[];
  selectedAmountIndexes: Array<{ key: PayslipFieldKey; periodIdx?: number; ytdIdx?: number; taxableIdx?: number }>;
  duplicateFieldKeys?: Array<{ key: PayslipFieldKey; keptLine: string; droppedLine: string }>;
  columnHeaderHints?: string[];
};

/** Full decoder output attached to API response (alongside legacy parse). */
export type PayslipDecoderResult = {
  extractionQuality: ExtractionQuality;
  summaryHeadline: string;
  summaryNotes: string[];
  detectedSignals: PayrollSignal[];
  fields: ExtractedField[];
  unresolvedLines: UnresolvedLine[];
  glossaryTerms: PayslipGlossaryEntry[];
  parserDiagnostics?: PayslipDecoderDiagnostics;
};
