import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
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
  movingNlFaqCardInnerClass,
  movingNlGuideShortlistChipClass,
  movingNlSectionSubtitleClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { BankingSafetyContextCallout } from "@/components/banking/BankingSafetyContextCallout";
import { BankingCompareFitEstimateCostCta } from "@/components/banking/BankingCompareFitEstimateCostCta";
import { TransferComparisonTable } from "@/components/banking/TransferComparisonTable";
import { TransferOverpayComparisonVisual } from "@/components/banking/TransferOverpayComparisonVisual";
import { TransferScenarioCards } from "@/components/banking/TransferScenarioCards";
import { BankingRecommendedOptionsSection } from "@/components/banking/BankingRecommendedOptionsSection";
import { BankingSetupDecisionCards } from "@/components/banking/BankingSetupDecisionCards";
import { LowCostBankingShortlistCards } from "@/components/banking/LowCostBankingShortlistCards";
import { TransferCostBreakdown } from "@/components/banking/TransferCostBreakdown";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { AffiliateDisclosureNote } from "@/src/components/monetization/AffiliateDisclosureNote";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";
import { BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH } from "@/src/data/banking/bankingTraditionalDigitalContent";
import { CHEAPEST_BANK_ACCOUNTS_PATH } from "@/src/components/money/cheapest-bank-accounts/cheapestBankAccountsPageModel";
import { BEST_BANK_ZZP_PATH } from "@/src/components/money/best-bank-zzp/bestBankZzpPageModel";
import { BANKING_INTERNATIONAL_TRANSFERS_SHORTLIST_ENTRIES } from "@/src/data/banking/bankingLowCostShortlist";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { bankingInstructionalRasterAssets } from "@/src/components/money/banking-cluster/bankingInstructionalRasterAssets";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import { internationalTransfersFromNlPageModel as meta } from "./internationalTransfersFromNlPageModel";

const CANONICAL = meta.path;
/** Same scroll offset as Move pillar guides (sticky chrome). */
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

/** Primary / secondary actions — same rhythm as {@link VisasResidencyView}. */
const primaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

const secondaryCtaClass =
  "inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

/** Compact hero quick links — 2-column grid on sm+ so the block stays short and chevrons sit near labels. */
const heroNextStepLinkClass =
  "group flex min-h-0 w-full items-center justify-between gap-2 rounded-lg border border-copilot-primary/10 bg-white/85 px-2.5 py-2 text-left text-xs font-semibold text-copilot-text-primary shadow-sm transition-colors hover:border-copilot-primary/18 hover:bg-white hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copilot-accent/35 focus-visible:ring-offset-1";

export function InternationalTransfersFromNlView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Banking", item: new URL("/netherlands/money/banking/", baseUrl).toString() },
    { name: "International transfers", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const sidebar = (
    <MovePillarSectionNav
      items={[...meta.sectionNav]}
      clusterTitle="Go deeper"
      deepLinks={[
        {
          href: "/netherlands/tools/bank-comparison/",
          label: "Bank comparison tool →",
          description: "Weight transfer-heavy setups alongside a Dutch everyday account.",
        },
        {
          href: "/netherlands/tools/banking-cost-estimator/",
          label: "Banking cost estimator →",
          description: "See how often you send abroad changes the monthly planning band.",
        },
        { href: BANKING_FEES_PAGE_PATH, label: "Banking fees →", description: "Transfer and exchange-rate lines on Dutch price lists." },
        {
          href: "/netherlands/money/banking/security/",
          label: "Banking safety & fraud →",
          description: "Verify recipients and spot transfer-related scams before you confirm large sends.",
        },
        {
          href: "/netherlands/money/banking/account-rejection/",
          label: "Account rejected or delayed →",
          description: "If you still need a Dutch account for smoother transfers and direct debits.",
        },
        { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats →", description: "Shortlist and comparison table." },
        { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work →", description: "Paying bills, cards, and bank transfers in the Netherlands." },
        { href: CHEAPEST_BANK_ACCOUNTS_PATH, label: "Cheapest bank accounts →", description: "Lower-fee everyday Dutch accounts." },
        { href: BANKING_CONTENT_TRADITIONAL_VS_DIGITAL_PATH, label: "Traditional vs digital →", description: "Branch banks and phone-first banks side by side." },
        { href: "/netherlands/money/banking/#banking-glossary-hub", label: "Banking glossary →", description: "Short definitions on the Banking hub." },
        { href: "/netherlands/money/tools/cost-of-living-calculator/", label: "Cost of living calculator →", description: "Model monthly budgets after rent." },
        { href: "/netherlands/taxes/tools/dutch-salary-net-calculator/", label: "Dutch salary (net) calculator →", description: "Understand payslip lines before sizing transfers." },
        { href: BEST_BANK_ZZP_PATH, label: "Freelancer banking (ZZP) →", description: "Business vs personal stacks for self-employed expats." },
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
                <nav aria-label="Breadcrumbs" className="flex flex-wrap gap-2 text-xs text-copilot-text-muted">
                  <Link href="/" className="transition-colors hover:text-copilot-text-primary">
                    Home
                  </Link>
                  <span className="text-copilot-text-muted/70" aria-hidden>
                    /
                  </span>
                  <Link href="/netherlands/" className="transition-colors hover:text-copilot-text-primary">
                    Netherlands
                  </Link>
                  <span className="text-copilot-text-muted/70" aria-hidden>
                    /
                  </span>
                  <Link href="/netherlands/money/banking/" className="transition-colors hover:text-copilot-text-primary">
                    Banking
                  </Link>
                  <span className="text-copilot-text-muted/70" aria-hidden>
                    /
                  </span>
                  <span className="text-copilot-text-primary" aria-current="page">
                    International transfers
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={meta.hero.subtitle}
              heroMediaSlot={
                <div
                  className={cn(
                    "mt-4 min-w-0 sm:mt-5",
                    sitePillarFramedHeroGutterXClass,
                    "grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,min(100%,380px))] md:items-start md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-10"
                  )}
                >
                  <div className="min-w-0 space-y-4 sm:space-y-5">
                    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                      <div
                        className={cn(
                          "relative flex flex-col overflow-hidden rounded-2xl border-0 bg-white/90 p-4 shadow-expatos-sm ring-1 ring-slate-900/[0.04] sm:p-5",
                          movingNlCardMicroLiftClass
                        )}
                      >
                        <div className={cn("absolute inset-x-0 top-0 h-1 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
                        <p className="pt-1 text-xs font-bold uppercase tracking-[0.12em] text-copilot-text-muted">Compare received amount</p>
                        <BoldParagraph
                          text={meta.hero.notOneWinnerBanner}
                          className="mt-2 text-xs leading-snug text-copilot-text-primary sm:text-sm [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                        />
                      </div>
                      <div
                        className={cn(
                          "relative flex flex-col overflow-hidden rounded-2xl border-0 bg-white/90 p-4 shadow-expatos-sm ring-1 ring-slate-900/[0.04] sm:p-5",
                          movingNlCardMicroLiftClass
                        )}
                      >
                        <div className={cn("absolute inset-x-0 top-0 h-1 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
                        <p className="pt-1 text-xs font-bold uppercase tracking-[0.12em] text-copilot-text-muted">Prices change often</p>
                        <BoldParagraph
                          text={meta.hero.pricesChangeBanner}
                          className="mt-2 text-xs leading-snug text-copilot-text-primary sm:text-sm [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                        />
                      </div>
                    </div>
                    <p className="max-w-none text-xs leading-snug text-copilot-text-secondary sm:text-sm">{meta.hero.guidePrinciple}</p>
                    <div className="flex flex-wrap gap-2">
                      {meta.hero.contextChips.map((chip) => (
                        <span key={chip} className={movingNlGuideShortlistChipClass}>
                          {chip}
                        </span>
                      ))}
                    </div>
                    <p className="max-w-none text-xs leading-snug text-copilot-text-secondary sm:text-sm">{meta.hero.trustLine}</p>
                    <ul className="max-w-none space-y-2.5 text-sm leading-snug text-copilot-text-secondary sm:text-[0.9375rem] sm:leading-relaxed" role="list">
                      {meta.hero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copilot-primary" aria-hidden />
                          <span className="min-w-0">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Link href={meta.hero.primaryCta.href} className={primaryCtaClass}>
                        {meta.hero.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link href={meta.hero.secondaryCta.href} className={secondaryCtaClass}>
                        {meta.hero.secondaryCta.label}
                      </Link>
                    </div>
                    <nav
                      className="rounded-xl border-0 bg-copilot-surface p-2 shadow-expatos-sm ring-1 ring-copilot-primary/[0.07] sm:p-2.5"
                      aria-label="Next steps"
                    >
                      <p className="px-1 pb-1.5 pt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-text-muted">Next steps</p>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
                        {meta.hero.heroQuickLinks.map((l) => (
                          <Link key={l.href} href={l.href} className={heroNextStepLinkClass} role="listitem">
                            <span className="min-w-0 break-words leading-snug">{l.label}</span>
                            <ChevronRight
                              className="h-3.5 w-3.5 shrink-0 text-copilot-text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-link"
                              aria-hidden
                            />
                          </Link>
                        ))}
                        <Link
                          href="/netherlands/money/banking/"
                          className={cn(heroNextStepLinkClass, "text-copilot-text-secondary hover:text-link sm:col-span-2")}
                          role="listitem"
                        >
                          <span className="min-w-0 break-words leading-snug">Back to Banking hub</span>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-copilot-text-muted group-hover:text-link" aria-hidden />
                        </Link>
                      </div>
                    </nav>
                    <BankingCompareFitEstimateCostCta className="mt-4 max-w-full" />
                  </div>
                  <div className="min-w-0 w-full md:justify-self-end">
                    <div className="relative aspect-[3/2] w-full max-w-full overflow-hidden rounded-2xl bg-copilot-bg-soft ring-1 ring-copilot-primary/[0.1] shadow-expatos-md">
                      <Image
                        src={meta.heroImage.src}
                        alt={meta.heroImage.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 42vw, 420px"
                        priority
                      />
                    </div>
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
              <p className={cn(movingNlSectionSubtitleClass, "mt-2 text-copilot-text-secondary")}>{meta.atAGlance.subtitle}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {meta.atAGlance.cells.map((cell) => {
                  const body = cell.bullets.join(" ");
                  return (
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
                        text={body}
                        className="mt-2 text-sm leading-relaxed text-copilot-text-primary [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="relative mt-5 rounded-xl bg-slate-50/90 px-4 py-4 text-sm leading-relaxed text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-copilot-text-muted">Timing</p>
                <p className="mt-1.5">
                  Exchange rates and fee lines move — capture provider quotes the <strong className="font-semibold text-copilot-text-primary">same day</strong> you
                  decide.
                </p>
                <BoldParagraph
                  text={meta.atAGlance.note}
                  className="mt-3 border-t border-copilot-primary/[0.08] pt-3 text-sm [&_strong]:font-semibold [&_strong]:text-copilot-text-primary"
                />
              </div>
            </section>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide">
            <MovePillarMobileToc items={[...meta.sectionNav]} />

            <BankingSafetyContextCallout variant="internationalTransfers" tone="copilot" className="max-w-none" />

            <SectionBlock
              id={meta.whyOverpay.id}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.whyOverpay.eyebrow}
              title={meta.whyOverpay.title}
            >
              <BoldParagraph text={meta.whyOverpay.lead} className="mt-4 max-w-none text-sm leading-relaxed text-copilot-text-secondary" />
              <ul className="mt-6 max-w-none space-y-5 border-l-2 border-copilot-primary/25 pl-4 sm:pl-5" role="list">
                {meta.whyOverpay.points.map((p) => (
                  <li key={p.title} className="min-w-0">
                    <p className="text-sm font-semibold text-copilot-text-primary">{p.title}</p>
                    <BoldParagraph text={p.body} className="mt-2 text-sm leading-relaxed text-copilot-text-secondary" />
                  </li>
                ))}
              </ul>
              <TransferOverpayComparisonVisual
                caption={meta.whyOverpay.visualCaption}
                disclaimer={meta.whyOverpay.visualDisclaimer}
                className="w-full max-w-none"
              />
            </SectionBlock>

            <SectionBlock
              id={meta.transferShortlist.id}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.transferShortlist.sectionEyebrow}
              title={meta.transferShortlist.sectionTitle}
              subtitle={meta.transferShortlist.sectionSubtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <div
                className={cn(
                  "relative min-w-0 overflow-hidden rounded-2xl border-0 bg-copilot-surface p-5 shadow-expatos-lg ring-1 ring-copilot-primary/[0.07] sm:p-6 md:p-7"
                )}
              >
                <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                <div className="relative">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-copilot-text-muted">{meta.transferShortlist.summaryEyebrow}</p>
                    <h3 className="mt-2 text-base font-semibold tracking-tight text-copilot-text-primary sm:text-lg">{meta.transferShortlist.summaryTitle}</h3>
                    <p className="mt-2 max-w-none text-sm leading-relaxed text-copilot-text-secondary">{meta.transferShortlist.summaryIntro}</p>
                  </div>
                  <div className="mt-6 border-t border-copilot-primary/[0.1] pt-6" aria-labelledby="intl-transfer-provider-heading">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-copilot-text-muted">{meta.transferShortlist.providerEyebrow}</p>
                    <h3 id="intl-transfer-provider-heading" className="mt-2 text-base font-semibold tracking-tight text-copilot-text-primary sm:text-lg">
                      {meta.transferShortlist.providerTitle}
                    </h3>
                    <p className="mt-2 max-w-none text-sm leading-relaxed text-copilot-text-secondary">{meta.transferShortlist.providerIntro}</p>
                    <LowCostBankingShortlistCards
                      entries={[...BANKING_INTERNATIONAL_TRANSFERS_SHORTLIST_ENTRIES]}
                      titleChipLabel="Transfer options"
                      utmReferrerPath={CANONICAL}
                      bestBanksHref={BEST_BANKS_EXPATS_PATH}
                      visualVariant="moving"
                      className="mt-5 min-w-0 max-w-full"
                    />
                  </div>
                </div>
              </div>
              <AffiliateDisclosureNote className="mt-5 text-xs text-copilot-text-secondary">
                {DEFAULT_MONETIZATION_DISCLOSURE}
              </AffiliateDisclosureNote>
            </SectionBlock>

            <SectionBlock
              id={meta.bankVsDigitalTransfer.id}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.bankVsDigitalTransfer.eyebrow}
              title={meta.bankVsDigitalTransfer.title}
              subtitle={meta.bankVsDigitalTransfer.subtitle}
            >
              <p className="mt-4 max-w-none text-sm leading-relaxed text-copilot-text-secondary">{meta.bankVsDigitalTransfer.lead}</p>
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.intlTransferThreePaths}
                caption={meta.bankVsDigitalTransfer.instructionalCaption}
                className="mt-5 w-full"
              />
              <TransferComparisonTable
                rows={meta.bankVsDigitalTransfer.rows}
                tableCaption={meta.bankVsDigitalTransfer.tableCaption}
                columnLabels={meta.bankVsDigitalTransfer.columnLabels}
                className="mt-5"
              />
              <div className="mt-6 max-w-none space-y-3 border-t border-dashed border-copilot-primary/[0.12] pt-6">
                <p className="text-sm leading-relaxed text-copilot-text-secondary">{meta.bankVsDigitalTransfer.afterTableLead}</p>
                <Link href={meta.bankVsDigitalTransfer.afterTableCta.href} className={primaryCtaClass}>
                  {meta.bankVsDigitalTransfer.afterTableCta.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.whatDeterminesCost.id}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.whatDeterminesCost.eyebrow}
              title={meta.whatDeterminesCost.title}
              subtitle={meta.whatDeterminesCost.subtitle}
            >
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.intlTransferTotalCost}
                caption={meta.whatDeterminesCost.instructionalCaption}
                className="mt-4 w-full"
              />
              <TransferCostBreakdown
                items={[...meta.whatDeterminesCost.items]}
                summaryVisual={meta.whatDeterminesCost.equationSummary}
                summaryRegionHeadingId={`${meta.whatDeterminesCost.id}-total-picture`}
                className="mt-4"
              />
              <div className="mt-6 max-w-none space-y-3">
                <p className="text-sm leading-relaxed text-copilot-text-secondary">{meta.whatDeterminesCost.afterBreakdownLead}</p>
                <Link href={meta.whatDeterminesCost.afterBreakdownCta.href} className={primaryCtaClass}>
                  {meta.whatDeterminesCost.afterBreakdownCta.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.cheapestFastConvenient.id}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.cheapestFastConvenient.eyebrow}
              title={meta.cheapestFastConvenient.title}
              subtitle={meta.cheapestFastConvenient.subtitle}
            >
              <BankingSetupDecisionCards cards={[...meta.cheapestFastConvenient.cards]} />
            </SectionBlock>

            <SectionBlock
              id={meta.transferScenarios.id}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.transferScenarios.eyebrow}
              title={meta.transferScenarios.title}
              subtitle={meta.transferScenarios.subtitle}
            >
              <BoldParagraph text={meta.transferScenarios.scenarioGuidance} className="mt-4 max-w-none text-sm leading-relaxed text-copilot-text-secondary" />
              <TransferScenarioCards scenarios={meta.transferScenarios.cards} className="mt-5" />
              <div className="mt-6 flex w-full max-w-none flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={meta.transferScenarios.afterScenariosPrimaryCta.href} className={primaryCtaClass}>
                  {meta.transferScenarios.afterScenariosPrimaryCta.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
                <Link href={meta.transferScenarios.afterScenariosSecondaryCta.href} className={secondaryCtaClass}>
                  {meta.transferScenarios.afterScenariosSecondaryCta.label}
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock id={meta.howToCompare.id} className={SECTION_SCROLL_MARGIN} eyebrow={meta.howToCompare.eyebrow} title={meta.howToCompare.title} subtitle={meta.howToCompare.subtitle}>
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.intlTransferCompareSteps}
                caption={meta.howToCompare.instructionalCaption}
                className="mt-4 w-full"
              />
              <ol className="mt-6 max-w-none list-decimal space-y-4 pl-5 text-sm text-copilot-text-secondary">
                {meta.howToCompare.steps.map((step, i) => (
                  <li key={step.title} className="pl-1">
                    <p className="font-medium text-copilot-text-primary">
                      {i + 1}. {step.title}
                    </p>
                    <p className="mt-1.5 leading-relaxed">{step.body}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex w-full max-w-none flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href={meta.howToCompare.cta.href} className={primaryCtaClass}>
                  {meta.howToCompare.cta.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
                <Link href={meta.howToCompare.secondaryCta.href} className={secondaryCtaClass}>
                  {meta.howToCompare.secondaryCta.label}
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.recommendedProviders.sectionId}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={meta.recommendedProviders.eyebrow}
              title={meta.recommendedProviders.title}
              subtitle={meta.recommendedProviders.subtitle}
            >
              <p className="mt-4 max-w-none rounded-xl border border-amber-200/70 bg-amber-50/50 px-4 py-3 text-sm leading-snug text-copilot-text-secondary ring-1 ring-amber-100/40">
                {meta.recommendedProviders.disclaimer}
              </p>
              <div className="mt-8 space-y-10">
                {meta.recommendedProviders.groups.map((group) => (
                  <div key={group.placementId}>
                    <h3 className="text-base font-bold tracking-tight text-copilot-text-primary">{group.title}</h3>
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
          </PillarJourneyStack>
        }
        faq={
          <PillarGuideFaqRegion>
            <div className={cn(movingNlFaqCardInnerClass, SECTION_SCROLL_MARGIN)}>
              <FAQBlock
                id="faq"
                eyebrow="Support"
                title="Frequently asked questions"
                items={meta.faq.map((f) => ({ q: f.q, a: f.a }))}
                maxItems={20}
              />
            </div>
            <VisasResidencyOfficialSources references={meta.officialSources} density="compact" />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
