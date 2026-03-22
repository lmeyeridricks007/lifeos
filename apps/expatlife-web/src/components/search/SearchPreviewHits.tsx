"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import type { SearchResult } from "@/src/lib/search/searchDocument";
import { SearchBadge } from "./SearchBadge";

type SearchPreviewHitsProps = {
  results: SearchResult[];
  loading: boolean;
  query: string;
  listboxId: string;
  onPick?: () => void;
  /** e.g. "See all results" */
  footerHref: string;
  className?: string;
};

export function SearchPreviewHits({
  results,
  loading,
  query,
  listboxId,
  onPick,
  footerHref,
  className,
}: SearchPreviewHitsProps) {
  const trimmed = query.trim();
  const showEmpty = !loading && trimmed.length > 0 && results.length === 0;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg ring-1 ring-slate-900/5",
        className
      )}
    >
      <div
        id={listboxId}
        role="listbox"
        aria-label="Matching pages"
        className="max-h-[min(22rem,55vh)] overflow-y-auto overscroll-contain py-1"
      >
        {loading ? (
          <div className="flex items-center gap-2 px-4 py-3 text-sm text-slate-500" role="status" aria-live="polite">
            <Loader2 className="h-4 w-4 shrink-0 animate-spin text-brand-600" aria-hidden />
            Searching…
          </div>
        ) : null}

        {!loading
          ? results.map((result) => (
          <Link
            key={result.id}
            href={result.href}
            role="option"
            onClick={onPick}
            className="flex min-h-[52px] gap-3 px-3 py-2.5 text-left transition hover:bg-slate-50 focus:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
              {result.image ? (
                <Image
                  src={result.image}
                  alt={result.imageAlt || "Page thumbnail"}
                  width={44}
                  height={44}
                  className="h-11 w-11 object-cover"
                  sizes="44px"
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-slate-400" aria-hidden>
                  <FileText className="h-5 w-5" />
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 gap-y-0.5">
                <SearchBadge pageType={result.pageType} label={result.categoryLabel} className="max-w-[10rem]" />
              </div>
              <p className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug text-slate-900">{result.title}</p>
              {result.description ? (
                <p className="mt-0.5 line-clamp-1 text-xs text-slate-600">{result.description}</p>
              ) : null}
            </div>
          </Link>
        ))
          : null}

        {showEmpty ? (
          <p className="px-4 py-3 text-sm text-slate-600" role="status">
            No quick matches. Press Search or Enter for the full results page.
          </p>
        ) : null}
      </div>

      <div className="border-t border-slate-100 bg-slate-50/80 px-3 py-2">
        <Link
          href={footerHref}
          onClick={onPick}
          className="block text-center text-sm font-semibold text-brand-700 hover:text-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          See all results
        </Link>
      </div>
    </div>
  );
}
