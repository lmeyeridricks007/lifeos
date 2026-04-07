import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CardLink } from "@/components/ui/card-link";
import {
  BEST_PROVIDERS_PAGE_SLUGS,
  loadBestProvidersPage,
} from "@/src/data/monetization/best-pages";
import { getSiteOrigin } from "@/lib/site-origin";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { MonetizationTrustDisclosure } from "@/src/components/monetization/MonetizationTrustDisclosure";
import { MonetizationTrustResourceLinks } from "@/src/components/monetization/HowWeChooseMicrocopy";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();
const path = "/netherlands/best/";

export const metadata: Metadata = buildSocialMetadata({
  title: "Best providers for expats in the Netherlands",
  description:
    "Curated comparison hubs for banking, health insurance, relocation, and connectivity—structured tables and methodology, not generic roundups.",
  path,
  ogType: "website",
});

export default function BestProvidersIndexPage() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Best providers", item: new URL(path, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <Container className="py-10 md:py-14">
        <Section
          contained={false}
          eyebrow="Comparison hubs"
          title="Best providers for expats in the Netherlands"
          subtitle="Editorial comparisons with clear criteria, comparison tables, and FAQs. Each hub links deeper guides and service directories where useful."
        >
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {BEST_PROVIDERS_PAGE_SLUGS.map((slug) => {
              const page = loadBestProvidersPage(slug);
              if (!page) return null;
              return (
                <li key={slug}>
                  <CardLink
                    href={page.path}
                    title={page.hero.title}
                    description={page.seo.description}
                  />
                </li>
              );
            })}
          </ul>
          <div className="mt-10 max-w-3xl space-y-3">
            <MonetizationTrustDisclosure />
            <MonetizationTrustResourceLinks />
          </div>
          <p className="mt-8 text-sm text-foreground-muted">
            Looking for full directories? See the{" "}
            <Link href="/netherlands/services/" className="font-medium text-link hover:text-link-hover">
              Netherlands services hub
            </Link>
            .
          </p>
        </Section>
      </Container>
    </>
  );
}
