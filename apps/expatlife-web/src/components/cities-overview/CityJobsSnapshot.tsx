import Link from "next/link";
import { Building2, ExternalLink } from "lucide-react";
import type { CityJobsRow } from "@/src/lib/cities-overview/types";
import { cn } from "@/lib/cn";

const cardAccents = [
  "border-l-amber-500 bg-gradient-to-br from-amber-50/40 to-white",
  "border-l-sky-500 bg-gradient-to-br from-sky-50/40 to-white",
  "border-l-emerald-500 bg-gradient-to-br from-emerald-50/40 to-white",
  "border-l-violet-500 bg-gradient-to-br from-violet-50/40 to-white",
  "border-l-rose-500 bg-gradient-to-br from-rose-50/40 to-white",
] as const;

const tagStyles = [
  "bg-amber-100/80 text-amber-800 border border-amber-200/60",
  "bg-sky-100/80 text-sky-800 border border-sky-200/60",
  "bg-emerald-100/80 text-emerald-800 border border-emerald-200/60",
  "bg-violet-100/80 text-violet-800 border border-violet-200/60",
  "bg-rose-100/80 text-rose-800 border border-rose-200/60",
  "bg-slate-100 text-slate-700 border border-slate-200/60",
] as const;

export function CityJobsSnapshot({ rows }: { rows: CityJobsRow[] }) {
  if (!rows?.length) return null;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {rows.map((row, cardIndex) => (
        <article
          key={row.cityName}
          className={cn(
            "flex flex-col rounded-xl border border-slate-200 overflow-hidden shadow-sm",
            "border-l-4 transition-shadow hover:shadow-md",
            cardAccents[cardIndex % cardAccents.length]
          )}
        >
          {/* Header: icon + city name */}
          <div className="flex items-start gap-3 px-5 pt-5 pb-2">
            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                cardIndex % 5 === 0 && "bg-amber-100 text-amber-700",
                cardIndex % 5 === 1 && "bg-sky-100 text-sky-700",
                cardIndex % 5 === 2 && "bg-emerald-100 text-emerald-700",
                cardIndex % 5 === 3 && "bg-violet-100 text-violet-700",
                cardIndex % 5 === 4 && "bg-rose-100 text-rose-700"
              )}
            >
              <Building2 className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              {row.comingSoon ? (
                <h3 className="text-lg font-semibold text-slate-800">
                  {row.cityName}
                  <span className="ml-1.5 text-sm font-normal text-slate-500">(guide soon)</span>
                </h3>
              ) : (
                <Link
                  href={row.cityHref}
                  className="text-lg font-semibold text-brand-700 hover:text-brand-800 hover:underline"
                >
                  {row.cityName}
                </Link>
              )}
              {(row.jobsCount != null || row.businessesCount != null) && (
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {row.jobsCount != null && (
                    <span>{row.jobsCount.toLocaleString()} jobs</span>
                  )}
                  {row.jobsCount != null && row.businessesCount != null && (
                    <span className="text-slate-400 mx-1">·</span>
                  )}
                  {row.businessesCount != null && (
                    <span>{row.businessesCount.toLocaleString()} companies</span>
                  )}
                </p>
              )}
            </div>
          </div>

          {/* Key sectors */}
          <div className="px-5 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-2">
              Key sectors
            </p>
            <div className="flex flex-wrap gap-2">
              {row.sectorHighlights.map((s, i) => (
                <span
                  key={i}
                  className={cn(
                    "rounded-md px-2.5 py-1 text-xs font-medium border",
                    tagStyles[i % tagStyles.length]
                  )}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Source + CTA */}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/80 bg-white/60 px-5 py-3">
            <span className="text-xs text-slate-500">{row.sourceLabel}</span>
            {row.sourceHref && (
              <a
                href={row.sourceHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
              >
                Official data
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
