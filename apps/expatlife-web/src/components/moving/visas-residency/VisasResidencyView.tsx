import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
import { MoveMisunderstandingCardGrid } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyHeroGraphic } from "./VisasResidencyHeroGraphic";
import { MovingImmigrationAffiliatesBlock } from "@/src/components/moving/MovingImmigrationAffiliatesBlock";
import { VisasResidencyOfficialSources } from "./VisasResidencyOfficialSources";
import { VisasResidencyRouteDoorwayGrid, VisasResidencySectionBlocks } from "./VisasResidencySectionBlocks";
import {
  moveVisaResidencyFaq,
  moveVisaResidencyMisunderstandings,
  moveVisaResidencyPageMeta,
  moveVisaResidencyReferences,
  moveVisaResidencyRelatedTools,
  moveVisaResidencyRouteCards,
  moveVisaResidencySections,
  moveVisaResidencyTips,
} from "./config";

const DATE_MODIFIED = "2026-04-09";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const meta = moveVisaResidencyPageMeta;
const VISAS_RESIDENCY_CANONICAL = meta.canonicalPath;
const PAGE_HERO_SUBTITLE = meta.hero.subtitle;
const MOVE_PILLAR_HUB = meta.movePillarHubPath;

export function VisasResidencyView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(VISAS_RESIDENCY_CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Moving", item: new URL(MOVE_PILLAR_HUB, baseUrl).toString() },
    { name: "Visas & Residency", item: new URL(VISAS_RESIDENCY_CANONICAL, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <MovePillarSectionNav items={meta.sectionNav} deepLinks={[...meta.deepLinks]} clusterTitle="Go deeper" />
  );

  const reassurance = moveVisaResidencyTips[0];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline={meta.hero.pageTitle}
        description={PAGE_HERO_SUBTITLE}
        dateModified={DATE_MODIFIED}
        urlPath={VISAS_RESIDENCY_CANONICAL}
      />
      <FaqPageJsonLd items={moveVisaResidencyFaq.map((i) => ({ q: i.q, a: i.a.replace(/\*\*/g, "") }))} />

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
                  <Link href={MOVE_PILLAR_HUB} className="transition-colors hover:text-foreground">
                    Moving
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <span className="text-foreground">Visas &amp; Residency</span>
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
                          <span>{b}</span>
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
                      Prefer a structured comparison? Start with{" "}
                      <Link
                        href={meta.hero.compareLinks.compareVisas.href}
                        className="font-semibold text-link hover:text-link-hover hover:underline"
                      >
                        {meta.hero.compareLinks.compareVisas.label}
                      </Link>{" "}
                      or the{" "}
                      <Link
                        href={meta.hero.compareLinks.visaChecker.href}
                        className="font-semibold text-link hover:text-link-hover hover:underline"
                      >
                        {meta.hero.compareLinks.visaChecker.label}
                      </Link>
                      .
                    </p>
                    <p className="mt-3 text-sm text-foreground-muted">
                      Want permit logic and{" "}
                      <strong className="font-semibold text-foreground">after-approval</strong> setup in plain language? Read{" "}
                      <Link
                        href="/netherlands/moving/residence-permits/"
                        className="font-semibold text-link hover:text-link-hover hover:underline"
                      >
                        Residence permits in the Netherlands
                      </Link>
                      —same Move pillar rhythm, focused on what a permit means in real life.
                    </p>
                    <p className="mt-3 text-sm text-foreground-muted">
                      Already here and juggling{" "}
                      <strong className="font-semibold text-foreground">renewals, job changes, or life shifts</strong>? See{" "}
                      <Link
                        href="/netherlands/moving/extensions-changes/"
                        className="font-semibold text-link hover:text-link-hover hover:underline"
                      >
                        Extensions &amp; changes in the Netherlands
                      </Link>
                      —a practical bridge between permit basics and what happens when circumstances move on.
                    </p>
                    <p className="mt-3 text-sm text-foreground-muted">
                      If the question is less about expiry and more about your{" "}
                      <strong className="font-semibold text-foreground">underlying reason for stay changing</strong>, open{" "}
                      <Link
                        href="/netherlands/moving/status-changes/"
                        className="font-semibold text-link hover:text-link-hover hover:underline"
                      >
                        Status changes in the Netherlands
                      </Link>
                      —the Move guide for work, study, family, and self-employment shifts that can change the residency picture.
                    </p>
                  </div>
                  <VisasResidencyHeroGraphic className="w-full min-w-0 shrink-0 md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={VISAS_RESIDENCY_CANONICAL}
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
              aria-labelledby="vr-reassurance-heading"
            >
              <p id="vr-reassurance-heading" className="text-sm font-semibold text-foreground">
                {reassurance.title}
              </p>
              <BoldParagraph
                text={reassurance.body}
                className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </section>

            <VisasResidencyRouteDoorwayGrid startHereRegion={meta.startHereRegion} routeCards={moveVisaResidencyRouteCards} />

            <div className="mx-auto hidden h-px max-w-3xl bg-gradient-to-r from-transparent via-border/80 to-transparent sm:block" aria-hidden />

            <VisasResidencySectionBlocks sections={moveVisaResidencySections} />

            <MovingImmigrationAffiliatesBlock />

            <div className="mx-auto hidden h-px max-w-3xl bg-gradient-to-r from-transparent via-border/80 to-transparent sm:block" aria-hidden />

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
            gridClassName="!grid-cols-1 gap-8"
          >
            <div className="space-y-8">
              <div className="rounded-xl bg-copilot-bg-soft/50 px-4 py-4 ring-1 ring-copilot-primary/[0.08] sm:px-5">
                <BoldParagraph
                  text={moveVisaResidencyRelatedTools.journeyIntro}
                  className="text-sm leading-relaxed text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                />
              </div>
              <MovePillarExploreGrid />
              {moveVisaResidencyRelatedTools.sections.map((section) => (
                <div key={section.eyebrow}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{section.eyebrow}</p>
                  {section.description ? <p className="mt-1 max-w-3xl text-sm text-foreground-muted">{section.description}</p> : null}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((t) => (
                      <ToolCard
                        key={t.href}
                        title={t.title}
                        description={t.description}
                        href={t.href}
                        ctaLabel={t.cta ?? "Open"}
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
              <FAQBlock id="faq" eyebrow="Support" title="Frequently asked questions" items={moveVisaResidencyFaq} maxItems={12} />
            </div>
            <VisasResidencyOfficialSources references={moveVisaResidencyReferences} />
          </PillarGuideFaqRegion>
        }
      />
    </>
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
        rows={moveVisaResidencyMisunderstandings.map((row) => ({
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
