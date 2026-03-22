import Link from "next/link";
import type { CityComparisonRow } from "@/src/lib/cities-overview/types";
import { cn } from "@/lib/cn";
import { MapPin, ArrowRight } from "lucide-react";

export function CityComparisonTable({ rows }: { rows: CityComparisonRow[] }) {
  if (!rows?.length) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      {rows.map((row) => (
        <article
          key={row.slug}
          className={cn(
            "flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden",
            "hover:border-slate-300 hover:shadow-md transition-shadow"
          )}
        >
          {/* Card header: city name + guide CTA */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/50 px-5 py-4">
            <h3 className="text-lg font-semibold text-slate-900">{row.name}</h3>
            {row.comingSoon ? (
              <span className="rounded-full bg-slate-200/80 px-3 py-1 text-xs font-medium text-slate-600">
                Soon
              </span>
            ) : (
              <Link
                href={row.detailHref}
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800"
              >
                Guide
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            )}
          </div>

          {/* Card body: labeled attributes */}
          <dl className="flex flex-col px-5 py-4 gap-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Best for</dt>
              <dd className="mt-1 text-sm text-slate-800 leading-snug">{row.bestFor}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Typical vibe</dt>
              <dd className="mt-1 text-sm text-slate-700 leading-snug">{row.vibe}</dd>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Cost</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">{row.costBand}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Housing pressure</dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">{row.housingPressure}</dd>
              </div>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Commute</dt>
              <dd className="mt-1 text-sm text-slate-700 leading-snug">{row.commuteFit}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Main sectors</dt>
              <dd className="mt-1 text-sm text-slate-700">{row.sectors.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Newcomer support</dt>
              <dd className="mt-1 text-sm">
                {row.newcomerSupportHref ? (
                  <a
                    href={row.newcomerSupportHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-brand-700 hover:text-brand-800"
                  >
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {row.newcomerSupportName}
                  </a>
                ) : (
                  <span className="text-slate-700">{row.newcomerSupportName}</span>
                )}
              </dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
