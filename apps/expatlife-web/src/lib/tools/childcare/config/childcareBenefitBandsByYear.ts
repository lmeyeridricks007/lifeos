/**
 * INCOME → REIMBURSEMENT BRACKETS: PLANNING ESTIMATE ONLY.
 *
 * This is NOT the official kinderopvangtoeslag table. It is a transparent, editable bracket model
 * for expat budgeting. Official entitlement depends on Belastingdienst rules, assets, and updates.
 *
 * firstChild: estimated fraction of the *reimbursable base* (capped hours × capped hourly rate).
 * additionalChild: slightly lower planning fraction for 2nd+ child (rough nod to multi-child reality;
 * tune or set equal to firstChild if you prefer a simpler model).
 */
import type { ChildcareTaxYear } from "@/src/types/tools/childcare";

export const CHILDCARE_BENEFIT_PLANNING_META = {
  isOfficialEntitlement: false,
  label: "Planning estimate — not official toeslag outcome",
  description:
    "Bracketed percentages approximate how much of the reimbursable childcare slice might be covered at different income levels. They are configurable and must be refreshed when you update assumptions.",
} as const;

export type ChildcareIncomeBenefitBandRow = {
  /** Inclusive upper bound of household income (€/year) for this row; use Infinity for top band. */
  maxIncomeEur: number;
  /** Planning % applied to reimbursable base for the first child in the household model. */
  reimbursementFractionFirstChild: number;
  /** Planning % for second and subsequent children (≤ firstChild in all configured years). */
  reimbursementFractionAdditionalChild: number;
};

export const childcareBenefitBandsByYear: Record<ChildcareTaxYear, ChildcareIncomeBenefitBandRow[]> = {
  2026: [
    { maxIncomeEur: 30_000, reimbursementFractionFirstChild: 0.96, reimbursementFractionAdditionalChild: 0.94 },
    { maxIncomeEur: 45_000, reimbursementFractionFirstChild: 0.9, reimbursementFractionAdditionalChild: 0.88 },
    { maxIncomeEur: 60_000, reimbursementFractionFirstChild: 0.82, reimbursementFractionAdditionalChild: 0.8 },
    { maxIncomeEur: 80_000, reimbursementFractionFirstChild: 0.72, reimbursementFractionAdditionalChild: 0.7 },
    { maxIncomeEur: 100_000, reimbursementFractionFirstChild: 0.58, reimbursementFractionAdditionalChild: 0.56 },
    { maxIncomeEur: 130_000, reimbursementFractionFirstChild: 0.42, reimbursementFractionAdditionalChild: 0.4 },
    { maxIncomeEur: 170_000, reimbursementFractionFirstChild: 0.28, reimbursementFractionAdditionalChild: 0.26 },
    { maxIncomeEur: Number.POSITIVE_INFINITY, reimbursementFractionFirstChild: 0.18, reimbursementFractionAdditionalChild: 0.16 },
  ],
  2027: [
    { maxIncomeEur: 32_000, reimbursementFractionFirstChild: 0.96, reimbursementFractionAdditionalChild: 0.94 },
    { maxIncomeEur: 48_000, reimbursementFractionFirstChild: 0.9, reimbursementFractionAdditionalChild: 0.88 },
    { maxIncomeEur: 64_000, reimbursementFractionFirstChild: 0.82, reimbursementFractionAdditionalChild: 0.8 },
    { maxIncomeEur: 85_000, reimbursementFractionFirstChild: 0.72, reimbursementFractionAdditionalChild: 0.7 },
    { maxIncomeEur: 105_000, reimbursementFractionFirstChild: 0.58, reimbursementFractionAdditionalChild: 0.56 },
    { maxIncomeEur: 135_000, reimbursementFractionFirstChild: 0.42, reimbursementFractionAdditionalChild: 0.4 },
    { maxIncomeEur: 175_000, reimbursementFractionFirstChild: 0.28, reimbursementFractionAdditionalChild: 0.26 },
    { maxIncomeEur: Number.POSITIVE_INFINITY, reimbursementFractionFirstChild: 0.18, reimbursementFractionAdditionalChild: 0.16 },
  ],
};
