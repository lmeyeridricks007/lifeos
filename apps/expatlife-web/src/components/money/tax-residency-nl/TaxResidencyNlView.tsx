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
  PillarGuideToolsSection,
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
import {
  MoveMisunderstandingCardGrid,
  MovePillarLifecycleCard,
  moveMisunderstandingSectionSubtitleClass,
  moveMisunderstandingSectionTitleClass,
} from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { MoneyTaxLearningPath } from "@/src/components/money/tax-cluster/MoneyTaxLearningPath";
import { TaxConceptInfographic } from "@/src/components/money/tax-cluster/TaxConceptInfographic";
import { TaxClusterToolsSection } from "@/src/components/money/tax-cluster/TaxClusterToolsSection";
import { TaxResidencyFactsVsPermitFigure } from "@/src/components/money/tax-cluster/TaxInstructionalFigures";
import { TAX_RESIDENCY_NL_PATH } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import {
  taxResidencyNlPageModel as meta,
  taxGuideRoutes,
} from "./taxResidencyNlPageModel";
import { TaxResidencyNlHeroGraphic } from "./TaxResidencyNlHeroGraphic";
import { TaxResidencyJourneyFlow } from "./TaxResidencyJourneyFlow";
import { TaxResidencyVsPermitOrientationCard } from "./TaxResidencyVsPermitOrientationCard";

const CANONICAL = meta.path;
const DATE_MODIFIED = meta.publishDate;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const GUIDE_SECTION_SPACING = SECTION_SCROLL_MARGIN;
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

const SIGNAL_CAUTION_UI = {
  low: {
    chipClass:
      "border-slate-200/90 bg-slate-50/90 text-slate-800 ring-1 ring-slate-900/[0.04]",
    label: "Simple",
    detail: "For many people: tidy dates and one focused read of official guidance go a long way.",
  },
  medium: {
    chipClass:
      "border-amber-200/80 bg-amber-50/70 text-amber-950/90 ring-1 ring-amber-900/[0.06]",
    label: "Worth checking",
    detail: "Compare a few trustworthy sources or tools — keep it practical, not alarmist.",
  },
  high: {
    chipClass:
      "border-indigo-200/80 bg-indigo-50/80 text-indigo-950/90 ring-1 ring-indigo-900/[0.07]",
    label: "Consider support",
    detail: "Stacked cross-border facts often merit a scoped conversation with a tax adviser — optional, not a scare tactic.",
  },
} as const;

export function TaxResidencyNlView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Money", item: new URL(taxGuideRoutes.moneyTools, baseUrl).toString() },
    { name: "Tax Residency in the Netherlands", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = <MovePillarSectionNav items={meta.sectionNav} deepLinks={[...meta.deepLinks]} clusterTitle="Quick tools" />;

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd headline={meta.hero.pageTitle} description={meta.seo.description} dateModified={DATE_MODIFIED} urlPath={CANONICAL} />
      <FaqPageJsonLd url={shareUrl} items={meta.faq.map((item) => ({ q: item.q, a: item.a.replace(/\*\*/g, "") }))} />

      <GuidePageTemplate
        mainStackClassName="mt-2 space-y-4 py-6 sm:mt-3 sm:space-y-5 md:space-y-6 md:py-8"
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
                  <Link href={taxGuideRoutes.moneyTools} className="transition-colors hover:text-foreground">
                    Money
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <span className="text-foreground" aria-current="page">
                    Tax Residency in the Netherlands
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={meta.hero.subtitle}
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,min(100%,380px))] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="order-2 min-w-0 md:order-1">
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
                          <BoldParagraph text={bullet} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
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
                    <div className="mt-4 rounded-xl border border-border/80 bg-surface-muted/40 px-3.5 py-2.5 text-xs leading-relaxed text-foreground-muted ring-1 ring-border/50 sm:text-sm">
                      <BoldParagraph text={meta.hero.trustLine} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                    </div>
                    <p className="mt-4 text-sm text-foreground-muted">
                      Connecting permits to money? See{" "}
                      <Link href={taxGuideRoutes.workingNl} className="font-semibold text-link hover:underline">
                        Working in the Netherlands
                      </Link>
                      ,{" "}
                      <Link href="/netherlands/moving/visas-residency/" className="font-semibold text-link hover:underline">
                        Visas & residency
                      </Link>
                      , and{" "}
                      <Link href="/netherlands/moving/residence-permits/" className="font-semibold text-link hover:underline">
                        Residence permits
                      </Link>
                      .
                    </p>
                  </div>
                  <TaxResidencyNlHeroGraphic
                    alt={meta.ogImage.alt}
                    className="order-1 w-full min-w-0 shrink-0 md:order-2 md:justify-self-end"
                  />
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
                "relative overflow-hidden rounded-2xl border border-border/55 bg-gradient-to-b from-surface-muted/45 via-surface-raised to-surface-muted/30 p-6 shadow-sm ring-1 ring-border/20 sm:p-7"
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
              <h2 className="text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{meta.atAGlance.sectionTitle}</h2>
              <BoldParagraph
                text={meta.atAGlance.subtitle}
                className={cn(
                  movingNlSectionSubtitleClass,
                  "mt-2 text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                )}
              />
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
          <MoveGuideSectionPanel className="min-w-0 max-w-full">
          <PillarJourneyStack variant="guide" density="compact" className="gap-7 sm:gap-8 md:gap-10">
            <MovePillarMobileToc items={meta.sectionNav} />

            <TaxConceptInfographic variant="tax-residency" className={SECTION_SCROLL_MARGIN} />

            <MoneyTaxLearningPath id="tax-learning-path" activeHref={TAX_RESIDENCY_NL_PATH} variant="full" className={SECTION_SCROLL_MARGIN} />

            <nav
              aria-label="Quick actions"
              className={cn(SECTION_SCROLL_MARGIN, "flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-2")}
            >
              {meta.quickActionStrip.map((a) => (
                <Link
                  key={`${a.href}-${a.label}`}
                  href={a.href}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl border border-brand/20 bg-brand/5 px-4 py-2.5 text-center text-sm font-semibold text-brand-strong shadow-sm ring-1 ring-brand/10 transition-colors hover:bg-brand/10 sm:w-auto sm:min-w-0 sm:px-3"
                >
                  {a.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              ))}
            </nav>

            <SectionBlock
              id={meta.startHere.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.startHere.eyebrow}
              title={meta.startHere.title}
              subtitle={meta.startHere.subtitle}
              subtitleMarkdown
            >
              <TaxResidencyFactsVsPermitFigure />
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {meta.startHere.cards.map((card) => (
                  <article
                    key={card.id}
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Orientation</p>
                    <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">{card.title}</h3>
                    <BoldParagraph
                      text={card.intro}
                      className="mt-2 text-[13px] leading-snug text-foreground-muted sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <ul className="mt-4 space-y-2 border-t border-border/70 pt-3 text-[13px] leading-snug text-foreground-muted sm:text-sm" role="list">
                      {card.keyPoints.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <BoldParagraph text={point} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.journeyFlow.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.journeyFlow.eyebrow}
              title={meta.journeyFlow.title}
              subtitle={meta.journeyFlow.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4">
                <TaxResidencyJourneyFlow steps={meta.journeyFlow.steps} />
              </div>
            </SectionBlock>

            <TaxResidencyVsPermitOrientationCard samePageDetailAnchor className={SECTION_SCROLL_MARGIN} />

            <SectionBlock
              id={meta.taxVsImmigration.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.taxVsImmigration.eyebrow}
              title={meta.taxVsImmigration.title}
              subtitle={meta.taxVsImmigration.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch sm:gap-2">
                <div className="rounded-2xl border border-brand/20 bg-brand/5 p-4 ring-1 ring-brand/10 sm:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">{meta.taxVsImmigration.prominentContrast.taxTitle}</p>
                  <BoldParagraph
                    text={meta.taxVsImmigration.prominentContrast.taxScan}
                    className="mt-2 text-sm font-semibold text-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                </div>
                <div
                  className="hidden items-center justify-center px-1 text-2xl font-bold text-foreground-muted sm:flex"
                  aria-hidden
                >
                  ≠
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 ring-1 ring-slate-900/[0.05] sm:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600">{meta.taxVsImmigration.prominentContrast.immTitle}</p>
                  <BoldParagraph
                    text={meta.taxVsImmigration.prominentContrast.immScan}
                    className="mt-2 text-sm font-semibold text-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-xs font-semibold text-foreground-muted sm:hidden" aria-hidden>
                Two different systems
              </p>
              <BoldParagraph
                text={meta.taxVsImmigration.intro}
                className="mt-4 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {meta.taxVsImmigration.comparison.map((c) => (
                  <MovePillarLifecycleCard key={c.id} className="h-full">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{c.concept}</p>
                    <BoldParagraph
                      text={c.plainEnglishExplanation}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">What it does</p>
                    <BoldParagraph
                      text={c.whatItDoes}
                      className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">What it does not decide</p>
                    <BoldParagraph
                      text={c.whatItDoesNotDecide}
                      className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    {c.relatedResolved.length > 0 ? (
                      <div className="mt-4 border-t border-border/70 pt-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Related</p>
                        <ul className="mt-2 flex flex-col gap-1.5 text-sm font-semibold text-link" role="list">
                          {c.relatedResolved.map((link) => (
                            <li key={`${c.id}-${link.href}`}>
                              <Link href={link.href} className="inline-flex items-center gap-1 hover:underline">
                                {link.label}
                                <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </MovePillarLifecycleCard>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.influences.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.influences.eyebrow}
              title={meta.influences.title}
              subtitle={meta.influences.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {meta.influences.cards.map((c) => (
                  <article
                    key={c.id}
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{c.title}</h3>
                    <BoldParagraph
                      text={c.body}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <div className="mt-4 border-t border-border/70 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Examples</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-foreground-muted" role="list">
                        {c.examples.map((example) => (
                          <li key={example} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.whyItMatters.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.whyItMatters.eyebrow}
              title={meta.whyItMatters.title}
              subtitle={meta.whyItMatters.subtitle}
              subtitleMarkdown
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {meta.whyItMatters.cards.map((card) => (
                  <article
                    key={card.id}
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{card.title}</h3>
                    <BoldParagraph
                      text={card.body}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <div className="mt-4 rounded-xl border border-brand/15 bg-brand/[0.05] px-3 py-3 ring-1 ring-brand/10">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Impact</p>
                      <BoldParagraph
                        text={card.impact}
                        className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </div>
                    <div className="mt-4 border-t border-border/70 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Examples</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-foreground-muted" role="list">
                        {card.examples.map((example) => (
                          <li key={example} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 border-t border-border/70 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Next reads</p>
                      <ul className="mt-2 flex flex-col gap-2 text-sm font-semibold text-link" role="list">
                        {card.links.map((link) => (
                          <li key={link.href}>
                            <Link href={link.href} className="inline-flex items-center gap-1 hover:underline">
                              {link.label}
                              <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.signalsWorthChecking.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.signalsWorthChecking.eyebrow}
              title={meta.signalsWorthChecking.title}
              subtitle={meta.signalsWorthChecking.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4 grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                {meta.signalsWorthChecking.cards.map((card) => {
                  const caution = SIGNAL_CAUTION_UI[card.caution];
                  const moreTools = card.toolLinks.filter((l) => l.href !== card.related.href);
                  const moreServices = card.serviceLinks.filter((l) => l.href !== card.related.href);
                  return (
                    <article
                      key={card.id}
                      className={cn(
                        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                        movingNlCardMicroLiftClass
                      )}
                    >
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                        <h3 className="text-base font-semibold tracking-tight text-foreground sm:min-w-0 sm:flex-1">{card.title}</h3>
                        <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                          <span
                            className={cn(
                              "inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em]",
                              caution.chipClass
                            )}
                          >
                            {caution.label}
                          </span>
                          <span className="max-w-[14rem] text-right text-[10px] leading-snug text-foreground-muted sm:max-w-[11rem]">
                            {caution.detail}
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Why it can matter</p>
                      <BoldParagraph
                        text={card.whyItMatters}
                        className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Recommended next step</p>
                      <BoldParagraph
                        text={card.nextStep}
                        className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                      <div className="mt-4 space-y-3 border-t border-border/70 pt-3">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Primary next link</p>
                          <Link
                            href={card.related.href}
                            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-link hover:underline"
                          >
                            {card.related.label}
                            <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                          </Link>
                        </div>
                        {moreTools.length > 0 ? (
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">More Money tools</p>
                            <ul className="mt-2 flex flex-col gap-1.5 text-sm font-semibold text-link" role="list">
                              {moreTools.map((l) => (
                                <li key={`${card.id}-tool-${l.href}`}>
                                  <Link href={l.href} className="inline-flex items-center gap-1 hover:underline">
                                    {l.label}
                                    <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        {moreServices.length > 0 ? (
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Services directory</p>
                            <ul className="mt-2 flex flex-col gap-1.5 text-sm font-semibold text-link" role="list">
                              {moreServices.map((l) => (
                                <li key={`${card.id}-svc-${l.href}`}>
                                  <Link href={l.href} className="inline-flex items-center gap-1 hover:underline">
                                    {l.label}
                                    <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </article>
                  );
                })}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.arrivalDeparture.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.arrivalDeparture.eyebrow}
              title={meta.arrivalDeparture.title}
              subtitle={meta.arrivalDeparture.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.arrivalDeparture.intro}
                className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {meta.arrivalDeparture.cards.map((c) => (
                  <article
                    key={c.id}
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{c.title}</h3>
                    <BoldParagraph
                      text={c.body}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <div className="mt-4 rounded-xl border border-brand/15 bg-brand/[0.05] px-3 py-3 ring-1 ring-brand/10">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Impact</p>
                      <BoldParagraph
                        text={c.impact}
                        className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </div>
                    <div className="mt-4 border-t border-border/70 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Examples</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-foreground-muted" role="list">
                        {c.examples.map((example) => (
                          <li key={example} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.crossBorder.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.crossBorder.eyebrow}
              title={meta.crossBorder.title}
              subtitle={meta.crossBorder.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {meta.crossBorder.cards.map((c) => (
                  <article
                    key={c.id}
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{c.title}</h3>
                    <BoldParagraph
                      text={c.body}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <div className="mt-4 rounded-xl border border-brand/15 bg-brand/[0.05] px-3 py-3 ring-1 ring-brand/10">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Impact</p>
                      <BoldParagraph
                        text={c.impact}
                        className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </div>
                    <div className="mt-4 border-t border-border/70 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Examples</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-foreground-muted" role="list">
                        {c.examples.map((example) => (
                          <li key={example} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Try next</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {meta.crossBorder.ctas.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand/20 bg-brand/5 px-3 py-2 text-center text-sm font-semibold text-brand-strong hover:bg-brand/10"
                  >
                    {c.label}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </Link>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.doubleTaxSection.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.doubleTaxSection.eyebrow}
              title={meta.doubleTaxSection.title}
              subtitle={meta.doubleTaxSection.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.doubleTaxSection.body}
                className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-4 rounded-xl border border-brand/15 bg-brand/[0.05] px-4 py-3 ring-1 ring-brand/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Impact</p>
                <BoldParagraph
                  text={meta.doubleTaxSection.impact}
                  className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-border/80 bg-surface-raised p-4 shadow-sm ring-1 ring-border/20">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Examples</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-foreground-muted" role="list">
                    {meta.doubleTaxSection.examples.map((example) => (
                      <li key={example} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface-raised p-4 shadow-sm ring-1 ring-border/20">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">What to prepare</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-foreground-muted" role="list">
                    {meta.doubleTaxSection.checks.map((check) => (
                      <li key={check} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" aria-hidden />
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={meta.doubleTaxSection.cta.href} className={primaryCtaClass}>
                  {meta.doubleTaxSection.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-link">
                  <Link href={taxGuideRoutes.expatTaxesGuide} className="hover:underline">
                    Read expat taxes guide →
                  </Link>
                  <Link href={taxGuideRoutes.payslip} className="hover:underline">
                    Decode payslip →
                  </Link>
                  <Link href={taxGuideRoutes.salaryNet} className="hover:underline">
                    Estimate net salary →
                  </Link>
                </div>
              </div>
            </SectionBlock>

            <section id={meta.misunderstandings.id} className={cn(SECTION_SCROLL_MARGIN, "space-y-5 pt-2 sm:space-y-6 md:pt-3")}>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{meta.misunderstandings.eyebrow}</p>
                <h2 className={moveMisunderstandingSectionTitleClass}>{meta.misunderstandings.title}</h2>
                <BoldParagraph
                  text={meta.misunderstandings.subtitle}
                  className={cn(
                    moveMisunderstandingSectionSubtitleClass,
                    "mt-2 max-w-3xl [&_strong]:font-semibold [&_strong]:text-foreground"
                  )}
                />
              </div>
              <MoveMisunderstandingCardGrid
                rows={meta.misunderstandings.rows.map((r) => ({
                  id: r.id,
                  title: r.title,
                  body: <BoldParagraph text={r.body} className="[&_strong]:font-semibold [&_strong]:text-slate-800" />,
                }))}
              />
            </section>
          </PillarJourneyStack>
          </MoveGuideSectionPanel>
        }
        tools={
          <PillarGuideToolsSection
            id={meta.toolsShell.id}
            title={meta.toolsShell.title}
            subtitle={meta.toolsShell.subtitle}
            compact
            gridClassName="!grid max-w-none grid-cols-1 gap-0"
          >
            <div className="col-span-full flex flex-col gap-4 sm:gap-5">
              <TaxClusterToolsSection showGuideLink showLearningPath={false} id="tax-tools-cluster" />

              <SectionBlock
                id={meta.servicesRegion.id}
                className={SECTION_SCROLL_MARGIN}
                compact
                eyebrow={meta.servicesRegion.eyebrow}
                title={meta.servicesRegion.title}
                subtitle={meta.servicesRegion.subtitle}
                subtitleMarkdown
              >
                <div className="mb-4 rounded-xl border border-border/80 bg-surface-muted/50 px-4 py-3 text-sm text-foreground-muted ring-1 ring-border/40">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">When tax help can fit</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5" role="list">
                    {meta.servicesRegion.whenHelpBullets.map((b) => (
                      <li key={b}>
                        <BoldParagraph text={b} className="inline [&_strong]:font-semibold [&_strong]:text-foreground" />
                      </li>
                    ))}
                  </ul>
                </div>
                <MoveGuideAffiliateSupportBlock
                  placementId={meta.affiliatePlacementId}
                  categoryLinks={[]}
                  hidePlacementTitle
                />
              </SectionBlock>

              <SectionBlock
                id={meta.whatNext.id}
                className={SECTION_SCROLL_MARGIN}
                compact
                eyebrow={meta.whatNext.eyebrow}
                title={meta.whatNext.title}
                subtitle={meta.whatNext.subtitle}
                subtitleMarkdown
              >
                <NextSteps
                  variant="progression"
                  compact
                  movingHubPremium
                  suppressChrome
                  maxItems={12}
                  items={meta.whatNext.steps.map((s) => ({
                    label: s.label,
                    href: s.href,
                    description: s.description,
                  }))}
                />
              </SectionBlock>

              <SectionBlock
                id={meta.continueCards.id}
                className={SECTION_SCROLL_MARGIN}
                compact
                eyebrow={meta.continueCards.eyebrow}
                title={meta.continueCards.title}
                subtitle={meta.continueCards.subtitle}
                subtitleMarkdown
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {meta.continueCards.cards.map((card) => (
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

            </div>
          </PillarGuideToolsSection>
        }
        faq={
          <PillarGuideFaqRegion>
            <div className={cn(movingNlFaqCardInnerClass, SECTION_SCROLL_MARGIN)}>
              <FAQBlock id="faq" eyebrow="Support" title="Frequently asked questions" items={[...meta.faq]} maxItems={12} />
            </div>
            <details
              id="official-sources"
              className={cn(
                "group",
                movingNlFaqCardInnerClass,
                SECTION_SCROLL_MARGIN,
                "!mt-4 rounded-2xl border border-border/70 bg-surface-muted/30 p-4 ring-1 ring-border/40 sm:p-5"
              )}
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="inline-flex items-center gap-2">
                  Show official sources (Belastingdienst &amp; related)
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90" aria-hidden />
                </span>
              </summary>
              <div className="mt-4 border-t border-border/60 pt-4">
                <VisasResidencyOfficialSources references={meta.references} density="compact" className="!mt-0" omitSectionId />
              </div>
            </details>
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
