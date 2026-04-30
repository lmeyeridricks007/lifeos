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
import {
  MoveMisunderstandingCardGrid,
  moveMisunderstandingSectionSubtitleClass,
  moveMisunderstandingSectionTitleClass,
} from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { MovePillarExploreGrid } from "@/src/components/moving/MovePillarExploreGrid";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { MoneyTaxLearningPath } from "@/src/components/money/tax-cluster/MoneyTaxLearningPath";
import { MoneyTaxSystemFoundationPromo } from "@/src/components/money/MoneyTaxSystemFoundationPromo";
import { PairedMoneyTaxGuidesCrossLink } from "@/src/components/money/PairedMoneyTaxGuidesCrossLink";
import { TaxClusterToolsSection } from "@/src/components/money/tax-cluster/TaxClusterToolsSection";
import {
  TaxExpatScenarioLanesFigure,
  TaxMoneyFlowPipelineFigure,
} from "@/src/components/money/tax-cluster/TaxInstructionalFigures";
import {
  EXPAT_TAXES_NL_PATH,
  expatTaxesNlExploreCards,
  expatTaxesNlPageModel as meta,
  expatTaxesNlRoutes,
} from "./expatTaxesNlPageModel";
import { TaxGuideForExpatsHeroGraphic } from "@/src/components/money/tax-guide-for-expats/TaxGuideForExpatsHeroGraphic";
import { ExpatTaxJourneyFlow } from "./ExpatTaxJourneyFlow";
import { TaxGuideStartingPointSelector } from "@/src/components/money/tax-guide-for-expats/TaxGuideStartingPointSelector";

const CANONICAL = meta.path;
const DATE_MODIFIED = meta.publishDate;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const TIGHT = `${SECTION_SCROLL_MARGIN} !pt-3 sm:!pt-4`;
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

const SECTION_BODY_MUTED =
  "text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground";

function SectionBodyParagraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <>
      {paragraphs.map((text, i) => (
        <BoldParagraph key={i} text={text} className={cn(SECTION_BODY_MUTED, i > 0 && "mt-3")} />
      ))}
    </>
  );
}

const EARLY_SIGNAL_CAUTION: Record<
  "low" | "medium" | "high",
  { label: string; chipClass: string }
> = {
  low: {
    label: "Usually routine",
    chipClass: "border-emerald-200/80 bg-emerald-50/90 text-emerald-950",
  },
  medium: {
    label: "Often worth mapping",
    chipClass: "border-amber-200/80 bg-amber-50/90 text-amber-950",
  },
  high: {
    label: "Plan paperwork early",
    chipClass: "border-slate-200 bg-slate-50 text-slate-800",
  },
};

export function ExpatTaxesNlView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Money", item: new URL(expatTaxesNlRoutes.moneyTools, baseUrl).toString() },
    { name: "Expat Taxes in the Netherlands", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = <MovePillarSectionNav items={meta.sectionNav} deepLinks={[...meta.deepLinks]} clusterTitle="Quick tools" />;

  const sectionLinks = (links: readonly { href: string; label: string }[]) => (
    <ul className="mt-4 flex flex-col gap-2 text-sm font-semibold sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2" role="list">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="text-link hover:underline">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd headline={meta.hero.pageTitle} description={meta.seo.description} dateModified={DATE_MODIFIED} urlPath={CANONICAL} />
      <FaqPageJsonLd url={shareUrl} items={meta.faq.map((item) => ({ q: item.q, a: item.a.replace(/\*\*/g, "") }))} />

      <GuidePageTemplate
        mainStackClassName="mt-2 space-y-2 sm:mt-3 sm:space-y-3 md:space-y-4"
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
                  <Link href={expatTaxesNlRoutes.moneyTools} className="transition-colors hover:text-foreground">
                    Money
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <span className="text-foreground" aria-current="page">
                    Expat Taxes in the Netherlands
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
                    <nav
                      aria-label="Key tax tools"
                      className="mt-4 flex max-w-2xl flex-col gap-2 border-t border-border/60 pt-4 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-1.5"
                    >
                      {meta.hero.quickToolLinks.map((l, idx) => (
                        <Link
                          key={`${l.href}-${l.label}-${idx}`}
                          href={l.href}
                          className="text-sm font-semibold text-link underline-offset-2 hover:underline"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </nav>
                    <p className="mt-4 text-sm text-foreground-muted">
                      Start from the system map if that fits your brain better — the callout below links to the{" "}
                      <Link href={expatTaxesNlRoutes.taxGuideBroad} className="font-semibold text-link hover:underline">
                        Netherlands Tax Guide for Expats
                      </Link>
                      , then come back here for scenario lanes.
                    </p>
                  </div>
                  <TaxGuideForExpatsHeroGraphic
                    image={meta.heroImage}
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
                "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-6 shadow-expatos-lg ring-1 ring-copilot-primary/[0.07] sm:p-7"
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
          <PillarJourneyStack variant="guide" density="compact" className="gap-1 sm:gap-2 md:gap-2.5">
            <MovePillarMobileToc items={meta.sectionNav} />

            <section
              className={cn(
                SECTION_SCROLL_MARGIN,
                "rounded-2xl border border-brand/15 bg-gradient-to-br from-brand-muted/35 via-surface-raised to-copilot-bg-soft/40 p-4 shadow-card ring-1 ring-border/10 sm:p-6"
              )}
              aria-labelledby="expat-tax-reassurance-heading"
            >
              <h2 id="expat-tax-reassurance-heading" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {meta.reassurance.title}
              </h2>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong">{meta.reassurance.eyebrow}</p>
              <BoldParagraph
                text={meta.reassurance.body}
                className="mt-3 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
            </section>

            <div
              id={meta.trustPanel.id}
              className={cn(
                SECTION_SCROLL_MARGIN,
                "rounded-2xl border border-slate-200/90 bg-slate-50/90 p-4 ring-1 ring-slate-900/[0.04] sm:p-5"
              )}
              role="region"
              aria-labelledby="expat-tax-trust-panel-heading"
            >
              <h2 id="expat-tax-trust-panel-heading" className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                {meta.trustPanel.title}
              </h2>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
                {meta.trustPanel.callouts.map((c) => (
                  <div key={c.id} className="rounded-xl border border-border/70 bg-white/95 p-3.5 shadow-sm sm:min-h-0 sm:p-4">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong">{c.label}</h3>
                    <BoldParagraph
                      text={c.body}
                      className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    {"link" in c && c.link ? (
                      <p className="mt-2">
                        <Link href={c.link.href} className="text-xs font-semibold text-link hover:underline sm:text-sm">
                          {c.link.label} →
                        </Link>
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-border/60 bg-white/60 px-3 py-2.5 sm:px-4">
                <BoldParagraph
                  text={meta.officialSourcesHint}
                  className="text-xs leading-relaxed text-foreground-muted sm:text-sm [&_strong]:font-semibold [&_strong]:text-foreground"
                />
              </div>
            </div>

            <MoneyTaxSystemFoundationPromo variant="from-expat-taxes" />
            <MoneyTaxLearningPath id="tax-learning-path" activeHref={EXPAT_TAXES_NL_PATH} variant="full" className={SECTION_SCROLL_MARGIN} />
            <PairedMoneyTaxGuidesCrossLink variant="expat-to-tax-guide" />

            <MovePillarJourneyBridge
              id={meta.pillarBridge.id}
              eyebrow={meta.pillarBridge.eyebrow}
              title={meta.pillarBridge.title}
              intro={meta.pillarBridge.intro}
              linksDescriptionMarkdown
              links={meta.pillarBridge.links.map((l) => ({ ...l }))}
            />

            <SectionBlock
              id={meta.startHere.id}
              className={TIGHT}
              eyebrow={meta.startHere.eyebrow}
              title={meta.startHere.title}
              subtitle={meta.startHere.subtitle}
              subtitleMarkdown
            >
              <TaxMoneyFlowPipelineFigure />
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
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Start here</p>
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
              className={TIGHT}
              eyebrow={meta.journeyFlow.eyebrow}
              title={meta.journeyFlow.title}
              subtitle={meta.journeyFlow.subtitle}
              subtitleMarkdown
            >
              <TaxExpatScenarioLanesFigure />
              <ExpatTaxJourneyFlow />
            </SectionBlock>

            <SectionBlock
              id={meta.startingPoint.id}
              className={TIGHT}
              eyebrow={meta.startingPoint.eyebrow}
              title={meta.startingPoint.title}
              subtitle={meta.startingPoint.subtitle}
              subtitleMarkdown
            >
              <TaxGuideStartingPointSelector scenarios={meta.startingPoint.scenarios} />
            </SectionBlock>

            <SectionBlock
              id={meta.earlyTaxSignals.id}
              className={TIGHT}
              eyebrow={meta.earlyTaxSignals.eyebrow}
              title={meta.earlyTaxSignals.title}
              subtitle={meta.earlyTaxSignals.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.earlyTaxSignals.intro}
                className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
                {meta.earlyTaxSignals.cards.map((card) => {
                  const caution = EARLY_SIGNAL_CAUTION[card.cautionLevel];
                  return (
                    <article
                      key={card.id}
                      className={cn(
                        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                        movingNlCardMicroLiftClass
                      )}
                    >
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <h3 className="min-w-0 flex-1 text-base font-semibold tracking-tight text-foreground">{card.title}</h3>
                        <span
                          className={cn(
                            "shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em]",
                            caution.chipClass
                          )}
                        >
                          {caution.label}
                        </span>
                      </div>
                      <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Why it matters</p>
                      <BoldParagraph
                        text={card.whyItMatters}
                        className="mt-1 text-[13px] leading-snug text-foreground-muted sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-copilot-text-muted">Recommended next step</p>
                      <BoldParagraph
                        text={card.recommendedNextStep}
                        className="mt-1 text-[13px] leading-snug text-foreground-muted sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                      <p className="mt-4 border-t border-border/70 pt-3">
                        <Link href={card.related.href} className="text-sm font-semibold text-link hover:underline">
                          {card.related.label} →
                        </Link>
                      </p>
                    </article>
                  );
                })}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.employment.id}
              className={TIGHT}
              eyebrow={meta.employment.eyebrow}
              title={meta.employment.title}
              subtitle={meta.employment.subtitle}
              subtitleMarkdown
            >
              <SectionBodyParagraphs paragraphs={meta.employment.bodyParagraphs} />
              <ul className="mt-3 space-y-2 border-l-2 border-brand/25 pl-3 text-sm text-foreground-muted" role="list">
                {meta.employment.scannablePoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={p} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              {sectionLinks(meta.employment.links)}
            </SectionBlock>

            <SectionBlock
              id={meta.thirtyPercent.id}
              className={TIGHT}
              eyebrow={meta.thirtyPercent.eyebrow}
              title={meta.thirtyPercent.title}
              subtitle={meta.thirtyPercent.subtitle}
              subtitleMarkdown
            >
              <SectionBodyParagraphs paragraphs={meta.thirtyPercent.bodyParagraphs} />
              <ul className="mt-3 space-y-2 border-l-2 border-brand/25 pl-3 text-sm text-foreground-muted" role="list">
                {meta.thirtyPercent.scannablePoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={p} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              {sectionLinks(meta.thirtyPercent.links)}
            </SectionBlock>

            <SectionBlock
              id={meta.foreignBox3.id}
              className={TIGHT}
              eyebrow={meta.foreignBox3.eyebrow}
              title={meta.foreignBox3.title}
              subtitle={meta.foreignBox3.subtitle}
              subtitleMarkdown
            >
              {meta.foreignBox3.memoryHook ? (
                <div className="rounded-xl border border-brand/15 bg-brand-muted/25 px-4 py-3 ring-1 ring-brand/10 sm:px-5 sm:py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Plain-language hook</p>
                  <BoldParagraph
                    text={meta.foreignBox3.memoryHook}
                    className="mt-2 text-sm leading-relaxed text-foreground [&_strong]:font-semibold"
                  />
                </div>
              ) : null}
              <div className="mt-4">
                <SectionBodyParagraphs paragraphs={meta.foreignBox3.bodyParagraphs} />
              </div>
              <ul className="mt-3 space-y-2 border-l-2 border-brand/25 pl-3 text-sm text-foreground-muted" role="list">
                {meta.foreignBox3.scannablePoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={p} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              {sectionLinks(meta.foreignBox3.links)}
            </SectionBlock>

            <SectionBlock
              id={meta.partialYear.id}
              className={TIGHT}
              eyebrow={meta.partialYear.eyebrow}
              title={meta.partialYear.title}
              subtitle={meta.partialYear.subtitle}
              subtitleMarkdown
            >
              <SectionBodyParagraphs paragraphs={meta.partialYear.bodyParagraphs} />
              <ul className="mt-3 space-y-2 border-l-2 border-brand/25 pl-3 text-sm text-foreground-muted" role="list">
                {meta.partialYear.scannablePoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={p} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              {sectionLinks(meta.partialYear.links)}
            </SectionBlock>

            <SectionBlock
              id={meta.familyAllowances.id}
              className={TIGHT}
              eyebrow={meta.familyAllowances.eyebrow}
              title={meta.familyAllowances.title}
              subtitle={meta.familyAllowances.subtitle}
              subtitleMarkdown
            >
              <SectionBodyParagraphs paragraphs={meta.familyAllowances.bodyParagraphs} />
              <ul className="mt-3 space-y-2 border-l-2 border-brand/25 pl-3 text-sm text-foreground-muted" role="list">
                {meta.familyAllowances.scannablePoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={p} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              {sectionLinks(meta.familyAllowances.links)}
            </SectionBlock>

            <SectionBlock
              id={meta.doubleTax.id}
              className={TIGHT}
              eyebrow={meta.doubleTax.eyebrow}
              title={meta.doubleTax.title}
              subtitle={meta.doubleTax.subtitle}
              subtitleMarkdown
            >
              <SectionBodyParagraphs paragraphs={meta.doubleTax.bodyParagraphs} />
              <ul className="mt-3 space-y-2 border-l-2 border-brand/25 pl-3 text-sm text-foreground-muted" role="list">
                {meta.doubleTax.scannablePoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={p} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              {sectionLinks(meta.doubleTax.links)}
            </SectionBlock>

            <section id={meta.misunderstandings.id} className={cn(SECTION_SCROLL_MARGIN, "space-y-3 sm:space-y-3")}>
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
        }
        tools={
          <PillarGuideToolsSection
            id={meta.toolsShell.id}
            title={meta.toolsShell.title}
            subtitle={meta.toolsShell.subtitle}
            subtitleMarkdown
            compact
            gridClassName="!grid max-w-none grid-cols-1 gap-0"
          >
            <div className="col-span-full flex flex-col gap-4 sm:gap-5">
              <TaxClusterToolsSection showGuideLink />

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

              <MovePillarExploreGrid cards={expatTaxesNlExploreCards} title="Explore related hubs" excludeHref={CANONICAL} descriptionMarkdown />

              <SectionBlock
                id={meta.helpfulTools.id}
                className={SECTION_SCROLL_MARGIN}
                compact
                eyebrow={meta.helpfulTools.eyebrow}
                title={meta.helpfulTools.title}
                subtitle={meta.helpfulTools.subtitle}
                subtitleMarkdown
              >
                {meta.helpfulTools.sections.map((section) => (
                  <div key={section.eyebrow} className="mt-6 first:mt-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{section.eyebrow}</p>
                    {section.description ? <p className="mt-1 max-w-3xl text-sm text-foreground-muted">{section.description}</p> : null}
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {section.items.map((tool) => (
                        <ToolCard
                          key={tool.href}
                          title={tool.title}
                          description={tool.description}
                          href={tool.href}
                          ctaLabel={tool.cta}
                          compact
                        />
                      ))}
                    </div>
                  </div>
                ))}
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
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

              <SectionBlock
                id={meta.servicesRegion.id}
                className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5")}
                compact
                eyebrow={meta.servicesRegion.eyebrow}
                title={meta.servicesRegion.title}
                subtitle={meta.servicesRegion.subtitle}
                subtitleMarkdown
              >
                <BoldParagraph text={meta.servicesRegion.intro} className={SECTION_BODY_MUTED} />
                <div className="mt-5">
                  <MoveGuideAffiliateSupportBlock
                    placementId={meta.affiliatePlacementId}
                    categoryLinks={[]}
                    hidePlacementTitle
                  />
                </div>
              </SectionBlock>
            </div>
          </PillarGuideToolsSection>
        }
        faq={
          <PillarGuideFaqRegion>
            <div className={cn(movingNlFaqCardInnerClass, SECTION_SCROLL_MARGIN)}>
              <FAQBlock id="faq" eyebrow="Support" title="Frequently asked questions" items={[...meta.faq]} maxItems={14} />
            </div>
            <VisasResidencyOfficialSources references={meta.references} density="compact" className="!mt-4 sm:!mt-5" />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
