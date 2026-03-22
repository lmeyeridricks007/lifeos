"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

export type MovingChecklistSummaryProps = {
  title?: string;
  summary: string;
  className?: string;
};

export function MovingChecklistSummary({
  title = "Your personalized moving checklist",
  summary,
  className,
}: MovingChecklistSummaryProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6",
        className
      )}
    >
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-50 p-3">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
        <p className="text-sm text-slate-700">{summary}</p>
      </div>
    </div>
  );
}
