import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarClock, ShieldAlert } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { GuideAtAGlance } from "@/components/page-families";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import {
  FAQBlock,
  MoveGuideSectionPanel,
  PageHero,
  PillarDarkStagesBand,
  PillarGuideAtGlanceRegion,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarJourneyStack,
  SectionBlock,
} from "@/components/page/pillar-template";
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
  movingNlSectionH2StagesSignatureClass,
  movingNlSectionSubtitleClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { ApplicationSituationDecisionCards } from "@/components/banking/ApplicationSituationDecisionCards";
import { BankingCompareFitEstimateCostCta } from "@/components/banking/BankingCompareFitEstimateCostCta";
import { BankingFirstSteps } from "@/components/banking/BankingFirstSteps";
import { BankingGuideHeroNextSteps } from "@/components/banking/BankingGuideHeroNextSteps";
import { BankingRecommendedOptionsSection } from "@/components/banking/BankingRecommendedOptionsSection";
import { BankingWorkaroundCards } from "@/components/banking/BankingWorkaroundCards";
import { DocumentCheckList } from "@/components/banking/DocumentCheckList";
import { RecoveryPlanSteps } from "@/components/banking/RecoveryPlanSteps";
import { RejectionReasonGrid } from "@/components/banking/RejectionReasonGrid";
import {
  BANKING_AT_A_GLANCE_PANEL_CLASS,
  BANKING_GUIDE_MAJOR_SECTION_CLASS,
  BANKING_GUIDE_STACK_CLASS,
  bankingGuideInfoChipClass,
  bankingGuidePrimaryCtaClass,
  bankingGuideSecondaryCtaClass,
  bankingGuideSectionScrollMarginClass,
  bankingGuideTertiaryLinkClass,
} from "@/components/banking/bankingPageUi";
import { MoveMisunderstandingCardGrid } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { AffiliateDisclosureNote } from "@/src/components/monetization/AffiliateDisclosureNote";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import { bankingSubpageGlossarySection } from "@/src/data/banking/bankingGlossaryTerms";
import {
  bankingRejectionApplicationSituationCards,
  bankingRejectionBsnCrossLinks,
  bankingRejectionBsnIntroParagraphs,
  bankingRejectionDocumentChecklistGroups,
  bankingRejectionDocumentTip,
  bankingRejectionDontDos,
  bankingRejectionFirstSteps,
  bankingRejectionMisunderstandings,
  bankingRejectionReasons,
  bankingRejectionRecoverySteps,
  bankingRejectionRiskExamples,
  bankingRejectionRiskExamplesTitle,
  bankingRejectionRiskIntroParagraphs,
  bankingRejectionWorkaroundWarnings,
  bankingRejectionWorkarounds,
  resolveBankingRejectionLinkEntries,
} from "@/src/data/banking/accountRejection";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { BANK_COMPARISON_TOOL_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { accountRejectionPageModel as meta } from "./accountRejectionPageModel";

const CANONICAL = meta.path;
const SECTION_SCROLL_MARGIN = bankingGuideSectionScrollMarginClass;
const SECTION_MAJOR = BANKING_GUIDE_MAJOR_SECTION_CLASS;

export function AccountRejectionView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Banking", item: new URL("/netherlands/money/banking/", baseUrl).toString() },
    { name: "Bank account rejected", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const whatNotRows = bankingRejectionDontDos.map((c) => ({
    id: c.title,
    title: c.title,
    body: <p className="text-sm leading-relaxed text-foreground-muted">{c.body}</p>,
  }));

  const misunderstandingRows = bankingRejectionMisunderstandings.map((c) => ({
    id: c.title,
    title: c.title,
    body: <p className="text-sm leading-relaxed text-foreground-muted">{c.body}</p>,
  }));

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Also helpful"
      deepLinks={[
        { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats →", description: "Our short list — still check each bank’s own rules." },
        { href: BANK_COMPARISON_TOOL_PATH, label: "Bank comparison tool →", description: "Rough fit from your answers — not a live approval." },
        { href: "/netherlands/open-bank-account-netherlands/", label: "Open a bank account →", description: "Documents, BSN, and timing on the Move guide." },
        { href: "/netherlands/money/banking/security/", label: "Banking safety & fraud →", description: "If someone pressures you while you are stuck." },
        { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work →", description: "Salary, rent, iDEAL, and bank transfers." },
        { href: "/netherlands/money/banking/#banking-glossary-hub", label: "Banking glossary →", description: "Short definitions on the Banking hub." },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd headline={meta.hero.pageTitle} description={meta.seo.description} dateModified={meta.publishDate} urlPath={CANONICAL} />
      <FaqPageJsonLd url={shareUrl} items={meta.faq.map((item) => ({ q: item.q, a: faqAnswerPlainText(item.a) }))} />

      <GuidePageTemplate
        mainStackClassName="mt-2 space-y-4 py-6 sm:mt-3 sm:space-y-5 md:space-y-6 md:py-8"
        wrapContent={(inner) => (
          <Container className={cn("w-full min-w-0 max-w-screen-2xl", siteGuideColumnPadYClass)}>
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
                  <Link href="/netherlands/money/" className="transition-colors hover:text-foreground">
                    Money
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
                    Bank account rejected
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={meta.hero.subtitle}
              heroMediaSlot={
                <div
                  className={cn(
                    "mt-4 grid min-w-0 max-w-full gap-5 sm:mt-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,min(100%,380px))] md:items-start md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0 space-y-4 sm:space-y-5">
                    <div className="flex flex-wrap gap-2">
                      {meta.hero.contextChips.map((chip) => (
                        <span key={chip} className={bankingGuideInfoChipClass}>
                          {chip}
                        </span>
                      ))}
                    </div>
                    <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.editorialPrinciple}</p>
                    <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.trustLine}</p>
                    <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.trustNotAdvice}</p>
                    <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.trustProviderDecisions}</p>
                    <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.trustNoGuarantee}</p>
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
                    <BankingGuideHeroNextSteps links={meta.hero.heroQuickLinks} hubLink={{ href: "/netherlands/money/banking/", label: "Back to Banking hub" }} />
                  </div>
                  <div className="min-w-0 shrink-0 md:justify-self-end">
                    <div className="relative aspect-[3/2] w-full max-w-full overflow-hidden rounded-2xl bg-surface-muted ring-1 ring-border/40 shadow-card">
                      <Image
                        src={meta.heroImage.src}
                        alt={meta.heroImage.alt}
                        width={meta.heroImage.width}
                        height={meta.heroImage.height}
                        className="h-full w-full object-cover object-center"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
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
        keySections={
          <MoveGuideSectionPanel className="min-w-0 max-w-full">
            <PillarJourneyStack variant="guide" density="compact" className={BANKING_GUIDE_STACK_CLASS}>
            <MovePillarMobileToc items={meta.sectionNav} />

            <SectionBlock
              id={meta.quickAnswer.id}
              className={SECTION_MAJOR}
              eyebrow={meta.quickAnswer.eyebrow}
              title={meta.quickAnswer.title}
              subtitle={meta.quickAnswer.subtitle}
              compact
              contentClassName="mt-3 sm:mt-4"
            >
              <BankingFirstSteps habits={bankingRejectionFirstSteps} density="readable" />
            </SectionBlock>

            <SectionBlock
              id={meta.situationDecision.id}
              className={SECTION_MAJOR}
              eyebrow={meta.situationDecision.eyebrow}
              title={meta.situationDecision.title}
              subtitle={meta.situationDecision.subtitle}
              compact
              contentClassName="mt-3 sm:mt-4"
            >
              <ApplicationSituationDecisionCards cards={bankingRejectionApplicationSituationCards} />
            </SectionBlock>

            <GuideAtAGlance>
              <PillarGuideAtGlanceRegion>
                <section
                  id="at-a-glance"
                  className={cn(SECTION_SCROLL_MARGIN, BANKING_AT_A_GLANCE_PANEL_CLASS)}
                  aria-labelledby="account-rejection-at-glance-heading"
                >
                  <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                  <h2 id="account-rejection-at-glance-heading" className="text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">
                    {meta.atAGlance.sectionTitle}
                  </h2>
                  <p className={cn(movingNlSectionSubtitleClass, "mt-2 text-copilot-text-secondary")}>{meta.atAGlance.subtitle}</p>
                  <div className="mt-6 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                    {meta.atAGlance.cells.map((cell) => (
                      <div
                        key={cell.title}
                        className={cn(
                          "relative flex min-w-0 flex-col overflow-hidden rounded-2xl border-0 bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
                          movingNlCardMicroLiftClass
                        )}
                      >
                        <div className={cn("absolute inset-x-0 top-0 h-1 opacity-90", movingNlSignatureGradientClass)} aria-hidden />
                        <p className="pt-1 text-xs font-semibold uppercase tracking-[0.12em] text-copilot-text-muted">{cell.title}</p>
                        <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-snug text-copilot-text-primary marker:text-brand" role="list">
                          {cell.bullets.map((b) => (
                            <li key={b} className="break-words">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-5 rounded-xl bg-slate-50/90 px-4 py-3 text-sm leading-snug text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06] sm:px-4 sm:py-4 sm:leading-relaxed">
                    {meta.atAGlance.note}
                  </div>
                </section>
              </PillarGuideAtGlanceRegion>
            </GuideAtAGlance>

            <PillarDarkStagesBand className={cn("w-full min-w-0", bankingGuideSectionScrollMarginClass)}>
              <SectionBlock
                id={meta.whyRejected.id}
                className="relative z-10"
                contentClassName="mt-8 sm:mt-9"
                eyebrow={meta.whyRejected.eyebrow}
                title={meta.whyRejected.title}
                subtitle={meta.whyRejected.subtitle}
                titleClassName={movingNlSectionH2StagesSignatureClass}
                tone="onDark"
              >
                <RejectionReasonGrid
                  reasons={bankingRejectionReasons}
                  chipLabel="Common cause"
                  resolveLinkEntries={resolveBankingRejectionLinkEntries}
                  variant="onDarkBand"
                />
              </SectionBlock>
            </PillarDarkStagesBand>

            <SectionBlock
              id={meta.documents.id}
              className={SECTION_MAJOR}
              eyebrow={meta.documents.eyebrow}
              title={meta.documents.title}
              subtitle={meta.documents.subtitle}
            >
              <DocumentCheckList
                className="mt-5 sm:mt-6"
                groups={bankingRejectionDocumentChecklistGroups}
                ariaLabelledBy={`${meta.documents.id}-heading`}
              />
              <div className="relative mt-6 w-full min-w-0 overflow-hidden rounded-2xl border border-copilot-primary/10 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-slate-50/90 px-5 py-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.08] sm:mt-7 sm:px-6 sm:py-5">
                <div
                  className={cn("pointer-events-none absolute inset-y-3 left-0 w-1 rounded-full", movingNlSignatureGradientClass)}
                  aria-hidden
                />
                <p className="relative pl-4 text-sm leading-relaxed text-slate-700 sm:pl-5 sm:text-[0.9375rem] sm:leading-relaxed">
                  {bankingRejectionDocumentTip}
                </p>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.bsnBlock.id}
              className={SECTION_MAJOR}
              eyebrow={meta.bsnBlock.eyebrow}
              title={meta.bsnBlock.title}
              subtitle={meta.bsnBlock.subtitle}
            >
              <div className="relative mt-5 w-full min-w-0 overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft/95 via-white to-sky-50/50 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.1] sm:mt-6 sm:p-6">
                <div
                  className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-copilot-primary/[0.07] blur-3xl"
                  aria-hidden
                />
                <div className="relative flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-copilot-primary shadow-expatos-sm ring-1 ring-copilot-primary/12"
                    aria-hidden
                  >
                    <CalendarClock className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 w-full flex-1 space-y-3 sm:space-y-3.5">
                    {bankingRejectionBsnIntroParagraphs.map((para) => (
                      <p key={para} className="max-w-none text-sm leading-relaxed text-slate-700">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="mt-6 flex w-full min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
                {bankingRejectionBsnCrossLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={bankingGuideTertiaryLinkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.riskBlock.id}
              className={SECTION_MAJOR}
              eyebrow={meta.riskBlock.eyebrow}
              title={meta.riskBlock.title}
              subtitle={meta.riskBlock.subtitle}
            >
              <div className="relative mt-5 w-full min-w-0 overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-slate-50/95 via-white to-copilot-bg-soft/45 p-5 shadow-expatos-md ring-1 ring-slate-900/[0.07] sm:mt-6 sm:p-6">
                <div
                  className="pointer-events-none absolute -left-12 -bottom-16 h-36 w-36 rounded-full bg-copilot-primary/[0.06] blur-3xl"
                  aria-hidden
                />
                <div className="relative flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-copilot-primary shadow-expatos-sm ring-1 ring-copilot-primary/12"
                    aria-hidden
                  >
                    <ShieldAlert className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 w-full flex-1 space-y-3 sm:space-y-3.5">
                    {bankingRejectionRiskIntroParagraphs.map((para) => (
                      <p key={para} className="max-w-none text-sm leading-relaxed text-slate-700">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6 w-full min-w-0 text-sm font-medium text-foreground">{bankingRejectionRiskExamplesTitle}</p>
              <ul
                className="mt-3 grid w-full min-w-0 list-none gap-2.5 pl-0 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2"
                role="list"
              >
                {bankingRejectionRiskExamples.map((ex) => (
                  <li
                    key={ex}
                    className="flex gap-2.5 rounded-lg border border-border/50 bg-surface-muted/35 px-3 py-2.5 text-sm leading-snug text-foreground-muted ring-1 ring-border/30 sm:px-3.5 sm:py-2.5"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    <span className="min-w-0">{ex}</span>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.recovery.id}
              className={SECTION_MAJOR}
              eyebrow={meta.recovery.eyebrow}
              title={meta.recovery.title}
              subtitle={meta.recovery.subtitle}
            >
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.recovery.leadIn}</p>
              <RecoveryPlanSteps className="mt-5" steps={bankingRejectionRecoverySteps} resolveLinkEntries={resolveBankingRejectionLinkEntries} />
              <p className="mt-6">
                <Link href={BEST_BANKS_EXPATS_PATH} className={cn(bankingGuideTertiaryLinkClass, "inline-flex min-h-[44px] items-center font-medium")}>
                  Compare banks for expats →
                </Link>
              </p>
            </SectionBlock>

            <SectionBlock
              id={meta.workarounds.id}
              className={SECTION_MAJOR}
              eyebrow={meta.workarounds.eyebrow}
              title={meta.workarounds.title}
              subtitle={meta.workarounds.subtitle}
            >
              <BankingWorkaroundCards
                className="mt-5 w-full min-w-0 sm:mt-6"
                items={bankingRejectionWorkarounds}
                resolveLinkEntries={resolveBankingRejectionLinkEntries}
              />
              <div className="relative mt-6 w-full min-w-0 space-y-3 overflow-hidden rounded-2xl border border-copilot-primary/10 bg-gradient-to-br from-copilot-bg-soft/85 via-white to-slate-50/90 px-5 py-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.08] sm:space-y-3.5 sm:px-6 sm:py-5">
                <div
                  className={cn("pointer-events-none absolute inset-y-4 left-0 w-1 rounded-full", movingNlSignatureGradientClass)}
                  aria-hidden
                />
                <div className="relative space-y-3 pl-4 sm:space-y-3.5 sm:pl-5">
                  {bankingRejectionWorkaroundWarnings.map((w) => (
                    <p key={w} className="max-w-none text-sm leading-relaxed text-slate-700">
                      {w}
                    </p>
                  ))}
                </div>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.whatNot.id}
              className={SECTION_MAJOR}
              eyebrow={meta.whatNot.eyebrow}
              title={meta.whatNot.title}
              subtitle={meta.whatNot.subtitle}
            >
              <MoveMisunderstandingCardGrid rows={whatNotRows} className="mt-4" />
            </SectionBlock>

            <SectionBlock
              id={meta.misunderstandings.id}
              className={SECTION_MAJOR}
              eyebrow={meta.misunderstandings.eyebrow}
              title={meta.misunderstandings.title}
              subtitle={meta.misunderstandings.subtitle}
            >
              <MoveMisunderstandingCardGrid rows={misunderstandingRows} className="mt-4" />
            </SectionBlock>

            <SectionBlock
              id={meta.recommendedProviders.sectionId}
              className={SECTION_MAJOR}
              eyebrow={meta.recommendedProviders.eyebrow}
              title={meta.recommendedProviders.title}
              subtitle={meta.recommendedProviders.subtitle}
            >
              <div className="mt-5 space-y-10 sm:mt-6">
                {meta.recommendedProviders.groups.map((group) => (
                  <div key={group.placementId}>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{group.title}</h3>
                    <BankingRecommendedOptionsSection
                      placementId={group.placementId}
                      analyticsPageContext={group.analyticsPageContext}
                      categoryLinks={[...group.categoryLinks]}
                      browseLabel="More on ExpatCopilot: "
                      regionIntroLabel={meta.recommendedProviders.comparisonStripIntroLabel}
                      utmReferrerPath={CANONICAL}
                      surfaceTone="muted"
                    />
                  </div>
                ))}
              </div>
              <AffiliateDisclosureNote className="mt-6 text-xs">{DEFAULT_MONETIZATION_DISCLOSURE}</AffiliateDisclosureNote>
            </SectionBlock>

            <BankingCompareFitEstimateCostCta className={SECTION_MAJOR} showFeesCrossline={false} />

            <section id={meta.related.id} className={SECTION_MAJOR} aria-labelledby="account-rejection-related-heading">
              <h2 id="account-rejection-related-heading" className="text-xl font-semibold tracking-tight text-foreground">
                {meta.related.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-foreground-muted">{meta.related.subtitle}</p>
              <ul className="mt-5 grid min-w-0 gap-3 sm:grid-cols-2">
                {meta.related.items.map((t) => (
                  <li key={t.href}>
                    <Link
                      href={t.href}
                      className={cn(
                        "flex h-full flex-col rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 transition hover:border-border-strong hover:bg-surface-muted sm:p-5",
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
          </MoveGuideSectionPanel>
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
