"use client";

import { cn } from "@/lib/cn";

type Props = {
  show: boolean;
  isClose: boolean;
  flagDefaults: boolean;
  className?: string;
};

export function EmploymentAdvancedRefinementPrompt({ show, isClose, flagDefaults, className }: Props) {
  if (!show) return null;
  return (
    <div
      className={cn(
        "rounded-xl border border-sky-300/60 bg-sky-50/90 p-4 text-sm text-sky-950 shadow-sm ring-1 ring-sky-200/50 dark:border-sky-500/30 dark:bg-sky-950/35 dark:text-sky-100",
        className
      )}
      role="status"
    >
      <p className="font-semibold text-copilot-text-primary dark:text-sky-50">Refine advanced assumptions for a sharper read</p>
      <p className="mt-2 leading-relaxed text-copilot-text-secondary dark:text-sky-100/90">
        {isClose
          ? "Your top scenarios are close on overall score or indicative net — small changes to fees, utilization, downtime, or reserves can reorder the ranking."
          : "Contractor or ZZP-style paths are in play with default-ish utilization or umbrella settings — make those numbers match your real offer."}
      </p>
      <p className="mt-2 text-xs font-medium text-copilot-text-primary dark:text-sky-50">
        Likely high-impact fields: utilization, downtime, umbrella % and fixed fee, insurance, pension reserve, contract gap risk,
        delayed payment reserve.
      </p>
      {flagDefaults && !isClose ? (
        <p className="mt-2 text-xs text-copilot-text-secondary dark:text-sky-100/85">
          Tip: you are still on common defaults for billable % or umbrella fees — adjust if your quote differs.
        </p>
      ) : null}
    </div>
  );
}
