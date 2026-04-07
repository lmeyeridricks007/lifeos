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
  TrustInfoBlock,
} from "@/src/components/service-category";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { ToolCards } from "@/src/components/city-hub/ToolCards";
import { OfficialSourcesList } from "@/src/components/city-hub/OfficialSourcesList";
import { banksCategoryPage } from "@/src/data/services/categories/banks";
import type { CityRelatedGuideBlock } from "@/src/lib/city-hub/types";
import type { CityToolCard } from "@/src/lib/city-hub/types";
import type { CityOfficialSource } from "@/src/lib/city-hub/types";
import { getSiteOrigin } from "@/lib/site-origin";
import { PresetSoftCTA } from "@/src/components/soft-cta/PresetSoftCTA";

const baseUrl = getSiteOrigin();
const data = banksCategoryPage;

/*
 * INTERNAL LINKING RECOMMENDATIONS:
 * - /netherlands/open-bank-account-netherlands/ should link to this category page (e.g. "Compare Dutch banks" → /netherlands/services/banks/)
 * - City pages (Amsterdam, Rotterdam, Utrecht, The Hague, Eindhoven) should link to this page in their banking/service sections
 * - /netherlands/services/ should feature this page in Banking & Finance and in "Popular provider categories"
 * - Future provider review pages (/netherlands/services/banks/bunq/, etc.) should link back to this category page
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
    name: "Dutch banks and banking services for expats",
    description: "Popular banks and money services expats often compare in the Netherlands.",
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

export default function BanksCategoryPage() {
  const faqAccordionItems = data.faqs.map((item, i) => ({
    id: `faq-${i}`,
    title: item.q,
    content: item.a,
  }));
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands", baseUrl).toString() },
    { name: "Services", item: new URL("/netherlands/services/", baseUrl).toString() },
    { name: "Banks", item: new URL(data.path, baseUrl).toString() },
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
                <li className="font-medium text-copilot-text-primary" aria-current="page">Banks</li>
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

                <section id="when-need-account" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    When Expats Usually Need a Dutch Bank Account
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    A Dutch account is often needed to arrange practical life in the Netherlands—salary, rent, subscriptions, utilities, taxes, and day-to-day payments. Netherlands Worldwide notes that you need a Dutch bank account to arrange certain things and that you generally need a BSN to open one. Bank rules may differ; some banks may allow staged onboarding depending on their policies.
                  </p>
                  <RequirementAlertBox cards={data.requirementCards} />
                </section>

                <section id="what-to-compare" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    How to Compare Dutch Banks as an Expat
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    The best bank for one expat may not be the best fit for another. Some people value low monthly fees and app-first onboarding, while others prioritise branch access, English-language service, or international transfer convenience.
                  </p>
                  <ComparisonFactorsGrid factors={data.comparisonFactors} />
                </section>

                {data.digitalBanksBlock ? (
                  <section id="digital-banks" className="scroll-mt-24 mt-12 space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      {data.digitalBanksBlock.heading}
                    </h2>
                    <div className="space-y-4">
                      {data.digitalBanksBlock.paragraphs.map((p, i) => (
                        <p key={i} className="text-copilot-text-secondary leading-relaxed">
                          {p}
                        </p>
                      ))}
                      {data.digitalBanksBlock.linkLabel && data.digitalBanksBlock.linkHref ? (
                        <p>
                          <Link
                            href={data.digitalBanksBlock.linkHref}
                            className="inline-flex items-center gap-1 font-medium text-brand-700 hover:text-brand-800 underline"
                          >
                            {data.digitalBanksBlock.linkLabel}
                            <span aria-hidden>→</span>
                          </Link>
                        </p>
                      ) : null}
                    </div>
                  </section>
                ) : null}

                <ProviderComparisonSection
                  providers={data.providers}
                  sectionTitle={data.comparisonSection?.title ?? "Compare providers"}
                  sectionIntro={data.comparisonSection?.intro}
                />

                <section id="costs-cards" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Typical Costs and Banking Features to Compare
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Basic current accounts are often free at traditional banks; digital banks typically charge around €2.50–4/mo. Debit card and iDEAL are usually included. International transfer costs vary (e.g. 0–2% + fee, or free tiers with dedicated services). Below are typical ranges to compare.
                  </p>
                  <CostBreakdownCards cards={data.costCards} />
                </section>

                {data.trustBlock ? (
                  <section id="deposit-guarantee" className="scroll-mt-24 mt-12 space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                      {data.trustBlock.heading}
                    </h2>
                    <TrustInfoBlock trustBlock={data.trustBlock} />
                  </section>
                ) : null}

                <section id="who-needs-help" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Who Often Needs Extra Banking Guidance
                  </h2>
                  <WhoNeedsHelpCards cards={data.whoNeedsExtraHelp} />
                </section>

                <section id="scenarios" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Common Expat Banking Scenarios
                  </h2>
                  <ScenarioCards scenarios={data.scenarios} />
                </section>

                <RelatedGuidesSection
                  id="related-guides"
                  title="Related Guides Before You Choose a Bank"
                  blocks={relatedBlocks}
                />

                {data.relatedCategories?.length ? (
                  <section className="scroll-mt-24 mt-12 space-y-4">
                    <h3 className="text-lg font-bold text-copilot-text-primary">Related finance categories</h3>
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
                    Useful Tools Before Opening a Dutch Bank Account
                  </h2>
                  <p className="text-copilot-text-secondary leading-relaxed">
                    Use these tools to plan your move and document readiness so you’re ready when it’s time to open an account.
                  </p>
                  <ToolCards tools={toolCards} />
                </section>

                <PresetSoftCTA preset="servicesBanksHubSoftCta" contained={false} />

                <section id="faq" className="scroll-mt-24 mt-12 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight text-copilot-text-primary">
                    Frequently Asked Questions About Dutch Banks for Expats
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
