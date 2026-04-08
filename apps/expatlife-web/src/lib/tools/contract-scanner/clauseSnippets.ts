import { truncateSnippet } from "@/src/lib/tools/contract-scanner/format";

function splitSentences(text: string): string[] {
  const parts = text.split(/(?<=[.!?…])\s+/).map((s) => s.trim());
  return parts.filter((s) => s.length > 12);
}

/**
 * Extract a compact 1–3 sentence excerpt around a match (not a giant paragraph).
 */
export function extractClauseSnippet(
  haystack: string,
  matchStart: number,
  matchLength: number,
  opts?: { maxChars?: number; maxSentences?: number }
): string {
  const maxChars = opts?.maxChars ?? 340;
  const maxSentences = opts?.maxSentences ?? 3;
  const matchEnd = matchStart + matchLength;

  let winStart = Math.max(0, matchStart - 200);
  let winEnd = Math.min(haystack.length, matchEnd + 200);

  const prefix = haystack.slice(winStart, matchStart);
  const lastBreak = Math.max(
    prefix.lastIndexOf(". "),
    prefix.lastIndexOf("! "),
    prefix.lastIndexOf("? "),
    prefix.lastIndexOf(".\n"),
    prefix.lastIndexOf("?\n"),
    prefix.lastIndexOf("!\n")
  );
  if (lastBreak >= 0) {
    winStart = winStart + lastBreak + 2;
  }

  let window = haystack.slice(winStart, winEnd).replace(/\s+/g, " ").trim();
  if (!window.length) {
    return truncateSnippet(haystack.slice(matchStart, matchEnd), maxChars);
  }

  const sentences = splitSentences(window);
  if (sentences.length === 0) {
    return truncateSnippet(window, maxChars);
  }

  const relMatchStart = matchStart - winStart;
  const relMatchEnd = matchEnd - winStart;
  let cursor = 0;
  let hitIdx = 0;
  for (let i = 0; i < sentences.length; i++) {
    const idx = window.indexOf(sentences[i], cursor);
    if (idx < 0) break;
    const end = idx + sentences[i].length;
    if (relMatchEnd > idx && relMatchStart < end) {
      hitIdx = i;
      break;
    }
    cursor = idx + 1;
  }

  const from = Math.max(0, hitIdx - 1);
  const to = Math.min(sentences.length, from + maxSentences);
  let out = sentences.slice(from, to).join(" ");
  out = truncateSnippet(out.trim(), maxChars);
  if (winStart > 0) out = `…${out}`;
  if (winEnd < haystack.length && !out.endsWith("…")) out = `${out}…`;
  return out;
}
