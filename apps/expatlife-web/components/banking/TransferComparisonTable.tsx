"use client";

import {
  BankFeePatternComparison,
  type BankFeePatternComparisonProps,
} from "@/components/banking/BankFeePatternComparison";
import { cn } from "@/lib/cn";

export type TransferComparisonTableProps = BankFeePatternComparisonProps;

/**
 * International transfer three-column comparison — delegates to {@link BankFeePatternComparison}
 * (copilot table + mobile accordion, same tokens as other banking guides).
 */
export function TransferComparisonTable({ className, ...rest }: TransferComparisonTableProps) {
  return <BankFeePatternComparison {...rest} className={cn("min-w-0 max-w-full", className)} />;
}
