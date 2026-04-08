/**
 * Heuristic sectioning for contracts / offer letters (PDF paste, plain text).
 * Supports numbered clauses, annex headings, and all-caps title lines common in NL/EN documents.
 */

export type ContractSection = {
  /** Normalized heading text, if any */
  heading: string | null;
  body: string;
  startOffset: number;
  endOffset: number;
};

/** Line must match in full; use `.{1,n}` (not a single \\S) so multi-word titles match. */
const LINE_HEADING = new RegExp(
  [
    "^(?:",
    "(?:clause|article|artikel|section|sec\\.?|paragraaf|hoofdstuk)\\s*[\\dIVX]+(?:[\\.\\-][\\d]+)*(?:\\s+.{1,120})?",
    "|\\d+(?:\\.\\d+)*[\\).:]\\s+.{1,120}",
    "|\\d+\\.\\d+\\s+.{1,120}",
    "|(?:\\(?[a-z]\\)|[ivx]{1,4}\\))\\s+.{1,120}",
    "|(?:bijlage|annex|appendix|schedule)\\s+[a-z0-9—\\-].{0,100}",
    "|(?:part|deel)\\s+[a-z0-9].{0,100}",
    "|[-•*]\\s+(?:\\d+[\\).]\\s+.{1,100}|(?:article|artikel|clause)\\s+[\\dIVX]+)",
    ")$",
  ].join(""),
  "i"
);

/** Line is mostly uppercase letters (typical PDF clause title). */
function isAllCapsHeading(line: string): boolean {
  const t = line.trim();
  if (t.length < 10 || t.length > 120) return false;
  const letters = t.replace(/[^a-zA-Z]/g, "");
  if (letters.length < 8) return false;
  const upper = (t.match(/[A-ZÀ-ÖØ-Þ]/g) ?? []).length;
  return upper / letters.length > 0.75;
}

/** Bold-like artifacts from some PDFs: **Title** or __Title__ */
function isBoldLikeLine(line: string): boolean {
  const t = line.trim();
  return /^\*{2}[^*]{4,80}\*{2}$/.test(t) || /^_{2}[^_]{4,80}_{2}$/.test(t);
}

function isHeadingLine(line: string): boolean {
  const t = line.trim();
  if (!t) return false;
  if (LINE_HEADING.test(t)) return true;
  if (isBoldLikeLine(t)) return true;
  if (isAllCapsHeading(t)) return true;
  return false;
}

/**
 * Split normalized contract text into sections using line-based heuristics.
 */
export function splitContractSections(text: string): ContractSection[] {
  const lines = text.split("\n");
  const sections: ContractSection[] = [];
  let currentHeading: string | null = null;
  let bodyLines: string[] = [];
  let sectionStart = 0;
  let offset = 0;

  const flush = (endExclusive: number) => {
    const body = bodyLines.join("\n").trim();
    if (body || currentHeading) {
      sections.push({
        heading: currentHeading,
        body: body || (currentHeading ? "" : ""),
        startOffset: sectionStart,
        endOffset: endExclusive,
      });
    }
    bodyLines = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineStart = offset;
    offset += line.length + 1;

    if (isHeadingLine(line)) {
      flush(lineStart);
      currentHeading = line.trim().replace(/^\*{2}|_{2}|\*{2}$|_{2}$/g, "").trim();
      sectionStart = lineStart;
      bodyLines = [];
      continue;
    }
    if (currentHeading === null && bodyLines.length === 0 && i === 0) {
      sectionStart = 0;
    }
    bodyLines.push(line);
  }
  flush(text.length);

  if (sections.length === 0) {
    return [{ heading: null, body: text, startOffset: 0, endOffset: text.length }];
  }
  return sections;
}

/** Find section that contains character index. */
export function sectionContainingIndex(sections: ContractSection[], index: number): ContractSection | null {
  for (const s of sections) {
    if (index >= s.startOffset && index < s.endOffset) return s;
  }
  return sections[0] ?? null;
}
