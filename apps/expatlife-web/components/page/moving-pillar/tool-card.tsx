import type { ReactNode } from "react";
import Link from "next/link";
import { Wrench } from "lucide-react";
import { cn } from "@/lib/cn";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { movingNlCardMicroLiftClass, movingNlToolInlineCtaClass } from "@/lib/ui/moving-nl-pillar-identity";

export type ToolCardProps = {
  /** Defaults to wrench icon — pass a sized Lucide or custom glyph. */
  icon?: ReactNode;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  /** Tighter row for gateway pages. */
  compact?: boolean;
  className?: string;
};

/** Helpful tools — product entry tiles with gradient cap and strong CTA. */
export function ToolCard({ icon, title, description, href, ctaLabel, compact, className }: ToolCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full min-h-0 flex-col overflow-hidden rounded-xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-slate-900/[0.05] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-expatos-hover motion-reduce:transition-none motion-reduce:hover:shadow-expatos-md",
        movingNlCardMicroLiftClass,
        compact ? "sm:p-5" : "sm:p-6",
        className
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-primary/12 to-copilot-accent/12 text-copilot-primary shadow-expatos-sm ring-1 ring-copilot-primary/10">
            {icon ?? <Wrench className="h-5 w-5" aria-hidden />}
          </span>
          <div className="min-w-0 flex-1">
            <h3
              className={cn(
                "font-bold tracking-tight text-copilot-text-primary",
                compact ? "text-[0.9375rem] sm:text-base" : "text-base"
              )}
            >
              <span className="sr-only">Tool: </span>
              {title}
            </h3>
            <p
              className={cn(
                "text-copilot-text-secondary",
                compact ? "mt-1.5 text-xs leading-relaxed sm:text-sm" : "mt-2 text-sm leading-relaxed"
              )}
            >
              {description}
            </p>
          </div>
        </div>
        <Link
          href={href}
          className={cn(
            movingNlToolInlineCtaClass,
            "no-underline",
            "mt-auto w-full justify-center sm:w-auto sm:self-start"
          )}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
