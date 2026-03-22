import Link from "next/link";
import type { CityComparisonRow } from "@/src/lib/city-hub/types";
import { cityComparisonTableRows } from "@/src/data/cities/cityStats";
import { cn } from "@/lib/cn";

export function CityComparisonTable({
  heading,
  currentCityName,
  ctaLabel,
  ctaHref,
}: {
  heading: string;
  currentCityName: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section id="comparing-cities" className="scroll-mt-24 mt-12 space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {heading}
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="px-4 py-3 font-semibold text-slate-900">City</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Typical jobs</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Lifestyle</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Housing cost</th>
              <th className="px-4 py-3 font-semibold text-slate-900">Commute</th>
            </tr>
          </thead>
          <tbody>
            {cityComparisonTableRows.map((row) => (
              <tr
                key={row.city}
                className={cn(
                  "border-b border-slate-100 last:border-b-0",
                  row.city === currentCityName && "bg-sky-50/50"
                )}
              >
                <td className="px-4 py-3 font-medium text-slate-900">
                  <Link
                    href={row.cityHref}
                    className="text-brand-700 hover:text-brand-800 underline"
                  >
                    {row.city}
                  </Link>
                </td>
                <td className="px-4 py-3 text-slate-700">{row.bestFor}</td>
                <td className="px-4 py-3 text-slate-700">{row.typicalJobs}</td>
                <td className="px-4 py-3 text-slate-700">{row.lifestyle}</td>
                <td className="px-4 py-3 text-slate-700">{row.housingCost}</td>
                <td className="px-4 py-3 text-slate-700">{row.commute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-1 font-medium text-brand-700 hover:text-brand-800 underline"
        >
          {ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      </p>
    </section>
  );
}
