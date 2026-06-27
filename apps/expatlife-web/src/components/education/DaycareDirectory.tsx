"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  movingNlCardMicroLiftClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { CITIES_FUNNEL_SOFT_COPILOT_SURFACE } from "@/src/components/cities/shared/citiesFunnelPageUi";
import {
  daycareProviderCities,
  daycareProviderTypes,
  getDaycareDirectoryMetadata,
} from "@/src/data/education/daycareProvidersDirectory";
import type { DaycareProviderRecord } from "./daycareNetherlandsPageModel";

const PAGE_SIZE = 12;

type Props = {
  providers: readonly DaycareProviderRecord[];
};

export function DaycareDirectory({ providers }: Props) {
  const metadata = getDaycareDirectoryMetadata();
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [ageFilter, setAgeFilter] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const languages = useMemo(() => {
    const set = new Set<string>();
    providers.forEach((p) => {
      if (p.languages.toLowerCase().includes("english")) set.add("English");
      if (p.languages.toLowerCase().includes("dutch")) set.add("Dutch");
    });
    return Array.from(set).sort();
  }, [providers]);

  const ageGroups = useMemo(() => {
    const set = new Set<string>();
    providers.forEach((p) => set.add(p.ageGroups));
    return Array.from(set).sort();
  }, [providers]);

  const filtered = useMemo(() => {
    let list = [...providers];
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.cities.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.languages.toLowerCase().includes(q) ||
          p.notes.toLowerCase().includes(q)
      );
    }
    if (cityFilter) list = list.filter((p) => p.cities.toLowerCase().includes(cityFilter.toLowerCase()) || p.cities === "Nationwide");
    if (typeFilter) list = list.filter((p) => p.type.toLowerCase().includes(typeFilter.toLowerCase().split(" ")[0] ?? ""));
    if (languageFilter) list = list.filter((p) => p.languages.toLowerCase().includes(languageFilter.toLowerCase()));
    if (ageFilter) list = list.filter((p) => p.ageGroups.includes(ageFilter));
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [providers, query, cityFilter, typeFilter, languageFilter, ageFilter]);

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
          {metadata.totalRecords} providers · Last checked: {metadata.lastChecked}
        </p>
        <p className="mt-3 rounded-2xl bg-amber-50/80 px-4 py-3 text-xs leading-relaxed text-amber-950 ring-1 ring-amber-100">
          Verify availability, fees and LRK registration on each provider&apos;s website — listings are orientation only. We do not rank providers.
        </p>
      </div>

      <div className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-5", movingNlCardMicroLiftClass)}>
        <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
        <label htmlFor="daycare-directory-search" className="sr-only">
          Search childcare providers
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" aria-hidden />
          <input
            id="daycare-directory-search"
            type="search"
            placeholder="Search by provider name, city or type..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              resetPage();
            }}
            className="w-full rounded-xl border border-slate-200/90 bg-white py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground-muted shadow-sm focus:border-brand-strong/40 focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </div>

        <div className="mt-4 space-y-3">
          <FilterPills label="City" options={daycareProviderCities} active={cityFilter} onChange={(v) => { setCityFilter(v); resetPage(); }} />
          <FilterPills label="Type" options={daycareProviderTypes} active={typeFilter} onChange={(v) => { setTypeFilter(v); resetPage(); }} />
          <FilterPills label="Language" options={languages} active={languageFilter} onChange={(v) => { setLanguageFilter(v); resetPage(); }} />
          <FilterPills label="Age group" options={ageGroups} active={ageFilter} onChange={(v) => { setAgeFilter(v); resetPage(); }} />
        </div>
      </div>

      <p className="text-sm text-foreground-muted">
        Showing {filtered.length} provider{filtered.length !== 1 ? "s" : ""}
        {filtered.length !== providers.length ? ` (filtered from ${providers.length})` : ""}
      </p>

      <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
        <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px] divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">Provider</th>
                <th scope="col" className="px-4 py-3 font-bold">Cities</th>
                <th scope="col" className="px-4 py-3 font-bold">Type</th>
                <th scope="col" className="px-4 py-3 font-bold">Age groups</th>
                <th scope="col" className="px-4 py-3 font-bold">Languages</th>
                <th scope="col" className="px-4 py-3 font-bold">Website</th>
                <th scope="col" className="px-4 py-3 font-bold">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginated.map((provider) => (
                <tr key={provider.name}>
                  <td className="px-4 py-4 font-semibold text-foreground">{provider.name}</td>
                  <td className="px-4 py-4 text-foreground-muted">{provider.cities}</td>
                  <td className="px-4 py-4 text-foreground-muted">{provider.type}</td>
                  <td className="px-4 py-4 text-foreground-muted">{provider.ageGroups}</td>
                  <td className="px-4 py-4 text-foreground-muted">{provider.languages}</td>
                  <td className="px-4 py-4">
                    {provider.website.startsWith("http") ? (
                      <a
                        href={provider.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-link hover:text-link-hover"
                      >
                        Visit
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    ) : (
                      <span className="text-foreground-muted">{provider.website}</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-foreground-muted">{provider.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {paginated.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-foreground-muted">No providers match your filters — try clearing a filter or broadening your search.</p>
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
