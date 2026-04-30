"use client";

import { useMemo } from "react";
import { banks, type Bank } from "@/src/data/banking/banks";
import {
  bankingTypeComparisonRows,
  bankingTypeComparisonRowsToTableRows,
  type BankingTypeComparisonRow,
} from "@/src/data/banking/bankingTraditionalDigitalContent";
import { buildTraditionalDigitalComparisonRowsFromBanks } from "@/src/data/banking/traditionalDigitalComparison";
import { TraditionalDigitalComparisonTable } from "@/components/banking/TraditionalDigitalComparisonTable";
import { cn } from "@/lib/cn";

export type BankTypeComparisonProps = {
  className?: string;
  /**
   * **editorial** — canonical `bankingTypeComparisonRows` (explanations + values synced from `banks.ts`).
   * **banks** — derive cells only from {@link Bank} rows (no per-row explanations).
   */
  source?: "editorial" | "banks";
  /** Override rows when `source` is `editorial` (e.g. future Bank Comparison Tool). */
  editorialRows?: readonly BankingTypeComparisonRow[];
  /** Used only when `source` is `banks`. */
  banks?: readonly Bank[];
};

/**
 * Traditional vs digital vs hybrid comparison — **editorial** preset by default for reuse across money guides.
 */
export function BankTypeComparison({
  className,
  source = "editorial",
  editorialRows,
  banks: banksProp,
}: BankTypeComparisonProps) {
  const rows = useMemo(() => {
    if (source === "banks") {
      const list = banksProp ?? banks;
      return buildTraditionalDigitalComparisonRowsFromBanks(list);
    }
    return bankingTypeComparisonRowsToTableRows(editorialRows ?? bankingTypeComparisonRows);
  }, [source, editorialRows, banksProp]);
  return <TraditionalDigitalComparisonTable rows={rows} className={cn(className)} />;
}
