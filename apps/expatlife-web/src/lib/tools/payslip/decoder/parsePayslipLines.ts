/**
 * Split lines into label + money tokens (European formats).
 */
import { findMoneyTokensInLine, foldAccents, type MoneyToken } from "@/src/lib/tools/payslip/parse/amounts";

export type ParsedPayslipLine = {
  rawLine: string;
  lineIndex: number;
  labelPart: string;
  moneyTokens: MoneyToken[];
};

function isPercentAdjacent(line: string, tok: MoneyToken): boolean {
  const after = line.slice(tok.end, tok.end + 2);
  return after.trimStart().startsWith("%");
}

/**
 * Label = text before first money token (trimmed). Drops trailing noise like single dashes.
 */
export function parsePayslipLines(lines: string[]): ParsedPayslipLine[] {
  const out: ParsedPayslipLine[] = [];
  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i] ?? "";
    if (!rawLine) continue;
    const allToks = findMoneyTokensInLine(rawLine);
    const moneyTokens = allToks.filter((t) => {
      if (isPercentAdjacent(rawLine, t)) return false;
      if (/^\d+,\d{1,2}$/.test(t.raw.replace(/€\s*/i, "").trim()) && rawLine.slice(t.end).trimStart().startsWith("%")) {
        return false;
      }
      return true;
    });

    let labelPart = rawLine;
    if (moneyTokens.length > 0) {
      const first = moneyTokens[0];
      labelPart = rawLine.slice(0, first.start).trim();
    }
    labelPart = labelPart.replace(/[\s:-]+$/g, "").trim();

    out.push({
      rawLine,
      lineIndex: i,
      labelPart,
      moneyTokens,
    });
  }
  return out;
}

/** Normalize label for alias dictionary matching. */
export function normalizeForAlias(label: string): string {
  let s = foldAccents(label).toLowerCase();
  s = s.replace(/\u00a0/g, " ").replace(/\s+/g, " ");
  s = s.replace(/\./g, "");
  return s.trim();
}

export function matchesNormAndAlias(norm: string, alias: string): boolean {
  if (!alias.length) return false;
  if (norm === alias) return true;
  if (alias.length < 5) {
    return (
      norm === alias ||
      norm.startsWith(`${alias} `) ||
      norm.endsWith(` ${alias}`) ||
      norm.includes(` ${alias} `)
    );
  }
  return norm.startsWith(alias) || norm.startsWith(`${alias} `) || norm.includes(` ${alias}`) || norm.endsWith(` ${alias}`);
}
