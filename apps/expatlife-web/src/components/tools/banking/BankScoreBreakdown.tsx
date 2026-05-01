"use client";

import { useState, type SyntheticEvent } from "react";
import { SCORE_DIMENSIONS, type BankComparisonProviderResult, type ScoreDimension } from "@/src/lib/tools/bank-comparison/types";
import { cn } from "@/lib/cn";
import { DIM_LABELS } from "./bankComparisonUi";

export type BankScoreBreakdownProps = {
  breakdown: BankComparisonProviderResult["weightedBreakdown"];
  className?: string;
  /** When false, render as static list (no disclosure). */
  collapsible?: boolean;
  defaultOpen?: boolean;
  summaryClassName?: string;
};

function ScoreRow({ dim, breakdown }: { dim: ScoreDimension; breakdown: BankComparisonProviderResult["weightedBreakdown"] }) {
  const row = breakdown[dim];
  const pct = Math.min(100, Math.max(0, (row.score / 5) * 100));
  return (
    <li className="min-w-0 space-y-1">
      <div className="flex min-w-0 flex-col gap-0.5 text-xs text-copilot-text-secondary sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-2">
        <span className="min-w-0 break-words text-copilot-text-primary">{DIM_LABELS[dim]}</span>
        <span className="shrink-0 tabular-nums sm:text-right">
          {row.score}/5 · counted for {Math.round(row.weight * 100)}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-copilot-bg-soft" role="presentation" aria-hidden>
        <div
          className="h-full rounded-full bg-gradient-to-r from-copilot-primary/70 to-copilot-accent/80 transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </li>
  );
}

export function BankScoreBreakdown({
  breakdown,
  className,
  collapsible = true,
  defaultOpen = false,
  summaryClassName,
}: BankScoreBreakdownProps) {
  const [open, setOpen] = useState(defaultOpen);

  const list = (
    <ul className={cn("space-y-3", className)}>
      {SCORE_DIMENSIONS.map((dim) => (
        <ScoreRow key={dim} dim={dim} breakdown={breakdown} />
      ))}
    </ul>
  );

  if (!collapsible) {
    return (
      <div>
        <p className="text-sm font-normal text-copilot-text-primary">How the score breaks down</p>
        {list}
      </div>
    );
  }

  const onToggle = (e: SyntheticEvent<HTMLDetailsElement>) => {
    setOpen(e.currentTarget.open);
  };

  return (
    <details className="border-t border-copilot-primary/10 pt-3" open={open} onToggle={onToggle}>
      <summary
        aria-expanded={open}
        className={cn(
          "cursor-pointer rounded-lg text-sm font-normal text-copilot-text-primary outline-none focus-visible:ring-2 focus-visible:ring-copilot-primary/30 focus-visible:ring-offset-2",
          summaryClassName,
        )}
      >
        How the score breaks down
      </summary>
      {list}
    </details>
  );
}
