"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  movingNlCardMicroLiftClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  getInternationalSchoolsDirectoryMetadata,
  internationalSchoolCities,
  internationalSchoolCurricula,
  type InternationalSchoolRecord,
} from "@/src/data/education/internationalSchoolsDirectory";

const PAGE_SIZE = 12;

type Props = {
  schools: readonly InternationalSchoolRecord[];
};

export function InternationalSchoolDirectory({ schools }: Props) {
  const metadata = getInternationalSchoolsDirectoryMetadata();
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [curriculumFilter, setCurriculumFilter] = useState<string | null>(null);
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const languages = useMemo(() => {
    const set = new Set<string>();
    schools.forEach((s) => s.languages.forEach((l) => set.add(l)));
    return Array.from(set).sort();
  }, [schools]);

  const filtered = useMemo(() => {
    let list = [...schools];
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.city.toLowerCase().includes(q) ||
          s.curriculum.some((c) => c.toLowerCase().includes(q)) ||
          s.languages.some((l) => l.toLowerCase().includes(q))
      );
    }
    if (cityFilter) list = list.filter((s) => s.city === cityFilter);
    if (curriculumFilter) list = list.filter((s) => s.curriculum.includes(curriculumFilter as InternationalSchoolRecord["curriculum"][number]));
    if (languageFilter) list = list.filter((s) => s.languages.includes(languageFilter));
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [schools, query, cityFilter, curriculumFilter, languageFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages - 1);
  const paginated = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const resetPage = () => setPage(0);

  return (
    <div className="space-y-5">
      <div className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6", movingNlCardMicroLiftClass)}>
        <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Directory data</p>
        <p className="mt-2 text-sm font-semibold text-foreground">{metadata.sourceModel}</p>
        <p className="mt-1 text-sm text-foreground-muted">
          {metadata.totalRecords} schools · Last checked: {metadata.lastChecked}
        </p>
        <p className="mt-3 rounded-2xl bg-amber-50/80 px-4 py-3 text-xs leading-relaxed text-amber-950 ring-1 ring-amber-100">
          Verify admissions, fees and availability on each school&apos;s website — listings are orientation only.
        </p>
      </div>

      <div className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-5", movingNlCardMicroLiftClass)}>
        <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
        <label htmlFor="school-directory-search" className="sr-only">
          Search international schools
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" aria-hidden />
          <input
            id="school-directory-search"
            type="search"
            placeholder="Search by school name, city or curriculum..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              resetPage();
            }}
            className="w-full rounded-xl border border-slate-200/90 bg-white py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground-muted shadow-sm focus:border-brand-strong/40 focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div className="mt-4 space-y-3">
          <FilterPills label="City" options={internationalSchoolCities} active={cityFilter} onChange={(v) => { setCityFilter(v); resetPage(); }} />
          <FilterPills label="Curriculum" options={internationalSchoolCurricula} active={curriculumFilter} onChange={(v) => { setCurriculumFilter(v); resetPage(); }} />
          <FilterPills label="Language" options={languages} active={languageFilter} onChange={(v) => { setLanguageFilter(v); resetPage(); }} />
        </div>
      </div>

      <p className="text-sm text-foreground-muted">
        Showing {filtered.length} school{filtered.length !== 1 ? "s" : ""}
        {filtered.length !== schools.length ? ` (filtered from ${schools.length})` : ""}
      </p>

      <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
        <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">School</th>
                <th scope="col" className="px-4 py-3 font-bold">City</th>
                <th scope="col" className="px-4 py-3 font-bold">Curriculum</th>
                <th scope="col" className="px-4 py-3 font-bold">Ages</th>
                <th scope="col" className="px-4 py-3 font-bold">Language</th>
                <th scope="col" className="px-4 py-3 font-bold">Website</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginated.map((school) => (
                <tr key={school.slug}>
                  <td className="px-4 py-4">
                    <span className="block font-semibold text-foreground">{school.name}</span>
                    {school.notes ? <span className="mt-1 block text-xs leading-relaxed text-foreground-muted">{school.notes}</span> : null}
                  </td>
                  <td className="px-4 py-4 text-foreground-muted">{school.city}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {school.curriculum.map((item) => (
                        <span key={item} className="rounded-full bg-copilot-bg-soft px-2.5 py-0.5 text-xs font-semibold text-brand-strong ring-1 ring-copilot-primary/10">
                          {item}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-foreground-muted">{school.ages}</td>
                  <td className="px-4 py-4 text-foreground-muted">{school.languages.join(", ")}</td>
                  <td className="px-4 py-4">
                    <a
                      href={school.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-link hover:text-link-hover"
                    >
                      Visit
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {paginated.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-foreground-muted">No schools match your filters — try clearing a filter or broadening your search.</p>
        ) : null}
      </div>

      {totalPages > 1 ? (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-foreground-muted">
            Page {currentPage + 1} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={currentPage === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className={cn(
                CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
                "rounded-xl border border-slate-200/90 bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm disabled:opacity-40",
                transitionInteractive,
                activeBrightnessPress
              )}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={currentPage >= totalPages - 1}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              className={cn(
                CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
                "rounded-xl border border-slate-200/90 bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm disabled:opacity-40",
                transitionInteractive,
                activeBrightnessPress
              )}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function FilterPills({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: readonly string[];
  active: string | null;
  onChange: (value: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.12em] text-foreground-muted">{label}</span>
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={!active}
        className={cn(
          "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold transition",
          !active
            ? "bg-brand text-white shadow-sm ring-2 ring-brand-strong/25"
            : "bg-white text-foreground-muted ring-1 ring-slate-200 hover:bg-slate-50",
          transitionInteractive,
          activeBrightnessPress
        )}
      >
        All
      </button>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(active === option ? null : option)}
          aria-pressed={active === option}
          className={cn(
            "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold transition",
            active === option
              ? "bg-brand text-white shadow-sm ring-2 ring-brand-strong/25"
              : "bg-white text-foreground-muted ring-1 ring-slate-200 hover:bg-slate-50",
            transitionInteractive,
            activeBrightnessPress
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
