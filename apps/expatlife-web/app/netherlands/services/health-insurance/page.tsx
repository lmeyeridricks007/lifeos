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
  CoverageExplainerCards,
  ComparisonFactorsGrid,
  ProviderCardsGrid,
  ProviderComparisonSection,
  CostBreakdownCards,
  WhoNeedsHelpCards,
  ScenarioCards,
  EditorialDisclosureBlock,
  ServiceCategoryTrustLinks,
} from "@/src/components/service-category";
import { ServiceListingDisclosure } from "@/components/trust/ServiceListingDisclosure";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { healthInsuranceCategoryPage } from "@/src/data/services/categories/health-insurance";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const data = healthInsuranceCategoryPage;

/*
 * INTERNAL LINKING RECOMMENDATIONS:
 * - /netherlands/health-insurance-netherlands/ should link to this category page (e.g. "Compare health insurance providers" → /netherlands/services/health-insurance/)
 * - City pages (Amsterdam, Rotterdam, Utrecht, The Hague, Eindhoven) should link to this page in their service/insurance sections
 * - /netherlands/services/ should feature this page in the Insurance category and in "Popular provider categories"
 * - Future provider review pages (/netherlands/services/insurance/zilveren-kruis/, etc.) should link back to this category page
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

export const revalidate = 86400;

function ItemListJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dutch health insurance providers for expats",
    description: "Popular health insurance providers expats often compare in the Netherlands.",
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

export default function HealthInsuranceCategoryPage() {
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Health Insurance", item: new URL(data.path, baseUrl).toString() },
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
                <li className="font-medium text-slate-900" aria-current="page">Health Insurance</li>
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

                <section id="when-required" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    When Expats Need Dutch Health Insurance
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    If you come to live or work in the Netherlands, you usually need Dutch health insurance as quickly as possible and no later than 4 months after arrival. If you have a residence permit, the policy must generally be effective from the date the permit comes into force. This can apply even if you already have insurance in another country. EHIC is for temporary stays and does not replace compulsory Dutch insurance for long-term residents or workers.
                  </p>
                  <RequirementAlertBox cards={data.requirementCards} />
                </section>

                <section id="what-covers" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    What Dutch Basic Health Insurance Usually Covers
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    The standard package is government-defined. GP visits, hospital care, prescription medicine and other covered care are handled under the Dutch system according to policy conditions. All insurers must offer the same standardized basic package. Additional insurance is optional.
                  </p>
                  <CoverageExplainerCards cards={data.coverageCards} layout="2x2" />
                </section>

                <section id="comparing-providers" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    How to Compare Health Insurance Providers
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    The right provider depends on your situation, risk tolerance, preferred providers, and whether you want additional cover. Compare these factors when choosing.
                  </p>
                  <ComparisonFactorsGrid factors={data.comparisonFactors} />
                </section>

                <ProviderComparisonSection
                  providers={data.providers}
                  sectionTitle={data.comparisonSection?.title ?? "Compare providers"}
                  sectionIntro={data.comparisonSection?.intro}
                />

                {data.internationalHealthBlock ? (
                  <section id="international-health" className="scroll-mt-24 mt-12 space-y-6">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      {data.internationalHealthBlock.heading}
                    </h2>
                    <div className="space-y-4">
                      {data.internationalHealthBlock.paragraphs.map((p, i) => (
                        <p key={i} className="text-slate-700 leading-relaxed">
                          {p}
                        </p>
                      ))}
                      {data.internationalHealthBlock.linkLabel && data.internationalHealthBlock.linkHref ? (
                        <p>
                          <Link
                            href={data.internationalHealthBlock.linkHref}
                            className="inline-flex items-center gap-1 font-medium text-brand-700 hover:text-brand-800 underline"
                          >
                            {data.internationalHealthBlock.linkLabel}
                            <span aria-hidden>→</span>
                          </Link>
                        </p>
                      ) : null}
                    </div>
                    {data.internationalHealthBlock.providers && data.internationalHealthBlock.providers.length > 0 ? (
                      <div className="mt-6">
                        <h3 className="mb-3 text-lg font-semibold text-slate-900">
                          International health insurance providers expats often compare
                        </h3>
                        <ProviderCardsGrid providers={data.internationalHealthBlock.providers} />
                      </div>
                    ) : null}
                  </section>
                ) : null}

                <section id="costs-excess" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Typical Costs, Premiums and Excess
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Basic package premiums typically run around €130–165/mo depending on insurer and excess choice. The standard package includes the mandatory excess. The mandatory excess is €385 per year for most care in the standard package (Government.nl). Co-payments (eigen bijdrage) are different from excess. Supplementary insurance adds cost depending on the package.
                  </p>
                  <CostBreakdownCards cards={data.costCards} />
                </section>

                <section id="who-needs-help" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Who Usually Needs Extra Help
                  </h2>
                  <WhoNeedsHelpCards cards={data.whoNeedsExtraHelp} />
                </section>

                <section id="scenarios" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Common Expat Health Insurance Scenarios
                  </h2>
                  <ScenarioCards scenarios={data.scenarios} />
                </section>

                <RelatedGuidesSection
                  id="related-guides"
                  title="Related Guides Before You Choose a Provider"
                  blocks={relatedBlocks}
                />

                {data.relatedCategories?.length ? (
                  <section className="scroll-mt-24 mt-12 space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900">Related insurance categories</h3>
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
                    Useful Tools for Choosing Health Insurance
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Use these tools to plan your move and document readiness; they help you stay on track before and after arrival.
                  </p>
                  <ToolCards tools={toolCards} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    Frequently Asked Questions About Health Insurance for Expats
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
                  <ServiceListingDisclosure
                    sourceType="curated"
                    sourceNote="We compare insurers commonly relevant to expats; always confirm coverage and price with the provider."
                  />
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
