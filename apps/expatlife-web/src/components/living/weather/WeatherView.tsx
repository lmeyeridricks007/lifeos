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
  LIVING_CLUSTER_SIBLING_LINKS_WEATHER,
  LIVING_CULTURE_ETIQUETTE_PATH,
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_LANGUAGE_PATH,
  LIVING_PILLAR_BREADCRUMB_LABEL,
  LIVING_SURVIVAL_GUIDE_PATH,
  LIVING_WEATHER_PATH,
} from "@/src/components/living/livingPillarContent";
import { LivingQuickStartCards } from "@/src/components/living/survival-guide/LivingQuickStartCards";
import { LivingSectionNav } from "@/src/components/living/survival-guide/LivingSectionNav";
import { LivingSurvivalMobileToc } from "@/src/components/living/survival-guide/LivingSurvivalMobileToc";
import { WeatherHeroGraphic } from "./WeatherHeroGraphic";
import {
  WEATHER_PAGE_DATE_MODIFIED,
  weatherAdaptCards,
  weatherAtAGlance,
  weatherCommuteCards,
  weatherFaq,
  weatherFeelCards,
  weatherFeelCallout,
  weatherHelpfulCards,
  weatherHero,
  weatherMisunderstandings,
  weatherQuickStartCallout,
  weatherPlanningTools,
  weatherQuickStart,
  weatherReferences,
  weatherRoutineCards,
  weatherSeasonCards,
  weatherSectionNav,
  weatherWearCards,
  weatherCommuteCallout,
  weatherAdaptCallout,
  type WeatherInfoCard,
  type WeatherSeasonCard,
} from "./weatherContent";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const crossLinkClass =
  "font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm";

const FAQ_SCHEMA = weatherFaq.map((item) => ({
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
      {weatherAtAGlance.cells.map((cell) => (
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
  const note = weatherAtAGlance.note;
  return (
    <div className="mt-4 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:mt-5 sm:p-5">
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
        <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
          {note.badge}
        </span>
        {note.headline}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{note.body}</p>
    </div>
  );
}

function InfoCard({ card }: { card: WeatherInfoCard }) {
  const Icon = card.icon;
  return (
    <div
      className={cn(
        "flex h-full gap-3 rounded-card border bg-surface-raised p-4 shadow-card ring-1 sm:gap-4 sm:p-5",
        card.tone === "accent"
          ? "border-brand/20 bg-gradient-to-br from-brand-muted/25 via-surface-raised to-surface-raised ring-brand/10"
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

function ConfidenceCallout({
  eyebrow,
  title,
  body,
  className,
}: {
  eyebrow: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-brand/25 bg-gradient-to-br from-brand-muted/30 via-surface-muted/50 to-surface-raised p-4 shadow-sm ring-1 ring-brand/10 sm:p-5",
        className
      )}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
    </div>
  );
}

function PracticalChipRow({ chips, className }: { chips: string[]; className?: string }) {
  return (
    <ul className={cn("mb-4 flex list-none flex-wrap gap-2 p-0 sm:mb-5", className)} aria-label="Practical highlights">
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

function SeasonCard({ card }: { card: WeatherSeasonCard }) {
  const Icon = card.icon;
  return (
    <div className="flex h-full flex-col rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0">
          <span className="inline-flex rounded-full border border-brand/20 bg-brand-muted/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
            {card.badge}
          </span>
          <h3 className="mt-2 text-sm font-semibold tracking-tight text-foreground sm:text-base">{card.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{card.intro}</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 text-sm text-foreground-muted">
        <div className="rounded-lg border border-border/70 bg-surface-muted/35 px-3 py-3 ring-1 ring-border/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Feels like</p>
          <p className="mt-1.5 leading-relaxed">{card.whatItFeelsLike}</p>
        </div>
        <div className="rounded-lg border border-border/70 bg-surface-muted/35 px-3 py-3 ring-1 ring-border/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">What changes</p>
          <p className="mt-1.5 leading-relaxed">{card.whatChanges}</p>
        </div>
        <div className="rounded-lg border border-border/70 bg-surface-muted/35 px-3 py-3 ring-1 ring-border/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">What to wear</p>
          <p className="mt-1.5 leading-relaxed">{card.whatToWear}</p>
        </div>
        <div className="rounded-lg border border-brand/15 bg-brand-muted/25 px-3 py-3 ring-1 ring-brand/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Newcomer surprise</p>
          <p className="mt-1.5 leading-relaxed text-foreground-muted">{card.newcomerSurprise}</p>
        </div>
      </div>
    </div>
  );
}

function MisunderstandingGrid() {
  return (
    <ol className="grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-3" aria-label="Common weather surprises for newcomers">
      {weatherMisunderstandings.map((item, index) => (
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
            <span className="inline-flex rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
              {item.chip}
            </span>
            <p className="mt-2 text-sm font-semibold leading-snug text-foreground sm:text-[0.9375rem]">{item.title}</p>
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
      aria-labelledby="weather-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8 rounded-2xl border-0 bg-slate-50/90 p-6 shadow-inner sm:p-8")}
    >
      <h2 id="weather-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        {weatherReferences.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{weatherReferences.intro}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {weatherReferences.links.map((link) => (
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
      <p className="mt-5 text-sm leading-relaxed text-foreground-muted">{weatherReferences.footer}</p>
    </section>
  );
}

export function WeatherView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(LIVING_WEATHER_PATH, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: LIVING_PILLAR_BREADCRUMB_LABEL, item: new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString() },
    { name: "Weather & Seasons", item: new URL(LIVING_WEATHER_PATH, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <LivingSectionNav
      items={weatherSectionNav}
      deepLinks={[
        {
          href: LIVING_SURVIVAL_GUIDE_PATH,
          label: "Netherlands Survival Guide",
          description: "Your wider Living guide for first-week priorities, transport, weather, apps, and the bigger picture around daily life in the Netherlands.",
        },
        {
          href: LIVING_GETTING_AROUND_PATH,
          label: "Getting Around",
          description: "Useful when weather starts changing how your commute, route choices, and bike confidence actually feel.",
        },
        {
          href: LIVING_ESSENTIAL_APPS_PATH,
          label: "Essential Apps",
          description: "The weather, transport, and map apps that help when wind, rain, and rough days start affecting daily plans.",
        },
        {
          href: LIVING_DAILY_LIFE_PATH,
          label: "Daily Life Basics",
          description: "Errands, shopping, parcels, and routines that feel different once weather starts shaping the week more than expected.",
        },
        {
          href: LIVING_LANGUAGE_PATH,
          label: "Language & Phrases",
          description: "Useful Dutch for weather chat, commute questions, and the short everyday moments that happen outside and on the move.",
        },
        {
          href: LIVING_CULTURE_ETIQUETTE_PATH,
          label: "Dutch Culture & Etiquette",
          description: "Helpful when weather overlaps with flexibility, social planning, public-space habits, and the everyday tone of Dutch life.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline={weatherHero.title}
        description={weatherHero.subtitle}
        dateModified={WEATHER_PAGE_DATE_MODIFIED}
        urlPath={LIVING_WEATHER_PATH}
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
                    Weather &amp; Seasons
                  </span>
                </nav>
              }
              eyebrow={weatherHero.eyebrow}
              title={weatherHero.title}
              subtitle={weatherHero.subtitle}
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
                      {weatherHero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                      <Link href={weatherHero.primaryCta.href} className={primaryCtaClass}>
                        {weatherHero.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={weatherHero.secondaryCta.href}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        {weatherHero.secondaryCta.label}
                      </Link>
                    </div>
                    <p className="mt-4 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      Read this alongside{" "}
                      <Link href={LIVING_SURVIVAL_GUIDE_PATH} className={crossLinkClass}>
                        Survival Guide
                      </Link>
                      ,{" "}
                      <Link href={LIVING_GETTING_AROUND_PATH} className={crossLinkClass}>
                        Getting Around
                      </Link>
                      ,{" "}
                      <Link href={LIVING_DAILY_LIFE_PATH} className={crossLinkClass}>
                        Daily Life Basics
                      </Link>
                      , and{" "}
                      <Link href={LIVING_ESSENTIAL_APPS_PATH} className={crossLinkClass}>
                        Essential Apps
                      </Link>
                      {" "}so this page stays tied to real daily routines rather than reading like a generic weather article.
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      If weather is changing how your commute feels, keep{" "}
                      <Link href={LIVING_GETTING_AROUND_PATH} className={crossLinkClass}>
                        Getting Around
                      </Link>
                      {" "}open too. If you want the right apps for rough-weather days, continue to{" "}
                      <Link href={LIVING_ESSENTIAL_APPS_PATH} className={crossLinkClass}>
                        Essential Apps
                      </Link>
                      . For the social side of planning around weather, see{" "}
                      <Link href={LIVING_CULTURE_ETIQUETTE_PATH} className={crossLinkClass}>
                        Dutch Culture &amp; Etiquette
                      </Link>
                      , and for short weather chat or commute questions, use{" "}
                      <Link href={LIVING_LANGUAGE_PATH} className={crossLinkClass}>
                        Language &amp; Phrases
                      </Link>
                      .
                    </p>
                    <ul
                      className="mt-5 flex list-none flex-wrap gap-2 border-t border-border/80 p-0 pt-5 sm:mt-6 sm:gap-2.5 sm:pt-6"
                      aria-label="Quick weather truths"
                    >
                      {weatherHero.quickStrip.map(({ icon: Icon, label }) => (
                        <li key={label} className="max-w-full">
                          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/90 bg-surface-raised px-3 py-1.5 text-left text-xs font-medium text-foreground-muted shadow-card ring-1 ring-border/10">
                            <Icon className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <WeatherHeroGraphic className="min-w-0 w-full max-w-lg justify-self-center sm:max-w-none md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={LIVING_WEATHER_PATH}
            />
          </PillarGuideHeroRegion>
        }
        atAGlance={
          <PillarGuideAtGlanceRegion>
            <SectionBlock
              id="at-a-glance"
              className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5 md:!pt-6")}
              eyebrow={weatherAtAGlance.eyebrow}
              title={weatherAtAGlance.title}
              subtitle={weatherAtAGlance.subtitle}
            >
              <AtAGlanceGrid />
              <AtAGlanceNote />
            </SectionBlock>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact">
            <LivingSurvivalMobileToc items={weatherSectionNav} />

            <LivingPillarExplorer
              id="explore-living-pillar"
              title="Explore the wider Living pillar"
              subtitle="Use this page as one part of the Living stack: routines, apps, transport, language, and weather all work better when they stay connected."
            />

            <SectionRhythmDivider />

            <SectionBlock
              id="start-here"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Start here"
              title="What matters most in your first weeks"
              subtitle="Start with the simple things that stop weather from becoming a daily irritation: a useful outer layer, one weather check, and a realistic commute plan."
            >
              <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
                <span className="rounded-full border border-brand/25 bg-brand-muted/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                  Priority path
                </span>
                <span className="leading-snug">Make the weather boring enough that it stops messing up small everyday plans.</span>
              </p>
              <LivingQuickStartCards phases={weatherQuickStart} />
              <ConfidenceCallout
                eyebrow={weatherQuickStartCallout.eyebrow}
                title={weatherQuickStartCallout.title}
                body={weatherQuickStartCallout.body}
                className="mt-5 sm:mt-6"
              />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="what-it-feels-like"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Core framing"
              title="What Dutch weather actually feels like"
              subtitle="The Netherlands is usually not about very hot or very cold weather. The bigger story is wind, rain, wet air, changing conditions, and darker parts of the year."
            >
              <PracticalChipRow chips={["Wind over temperature", "Changeable days", "Commute matters"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                This is why newcomers often feel caught off guard even when the temperature does not look that bad. A day can be technically mild and still feel
                rough if you are biking into wind, walking in rain, or adjusting your route around changing conditions.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {weatherFeelCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <ConfidenceCallout
                eyebrow={weatherFeelCallout.eyebrow}
                title={weatherFeelCallout.title}
                body={weatherFeelCallout.body}
                className="mt-5 sm:mt-6"
              />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="seasons-at-a-glance"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Seasonal overview"
              title="Seasons at a glance"
              subtitle="Think less about exact temperatures and more about how each season changes clothing, routine, and commuting comfort."
            >
              <PracticalChipRow chips={["Compare quickly", "Dress by season", "Know the main catch"]} />
              <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
                {weatherSeasonCards.map((card) => (
                  <SeasonCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="rain-wind"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Commuting reality"
              title="Rain, wind, and everyday commuting"
              subtitle="Weather matters most when it changes how you actually get around. Wind often matters more than temperature, and rough days can make the same commute feel completely different."
            >
              <PracticalChipRow chips={["Bike comfort", "OV backup", "Door-to-door planning"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Pair this with{" "}
                <Link href={LIVING_GETTING_AROUND_PATH} className={crossLinkClass}>
                  Getting Around
                </Link>
                {" "}for the transport side, then use the{" "}
                <Link href="/netherlands/tools/city-comparison/" className={crossLinkClass}>
                  City Comparison Tool
                </Link>
                ,{" "}
                <Link href="/netherlands/housing/tools/rent-affordability-calculator/" className={crossLinkClass}>
                  Rent Affordability Calculator
                </Link>
                , and{" "}
                <Link href="/netherlands/work/tools/job-offer-comparison/" className={crossLinkClass}>
                  Job Offer Comparison Tool
                </Link>
                {" "}when weather and an easier commute are shaping where you want to live or work.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {weatherCommuteCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <ConfidenceCallout
                eyebrow={weatherCommuteCallout.eyebrow}
                title={weatherCommuteCallout.title}
                body={weatherCommuteCallout.body}
                className="mt-5 sm:mt-6"
              />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="what-to-wear"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Practical clothing"
              title="What to wear and keep with you"
              subtitle="This is not about fashion. It is about layers, outerwear, shoes, and a bag setup that make Dutch weather much easier to live with."
            >
              <PracticalChipRow chips={["Layers first", "Outerwear matters", "Umbrella is backup"]} />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {weatherWearCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="dark-days-routine"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Routine & energy"
              title="Dark days, light days, and mood / routine"
              subtitle="For many newcomers, the bigger seasonal shift is not cold. It is how much light changes energy, routine, and how the week feels."
            >
              <PracticalChipRow chips={["Lower light is normal", "Routine helps", "Do not overread it"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Keep this calm and practical. Changes in light through the year are normal, and simple routines often help more than overthinking it.{" "}
                <Link href={LIVING_DAILY_LIFE_PATH} className={crossLinkClass}>
                  Daily Life Basics
                </Link>
                {" "}and{" "}
                <Link href={LIVING_ESSENTIAL_APPS_PATH} className={crossLinkClass}>
                  Essential Apps
                </Link>
                {" "}are good companion pages when you want routine and planning support around the same reality.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {weatherRoutineCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="weather-surprises"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Reality check"
              title="What newcomers often underestimate"
              subtitle="These are usually the details that explain why Dutch weather feels harder than expected at first."
            >
              <MisunderstandingGrid />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="how-to-adapt"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Keep it manageable"
              title="How to adapt without overcomplicating it"
              subtitle="The goal is to make weather part of your routine, not a daily battle. Most of it gets easier once you know what actually matters."
            >
              <PracticalChipRow chips={["Check once", "Dress for change", "Do not overreact"]} />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {weatherAdaptCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <ConfidenceCallout
                eyebrow={weatherAdaptCallout.eyebrow}
                title={weatherAdaptCallout.title}
                body={weatherAdaptCallout.body}
                className="mt-5 sm:mt-6"
              />
            </SectionBlock>
          </PillarJourneyStack>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id="helpful-tools"
            title="Helpful planning tools and related guides"
            subtitle="Use this page with the wider ExpatCopilot tools: Living guides for daily life, transport pages for commute decisions, and planning tools when weather starts affecting bigger choices."
          >
            <div className="col-span-full max-w-3xl">
              <p className="text-sm leading-relaxed text-foreground-muted">
                Start with the planning tools when weather is changing where you want to live, how far you want to commute, or how a job offer will feel in
                normal weekly life. Then use the Living guides below to connect those bigger decisions back to clothing, transport, routine, language,
                and everyday adaptation.
              </p>
            </div>
            {weatherPlanningTools.map((card) => (
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
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Use these Living guides together</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">Related guides for everyday weather confidence</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                These keep weather tied to transport, routines, apps, and ordinary daily life so the page feels like part of the same Living pillar, not a
                separate weather article.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {weatherHelpfulCards.map((card) => (
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
              subtitle="Stay inside the Living pillar when you want more help with commuting, routines, apps, weather, and the social side of daily life."
            >
              <LivingClusterLinkGrid items={LIVING_CLUSTER_SIBLING_LINKS_WEATHER} />
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
              subtitle="Short, practical answers for the weather questions newcomers ask most."
            >
              <Accordion
                items={weatherFaq.map((item) => ({
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
