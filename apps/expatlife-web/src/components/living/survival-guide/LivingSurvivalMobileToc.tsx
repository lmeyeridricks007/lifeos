import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import type { LivingSectionNavItem } from "@/src/components/living/livingPillarContent";

/**
 * In-page anchors for small viewports — desktop users get `LivingSectionNav` in the sticky rail.
 */
export function LivingSurvivalMobileToc({ items }: { items: LivingSectionNavItem[] }) {
  return (
    <nav
      className="rounded-card border border-border bg-surface-raised shadow-card ring-1 ring-border/10 lg:hidden"
      aria-label="Jump to sections on this page"
    >
      <details className="group open:shadow-card-hover">
        <summary
          className={cn(
            "flex cursor-pointer list-none items-center justify-between gap-2 rounded-card px-4 py-3.5 text-sm font-semibold text-foreground",
            "outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden"
          )}
        >
          Jump to section
          <ChevronDown
            className="h-4 w-4 shrink-0 text-foreground-muted transition-transform duration-200 group-open:rotate-180"
            aria-hidden
          />
        </summary>
        <ul className="space-y-0.5 border-t border-border/70 px-2 pb-3 pt-2" role="list">
          {items.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block min-h-[44px] rounded-xl px-2 py-2.5 text-sm text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
