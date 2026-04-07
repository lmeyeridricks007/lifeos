"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import type { SearchResult } from "@/src/lib/search/searchDocument";
import { isComingSoonContent } from "@/src/lib/content/contentPublishStatus";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
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
        "overflow-hidden rounded-card border border-border bg-surface-raised shadow-popover ring-1 ring-border/20",
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
          <div className="flex items-center gap-2 px-4 py-3 text-sm text-foreground-muted" role="status" aria-live="polite">
            <Loader2 className="h-4 w-4 shrink-0 animate-spin text-brand" aria-hidden />
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
            className="flex min-h-[52px] gap-3 px-3 py-2.5 text-left transition-colors duration-150 hover:bg-brand-muted/40 focus:bg-brand-muted/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/20"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-border bg-surface-muted">
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
                <span className="flex h-full w-full items-center justify-center text-foreground-faint" aria-hidden>
                  <FileText className="h-5 w-5" />
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 gap-y-0.5">
                <SearchBadge pageType={result.pageType} label={result.categoryLabel} className="max-w-[10rem]" />
              </div>
              <p className="mt-0.5 flex flex-wrap items-center gap-1.5 line-clamp-2 text-sm font-semibold leading-snug text-foreground">
                <span className="min-w-0">{result.title}</span>
                {result.contentPublishStatus && isComingSoonContent(result.contentPublishStatus) ? (
                  <ComingSoonBadge label="Expanding" className="normal-case" />
                ) : null}
              </p>
              {result.description ? (
                <p className="mt-0.5 line-clamp-1 text-xs text-foreground-muted">{result.description}</p>
              ) : null}
            </div>
          </Link>
        ))
          : null}

        {showEmpty ? (
          <p className="px-4 py-3 text-sm text-foreground-muted" role="status">
            No quick matches. Press Search or Enter for the full results page.
          </p>
        ) : null}
      </div>

      <div className="border-t border-border bg-surface-muted/90 px-3 py-2.5">
        <Link
          href={footerHref}
          onClick={onPick}
          className="block text-center text-sm font-semibold text-link transition-colors duration-150 hover:text-link-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          See all results
        </Link>
      </div>
    </div>
  );
}
