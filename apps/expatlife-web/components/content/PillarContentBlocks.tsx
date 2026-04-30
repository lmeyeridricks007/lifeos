import Link from "next/link";
import { cn } from "@/lib/cn";
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
      parts.push(renderInlineMarkdown(paragraph.slice(lastIndex, index), linkClassName));
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
    parts.push(renderInlineMarkdown(paragraph.slice(lastIndex), linkClassName));
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

const INLINE_LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function isSafeInlineHref(href: string): boolean {
  if (href.startsWith("/")) {
    return !href.startsWith("//") && !href.toLowerCase().includes("javascript:");
  }
  try {
    return new URL(href).protocol === "https:";
  } catch {
    return false;
  }
}

/** Inline `[label](https://…)` or `[label](/path)` plus `**bold**` in remaining segments. */
function renderInlineMarkdown(
  text: string,
  linkClassName = "font-semibold text-link underline-offset-2 hover:underline"
): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let last = 0;
  INLINE_LINK_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  let partKey = 0;
  while ((m = INLINE_LINK_RE.exec(text)) !== null) {
    if (m.index > last) {
      parts.push(<span key={`t-${partKey++}`}>{renderTextWithBold(text.slice(last, m.index))}</span>);
    }
    const href = m[2];
    if (isSafeInlineHref(href)) {
      const labelNode = renderTextWithBold(m[1]);
      if (href.startsWith("/")) {
        parts.push(
          <Link key={`a-${partKey++}`} href={href} className={linkClassName}>
            {labelNode}
          </Link>
        );
      } else {
        parts.push(
          <a key={`a-${partKey++}`} href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
            {labelNode}
          </a>
        );
      }
    } else {
      parts.push(<span key={`t-${partKey++}`}>{m[0]}</span>);
    }
    last = INLINE_LINK_RE.lastIndex;
  }
  if (last < text.length) {
    parts.push(<span key={`t-${partKey++}`}>{renderTextWithBold(text.slice(last))}</span>);
  }
  if (parts.length === 0) return text;
  if (parts.length === 1) return parts[0];
  return <>{parts}</>;
}

/** Detects `[url](path)` segments so we can lay out mixed text + links without collapsed whitespace. */
function textHasInlineMarkdownLinks(text: string): boolean {
  INLINE_LINK_RE.lastIndex = 0;
  return INLINE_LINK_RE.test(text);
}

const boldInlineMarkdownLayoutClass =
  "inline-flex max-w-full flex-wrap items-baseline gap-x-1.5 gap-y-0.5 [&_a]:shrink-0";

/** Inline **bold** markdown and optional `[label](url)` links (https only, or internal paths starting with `/`). */
export function BoldInline({
  text,
  className,
  linkClassName,
}: {
  text: string;
  className?: string;
  /** Classes for markdown links; defaults to brand link styling. */
  linkClassName?: string;
}) {
  const body = renderInlineMarkdown(text, linkClassName);
  if (textHasInlineMarkdownLinks(text)) {
    return <span className={cn(boldInlineMarkdownLayoutClass, className)}>{body}</span>;
  }
  return <span className={className}>{body}</span>;
}

/** Renders a paragraph with **bold** markdown and optional `[label](url)` links. */
export function BoldParagraph({
  text,
  className = "text-slate-600",
  linkClassName,
}: {
  text: string;
  className?: string;
  linkClassName?: string;
}) {
  const body = renderInlineMarkdown(text, linkClassName);
  if (textHasInlineMarkdownLinks(text)) {
    return <p className={cn(boldInlineMarkdownLayoutClass, className)}>{body}</p>;
  }
  return <p className={className}>{body}</p>;
}
