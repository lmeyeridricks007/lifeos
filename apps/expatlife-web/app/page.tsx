import Link from "next/link";
import { getHomeContent } from "@expatlife/content";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { Container } from "@/components/ui/container";
import { SiteFramedHero } from "@/components/site/SiteFramedHero";
import { siteHubHeroSectionClass } from "@/lib/ui/site-shell-identity";

export const revalidate = CONTENT_REVALIDATE;

/** Plain, clone-safe metadata with Open Graph + Twitter for link previews. */
export async function generateMetadata() {
  const content = await getHomeContent();
  const description = String(
    content.seo?.description ??
      "ExpatCopilot helps you plan a Netherlands move with practical guides, calculators, and country-specific routes—start from your situation, not a generic checklist."
  );
  return buildSocialMetadata({
    // Brand/product entry — distinct from the Netherlands hub title ("Move to the Netherlands").
    title: "ExpatCopilot | Guides and tools for Netherlands relocation",
    description,
    path: "/",
    ogType: "website",
    absoluteTitle: true,
  });
}

/**
 * Brand homepage with one semantic H1. Primary CTA still sends users into the Netherlands hub
 * (previous hard redirect) without inventing a second site architecture.
 */
export default async function HomePage() {
  const content = await getHomeContent();
  const netherlandsHref = content.redirectTarget || "/netherlands";

  return (
    <section className={siteHubHeroSectionClass}>
      <Container>
        <SiteFramedHero>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copilot-primary">ExpatCopilot</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-copilot-text-primary sm:text-4xl md:text-5xl">
            Guides and tools for Netherlands relocation
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-copilot-text-secondary">
            Practical guides, calculators, and country-specific routes—start from your situation, not a
            generic checklist.
          </p>
          <div className="mt-8">
            <Link
              href={netherlandsHref}
              className="inline-flex items-center rounded-xl bg-copilot-primary px-6 py-3 text-base font-semibold text-white shadow-expatos-md transition hover:bg-copilot-primary-strong hover:shadow-expatos-hover"
            >
              Start with the Netherlands
            </Link>
          </div>
        </SiteFramedHero>
      </Container>
    </section>
  );
}
