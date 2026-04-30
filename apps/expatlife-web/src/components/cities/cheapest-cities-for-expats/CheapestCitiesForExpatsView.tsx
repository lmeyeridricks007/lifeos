import Link from "next/link";
import { ArrowRight, Banknote, Scale, TrendingUp, type LucideIcon } from "lucide-react";
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
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
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
import { citiesInstructionalRasterAssets } from "@/src/components/cities/cities-cluster/citiesInstructionalRasterAssets";
import { CitiesChooseYourApproachSection } from "@/src/components/cities/shared/CitiesChooseYourApproachSection";
import { CitiesFunnelHeroCrossLinks } from "@/src/components/cities/shared/CitiesFunnelHeroCrossLinks";
import { CitiesPairedBestVsCheapestSection } from "@/src/components/cities/shared/CitiesPairedBestVsCheapestSection";
import { CostTradeoffExample } from "@/src/components/cities/shared/CostTradeoffExample";
import {
  CITIES_FUNNEL_CHOOSE_TO_START_BREAK,
  CITIES_FUNNEL_GUIDE_PAGE_MAIN_STACK_CLASS,
  CITIES_FUNNEL_INFO_CHIP as INFO_CHIP,
  CITIES_FUNNEL_KEY_SECTIONS_JOURNEY_STACK_CLASS,
  CITIES_FUNNEL_MOVE_GUIDE_SECTION_PANEL_CLASS,
  CITIES_FUNNEL_PLANNING_TOOLKIT_SHELL,
  CITIES_FUNNEL_SCENARIO_CHIP as SCENARIO_CHIP,
  CITIES_FUNNEL_SCENARIO_PICKS_GRID,
  CITIES_FUNNEL_SECTION_MAJOR_BREAK as SECTION_MAJOR_BREAK,
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN as SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  CITIES_FUNNEL_TRUST_PILL as TRUST_PILL,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import { CitiesGuideCityPhotoStrip } from "@/src/components/cities/shared/CitiesGuideCityPhotoStrip";
import { CitiesGuidePanoramaBanner } from "@/src/components/cities/shared/CitiesGuidePanoramaBanner";
import {
  CitiesScenarioIntroPanel,
  CitiesScenarioPickTile,
  CitiesScenarioTradeoffList,
} from "@/src/components/cities/shared/CitiesScenarioBlocks";
import { BestCitiesCommonMistakeCard } from "../best-cities-for-expats/BestCitiesCommonMistakeCard";
import { CityProfileDecisionCard } from "../best-cities-for-expats/CityProfileDecisionCard";
import { CheapestCitiesForExpatsHeroGraphic } from "./CheapestCitiesForExpatsHeroGraphic";
import { cheapestCitiesForExpatsPageModel as meta, type CheapestShortlistCityVm } from "./cheapestCitiesForExpatsPageModel";
import {
  cheapestCitiesForExpatsAffordableStrip,
  cheapestCitiesForExpatsCompareStrip,
  cheapestCitiesForExpatsPanorama,
} from "./config/cheapestCitiesForExpatsVisuals.config";

const SCENARIO_CARD_SHELL = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-7", movingNlCardMicroLiftClass);

const cityHubSecondaryCtaClass = cn(
  "mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-4 py-2.5 text-sm font-semibold text-brand-strong shadow-card hover:border-brand/30 hover:bg-copilot-bg-soft/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

/** Full-width tool chips inside the shortlist band (grid cells stretch). */
const shortlistToolLinkClass = cn(
  "inline-flex min-h-[44px] w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-border/90 bg-white/95 px-3 py-2.5 text-center text-sm font-semibold text-copilot-text-primary shadow-sm ring-1 ring-copilot-primary/[0.06] transition-colors",
  "hover:border-copilot-primary/25 hover:bg-copilot-bg-soft/60 hover:text-brand-strong",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

const VALUE_VS_CHEAPEST_ICONS: Record<string, LucideIcon> = {
  "lowest-rent": Banknote,
  "best-balance": Scale,
  "best-long-term": TrendingUp,
};

type ValueLensVisual = {
  topBar: string;
  iconWrap: string;
  lensChip: string;
  bodyWash: string;
};

const VALUE_LENS_VISUALS: readonly ValueLensVisual[] = [
  {
    topBar: "bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600",
    iconWrap: "bg-sky-500/12 text-sky-800 ring-1 ring-sky-400/45",
    lensChip: "border-sky-200/80 bg-sky-50/95 text-sky-950",
    bodyWash: "bg-gradient-to-b from-sky-50/50 via-white to-copilot-surface",
  },
  {
    topBar: "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-600",
    iconWrap: "bg-violet-500/12 text-violet-900 ring-1 ring-violet-400/40",
    lensChip: "border-violet-200/80 bg-violet-50/95 text-violet-950",
    bodyWash: "bg-gradient-to-b from-violet-50/45 via-white to-copilot-surface",
  },
  {
    topBar: "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600",
    iconWrap: "bg-emerald-500/12 text-emerald-900 ring-1 ring-emerald-400/40",
    lensChip: "border-emerald-200/80 bg-emerald-50/95 text-emerald-950",
    bodyWash: "bg-gradient-to-b from-emerald-50/45 via-white to-copilot-surface",
  },
] as const;

function ShortlistCityCard({ city }: { city: CheapestShortlistCityVm }) {
  const costBadgeStrong = city.costBand === "low";
  return (
    <article
      className={cn(
        CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
        "flex h-full flex-col p-5 sm:p-6",
        movingNlCardMicroLiftClass,
        city.specialNote && "ring-2 ring-brand/25 shadow-sm"
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex flex-wrap items-center gap-2">
        <span className={costBadgeStrong ? INFO_CHIP : SCENARIO_CHIP}>{city.costBandLabel}</span>
        {city.specialNote ? (
          <span className={cn(SCENARIO_CHIP, "border-amber-200/80 bg-amber-50/90 text-amber-950")}>Note</span>
        ) : null}
      </div>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{city.name}</h3>
      {city.tags?.length ? (
        <div className="mt-2 flex flex-wrap gap-1.5" aria-label="City tags">
          {city.tags.map((t) => (
            <span key={t} className={SCENARIO_CHIP}>
              {t}
            </span>
          ))}
        </div>
      ) : null}
      {city.specialNote ? (
        <p className="mt-2 text-xs font-medium leading-relaxed text-copilot-text-secondary">{city.specialNote}</p>
      ) : null}
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-copilot-text-secondary sm:text-[15px] sm:leading-relaxed">
        <BoldInline text={city.tagline} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
      </p>
      <div className="mt-5 grid gap-3">
        <div className="rounded-2xl border-l-[3px] border-l-sky-500 bg-white/95 p-4 shadow-sm ring-1 ring-sky-200/50 sm:p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-text-muted">Best for</p>
          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
            <BoldInline text={city.bestFor} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
          </p>
        </div>
        <div className="rounded-2xl border-l-[3px] border-l-slate-400 bg-slate-50/95 p-4 ring-1 ring-slate-200/80 sm:p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-text-muted">Trade-offs</p>
          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
            <BoldInline text={city.tradeOffs} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
          </p>
        </div>
      </div>
      <div className="mt-6 border-t border-copilot-primary/[0.08] pt-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-text-muted">Next step</p>
        <Link
          href={city.cta.href}
          className={cn(
            "mt-3 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-copilot-primary/15 bg-white/90 px-4 py-2.5 text-sm font-semibold text-brand-strong shadow-card hover:border-brand/30 hover:bg-copilot-bg-soft/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
            transitionInteractive,
            activeBrightnessPress
          )}
        >
          {city.cta.label}
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function CheapestCitiesForExpatsView() {
  const baseUrl = getSiteOrigin();
  const CANONICAL = meta.path;
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Cheapest Cities for Expats", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const quickOutlineCtaClass = cn(
    "inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-4 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:w-auto sm:min-w-[200px]",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Go deeper"
      deepLinks={[
        {
          href: "/netherlands/tools/city-comparison/",
          label: "City comparison tool →",
          description: "Shared merge point with the overall-fit guide — same finalists, same sliders.",
        },
        {
          href: "/netherlands/money/tools/cost-of-living-calculator/",
          label: "Cost of living calculator →",
          description: "Hold the same household across cities before you trust a headline rent story.",
        },
        {
          href: "/netherlands/housing/tools/rent-affordability-calculator/",
          label: "Rent affordability calculator →",
          description: "Translate net income into an honest rent bracket — then compare finalists.",
        },
        {
          href: "/netherlands/cities/best-cities-for-expats/",
          label: "Best cities for expats →",
          description: "Overall-fit lens: work, family, lifestyle — paired with this budget guide.",
        },
        {
          href: "/netherlands/cities/best-cities-for-families/",
          label: "Best cities for families →",
          description: "Family-week lens: schools, childcare, and rhythm — same calculators, different emphasis.",
        },
        {
          href: "/netherlands/cities/best-cities-for-international-professionals/",
          label: "International professionals →",
          description: "Career-first lens: job markets, salary vs cost, commute — same toolkit, different emphasis.",
        },
        {
          href: "/netherlands/cities/",
          label: "Cities hub →",
          description: "Return to the full city index, comparison table, and every live guide.",
        },
        {
          href: "/netherlands/housing/",
          label: "Housing hub →",
          description: "National renting context before you chase listings in any finalist city.",
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
                    Cheapest Cities for Expats
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={meta.hero.subtitle}
              subtitleMarkdown
              afterSubtitle={
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0" aria-label="How to read this page">
                  {meta.hero.trustPills.map((pill) => (
                    <li key={pill} className={TRUST_PILL}>
                      {pill}
                    </li>
                  ))}
                </ul>
              }
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
                    <ul className="w-full min-w-0 max-w-none space-y-2.5 text-pretty text-sm leading-snug text-foreground-muted sm:space-y-2 sm:text-[0.9375rem] sm:leading-relaxed" role="list">
                      {meta.hero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand sm:mt-2" aria-hidden />
                          <BoldParagraph
                            text={bullet}
                            className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground"
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap">
                      <Link href={meta.hero.primaryCta.href} className={primaryCtaClass}>
                        {meta.hero.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={meta.hero.secondaryCta.href}
                        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:w-auto"
                      >
                        {meta.hero.secondaryCta.label}
                      </Link>
                    </div>
                    <div className="mt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Run the numbers</p>
                      <div className="mt-2 flex w-full min-w-0 max-w-none flex-col gap-2 sm:flex-row sm:flex-wrap">
                        {meta.hero.heroToolStrip.map((t) => (
                          <Link key={t.href} href={t.href} className={quickOutlineCtaClass}>
                            {t.label}
                            <ArrowRight className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <CitiesFunnelHeroCrossLinks current="cheapest" />
                  </div>
                  <CheapestCitiesForExpatsHeroGraphic className="w-full min-w-0 shrink-0 md:justify-self-end" />
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
              <BoldParagraph
                text={meta.atAGlance.subtitle}
                className={cn(movingNlSectionSubtitleClass, "mt-2 text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary")}
              />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                      className="mt-2 text-sm leading-snug text-copilot-text-primary sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                    />
                  </div>
                ))}
              </div>
              <div className="relative mt-5 rounded-xl bg-slate-50/90 px-4 py-3 text-sm leading-snug text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06] sm:px-4 sm:py-4 sm:leading-relaxed">
                <BoldParagraph text={meta.atAGlance.note} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
              </div>
            </section>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <MoveGuideSectionPanel className={CITIES_FUNNEL_MOVE_GUIDE_SECTION_PANEL_CLASS}>
            <PillarJourneyStack variant="guide" density="compact" className={CITIES_FUNNEL_KEY_SECTIONS_JOURNEY_STACK_CLASS}>
            <MovePillarMobileToc items={meta.sectionNav} />

            <CitiesGuidePanoramaBanner
              src={cheapestCitiesForExpatsPanorama.src}
              alt={cheapestCitiesForExpatsPanorama.alt}
              className="mt-1 sm:mt-2"
            />

            <CitiesChooseYourApproachSection active="cheapest" />

            <CitiesPairedBestVsCheapestSection
              model={meta.pairedGuidesComparison}
              active="cheapest"
              className={SECTION_SCROLL_MARGIN}
            />

            <div className={CITIES_FUNNEL_CHOOSE_TO_START_BREAK}>
              <SectionBlock
                id={meta.whatCheapMeans.id}
                funnelFramed
                className={SECTION_SCROLL_MARGIN}
                eyebrow={meta.whatCheapMeans.eyebrow}
                title={meta.whatCheapMeans.title}
                subtitle={meta.whatCheapMeans.subtitle}
                subtitleMarkdown
              >
                <InstructionalRasterFigure
                  raster={citiesInstructionalRasterAssets.cheapestAffordability}
                  caption="Cheap is a bundle — rent, commute minutes, and what you still spend after rent — not a single sticker price."
                />
                <BoldParagraph
                  text={meta.whatCheapMeans.lead}
                  className="w-full min-w-0 max-w-none text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
                  {meta.whatCheapMeans.cards.map((card) => (
                    <article
                      key={card.id}
                      className={cn(
                        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5 md:p-6",
                        movingNlCardMicroLiftClass
                      )}
                    >
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">NL context</p>
                      <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">{card.title}</h3>
                      <BoldParagraph
                        text={card.body}
                        className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </article>
                  ))}
                </div>
              </SectionBlock>
            </div>

            <SectionBlock
              id={meta.trueMonthlyCost.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.trueMonthlyCost.eyebrow}
              title={meta.trueMonthlyCost.title}
              subtitle={meta.trueMonthlyCost.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.trueMonthlyCost.lead}
                className="w-full min-w-0 max-w-none text-pretty text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <p className="mt-5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-foreground-muted sm:text-xs">
                Real cost (planning stack)
              </p>
              <div
                className="mx-auto mt-3 flex w-full min-w-0 max-w-none flex-wrap items-center justify-center gap-x-2 gap-y-2 text-pretty text-sm font-semibold text-foreground sm:text-base"
                aria-hidden
              >
                <span className="rounded-lg bg-surface-muted/90 px-3 py-1.5 ring-1 ring-border/60">Rent</span>
                <span className="text-foreground-muted">+</span>
                <span className="rounded-lg bg-surface-muted/90 px-3 py-1.5 ring-1 ring-border/60">Commute</span>
                <span className="text-foreground-muted">+</span>
                <span className="rounded-lg bg-surface-muted/90 px-3 py-1.5 ring-1 ring-border/60">Utilities</span>
                <span className="text-foreground-muted">+</span>
                <span className="rounded-lg bg-surface-muted/90 px-3 py-1.5 ring-1 ring-border/60">Lifestyle</span>
                <span className="text-foreground-muted">≈</span>
                <span className="rounded-lg bg-brand/10 px-3 py-1.5 font-bold text-brand-strong ring-1 ring-brand/20">Real cost</span>
              </div>
              <BoldParagraph
                text={meta.trueMonthlyCost.equationHint}
                className="mx-auto mt-4 w-full min-w-0 max-w-none text-center text-pretty text-sm text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <CostTradeoffExample
                className="mt-6"
                rentDiff={meta.trueMonthlyCost.example.rentDiff}
                commuteCost={meta.trueMonthlyCost.example.commuteCost}
                netImpact={meta.trueMonthlyCost.example.netImpact}
              />
              <BoldParagraph
                text={meta.trueMonthlyCost.footnote}
                className="mt-4 w-full min-w-0 max-w-none text-pretty text-xs leading-relaxed text-foreground-muted sm:text-sm [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-5 w-full min-w-0 max-w-none space-y-2.5 text-pretty text-sm leading-relaxed text-foreground-muted" role="list">
                {meta.trueMonthlyCost.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    <BoldParagraph text={b} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.shortlist.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.shortlist.eyebrow}
              title={meta.shortlist.title}
              subtitle={meta.shortlist.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.shortlist.scanHint}
                className={cn(
                  movingNlSectionSubtitleClass,
                  "mt-3 w-full min-w-0 max-w-none text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                )}
              />
              <div className={CITIES_FUNNEL_PLANNING_TOOLKIT_SHELL} aria-labelledby="shortlist-toolkit-label">
                <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                <p id="shortlist-toolkit-label" className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
                  Planning toolkit
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-copilot-text-secondary">
                  Run the same calculators and comparisons for every city on your shortlist — equal inputs, fewer surprises.
                </p>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {meta.hero.heroToolStrip.map((q) => (
                    <Link key={`shortlist-${q.href}`} href={q.href} className={shortlistToolLinkClass}>
                      <span className="min-w-0 flex-1 text-balance text-center text-sm leading-snug">{q.label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-copilot-primary opacity-80" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
              <CitiesGuideCityPhotoStrip className="mb-6 mt-8 sm:mb-8" items={cheapestCitiesForExpatsAffordableStrip} />
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {meta.shortlist.cities.map((c) => (
                  <ShortlistCityCard key={c.id} city={c} />
                ))}
              </div>
              <CitiesGuideCityPhotoStrip
                className="mt-10 sm:mt-12 mb-8 sm:mb-10"
                items={cheapestCitiesForExpatsCompareStrip}
              />
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
                          {s.chips.map((chip) => (
                            <span key={chip} className={SCENARIO_CHIP}>
                              {chip}
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
                  id={meta.costVsTradeoffs.id}
                  tone="onDark"
                  eyebrow={meta.costVsTradeoffs.eyebrow}
                  title={meta.costVsTradeoffs.title}
                  subtitle={meta.costVsTradeoffs.subtitle}
                  subtitleMarkdown
                  compact
                >
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {meta.costVsTradeoffs.blocks.map((b) => (
                      <StructuredCard key={b.id} label={b.title} tone="onDark">
                        <BoldParagraph
                          text={b.body}
                          className="text-sm leading-snug text-slate-200 max-sm:text-[13px] max-sm:leading-snug [&_strong]:font-semibold [&_strong]:text-white"
                        />
                      </StructuredCard>
                    ))}
                  </div>
                </SectionBlock>
              </div>
            </PillarDarkStagesBand>

            <SectionBlock
              id={meta.valueVsCheapest.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.valueVsCheapest.eyebrow}
              title={meta.valueVsCheapest.title}
              subtitle={meta.valueVsCheapest.subtitle}
              subtitleMarkdown
            >
              <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
                {meta.valueVsCheapest.cards.map((card, i) => {
                  const v = VALUE_LENS_VISUALS[i % VALUE_LENS_VISUALS.length];
                  const Icon = VALUE_VS_CHEAPEST_ICONS[card.id] ?? Banknote;
                  return (
                    <article
                      key={card.id}
                      className={cn(
                        CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
                        "flex h-full min-w-0 flex-col",
                        movingNlCardMicroLiftClass
                      )}
                    >
                      <div className={cn("h-1.5 w-full shrink-0 rounded-t-2xl", v.topBar)} aria-hidden />
                      <div className={cn("relative flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6", v.bodyWash)}>
                        <div className="flex gap-4">
                          <span
                            className={cn(
                              "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl [&>svg]:h-6 [&>svg]:w-6",
                              v.iconWrap
                            )}
                            aria-hidden
                          >
                            <Icon />
                          </span>
                          <div className="min-w-0 flex-1">
                            <span
                              className={cn(
                                "inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]",
                                v.lensChip
                              )}
                            >
                              Lens
                            </span>
                            <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-copilot-text-primary sm:text-xl">
                              {card.title}
                            </h3>
                          </div>
                        </div>
                        <div className="mt-5 border-t border-copilot-primary/[0.08] pt-5">
                          <BoldParagraph
                            text={card.body}
                            className="text-sm leading-relaxed text-copilot-text-secondary sm:text-[15px] sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                          />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </SectionBlock>

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

            <section id="recommended-services" className={cn(SECTION_SCROLL_MARGIN, "scroll-mt-28")}>
              <SectionBlock
                funnelFramed
                eyebrow={meta.recommendedServices.eyebrow}
                title={meta.recommendedServices.title}
                subtitle={meta.recommendedServices.subtitle}
                subtitleMarkdown
                compact
              >
                <MoveGuideAffiliateSupportBlock
                  placementId={meta.affiliatePlacementId}
                  categoryLinks={[...meta.serviceCategoryLinks]}
                  browseLabel={meta.recommendedServices.browseLabel}
                />
              </SectionBlock>
            </section>

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
              subtitle="Leave with a shortlist and one calculator run — then open the city guides that match your finalists."
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
