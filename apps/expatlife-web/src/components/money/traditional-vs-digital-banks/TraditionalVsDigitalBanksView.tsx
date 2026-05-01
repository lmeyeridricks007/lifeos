import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
import {
  BANKING_AT_A_GLANCE_PANEL_CLASS,
  BANKING_GUIDE_STACK_CLASS,
  BANKING_SECTION_PANEL_CLASS,
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";
import { BankingCompareFitEstimateCostCta } from "@/components/banking/BankingCompareFitEstimateCostCta";
import { BankTypeComparison } from "@/components/banking/BankTypeComparison";
import { BankScenarioCards } from "@/components/banking/BankScenarioCards";
import { HybridBankingSetup } from "@/components/banking/HybridBankingSetup";
import { BankingSetupDecisionCards } from "@/components/banking/BankingSetupDecisionCards";
import { MoveMisunderstandingCardGrid } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { AffiliateDisclosureNote } from "@/src/components/monetization/AffiliateDisclosureNote";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import { bankingInstructionalRasterAssets } from "@/src/components/money/banking-cluster/bankingInstructionalRasterAssets";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import { bankingSubpageGlossarySection } from "@/src/data/banking/bankingGlossaryTerms";
import { traditionalVsDigitalBanksPageModel as meta } from "./traditionalVsDigitalBanksPageModel";

const CANONICAL = meta.path;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const SECTION_MAJOR = cn(SECTION_SCROLL_MARGIN, BANKING_SECTION_PANEL_CLASS);
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

export function TraditionalVsDigitalBanksView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Banking", item: new URL("/netherlands/money/banking/", baseUrl).toString() },
    { name: "Traditional vs digital", item: new URL(CANONICAL, baseUrl).toString() },
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

  const mistakeRows = meta.misconceptions.cards.map((c) => ({
    id: c.title,
    title: c.title,
    body: <p className="text-sm leading-relaxed text-foreground-muted">{c.body}</p>,
  }));

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Also helpful"
      deepLinks={[
        {
          href: "/netherlands/tools/bank-comparison/",
          label: "Bank comparison tool →",
          description: "See how your answers weight traditional vs digital vs transfer add-ons.",
        },
        {
          href: "/netherlands/tools/banking-cost-estimator/",
          label: "Banking cost estimator →",
          description: "Turn your setup and usage into monthly and yearly euro planning bands.",
        },
        { href: meta.hero.primaryCta.href, label: "Compare banks →", description: "Editorial shortlist — not live pricing." },
        { href: "/netherlands/money/banking/types-of-accounts/", label: "Types of bank accounts →", description: "Current, savings, joint, student, business, digital, cards." },
        { href: `#${meta.hybridSetup.id}`, label: "Hybrid setup →", description: "Traditional + digital in practice." },
        { href: `#${meta.decisionHelper.id}`, label: "Which setup fits you? →", description: "Quick decision cards." },
        { href: "/netherlands/open-bank-account-netherlands/", label: "Open bank account guide →", description: "Documents and BSN timing." },
        { href: "/netherlands/money/banking/fees/", label: "Banking fees & costs →", description: "Fee types, transfers, ATM, and traps." },
        { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work →", description: "IBAN, iDEAL, SEPA, and direct debits (Money · Banking)." },
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
                    Traditional vs digital
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={meta.hero.subtitle}
              afterSubtitle={
                <div className="mt-4 min-w-0 max-w-full space-y-4 sm:mt-5">
                  <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.editorialPrinciple}</p>
                  <ul className="grid list-none gap-2 p-0 sm:grid-cols-3" aria-label="Quick banking setup shortcuts">
                    {meta.hero.aboveFoldQuick.map((row) => (
                      <li key={row.label} className="min-w-0">
                        <Link
                          href={row.href}
                          className="block rounded-lg border border-border/80 bg-surface-raised px-2.5 py-2 text-left shadow-sm ring-1 ring-border/15 transition hover:border-border-strong hover:bg-surface-muted sm:px-3"
                        >
                          <span className="block text-[11px] font-bold text-foreground">{row.label}</span>
                          <span className="mt-0.5 block text-[10px] leading-snug text-foreground-muted">{row.hint}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
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
                  <nav className="border-t border-border/50 pt-3" aria-label="Common next steps">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Also useful</p>
                    <ul className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
                      {meta.hero.contextualLinks.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className={tertiaryLinkClass}>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <BankingCompareFitEstimateCostCta className="mt-4 max-w-full" />
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
            <div className="flex min-w-0 max-w-full flex-col gap-3 sm:gap-5">
              <section
                id="at-a-glance"
                className={cn(
                  SECTION_SCROLL_MARGIN,
                  BANKING_AT_A_GLANCE_PANEL_CLASS
                )}
                aria-labelledby="traditional-digital-at-a-glance-heading"
              >
                <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                <h2 id="traditional-digital-at-a-glance-heading" className="text-xl font-bold tracking-tight text-copilot-text-primary sm:text-2xl">
                  {meta.atAGlance.sectionTitle}
                </h2>
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

              <div className="rounded-xl border border-brand-strong/20 bg-brand/[0.06] px-3 py-3 ring-1 ring-brand-strong/10 sm:px-4 sm:py-3.5">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Reality check</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{meta.hero.editorialPrinciple}</p>
              </div>

              <SectionBlock
                id={meta.quickAnswer.id}
                className={SECTION_MAJOR}
                eyebrow={meta.quickAnswer.eyebrow}
                title={meta.quickAnswer.title}
                subtitle={meta.quickAnswer.subtitle}
                subtitleMarkdown
                compact
                contentClassName="mt-3 sm:mt-4"
              >
                <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {meta.quickAnswer.cards.map((card, index) => (
                    <article
                      key={card.title}
                      className={cn(
                        BANKING_VISUAL_CARD_SHELL_CLASS,
                        movingNlCardMicroLiftClass
                      )}
                    >
                      <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
                      <div className={BANKING_VISUAL_CARD_BODY_CLASS}>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>Setup choice</span>
                          <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">{card.title}</h3>
                        <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "mt-4")}>
                          <ul className="list-disc space-y-1.5 pl-3.5 text-xs leading-snug text-foreground-muted marker:text-brand sm:text-[13px] sm:leading-snug" role="list">
                            {card.bullets.map((b) => (
                              <li key={b}>
                                <BoldInline text={b} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </SectionBlock>
            </div>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <MoveGuideSectionPanel className="min-w-0 max-w-full">
          <PillarJourneyStack variant="guide" density="compact" className={BANKING_GUIDE_STACK_CLASS}>
            <MovePillarMobileToc items={meta.sectionNav} />

            <SectionBlock
              id={meta.howTraditional.id}
              className={SECTION_MAJOR}
              eyebrow={meta.howTraditional.eyebrow}
              title={meta.howTraditional.title}
            >
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.traditionalVsDigital}
                caption="Branch-first vs app-first — same regulated products underneath; the difference is how you get help and pay day to day."
              />
              <BoldParagraph
                text={meta.howTraditional.lead}
                className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-4 text-sm text-foreground-muted">
                {meta.howTraditional.points.map((p) => (
                  <li key={p}>
                    <BoldInline text={p} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <article className={cn("rounded-2xl border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10", movingNlCardMicroLiftClass)}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-800">Pros</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted">
                    {meta.howTraditional.pros.map((p) => (
                      <li key={p}>
                        <BoldInline text={p} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                      </li>
                    ))}
                  </ul>
                </article>
                <article className={cn("rounded-2xl border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10", movingNlCardMicroLiftClass)}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-900/90">Cons</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted">
                    {meta.howTraditional.cons.map((p) => (
                      <li key={p}>
                        <BoldInline text={p} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.howDigital.id}
              className={SECTION_MAJOR}
              eyebrow={meta.howDigital.eyebrow}
              title={meta.howDigital.title}
            >
              <BoldParagraph
                text={meta.howDigital.lead}
                className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-4 text-sm text-foreground-muted">
                {meta.howDigital.points.map((p) => (
                  <li key={p}>
                    <BoldInline text={p} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <article className={cn("rounded-2xl border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10", movingNlCardMicroLiftClass)}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-800">Pros</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted">
                    {meta.howDigital.pros.map((p) => (
                      <li key={p}>
                        <BoldInline text={p} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                      </li>
                    ))}
                  </ul>
                </article>
                <article className={cn("rounded-2xl border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10", movingNlCardMicroLiftClass)}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-900/90">Cons</p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted">
                    {meta.howDigital.cons.map((p) => (
                      <li key={p}>
                        <BoldInline text={p} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.hybridSetup.id}
              className={SECTION_MAJOR}
              eyebrow={meta.hybridSetup.eyebrow}
              title={meta.hybridSetup.title}
              subtitle={meta.hybridSetup.lead}
              subtitleMarkdown
            >
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-4 text-sm text-foreground-muted" role="list">
                {meta.hybridSetup.introBullets.map((b) => (
                  <li key={b}>
                    <BoldInline text={b} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <HybridBankingSetup
                traditionalAccountLabel={meta.hybridSetup.traditionalAccountLabel}
                digitalAccountLabel={meta.hybridSetup.digitalAccountLabel}
                traditionalAccountHint={meta.hybridSetup.traditionalAccountHint}
                digitalAccountHint={meta.hybridSetup.digitalAccountHint}
                traditionalUsesHeading={meta.hybridSetup.traditionalUsesHeading}
                digitalUsesHeading={meta.hybridSetup.digitalUsesHeading}
                traditionalItems={meta.hybridSetup.traditionalItems}
                digitalItems={meta.hybridSetup.digitalItems}
              />
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Link href={meta.hybridSetup.cta.href} className={primaryCtaClass}>
                  {meta.hybridSetup.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id="comparison-table"
              className={SECTION_MAJOR}
              eyebrow="Compare"
              title="Side-by-side comparison"
              subtitle="Typical patterns — your bank’s current tariff PDF still wins for fees."
            >
              <BoldParagraph
                text={meta.comparisonTable.scanIntro}
                className="mt-3 max-w-3xl text-xs leading-relaxed text-foreground-muted sm:text-sm [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <p className="mt-2 text-xs text-foreground-muted lg:hidden" role="note">
                Below <strong className="font-semibold text-foreground">tablet width</strong> this becomes stacked cards — no sideways scrolling.
              </p>
              <BankTypeComparison className="mt-3 lg:mt-4" />
              <AffiliateDisclosureNote className="mt-4 max-w-3xl text-xs">
                {DEFAULT_MONETIZATION_DISCLOSURE} This table is editorial orientation only — not live pricing.
              </AffiliateDisclosureNote>
            </SectionBlock>

            <SectionBlock
              id={meta.decisionHelper.id}
              className={SECTION_MAJOR}
              eyebrow={meta.decisionHelper.eyebrow}
              title={meta.decisionHelper.title}
              subtitle={meta.decisionHelper.lead}
              subtitleMarkdown
            >
              <BankingSetupDecisionCards cards={meta.decisionHelper.cards} className="mt-4" />
            </SectionBlock>

            <SectionBlock
              id={meta.scenarios.id}
              className={SECTION_MAJOR}
              eyebrow={meta.scenarios.eyebrow}
              title={meta.scenarios.title}
            >
              <BankScenarioCards cards={meta.scenarios.cards} className="mt-4" />
            </SectionBlock>

            <SectionBlock id={meta.tradeoffs.id} className={SECTION_MAJOR} eyebrow={meta.tradeoffs.eyebrow} title={meta.tradeoffs.title}>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {meta.tradeoffs.cards.map((c) => (
                  <article
                    key={c.title}
                    className={cn(
                      "rounded-2xl border border-border bg-surface-muted/40 p-4 ring-1 ring-border/40 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm text-foreground-muted">{c.body}</p>
                  </article>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id={meta.misconceptions.id} className={SECTION_MAJOR} eyebrow={meta.misconceptions.eyebrow} title={meta.misconceptions.title}>
              <MoveMisunderstandingCardGrid rows={mistakeRows} className="mt-4" />
            </SectionBlock>

            <section id={meta.related.id} className={SECTION_MAJOR} aria-labelledby="related-heading">
              <h2 id="related-heading" className="text-xl font-bold tracking-tight text-foreground">
                {meta.related.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-foreground-muted">{meta.related.subtitle}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {meta.related.items.map((t) => (
                  <li key={t.title}>
                    {t.href.startsWith("http") ? (
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex h-full flex-col rounded-2xl border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 transition hover:border-border-strong hover:bg-surface-muted sm:p-5",
                          movingNlCardMicroLiftClass
                        )}
                      >
                        <span className="text-sm font-semibold text-foreground">{t.title}</span>
                        <span className="mt-2 text-sm text-foreground-muted">{t.description}</span>
                        <span className="mt-3 text-xs font-semibold text-link">{t.ctaLabel} ↗</span>
                      </a>
                    ) : (
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
                    )}
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
