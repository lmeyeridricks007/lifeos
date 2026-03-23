import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { cloneSafeMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CardLink } from "@/components/ui/card-link";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { EditorialContentHeader } from "@/src/components/content/EditorialContentHeader";
import { PillarTOC } from "@/components/content/PillarTOC";
import {
  ContentTable,
  ContentTableRow,
  ContentTableCell,
} from "@/components/ui/content-table";
import { EDITORIAL_HERO_PLACEHOLDER } from "@/src/lib/content/editorialTypes";
import {
  getFeaturedOriginCountryGuides,
  getPublishedOriginCountryGuides,
  ORIGIN_COUNTRY_INDEX_PATH,
} from "@/src/lib/countries/originCountryGuides";
import { OriginCountryBrowseSection } from "@/src/components/guides/OriginCountryBrowseSection";
import { getSiteOrigin } from "@/lib/site-origin";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();
const canonical = `${ORIGIN_COUNTRY_INDEX_PATH}/`;

const TOC_ITEMS = [
  { id: "featured-relocation-guides", label: "Featured relocation guides" },
  { id: "browse-country-guides", label: "Browse country-specific relocation guides" },
  { id: "how-planning-differs", label: "How relocation planning differs by origin country" },
  { id: "what-changes-by-origin", label: "What often changes based on your origin country" },
  { id: "popular-routes", label: "Popular relocation routes" },
  { id: "how-costs-vary", label: "How moving costs can vary by origin country" },
  { id: "why-origin-country-guides", label: "Why origin-country relocation guides help" },
  { id: "relocation-planning-tools", label: "Relocation planning tools" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "related-guides", label: "Related guides" },
];

const RELATED_GUIDES = [
  { label: "Cost of Moving to the Netherlands", href: "/netherlands/moving-to-netherlands-cost/" },
  { label: "Documents Needed to Move", href: "/netherlands/documents-needed-to-move-netherlands/" },
  { label: "First 30 Days in the Netherlands", href: "/netherlands/first-30-days-netherlands/" },
  { label: "First 90 Days in the Netherlands", href: "/netherlands/first-90-days-netherlands/" },
  { label: "EU vs Non-EU Moving to the Netherlands", href: "/netherlands/eu-vs-non-eu-moving-to-netherlands/" },
  { label: "Open a Bank Account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
  { label: "Moving to the Netherlands with Family", href: "/netherlands/moving-to-netherlands-with-family/" },
  { label: "Bringing Pets to the Netherlands", href: "/netherlands/bringing-pets-to-netherlands/" },
];

const TOOL_CTAS = [
  { label: "Use Relocation Cost Estimator", href: "/netherlands/moving/tools/relocation-cost-estimator/" },
  { label: "Generate a Moving Checklist", href: "/netherlands/moving/tools/moving-checklist/" },
  { label: "Plan Your First 90 Days", href: "/netherlands/moving/tools/first-90-days/" },
];

const RECOMMENDED_SERVICES = [
  { name: "Wise", useFor: "Send money internationally when moving funds to the Netherlands.", priceRange: "Typical percentage-based transfer fee; varies by route and currency.", url: "https://wise.com", logo: "/images/affiliates/logos/wise.svg" },
  { name: "bunq", useFor: "Expat-friendly Dutch banking with app-based onboarding.", priceRange: "Plans vary by tier.", url: "https://www.bunq.com", logo: "/images/affiliates/logos/bunq.svg" },
  { name: "HousingAnywhere", useFor: "Temporary housing platform often used before securing long-term rentals.", priceRange: "Listing prices vary by city and stay length.", url: "https://www.housinganywhere.com", logo: "/images/affiliates/logos/housinganywhere.svg" },
  { name: "Simyo", useFor: "Dutch SIM and mobile plan setup after arrival.", priceRange: "Monthly plans vary.", url: "https://www.simyo.nl", logo: "/images/affiliates/logos/simyo.svg" },
  { name: "Independer", useFor: "Compare Dutch health and other insurance categories after arrival.", priceRange: "Comparison free; premiums vary.", url: "https://www.independer.nl", logo: "/images/affiliates/logos/independer.svg" },
  { name: "Crown Relocations", useFor: "International moving and shipping support for larger relocations.", priceRange: "Quote-based depending on shipment scope and route.", url: "https://www.crownrelo.com", logo: "/logos/crownrelo.svg" },
];

function toFlagEmoji(code: string): string {
  if (!code || code.length !== 2) return "";
  return code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

export const metadata: Metadata = cloneSafeMetadata({
  title: "Moving to the Netherlands from Your Country | ExpatCopilot",
  description:
    "Explore country-specific relocation guides for moving to the Netherlands, with origin-based planning notes, document guidance, route context, and links to the right tools.",
  alternates: { canonical },
  openGraph: {
    title: "Moving to the Netherlands from Your Country | ExpatCopilot",
    description:
      "Explore country-specific relocation guides for moving to the Netherlands, with origin-based planning notes, document guidance, route context, and links to the right tools.",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "Moving to the Netherlands from Your Country | ExpatCopilot",
    description:
      "Explore country-specific relocation guides for moving to the Netherlands, with origin-based planning notes, document guidance, and links to the right tools.",
  },
});

export default async function MovingToNetherlandsFromIndexPage() {
  const featured = getFeaturedOriginCountryGuides();
  const allPublished = getPublishedOriginCountryGuides();

  const breadcrumbCrumbs = [
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Moving to the Netherlands", item: new URL("/netherlands/moving-to-the-netherlands/", baseUrl).toString() },
    { name: "Moving from your country", item: new URL(canonical, baseUrl).toString() },
  ];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Country-specific relocation guides for moving to the Netherlands",
    description: "Guides for moving to the Netherlands from specific origin countries, with planning notes and document guidance.",
    numberOfItems: allPublished.length,
    itemListElement: allPublished.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.title,
      url: new URL(entry.href, baseUrl).toString(),
    })),
  };

  const heroImagePath = "/images/relocation-planning-netherlands-hero.png";
  const hasDedicatedHero = existsSync(path.join(process.cwd(), "public", heroImagePath.replace(/^\//, "")));
  const heroImage = hasDedicatedHero
    ? { src: heroImagePath, alt: "A person at a desk planning an international move to the Netherlands, with a laptop showing a world map pinned on the Netherlands, documents, and a canal view outside the window.", priority: true as const, width: 1200, height: 630 }
    : EDITORIAL_HERO_PLACEHOLDER;

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        <Container className="py-8">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
            <main className="min-w-0">
              <EditorialContentHeader
                eyebrow="Relocation hub"
                title="Moving to the Netherlands from your country"
                subtitle="Country-specific relocation guides with origin-specific planning notes, document cues, route differences, and tailored links into the right tools and guides."
                heroImage={heroImage}
                shareUrl={new URL(canonical, baseUrl).toString()}
                pageId={canonical}
              />
              <p className="mt-4 text-sm text-slate-600 md:text-base">
                These guides help people moving to the Netherlands from specific origin countries understand common relocation considerations such as documents, visa routes, travel distance, logistics, and first-step planning.
              </p>

              {/* Top CTA: Plan your move with our relocation tools */}
              <section id="relocation-planning-tools" className="mt-8 rounded-2xl border-2 border-brand-200/80 bg-gradient-to-br from-brand-50/80 via-white to-sky-50/50 p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">Plan your move with our relocation tools</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Use these tools alongside country-specific guides to estimate your costs, organize documents, and map out your first months in the Netherlands.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {TOOL_CTAS.map((cta) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className="inline-flex h-11 items-center justify-center rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow hover:from-brand-700 hover:to-cyan-700"
                    >
                      {cta.label}
                    </Link>
                  ))}
                </div>
              </section>

              {/* Featured relocation guides */}
              <Section
                id="featured-relocation-guides"
                title="Featured relocation guides"
                subtitle="Start with the most common origin-country routes."
                contained={false}
                className="!pt-10 !pb-6"
              >
                <ul className="grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
                  {featured.map((entry) => {
                    const flagEmoji = entry.countryCode ? toFlagEmoji(entry.countryCode) : "";
                    const icon = flagEmoji ? <span className="text-xl leading-none" aria-hidden>{flagEmoji}</span> : undefined;
                    return (
                      <li key={entry.slug}>
                        <CardLink
                          href={entry.href}
                          title={`${entry.countryName} → Netherlands`}
                          description={entry.shortDescription}
                          meta={entry.supportingNote}
                          icon={icon}
                        />
                      </li>
                    );
                  })}
                </ul>
              </Section>

              {/* Browse country guides */}
              <OriginCountryBrowseSection
                id="browse-country-guides"
                items={allPublished}
                title="Browse country-specific relocation guides"
                subheading="Find your origin country for tailored planning notes, document cues, and next steps."
              />

              {/* How relocation planning differs */}
              <Section
                id="how-planning-differs"
                title="How relocation planning differs by origin country"
                contained={false}
                className="!pt-10 !pb-6"
              >
                <div className="prose prose-slate max-w-none text-sm text-slate-600 md:text-base">
                  <p>
                    Document requirements and starting points differ by country. Some origin countries more often involve apostilles, translations, or legalization. Distance affects flights and shipping. Visa context differs depending on whether you move from an EU or non-EU country and which route you use. Country-specific guides help you identify the right planning steps earlier and use tools like the{" "}
                    <Link href="/netherlands/moving/tools/relocation-cost-estimator/" className="font-medium text-brand-700 hover:underline">relocation cost estimator</Link> and{" "}
                    <Link href="/netherlands/documents-needed-to-move-netherlands/" className="font-medium text-brand-700 hover:underline">documents needed to move</Link> in the right order.
                  </p>
                </div>
              </Section>

              {/* What often changes - table */}
              <Section
                id="what-changes-by-origin"
                title="What often changes based on your origin country"
                contained={false}
                className="!pt-10 !pb-6"
              >
                <ContentTable headers={["Factor", "Why it matters"]}>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Document legalization</ContentTableCell>
                    <ContentTableCell>Some countries require apostille or legalization before documents are accepted in the Netherlands.</ContentTableCell>
                  </ContentTableRow>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Travel distance</ContentTableCell>
                    <ContentTableCell>Long-haul moves affect flight costs, shipping timelines, and how early you need to plan temporary housing.</ContentTableCell>
                  </ContentTableRow>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Visa route context</ContentTableCell>
                    <ContentTableCell>EU vs non-EU origin and your route (work, family, study) change which documents and steps apply.</ContentTableCell>
                  </ContentTableRow>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Shipping / luggage logistics</ContentTableCell>
                    <ContentTableCell>Distance and origin-country customs can affect cost and lead time for moving household goods.</ContentTableCell>
                  </ContentTableRow>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Translation requirements</ContentTableCell>
                    <ContentTableCell>Documents not in Dutch or English may need certified translation depending on use.</ContentTableCell>
                  </ContentTableRow>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Arrival timing and setup pressure</ContentTableCell>
                    <ContentTableCell>Longer travel or visa delays can compress the time you have for registration, BSN, and first-month setup.</ContentTableCell>
                  </ContentTableRow>
                </ContentTable>
                <p className="mt-4 text-sm text-slate-600">
                  Country-specific guides help surface these issues earlier so you can use the right tools and plan in the right order.
                </p>
              </Section>

              {/* Popular relocation routes */}
              <Section
                id="popular-routes"
                title="Popular relocation routes"
                subtitle="Many users start with one of the most common country-specific relocation guides below."
                contained={false}
                className="!pt-10 !pb-6"
              >
                <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
                  {featured.slice(0, 6).map((entry) => {
                    const flagEmoji = entry.countryCode ? toFlagEmoji(entry.countryCode) : "";
                    const icon = flagEmoji ? <span className="text-xl leading-none" aria-hidden>{flagEmoji}</span> : undefined;
                    return (
                      <li key={entry.slug}>
                        <CardLink
                          href={entry.href}
                          title={`${entry.countryName} → Netherlands`}
                          description={entry.shortDescription}
                          icon={icon}
                        />
                      </li>
                    );
                  })}
                </ul>
              </Section>

              {/* How moving costs can vary */}
              <Section
                id="how-costs-vary"
                title="How moving costs can vary by origin country"
                contained={false}
                className="!pt-10 !pb-6"
              >
                <div className="prose prose-slate max-w-none text-sm text-slate-600 md:text-base">
                  <p>
                    Long-haul routes often increase flight and shipping costs. Documentation and translations can add expense. Visa-related routes can introduce additional fees and timing risk. Temporary housing may need to be longer if setup is delayed. Regional travel distance affects your relocation budget. For planning, see our guide on the{" "}
                    <Link href="/netherlands/moving-to-netherlands-cost/" className="font-medium text-brand-700 hover:underline">cost of moving to the Netherlands</Link> and use the{" "}
                    <Link href="/netherlands/moving/tools/relocation-cost-estimator/" className="font-medium text-brand-700 hover:underline">relocation cost estimator</Link> to get a personalized range.
                  </p>
                </div>
              </Section>

              {/* Why origin-country guides help */}
              <Section
                id="why-origin-country-guides"
                title="Why origin-country relocation guides help"
                contained={false}
                className="!pt-10 !pb-6"
              >
                <div className="prose prose-slate max-w-none text-sm text-slate-600 md:text-base">
                  <p>
                    Document rules and starting points differ by country. Some routes more often involve apostilles, translations, or longer logistics. Distance affects flights and shipping. Visa context differs for EU vs non-EU origins. Country pages help you find the right tools and next steps faster—including the <Link href="/netherlands/first-90-days-netherlands/" className="font-medium text-brand-700 hover:underline">first 90 days in the Netherlands</Link>, <Link href="/netherlands/eu-vs-non-eu-moving-to-netherlands/" className="font-medium text-brand-700 hover:underline">EU vs non-EU moving</Link>, and <Link href="/netherlands/open-bank-account-netherlands/" className="font-medium text-brand-700 hover:underline">opening a bank account</Link>.
                  </p>
                </div>
              </Section>

              {/* Mid-page CTA */}
              <section className="mt-8 rounded-2xl border-2 border-sky-200/80 bg-gradient-to-br from-sky-50/80 to-white p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">Need a personalized plan as well?</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Use the calculator and planning tools alongside the country guides to estimate your costs, organize documents, and map out your first months in the Netherlands.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {TOOL_CTAS.map((cta) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                    >
                      {cta.label}
                    </Link>
                  ))}
                </div>
              </section>

              {/* Recommended services */}
              <Section
                id="recommended-services"
                title="Recommended services"
                subtitle="These services may help with different parts of relocation planning, including moving money, temporary housing, mobile setup, insurance comparison, and international shipping. Pricing notes are indicative for planning—check providers for current rates."
                contained={false}
                className="!pt-10 !pb-6"
              >
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {RECOMMENDED_SERVICES.map((service) => (
                    <a
                      key={service.name}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-50 p-2 group-hover:bg-brand-50">
                          <Image
                            src={service.logo}
                            alt=""
                            width={48}
                            height={48}
                            className="h-8 w-auto object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-slate-900 group-hover:text-brand-700">{service.name}</p>
                          <p className="mt-0.5 text-sm text-slate-600">{service.useFor}</p>
                        </div>
                      </div>
                      <p className="mt-3 border-t border-slate-100 pt-3 text-sm font-medium text-slate-800">
                        {service.priceRange}
                      </p>
                    </a>
                  ))}
                </div>
              </Section>

              {/* Bottom CTA */}
              <section className="mt-8 rounded-2xl border-l-4 border-l-brand-600 bg-sky-50/60 px-5 py-6 md:px-6">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">Start planning your move</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Use the relocation cost estimator and checklist tools to turn country-specific guidance into a practical relocation plan.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/netherlands/moving/tools/relocation-cost-estimator/"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-brand-700/20 bg-gradient-to-r from-brand-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow hover:from-brand-700 hover:to-cyan-700"
                  >
                    Start Cost Estimator
                  </Link>
                  <Link
                    href="/netherlands/moving/tools/moving-checklist/"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                  >
                    Generate a Moving Checklist
                  </Link>
                </div>
              </section>

              {/* Related guides */}
              <Section
                id="related-guides"
                title="Related guides"
                contained={false}
                className="!pt-10 !pb-12"
              >
                <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
                  {RELATED_GUIDES.slice(0, 8).map((g) => (
                    <li key={g.href}>
                      <CardLink href={g.href} title={g.label} description="" />
                    </li>
                  ))}
                </ul>
              </Section>
            </main>

            {/* On this page - sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                <PillarTOC items={TOC_ITEMS} />
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </>
  );
}
