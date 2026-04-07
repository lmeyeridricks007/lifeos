import type { ReactNode } from "react";
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
  title: string;
  subtitle?: string;
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
};

/** Consistent vertical spacing for major page sections. */
export function SectionBlock({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  compact,
  tone = "default",
  titleClassName,
  subtitleClassName,
  contentClassName,
}: SectionBlockProps) {
  const headingId = id ? `${id}-heading` : undefined;
  const onDark = tone === "onDark";
  const h2Default = onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class;
  const h2Class = titleClassName ?? h2Default;
  const subDefault = onDark ? movingNlSectionSubtitleOnDarkClass : movingNlSectionSubtitleClass;
  const subClass = subtitleClassName ?? subDefault;
  const contentGap = contentClassName ?? (compact ? "mt-5 sm:mt-6" : onDark ? "mt-7 sm:mt-8" : "mt-6 sm:mt-7");
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("min-w-0", onDark ? "pt-0" : compact ? "pt-4 sm:pt-5" : "pt-8 sm:pt-9", className)}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-2 text-[11px] font-bold uppercase tracking-[0.12em]",
            onDark ? "text-slate-400" : "text-foreground-muted"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 id={headingId} className={h2Class}>
        {title}
      </h2>
      {subtitle ? <p className={subClass}>{subtitle}</p> : null}
      <div className={contentGap}>{children}</div>
    </section>
  );
}
