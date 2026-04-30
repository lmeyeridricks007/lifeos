import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { bankingGlossaryLinkSpecs } from "@/src/data/banking/bankingGlossaryTerms";

type PlainPart = string | { readonly type: "link"; readonly href: string; readonly label: string };

function renderTextWithBold(text: string): ReactNode {
  const boldRe = /\*\*(.+?)\*\*/g;
  const nodes: ReactNode[] = [];
  let lastEnd = 0;
  let m: RegExpExecArray | null;
  while ((m = boldRe.exec(text)) !== null) {
    if (m.index > lastEnd) {
      nodes.push(text.slice(lastEnd, m.index));
    }
    nodes.push(<strong key={m.index}>{m[1]}</strong>);
    lastEnd = boldRe.lastIndex;
  }
  if (lastEnd < text.length) {
    nodes.push(text.slice(lastEnd));
  }
  return nodes.length === 1 ? nodes[0] : <>{nodes}</>;
}

/** First-hit links per spec id, left-to-right, longest matching pattern at each step. */
function linkifyPlainIter(rest: string, used: Set<string>): PlainPart[] {
  const out: PlainPart[] = [];
  let cursor = rest;

  while (cursor.length > 0) {
    let best: { id: string; pattern: string; href: string; idx: number } | null = null;
    for (const spec of bankingGlossaryLinkSpecs) {
      if (used.has(spec.id)) continue;
      const idx = cursor.indexOf(spec.pattern);
      if (idx === -1) continue;
      if (
        !best ||
        idx < best.idx ||
        (idx === best.idx && spec.pattern.length > best.pattern.length)
      ) {
        best = { id: spec.id, pattern: spec.pattern, href: spec.href, idx };
      }
    }
    if (!best) {
      out.push(cursor);
      break;
    }
    used.add(best.id);
    if (best.idx > 0) {
      out.push(cursor.slice(0, best.idx));
    }
    out.push({ type: "link", href: best.href, label: cursor.slice(best.idx, best.idx + best.pattern.length) });
    cursor = cursor.slice(best.idx + best.pattern.length);
  }

  return out;
}

function renderPlainWithLinks(s: string, used: Set<string>): ReactNode {
  const parts = linkifyPlainIter(s, used);
  return (
    <>
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <Fragment key={i}>{renderTextWithBold(p)}</Fragment>
        ) : (
          <Link
            key={i}
            href={p.href}
            className="font-medium text-link underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 rounded-sm"
          >
            {p.label}
          </Link>
        )
      )}
    </>
  );
}

function tokenizeBoldOuter(text: string): { readonly bold: boolean; readonly text: string }[] {
  const out: { bold: boolean; text: string }[] = [];
  const re = /\*\*(.+?)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      out.push({ bold: false, text: text.slice(last, m.index) });
    }
    out.push({ bold: true, text: m[1] });
    last = re.lastIndex;
  }
  if (last < text.length) {
    out.push({ bold: false, text: text.slice(last) });
  }
  return out;
}

/**
 * **Bold** markdown plus **first** glossary matches (see {@link bankingGlossaryLinkSpecs}) — avoids repeated links in one blob.
 * Outer `**…**` segments still run through the linker so terms like **iDEAL** are not skipped.
 */
export function BankingRichText({ text, className }: { text: string; className?: string }) {
  const used = new Set<string>();
  const segments = tokenizeBoldOuter(text);

  return (
    <span className={cn(className)}>
      {segments.map((seg, i) =>
        seg.bold ? (
          <strong key={i}>{renderPlainWithLinks(seg.text, used)}</strong>
        ) : (
          <Fragment key={i}>{renderPlainWithLinks(seg.text, used)}</Fragment>
        )
      )}
    </span>
  );
}
