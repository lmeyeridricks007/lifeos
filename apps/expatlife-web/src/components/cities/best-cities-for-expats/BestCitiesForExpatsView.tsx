import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import { StructuredCard } from "@/components/page/cards";
import {
  FAQBlock,
  PageHero,
  PillarGuideAtGlanceRegion,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarGuideNextStepsRegion,
  PillarDarkStagesBand,
  PillarJourneyStack,
} from "@/components/page/pillar-template";
import { MoveGuideSectionPanel, SectionBlock } from "@/components/page/moving-pillar";
import { Container } from "@/components/ui/container";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { cn } from "@/lib/cn";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import {
  movingNlCardMicroLiftClass,
  movingNlFaqCardInnerClass,
  movingNlSectionSubtitleClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { MovePillarLifecycleCard } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { CitiesChooseYourApproachSection } from "@/src/components/cities/shared/CitiesChooseYourApproachSection";
import {
  CITIES_FUNNEL_CHOOSE_TO_START_BREAK,
  CITIES_FUNNEL_GUIDE_PAGE_MAIN_STACK_CLASS,
  CITIES_FUNNEL_KEY_SECTIONS_JOURNEY_STACK_CLASS,
  CITIES_FUNNEL_MOVE_GUIDE_SECTION_PANEL_CLASS,
  CITIES_FUNNEL_SCENARIO_CHIP,
  CITIES_FUNNEL_SCENARIO_PICKS_GRID,
  CITIES_FUNNEL_SECTION_MAJOR_BREAK as SECTION_MAJOR_BREAK,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import { citiesInstructionalRasterAssets } from "@/src/components/cities/cities-cluster/citiesInstructionalRasterAssets";
import { CitiesFunnelHeroCrossLinks } from "@/src/components/cities/shared/CitiesFunnelHeroCrossLinks";
import {
  CitiesScenarioIntroPanel,
  CitiesScenarioPickTile,
  CitiesScenarioTradeoffList,
} from "@/src/components/cities/shared/CitiesScenarioBlocks";
import { BestCitiesCityPhotoStrip } from "./BestCitiesCityPhotoStrip";
import { BestCitiesForExpatsHeroGraphic } from "./BestCitiesForExpatsHeroGraphic";
import { BestCitiesForExpatsStartHereGrid } from "./BestCitiesForExpatsStartHereGrid";
import { BestCitiesNetherlandsPanoramaBanner } from "./BestCitiesNetherlandsPanoramaBanner";
import {
  bestCitiesForExpatsCoreHubStrip,
  bestCitiesForExpatsMoreOptionsStrip,
} from "./config/bestCitiesForExpatsVisuals.config";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import { BestCitiesCommonMistakeCard } from "./BestCitiesCommonMistakeCard";
import { CityProfileDecisionCard } from "./CityProfileDecisionCard";
import {
  bestCitiesForExpatsPageModel as meta,
  type BestCitiesComparisonCity,
} from "./bestCitiesForExpatsPageModel";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";
/** Scenario band — matches At a glance / Cities funnel framing on this guide. */
const SCENARIO_CARD_SHELL = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-7", movingNlCardMicroLiftClass);

const cityHubPrimaryCtaClass = cn(
  "mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

/** Secondary row (“More strong options”) — same layout as hubs, softer chrome + outline CTA. */
const cityHubSecondaryCtaClass = cn(
  "mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-4 py-2.5 text-sm font-semibold text-brand-strong shadow-card hover:border-brand/30 hover:bg-copilot-bg-soft/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

function ComparisonCityCard({ city }: { city: BestCitiesComparisonCity }) {
  const isHub = city.featured;
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10 sm:p-6",
        movingNlCardMicroLiftClass,
        isHub ? "ring-2 ring-brand/20 shadow-md" : "ring-border/40 bg-white/95"
      )}
    >
      <div
        className={cn("absolute inset-x-0 top-0 h-1", isHub ? movingNlSignatureGradientClass : "bg-border/80")}
        aria-hidden
      />
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em]",
            isHub ? "bg-brand/10 text-brand-strong ring-1 ring-brand/20" : "bg-surface-muted text-foreground-muted ring-1 ring-border/60"
          )}
        >
          {isHub ? "Core hub" : "Strong option"}
        </span>
      </div>
      <h3 className={cn("mt-4 font-bold tracking-tight text-foreground", isHub ? "text-xl sm:text-2xl" : "text-lg sm:text-xl")}>
        {city.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted sm:text-[15px] sm:leading-relaxed">
        <BoldInline text={city.tagline} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
      </p>
      <Link href={city.href} className={isHub ? cityHubPrimaryCtaClass : cityHubSecondaryCtaClass}>
        Open {city.name} guide
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
      </Link>
    </article>
  );
}

export function BestCitiesForExpatsView() {
  const baseUrl = getSiteOrigin();
  const CANONICAL = meta.path;
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Best Cities for Expats", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const quickOutlineCtaClass = cn(
    "inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-4 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:w-auto sm:flex-1",
    transitionInteractive,
    activeBrightnessPress
  );

  const featuredCities = meta.topCities.cities.filter((c) => c.featured);
  const moreCities = meta.topCities.cities.filter((c) => !c.featured);

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Go deeper"
      deepLinks={[
        {
          href: "/netherlands/tools/city-comparison/",
          label: "City comparison tool →",
          description: "Shared merge point with the affordability guide — same finalists, same sliders.",
        },
        {
          href: "/netherlands/money/tools/cost-of-living-calculator/",
          label: "Cost of living calculator →",
          description: "Stack monthly bands for rent, groceries, transport, and household lines across cities.",
        },
        {
          href: "/netherlands/housing/tools/rent-affordability-calculator/",
          label: "Rent affordability calculator →",
          description: "Affordable rent from income and obligations — pair with the Cheapest Cities lens.",
        },
        {
          href: "/netherlands/cities/cheapest-cities-for-expats/",
          label: "Cheapest cities for expats →",
          description: "Budget lens: what “cheap” means in NL, commute trade-offs, and the same toolkit as here.",
        },
        {
          href: "/netherlands/cities/best-cities-for-families/",
          label: "Best cities for families →",
          description: "Family-week lens: schools, childcare rhythm, and space — then reconcile with fit and budget guides.",
        },
        {
          href: "/netherlands/cities/best-cities-for-international-professionals/",
          label: "International professionals →",
          description: "Career-first lens: job markets, salary vs cost, commute — same toolkit, different emphasis.",
        },
        {
          href: "/netherlands/cities/",
          label: "Cities hub →",
          description: "Return to the full city index, comparison table, and links to every live guide.",
        },
        {
          href: "/netherlands/housing/",
          label: "Housing hub →",
          description: "National renting and registration context before you fall in love with one neighbourhood.",
        },
        {
          href: "/netherlands/moving-to-the-netherlands/",
          label: "Moving to the Netherlands →",
          description: "See how city choice sits inside visas, timelines, and the wider Move pillar.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline={meta.hero.pageTitle}
        description={meta.seo.description}
        dateModified={meta.publishDate}
        urlPath={CANONICAL}
      />
      <FaqPageJsonLd items={meta.faq.map((item) => ({ q: item.q, a: item.a.replace(/\*\*/g, "") }))} />

      <GuidePageTemplate
        mainStackClassName={CITIES_FUNNEL_GUIDE_PAGE_MAIN_STACK_CLASS}
        wrapContent={(inner) => (
          <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
            <MovePageTemplate variant="hub" showSidebar sidebarAriaLabel={false} sidebar={sidebar}>
              {inner}
            </MovePageTemplate>
          </Container>
        )}
        hero={
          <PillarGuideHeroRegion>
            <PageHero
              movingPillarIdentity
              heroTitleDensity="tight"
              eyebrowBandClassName={sitePillarFramedHeroTopBandClass}
              contentGutterClassName={sitePillarFramedHeroGutterXClass}
              heroTopBandSlot={
                <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <Link href="/netherlands/" className="transition-colors hover:text-foreground">
                    Netherlands
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <Link href="/netherlands/cities/" className="transition-colors hover:text-foreground">
                    Cities
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <span className="text-foreground" aria-current="page">
                    Best Cities for Expats
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={meta.hero.subtitle}
              subtitleMarkdown
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,min(100%,380px))] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
                      {meta.hero.contextChips.map((chip) => (
                        <span key={chip} className={INFO_CHIP}>
                          {chip}
                        </span>
                      ))}
                    </div>
                    <ul className="w-full min-w-0 max-w-none space-y-2 text-pretty text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
                      {meta.hero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <BoldParagraph
                            text={bullet}
                            className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground"
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                      <Link href={meta.hero.primaryCta.href} className={primaryCtaClass}>
                        {meta.hero.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={meta.hero.secondaryCta.href}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        {meta.hero.secondaryCta.label}
                      </Link>
                    </div>
                    <div className="mt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Run the numbers</p>
                      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                        {meta.hero.heroToolStrip.map((t) => (
                          <Link key={t.href} href={t.href} className={quickOutlineCtaClass}>
                            {t.label}
                            <ArrowRight className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <CitiesFunnelHeroCrossLinks current="best" />
                  </div>
                  <BestCitiesForExpatsHeroGraphic className="w-full min-w-0 shrink-0 md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={CANONICAL}
            />
          </PillarGuideHeroRegion>
        }
        atAGlance={
          <PillarGuideAtGlanceRegion>
            <section
              id="at-a-glance"
              className={cn(SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-7")}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
              <h2 className="text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{meta.atAGlance.sectionTitle}</h2>
              <p className={cn(movingNlSectionSubtitleClass, "mt-2 text-copilot-text-secondary")}>{meta.atAGlance.subtitle}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {meta.atAGlance.cells.map((cell) => (
                  <div
                    key={cell.title}
                    className={cn(
                      "relative flex flex-col overflow-hidden rounded-2xl border-0 bg-white/90 p-5 shadow-expatos-sm ring-1 ring-slate-900/[0.04]",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="pt-1 text-xs font-bold uppercase tracking-[0.12em] text-copilot-text-muted">{cell.title}</p>
                    <BoldParagraph
                      text={cell.body}
                      className="mt-2 text-sm leading-relaxed text-copilot-text-primary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                    />
                  </div>
                ))}
              </div>
              <div className="relative mt-5 rounded-xl bg-slate-50/90 px-4 py-4 text-sm leading-relaxed text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]">
                <BoldParagraph text={meta.atAGlance.note} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
              </div>
            </section>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <MoveGuideSectionPanel className={CITIES_FUNNEL_MOVE_GUIDE_SECTION_PANEL_CLASS}>
            <PillarJourneyStack variant="guide" density="compact" className={CITIES_FUNNEL_KEY_SECTIONS_JOURNEY_STACK_CLASS}>
            <MovePillarMobileToc items={meta.sectionNav} />

            <BestCitiesNetherlandsPanoramaBanner className="mt-1 sm:mt-2" />

            <CitiesChooseYourApproachSection active="best" />

            <InstructionalRasterFigure
              raster={citiesInstructionalRasterAssets.bestForExpatsLens}
              caption="Pick one lens at a time — work, rent, family, lifestyle — then stress-test finalists with the same calculators."
              className="mt-4 sm:mt-5"
            />

            <div className={CITIES_FUNNEL_CHOOSE_TO_START_BREAK}>
              <BestCitiesForExpatsStartHereGrid
                id={meta.startHere.id}
                eyebrow={meta.startHere.eyebrow}
                title={meta.startHere.title}
                subtitle={meta.startHere.subtitle}
                cards={meta.startHere.cards}
                compact
                funnelFramed
              />
            </div>

            <SectionBlock
              id={meta.topCities.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.topCities.eyebrow}
              title={meta.topCities.title}
              subtitle={meta.topCities.subtitle}
              subtitleMarkdown
            >
              <BestCitiesCityPhotoStrip className="mb-6 sm:mb-8" items={bestCitiesForExpatsCoreHubStrip} />
              <h3 className="text-sm font-semibold tracking-tight text-foreground">Core expat hubs</h3>
              <div className="mt-4 grid gap-5 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featuredCities.map((c) => (
                  <ComparisonCityCard key={c.id} city={c} />
                ))}
              </div>
              <BestCitiesCityPhotoStrip className="mt-10 sm:mt-12" items={bestCitiesForExpatsMoreOptionsStrip} />
              <h3 className="mt-4 text-sm font-semibold tracking-tight text-foreground sm:mt-5">More strong options</h3>
              <div className="mt-4 grid gap-5 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
                {moreCities.map((c) => (
                  <ComparisonCityCard key={c.id} city={c} />
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.scenarios.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.scenarios.eyebrow}
              title={meta.scenarios.title}
              subtitle={meta.scenarios.subtitle}
              subtitleMarkdown
            >
              <div className="space-y-6 sm:space-y-8">
                {meta.scenarios.items.map((s) => (
                  <article key={s.id} className={SCENARIO_CARD_SHELL}>
                    <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                    <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <h3 className="text-lg font-bold tracking-tight text-copilot-text-primary sm:text-xl">{s.title}</h3>
                      {s.chips?.length ? (
                        <div className="flex flex-wrap gap-1.5 sm:justify-end" aria-label="Scenario tags">
                          {s.chips.map((c) => (
                            <span key={c} className={CITIES_FUNNEL_SCENARIO_CHIP}>
                              {c}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <CitiesScenarioIntroPanel>
                      <BoldParagraph
                        text={s.intro}
                        className="m-0 w-full min-w-0 max-w-none text-sm leading-relaxed text-copilot-text-secondary sm:text-[1.0625rem] sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                      />
                    </CitiesScenarioIntroPanel>
                    <div className={cn(CITIES_FUNNEL_SCENARIO_PICKS_GRID, "mt-4 sm:mt-5")}>
                      {s.picks.map((p) => (
                        <CitiesScenarioPickTile key={`${s.id}-${p.name}`} pick={p} />
                      ))}
                    </div>
                    <div className="relative mt-6 rounded-xl bg-slate-50/90 px-4 py-4 ring-1 ring-copilot-primary/[0.06] sm:mt-7 sm:px-5 sm:py-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-text-muted">Trade-offs</p>
                      <CitiesScenarioTradeoffList lines={s.tradeOffLines} />
                    </div>
                    {s.toolHint ? (
                      <Link
                        href={s.toolHint.href}
                        className={cn(cityHubSecondaryCtaClass, "sm:mt-6 sm:inline-flex sm:w-auto sm:min-w-[220px]")}
                      >
                        {s.toolHint.label}
                        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                      </Link>
                    ) : null}
                  </article>
                ))}
              </div>
            </SectionBlock>

            <PillarDarkStagesBand className={cn(SECTION_SCROLL_MARGIN, SECTION_MAJOR_BREAK)}>
              <div className="relative z-[1] px-4 pb-10 pt-8 sm:px-6 md:px-8">
                <SectionBlock
                  id={meta.tradeOffs.id}
                  tone="onDark"
                  eyebrow={meta.tradeOffs.eyebrow}
                  title={meta.tradeOffs.title}
                  subtitle={meta.tradeOffs.subtitle}
                  subtitleMarkdown
                  compact
                >
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {meta.tradeOffs.blocks.map((b) => (
                      <StructuredCard key={b.id} label={b.title} tone="onDark">
                        <BoldParagraph
                          text={b.body}
                          className="text-sm leading-snug text-slate-200 [&_strong]:font-semibold [&_strong]:text-white"
                        />
                      </StructuredCard>
                    ))}
                  </div>
                </SectionBlock>
              </div>
            </PillarDarkStagesBand>

            <section id="recommended-services" className={cn(SECTION_SCROLL_MARGIN, "scroll-mt-28")}>
              <SectionBlock
                funnelFramed
                eyebrow="When you are ready for help"
                title="Recommended services"
                subtitle="After a shortlist forms, many people compare relocation, housing search, banking, health insurance, and mobile in parallel — scope and pricing vary, so confirm fit before you commit."
                subtitleMarkdown
                compact
              >
                <MoveGuideAffiliateSupportBlock
                  placementId={meta.affiliatePlacementId}
                  categoryLinks={[...meta.serviceCategoryLinks]}
                  browseLabel="Browse providers by category: "
                />
              </SectionBlock>
            </section>

            <SectionBlock
              id={meta.profiles.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.profiles.eyebrow}
              title={meta.profiles.title}
              subtitle={meta.profiles.subtitle}
              subtitleMarkdown
            >
              <div className="grid items-start gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {meta.profiles.cards.map((c) => (
                  <CityProfileDecisionCard key={c.id} card={c} />
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.mistakes.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.mistakes.eyebrow}
              title={meta.mistakes.title}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {meta.mistakes.rows.map((row, i) => {
                  const rows = meta.mistakes.rows;
                  const soloLast = i === rows.length - 1 && rows.length % 3 === 1;
                  const variant = (i % 7) as 0 | 1 | 2 | 3 | 4 | 5 | 6;
                  return (
                    <div
                      key={row.id}
                      className={cn(
                        soloLast &&
                          "sm:col-span-2 sm:flex sm:justify-center lg:col-span-3 lg:flex lg:justify-center"
                      )}
                    >
                      <BestCitiesCommonMistakeCard
                        row={row}
                        variant={variant}
                        className={soloLast ? "w-full max-w-2xl" : undefined}
                      />
                    </div>
                  );
                })}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.whatNext.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.whatNext.eyebrow}
              title={meta.whatNext.title}
              subtitle={meta.whatNext.subtitle}
              subtitleMarkdown
            >
              <ol className="grid gap-3 sm:grid-cols-2" role="list">
                {meta.whatNext.steps.map((step, i) => (
                  <li key={step.title}>
                    <MovePillarLifecycleCard className="h-full">
                      <div className="flex gap-3">
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copilot-primary to-copilot-primary-strong text-xs font-bold text-white shadow-expatos-sm"
                          aria-hidden
                        >
                          {i + 1}
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-foreground">
                            <BoldInline text={step.title} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                          </h3>
                          <BoldParagraph
                            text={step.body}
                            className="mt-2 text-sm text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                          />
                        </div>
                      </div>
                    </MovePillarLifecycleCard>
                  </li>
                ))}
              </ol>
            </SectionBlock>

            <RelatedGuidesSection
              id="related-guides-cross-pillar"
              className={cn("scroll-mt-28 md:scroll-mt-32", SECTION_MAJOR_BREAK)}
              title="Related guides across ExpatCopilot"
              blocks={[...meta.relatedGuidesCrossPillar]}
            />
          </PillarJourneyStack>
          </MoveGuideSectionPanel>
        }
        nextSteps={
          <PillarGuideNextStepsRegion>
            <SectionBlock
              id="continue-cities"
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              compact
              eyebrow="Keep momentum"
              title="Continue exploring"
              subtitle="You should leave with a shortlist, not paralysis — open the hub or calculators next, then dive into the city guides that matter."
              subtitleMarkdown
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {meta.continueCards.map((card) => (
                  <Link
                    key={card.id}
                    href={card.href}
                    className="group rounded-card border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10 transition-colors hover:border-border-strong hover:shadow-card-hover"
                  >
                    <p className="text-sm font-semibold text-foreground group-hover:text-brand-strong">{card.title}</p>
                    <p className="mt-2 text-sm text-foreground-muted">{card.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
                      {card.ctaLabel} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </Link>
                ))}
              </div>
            </SectionBlock>
          </PillarGuideNextStepsRegion>
        }
        faq={
          <PillarGuideFaqRegion>
            <div className={cn(movingNlFaqCardInnerClass, SECTION_SCROLL_MARGIN)}>
              <FAQBlock
                id="faq"
                eyebrow="Cities"
                title="Frequently asked questions"
                items={[...meta.faq]}
                maxItems={20}
                accordionDensity="default"
              />
            </div>
            <VisasResidencyOfficialSources references={meta.references} />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
