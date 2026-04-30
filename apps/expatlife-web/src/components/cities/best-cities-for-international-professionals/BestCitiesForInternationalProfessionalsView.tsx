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
import { CitiesGuideCityPhotoStrip } from "@/src/components/cities/shared/CitiesGuideCityPhotoStrip";
import { CitiesGuidePanoramaBanner } from "@/src/components/cities/shared/CitiesGuidePanoramaBanner";
import {
  CitiesScenarioIntroPanel,
  CitiesScenarioPickTile,
  CitiesScenarioTradeoffList,
} from "@/src/components/cities/shared/CitiesScenarioBlocks";
import { CITIES_LENS_HERO_TOOL_STRIP } from "@/src/components/cities/shared/citiesDecisionFunnel";
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
  CITIES_FUNNEL_SHORTLIST_INSIGHT_LABEL,
  CITIES_FUNNEL_SHORTLIST_TIER_PILL_PRIMARY,
  CITIES_FUNNEL_SHORTLIST_TIER_PILL_SECONDARY,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  CITIES_FUNNEL_TRUST_PILL as TRUST_PILL,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import { BestCitiesCommonMistakeCard } from "../best-cities-for-expats/BestCitiesCommonMistakeCard";
import { CityProfileDecisionCard } from "../best-cities-for-expats/CityProfileDecisionCard";
import { BestCitiesForExpatsStartHereGrid } from "../best-cities-for-expats/BestCitiesForExpatsStartHereGrid";
import { CitiesShortlistLevelPair } from "../shared/CitiesShortlistLevelPair";
import { BestCitiesForInternationalProfessionalsHeroGraphic } from "./BestCitiesForInternationalProfessionalsHeroGraphic";
import { NetIncomeComparison } from "./NetIncomeComparison";
import {
  bestCitiesForInternationalProfessionalsPageModel as meta,
  type ProfessionalsShortlistCityVm,
} from "./bestCitiesForInternationalProfessionalsPageModel";
import {
  bestCitiesForIntlProfMainPickStrip,
  bestCitiesForIntlProfMoreOptionsStrip,
  bestCitiesForIntlProfPanorama,
} from "./config/bestCitiesForIntlProfVisuals.config";

const SCENARIO_CARD_SHELL = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-7", movingNlCardMicroLiftClass);

const shortlistToolLinkClass = cn(
  "inline-flex min-h-[44px] w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-border/90 bg-white/95 px-3 py-2.5 text-center text-sm font-semibold text-copilot-text-primary shadow-sm ring-1 ring-copilot-primary/[0.06] transition-colors",
  "hover:border-copilot-primary/25 hover:bg-copilot-bg-soft/60 hover:text-brand-strong",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

function IntlProfShortlistCityCard({ city }: { city: ProfessionalsShortlistCityVm }) {
  const tierPillClass = city.tier === "tier1" ? CITIES_FUNNEL_SHORTLIST_TIER_PILL_PRIMARY : CITIES_FUNNEL_SHORTLIST_TIER_PILL_SECONDARY;

  return (
    <article
      className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "flex h-full flex-col p-5 sm:p-6", movingNlCardMicroLiftClass)}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex flex-wrap items-center gap-2">
        <span className={tierPillClass}>{city.tierBadge}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{city.name}</h3>
      {city.tags.length ? (
        <ul className="m-0 mt-2 flex list-none flex-wrap gap-1.5 p-0" aria-label={`${city.name} tags`}>
          {city.tags.map((tag) => (
            <li key={tag} className={SCENARIO_CHIP}>
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-copilot-text-secondary sm:text-[15px] sm:leading-relaxed">
        <BoldInline text={city.tagline} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
      </p>
      <div className="mt-5 grid grid-cols-1 gap-3">
        <div className="flex min-h-0 flex-col rounded-xl border-l-[3px] border-l-sky-500 bg-white/90 p-4 shadow-sm ring-1 ring-sky-100/70 sm:p-4">
          <p className={CITIES_FUNNEL_SHORTLIST_INSIGHT_LABEL}>Best for</p>
          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
            <BoldInline text={city.bestFor} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
          </p>
        </div>
        <div className="flex min-h-0 flex-col rounded-xl border-l-[3px] border-l-violet-500 bg-white/90 p-4 shadow-sm ring-1 ring-violet-100/70 sm:p-4">
          <p className={CITIES_FUNNEL_SHORTLIST_INSIGHT_LABEL}>Jobs</p>
          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
            <BoldInline text={city.jobStrength} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
          </p>
        </div>
        <div className="flex min-h-0 flex-col rounded-xl border-l-[3px] border-l-amber-500 bg-amber-50/85 p-4 ring-1 ring-amber-200/65 sm:p-4 dark:bg-amber-950/20 dark:ring-amber-800/40">
          <p className={CITIES_FUNNEL_SHORTLIST_INSIGHT_LABEL}>Watch</p>
          <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
            <BoldInline text={city.watchOut} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
          </p>
        </div>
      </div>
      <ul
        className="m-0 mt-4 grid list-none grid-cols-1 gap-2 border-t border-copilot-primary/[0.08] pt-4 pl-0 pr-0 min-[420px]:grid-cols-2 min-[420px]:items-stretch"
        aria-label={`${city.name} quick signals`}
      >
        <CitiesShortlistLevelPair label="Cost" level={city.costLevel} />
        <CitiesShortlistLevelPair label="Life" level={city.lifestyle} />
      </ul>
      <div className="mt-6 border-t border-copilot-primary/[0.08] pt-5">
        <p className={CITIES_FUNNEL_SHORTLIST_INSIGHT_LABEL}>Next step</p>
        <Link
          href={city.href}
          className={cn(
            "mt-3 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-copilot-primary/15 bg-white/90 px-4 py-2.5 text-sm font-semibold text-brand-strong shadow-card hover:border-brand/30 hover:bg-copilot-bg-soft/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
            transitionInteractive,
            activeBrightnessPress
          )}
        >
          {city.ctaLabel ?? `Open ${city.name} guide`}
          <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function BestCitiesForInternationalProfessionalsView() {
  const baseUrl = getSiteOrigin();
  const CANONICAL = meta.path;
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Cities", item: new URL("/netherlands/cities/", baseUrl).toString() },
    { name: "Best Dutch Cities for International Professionals", item: new URL(CANONICAL, baseUrl).toString() },
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

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Go deeper"
      deepLinks={[
        {
          href: "/netherlands/tools/city-comparison/",
          label: "City comparison tool →",
          description: "Commute, cost, and lifestyle sliders on the same finalists.",
        },
        {
          href: "/netherlands/taxes/tools/dutch-salary-net-calculator/",
          label: "Dutch salary (net) calculator →",
          description: "Take-home from offers before rent debates.",
        },
        {
          href: `${CANONICAL}#real-income-not-salary`,
          label: "Salary vs real income →",
          description: "Illustrative gross → disposable snapshots before you shortlist on headline pay alone.",
        },
        {
          href: "/netherlands/cities/best-cities-for-expats/",
          label: "Best cities for expats →",
          description: "Wider overall-fit lens when life factors weigh as much as career.",
        },
        {
          href: "/netherlands/cities/best-cities-for-families/",
          label: "Best cities for families →",
          description: "When schools and childcare co-equal with commute.",
        },
        {
          href: "/netherlands/cities/cheapest-cities-for-expats/",
          label: "Cheapest cities for expats →",
          description: "Budget lens — same toolkit, different emphasis.",
        },
        {
          href: "/netherlands/cities/",
          label: "Cities hub →",
          description: "Every live municipality guide and the comparison table.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd headline={meta.hero.pageTitle} description={meta.seo.description} dateModified={meta.publishDate} urlPath={CANONICAL} />
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
                    Best Dutch Cities for International Professionals
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={meta.hero.subtitle}
              subtitleMarkdown
              afterSubtitle={
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0" aria-label="Editorial trust signals">
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
                    <BoldParagraph
                      text={meta.hero.clarityLead}
                      className="mb-3 w-full min-w-0 max-w-none text-pretty text-[13px] leading-snug text-foreground-muted sm:mb-4 sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <ul
                      className="w-full min-w-0 max-w-none space-y-2 text-pretty text-[13px] leading-snug text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem] sm:leading-relaxed"
                      role="list"
                    >
                      {meta.hero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand sm:mt-2" aria-hidden />
                          <BoldParagraph text={bullet} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Start with tools</p>
                      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch">
                        {meta.hero.conversionTools.map((tool, i) =>
                          i === 0 ? (
                            <Link key={tool.href} href={tool.href} className={cn(primaryCtaClass, "w-full sm:w-auto sm:min-w-[12rem] sm:flex-1")}>
                              {tool.label}
                              <ArrowRight className="h-4 w-4" aria-hidden />
                            </Link>
                          ) : (
                            <Link key={tool.href} href={tool.href} className={cn(quickOutlineCtaClass, "w-full sm:flex-1")}>
                              {tool.label}
                              <ArrowRight className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                    <div className="mt-3 flex flex-col gap-2 border-t border-dashed border-border/50 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
                      <Link
                        href={meta.hero.primaryCta.href}
                        className="inline-flex min-h-[44px] items-center text-sm font-semibold text-link hover:text-link-hover hover:underline"
                      >
                        {meta.hero.primaryCta.label}
                        <ArrowRight className="ml-0.5 h-4 w-4 opacity-70" aria-hidden />
                      </Link>
                      <span className="hidden text-foreground-faint sm:inline" aria-hidden>
                        ·
                      </span>
                      <Link
                        href={meta.hero.secondaryCta.href}
                        className="inline-flex min-h-[44px] items-center text-sm font-semibold text-link hover:text-link-hover hover:underline"
                      >
                        {meta.hero.secondaryCta.label}
                        <ArrowRight className="ml-0.5 h-4 w-4 opacity-70" aria-hidden />
                      </Link>
                      <span className="hidden text-foreground-faint sm:inline" aria-hidden>
                        ·
                      </span>
                      <Link
                        href="#what-next"
                        className="inline-flex min-h-[44px] items-center text-sm font-semibold text-foreground-muted hover:text-foreground hover:underline"
                      >
                        More calculators
                      </Link>
                    </div>
                    <CitiesFunnelHeroCrossLinks current="professionals" />
                  </div>
                  <BestCitiesForInternationalProfessionalsHeroGraphic className="w-full min-w-0 shrink-0 md:justify-self-end" />
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
                className={cn(
                  movingNlSectionSubtitleClass,
                  "mt-2 w-full min-w-0 max-w-none text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                )}
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
                      className="mt-2 text-xs leading-relaxed text-copilot-text-primary sm:text-sm [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
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

            <CitiesGuidePanoramaBanner
              src={bestCitiesForIntlProfPanorama.src}
              alt={bestCitiesForIntlProfPanorama.alt}
              className="mt-1 sm:mt-2"
            />

            <CitiesChooseYourApproachSection active="professionals" />

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
              id={meta.netIncomeReality.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.netIncomeReality.eyebrow}
              title={meta.netIncomeReality.title}
              subtitle={meta.netIncomeReality.subtitle}
              subtitleMarkdown
            >
              <InstructionalRasterFigure
                raster={citiesInstructionalRasterAssets.internationalProfessionalsCareer}
                caption="Jobs and headline salary matter — what you keep after rent and commute is what funds the rest of the move."
              />
              <BoldParagraph
                text={meta.netIncomeReality.intro}
                className="w-full min-w-0 max-w-none text-pretty text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-6">
                <NetIncomeComparison examples={meta.netIncomeReality.examples} />
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.intlProfShortlist.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.intlProfShortlist.eyebrow}
              title={meta.intlProfShortlist.title}
              subtitle={meta.intlProfShortlist.subtitle}
              subtitleMarkdown
            >
              <div className={CITIES_FUNNEL_PLANNING_TOOLKIT_SHELL} aria-labelledby="intl-prof-shortlist-toolkit-label">
                <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                <p id="intl-prof-shortlist-toolkit-label" className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
                  Planning toolkit
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-copilot-text-secondary">
                  Run the same salary, rent, and city tools for every finalist — equal inputs, fewer surprises.
                </p>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {CITIES_LENS_HERO_TOOL_STRIP.map((q) => (
                    <Link key={`intl-prof-shortlist-${q.href}`} href={q.href} className={shortlistToolLinkClass}>
                      <span className="min-w-0 flex-1 text-balance text-center text-sm leading-snug">{q.label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-copilot-primary opacity-80" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
              <CitiesGuideCityPhotoStrip className="mb-6 mt-8 sm:mb-8" items={bestCitiesForIntlProfMainPickStrip} />
              <h3 className="text-sm font-semibold text-foreground">Main picks — lots of jobs in big sectors</h3>
              <BoldParagraph
                text={meta.intlProfShortlist.tierIntros.tier1}
                className="mt-2 text-sm leading-relaxed text-foreground-muted sm:leading-snug [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {meta.intlProfShortlist.tier1.map((c) => (
                  <IntlProfShortlistCityCard key={c.id} city={c} />
                ))}
              </div>
              <h3 className="mt-10 text-sm font-semibold text-foreground">Also worth a look — great when your field matches</h3>
              <BoldParagraph
                text={meta.intlProfShortlist.tierIntros.tier2}
                className="mt-2 text-sm leading-relaxed text-foreground-muted sm:leading-snug [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {meta.intlProfShortlist.tier2.map((c) => (
                  <IntlProfShortlistCityCard key={c.id} city={c} />
                ))}
              </div>
              <CitiesGuideCityPhotoStrip
                className="mt-10 sm:mt-12 mb-8 sm:mb-10"
                items={bestCitiesForIntlProfMoreOptionsStrip}
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
                      <p className="mt-4 text-sm">
                        <Link
                          href={s.toolHint.href}
                          className="inline-flex min-h-[44px] items-center font-semibold text-link hover:underline"
                        >
                          {s.toolHint.label} →
                        </Link>
                      </p>
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
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {meta.tradeOffs.blocks.map((b) => (
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
              id={meta.dayInLife.id}
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.dayInLife.eyebrow}
              title={meta.dayInLife.title}
              subtitle={meta.dayInLife.subtitle}
              subtitleMarkdown
            >
              <div className="grid grid-cols-1 items-start gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                {meta.dayInLife.scenarios.map((d) => (
                  <MovePillarLifecycleCard
                    key={d.id}
                    className={cn(
                      "relative flex min-h-0 flex-col overflow-visible rounded-2xl border border-copilot-primary/10 bg-white/95 px-6 py-6 shadow-sm ring-1 ring-copilot-primary/[0.06] sm:px-7 sm:py-7",
                      "pt-3"
                    )}
                  >
                    <p className="text-xs font-semibold text-copilot-text-secondary">Example professional</p>
                    <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-copilot-text-primary sm:text-lg">{d.title}</h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-copilot-text-secondary">{d.subtitle}</p>
                    <dl className="mt-6 space-y-5 text-sm leading-relaxed">
                      <div>
                        <dt className="text-xs font-semibold tracking-wide text-copilot-primary">Morning</dt>
                        <dd className="mt-2 text-copilot-text-secondary">
                          <BoldParagraph text={d.morning} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold tracking-wide text-copilot-primary">Work</dt>
                        <dd className="mt-2 text-copilot-text-secondary">
                          <BoldParagraph text={d.work} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold tracking-wide text-copilot-primary">Commute</dt>
                        <dd className="mt-2 text-copilot-text-secondary">
                          <BoldParagraph text={d.commute} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold tracking-wide text-copilot-primary">Evening</dt>
                        <dd className="mt-2 text-copilot-text-secondary">
                          <BoldParagraph text={d.evening} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-6 rounded-xl border border-copilot-primary/12 bg-copilot-bg-soft/50 p-4 sm:p-5">
                      <p className="text-xs font-semibold text-copilot-text-primary">What to weigh up</p>
                      <BoldParagraph
                        text={d.honestTradeoff}
                        className="mt-2 text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                      />
                    </div>
                  </MovePillarLifecycleCard>
                ))}
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
                        soloLast && "sm:col-span-2 sm:flex sm:justify-center lg:col-span-3 lg:flex lg:justify-center"
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
              id="continue-cities-intl-professionals"
              funnelFramed
              className={SECTION_SCROLL_MARGIN}
              compact
              eyebrow="Keep momentum"
              title="Continue exploring"
              subtitle="Leave with a shortlist and one pass through the tools — then open the city guides that match your finalists."
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
