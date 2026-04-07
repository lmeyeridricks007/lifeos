/**
 * Normalize PDF / paste text: whitespace, obvious junk repeats.
 * Preserves line breaks where they help line-based parsing.
 */
export function normalizePayslipText(raw: string): string {
  let t = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  // Soft hyphen and common PDF artifacts
  t = t.replace(/\u00ad/g, "");
  t = t.replace(/[\t\f\v]+/g, " ");
  t = t.replace(/[ \u00a0]+/g, " ");
  // Collapse 3+ newlines (headers/footers noise)
  t = t.replace(/\n{3,}/g, "\n\n");
  const lines = t
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  const deduped = dedupeRepeatedRuns(lines);
  return deduped.join("\n").trim();
}

function dedupeRepeatedRuns(lines: string[], maxRepeat = 2): string[] {
  const out: string[] = [];
  let prev = "";
  let streak = 0;
  for (const line of lines) {
    if (line === prev) {
      streak += 1;
      if (streak < maxRepeat) out.push(line);
    } else {
      prev = line;
      streak = 0;
      out.push(line);
    }
  }
  return out;
}
