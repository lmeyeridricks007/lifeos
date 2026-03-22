import { useEffect, useState } from "react";
import type { SearchResult } from "@/src/lib/search/searchDocument";
import { SEARCH_PREVIEW_MIN_QUERY_LENGTH } from "@/src/lib/search/previewConfig";

/**
 * Fetches `/api/search-preview` when `debouncedQuery` is long enough. Abort stale requests on change.
 */
export function useSearchPreviewFetch(debouncedQuery: string): {
  results: SearchResult[];
  loading: boolean;
  active: boolean;
} {
  const trimmed = debouncedQuery.trim();
  const active = trimmed.length >= SEARCH_PREVIEW_MIN_QUERY_LENGTH;
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!active) {
      setResults([]);
      setLoading(false);
      return;
    }

    const ac = new AbortController();
    setLoading(true);

    fetch(`/api/search-preview?q=${encodeURIComponent(trimmed)}`, { signal: ac.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Search preview failed");
        return res.json() as Promise<{ results?: SearchResult[] }>;
      })
      .then((data) => {
        setResults(data.results ?? []);
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return;
        setResults([]);
      })
      .finally(() => {
        if (!ac.signal.aborted) setLoading(false);
      });

    return () => ac.abort();
  }, [trimmed, active]);

  return { results, loading, active };
}
