import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
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
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { MovePillarJourneyBridge } from "@/src/components/moving/MovePillarJourneyBridge";
import {
  MoveMisunderstandingCardGrid,
  MovePillarInternalLinkList,
  MovePillarLifecycleCard,
  moveMisunderstandingSectionSubtitleClass,
  moveMisunderstandingSectionTitleClass,
} from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { moveWorkingNlRoutes } from "@/src/components/moving/working-in-the-netherlands/config/moveWorkingNl.content";
import type {
  MoveWorkingNlGridSection,
  MoveWorkingNlJourneyBlock,
  MoveWorkingNlJourneySection,
} from "@/src/components/moving/working-in-the-netherlands/config/moveWorkingNl.types";
import type { ChangingJobsNlPracticalLifeSection } from "./config/moveChangingJobsNl.types";
import { changingJobsNlPageMeta, moveChangingJobsNlRoutes } from "./config/changingJobsNetherlands.config";
import { ChangingJobsNetherlandsHeroGraphic } from "./ChangingJobsNetherlandsHeroGraphic";
import { ChangingJobsNetherlandsStartHereGrid } from "./ChangingJobsNetherlandsStartHereGrid";

const DATE_MODIFIED = "2026-04-10";
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const TIGHT_SECTION_SPACING = `${SECTION_SCROLL_MARGIN} !pt-3 sm:!pt-4`;
const CHIP_BADGE =
  "inline-flex rounded-full border-0 bg-copilot-bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-copilot-primary ring-1 ring-copilot-primary/20";
const SECTION_CARD_KICKER = "text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted";
const SECTION_SCAN_BOX = "rounded-lg border-l-[3px] border-l-brand/25 bg-copilot-bg-soft/60 px-3 py-2 ring-1 ring-copilot-primary/[0.04]";
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

const meta = changingJobsNlPageMeta;
const CANONICAL = meta.canonicalPath;
const PAGE_HERO_SUBTITLE = meta.hero.subtitle;
const HUB = meta.movePillarHubPath;
const WORKING_NL = moveWorkingNlRoutes.canonical;
const ROUTES = moveChangingJobsNlRoutes;

const CHANGING_JOBS_SUPPORT_LINKS = [
  { href: "/netherlands/services/visa-consultants/", label: "Visa consultants" },
  { href: "/netherlands/services/immigration-lawyers/", label: "Immigration lawyers" },
  { href: "/netherlands/services/relocation-services/", label: "Relocation services" },
  { href: "/netherlands/services/relocation-agencies/", label: "Relocation agencies" },
  { href: "/netherlands/services/banks/", label: "Banks" },
  { href: "/netherlands/services/health-insurance/", label: "Health insurance" },
  { href: "/netherlands/services/health-insurance/#international-health", label: "International health insurance" },
  { href: "/netherlands/services/housing-platforms/", label: "Housing platforms" },
  { href: "/netherlands/services/rental-agencies/", label: "Rental agencies" },
  { href: "/netherlands/services/", label: "All services" },
] as const;

export function ChangingJobsNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Moving", item: new URL(HUB, baseUrl).toString() },
    { name: "Changing Jobs in the Netherlands", item: new URL(CANONICAL, baseUrl).toString() },
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
                    Changing Jobs in the Netherlands
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
                    <div className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground-muted">
                      <p>
                        <span className="font-medium text-foreground">Move guides: </span>
                        <Link href={WORKING_NL} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Working in the Netherlands
                        </Link>
                        {" · "}
                        <Link href={ROUTES.layoffs} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Layoffs
                        </Link>
                        {" · "}
                        <Link href={ROUTES.resigningJob} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Resigning a job
                        </Link>
                        {" · "}
                        <Link href={ROUTES.residencePermits} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Residence permits
                        </Link>
                        {" · "}
                        <Link href={ROUTES.extensions} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Extensions & changes
                        </Link>
                        {" · "}
                        <Link href={ROUTES.statusChanges} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Status changes
                        </Link>
                        {" · "}
                        <Link href={ROUTES.twvWorkPermit} className="font-semibold text-link hover:text-link-hover hover:underline">
                          TWV
                        </Link>
                        {" · "}
                        <Link href={HUB} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Move hub
                        </Link>
                        {" · "}
                        <Link href={ROUTES.visas} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Visas & residency
                        </Link>
                      </p>
                      <p>
                        <span className="font-medium text-foreground">Numbers & tools: </span>
                        <Link href={ROUTES.jobOffer} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Offer comparison
                        </Link>
                        {" · "}
                        <Link href={ROUTES.salaryNet} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Salary net
                        </Link>
                        {" · "}
                        <Link href={ROUTES.rentAffordability} className="font-semibold text-link hover:text-link-hover hover:underline">
                          Rent check
                        </Link>
                        {" · "}
                        <Link href="#helpful-tools" className="font-semibold text-link hover:text-link-hover hover:underline">
                          Full tool list
                        </Link>
                      </p>
                    </div>
                  </div>
                  <ChangingJobsNetherlandsHeroGraphic className="w-full min-w-0 shrink-0 md:justify-self-end" />
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
                "rounded-2xl border border-brand/15 bg-gradient-to-br from-brand-muted/35 via-surface-raised to-copilot-bg-soft/40 p-4 shadow-card ring-1 ring-border/10 sm:p-6"
              )}
              aria-labelledby="cjnl-reassurance-heading"
            >
              <div className="flex gap-3 sm:gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/80 text-brand shadow-sm ring-1 ring-brand/15"
                  aria-hidden
                >
                  <Sparkles className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p id="cjnl-reassurance-heading" className="text-sm font-semibold text-foreground">
                    {reassurance.title}
                  </p>
                  <BoldParagraph
                    text={reassurance.body}
                    className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                  <p className="mt-3 text-xs font-medium text-foreground-muted/90">
                    One clear question, one realistic tool, and one next page is enough for today.
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-brand/10 pt-4" role="list">
                    {meta.confidenceChecklist.map((line) => (
                      <li key={line} className="flex gap-2.5 text-sm text-foreground-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} aria-hidden />
                        <BoldParagraph
                          text={line}
                          className="min-w-0 leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
                        />
                      </li>
                    ))}
                  </ul>
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

            <ChangingJobsNetherlandsStartHereGrid
              id={meta.startHereRegion.id}
              eyebrow={meta.startHereRegion.eyebrow}
              title={meta.startHereRegion.title}
              subtitle={meta.startHereRegion.subtitle}
              cards={meta.startHereCards}
            />

            <SectionDivider />

            <JourneySectionFour section={meta.whatAffectsSection} />

            <SectionDivider />

            <CardGridSection section={meta.contractsSection} />

            <SectionDivider />

            <CardGridSection section={meta.permitsSection} />

            <SectionDivider />

            <CardGridSection section={meta.salarySection} />

            <SectionDivider />

            <section
              id="job-switch-providers"
              className={SECTION_SCROLL_MARGIN}
              aria-label="Professional support and provider comparisons"
            >
              <MoveGuideAffiliateSupportBlock
                placementId="nl-moving-changing-jobs-support-providers"
                categoryLinks={[...CHANGING_JOBS_SUPPORT_LINKS]}
                browseLabel="Browse more categories: "
              />
            </section>

            <SectionDivider />

            <PracticalLifeSection region={meta.practicalLifeSection} />

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
              <MovePillarExploreGrid cards={meta.explorePillarCards} title="Explore the Move pillar" excludeHref={CANONICAL} />
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
              <FAQBlock
                id="faq"
                eyebrow="Support"
                title="Frequently asked questions"
                items={[...meta.faq]}
                maxItems={12}
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

function SectionDivider() {
  return (
    <div
      className="mx-auto my-2 h-px w-full max-w-3xl bg-border/45 sm:my-3 sm:bg-gradient-to-r sm:from-transparent sm:via-border/75 sm:to-transparent"
      aria-hidden
    />
  );
}

function JourneySectionFour({ section }: { section: MoveWorkingNlJourneySection & { stages: MoveWorkingNlJourneyBlock[] } }) {
  return (
    <SectionBlock id={section.id} className={TIGHT_SECTION_SPACING} eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} subtitleMarkdown>
      <MovePillarLifecycleCard className="max-w-none">
        <BoldParagraph
          text={section.intro}
          className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />
      </MovePillarLifecycleCard>
      <div className="mt-4 rounded-2xl border border-brand/12 bg-gradient-to-br from-brand-muted/20 via-surface-raised to-copilot-bg-soft/35 p-4 shadow-card ring-1 ring-border/10 sm:p-5">
        <div className="flex flex-wrap gap-2">
          {section.firstFocus.chips.map((chip) => (
            <span key={chip} className={INFO_CHIP}>
              {chip}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm font-semibold text-foreground">{section.firstFocus.title}</p>
        <BoldParagraph
          text={section.firstFocus.body}
          className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {section.stages.map((stage) => (
          <MovePillarLifecycleCard key={stage.id} className="h-full border-l-[3px] border-l-brand/25 bg-surface-raised/60">
            <p className={SECTION_CARD_KICKER}>{stage.label}</p>
            <p className="text-sm font-semibold text-foreground">{stage.title}</p>
            <BoldParagraph
              text={stage.intro}
              className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
            />
            {stage.bestFor ? (
              <BoldParagraph
                text={`**Best for:** ${stage.bestFor}`}
                className="mt-2 text-[11px] leading-snug text-foreground-muted sm:text-xs [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            ) : null}
            <ul className="mt-3 space-y-1.5 text-[13px] leading-snug text-foreground-muted" role="list">
              {stage.keyPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                  <BoldParagraph text={point} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                </li>
              ))}
            </ul>
            <MovePillarInternalLinkList links={stage.internalLinks} className="mt-3" />
          </MovePillarLifecycleCard>
        ))}
      </div>
    </SectionBlock>
  );
}

function CardGridSection({
  section,
}: {
  section: MoveWorkingNlGridSection & { cards: MoveWorkingNlGridSection["blocks"] };
}) {
  return (
    <SectionBlock id={section.id} className={TIGHT_SECTION_SPACING} eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} subtitleMarkdown>
      <MovePillarLifecycleCard className="max-w-none">
        <BoldParagraph
          text={section.intro}
          className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />
      </MovePillarLifecycleCard>
      <div className="mt-4 rounded-2xl border border-brand/12 bg-gradient-to-br from-brand-muted/20 via-surface-raised to-copilot-bg-soft/35 p-4 shadow-card ring-1 ring-border/10 sm:p-5">
        <div className="flex flex-wrap gap-2">
          {section.firstFocus.chips.map((chip) => (
            <span key={chip} className={INFO_CHIP}>
              {chip}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm font-semibold text-foreground">{section.firstFocus.title}</p>
        <BoldParagraph
          text={section.firstFocus.body}
          className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {section.cards.map((card) => (
          <article
            key={card.id}
            className="relative overflow-hidden rounded-2xl border border-copilot-primary/[0.07] bg-copilot-surface p-4 shadow-expatos-md ring-1 ring-copilot-primary/[0.05] sm:p-5"
          >
            <div className={cn("absolute inset-x-0 top-0 h-0.5 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex flex-wrap items-center gap-2">
              {"chip" in card ? <span className={CHIP_BADGE}>{card.chip}</span> : <span className={SECTION_CARD_KICKER}>Focus area</span>}
              <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
            </div>
            <BoldParagraph
              text={card.intro}
              className="mt-2 text-[13px] leading-snug text-foreground-muted sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
            />
            {card.bestFor ? (
              <BoldParagraph
                text={`**Best for:** ${card.bestFor}`}
                className="mt-2 text-[11px] leading-snug text-foreground-muted sm:text-xs [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            ) : null}
            <div className={cn(SECTION_SCAN_BOX, "mt-3")}>
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">
                {"chip" in card ? "Why it matters" : "Reality check"}
              </p>
              <p className="mt-1 text-[13px] leading-snug text-copilot-text-primary sm:text-sm">
                {card.whatMattersNext ??
                  ("chip" in card
                    ? "Compare it in the context of the move, not as an isolated employment detail."
                    : "Translate this into your city, household, and first-month setup before assuming the number works.")}
              </p>
            </div>
            <ul className="mt-3 space-y-1.5 text-[13px] leading-snug text-foreground-muted sm:text-sm" role="list">
              {card.keyPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                  <BoldParagraph text={point} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                </li>
              ))}
            </ul>
            <MovePillarInternalLinkList links={card.internalLinks} className="mt-3" />
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

function PracticalLifeSection({ region }: { region: ChangingJobsNlPracticalLifeSection }) {
  return (
    <SectionBlock id={region.id} className={TIGHT_SECTION_SPACING} eyebrow={region.eyebrow} title={region.title} subtitle={region.subtitle} subtitleMarkdown>
      <MovePillarLifecycleCard className="max-w-none">
        <BoldParagraph
          text={region.intro}
          className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />
      </MovePillarLifecycleCard>
      <div className="mt-4 rounded-2xl border border-teal-500/12 bg-gradient-to-br from-teal-50/70 via-surface-raised to-copilot-bg-soft/35 p-4 shadow-card ring-1 ring-border/10 sm:p-5">
        <div className="flex flex-wrap gap-2">
          {region.firstFocus.chips.map((chip) => (
            <span key={chip} className={INFO_CHIP}>
              {chip}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm font-semibold text-foreground">{region.firstFocus.title}</p>
        <BoldParagraph
          text={region.firstFocus.body}
          className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {region.cards.map((card) => (
          <MovePillarLifecycleCard key={card.id} className="h-full border-l-[3px] border-l-teal-600/25 bg-surface-raised/50">
            <div className="flex flex-wrap items-center gap-2">
              <p className={SECTION_CARD_KICKER}>{card.label}</p>
              <span className={INFO_CHIP}>{card.priority}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">{card.title}</p>
            {card.intro ? (
              <BoldParagraph
                text={card.intro}
                className="mt-2 text-[12px] leading-snug text-foreground-muted sm:text-[13px] [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            ) : null}
            {card.bestFor ? (
              <BoldParagraph
                text={`**Best for:** ${card.bestFor}`}
                className="mt-2 text-[11px] leading-snug text-foreground-muted sm:text-xs [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            ) : null}
            {card.whatMattersNext ? (
              <div className="mt-2 rounded-lg border-l-[3px] border-l-teal-600/30 bg-teal-50/40 px-3 py-2 text-[12px] ring-1 ring-teal-900/[0.04]">
                <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-teal-900/70">Reality check</p>
                <BoldParagraph
                  text={card.whatMattersNext}
                  className="mt-1 leading-snug text-foreground [&_strong]:font-semibold"
                />
              </div>
            ) : null}
            <MovePillarInternalLinkList links={card.internalLinks} className="mt-2" />
            <ul className="mt-3 space-y-1.5 text-[13px] leading-snug text-foreground-muted" role="list">
              {card.keyPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-600/50" aria-hidden />
                  <BoldParagraph text={point} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                </li>
              ))}
            </ul>
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
      subtitleMarkdown
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
    <SectionBlock
      id="what-next"
      className={TIGHT_SECTION_SPACING}
      eyebrow={region.eyebrow}
      title={region.title}
      subtitle={region.subtitle}
      subtitleMarkdown
    >
      <NextSteps
        variant="progression"
        compact
        movingHubPremium
        suppressChrome
        maxItems={6}
        items={meta.progressionSteps.map((step) => ({
          label: step.label,
          href: step.href,
          description: step.description,
        }))}
      />
    </SectionBlock>
  );
}
