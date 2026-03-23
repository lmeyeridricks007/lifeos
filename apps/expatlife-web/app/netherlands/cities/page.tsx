import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { PillarTOC } from "@/components/content/PillarTOC";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { CitiesOverviewHero } from "@/src/components/cities-overview/CitiesOverviewHero";
import { QuickFitCards } from "@/src/components/cities-overview/QuickFitCards";
import { CityComparisonTable } from "@/src/components/cities-overview/CityComparisonTable";
import { ExpatPersonaCards } from "@/src/components/cities-overview/ExpatPersonaCards";
import { MajorCityCardsGrid } from "@/src/components/cities-overview/MajorCityCardsGrid";
import { CityCostComparison } from "@/src/components/cities-overview/CityCostComparison";
import { CityJobsSnapshot } from "@/src/components/cities-overview/CityJobsSnapshot";
import { NewcomerSupportCards } from "@/src/components/cities-overview/NewcomerSupportCards";
import { SecondaryCitiesSection } from "@/src/components/cities-overview/SecondaryCitiesSection";
import { CitiesExampleScenarios } from "@/src/components/cities-overview/CitiesExampleScenarios";
import { ServiceCards } from "@/src/components/city-hub/ServiceCards";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { netherlandsCitiesOverview } from "@/src/data/cities-overview/netherlands-cities";
import { getCitiesOverviewServices } from "@/src/data/cities-overview/services";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

const baseUrl = getSiteOrigin();
const path = netherlandsCitiesOverview.path;
const data = netherlandsCitiesOverview;

/** Menu placement: Netherlands > Cities submenu > "All Cities Overview" links here. Breadcrumb: Home > Netherlands > Cities */
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

export const revalidate = CONTENT_REVALIDATE;

export default function NetherlandsCitiesPage() {
  const services = getCitiesOverviewServices();
  const relatedBlocks: CityRelatedGuideBlock[] = data.relatedGuides;
  const officialSources: CityOfficialSource[] = data.officialSources;
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Cities", item: new URL(path, baseUrl).toString() },
  ];
  const dateModified = new Date().toISOString().slice(0, 10);

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline={data.hero.title}
        description={data.seo.description}
        dateModified={dateModified}
        urlPath={path}
      />
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
                <li className="font-medium text-slate-900" aria-current="page">Cities</li>
              </ol>
            </nav>
            <CitiesOverviewHero hero={data.hero} />
          </Container>
        </section>

        <Section contained={false} className="py-8 md:py-12">
          <Container className="w-full max-w-screen-2xl">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(280px,1fr)]">
              <main className="min-w-0 w-full">
                <div className="mb-8 lg:hidden rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                  <PillarTOC items={data.tocItems} />
                </div>

                <section id="overview" className="scroll-mt-24 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Overview</h2>
                  {data.intro.paragraphs.map((p, i) => (
                    <p key={i} className="text-slate-700 leading-relaxed">{p}</p>
                  ))}
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
                    {data.intro.links.map((link, i) => (
                      <span key={link.href} className="flex items-center gap-x-3">
                        {i > 0 ? <span className="text-slate-300" aria-hidden>·</span> : null}
                        <Link href={link.href} className="font-medium text-brand-700 hover:text-brand-800 underline">{link.label}</Link>
                      </span>
                    ))}
                  </p>
                </section>

                <section id="which-city-fits" className="scroll-mt-24 mt-12 space-y-8">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Which City Fits Your Expat Profile?</h2>
                  <p className="text-slate-700 leading-relaxed">Quick orientation by goal:</p>
                  <QuickFitCards cards={data.quickFitCards} />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">By expat profile</h3>
                    <p className="mt-1 text-sm text-slate-600">Recommended cities for different situations:</p>
                    <ExpatPersonaCards personas={data.personas} />
                  </div>
                </section>

                <section id="compare-major-cities" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Compare the Major Cities</h2>
                  <CityComparisonTable rows={data.comparisonRows} />
                </section>

                <section id="major-cities" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Major Cities</h2>
                  <MajorCityCardsGrid cards={data.majorCityCards} />
                </section>

                <section id="cost-comparison" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Cost Comparison</h2>
                  <p className="text-slate-700 leading-relaxed">Typical estimates for planning; not official or regulated fees.</p>
                  <CityCostComparison rows={data.costComparison} />
                </section>

                <section id="jobs-companies" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Jobs & Companies</h2>
                  <p className="text-slate-700 leading-relaxed">Sector highlights per city. Job and business counts can be wired from CBS / Business.gov.nl factsheets.</p>
                  <CityJobsSnapshot rows={data.jobsSnapshot} />
                </section>

                <section id="newcomer-support" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Newcomer Support</h2>
                  <p className="text-slate-700 leading-relaxed">Official expat and international newcomer centres in the Netherlands.</p>
                  <NewcomerSupportCards cards={data.newcomerSupport} />
                </section>

                <section id="also-popular" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Also Popular with Expats</h2>
                  <SecondaryCitiesSection cities={data.secondaryCities} />
                </section>

                <section id="example-scenarios" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Example Scenarios</h2>
                  <p className="text-slate-700 leading-relaxed">Realistic situations and why a city fits—and what to do next.</p>
                  <CitiesExampleScenarios scenarios={data.exampleScenarios} />
                </section>

                <section id="useful-services" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Useful Services</h2>
                  <p className="text-slate-700 leading-relaxed">Banking, housing, documents, insurance, and official expat support.</p>
                  <ServiceCards services={services} byCategory={true} />
                </section>

                <section id="tools" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Useful Tools</h2>
                  <ToolCards tools={data.tools} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">FAQs</h2>
                  <Accordion items={faqAccordionItems} allowMultiple={false} className="max-w-3xl" />
                </section>

                <section id="official-sources" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Official Sources</h2>
                  <p className="text-slate-700 leading-relaxed">Official newcomer centres and city business data.</p>
                  <OfficialSourcesList sources={officialSources} />
                </section>

                <RelatedGuidesSection title="Continue Planning Your Move" blocks={relatedBlocks} />
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
