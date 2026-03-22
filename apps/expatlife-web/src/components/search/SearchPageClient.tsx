"use client";

import Link from "next/link";
import type { SearchResult } from "@/src/lib/search/searchDocument";
import type { InternalLink } from "@/src/lib/routes/routeStatus";
import { SearchFieldWithPreview } from "./SearchFieldWithPreview";
import { SearchResultsList } from "./SearchResultsList";
import { SearchEmptyState } from "./SearchEmptyState";

type SearchPageClientProps = {
  initialQuery: string;
  results: SearchResult[];
  quickLinks: InternalLink[];
  recoveryLinks: InternalLink[];
};

export function SearchPageClient({ initialQuery, results, quickLinks, recoveryLinks }: SearchPageClientProps) {
  const hasQuery = initialQuery.length > 0;
  const showEmpty = hasQuery && results.length === 0;

  return (
    <div className="min-w-0 space-y-8">
      <div className="max-w-2xl min-w-0" role="search">
        <SearchFieldWithPreview variant="page" id="search-page-q" initialQuery={initialQuery} />
      </div>

      {hasQuery && results.length > 0 ? (
        <div className="min-w-0">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Search results</h2>
          <div className="mt-3 min-w-0">
            <SearchResultsList results={results} />
          </div>
        </div>
      ) : null}

      {showEmpty ? <SearchEmptyState query={initialQuery} recoveryLinks={recoveryLinks} /> : null}

      {!hasQuery ? (
        <p className="text-sm text-slate-600">
          Search covers live guides, tools, visa pages, services, cities, and key hubs. Results only include pages
          that are published on this site.
        </p>
      ) : null}

      <div className="min-w-0">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Quick links</h2>
        <ul className="mt-3 grid min-w-0 list-none gap-2 sm:grid-cols-2">
          {quickLinks.map((link) => (
            <li key={link.href} className="min-w-0">
              <Link
                href={link.href}
                className="block min-h-[44px] rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-snug text-slate-800 shadow-sm transition hover:border-brand-200 hover:bg-brand-50/50 hover:text-brand-800 sm:min-h-0 sm:py-2.5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
