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
  ToolCard,
} from "@/components/page/pillar-template";
import { SectionBlock } from "@/components/page/moving-pillar";
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
import { MovePillarJourneyBridge } from "@/src/components/moving/MovePillarJourneyBridge";
import { MovePillarLifecycleCard } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { MovePillarExploreGrid } from "@/src/components/moving/MovePillarExploreGrid";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { RelatedGuidesSection } from "@/src/components/city-hub/RelatedGuidesGrid";
import { BestCitiesForExpatsHeroGraphic } from "./BestCitiesForExpatsHeroGraphic";
import { BestCitiesForExpatsStartHereGrid } from "./BestCitiesForExpatsStartHereGrid";
import {
  bestCitiesForExpatsPageModel as meta,
  levelLabel,
  type BestCitiesComparisonCity,
  type BestCitiesLevel,
} from "./bestCitiesForExpatsPageModel";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
/** Visual break between major bands (light sections only). */
const SECTION_MAJOR_BREAK = "border-t border-border/45 pt-8 sm:pt-10 mt-6 sm:mt-8";
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";
const SCENARIO_CHIP =
  "inline-flex rounded-full border border-border bg-surface-muted/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-foreground-muted";

function LevelPair({ label, level }: { label: string; level: BestCitiesLevel }) {
  const text = levelLabel(level);
  return (
    <li className={cn(INFO_CHIP, "w-full justify-center text-center sm:w-auto sm:justify-start")}>
      <span className="text-foreground-muted">{label}</span>
      <span className="mx-1 text-foreground-faint" aria-hidden>
        ·
      </span>
      <span className="text-foreground">{text}</span>
    </li>
  );
}

function ComparisonCityCard({ city }: { city: BestCitiesComparisonCity }) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
        movingNlCardMicroLiftClass,
        city.featured && "ring-2 ring-brand/25 shadow-card-hover"
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em]",
            city.featured ? "bg-brand/10 text-brand-strong ring-1 ring-brand/20" : "bg-surface-muted text-foreground-muted ring-1 ring-border/60"
          )}
        >
          {city.featured ? "Core hub" : "Strong option"}
        </span>
      </div>
      <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">{city.name}</h3>
      <p className="mt-1.5 text-sm leading-snug text-foreground-muted">
        <BoldInline text={city.tagline} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl bg-surface-muted/70 p-3 ring-1 ring-border/50">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Best for</p>
          <p className="mt-1.5 text-sm leading-snug text-foreground-muted">
            <BoldInline text={city.bestFor} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
          </p>
        </div>
        <div className="rounded-xl bg-surface-muted/70 p-3 ring-1 ring-border/50">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Trade-offs</p>
          <p className="mt-1.5 text-sm leading-snug text-foreground-muted">
            <BoldInline text={city.tradeOffs} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
          </p>
        </div>
      </div>
      <ul
        className="m-0 mt-4 grid list-none grid-cols-2 gap-2 border-t border-border/60 pt-4 pl-0 pr-0"
        aria-label={`${city.name} at-a-glance signals`}
      >
        <LevelPair label="Rent" level={city.levels.costPressure} />
        <LevelPair label="International" level={city.levels.internationalFeel} />
        <LevelPair label="Family" level={city.levels.familyFit} />
        <LevelPair label="Connectivity" level={city.levels.connectivity} />
      </ul>
      <div className="mt-auto border-t border-dashed border-border/50 pt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-faint">Next step</p>
        <Link
          href={city.href}
          className="mt-2 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-link hover:text-link-hover hover:underline"
        >
          Open {city.name} guide
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
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
          description: "Model finalists with the same sliders and assumptions before you choose emotionally.",
        },
        {
          href: "/netherlands/money/tools/cost-of-living-calculator/",
          label: "Cost of living calculator →",
          description: "Stack monthly bands for rent, groceries, transport, and household lines across cities.",
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
        mainStackClassName="mt-2 space-y-3 sm:mt-3 sm:space-y-4 md:space-y-5"
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
                    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
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
                    <p className="mt-4 text-sm text-foreground-muted">
                      Prefer the full city index? Open the{" "}
                      <Link href="/netherlands/cities/" className="font-semibold text-link hover:text-link-hover hover:underline">
                        Cities hub
                      </Link>{" "}
                      for cards, the comparison table, and every live municipality guide. For numbers-first comparison, use the{" "}
                      <Link
                        href="/netherlands/tools/city-comparison/"
                        className="font-semibold text-link hover:text-link-hover hover:underline"
                      >
                        city comparison tool
                      </Link>{" "}
                      and the{" "}
                      <Link href="/netherlands/tools/" className="font-semibold text-link hover:text-link-hover hover:underline">
                        tools hub
                      </Link>
                      .
                    </p>
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
              className={cn(
                SECTION_SCROLL_MARGIN,
                "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-6 shadow-expatos-lg ring-1 ring-copilot-primary/[0.07] sm:p-7"
              )}
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
          <PillarJourneyStack variant="guide" density="compact" className="gap-1 sm:gap-2 md:gap-3">
            <MovePillarMobileToc items={meta.sectionNav} />

            <section
              id={meta.reassuranceBand.id}
              className={cn(SECTION_SCROLL_MARGIN, "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-lg ring-1 ring-copilot-primary/[0.07] sm:p-7")}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-text-muted">Decision confidence</p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{meta.reassuranceBand.title}</h2>
              <BoldParagraph
                text={meta.reassuranceBand.lead}
                className="mt-2 text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
              />
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-copilot-text-secondary" role="list">
                {meta.reassuranceBand.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    <BoldParagraph
                      text={pt}
                      className="min-w-0 [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                    />
                  </li>
                ))}
              </ul>
            </section>

            <div className={SECTION_MAJOR_BREAK}>
              <MovePillarJourneyBridge
                id={meta.pillarJourneyBridge.id}
                eyebrow={meta.pillarJourneyBridge.eyebrow}
                title={meta.pillarJourneyBridge.title}
                intro={meta.pillarJourneyBridge.intro}
                links={meta.pillarJourneyBridge.links}
              />
              <div className="mt-8 sm:mt-10">
                <BestCitiesForExpatsStartHereGrid
                  id={meta.startHere.id}
                  eyebrow={meta.startHere.eyebrow}
                  title={meta.startHere.title}
                  subtitle={meta.startHere.subtitle}
                  cards={meta.startHere.cards}
                />
              </div>
            </div>

            <SectionBlock
              id={meta.topCities.id}
              className={cn(SECTION_SCROLL_MARGIN, SECTION_MAJOR_BREAK)}
              eyebrow={meta.topCities.eyebrow}
              title={meta.topCities.title}
              subtitle={meta.topCities.subtitle}
              subtitleMarkdown
            >
              <h3 className="text-sm font-semibold text-foreground">Core expat hubs</h3>
              <p className="mt-2 text-sm leading-snug text-foreground-muted">
                Biggest job and service gravity — still pressure-test commute and rent like any other option.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featuredCities.map((c) => (
                  <ComparisonCityCard key={c.id} city={c} />
                ))}
              </div>
              <h3 className="mt-10 text-sm font-semibold text-foreground">More strong options</h3>
              <p className="mt-2 text-sm leading-snug text-foreground-muted">
                Strong when your office, sector, or family rhythm fits a smaller hub or satellite city.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {moreCities.map((c) => (
                  <ComparisonCityCard key={c.id} city={c} />
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.scenarios.id}
              className={cn(SECTION_SCROLL_MARGIN, SECTION_MAJOR_BREAK)}
              eyebrow={meta.scenarios.eyebrow}
              title={meta.scenarios.title}
              subtitle={meta.scenarios.subtitle}
              subtitleMarkdown
            >
              <div className="space-y-5 sm:space-y-6">
                {meta.scenarios.items.map((s) => (
                  <MovePillarLifecycleCard
                    key={s.id}
                    className={cn("max-w-none overflow-hidden ring-1 ring-border/40")}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                      {s.chips?.length ? (
                        <div className="flex flex-wrap gap-1.5" aria-label="Scenario tags">
                          {s.chips.map((c) => (
                            <span key={c} className={SCENARIO_CHIP}>
                              {c}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <BoldParagraph
                      text={s.intro}
                      className="mt-2 text-sm leading-snug text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {s.picks.map((p) => (
                        <div
                          key={p.href}
                          className="rounded-xl border border-border/70 bg-surface-muted/40 p-3 ring-1 ring-border/30"
                        >
                          <Link href={p.href} className="text-sm font-semibold text-link hover:underline">
                            {p.name}
                          </Link>
                          <p className="mt-1 text-xs leading-snug text-foreground-muted sm:text-sm">{p.why}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-xl bg-surface-muted/50 p-3 ring-1 ring-border/40">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Trade-offs</p>
                      <BoldParagraph
                        text={s.tradeOffs}
                        className="mt-1 text-sm leading-snug text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </div>
                    {s.toolHint ? (
                      <p className="mt-3 text-sm">
                        <Link href={s.toolHint.href} className="inline-flex min-h-[44px] items-center font-semibold text-link hover:underline">
                          {s.toolHint.label} →
                        </Link>
                      </p>
                    ) : null}
                  </MovePillarLifecycleCard>
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

            <section id="recommended-services" className={cn(SECTION_SCROLL_MARGIN, SECTION_MAJOR_BREAK, "scroll-mt-28")}>
              <SectionBlock
                eyebrow="When you are ready for help"
                title="Recommended services"
                subtitle="After a **shortlist** forms, many people compare **relocation**, **housing search**, **banking**, **health insurance**, and **mobile** in parallel — scope and pricing vary, so confirm fit before you commit."
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
              className={cn(SECTION_SCROLL_MARGIN, SECTION_MAJOR_BREAK)}
              eyebrow={meta.profiles.eyebrow}
              title={meta.profiles.title}
              subtitle={meta.profiles.subtitle}
              subtitleMarkdown
            >
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {meta.profiles.cards.map((c) => (
                  <MovePillarLifecycleCard
                    key={c.id}
                    className="relative overflow-hidden pt-1 ring-1 ring-border/45"
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-brand-strong ring-1 ring-brand/15">
                        Profile
                      </span>
                      <h3 className="text-base font-semibold text-foreground">{c.name}</h3>
                    </div>
                    <BoldParagraph
                      text={c.personality}
                      className="mt-2 text-sm italic leading-snug text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <div className="mt-3 space-y-2 rounded-xl bg-surface-muted/50 p-3 ring-1 ring-border/40">
                      <p className="text-sm leading-snug">
                        <span className="font-semibold text-foreground">Best for: </span>
                        <BoldInline text={c.bestFor} className="text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
                      </p>
                      <p className="text-sm leading-snug">
                        <span className="font-semibold text-foreground">Watch-outs: </span>
                        <BoldInline text={c.watchOuts} className="text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
                      </p>
                    </div>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-foreground-muted">Next</p>
                    <ul className="mt-2 space-y-1.5 text-sm" role="list">
                      {c.nextLinks.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="font-medium text-link hover:underline">
                            {l.label} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={c.href} className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-link hover:underline">
                      Open {c.name} guide →
                    </Link>
                  </MovePillarLifecycleCard>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.mistakes.id}
              className={cn(SECTION_SCROLL_MARGIN, SECTION_MAJOR_BREAK)}
              eyebrow={meta.mistakes.eyebrow}
              title={meta.mistakes.title}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {meta.mistakes.rows.map((row) => (
                  <MovePillarLifecycleCard
                    key={row.id}
                    className="relative overflow-hidden border-l-[3px] border-l-brand/35 pt-1 ring-1 ring-border/40"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-faint">Common mistake</p>
                    <h3 className="mt-1 text-sm font-semibold text-foreground">
                      <BoldInline text={row.title} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                    </h3>
                    <BoldParagraph
                      text={row.body}
                      className="mt-2 text-sm leading-snug text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </MovePillarLifecycleCard>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.whatNext.id}
              className={cn(SECTION_SCROLL_MARGIN, SECTION_MAJOR_BREAK)}
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

            <section id={meta.helpfulTools.id} className={cn(SECTION_SCROLL_MARGIN, SECTION_MAJOR_BREAK, "scroll-mt-28")}>
              <SectionBlock
                eyebrow={meta.helpfulTools.eyebrow}
                title={meta.helpfulTools.title}
                subtitle={meta.helpfulTools.subtitle}
                subtitleMarkdown
                className="scroll-mt-28 md:scroll-mt-32"
              >
                <div className="space-y-8">
                  {meta.helpfulTools.sections.map((section) => (
                    <div key={section.eyebrow}>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{section.eyebrow}</p>
                      {section.description ? (
                        <BoldParagraph
                          text={section.description}
                          className="mt-1 max-w-3xl text-sm text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                        />
                      ) : null}
                      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {section.items.map((tool) => (
                          <ToolCard
                            key={tool.href}
                            title={tool.title}
                            description={tool.description}
                            descriptionMarkdown
                            href={tool.href}
                            ctaLabel="Open"
                            compact
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            </section>

            <RelatedGuidesSection
              id="related-guides-cross-pillar"
              className={cn("scroll-mt-28 md:scroll-mt-32", SECTION_MAJOR_BREAK)}
              title="Related guides across ExpatCopilot"
              blocks={[...meta.relatedGuidesCrossPillar]}
            />

            <section id="explore-cross-pillar" className={cn(SECTION_SCROLL_MARGIN, SECTION_MAJOR_BREAK, "scroll-mt-28")}>
              <SectionBlock
                compact
                eyebrow="Same product family as city guides"
                title="Explore Move, Money, Housing & Living"
                subtitle="City pages focus on **local setup**; these hubs carry the **national spine** — visas, rent rules, money tools, and daily life — no matter which municipality you pick."
                subtitleMarkdown
              >
                <MovePillarExploreGrid
                  cards={[...meta.crossPillarExploreCards]}
                  excludeHref={CANONICAL}
                  title=""
                  descriptionMarkdown
                />
              </SectionBlock>
            </section>
          </PillarJourneyStack>
        }
        nextSteps={
          <PillarGuideNextStepsRegion>
            <SectionBlock
              id="continue-cities"
              className={SECTION_SCROLL_MARGIN}
              compact
              eyebrow="Keep momentum"
              title="Continue exploring"
              subtitle="You should leave with a **shortlist**, not paralysis — open the hub or calculators next, then dive into the city guides that matter."
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
