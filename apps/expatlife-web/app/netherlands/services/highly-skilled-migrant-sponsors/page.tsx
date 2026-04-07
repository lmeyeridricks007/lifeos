import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
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
  CostBreakdownCards,
  WhoNeedsHelpCards,
  ScenarioCards,
  EditorialDisclosureBlock,
  ServiceCategoryTrustLinks,
  SponsorDirectory,
  FeaturedSponsorCards,
} from "@/src/components/service-category";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { highlySkilledMigrantSponsorsCategoryPage } from "@/src/data/services/categories/highly-skilled-migrant-sponsors";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import type { SponsorDirectoryMetadata } from "@/src/lib/service-category/types";
import type { FeaturedSponsorExample } from "@/src/lib/service-category/types";
import { getSiteOrigin } from "@/lib/site-origin";

const baseUrl = getSiteOrigin();
const data = highlySkilledMigrantSponsorsCategoryPage;

/*
 * INTERNAL LINKING RECOMMENDATIONS:
 * - Highly skilled migrant guide (/netherlands/highly-skilled-migrant-netherlands/) should link here prominently
 * - City pages should link here in jobs / employer / immigration sections
 * - Services hub (/netherlands/services/) should feature this page in Immigration & sponsor submenu
 * - Future sponsor profile pages (/netherlands/services/highly-skilled-migrant-sponsors/<slug>/) should link back here
 */

function getSponsorDirectoryMetadata(): SponsorDirectoryMetadata {
  const metadataPath = path.join(process.cwd(), "public", "data", "hsm-sponsors", "metadata.json");
  try {
    const raw = fs.readFileSync(metadataPath, "utf-8");
    const parsed = JSON.parse(raw) as SponsorDirectoryMetadata;
    return {
      lastUpdated: parsed.lastUpdated ?? "—",
      totalRecords: typeof parsed.totalRecords === "number" ? parsed.totalRecords : 0,
      sourceHref: parsed.sourceHref ?? "https://ind.nl/en/public-register-recognised-sponsors/public-register-regular-labour-and-highly-skilled-migrants",
      registerType: parsed.registerType ?? "Public Register Regular Labour and Highly Skilled Migrants",
      source: parsed.source ?? "IND",
    };
  } catch {
    return {
      lastUpdated: "—",
      totalRecords: 0,
      sourceHref: "https://ind.nl/en/public-register-recognised-sponsors/public-register-regular-labour-and-highly-skilled-migrants",
      registerType: "Public Register Regular Labour and Highly Skilled Migrants",
      source: "IND",
    };
  }
}

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

export default function HighlySkilledMigrantSponsorsPage() {
  const directoryMeta = getSponsorDirectoryMetadata();
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Highly Skilled Migrant Sponsors", item: new URL(data.path, baseUrl).toString() },
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
                <li className="font-medium text-copilot-text-primary" aria-current="page">Highly Skilled Migrant Sponsors</li>
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

                {data.whatIsRecognisedSponsor ? (
                  <section id="what-is-sponsor" className="scroll-mt-24 mt-8 space-y-5">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      {data.whatIsRecognisedSponsor.heading}
                    </h2>
                    {data.whatIsRecognisedSponsor.paragraphs.map((p, i) => (
                      <p key={i} className="text-copilot-text-secondary leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </section>
                ) : null}

                {data.whySponsorMatters ? (
                  <section id="why-it-matters" className="scroll-mt-24 mt-8 space-y-5">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      {data.whySponsorMatters.heading}
                    </h2>
                    {data.whySponsorMatters.paragraphs.map((p, i) => (
                      <p key={i} className="text-copilot-text-secondary leading-relaxed">
                        {p}
                      </p>
                    ))}
                    {data.whySponsorMatters.cards?.length ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {data.whySponsorMatters.cards.map((card, i) => (
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

                <section id="sponsor-directory" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Search the Official Recognised Sponsor List
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Use the directory below to search organisations by name or KvK number. Data is sourced from the IND public register. Do not treat inclusion as endorsement, active hiring, or suitability for your situation.
                  </p>
                  <SponsorDirectory
                    metadata={directoryMeta}
                    profileBasePath="/netherlands/services/highly-skilled-migrant-sponsors"
                  />
                </section>

                {data.featuredSponsorExamples?.length ? (
                  <section id="featured-examples" className="scroll-mt-24 mt-8 space-y-5">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      Examples from the Recognised Sponsor Register
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Well-known IND-recognised sponsors with links to their websites and careers pages. Inclusion here does not imply endorsement, active hiring, or suitability. Verify sponsor status in the official IND register.
                    </p>
                    <FeaturedSponsorCards
                      sponsors={data.featuredSponsorExamples}
                      profileBasePath="/netherlands/services/highly-skilled-migrant-sponsors"
                    />
                  </section>
                ) : null}

                <section id="what-to-check" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    What Expats Should Check Before Relying on Sponsor Status
                  </h2>
                  <RequirementAlertBox cards={data.requirementCards} />
                </section>

                <section id="typical-costs" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    What This Usually Costs
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Expats generally do not pay a “sponsor list” fee; the register is free. Sponsor status belongs to the employer. You may still incur costs for document preparation, translation, legalisation, relocation support, or legal help depending on your situation.
                  </p>
                  <CostBreakdownCards cards={data.costCards} />
                </section>

                {data.whoNeedsExtraHelp?.length ? (
                  <section id="when-extra-help" className="scroll-mt-24 mt-8 space-y-5">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      When Sponsor Status Alone Is Not Enough
                    </h2>
                    <WhoNeedsHelpCards cards={data.whoNeedsExtraHelp} />
                  </section>
                ) : null}

                <section id="scenarios" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Common Highly Skilled Migrant Sponsor Scenarios
                  </h2>
                  <ScenarioCards scenarios={data.scenarios} />
                </section>

                <RelatedGuidesSection
                  id="related-guides"
                  title="Related Guides Before Using This Sponsor List"
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
                    Useful Tools for Highly Skilled Migrant Planning
                  </h2>
                  <ToolCards tools={toolCards} />
                </section>

                <section id="faq" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Frequently Asked Questions About Recognised Sponsors in the Netherlands
                  </h2>
                  <Accordion items={faqAccordionItems} allowMultiple={false} className="max-w-3xl" />
                </section>

                <section id="official-sources" className="scroll-mt-24 mt-8 space-y-5">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Official Sources and Useful References
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
