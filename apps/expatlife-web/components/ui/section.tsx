import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  /** When false, do not wrap children in Container. Use when section is already inside a Container (e.g. pillar/main content column). Default true. */
  contained?: boolean;
};

export function Section({
  className,
  eyebrow,
  title,
  subtitle,
  actions,
  contained = true,
  children,
  ...props
}: SectionProps) {
  const content = (
    <>
      {(eyebrow || title || subtitle || actions) && (
        <div className="mb-6 w-full flex flex-col items-start justify-between gap-3 md:mb-8 md:flex-row md:items-end">
          <div className="min-w-0 flex-1 text-left">
            {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand))]">{eyebrow}</p> : null}
            {title ? <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">{title}</h2> : null}
            {subtitle ? <p className="mt-2 max-w-3xl text-sm text-slate-600 md:text-base">{subtitle}</p> : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      )}
      {children}
    </>
  );

  return (
    <section className={cn("py-6 sm:py-8 md:py-12", className)} {...props}>
      {contained ? <Container>{content}</Container> : content}
    </section>
  );
}
