"use client";

import type { SearchResult } from "@/src/lib/search/searchDocument";
import { SearchResultCard } from "./SearchResultCard";

export function SearchResultsList({ results }: { results: SearchResult[] }) {
  if (results.length === 0) return null;

  return (
    <ul className="grid min-w-0 list-none gap-3 sm:gap-4" role="list">
      {results.map((item) => (
        <li key={item.id} className="min-w-0">
          <SearchResultCard result={item} />
        </li>
      ))}
    </ul>
  );
}
