import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { PillarTOC } from "@/components/content/PillarTOC";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import {
  ServicesHero,
  ServicesIntro,
  ServiceCategoryCardsGrid,
  ServicesByRelocationStage,
  PopularNeedsCards,
  FeaturedCategoryHighlights,
  EditorialDisclosureBlock,
} from "@/src/components/services-hub";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { netherlandsServicesPage } from "@/src/data/services/netherlands-services-page";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import { getSiteOrigin } from "@/lib/site-origin";

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

export default function NetherlandsServicesPage() {
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL(path, baseUrl).toString() },
  ];
  const dateModified = new Date().toISOString().slice(0, 10);
  const relatedBlocks: CityRelatedGuideBlock[] = data.relatedGuides;
  const toolCards: CityToolCard[] = data.tools.map((t) => ({
    label: t.label,
    href: t.href,
    description: t.description,
    status: t.status,
  }));

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

      <div className="min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-8 sm:py-10 md:py-14">
          <Container className="w-full max-w-screen-2xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="hover:text-slate-900">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-slate-400">
                  /
                </li>
                <li>
                  <Link href="/netherlands/" className="hover:text-slate-900">
                    Netherlands
                  </Link>
                </li>
                <li aria-hidden className="text-slate-400">
                  /
                </li>
                <li className="font-medium text-slate-900" aria-current="page">
                  Services
                </li>
              </ol>
            </nav>
            <ServicesHero hero={data.hero} />
          </Container>
        </section>

        <Section contained={false} className="py-8 md:py-12">
          <Container className="w-full max-w-screen-2xl">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(280px,1fr)]">
              <main className="min-w-0 w-full">
                <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50/50 p-4 lg:hidden">
                  <PillarTOC items={data.tocItems} />
                </div>

                <ServicesIntro intro={data.intro} />

                {data.publisherNote ? (
                  <p className="mt-4 text-sm text-slate-600 italic" role="note">
                    {data.publisherNote}
                  </p>
                ) : null}

                <section
                  id="featured-services"
                  className="scroll-mt-24 mt-8 space-y-5"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Featured Services
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    High-priority categories for early in your move: banking, insurance, housing, relocation, and immigration support.
                  </p>
                  <ServiceCategoryCardsGrid
                    categories={data.categories.filter((c) => c.featured)}
                  />
                </section>

                <section
                  id="service-categories"
                  className="scroll-mt-24 mt-8 space-y-5"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    All Service Categories
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Browse by category to find providers for banking, insurance, housing, immigration, documents, tax, healthcare, and more.
                  </p>
                  <ServiceCategoryCardsGrid categories={data.categories} />
                </section>

                <section id="by-stage" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Which Services Do You Need at Each Stage?
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Use your relocation stage to see which categories matter most.
                  </p>
                  <ServicesByRelocationStage stages={data.stages} />
                </section>

                <section
                  id="popular-needs"
                  className="scroll-mt-24 mt-8 space-y-5"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Most Common Service Needs for Expats
                  </h2>
                  <PopularNeedsCards needs={data.popularNeeds} />
                </section>

                <section
                  id="popular-providers"
                  className="scroll-mt-24 mt-8 space-y-5"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Popular Provider Categories
                  </h2>
                  <FeaturedCategoryHighlights highlights={data.highlights} />
                </section>

                <EditorialDisclosureBlock howItWorks={data.howItWorks} />

                {data.trustLinks?.length ? (
                  <section
                    id="trust-methodology"
                    className="scroll-mt-24 mt-8 space-y-3"
                  >
                    <h2 className="text-xl font-semibold text-slate-900">
                      Trust & methodology
                    </h2>
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

                <section id="tools" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Useful Tools for Choosing the Right Services
                  </h2>
                  <ToolCards tools={toolCards} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Frequently Asked Questions About Expat Services in the Netherlands
                  </h2>
                  <Accordion
                    items={faqAccordionItems}
                    allowMultiple={false}
                    className="max-w-3xl"
                  />
                </section>

                <section
                  id="browse-all"
                  className="scroll-mt-24 mt-8 space-y-5"
                >
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Browse All Expat Service Categories
                  </h2>
                  <ServiceCategoryCardsGrid categories={data.categories} />
                </section>

                {/* Future-ready: featured provider reviews, best-of category pages, comparison tables,
                    affiliate/referral support, expert rating components, user review components.
                    Do not implement fake reviews. */}
              </main>

              <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                  <PillarTOC items={data.tocItems} />
                </div>
              </aside>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
