import type { MoneyTaxReturnStartCardConfig } from "./moneyTaxReturnTypes";

/** “What a Dutch tax return does” — high-level outcomes separate from general tax-basics vocabulary. */
export const moneyTaxReturnStartCards: readonly MoneyTaxReturnStartCardConfig[] = [
  {
    id: "reconcile",
    title: "It reconciles your tax year",
    body: "One place for many income-tax lines for the full year — not the same as any single payslip.",
  },
  {
    id: "adjust-withholding",
    title: "It may adjust what payroll withheld",
    body: "Employers withhold on what they knew during the year. Year-end facts can still change deductions, credits, or partner results.",
  },
  {
    id: "more-than-salary",
    title: "It can include more than salary",
    body: "Assets, other income, and international lines can appear when they apply — many people do not touch every line.",
  },
  {
    id: "expat-complexity",
    title: "It can be more complex for expats",
    body: "Moves, foreign accounts, or two countries in the same year reward a simple document list and official reading.",
  },
];
