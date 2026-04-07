import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { PillarTOC } from "@/components/content/PillarTOC";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/container";
import { PillarMainStack } from "@/components/page/pillar-template";
import { Accordion } from "@/components/ui/accordion";
import {
  ServiceCategoryHero,
  ServiceCategoryHeroSection,
  ServiceCategoryIntro,
  RequirementAlertBox,
  CoverageExplainerCards,
  ComparisonFactorsGrid,
  CostBreakdownCards,
  ScenarioCards,
  EditorialDisclosureBlock,
  ProviderComparisonSection,
  ServiceCategoryTrustLinks,
  DecisionSupportBlock,
} from "@/src/components/service-category";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { relocationServicesCategoryPage } from "@/src/data/services/categories/relocation-services";
import {
  relocationServicesMetadata,
  relocationServicesProviders,
} from "@/src/data/companies-registry";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import type { ServiceCategoryProviderCard } from "@/src/lib/service-category/types";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const data = relocationServicesCategoryPage;

function mapRelocationServicesProvidersToComparisonCards(): ServiceCategoryProviderCard[] {
  const basePath = "/netherlands/services/relocation-services";
  return relocationServicesProviders.map((p) => ({
    slug: p.slug,
    name: p.name,
    href: `${basePath}/${p.slug}/`,
    shortDescription: p.shortDescription,
    bestFor: p.cityRelevance?.slice(0, 3).join(", ") ?? p.serviceTags?.slice(0, 2).join(", ") ?? "Expats in the Netherlands",
    priceNote: "Confirm scope and quote with provider.",
    typicalCost: p.typicalCost,
    logo: p.logoUrl ? { src: p.logoUrl, alt: p.name } : undefined,
    externalUrl: p.providerUrl,
    features: p.servicesOrProducts,
    cityRelevance: p.cityRelevance?.length ? p.cityRelevance : undefined,
    pros: p.pros,
    cons: p.cons,
    whoShouldChoose: p.whoShouldChoose,
    priority: p.priority,
  }));
}

/*
 * INTERNAL LINKING RECOMMENDATIONS:
 * - City pages should link here in service and relocation sections
 * - After-arriving and family-move guides should link here
 * - Services hub should feature this page in Relocation submenu (above Relocation Agencies)
 * - Child pages (relocation-agencies, rental-agencies, housing-platforms, visa-consultants, immigration-lawyers) should link back here as parent hub
 * - Future provider profile pages (/netherlands/services/relocation-services/<slug>/) should link back here
 */

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  keywords: data.seo.keywords,
  alternates: { canonical: data.path },
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    type: "article",
    url: new URL(data.path, baseUrl).toString(),
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
    name: "Trusted relocation services and providers for expats in the Netherlands",
    description: "Relocation service providers listed by Dutch expat centres and related public-support ecosystems.",
    numberOfItems: relocationServicesProviders.length,
    itemListElement: relocationServicesProviders.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.providerUrl ? p.providerUrl : new URL(`/netherlands/services/relocation-services/${p.slug}/`, baseUrl).toString(),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RelocationServicesCategoryPage() {
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Relocation Services", item: new URL(data.path, baseUrl).toString() },
  ];
  const dateModified = new Date().toISOString().slice(0, 10);
  const relatedBlocks: CityRelatedGuideBlock[] = data.relatedGuides;
  const toolCards: CityToolCard[] = data.tools.map((t) => ({
    label: t.label,
    href: t.href,
    description: t.description,
    status: t.status,
  }));
  const officialSources: CityOfficialSource[] = data.officialSources;

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={data.hero.title}
        description={data.seo.description}
        dateModified={dateModified}
        urlPath={data.path}
      />
      <ItemListJsonLd />
      {data.faqs?.length ? <FaqPageJsonLd items={data.faqs} /> : null}

      <div className="min-h-screen">
        <ServiceCategoryHeroSection>
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-copilot-text-secondary">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li><Link href="/" className="hover:text-copilot-text-primary">Home</Link></li>
                <li aria-hidden className="text-copilot-text-muted">/</li>
                <li><Link href="/netherlands/" className="hover:text-copilot-text-primary">Netherlands</Link></li>
                <li aria-hidden className="text-copilot-text-muted">/</li>
                <li><Link href="/netherlands/services/" className="hover:text-copilot-text-primary">Services</Link></li>
                <li aria-hidden className="text-copilot-text-muted">/</li>
                <li className="font-medium text-copilot-text-primary" aria-current="page">Relocation Services</li>
              </ol>
            </nav>
            <ServiceCategoryHero
              hero={data.hero}
              actionBar={{
                url: new URL(data.path, baseUrl).toString(),
                title: data.hero.title,
                pageId: data.path,
              }}
            />
        </ServiceCategoryHeroSection>

        <PillarMainStack>
        <div className="py-8 md:py-12">
          <Container className="w-full max-w-screen-2xl">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(280px,1fr)]">
              <main className="min-w-0 w-full">
                <div className="mb-8 rounded-xl border border-copilot-primary/[0.08] bg-copilot-bg-soft/50 p-4 lg:hidden">
                  <PillarTOC items={data.tocItems} />
                </div>

                <ServiceCategoryIntro intro={data.intro} />

                {data.relatedCategories && data.relatedCategories.length > 0 ? (
                  <section id="explore-by-category" className="scroll-mt-24 mt-8 space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                      Explore by category
                    </h2>
                    <p className="text-sm text-slate-600">
                      For more specific providers and guidance, see these category pages:
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {data.relatedCategories.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-brand-200 hover:bg-brand-50/50 hover:text-brand-800"
                          >
                            {c.label}
                            <span aria-hidden>→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                <section id="what-services-include" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    What Relocation Services Usually Include
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Relocation services typically cover housing search, immigration coordination, municipal registration, bank and utility setup, healthcare and schooling guidance, family support, and settling-in. They are broader than visa consultants or immigration lawyers, who focus on legal and permit matters. Partner pages from expat centres often describe these services together.
                  </p>
                  <CoverageExplainerCards cards={data.coverageCards} />
                </section>

                <section id="types-of-support" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Types of Relocation Support & When It&apos;s Worth It
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Full-service relocation, corporate mobility, housing-focused help, immigration + relocation bundles, family relocation, and settling-in services. The situations below often make relocation support worth paying for: employer-funded move, family move, no local network, short timeline, high-pressure city market, or wanting one point of coordination.
                  </p>
                  <RequirementAlertBox cards={data.requirementCards} />
                </section>

                <ProviderComparisonSection
                  providers={mapRelocationServicesProvidersToComparisonCards()}
                  sectionTitle={data.comparisonSection?.title ?? "Compare providers"}
                  sectionIntro={data.comparisonSection?.intro}
                />

                <section id="what-to-compare" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    How to Compare Relocation Services in the Netherlands
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    The right provider depends on your city, complexity, family situation, employer support, and whether you want full-service or only a few tasks. There is no single best provider for every move.
                  </p>
                  <ComparisonFactorsGrid factors={data.comparisonFactors} />
                </section>

                <section id="typical-costs" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Typical Relocation Service Costs in the Netherlands
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Pricing varies widely by scope. Some moves are employer-funded; some providers price per service, others by bundled package. Family relocations and complex multi-step moves usually cost more than lighter support. Request written clarity on what is included.
                  </p>
                  <CostBreakdownCards cards={data.costCards} />
                </section>

                {data.whenNotNeed ? (
                  <section id="when-not-need" className="scroll-mt-24 mt-8 space-y-3">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      {data.whenNotNeed.heading}
                    </h2>
                    <DecisionSupportBlock whenNotNeed={data.whenNotNeed} />
                  </section>
                ) : null}

                <section id="scenarios" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Common Expat Relocation Scenarios
                  </h2>
                  <ScenarioCards scenarios={data.scenarios} />
                </section>

                <RelatedGuidesSection
                  id="related-guides"
                  title="Related Guides Before Choosing a Relocation Service"
                  blocks={relatedBlocks}
                  className="mt-8 space-y-5"
                />

                {data.relatedCategories?.length ? (
                  <section className="scroll-mt-24 mt-8 space-y-4">
                    <h3 className="text-lg font-bold text-copilot-text-primary">Related service categories</h3>
                    <ul className="flex flex-wrap gap-2">
                      {data.relatedCategories.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                <section id="tools" className="scroll-mt-24 mt-8 space-y-3">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Useful Tools Before Choosing a Relocation Service
                  </h2>
                  <ToolCards tools={toolCards} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Frequently Asked Questions About Relocation Services in the Netherlands
                  </h2>
                  <Accordion items={faqAccordionItems} />
                </section>

                <section id="official-sources" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Official Sources and Trusted Provider Ecosystems
                  </h2>
                  <OfficialSourcesList sources={officialSources} />
                </section>

                <EditorialDisclosureBlock disclosure={data.disclosure} className="mt-10" />
                <ServiceCategoryTrustLinks />
              </main>

              <aside className="relative hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl border border-copilot-primary/[0.08] bg-copilot-bg-soft/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">On this page</p>
                    <PillarTOC items={data.tocItems} className="mt-3" />
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </div>
        </PillarMainStack>
      </div>
    </>
  );
}
