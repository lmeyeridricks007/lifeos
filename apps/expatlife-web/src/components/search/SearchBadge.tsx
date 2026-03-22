"use client";

import { cn } from "@/lib/cn";
import type { SearchPageType } from "@/src/lib/search/searchDocument";

const STYLES: Record<SearchPageType, string> = {
  guide: "bg-emerald-50 text-emerald-900 ring-emerald-200/60",
  service: "bg-sky-50 text-sky-900 ring-sky-200/60",
  city: "bg-violet-50 text-violet-900 ring-violet-200/60",
  trust: "bg-slate-100 text-slate-700 ring-slate-200/80",
  tool: "bg-amber-50 text-amber-900 ring-amber-200/60",
  hub: "bg-brand-50 text-brand-800 ring-brand-200/60",
  concept: "bg-cyan-50 text-cyan-900 ring-cyan-200/60",
  visa: "bg-indigo-50 text-indigo-900 ring-indigo-200/60",
};

export function SearchBadge({
  pageType,
  label,
  className,
}: {
  pageType: SearchPageType;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset",
        STYLES[pageType],
        className
      )}
    >
      <span className="truncate">{label}</span>
    </span>
  );
}
