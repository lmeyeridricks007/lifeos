import Link from "next/link";
import type { CityJobsEcosystem } from "@/src/lib/city-hub/types";
import { cn } from "@/lib/cn";

export function CityStatsCards({ data }: { data: CityJobsEcosystem }) {
  const hasCounts = data.companiesCount != null || data.jobsCount != null;

  return (
    <section id="jobs-ecosystem" className="scroll-mt-24 mt-12 space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {data.heading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {hasCounts && (
          <>
            {data.companiesCount != null && (
              <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Companies</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  {data.companiesCount.toLocaleString()}
                </p>
              </div>
            )}
            {data.jobsCount != null && (
              <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Jobs</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">
                  {data.jobsCount.toLocaleString()}
                </p>
              </div>
            )}
          </>
        )}
        <div
          className={cn(
            "rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm",
            !hasCounts && "sm:col-span-2"
          )}
        >
          <p className="text-sm font-medium text-slate-500">Key industries</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            {data.industries.map((ind, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-slate-400" aria-hidden>•</span>
                {ind}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={cn(
            "rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm",
            !hasCounts && "sm:col-span-2"
          )}
        >
          <p className="text-sm font-medium text-slate-500">Major employers</p>
          <p className="mt-1 text-xs text-slate-500 mb-2">
            Major employers include (non-exhaustive):
          </p>
          <ul className="space-y-1 text-sm text-slate-700">
            {data.majorEmployers.map((emp, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-slate-400" aria-hidden>•</span>
                {emp}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {(data.sourceLabel || data.sourceHref) && (
        <p className="text-sm text-slate-500">
          {data.sourceHref ? (
            <Link
              href={data.sourceHref}
              className="font-medium text-brand-700 hover:text-brand-800 underline"
            >
              {data.sourceLabel || "Source: Business.gov.nl / CBS"}
            </Link>
          ) : (
            data.sourceLabel
          )}
        </p>
      )}
    </section>
  );
}
