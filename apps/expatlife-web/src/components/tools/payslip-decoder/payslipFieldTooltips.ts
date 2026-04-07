/**
 * Short tooltip copy for payslip decoder — plain English, cautious wording.
 */
import type { PayslipFieldKey } from "@/src/lib/tools/payslip/decoder/types";

export const PAYSLIP_FIELD_TOOLTIPS: Partial<Record<PayslipFieldKey, string>> = {
  gross_salary:
    "Gross pay for this period before most employee deductions. Wording differs by payroll software; it may not match every tax base on the slip.",
  net_salary:
    "Indicative net pay for the period as printed. Compare with your bank transfer if you need certainty — some slips show multiple net-like lines.",
  wage_tax:
    "Payroll withholding for wage tax (loonheffing). This is not your final annual tax outcome; filing can still change the balance.",
  wage_tax_tb:
    "Withholding tied to the ordinary taxable table (TB) column when payroll splits TB vs bijzonder (TBB) — common on detailed Dutch slips.",
  wage_tax_tbb:
    "Withholding on the special (bijzonder / TBB) tariff column; often shown with a percentage. Period vs YTD follow the slip’s columns.",
  general_tax_credit:
    "Algemene heffingskorting (general tax credit) — separate from arbeidskorting on some exports. Layout varies by payroll software.",
  holiday_allowance:
    "Holiday allowance (vakantiegeld). Often ~8% accrued; payout timing depends on your employer and contract.",
  holiday_allowance_base:
    "Base used to calculate or accrue holiday allowance. Shown as period and sometimes year-to-date on detailed slips.",
  pension_employee:
    "Employee pension premium when a scheme applies. Employer lines may be shown separately.",
  pension_taxable_base:
    "Pension amount tied to the payroll taxable table (TBB) column — not always the same as the cash premium line.",
  taxable_wage_base:
    "A taxable wage base used in payroll (e.g. heffingsloon). It can differ from bruto because items are added, excluded, or corrected.",
  health_insurance_wage_base:
    "Wage base used for Dutch health insurance (Zvw) employee contributions in payroll — can differ from gross salary.",
  labour_credit:
    "Arbeidskorting reduces wage tax for many employees. Layout may show it as an offset or separate row.",
  tax_free_reimbursement:
    "Tax-free reimbursement. On some slips this may sit near 30% ruling-related components; exact coding is employer-specific.",
  deductions_total:
    "Usually a subtotal of deductions. Use detailed rows to see pension, tax, and other components.",
  payments_total:
    "Usually a subtotal of payment-type lines — exact meaning depends on your payroll export.",
  wga_deduction: "Contribution line related to work-capacity insurance (WGA) in payroll.",
  social_fund: "Sector or employer social-fund line when present.",
  ruling_correction_taxable:
    "Looks like a 30% ruling-related correction on the taxable wage base (TB). Does not by itself confirm legal eligibility.",
  ruling_correction_special:
    "Looks like a 30% ruling-related correction on the special / bijzonder column. Employer payroll rules vary.",
  hours_worked: "Hours recorded for the pay period (and sometimes YTD) — check whether normal vs overtime is split elsewhere.",
  days_worked: "Payroll days in the period (loontijdvakdagen) — not always the same as calendar days worked.",
  hourly_wage: "Contract or payroll hourly rate when shown; gross pay may be hours × rate plus premiums.",
};
