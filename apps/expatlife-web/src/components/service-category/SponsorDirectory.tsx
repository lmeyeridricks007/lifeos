"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import type { SponsorRecord } from "@/src/lib/service-category/types";
import type { SponsorDirectoryMetadata } from "@/src/lib/service-category/types";

const PAGE_SIZE = 25;

function getFirstChar(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  const first = trimmed[0].toUpperCase();
  if (/\d/.test(first)) return "0-9";
  if (/[A-Z]/.test(first)) return first;
  return "?";
}

type Props = {
  metadata: SponsorDirectoryMetadata;
  /** Base path for future sponsor profile pages, e.g. /netherlands/services/highly-skilled-migrant-sponsors */
  profileBasePath?: string;
};

export function SponsorDirectory({ metadata, profileBasePath }: Props) {
  const [sponsors, setSponsors] = useState<SponsorRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [letterFilter, setLetterFilter] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch("/data/hsm-sponsors/sponsors.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load sponsor list");
        return res.json();
      })
      .then((data: SponsorRecord[]) => {
        if (!cancelled) setSponsors(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    let list = sponsors;
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.kvkNumber.includes(q) ||
          (s.industry?.toLowerCase().includes(q)) ||
          (s.typeOfWork?.toLowerCase().includes(q)) ||
          (s.location?.toLowerCase().includes(q))
      );
    }
    if (letterFilter) {
      if (letterFilter === "0-9") {
        list = list.filter((s) => /\d/.test(getFirstChar(s.name)));
      } else {
        list = list.filter((s) => getFirstChar(s.name) === letterFilter);
      }
    }
    return list;
  }, [sponsors, query, letterFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages - 1);
  const paginated = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const letters = useMemo(() => {
    const set = new Set<string>();
    sponsors.forEach((s) => set.add(getFirstChar(s.name)));
    return ["0-9", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").filter((l) => set.has(l))];
  }, [sponsors]);

  if (error) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800">
        <p className="font-medium">Could not load sponsor list</p>
        <p className="mt-1 text-sm">{error}</p>
        <a
          href={metadata.sourceHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-amber-700 underline"
        >
          View official IND register <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-slate-600">Source:</span>
          <a
            href={metadata.sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
          >
            IND – {metadata.registerType}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <span className="text-sm text-slate-500">
            Last updated: {metadata.lastUpdated} · {metadata.totalRecords.toLocaleString()} organisations
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input
            type="search"
            placeholder="Search by organisation name, industry, or location..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(0);
            }}
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            aria-label="Search sponsors by name, industry, or location"
          />
        </div>
        <div className="flex flex-wrap gap-1">
          <span className="sr-only">Filter by first letter</span>
          {letters.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() => {
                setLetterFilter((prev) => (prev === letter ? null : letter));
                setPage(0);
              }}
              className={`rounded px-2 py-1 text-xs font-medium transition ${
                letterFilter === letter
                  ? "bg-brand-600 text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 py-12">
          <p className="text-slate-600">Loading sponsor list…</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-slate-600">
            Showing {filtered.length.toLocaleString()} organisation{filtered.length !== 1 ? "s" : ""}
            {letterFilter ? ` starting with “${letterFilter}”` : ""}.
          </p>
          <div className="max-w-full overflow-x-auto overscroll-x-contain touch-pan-x rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead>
                <tr className="bg-slate-100/80">
                  <th scope="col" className="px-5 py-3.5 font-semibold text-slate-900">
                    Organisation
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-semibold text-slate-900">
                    Industry
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-semibold text-slate-900">
                    Type of work
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-semibold text-slate-900">
                    Location
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-semibold text-slate-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {paginated.map((row) => (
                  <tr key={row.slug} className="transition-colors hover:bg-slate-50">
                    <td className="px-5 py-3.5">
                      <span className="font-medium text-slate-900">{row.name}</span>
                    </td>
                    <td className="px-5 py-3.5 text-slate-600">
                      {row.industry ?? "—"}
                    </td>
                    <td className="px-5 py-3.5 text-slate-600">
                      {row.typeOfWork ?? "—"}
                    </td>
                    <td className="px-5 py-3.5 text-slate-600">
                      {row.location ?? "—"}
                    </td>
                    <td className="px-5 py-3.5">
                      {row.websiteUrl ? (
                        <a
                          href={row.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-brand-600 hover:bg-brand-50 hover:text-brand-700"
                        >
                          View
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : profileBasePath ? (
                        <Link
                          href={`${profileBasePath}/${row.slug}/`}
                          className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-brand-600 hover:bg-brand-50 hover:text-brand-700"
                        >
                          View
                        </Link>
                      ) : (
                        <a
                          href={metadata.sourceHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-800"
                        >
                          IND register
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
        </>
      )}
    </div>
  );
}
