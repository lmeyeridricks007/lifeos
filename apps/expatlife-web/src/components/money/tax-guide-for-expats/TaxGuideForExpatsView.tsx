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
import { MoveGuideAffiliateSupportBlock } from "@/src/components/moving/MoveGuideAffiliateSupportBlock";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { MoneyTaxLearningPath } from "@/src/components/money/tax-cluster/MoneyTaxLearningPath";
import { TaxConceptInfographic } from "@/src/components/money/tax-cluster/TaxConceptInfographic";
import { TaxClusterToolsSection } from "@/src/components/money/tax-cluster/TaxClusterToolsSection";
import {
  TaxMoneyFlowPipelineFigure,
  TaxYearActivityStripFigure,
} from "@/src/components/money/tax-cluster/TaxInstructionalFigures";
import { TAX_GUIDE_FOR_EXPATS_PATH } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import { taxGuideForExpatsPageModel as meta, taxGuideRoutes } from "./taxGuideForExpatsPageModel";
import { TaxGuideForExpatsHeroGraphic } from "./TaxGuideForExpatsHeroGraphic";
import { TaxGuideStartingPointSelector } from "./TaxGuideStartingPointSelector";
import { TaxJourneyFlow } from "./TaxJourneyFlow";

const CANONICAL = meta.path;
const DATE_MODIFIED = meta.publishDate;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const GUIDE_SECTION_SPACING = SECTION_SCROLL_MARGIN;
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

export function TaxGuideForExpatsView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Money", item: new URL(taxGuideRoutes.moneyTools, baseUrl).toString() },
    { name: "Netherlands Tax Guide for Expats", item: new URL(CANONICAL, baseUrl).toString() },
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
      <ArticleJsonLd
        headline={meta.hero.pageTitle}
        description={meta.seo.description}
        dateModified={DATE_MODIFIED}
        urlPath={CANONICAL}
      />
      <FaqPageJsonLd
        url={shareUrl}
        items={meta.faq.map((item) => ({ q: item.q, a: item.a.replace(/\*\*/g, "") }))}
      />

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
                    Netherlands Tax Guide for Expats
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
                    <p className="mt-4 text-sm text-foreground-muted">
                      New to Dutch payroll? Open the{" "}
                      <Link href={taxGuideRoutes.workingNl} className="font-semibold text-link hover:underline">
                        Working in the Netherlands
                      </Link>{" "}
                      guide for how offers, contracts, and first-month money connect.
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

            <TaxConceptInfographic variant="tax-guide" className={SECTION_SCROLL_MARGIN} />

            <MoneyTaxLearningPath id="tax-learning-path" activeHref={TAX_GUIDE_FOR_EXPATS_PATH} variant="full" className={SECTION_SCROLL_MARGIN} />

            <SectionBlock
              id={meta.startHere.id}
              className={GUIDE_SECTION_SPACING}
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
              id={meta.startingPoint.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.startingPoint.eyebrow}
              title={meta.startingPoint.title}
              subtitle={meta.startingPoint.subtitle}
              subtitleMarkdown
            >
              <TaxGuideStartingPointSelector scenarios={meta.startingPoint.scenarios} />
            </SectionBlock>

            <SectionBlock
              id={meta.howTaxWorks.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.howTaxWorks.eyebrow}
              title={meta.howTaxWorks.title}
              subtitle={meta.howTaxWorks.subtitle}
              subtitleMarkdown
            >
              <TaxYearActivityStripFigure />
              <MovePillarLifecycleCard className="max-w-none">
                <BoldParagraph
                  text={meta.howTaxWorks.intro}
                  className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
              </MovePillarLifecycleCard>
              <ul className="mt-4 space-y-2 text-sm text-foreground-muted" role="list">
                {meta.howTaxWorks.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" aria-hidden />
                    <BoldParagraph text={b} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl border border-border/80 bg-surface-muted/40 p-4 ring-1 ring-border/40 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Simple flow</p>
                <ol className="mt-3 flex flex-wrap items-center gap-2 text-[12px] font-semibold text-foreground sm:text-sm" role="list">
                  {meta.howTaxWorks.flowSteps.map((step, i) => (
                    <li key={step} className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-brand/15 px-2.5 py-1 text-brand-strong">{step}</span>
                      {i < meta.howTaxWorks.flowSteps.length - 1 ? (
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-foreground-faint" aria-hidden />
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.taxJourneyFlow.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.taxJourneyFlow.eyebrow}
              title={meta.taxJourneyFlow.title}
              subtitle={meta.taxJourneyFlow.subtitle}
              subtitleMarkdown
            >
              <TaxJourneyFlow steps={meta.taxJourneyFlow.steps} />
            </SectionBlock>

            <SectionBlock
              id={meta.salaryPayslips.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.salaryPayslips.eyebrow}
              title={meta.salaryPayslips.title}
              subtitle={meta.salaryPayslips.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.salaryPayslips.body}
                className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-3 space-y-2 border-l-2 border-brand/25 pl-3 text-sm text-foreground-muted" role="list">
                {meta.salaryPayslips.scannablePoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={p} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {meta.salaryPayslips.ctas.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-brand/20 bg-brand/5 px-4 py-2 text-sm font-semibold text-brand-strong hover:bg-brand/10"
                  >
                    {c.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.taxReturnBasics.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.taxReturnBasics.eyebrow}
              title={meta.taxReturnBasics.title}
              subtitle={meta.taxReturnBasics.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.taxReturnBasics.body}
                className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-3 space-y-2 border-l-2 border-brand/25 pl-3 text-sm text-foreground-muted" role="list">
                {meta.taxReturnBasics.scannablePoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={p} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.thirtyPercent.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.thirtyPercent.eyebrow}
              title={meta.thirtyPercent.title}
              subtitle={meta.thirtyPercent.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.thirtyPercent.body}
                className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-3 space-y-2 border-l-2 border-brand/25 pl-3 text-sm text-foreground-muted" role="list">
                {meta.thirtyPercent.scannablePoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={p} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold" role="list">
                {meta.thirtyPercent.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-link hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.allowances.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.allowances.eyebrow}
              title={meta.allowances.title}
              subtitle={meta.allowances.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.allowances.body}
                className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-3 space-y-2 border-l-2 border-brand/25 pl-3 text-sm text-foreground-muted" role="list">
                {meta.allowances.scannablePoints.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" aria-hidden />
                    <BoldParagraph text={p} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold" role="list">
                {meta.allowances.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-link hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.boxes.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.boxes.eyebrow}
              title={meta.boxes.title}
              subtitle={meta.boxes.subtitle}
              subtitleMarkdown
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {meta.boxes.cards.map((c) => (
                  <MovePillarLifecycleCard key={c.id} className="h-full">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{c.title}</p>
                    <BoldParagraph
                      text={c.body}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </MovePillarLifecycleCard>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm text-amber-950 ring-1 ring-amber-200/60">
                <BoldParagraph text={meta.boxes.warning} className="[&_strong]:font-semibold" />
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.doubleTax.id}
              className={GUIDE_SECTION_SPACING}
              eyebrow={meta.doubleTax.eyebrow}
              title={meta.doubleTax.title}
              subtitle={meta.doubleTax.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.doubleTax.body}
                className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold" role="list">
                {meta.doubleTax.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-link hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
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
            <div className="col-span-full flex flex-col gap-6">
              <TaxClusterToolsSection showGuideLink={false} />

              <SectionBlock
                id={meta.servicesRegion.id}
                className={SECTION_SCROLL_MARGIN}
                compact
                eyebrow={meta.servicesRegion.eyebrow}
                title={meta.servicesRegion.title}
                subtitle={meta.servicesRegion.subtitle}
                subtitleMarkdown
              >
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
                  maxItems={14}
                  items={meta.whatNext.steps.map((s) => ({
                    label: s.label,
                    href: s.href,
                    description: s.description,
                  }))}
                />
              </SectionBlock>

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
                <div className="grid gap-3 sm:grid-cols-2">
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
            <VisasResidencyOfficialSources references={meta.references} density="compact" />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
