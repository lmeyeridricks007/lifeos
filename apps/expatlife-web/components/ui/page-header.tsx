import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./eyebrow";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: ReactNode;
  className?: string;
};

export function PageHeader({ eyebrow, title, subtitle, cta, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-gap-stack", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">{title}</h1>
      {subtitle ? (
        <p className="max-w-3xl text-base leading-relaxed text-foreground-muted md:text-lg">{subtitle}</p>
      ) : null}
      {cta ? <div className="flex flex-wrap gap-3">{cta}</div> : null}
    </div>
  );
}
