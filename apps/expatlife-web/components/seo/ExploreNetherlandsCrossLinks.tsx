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
              <Link href="/netherlands/moving/visas-residency/" className="text-link hover:underline">
                Visas &amp; residency (orientation)
              </Link>
            </li>
            <li>
              <Link href="/netherlands/moving/working-in-the-netherlands/" className="text-link hover:underline">
                Working in the Netherlands
              </Link>
            </li>
            <li>
              <Link href="/netherlands/moving/changing-jobs-netherlands/" className="text-link hover:underline">
                Changing jobs in the Netherlands
              </Link>
            </li>
            <li>
              <Link href="/netherlands/moving/resigning-job-netherlands/" className="text-link hover:underline">
                Resigning a job in the Netherlands
              </Link>
            </li>
            <li>
              <Link href="/netherlands/moving/layoffs-netherlands/" className="text-link hover:underline">
                Layoffs in the Netherlands
              </Link>
            </li>
            <li>
              <Link href="/netherlands/moving/twv-work-permit/" className="text-link hover:underline">
                TWV work permit
              </Link>
            </li>
            <li>
              <Link href="/netherlands/moving/residence-permits/" className="text-link hover:underline">
                Residence permits
              </Link>
            </li>
            <li>
              <Link href="/netherlands/moving/extensions-changes/" className="text-link hover:underline">
                Extensions &amp; changes
              </Link>
            </li>
            <li>
              <Link href="/netherlands/moving/status-changes/" className="text-link hover:underline">
                Status changes
              </Link>
            </li>
            <li>
              <Link href="/netherlands/cities/" className="text-link hover:underline">
                Dutch cities
              </Link>
            </li>
            <li>
              <Link href="/netherlands/cities/best-cities-for-expats/" className="text-link hover:underline">
                Best cities for expats
              </Link>
            </li>
            <li>
              <Link href="/netherlands/tools/city-comparison/" className="text-link hover:underline">
                City comparison tool
              </Link>
            </li>
            <li>
              <Link href="/netherlands/living/survival-guide/" className="text-link hover:underline">
                Netherlands Survival Guide
              </Link>
            </li>
            <li>
              <Link href="/netherlands/living/getting-around/" className="text-link hover:underline">
                Getting around in the Netherlands
              </Link>
            </li>
            <li>
              <Link href="/netherlands/living/apps/" className="text-link hover:underline">
                Essential apps for the Netherlands
              </Link>
            </li>
            <li>
              <Link href="/netherlands/living/daily-life/" className="text-link hover:underline">
                Daily life basics
              </Link>
            </li>
            <li>
              <Link href="/netherlands/living/language/" className="text-link hover:underline">
                Language & phrases
              </Link>
            </li>
            <li>
              <Link href="/netherlands/living/weather/" className="text-link hover:underline">
                Weather & seasons
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
