import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { GuidePageTemplate } from "@/components/page/page-templates";
import { MovePageTemplate } from "@/components/page/move-shell";
import {
  PageHero,
  PillarGuideAtGlanceRegion,
  PillarGuideFaqRegion,
  PillarGuideHeroRegion,
  PillarGuideNextStepsRegion,
  PillarGuideToolsSection,
  PillarJourneyStack,
  ToolCard,
} from "@/components/page/pillar-template";
import { SectionBlock } from "@/components/page/moving-pillar";
import { Container } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { cn } from "@/lib/cn";
import { LivingClusterLinkGrid } from "@/src/components/living/LivingClusterLinkGrid";
import { LivingPillarExplorer } from "@/src/components/living/LivingPillarExplorer";
import {
  LIVING_CLUSTER_SIBLING_LINKS_SHOPPING_GROCERIES,
  LIVING_CULTURE_ETIQUETTE_PATH,
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_LANGUAGE_PATH,
  LIVING_PILLAR_BREADCRUMB_LABEL,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
  LIVING_WEATHER_PATH,
} from "@/src/components/living/livingPillarContent";
import { LivingQuickStartCards } from "@/src/components/living/survival-guide/LivingQuickStartCards";
import { LivingSectionNav } from "@/src/components/living/survival-guide/LivingSectionNav";
import { LivingSurvivalMobileToc } from "@/src/components/living/survival-guide/LivingSurvivalMobileToc";
import { LivingToolShortcutsGrid } from "@/src/components/living/survival-guide/LivingToolShortcutsGrid";
import { ShoppingGroceriesHeroGraphic } from "./ShoppingGroceriesHeroGraphic";
import {
  SHOPPING_GROCERIES_DATE_MODIFIED,
  shoppingGroceriesAtAGlance,
  shoppingGroceriesDeliveryCards,
  shoppingGroceriesFaq,
  shoppingGroceriesHabitCards,
  shoppingGroceriesHabitCallout,
  shoppingGroceriesHero,
  shoppingGroceriesHouseholdCards,
  shoppingGroceriesMeta,
  shoppingGroceriesMisunderstandingsCallout,
  shoppingGroceriesPracticeCards,
  shoppingGroceriesQuickStart,
  shoppingGroceriesRelatedToolsConfig,
  shoppingGroceriesReferences,
  shoppingGroceriesSectionNav,
  shoppingGroceriesSmarterCards,
  shoppingGroceriesSmarterCallout,
  shoppingGroceriesMoveAndFamilyShortcuts,
  shoppingGroceriesStartHereCallout,
  shoppingGroceriesStoreCategories,
  shoppingGroceriesSupermarketChains,
  shoppingGroceriesSurprises,
  shoppingGroceriesToolCards,
  type ShoppingInfoCard,
  type ShoppingStoreCategory,
  type ShoppingSupermarketChain,
} from "./shoppingGroceriesContent";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const crossLinkClass =
  "font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm";

const FAQ_SCHEMA = shoppingGroceriesFaq.map((item) => ({
  q: item.question,
  a: item.answer,
}));

function SectionRhythmDivider() {
  return (
    <div
      className="mx-auto my-2 h-px max-w-3xl bg-gradient-to-r from-transparent via-border/70 to-transparent sm:my-2.5"
      aria-hidden
    />
  );
}

function AtAGlanceGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {shoppingGroceriesAtAGlance.cells.map((cell) => (
        <div
          key={cell.title}
          className="rounded-card border border-border/80 bg-surface-muted/80 p-4 shadow-card ring-1 ring-inset ring-border/10 sm:p-5"
        >
          <p className="text-sm font-semibold text-foreground">{cell.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted sm:mt-2">{cell.body}</p>
        </div>
      ))}
    </div>
  );
}

function AtAGlanceNote() {
  const note = shoppingGroceriesAtAGlance.note;
  return (
    <div className="mt-4 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:mt-5 sm:p-5">
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
        <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
          {note.badge}
        </span>
        {note.headline}
      </p>
      {note.paragraphs.map((paragraph, index) => (
        <p key={paragraph} className={cn("text-sm leading-relaxed text-foreground-muted", index === 0 ? "mt-2" : "mt-3")}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function PracticalChipRow({ chips }: { chips: string[] }) {
  return (
    <ul className="mb-4 flex list-none flex-wrap gap-2 p-0 sm:mb-5" aria-label="Practical highlights">
      {chips.map((chip) => (
        <li key={chip}>
          <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand-muted/35 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
            {chip}
          </span>
        </li>
      ))}
    </ul>
  );
}

function InfoCard({ card }: { card: ShoppingInfoCard }) {
  const Icon = card.icon;
  return (
    <div
      className={cn(
        "flex h-full gap-3 rounded-card border bg-surface-raised p-4 shadow-card ring-1 sm:gap-4 sm:p-5",
        card.tone === "accent"
          ? "border-brand/20 bg-gradient-to-br from-brand-muted/30 via-surface-raised to-surface-raised ring-brand/10"
          : "border-border ring-border/10"
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{card.badge}</p>
        <h3 className="mt-1.5 text-sm font-semibold tracking-tight text-foreground sm:text-base">{card.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
        {card.bullets?.length ? (
          <ul className="mt-3 space-y-2 text-sm text-foreground-muted" role="list">
            {card.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" aria-hidden />
                <span className="leading-snug sm:leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function StoreCategoryCard({ card }: { card: ShoppingStoreCategory }) {
  const Icon = card.icon;
  return (
    <div className="flex h-full flex-col rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full border border-brand/20 bg-brand-muted/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
              {card.badge}
            </span>
            <span className="inline-flex rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
              {card.rhythm}
            </span>
          </div>
          <h3 className="mt-2 text-sm font-semibold tracking-tight text-foreground sm:text-base">{card.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{card.intro}</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 text-sm text-foreground-muted sm:grid-cols-2">
        <div className="rounded-lg border border-border/70 bg-surface-muted/35 px-3 py-3 ring-1 ring-border/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Best for</p>
          <ul className="mt-1.5 space-y-1.5">
            {card.goodFor.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-border/70 bg-surface-muted/35 px-3 py-3 ring-1 ring-border/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">When people use it</p>
          <p className="mt-1.5 leading-relaxed">{card.whenPeopleUseIt}</p>
        </div>
        <div className="rounded-lg border border-brand/15 bg-brand-muted/25 px-3 py-3 ring-1 ring-brand/5 sm:col-span-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Practical tip</p>
          <p className="mt-1.5 leading-relaxed text-foreground-muted">{card.practicalTip}</p>
          {card.internalLink ? (
            <p className="mt-2 text-sm">
              <Link href={card.internalLink.href} className={crossLinkClass}>
                {card.internalLink.label}
              </Link>
              {card.internalLink.description ? <span className="text-foreground-muted"> {" "}for {card.internalLink.description.toLowerCase()}.</span> : null}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function SupermarketChainCard({ chain }: { chain: ShoppingSupermarketChain }) {
  const Icon = chain.icon;
  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <span className="inline-flex rounded-full border border-brand/20 bg-brand-muted/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
            {chain.badge}
          </span>
          <h3 className="mt-2 text-sm font-semibold tracking-tight text-foreground sm:text-base">{chain.name}</h3>
          {chain.regionNote ? (
            <p className="mt-1 text-xs leading-relaxed text-foreground-muted">{chain.regionNote}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-4 grid flex-1 grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
        <div className="rounded-lg border border-emerald-200/60 bg-emerald-50/40 px-3 py-3 ring-1 ring-emerald-100/50">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-800/90">Good at</p>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed text-foreground-muted" role="list">
            {chain.strengths.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600/80" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-amber-200/70 bg-amber-50/50 px-3 py-3 ring-1 ring-amber-100/60">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-900/85">Drawbacks</p>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed text-foreground-muted" role="list">
            {chain.drawbacks.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600/70" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-brand/20 bg-brand-muted/20 px-3 py-3 ring-1 ring-brand/10">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Best suited for</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{chain.bestFor}</p>
        </div>
      </div>
    </article>
  );
}

function ConfidenceCallout({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-card border border-brand/25 bg-gradient-to-br from-brand-muted/30 via-surface-raised to-surface-raised p-4 shadow-card ring-1 ring-brand/10 sm:p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
    </div>
  );
}

function SurprisesGrid() {
  return (
    <ol className="grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-3" aria-label="Common shopping surprises for newcomers">
      {shoppingGroceriesSurprises.map((item, index) => (
        <li
          key={item.title}
          className="flex gap-3 rounded-card border border-border border-l-[3px] border-l-brand bg-surface-raised p-3.5 shadow-card ring-1 ring-border/10 sm:p-4"
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-xs font-bold text-brand-strong ring-1 ring-brand/15"
            aria-hidden
          >
            {index + 1}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-snug text-foreground sm:text-[0.9375rem]">{item.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function OfficialSourcesBlock() {
  return (
    <section
      id="official-sources"
      aria-labelledby="shopping-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8 rounded-2xl border-0 bg-slate-50/90 p-6 shadow-inner sm:p-8")}
    >
      <h2 id="shopping-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        {shoppingGroceriesReferences.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{shoppingGroceriesReferences.intro}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {shoppingGroceriesReferences.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm leading-relaxed text-foreground-muted">{shoppingGroceriesReferences.footer}</p>
    </section>
  );
}

export function ShoppingGroceriesView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(LIVING_SHOPPING_GROCERIES_PATH, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: LIVING_PILLAR_BREADCRUMB_LABEL, item: new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString() },
    { name: "Shopping & Groceries", item: new URL(LIVING_SHOPPING_GROCERIES_PATH, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <LivingSectionNav
      items={shoppingGroceriesSectionNav}
      deepLinks={[
        {
          href: LIVING_SURVIVAL_GUIDE_PATH,
          label: "Netherlands Survival Guide",
          description: "Your wider Living hub for first-week priorities, transport, payments, weather, and the big picture around daily life.",
        },
        {
          href: LIVING_DAILY_LIFE_PATH,
          label: "Daily Life Basics",
          description: "Shops, payments, parcels, and everyday routines when you want the broader daily-life system around this page.",
        },
        {
          href: LIVING_ESSENTIAL_APPS_PATH,
          label: "Essential Apps",
          description: "Supermarket apps, maps, payments, and delivery tools that become useful once shopping habits start to settle.",
        },
        {
          href: LIVING_WEATHER_PATH,
          label: "Weather & Seasons",
          description: "Useful when weather changes how far you walk, whether you order delivery, and how weekly errands actually feel.",
        },
        {
          href: LIVING_CULTURE_ETIQUETTE_PATH,
          label: "Dutch Culture & Etiquette",
          description: "Helpful when payment requests, everyday directness, and practical shopping norms need a social layer too.",
        },
        {
          href: LIVING_LANGUAGE_PATH,
          label: "Language & Phrases",
          description: "Short Dutch for shops, checkout moments, and everyday errands when a tiny language layer reduces friction fast.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline={shoppingGroceriesMeta.title}
        description={shoppingGroceriesMeta.description}
        dateModified={SHOPPING_GROCERIES_DATE_MODIFIED}
        urlPath={LIVING_SHOPPING_GROCERIES_PATH}
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
                    Shopping &amp; Groceries
                  </span>
                </nav>
              }
              eyebrow={shoppingGroceriesHero.eyebrow}
              title={shoppingGroceriesHero.title}
              subtitle={shoppingGroceriesHero.subtitle}
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
                      {shoppingGroceriesHero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                      <Link href={shoppingGroceriesHero.primaryCta.href} className={primaryCtaClass}>
                        {shoppingGroceriesHero.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={shoppingGroceriesHero.secondaryCta.href}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        {shoppingGroceriesHero.secondaryCta.label}
                      </Link>
                    </div>
                    <p className="mt-4 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      Read this alongside{" "}
                      <Link href={LIVING_SURVIVAL_GUIDE_PATH} className={crossLinkClass}>
                        Survival Guide
                      </Link>
                      ,{" "}
                      <Link href={LIVING_DAILY_LIFE_PATH} className={crossLinkClass}>
                        Daily Life Basics
                      </Link>
                      , and{" "}
                      <Link href={LIVING_ESSENTIAL_APPS_PATH} className={crossLinkClass}>
                        Essential Apps
                      </Link>
                      {" "}so shopping stays tied to real Dutch routines instead of feeling like a generic supermarket article.
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      If you want to turn store habits into monthly numbers, use the{" "}
                      <Link href="/netherlands/money/tools/cost-of-living-calculator/" className={crossLinkClass}>
                        Cost of Living Calculator
                      </Link>
                      {" "}and{" "}
                      <Link href="/netherlands/living/tools/utilities-services-comparison/" className={crossLinkClass}>
                        Utilities &amp; Services Comparison
                      </Link>
                      . For family-life pressure on errands and delivery convenience, the{" "}
                      <Link href="/netherlands/family/tools/childcare-cost-estimator/" className={crossLinkClass}>
                        Childcare Cost Estimator
                      </Link>
                      {" "}helps put the weekly rhythm in context. And if neighborhood fit is still part of the bigger relocation decision, the{" "}
                      <Link href="/netherlands/tools/city-comparison/" className={crossLinkClass}>
                        City Comparison Tool
                      </Link>
                      {" "}helps connect shopping convenience back to where you want to live.
                    </p>
                    <ul
                      className="mt-5 flex list-none flex-wrap gap-2 border-t border-border/80 p-0 pt-5 sm:mt-6 sm:gap-2.5 sm:pt-6"
                      aria-label="Quick shopping truths"
                    >
                      {shoppingGroceriesHero.quickStrip.map(({ icon: Icon, label }) => (
                        <li key={label} className="max-w-full">
                          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/90 bg-surface-raised px-3 py-1.5 text-left text-xs font-medium text-foreground-muted shadow-card ring-1 ring-border/10">
                            <Icon className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ShoppingGroceriesHeroGraphic className="min-w-0 w-full max-w-md justify-self-center sm:max-w-none md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={LIVING_SHOPPING_GROCERIES_PATH}
            />
          </PillarGuideHeroRegion>
        }
        atAGlance={
          <PillarGuideAtGlanceRegion>
            <SectionBlock
              id="at-a-glance"
              className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5 md:!pt-6")}
              eyebrow={shoppingGroceriesAtAGlance.eyebrow}
              title={shoppingGroceriesAtAGlance.title}
              subtitle={shoppingGroceriesAtAGlance.subtitle}
            >
              <AtAGlanceGrid />
              <AtAGlanceNote />
            </SectionBlock>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact">
            <LivingSurvivalMobileToc items={shoppingGroceriesSectionNav} />

            <LivingPillarExplorer
              id="explore-living-pillar"
              title="Explore the wider Living pillar"
              subtitle="Use this page as part of the same Living stack: shopping is easier when it stays connected to daily routines, apps, transport, weather, and the first-week hub."
            />

            <SectionRhythmDivider />

            <SectionBlock
              id="start-here"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Start here"
              title="Your first shopping trip, first week, and first month"
              subtitle="Start with confidence first. Fine-tune the routine later."
            >
              <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
                <span className="rounded-full border border-brand/25 bg-brand-muted/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                  Priority path
                </span>
                <span className="leading-snug">Learn one real store and one real checkout flow before you worry about the perfect setup.</span>
              </p>
              <LivingQuickStartCards phases={shoppingGroceriesQuickStart} />
              <div className="mt-4 sm:mt-5">
                <ConfidenceCallout {...shoppingGroceriesStartHereCallout} />
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="grocery-basics"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Core framing"
              title="How grocery shopping works in practice"
              subtitle="The system feels simple once the rhythm is clear. Early confusion usually comes from branch choice, checkout flow, and learning which errands belong together."
            >
              <PracticalChipRow chips={["Routine beats theory", "Self-checkout is normal", "Nearest is not always best"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Supermarkets sit at the center of everyday shopping, but branches do not all feel the same. Newcomers usually need a little time to learn which
                store works for the main weekly shop, which one is best for top-ups, and where household basics are easier to buy separately.
              </p>
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                That is why the nearest store is not always the main store. A slightly larger or calmer branch can be better for the weekly basket, while a
                closer convenience stop stays useful for last-minute items. Shopping gets easier once you stop expecting one shop to do every job equally well.
              </p>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                Use{" "}
                <Link href={LIVING_SURVIVAL_GUIDE_PATH} className={crossLinkClass}>
                  Survival Guide
                </Link>
                {" "}for first-week sequencing,{" "}
                <Link href={LIVING_DAILY_LIFE_PATH} className={crossLinkClass}>
                  Daily Life Basics
                </Link>
                {" "}for the wider errands-and-payments system, and{" "}
                <Link href={LIVING_ESSENTIAL_APPS_PATH} className={crossLinkClass}>
                  Essential Apps
                </Link>
                {" "}for the app side of bonus cards, delivery, and store routines.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {shoppingGroceriesPracticeCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="store-types"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Use cases"
              title="Types of stores and what they are good for"
              subtitle="Think in jobs, not chain rankings. The goal is to understand what each kind of store solves in a normal week."
            >
              <PracticalChipRow chips={["Main shop", "Top-ups", "Household basics"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                If you can quickly answer &quot;where would I buy this?&quot; for food, top-ups, and household basics, you already understand most of the system.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
                {shoppingGroceriesStoreCategories.map((card) => (
                  <StoreCategoryCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="supermarket-chains"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Named retailers"
              title="Major supermarket chains: what they are good at, drawbacks, and who they fit"
              subtitle="A practical snapshot of the banners you are most likely to see—not a live price league table. Your postcode and branch size still matter more than the logo."
            >
              <PracticalChipRow chips={["Strengths", "Trade-offs", "Fit"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Use this when you want to map real chain names to expectations. Discount formats (Lidl, Aldi, Dirk) prioritize price and speed; full-service chains (Albert
                Heijn, Jumbo) prioritize range and one-stop shopping; cooperative and neighbourhood formats (Plus, Coop, SPAR) vary more by branch; regional chains only
                matter when you actually have one nearby.
              </p>
              <div className="grid grid-cols-1 gap-4 lg:gap-5">
                {shoppingGroceriesSupermarketChains.map((chain) => (
                  <SupermarketChainCard key={chain.name} chain={chain} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="supermarket-habits"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="High-value habits"
              title="Supermarket habits: self-checkout, bonus cards, and apps"
              subtitle="This is where the system often clicks. The mechanics are simple, but they shape how fast shopping starts to feel normal."
            >
              <PracticalChipRow chips={["Scan and pay", "Bonus flows", "One app is enough to start"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Pair this section with{" "}
                <Link href={LIVING_ESSENTIAL_APPS_PATH} className={crossLinkClass}>
                  Essential Apps
                </Link>
                {" "}when you want the install-order side of grocery apps, payment apps, and delivery. This page stays focused on how those tools fit into real store behavior.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {shoppingGroceriesHabitCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <ConfidenceCallout {...shoppingGroceriesHabitCallout} />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="household-shopping"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Beyond food"
              title="Everyday household shopping beyond groceries"
              subtitle="This is where the page becomes more useful than a supermarket overview. Food is only one part of everyday buying once you move in."
            >
              <PracticalChipRow chips={["Cleaning", "Toiletries", "Paper goods"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Newcomers often expect the grocery shop to cover almost everything. In practice, Dutch daily life works better once you know which household
                basics are easy to buy in supermarkets and which ones are simpler in dedicated stores.
              </p>
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                This is also where the{" "}
                <Link href="/netherlands/living/tools/utilities-services-comparison/" className={crossLinkClass}>
                  Utilities &amp; Services Comparison
                </Link>
                {" "}tool becomes more useful than it first sounds: once home setup, household buying, and recurring bills all start competing for space in the same monthly budget.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {shoppingGroceriesHouseholdCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="deliveries-online"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Convenience"
              title="Deliveries, online ordering, and convenience shopping"
              subtitle="Delivery is useful, but not automatically smarter. Most people end up mixing local shopping and online ordering based on time, household size, and where they live."
            >
              <PracticalChipRow chips={["Delivery windows", "Postcode matters", "Convenience has a cost"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                If deliveries are becoming part of your real weekly routine, keep{" "}
                <Link href={LIVING_ESSENTIAL_APPS_PATH} className={crossLinkClass}>
                  Essential Apps
                </Link>
                {" "}open for the app stack and use the{" "}
                <Link href="/netherlands/money/tools/cost-of-living-calculator/" className={crossLinkClass}>
                  Cost of Living Calculator
                </Link>
                {" "}to see whether convenience is staying inside a monthly number you actually like.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {shoppingGroceriesDeliveryCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="surprises"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Reality check"
              title="What surprises newcomers most"
              subtitle="These are the short truths that usually make the whole system click faster."
            >
              <SurprisesGrid />
              <div className="mt-4 sm:mt-5">
                <ConfidenceCallout {...shoppingGroceriesMisunderstandingsCallout} />
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="shop-smarter"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Confidence"
              title="How to shop smarter without overcomplicating it"
              subtitle="The goal is not to optimize everything immediately. It is to understand the rhythm, build a simple local setup, and improve later."
            >
              <PracticalChipRow chips={["Routine first", "Apps when useful", "Convenience with intent"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                If you are still deciding between neighborhoods or cities, use the{" "}
                <Link href="/netherlands/tools/city-comparison/" className={crossLinkClass}>
                  City Comparison Tool
                </Link>
                {" "}alongside this page. Everyday shopping convenience sounds small, but it can make a big difference to how settled the week feels.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {shoppingGroceriesSmarterCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <ConfidenceCallout {...shoppingGroceriesSmarterCallout} />
            </SectionBlock>
          </PillarJourneyStack>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id="helpful-tools"
            title={shoppingGroceriesRelatedToolsConfig.sectionTitle}
            subtitle={shoppingGroceriesRelatedToolsConfig.sectionSubtitle}
          >
            <div className="col-span-full max-w-3xl">
              <p className="text-sm leading-relaxed text-foreground-muted">{shoppingGroceriesRelatedToolsConfig.intro}</p>
            </div>
            {shoppingGroceriesToolCards.map((card) => (
              <ToolCard
                key={card.href}
                title={card.title}
                description={card.description}
                href={card.href}
                ctaLabel={card.ctaLabel}
                compact
                icon={<card.icon className="h-5 w-5" aria-hidden />}
              />
            ))}
            <div className="col-span-full mt-6 border-t border-border/70 pt-6 sm:mt-8 sm:pt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{shoppingGroceriesRelatedToolsConfig.shortcutEyebrow}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">{shoppingGroceriesRelatedToolsConfig.shortcutTitle}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">{shoppingGroceriesRelatedToolsConfig.shortcutBody}</p>
              <div className="mt-4">
                <LivingToolShortcutsGrid tools={[...shoppingGroceriesMoveAndFamilyShortcuts]} />
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
              title="Related Living guides"
              subtitle="Stay inside the Living pillar when you want shopping tied to routines, language, weather, apps, and the wider day-to-day context."
            >
              <LivingClusterLinkGrid items={LIVING_CLUSTER_SIBLING_LINKS_SHOPPING_GROCERIES} />
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
              subtitle="Short, practical answers for the shopping questions newcomers ask most."
            >
              <Accordion
                items={shoppingGroceriesFaq.map((item) => ({
                  id: item.id,
                  title: item.question,
                  content: item.answer,
                }))}
                tone="copilot"
                density="comfortable"
              />
            </SectionBlock>
            <OfficialSourcesBlock />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
