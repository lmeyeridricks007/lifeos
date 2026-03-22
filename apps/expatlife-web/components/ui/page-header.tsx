import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: ReactNode;
  className?: string;
};

export function PageHeader({ eyebrow, title, subtitle, cta, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(var(--brand))]">{eyebrow}</p> : null}
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">{title}</h1>
      {subtitle ? <p className="text-base text-slate-600 md:text-lg">{subtitle}</p> : null}
      {cta ? <div className="flex flex-wrap gap-3">{cta}</div> : null}
    </div>
  );
}
