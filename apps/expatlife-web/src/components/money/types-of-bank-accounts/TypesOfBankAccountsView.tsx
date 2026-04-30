import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import {
  FAQBlock,
  PageHero,
  PillarGuideAtGlanceRegion,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarJourneyStack,
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
  movingNlSectionSubtitleClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { AccountSetupScenarioCards } from "@/components/banking/AccountSetupScenarioCards";
import { AccountTypeComparisonCards } from "@/components/banking/AccountTypeComparisonCards";
import { AccountTypeGrid } from "@/components/banking/AccountTypeGrid";
import {
  BANKING_AT_A_GLANCE_PANEL_CLASS,
  BANKING_GUIDE_STACK_CLASS,
  BANKING_SECTION_PANEL_CLASS,
} from "@/components/banking/bankingPageUi";
import { PaymentFlowVisual } from "@/components/banking/PaymentFlowVisual";
import { MoveMisunderstandingCardGrid } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { bankingInstructionalRasterAssets } from "@/src/components/money/banking-cluster/bankingInstructionalRasterAssets";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import { typesOfBankAccountsPageModel as meta } from "./typesOfBankAccountsPageModel";

const CANONICAL = meta.path;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const SECTION_MAJOR = cn(SECTION_SCROLL_MARGIN, BANKING_SECTION_PANEL_CLASS);
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

export function TypesOfBankAccountsView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Banking", item: new URL("/netherlands/money/banking/", baseUrl).toString() },
    { name: "Types of accounts", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const secondaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const tertiaryLinkClass =
    "text-sm font-medium text-link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 rounded-sm";

  const mistakeRows = meta.mistakes.cards.map((c) => ({
    id: c.id,
    title: c.title,
    body: <p className="text-sm leading-relaxed text-foreground-muted">{c.body}</p>,
  }));

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Also helpful"
      deepLinks={[
        { href: meta.hero.secondaryCta.href, label: "Compare banks →", description: "Editorial shortlist — confirm products on each site." },
        { href: "/netherlands/money/banking/#banking-glossary-hub", label: "Banking glossary →", description: "Short definitions on the Banking hub." },
        { href: "/netherlands/open-bank-account-netherlands/", label: "Open bank account guide →", description: "Move — documents and BSN timing." },
        { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work →", description: "Paying rent, salary, and shopping in plain language." },
        { href: "/netherlands/money/banking/fees/", label: "Understand fees →", description: "Checklist before you pick a package." },
        { href: "/netherlands/money/banking/traditional-vs-digital/", label: "Traditional vs digital →", description: "How people combine banks and apps." },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd headline={meta.hero.pageTitle} description={meta.seo.description} dateModified={meta.publishDate} urlPath={CANONICAL} />
      <FaqPageJsonLd url={shareUrl} items={meta.faq.map((item) => ({ q: item.q, a: faqAnswerPlainText(item.a) }))} />

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
                  <Link href="/netherlands/money/banking/" className="transition-colors hover:text-foreground">
                    Banking
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <span className="text-foreground" aria-current="page">
                    Types of accounts
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={meta.hero.subtitle}
              afterSubtitle={
                <div className="mt-4 min-w-0 max-w-full space-y-4 sm:mt-5">
                  <div className="flex flex-wrap gap-2">
                    {meta.hero.contextChips.map((chip) => (
                      <span key={chip} className={INFO_CHIP}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.trustLine}</p>
                  <ul className="max-w-2xl space-y-2.5 text-sm leading-snug text-foreground-muted sm:text-[0.9375rem] sm:leading-relaxed" role="list">
                    {meta.hero.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                        <span className="min-w-0">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link href={meta.hero.primaryCta.href} className={primaryCtaClass}>
                      {meta.hero.primaryCta.label}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                    <Link href={meta.hero.secondaryCta.href} className={secondaryCtaClass}>
                      {meta.hero.secondaryCta.label}
                    </Link>
                  </div>
                  <nav className="border-t border-border/50 pt-3" aria-label="Quick banking actions">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Next steps</p>
                    <ul className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 sm:gap-y-2.5">
                      {meta.hero.heroQuickLinks.map((l) => (
                        <li key={l.href} className="min-w-0">
                          <Link href={l.href} className={cn(tertiaryLinkClass, "inline-flex min-h-[44px] items-center text-sm")}>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <p className="text-xs text-foreground-muted">
                    <Link href="/netherlands/money/banking/" className={cn(tertiaryLinkClass, "inline-flex min-h-[40px] items-center")}>
                      Back to Banking hub →
                    </Link>
                  </p>
                </div>
              }
              heroMediaSlot={
                <div className={cn("mt-4 min-w-0 sm:mt-5", sitePillarFramedHeroGutterXClass)}>
                  <div className="relative aspect-[3/2] w-full max-w-full overflow-hidden rounded-2xl bg-surface-muted ring-1 ring-border/40 shadow-card">
                    <Image
                      src={meta.heroImage.src}
                      alt={meta.heroImage.alt}
                      width={meta.heroImage.width}
                      height={meta.heroImage.height}
                      className="h-full w-full object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
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
            <div className="flex min-w-0 max-w-full flex-col gap-3 sm:gap-5">
              <SectionBlock
                id={meta.quickAnswer.id}
                className={SECTION_MAJOR}
                eyebrow={meta.quickAnswer.eyebrow}
                title={meta.quickAnswer.title}
                subtitle={meta.quickAnswer.subtitle}
                compact
                contentClassName="mt-3 sm:mt-4"
              >
                <AccountSetupScenarioCards
                  scenarios={meta.quickAnswer.cards}
                  columns="dense"
                  className="min-w-0 max-w-full"
                  labels={{ setup: "Typical stack", why: "Why it works", watchOut: "What to avoid" }}
                />
              </SectionBlock>

              <div className="rounded-xl border border-brand-strong/20 bg-brand/[0.06] px-3 py-3 ring-1 ring-brand-strong/10 sm:px-4 sm:py-3.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Reality check</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{meta.hero.trustVariabilityNote}</p>
              </div>

              <section
                id="at-a-glance"
                className={cn(
                  SECTION_SCROLL_MARGIN,
                  BANKING_AT_A_GLANCE_PANEL_CLASS
                )}
              >
                <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                <h2 className="text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{meta.atAGlance.sectionTitle}</h2>
                <p className={cn(movingNlSectionSubtitleClass, "mt-2 text-copilot-text-secondary")}>{meta.atAGlance.subtitle}</p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {meta.atAGlance.cells.map((cell) => (
                    <div
                      key={cell.title}
                      className={cn(
                        "relative flex flex-col overflow-hidden rounded-2xl border-0 bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
                        movingNlCardMicroLiftClass
                      )}
                    >
                      <div className={cn("absolute inset-x-0 top-0 h-1 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
                      <p className="pt-1 text-xs font-bold uppercase tracking-[0.12em] text-copilot-text-muted">{cell.title}</p>
                      <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-snug text-copilot-text-primary marker:text-brand" role="list">
                        {cell.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="relative mt-5 rounded-xl bg-slate-50/90 px-4 py-3 text-sm leading-snug text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06] sm:px-4 sm:py-4 sm:leading-relaxed">
                  {meta.atAGlance.note}
                </div>
              </section>
            </div>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact" className={BANKING_GUIDE_STACK_CLASS}>
            <MovePillarMobileToc items={meta.sectionNav} />

            <SectionBlock
              id={meta.accountOverview.id}
              className={SECTION_MAJOR}
              eyebrow={meta.accountOverview.eyebrow}
              title={meta.accountOverview.title}
              subtitle={meta.accountOverview.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.accountTypes}
                caption="Everyday payment, savings, and shared household roles — names on bank sites vary; this is the pattern underneath."
              />
              <AccountTypeGrid accountTypes={meta.accountOverview.accountTypes} className="mt-5 min-w-0 max-w-full" />
            </SectionBlock>

            <SectionBlock
              id={meta.accountMoneyFlow.id}
              className={SECTION_MAJOR}
              eyebrow={meta.accountMoneyFlow.eyebrow}
              title={meta.accountMoneyFlow.title}
              subtitle={meta.accountMoneyFlow.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <PaymentFlowVisual
                flowLabel={meta.accountMoneyFlow.flowLabel}
                steps={meta.accountMoneyFlow.steps}
                className="mt-5 min-w-0 max-w-full"
              />
            </SectionBlock>

            <SectionBlock
              id={meta.accountTypeComparisons.id}
              className={SECTION_MAJOR}
              eyebrow={meta.accountTypeComparisons.eyebrow}
              title={meta.accountTypeComparisons.title}
              subtitle={meta.accountTypeComparisons.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <AccountTypeComparisonCards pairs={meta.accountTypeComparisons.pairs} className="mt-5 min-w-0 max-w-full" />
            </SectionBlock>

            <SectionBlock
              id={meta.glossaryTeaser.id}
              className={SECTION_MAJOR}
              eyebrow={meta.glossaryTeaser.eyebrow}
              title={meta.glossaryTeaser.title}
              compact
              contentClassName="mt-4 sm:mt-5"
            >
              <p className="max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.glossaryTeaser.body}</p>
              <Link href={meta.glossaryTeaser.ctaHref} className={cn(tertiaryLinkClass, "mt-4 inline-flex min-h-[44px] items-center font-semibold")}>
                {meta.glossaryTeaser.ctaLabel} →
              </Link>
            </SectionBlock>

            <SectionBlock
              id={meta.commonExpatAccountSetups.id}
              className={SECTION_MAJOR}
              eyebrow={meta.commonExpatAccountSetups.eyebrow}
              title={meta.commonExpatAccountSetups.title}
              subtitle={meta.commonExpatAccountSetups.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <AccountSetupScenarioCards
                scenarios={meta.commonExpatAccountSetups.cards}
                className="mt-5 min-w-0 max-w-full"
                labels={{
                  setup: "Typical stack",
                  why: "Why it works",
                  watchOut: "What to avoid",
                }}
              />
            </SectionBlock>

            <SectionBlock
              id={meta.plainEnglishCloser.id}
              className={SECTION_MAJOR}
              eyebrow={meta.plainEnglishCloser.eyebrow}
              title={meta.plainEnglishCloser.title}
              subtitle={meta.plainEnglishCloser.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <div className="rounded-2xl border border-border/50 bg-surface-muted/25 p-4 ring-1 ring-border/15 sm:p-5 md:p-6">
                <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3" role="list">
                  {meta.plainEnglishCloser.insights.map((item) => (
                    <li key={item.title} className="min-w-0">
                      <article
                        className={cn(
                          "relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                          movingNlCardMicroLiftClass
                        )}
                      >
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-sm font-semibold tracking-tight text-foreground">{item.title}</h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.mistakes.id}
              className={SECTION_MAJOR}
              eyebrow={meta.mistakes.eyebrow}
              title={meta.mistakes.title}
              subtitle={meta.mistakes.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <MoveMisunderstandingCardGrid rows={mistakeRows} className="mt-4" />
            </SectionBlock>

            <section id={meta.relatedTools.id} className={SECTION_MAJOR} aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-xl font-bold tracking-tight text-foreground">
                {meta.relatedTools.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-foreground-muted">{meta.relatedTools.subtitle}</p>
              <ul className="mt-5 grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
                {meta.relatedTools.cards.map((t) => (
                  <li key={t.title} className="min-w-0">
                    <Link
                      href={t.href}
                      className={cn(
                        "flex h-full min-w-0 flex-col rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 transition hover:border-border-strong hover:bg-surface-muted sm:p-5",
                        movingNlCardMicroLiftClass
                      )}
                    >
                      <span className="text-sm font-semibold text-foreground">{t.title}</span>
                      <span className="mt-2 text-sm text-foreground-muted">{t.description}</span>
                      <span className="mt-3 text-xs font-semibold text-link">{t.ctaLabel} →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </PillarJourneyStack>
        }
        faq={
          <PillarGuideFaqRegion>
            <FAQBlock id="faq" eyebrow="FAQ" title="Common questions" items={meta.faq.map((f) => ({ q: f.q, a: f.a }))} maxItems={20} />
          </PillarGuideFaqRegion>
        }
        afterFaq={<VisasResidencyOfficialSources references={meta.officialSources} density="compact" />}
      />
    </>
  );
}
