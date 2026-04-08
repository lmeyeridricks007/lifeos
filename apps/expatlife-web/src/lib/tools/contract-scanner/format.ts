/** Collapse whitespace; preserve paragraph breaks loosely. */
export function normalizeContractText(raw: string): string {
  return raw
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[\u00a0\t]+/g, " ")
    .replace(/[ \u00a0]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function truncateSnippet(text: string, maxLen = 220): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= maxLen) return t;
  return `${t.slice(0, maxLen - 1)}…`;
}

export function excerptAround(haystack: string, index: number, radius = 110): string {
  const start = Math.max(0, index - radius);
  const end = Math.min(haystack.length, index + radius);
  let slice = haystack.slice(start, end).replace(/\s+/g, " ").trim();
  if (start > 0) slice = `…${slice}`;
  if (end < haystack.length) slice = `${slice}…`;
  return truncateSnippet(slice, 240);
}
