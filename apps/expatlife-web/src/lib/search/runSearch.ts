/**
 * Token scoring over the live search index. MVP: title/description/keyword overlap;
 * no external search engine. Tuned for relocation intents (bank, visa, city names).
 */

import { getSearchIndex } from "./getSearchIndex";
import type { SearchResult } from "./searchDocument";
import { toSearchResult } from "./searchDocument";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^\w\s-]/g, " ");
}

function tokenize(text: string): string[] {
  return normalize(text).split(/\s+/).filter(Boolean);
}

function scoreDocument(
  queryTokens: string[],
  queryNorm: string,
  title: string,
  searchBlob: string,
  keywords: string[]
): number {
  const titleNorm = normalize(title);
  const blobNorm = normalize(searchBlob);
  const kwNorm = keywords.map((k) => normalize(k)).join(" ");

  let score = 0;
  if (queryNorm.length >= 2 && titleNorm.includes(queryNorm)) score += 40;
  if (queryNorm.length >= 3 && blobNorm.includes(queryNorm)) score += 25;

  for (const token of queryTokens) {
    if (token.length < 2) continue;
    if (titleNorm === token) score += 35;
    else if (titleNorm.includes(token)) score += 12;
    else if (blobNorm.includes(token)) score += 4;
    if (kwNorm.includes(token)) score += 8;
  }

  if (queryTokens.length > 1) {
    const phrase = queryTokens.join(" ");
    if (phrase.length > 2 && blobNorm.includes(phrase)) score += 18;
  }

  return score;
}

const MAX_RESULTS = 60;

export function runSearch(query: string): SearchResult[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const queryTokens = tokenize(trimmed);
  if (queryTokens.length === 0) return [];

  const queryNorm = normalize(trimmed).replace(/\s+/g, " ").trim();
  const index = getSearchIndex();
  const scored: Array<{ doc: (typeof index)[0]; score: number }> = [];

  for (const doc of index) {
    const searchBlob = `${doc.searchText} ${doc.keywords.join(" ")} ${doc.section ?? ""}`;
    const s = scoreDocument(queryTokens, queryNorm, doc.title, searchBlob, doc.keywords);
    if (s > 0) scored.push({ doc, score: s });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, MAX_RESULTS).map((x) => toSearchResult(x.doc));
}
