import type { ReactNode } from "react";
import Link from "next/link";
import { BoldInline } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import {
  movingNlSectionH2Class,
  movingNlSectionSubtitleClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import type { MoveWorkingNlInternalLink } from "@/src/components/moving/working-in-the-netherlands/config/moveWorkingNl.types";

export type MoveMisunderstandingRow = { id?: string; title: string; body: ReactNode };

/** Typography + panel for Move guide “Reality check” / misunderstandings `SectionBlock`s. */
export const moveMisunderstandingSectionTitleClass = cn(movingNlSectionH2Class, "text-slate-900");
export const moveMisunderstandingSectionSubtitleClass = cn(movingNlSectionSubtitleClass, "text-slate-600");
/** Inline links under misunderstanding cards (reference: sky accent). */
export const moveMisunderstandingCardLinkClass =
  "font-semibold text-sky-600 underline-offset-4 decoration-transparent transition-colors hover:text-sky-800 hover:underline";

/**
 * Shared shell for renewal / after-approval / “reality check” grids on Move NL guides
 * (Visas & residency, Residence permits) so sections read as one template.
 */
export const MOVE_PILLAR_LIFECYCLE_CARD_CLASS =
  "rounded-xl border border-border/80 bg-surface-muted/50 px-4 py-4 ring-1 ring-inset ring-border/10 sm:px-5";

/** Lifecycle / “reality check” tile shell — gradient cap + shared border/fill (Move NL guides). */
export function MovePillarLifecycleCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(MOVE_PILLAR_LIFECYCLE_CARD_CLASS, "relative overflow-hidden", className)}>
      <div className={cn("absolute inset-x-0 top-0 h-0.5 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative min-w-0">{children}</div>
    </div>
  );
}

/** Shared “what people misunderstand” / Reality check card grid — white tiles, gradient top cap, slate type. */
export function MoveMisunderstandingCardGrid({
  rows,
  className,
}: {
  rows: MoveMisunderstandingRow[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 sm:gap-6", className)}>
      {rows.map((row) => (
        <article
          key={row.id ?? row.title}
          className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-none"
        >
          <div className={cn("absolute inset-x-0 top-0 z-[1] h-[3px]", movingNlSignatureGradientClass)} aria-hidden />
          <div className="relative px-5 py-5 sm:px-6 sm:py-6">
            <h3 className="text-[15px] font-bold leading-snug text-slate-900 sm:text-base">
              <BoldInline text={row.title} className="[&_strong]:font-bold [&_strong]:text-slate-900" />
            </h3>
            <div className="mt-3 min-w-0 text-sm leading-relaxed [&_p]:text-slate-600 [&_p_strong]:font-semibold [&_p_strong]:text-slate-800">
              {row.body}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/** Optional compact link row for Move guide content blocks (config `internalLinks`). */
export function MovePillarInternalLinkList({
  links,
  className,
  linkClassName,
}: {
  links?: MoveWorkingNlInternalLink[];
  className?: string;
  /** Override link colors (e.g. Reality check cards: sky accent, no default underline). */
  linkClassName?: string;
}) {
  if (!links?.length) return null;
  const linkTone =
    linkClassName ??
    "text-link underline-offset-4 transition-colors hover:text-link-hover hover:underline";
  return (
    <ul className={cn("flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-semibold", className)} role="list">
      {links.map((link) => (
        <li key={link.linkId ?? `${link.href}-${link.label}`}>
          <Link href={link.href} className={linkTone} title={link.description}>
            {link.label}
            {link.meta ? <span className="ml-1 font-normal text-foreground-muted">({link.meta})</span> : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}
