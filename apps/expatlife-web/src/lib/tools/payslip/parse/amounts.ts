/**
 * European / Dutch payroll number formats: thousands . or space, decimal comma; optional €; negatives - or ().
 * Also US/English-style amounts common on bilingual exports (e.g. 5,200.00).
 */

import { parseDutchOrEnglishMoneyToken } from "@/src/lib/payslip/parseDutchOrEnglishNumber";

const NBSP = /\u00a0/g;

/** Lowercase + strip combining marks for fuzzy matching. */
export function foldAccents(s: string): string {
  return s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

/** Collapse whitespace and NBSP for scanning. */
export function collapseSpaces(s: string): string {
  return s.replace(NBSP, " ").replace(/\s+/g, " ").trim();
}

/**
 * Parse a single European-style money token (no currency symbol in string preferred).
 */
export function parseEuropeanMoneyToken(token: string): number | null {
  let t = token.replace(/€/g, "").replace(NBSP, "").replace(/\s/g, "").trim();
  if (!t) return null;

  let neg = false;
  if (t.startsWith("(") && t.endsWith(")")) {
    neg = true;
    t = t.slice(1, -1).trim();
  }
  if (t.startsWith("-")) {
    neg = true;
    t = t.slice(1).trim();
  }
  if (t.endsWith("-")) {
    neg = true;
    t = t.slice(0, -1).trim();
  }

  // Dutch: 1.234,56 or 4 250,75
  if (/,/.test(t)) {
    const withoutThousands = t.includes(".") && /\d\.\d{3}/.test(t) ? t.replace(/\./g, "") : t.replace(/\s/g, "");
    const normalized = withoutThousands.replace(",", ".");
    const n = parseFloat(normalized);
    if (!Number.isFinite(n)) return null;
    return neg ? -n : n;
  }

  // US-style 5000.00 or plain integer
  if (/\d\.\d{2}$/.test(t)) {
    const n = parseFloat(t);
    return Number.isFinite(n) ? (neg ? -n : n) : null;
  }

  const n = parseFloat(t.replace(/\./g, ""));
  return Number.isFinite(n) ? (neg ? -n : n) : null;
}

export type MoneyToken = {
  raw: string;
  value: number;
  start: number;
  end: number;
};

export type PercentageToken = {
  raw: string;
  value: number;
  start: number;
  end: number;
};

function isPercentAdjacent(line: string, tok: Pick<MoneyToken, "start" | "end">): boolean {
  const after = line.slice(tok.end, tok.end + 3);
  return after.trimStart().startsWith("%");
}

function pushMoneyMatches(
  line: string,
  re: RegExp,
  parse: (signed: string) => number | null,
  rawMatches: MoneyToken[]
) {
  let m: RegExpExecArray | null;
  re.lastIndex = 0;
  while ((m = re.exec(line)) !== null) {
    const fullStart = m.index;
    const fullEnd = m.index + m[0].length;
    const display = m[0].trim().replace(NBSP, " ");
    const paren = m[1] === "(" && m[4] === ")";
    const minus = m[2] === "-";
    const numPart = m[3];
    const trailMinus = m[5] === "-";
    let signed = `${paren ? "(" : ""}${minus ? "-" : ""}${numPart}${paren ? ")" : ""}`;
    if (!paren && trailMinus) signed += "-";
    const value = parse(signed);
    if (value === null || value === 0) continue;
    const tok = { raw: display, value, start: fullStart, end: fullEnd };
    if (isPercentAdjacent(line, tok)) continue;
    rawMatches.push(tok);
  }
}

/**
 * Percentages like 49,50% or 49.50% (not attached as money).
 */
export function findPercentageTokensInLine(line: string): PercentageToken[] {
  const re = /\b(\d{1,2}[.,]\d{1,3}|\d{2,3})\s*%/gi;
  const out: PercentageToken[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(line)) !== null) {
    const n = parseFloat(m[1]!.replace(",", "."));
    if (!Number.isFinite(n)) continue;
    out.push({
      raw: m[0].trim().replace(NBSP, " "),
      value: n,
      start: m.index,
      end: m.index + m[0].length,
    });
  }
  return out;
}

/**
 * Find money-like tokens in a line (for amount-near-label heuristics).
 */
export function findMoneyTokensInLine(line: string): MoneyToken[] {
  const rawMatches: MoneyToken[] = [];

  /** Dutch-style + legacy dot decimals from older regex. */
  const dutchRe =
    /(?:€\s*)?(\()?(-)?\s*(\d{1,3}(?:[.\s\u00a0]\d{3})*,\d{1,2}|\d{1,3}(?:[.\s\u00a0]\d{3})+|\d+,\d{1,2}|\d+\.\d{2})(\))?(-)?/gi;
  pushMoneyMatches(line, dutchRe, (s) => parseEuropeanMoneyToken(s), rawMatches);

  /** English / bilingual: 1,234.56 or 5200.00 */
  const enRe = /(?:€\s*)?(\()?(-)?\s*(\d{1,3}(?:,\d{3})*\.\d{2}|\d{1,4}\.\d{2})(\))?(-)?/gi;
  pushMoneyMatches(line, enRe, (s) => parseDutchOrEnglishMoneyToken(s), rawMatches);

  rawMatches.sort((a, b) => b.raw.length - a.raw.length);
  const kept: MoneyToken[] = [];
  for (const t of rawMatches) {
    if (kept.some((k) => !(t.end <= k.start || t.start >= k.end))) continue;
    kept.push(t);
  }
  return kept.sort((a, b) => a.start - b.start);
}

/** Prefer amount closest to end of line (typical payslip column) or closest to keyword index. */
export function pickAmountForKeyword(line: string, keywordIndex: number, tokens: MoneyToken[]): MoneyToken | null {
  if (tokens.length === 0) return null;
  if (tokens.length === 1) return tokens[0];

  let best = tokens[0];
  let bestDist = Infinity;
  for (const t of tokens) {
    const tokenCenter = (t.start + t.end) / 2;
    const dist = Math.abs(tokenCenter - (keywordIndex + 10));
    const endBias = line.length - t.end;
    const score = dist + endBias * 0.15;
    if (score < bestDist) {
      bestDist = score;
      best = t;
    }
  }
  return best;
}

/** Trailing amount (last token on line) — common payroll layout. */
export function extractTrailingAmount(line: string): { display: string; value: number } | null {
  const tokens = findMoneyTokensInLine(line);
  if (tokens.length === 0) return null;
  const last = tokens[tokens.length - 1];
  return { display: last.raw.replace(NBSP, " ").trim(), value: last.value };
}
