/**
 * Detect column-header language from early lines to bias period vs YTD inference.
 */
import { foldAccents } from "@/src/lib/tools/payslip/parse/amounts";

const YTD_HINTS = [
  "year to date",
  "ytd",
  "cumulative",
  "cumulatief",
  "cum.",
  "jaar t/m",
  "jaar tm",
  "t/m deze periode",
  "tot en met",
  "this year",
  "lopend jaar",
  "geaccumuleerd",
];

const PERIOD_HINTS = ["this period", "current period", "huidige periode", "periode", "period amount", "curr.", "per."];

export type ColumnHeaderContext = {
  /** When true, prefer interpreting the last money column as YTD when ambiguous. */
  ytdColumnLikely: boolean;
  matchedHints: string[];
};

export function detectColumnHeaderContext(lines: string[]): ColumnHeaderContext {
  const head = lines.slice(0, 40).join(" ").toLowerCase();
  const folded = foldAccents(head);
  const matched: string[] = [];
  let ytdScore = 0;
  for (const h of YTD_HINTS) {
    if (folded.includes(h)) {
      ytdScore += 1;
      matched.push(h);
    }
  }
  let periodScore = 0;
  for (const h of PERIOD_HINTS) {
    if (folded.includes(h)) {
      periodScore += 1;
      matched.push(h);
    }
  }
  return {
    ytdColumnLikely: ytdScore >= periodScore && ytdScore > 0,
    matchedHints: matched.slice(0, 12),
  };
}
