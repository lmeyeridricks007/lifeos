"use client";

import { BankFeePatternComparison } from "@/components/banking/BankFeePatternComparison";
import type { TraditionalDigitalComparisonRow } from "@/src/data/banking/traditionalDigitalComparison";

export type { TraditionalDigitalComparisonRow };

/**
 * Traditional vs digital vs hybrid comparison — delegates to {@link BankFeePatternComparison}.
 */
export function TraditionalDigitalComparisonTable({
  rows,
  className,
}: {
  rows: readonly TraditionalDigitalComparisonRow[];
  className?: string;
}) {
  return <BankFeePatternComparison rows={rows} className={className} />;
}
