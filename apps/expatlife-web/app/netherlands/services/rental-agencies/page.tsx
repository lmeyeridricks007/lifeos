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
  ServiceCategoryTrustLinks,
  TenantRightsBlock,
  ProviderComparisonSection,
} from "@/src/components/service-category";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { rentalAgenciesCategoryPage } from "@/src/data/services/categories/rental-agencies";
import { rentalAgencies } from "@/src/data/companies-registry";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import type { ServiceCategoryProviderCard } from "@/src/lib/service-category/types";
import { getSiteOrigin } from "@/lib/site-origin";
import { googleFaviconUrl } from "@/src/lib/provider-logo-url";

const baseUrl = getSiteOrigin();
const data = rentalAgenciesCategoryPage;

function mapRentalAgenciesToComparisonCards(): ServiceCategoryProviderCard[] {
  const basePath = "/netherlands/services/rental-agencies";
  return rentalAgencies.map((p) => {
    let logo: { src: string; alt: string } | undefined;
    const urlForLogo = p.websiteUrl ?? p.providerUrl;
    if (urlForLogo) {
      try {
        const hostname = new URL(urlForLogo).hostname;
        if (p.websiteUrl) {
          logo = { src: googleFaviconUrl(hostname), alt: p.name };
        }
      } catch {
        logo = undefined;
      }
    }
    return {
      slug: p.slug,
      name: p.name,
      href: `${basePath}/${p.slug}/`,
      shortDescription: p.shortDescription,
      bestFor: p.cityRelevance?.slice(0, 3).join(", ") ?? p.bestFor?.slice(0, 2).join(", ") ?? "Rental search",
      priceNote: p.feeNote ?? "Confirm fees with agency.",
      logo,
      features: p.bestFor,
      cityRelevance: p.cityRelevance,
      externalUrl: p.websiteUrl ?? p.providerUrl,
      pros: p.pros,
      cons: p.cons,
      whoShouldChoose: p.whoShouldChoose,
      priority: p.priority,
    };
  });
}

/*
 * INTERNAL LINKING RECOMMENDATIONS:
 * - Housing guides (housing-netherlands, renting-in-netherlands) should link here prominently
 * - City pages should link here in housing sections
 * - Services hub should feature this page in Housing / Rental Agencies submenu
 * - Future provider profile pages (/netherlands/services/rental-agencies/<slug>/) should link back here
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
    name: "Rental agencies and expat rental brokers for the Netherlands",
    description: "Trusted rental agencies and rental-search services commonly surfaced to internationals through public-support ecosystems.",
    numberOfItems: rentalAgencies.length,
    itemListElement: rentalAgencies.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.providerUrl ?? new URL(`/netherlands/services/rental-agencies/${p.slug}/`, baseUrl).toString(),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RentalAgenciesCategoryPage() {
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Rental Agencies", item: new URL(data.path, baseUrl).toString() },
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
                <li className="font-medium text-copilot-text-primary" aria-current="page">Rental Agencies</li>
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

                <section id="what-agencies-do" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    What Rental Agencies Usually Help With
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Rental agencies and expat rental brokers typically offer search support, shortlisted listings, viewing coordination, communication with landlords or brokers, and in some cases negotiation or contract and move-in support. They are different from housing platforms, which are mainly listing marketplaces where you browse and contact listings yourself.
                  </p>
                  <CoverageExplainerCards cards={data.coverageCards} />
                </section>

                <section id="when-expats-use" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    When Rental Agency Support Is Often Worth It
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Moving from abroad with limited viewings, needing housing quickly, searching in competitive city markets, moving with family, or wanting furnished or expat-oriented options are situations where agency support can help. If you prefer to search on platforms yourself, you may not need one.
                  </p>
                  <RequirementAlertBox cards={data.requirementCards} />
                </section>

                <ProviderComparisonSection
                  providers={mapRentalAgenciesToComparisonCards()}
                  sectionTitle={data.comparisonSection?.title ?? "Compare providers"}
                  sectionIntro={data.comparisonSection?.intro}
                />

                <section id="what-to-compare" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    How to Compare Rental Agencies in the Netherlands
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    The right agency depends on your city, timeline, family situation, and whether you need viewing support, furnished options, or only advice. There is no single best agency for every move.
                  </p>
                  <ComparisonFactorsGrid factors={data.comparisonFactors} />
                </section>

                <section id="typical-costs" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Typical Rental Agency Costs and Fee Models
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Fee models vary: some agencies charge the tenant; some are paid by the landlord; some combine rental search with broader relocation packages. Always check what is included and what you will pay.
                  </p>
                  <CostBreakdownCards cards={data.costCards} />
                </section>

                {data.tenantRightsBlock ? (
                  <section id="tenant-rights" className="scroll-mt-24 mt-8 space-y-5">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      {data.tenantRightsBlock.heading}
                    </h2>
                    <TenantRightsBlock
                      heading="Practical steps"
                      paragraphs={data.tenantRightsBlock.paragraphs}
                      points={data.tenantRightsBlock.points}
                      links={data.tenantRightsBlock.links}
                    />
                  </section>
                ) : null}

                <section id="scenarios" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Common Expat Rental Search Scenarios
                  </h2>
                  <ScenarioCards scenarios={data.scenarios} />
                </section>

                <RelatedGuidesSection
                  id="related-guides"
                  title="Related Guides Before Choosing a Rental Agency"
                  blocks={relatedBlocks}
                  className="mt-8 space-y-5"
                />

                {data.relatedCategories?.length ? (
                  <section className="scroll-mt-24 mt-8 space-y-4">
                    <h3 className="text-lg font-bold text-copilot-text-primary">Related service categories</h3>
                    <ul className="flex flex-wrap gap-2">
                      {data.relatedCategories.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="text-sm font-medium text-brand-700 hover:text-brand-800 underline">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                <section id="tools" className="scroll-mt-24 mt-8 space-y-3">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Useful Tools Before Choosing a Rental Agency
                  </h2>
                  <ToolCards tools={toolCards} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Frequently Asked Questions About Rental Agencies in the Netherlands
                  </h2>
                  <Accordion items={faqAccordionItems} allowMultiple={false} className="max-w-3xl" />
                </section>

                <section id="official-sources" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Official Sources and Trusted References
                  </h2>
                  <OfficialSourcesList sources={officialSources} />
                </section>

                <section className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-xl font-bold text-copilot-text-primary">Editorial disclosure</h2>
                  <EditorialDisclosureBlock disclosure={data.disclosure} />
                  <ServiceCategoryTrustLinks />
                </section>
              </main>

              <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-xl border border-copilot-primary/[0.08] bg-copilot-bg-soft/50 p-4">
                  <PillarTOC items={data.tocItems} />
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
