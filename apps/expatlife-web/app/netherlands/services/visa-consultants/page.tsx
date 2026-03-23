import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { PillarTOC } from "@/components/content/PillarTOC";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import {
  ServiceCategoryHero,
  ServiceCategoryIntro,
  RequirementAlertBox,
  LegalMattersGrid,
  ComparisonFactorsGrid,
  ProviderComparisonSection,
  CostBreakdownCards,
  WhoNeedsHelpCards,
  DecisionSupportBlock,
  ScenarioCards,
  EditorialDisclosureBlock,
  ServiceCategoryTrustLinks,
} from "@/src/components/service-category";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { visaConsultantsCategoryPage } from "@/src/data/services/categories/visa-consultants";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const data = visaConsultantsCategoryPage;

/*
 * INTERNAL LINKING RECOMMENDATIONS:
 * - Future visa guide pages (residence permit, MVV, HSM, startup, family reunification, citizenship) should link to this category page
 * - City pages should link to this page where they mention visa or immigration support
 * - /netherlands/services/ should feature this page in Immigration & Visas and related categories (Visa Consultants)
 * - Future provider review pages (/netherlands/services/visa-consultants/<provider-slug>/) should link back here
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
    name: "Visa consultants and visa support services for expats in the Netherlands",
    description: "Types of visa consultants and support services expats often compare for MVV, residence permits, startup, and family routes.",
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

export default function VisaConsultantsCategoryPage() {
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Visa Consultants", item: new URL(data.path, baseUrl).toString() },
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
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-8 sm:py-10 md:py-14">
          <Container className="w-full max-w-screen-2xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li><Link href="/" className="hover:text-slate-900">Home</Link></li>
                <li aria-hidden className="text-slate-400">/</li>
                <li><Link href="/netherlands/" className="hover:text-slate-900">Netherlands</Link></li>
                <li aria-hidden className="text-slate-400">/</li>
                <li><Link href="/netherlands/services/" className="hover:text-slate-900">Services</Link></li>
                <li aria-hidden className="text-slate-400">/</li>
                <li className="font-medium text-slate-900" aria-current="page">Visa Consultants</li>
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
          </Container>
        </section>

        <Section contained={false} className="py-8 md:py-12">
          <Container className="w-full max-w-screen-2xl">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(280px,1fr)]">
              <main className="min-w-0 w-full">
                <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50/50 p-4 lg:hidden">
                  <PillarTOC items={data.tocItems} />
                </div>

                <ServiceCategoryIntro intro={data.intro} />

                <section id="when-need-consultant" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    When Expats May Need a Visa Consultant
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    A consultant may be useful when your entry or residence purpose is unclear, you need help understanding the MVV and residence-permit sequence, you are a startup founder exploring permit paths, you are planning family migration, you are self-managing your move without employer support, or you want structured guidance before submitting official forms. Not every expat needs one—straightforward employer- or institution-supported cases often do not.
                  </p>
                  <RequirementAlertBox cards={data.requirementCards} />
                </section>

                {data.legalMatters?.length ? (
                  <section id="common-situations" className="scroll-mt-24 mt-12 space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Common Visa and Permit Situations Expats Ask Consultants About
                    </h2>
                    <LegalMattersGrid matters={data.legalMatters} />
                  </section>
                ) : null}

                <section id="what-to-compare" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    How to Compare Visa Consultants in the Netherlands
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    The right provider depends on your route, complexity, language needs, document situation, and whether you need structured process support or full legal advice. Clearly distinguish between a visa consultant (process and preparation), a relocation agency (logistics), and an immigration lawyer (legal representation and appeals).
                  </p>
                  <ComparisonFactorsGrid factors={data.comparisonFactors} />
                </section>

                <ProviderComparisonSection
                  providers={data.providers}
                  sectionTitle={data.comparisonSection?.title ?? "Compare providers"}
                  sectionIntro={data.comparisonSection?.intro}
                />

                <section id="typical-costs" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Typical Visa Consultant Costs in the Netherlands
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Fees vary widely by route complexity and provider model. Some offer fixed-fee process packages; others charge by consultation or service bundle. Startup, family, and multi-document cases often cost more than basic orientation. Request written clarity on scope, exclusions, and whether official fees are included.
                  </p>
                  <CostBreakdownCards cards={data.costCards} />
                </section>

                {data.whoNeedsExtraHelp?.length ? (
                  <section id="who-needs-help" className="scroll-mt-24 mt-12 space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Who Usually Needs Extra Help
                    </h2>
                    <WhoNeedsHelpCards cards={data.whoNeedsExtraHelp} />
                  </section>
                ) : null}

                {data.whenNotNeed ? (
                  <section id="when-not-need" className="scroll-mt-24 mt-12 space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      {data.whenNotNeed.heading}
                    </h2>
                    <DecisionSupportBlock whenNotNeed={data.whenNotNeed} />
                  </section>
                ) : null}

                <section id="scenarios" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Common Expat Visa Scenarios
                  </h2>
                  <ScenarioCards scenarios={data.scenarios} />
                </section>

                <RelatedGuidesSection
                  id="related-guides"
                  title="Related Guides Before Choosing a Visa Consultant"
                  blocks={relatedBlocks}
                />

                {data.relatedCategories?.length ? (
                  <section className="scroll-mt-24 mt-12 space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">Related visa and immigration categories</h3>
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

                <section id="tools" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Useful Tools Before You Hire a Visa Consultant
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Use these tools to check document readiness, estimate visa timelines and costs, and compare visa routes—so you are better prepared when speaking to a consultant or the IND.
                  </p>
                  <ToolCards tools={toolCards} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Frequently Asked Questions About Visa Consultants in the Netherlands
                  </h2>
                  <Accordion items={faqAccordionItems} allowMultiple={false} className="max-w-3xl" />
                </section>

                <section id="official-sources" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Official Sources and Useful References
                  </h2>
                  <OfficialSourcesList sources={officialSources} />
                </section>

                <section className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-xl font-semibold text-slate-900">Editorial disclosure</h2>
                  <EditorialDisclosureBlock disclosure={data.disclosure} />
                  <ServiceCategoryTrustLinks />
                </section>
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
