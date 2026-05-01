"use client";

import { HiddenCostWarnings } from "@/src/components/tools/banking/HiddenCostWarnings";
import type { BankingCostWarning } from "@/src/lib/banking/bankingCostEstimator";

export type BankingCostWarningsProps = {
  warnings: readonly BankingCostWarning[];
  title?: string;
  className?: string;
};

/** Reuses {@link HiddenCostWarnings} — same tool chrome as bank comparison. */
export function BankingCostWarnings({ warnings, title = "Hidden costs to double-check", className }: BankingCostWarningsProps) {
  if (!warnings.length) return null;
  return <HiddenCostWarnings warnings={warnings.map((w) => w.message)} title={title} className={className} />;
}
