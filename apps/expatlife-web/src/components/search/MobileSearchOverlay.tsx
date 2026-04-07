"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useDebouncedValue } from "@/src/hooks/useDebouncedValue";
import { useSearchPreviewFetch } from "@/src/hooks/useSearchPreviewFetch";
import {
  SEARCH_PREVIEW_DEBOUNCE_MS,
  SEARCH_PREVIEW_MIN_QUERY_LENGTH,
} from "@/src/lib/search/previewConfig";
/** Static list (client-safe); mirrors `quickLinkData` — server `/search` page filters the same set with `isRouteLive`. */
import { QUICK_LINK_DEFINITIONS } from "@/src/lib/search/quickLinkData";
import { SearchPreviewHits } from "./SearchPreviewHits";
import { trackSearchUsed } from "@/lib/analytics/track";

type MobileSearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileSearchOverlay({ isOpen, onClose }: MobileSearchOverlayProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const [query, setQuery] = useState("");
  const debounced = useDebouncedValue(query, SEARCH_PREVIEW_DEBOUNCE_MS);
  const { results, loading } = useSearchPreviewFetch(debounced);

  const queryReady = query.trim().length >= SEARCH_PREVIEW_MIN_QUERY_LENGTH;
  const debouncedReady = debounced.trim().length >= SEARCH_PREVIEW_MIN_QUERY_LENGTH;
  const previewLoading = (queryReady && !debouncedReady) || (debouncedReady && loading);

  const footerHref = useMemo(() => `/search?q=${encodeURIComponent(query.trim())}`, [query]);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        previouslyFocused?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const q = query.trim();
      if (q) {
        trackSearchUsed({ query: q, source: "mobile_overlay" });
        onClose();
        router.push(`/search?q=${encodeURIComponent(q)}`);
      }
    },
    [router, onClose, query]
  );

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm"
        aria-hidden
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className={cn(
          "fixed left-4 right-4 z-[70] max-h-[min(85vh,36rem)] min-w-0 overflow-hidden rounded-card border border-border bg-surface-raised pb-[env(safe-area-inset-bottom,0px)] shadow-popover ring-1 ring-border/20",
          "top-[max(0.75rem,env(safe-area-inset-top,0px)+0.5rem)] sm:top-[10%]"
        )}
      >
        <div className="flex min-h-[52px] items-center gap-2 border-b border-border bg-surface-muted/20 p-3">
          <Search className="h-5 w-5 shrink-0 text-foreground-faint" aria-hidden />
          <form onSubmit={handleSubmit} className="min-w-0 flex-1">
            <input
              ref={inputRef}
              type="search"
              name="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides, tools, services…"
              autoComplete="off"
              aria-autocomplete="list"
              className="w-full min-w-0 bg-transparent py-2 text-base text-foreground placeholder:text-foreground-faint focus:outline-none"
              aria-label="Search guides, tools, and services"
            />
          </form>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="-mr-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-foreground-muted transition-colors duration-150 hover:bg-surface-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {queryReady ? (
          <div className="border-b border-border px-3 py-2">
            <SearchPreviewHits
              results={results}
              loading={previewLoading}
              query={query}
              listboxId={listboxId}
              onPick={onClose}
              footerHref={footerHref}
            />
          </div>
        ) : (
          <p className="border-b border-border/60 px-4 py-2.5 text-xs text-foreground-muted">
            Type at least {SEARCH_PREVIEW_MIN_QUERY_LENGTH} characters to preview matching pages. Press Enter for the
            full search page.
          </p>
        )}

        <div className="max-h-[40vh] overflow-y-auto overscroll-contain p-3">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Quick links</p>
          <ul className="space-y-1">
            {QUICK_LINK_DEFINITIONS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block min-h-[44px] rounded-xl px-3 py-3 text-sm font-medium leading-snug text-foreground transition-colors duration-150 hover:bg-brand-muted/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:ring-inset"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
