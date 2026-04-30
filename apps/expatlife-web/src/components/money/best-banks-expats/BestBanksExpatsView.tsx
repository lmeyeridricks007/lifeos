import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
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
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
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
import {
  BANKING_GUIDE_STACK_CLASS,
  BANKING_SECTION_PANEL_CLASS,
  BANKING_VISUAL_CARD_BODY_CLASS,
  BANKING_VISUAL_CARD_CHIP_CLASS,
  BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS,
  BANKING_VISUAL_CARD_PANEL_CLASS,
  BANKING_VISUAL_CARD_SHELL_CLASS,
} from "@/components/banking/bankingPageUi";
import { BankingRecommendedOptionsSection } from "@/components/banking/BankingRecommendedOptionsSection";
import { MoveMisunderstandingCardGrid } from "@/src/components/moving/movePillarCardPrimitives";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { VisasResidencyOfficialSources } from "@/src/components/moving/visas-residency/VisasResidencyOfficialSources";
import { bankingInstructionalRasterAssets } from "@/src/components/money/banking-cluster/bankingInstructionalRasterAssets";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import { AffiliateDisclosureNote } from "@/src/components/monetization/AffiliateDisclosureNote";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import { loadProvider } from "@/src/lib/affiliates/loadAffiliates";
import { bankingSubpageGlossarySection } from "@/src/data/banking/bankingGlossaryTerms";
import { bestBanksExpatsPageModel as meta } from "./bestBanksExpatsPageModel";
import { BestBanksExpatsHeroGraphic } from "./BestBanksExpatsHeroGraphic";
import { BankComparisonTable, type BankAffiliateLink } from "@/components/banking/BankComparisonTable";
import { banks } from "@/src/data/banking/banks";
import { withPartnerReferralUtms, utmContentFromPath } from "@/lib/analytics/referral-utm";

const CANONICAL = meta.path;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const SECTION_MAJOR = cn(SECTION_SCROLL_MARGIN, BANKING_SECTION_PANEL_CLASS);
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";
const BANK_PROVIDER_IDS = ["ing", "abn-amro", "rabobank", "bunq", "revolut", "wise", "n26"] as const;
const BANK_MENTION_PATTERN = /\b(ABN AMRO|Rabobank|Revolut|Wise|ING|bunq|N26|Rabo|ABN)\b/g;
const BANK_MENTION_TO_PROVIDER_ID: Record<string, (typeof BANK_PROVIDER_IDS)[number]> = {
  "ABN AMRO": "abn-amro",
  ABN: "abn-amro",
  Rabobank: "rabobank",
  Rabo: "rabobank",
  Revolut: "revolut",
  Wise: "wise",
  ING: "ing",
  bunq: "bunq",
  N26: "n26",
};

type BankLinkMap = Partial<Record<(typeof BANK_PROVIDER_IDS)[number] | string, BankAffiliateLink>>;

function buildBankAffiliateLinks(): BankLinkMap {
  const utmContent = utmContentFromPath(CANONICAL);
  return BANK_PROVIDER_IDS.reduce<BankLinkMap>((acc, providerId) => {
    const provider = loadProvider(providerId);
    if (!provider) return acc;
    acc[providerId] = {
      href: withPartnerReferralUtms(provider.cta.href, {
        partnerSlug: provider.id,
        utmContent,
      }),
      label: provider.cta.label,
      partnerSlug: provider.id,
      isAffiliate: provider.cta.isAffiliate,
    };
    return acc;
  }, {});
}

function BankMentionText({
  text,
  bankLinks,
  pageContext,
}: {
  text: string;
  bankLinks: BankLinkMap;
  pageContext: string;
}) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  BANK_MENTION_PATTERN.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = BANK_MENTION_PATTERN.exec(text)) !== null) {
    const label = match[0];
    const index = match.index ?? 0;
    const providerId = BANK_MENTION_TO_PROVIDER_ID[label];
    const link = bankLinks[providerId];
    if (index > lastIndex) parts.push(text.slice(lastIndex, index));
    if (link) {
      parts.push(
        <a
          key={`${pageContext}-${label}-${index}`}
          href={link.href}
          target="_blank"
          rel={link.isAffiliate ? "sponsored noopener noreferrer" : "noopener noreferrer"}
          className="font-semibold text-link underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          data-outbound-link-type="provider"
          data-outbound-partner-slug={link.partnerSlug}
          data-outbound-link-text={link.label}
          data-outbound-page-context={pageContext}
        >
          {label}
        </a>
      );
    } else {
      parts.push(label);
    }
    lastIndex = index + label.length;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

export function BestBanksExpatsView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const bankLinks = buildBankAffiliateLinks();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Banking", item: new URL("/netherlands/money/banking/", baseUrl).toString() },
    { name: "Best banks for expats", item: new URL(CANONICAL, baseUrl).toString() },
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

  const mistakeRows = meta.commonMistakes.cards.map((c) => ({
    id: c.title,
    title: c.title,
    body: <p className="text-sm leading-relaxed text-foreground-muted">{c.body}</p>,
  }));

  const atGlanceWho =
    meta.atAGlance.cells.find((cell) => cell.title === "Best for")?.bullets ?? [];
  const atGlanceSteps = [
    meta.atAGlance.cells.find((cell) => cell.title === "What this page is for")?.bullets[0],
    meta.atAGlance.cells.find((cell) => cell.title === "What it compares")?.bullets[0],
    meta.atAGlance.cells.find((cell) => cell.title === "What it does NOT do")?.bullets[0],
  ].flatMap((step) => (step ? [step] : []));

  const sidebar = (
    <MovePillarSectionNav
      items={meta.sectionNav}
      clusterTitle="Also helpful"
      deepLinks={[
        {
          href: "/netherlands/money/banking/types-of-accounts/",
          label: "Types of bank accounts →",
          description: "Betaalrekening, savings, joint, student, business, digital — education before the shortlist.",
        },
        {
          href: "/netherlands/money/banking/how-payments-work/",
          label: "How payments work →",
          description: "IBAN, iDEAL, SEPA, and direct debits — before you judge iDEAL support.",
        },
        {
          href: "/netherlands/money/banking/traditional-vs-digital/",
          label: "Traditional vs digital banks →",
          description: "When retail, app-first, or hybrid setups fit — before you pick a shortlist.",
        },
        {
          href: "/netherlands/money/banking/fees/",
          label: "Banking fees & costs →",
          description: "Fee categories, transfers, ATM, and hidden traps — framework before you compare.",
        },
        { href: "/netherlands/open-bank-account-netherlands/", label: "Open bank account guide →", description: "Documents, BSN timing, and typical asks." },
        { href: "/netherlands/services/banks/", label: "Banks directory →", description: "Broader provider list beyond this shortlist." },
        { href: "/netherlands/money/tax-guide-for-expats/", label: "Tax guide for expats →", description: "When payroll and banking meet tax planning." },
        { href: "/netherlands/money/banking/#banking-glossary-hub", label: "Banking glossary →", description: "Short definitions on the Banking hub." },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd headline={meta.hero.pageTitle} description={meta.seo.description} dateModified={meta.publishDate} urlPath={CANONICAL} />
      <FaqPageJsonLd url={shareUrl} items={meta.faq.map((item) => ({ q: item.q, a: item.a }))} />

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
                    Best banks for expats
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
                  <div className="rounded-xl border border-border/70 bg-surface-muted/40 p-3.5 sm:p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground-muted">Quick picks</p>
                    <ul className="mt-2.5 grid gap-2 sm:grid-cols-3" role="list">
                      {meta.hero.quickPicks.map((row) => (
                        <li
                          key={row.label}
                          className="rounded-lg border border-border/60 bg-surface-raised/90 px-2.5 py-2 text-left shadow-sm ring-1 ring-border/30"
                        >
                          <span className="block text-[10px] font-semibold uppercase tracking-wide text-foreground-muted">{row.label}</span>
                          <span className="mt-0.5 block text-xs font-medium text-foreground">
                            <BankMentionText text={row.picks} bankLinks={bankLinks} pageContext="best-banks-expats-hero-quick-picks" />
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link href="#quick-recommendations" className="mt-3 inline-flex text-xs font-semibold text-link hover:underline">
                      All use cases →
                    </Link>
                  </div>
                  <p className="text-xs text-foreground-muted">
                    <Link href="/netherlands/money/banking/" className={cn(tertiaryLinkClass, "inline-flex min-h-[40px] items-center")}>
                      Back to Banking hub →
                    </Link>
                  </p>
                </div>
              }
              heroMediaSlot={
                <div className={cn("mt-4 min-w-0 sm:mt-5", sitePillarFramedHeroGutterXClass)}>
                  <BestBanksExpatsHeroGraphic className="w-full min-w-0 max-w-full" />
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
                timeline="Use the shortlist as orientation, then verify eligibility, fees, and account rules on each bank’s own website."
                steps={atGlanceSteps}
                footer={meta.atAGlance.note}
                className={SECTION_SCROLL_MARGIN}
              />

              <SectionBlock
                id={meta.quickRecommendations.id}
                className={SECTION_MAJOR}
                eyebrow={meta.quickRecommendations.eyebrow}
                title={meta.quickRecommendations.title}
                subtitle={meta.quickRecommendations.subtitle}
                compact
              >
                <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {meta.quickRecommendations.cards.map((card, index) => (
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
                          <span className={BANKING_VISUAL_CARD_CHIP_CLASS}>Use case</span>
                          <span className={BANKING_VISUAL_CARD_NUMBER_CHIP_CLASS}>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">{card.title}</h3>
                        <div className="mt-4 rounded-xl border border-border/65 bg-white/70 px-3 py-3 ring-1 ring-border/20">
                          <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-foreground-muted">Shortlist</p>
                          <p className="mt-1.5 text-sm font-semibold text-foreground">
                            <BankMentionText text={card.picks} bankLinks={bankLinks} pageContext="best-banks-expats-quick-recommendations" />
                          </p>
                        </div>
                        <div className={cn(BANKING_VISUAL_CARD_PANEL_CLASS, "mt-3")}>
                          <ul className="list-disc space-y-1.5 pl-3.5 text-xs leading-snug text-foreground-muted marker:text-brand sm:text-[13px] sm:leading-snug" role="list">
                            {card.bullets.map((b) => (
                              <li key={b}>
                                <BankMentionText text={b} bankLinks={bankLinks} pageContext="best-banks-expats-quick-recommendation-bullets" />
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
          <PillarJourneyStack variant="guide" density="compact" className={BANKING_GUIDE_STACK_CLASS}>
            <MovePillarMobileToc items={meta.sectionNav} />

            <SectionBlock
              id="comparison"
              className={SECTION_MAJOR}
              eyebrow={meta.comparisonIntro.eyebrow}
              title={meta.comparisonIntro.title}
              subtitle={meta.comparisonIntro.subtitle}
            >
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.bestBanksCompare}
                caption="Use this lens on each bank’s site — English support, onboarding friction, and fee patterns matter more than brand hype."
              />
              <p className="mt-3 text-xs text-foreground-muted md:hidden" role="note">
                On small screens the table becomes <strong className="font-semibold text-foreground">cards</strong> — same columns, easier scrolling.
              </p>
              <BankComparisonTable banks={banks} sortable bankLinks={bankLinks} className="mt-3 md:mt-4" />
              <AffiliateDisclosureNote className="mt-4 max-w-3xl text-xs">
                {DEFAULT_MONETIZATION_DISCLOSURE} Table cells describe typical patterns — not live tariffs.
              </AffiliateDisclosureNote>
            </SectionBlock>

            <SectionBlock
              id="bank-details"
              className={SECTION_MAJOR}
              eyebrow="Notes"
              title="Bank breakdowns"
              subtitle={meta.bankDetailsIntro}
            >
              <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">
                {meta.bankDetails.map((b) => (
                  <article
                    key={b.id}
                    id={b.id}
                    className={cn(
                      "relative scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10 sm:p-6 md:scroll-mt-32",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      <BankMentionText text={b.name} bankLinks={bankLinks} pageContext="best-banks-expats-bank-breakdowns" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      <BankMentionText text={b.overview} bankLinks={bankLinks} pageContext="best-banks-expats-bank-breakdown-overview" />
                    </p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-800">Pros</p>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-foreground-muted">
                          {b.pros.map((p) => (
                            <li key={p}>
                              <BankMentionText text={p} bankLinks={bankLinks} pageContext="best-banks-expats-bank-breakdown-pros" />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-900/90">Cons</p>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-foreground-muted">
                          {b.cons.map((p) => (
                            <li key={p}>
                              <BankMentionText text={p} bankLinks={bankLinks} pageContext="best-banks-expats-bank-breakdown-cons" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 border-t border-dashed border-border/60 pt-4 sm:grid-cols-2">
                      <div className="rounded-xl bg-surface-muted/70 p-3 ring-1 ring-border/50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Best for</p>
                        <p className="mt-1.5 text-sm text-foreground-muted">
                          <BankMentionText text={b.bestFor} bankLinks={bankLinks} pageContext="best-banks-expats-bank-breakdown-best-for" />
                        </p>
                      </div>
                      <div className="rounded-xl bg-surface-muted/70 p-3 ring-1 ring-border/50">
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Not ideal for</p>
                        <p className="mt-1.5 text-sm text-foreground-muted">
                          <BankMentionText text={b.notIdealFor} bankLinks={bankLinks} pageContext="best-banks-expats-bank-breakdown-not-ideal" />
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.traditionalVsDigital.id}
              className={SECTION_MAJOR}
              eyebrow={meta.traditionalVsDigital.eyebrow}
              title={meta.traditionalVsDigital.title}
            >
              <p className="max-w-3xl text-sm leading-relaxed text-foreground-muted">{meta.traditionalVsDigital.lead}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <article
                  className={cn(
                    "relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10",
                    movingNlCardMicroLiftClass
                  )}
                >
                  <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                  <h3 className="text-base font-bold text-foreground">{meta.traditionalVsDigital.traditional.title}</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground-muted">
                    {meta.traditionalVsDigital.traditional.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
                <article
                  className={cn(
                    "relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10",
                    movingNlCardMicroLiftClass
                  )}
                >
                  <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                  <h3 className="text-base font-bold text-foreground">{meta.traditionalVsDigital.digital.title}</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-foreground-muted">
                    {meta.traditionalVsDigital.digital.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </SectionBlock>

            <SectionBlock
              id={meta.howToChoose.id}
              className={SECTION_MAJOR}
              eyebrow={meta.howToChoose.eyebrow}
              title={meta.howToChoose.title}
            >
              <p className="text-sm font-medium text-foreground-muted">{meta.howToChoose.intro}</p>
              <dl className="mt-5 space-y-4">
                {meta.howToChoose.questions.map((item) => (
                  <div
                    key={item.q}
                    className={cn(
                      "rounded-2xl border border-border bg-surface-muted/40 p-4 ring-1 ring-border/40 sm:p-5",
                      movingNlCardMicroLiftClass
                    )}
                  >
                    <dt className="text-sm font-bold text-foreground">{item.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      <BankMentionText text={item.a} bankLinks={bankLinks} pageContext="best-banks-expats-how-to-choose" />
                    </dd>
                  </div>
                ))}
              </dl>
            </SectionBlock>

            <SectionBlock
              id={meta.commonMistakes.id}
              className={SECTION_MAJOR}
              eyebrow={meta.commonMistakes.eyebrow}
              title={meta.commonMistakes.title}
            >
              <MoveMisunderstandingCardGrid rows={mistakeRows} className="mt-4" />
            </SectionBlock>

            <SectionBlock
              id={meta.recommendedOptions.sectionId}
              className={SECTION_MAJOR}
              eyebrow={meta.recommendedOptions.eyebrow}
              title={meta.recommendedOptions.title}
              subtitle={meta.recommendedOptions.subtitle}
            >
              <BankingRecommendedOptionsSection
                placementId={meta.recommendedOptions.placementId}
                analyticsPageContext={meta.recommendedOptions.analyticsPageContext}
                boundaryNote={meta.recommendedOptions.boundaryNote}
                categoryLinks={[...meta.recommendedOptions.categoryLinks]}
                browseLabel={meta.recommendedOptions.browseLabel}
              />
            </SectionBlock>

            <section id={meta.relatedTools.id} className={SECTION_MAJOR} aria-labelledby="related-tools-heading">
              <h2 id="related-tools-heading" className="text-xl font-bold tracking-tight text-foreground">
                {meta.relatedTools.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-foreground-muted">{meta.relatedTools.subtitle}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {meta.relatedTools.items.map((t) => (
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
                      <span className="mt-3 text-xs font-semibold text-link">
                        {t.ctaLabel} →
                      </span>
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
        }
        faq={
          <PillarGuideFaqRegion>
            <FAQBlock
              id="faq"
              eyebrow="FAQ"
              title="Common questions"
              items={meta.faq.map((f) => ({ q: f.q, a: f.a }))}
              maxItems={20}
            />
          </PillarGuideFaqRegion>
        }
        afterFaq={<VisasResidencyOfficialReferences references={meta.officialSources} />}
      />
    </>
  );
}

/** Thin wrapper so we do not import `VisasResidencyOfficialSources` name next to money-specific props. */
function VisasResidencyOfficialReferences({ references }: { references: typeof meta.officialSources }) {
  return <VisasResidencyOfficialSources references={references} density="compact" />;
}
