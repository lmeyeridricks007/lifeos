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
  ComparisonFactorsGrid,
  CostBreakdownCards,
  WhoNeedsHelpCards,
  ScenarioCards,
  EditorialDisclosureBlock,
  ProviderComparisonSection,
  ServiceCategoryTrustLinks,
} from "@/src/components/service-category";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { startupVisaAdvisorsCategoryPage } from "@/src/data/services/categories/startup-visa-advisors";
import { startupFacilitators } from "@/src/data/companies-registry";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { ServiceCategoryProviderCard } from "@/src/lib/service-category/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const data = startupVisaAdvisorsCategoryPage;

function mapStartupFacilitatorsToComparisonCards(): ServiceCategoryProviderCard[] {
  const basePath = "/netherlands/services/startup-visa-advisors";
  return startupFacilitators.map((f) => ({
    slug: f.slug,
    name: f.name,
    href: `${basePath}/${f.slug}/`,
    shortDescription: f.shortDescription ?? "Official RVO facilitator for the Dutch startup residence permit.",
    bestFor: f.cityRelevance?.slice(0, 3).join(", ") ?? "Startup visa applicants",
    priceNote: "Confirm availability and terms with facilitator.",
    typicalCost: f.typicalCost ?? "Confirm with facilitator",
    externalUrl: f.websiteUrl,
    features: f.servicesOffered?.length ? f.servicesOffered : ["Startup visa support", "Official RVO list"],
    cityRelevance: f.cityRelevance?.length ? f.cityRelevance : undefined,
    pros: f.pros,
    cons: f.cons,
    whoShouldChoose: f.whoShouldChoose,
  }));
}

/*
 * INTERNAL LINKING RECOMMENDATIONS:
 * - Startup visa guide (/netherlands/startup-visa-netherlands/) should link here prominently
 * - City pages should link here in founder / startup sections
 * - Services hub (/netherlands/services/) should feature this page in startup / immigration submenu
 * - Future facilitator profile pages (/netherlands/services/startup-visa-advisors/<slug>/) should link back here
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
    name: "Startup visa facilitators in the Netherlands",
    description: "Official RVO facilitator list for the Dutch startup residence permit.",
    numberOfItems: startupFacilitators.length,
    itemListElement: startupFacilitators.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: f.name,
      url: f.websiteUrl ?? new URL(`/netherlands/services/startup-visa-advisors/${f.slug}/`, baseUrl).toString(),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function StartupVisaAdvisorsCategoryPage() {
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Startup Visa Advisors", item: new URL(data.path, baseUrl).toString() },
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
                <li className="font-medium text-slate-900" aria-current="page">Startup Visa Advisors</li>
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

                {data.whatIsFacilitator ? (
                  <section id="what-is-facilitator" className="scroll-mt-24 mt-8 space-y-5">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      {data.whatIsFacilitator.heading}
                    </h2>
                    {data.whatIsFacilitator.paragraphs.map((p, i) => (
                      <p key={i} className="text-slate-700 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </section>
                ) : null}

                {data.whyFacilitatorMatters ? (
                  <section id="why-it-matters" className="scroll-mt-24 mt-8 space-y-5">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      {data.whyFacilitatorMatters.heading}
                    </h2>
                    {data.whyFacilitatorMatters.paragraphs.map((p, i) => (
                      <p key={i} className="text-slate-700 leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {data.whyFacilitatorMatters.cards?.length ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {data.whyFacilitatorMatters.cards.map((card, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-slate-200 border-l-4 border-l-brand-500 bg-slate-50/50 p-4"
                          >
                            <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{card.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </section>
                ) : null}

                <ProviderComparisonSection
                  providers={mapStartupFacilitatorsToComparisonCards()}
                  sectionTitle={data.comparisonSection?.title ?? "Compare startup facilitators"}
                  sectionIntro={data.comparisonSection?.intro}
                />

                <section id="what-to-compare" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    How to Compare Startup Facilitators in the Netherlands
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    The right facilitator depends on your startup, innovation model, sector, founder profile, and the kind of support you need to move from idea to company. There is no single best facilitator for every founder.
                  </p>
                  <ComparisonFactorsGrid factors={data.comparisonFactors} />
                </section>

                <section id="typical-costs" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Typical Startup Facilitator and Advisory Costs
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Facilitator arrangements vary. Some support may be bundled into an advisory relationship; some providers charge structured startup support fees. Legal, translation, legalisation, and relocation services may add separate costs. Request written clarity on scope and fees.
                  </p>
                  <CostBreakdownCards cards={data.costCards} />
                </section>

                {data.whoNeedsExtraHelp?.length ? (
                  <section id="when-extra-help" className="scroll-mt-24 mt-8 space-y-5">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      When a Facilitator Alone May Not Be Enough
                    </h2>
                    <WhoNeedsHelpCards cards={data.whoNeedsExtraHelp} />
                  </section>
                ) : null}

                <section id="scenarios" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Common Startup Founder Scenarios
                  </h2>
                  <ScenarioCards scenarios={data.scenarios} />
                </section>

                <RelatedGuidesSection
                  id="related-guides"
                  title="Related Guides Before Choosing a Startup Facilitator"
                  blocks={relatedBlocks}
                  className="mt-8 space-y-5"
                />

                {data.relatedCategories?.length ? (
                  <section className="scroll-mt-24 mt-8 space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">Related service categories</h3>
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

                <section id="tools" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Useful Tools for Startup Visa Planning
                  </h2>
                  <ToolCards tools={toolCards} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Frequently Asked Questions About Startup Visa Advisors in the Netherlands
                  </h2>
                  <Accordion items={faqAccordionItems} allowMultiple={false} className="max-w-3xl" />
                </section>

                <section id="official-sources" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Official Sources and Useful References
                  </h2>
                  <OfficialSourcesList sources={officialSources} />
                </section>

                <section className="scroll-mt-24 mt-8 space-y-5">
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
