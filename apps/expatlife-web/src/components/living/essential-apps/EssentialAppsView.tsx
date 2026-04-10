import { createElement, Fragment } from "react";
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
import {
  LIVING_CULTURE_ETIQUETTE_PATH,
  LIVING_CLUSTER_SIBLING_LINKS_ESSENTIAL_APPS,
  LIVING_DAILY_LIFE_PATH,
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
import { EssentialAppsFaq } from "./EssentialAppsFaq";
import { EssentialAppsHeroGraphic } from "./EssentialAppsHeroGraphic";
import { LivingAppsRichParagraph } from "./LivingAppsRichParagraph";
import {
  livingAppsCategories,
  livingAppsCategoryOverview,
  livingAppsFaq,
  livingAppsQuickStart,
  livingAppsReferences,
  livingAppsRelatedTools,
  livingAppsSectionNav,
  livingAppsSurprises,
  livingEssentialAppsPageConfig,
} from "./livingEssentialApps";
import { livingAppsIcon } from "./livingEssentialApps.icons";
import { resolveLivingAppCards } from "./livingEssentialApps.resolve";
import type {
  LivingAppCardBadge,
  LivingAppCardResolved,
  LivingAppsCategorySectionApps,
  LivingAppsOptionalBlurbConfig,
} from "./livingEssentialApps.types";

const { copy: livingEssentialAppsCopy, supplementalToolsTitleId } = livingEssentialAppsPageConfig;

const CATEGORY_A11Y_LABEL: Record<LivingAppCardResolved["category"], string> = {
  transport: "Transport",
  payments: "Payments and money",
  shopping: "Shopping and food",
  everyday: "Everyday life",
  services: "Government, media, and local services",
  optional: "Optional",
};

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const FAQ_SCHEMA = livingAppsFaq.map((item) => ({
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

function badgeClasses(badge: LivingAppCardBadge) {
  if (badge === "must-have") {
    return "border-0 bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm ring-1 ring-brand-strong/25";
  }
  if (badge === "strongly-useful") {
    return "border border-sky-300/90 bg-sky-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-sky-950 shadow-sm";
  }
  return "border border-border bg-surface-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-foreground-muted";
}

function badgeLabel(badge: LivingAppCardBadge) {
  if (badge === "must-have") return "Must-have";
  if (badge === "strongly-useful") return "Strong pick";
  return "Optional";
}

function BetweenAppCategories({ label }: { label: string }) {
  return (
    <div className="mx-auto my-3 flex max-w-2xl items-center gap-3 sm:my-4" role="group" aria-label={label}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/70 to-border/40" aria-hidden />
      <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground-muted">{label}</span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border/70 to-border/40" aria-hidden />
    </div>
  );
}

function appCardHeadingId(name: string) {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `ea-app-${slug || "card"}`;
}

const appStoreRowLinkClass =
  "font-medium text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm";

function OptionalBlurbLinksRow({ blurb }: { blurb: LivingAppsOptionalBlurbConfig }) {
  const { title, outbound, storeLinks, seeAlsoOnPage } = blurb;
  const hasStores = Boolean(storeLinks?.appStore || storeLinks?.playStore);
  const hasFooter = hasStores || outbound || seeAlsoOnPage;
  if (!hasFooter) return null;

  const storeNodes = hasStores
    ? [
        storeLinks?.appStore ? (
          <a
            key="as"
            href={storeLinks.appStore.href}
            target="_blank"
            rel="noopener noreferrer"
            className={appStoreRowLinkClass}
            aria-label={`${title} — App Store (opens in new tab)`}
          >
            App Store
          </a>
        ) : null,
        storeLinks?.playStore ? (
          <a
            key="gp"
            href={storeLinks.playStore.href}
            target="_blank"
            rel="noopener noreferrer"
            className={appStoreRowLinkClass}
            aria-label={`${title} — Google Play (opens in new tab)`}
          >
            Google Play
          </a>
        ) : null,
        outbound ? (
          <a
            key="web"
            href={outbound.href}
            target="_blank"
            rel="noopener noreferrer"
            className={appStoreRowLinkClass}
            aria-label={`${title} — ${outbound.label} (opens in new tab)`}
          >
            Website
          </a>
        ) : null,
      ]
        .filter(Boolean)
        .flatMap((node, i) =>
          i === 0
            ? [node]
            : [
                <span key={`dot-${i}`} className="text-foreground-faint" aria-hidden>
                  ·
                </span>,
                node,
              ]
        )
    : null;

  return (
    <div className="mt-3 space-y-2.5 border-t border-border/55 pt-3">
      {hasStores ? (
        <div className="rounded-lg border border-border/60 bg-surface-muted/40 px-3 py-2 ring-1 ring-border/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Get the app</p>
          <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">{storeNodes}</p>
        </div>
      ) : null}
      {!hasStores && outbound ? (
        <p className="text-sm">
          <a
            href={outbound.href}
            target="_blank"
            rel="noopener noreferrer"
            className={appStoreRowLinkClass}
            aria-label={`${title} — ${outbound.label} (opens in new tab)`}
          >
            {outbound.label} →
          </a>
        </p>
      ) : null}
      {seeAlsoOnPage ? (
        <p className="text-sm text-foreground-muted">
          <Link href={seeAlsoOnPage.href} className={appStoreRowLinkClass}>
            {seeAlsoOnPage.label} →
          </Link>
        </p>
      ) : null}
    </div>
  );
}

function FeaturedAppGrid({ apps, className }: { apps: LivingAppCardResolved[]; className?: string }) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-3.5 sm:gap-4 md:grid-cols-2 md:gap-5", className)}
    >
      {apps.map((a) => {
        const isMust = a.badge === "must-have";
        const headingId = appCardHeadingId(a.name);
        return (
          <article
            key={a.name}
            aria-labelledby={headingId}
            className={cn(
              "flex h-full flex-col overflow-hidden rounded-card border bg-surface-raised shadow-card ring-1 transition-shadow hover:shadow-card-hover motion-reduce:hover:shadow-card",
              isMust
                ? "border-border border-l-[3px] border-l-brand bg-gradient-to-br from-brand-muted/30 via-surface-raised to-surface-raised ring-brand/15"
                : "border-border ring-border/10"
            )}
          >
            <div className="flex items-start gap-3 p-4 sm:p-5">
              <div
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-brand-strong",
                  isMust ? "bg-brand-muted ring-2 ring-brand/15" : "bg-brand-muted/85"
                )}
              >
                <a.Icon className="h-5 w-5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 gap-y-1.5">
                  <span className="sr-only">{`${CATEGORY_A11Y_LABEL[a.category]} · `}</span>
                  <h3 id={headingId} className="text-base font-semibold tracking-tight text-foreground">
                    {a.outbound ? (
                      <a
                        href={a.outbound.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit underline-offset-2 decoration-transparent hover:underline hover:decoration-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm"
                        aria-label={`${a.name}, ${a.outbound.label} (opens in new tab)`}
                      >
                        {a.name}
                      </a>
                    ) : (
                      a.name
                    )}
                  </h3>
                  <span className={cn("shrink-0 rounded-full", badgeClasses(a.badge))}>{badgeLabel(a.badge)}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col space-y-3 border-t border-border/60 bg-surface-muted/25 px-4 py-3.5 sm:px-5 sm:py-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Best for</p>
                <p className="mt-1 text-sm font-medium leading-snug text-foreground">{a.bestFor}</p>
              </div>
              <p className="text-sm leading-relaxed text-foreground-muted">{a.whyMatters}</p>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Install when</p>
                <p className="mt-1 text-sm leading-snug text-foreground-muted">{a.whenInstall}</p>
              </div>
              <div className="rounded-lg border border-border/70 bg-surface-raised px-3 py-2.5 ring-1 ring-border/5">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Tip</p>
                <p className="mt-1 text-sm font-medium leading-snug text-foreground">{a.quickTip}</p>
              </div>
              {a.storeLinks?.appStore || a.storeLinks?.playStore ? (
                <div className="rounded-lg border border-border/60 bg-surface-muted/40 px-3 py-2.5 ring-1 ring-border/5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Get the app</p>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                    {[
                      a.storeLinks?.appStore ? (
                        <a
                          key="as"
                          href={a.storeLinks.appStore.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={appStoreRowLinkClass}
                          aria-label={`${a.name} — App Store (opens in new tab)`}
                        >
                          App Store
                        </a>
                      ) : null,
                      a.storeLinks?.playStore ? (
                        <a
                          key="gp"
                          href={a.storeLinks.playStore.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={appStoreRowLinkClass}
                          aria-label={`${a.name} — Google Play (opens in new tab)`}
                        >
                          Google Play
                        </a>
                      ) : null,
                      a.outbound ? (
                        <a
                          key="web"
                          href={a.outbound.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={appStoreRowLinkClass}
                          aria-label={`${a.name} — ${a.outbound.label} (opens in new tab)`}
                        >
                          Website
                        </a>
                      ) : null,
                    ]
                      .filter(Boolean)
                      .flatMap((node, i) =>
                        i === 0
                          ? [node]
                          : [
                              <span key={`dot-${i}`} className="text-foreground-faint" aria-hidden>
                                ·
                              </span>,
                              node,
                            ]
                      )}
                  </p>
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function CategoryIntro(
  props: Pick<LivingAppsCategorySectionApps, "introParagraphs" | "introMultiClassName" | "introSingleClassName">
) {
  const { introParagraphs, introMultiClassName, introSingleClassName } = props;
  if (!introParagraphs?.length) return null;
  if (introParagraphs.length > 1) {
    return (
      <div className={introMultiClassName}>
        {introParagraphs.map((segments, i) => (
          <LivingAppsRichParagraph key={i} segments={segments} className="text-inherit" />
        ))}
      </div>
    );
  }
  return <LivingAppsRichParagraph segments={introParagraphs[0]} className={introSingleClassName} />;
}

function AtAGlanceGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {livingEssentialAppsCopy.atAGlanceCells.map((c) => (
        <div
          key={c.title}
          className="rounded-card border border-border/80 bg-surface-muted/80 p-4 shadow-card ring-1 ring-inset ring-border/10 sm:p-5"
        >
          <p className="text-sm font-semibold text-foreground">{c.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted sm:mt-2">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

function AtAGlanceNote() {
  const { badge, title, paragraphs } = livingEssentialAppsCopy.atAGlanceNote;
  return (
    <div className="mt-4 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:mt-5 sm:p-5">
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
        <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
          {badge}
        </span>
        {title}
      </p>
      {paragraphs.map((segments, i) => (
        <LivingAppsRichParagraph key={i} segments={segments} className={i === 0 ? "mt-2" : "mt-3"} />
      ))}
    </div>
  );
}

function CategoryOverviewGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
      {livingAppsCategoryOverview.map((c) => {
        const Icon = livingAppsIcon(c.iconKey);
        return (
          <div
            key={`${c.anchorId}-${c.title}`}
            className="flex gap-3 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 transition-colors hover:border-border-strong hover:shadow-card-hover sm:gap-4 sm:p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong ring-1 ring-brand/10 sm:h-11 sm:w-11">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-snug text-foreground-muted sm:mt-2 sm:leading-relaxed">{c.summary}</p>
              <Link
                href={`#${c.anchorId}`}
                className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline"
              >
                {c.jumpLabel}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SurprisesGrid() {
  return (
    <ol
      className="grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-3"
      aria-label="Common surprises for newcomers"
    >
      {livingAppsSurprises.map((t, i) => (
        <li
          key={t}
          className="flex gap-3 rounded-card border border-border border-l-[3px] border-l-brand/90 bg-surface-raised p-3.5 shadow-card ring-1 ring-border/10 sm:gap-3.5 sm:p-4"
        >
          <span className="sr-only">{`${i + 1}. `}</span>
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-xs font-bold text-brand-strong ring-1 ring-brand/15"
            aria-hidden
          >
            {i + 1}
          </span>
          <span className="min-w-0 text-sm font-semibold leading-snug text-foreground sm:text-[0.9375rem] sm:leading-relaxed">{t}</span>
        </li>
      ))}
    </ol>
  );
}

function OfficialSourcesBlock() {
  const ref = livingAppsReferences;
  return (
    <section
      id={ref.sectionId}
      aria-labelledby="ea-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8 rounded-2xl border-0 bg-slate-50/90 p-6 shadow-inner sm:p-8")}
    >
      <h2 id="ea-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        {ref.heading}
      </h2>
      <div className="mt-3">
        <LivingAppsRichParagraph segments={ref.description} className="text-foreground-muted" />
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {ref.links.map((link) => (
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
      <div className="mt-4">
        <LivingAppsRichParagraph segments={ref.footnote} className="text-foreground-muted" />
      </div>
    </section>
  );
}

export function EssentialAppsView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(LIVING_ESSENTIAL_APPS_PATH, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: LIVING_PILLAR_BREADCRUMB_LABEL, item: new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString() },
    { name: "Essential apps", item: new URL(LIVING_ESSENTIAL_APPS_PATH, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <LivingSectionNav
      items={livingAppsSectionNav}
      deepLinks={[
        {
          href: LIVING_SURVIVAL_GUIDE_PATH,
          label: "Netherlands Survival Guide",
          description: "Bookmarkable Living hub: first-week rhythm, payments, weather, topic cards, FAQs, and the same calculator strip as this page.",
        },
        {
          href: LIVING_GETTING_AROUND_PATH,
          label: "Getting around in the Netherlands",
          description: "NS, 9292, OVpay, modes, commuting reality, and cycling—when transport needs depth beyond the app list.",
        },
        {
          href: LIVING_DAILY_LIFE_PATH,
          label: "Daily life basics in the Netherlands",
          description: "How shops, errands, payments, deliveries, and waste actually work once your home screen is sorted.",
        },
        {
          href: LIVING_SHOPPING_GROCERIES_PATH,
          label: "Shopping & Groceries in the Netherlands",
          description: "The dedicated shopping guide for supermarket apps, self-checkout, store types, delivery habits, and the routines behind the grocery stack on this page.",
        },
        {
          href: LIVING_HEALTHCARE_BASICS_PATH,
          label: "Healthcare Basics in the Netherlands",
          description: "Helpful when insurer apps, saved contacts, and the practical healthcare setup become part of the same phone layer too.",
        },
        {
          href: LIVING_WEATHER_PATH,
          label: "Weather & Seasons in the Netherlands",
          description: "The practical weather layer for commuting, clothing, and choosing the apps that help most on rough-weather days.",
        },
        {
          href: LIVING_LANGUAGE_PATH,
          label: "Language & phrases for life in the Netherlands",
          description: "A practical Dutch layer for shops, cafes, transport, and neighbors when the right apps are not the whole answer.",
        },
        {
          href: LIVING_CULTURE_ETIQUETTE_PATH,
          label: "Dutch Culture & Etiquette",
          description: "Why Tikkie requests arrive fast, why plans are clearer than expected, and the social cues around the apps on this page.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline="Essential Apps for Life in the Netherlands"
        description="Curated apps for life in the Netherlands: transport, tap-to-go pay, Tikkie, groceries, delivery, weather, and chat—install order for your first days and weeks."
        dateModified={livingEssentialAppsCopy.dateModified}
        urlPath={LIVING_ESSENTIAL_APPS_PATH}
      />
      <FaqPageJsonLd items={FAQ_SCHEMA} />

      <GuidePageTemplate
        mainStackClassName="mt-2 space-y-3 sm:mt-3 sm:space-y-4 md:space-y-5"
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
                    Essential apps
                  </span>
                </nav>
              }
              eyebrow="Living in the Netherlands"
              title="Essential Apps for Life in the Netherlands"
              subtitle="A tight home screen for Dutch daily life: OV, bank + Tikkie, groceries, delivery, rain radar, and chat—ordered for your first days, not an app catalogue."
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-4 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-snug text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem] sm:leading-relaxed" role="list">
                      {livingEssentialAppsCopy.heroBullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                      <Link href="#transport-apps" className={primaryCtaClass}>
                        See the must-have apps
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href="#start-here"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        Start with the first 48 hours
                      </Link>
                      <Link
                        href="#app-categories"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border/80 bg-transparent px-4 py-2.5 text-sm font-semibold text-foreground-muted hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        Browse categories
                      </Link>
                    </div>
                    <p className="mt-3 text-sm leading-snug text-foreground-muted sm:mt-4 sm:leading-relaxed">
                      <Link
                        href={LIVING_GETTING_AROUND_PATH}
                        className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline"
                      >
                        Getting around
                      </Link>
                      <span className="text-foreground-muted"> for NS, 9292, OVpay, and commute onboarding beyond this screen.</span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link
                        href={LIVING_SURVIVAL_GUIDE_PATH}
                        className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline"
                      >
                        Netherlands Survival Guide
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        for the full Living hub—quick start, topic cards, FAQs, and planning tools in one bookmark.
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_DAILY_LIFE_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Daily life basics
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        explains how supermarket, payment, and delivery habits work in practice—pair it with the app list below.
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_SHOPPING_GROCERIES_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Shopping &amp; Groceries
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        turns the grocery-app section into a full everyday shopping guide: supermarkets, self-checkout, household basics, and delivery trade-offs.
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_CULTURE_ETIQUETTE_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Dutch Culture & Etiquette
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        adds the social layer behind Tikkie, reservations, punctuality, neighbors, and everyday Dutch directness once the apps are installed.
                      </span>
                    </p>
                    <ul
                      className="mt-4 flex list-none flex-wrap gap-1.5 border-t border-border/80 p-0 pt-4 sm:mt-5 sm:gap-2 sm:pt-5"
                      aria-label="Quick orientation"
                    >
                      {livingEssentialAppsCopy.heroQuickStrip.map(({ iconKey, label }) => {
                        const Icon = livingAppsIcon(iconKey);
                        return (
                          <li key={label} className="max-w-full">
                            <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-border/90 bg-surface-raised px-2.5 py-1 text-left text-[11px] font-medium text-foreground-muted shadow-sm ring-1 ring-border/10 sm:px-3 sm:py-1.5 sm:text-xs">
                              <Icon className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                              {label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <EssentialAppsHeroGraphic className="min-w-0 w-full pt-1 sm:pt-0 md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={LIVING_ESSENTIAL_APPS_PATH}
            />
          </PillarGuideHeroRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact">
            <LivingSurvivalMobileToc items={livingAppsSectionNav} />

            <SectionBlock
              id="at-a-glance"
              className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5 md:!pt-6")}
              eyebrow="Orientation"
              title="At a glance"
              subtitle="One screen you can trust before the rest of Living grows out."
            >
              <AtAGlanceGrid />
              <AtAGlanceNote />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="start-here"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Start here"
              title="First 48 hours, first week, first month"
              subtitle="Same sequence most people wish they had used—move and pay first, extras when life demands them."
            >
              <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
                <span className="rounded-full border border-brand/25 bg-brand-muted/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                  Priority path
                </span>
                <span className="leading-snug">OV and money before anything clever—tills and gates are unforgiving.</span>
              </p>
              <LivingQuickStartCards phases={livingAppsQuickStart} />
              <LivingAppsRichParagraph segments={livingEssentialAppsCopy.startHereFooter} className="mt-6 max-w-3xl" />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="app-categories"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Map the stack"
              title="App category overview"
              subtitle="Jump to the section you need—each block below is short on purpose."
            >
              <CategoryOverviewGrid />
            </SectionBlock>

            <SectionRhythmDivider />

            {livingAppsCategories.map((section) => (
              <Fragment key={section.anchorId}>
                {section.betweenDividerLabel ? <BetweenAppCategories label={section.betweenDividerLabel} /> : null}
                {section.variant === "apps" ? (
                  <SectionBlock
                    id={section.anchorId}
                    compact
                    className={SECTION_SCROLL_MARGIN}
                    eyebrow={section.eyebrow}
                    title={section.title}
                    subtitle={section.subtitle}
                  >
                    <CategoryIntro
                      introParagraphs={section.introParagraphs}
                      introMultiClassName={section.introMultiClassName}
                      introSingleClassName={section.introSingleClassName}
                    />
                    <div
                      className={
                        section.introParagraphs && section.introParagraphs.length > 1 ? "mt-5 sm:mt-6" : ""
                      }
                    >
                      <FeaturedAppGrid
                        apps={resolveLivingAppCards(section.apps)}
                        className={section.appGridClassName}
                      />
                    </div>
                    {section.footerParagraphs?.map((segments, i) => (
                      <LivingAppsRichParagraph
                        key={i}
                        segments={segments}
                        className={cn("max-w-3xl", i === 0 ? "mt-5 sm:mt-6" : "mt-3")}
                      />
                    ))}
                  </SectionBlock>
                ) : (
                  <SectionBlock
                    id={section.anchorId}
                    compact
                    className={SECTION_SCROLL_MARGIN}
                    eyebrow={section.eyebrow}
                    title={section.title}
                    subtitle={section.subtitle}
                  >
                    <div className="mb-4 rounded-card border border-dashed border-border/90 bg-surface-muted/50 p-4 text-sm text-foreground-muted sm:p-5">
                      <span className="inline-flex items-center gap-2">
                        <span className="rounded-full border border-border bg-surface-raised px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
                          {section.callout.badge}
                        </span>
                        <span className="font-semibold text-foreground">{section.callout.title}</span>
                      </span>
                      <span className="mt-2 block leading-relaxed">{section.callout.body}</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                      {section.blurbs.map((b) => {
                        const Icon = livingAppsIcon(b.iconKey);
                        return (
                          <div
                            key={b.title}
                            className="flex gap-3 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/70 text-brand-strong">
                              <Icon className="h-5 w-5" aria-hidden />
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-sm font-semibold text-foreground sm:text-base">{b.title}</h3>
                              <p className="mt-1.5 text-sm leading-snug text-foreground-muted sm:leading-relaxed">{b.body}</p>
                              <OptionalBlurbLinksRow blurb={b} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </SectionBlock>
                )}
              </Fragment>
            ))}

            <SectionRhythmDivider />

            <SectionBlock
              id="surprises"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Reality check"
              title="What surprises newcomers most"
              subtitle="Short truths—pick the one that would have saved your week."
            >
              <SurprisesGrid />
              <LivingAppsRichParagraph segments={livingEssentialAppsCopy.surprisesFooter} className="mt-5 max-w-3xl sm:mt-6" />
            </SectionBlock>
          </PillarJourneyStack>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id="helpful-tools"
            title="Helpful planning tools"
            subtitle="Part of ExpatCopilot’s planning toolkit alongside Move, Money, and Housing—same ToolCard layout you will see on arrival playbooks and the Survival Guide."
          >
            <>
              <div className="col-span-full max-w-3xl">
                <LivingAppsRichParagraph segments={livingEssentialAppsCopy.toolsIntro} />
              </div>
              {livingAppsRelatedTools.map((tool) => (
                <ToolCard
                  key={tool.href}
                  title={tool.title}
                  description={tool.description}
                  href={tool.href}
                  ctaLabel={tool.ctaLabel}
                  compact={tool.compact}
                  icon={
                    tool.iconKey
                      ? createElement(livingAppsIcon(tool.iconKey), {
                          className: "h-5 w-5",
                          "aria-hidden": true,
                        })
                      : undefined
                  }
                />
              ))}
              <div className="col-span-full mt-6 border-t border-border/70 pt-6 sm:mt-8 sm:pt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                  {livingEssentialAppsCopy.supplementalToolsEyebrow}
                </p>
                <h3 id={supplementalToolsTitleId} className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                  {livingEssentialAppsCopy.supplementalToolsTitle}
                </h3>
                <div className="mt-2 max-w-3xl">
                  <LivingAppsRichParagraph segments={livingEssentialAppsCopy.supplementalToolsDescription} />
                </div>
                <div className="mt-4">
                  <LivingToolShortcutsGrid tools={LIVING_GETTING_AROUND_SUPPLEMENTAL_TOOLS} />
                </div>
              </div>
            </>
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
              subtitle="Stay inside the Living cluster when you want depth without leaving the pillar."
            >
              <LivingClusterLinkGrid items={LIVING_CLUSTER_SIBLING_LINKS_ESSENTIAL_APPS} />
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
              subtitle="Install order, NS vs 9292, OVpay, Tikkie, groceries, Dutch UI, and weather."
            >
              <EssentialAppsFaq />
            </SectionBlock>
            <OfficialSourcesBlock />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
