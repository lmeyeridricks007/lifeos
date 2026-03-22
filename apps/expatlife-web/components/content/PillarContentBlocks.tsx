import Link from "next/link";
import type { LinkRegistry } from "@expatlife/content";
import { resolveLinkFromRegistry } from "@expatlife/content";
import type { PillarIntroSegment } from "@expatlife/content";

/** Renders intro segments (text + link by key) for the pillar page. */
export function IntroSegments({
  segments,
  linkRegistry,
}: {
  segments: PillarIntroSegment[];
  linkRegistry: LinkRegistry;
}) {
  return (
    <p className="mt-4 text-slate-600">
      {segments.map((seg, i) => {
        if (seg.type === "text") {
          return seg.strong ? (
            <strong key={i}>{seg.value}</strong>
          ) : (
            <span key={i}>{seg.value}</span>
          );
        }
        const link = resolveLinkFromRegistry(linkRegistry, seg.key);
        if (!link) return <span key={i}>{seg.label}</span>;
        return (
          <Link
            key={i}
            href={link.href}
            className="font-medium text-brand-700 hover:underline"
          >
            {seg.label}
          </Link>
        );
      })}
    </p>
  );
}

/**
 * Renders a paragraph that may contain {0}, {1}, ... placeholders (replaced by links)
 * and **bold** markdown. linkKeys[i] is used for placeholder {i}.
 */
export function ParagraphWithLinks({
  paragraph,
  linkKeys,
  linkRegistry,
  className = "text-slate-600",
  linkClassName = "font-medium text-brand-700 hover:underline",
}: {
  paragraph: string;
  linkKeys: string[];
  linkRegistry: LinkRegistry;
  className?: string;
  /** Use e.g. "font-medium text-slate-800 hover:underline" when links sit on a tinted (e.g. blue) background to avoid blue-on-blue. */
  linkClassName?: string;
}) {
  const parts: React.ReactNode[] = [];
  const re = /\{(\d+)\}/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(paragraph)) !== null) {
    const index = match.index;
    const num = parseInt(match[1], 10);
    if (index > lastIndex) {
      parts.push(renderTextWithBold(paragraph.slice(lastIndex, index)));
    }
    const link = num < linkKeys.length ? resolveLinkFromRegistry(linkRegistry, linkKeys[num]) : null;
    if (link) {
      parts.push(
        <Link
          key={parts.length}
          href={link.href}
          className={linkClassName}
        >
          {link.title}
        </Link>
      );
    } else {
      parts.push(match[0]);
    }
    lastIndex = re.lastIndex;
  }
  if (lastIndex < paragraph.length) {
    parts.push(renderTextWithBold(paragraph.slice(lastIndex)));
  }
  return <span className={className}>{parts}</span>;
}

function renderTextWithBold(text: string): React.ReactNode {
  const boldRe = /\*\*(.+?)\*\*/g;
  const nodes: React.ReactNode[] = [];
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

/** Renders a paragraph with **bold** markdown only (no link placeholders). */
export function BoldParagraph({
  text,
  className = "text-slate-600",
}: {
  text: string;
  className?: string;
}) {
  return <p className={className}>{renderTextWithBold(text)}</p>;
}
