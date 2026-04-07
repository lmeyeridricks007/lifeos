import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { PillarTOC } from "@/components/content/PillarTOC";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/container";
import {
  ServicesIntro,
  ServiceCategoryCardsGrid,
  ServicesByRelocationStage,
  PopularNeedsCards,
  FeaturedCategoryHighlights,
  EditorialDisclosureBlock,
} from "@/src/components/services-hub";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { GuidePageTemplate } from "@/components/page/page-templates";
import {
  FAQBlock,
  PageHero,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarGuideToolsSection,
  ToolCard,
} from "@/components/page/pillar-template";
import { netherlandsServicesPage } from "@/src/data/services/netherlands-services-page";
import type { ServicesHubHero } from "@/src/lib/services-hub/types";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import { getSiteOrigin } from "@/lib/site-origin";
import { cn } from "@/lib/cn";
import { siteGuideColumnPadYClass } from "@/lib/ui/site-shell-identity";

const baseUrl = getSiteOrigin();
const path = netherlandsServicesPage.path;
const data = netherlandsServicesPage;

/*
 * INTERNAL LINKING RECOMMENDATIONS (for guide/city/tool pages):
 * - Link to this hub with anchor text like: "Compare expat-friendly providers", "Browse trusted services",
 *   "Explore provider reviews", "Find services for this step", "See recommended companies".
 * - Guide pages that should link here:
 *   /netherlands/open-bank-account-netherlands/ → /netherlands/services/ + /netherlands/services/banking-finance/
 *   /netherlands/health-insurance-netherlands/ → /netherlands/services/ + /netherlands/services/insurance/
 *   /netherlands/document-translation-netherlands/ → /netherlands/services/ + /netherlands/services/documents-legal/
 *   /netherlands/apostille-documents-netherlands/ → /netherlands/services/documents-legal/
 *   /netherlands/document-legalization-netherlands/ → /netherlands/services/documents-legal/
 *   /netherlands/municipality-registration-netherlands/ → /netherlands/services/
 *   /netherlands/after-arriving-netherlands/ → /netherlands/services/
 * - City pages (amsterdam, rotterdam, utrecht, the-hague, eindhoven) → /netherlands/services/ + 1–2 relevant categories.
 * - Category pages (e.g. /netherlands/services/insurance/) should link back to /netherlands/services/.
 */

/** Menu placement: Netherlands > Services (and Move submenu). Breadcrumb: Home > Netherlands > Services */
export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  keywords: data.seo.keywords,
  alternates: { canonical: path },
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    type: "article",
    url: new URL(path, baseUrl).toString(),
  },
  twitter: {
    card: "summary_large_image",
    title: data.seo.title,
    description: data.seo.description,
  },
};

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

function ItemListJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Expat service categories in the Netherlands",
    description: data.seo.description,
    numberOfItems: data.categories.length,
    itemListElement: data.categories.map((cat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: cat.name,
      url: new URL(cat.href, baseUrl).toString(),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function ServicesHubHeroCtas({ hero }: { hero: ServicesHubHero }) {
  const primaryCtas = hero.ctas.filter((c) => c.primary);
  const secondaryCtas = hero.ctas.filter((c) => !c.primary);
  return (
    <div className="flex w-full min-w-0 flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
      {primaryCtas.map((cta) =>
        cta.href.startsWith("#") ? (
          <a
            key={cta.href}
            href={cta.href}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-copilot-primary px-5 py-2.5 text-base font-semibold text-white shadow-expatos-md transition hover:bg-copilot-primary-strong hover:shadow-expatos-hover sm:w-auto sm:px-6 sm:py-3"
          >
            {cta.label}
            <span className="ml-1" aria-hidden>
              →
            </span>
          </a>
        ) : (
          <Link
            key={cta.href}
            href={cta.href}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-copilot-primary px-5 py-2.5 text-base font-semibold text-white shadow-expatos-md transition hover:bg-copilot-primary-strong hover:shadow-expatos-hover sm:w-auto sm:px-6 sm:py-3"
          >
            {cta.label}
            <span className="ml-1" aria-hidden>
              →
            </span>
          </Link>
        )
      )}
      {secondaryCtas.map((cta) => (
        <Link
          key={cta.href}
          href={cta.href}
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-slate-900/12 bg-copilot-surface px-5 py-2.5 text-sm font-semibold text-copilot-text-primary shadow-expatos-sm ring-1 ring-copilot-primary/10 hover:bg-copilot-bg-soft sm:w-auto"
        >
          {cta.label}
        </Link>
      ))}
    </div>
  );
}

export default function NetherlandsServicesPage() {
  const relatedBlocks: CityRelatedGuideBlock[] = data.relatedGuides;
  const toolCards: CityToolCard[] = data.tools.map((t) => ({
    label: t.label,
    href: t.href,
    description: t.description,
    status: t.status,
  }));
  const toolStrip = toolCards.slice(0, 3);

  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL(path, baseUrl).toString() },
  ];
  const dateModified = new Date().toISOString().slice(0, 10);
  const canonicalUrl = new URL(path, baseUrl).toString();

  const categoriesByFeaturedFirst = [...data.categories].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={data.hero.title}
        description={data.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
      <ItemListJsonLd />
      {data.faqs?.length ? <FaqPageJsonLd items={data.faqs} /> : null}

      <GuidePageTemplate
        rootClassName="min-h-screen"
        wrapContent={(inner) => (
          <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>{inner}</Container>
        )}
        hero={
          <PillarGuideHeroRegion>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-copilot-text-secondary sm:mb-5">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="hover:text-copilot-text-primary">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-copilot-text-muted">
                  /
                </li>
                <li>
                  <Link href="/netherlands/" className="hover:text-copilot-text-primary">
                    Netherlands
                  </Link>
                </li>
                <li aria-hidden className="text-copilot-text-muted">
                  /
                </li>
                <li className="font-medium text-copilot-text-primary" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>
            <PageHero
              movingPillarIdentity
              eyebrow={data.hero.eyebrow}
              title={data.hero.title}
              subtitle={data.hero.subtitle}
              shareUrl={canonicalUrl}
              pageId={path}
              afterSubtitle={<ServicesHubHeroCtas hero={data.hero} />}
              heroImage={
                data.hero.image?.src
                  ? {
                      src: data.hero.image.src,
                      alt: data.hero.image.alt,
                      caption: data.hero.image.caption,
                      priority: true,
                    }
                  : null
              }
            />
          </PillarGuideHeroRegion>
        }
        tools={
          toolStrip.length ? (
            <PillarGuideToolsSection
              compact
              id="tools"
              title="Useful tools for choosing the right services"
              subtitle="Plan documents, visas, and your first weeks alongside provider research."
            >
              {toolStrip.map((t) => (
                <ToolCard
                  key={t.href}
                  title={t.label}
                  description={t.description ?? ""}
                  href={t.href}
                  ctaLabel={t.status === "coming_soon" ? "Coming soon" : "Open"}
                  compact
                />
              ))}
            </PillarGuideToolsSection>
          ) : null
        }
        keySections={
          <div className="py-8 md:py-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(280px,1fr)]">
              <main className="min-w-0 w-full">
                <div className="mb-8 rounded-xl border border-copilot-primary/[0.08] bg-copilot-bg-soft/50 p-4 lg:hidden">
                  <PillarTOC items={data.tocItems} tone="support" />
                </div>

                <ServicesIntro intro={data.intro} />

                {data.publisherNote ? (
                  <p className="mt-4 text-sm text-copilot-text-secondary italic" role="note">
                    {data.publisherNote}
                  </p>
                ) : null}

                <section id="service-categories" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">Service categories</h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Common first steps (banking, insurance, housing, relocation, immigration) appear first; browse the
                    full list below.
                  </p>
                  <ServiceCategoryCardsGrid categories={categoriesByFeaturedFirst} />
                </section>

                <section id="by-stage" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Which Services Do You Need at Each Stage?
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Use your relocation stage to see which categories matter most.
                  </p>
                  <ServicesByRelocationStage stages={data.stages} />
                </section>

                <section id="popular-needs" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Most Common Service Needs for Expats
                  </h2>
                  <PopularNeedsCards needs={data.popularNeeds} />
                </section>

                <section id="popular-providers" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Popular Provider Categories
                  </h2>
                  <FeaturedCategoryHighlights highlights={data.highlights} />
                </section>

                <EditorialDisclosureBlock howItWorks={data.howItWorks} />

                {data.trustLinks?.length ? (
                  <section id="trust-methodology" className="scroll-mt-24 mt-8 space-y-3">
                    <h2 className="text-xl font-bold text-copilot-text-primary">Trust & methodology</h2>
                    <p className="text-sm text-slate-600">
                      How we create content and handle provider listings:{" "}
                      {data.trustLinks.map((link, i) => (
                        <span key={link.href}>
                          {i > 0 && " · "}
                          <Link
                            href={link.href}
                            className="font-medium text-slate-800 hover:text-slate-900 underline"
                          >
                            {link.label}
                          </Link>
                        </span>
                      ))}
                    </p>
                  </section>
                ) : null}

                <RelatedGuidesSection
                  id="related-guides"
                  title="Useful Netherlands Guides Before You Choose a Provider"
                  blocks={relatedBlocks}
                  className="mt-8 space-y-5"
                />

                {/* Future-ready: featured provider reviews, best-of category pages, comparison tables,
                    affiliate/referral support, expert rating components, user review components.
                    Do not implement fake reviews. */}
              </main>

              <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-xl border border-copilot-primary/[0.08] bg-copilot-bg-soft/50 p-4">
                  <PillarTOC items={data.tocItems} tone="support" />
                </div>
              </aside>
            </div>
          </div>
        }
        faq={
          data.faqs?.length ? (
            <PillarGuideFaqRegion>
              <FAQBlock
                id="faq"
                eyebrow="Support"
                title="Frequently Asked Questions About Expat Services in the Netherlands"
                items={data.faqs.map((f) => ({ q: f.q, a: f.a }))}
                maxItems={Math.max(5, data.faqs.length)}
              />
            </PillarGuideFaqRegion>
          ) : null
        }
      />
    </>
  );
}
