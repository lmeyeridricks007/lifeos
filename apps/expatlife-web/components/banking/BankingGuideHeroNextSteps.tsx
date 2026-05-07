import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type BankingGuideHeroNextStepLink = { href: string; label: string };

export type BankingGuideHeroNextStepsProps = {
  links: readonly BankingGuideHeroNextStepLink[];
  /** Optional last row (e.g. back to hub) — same full width as primary links. */
  hubLink?: BankingGuideHeroNextStepLink;
  className?: string;
};

const rowClass =
  "group flex min-h-[44px] w-full min-w-0 max-w-full items-center justify-between gap-2 rounded-lg border border-border/40 bg-surface-raised/50 px-2.5 py-2 text-left text-sm font-medium text-foreground shadow-sm ring-1 ring-border/[0.04] transition-colors hover:border-border-strong hover:bg-surface-muted hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:min-h-0 sm:py-1.5";

const hubRowClass =
  "group flex min-h-[44px] w-full min-w-0 max-w-full items-center justify-between gap-2 rounded-lg border border-border/35 bg-surface-muted/30 px-2.5 py-2 text-left text-sm font-medium text-foreground-muted shadow-sm ring-1 ring-border/[0.04] transition-colors hover:border-border-strong hover:bg-surface-muted hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:min-h-0 sm:py-1.5";

/**
 * Hero “Next steps” — full-width stacked rows (consistent tap targets across banking money guides).
 */
export function BankingGuideHeroNextSteps({ links, hubLink, className }: BankingGuideHeroNextStepsProps) {
  return (
    <nav
      className={cn(
        "mt-3 sm:mt-4",
        "w-full min-w-0 max-w-full rounded-xl border border-border/50 bg-gradient-to-b from-surface-muted/50 to-surface-raised/30 p-2 shadow-sm ring-1 ring-border/[0.06] sm:p-2.5",
        className
      )}
      aria-label="Next steps"
    >
      <p className="px-1 pb-1.5 pt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">Next steps</p>
      <ul className="flex w-full min-w-0 max-w-full flex-col gap-2" role="list">
        {links.map((l) => (
          <li key={l.href} className="w-full min-w-0 max-w-full">
            <Link href={l.href} className={rowClass}>
              <span className="min-w-0 flex-1 leading-snug">{l.label}</span>
              <ChevronRight
                className="h-3.5 w-3.5 shrink-0 text-foreground-faint transition-transform group-hover:translate-x-0.5 group-hover:text-link"
                aria-hidden
              />
            </Link>
          </li>
        ))}
        {hubLink ? (
          <li key={hubLink.href} className="w-full min-w-0 max-w-full border-t border-border/35 pt-2">
            <Link href={hubLink.href} className={hubRowClass}>
              <span className="min-w-0 flex-1 leading-snug">{hubLink.label}</span>
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-foreground-faint group-hover:text-link" aria-hidden />
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
