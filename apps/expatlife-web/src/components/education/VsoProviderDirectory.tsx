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
import type { VsoProviderRecord } from "./beforeSchoolCareNetherlandsPageModel";

const PAGE_SIZE = 12;

const VSO_CITIES = [
  "Amsterdam",
  "Rotterdam",
  "The Hague",
  "Utrecht",
  "Eindhoven",
  "Haarlem",
  "Nationwide",
] as const;

/** Before school first — this directory emphasises VSO availability. */
const CARE_FILTERS = ["Before school", "After school", "Holiday care"] as const;

type Props = {
  providers: readonly VsoProviderRecord[];
};

export function VsoProviderDirectory({ providers }: Props) {
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [languageFilter, setLanguageFilter] = useState<string | null>(null);
  const [careFilter, setCareFilter] = useState<string | null>("Before school");
  const [page, setPage] = useState(0);

  const languages = useMemo(() => {
    const set = new Set<string>();
    providers.forEach((p) => {
      if (p.languages.toLowerCase().includes("english")) set.add("English");
      if (p.languages.toLowerCase().includes("dutch")) set.add("Dutch");
    });
    return Array.from(set).sort();
  }, [providers]);

  const filtered = useMemo(() => {
    let list = [...providers];
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.provider.toLowerCase().includes(q) ||
          p.cities.toLowerCase().includes(q) ||
          p.languages.toLowerCase().includes(q) ||
          p.beforeSchool.toLowerCase().includes(q) ||
          p.holidayCare.toLowerCase().includes(q)
      );
    }
    if (cityFilter) {
      list = list.filter(
        (p) =>
          p.cities.toLowerCase().includes(cityFilter.toLowerCase()) ||
          p.cities.toLowerCase().includes("nationwide")
      );
    }
    if (languageFilter) {
      list = list.filter((p) => p.languages.toLowerCase().includes(languageFilter.toLowerCase()));
    }
    if (careFilter === "Before school") {
      list = list.filter(
        (p) =>
          p.beforeSchool.toLowerCase().includes("select") ||
          p.beforeSchool.toLowerCase().includes("yes") ||
          p.beforeSchool.toLowerCase().includes("vso") ||
          p.beforeSchool.toLowerCase().includes("limited")
      );
    }
    if (careFilter === "After school") {
      list = list.filter((p) => p.afterSchool.toLowerCase().startsWith("yes"));
    }
    if (careFilter === "Holiday care") {
      list = list.filter((p) => p.holidayCare.toLowerCase().startsWith("yes"));
    }
    return list.sort((a, b) => a.provider.localeCompare(b.provider));
  }, [providers, query, cityFilter, languageFilter, careFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages - 1);
  const paginated = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const resetPage = () => setPage(0);

  return (
    <div className="space-y-5">
      <div className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-5", movingNlCardMicroLiftClass)}>
        <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
        <label htmlFor="vso-directory-search" className="sr-only">
          Search VSO providers
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" aria-hidden />
          <input
            id="vso-directory-search"
            type="search"
            placeholder="Search by provider, city or language..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              resetPage();
            }}
            className="w-full rounded-xl border border-slate-200/90 bg-white py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground-muted shadow-sm focus:border-brand-strong/40 focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </div>
        <div className="mt-4 space-y-3">
          <FilterPills label="City" options={VSO_CITIES} active={cityFilter} onChange={(v) => { setCityFilter(v); resetPage(); }} />
          <FilterPills label="Language" options={languages} active={languageFilter} onChange={(v) => { setLanguageFilter(v); resetPage(); }} />
          <FilterPills label="Care type" options={CARE_FILTERS} active={careFilter} onChange={(v) => { setCareFilter(v); resetPage(); }} />
        </div>
      </div>

      <p className="text-sm text-foreground-muted">
        Showing {filtered.length} provider{filtered.length !== 1 ? "s" : ""}
        {filtered.length !== providers.length ? ` (filtered from ${providers.length})` : ""}
        {careFilter === "Before school" ? " · emphasising VSO / before-school availability" : ""}
      </p>

      <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
        <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px] divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">Provider</th>
                <th scope="col" className="px-4 py-3 font-bold">Cities</th>
                <th scope="col" className="px-4 py-3 font-bold">VSO</th>
                <th scope="col" className="px-4 py-3 font-bold">BSO</th>
                <th scope="col" className="px-4 py-3 font-bold">Holiday Care</th>
                <th scope="col" className="px-4 py-3 font-bold">Languages</th>
                <th scope="col" className="px-4 py-3 font-bold">Website</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginated.map((row) => (
                <tr key={row.provider}>
                  <td className="px-4 py-4 font-semibold text-foreground">{row.provider}</td>
                  <td className="px-4 py-4 text-foreground-muted">{row.cities}</td>
                  <td className="px-4 py-4 font-medium text-foreground">{row.beforeSchool}</td>
                  <td className="px-4 py-4 text-foreground-muted">{row.afterSchool}</td>
                  <td className="px-4 py-4 text-foreground-muted">{row.holidayCare}</td>
                  <td className="px-4 py-4 text-foreground-muted">{row.languages}</td>
                  <td className="px-4 py-4">
                    <a
                      href={row.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-link hover:text-link-hover"
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
          <p className="px-4 py-8 text-center text-sm text-foreground-muted">
            No providers match your filters — try clearing a filter or broadening your search.
          </p>
        ) : null}
        <p className="border-t border-slate-100 px-4 py-3 text-xs leading-relaxed text-foreground-muted">
          Orientation only — not rankings. Confirm VSO morning availability, LRK registration and fees on each provider&apos;s website.
        </p>
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
