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
  ComparisonFactorsGrid,
  ProviderComparisonSection,
  CostBreakdownCards,
  WhoNeedsHelpCards,
  ScenarioCards,
  EditorialDisclosureBlock,
  ServiceCategoryTrustLinks,
  CoverageExplainerCards,
} from "@/src/components/service-category";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { mobileConnectivityCategoryPage } from "@/src/data/services/categories/mobile-connectivity";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const data = mobileConnectivityCategoryPage;

/*
 * INTERNAL LINKING:
 * - Guides that mention SIM/mobile (after-arriving, first 30/60/90 days) should link here.
 * - /netherlands/services/ hub lists this under Family & Everyday Life.
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
    name: "Mobile and connectivity providers for expats in the Netherlands",
    description: "SIM-only and prepaid mobile options expats often compare for a Dutch phone number.",
    numberOfItems: data.providers.length,
    itemListElement: data.providers.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: new URL(p.href, baseUrl).toString(),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function MobileConnectivityCategoryPage() {
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Mobile & connectivity", item: new URL(data.path, baseUrl).toString() },
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
                <li className="font-medium text-copilot-text-primary" aria-current="page">Mobile & connectivity</li>
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

                <section id="why-local-number" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Why a Dutch Mobile Number Matters Early On
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    SMS one-time passwords are standard for banks, insurers, and many portals. DigiD activation also expects a reachable number. Sorting mobile early avoids repeated blocks when you are already juggling registration, housing, and work onboarding.
                  </p>
                  <RequirementAlertBox cards={data.requirementCards} />
                </section>

                {data.coverageCards?.length ? (
                  <section id="coverage-types" className="scroll-mt-24 mt-12 space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      Mobile, eSIM, and Home Internet
                    </h2>
                    <p className="text-copilot-text-secondary leading-relaxed">
                      Use the cards below to separate what mobile plans cover from what you will later arrange for fixed broadband at home.
                    </p>
                    <CoverageExplainerCards cards={data.coverageCards} layout="2x2" />
                  </section>
                ) : null}

                <section id="comparison-factors" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    What to Compare Between Plans
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    There is no single best plan for everyone. Match data allowance, contract flexibility, English support, and roaming rules to how you actually use your phone.
                  </p>
                  <ComparisonFactorsGrid factors={data.comparisonFactors} />
                </section>

                <ProviderComparisonSection
                  providers={data.providers}
                  sectionTitle={data.comparisonSection?.title ?? "Compare providers"}
                  sectionIntro={data.comparisonSection?.intro}
                />

                <section id="typical-costs" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Typical Mobile Costs in the Netherlands
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Prepaid starter packs and first top-ups are usually modest; monthly SIM-only depends on data. Promotions change frequently—treat the ranges below as orientation only.
                  </p>
                  <CostBreakdownCards cards={data.costCards} />
                </section>

                <section id="home-internet" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Home Internet vs Mobile Data
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Mobile plans are ideal for a Dutch number, maps, messaging, and moderate browsing. Once you have a stable address, compare fixed-line broadband (fiber, cable, or DSL) for work video calls, large downloads, and multiple devices. ACM publishes consumer information on telecom markets in the Netherlands.
                  </p>
                </section>

                {data.whoNeedsExtraHelp?.length ? (
                  <section id="who-needs-help" className="scroll-mt-24 mt-12 space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      When to Look Twice at Your Plan
                    </h2>
                    <WhoNeedsHelpCards cards={data.whoNeedsExtraHelp} />
                  </section>
                ) : null}

                <section id="scenarios" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Common Expat Mobile Scenarios
                  </h2>
                  <ScenarioCards scenarios={data.scenarios} />
                </section>

                <RelatedGuidesSection
                  id="related-guides"
                  title="Related guides and tools"
                  blocks={relatedBlocks}
                />

                {data.relatedCategories?.length ? (
                  <section className="scroll-mt-24 mt-12 space-y-4">
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
                    Useful Tools
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Plan arrival tasks—including mobile connectivity—alongside banking, insurance, and registration.
                  </p>
                  <ToolCards tools={toolCards} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Frequently Asked Questions
                  </h2>
                  <Accordion items={faqAccordionItems} allowMultiple={false} className="max-w-3xl" />
                </section>

                <section id="official-sources" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Official Sources and Useful References
                  </h2>
                  <OfficialSourcesList sources={officialSources} />
                </section>

                <section className="scroll-mt-24 mt-12 space-y-6">
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
