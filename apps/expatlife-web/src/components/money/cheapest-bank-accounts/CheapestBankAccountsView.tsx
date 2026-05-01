import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import {
  AtGlanceCard,
  FAQBlock,
  PageHero,
  PillarGuideAtGlanceRegion,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarJourneyStack,
  SectionBlock,
} from "@/components/page/pillar-template";
import { Container } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import { ArticleJsonLd, FaqPageJsonLd, faqAnswerPlainText } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { cn } from "@/lib/cn";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import {
  BANKING_GUIDE_MAJOR_SECTION_CLASS,
  BANKING_GUIDE_STACK_CLASS,
  bankingGuideSectionScrollMarginClass,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  bankingGuideInfoChipClass,
  bankingGuidePrimaryCtaClass,
  bankingGuideSecondaryCtaClass,
  bankingGuideTertiaryLinkClass,
} from "@/components/banking/bankingPageUi";
import { BankingCompareFitEstimateCostCta } from "@/components/banking/BankingCompareFitEstimateCostCta";
import { BankFeePatternCards } from "@/components/banking/BankFeePatternCards";
import { BankingTraditionalDigitalPatternGrid } from "@/components/banking/BankingTraditionalDigitalPatternGrid";
import { BankingTotalCostBreakdown } from "@/components/banking/BankingTotalCostBreakdown";
import { CheapestBankScenarioCards, type CheapestBankScenarioCardVm } from "@/components/banking/CheapestBankScenarioCards";
import { BankTypeComparison } from "@/components/banking/BankTypeComparison";
import { BankingRecommendedOptionsSection } from "@/components/banking/BankingRecommendedOptionsSection";
import { BankingSetupDecisionCards } from "@/components/banking/BankingSetupDecisionCards";
import { BankingGuideHeroNextSteps } from "@/components/banking/BankingGuideHeroNextSteps";
import { LowCostBankingShortlistCards } from "@/components/banking/LowCostBankingShortlistCards";
import { MoveMisunderstandingCardGrid } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { AffiliateDisclosureNote } from "@/src/components/monetization/AffiliateDisclosureNote";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import { bankingSubpageGlossarySection } from "@/src/data/banking/bankingGlossaryTerms";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";
import { BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH } from "@/src/data/banking/bankingTraditionalDigitalContent";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { bankingInstructionalRasterAssets } from "@/src/components/money/banking-cluster/bankingInstructionalRasterAssets";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import { cheapestBankAccountsPageModel as meta } from "./cheapestBankAccountsPageModel";

const CANONICAL = meta.path;
const SECTION_SCROLL_MARGIN = bankingGuideSectionScrollMarginClass;
const SECTION_MAJOR = BANKING_GUIDE_MAJOR_SECTION_CLASS;

export function CheapestBankAccountsView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Banking", item: new URL("/netherlands/money/banking/", baseUrl).toString() },
    { name: "Cheapest bank accounts", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const atGlanceWho = meta.atAGlance.cells.find((c) => c.title === "Best for")?.bullets ?? [];
  const atGlanceSteps = [
    meta.atAGlance.cells.find((c) => c.title === "What this page is for")?.bullets[0],
    meta.atAGlance.cells.find((c) => c.title === "What it compares")?.bullets[0],
    meta.atAGlance.cells.find((c) => c.title === "What it skips")?.bullets[0],
  ].flatMap((s) => (s ? [s] : []));

  const trapRows = meta.hiddenCosts.cards.map((c) => ({
    id: c.id,
    title: c.title,
    body: (
      <div className="space-y-2 text-sm leading-relaxed text-foreground-muted">
        <p>
          <span className="text-foreground">The risk:</span> {c.why}
        </p>
        <p>
          <span className="text-foreground">What to check:</span> {c.avoid}
        </p>
      </div>
    ),
  }));

  const scenarioCards: CheapestBankScenarioCardVm[] = meta.scenarios.cards.map((c) => ({
    title: c.title,
    recommendation: c.recommendation,
    why: c.why,
    watchOuts: c.watchOuts,
    relatedLinks: [...c.relatedLinks],
    relatedBankIds: c.relatedBankIds ? [...c.relatedBankIds] : undefined,
  }));

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Also helpful"
      deepLinks={[
        {
          href: "/netherlands/tools/bank-comparison/",
          label: "Bank comparison tool →",
          description: "Weighted fit for low-cost posture — still confirm tariffs on each site.",
        },
        {
          href: "/netherlands/tools/banking-cost-estimator/",
          label: "Banking cost estimator →",
          description: "Monthly and yearly euro bands for the fee story behind “cheap” accounts.",
        },
        { href: BEST_BANKS_EXPATS_PATH, label: "Compare banks →", description: "Short list and comparison table." },
        { href: BANKING_FEES_PAGE_PATH, label: "Understand fees →", description: "Common fees and what to watch for." },
        { href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH, label: "Compare traditional vs digital →", description: "Branch banks, apps, or both." },
        { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work →", description: "Account numbers, iDEAL, and paying bills." },
        { href: "/netherlands/open-bank-account-netherlands/", label: "Open bank account →", description: "Papers you need and BSN timing." },
        { href: "/netherlands/money/banking/#banking-glossary-hub", label: "Banking glossary →", description: "Short plain definitions on the Banking hub." },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd headline={meta.hero.pageTitle} description={meta.seo.description} dateModified={meta.publishDate} urlPath={CANONICAL} />
      <FaqPageJsonLd url={shareUrl} items={meta.faq.map((item) => ({ q: item.q, a: faqAnswerPlainText(item.a) }))} />

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
                    Cheapest accounts
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={meta.hero.subtitle}
              afterSubtitle={
                <div className="mt-4 min-w-0 max-w-full space-y-4 sm:mt-5">
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    <div className="rounded-lg border border-brand-strong/15 bg-brand/[0.06] px-3 py-2.5 sm:px-4 sm:py-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">No single winner</p>
                      <BoldParagraph
                        text={meta.hero.notOneCheapestBanner}
                        className="mt-1 text-xs leading-snug text-foreground-muted sm:text-sm"
                      />
                    </div>
                    <div className="rounded-lg border border-amber-200/70 bg-amber-50/40 px-3 py-2.5 ring-1 ring-amber-100/35 sm:px-4 sm:py-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-900/85">Fees change often</p>
                      <BoldParagraph
                        text={meta.hero.feesChangeBanner}
                        className="mt-1 text-xs leading-snug text-foreground-muted sm:text-sm"
                      />
                    </div>
                  </div>
                  <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.guidePrinciple}</p>
                  <div className="flex flex-wrap gap-2">
                    {meta.hero.contextChips.map((chip) => (
                      <span key={chip} className={bankingGuideInfoChipClass}>
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
                    <Link href={meta.hero.primaryCta.href} className={bankingGuidePrimaryCtaClass}>
                      {meta.hero.primaryCta.label}
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                    <Link href={meta.hero.secondaryCta.href} className={bankingGuideSecondaryCtaClass}>
                      {meta.hero.secondaryCta.label}
                    </Link>
                  </div>
                  <BankingGuideHeroNextSteps
                    links={meta.hero.heroQuickLinks}
                    hubLink={{ href: "/netherlands/money/banking/", label: "Back to Banking hub" }}
                  />
                  <BankingCompareFitEstimateCostCta className="mt-4 max-w-full" />
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
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
            <div className="flex flex-col gap-6 sm:gap-8">
              <AtGlanceCard
                id="at-a-glance"
                heading={meta.atAGlance.sectionTitle}
                intro={meta.atAGlance.subtitle}
                who={[...atGlanceWho]}
                timeline="Fees and offers change often — add up a full year, check everyday Dutch payments fit you, then confirm on each bank’s website."
                steps={atGlanceSteps}
                footer={meta.atAGlance.note}
                className={SECTION_SCROLL_MARGIN}
              />

              <SectionBlock
                id={meta.quickAnswer.id}
                className={SECTION_MAJOR}
                eyebrow={meta.quickAnswer.eyebrow}
                title={meta.quickAnswer.title}
                subtitle={meta.quickAnswer.subtitle}
                compact
              >
                <Accordion
                  items={meta.quickAnswer.cards.map((card, index) => ({
                    id: `quick-answer-${index}`,
                    title: (
                      <div className="w-full min-w-0 text-left">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={cn(BANKING_VISUAL_CARD_CHIP_CLASS, "font-semibold")}>Quick cost</span>
                          <span className={cn(BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS, "font-semibold")}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <p className="mt-2 text-base font-semibold leading-snug tracking-tight text-foreground">{card.title}</p>
                      </div>
                    ),
                    content: (
                      <ul
                        className="list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-foreground-muted marker:text-brand/70"
                        role="list"
                      >
                        {card.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    ),
                  }))}
                  allowMultiple
                  initialOpenId="quick-answer-0"
                  density="comfortable"
                  tone="copilot"
                  className="mt-4 min-w-0 max-w-full"
                />
              </SectionBlock>
            </div>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact" className={BANKING_GUIDE_STACK_CLASS}>
            <MovePillarMobileToc items={meta.sectionNav} />

            <SectionBlock
              id={meta.cheapestVsValue.id}
              className={SECTION_MAJOR}
              eyebrow={meta.cheapestVsValue.eyebrow}
              title={meta.cheapestVsValue.title}
              subtitle={meta.cheapestVsValue.subtitle}
            >
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.cheapestThreeLenses}
                caption={meta.instructionalFigureCaptions.cheapestVsThreeLenses}
                className="mt-4"
              />
              <BankingSetupDecisionCards cards={meta.cheapestVsValue.cards} />
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={meta.cheapestVsValue.ctaAfter.href} className={bankingGuidePrimaryCtaClass}>
                  {meta.cheapestVsValue.ctaAfter.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
                <Link href={BEST_BANKS_EXPATS_PATH} className={bankingGuideSecondaryCtaClass}>
                  Compare banks
                </Link>
                <Link href={BANKING_FEES_PAGE_PATH} className={bankingGuideSecondaryCtaClass}>
                  Understand fees
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id="low-cost-shortlist"
              className={SECTION_MAJOR}
              eyebrow={meta.lowCostShortlist.sectionEyebrow}
              title={meta.lowCostShortlist.sectionTitle}
              subtitle={meta.lowCostShortlist.sectionSubtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <div className="relative min-w-0 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-white via-surface-muted/15 to-surface-raised/35 shadow-sm ring-1 ring-border/10">
                <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                <div className="relative px-5 pb-6 pt-5 sm:px-6 sm:pb-7 sm:pt-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">
                      {meta.lowCostShortlist.summaryEyebrow}
                    </p>
                    <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {meta.lowCostShortlist.summaryTitle}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.lowCostShortlist.summaryIntro}</p>
                  </div>

                  <div className="mt-6 border-t border-dashed border-border/55 pt-6" aria-labelledby="low-cost-provider-heading">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground-muted">
                      {meta.lowCostShortlist.providerEyebrow}
                    </p>
                    <h3 id="low-cost-provider-heading" className="mt-2 text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {meta.lowCostShortlist.providerTitle}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.lowCostShortlist.providerIntro}</p>
                    <LowCostBankingShortlistCards
                      utmReferrerPath={CANONICAL}
                      bestBanksHref={BEST_BANKS_EXPATS_PATH}
                      className="mt-5 min-w-0 max-w-full"
                    />
                  </div>
                </div>
              </div>

              <AffiliateDisclosureNote className="mt-5 max-w-3xl text-xs">{DEFAULT_MONETIZATION_DISCLOSURE}</AffiliateDisclosureNote>
            </SectionBlock>

            <SectionBlock
              id={meta.scenarios.id}
              className={SECTION_MAJOR}
              eyebrow={meta.scenarios.eyebrow}
              eyebrowClassName="text-[10px] font-bold uppercase tracking-[0.16em] text-copilot-text-muted"
              title={meta.scenarios.title}
            >
              <CheapestBankScenarioCards scenarios={scenarioCards} />
            </SectionBlock>

            <SectionBlock id={meta.whatCheapMeans.id} className={SECTION_MAJOR} eyebrow={meta.whatCheapMeans.eyebrow} title={meta.whatCheapMeans.title}>
              <BoldParagraph
                text={meta.whatCheapMeans.lead}
                className="mt-4 w-full min-w-0 max-w-none text-sm leading-relaxed text-foreground-muted"
              />
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.cheapestTotalCostLens}
                caption={meta.instructionalFigureCaptions.whatCheapTotalCost}
                className="mt-5"
              />
              <p className="mt-5 w-full min-w-0 max-w-none text-xs leading-relaxed text-foreground-muted">{meta.whatCheapMeans.formulaExamplesIntro}</p>
              <BankingTotalCostBreakdown
                className="mt-4"
                items={meta.whatCheapMeans.formulaLines.map((line) => ({
                  id: line.label,
                  label: line.label,
                  text: line.text,
                  example: line.example,
                }))}
                summaryVisual={meta.whatCheapMeans.equationSummaryVisual}
                summaryRegionHeadingId={`${meta.whatCheapMeans.id}-total-picture`}
              />
              <div className="mt-8">
                <p className="text-sm font-medium text-foreground">Typical fees from our bank short list</p>
                <p className="mt-1 w-full min-w-0 max-w-none text-xs text-foreground-muted">
                  Built from our shared banks list — rough groupings only; always confirm on each bank’s website.
                </p>
                <BankFeePatternCards bestBanksHref={BEST_BANKS_EXPATS_PATH} className="mt-4" />
              </div>
            </SectionBlock>

            <SectionBlock id={meta.hiddenCosts.id} className={SECTION_MAJOR} eyebrow={meta.hiddenCosts.eyebrow} title={meta.hiddenCosts.title} subtitle={meta.hiddenCosts.subtitle}>
              <BoldParagraph
                text={meta.hiddenCosts.readerIntro}
                className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground-muted"
              />
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.feeCategories}
                caption={meta.instructionalFigureCaptions.hiddenCostsFeeFamilies}
                className="mt-5"
              />
              <MoveMisunderstandingCardGrid rows={trapRows} className="mt-5" />
            </SectionBlock>

            <SectionBlock id={meta.tradDigitalLowCost.id} className={SECTION_MAJOR} eyebrow={meta.tradDigitalLowCost.eyebrow} title={meta.tradDigitalLowCost.title}>
              <BoldParagraph
                text={meta.tradDigitalLowCost.lead}
                className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground-muted"
              />
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.traditionalVsDigital}
                caption={meta.instructionalFigureCaptions.tradDigitalArchitecture}
                className="mt-5"
              />
              <BankingTraditionalDigitalPatternGrid
                traditional={{
                  columnEyebrow: "Traditional",
                  title: meta.tradDigitalLowCost.traditional.title,
                  bullets: meta.tradDigitalLowCost.traditional.points,
                }}
                digital={{
                  columnEyebrow: "Digital",
                  title: meta.tradDigitalLowCost.digital.title,
                  bullets: meta.tradDigitalLowCost.digital.points,
                }}
                hybrid={{
                  columnEyebrow: "Hybrid",
                  title: meta.tradDigitalLowCost.hybrid.title,
                  bullets: meta.tradDigitalLowCost.hybrid.points,
                }}
              />
              <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {meta.tradDigitalLowCost.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={bankingGuideTertiaryLinkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-3xl text-xs text-foreground-muted">
                For a fuller side-by-side on ideas (not today’s prices), open the comparison table on{" "}
                <Link href={`${BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH}#comparison-table`} className={bankingGuideTertiaryLinkClass}>
                  Compare traditional vs digital
                </Link>
                .
              </p>
              <BankTypeComparison className="mt-4" />
            </SectionBlock>

            <SectionBlock id={meta.yearlyCost.id} className={SECTION_MAJOR} eyebrow={meta.yearlyCost.eyebrow} title={meta.yearlyCost.title}>
              <ol className="mt-4 max-w-3xl list-decimal space-y-4 pl-5 text-sm text-foreground-muted">
                {meta.yearlyCost.steps.map((step, i) => (
                  <li key={step.title} className="pl-1">
                    <p className="font-medium text-foreground">
                      {i + 1}. {step.title}
                    </p>
                    <p className="mt-1.5 leading-relaxed">{step.body}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <Link href={meta.yearlyCost.cta.href} className={bankingGuidePrimaryCtaClass}>
                  {meta.yearlyCost.cta.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.recommendedProviders.sectionId}
              className={SECTION_MAJOR}
              eyebrow={meta.recommendedProviders.eyebrow}
              title={meta.recommendedProviders.title}
              subtitle={meta.recommendedProviders.subtitle}
            >
              <p className="mt-4 max-w-3xl rounded-xl border border-amber-200/70 bg-amber-50/50 px-4 py-3 text-sm leading-snug text-foreground-muted ring-1 ring-amber-100/40">
                {meta.recommendedProviders.disclaimer}
              </p>
              <div className="mt-8 space-y-10">
                {meta.recommendedProviders.groups.map((group) => (
                  <div key={group.placementId}>
                    <h3 className="text-base font-bold tracking-tight text-foreground">{group.title}</h3>
                    <BankingRecommendedOptionsSection
                      placementId={group.placementId}
                      analyticsPageContext={group.analyticsPageContext}
                      boundaryNote={group.boundaryNote}
                      categoryLinks={[...group.categoryLinks]}
                      browseLabel="More on ExpatCopilot: "
                      regionIntroLabel="Outside the guide above"
                      utmReferrerPath={CANONICAL}
                    />
                  </div>
                ))}
              </div>
            </SectionBlock>

            <section id={meta.related.id} className={SECTION_MAJOR} aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-xl font-bold tracking-tight text-foreground">
                {meta.related.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-foreground-muted">{meta.related.subtitle}</p>
              <ul className="mt-5 grid min-w-0 max-w-full gap-3 sm:grid-cols-2">
                {meta.related.items.map((t) => (
                  <li key={t.href} className="min-w-0">
                    <Link
                      href={t.href}
                      className={cn(
                        "flex h-full min-w-0 max-w-full flex-col rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 transition hover:border-border-strong hover:bg-surface-muted sm:p-5",
                        movingNlCardMicroLiftClass
                      )}
                    >
                      <span className="text-sm font-medium text-foreground">{t.title}</span>
                      <span className="mt-2 text-sm text-foreground-muted">{t.description}</span>
                      <span className="mt-3 text-xs font-medium text-link">{t.ctaLabel} →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <SectionBlock id={bankingSubpageGlossarySection.id} className={SECTION_MAJOR} eyebrow={bankingSubpageGlossarySection.eyebrow} title={bankingSubpageGlossarySection.title} compact>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground-muted">{bankingSubpageGlossarySection.intro}</p>
              <Link href="/netherlands/money/banking/#banking-glossary-hub" className={cn(bankingGuideTertiaryLinkClass, "mt-4 inline-flex min-h-[44px] items-center font-medium")}>
                Open glossary on Banking hub →
              </Link>
            </SectionBlock>
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
