import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import {
  PageHero,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarGuideNextStepsRegion,
  PillarGuideToolsSection,
  PillarJourneyStack,
  ToolCard,
} from "@/components/page/pillar-template";
import { SectionBlock } from "@/components/page/moving-pillar";
import { Container } from "@/components/ui/container";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import { LivingClusterLinkGrid } from "@/src/components/living/LivingClusterLinkGrid";
import { LivingPillarExplorer } from "@/src/components/living/LivingPillarExplorer";
import {
  LIVING_CULTURE_ETIQUETTE_PATH,
  LIVING_CLUSTER_SIBLING_LINKS_DAILY_LIFE,
  LIVING_DAILY_LIFE_PATH,
  LIVING_EMERGENCIES_SAFETY_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_GETTING_AROUND_SUPPLEMENTAL_TOOLS,
  LIVING_HEALTHCARE_BASICS_PATH,
  LIVING_LANGUAGE_PATH,
  LIVING_PILLAR_BREADCRUMB_LABEL,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
  LIVING_WEATHER_PATH,
} from "@/src/components/living/livingPillarContent";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { cn } from "@/lib/cn";
import { LivingSectionNav } from "@/src/components/living/survival-guide/LivingSectionNav";
import { LivingSurvivalMobileToc } from "@/src/components/living/survival-guide/LivingSurvivalMobileToc";
import { LivingQuickStartCards } from "@/src/components/living/survival-guide/LivingQuickStartCards";
import { LivingToolShortcutsGrid } from "@/src/components/living/survival-guide/LivingToolShortcutsGrid";
import {
  DailyLifeAtAGlanceBlock,
  DailyLifeIntroOneParagraph,
  DailyLifeOfficialSourcesBlock,
  DailyLifeSectionBlock,
  DailyLifeSurprisesBlockView,
} from "./DailyLifeContentBlocks";
import {
  livingDailyLifeFaq,
  livingDailyLifeHero,
  livingDailyLifeMeta,
  livingDailyLifeQuickStart,
  livingDailyLifeRelatedTools,
  livingDailyLifeSectionNav,
  livingDailyLifeSections,
  livingDailyLifeTips,
} from "./config/livingDailyLife.config";
import { resolveDailyLifeIcon } from "./config/livingDailyLife.icons";
import { DailyLifeFaq } from "./DailyLifeFaq";
import { DailyLifeHeroGraphic } from "./DailyLifeHeroGraphic";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const crossLinkClass =
  "font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm";

const FAQ_SCHEMA = livingDailyLifeFaq.map((item) => ({
  q: item.question,
  a: item.answer,
}));

export function DailyLifeView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(LIVING_DAILY_LIFE_PATH, baseUrl).toString();
  const meta = livingDailyLifeMeta;
  const hero = livingDailyLifeHero;
  const tips = livingDailyLifeTips.startHere;
  const toolsConfig = livingDailyLifeRelatedTools;

  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: LIVING_PILLAR_BREADCRUMB_LABEL, item: new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString() },
    { name: "Daily life basics", item: new URL(LIVING_DAILY_LIFE_PATH, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const quickStartPhases = livingDailyLifeQuickStart.map(({ iconKey, ...rest }) => ({
    ...rest,
    icon: resolveDailyLifeIcon(iconKey),
  }));

  const sidebar = (
    <LivingSectionNav
      items={livingDailyLifeSectionNav}
      deepLinks={[
        {
          href: LIVING_SURVIVAL_GUIDE_PATH,
          label: "Netherlands Survival Guide",
          description:
            "First-week priorities, money and weather basics, and links to more topics when you want the bigger picture.",
        },
        {
          href: LIVING_ESSENTIAL_APPS_PATH,
          label: "Essential apps for life in the Netherlands",
          description:
            "Supermarket apps, Tikkie, delivery, and banking—what to install first, alongside the payments and shopping sections here.",
        },
        {
          href: LIVING_SHOPPING_GROCERIES_PATH,
          label: "Shopping & Groceries in the Netherlands",
          description:
            "The dedicated guide for supermarkets, self-checkout, store apps, delivery trade-offs, and household buying once groceries need more depth than this page gives them.",
        },
        {
          href: LIVING_HEALTHCARE_BASICS_PATH,
          label: "Healthcare Basics in the Netherlands",
          description:
            "A practical guide to insurance, the GP, pharmacies, urgent care, and the healthcare flow once local systems matter as much as daily errands.",
        },
        {
          href: LIVING_EMERGENCIES_SAFETY_PATH,
          label: "Emergencies & Safety in the Netherlands",
          description:
            "A calm guide to 112, urgent situations, lost items, and the everyday readiness habits that help when normal routines suddenly break.",
        },
        {
          href: LIVING_WEATHER_PATH,
          label: "Weather & Seasons in the Netherlands",
          description:
            "Wind, rain, dark days, and what to wear when weather starts shaping errands, commuting, and the rhythm of the week here.",
        },
        {
          href: LIVING_LANGUAGE_PATH,
          label: "Language & phrases for life in the Netherlands",
          description:
            "Useful Dutch for cashiers, deliveries, neighbors, and short errands when a little language confidence smooths the routine here.",
        },
        {
          href: LIVING_CULTURE_ETIQUETTE_PATH,
          label: "Dutch Culture & Etiquette",
          description:
            "The social layer behind quick payment requests, invitations, punctuality, and everyday directness when the practical routine here needs more context.",
        },
        {
          href: LIVING_GETTING_AROUND_PATH,
          label: "Getting around in the Netherlands",
          description: "Trains, buses, bikes, and paying for travel—when your routine is more than a quick walk to the shop.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline={meta.articleJsonLd.headline}
        description={meta.articleJsonLd.description}
        dateModified={meta.dateModified}
        urlPath={LIVING_DAILY_LIFE_PATH}
      />
      <FaqPageJsonLd items={FAQ_SCHEMA} />

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
                <nav aria-label="Breadcrumbs" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
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
                  <Link href={LIVING_SURVIVAL_GUIDE_PATH} className="transition-colors hover:text-foreground">
                    {LIVING_PILLAR_BREADCRUMB_LABEL}
                  </Link>
                  <span className="text-foreground-faint" aria-hidden>
                    /
                  </span>
                  <span className="text-foreground" aria-current="page">
                    Daily life basics
                  </span>
                </nav>
              }
              eyebrow={hero.eyebrow}
              title={hero.title}
              subtitle={hero.subtitle}
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
                      {hero.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                      <Link href={hero.primaryCta.href} className={primaryCtaClass}>
                        {hero.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={hero.secondaryCta.href}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        {hero.secondaryCta.label}
                      </Link>
                    </div>
                    <DailyLifeIntroOneParagraph
                      chunks={hero.crossLinksParagraph}
                      linkClass={crossLinkClass}
                      className="mt-3 text-sm leading-snug text-foreground-muted sm:mt-4 sm:leading-relaxed"
                    />
                    <DailyLifeIntroOneParagraph
                      chunks={hero.planningToolsParagraph}
                      linkClass={crossLinkClass}
                      className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed"
                    />
                    <ul
                      className="mt-5 flex list-none flex-wrap gap-2 border-t border-border/80 p-0 pt-5 sm:mt-6 sm:gap-2.5 sm:pt-6"
                      aria-label="Quick orientation"
                    >
                      {hero.quickStrip.map(({ iconKey, label }) => {
                        const Icon = resolveDailyLifeIcon(iconKey);
                        return (
                          <li key={label} className="max-w-full">
                            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/90 bg-surface-raised px-3 py-1.5 text-left text-xs font-medium text-foreground-muted shadow-card ring-1 ring-border/10">
                              <Icon className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                              {label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <DailyLifeHeroGraphic className="min-w-0 w-full max-w-lg justify-self-center sm:max-w-none md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={LIVING_DAILY_LIFE_PATH}
            />
          </PillarGuideHeroRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide">
            <LivingSurvivalMobileToc items={livingDailyLifeSectionNav} />

            <DailyLifeAtAGlanceBlock linkClass={crossLinkClass} />

            <div
              className="mx-auto hidden h-px max-w-3xl bg-gradient-to-r from-transparent via-border/80 to-transparent sm:block"
              aria-hidden
            />

            <LivingPillarExplorer />

            <SectionBlock
              id={tips.id}
              className={SECTION_SCROLL_MARGIN}
              eyebrow={tips.eyebrow}
              title={tips.title}
              subtitle={tips.subtitle}
            >
              <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
                <span className="rounded-full border border-brand/25 bg-brand-muted/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                  {tips.tip.badge}
                </span>
                <span className="leading-snug">{tips.tip.text}</span>
              </p>
              <LivingQuickStartCards phases={quickStartPhases} />
            </SectionBlock>

            {livingDailyLifeSections.map((section) => (
              <DailyLifeSectionBlock key={section.id} section={section} linkClass={crossLinkClass} />
            ))}

            <DailyLifeSurprisesBlockView />
          </PillarJourneyStack>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id="helpful-tools"
            title={toolsConfig.sectionTitle}
            subtitle={toolsConfig.sectionSubtitle}
          >
            {toolsConfig.cards.map((card) => {
              const Icon = resolveDailyLifeIcon(card.iconKey);
              return (
                <ToolCard
                  key={card.href}
                  title={card.title}
                  description={card.description}
                  href={card.href}
                  ctaLabel={card.ctaLabel}
                  compact
                  icon={<Icon className="h-5 w-5" aria-hidden />}
                />
              );
            })}
            <div className="col-span-full mt-6 border-t border-border/70 pt-6 sm:mt-8 sm:pt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                {toolsConfig.roundOutEyebrow}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">{toolsConfig.roundOutTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{toolsConfig.roundOutBody}</p>
              <div className="mt-4">
                <LivingToolShortcutsGrid tools={LIVING_GETTING_AROUND_SUPPLEMENTAL_TOOLS} />
              </div>
            </div>
          </PillarGuideToolsSection>
        }
        nextSteps={
          <PillarGuideNextStepsRegion>
            <SectionBlock
              id="related-living"
              className={SECTION_SCROLL_MARGIN}
              compact
              eyebrow="Keep exploring"
              title="More daily-life guides"
              subtitle={meta.relatedLivingSubtitle}
            >
              <LivingClusterLinkGrid items={LIVING_CLUSTER_SIBLING_LINKS_DAILY_LIFE} />
            </SectionBlock>
          </PillarGuideNextStepsRegion>
        }
        faq={
          <PillarGuideFaqRegion>
            <SectionBlock
              id="faq"
              className={SECTION_SCROLL_MARGIN}
              compact
              title="Frequently asked questions"
              subtitle={meta.faqSectionSubtitle}
            >
              <DailyLifeFaq />
            </SectionBlock>
            <DailyLifeOfficialSourcesBlock />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
