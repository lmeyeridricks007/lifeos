import Link from "next/link";
import { Container } from "@/components/ui/container";

/**
 * Sitewide internal links for Netherlands routes (Move hub, cities, Living, services, tools).
 * Placed from `app/netherlands/layout.tsx` so every Netherlands URL gets consistent crawl paths.
 */
export function ExploreNetherlandsCrossLinks() {
  return (
    <div className="border-t border-border/50 bg-surface-muted/25">
      <Container className="max-w-screen-2xl py-8">
        <nav aria-label="Related Netherlands topics" className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground-muted">
            Explore more on ExpatCopilot
          </p>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            <li>
              <Link href="/netherlands/moving-to-the-netherlands/" className="text-link hover:underline">
                Move to the Netherlands
              </Link>
            </li>
            <li>
              <Link href="/netherlands/cities/" className="text-link hover:underline">
                Dutch cities
              </Link>
            </li>
            <li>
              <Link href="/netherlands/living/" className="text-link hover:underline">
                Living in the Netherlands
              </Link>
            </li>
            <li>
              <Link href="/netherlands/services/" className="text-link hover:underline">
                Services for expats
              </Link>
            </li>
            <li>
              <Link href="/netherlands/tools/" className="text-link hover:underline">
                Planning tools
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
