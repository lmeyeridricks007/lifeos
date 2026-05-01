"use client";

import { BankFeePatternComparison, type BankFeePatternComparisonProps } from "@/components/banking/BankFeePatternComparison";
import type { TraditionalDigitalComparisonRow } from "@/src/data/banking/traditionalDigitalComparison";

export type { TraditionalDigitalComparisonRow };

/**
 * Traditional vs digital vs hybrid comparison — delegates to {@link BankFeePatternComparison}.
 */
export function TraditionalDigitalComparisonTable({
  rows,
  className,
  tableCaption,
  columnLabels,
}: {
  rows: readonly TraditionalDigitalComparisonRow[];
  className?: string;
  tableCaption?: BankFeePatternComparisonProps["tableCaption"];
  columnLabels?: BankFeePatternComparisonProps["columnLabels"];
}) {
  return <BankFeePatternComparison rows={rows} className={className} tableCaption={tableCaption} columnLabels={columnLabels} />;
}
