"use client";

import { cn } from "@/lib/cn";
import { HiddenCostWarnings } from "@/src/components/tools/banking/HiddenCostWarnings";

export type TransferWarningsProps = {
  warnings: readonly string[];
  /** Visible title on the warn surface (default matches previous copy). */
  title?: string;
  className?: string;
};

/**
 * Transfer-specific wrapper around the bank tool warning surface — same `InfoBox` + list pattern as {@link HiddenCostWarnings}.
 */
export function TransferWarnings({
  warnings,
  title = "Hidden costs and timing",
  className,
}: TransferWarningsProps) {
  return (
    <HiddenCostWarnings
      warnings={[...warnings]}
      title={title}
      className={cn("border-copilot-primary/15 bg-copilot-bg-soft/80 text-copilot-text-primary", className)}
    />
  );
}
