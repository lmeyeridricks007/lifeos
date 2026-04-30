import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CreditCard, Globe2, Landmark, Layers3, Send, Smartphone } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { BoldInline, BoldParagraph } from "@/components/content/PillarContentBlocks";
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
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { BankingAvoidableCostGrid } from "@/components/banking/BankingAvoidableCostGrid";
import { BankFeePatternCards } from "@/components/banking/BankFeePatternCards";
import { BankFeePatternComparison } from "@/components/banking/BankFeePatternComparison";
import {
  BANKING_GUIDE_STACK_CLASS,
  BANKING_SECTION_PANEL_CLASS,
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";
import { BankingFeeCategoryGrid } from "@/components/banking/BankingFeeCategoryGrid";
import { BankingProfileCostCards } from "@/components/banking/BankingProfileCostCards";
import { MoveMisunderstandingCardGrid } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { AffiliateDisclosureNote } from "@/src/components/monetization/AffiliateDisclosureNote";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import { bankingSubpageGlossarySection } from "@/src/data/banking/bankingGlossaryTerms";
import { bankingInstructionalRasterAssets } from "@/src/components/money/banking-cluster/bankingInstructionalRasterAssets";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import { bankingFeesPageModel as meta } from "./bankingFeesPageModel";

const CANONICAL = meta.path;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const SECTION_MAJOR = cn(SECTION_SCROLL_MARGIN, BANKING_SECTION_PANEL_CLASS);
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

export function BankingFeesView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Banking", item: new URL("/netherlands/money/banking/", baseUrl).toString() },
    { name: "Fees & costs", item: new URL(CANONICAL, baseUrl).toString() },
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

  const trapRows = meta.hiddenTraps.cards.map((c) => ({
    id: c.id,
    title: c.title,
    body: (
      <div className="space-y-2 text-sm leading-relaxed text-foreground-muted">
        <p>
          <span className="font-semibold text-foreground">Where it shows up:</span> {c.why}
        </p>
        <p>
          <span className="font-semibold text-foreground">What helps:</span> {c.avoid}
        </p>
      </div>
    ),
  }));

  const profileCostCards = meta.scenarioProfiles.map((s) => ({
    id: s.id,
    title: s.title,
    costDrivers: s.costDrivers,
    nextSteps: s.comparisonPath,
    watchOuts: "Totals follow your mix of transfers, travel, and local debits — confirm on each bank’s PDF.",
    relatedLinks: s.relatedLinks,
  }));

  const atGlanceWho =
    meta.atAGlance.cells.find((cell) => cell.title === "Who it helps")?.bullets ?? [];
  const atGlanceSteps = [
    meta.atAGlance.cells.find((cell) => cell.title === "What this page is for")?.bullets[0],
    meta.atAGlance.cells.find((cell) => cell.title === "What it covers")?.bullets[0],
    meta.atAGlance.cells.find((cell) => cell.title === "What it does not do")?.bullets[0],
  ].flatMap((step) => (step ? [step] : []));

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Also helpful"
      deepLinks={[
        { href: "/netherlands/money/banking/types-of-accounts/", label: "Types of bank accounts →", description: "Current, savings, joint, student, business, digital, cards." },
        { href: meta.hero.secondaryCta.href, label: "Compare banks →", description: "Editorial shortlist — verify live fees on each site." },
        { href: "/netherlands/money/banking/#banking-glossary-hub", label: "Banking glossary →", description: "Short definitions on the Banking hub." },
        { href: "/netherlands/open-bank-account-netherlands/", label: "Open bank account →", description: "Documents and BSN timing." },
        { href: "/netherlands/money/banking/how-payments-work/", label: "How payments work →", description: "IBAN, iDEAL, SEPA, and direct debits." },
        { href: "/netherlands/living/payments/", label: "Living: payments hub →", description: "Placeholder + wider money links." },
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
                    Fees &amp; costs
                  </span>
                </nav>
              }
              eyebrow={meta.hero.eyebrow}
              title={meta.hero.pageTitle}
              subtitle={meta.hero.subtitle}
              afterSubtitle={
                <div className="mt-4 min-w-0 max-w-full space-y-4 sm:mt-5">
                  <div className="rounded-lg border border-brand-strong/15 bg-brand/[0.06] px-3 py-2.5 sm:px-4 sm:py-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Fees change often</p>
                    <p className="mt-1 text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.feesChangeBanner}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {meta.hero.contextChips.map((chip) => (
                      <span key={chip} className={INFO_CHIP}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <p className="max-w-2xl text-xs leading-snug text-foreground-muted sm:text-sm">{meta.hero.editorialPrinciple}</p>
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
                timeline="Bank fees change often; use this as a checklist, then verify today’s prices on each bank’s own website."
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
                <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-4 text-sm text-foreground-muted sm:space-y-2">
                  {meta.quickAnswer.introBullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
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
                          <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>Quick cost</span>
                          <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">{card.title}</h3>
                        <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "mt-4")}>
                          <ul className="list-disc space-y-1.5 pl-3.5 text-xs leading-snug text-foreground-muted marker:text-brand sm:text-[13px] sm:leading-snug" role="list">
                            {card.bullets.map((b) => (
                              <li key={b}>{b}</li>
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
          <PillarJourneyStack variant="guide" density="compact" className={BANKING_GUIDE_STACK_CLASS}>
            <MovePillarMobileToc items={meta.sectionNav} />

            <SectionBlock
              id="cost-categories"
              className={SECTION_MAJOR}
              eyebrow="Categories"
              title="Main banking cost categories"
              subtitle="Each row is a fee type you will usually find on a Dutch bank’s price list — wording varies by brand."
            >
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.feeCategories}
                caption="Use this map against your own usage — then open each bank’s PDF price list for today’s numbers."
              />
              <BankingFeeCategoryGrid categories={meta.costCategories} className="mt-5" />
              <div className="mt-8">
                <p className="text-sm font-semibold text-foreground">Fee patterns from our bank shortlist</p>
                <p className="mt-1 max-w-3xl text-xs text-foreground-muted">
                  Pulled from the shared <strong className="font-semibold text-foreground">banks</strong> config (<code className="text-[11px]">feeModel</code>) — editorial bands only; confirm on each bank’s site.
                </p>
                <BankFeePatternCards bestBanksHref={meta.hero.secondaryCta.href} className="mt-4" />
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.traditionalDigitalExplainer.id}
              className={SECTION_MAJOR}
              eyebrow={meta.traditionalDigitalExplainer.eyebrow}
              title={meta.traditionalDigitalExplainer.title}
            >
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                <article className={cn("relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-emerald-50/45 p-5 shadow-sm ring-1 ring-emerald-100/50", movingNlCardMicroLiftClass)}>
                  <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-900 ring-1 ring-emerald-400/35" aria-hidden>
                      <Building2 className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-900/80">Branch bank pattern</p>
                      <h3 className="mt-1 text-base font-bold tracking-tight text-foreground">{meta.traditionalDigitalExplainer.traditionalTitle}</h3>
                    </div>
                  </div>
                  <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted">
                    {meta.traditionalDigitalExplainer.traditionalBullets.map((p) => (
                      <li key={p}>
                        <BoldInline text={p} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                      </li>
                    ))}
                  </ul>
                </article>
                <article className={cn("relative overflow-hidden rounded-2xl border border-sky-200/80 bg-sky-50/45 p-5 shadow-sm ring-1 ring-sky-100/50", movingNlCardMicroLiftClass)}>
                  <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-500/12 text-sky-900 ring-1 ring-sky-400/35" aria-hidden>
                      <Smartphone className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-sky-900/80">App bank pattern</p>
                      <h3 className="mt-1 text-base font-bold tracking-tight text-foreground">{meta.traditionalDigitalExplainer.digitalTitle}</h3>
                    </div>
                  </div>
                  <ul className="mt-4 list-disc space-y-1.5 pl-4 text-sm text-foreground-muted">
                    {meta.traditionalDigitalExplainer.digitalBullets.map((p) => (
                      <li key={p}>
                        <BoldInline text={p} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                      </li>
                    ))}
                  </ul>
                </article>
                <article className={cn("relative overflow-hidden rounded-2xl border border-violet-200/80 bg-violet-50/45 p-5 shadow-sm ring-1 ring-violet-100/50 lg:col-span-1", movingNlCardMicroLiftClass)}>
                  <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/12 text-violet-900 ring-1 ring-violet-400/35" aria-hidden>
                      <Layers3 className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-violet-900/80">Hybrid pattern</p>
                      <h3 className="mt-1 text-base font-bold tracking-tight text-foreground">Two setups can mean two fee lists</h3>
                    </div>
                  </div>
                  <BoldParagraph
                    text={meta.traditionalDigitalExplainer.hybridNote}
                    className="mt-4 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                </article>
              </div>
              <BoldParagraph
                text={meta.traditionalDigitalExplainer.tableIntro}
                className="mt-5 max-w-3xl text-xs text-foreground-muted sm:text-sm [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <BankFeePatternComparison rows={meta.feeComparisonRows} className="mt-4" />
              <AffiliateDisclosureNote className="mt-4 max-w-3xl text-xs">
                {DEFAULT_MONETIZATION_DISCLOSURE} This comparison is editorial orientation only — not live pricing.
              </AffiliateDisclosureNote>
            </SectionBlock>

            <SectionBlock
              id={meta.beforeChoosingBank.id}
              className={SECTION_MAJOR}
              eyebrow={meta.beforeChoosingBank.eyebrow}
              title={meta.beforeChoosingBank.title}
              subtitle={meta.beforeChoosingBank.subtitle}
              subtitleMarkdown
            >
              <article
                className={cn(
                  "relative mt-5 overflow-hidden rounded-2xl border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10 sm:p-6",
                  movingNlCardMicroLiftClass
                )}
              >
                <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Cost lines to verify</p>
                <ul
                  className="mt-4 grid max-w-4xl list-none gap-x-6 gap-y-2.5 p-0 sm:grid-cols-2 sm:gap-y-2"
                  role="list"
                  aria-label="Costs to check before choosing a bank"
                >
                  {meta.beforeChoosingBank.checklist.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-snug text-foreground-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative mt-6 rounded-xl border border-border/70 bg-surface-muted/50 px-4 py-3.5 text-sm leading-snug ring-1 ring-border/20 sm:px-5 sm:py-4">
                  <BoldParagraph
                    text={meta.beforeChoosingBank.note}
                    className="[&_strong]:font-semibold [&_strong]:text-foreground"
                  />
                </div>
              </article>
              <div className="mt-6">
                <Link href={meta.beforeChoosingBank.cta.href} className={primaryCtaClass}>
                  {meta.beforeChoosingBank.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.internationalTransfers.id}
              className={SECTION_MAJOR}
              eyebrow={meta.internationalTransfers.eyebrow}
              title={meta.internationalTransfers.title}
            >
              <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <article className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass)}>
                  <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
                  <div className={BANKING_VISUAL_CARD_BODY_CLASS}>
                    <div className="flex items-start gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/12 text-cyan-900 ring-1 ring-cyan-400/35" aria-hidden>
                        <Send className="h-6 w-6" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>Transfer cost map</span>
                          <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>FX</span>
                        </div>
                        <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">Compare the amount received, not the fee label</h3>
                      </div>
                    </div>
                    <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "mt-4")}>
                      <BoldParagraph
                        text={meta.internationalTransfers.lead}
                        className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </div>
                    <div className="mt-4 rounded-xl border border-cyan-200/70 bg-cyan-50/50 p-3 ring-1 ring-cyan-100/40">
                      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-cyan-900/80">Cost signal</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {["Fee", "Exchange rate", "Speed", "Received amount"].map((label) => (
                          <span key={label} className="rounded-full border border-border/70 bg-white/80 px-2.5 py-1 text-[11px] font-semibold leading-none text-foreground-muted">
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>

                <div className="grid gap-3 sm:grid-cols-2">
                  {meta.internationalTransfers.points.map((p, index) => (
                    <article key={p} className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass)}>
                      <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
                      <div className={BANKING_VISUAL_CARD_BODY_CLASS}>
                        <div className="flex items-center gap-2">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-500/12 text-blue-900 ring-1 ring-blue-400/35" aria-hidden>
                            <Globe2 className="h-5 w-5" />
                          </span>
                          <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "mt-4")}>
                          <BoldParagraph
                            text={p}
                            className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                          />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-border/60 bg-white/65 p-3 ring-1 ring-border/15 sm:p-4">
                <Link href={meta.internationalTransfers.cta.href} className={primaryCtaClass}>
                  {meta.internationalTransfers.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                {meta.internationalTransfers.crossLinks.map((l) => (
                  <Link key={l.href} href={l.href} className={tertiaryLinkClass}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.atmCards.id}
              className={SECTION_MAJOR}
              eyebrow={meta.atmCards.eyebrow}
              title={meta.atmCards.title}
            >
              <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <article className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass)}>
                  <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
                  <div className={BANKING_VISUAL_CARD_BODY_CLASS}>
                    <div className="flex items-start gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/12 text-indigo-900 ring-1 ring-indigo-400/35" aria-hidden>
                        <CreditCard className="h-6 w-6" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>Card and cash rules</span>
                          <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>ATM</span>
                        </div>
                        <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">Separate everyday card costs from travel cash costs</h3>
                      </div>
                    </div>
                    <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "mt-4")}>
                      <BoldParagraph
                        text={meta.atmCards.lead}
                        className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </div>
                    <div className="mt-4 rounded-xl border border-amber-200/70 bg-amber-50/45 p-3 ring-1 ring-amber-100/40">
                      <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-amber-900/80">Practical tip</p>
                      <BoldParagraph
                        text={meta.atmCards.callout}
                        className="mt-1.5 text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                      />
                    </div>
                  </div>
                </article>

                <div className="grid gap-3 sm:grid-cols-2">
                  {meta.atmCards.points.map((p, index) => (
                    <article key={p} className={cn(BANKING_VISUAL_CARD_SHELL_CLASS, movingNlCardMicroLiftClass)}>
                      <div className={cn("h-1.5 w-full shrink-0", movingNlSignatureGradientClass)} aria-hidden />
                      <div className={BANKING_VISUAL_CARD_BODY_CLASS}>
                        <div className="flex items-center gap-2">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/12 text-emerald-900 ring-1 ring-emerald-400/35" aria-hidden>
                            <Landmark className="h-5 w-5" />
                          </span>
                          <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "mt-4")}>
                          <BoldParagraph
                            text={p}
                            className="text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
                          />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.zzpSection.id}
              className={SECTION_MAJOR}
              eyebrow={meta.zzpSection.eyebrow}
              title={meta.zzpSection.title}
            >
              <BoldParagraph
                text={meta.zzpSection.lead}
                className="max-w-3xl text-sm leading-relaxed text-foreground-muted [&_strong]:font-semibold [&_strong]:text-foreground"
              />
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-4 text-sm text-foreground-muted">
                {meta.zzpSection.points.map((p) => (
                  <li key={p}>
                    <BoldInline text={p} className="[&_strong]:font-semibold [&_strong]:text-foreground" />
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
                {meta.zzpSection.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={tertiaryLinkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.avoidableCosts.id}
              className={SECTION_MAJOR}
              eyebrow={meta.avoidableCosts.eyebrow}
              title={meta.avoidableCosts.title}
              subtitle={meta.avoidableCosts.subtitle}
              subtitleMarkdown
            >
              <BankingAvoidableCostGrid cards={meta.avoidableCosts.cards} className="mt-5" />
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href={meta.avoidableCosts.cta.href} className={primaryCtaClass}>
                  {meta.avoidableCosts.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link href={`#${meta.compareProperly.id}`} className={tertiaryLinkClass}>
                  How to compare costs step by step
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.hiddenTraps.id}
              className={SECTION_MAJOR}
              eyebrow={meta.hiddenTraps.eyebrow}
              title={meta.hiddenTraps.title}
              subtitle={meta.hiddenTraps.subtitle}
              subtitleMarkdown
            >
              <MoveMisunderstandingCardGrid rows={trapRows} className="mt-4" />
            </SectionBlock>

            <SectionBlock
              id={meta.compareProperly.id}
              className={SECTION_MAJOR}
              eyebrow={meta.compareProperly.eyebrow}
              title={meta.compareProperly.title}
            >
              <ol className="mt-4 max-w-3xl list-decimal space-y-4 pl-5 text-sm text-foreground-muted">
                {meta.compareProperly.steps.map((step, i) => (
                  <li key={step.title} className="pl-1">
                    <p className="font-semibold text-foreground">
                      {i + 1}. {step.title}
                    </p>
                    <p className="mt-1.5 leading-relaxed">{step.body}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <Link href={meta.compareProperly.cta.href} className={primaryCtaClass}>
                  {meta.compareProperly.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </SectionBlock>

            <SectionBlock id="example-profiles" className={SECTION_MAJOR} eyebrow="Scenarios" title="Example banking profiles">
              <BankingProfileCostCards profiles={profileCostCards} className="mt-4" />
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
