"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useDebouncedValue } from "@/src/hooks/useDebouncedValue";
import { useSearchPreviewFetch } from "@/src/hooks/useSearchPreviewFetch";
import {
  SEARCH_PREVIEW_DEBOUNCE_MS,
  SEARCH_PREVIEW_MIN_QUERY_LENGTH,
} from "@/src/lib/search/previewConfig";
import { SearchPreviewHits } from "./SearchPreviewHits";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import { trackSearchUsed } from "@/lib/analytics/track";

type Variant = "header" | "page";

type Props = {
  variant: Variant;
  id?: string;
  initialQuery?: string;
  onNavigate?: () => void;
  className?: string;
};

export function SearchFieldWithPreview({ variant, id, initialQuery = "", onNavigate, className }: Props) {
  const router = useRouter();
  const listboxId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState(initialQuery);
  const debounced = useDebouncedValue(query, SEARCH_PREVIEW_DEBOUNCE_MS);
  const { results, loading } = useSearchPreviewFetch(debounced);

  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const queryReady = query.trim().length >= SEARCH_PREVIEW_MIN_QUERY_LENGTH;
  const debouncedReady = debounced.trim().length >= SEARCH_PREVIEW_MIN_QUERY_LENGTH;
  const showPanel = panelOpen && queryReady;
  /** After 3+ chars, show spinner until debounce catches up or fetch finishes. */
  const previewLoading = (queryReady && !debouncedReady) || (debouncedReady && loading);

  useEffect(() => {
    if (!showPanel) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setPanelOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [showPanel]);

  const footerHref = useMemo(() => `/search?q=${encodeURIComponent(query.trim())}`, [query]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const q = query.trim();
      setPanelOpen(false);
      if (!q) return;
      trackSearchUsed({ query: q, source: variant === "header" ? "header" : "page" });
      onNavigate?.();
      router.push(`/search?q=${encodeURIComponent(q)}`);
    },
    [query, router, onNavigate, variant]
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPanelOpen(true);
  };

  const onInputFocus = () => {
    if (query.trim().length >= SEARCH_PREVIEW_MIN_QUERY_LENGTH) setPanelOpen(true);
  };

  const onPick = () => {
    setPanelOpen(false);
    onNavigate?.();
  };

  const hits = showPanel ? (
    <SearchPreviewHits
      results={results}
      loading={previewLoading}
      query={query}
      listboxId={listboxId}
      onPick={onPick}
      footerHref={footerHref}
    />
  ) : null;

  if (variant === "header") {
    return (
      <div ref={rootRef} className={cn("relative", className)}>
        <form onSubmit={handleSubmit} role="search" className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-foreground-faint" />
          <input
            id={id}
            type="search"
            name="q"
            value={query}
            onChange={onInputChange}
            onFocus={onInputFocus}
            autoComplete="off"
            placeholder="Search guides and tools"
            aria-label="Search guides and tools"
            aria-autocomplete="list"
            className="h-11 min-h-[44px] w-[15.5rem] rounded-xl border border-border bg-surface-raised py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-foreground-faint shadow-card transition-[border-color,box-shadow] duration-150 focus:border-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:w-56"
          />
          {hits ? (
            <div className="absolute left-0 right-0 top-[calc(100%+0.35rem)] z-[100] min-w-[min(100vw-2rem,22rem)] max-w-[calc(100vw-2rem)] sm:min-w-[20rem]">
              {hits}
            </div>
          ) : null}
        </form>
      </div>
    );
  }

  return (
    <div ref={rootRef} className={cn("relative min-w-0", className)}>
      <form onSubmit={handleSubmit} role="search" className="relative min-w-0">
        {id ? (
          <label htmlFor={id} className="sr-only">
            Search guides, tools, and services
          </label>
        ) : null}
        <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-stretch">
          <div className="relative min-w-0 flex-1">
            <Input
              id={id}
              type="search"
              name="q"
              value={query}
              onChange={onInputChange}
              onFocus={onInputFocus}
              autoComplete="off"
              placeholder="Search guides, tools, and services"
              aria-label="Search guides, tools, and services"
              aria-autocomplete="list"
              className="min-w-0 flex-1"
            />
            {hits ? (
              <div className="absolute left-0 right-0 top-[calc(100%+0.35rem)] z-50 min-w-0 sm:min-w-[28rem]">
                {hits}
              </div>
            ) : null}
          </div>
          <Button type="submit" variant="primary" className="w-full shrink-0 sm:w-auto sm:min-w-[6.5rem]">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
