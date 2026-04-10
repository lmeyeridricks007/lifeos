import Link from "next/link";
import type { MovePillarTocItem } from "./MovePillarMobileToc";

export type MovePillarSectionNavDeepLink = { href: string; label: string; description: string };

type Props = {
  items: MovePillarTocItem[];
  /** Optional CTA block below in-page anchors. */
  deepLink?: MovePillarSectionNavDeepLink;
  deepLinks?: MovePillarSectionNavDeepLink[];
  /** Heading above deep-link cards (default: Move cluster). */
  clusterTitle?: string;
};

export function MovePillarSectionNav({ items, deepLink, deepLinks, clusterTitle = "Related in Move" }: Props) {
  const clusterLinks: MovePillarSectionNavDeepLink[] =
    deepLinks && deepLinks.length > 0 ? deepLinks : deepLink ? [deepLink] : [];

  return (
    <nav className="space-y-6" aria-labelledby="move-pillar-toc-heading">
      <div>
        <p id="move-pillar-toc-heading" className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
          On this page
        </p>
        <ul className="mt-3 space-y-1.5 text-sm" role="list">
          {items.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block min-h-[40px] rounded-lg px-1 py-2 text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {clusterLinks.length > 0 ? (
        <div className="space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{clusterTitle}</p>
          {clusterLinks.map((dl) => (
            <div
              key={dl.href}
              className="rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10"
            >
              <p className="mt-0 text-xs leading-relaxed text-foreground-muted">{dl.description}</p>
              <Link
                href={dl.href}
                className="mt-3 inline-flex min-h-[44px] items-center text-xs font-semibold text-link hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-2"
              >
                {dl.label} →
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
