import Image from "next/image";
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
import { TaxClusterToolsSection } from "@/src/components/money/tax-cluster/TaxClusterToolsSection";
import { THIRTY_PERCENT_RULING_NL_PATH, taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import {
  thirtyPercentRulingNlExploreCards,
  thirtyPercentRulingNlPageModel as meta,
} from "./thirtyPercentRulingNlPageModel";
import { AudienceTabs } from "./AudienceTabs";
import { ThirtyPercentRulingSalaryFlow } from "./ThirtyPercentRulingSalaryFlow";
import { UnderstandFirstThenCalculateCta } from "./UnderstandFirstThenCalculateCta";

const CANONICAL = meta.path;
const DATE_MODIFIED = meta.publishDate;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const TIGHT = `${SECTION_SCROLL_MARGIN} !pt-3 sm:!pt-4`;
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

export function ThirtyPercentRulingNlView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Money", item: new URL(taxGuideRoutes.moneyTools, baseUrl).toString() },
    { name: "Taxes", item: new URL(taxGuideRoutes.taxesHub, baseUrl).toString() },
    { name: "30% Ruling in the Netherlands", item: new URL(CANONICAL, baseUrl).toString() },
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
        mainStackClassName="mt-2 space-y-1.5 sm:mt-2.5 sm:space-y-2 md:space-y-2.5"
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
                  <Link href={taxGuideRoutes.taxesHub} className="transition-colors hover:text-foreground">
                    Taxes
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <span className="text-foreground" aria-current="page">
                    30% Ruling
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
                    <div className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-2.5">
                      {meta.hero.trustNotes.map((note) => (
                        <div
                          key={note}
                          className="rounded-xl border border-border/80 bg-surface-muted/40 px-3 py-2.5 text-xs leading-relaxed text-foreground-muted ring-1 ring-border/50 sm:text-sm"
                        >
                          <BoldParagraph text={note} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-foreground-muted">
                      First months and payroll context? See{" "}
                      <Link href={taxGuideRoutes.workingNl} className="font-semibold text-link hover:underline">
                        Working in the Netherlands
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="relative order-1 w-full min-w-0 shrink-0 overflow-hidden rounded-2xl shadow-expatos-md ring-1 ring-slate-900/[0.06] md:order-2 md:max-w-[420px] md:justify-self-end lg:max-w-[440px]">
                    <Image
                      src={meta.ogImage.src}
                      alt={meta.ogImage.alt}
                      width={meta.ogImage.width}
                      height={meta.ogImage.height}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 440px"
                      priority
                    />
                  </div>
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
          <PillarJourneyStack variant="guide" density="compact" className="gap-1.5 sm:gap-2 md:gap-2.5">
            <MovePillarMobileToc items={meta.sectionNav} />

            <div
              id={meta.trustPanel.id}
              className={cn(
                SECTION_SCROLL_MARGIN,
                "rounded-2xl border border-slate-200/90 bg-slate-50/90 p-4 ring-1 ring-slate-900/[0.04] sm:p-5"
              )}
              role="region"
              aria-labelledby="tpr-trust-heading"
            >
              <h2 id="tpr-trust-heading" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {meta.trustPanel.title}
              </h2>
              <BoldParagraph
                text={meta.trustPanel.intro}
                className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3">
                {meta.trustPanel.callouts.map((c) => (
                  <div key={c.id} className="rounded-xl border border-border/70 bg-white/95 p-3.5 shadow-sm sm:p-4">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong">{c.label}</h3>
                    <BoldParagraph
                      text={c.body}
                      className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-foreground-muted sm:text-sm">
                <span className="text-foreground-muted">Authoritative links: </span>
                <Link href="#official-sources" className="font-semibold text-link underline-offset-2 hover:underline">
                  expand official sources
                </Link>
                <span className="text-foreground-muted"> (below the FAQ — collapsed by default).</span>
              </p>
            </div>

            <MoneyTaxLearningPath id="tax-learning-path" activeHref={THIRTY_PERCENT_RULING_NL_PATH} variant="full" className={SECTION_SCROLL_MARGIN} />

            <nav
              id="quick-actions"
              aria-label="Quick actions"
              className={cn(SECTION_SCROLL_MARGIN, "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2")}
            >
              {meta.quickActionStrip.map((a) => (
                <Link
                  key={`${a.href}-${a.label}`}
                  href={a.href}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-xl border border-brand/20 bg-brand/5 px-4 py-2.5 text-center text-sm font-semibold text-brand-strong shadow-sm ring-1 ring-brand/10 transition-colors hover:bg-brand/10"
                >
                  {a.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              ))}
            </nav>

            <UnderstandFirstThenCalculateCta variant="guide" className={SECTION_SCROLL_MARGIN} />

            <MovePillarJourneyBridge
              id={meta.pillarBridge.id}
              eyebrow={meta.pillarBridge.eyebrow}
              title={meta.pillarBridge.title}
              intro={meta.pillarBridge.intro}
              linksDescriptionMarkdown
              links={meta.pillarBridge.links.map((l) => ({ ...l }))}
            />

            <SectionBlock
              id={meta.startingPoint.id}
              className={TIGHT}
              eyebrow={meta.startingPoint.eyebrow}
              title={meta.startingPoint.title}
              subtitle={meta.startingPoint.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.startingPoint.intro}
                className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3">
                {meta.startingPoint.scenarios.map((card) => (
                  <article
                    key={card.id}
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Situation</p>
                    <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">{card.situation}</h3>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Why it matters</p>
                    <BoldParagraph
                      text={card.whyItMatters}
                      className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Next action</p>
                    <BoldParagraph
                      text={card.nextAction}
                      className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <div className="mt-4 border-t border-border/70 pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Open next</p>
                      <ul className="mt-2 flex flex-col gap-2" role="list">
                        {card.links.map((lnk) => (
                          <li key={`${card.id}-${lnk.href}`}>
                            <Link href={lnk.href} className="inline-flex items-center gap-1 text-sm font-semibold text-link hover:underline">
                              {lnk.label}
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
              id={meta.startHere.id}
              className={TIGHT}
              eyebrow={meta.startHere.eyebrow}
              title={meta.startHere.title}
              subtitle={meta.startHere.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.startHere.intro}
                className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                {meta.startHere.cards.map((card) => (
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
                      className="mt-2 text-[13px] leading-snug text-foreground-muted sm:text-sm sm:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </article>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.howItWorks.id}
              className={TIGHT}
              eyebrow={meta.howItWorks.eyebrow}
              title={meta.howItWorks.title}
              subtitle={meta.howItWorks.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.howItWorks.intro}
                className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-foreground-muted" role="list">
                {meta.howItWorks.bullets.map((b) => (
                  <li key={b}>
                    <BoldParagraph text={b} className="inline [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Typical flow</p>
              <ol className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
                {meta.howItWorks.flowSteps.map((step, idx) => (
                  <li
                    key={step.id}
                    className={cn(
                      "relative flex flex-col rounded-xl border border-border/80 bg-surface-muted/40 p-3.5 ring-1 ring-border/40",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">
                      {idx + 1}. {step.title}
                    </span>
                    <BoldParagraph
                      text={step.body}
                      className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Related tools</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {meta.howItWorks.ctas.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand/20 bg-brand/5 px-3 py-2 text-sm font-semibold text-brand-strong hover:bg-brand/10"
                  >
                    {c.label}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </Link>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.salaryFlow.id}
              className={TIGHT}
              eyebrow={meta.salaryFlow.eyebrow}
              title={meta.salaryFlow.title}
              subtitle={meta.salaryFlow.subtitle}
              subtitleMarkdown
            >
              <ThirtyPercentRulingSalaryFlow steps={meta.salaryFlow.steps} />
            </SectionBlock>

            <SectionBlock
              id={meta.eligibility.id}
              className={TIGHT}
              eyebrow={meta.eligibility.eyebrow}
              title={meta.eligibility.title}
              subtitle={meta.eligibility.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.eligibility.intro}
                className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                {meta.eligibility.clarityPair.map((col) => (
                  <div
                    key={col.id}
                    className="rounded-xl border border-copilot-primary/15 bg-copilot-bg-soft/50 p-4 ring-1 ring-copilot-primary/[0.06] sm:p-4"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong">{col.title}</p>
                    <BoldParagraph
                      text={col.body}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3">
                {meta.eligibility.factors.map((factor) => (
                  <article
                    key={factor.id}
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{factor.title}</h3>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Plain English</p>
                    <BoldParagraph
                      text={factor.plainEnglishExplanation}
                      className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Why it matters</p>
                    <BoldParagraph
                      text={factor.whyItMatters}
                      className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <div className="mt-3 rounded-lg border border-border/80 bg-surface-muted/50 px-3 py-2.5 ring-1 ring-border/40">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Caution</p>
                      <BoldParagraph
                        text={factor.cautionNote}
                        className="mt-1 text-xs leading-relaxed text-foreground-muted sm:text-sm [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </div>
                    {factor.links.length > 0 ? (
                      <div className="mt-4 border-t border-border/70 pt-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Related tools</p>
                        <ul className="mt-2 flex flex-col gap-2" role="list">
                          {factor.links.map((lnk) => (
                            <li key={`${factor.id}-${lnk.href}`}>
                              <Link href={lnk.href} className="inline-flex items-center gap-1 text-sm font-semibold text-link hover:underline">
                                {lnk.label}
                                <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
              <div className="mt-5">
                <Link href={meta.eligibility.cta.href} className={primaryCtaClass}>
                  {meta.eligibility.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.audienceTabs.id}
              className={TIGHT}
              eyebrow={meta.audienceTabs.eyebrow}
              title={meta.audienceTabs.title}
              subtitle={meta.audienceTabs.subtitle}
              subtitleMarkdown
            >
              <AudienceTabs
                employeeTabLabel={meta.audienceTabs.employeeTabLabel}
                employerTabLabel={meta.audienceTabs.employerTabLabel}
                employeeSections={meta.audienceTabs.employeeSections}
                employeeToolLinks={meta.audienceTabs.employeeToolLinks}
                employerObligationDisclaimer={meta.audienceTabs.employerObligationDisclaimer}
                employerSections={meta.audienceTabs.employerSections}
                footNote={meta.audienceTabs.footNote}
              />
            </SectionBlock>

            <SectionBlock
              id={meta.salaryNetCaps.id}
              className={TIGHT}
              eyebrow={meta.salaryNetCaps.eyebrow}
              title={meta.salaryNetCaps.title}
              subtitle={meta.salaryNetCaps.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.salaryNetCaps.lead}
                className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-foreground-muted" role="list">
                {meta.salaryNetCaps.bullets.map((b) => (
                  <li key={b}>
                    <BoldParagraph text={b} className="inline [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {meta.salaryNetCaps.ctas.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand/20 bg-brand/5 px-3 py-2 text-sm font-semibold text-brand-strong hover:bg-brand/10"
                  >
                    {c.label}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </Link>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.taxYearAwareness.id}
              className={TIGHT}
              eyebrow={meta.taxYearAwareness.eyebrow}
              title={meta.taxYearAwareness.title}
              subtitle={meta.taxYearAwareness.subtitle}
              subtitleMarkdown
            >
              <ul className="max-w-3xl list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-foreground-muted" role="list">
                {meta.taxYearAwareness.paragraphs.map((p) => (
                  <li key={p}>
                    <BoldParagraph text={p} className="inline [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <section id={meta.misunderstandings.id} className={cn(SECTION_SCROLL_MARGIN, "space-y-2 sm:space-y-2.5")}>
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
                className="gap-2.5 sm:gap-3"
                rows={meta.misunderstandings.rows.map((r) => ({
                  id: r.id,
                  title: r.title,
                  body: <BoldParagraph text={r.body} className="[&_strong]:font-semibold [&_strong]:text-slate-800" />,
                }))}
              />
            </section>

            <SectionBlock
              id={meta.whatNext.id}
              className={cn(SECTION_SCROLL_MARGIN, TIGHT)}
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
                maxItems={10}
                items={meta.whatNext.steps.map((s) => ({
                  label: s.label,
                  href: s.href,
                  description: s.description,
                }))}
              />
            </SectionBlock>
          </PillarJourneyStack>
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

              <MovePillarExploreGrid
                cards={thirtyPercentRulingNlExploreCards}
                title="Explore related hubs"
                excludeHref={CANONICAL}
                descriptionMarkdown
              />

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
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                className={cn(SECTION_SCROLL_MARGIN, TIGHT)}
                compact
                eyebrow={meta.servicesRegion.eyebrow}
                title={meta.servicesRegion.title}
                subtitle={meta.servicesRegion.subtitle}
                subtitleMarkdown
              >
                <BoldParagraph
                  text={meta.servicesRegion.paidHelpIntro}
                  className="mb-3 max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                />
                <div className="mb-4 rounded-xl border border-border/80 bg-surface-muted/50 px-4 py-3 text-sm text-foreground-muted ring-1 ring-border/40">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">When paid help is a good fit</p>
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
                  Official Belastingdienst &amp; related links
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
