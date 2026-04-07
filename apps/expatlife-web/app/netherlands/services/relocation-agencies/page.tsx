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
  DecisionSupportBlock,
  ServiceCategoryTrustLinks,
} from "@/src/components/service-category";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { relocationAgenciesCategoryPage } from "@/src/data/services/categories/relocation-agencies";
import { relocationAgenciesProviders } from "@/src/data/companies-registry";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import type { ServiceCategoryProviderCard } from "@/src/lib/service-category/types";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const data = relocationAgenciesCategoryPage;

function mapRelocationProvidersToComparisonCards(): ServiceCategoryProviderCard[] {
  const basePath = "/netherlands/services/relocation-agencies";
  return relocationAgenciesProviders.map((p) => ({
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
 * - Services hub should feature this page in Relocation / mobility submenu
 * - Future provider profile pages (/netherlands/services/relocation-agencies/<slug>/) should link back here
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
    name: "Trusted relocation agencies and providers for expats in the Netherlands",
    description: "Relocation agencies and service providers listed by Dutch expat centres and related public-support ecosystems.",
    numberOfItems: relocationAgenciesProviders.length,
    itemListElement: relocationAgenciesProviders.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.providerUrl ? p.providerUrl : new URL(`/netherlands/services/relocation-agencies/${p.slug}/`, baseUrl).toString(),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RelocationAgenciesCategoryPage() {
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Relocation Agencies", item: new URL(data.path, baseUrl).toString() },
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
                <li className="font-medium text-copilot-text-primary" aria-current="page">Relocation Agencies</li>
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
                    What Relocation Agencies Usually Help With
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Relocation agencies typically support home-finding, immigration coordination, municipal registration, school search, utility setup, orientation, family relocation, removals, and local onboarding. They are broader and more hands-on than visa consultants or immigration lawyers, who focus on legal and permit matters. Partner pages from expat centres often describe these services together.
                  </p>
                  <CoverageExplainerCards cards={data.coverageCards} />
                </section>

                <section id="when-expats-use" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    When Relocation Support Is Often Worth It
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Employer-sponsored moves, relocating with family, short timelines, unfamiliar housing markets, and moves from outside the EU with document complexity often benefit from coordinated support. So does wanting one provider to handle multiple steps. If you prefer to self-manage, official guides and city pages can be enough.
                  </p>
                  <RequirementAlertBox cards={data.requirementCards} />
                </section>

                <ProviderComparisonSection
                  providers={mapRelocationProvidersToComparisonCards()}
                  sectionTitle={data.comparisonSection?.title ?? "Compare relocation providers"}
                  sectionIntro={data.comparisonSection?.intro}
                />

                <section id="what-to-compare" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    How to Compare Relocation Agencies in the Netherlands
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    The right relocation provider depends on your city, complexity, family situation, employer support, and whether you want full-service relocation or only help with a few critical tasks. There is no single best agency for every move.
                  </p>
                  <ComparisonFactorsGrid factors={data.comparisonFactors} />
                </section>

                <section id="typical-costs" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Typical Relocation Agency Costs in the Netherlands
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Costs vary widely by scope. Some services are employer-funded; private clients may pay per service or package. Home-finding and family relocation are often more expensive than lighter settling-in support. Always confirm what is included in the quoted scope.
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
                  title="Related Guides Before Choosing a Relocation Agency"
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
                    Useful Tools Before You Choose a Relocation Agency
                  </h2>
                  <ToolCards tools={toolCards} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Frequently Asked Questions About Relocation Agencies in the Netherlands
                  </h2>
                  <Accordion items={faqAccordionItems} allowMultiple={false} className="max-w-3xl" />
                </section>

                <section id="official-sources" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Official Sources and Trusted Provider Ecosystems
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
