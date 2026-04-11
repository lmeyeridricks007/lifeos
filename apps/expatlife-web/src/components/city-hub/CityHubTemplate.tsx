import Link from "next/link";
import { Lightbulb } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PillarTOC } from "@/components/content/PillarTOC";
import { InfoBox } from "@/components/ui/info-box";
import type { CityHubPageData, CityRelatedGuideBlock, CityServiceCard } from "@/src/lib/city-hub/types";
import { GuidePageTemplate } from "@/components/page/page-templates";
import {
  FAQBlock,
  PageHero,
  PillarGuideAtGlanceRegion,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarGuideNextStepsRegion,
  PillarGuideToolsSection,
  PillarJourneyStack,
  SectionBlock,
  ToolCard,
} from "@/components/page/pillar-template";
import { QuickFactsGrid } from "./QuickFactsGrid";
import { OverviewIntro } from "./OverviewIntro";
import { ProcessTimeline } from "./ProcessTimeline";
import { CityChecklist } from "./CityChecklist";
import { ExampleScenarios } from "./ExampleScenarios";
import { ServiceCards } from "./ServiceCards";
import { RelatedGuidesGrid } from "./RelatedGuidesGrid";
import { OfficialSourcesList } from "./OfficialSourcesList";
import { CityLinksSection } from "./CityLinksSection";
import { CityOverview } from "./CityOverview";
import { CityWhyExpatsCombinedSection } from "./CityReasonsGrid";
import { CityStatsCards } from "./CityStatsCards";
import { CityComparisonTable } from "./CityComparisonTable";
import { CityExpatsProfile } from "./CityExpatsProfile";
import { CityHubHeroCtas } from "./CityHubHeroCtas";
import { CitySignatureDarkSection } from "./CitySignatureDarkSection";
import { cn } from "@/lib/cn";
import { withCityHubRegistryCards } from "@/src/lib/city-hub/registryCityServiceCards";
import { getSiteOrigin } from "@/lib/site-origin";
import { cityGuideKeySectionsPadClass, guideKeyColumnStackGapClass } from "@/lib/ui/page-rhythm";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import { movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { isRouteLive } from "@/src/lib/routes/routeStatus";
import { PresetSoftCTA } from "@/src/components/soft-cta/PresetSoftCTA";
import { CityHubMonetizationAfterContent } from "@/src/components/monetization/CityHubMonetizationAfterContent";

/**
 * City guide variant of the moving-pillar `GuidePageTemplate`: same ExpatOS shells, spacing rhythm,
 * and card language; ordered hero → at-a-glance → key sections (+ quiet TOC) → tools → next steps → FAQ.
 *
 * **All** Netherlands city hubs (`NETHERLANDS_CITY_HUB_PAGES` in `src/lib/city-hub/netherlandsCityHubPages.ts`)
 * should render through this template only (`app/netherlands/{slug}/page.tsx` → `<CityHubTemplate />`).
 * Shared children (`RelatedGuidesGrid`, `CityComparisonTable`, `CityHubHeroCtas`, etc.) propagate UI changes
 * to every city automatically — do not duplicate layout per city.
 */
const linkCtaClass =
  "text-sm font-semibold text-copilot-primary transition hover:text-copilot-primary-strong hover:underline";

const BEST_CITIES_DECISION_GUIDE_BLOCK: CityRelatedGuideBlock = {
  title: "Choosing between cities",
  links: [{ label: "Best cities in the Netherlands for expats", href: "/netherlands/cities/best-cities-for-expats/" }],
};

export type CityHubTemplateProps = {
  data: CityHubPageData;
  /** Optional: all services for the "Services for Expats" section. If not provided, uses data.banking.services only for banking block. */
  allServices?: CityServiceCard[];
};

/** Breadcrumb: Home > Netherlands > Cities > [City name]. */
function CityBreadcrumb({ cityName }: { cityName: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm leading-tight text-copilot-text-secondary">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" className="hover:text-copilot-text-primary">
            Home
          </Link>
        </li>
        <li aria-hidden className="text-copilot-text-muted">
          /
        </li>
        <li>
          <Link href="/netherlands/" className="hover:text-copilot-text-primary">
            Netherlands
          </Link>
        </li>
        <li aria-hidden className="text-copilot-text-muted">
          /
        </li>
        <li>
          <Link href="/netherlands/cities/" className="hover:text-copilot-text-primary">
            Cities
          </Link>
        </li>
        <li aria-hidden className="text-copilot-text-muted">
          /
        </li>
        <li className="font-medium text-copilot-text-primary" aria-current="page">
          {cityName}
        </li>
      </ol>
    </nav>
  );
}

/** Section id for registration (city-specific, e.g. register-amsterdam, register-rotterdam). */
function getRegistrationSectionId(tocItems: { id: string }[]): string {
  return tocItems.find((t) => t.id.includes("register"))?.id ?? "register";
}

export function CityHubTemplate({ data, allServices }: CityHubTemplateProps) {
  const hub = withCityHubRegistryCards(data);
  const bankingServices = hub.banking.services?.length
    ? hub.banking.services
    : allServices?.filter((s) => s.category === "Banking / money") ?? [];
  const healthInsuranceServices = hub.healthInsurance.services ?? [];
  const housingPlatformServices = hub.housingCosts.services ?? [];
  const servicesForExpats = allServices ?? [];
  const registrationSectionId = getRegistrationSectionId(data.tocItems);
  const isAltLayout = data.hubLayout === "amsterdam-area-alternative";
  const earlyPractical = Boolean(isAltLayout && data.earlyPracticalSections);

  const baseUrl = getSiteOrigin();
  const canonicalUrl = new URL(data.path, baseUrl).toString();

  const whoMovesHereAndTradeoffs = (
    <>
      {data.whoMovesHere ? <CityExpatsProfile data={data.whoMovesHere} /> : null}
      {data.tradeOffs ? (
        <SectionBlock id="trade-offs" title={data.tradeOffs.heading} compact className="scroll-mt-24">
          <div className="space-y-4">
            {data.tradeOffs.paragraphs.map((p, i) => (
              <p key={i} className="text-copilot-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </SectionBlock>
      ) : null}
    </>
  );

  const relatedGuidesBlocks = [BEST_CITIES_DECISION_GUIDE_BLOCK, ...(data.relatedGuides ?? [])];
  const hasRelatedGuides = relatedGuidesBlocks.some((b) => (b.links ?? []).length > 0);
  const hasCityLinks = Boolean(data.cityLinks?.length);

  return (
    <GuidePageTemplate
      rootClassName="min-h-screen"
      mainStackClassName="mt-2 space-y-4 sm:mt-3 sm:space-y-5 md:space-y-6"
      wrapContent={(inner) => (
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>{inner}</Container>
      )}
      hero={
        <PillarGuideHeroRegion>
          <div className={sitePillarFramedHeroTopBandClass}>
            <CityBreadcrumb cityName={data.name} />
          </div>
          <PageHero
            movingPillarIdentity
            heroTitleDensity="tight"
            contentGutterClassName={sitePillarFramedHeroGutterXClass}
            eyebrow={data.hero.eyebrow}
            title={data.hero.title}
            subtitle={data.hero.subtitle}
            heroImage={
              data.hero.image?.src
                ? {
                    src: data.hero.image.src,
                    alt: data.hero.image.alt,
                    caption: data.hero.image.caption,
                    priority: data.hero.image.priority ?? true,
                  }
                : null
            }
            shareUrl={canonicalUrl}
            pageId={data.path}
            afterSubtitle={<CityHubHeroCtas hero={data.hero} />}
          />
        </PillarGuideHeroRegion>
      }
      atAGlance={
        data.quickFacts?.length ? (
          <PillarGuideAtGlanceRegion>
            <SectionBlock
              id={`${data.slug}-at-a-glance`}
              title={data.quickFactsHeading ?? `${data.name} at a Glance`}
              compact
              className="scroll-mt-24 pt-0 sm:pt-0"
            >
              <QuickFactsGrid items={data.quickFacts} />
            </SectionBlock>
          </PillarGuideAtGlanceRegion>
        ) : null
      }
      keySections={
        <div className={cityGuideKeySectionsPadClass}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:items-start lg:gap-8 xl:gap-10">
            <PillarJourneyStack variant="guide" className={cn("min-w-0", guideKeyColumnStackGapClass)}>
              <div className="mb-5 lg:hidden">
                <PillarTOC items={data.tocItems} tone="support" />
              </div>

              <SectionBlock
                id="overview"
                title="Overview"
                compact
                className="scroll-mt-24 !pt-2 sm:!pt-3"
              >
                <OverviewIntro data={data} />
              </SectionBlock>

              {data.cityComparison ? (
                <SectionBlock
                  id="comparing-cities"
                  title={data.cityComparison.heading}
                  compact
                  className="scroll-mt-24"
                >
                  <CityComparisonTable
                    currentCityName={data.name}
                    ctaLabel={data.cityComparison.ctaLabel}
                    ctaHref={data.cityComparison.ctaHref}
                  />
                </SectionBlock>
              ) : null}

              <CityWhyExpatsCombinedSection
                cityName={data.name}
                cityOverview={data.cityOverview}
                whyExpatsChoose={data.whyExpatsChoose}
              />

              {data.lifeInCity ? <CityOverview data={data.lifeInCity} sectionId="what-life-like" /> : null}

              {data.jobsEcosystem ? <CityStatsCards data={data.jobsEcosystem} /> : null}

              {isAltLayout && earlyPractical ? whoMovesHereAndTradeoffs : null}
              {isAltLayout && !earlyPractical ? whoMovesHereAndTradeoffs : null}
              {!isAltLayout ? whoMovesHereAndTradeoffs : null}

              <CitySignatureDarkSection cityName={data.name} first30Days={data.first30Days} />

              <SectionBlock
                id={registrationSectionId}
                title={data.registration.heading}
                compact
                className="scroll-mt-24"
              >
                <div className="space-y-4">
                  {data.registration.body.map((p, i) => (
                    <p key={i} className="text-copilot-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="mt-6">
                  <ProcessTimeline data={data} />
                </div>
                <div className="mt-6">
                  <CityChecklist data={data} />
                </div>
              </SectionBlock>

              <SectionBlock id="bsn-digid" title={data.bsnDigid.heading} compact className="scroll-mt-24">
                <div className="space-y-4">
                  {data.bsnDigid.body.map((p, i) => (
                    <p key={i} className="text-copilot-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {data.bsnDigid.digidRequirements?.length ? (
                  <div className="mt-6 rounded-2xl border-0 bg-copilot-bg-soft/70 p-4 ring-1 ring-copilot-primary/[0.08] sm:p-5">
                    <p className="text-sm font-bold text-copilot-text-primary">DigiD requirements</p>
                    <ul className="mt-2 space-y-1 text-sm text-copilot-text-secondary">
                      {data.bsnDigid.digidRequirements.map((r, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-copilot-accent" aria-hidden>
                            ✓
                          </span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {data.bsnDigid.examples?.length ? (
                  <p className="mt-4 text-sm text-copilot-text-muted">
                    <span className="font-semibold text-copilot-text-primary">Used for:</span>{" "}
                    {data.bsnDigid.examples.join(", ")}.
                  </p>
                ) : null}
                {data.bsnDigid.plannedPageLinks?.length ? (
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-copilot-primary/10 pt-4">
                    {data.bsnDigid.plannedPageLinks.map((link) => (
                      <Link key={link.href} href={link.href} className={linkCtaClass}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </SectionBlock>

              <SectionBlock id="health-insurance" title={data.healthInsurance.heading} compact className="scroll-mt-24">
                <div className="space-y-4">
                  {data.healthInsurance.body.map((p, i) => (
                    <p key={i} className="text-copilot-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {data.healthInsurance.advice?.length ? (
                  <ul className="mt-4 space-y-1 text-sm text-copilot-text-secondary">
                    {data.healthInsurance.advice.map((a, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-copilot-accent" aria-hidden>
                          ✓
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {healthInsuranceServices.length ? (
                  <div className="mt-6">
                    <ServiceCards services={healthInsuranceServices} byCategory={false} />
                  </div>
                ) : null}
                <p className="mt-5">
                  <Link href={data.healthInsurance.internalLink.href} className={linkCtaClass}>
                    {data.healthInsurance.internalLink.label}
                  </Link>
                </p>
              </SectionBlock>

              <SectionBlock id="banking" title={data.banking.heading} compact className="scroll-mt-24">
                <div className="space-y-4">
                  {data.banking.body.map((p, i) => (
                    <p key={i} className="text-copilot-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {data.banking.typicalNeeds?.length ? (
                  <ul className="mt-4 space-y-1 text-sm text-copilot-text-secondary">
                    {data.banking.typicalNeeds.map((n, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-copilot-text-muted" aria-hidden>
                          •
                        </span>
                        {n}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {bankingServices.length ? (
                  <div className="mt-6">
                    <ServiceCards services={bankingServices} byCategory={false} />
                  </div>
                ) : null}
                <p className="mt-5">
                  <Link href={data.banking.internalLink.href} className={linkCtaClass}>
                    {data.banking.internalLink.label}
                  </Link>
                </p>
              </SectionBlock>

              <SectionBlock id="housing-costs" title={data.housingCosts.heading} compact className="scroll-mt-24">
                <div className="space-y-4">
                  {data.housingCosts.body.map((p, i) => (
                    <p key={i} className="text-copilot-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {data.housingCosts.neighborhoodsNote ? (
                  <p className="mt-2 text-sm text-copilot-text-muted">{data.housingCosts.neighborhoodsNote}</p>
                ) : null}
                {data.housingCosts.warning ? (
                  <div className="mt-5">
                    <InfoBox variant="warn" title="Watch out">
                      <p className="text-copilot-text-secondary">{data.housingCosts.warning}</p>
                    </InfoBox>
                  </div>
                ) : null}
                {housingPlatformServices.length ? (
                  <div className="mt-6">
                    <ServiceCards services={housingPlatformServices} byCategory={false} />
                  </div>
                ) : null}
                {data.housingCosts.internalLinks?.length ? (
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                    {data.housingCosts.internalLinks.map((link) => (
                      <Link key={link.href} href={link.href} className={linkCtaClass}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </SectionBlock>

              <SectionBlock id="transport" title={data.transport.heading} compact className="scroll-mt-24">
                <div className="space-y-4">
                  {data.transport.body.map((p, i) => (
                    <p key={i} className="text-copilot-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {data.transport.goodToKnow?.length ? (
                  <div className="relative mt-6 overflow-hidden rounded-2xl border-0 bg-copilot-bg-soft/80 shadow-expatos-sm ring-1 ring-copilot-primary/[0.08]">
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <div className="border-l-4 border-copilot-accent px-5 py-4">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-copilot-accent/15 text-copilot-accent">
                          <Lightbulb className="h-4 w-4" aria-hidden />
                        </span>
                        <p className="text-sm font-bold text-copilot-text-primary">Good to know</p>
                      </div>
                      <ul className="mt-3 space-y-2.5 pl-0.5">
                        {data.transport.goodToKnow.map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm text-copilot-text-secondary">
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-accent/60"
                              aria-hidden
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </SectionBlock>

              <SectionBlock
                id="services-expats"
                title={data.servicesExpatsHeading ?? `Useful Services for Newcomers in ${data.name}`}
                compact
                className="scroll-mt-24"
              >
                {data.servicesIntro ? (
                  <p className="text-copilot-text-secondary leading-relaxed">{data.servicesIntro}</p>
                ) : null}
                <div className={data.servicesIntro ? "mt-6" : undefined}>
                  <ServiceCards services={servicesForExpats} byCategory={true} />
                </div>
              </SectionBlock>

              <SectionBlock
                id="example-scenarios"
                title={data.exampleScenariosHeading ?? "Example Scenarios"}
                compact
                className="scroll-mt-24"
              >
                <p className="text-copilot-text-secondary leading-relaxed">
                  {data.exampleScenariosIntro ??
                    "Realistic situations and what to prioritise: documents, timing, and common pitfalls."}
                </p>
                <div className="mt-5">
                  <ExampleScenarios scenarios={data.exampleScenarios} />
                </div>
              </SectionBlock>

              <SectionBlock id="common-mistakes" title="Common Mistakes" compact className="scroll-mt-24">
                <ul className="space-y-3">
                  {data.commonMistakes.map((m, i) => (
                    <li key={i} className="flex flex-wrap items-baseline gap-2 text-sm text-copilot-text-secondary">
                      <span className="text-copilot-accent" aria-hidden>
                        •
                      </span>
                      <span>{m.mistake}</span>
                      {m.internalLink ? (
                        <Link href={m.internalLink.href} className={linkCtaClass}>
                          {m.internalLink.label}
                        </Link>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </SectionBlock>
            </PillarJourneyStack>

            <aside className="hidden min-w-0 lg:block lg:sticky lg:top-24 lg:self-start">
              <PillarTOC items={data.tocItems} tone="support" />
            </aside>
          </div>
        </div>
      }
      tools={
        data.tools?.length ? (
          <PillarGuideToolsSection
            compact
            id="tools"
            title="Useful tools"
            subtitle="Plan your move and check document readiness with these ExpatOS tools."
          >
            {data.tools.map((t) => {
              const live = t.status !== "coming_soon" && isRouteLive(t.href);
              return (
                <ToolCard
                  key={t.href}
                  title={t.label}
                  description={t.description ?? ""}
                  href={t.href}
                  ctaLabel={live ? "Open" : "Coming soon"}
                  compact
                />
              );
            })}
          </PillarGuideToolsSection>
        ) : null
      }
      nextSteps={
        hasRelatedGuides || hasCityLinks ? (
          <PillarGuideNextStepsRegion>
            <div className="space-y-6 sm:space-y-8">
              {hasRelatedGuides ? (
                <SectionBlock
                  id="related-guides"
                  title={
                    data.relatedGuidesSectionTitle ?? "Continue setting up your life in the Netherlands"
                  }
                  compact
                  className="scroll-mt-24"
                >
                  <RelatedGuidesGrid blocks={relatedGuidesBlocks} />
                </SectionBlock>
              ) : null}
              {hasCityLinks ? (
                <SectionBlock
                  id="other-cities"
                  title={data.cityLinksSectionTitle ?? "Other popular Dutch cities for expats"}
                  compact
                  className="scroll-mt-24"
                >
                  <CityLinksSection data={data} />
                </SectionBlock>
              ) : null}
            </div>
          </PillarGuideNextStepsRegion>
        ) : null
      }
      faq={
        data.officialSources?.length || data.faqs?.length ? (
          <PillarGuideFaqRegion>
            <div className="space-y-6 sm:space-y-8">
              <PresetSoftCTA preset="citySetupPlanning" cityName={data.name} />
              {data.faqs?.length ? (
                <FAQBlock id="faq" eyebrow="City guide" title="FAQs" items={data.faqs} maxItems={50} />
              ) : null}
              {data.officialSources?.length ? (
                <SectionBlock
                  id="official-sources"
                  title={data.officialSourcesHeading ?? "Official Sources"}
                  compact
                  className="scroll-mt-24"
                >
                  <p className="text-copilot-text-secondary leading-relaxed">
                    {data.officialSourcesIntro ??
                      "Use these official links for registration, DigiD, health insurance, and transport."}
                  </p>
                  <div className="mt-5">
                    <OfficialSourcesList sources={data.officialSources} />
                  </div>
                </SectionBlock>
              ) : null}
            </div>
          </PillarGuideFaqRegion>
        ) : null
      }
      afterFaq={
        <CityHubMonetizationAfterContent cityName={data.name} citySlug={data.slug} path={data.path} />
      }
    />
  );
}
