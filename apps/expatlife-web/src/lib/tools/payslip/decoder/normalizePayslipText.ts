/**
 * Text normalization for decoder: preserve lines, trim noise, dedupe empty lines.
 */
import { collapseSpaces } from "@/src/lib/tools/payslip/parse/amounts";

export type NormalizedPayslipText = {
  /** Joined text for storage/API `extractedText` consistency. */
  displayText: string;
  /** Non-empty trimmed lines. */
  lines: string[];
  /** Original line index map (same length as lines). */
  originalLineIndexes: number[];
};

export function normalizePayslipText(raw: string): NormalizedPayslipText {
  const rawLines = raw.split(/\r?\n/);
  const lines: string[] = [];
  const originalLineIndexes: number[] = [];
  let prevEmpty = true;

  for (let i = 0; i < rawLines.length; i++) {
    const trimmed = collapseSpaces(rawLines[i] ?? "");
    if (!trimmed) {
      if (!prevEmpty) {
        prevEmpty = true;
      }
      continue;
    }
    prevEmpty = false;
    lines.push(trimmed);
    originalLineIndexes.push(i);
  }

  return {
    displayText: lines.join("\n"),
    lines,
    originalLineIndexes,
  };
}
