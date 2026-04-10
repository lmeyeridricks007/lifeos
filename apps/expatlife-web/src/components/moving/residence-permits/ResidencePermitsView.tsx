import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
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
import { MovingImmigrationAffiliatesBlock } from "@/src/components/moving/MovingImmigrationAffiliatesBlock";
import { MovePillarExploreGrid } from "@/src/components/moving/MovePillarExploreGrid";
import { MovePillarJourneyBridge } from "@/src/components/moving/MovePillarJourneyBridge";
import {
  MoveMisunderstandingCardGrid,
  MovePillarLifecycleCard,
} from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { ResidencePermitsHeroGraphic } from "./ResidencePermitsHeroGraphic";
import { ResidencePermitsPermitBasicsGrid } from "./ResidencePermitsPermitBasicsGrid";
import { ResidencePermitsSituationGrid } from "./ResidencePermitsSituationGrid";
import {
  moveResidencePermitBasicsCards,
  moveResidencePermitFaq,
  moveResidencePermitLifecycle,
  moveResidencePermitMisunderstandings,
  moveResidencePermitReferences,
  moveResidencePermitRelatedTools,
  moveResidencePermitRouteCards,
  moveResidencePermitSections,
  moveResidencePermitTips,
  moveResidencePermitsPageMeta,
} from "./config";
import type {
  MoveResidencePermitAfterApproval,
  MoveResidencePermitRenewalRegion,
  MoveResidencePermitRouteCategoryBlock,
  MoveResidencePermitWorkSection,
} from "./config/moveResidencePermits.types";

const DATE_MODIFIED = "2026-04-09";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const meta = moveResidencePermitsPageMeta;
const CANONICAL = meta.canonicalPath;
const PAGE_HERO_SUBTITLE = meta.hero.subtitle;
const HUB = meta.movePillarHubPath;
export function ResidencePermitsView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Moving", item: new URL(HUB, baseUrl).toString() },
    { name: "Residence Permits", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = <MovePillarSectionNav items={meta.sectionNav} deepLinks={[...meta.deepLinks]} clusterTitle="Go deeper" />;

  const reassurance = moveResidencePermitTips[0];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd headline={meta.hero.pageTitle} description={PAGE_HERO_SUBTITLE} dateModified={DATE_MODIFIED} urlPath={CANONICAL} />
      <FaqPageJsonLd items={moveResidencePermitFaq.map((i) => ({ q: i.q, a: i.a.replace(/\*\*/g, "") }))} />

      <GuidePageTemplate
        mainStackClassName="mt-2 space-y-4 sm:mt-3 sm:space-y-5 md:space-y-6"
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
                  <span className="text-foreground">Residence Permits</span>
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
                      {meta.hero.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <BoldInline text={b} className="text-foreground-muted" />
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
                      Want the broader route map first? Open{" "}
                      <Link href={meta.hero.compareLinks.visasPage.href} className="font-semibold text-link hover:text-link-hover hover:underline">
                        {meta.hero.compareLinks.visasPage.label}
                      </Link>{" "}
                      or{" "}
                      <Link href={meta.hero.compareLinks.compareVisas.href} className="font-semibold text-link hover:text-link-hover hover:underline">
                        {meta.hero.compareLinks.compareVisas.label}
                      </Link>
                      .
                    </p>
                    <p className="mt-3 text-sm text-foreground-muted">
                      Focused on{" "}
                      <strong className="font-semibold text-foreground">what changes after you’re already here</strong>? Read{" "}
                      <Link
                        href="/netherlands/moving/extensions-changes/"
                        className="font-semibold text-link hover:text-link-hover hover:underline"
                      >
                        Extensions &amp; changes in the Netherlands
                      </Link>
                      —timing, common situations, and life admin next to permit questions.
                    </p>
                    <p className="mt-3 text-sm text-foreground-muted">
                      If your{" "}
                      <strong className="font-semibold text-foreground">basis of stay itself may be shifting</strong> from work, study, family, or self-employment, use{" "}
                      <Link
                        href="/netherlands/moving/status-changes/"
                        className="font-semibold text-link hover:text-link-hover hover:underline"
                      >
                        Status changes in the Netherlands
                      </Link>
                      for the orientation layer between permits, life events, and practical next steps.
                    </p>
                  </div>
                  <ResidencePermitsHeroGraphic className="w-full min-w-0 shrink-0 md:justify-self-end" />
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
          <PillarJourneyStack variant="guide">
            <MovePillarMobileToc items={meta.sectionNav} />

            <section
              className={cn(
                SECTION_SCROLL_MARGIN,
                "rounded-2xl border border-brand/12 bg-gradient-to-br from-brand-muted/30 via-surface-raised to-copilot-bg-soft/35 p-5 shadow-card ring-1 ring-border/10 sm:p-6"
              )}
              aria-labelledby="rp-reassurance-heading"
            >
              <p id="rp-reassurance-heading" className="text-sm font-semibold text-foreground">
                {reassurance.title}
              </p>
              <BoldParagraph
                text={reassurance.body}
                className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </section>

            <MovePillarJourneyBridge
              id={meta.pillarJourneyBridge.id}
              eyebrow={meta.pillarJourneyBridge.eyebrow}
              title={meta.pillarJourneyBridge.title}
              intro={meta.pillarJourneyBridge.intro}
              links={meta.pillarJourneyBridge.links}
            />

            <ResidencePermitsPermitBasicsGrid
              id="permit-basics"
              eyebrow="Start here"
              title="What a residence permit means in real life"
              subtitle="Three anchors—purpose, life setup, and what can change—before you scroll the situations below."
              cards={moveResidencePermitBasicsCards}
            />

            <SectionDivider />

            <ResidencePermitsSituationGrid region={meta.commonSituationsRegion} cards={moveResidencePermitRouteCards} />

            <SectionDivider />

            <WorkPermitsSection section={moveResidencePermitSections.work} />

            <SectionDivider />

            <StudyFamilySection
              id={meta.studyFamilySection.id}
              eyebrow={meta.studyFamilySection.eyebrow}
              title={meta.studyFamilySection.title}
              subtitle={meta.studyFamilySection.subtitle}
              blocks={meta.studyFamilySection.blocks}
            />

            <MovingImmigrationAffiliatesBlock />

            <RenewalSection section={moveResidencePermitLifecycle.renewal} />

            <SectionDivider />

            <AfterApprovalSection section={moveResidencePermitLifecycle.afterApproval} />

            <SectionDivider />

            <SectionBlockMisunderstandings />
            <SectionBlockWhatNext />
          </PillarJourneyStack>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id={meta.toolsRegion.id}
            title={meta.toolsRegion.title}
            subtitle={meta.toolsRegion.subtitle}
            subtitleMarkdown
            gridClassName="!grid-cols-1 gap-8"
          >
            <div className="space-y-8">
              <div className="rounded-xl bg-copilot-bg-soft/50 px-4 py-4 ring-1 ring-copilot-primary/[0.08] sm:px-5">
                <BoldParagraph
                  text={moveResidencePermitRelatedTools.journeyIntro}
                  className="text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                />
              </div>
              <MovePillarExploreGrid />
              {moveResidencePermitRelatedTools.sections.map((section) => (
                <div key={section.eyebrow}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{section.eyebrow}</p>
                  {section.description ? <p className="mt-1 max-w-3xl text-sm text-foreground-muted">{section.description}</p> : null}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((t) => (
                      <ToolCard key={t.href} title={t.title} description={t.description} href={t.href} ctaLabel={t.cta ?? "Open"} compact />
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
              <FAQBlock id="faq" eyebrow="Support" title="Frequently asked questions" items={moveResidencePermitFaq} maxItems={12} />
            </div>
            <VisasResidencyOfficialSources references={moveResidencePermitReferences} />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}

function SectionDivider() {
  return (
    <div
      className="mx-auto hidden h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-border/80 to-transparent sm:block"
      aria-hidden
    />
  );
}

function WorkPermitsSection({ section }: { section: MoveResidencePermitWorkSection }) {
  return (
    <SectionBlock
      id={section.id}
      className={SECTION_SCROLL_MARGIN}
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
        {section.keyPoints.map((line, i) => (
          <MovePillarLifecycleCard key={line}>
            <div className="flex gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-strong text-xs font-bold text-white shadow-sm ring-1 ring-brand/25"
                aria-hidden
              >
                {i + 1}
              </span>
              <BoldParagraph
                text={line}
                className="min-w-0 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </div>
          </MovePillarLifecycleCard>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{section.pairedToolsEyebrow}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.pairedTools.map((t) => (
            <ToolCard
              key={t.href}
              title={t.label}
              description={t.description.replace(/^—\s*/, "")}
              href={t.href}
              ctaLabel="Open"
              compact
            />
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}

const CHIP_BADGE =
  "inline-flex rounded-full border-0 bg-copilot-bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-copilot-primary ring-1 ring-copilot-primary/20";

function StudyFamilySection({
  id,
  eyebrow,
  title,
  subtitle,
  blocks,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  blocks: readonly MoveResidencePermitRouteCategoryBlock[];
}) {
  return (
    <SectionBlock id={id} className={SECTION_SCROLL_MARGIN} eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div className="grid gap-4 sm:grid-cols-2">
        {blocks.map((b) => (
          <article
            key={b.id}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10"
          >
            <div className={cn("absolute inset-x-0 top-0 h-0.5 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex flex-wrap items-center gap-2">
              <span className={CHIP_BADGE}>{b.letter}</span>
              <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
            </div>
            <div className="mt-3 space-y-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Who this is for</p>
                <BoldParagraph
                  text={b.bestFor}
                  className="mt-1 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">What usually matters next</p>
                <BoldParagraph
                  text={b.whatMattersNext}
                  className="mt-1 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 border-t border-border/70 pt-3">
              {b.nextLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex min-h-[36px] items-center rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-link shadow-sm hover:border-border-strong hover:bg-surface-muted hover:text-link-hover"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionBlock>
  );
}

function RenewalSection({ section }: { section: MoveResidencePermitRenewalRegion }) {
  return (
    <SectionBlock
      id={section.id}
      className={SECTION_SCROLL_MARGIN}
      eyebrow={section.eyebrow}
      title={section.title}
      subtitle={section.subtitle}
      subtitleMarkdown
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {section.cards.map((card) => (
          <MovePillarLifecycleCard key={card.id}>
            <p className="text-sm font-semibold text-foreground">{card.title}</p>
            <BoldParagraph
              text={card.intro}
              className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
            />
          </MovePillarLifecycleCard>
        ))}
      </div>
    </SectionBlock>
  );
}

function AfterApprovalSection({ section }: { section: MoveResidencePermitAfterApproval }) {
  return (
    <SectionBlock
      id={section.id}
      className={SECTION_SCROLL_MARGIN}
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
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          <span className="font-semibold text-foreground">{section.openNextLabel}</span>
          {section.openNextLinks.map((l, i) => (
            <span key={l.href}>
              {i > 0 ? <span aria-hidden> · </span> : null}
              <Link href={l.href} className="font-semibold text-link hover:underline">
                {l.label}
              </Link>
            </span>
          ))}
        </p>
      </MovePillarLifecycleCard>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {section.phases.map((ph) => (
          <MovePillarLifecycleCard key={ph.label}>
            <p className="text-sm font-semibold text-foreground">{ph.label}</p>
            <BoldParagraph
              text={ph.text}
              className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
            />
          </MovePillarLifecycleCard>
        ))}
      </div>

      <MovePillarLifecycleCard className="mt-4 max-w-none">
        <BoldParagraph
          text={section.moreNote}
          className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
        />
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          {section.docLinks.map((l, i) => (
            <span key={l.href}>
              {i > 0 ? <span aria-hidden> · </span> : null}
              <Link href={l.href} className="font-semibold text-link hover:underline">
                {l.label}
              </Link>
            </span>
          ))}
        </p>
      </MovePillarLifecycleCard>

      <div className="mt-6 space-y-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Planners & guides</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.primaryCtas.map((cta) => (
            <ToolCard
              key={cta.href}
              title={cta.label}
              description={cta.description}
              href={cta.href}
              ctaLabel="Open"
              compact
            />
          ))}
        </div>
      </div>
    </SectionBlock>
  );
}

function SectionBlockMisunderstandings() {
  const r = meta.misunderstandingsRegion;
  return (
    <SectionBlock
      id="misunderstandings"
      className={SECTION_SCROLL_MARGIN}
      eyebrow={r.eyebrow}
      eyebrowClassName="text-copilot-primary"
      title={r.title}
      subtitle={r.subtitle}
    >
      <MoveMisunderstandingCardGrid
        rows={moveResidencePermitMisunderstandings.map((row) => ({
          id: row.id,
          title: row.title,
          body: (
            <BoldParagraph
              text={row.body}
              className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
            />
          ),
        }))}
      />
    </SectionBlock>
  );
}

function SectionBlockWhatNext() {
  const r = meta.whatNextRegion;
  return (
    <SectionBlock id="what-next" className={SECTION_SCROLL_MARGIN} eyebrow={r.eyebrow} title={r.title} subtitle={r.subtitle}>
      <NextSteps
        variant="progression"
        compact
        movingHubPremium
        suppressChrome
        maxItems={5}
        items={meta.progressionSteps.map((s) => ({
          label: s.label,
          href: s.href,
          description: s.description,
        }))}
      />
    </SectionBlock>
  );
}
