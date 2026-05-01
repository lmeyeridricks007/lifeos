"use client";

import { BankComparisonMethodology } from "@/src/components/tools/banking/BankComparisonMethodology";
import { getBankingCostMethodologyLines } from "@/src/lib/banking/bankingCostEstimator";

export type BankingCostMethodologyProps = {
  title?: string;
  /** When set, overrides default engine lines (e.g. tests). */
  lines?: readonly string[];
  className?: string;
};

/** Thin wrapper so banking-cost stays a stable import surface; reuses bank tool methodology styling. */
export function BankingCostMethodology({ title = "Methodology & disclaimer", lines, className }: BankingCostMethodologyProps) {
  return <BankComparisonMethodology lines={lines ?? getBankingCostMethodologyLines()} title={title} className={className} />;
}
