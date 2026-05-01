import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type BankingGuideHeroNextStepLink = { href: string; label: string };

export type BankingGuideHeroNextStepsProps = {
  links: readonly BankingGuideHeroNextStepLink[];
  /** Optional second row after the main list (e.g. back to hub). */
  hubLink?: BankingGuideHeroNextStepLink;
  className?: string;
};

/**
 * Hero “Next steps” — stacked link rows with clear tap targets and light panel chrome.
 * Shared across banking money guides (fees, cheapest accounts, payments, account types).
 */
export function BankingGuideHeroNextSteps({ links, hubLink, className }: BankingGuideHeroNextStepsProps) {
  const rowClass =
    "group flex min-h-[48px] w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground transition-colors hover:bg-surface-raised hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

  return (
    <nav
      className={cn(
        "mt-4 pt-1 sm:mt-5",
        "rounded-xl border border-border/50 bg-gradient-to-b from-surface-muted/50 to-surface-raised/30 p-1.5 shadow-sm ring-1 ring-border/[0.06]",
        className
      )}
      aria-label="Next steps"
    >
      <p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Next steps</p>
      <ul className="divide-y divide-border/40 rounded-lg bg-surface-raised/40" role="list">
        {links.map((l) => (
          <li key={l.href} className="min-w-0 first:rounded-t-lg last:rounded-b-lg">
            <Link href={l.href} className={rowClass}>
              <span className="min-w-0 leading-snug">{l.label}</span>
              <ChevronRight
                className="h-4 w-4 shrink-0 text-foreground-faint transition-transform group-hover:translate-x-0.5 group-hover:text-link"
                aria-hidden
              />
            </Link>
          </li>
        ))}
        {hubLink ? (
          <li key={hubLink.href} className="min-w-0 last:rounded-b-lg border-t border-border/45 bg-surface-muted/25">
            <Link href={hubLink.href} className={cn(rowClass, "text-foreground-muted hover:text-link")}>
              <span className="min-w-0 leading-snug">{hubLink.label}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-foreground-faint group-hover:text-link" aria-hidden />
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
