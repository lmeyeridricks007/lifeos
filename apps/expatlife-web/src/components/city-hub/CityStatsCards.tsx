import Link from "next/link";
import type { CityJobsEcosystem } from "@/src/lib/city-hub/types";
import { Briefcase, Building2, Factory } from "lucide-react";
function normalizeJobsHeading(heading: string): string {
  return heading
    .replace(/\s*\(Context\)\s*$/i, "")
    .replace(/\s*\(Amsterdam Area Context\)\s*$/i, "")
    .replace(/\s*\(context\)\s*$/i, "")
    .trim();
}

export function CityStatsCards({ data }: { data: CityJobsEcosystem }) {
  const hasCounts = data.companiesCount != null || data.jobsCount != null;
  const title = normalizeJobsHeading(data.heading);

  return (
    <section id="jobs-ecosystem" className="scroll-mt-24 mt-12 space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>

      {hasCounts ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {data.companiesCount != null && (
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-sky-50/90 via-white to-white p-6 shadow-sm ring-1 ring-slate-100/80">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-700"
                  aria-hidden
                >
                  <Building2 className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-500">Companies</p>
                  <p className="mt-1 text-3xl font-semibold tabular-nums tracking-tight text-slate-900">
                    {data.companiesCount.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}
          {data.jobsCount != null && (
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-emerald-50/90 via-white to-white p-6 shadow-sm ring-1 ring-slate-100/80">
              <div className="flex items-start gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-700"
                  aria-hidden
                >
                  <Briefcase className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-500">Jobs</p>
                  <p className="mt-1 text-3xl font-semibold tabular-nums tracking-tight text-slate-900">
                    {data.jobsCount.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm ring-1 ring-slate-100/60">
          <div className="mb-4 flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-700"
              aria-hidden
            >
              <Factory className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <p className="text-sm font-semibold text-slate-900">Key industries</p>
          </div>
          <ul className="space-y-2.5 text-sm text-slate-700">
            {data.industries.map((ind, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" aria-hidden />
                <span className="leading-relaxed">{ind}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm ring-1 ring-slate-100/60">
          <div className="mb-4 flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-800"
              aria-hidden
            >
              <Building2 className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">Major employers</p>
              <p className="text-xs text-slate-500">Non-exhaustive examples</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-sm text-slate-700">
            {data.majorEmployers.map((emp, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                <span className="leading-relaxed">{emp}</span>
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
