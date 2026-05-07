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
import {
  movingNlCardMicroLiftClass,
  movingNlSectionSubtitleClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { AccountTypeGrid } from "@/components/banking/AccountTypeGrid";
import { BankingCompareFitEstimateCostCta } from "@/components/banking/BankingCompareFitEstimateCostCta";
import { BankingGuideHeroNextSteps } from "@/components/banking/BankingGuideHeroNextSteps";
import { BankingRecommendedOptionsSection } from "@/components/banking/BankingRecommendedOptionsSection";
import { BankingSetupDecisionCards } from "@/components/banking/BankingSetupDecisionCards";
import { FreelancerScenarioCards } from "@/components/banking/FreelancerScenarioCards";
import { ZZPComparisonTable } from "@/components/banking/ZZPComparisonTable";
import { LowCostBankingShortlistCards } from "@/components/banking/LowCostBankingShortlistCards";
import { MoveMisunderstandingCardGrid } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { BANKING_GUIDE_MAJOR_SECTION_CLASS, BANKING_GUIDE_STACK_CLASS } from "@/components/banking/bankingPageUi";
import { AffiliateDisclosureNote } from "@/src/components/monetization/AffiliateDisclosureNote";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import { bankingAccountTypes } from "@/src/data/banking/accountTypes";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";
import { BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH } from "@/src/data/banking/bankingTraditionalDigitalContent";
import { BANKING_ZZP_FREELANCER_SHORTLIST_ENTRIES } from "@/src/data/banking/bankingLowCostShortlist";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { bankingInstructionalRasterAssets } from "@/src/components/money/banking-cluster/bankingInstructionalRasterAssets";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import {
  bestBankZzpPageModel as meta,
  zzpFreelancerComparisonBankIds,
  zzpFreelancerComparisonEditorial,
} from "./bestBankZzpPageModel";

const CANONICAL = meta.path;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const HERO_CONTEXT_CHIP =
  "inline-flex rounded-full border-0 bg-copilot-bg-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-copilot-primary ring-1 ring-copilot-primary/20";

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
  "text-sm font-semibold text-link underline-offset-4 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 rounded-sm";

const QUICK_ANSWER_SETUP_CHIP =
  "rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-copilot-text-muted ring-1 ring-copilot-primary/[0.06]";

const QUICK_ANSWER_INDEX_CHIP =
  "inline-flex h-6 min-w-[1.75rem] items-center justify-center rounded-full border border-copilot-primary/20 bg-copilot-bg-soft/90 px-1.5 text-[10px] font-bold tabular-nums text-copilot-primary";

export function BestBankZzpView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Banking", item: new URL("/netherlands/money/banking/", baseUrl).toString() },
    { name: "Best bank for freelancers (ZZP)", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const mistakeRows = meta.commonMistakes.cards.map((c) => ({
    id: c.title,
    title: c.title,
    body: <p className="text-sm leading-relaxed text-foreground-muted">{c.body}</p>,
  }));

  const prosConsRows = [
    { id: "pros", title: meta.needBusinessAccount.prosCard.title, body: <p className="text-sm leading-relaxed text-foreground-muted">{meta.needBusinessAccount.prosCard.body}</p> },
    { id: "cons", title: meta.needBusinessAccount.consCard.title, body: <p className="text-sm leading-relaxed text-foreground-muted">{meta.needBusinessAccount.consCard.body}</p> },
  ];

  const accountTypesForZzp = meta.accountTypes.accountTypeIds
    .map((id) => bankingAccountTypes.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const sidebar = (
    <MovePillarSectionNav
      items={[...meta.sectionNav]}
      clusterTitle="Go deeper"
      deepLinks={[
        {
          href: "/netherlands/tools/bank-comparison/",
          label: "Bank comparison tool →",
          description: "Freelancer-weighted fit vs retail — confirm business products on each PDF.",
        },
        {
          href: "/netherlands/tools/banking-cost-estimator/",
          label: "Banking cost estimator →",
          description: "Add business-account and invoicing bands to your monthly planning range.",
        },
        { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats →", description: "Short list and a comparison table." },
        { href: "/netherlands/money/banking/types-of-accounts/", label: "Kinds of accounts →", description: "How business and personal accounts differ." },
        { href: BANKING_FEES_PAGE_PATH, label: "Banking fees →", description: "What banks usually charge for." },
        { href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH, label: "Traditional vs digital →", description: "How people mix branch banks and app banks." },
        { href: "/netherlands/money/tax-guide-for-expats/", label: "Tax guide for expats →", description: "Big-picture tax topics for expats." },
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
                    Best bank for freelancers (ZZP)
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
                      <span key={chip} className={HERO_CONTEXT_CHIP}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <p className={cn(movingNlSectionSubtitleClass, "max-w-2xl text-xs leading-snug text-copilot-text-secondary sm:text-sm")}>{meta.hero.trustLine}</p>
                  <ul className="max-w-2xl space-y-2.5 text-sm leading-snug text-copilot-text-secondary sm:text-[0.9375rem] sm:leading-relaxed" role="list">
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
                  <BankingGuideHeroNextSteps links={[...meta.hero.heroQuickLinks]} hubLink={{ href: "/netherlands/money/banking/", label: "Back to Banking hub" }} />
                  <BankingCompareFitEstimateCostCta className="mt-4 max-w-full" />
                </div>
              }
              heroMediaSlot={
                <div className={cn("mt-4 min-w-0 sm:mt-5", sitePillarFramedHeroGutterXClass)}>
                  <div className="relative aspect-[1200/630] w-full max-w-full overflow-hidden rounded-2xl bg-surface-muted ring-1 ring-border/40 shadow-card">
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
            <section
              id={meta.quickAnswer.id}
              className={cn(
                SECTION_SCROLL_MARGIN,
                "relative overflow-hidden rounded-2xl border-0 bg-copilot-surface p-6 shadow-expatos-lg ring-1 ring-copilot-primary/[0.07] sm:p-7"
              )}
            >
              <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-copilot-text-muted">{meta.quickAnswer.eyebrow}</p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">{meta.quickAnswer.title}</h2>
              <p className={cn(movingNlSectionSubtitleClass, "mt-2 text-copilot-text-secondary")}>{meta.quickAnswer.subtitle}</p>
              <Accordion
                items={meta.quickAnswer.cards.map((card, index) => ({
                  id: `zzp-quick-${index}`,
                  title: (
                    <div className="w-full min-w-0 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={QUICK_ANSWER_SETUP_CHIP}>Common setup</span>
                        <span className={QUICK_ANSWER_INDEX_CHIP}>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <p className="mt-2 text-base font-semibold leading-snug tracking-tight text-copilot-text-primary">{card.title}</p>
                    </div>
                  ),
                  content: (
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary" role="list">
                        {card.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                    </ul>
                  ),
                }))}
                  allowMultiple
                  initialOpenId="zzp-quick-0"
                  density="comfortable"
                  tone="copilot"
                  className="mt-5 min-w-0 max-w-full sm:mt-6"
                />
            </section>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact" className={BANKING_GUIDE_STACK_CLASS}>
            <MovePillarMobileToc items={[...meta.sectionNav]} />
            <SectionBlock
              id={meta.needBusinessAccount.id}
              className={BANKING_GUIDE_MAJOR_SECTION_CLASS}
              eyebrow={meta.needBusinessAccount.eyebrow}
              title={meta.needBusinessAccount.title}
            >
              <p className="mt-4 w-full min-w-0 max-w-none text-sm leading-relaxed text-foreground-muted">{meta.needBusinessAccount.lead}</p>
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.feeCategories}
                caption="Example of common fee types on business vs personal accounts — always read your bank’s own fee page."
                className="mt-5"
              />
              <MoveMisunderstandingCardGrid rows={prosConsRows} className="mt-6" />
            </SectionBlock>

            <SectionBlock
              id={meta.accountTypes.id}
              className={BANKING_GUIDE_MAJOR_SECTION_CLASS}
              eyebrow={meta.accountTypes.eyebrow}
              title={meta.accountTypes.title}
              subtitle={meta.accountTypes.subtitle}
            >
              <AccountTypeGrid accountTypes={accountTypesForZzp} className="mt-4" />
              <Link href="/netherlands/money/banking/types-of-accounts/" className={cn(tertiaryLinkClass, "mt-6 inline-flex min-h-[44px] items-center")}>
                Full types of bank accounts guide →
              </Link>
            </SectionBlock>

            <SectionBlock
              id={meta.typicalFreelancerSetup.id}
              className={BANKING_GUIDE_MAJOR_SECTION_CLASS}
              eyebrow={meta.typicalFreelancerSetup.eyebrow}
              title={meta.typicalFreelancerSetup.title}
            >
              <p className="mt-4 w-full min-w-0 max-w-none text-sm leading-relaxed text-foreground-muted sm:mt-5">{meta.typicalFreelancerSetup.intro}</p>
              <div
                className={cn(
                  "relative mt-5 min-w-0 max-w-full overflow-hidden rounded-2xl border-0 bg-white/90 shadow-expatos-sm ring-1 ring-slate-900/[0.04] sm:mt-6",
                  movingNlCardMicroLiftClass
                )}
                role="group"
                aria-label="Three-part freelancer banking setup"
              >
                <div className={cn("absolute inset-x-0 top-0 h-1 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
                <div className="grid grid-cols-1 divide-y divide-border/60 pt-1 md:grid-cols-3 md:divide-x md:divide-y-0">
                  {meta.typicalFreelancerSetup.pillars.map((pillar) => (
                    <div key={pillar.id} className="flex min-w-0 flex-col gap-2 px-5 py-5 sm:px-6 sm:py-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={QUICK_ANSWER_INDEX_CHIP} aria-hidden>
                          {pillar.step}
                        </span>
                        <span className={QUICK_ANSWER_SETUP_CHIP}>{pillar.chip}</span>
                      </div>
                      <h3 className="text-base font-semibold leading-snug tracking-tight text-copilot-text-primary">{pillar.headline}</h3>
                      <p className="text-sm leading-relaxed text-copilot-text-secondary">{pillar.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
                <Link href={meta.typicalFreelancerSetup.cta.href} className={primaryCtaClass}>
                  {meta.typicalFreelancerSetup.cta.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.freelancerShortlist.id}
              className={BANKING_GUIDE_MAJOR_SECTION_CLASS}
              eyebrow={meta.freelancerShortlist.eyebrow}
              title={meta.freelancerShortlist.title}
              subtitle={meta.freelancerShortlist.subtitle}
            >
              <LowCostBankingShortlistCards
                entries={BANKING_ZZP_FREELANCER_SHORTLIST_ENTRIES}
                titleChipLabel="Banks to compare"
                utmReferrerPath={CANONICAL}
                bestBanksHref={BEST_BANKS_EXPATS_PATH}
              />
              <AffiliateDisclosureNote className="mt-5 text-xs">{DEFAULT_MONETIZATION_DISCLOSURE}</AffiliateDisclosureNote>
            </SectionBlock>

            <SectionBlock
              id={meta.cheapestVsValue.id}
              className={BANKING_GUIDE_MAJOR_SECTION_CLASS}
              eyebrow={meta.cheapestVsValue.eyebrow}
              title={meta.cheapestVsValue.title}
              subtitle={meta.cheapestVsValue.subtitle}
            >
              <BankingSetupDecisionCards cards={[...meta.cheapestVsValue.cards]} />
            </SectionBlock>

            <SectionBlock
              id={meta.comparison.id}
              className={BANKING_GUIDE_MAJOR_SECTION_CLASS}
              eyebrow={meta.comparison.eyebrow}
              title={meta.comparison.title}
              subtitle={meta.comparison.subtitle}
            >
              <p className="mt-4 w-full min-w-0 max-w-none text-sm leading-relaxed text-foreground-muted">{meta.comparison.intro}</p>
              <div className={cn("mt-4 rounded-xl bg-copilot-bg-soft/50 px-4 py-4 ring-1 ring-copilot-primary/[0.08] sm:px-5")}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-copilot-text-muted">{meta.comparison.howToReadTitle}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary" role="list">
                  {meta.comparison.howToRead.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <ZZPComparisonTable bankIds={zzpFreelancerComparisonBankIds} editorialByBankId={zzpFreelancerComparisonEditorial} className="mt-5" />
            </SectionBlock>

            <SectionBlock
              id={meta.commonMistakes.id}
              className={BANKING_GUIDE_MAJOR_SECTION_CLASS}
              eyebrow={meta.commonMistakes.eyebrow}
              title={meta.commonMistakes.title}
            >
              <MoveMisunderstandingCardGrid rows={mistakeRows} className="mt-4" />
            </SectionBlock>

            <SectionBlock
              id={meta.exampleSetups.id}
              className={BANKING_GUIDE_MAJOR_SECTION_CLASS}
              eyebrow={meta.exampleSetups.eyebrow}
              title={meta.exampleSetups.title}
              subtitle={meta.exampleSetups.subtitle}
            >
              <FreelancerScenarioCards scenarios={meta.exampleSetups.scenarios} layout="grid" className="mt-4" />
            </SectionBlock>

            <SectionBlock
              id={meta.recommendedProviders.sectionId}
              className={BANKING_GUIDE_MAJOR_SECTION_CLASS}
              eyebrow={meta.recommendedProviders.eyebrow}
              title={meta.recommendedProviders.title}
              subtitle={meta.recommendedProviders.subtitle}
            >
              <p className="mt-4 max-w-3xl rounded-xl border border-border/60 bg-surface-muted/35 px-4 py-3 text-sm leading-snug text-foreground-muted">
                {meta.recommendedProviders.disclaimer}
              </p>
              <div className="mt-6 space-y-8 sm:mt-7 sm:space-y-9">
                {meta.recommendedProviders.groups.map((group) => (
                  <div key={group.placementId}>
                    <h3 className="text-sm font-semibold tracking-tight text-foreground-muted">{group.title}</h3>
                    <BankingRecommendedOptionsSection
                      placementId={group.placementId}
                      analyticsPageContext={group.analyticsPageContext}
                      boundaryNote={group.boundaryNote}
                      categoryLinks={[...group.categoryLinks]}
                      browseLabel="More on ExpatCopilot: "
                      regionIntroLabel={meta.recommendedProviders.optionsRegionIntroLabel}
                      utmReferrerPath={CANONICAL}
                      surfaceTone="muted"
                    />
                  </div>
                ))}
              </div>
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
