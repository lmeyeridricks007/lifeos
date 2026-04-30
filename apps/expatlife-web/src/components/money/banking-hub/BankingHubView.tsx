import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import { PageHero, PillarGuideHeroRegion, PillarJourneyStack } from "@/components/page/pillar-template";
import { SectionBlock } from "@/components/page/moving-pillar";
import { Container } from "@/components/ui/container";
import { ArticleJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { cn } from "@/lib/cn";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import { movingNlCardMicroLiftClass, movingNlSignatureGradientClass } from "@/lib/ui/moving-nl-pillar-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { BANKING_GUIDE_STACK_CLASS, BANKING_SECTION_PANEL_CLASS } from "@/components/banking/bankingPageUi";
import { BankingGlossaryPanel } from "@/components/banking/BankingGlossaryPanel";
import { BankingRichText } from "@/components/banking/BankingRichText";
import { MovePillarMobileToc } from "@/src/components/moving/MovePillarMobileToc";
import { MovePillarSectionNav } from "@/src/components/moving/MovePillarSectionNav";
import { AffiliateDisclosureNote } from "@/src/components/monetization/AffiliateDisclosureNote";
import { DEFAULT_MONETIZATION_DISCLOSURE } from "@/src/lib/monetization/types";
import { bankingInstructionalRasterAssets } from "@/src/components/money/banking-cluster/bankingInstructionalRasterAssets";
import { InstructionalRasterFigure } from "@/src/components/money/InstructionalRasterFigure";
import { bankingHubPageModel as meta, bankingHubHeroImage } from "./bankingHubPageModel";

const CANONICAL = meta.path;
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";
const SECTION_MAJOR = cn(SECTION_SCROLL_MARGIN, BANKING_SECTION_PANEL_CLASS);
const INFO_CHIP =
  "inline-flex rounded-full border border-copilot-primary/15 bg-copilot-bg-soft/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-copilot-primary";

const hubGuideCardClass = cn(
  "group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-copilot-primary/[0.1] bg-copilot-surface p-5 text-left shadow-sm ring-1 ring-copilot-primary/[0.07] sm:p-6",
  movingNlCardMicroLiftClass,
  transitionInteractive,
  activeBrightnessPress
);

export function BankingHubView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(CANONICAL, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Money", item: new URL("/netherlands/money/tools/", baseUrl).toString() },
    { name: "Banking", item: new URL(CANONICAL, baseUrl).toString() },
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

  const sidebar = (
    <MovePillarSectionNav
      items={[...meta.sectionNav]}
      clusterTitle="Also helpful"
      deepLinks={[
        {
          href: "/netherlands/money/banking/best-banks-expats/",
          label: "Best banks for expats →",
          description: "Editorial shortlist — confirm products on each bank’s site.",
        },
        {
          href: "/netherlands/money/banking/how-payments-work/",
          label: "How payments work →",
          description: "IBAN, iDEAL, SEPA, and Dutch payment habits.",
        },
        {
          href: "/netherlands/open-bank-account-netherlands/",
          label: "Open bank account guide →",
          description: "Documents, BSN timing, and typical asks.",
        },
        { href: "/netherlands/money/tools/", label: "Money tools →", description: "Calculators next to banking decisions." },
        { href: "/netherlands/money/tax-guide-for-expats/", label: "Tax guide for expats →", description: "Payroll, withholding, and planning context." },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd headline={meta.hero.pageTitle} description={meta.seo.description} dateModified={meta.publishDate} urlPath={CANONICAL} />

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
                  <Link href="/netherlands/money/tools/" className="transition-colors hover:text-foreground">
                    Money
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <span className="text-foreground" aria-current="page">
                    Banking
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
                </div>
              }
              heroMediaSlot={
                <div className={cn("mt-4 min-w-0 sm:mt-5", sitePillarFramedHeroGutterXClass)}>
                  <div className="relative aspect-[3/2] w-full max-w-full overflow-hidden rounded-2xl bg-surface-muted ring-1 ring-border/40 shadow-card">
                    <Image
                      src={bankingHubHeroImage.src}
                      alt={bankingHubHeroImage.alt}
                      width={bankingHubHeroImage.width}
                      height={bankingHubHeroImage.height}
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
        keySections={
          <PillarJourneyStack variant="guide" density="compact" className={BANKING_GUIDE_STACK_CLASS}>
            <MovePillarMobileToc items={[...meta.sectionNav]} />
            <SectionBlock
              id="banking-guides"
              className={SECTION_MAJOR}
              eyebrow="Start here"
              title="Banking guides"
              subtitle="Pick the guide that matches where you are in the move — all are editorial; confirm products and fees on each bank’s official site."
              compact
            >
              <InstructionalRasterFigure
                raster={bankingInstructionalRasterAssets.hubRoadmap}
                caption="Each guide covers one slice of Dutch banking — combine them and always confirm details on the bank’s own site."
              />
              <ul className="mt-5 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5" role="list">
                {meta.guideLinks.map((g) => (
                  <li key={g.href} className="min-w-0">
                    <Link href={g.href} className={hubGuideCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                      <span className="pt-0.5 text-base font-bold tracking-tight text-copilot-text-primary transition-colors group-hover:text-brand-strong">
                        {g.title}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-copilot-text-secondary">
                        <BankingRichText text={g.description} className="[&_strong]:font-semibold [&_strong]:text-copilot-text-primary" />
                      </span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-link">
                        Open
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock
              id={meta.glossary.id}
              className={SECTION_MAJOR}
              title={meta.glossary.title}
              subtitle={meta.glossary.subtitle}
            >
              <BankingGlossaryPanel className="mt-6" />
              <AffiliateDisclosureNote className="mt-8 max-w-3xl text-xs text-foreground-muted">
                {DEFAULT_MONETIZATION_DISCLOSURE}
              </AffiliateDisclosureNote>
            </SectionBlock>
          </PillarJourneyStack>
        }
      />
    </>
  );
}
