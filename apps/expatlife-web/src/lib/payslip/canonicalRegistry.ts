/**
 * Canonical payroll field registry: priorities, categories, row-shape hints.
 * **Plain aliases and regex matchers** are loaded from `payrollAliasSeed.ts` (single extension point).
 */
import type { PayslipFieldKey } from "@/src/lib/tools/payslip/decoder/types";
import { payrollFieldAliases, payrollFieldRegexes } from "@/src/lib/payslip/payrollAliasSeed";

export type RowShapeHint =
  | "default"
  | "three_col_gross"
  | "three_col_correction"
  | "tbb_rate"
  | "pension_three"
  | "holiday_triple"
  | "multi_total";

export type CanonicalPayrollTerm = {
  key: PayslipFieldKey;
  primaryLabel: string;
  aliases: string[];
  rowShapeHint?: RowShapeHint;
  languages?: ("nl" | "en")[];
  regexPatterns?: RegExp[];
  category:
    | "earnings"
    | "tax"
    | "pension"
    | "allowance"
    | "base"
    | "totals"
    | "correction"
    | "metadata"
    | "social"
    | "time"
    | "other";
  explanation: string;
  oftenPeriodYtd: boolean;
  priority: number;
};

/** Optional regex column — omitted when the seed has no patterns for this key. */
function seedRegex(key: PayslipFieldKey): RegExp[] | undefined {
  const r = payrollFieldRegexes(key);
  return r.length ? r : undefined;
}

function term(
  partial: Omit<CanonicalPayrollTerm, "aliases" | "regexPatterns"> & { key: PayslipFieldKey }
): CanonicalPayrollTerm {
  const aliases = payrollFieldAliases(partial.key);
  const regexPatterns = seedRegex(partial.key);
  return {
    ...partial,
    aliases,
    ...(regexPatterns ? { regexPatterns } : {}),
  };
}

export const CANONICAL_PAYROLL_TERMS: CanonicalPayrollTerm[] = [
  term({
    key: "ruling_correction_taxable",
    primaryLabel: "30% ruling correction (taxable base)",
    rowShapeHint: "three_col_correction",
    languages: ["nl", "en"],
    category: "correction",
    explanation:
      "Payroll correction lines often tied to 30% ruling taxable base (TB). They adjust how payroll reports taxable wage — not legal eligibility by themselves.",
    oftenPeriodYtd: true,
    priority: 3,
  }),
  term({
    key: "ruling_correction_special",
    primaryLabel: "30% ruling correction (special / bijzonder)",
    rowShapeHint: "three_col_correction",
    languages: ["nl", "en"],
    category: "correction",
    explanation: "Correction on the special withholding (bijzonder / TBB) column — employer payroll setup varies.",
    oftenPeriodYtd: true,
    priority: 3,
  }),
  term({
    key: "ruling_percentage",
    primaryLabel: "30% ruling indicator",
    languages: ["nl", "en"],
    category: "correction",
    explanation: "Text indicator that the slip references the 30% facility — confirm facts with your employer.",
    oftenPeriodYtd: false,
    priority: 4,
  }),
  term({
    key: "expat_allowance",
    primaryLabel: "Expat / extraterritorial allowance",
    languages: ["en", "nl"],
    category: "allowance",
    explanation: "Labels sometimes used near 30% ruling or cost components — exact meaning is employer-specific.",
    oftenPeriodYtd: true,
    priority: 6,
  }),
  term({
    key: "tax_free_reimbursement",
    primaryLabel: "Tax-free reimbursement",
    languages: ["nl", "en"],
    category: "earnings",
    explanation:
      "Often a tax-free reimbursement. May appear near 30% ruling components on some payroll exports — verify with payroll.",
    oftenPeriodYtd: true,
    priority: 7,
  }),
  term({
    key: "holiday_allowance_base",
    primaryLabel: "Holiday allowance base",
    languages: ["nl", "en"],
    category: "base",
    explanation: "Base used to calculate or accrue holiday allowance — often period and YTD columns.",
    oftenPeriodYtd: true,
    priority: 10,
  }),
  term({
    key: "pension_taxable_base",
    primaryLabel: "Pension (taxable table / TBB column)",
    rowShapeHint: "pension_three",
    languages: ["nl", "en"],
    category: "pension",
    explanation: "Pension amount tied to the payroll TBB column — not always the same as the cash employee premium line.",
    oftenPeriodYtd: true,
    priority: 11,
  }),
  term({
    key: "wage_tax_tbb",
    primaryLabel: "Wage tax (bijzonder / TBB)",
    rowShapeHint: "tbb_rate",
    languages: ["nl", "en"],
    category: "tax",
    explanation: "Withholding on the special (bijzonder) tariff column — often shown with a percentage.",
    oftenPeriodYtd: true,
    priority: 12,
  }),
  term({
    key: "wage_tax_tb",
    primaryLabel: "Wage tax (taxable table / TB)",
    languages: ["nl", "en"],
    category: "tax",
    explanation: "Withholding tied to the ordinary taxable table (TB) column on detailed slips.",
    oftenPeriodYtd: true,
    priority: 13,
  }),
  term({
    key: "pension_employee",
    primaryLabel: "Employee pension contribution",
    rowShapeHint: "pension_three",
    languages: ["nl", "en"],
    category: "pension",
    explanation: "Employee pension premium when a scheme applies — employer lines may be separate.",
    oftenPeriodYtd: true,
    priority: 14,
  }),
  term({
    key: "wage_tax",
    primaryLabel: "Wage tax / loonheffing",
    languages: ["nl", "en"],
    category: "tax",
    explanation: "Payroll withholding (loonheffing). Annual tax position can still differ after filing.",
    oftenPeriodYtd: true,
    priority: 16,
  }),
  term({
    key: "general_tax_credit",
    primaryLabel: "General tax credit (algemene heffingskorting)",
    languages: ["nl", "en"],
    category: "tax",
    explanation: "Algemene heffingskorting — distinct from arbeidskorting on some slips.",
    oftenPeriodYtd: true,
    priority: 17,
  }),
  term({
    key: "health_insurance_wage_base",
    primaryLabel: "Zvw wage (Loon ZVW)",
    languages: ["nl", "en"],
    category: "tax",
    explanation: "Wage base for Dutch employee Zvw contribution in payroll — can differ from gross salary.",
    oftenPeriodYtd: true,
    priority: 18,
  }),
  term({
    key: "taxable_wage_base",
    primaryLabel: "Taxable wage (heffingsloon)",
    languages: ["nl", "en"],
    category: "tax",
    explanation: "Taxable wage base in payroll — may differ from bruto through corrections and exclusions.",
    oftenPeriodYtd: true,
    priority: 19,
  }),
  term({
    key: "labour_credit",
    primaryLabel: "Labour tax credit (arbeidskorting)",
    languages: ["nl", "en"],
    category: "tax",
    explanation: "Arbeidskorting reduces wage tax for many employees — layout varies by vendor.",
    oftenPeriodYtd: true,
    priority: 20,
  }),
  term({
    key: "ww_deduction",
    primaryLabel: "WW (unemployment) deduction",
    languages: ["nl", "en"],
    category: "social",
    explanation: "Employee-side unemployment insurance line when shown on the slip.",
    oftenPeriodYtd: true,
    priority: 21,
  }),
  term({
    key: "zw_deduction",
    primaryLabel: "ZW (sickness) deduction",
    languages: ["nl", "en"],
    category: "social",
    explanation: "Sickness insurance component when itemized.",
    oftenPeriodYtd: true,
    priority: 21,
  }),
  term({
    key: "whk_deduction",
    primaryLabel: "WHK / sector fund",
    languages: ["nl", "en"],
    category: "social",
    explanation: "Sector or WHK-related payroll line when present.",
    oftenPeriodYtd: true,
    priority: 22,
  }),
  term({
    key: "wga_deduction",
    primaryLabel: "WGA / disability fund deduction",
    languages: ["nl", "en"],
    category: "social",
    explanation: "Work-capacity (WGA/WIA-related) contribution when shown.",
    oftenPeriodYtd: true,
    priority: 23,
  }),
  term({
    key: "social_fund",
    primaryLabel: "Social fund",
    languages: ["nl", "en"],
    category: "other",
    explanation: "Sector or employer social-fund line.",
    oftenPeriodYtd: true,
    priority: 24,
  }),
  term({
    key: "social_insurance",
    primaryLabel: "Social insurance (generic)",
    languages: ["nl", "en"],
    category: "social",
    explanation: "Generic social insurance wording — detailed components may be on other rows.",
    oftenPeriodYtd: true,
    priority: 25,
  }),
  term({
    key: "deductions_total",
    primaryLabel: "Total deductions",
    rowShapeHint: "multi_total",
    languages: ["nl", "en"],
    category: "totals",
    explanation: "Subtotal of deductions — use detail rows for components.",
    oftenPeriodYtd: true,
    priority: 26,
  }),
  term({
    key: "payments_total",
    primaryLabel: "Total payments / earnings",
    rowShapeHint: "multi_total",
    languages: ["nl", "en"],
    category: "totals",
    explanation: "Subtotal of payment-type lines — meaning depends on payroll software.",
    oftenPeriodYtd: true,
    priority: 27,
  }),
  term({
    key: "holiday_allowance",
    primaryLabel: "Holiday allowance",
    rowShapeHint: "holiday_triple",
    languages: ["nl", "en"],
    category: "allowance",
    explanation: "Holiday allowance — often ~8%; payout timing is policy-specific.",
    oftenPeriodYtd: true,
    priority: 28,
  }),
  term({
    key: "bonus",
    primaryLabel: "Bonus",
    languages: ["nl", "en"],
    category: "earnings",
    explanation: "Variable bonus line when labeled.",
    oftenPeriodYtd: true,
    priority: 29,
  }),
  term({
    key: "commission",
    primaryLabel: "Commission",
    languages: ["nl", "en"],
    category: "earnings",
    explanation: "Commission or sales-related pay.",
    oftenPeriodYtd: true,
    priority: 29,
  }),
  term({
    key: "thirteenth_month",
    primaryLabel: "13th month / year-end",
    languages: ["nl", "en"],
    category: "earnings",
    explanation: "Periodic or annual extra month payment when applicable.",
    oftenPeriodYtd: true,
    priority: 29,
  }),
  term({
    key: "overtime_pay",
    primaryLabel: "Overtime pay",
    languages: ["nl", "en"],
    category: "earnings",
    explanation: "Overtime compensation when itemized.",
    oftenPeriodYtd: true,
    priority: 29,
  }),
  term({
    key: "overtime_hours",
    primaryLabel: "Overtime hours",
    languages: ["nl", "en"],
    category: "time",
    explanation: "Overtime hours when shown as a quantity row.",
    oftenPeriodYtd: true,
    priority: 30,
  }),
  term({
    key: "hourly_wage",
    primaryLabel: "Hourly wage / rate",
    languages: ["nl", "en"],
    category: "earnings",
    explanation: "Hourly rate on hourly contracts.",
    oftenPeriodYtd: false,
    priority: 31,
  }),
  term({
    key: "hours_worked",
    primaryLabel: "Hours worked",
    languages: ["nl", "en"],
    category: "time",
    explanation: "Hours in the pay period.",
    oftenPeriodYtd: true,
    priority: 32,
  }),
  term({
    key: "travel_allowance",
    primaryLabel: "Travel allowance",
    languages: ["nl", "en"],
    category: "earnings",
    explanation: "Travel or commute reimbursement component.",
    oftenPeriodYtd: true,
    priority: 33,
  }),
  term({
    key: "gross_salary",
    primaryLabel: "Gross salary",
    rowShapeHint: "three_col_gross",
    languages: ["nl", "en"],
    category: "earnings",
    explanation: "Payroll gross for the period — may differ from every tax base line.",
    oftenPeriodYtd: true,
    priority: 34,
  }),
  term({
    key: "net_salary",
    primaryLabel: "Net salary",
    languages: ["nl", "en"],
    category: "earnings",
    explanation: "Indicative net for the period — compare with your bank transfer if unsure.",
    oftenPeriodYtd: true,
    priority: 34,
  }),
  term({
    key: "days_worked",
    primaryLabel: "Days worked",
    languages: ["nl", "en"],
    category: "time",
    explanation: "Payroll days in the period — not always calendar days worked.",
    oftenPeriodYtd: true,
    priority: 35,
  }),
  term({
    key: "iban",
    primaryLabel: "IBAN",
    languages: ["nl", "en"],
    category: "metadata",
    explanation: "Bank account on the payout line when present.",
    oftenPeriodYtd: false,
    priority: 36,
  }),
  term({
    key: "employer_name",
    primaryLabel: "Employer",
    languages: ["nl", "en"],
    category: "metadata",
    explanation: "Employer name as printed.",
    oftenPeriodYtd: false,
    priority: 40,
  }),
  term({
    key: "employee_name",
    primaryLabel: "Employee",
    languages: ["nl", "en"],
    category: "metadata",
    explanation: "Employee name — Dutch prefixes Dhr./Mw. common.",
    oftenPeriodYtd: false,
    priority: 41,
  }),
  term({
    key: "payroll_frequency",
    primaryLabel: "Payroll frequency",
    languages: ["nl", "en"],
    category: "metadata",
    explanation: "Pay cycle hint when printed on the slip.",
    oftenPeriodYtd: false,
    priority: 42,
  }),
];

/** Sort aliases longest-first for greedy matching. */
export function sortedAliasesForTerm(t: CanonicalPayrollTerm): string[] {
  return [...t.aliases].sort((a, b) => b.length - a.length);
}
