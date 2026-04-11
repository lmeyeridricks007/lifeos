import type { ReactNode } from "react";
import { BoldInline } from "@/components/content/PillarContentBlocks";
import { cn } from "@/lib/cn";
import {
  movingNlSectionH2Class,
  movingNlSectionH2OnDarkClass,
  movingNlSectionSubtitleClass,
  movingNlSectionSubtitleOnDarkClass,
} from "@/lib/ui/moving-nl-pillar-identity";

export type SectionBlockProps = {
  id?: string;
  /** Small uppercase label above the H2 (e.g. signature dark bands). */
  eyebrow?: string;
  /** Override eyebrow color (e.g. `text-copilot-primary` for “Reality check”). */
  eyebrowClassName?: string;
  title: string;
  subtitle?: string;
  /** When true, `subtitle` may use `**bold**` segments (rendered as `<strong>`). */
  subtitleMarkdown?: boolean;
  children: ReactNode;
  className?: string;
  /** Tighter top padding and heading-to-content gap (e.g. tools strip on pillar hub). */
  compact?: boolean;
  /** Dark gradient band (e.g. 3 stages). */
  tone?: "default" | "onDark";
  /** Override default h2 styles (e.g. signature system heading). */
  titleClassName?: string;
  /** Override default subtitle styles on this block. */
  subtitleClassName?: string;
  /** Spacing wrapper around `children` (e.g. stages grid rhythm). */
  contentClassName?: string;
  /**
   * When true, wraps eyebrow, title, subtitle, and children in a light slate panel
   * (e.g. “Reality check” / common misunderstandings bands).
   */
  wrapInPanel?: boolean;
};

/** Consistent vertical spacing for major page sections. */
export function SectionBlock({
  id,
  eyebrow,
  eyebrowClassName,
  title,
  subtitle,
  subtitleMarkdown,
  children,
  className,
  compact,
  tone = "default",
  titleClassName,
  subtitleClassName,
  contentClassName,
  wrapInPanel,
}: SectionBlockProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const onDark = tone === "onDark";
  const h2Default = onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class;
  const h2Class = titleClassName ?? h2Default;
  const subDefault = onDark ? movingNlSectionSubtitleOnDarkClass : movingNlSectionSubtitleClass;
  const subClass = subtitleClassName ?? subDefault;
  const contentGap = contentClassName ?? (compact ? "mt-5 sm:mt-6" : onDark ? "mt-7 sm:mt-8" : "mt-6 sm:mt-7");
  const sectionTopPad = onDark ? "pt-0" : wrapInPanel ? "pt-1 sm:pt-2" : compact ? "pt-4 sm:pt-5" : "pt-8 sm:pt-9";
  const body = (
    <>
      {eyebrow ? (
        <p
          className={cn(
            "mb-2 text-[11px] font-bold uppercase tracking-[0.12em]",
            onDark ? "text-slate-400" : eyebrowClassName ? undefined : "text-foreground-muted",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 id={headingId} className={h2Class}>
        {title}
      </h2>
      {subtitle ? (
        <p className={subClass}>
          {subtitleMarkdown ? <BoldInline text={subtitle} /> : subtitle}
        </p>
      ) : null}
      <div className={contentGap}>{children}</div>
    </>
  );
  return (
    <section id={id} aria-labelledby={headingId} className={cn("min-w-0", sectionTopPad, className)}>
      {wrapInPanel && !onDark ? (
        <div className="rounded-2xl border border-slate-200/90 bg-slate-50 px-4 py-6 shadow-sm ring-1 ring-slate-900/[0.03] sm:px-6 sm:py-8">
          {body}
        </div>
      ) : (
        body
      )}
    </section>
  );
}
