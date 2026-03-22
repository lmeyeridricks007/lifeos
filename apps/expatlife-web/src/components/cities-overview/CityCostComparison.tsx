import Link from "next/link";
import type { CityCostRow } from "@/src/lib/cities-overview/types";
import { cn } from "@/lib/cn";
import { ArrowRight, Info } from "lucide-react";

/** Badge styles for cost level (higher = more expensive). */
const costLevelStyles: Record<string, string> = {
  High: "bg-amber-100 text-amber-800 border-amber-200",
  "Medium–high": "bg-sky-50 text-sky-800 border-sky-200",
  Medium: "bg-emerald-50 text-emerald-800 border-emerald-200",
};

function CostLevelBadge({ band }: { band: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        costLevelStyles[band] ?? "bg-slate-100 text-slate-700 border-slate-200"
      )}
      title="Higher = more expensive"
    >
      {band} cost
    </span>
  );
}

export function CityCostComparison({ rows }: { rows: CityCostRow[] }) {
  if (!rows?.length) return null;

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {rows.map((row) => (
          <article
            key={row.cityName}
            className={cn(
              "flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden",
              "hover:border-slate-300 hover:shadow-md transition-shadow"
            )}
          >
            {/* Card header: city name + cost level */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/50 px-5 py-4">
              <h3 className="text-lg font-semibold text-slate-900">
                {row.comingSoon ? (
                  <>
                    {row.cityName}
                    <span className="ml-1.5 text-sm font-normal text-slate-500">(soon)</span>
                  </>
                ) : (
                  <Link href={row.cityHref} className="text-brand-700 hover:text-brand-800">
                    {row.cityName}
                  </Link>
                )}
              </h3>
              <CostLevelBadge band={row.affordabilityBand} />
            </div>

            {/* Card body: cost rows */}
            <dl className="flex flex-col px-5 py-4 gap-3">
              <div className="flex justify-between gap-4">
                <dt className="text-sm text-slate-500 shrink-0">1-bed rent</dt>
                <dd className="text-sm font-medium text-slate-900 text-right">{row.rent1Bed}</dd>
              </div>
              {row.rentFamily != null && (
                <div className="flex justify-between gap-4">
                  <dt className="text-sm text-slate-500 shrink-0">Family rent</dt>
                  <dd className="text-sm font-medium text-slate-900 text-right">{row.rentFamily}</dd>
                </div>
              )}
              {row.groceries != null && (
                <div className="flex justify-between gap-4">
                  <dt className="text-sm text-slate-500 shrink-0">Groceries</dt>
                  <dd className="text-sm text-slate-700 text-right">{row.groceries}</dd>
                </div>
              )}
              {row.transport != null && (
                <div className="flex justify-between gap-4">
                  <dt className="text-sm text-slate-500 shrink-0">Transport</dt>
                  <dd className="text-sm text-slate-700 text-right">{row.transport}</dd>
                </div>
              )}
              {row.healthInsurance != null && (
                <div className="flex justify-between gap-4">
                  <dt className="text-sm text-slate-500 shrink-0">Health ins.</dt>
                  <dd className="text-sm text-slate-700 text-right">{row.healthInsurance}</dd>
                </div>
              )}
            </dl>

            {/* Card footer: guide link or note */}
            <div className="mt-auto border-t border-slate-100 px-5 py-3 bg-slate-50/30">
              {row.comingSoon ? (
                <span className="text-xs text-slate-500">City guide coming soon</span>
              ) : (
                <Link
                  href={row.cityHref}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-800"
                >
                  View {row.cityName} guide
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Legend + disclaimer */}
      <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3">
        <p className="flex items-start gap-2 text-xs text-slate-600">
          <Info className="h-4 w-4 shrink-0 mt-0.5 text-slate-400" aria-hidden />
          <span>
            <strong>Cost level</strong> means how expensive the city is relative to others (higher = more expensive).
            All figures are typical estimates; costs vary by area, contract, and household. Not official or regulated fees.
          </span>
        </p>
      </div>
    </div>
  );
}
