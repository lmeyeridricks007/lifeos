"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight, ExternalLink, MapPin, Tag, Building2, X, Banknote, CheckCircle2, Plus } from "lucide-react";
import type { RelocationProviderRecord } from "@/src/lib/service-category/types";
import { normalizeExternalProviderLogoSrc } from "@/src/lib/provider-logo-url";

const PAGE_SIZE = 10;
const MAX_SHORTLIST = 3;

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function ProviderLogo({ logoUrl, name }: { logoUrl?: string; name: string }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const resolvedUrl = logoUrl ? normalizeExternalProviderLogoSrc(logoUrl) : undefined;
  const showImage = resolvedUrl && !error;
  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100">
      {showImage ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolvedUrl}
            alt=""
            className="h-full w-full object-contain p-1.5"
            onError={() => setError(true)}
            onLoad={() => setLoaded(true)}
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-slate-50 text-xs font-semibold text-slate-400">
              {initials(name)}
            </div>
          )}
        </>
      ) : (
        <div
          className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100/80 text-sm font-bold text-brand-700 ring-1 ring-brand-200/50"
          aria-hidden
        >
          {initials(name)}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  label,
  count,
  active,
  onClick,
}: { label: string; count?: number; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className={`
        cursor-pointer select-none inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200
        ${active
          ? "bg-brand-600 text-white shadow-sm ring-2 ring-brand-500/30"
          : "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50"
        }
      `}
      aria-pressed={active}
      aria-label={count !== undefined ? `${label} (${count} providers)` : label}
    >
      {label}
      {count !== undefined && (
        <span className={active ? "text-white/90" : "text-slate-400"}>
          ({count})
        </span>
      )}
    </button>
  );
}

type Props = {
  providers: RelocationProviderRecord[];
  metadata: { sourceModel: string; totalRecords: number; lastChecked: string };
  profileBasePath?: string;
  /** When provided, show Add to compare and sync with comparison section. */
  shortlist?: string[];
  onAddToShortlist?: (slug: string) => void;
  onRemoveFromShortlist?: (slug: string) => void;
};

export function RelocationProviderDirectory({
  providers,
  metadata,
  profileBasePath = "/netherlands/services/relocation-agencies",
  shortlist = [],
  onAddToShortlist,
  onRemoveFromShortlist,
}: Props) {
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [ecosystemFilter, setEcosystemFilter] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const setCity = useCallback((city: string | null) => {
    setCityFilter(city);
    setPage(0);
  }, []);
  const setTag = useCallback((tag: string | null) => {
    setTagFilter(tag);
    setPage(0);
  }, []);
  const setEcosystem = useCallback((eco: string | null) => {
    setEcosystemFilter(eco);
    setPage(0);
  }, []);

  const cities = useMemo(() => {
    const set = new Set<string>();
    providers.forEach((p) => (p.cityRelevance ?? []).forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [providers]);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    providers.forEach((p) => (p.serviceTags ?? []).forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [providers]);

  const ecosystems = useMemo(() => {
    const set = new Set<string>();
    providers.forEach((p) => (p.sourceEcosystems ?? []).forEach((e) => set.add(e)));
    return Array.from(set).sort();
  }, [providers]);

  const filtered = useMemo(() => {
    let list = providers;
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) ||
          (p.serviceTags ?? []).some((t) => t.toLowerCase().includes(q))
      );
    }
    if (cityFilter) {
      list = list.filter((p) => (p.cityRelevance ?? []).includes(cityFilter));
    }
    if (tagFilter) {
      list = list.filter((p) => (p.serviceTags ?? []).includes(tagFilter));
    }
    if (ecosystemFilter) {
      list = list.filter((p) => (p.sourceEcosystems ?? []).includes(ecosystemFilter));
    }
    return list;
  }, [providers, query, cityFilter, tagFilter, ecosystemFilter]);

  /** Counts for each filter option (based on query + other filters) for pill labels */
  const cityCounts = useMemo(() => {
    let list = providers;
    const q = query.trim().toLowerCase();
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q) || (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) || (p.serviceTags ?? []).some((t) => t.toLowerCase().includes(q)));
    if (tagFilter) list = list.filter((p) => (p.serviceTags ?? []).includes(tagFilter));
    if (ecosystemFilter) list = list.filter((p) => (p.sourceEcosystems ?? []).includes(ecosystemFilter));
    const counts: Record<string, number> = {};
    cities.forEach((c) => { counts[c] = list.filter((p) => (p.cityRelevance ?? []).includes(c)).length; });
    return counts;
  }, [providers, query, tagFilter, ecosystemFilter, cities]);

  const tagCounts = useMemo(() => {
    let list = providers;
    const q = query.trim().toLowerCase();
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q) || (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) || (p.serviceTags ?? []).some((t) => t.toLowerCase().includes(q)));
    if (cityFilter) list = list.filter((p) => (p.cityRelevance ?? []).includes(cityFilter));
    if (ecosystemFilter) list = list.filter((p) => (p.sourceEcosystems ?? []).includes(ecosystemFilter));
    const counts: Record<string, number> = {};
    allTags.forEach((t) => { counts[t] = list.filter((p) => (p.serviceTags ?? []).includes(t)).length; });
    return counts;
  }, [providers, query, cityFilter, ecosystemFilter, allTags]);

  const ecosystemCounts = useMemo(() => {
    let list = providers;
    const q = query.trim().toLowerCase();
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q) || (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) || (p.serviceTags ?? []).some((t) => t.toLowerCase().includes(q)));
    if (cityFilter) list = list.filter((p) => (p.cityRelevance ?? []).includes(cityFilter));
    if (tagFilter) list = list.filter((p) => (p.serviceTags ?? []).includes(tagFilter));
    const counts: Record<string, number> = {};
    ecosystems.forEach((e) => { counts[e] = list.filter((p) => (p.sourceEcosystems ?? []).includes(e)).length; });
    return counts;
  }, [providers, query, cityFilter, tagFilter, ecosystems]);

  const hasActiveFilters = cityFilter !== null || tagFilter !== null || ecosystemFilter !== null;
  const clearAllFilters = () => {
    setCityFilter(null);
    setTagFilter(null);
    setEcosystemFilter(null);
    setPage(0);
  };

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, Math.max(0, totalPages - 1));

  // Keep page in bounds when filters reduce the result set
  useEffect(() => {
    const maxPage = Math.max(0, totalPages - 1);
    if (page > maxPage) {
      setPage(maxPage);
    }
  }, [totalPages, page]);

  const paginated = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 border-l-4 border-l-emerald-500 bg-emerald-50/40 p-4 shadow-sm">
        <p className="flex items-center gap-2 text-sm font-medium text-slate-800">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden />
          {metadata.sourceModel}
        </p>
        <p className="mt-0.5 text-sm text-slate-600">
          {metadata.totalRecords} provider{metadata.totalRecords !== 1 ? "s" : ""} · Last checked: {metadata.lastChecked}
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
        <input
          type="search"
          placeholder="Search by provider name or service..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(0);
          }}
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          aria-label="Search relocation providers"
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 shadow-sm">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold text-slate-700">Filters</span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200 hover:text-slate-900"
            >
              <X className="h-3.5 w-3.5" />
              Clear all
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-600" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">City</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterPill
                label="All"
                active={!cityFilter}
                onClick={() => setCity(null)}
              />
              {cities.map((city) => (
                <FilterPill
                  key={city}
                  label={city}
                  count={cityCounts[city]}
                  active={cityFilter === city}
                  onClick={() => setCity(cityFilter === city ? null : city)}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <Tag className="h-4 w-4 text-violet-600" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-wide text-violet-700">Service</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterPill
                label="All"
                active={!tagFilter}
                onClick={() => setTag(null)}
              />
              {allTags.map((tag) => (
                <FilterPill
                  key={tag}
                  label={tag}
                  count={tagCounts[tag]}
                  active={tagFilter === tag}
                  onClick={() => setTag(tagFilter === tag ? null : tag)}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-amber-600" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">Source</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <FilterPill
                label="All"
                active={!ecosystemFilter}
                onClick={() => setEcosystem(null)}
              />
              {ecosystems.map((eco) => (
                <FilterPill
                  key={eco}
                  label={eco}
                  count={ecosystemCounts[eco]}
                  active={ecosystemFilter === eco}
                  onClick={() => setEcosystem(ecosystemFilter === eco ? null : eco)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
        key={`summary-${filtered.length}-${String(cityFilter)}-${String(tagFilter)}-${String(ecosystemFilter)}`}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="text-sm font-medium text-slate-700">
          Showing {filtered.length} provider{filtered.length !== 1 ? "s" : ""}
        </span>
        {hasActiveFilters && (
          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-800">(filtered)</span>
        )}
      </div>

      <div className="space-y-4" key={`list-${filtered.length}-${currentPage}`}>
        {paginated.map((p) => {
          const inShortlist = shortlist.includes(p.slug);
          const canAdd = onAddToShortlist && !inShortlist && shortlist.length < MAX_SHORTLIST;
          return (
          <article
            key={p.slug}
            className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md hover:border-slate-300"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-500 to-brand-400" aria-hidden />
            <div className="flex flex-col gap-4 pl-5 pr-4 py-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <ProviderLogo logoUrl={p.logoUrl} name={p.name} />
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{p.shortDescription}</p>
                {p.servicesOrProducts && p.servicesOrProducts.length > 0 ? (
                  <div className="mt-3">
                    <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-600">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                      Services & products
                    </p>
                    <ul className="grid gap-1.5 text-sm text-slate-700 sm:grid-cols-2">
                      {p.servicesOrProducts.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {p.typicalCost ? (
                  <div className="mt-3 flex flex-wrap items-start gap-1.5 rounded-lg border border-emerald-200/60 bg-emerald-50/60 px-3 py-2">
                    <Banknote className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                    <div>
                      <span className="text-xs font-medium text-emerald-800">Typical cost: </span>
                      <span className="text-sm text-slate-800">{p.typicalCost}</span>
                    </div>
                  </div>
                ) : null}
                {(p.cityRelevance ?? []).length > 0 ? (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    {(p.cityRelevance ?? []).join(", ")}
                  </div>
                ) : null}
                {(p.serviceTags ?? []).length > 0 ? (
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {(p.serviceTags ?? []).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-md bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-800 ring-1 ring-violet-200/60"
                      >
                        <Tag className="mr-1 h-3 w-3 text-violet-500" aria-hidden />
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
                <p className="mt-2 text-xs text-slate-500">
                  Source: <span className="font-medium text-amber-700">{(p.sourceEcosystems ?? []).join(", ")}</span>
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2">
                {onAddToShortlist && canAdd ? (
                  <button
                    type="button"
                    onClick={() => onAddToShortlist(p.slug)}
                    className="inline-flex items-center gap-1.5 rounded-lg border-2 border-brand-400 bg-brand-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add to compare
                  </button>
                ) : null}
                {onRemoveFromShortlist && inShortlist ? (
                  <button
                    type="button"
                    onClick={() => onRemoveFromShortlist(p.slug)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-800 hover:bg-amber-100"
                  >
                    In shortlist
                  </button>
                ) : null}
                {p.providerUrl ? (
                  <a
                    href={p.providerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                  >
                    Visit provider <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                <Link
                  href={`${profileBasePath}/${p.slug}/`}
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
                >
                  View details
                </Link>
              </div>
            </div>
          </article>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
          <p className="text-sm text-slate-600">
            Page {currentPage + 1} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage >= totalPages - 1}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
