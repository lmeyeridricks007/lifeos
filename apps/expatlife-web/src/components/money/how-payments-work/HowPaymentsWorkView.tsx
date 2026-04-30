import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
  PillarJourneyStack,
} from "@/components/page/pillar-template";
import { MoveGuideSectionPanel, SectionBlock } from "@/components/page/moving-pillar";
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
import {
  BANKING_AT_A_GLANCE_PANEL_CLASS,
  BANKING_GUIDE_STACK_CLASS,
  BANKING_SECTION_PANEL_CLASS,
} from "@/components/banking/bankingPageUi";
import { GuideTopicDeepDive, stripPairedBold } from "@/components/banking/GuideTopicParagraphCards";
import { PaymentConceptGrid } from "@/components/banking/PaymentConceptGrid";
import {
  BetaalverzoekFlowInfographic,
  DirectDebitVisualInfographic,
  HowPaymentsWorkEditorialFigureGrid,
  IbanVsCardInfographic,
  IdealCheckoutInfographic,
  InternationalPaymentsVisualInfographic,
  PaymentMethodsReferenceStripInfographic,
  PaymentRailsOverviewInfographic,
  ShopContactlessTapInfographic,
} from "@/components/banking/HowPaymentsWorkIllustrations";
import { PaymentFlowVisual } from "@/components/banking/PaymentFlowVisual";
import { accountSetupScenarioToPaymentScenario, PaymentScenarioCards } from "@/components/banking/PaymentScenarioCards";
import { MoveGuideSignatureDark } from "@/src/components/guides/MoveGuideSignatureDark";
import { MoveMisunderstandingCardGrid } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { bankingAccountRelatedGuides } from "@/src/data/banking/accountTypes";
import { bankingSubpageGlossarySection } from "@/src/data/banking/bankingGlossaryTerms";
import { getLivingStartHereInstructionalFigure } from "@/src/components/living/living-start-here-cluster/livingStartHereInstructionalRasterAssets";
import { bankingInstructionalRasterAssets } from "@/src/components/money/banking-cluster/bankingInstructionalRasterAssets";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import { howPaymentsWorkPageModel as meta } from "./howPaymentsWorkPageModel";

const CANONICAL = meta.path;
const LIVING_START_HERE_INSTRUCTIONAL = getLivingStartHereInstructionalFigure("how-payments-work");
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const SECTION_MAJOR = cn(SECTION_SCROLL_MARGIN, BANKING_SECTION_PANEL_CLASS);
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

export function HowPaymentsWorkView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Banking", item: new URL("/netherlands/money/banking/", baseUrl).toString() },
    { name: "How payments work", item: new URL(CANONICAL, baseUrl).toString() },
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

  const mistakeRows = meta.misunderstandings.cards.map((c) => ({
    id: c.title,
    title: c.title,
    body: <p className="text-sm leading-relaxed text-foreground-muted">{c.body}</p>,
  }));

  const situationPaymentScenarios = meta.situations.cards.map(accountSetupScenarioToPaymentScenario);

  const flowSubheadingClass = "text-base font-semibold tracking-tight text-foreground";

  const chooserKicker = "text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted";
  const chooserKickerAccent = "text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong";

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Also helpful"
      deepLinks={[
        { href: meta.hero.secondaryCta.href, label: "Compare banks →", description: "Shortlist — confirm iDEAL, cards, and fees on each bank site." },
        { href: "/netherlands/open-bank-account-netherlands/", label: "Open bank account →", description: "Move guide — documents and BSN timing." },
        { href: "/netherlands/money/banking/fees/", label: "Banking fees →", description: "Fee checklist before you rely on transfers." },
        { href: "/netherlands/money/banking/#banking-glossary-hub", label: "Banking glossary →", description: "Short definitions on the Banking hub." },
        { href: "/netherlands/living/payments/", label: "Living: payments hub →", description: "Corridors and wider money orientation." },
        { href: "/netherlands/living/apps/", label: "Essential apps →", description: "Bank apps and everyday payment tools." },
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
                  <Link href="/netherlands/money/banking/" className="transition-colors hover:text-foreground">
                    Banking
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <span className="text-foreground" aria-current="page">
                    How payments work
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
                <AccountSetupScenarioCards
                  scenarios={meta.quickAnswer.cards}
                  columns="dense"
                  className="min-w-0 max-w-full"
                  labels={{ setup: "What it means", why: "When you use it", watchOut: "Common watch-out" }}
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
                <HowPaymentsWorkEditorialFigureGrid figures={meta.editorialFigures} className="mt-6 sm:mt-7" />
              </section>
            </div>
          </PillarGuideAtGlanceRegion>
            <div className="mt-6 min-w-0 max-w-full sm:mt-8">
              <MoveGuideSignatureDark model={meta.paymentRailsSignature} />
            </div>
          </Fragment>
        }
        keySections={
          <MoveGuideSectionPanel className="min-w-0 max-w-full">
          <PillarJourneyStack variant="guide" density="compact" className={BANKING_GUIDE_STACK_CLASS}>
            <MovePillarMobileToc items={meta.sectionNav} />

            {LIVING_START_HERE_INSTRUCTIONAL ? (
              <InstructionalRasterFigure
                raster={LIVING_START_HERE_INSTRUCTIONAL.raster}
                caption={LIVING_START_HERE_INSTRUCTIONAL.caption}
                className="w-full"
              />
            ) : null}

            <SectionBlock
              id={meta.firstMonthSetup.id}
              className={SECTION_MAJOR}
              eyebrow={meta.firstMonthSetup.eyebrow}
              title={meta.firstMonthSetup.title}
              subtitle={meta.firstMonthSetup.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.paymentsFlow}
                caption="How rent, salary, shopping, and subscriptions usually move — then read the details for each rail below."
              />
              <div className="grid min-w-0 max-w-full gap-3 sm:grid-cols-2 sm:gap-4">
                {meta.firstMonthSetup.cards.map((card) => (
                  <article
                    key={card.id}
                    className={cn(
                      "relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-sm font-bold tracking-tight text-foreground">{card.title}</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground-muted marker:text-brand" role="list">
                      {card.bullets.map((line) => (
                        <li key={line}>
                          <BoldInline text={line} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <nav aria-label="Banking setup guides" className="mt-6 flex min-w-0 flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link href={meta.firstMonthSetup.ctas[0].href} className={cn(primaryCtaClass, "w-full min-w-0 justify-center sm:w-auto")}>
                  {meta.firstMonthSetup.ctas[0].label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
                <Link href={meta.firstMonthSetup.ctas[1].href} className={cn(secondaryCtaClass, "w-full min-w-0 justify-center sm:w-auto")}>
                  {meta.firstMonthSetup.ctas[1].label}
                </Link>
                <Link href={meta.firstMonthSetup.ctas[2].href} className={cn(secondaryCtaClass, "w-full min-w-0 justify-center sm:w-auto")}>
                  {meta.firstMonthSetup.ctas[2].label}
                </Link>
              </nav>
            </SectionBlock>

            <SectionBlock
              id={meta.paymentMethodChooser.id}
              className={SECTION_MAJOR}
              eyebrow={meta.paymentMethodChooser.eyebrow}
              title={meta.paymentMethodChooser.title}
              subtitle={meta.paymentMethodChooser.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <div className="grid min-w-0 max-w-full gap-3 sm:grid-cols-2 sm:gap-4">
                {meta.paymentMethodChooser.cards.map((card) => {
                  const guide = bankingAccountRelatedGuides[card.relatedGuideKey];
                  return (
                    <article
                      key={card.id}
                      className={cn(
                        "relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                        movingNlCardMicroLiftClass
                      )}
                    >
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-sm font-bold tracking-tight text-foreground">{card.title}</h3>

                      <p className={cn(chooserKickerAccent, "mt-3")}>Expected</p>
                      <BoldParagraph
                        text={card.expected}
                        className="mt-1 text-sm font-semibold text-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
                      />

                      <p className={cn(chooserKicker, "mt-3 text-amber-900/80")}>What to watch out for</p>
                      <BoldParagraph
                        text={card.watchOut}
                        className="mt-1 text-sm text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />

                      <div className="mt-4 border-t border-border/50 pt-4">
                        <p className={cn(chooserKicker, "mb-2")}>Related guide</p>
                        <Link href={guide.href} className={tertiaryLinkClass}>
                          {guide.label} →
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </SectionBlock>

            <PaymentRailsOverviewInfographic />

            <SectionBlock
              id={meta.iban.id}
              className={SECTION_MAJOR}
              eyebrow={meta.iban.eyebrow}
              title={meta.iban.title}
              contentClassName="mt-1 sm:mt-2"
            >
              <IbanVsCardInfographic className="mb-5 sm:mb-6" />
              <GuideTopicDeepDive
                scanLines={meta.topicScanHints.iban}
                scanAriaLabel="IBAN in brief"
                paragraphs={meta.iban.paragraphs}
              />
              <ul className="mt-6 flex flex-col gap-2 border-t border-border/40 pt-5 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {meta.iban.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={tertiaryLinkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.ideal.id}
              className={SECTION_MAJOR}
              eyebrow={meta.ideal.eyebrow}
              title={meta.ideal.title}
              contentClassName="mt-1 sm:mt-2"
            >
              <IdealCheckoutInfographic className="mb-5 sm:mb-6" />
              <GuideTopicDeepDive
                scanLines={meta.topicScanHints.ideal}
                scanAriaLabel="iDEAL in brief"
                paragraphs={meta.ideal.paragraphs}
              />
              <ul className="mt-6 flex flex-col gap-2 border-t border-border/40 pt-5 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {meta.ideal.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={tertiaryLinkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.sepa.id}
              className={SECTION_MAJOR}
              eyebrow={meta.sepa.eyebrow}
              title={meta.sepa.title}
              contentClassName="mt-1 sm:mt-2"
            >
              <GuideTopicDeepDive
                scanLines={meta.topicScanHints.sepa}
                scanAriaLabel="Transfers and direct debits in brief"
                paragraphs={meta.sepa.paragraphs}
              />
              <DirectDebitVisualInfographic className="mt-6 sm:mt-7" />
              <div className="mt-8 sm:mt-9">
                <h3 className={flowSubheadingClass}>Typical IBAN → SEPA transfer → confirmation</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.sepaTransferFlowCaption}</p>
                <PaymentFlowVisual
                  className="mt-4"
                  flowLabel={meta.paymentFlows.ibanSepaTransfer.flowLabel}
                  steps={meta.paymentFlows.ibanSepaTransfer.steps}
                />
              </div>
              <ul className="mt-6 flex flex-col gap-2 border-t border-border/40 pt-5 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {meta.sepa.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={tertiaryLinkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.cards.id}
              className={SECTION_MAJOR}
              eyebrow={meta.cards.eyebrow}
              title={meta.cards.title}
              contentClassName="mt-1 sm:mt-2"
            >
              <GuideTopicDeepDive
                scanLines={meta.topicScanHints.cards}
                scanAriaLabel="Cards and contactless in brief"
                paragraphs={meta.cards.paragraphs}
              />
              <ShopContactlessTapInfographic className="mt-6 sm:mt-7" />
              <div className="mt-6 border-t border-border/40 pt-5">
                <p className={cn(chooserKicker, "text-amber-900/80")}>In shops — watch-outs</p>
                <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted marker:text-brand" role="list">
                  {meta.cards.watchOuts.map((w) => (
                    <li key={w}>{stripPairedBold(w)}</li>
                  ))}
                </ul>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.paymentRequests.id}
              className={SECTION_MAJOR}
              eyebrow={meta.paymentRequests.eyebrow}
              title={meta.paymentRequests.title}
              contentClassName="mt-1 sm:mt-2"
            >
              <BetaalverzoekFlowInfographic className="mb-5 sm:mb-6" />
              <GuideTopicDeepDive
                scanLines={meta.topicScanHints.paymentRequests}
                scanAriaLabel="Payment requests in brief"
                paragraphs={meta.paymentRequests.paragraphs}
              />
              <ul className="mt-6 flex flex-col gap-2 border-t border-border/40 pt-5 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {meta.paymentRequests.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={tertiaryLinkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.salaryRent.id}
              className={SECTION_MAJOR}
              eyebrow={meta.salaryRent.eyebrow}
              title={meta.salaryRent.title}
              contentClassName="mt-4 sm:mt-5"
            >
              <p className="max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.salaryRent.intro}</p>
              <div className="mt-5 grid min-w-0 max-w-full gap-3 sm:grid-cols-2 sm:gap-4">
                {meta.salaryRent.patterns.map((block) => (
                  <article
                    key={block.title}
                    className={cn(
                      "relative flex min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-sm font-bold tracking-tight text-foreground">{block.title}</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground-muted marker:text-brand" role="list">
                      {block.lines.map((line) => (
                        <li key={line}>
                          <BoldInline text={line} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="mt-8 space-y-8 sm:mt-9 sm:space-y-9">
                <div>
                  <h3 className={flowSubheadingClass}>Salary — how the payment usually moves</h3>
                  <PaymentFlowVisual
                    className="mt-4"
                    flowLabel={meta.paymentFlows.salary.flowLabel}
                    steps={meta.paymentFlows.salary.steps}
                  />
                </div>
                <div>
                  <h3 className={flowSubheadingClass}>Rent — how the payment usually moves</h3>
                  <PaymentFlowVisual
                    className="mt-4"
                    flowLabel={meta.paymentFlows.rent.flowLabel}
                    steps={meta.paymentFlows.rent.steps}
                  />
                </div>
                <div>
                  <h3 className={flowSubheadingClass}>Utilities — how direct debit usually works</h3>
                  <PaymentFlowVisual
                    className="mt-4"
                    flowLabel={meta.paymentFlows.utilities.flowLabel}
                    steps={meta.paymentFlows.utilities.steps}
                  />
                </div>
              </div>

              <div className="relative mt-8 overflow-hidden rounded-2xl border border-brand-strong/20 bg-brand/[0.06] px-4 py-4 ring-1 ring-brand-strong/10 sm:mt-9 sm:px-5 sm:py-5">
                <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Checklist</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">{meta.salaryRent.checklistIntro}</p>
                <ul className="mt-4 grid list-none grid-cols-1 gap-3 p-0 min-[520px]:grid-cols-2" role="list">
                  {meta.salaryRent.checklist.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "flex min-h-0 gap-3 rounded-xl border border-border/70 bg-surface-raised/90 px-3 py-3 shadow-sm ring-1 ring-border/10 sm:px-4 sm:py-3.5",
                        movingNlCardMicroLiftClass
                      )}
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                      <span className="min-w-0 text-sm leading-relaxed text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.international.id}
              className={SECTION_MAJOR}
              eyebrow={meta.international.eyebrow}
              title={meta.international.title}
              contentClassName="mt-1 sm:mt-2"
            >
              <InternationalPaymentsVisualInfographic className="mb-5 sm:mb-6" />
              <GuideTopicDeepDive
                scanLines={meta.topicScanHints.international}
                scanAriaLabel="International payments in brief"
                paragraphs={meta.international.paragraphs}
              />
              <ul className="mt-6 flex flex-col gap-2 border-t border-border/40 pt-5 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {meta.international.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={tertiaryLinkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.conceptReference.id}
              className={SECTION_MAJOR}
              eyebrow={meta.conceptReference.eyebrow}
              title={meta.conceptReference.title}
              subtitle={meta.conceptReference.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <PaymentMethodsReferenceStripInfographic className="mb-4 sm:mb-5" />
              <PaymentConceptGrid concepts={meta.conceptReference.concepts} className="min-w-0 max-w-full" />
            </SectionBlock>

            <SectionBlock
              id={meta.situations.id}
              className={SECTION_MAJOR}
              eyebrow={meta.situations.eyebrow}
              title={meta.situations.title}
              subtitle={meta.situations.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <PaymentScenarioCards
                scenarios={situationPaymentScenarios}
                className="min-w-0 max-w-full"
                labels={{ usualMethod: "Typical method", whatToWatch: "What to watch", watchOut: "Watch-out" }}
              />
            </SectionBlock>

            <SectionBlock
              id={meta.misunderstandings.id}
              className={SECTION_MAJOR}
              eyebrow={meta.misunderstandings.eyebrow}
              title={meta.misunderstandings.title}
              subtitle={meta.misunderstandings.subtitle}
              contentClassName="mt-4 sm:mt-5"
            >
              <MoveMisunderstandingCardGrid rows={mistakeRows} className="mt-4" />
            </SectionBlock>

            <section id={meta.relatedTools.id} className={SECTION_MAJOR} aria-labelledby="hpw-related-heading">
              <h2 id="hpw-related-heading" className="text-xl font-bold tracking-tight text-foreground">
                {meta.relatedTools.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.relatedTools.subtitle}</p>
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

            <SectionBlock
              id={bankingSubpageGlossarySection.id}
              className={SECTION_MAJOR}
              eyebrow={bankingSubpageGlossarySection.eyebrow}
              title={bankingSubpageGlossarySection.title}
              compact
            >
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground-muted">{bankingSubpageGlossarySection.intro}</p>
              <Link
                href="/netherlands/money/banking/#banking-glossary-hub"
                className={cn(tertiaryLinkClass, "mt-4 inline-flex min-h-[44px] items-center font-semibold")}
              >
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
