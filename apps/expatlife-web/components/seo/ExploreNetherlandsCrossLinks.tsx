import Link from "next/link";
import { headers } from "next/headers";
import { Container } from "@/components/ui/container";
import { resolveExploreNetherlandsLinks } from "@/lib/seo/exploreNetherlandsClusters";
import { toSiteHref } from "@/lib/seo/site-url";

export type ExploreNetherlandsCrossLinksProps = {
  /** Override pathname (tests). Defaults to `x-pathname` from middleware / next URL. */
  pathname?: string;
  /** Hrefs already shown in the main body — skipped in the strip. */
  excludeHrefs?: readonly string[];
};

function pathnameFromHeaders(): string {
  const h = headers();
  const fromMw = h.get("x-pathname");
  if (fromMw) return toSiteHref(fromMw);
  // Fallbacks used by some Next/Vercel runtimes
  const invoke = h.get("x-invoke-path") || h.get("next-url");
  if (invoke) {
    try {
      if (invoke.startsWith("http")) return toSiteHref(new URL(invoke).pathname);
      return toSiteHref(invoke);
    } catch {
      /* ignore */
    }
  }
  return "/netherlands";
}

/**
 * Cluster-contextual Netherlands explore strip (IA-P1-EXPLORE-CONCENTRATION).
 * Small global discovery + cluster recommendations; live routes only; deterministic.
 */
export function ExploreNetherlandsCrossLinks({
  pathname: pathnameProp,
  excludeHrefs = [],
}: ExploreNetherlandsCrossLinksProps = {}) {
  const pathname = pathnameProp ? toSiteHref(pathnameProp) : pathnameFromHeaders();
  const { links } = resolveExploreNetherlandsLinks(pathname, { excludeHrefs });

  if (links.length === 0) return null;

  return (
    <div className="border-t border-border/50 bg-surface-muted/25">
      <Container className="max-w-screen-2xl py-8">
        <nav aria-label="Related Netherlands topics" className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground-muted">
            Explore more on ExpatCopilot
          </p>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-link hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
}
