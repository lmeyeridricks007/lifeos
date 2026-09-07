import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./container";
import { Eyebrow } from "./eyebrow";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  /** When false, do not wrap children in Container. Use when section is already inside a Container (e.g. pillar/main content column). Default true. */
  contained?: boolean;
  /** Tighter vertical padding and heading spacing (e.g. stacked footer blocks on guide pages). */
  compact?: boolean;
  /**
   * Heading level for `title`. Default `h2` for mid-page sections.
   * Use `h1` only when this Section is the page’s primary visible heading (e.g. cluster topic scaffolds).
   */
  titleAs?: "h1" | "h2";
};

export function Section({
  className,
  eyebrow,
  title,
  subtitle,
  actions,
  contained = true,
  compact = false,
  titleAs = "h2",
  children,
  ...props
}: SectionProps) {
  const TitleTag = titleAs;
  const content = (
    <>
      {(eyebrow || title || subtitle || actions) && (
        <div
          className={cn(
            "w-full flex flex-col items-start justify-between gap-3 md:flex-row md:items-end",
            compact ? "mb-3 md:mb-4" : "mb-8 md:mb-10"
          )}
        >
          <div className="min-w-0 flex-1 text-left">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            {title ? (
              <TitleTag className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl md:text-3xl">
                {title}
              </TitleTag>
            ) : null}
            {subtitle ? (
              <p className="mt-2 max-w-3xl text-sm text-foreground-muted md:text-base">{subtitle}</p>
            ) : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      )}
      {children}
    </>
  );

  return (
    <section
      className={cn(
        compact ? "py-section-y-compact sm:py-4 md:py-5" : "py-section-y sm:py-10 md:py-section-y-lg",
        className
      )}
      {...props}
    >
      {contained ? <Container>{content}</Container> : content}
    </section>
  );
}
