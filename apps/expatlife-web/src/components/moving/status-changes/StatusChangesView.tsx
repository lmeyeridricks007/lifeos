import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import {
  FAQBlock,
  NextSteps,
  PageHero,
  PillarGuideAtGlanceRegion,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarGuideNextStepsRegion,
  PillarGuideToolsSection,
  PillarJourneyStack,
  ToolCard,
} from "@/components/page/pillar-template";
import { SectionBlock } from "@/components/page/moving-pillar";
import { Container } from "@/components/ui/container";
import { CardLink } from "@/components/ui/card-link";
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
import { MovePillarExploreGrid } from "@/src/components/moving/MovePillarExploreGrid";
import { MovePillarJourneyBridge } from "@/src/components/moving/MovePillarJourneyBridge";
import {
  MoveMisunderstandingCardGrid,
  MovePillarLifecycleCard,
  moveMisunderstandingSectionSubtitleClass,
  moveMisunderstandingSectionTitleClass,
} from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { MovingImmigrationAffiliatesBlock } from "@/src/components/moving/MovingImmigrationAffiliatesBlock";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { statusChangesPageMeta } from "./config/statusChanges.config";
import type {
  MoveStatusChangesRouteCategorySection,
  MoveStatusChangesWorkSection,
  StatusChangesPageMeta,
} from "./config/moveStatusChanges.types";
import { StatusChangesHeroGraphic } from "./StatusChangesHeroGraphic";
import { StatusChangesSituationGrid } from "./StatusChangesSituationGrid";
import { StatusChangesStartHereGrid } from "./StatusChangesStartHereGrid";

const DATE_MODIFIED = "2026-04-10";
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const TIGHT_SECTION_SPACING = `${SECTION_SCROLL_MARGIN} !pt-3 sm:!pt-4`;
const CHIP_BADGE =
  "inline-flex rounded-full border-0 bg-copilot-bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-copilot-primary ring-1 ring-copilot-primary/20";
const SECTION_CARD_KICKER =
  "text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted";
const SECTION_SCAN_BOX =
  "rounded-lg border-l-[3px] border-l-brand/25 bg-copilot-bg-soft/60 px-3 py-2 ring-1 ring-copilot-primary/[0.04]";

const meta = statusChangesPageMeta;
const CANONICAL = meta.canonicalPath;
const PAGE_HERO_SUBTITLE = meta.hero.subtitle;
const HUB = meta.movePillarHubPath;

export function StatusChangesView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Moving", item: new URL(HUB, baseUrl).toString() },
    { name: "Status Changes", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = <MovePillarSectionNav items={meta.sectionNav} deepLinks={[...meta.deepLinks]} clusterTitle="Go deeper" />;
  const reassurance = meta.reassurance[0];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline={meta.hero.pageTitle}
        description={PAGE_HERO_SUBTITLE.replace(/\*\*/g, "")}
        dateModified={DATE_MODIFIED}
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
              subtitleMarkdown
              eyebrowBandClassName={sitePillarFramedHeroTopBandClass}
              contentGutterClassName={sitePillarFramedHeroGutterXClass}
              heroTopBandSlot={
                <nav aria-label="Breadcrumbs" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
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
                  <Link href={HUB} className="transition-colors hover:text-foreground">
                    Moving
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <span className="text-foreground" aria-current="page">
                    Status Changes
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={PAGE_HERO_SUBTITLE}
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,min(100%,380px))] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
                      {meta.hero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{bullet}</span>
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
                      Need the broader route map first? Open{" "}
                      <Link href={meta.hero.compareLinks.visasPage.href} className="font-semibold text-link hover:text-link-hover hover:underline">
                        {meta.hero.compareLinks.visasPage.label}
                      </Link>{" "}
                      or{" "}
                      <Link href="/netherlands/visa/compare-visas/" className="font-semibold text-link hover:text-link-hover hover:underline">
                        Compare visa routes
                      </Link>
                      .
                    </p>
                    <p className="mt-3 text-sm text-foreground-muted">
                      For permit logic and what residence means over time, read{" "}
                      <Link href={meta.hero.compareLinks.permitsPage.href} className="font-semibold text-link hover:text-link-hover hover:underline">
                        {meta.hero.compareLinks.permitsPage.label}
                      </Link>
                      .
                    </p>
                    <p className="mt-3 text-sm text-foreground-muted">
                      For renewals, expiry pressure, and after-arrival timing, pair this with{" "}
                      <Link href={meta.hero.compareLinks.extensionsPage.href} className="font-semibold text-link hover:text-link-hover hover:underline">
                        {meta.hero.compareLinks.extensionsPage.label}
                      </Link>
                      .
                    </p>
                  </div>
                  <StatusChangesHeroGraphic className="w-full min-w-0 shrink-0 md:justify-self-end" />
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
              className={cn(
                SECTION_SCROLL_MARGIN,
                "rounded-2xl border border-brand/15 bg-gradient-to-br from-brand-muted/35 via-surface-raised to-copilot-bg-soft/40 p-5 shadow-card ring-1 ring-border/10 sm:p-6"
              )}
              aria-labelledby="sc-reassurance-heading"
            >
              <div className="flex gap-3 sm:gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/80 text-brand shadow-sm ring-1 ring-brand/15"
                  aria-hidden
                >
                  <Sparkles className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p id="sc-reassurance-heading" className="text-sm font-semibold text-foreground">
                    {reassurance.title}
                  </p>
                  <BoldParagraph
                    text={reassurance.body}
                    className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                  <p className="mt-3 text-xs font-medium text-foreground-muted/90">
                    One clear situation, one next check, one useful page is enough for today.
                  </p>
                </div>
              </div>
            </section>

            <MovePillarJourneyBridge
              id={meta.pillarJourneyBridge.id}
              eyebrow={meta.pillarJourneyBridge.eyebrow}
              title={meta.pillarJourneyBridge.title}
              intro={meta.pillarJourneyBridge.intro}
              links={meta.pillarJourneyBridge.links}
            />

            <StatusChangesStartHereGrid
              id={meta.startHereRegion.id}
              eyebrow={meta.startHereRegion.eyebrow}
              title={meta.startHereRegion.title}
              subtitle={meta.startHereRegion.subtitle}
              cards={meta.startHereCards}
            />

            <SectionDivider />

            <StatusChangesSituationGrid region={meta.commonSituationsRegion} cards={meta.commonSituations} />

            <SectionDivider />

            <WorkStatusSection section={meta.workSection} />

            <SectionDivider />

            <OtherContextsSection region={meta.otherContextsRegion} />

            <MovingImmigrationAffiliatesBlock />

            <SectionDivider />

            <TimingSection region={meta.timingRegion} />

            <SectionDivider />

            <LifeImpactSection region={meta.lifeImpactRegion} />

            <SectionDivider />

            <SectionBlockMisunderstandings />
            <SectionBlockWhatNext />
          </PillarJourneyStack>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id={meta.toolsRegion.id}
            className={SECTION_SCROLL_MARGIN}
            title={meta.toolsRegion.title}
            subtitle={meta.toolsRegion.subtitle}
            subtitleMarkdown
            gridClassName="!grid-cols-1 gap-8"
          >
            <div className="space-y-6 sm:space-y-7">
              <div className="rounded-xl bg-copilot-bg-soft/50 px-4 py-4 ring-1 ring-copilot-primary/[0.08] sm:px-5">
                <BoldParagraph
                  text={meta.relatedTools.journeyIntro}
                  className="text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                />
              </div>
              <SectionBlock
                compact
                className="!pt-0"
                eyebrow={meta.toolsJourneySnapshot.eyebrow}
                title={meta.toolsJourneySnapshot.title}
                subtitle={meta.toolsJourneySnapshot.subtitle}
                subtitleMarkdown
              >
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {meta.toolsJourneySnapshot.steps.map((step) => (
                    <CardLink key={step.href} href={step.href} title={step.label} description={step.description} meta={step.meta} />
                  ))}
                </div>
              </SectionBlock>
              <MovePillarExploreGrid />
              {meta.relatedTools.sections.map((section) => (
                <div key={section.eyebrow}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{section.eyebrow}</p>
                  {section.description ? <p className="mt-1 max-w-3xl text-sm text-foreground-muted">{section.description}</p> : null}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((tool) => (
                      <ToolCard
                        key={tool.href}
                        title={tool.title}
                        description={tool.description}
                        href={tool.href}
                        ctaLabel={tool.cta ?? "Open"}
                        compact
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PillarGuideToolsSection>
        }
        nextSteps={
          <PillarGuideNextStepsRegion>
            <SectionBlock
              id="continue-move"
              className={SECTION_SCROLL_MARGIN}
              compact
              eyebrow={meta.continueMove.eyebrow}
              title={meta.continueMove.title}
              subtitle={meta.continueMove.subtitle}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {meta.continueMove.cards.map((card) => (
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
              <FAQBlock id="faq" eyebrow="Support" title="Frequently asked questions" items={[...meta.faq]} maxItems={12} />
            </div>
            <VisasResidencyOfficialSources references={meta.references} />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}

function SectionDivider() {
  return (
    <div
      className="mx-auto my-2 h-px w-full max-w-3xl bg-border/45 sm:my-3 sm:bg-gradient-to-r sm:from-transparent sm:via-border/75 sm:to-transparent"
      aria-hidden
    />
  );
}

function WorkStatusSection({ section }: { section: MoveStatusChangesWorkSection }) {
  return (
    <SectionBlock
      id={section.id}
      className={TIGHT_SECTION_SPACING}
      eyebrow={section.eyebrow}
      title={section.title}
      subtitle={section.subtitle}
      subtitleMarkdown
    >
      <MovePillarLifecycleCard className="max-w-none">
        <BoldParagraph
          text={section.intro}
          className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />
      </MovePillarLifecycleCard>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {section.scenarioCards.map((card) => (
          <article
            key={card.id}
            className="relative overflow-hidden rounded-2xl border border-copilot-primary/[0.07] bg-copilot-surface p-4 shadow-expatos-md ring-1 ring-copilot-primary/[0.05] sm:p-5"
          >
            <div className={cn("absolute inset-x-0 top-0 h-0.5 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex flex-wrap items-center gap-2">
              <span className={SECTION_CARD_KICKER}>Focus</span>
              <span className={CHIP_BADGE}>{card.chip}</span>
            </div>
            <h3 className="mt-2 text-base font-semibold text-foreground">{card.title}</h3>
            <BoldParagraph
              text={card.intro}
              className="mt-2 text-[13px] leading-snug text-foreground-muted sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
            />
            <div className={cn(SECTION_SCAN_BOX, "mt-3")}>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Who this usually affects</p>
              <BoldParagraph
                text={card.whoItAffects}
                className="mt-1 text-[13px] leading-snug text-copilot-text-primary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary sm:text-sm"
              />
            </div>
            <ul className="mt-3 space-y-1.5 text-[13px] leading-snug text-foreground-muted sm:text-sm" role="list">
              {card.keyPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                  <BoldParagraph text={point} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                </li>
              ))}
            </ul>
            <div className={cn(SECTION_SCAN_BOX, "mt-3 border-l-sky-500/30 bg-white/80 ring-border/60")}>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-foreground-muted">What matters next</p>
              <BoldParagraph
                text={card.whatMattersNext}
                className="mt-1 text-[13px] leading-snug text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground sm:text-sm"
              />
            </div>
            {card.relatedLinks?.length ? (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border/70 pt-3">
                {card.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-[36px] items-center rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-link shadow-sm hover:border-border-strong hover:bg-surface-muted hover:text-link-hover"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{section.pairedToolsEyebrow}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.pairedTools.map((tool) => (
            <ToolCard key={tool.href} title={tool.label} description={tool.description} href={tool.href} ctaLabel="Open" compact />
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}

function OtherContextsSection({ region }: { region: MoveStatusChangesRouteCategorySection }) {
  return (
    <SectionBlock
      id={region.id}
      className={TIGHT_SECTION_SPACING}
      eyebrow={region.eyebrow}
      title={region.title}
      subtitle={region.subtitle}
      subtitleMarkdown
    >
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {region.blocks.map((block) => (
          <article
            key={block.id}
            className="relative overflow-hidden rounded-2xl border border-copilot-primary/[0.07] bg-copilot-surface p-4 shadow-expatos-md ring-1 ring-copilot-primary/[0.05] sm:p-5"
          >
            <div className={cn("absolute inset-x-0 top-0 h-0.5 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex flex-wrap items-center gap-2">
              <span className={SECTION_CARD_KICKER}>Change context</span>
              <span className={CHIP_BADGE}>{block.letter}</span>
            </div>
            <h3 className="mt-2 text-base font-semibold text-foreground">{block.title}</h3>
            {block.intro ? <p className="mt-2 text-[13px] leading-snug text-foreground-muted sm:text-sm">{block.intro}</p> : null}
            <div className="mt-3 space-y-2.5">
              <div className="rounded-lg border-l-[3px] border-l-brand/30 bg-copilot-bg-soft/60 px-3 py-2 ring-1 ring-copilot-primary/[0.04]">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Who this is for</p>
                <BoldParagraph
                  text={block.whoItAffects}
                  className="mt-1 text-[13px] leading-snug text-copilot-text-primary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary sm:text-sm"
                />
              </div>
              <ul className="space-y-1.5 text-[13px] leading-snug text-foreground-muted sm:text-sm" role="list">
                {block.keyPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={point} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <div className="rounded-lg border-l-[3px] border-l-brand/25 bg-white/80 px-3 py-2 ring-1 ring-border/60">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-foreground-muted">What usually matters next</p>
                <BoldParagraph
                  text={block.whatMattersNext}
                  className="mt-1 text-[13px] leading-snug text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-border/70 pt-3">
              {block.relatedLinks?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-[36px] items-center rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-link shadow-sm hover:border-border-strong hover:bg-surface-muted hover:text-link-hover"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}

function TimingSection({ region }: { region: StatusChangesPageMeta["timingRegion"] }) {
  return (
    <SectionBlock
      id={region.id}
      className={TIGHT_SECTION_SPACING}
      eyebrow={region.eyebrow}
      title={region.title}
      subtitle={region.subtitle}
      subtitleMarkdown
    >
      <ul
        className="mb-4 flex list-none flex-wrap gap-2 p-0"
        aria-label="Typical planning checkpoints from first awareness to practical planning"
      >
        {["Notice", "Dates", "Dependencies", "Plan"].map((label) => (
          <li key={label} className="list-none">
            <span className="inline-flex rounded-full border border-emerald-700/15 bg-emerald-50/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-900/90 ring-1 ring-emerald-800/10">
              {label}
            </span>
          </li>
        ))}
      </ul>
      <div className="grid gap-3 sm:grid-cols-2">
        {region.cards.map((card) => (
          <MovePillarLifecycleCard key={card.id} className="border-l-[3px] border-l-emerald-600/25 bg-surface-raised/60">
            <p className={SECTION_CARD_KICKER}>Continuity</p>
            <p className="text-sm font-semibold text-foreground">{card.title}</p>
            <BoldParagraph
              text={card.intro}
              className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
            />
            {card.keyPoints?.length ? (
              <ul className="mt-3 space-y-1.5 text-[13px] leading-snug text-foreground-muted" role="list">
                {card.keyPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-600/50" aria-hidden />
                    <BoldParagraph text={point} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
            ) : null}
          </MovePillarLifecycleCard>
        ))}
      </div>
    </SectionBlock>
  );
}

function LifeImpactSection({ region }: { region: StatusChangesPageMeta["lifeImpactRegion"] }) {
  return (
    <SectionBlock
      id={region.id}
      className={TIGHT_SECTION_SPACING}
      eyebrow={region.eyebrow}
      title={region.title}
      subtitle={region.subtitle}
      subtitleMarkdown
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {region.cards.map((card) => (
          <MovePillarLifecycleCard key={card.id} className="h-full border-l-[3px] border-l-sky-600/25 bg-surface-raised/50">
            <p className={SECTION_CARD_KICKER}>{card.id === "affected-quickly" ? "Moves fast" : card.id === "stressful" ? "Easy to ignore" : "Open next"}</p>
            <p className="text-sm font-semibold text-foreground">{card.title}</p>
            <BoldParagraph
              text={card.intro}
              className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
            />
            {card.keyPoints?.length ? (
              <ul className="mt-3 space-y-1.5 text-[13px] leading-snug text-foreground-muted" role="list">
                {card.keyPoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-600/50" aria-hidden />
                    <BoldParagraph text={point} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
            ) : null}
            {card.links?.length ? (
              <>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Open next</p>
                <ul className="mt-2 space-y-1.5 text-sm" role="list">
                  {card.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="font-semibold text-link hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </MovePillarLifecycleCard>
        ))}
      </div>
    </SectionBlock>
  );
}

function SectionBlockMisunderstandings() {
  const region = meta.misunderstandingsRegion;
  return (
    <SectionBlock
      id="misunderstandings"
      className={TIGHT_SECTION_SPACING}
      wrapInPanel
      eyebrow={region.eyebrow}
      eyebrowClassName="text-sky-600"
      title={region.title}
      titleClassName={moveMisunderstandingSectionTitleClass}
      subtitle={region.subtitle}
      subtitleClassName={moveMisunderstandingSectionSubtitleClass}
    >
      <MoveMisunderstandingCardGrid
        rows={meta.misunderstandings.map((row) => ({
          id: row.id,
          title: row.title,
          body: <BoldParagraph text={row.body} className="text-sm leading-relaxed sm:text-[0.9375rem] sm:leading-relaxed" />,
        }))}
      />
    </SectionBlock>
  );
}

function SectionBlockWhatNext() {
  const region = meta.whatNextRegion;
  return (
    <SectionBlock id="what-next" className={TIGHT_SECTION_SPACING} eyebrow={region.eyebrow} title={region.title} subtitle={region.subtitle} subtitleMarkdown>
      <NextSteps
        variant="progression"
        compact
        movingHubPremium
        suppressChrome
        maxItems={5}
        items={meta.progressionSteps.map((step) => ({
          label: step.label,
          href: step.href,
          description: step.description,
        }))}
      />
    </SectionBlock>
  );
}
