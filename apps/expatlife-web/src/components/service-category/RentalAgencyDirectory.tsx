"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight, ExternalLink, MapPin, Tag } from "lucide-react";
import type { RentalAgencyRecord } from "@/src/lib/service-category/types";

const PAGE_SIZE = 9;

const PROVIDER_TYPE_LABELS: Record<string, string> = {
  "expat-broker-network": "Expat broker network",
  "rental-service": "Rental service",
  "serviced-apartments": "Serviced apartments",
  "relocation-with-rental": "Relocation + rental",
  "tenant-support": "Tenant support",
};

type Props = {
  agencies: RentalAgencyRecord[];
  metadata: { sourceModel: string; totalRecords: number; lastChecked: string };
  profileBasePath?: string;
};

export function RentalAgencyDirectory({
  agencies,
  metadata,
  profileBasePath = "/netherlands/services/rental-agencies",
}: Props) {
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [bestForFilter, setBestForFilter] = useState<string | null>(null);
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const cities = useMemo(() => {
    const set = new Set<string>();
    agencies.forEach((p) => p.cityRelevance.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, [agencies]);

  const allBestFor = useMemo(() => {
    const set = new Set<string>();
    agencies.forEach((p) => p.bestFor.forEach((b) => set.add(b)));
    return Array.from(set).sort();
  }, [agencies]);

  const types = useMemo(() => {
    const set = new Set(agencies.map((p) => p.providerType));
    return Array.from(set).sort();
  }, [agencies]);

  const filtered = useMemo(() => {
    let list = agencies;
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.bestFor.some((b) => b.toLowerCase().includes(q))
      );
    }
    if (cityFilter) list = list.filter((p) => p.cityRelevance.includes(cityFilter));
    if (bestForFilter) list = list.filter((p) => p.bestFor.includes(bestForFilter));
    if (typeFilter) list = list.filter((p) => p.providerType === typeFilter);
    return list;
  }, [agencies, query, cityFilter, bestForFilter, typeFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages - 1);
  const paginated = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
        <p className="text-sm font-medium text-slate-700">{metadata.sourceModel}</p>
        <p className="mt-0.5 text-sm text-slate-500">
          {metadata.totalRecords} provider{metadata.totalRecords !== 1 ? "s" : ""} · Last checked: {metadata.lastChecked}
        </p>
      </div>

      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
        <input
          type="search"
          placeholder="Search by agency name or service..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(0);
          }}
          className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          aria-label="Search rental agencies"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-medium text-slate-500">City:</span>
        <button
          type="button"
          onClick={() => setCityFilter(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            !cityFilter ? "bg-brand-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          All
        </button>
        {cities.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => { setCityFilter((c) => (c === city ? null : city)); setPage(0); }}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              cityFilter === city ? "bg-brand-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            {city}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-medium text-slate-500">Type:</span>
        <button
          type="button"
          onClick={() => setTypeFilter(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            !typeFilter ? "bg-brand-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          All
        </button>
        {types.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => { setTypeFilter((x) => (x === t ? null : t)); setPage(0); }}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              typeFilter === t ? "bg-brand-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            {PROVIDER_TYPE_LABELS[t] ?? t}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="text-xs font-medium text-slate-500">Best for:</span>
        <button
          type="button"
          onClick={() => setBestForFilter(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            !bestForFilter ? "bg-brand-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
          }`}
        >
          All
        </button>
        {allBestFor.map((b) => (
          <button
            key={b}
            type="button"
            onClick={() => { setBestForFilter((x) => (x === b ? null : b)); setPage(0); }}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              bestForFilter === b ? "bg-brand-600 text-white" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-600">
        Showing {filtered.length} provider{filtered.length !== 1 ? "s" : ""}.
      </p>

      <div className="space-y-4">
        {paginated.map((p) => (
          <article
            key={p.slug}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {PROVIDER_TYPE_LABELS[p.providerType] ?? p.providerType}
                </p>
                <p className="mt-1 text-sm text-slate-600">{p.shortDescription}</p>
                {p.cityRelevance.length > 0 ? (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    {p.cityRelevance.join(", ")}
                  </div>
                ) : null}
                {p.bestFor.length > 0 ? (
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {p.bestFor.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
                      >
                        <Tag className="mr-1 h-3 w-3" aria-hidden />
                        {b}
                      </span>
                    ))}
                  </div>
                ) : null}
                {p.feeNote ? <p className="mt-1.5 text-xs text-slate-500">{p.feeNote}</p> : null}
              </div>
              <div className="flex shrink-0 flex-col gap-2">
                <a
                  href={p.providerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  Visit provider <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link
                  href={`${profileBasePath}/${p.slug}/`}
                  className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
                >
                  View details
                </Link>
              </div>
            </div>
          </article>
        ))}
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
