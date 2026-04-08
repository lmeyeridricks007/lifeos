import type { MoneyBreakdownLine } from "./types";

/** Sums negative planning lines (fees, tax, haircuts) — final “net” line is positive and excluded by the sign check. */
export function sumAnnualPlanningDeductions(lines: readonly MoneyBreakdownLine[]): number {
  return lines.reduce((sum, line) => {
    if (line.amountAnnual >= 0) return sum;
    return sum + Math.abs(line.amountAnnual);
  }, 0);
}
