"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Plus,
  Banknote,
} from "lucide-react";
import type { StartupFacilitatorRecord } from "@/src/lib/service-category/types";
import type { StartupFacilitatorDirectoryMetadata } from "@/src/lib/service-category/types";

const PAGE_SIZE = 15;
const SOURCE_LABEL = "RVO facilitator list";
const MAX_SHORTLIST = 3;

function getFirstChar(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  const first = trimmed[0].toUpperCase();
  if (/\d/.test(first)) return "0-9";
  if (/[A-Z]/.test(first)) return first;
  return "?";
}

type Props = {
  facilitators: StartupFacilitatorRecord[];
  metadata: StartupFacilitatorDirectoryMetadata;
  profileBasePath?: string;
  /** When provided, show "Add to shortlist" and sync with comparison section. */
  shortlist?: string[];
  onAddToShortlist?: (slug: string) => void;
  onRemoveFromShortlist?: (slug: string) => void;
};

export function StartupFacilitatorDirectory({
  facilitators,
  metadata,
  profileBasePath = "/netherlands/services/startup-visa-advisors",
  shortlist = [],
  onAddToShortlist,
  onRemoveFromShortlist,
}: Props) {
  const [query, setQuery] = useState("");
  const [letterFilter, setLetterFilter] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    let list = facilitators;
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((f) => f.name.toLowerCase().includes(q));
    }
    if (letterFilter) {
      if (letterFilter === "0-9") {
        list = list.filter((f) => /\d/.test(getFirstChar(f.name)));
      } else {
        list = list.filter((f) => getFirstChar(f.name) === letterFilter);
      }
    }
    return list;
  }, [facilitators, query, letterFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, Math.max(0, totalPages - 1));

  // Keep page in bounds when filters change (e.g. totalPages shrinks)
  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, page]);

  const paginated = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const letters = useMemo(() => {
    const set = new Set<string>();
    facilitators.forEach((f) => set.add(getFirstChar(f.name)));
    return ["0-9", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").filter((l) => set.has(l))];
  }, [facilitators]);

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
            {metadata.sourceLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <span className="text-sm text-slate-500">
            Last checked: {metadata.lastChecked} · {metadata.totalRecords} facilitator{metadata.totalRecords !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input
            type="search"
            placeholder="Search by facilitator name..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(0);
            }}
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
            aria-label="Search startup facilitators"
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

      <p className="text-sm text-slate-600">
        Showing {filtered.length} facilitator{filtered.length !== 1 ? "s" : ""}
        {letterFilter ? ` starting with "${letterFilter}"` : ""}.
      </p>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th scope="col" className="px-4 py-3 font-semibold text-slate-900">
                Facilitator
              </th>
              <th scope="col" className="hidden px-4 py-3 font-semibold text-slate-900 lg:table-cell">
                What they provide
              </th>
              <th scope="col" className="hidden px-4 py-3 font-semibold text-slate-900 md:table-cell">
                Typical cost
              </th>
              <th scope="col" className="hidden px-4 py-3 font-semibold text-slate-900 md:table-cell">
                Source
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-slate-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {paginated.map((row) => {
              const inShortlist = shortlist.includes(row.slug);
              const canAdd = onAddToShortlist && !inShortlist && shortlist.length < MAX_SHORTLIST;
              return (
                <tr key={row.slug} className="hover:bg-slate-50/50">
                  <td className="px-4 py-3">
                    <span className="font-medium text-slate-900">{row.name}</span>
                    {row.shortDescription ? (
                      <p className="mt-0.5 max-w-sm text-xs text-slate-600 lg:hidden">{row.shortDescription}</p>
                    ) : null}
                  </td>
                  <td className="hidden px-4 py-3 text-slate-600 lg:table-cell">
                    {row.servicesOffered && row.servicesOffered.length > 0 ? (
                      <ul className="list-inside list-disc space-y-0.5 text-xs">
                        {row.servicesOffered.slice(0, 3).map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                        {row.servicesOffered.length > 3 ? (
                          <li className="text-slate-500">+{row.servicesOffered.length - 3} more</li>
                        ) : null}
                      </ul>
                    ) : row.shortDescription ? (
                      <span className="line-clamp-2 text-xs">{row.shortDescription}</span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="hidden px-4 py-3 md:table-cell">
                    {row.typicalCost ? (
                      <span className="inline-flex items-center gap-1 rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 text-xs text-slate-700">
                        <Banknote className="h-3 w-3 shrink-0 text-slate-500" aria-hidden />
                        {row.typicalCost}
                      </span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </td>
                  <td className="hidden px-4 py-3 text-slate-600 md:table-cell">
                    {SOURCE_LABEL}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {onAddToShortlist && canAdd ? (
                        <button
                          type="button"
                          onClick={() => onAddToShortlist(row.slug)}
                          className="inline-flex items-center gap-1 rounded-lg border-2 border-brand-400 bg-brand-500 px-2 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-600"
                        >
                          <Plus className="h-3.5 w-3.5" /> Add to compare
                        </button>
                      ) : onRemoveFromShortlist && inShortlist ? (
                        <button
                          type="button"
                          onClick={() => onRemoveFromShortlist(row.slug)}
                          className="inline-flex items-center gap-1 rounded-lg border border-amber-200 bg-amber-50 px-2 py-1.5 text-xs font-medium text-amber-800 hover:bg-amber-100"
                        >
                          In shortlist
                        </button>
                      ) : null}
                      {row.websiteUrl ? (
                        <a
                          href={row.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-800"
                        >
                          Visit website <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : null}
                      <Link
                        href={`${profileBasePath}/${row.slug}/`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
                      >
                        View details
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <nav className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4" aria-label="Facilitator list pagination">
          <p className="text-sm text-slate-600">
            Page {currentPage + 1} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <button
              type="button"
              onClick={() => setPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage >= totalPages - 1}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
