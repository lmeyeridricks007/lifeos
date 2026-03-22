/**
 * Search index model. Built server-side from site data; only documents whose href
 * passes `isRouteLive` are included in the public index (see getSearchIndex.ts).
 */

export type SearchPageType =
  | "guide"
  | "service"
  | "city"
  | "trust"
  | "tool"
  | "hub"
  | "concept"
  | "visa";

/** Raw document before live-route filter; `searchText` drives token matching. */
export type SearchDocument = {
  id: string;
  title: string;
  href: string;
  categoryLabel: string;
  pageType: SearchPageType;
  section?: string;
  description: string;
  image?: string | null;
  imageAlt?: string | null;
  keywords: string[];
  /** Normalized concatenation of fields for scoring (lowercased elsewhere). */
  searchText: string;
};

/** Serializable result returned to the client (no internal scoring fields). */
export type SearchResult = {
  id: string;
  title: string;
  href: string;
  description: string;
  categoryLabel: string;
  pageType: SearchPageType;
  section?: string;
  image?: string | null;
  imageAlt?: string | null;
};

export function toSearchResult(doc: SearchDocument): SearchResult {
  return {
    id: doc.id,
    title: doc.title,
    href: doc.href,
    description: doc.description,
    categoryLabel: doc.categoryLabel,
    pageType: doc.pageType,
    section: doc.section,
    image: doc.image,
    imageAlt: doc.imageAlt,
  };
}
