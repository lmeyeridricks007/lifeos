import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LivingClusterLinkItem } from "@/src/components/living/livingPillarContent";

type Props = {
  items: LivingClusterLinkItem[];
  /** Default CTA suffix when `item.cta` is omitted. */
  defaultCta?: string;
};

/**
 * Related-topic grid for full Living guides — matches Survival Guide essentials / topic card rhythm
 * (`rounded-card`, hover lift) without pulling in `CardLink` icon contract.
 */
export function LivingClusterLinkGrid({ items, defaultCta = "Open guide" }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {items.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="group rounded-card border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10 transition-colors hover:border-border-strong hover:shadow-card-hover"
        >
          <p className="text-sm font-semibold text-foreground group-hover:text-brand-strong">{l.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{l.description}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
            {l.cta ?? defaultCta} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </Link>
      ))}
    </div>
  );
}
