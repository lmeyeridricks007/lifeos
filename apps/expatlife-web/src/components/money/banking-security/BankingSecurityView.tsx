import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { BoldParagraph } from "@/components/content/PillarContentBlocks";
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
import { AccountProtectionChecklist } from "@/components/banking/AccountProtectionChecklist";
import { BankingContextAside } from "@/components/banking/BankingContextAside";
import { BankingCompareFitEstimateCostCta } from "@/components/banking/BankingCompareFitEstimateCostCta";
import { BankingGuideHeroNextSteps } from "@/components/banking/BankingGuideHeroNextSteps";
import { BankingRecommendedOptionsSection } from "@/components/banking/BankingRecommendedOptionsSection";
import { FraudTypeGrid } from "@/components/banking/FraudTypeGrid";
import { RedFlagChecklist } from "@/components/banking/RedFlagChecklist";
import { SafeBankingHabits } from "@/components/banking/SafeBankingHabits";
import { ScamResponseSteps } from "@/components/banking/ScamResponseSteps";
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
  BANKING_FEELS_WRONG_FIRST_SECTION_ID,
  bankingAccountProtectionChecklist,
  bankingCardAtmSafety,
  bankingFeelsWrongFirstCalmNote,
  bankingFeelsWrongFirstChecklist,
  bankingFraudRedFlags,
  bankingFraudTypes,
  bankingInternationalTransferSafety,
  bankingPaymentRequestSafetyTips,
  bankingPhishingContent,
  bankingSafeHabits,
  bankingScamResponseNotes,
  bankingScamResponseSteps,
  bankingSecurityMisunderstandings,
} from "@/src/data/banking/bankingSafety";
import { BANK_COMPARISON_TOOL_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { bankingSecurityPageModel as meta } from "./bankingSecurityPageModel";

const CANONICAL = meta.path;
const SECTION_SCROLL_MARGIN = bankingGuideSectionScrollMarginClass;
const SECTION_MAJOR = BANKING_GUIDE_MAJOR_SECTION_CLASS;
const AT_A_GLANCE_SECTION_CLASS = cn(SECTION_SCROLL_MARGIN, BANKING_AT_A_GLANCE_PANEL_CLASS);

export function BankingSecurityView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Banking", item: new URL("/netherlands/money/banking/", baseUrl).toString() },
    { name: "Banking safety & fraud", item: new URL(CANONICAL, baseUrl).toString() },
  ];

  const misunderstandingRows = bankingSecurityMisunderstandings.map((c) => ({
    id: c.title,
    title: c.title,
    body: <p className="text-sm leading-relaxed text-foreground-muted">{c.body}</p>,
  }));

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Also helpful"
      deepLinks={[
        { href: BANK_COMPARISON_TOOL_PATH, label: "Bank comparison tool →", description: "Fit scores for everyday banking — confirm security features on each site." },
        { href: "/netherlands/tools/banking-cost-estimator/", label: "Banking cost estimator →", description: "Monthly planning bands next to fee choices." },
        { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work →", description: "IBAN, iDEAL, betaalverzoek, and Dutch norms." },
        { href: "/netherlands/money/banking/international-transfers/", label: "International transfers →", description: "Safer large-send checks alongside cost lenses." },
        { href: "/netherlands/money/banking/fees/", label: "Banking fees & costs →", description: "Fee checklist before you optimise for price alone." },
        { href: "/netherlands/money/banking/#banking-glossary-hub", label: "Banking glossary →", description: "Short definitions on the Banking hub." },
        { href: "/netherlands/open-bank-account-netherlands/", label: "Open bank account →", description: "Documents and BSN timing." },
        {
          href: "/netherlands/money/banking/account-rejection/",
          label: "Account rejected or delayed →",
          description: "When onboarding stalls — separate from fraud, but still stressful.",
        },
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
                    Banking safety &amp; fraud
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
                    <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.notAdviceNote}</p>
                    <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.trustPaymentsNote}</p>
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
        atAGlance={
          <Fragment>
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
                  <SafeBankingHabits habits={bankingSafeHabits} />
                  <BankingContextAside
                    className="mt-6"
                    title="Identity misuse or fraud"
                    body="If you suspect identity misuse or fraud, act quickly and use official channels — your bank’s own app or website first, then the reporting links at the bottom of this page."
                    href={`${CANONICAL}#${BANKING_FEELS_WRONG_FIRST_SECTION_ID}`}
                    ctaLabel="If something feels wrong — first steps"
                  />
                </SectionBlock>

                <SectionBlock
                  id={meta.feelsWrongFirst.id}
                  className={SECTION_MAJOR}
                  eyebrow={meta.feelsWrongFirst.eyebrow}
                  title={meta.feelsWrongFirst.title}
                  subtitle={meta.feelsWrongFirst.subtitle}
                  compact
                  contentClassName="mt-3 sm:mt-4"
                >
                  <div className="max-w-3xl space-y-4">
                    <ol
                      className="list-decimal space-y-2.5 pl-5 text-sm leading-snug text-foreground-muted marker:font-semibold marker:text-brand sm:space-y-3 sm:pl-6 sm:text-[0.9375rem] sm:leading-relaxed"
                      aria-labelledby={`${meta.feelsWrongFirst.id}-heading`}
                    >
                      {bankingFeelsWrongFirstChecklist.map((step) => (
                        <li key={step} className="pl-1">
                          {step}
                        </li>
                      ))}
                    </ol>
                    <p className="rounded-xl bg-slate-50/90 px-4 py-3 text-sm leading-snug text-foreground-muted ring-1 ring-border/50 sm:px-5 sm:py-3.5 sm:leading-relaxed">
                      {bankingFeelsWrongFirstCalmNote}
                    </p>
                  </div>
                </SectionBlock>

                <section
                  id="at-a-glance"
                  className={AT_A_GLANCE_SECTION_CLASS}
                  aria-labelledby="banking-security-at-glance-heading"
                >
                  <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                  <h2 id="banking-security-at-glance-heading" className="text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">
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
                        <p className="pt-1 text-xs font-bold uppercase tracking-[0.12em] text-copilot-text-muted">{cell.title}</p>
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
              </div>
            </PillarGuideAtGlanceRegion>
          </Fragment>
        }
        keySections={
          <MoveGuideSectionPanel className="min-w-0 max-w-full">
            <PillarJourneyStack variant="guide" density="compact" className={BANKING_GUIDE_STACK_CLASS}>
            <MovePillarMobileToc items={meta.sectionNav} />

            <PillarDarkStagesBand className={cn("w-full min-w-0", bankingGuideSectionScrollMarginClass)}>
              <SectionBlock
                id={meta.commonScams.id}
                className="relative z-10"
                contentClassName="mt-8 sm:mt-9"
                eyebrow={meta.commonScams.eyebrow}
                title={meta.commonScams.title}
                subtitle={meta.commonScams.subtitle}
                titleClassName={movingNlSectionH2StagesSignatureClass}
                tone="onDark"
              >
                <FraudTypeGrid types={bankingFraudTypes} variant="onDarkBand" />
              </SectionBlock>
            </PillarDarkStagesBand>

            <SectionBlock id={meta.phishing.id} className={SECTION_MAJOR} eyebrow={meta.phishing.eyebrow} title={meta.phishing.title}>
              <div className="mt-4 max-w-3xl space-y-3">
                {bankingPhishingContent.leadParagraphs.map((p) => (
                  <BoldParagraph key={p} text={p} className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
                ))}
              </div>
              <RedFlagChecklist
                className="mt-8"
                title={bankingPhishingContent.redFlagChecklistTitle}
                titleId="banking-phishing-red-flags-heading"
                items={bankingFraudRedFlags}
              />
            </SectionBlock>

            <SectionBlock
              id={meta.paymentRequests.id}
              className={SECTION_MAJOR}
              eyebrow={meta.paymentRequests.eyebrow}
              title={meta.paymentRequests.title}
            >
              <div className="mt-4 max-w-3xl space-y-3">
                {bankingPaymentRequestSafetyTips.paragraphs.map((p) => (
                  <BoldParagraph key={p} text={p} className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
                ))}
              </div>
              <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {bankingPaymentRequestSafetyTips.crossLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={bankingGuideTertiaryLinkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock id={meta.cardAtm.id} className={SECTION_MAJOR} eyebrow={meta.cardAtm.eyebrow} title={meta.cardAtm.title}>
              <p className="max-w-3xl text-sm leading-relaxed text-foreground-muted">{bankingCardAtmSafety.intro}</p>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm text-foreground-muted" role="list">
                {bankingCardAtmSafety.points.map((p) => (
                  <li key={p}>
                    <BoldParagraph text={p} className="text-sm leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock id={meta.intlTransferSafety.id} className={SECTION_MAJOR} eyebrow={meta.intlTransferSafety.eyebrow} title={meta.intlTransferSafety.title}>
              <p className="max-w-3xl text-sm leading-relaxed text-foreground-muted">{bankingInternationalTransferSafety.intro}</p>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm text-foreground-muted" role="list">
                {bankingInternationalTransferSafety.points.map((p) => (
                  <li key={p}>
                    <BoldParagraph text={p} className="text-sm leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {bankingInternationalTransferSafety.crossLinks.map((l) => (
                  <Link key={l.href} href={l.href} className={bankingGuideTertiaryLinkClass}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.protectAccount.id}
              className={SECTION_MAJOR}
              eyebrow={meta.protectAccount.eyebrow}
              title={meta.protectAccount.title}
              subtitle={meta.protectAccount.subtitle}
            >
              <AccountProtectionChecklist
                className="mt-4"
                items={bankingAccountProtectionChecklist}
                ariaLabelledBy={`${meta.protectAccount.id}-heading`}
              />
            </SectionBlock>

            <SectionBlock
              id={meta.ifScammed.id}
              className={SECTION_MAJOR}
              eyebrow={meta.ifScammed.eyebrow}
              title={meta.ifScammed.title}
              subtitle={meta.ifScammed.subtitle}
            >
              <div className="mt-4 max-w-3xl rounded-xl border border-border/60 bg-surface-muted/40 px-4 py-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-border/30 sm:px-5 sm:py-4">
                <BoldParagraph text={meta.ifScammed.urgentChannelsNote} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
              </div>
              <p className="mt-4 max-w-3xl text-sm text-foreground-muted">
                For the shortest order of actions, use the{" "}
                <Link href={`#${meta.feelsWrongFirst.id}`} className={bankingGuideTertiaryLinkClass}>
                  “If something feels wrong, do this first” checklist
                </Link>{" "}
                above — then return here for detail and official pointers.
              </p>
              <div className="mt-4 rounded-xl border border-amber-200/70 bg-amber-50/45 px-4 py-3 ring-1 ring-amber-100/40 sm:px-5 sm:py-4">
                <BoldParagraph text={bankingScamResponseNotes.actQuickly} className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground" />
              </div>
              <ScamResponseSteps className="mt-6" steps={bankingScamResponseSteps} />
              <BoldParagraph
                text={bankingScamResponseNotes.followUpScams}
                className="mt-6 max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <p className="mt-4">
                <Link href={`#${meta.feelsWrongFirst.id}`} className={cn(bankingGuideTertiaryLinkClass, "inline-flex min-h-[44px] items-center font-semibold")}>
                  Back to the short “do this first” checklist →
                </Link>
              </p>
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
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.recommendedProviders.editorialBridge}</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.recommendedProviders.disclaimer}</p>
              <div className="mt-8 space-y-10 border-t border-dashed border-border/60 pt-8">
                {meta.recommendedProviders.groups.map((group) => (
                  <div key={group.placementId}>
                    <h3 className="text-base font-bold tracking-tight text-foreground">{group.title}</h3>
                    <BankingRecommendedOptionsSection
                      placementId={group.placementId}
                      analyticsPageContext={group.analyticsPageContext}
                      boundaryNote={group.boundaryNote}
                      categoryLinks={[...group.categoryLinks]}
                      browseLabel="More on ExpatCopilot: "
                      regionIntroLabel="Features to compare (official sites)"
                      utmReferrerPath={CANONICAL}
                      surfaceTone="muted"
                    />
                  </div>
                ))}
              </div>
              <AffiliateDisclosureNote className="mt-6 text-xs">{DEFAULT_MONETIZATION_DISCLOSURE}</AffiliateDisclosureNote>
            </SectionBlock>

            <BankingCompareFitEstimateCostCta className={SECTION_MAJOR} showFeesCrossline={false} />

            <section id={meta.related.id} className={SECTION_MAJOR} aria-labelledby="banking-security-related-heading">
              <h2 id="banking-security-related-heading" className="text-xl font-bold tracking-tight text-foreground">
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
                      <span className="text-sm font-semibold text-foreground">{t.title}</span>
                      <span className="mt-2 text-sm text-foreground-muted">{t.description}</span>
                      <span className="mt-3 text-xs font-semibold text-link">{t.ctaLabel} →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <SectionBlock id={bankingSubpageGlossarySection.id} className={SECTION_MAJOR} eyebrow={bankingSubpageGlossarySection.eyebrow} title={bankingSubpageGlossarySection.title} compact>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground-muted">{bankingSubpageGlossarySection.intro}</p>
              <Link href="/netherlands/money/banking/#banking-glossary-hub" className={cn(bankingGuideTertiaryLinkClass, "mt-4 inline-flex min-h-[44px] items-center font-semibold")}>
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
