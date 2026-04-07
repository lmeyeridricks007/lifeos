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
  CoverageExplainerCards,
  ComparisonFactorsGrid,
  CostBreakdownCards,
  ScenarioCards,
  EditorialDisclosureBlock,
  SafetyTipsBlock,
  ServiceCategoryTrustLinks,
  ProviderComparisonSection,
} from "@/src/components/service-category";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { housingPlatformsCategoryPage } from "@/src/data/services/categories/housing-platforms";
import { housingPlatforms } from "@/src/data/companies-registry";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { ServiceCategoryProviderCard } from "@/src/lib/service-category/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const data = housingPlatformsCategoryPage;

function mapHousingPlatformsToComparisonCards(): ServiceCategoryProviderCard[] {
  const basePath = "/netherlands/services/housing-platforms";
  return housingPlatforms.map((p) => {
    let logo: { src: string; alt: string } | undefined;
    if (p.logoUrl) {
      logo = { src: p.logoUrl, alt: p.name };
    } else if (p.providerUrl) {
      try {
        const hostname = new URL(p.providerUrl).hostname;
        // Prefer site favicon when no explicit logo: domain-based logo APIs often return wrong or generic images.
        logo = { src: `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=128`, alt: p.name };
      } catch {
        logo = undefined;
      }
    }
    return {
      slug: p.slug,
      name: p.name,
      href: `${basePath}/${p.slug}/`,
      shortDescription: p.shortDescription,
      bestFor: p.bestFor?.slice(0, 3).join(", ") ?? p.categoryType ?? "Housing search",
      priceNote: p.feeNote ?? "Check platform pricing.",
      logo,
      features: p.bestFor,
      pros: p.pros,
      cons: p.cons,
      whoShouldChoose: p.whoShouldChoose,
      externalUrl: p.providerUrl,
      priority: p.priority,
    };
  });
}

/*
 * INTERNAL LINKING RECOMMENDATIONS:
 * - Housing guides (housing-netherlands, renting-in-netherlands) should link here prominently
 * - City pages should link here in housing sections
 * - Services hub should feature this page in Housing / relocation submenu
 * - Future provider profile pages (/netherlands/services/housing-platforms/<slug>/) should link back here
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
    name: "Housing platforms and housing-search services for expats in the Netherlands",
    description: "Rental, room, furnished, temporary, and home-search platforms commonly used by expats.",
    numberOfItems: housingPlatforms.length,
    itemListElement: housingPlatforms.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: p.providerUrl ?? new URL(`/netherlands/services/housing-platforms/${p.slug}/`, baseUrl).toString(),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HousingPlatformsCategoryPage() {
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Housing Platforms", item: new URL(data.path, baseUrl).toString() },
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
                <li className="font-medium text-copilot-text-primary" aria-current="page">Housing Platforms</li>
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

                <section id="what-platforms-are" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    What Housing Platforms Are
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Housing platforms include listing marketplaces (where you browse properties from agents or landlords), room platforms (for shared housing and single rooms), furnished and mid-term rental platforms (often used by expats and students), temporary accommodation and serviced-apartment providers, and buying/selling marketplaces. Some platforms connect you directly to landlords; others list properties from estate agents. They are not the same as a real estate agent (makelaar), relocation agency, or broker—each plays a different role. Use the types below to match the right channel to your need.
                  </p>
                </section>

                <section id="types-of-services" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Types of Housing Platforms Expats Commonly Use
                  </h2>
                  <CoverageExplainerCards cards={data.coverageCards} />
                </section>

                <ProviderComparisonSection
                  providers={mapHousingPlatformsToComparisonCards()}
                  sectionTitle={data.comparisonSection?.title ?? "Compare providers"}
                  sectionIntro={data.comparisonSection?.intro}
                />

                <section id="what-to-compare" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    How to Compare Housing Platforms in the Netherlands
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    The right platform depends on your needs: long-term vs mid-term, furnished vs unfurnished, room vs apartment, and whether you are a student, family, or working professional. There is no single best platform for every move.
                  </p>
                  <ComparisonFactorsGrid factors={data.comparisonFactors} />
                </section>

                <section id="typical-costs" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Typical Platform Costs, Fees and Payment Considerations
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Some platforms are free to browse; some charge subscription or booking fees. Agent or landlord fees may apply when you rent through a listing. Always check pricing and refund conditions directly with the platform and the landlord or agent.
                  </p>
                  <CostBreakdownCards cards={data.costCards} />
                </section>

                {data.antiScamTips ? (
                  <section id="anti-scam" className="scroll-mt-24 mt-8 space-y-5">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      {data.antiScamTips.heading}
                    </h2>
                    <SafetyTipsBlock
                      heading="Practical steps"
                      paragraphs={data.antiScamTips.paragraphs}
                      points={data.antiScamTips.points}
                    />
                  </section>
                ) : null}

                <section id="scenarios" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Common Expat Housing Search Scenarios
                  </h2>
                  <ScenarioCards scenarios={data.scenarios} />
                </section>

                <RelatedGuidesSection
                  id="related-guides"
                  title="Related Guides Before Choosing a Housing Platform"
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
                    Useful Tools Before Choosing a Housing Platform
                  </h2>
                  <ToolCards tools={toolCards} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Frequently Asked Questions About Housing Platforms in the Netherlands
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
