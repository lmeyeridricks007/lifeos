import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import {
  FAQBlock,
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
import { ArticleJsonLd, FaqPageJsonLd, faqAnswerPlainText } from "@/lib/seo/jsonld";
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
import { TAX_ADVISORS_EXPATS_PATH, taxGuideRoutes } from "@/src/components/money/tax-guide-for-expats/taxGuideRoutes";
import {
  taxAdvisorsNlExploreCards,
  taxAdvisorsNlPageModel as meta,
} from "./taxAdvisorsNlPageModel";
import { TaxAdvisorConceptGraphic } from "./TaxAdvisorConceptGraphic";
import { TaxAdvisorsNlHeroGraphic } from "./TaxAdvisorsNlHeroGraphic";
import { TaxAdvisorsNlScorecardSection } from "./TaxAdvisorsNlScorecardSection";

const CANONICAL = meta.path;
const DATE_MODIFIED = meta.publishDate;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const TIGHT = `${SECTION_SCROLL_MARGIN} !pt-3 sm:!pt-4`;
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

export function TaxAdvisorsNlView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Money", item: new URL(taxGuideRoutes.moneyTools, baseUrl).toString() },
    { name: "Taxes", item: new URL(taxGuideRoutes.taxesHub, baseUrl).toString() },
    { name: "Tax Advisors for Expats", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = <MovePillarSectionNav items={meta.sectionNav} deepLinks={[...meta.deepLinks]} clusterTitle="Quick links" />;

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd headline={meta.hero.pageTitle} description={meta.seo.description} dateModified={DATE_MODIFIED} urlPath={CANONICAL} />
      <FaqPageJsonLd url={shareUrl} items={meta.faq.map((item) => ({ q: item.q, a: faqAnswerPlainText(item.a) }))} />

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
                    Tax Advisors
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
                    <div className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-3">
                      {meta.hero.trustNotes.map((note) => (
                        <div
                          key={note}
                          className="rounded-xl border border-border/80 bg-surface-muted/40 px-3 py-2.5 text-xs leading-relaxed text-foreground-muted ring-1 ring-border/50 sm:text-sm"
                        >
                          <BoldParagraph text={note} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <TaxAdvisorsNlHeroGraphic
                    image={meta.ogImage}
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
              <p className={cn(movingNlSectionSubtitleClass, "mt-2 text-copilot-text-secondary")}>
                <BoldInline text={meta.atAGlance.subtitle} />
              </p>
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
              <ul
                className="relative mt-5 space-y-2 rounded-xl bg-slate-50/90 px-4 py-4 text-sm leading-relaxed text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]"
                role="list"
              >
                {meta.atAGlance.noteLines.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-primary/70" aria-hidden />
                    <BoldParagraph text={line} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
                  </li>
                ))}
              </ul>
            </section>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact" className="gap-1.5 sm:gap-2 md:gap-2.5">
            <MovePillarMobileToc items={meta.sectionNav} />

            <MoneyTaxLearningPath id="tax-learning-path" activeHref={TAX_ADVISORS_EXPATS_PATH} variant="full" className={SECTION_SCROLL_MARGIN} />

            <TaxAdvisorConceptGraphic className={SECTION_SCROLL_MARGIN} />

            <div
              id={meta.trustPanel.id}
              className={cn(SECTION_SCROLL_MARGIN, "rounded-2xl border border-slate-200/90 bg-slate-50/90 p-4 ring-1 ring-slate-900/[0.04] sm:p-5")}
              role="region"
              aria-labelledby="tax-adv-trust-heading"
            >
              <h2 id="tax-adv-trust-heading" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {meta.trustPanel.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.trustPanel.intro}</p>
              <ul className="mt-3 max-w-3xl list-none space-y-2 text-sm leading-relaxed text-foreground-muted" role="list">
                {meta.trustPanel.introBullets.map((line) => (
                  <li key={line} className="flex gap-2.5 pl-0">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/80" aria-hidden />
                    <BoldParagraph text={line} className="min-w-0 [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
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
            </div>

            <section
              id={meta.diyVsAdvisor.id}
              className={cn(SECTION_SCROLL_MARGIN, "rounded-2xl border border-border/80 bg-surface-raised/80 p-4 ring-1 ring-border/40 sm:p-5")}
              aria-labelledby="diy-vs-advisor-heading"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{meta.diyVsAdvisor.eyebrow}</p>
              <h2 id="diy-vs-advisor-heading" className="mt-1.5 text-lg font-bold tracking-tight text-foreground sm:text-xl">
                {meta.diyVsAdvisor.title}
              </h2>
              <BoldParagraph
                text={meta.diyVsAdvisor.subtitle}
                className={cn(
                  movingNlSectionSubtitleClass,
                  "mt-2 max-w-3xl text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                )}
              />
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {meta.diyVsAdvisor.paths.map((p) => (
                  <div
                    key={p.id}
                    className={cn(
                      "rounded-xl border border-border/70 bg-surface-muted/35 p-4 ring-1 ring-border/30 sm:p-4",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <h3 className="text-sm font-semibold text-foreground">{p.label}</h3>
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted" role="list">
                      {p.points.map((pt) => (
                        <li key={pt}>
                          <BoldParagraph text={pt} className="inline [&_strong]:font-semibold [&_strong]:text-foreground" />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <nav
              aria-label="Quick actions"
              className={cn(SECTION_SCROLL_MARGIN, "grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2")}
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

            <SectionBlock
              id={meta.startHere.id}
              className={TIGHT}
              eyebrow={meta.startHere.eyebrow}
              title={meta.startHere.title}
              subtitle={meta.startHere.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                {meta.startHere.buckets.map((b) => (
                  <article
                    key={b.id}
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{b.title}</h3>
                    <BoldParagraph
                      text={b.body}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground-muted" role="list">
                      {b.bullets.map((line) => (
                        <li key={line}>
                          <BoldParagraph text={line} className="inline [&_strong]:font-semibold [&_strong]:text-foreground" />
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </SectionBlock>

            <TaxAdvisorsNlScorecardSection section={meta.scorecard} className={TIGHT} />

            <SectionBlock
              id={meta.whenWorth.id}
              className={TIGHT}
              eyebrow={meta.whenWorth.eyebrow}
              title={meta.whenWorth.title}
              subtitle={meta.whenWorth.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3">
                {meta.whenWorth.cards.map((c) => (
                  <article
                    key={c.id}
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{c.title}</h3>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Why it matters</p>
                    <BoldParagraph
                      text={c.whyItMatters}
                      className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">What an advisor can clarify</p>
                    <BoldParagraph
                      text={c.advisorHelps}
                      className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <div className="mt-4 border-t border-border/70 pt-3">
                      <Link href={c.toolLink.href} className="inline-flex items-center gap-1 text-sm font-semibold text-link hover:underline">
                        {c.toolLink.label}
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.whatAdvisors.id}
              className={TIGHT}
              eyebrow={meta.whatAdvisors.eyebrow}
              title={meta.whatAdvisors.title}
              subtitle={meta.whatAdvisors.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {meta.whatAdvisors.categories.map((cat) => (
                  <div
                    key={cat.id}
                    className={cn(
                      "rounded-xl border border-border/80 bg-surface-muted/40 p-4 ring-1 ring-border/40",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <h3 className="text-sm font-semibold text-foreground">{cat.title}</h3>
                    <BoldParagraph
                      text={cat.body}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.prepare.id}
              className={TIGHT}
              eyebrow={meta.prepare.eyebrow}
              title={meta.prepare.title}
              subtitle={meta.prepare.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {meta.prepare.groups.map((g) => (
                  <div key={g.id} className="rounded-xl border border-border/80 bg-surface-raised p-4 ring-1 ring-border/40 sm:p-5">
                    <h3 className="text-sm font-semibold text-foreground">{g.title}</h3>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground-muted" role="list">
                      {g.items.map((item) => (
                        <li key={item}>
                          <BoldParagraph text={item} className="inline [&_strong]:font-semibold [&_strong]:text-foreground" />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.compare.id}
              className={TIGHT}
              eyebrow={meta.compare.eyebrow}
              title={meta.compare.title}
              subtitle={meta.compare.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {meta.compare.criteria.map((c) => (
                  <div key={c.id} className="rounded-xl border border-border/70 bg-surface-muted/30 p-4 ring-1 ring-border/30">
                    <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                    <BoldParagraph
                      text={c.body}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-copilot-primary/15 bg-copilot-bg-soft/60 p-4 ring-1 ring-copilot-primary/[0.08] sm:p-5">
                <BoldParagraph
                  text={meta.compare.ctaStrip.text}
                  className="text-sm text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                />
                <Link
                  href={meta.compare.ctaStrip.href}
                  className={cn("mt-3 inline-flex min-h-[44px] items-center gap-2", primaryCtaClass)}
                >
                  {meta.compare.ctaStrip.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.hiringQuestions.id}
              className={TIGHT}
              eyebrow={meta.hiringQuestions.eyebrow}
              title={meta.hiringQuestions.title}
              subtitle={meta.hiringQuestions.subtitle}
              subtitleMarkdown
            >
              <ul
                className="mt-4 divide-y divide-border/70 overflow-hidden rounded-2xl border border-border/80 bg-surface-raised shadow-card ring-1 ring-border/40"
                role="list"
              >
                {meta.hiringQuestions.items.map((item) => (
                  <li key={item.id} className="flex gap-3 px-4 py-3.5 sm:gap-3.5 sm:px-5 sm:py-4">
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-200/90 bg-emerald-50/90 text-emerald-800 ring-1 ring-emerald-100/80"
                      aria-hidden
                    >
                      <Check className="h-4 w-4 stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round" />
                    </span>
                    <span className="min-w-0 break-words pt-0.5 text-sm font-medium leading-snug text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-copilot-primary/15 bg-copilot-bg-soft/60 p-4 ring-1 ring-copilot-primary/[0.08] sm:p-5">
                <BoldParagraph
                  text={meta.hiringQuestions.cta.hint}
                  className="text-sm text-copilot-text-secondary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                />
                <Link
                  href={meta.hiringQuestions.cta.href}
                  className={cn("mt-3 inline-flex min-h-[44px] items-center gap-2", primaryCtaClass)}
                >
                  {meta.hiringQuestions.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.engagementTypes.id}
              className={TIGHT}
              eyebrow={meta.engagementTypes.eyebrow}
              title={meta.engagementTypes.title}
              subtitle={meta.engagementTypes.subtitle}
              subtitleMarkdown
            >
              <div className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3">
                {meta.engagementTypes.cards.map((c) => (
                  <article
                    key={c.id}
                    className={cn(
                      "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{c.title}</h3>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Best for</p>
                    <p className="mt-1 text-sm text-foreground-muted">{c.bestFor}</p>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">What to ask</p>
                    <p className="mt-1 text-sm text-foreground-muted">{c.ask}</p>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">What to avoid assuming</p>
                    <p className="mt-1 text-sm text-foreground-muted">{c.avoid}</p>
                  </article>
                ))}
              </div>
            </SectionBlock>

            <section id={meta.redFlags.id} className={cn(SECTION_SCROLL_MARGIN, "space-y-2 sm:space-y-2.5")}>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{meta.redFlags.eyebrow}</p>
                <h2 className={moveMisunderstandingSectionTitleClass}>{meta.redFlags.title}</h2>
                <BoldParagraph
                  text={meta.redFlags.subtitle}
                  className={cn(
                    moveMisunderstandingSectionSubtitleClass,
                    "mt-2 max-w-3xl [&_strong]:font-semibold [&_strong]:text-foreground"
                  )}
                />
              </div>
              <MoveMisunderstandingCardGrid
                className="gap-2.5 sm:gap-3"
                rows={meta.redFlags.cards.map((r) => ({
                  id: r.id,
                  title: r.title,
                  body: <BoldParagraph text={r.body} className="[&_strong]:font-semibold [&_strong]:text-slate-800" />,
                }))}
              />
            </section>

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
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">When scoped help can fit</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5" role="list">
                  {meta.servicesRegion.whenHelpBullets.map((b) => (
                    <li key={b}>
                      <BoldParagraph text={b} className="inline [&_strong]:font-semibold [&_strong]:text-foreground" />
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl border border-dashed border-border/90 bg-surface-muted/25 p-4 ring-1 ring-border/30 sm:p-5"
                aria-label={meta.servicesRegion.providerBlockLabel}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">{meta.servicesRegion.providerBlockLabel}</p>
                <BoldParagraph
                  text={meta.servicesRegion.providerBlockHint}
                  className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm [&_strong]:font-semibold [&_strong]:text-foreground"
                />
                <div className="mt-4 border-t border-border/50 pt-4">
                  <MoveGuideAffiliateSupportBlock
                    placementId={meta.affiliatePlacementId}
                    categoryLinks={[]}
                    hidePlacementTitle
                  />
                </div>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.toolsBeforePaying.id}
              className={TIGHT}
              eyebrow={meta.toolsBeforePaying.eyebrow}
              title={meta.toolsBeforePaying.title}
              subtitle={meta.toolsBeforePaying.subtitle}
              subtitleMarkdown
            >
              <BoldParagraph
                text={meta.toolsBeforePaying.intro}
                className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {meta.toolsBeforePaying.rows.map((row) => (
                  <div key={row.id} className="rounded-xl border border-border/80 bg-surface-muted/40 p-4 ring-1 ring-border/40">
                    <h3 className="text-sm font-semibold text-foreground">{row.title}</h3>
                    <BoldParagraph
                      text={row.body}
                      className="mt-2 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                    />
                    <Link href={row.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-link hover:underline">
                      {row.ctaLabel}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {meta.toolsBeforePaying.ctas.map((c) => (
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
              <TaxClusterToolsSection showGuideLink showLearningPath={false} showTaxHelpLinks={false} id="tax-tools-cluster" />

              <MovePillarExploreGrid cards={taxAdvisorsNlExploreCards} title="Explore related hubs" excludeHref={CANONICAL} descriptionMarkdown />

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
