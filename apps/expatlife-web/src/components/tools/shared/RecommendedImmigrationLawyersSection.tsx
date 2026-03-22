"use client";

import { LawyerLogoClient } from "@/src/components/tools/visa-checker/LawyerLogoClient";
import { RECOMMENDED_IMMIGRATION_LAWYERS } from "@/src/data/tools/shared/recommended-immigration-lawyers";

const DEFAULT_INTRO =
  "For complex cases or tailored advice, these Dutch immigration law firms specialise in residence permits, work visas, DAFT, family reunification, and related matters. Fees and services vary; contact them directly for quotes.";

type Props = {
  /** Optional custom intro paragraph. */
  intro?: string;
};

export function RecommendedImmigrationLawyersSection({ intro = DEFAULT_INTRO }: Props) {
  return (
    <section className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50/95 to-white p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">Recommended immigration lawyers</h3>
      <p className="mt-2 w-full text-sm leading-relaxed text-slate-600">{intro}</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
        {RECOMMENDED_IMMIGRATION_LAWYERS.map((lawyer) => {
          const nameForInitials = lawyer.name.replace(/\s*\([^)]*\)/g, "").trim();
          const initials = nameForInitials
            .split(/[\s-]+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((p) => p[0])
            .join("")
            .toUpperCase() || lawyer.name.slice(0, 2).toUpperCase();
          return (
            <a
              key={lawyer.name}
              href={lawyer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-slate-200/50 transition hover:border-brand-200 hover:shadow-md hover:ring-brand-100 md:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-slate-200/60">
                  {lawyer.logo ? (
                    <LawyerLogoClient
                      src={lawyer.logo.src}
                      alt={lawyer.logo.alt}
                      fallbackInitials={initials}
                    />
                  ) : (
                    <span className="text-base font-semibold text-slate-500" aria-hidden>
                      {initials}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-slate-900 transition-colors group-hover:text-brand-700">
                    {lawyer.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{lawyer.description}</p>
                  <div className="mt-3 rounded-lg border border-slate-200/80 bg-slate-50/90 px-3 py-2.5">
                    <p className="text-xs font-semibold text-slate-800">Typical costs</p>
                    <p className="mt-0.5 text-sm text-slate-700">{lawyer.typicalCost}</p>
                    {lawyer.contact ? (
                      <p className="mt-1.5 text-xs text-slate-500">{lawyer.contact}</p>
                    ) : null}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:text-brand-700">
                    Visit website
                    <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
