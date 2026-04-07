import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { Calculator, CalendarDays, ListChecks } from "lucide-react";
import { cloneSafeMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { ArticleJsonLd } from "@/lib/seo/jsonld";
import { PillarTOC } from "@/components/content/PillarTOC";
import { GuidePageTemplate } from "@/components/page/page-templates";
import {
  AtGlanceCard,
  PageHero,
  PillarEssentialsSurface,
  PillarGuideAtGlanceRegion,
  PillarGuideHeroRegion,
  PillarGuideNextStepsRegion,
  PillarGuideToolsSection,
  PillarJourneyStack,
  SectionBlock,
  ToolCard,
} from "@/components/page/pillar-template";
import { EDITORIAL_HERO_PLACEHOLDER } from "@/src/lib/content/editorialTypes";
import type { EditorialHeroImage } from "@/src/lib/content/editorialTypes";
import {
  ContentTable,
  ContentTableRow,
  ContentTableCell,
} from "@/components/ui/content-table";
import { CardLink } from "@/components/ui/card-link";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import {
  getFeaturedOriginCountryHubCards,
  getPublishedOriginCountryGuides,
  getAllOriginCountryGuideEntries,
  ORIGIN_COUNTRY_INDEX_PATH,
  type OriginCountryHubVisibilityOptions,
} from "@/src/lib/countries/originCountryGuides";
import { OriginCountryBrowseSection } from "@/src/components/guides/OriginCountryBrowseSection";
import { getSiteOrigin } from "@/lib/site-origin";
import { headers } from "next/headers";
import { DEV_SIMULATE_LIVE_HEADER } from "@/src/lib/publishing/devSimulateLive";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getRelocationCostMarketingRecommendedCards } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import {
  movingNlCardMicroLiftClass,
  movingNlCardShadowHoverClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { cityGuideKeySectionsPadClass, guideKeyColumnStackGapClass } from "@/lib/ui/page-rhythm";
import { MoveClusterOriginCountryPostFaq } from "@/src/components/monetization/MoveClusterOriginCountryPostFaq";

export const revalidate = CONTENT_REVALIDATE;
/** Country list uses publish dates; avoid freezing the browse grid at build time. */
export const dynamic = "force-dynamic";

const baseUrl = getSiteOrigin();
const canonical = `${ORIGIN_COUNTRY_INDEX_PATH}/`;

const TOC_ITEMS = [
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

const TOOL_ITEMS = [
  {
    href: "/netherlands/moving/tools/relocation-cost-estimator/",
    title: "Relocation cost estimator",
    description: "Estimate fees, deposits, and early-month cash needs for your route.",
    ctaLabel: "Open estimator",
    icon: <Calculator className="h-5 w-5" aria-hidden />,
  },
  {
    href: "/netherlands/moving/tools/moving-checklist/",
    title: "Moving checklist",
    description: "Generate a phased checklist linked to official next steps.",
    ctaLabel: "Open checklist",
    icon: <ListChecks className="h-5 w-5" aria-hidden />,
  },
  {
    href: "/netherlands/moving/tools/first-90-days/",
    title: "First 90 days planner",
    description: "Map your first weeks after arrival so admin tasks do not pile up.",
    ctaLabel: "Plan first 90 days",
    icon: <CalendarDays className="h-5 w-5" aria-hidden />,
  },
];

function toFlagEmoji(code: string): string {
  if (!code || code.length !== 2) return "";
  return code.toUpperCase().replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

const serviceCardClass = cn(
  "group relative flex flex-col overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] transition-all duration-200 ease-out hover:shadow-expatos-hover motion-reduce:transition-none motion-reduce:hover:shadow-expatos-md",
  movingNlCardShadowHoverClass,
  movingNlCardMicroLiftClass
);

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

const POPULAR_ROUTE_CARD_LIMIT = 5;

function heroToEditorial(
  src: string,
  alt: string,
  width: number,
  height: number
): EditorialHeroImage {
  return { src, alt, priority: true, width, height };
}

export default async function MovingToNetherlandsFromIndexPage() {
  const requestHeaders = await headers();
  const simulateProductionHub =
    process.env.NODE_ENV === "production" || requestHeaders.get(DEV_SIMULATE_LIVE_HEADER) === "1";

  const hubVisibility: OriginCountryHubVisibilityOptions = {
    enforceHubPublishDates: simulateProductionHub,
  };

  const popularRoutePicks = getFeaturedOriginCountryHubCards(POPULAR_ROUTE_CARD_LIMIT, hubVisibility);
  const recommendedServiceCards = getRelocationCostMarketingRecommendedCards();
  const browseEntries = getAllOriginCountryGuideEntries(hubVisibility);
  const allPublishedForSchema = simulateProductionHub
    ? getPublishedOriginCountryGuides()
    : browseEntries.filter((e) => e.isPublished);

  const breadcrumbCrumbs = [
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Moving to the Netherlands", item: new URL("/netherlands/moving-to-the-netherlands/", baseUrl).toString() },
    { name: "Moving from your country", item: new URL(canonical, baseUrl).toString() },
  ];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Country-specific relocation guides for moving to the Netherlands",
    description:
      "Guides for moving to the Netherlands from specific origin countries, with planning notes and document guidance.",
    numberOfItems: allPublishedForSchema.length,
    itemListElement: allPublishedForSchema.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.title,
      url: new URL(entry.href, baseUrl).toString(),
    })),
  };

  const heroImagePath = "/images/relocation-planning-netherlands-hero.png";
  const hasDedicatedHero = existsSync(path.join(process.cwd(), "public", heroImagePath.replace(/^\//, "")));
  const heroImage: EditorialHeroImage | typeof EDITORIAL_HERO_PLACEHOLDER = hasDedicatedHero
    ? heroToEditorial(
        heroImagePath,
        "A person at a desk planning an international move to the Netherlands, with a laptop showing a world map pinned on the Netherlands, documents, and a canal view outside the window.",
        1200,
        630
      )
    : EDITORIAL_HERO_PLACEHOLDER;

  const canonicalUrl = new URL(canonical, baseUrl).toString();
  const articleModified = "2026-04-02";
  const articleDescription =
    "Explore country-specific relocation guides for moving to the Netherlands, with origin-based planning notes, document guidance, route context, and links to the right tools.";

  const proseClass =
    "max-w-none text-sm leading-relaxed text-copilot-text-secondary md:text-base [&_a]:font-semibold [&_a]:text-copilot-primary [&_a]:underline-offset-2 hover:[&_a]:text-copilot-primary-strong";

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <ArticleJsonLd
        headline="Moving to the Netherlands from your country"
        description={articleDescription}
        dateModified={articleModified}
        urlPath={`${ORIGIN_COUNTRY_INDEX_PATH}/`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <GuidePageTemplate
        mainStackClassName="mt-2 space-y-4 sm:mt-3 sm:space-y-5 md:space-y-6"
        wrapContent={(inner) => (
          <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>{inner}</Container>
        )}
        hero={
          <PillarGuideHeroRegion>
            <PageHero
              movingPillarIdentity
              heroTitleDensity="tight"
              eyebrowBandClassName={sitePillarFramedHeroTopBandClass}
              contentGutterClassName={sitePillarFramedHeroGutterXClass}
              eyebrow="Netherlands · Moving hub"
              title="Moving to the Netherlands from your country"
              subtitle="Country-specific relocation guides with origin-specific planning notes, document cues, route differences, and tailored links into the right tools and guides."
              heroImage={heroImage}
              shareUrl={canonicalUrl}
              pageId={canonical}
            />
          </PillarGuideHeroRegion>
        }
        atAGlance={
          <PillarGuideAtGlanceRegion>
            <AtGlanceCard
              id="at-a-glance"
              eyebrow="ExpatOS summary"
              heading="At a glance"
              intro="Who this hub is for, what to do first, and how origin country changes documents, travel, and timing."
              who={["Anyone choosing an origin-country route", "EU and non-EU movers", "Work, family, and study paths"]}
              timeline="Depends on visa route, distance, documents, and housing timing."
              steps={[
                "Find your origin-country guide in the browse grid",
                "Use cost and checklist tools in the right order",
                "Line up documents, translations, and logistics early",
              ]}
              footer={<span>Content is updated regularly; guides may show Coming soon until their publish date.</span>}
            />
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <div className={cityGuideKeySectionsPadClass}>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:items-start lg:gap-8 xl:gap-10">
              <PillarJourneyStack variant="guide" className={cn("min-w-0", guideKeyColumnStackGapClass)}>
                <div className="mb-5 lg:hidden">
                  <PillarTOC items={TOC_ITEMS} tone="support" />
                </div>

                {simulateProductionHub && process.env.NODE_ENV === "development" ? (
                  <div className="rounded-xl border border-amber-500/35 bg-amber-500/[0.12] px-4 py-3 text-sm text-copilot-text-primary">
                    <strong className="font-semibold">Production-style hub:</strong> guides with a future{" "}
                    <code className="rounded bg-copilot-surface/80 px-1 py-0.5 text-xs ring-1 ring-copilot-primary/10">
                      publishDate
                    </code>{" "}
                    are listed as <span className="font-medium">Coming soon</span> because this request uses{" "}
                    <code className="rounded bg-copilot-surface/80 px-1 py-0.5 text-xs ring-1 ring-copilot-primary/10">
                      ?preview=true
                    </code>{" "}
                    (same as production). Open the hub without that query for clickable scheduled guides in local dev.
                  </div>
                ) : null}

                <PillarEssentialsSurface>
              <OriginCountryBrowseSection
                id="browse-country-guides"
                className="py-0 sm:py-0 md:py-0"
                items={browseEntries}
                title="Browse country-specific relocation guides"
                subheading="Find your origin country for tailored planning notes, document cues, and next steps. On the live site, guides with a future publish date stay Coming soon until that date; in local dev they stay clickable unless you add ?preview=true to match production."
              />

              <SectionBlock
                id="how-planning-differs"
                title="How relocation planning differs by origin country"
                className="!pt-8 sm:!pt-9"
              >
                <div className={proseClass}>
                  <p>
                    Document requirements and starting points differ by country. Some origin countries more often involve
                    apostilles, translations, or legalization. Distance affects flights and shipping. Visa context differs
                    depending on whether you move from an EU or non-EU country and which route you use. Country-specific
                    guides help you identify the right planning steps earlier and use tools like the{" "}
                    <Link href="/netherlands/moving/tools/relocation-cost-estimator/">relocation cost estimator</Link> and{" "}
                    <Link href="/netherlands/documents-needed-to-move-netherlands/">documents needed to move</Link> in the
                    right order.
                  </p>
                </div>
              </SectionBlock>

              <SectionBlock id="what-changes-by-origin" title="What often changes based on your origin country">
                <ContentTable headers={["Factor", "Why it matters"]}>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Document legalization</ContentTableCell>
                    <ContentTableCell>
                      Some countries require apostille or legalization before documents are accepted in the Netherlands.
                    </ContentTableCell>
                  </ContentTableRow>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Travel distance</ContentTableCell>
                    <ContentTableCell>
                      Long-haul moves affect flight costs, shipping timelines, and how early you need to plan temporary
                      housing.
                    </ContentTableCell>
                  </ContentTableRow>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Visa route context</ContentTableCell>
                    <ContentTableCell>
                      EU vs non-EU origin and your route (work, family, study) change which documents and steps apply.
                    </ContentTableCell>
                  </ContentTableRow>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Shipping / luggage logistics</ContentTableCell>
                    <ContentTableCell>
                      Distance and origin-country customs can affect cost and lead time for moving household goods.
                    </ContentTableCell>
                  </ContentTableRow>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Translation requirements</ContentTableCell>
                    <ContentTableCell>
                      Documents not in Dutch or English may need certified translation depending on use.
                    </ContentTableCell>
                  </ContentTableRow>
                  <ContentTableRow>
                    <ContentTableCell emphasis>Arrival timing and setup pressure</ContentTableCell>
                    <ContentTableCell>
                      Longer travel or visa delays can compress the time you have for registration, BSN, and first-month
                      setup.
                    </ContentTableCell>
                  </ContentTableRow>
                </ContentTable>
                <p className="mt-4 text-sm text-copilot-text-secondary">
                  Country-specific guides help surface these issues earlier so you can use the right tools and plan in the
                  right order.
                </p>
              </SectionBlock>

              <SectionBlock
                id="popular-routes"
                title="Popular relocation routes"
                subtitle="Five common starting points; the browse section lists every origin-country guide. On production, future-dated guides show as Coming soon until publish; in local dev they are live links unless you open this page with ?preview=true."
              >
                <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
                  {popularRoutePicks.map((entry) => {
                    const flagEmoji = entry.countryCode ? toFlagEmoji(entry.countryCode) : "";
                    const icon = flagEmoji ? (
                      <span className="text-xl leading-none" aria-hidden>
                        {flagEmoji}
                      </span>
                    ) : undefined;
                    return (
                      <li key={entry.slug}>
                        <CardLink
                          href={entry.href}
                          title={`${entry.countryName} → Netherlands`}
                          description={entry.shortDescription}
                          icon={icon}
                          status={entry.isPublished ? undefined : "coming_soon"}
                        />
                      </li>
                    );
                  })}
                </ul>
              </SectionBlock>

              <SectionBlock id="how-costs-vary" title="How moving costs can vary by origin country">
                <div className={proseClass}>
                  <p>
                    Long-haul routes often increase flight and shipping costs. Documentation and translations can add
                    expense. Visa-related routes can introduce additional fees and timing risk. Temporary housing may need
                    to be longer if setup is delayed. Regional travel distance affects your relocation budget. For planning,
                    see our guide on the{" "}
                    <Link href="/netherlands/moving-to-netherlands-cost/">cost of moving to the Netherlands</Link> and use
                    the{" "}
                    <Link href="/netherlands/moving/tools/relocation-cost-estimator/">relocation cost estimator</Link> to get
                    a personalized range.
                  </p>
                </div>
              </SectionBlock>

              <SectionBlock id="why-origin-country-guides" title="Why origin-country relocation guides help">
                <div className={proseClass}>
                  <p>
                    Document rules and starting points differ by country. Some routes more often involve apostilles,
                    translations, or longer logistics. Distance affects flights and shipping. Visa context differs for EU vs
                    non-EU origins. Country pages help you find the right tools and next steps faster—including the{" "}
                    <Link href="/netherlands/first-90-days-netherlands/">first 90 days in the Netherlands</Link>,{" "}
                    <Link href="/netherlands/eu-vs-non-eu-moving-to-netherlands/">EU vs non-EU moving</Link>, and{" "}
                    <Link href="/netherlands/open-bank-account-netherlands/">opening a bank account</Link>.
                  </p>
                </div>
              </SectionBlock>

              <SectionBlock
                id="recommended-services"
                title="Recommended services"
                subtitle="These services may help with different parts of relocation planning, including moving money, temporary housing, mobile setup, insurance comparison, and international shipping. Pricing notes are indicative for planning—check providers for current rates."
              >
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {recommendedServiceCards.map((service) => (
                    <a
                      key={service.name}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={serviceCardClass}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-primary/12 to-copilot-accent/12 p-2 ring-1 ring-copilot-primary/10">
                          {service.logo ? (
                            <Image
                              src={service.logo.src}
                              alt={service.logo.alt}
                              width={48}
                              height={48}
                              className="h-8 w-auto object-contain"
                              unoptimized={!service.logo.src.startsWith("/")}
                            />
                          ) : (
                            <span className="text-xs font-bold text-copilot-text-muted" aria-hidden>
                              {service.name.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-copilot-text-primary group-hover:text-copilot-primary-strong">
                            {service.name}
                          </p>
                          <p className="mt-0.5 text-sm text-copilot-text-secondary">{service.useFor}</p>
                        </div>
                      </div>
                      <p className="mt-3 border-t border-copilot-primary/10 pt-3 text-sm font-semibold text-copilot-text-primary">
                        {service.priceRange ?? "Check provider for current pricing."}
                      </p>
                    </a>
                  ))}
                </div>
              </SectionBlock>
                </PillarEssentialsSurface>
              </PillarJourneyStack>

              <aside className="hidden min-w-0 lg:block lg:sticky lg:top-24 lg:self-start" aria-label="On this page">
                <PillarTOC items={TOC_ITEMS} tone="support" />
              </aside>
            </div>
          </div>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id="relocation-planning-tools"
            title="Relocation planning tools"
            subtitle="Use these tools alongside country-specific guides to estimate costs, organize documents, and map your first months."
          >
            {TOOL_ITEMS.map((t) => (
              <ToolCard
                key={t.href}
                icon={t.icon}
                title={t.title}
                description={t.description}
                href={t.href}
                ctaLabel={t.ctaLabel}
                compact
              />
            ))}
          </PillarGuideToolsSection>
        }
        nextSteps={
          <PillarGuideNextStepsRegion>
            <SectionBlock id="related-guides" title="Related guides" subtitle="Deep dives that pair well with origin-country planning." compact>
              <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
                {RELATED_GUIDES.map((g) => (
                  <li key={g.href}>
                    <CardLink href={g.href} title={g.label} description="" />
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </PillarGuideNextStepsRegion>
        }
        afterFaq={<MoveClusterOriginCountryPostFaq />}
      />
    </>
  );
}
