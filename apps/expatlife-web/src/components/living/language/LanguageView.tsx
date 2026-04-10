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
  LIVING_CLUSTER_SIBLING_LINKS_LANGUAGE,
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
import { LanguageHeroGraphic } from "./LanguageHeroGraphic";
import {
  LANGUAGE_PAGE_DATE_MODIFIED,
  languageAtAGlance,
  languageEnglishVsDutchCards,
  languageFaq,
  languageHelpfulCards,
  languageHero,
  languageImproveCards,
  languageMisunderstandings,
  languageNeedDutchCards,
  languagePlanningTools,
  languagePhraseGroups,
  languageQuickStart,
  languageReferences,
  languageRelatedGuides,
  languageSectionNav,
  languageSituationCards,
  languageWorkNeighborCards,
  type LanguageInfoCard,
  type LanguagePhraseGroup,
  type LanguageSituationCard,
} from "./languageContent";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const crossLinkClass =
  "font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm";

const FAQ_SCHEMA = languageFaq.map((item) => ({
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
      {languageAtAGlance.cells.map((cell) => (
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
  const note = languageAtAGlance.note;
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

function InfoCard({ card }: { card: LanguageInfoCard }) {
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

function PhraseGroupCard({ group }: { group: LanguagePhraseGroup }) {
  const Icon = group.icon;
  return (
    <div className="rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0">
          <span className="inline-flex rounded-full border border-brand/20 bg-brand-muted/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
            {group.situationBadge}
          </span>
          <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{group.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{group.intro}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-3" role="list">
        {group.phrases.map((phrase) => (
          <li
            key={`${group.id}-${phrase.dutch}`}
            className="rounded-lg border border-border/70 bg-surface-muted/35 px-3 py-3 ring-1 ring-border/5 sm:px-3.5 sm:py-3.5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-brand/20 bg-brand-muted/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                Dutch
              </span>
              <span className="text-sm font-semibold text-foreground sm:text-[0.95rem]">{phrase.dutch}</span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border bg-surface-raised px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                Meaning
              </span>
              <span className="text-sm text-foreground-muted">{phrase.english}</span>
            </div>
            <div className="mt-2.5 border-t border-border/60 pt-2.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Use it when</p>
              <p className="mt-1.5 text-sm leading-snug text-foreground-muted sm:leading-relaxed">{phrase.usage}</p>
              {phrase.pronunciationHint ? (
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                  <span className="font-semibold text-foreground-muted">Pronunciation hint:</span> {phrase.pronunciationHint}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SituationCard({ card }: { card: LanguageSituationCard }) {
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
      <ul className="mt-4 space-y-3" role="list">
        {card.phrases.map((phrase) => (
          <li
            key={`${card.title}-${phrase.dutch}`}
            className="rounded-lg border border-border/70 bg-surface-muted/35 px-3 py-3 ring-1 ring-border/5 sm:px-3.5 sm:py-3.5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-brand/20 bg-brand-muted/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                Phrase
              </span>
              <span className="text-sm font-semibold text-foreground">{phrase.dutch}</span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-border bg-surface-raised px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">
                Meaning
              </span>
              <span className="text-sm text-foreground-muted">{phrase.english}</span>
            </div>
            <div className="mt-2.5 border-t border-border/60 pt-2.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Best for</p>
              <p className="mt-1.5 text-sm leading-snug text-foreground-muted sm:leading-relaxed">{phrase.usage}</p>
              {phrase.pronunciationHint ? (
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
                  <span className="font-semibold text-foreground-muted">Pronunciation hint:</span> {phrase.pronunciationHint}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-lg border border-brand/15 bg-brand-muted/25 px-3 py-3 ring-1 ring-brand/5">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Practical tip</p>
        <p className="mt-1.5 text-sm leading-snug text-foreground-muted sm:leading-relaxed">{card.tip}</p>
      </div>
    </div>
  );
}

function MisunderstandingGrid() {
  return (
    <ol className="grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-3" aria-label="Common language misunderstandings for newcomers">
      {languageMisunderstandings.map((item, index) => (
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
      aria-labelledby="language-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8 rounded-2xl border-0 bg-slate-50/90 p-6 shadow-inner sm:p-8")}
    >
      <h2 id="language-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        {languageReferences.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{languageReferences.intro}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {languageReferences.links.map((link) => (
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
      <p className="mt-5 text-sm leading-relaxed text-foreground-muted">{languageReferences.footer}</p>
    </section>
  );
}

export function LanguageView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(LIVING_LANGUAGE_PATH, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: LIVING_PILLAR_BREADCRUMB_LABEL, item: new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString() },
    { name: "Language & Phrases", item: new URL(LIVING_LANGUAGE_PATH, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <LivingSectionNav
      items={languageSectionNav}
      deepLinks={[
        {
          href: LIVING_SURVIVAL_GUIDE_PATH,
          label: "Netherlands Survival Guide",
          description: "Your wider Living guide for first-week priorities, money habits, weather, and the bigger picture around daily life in the Netherlands.",
        },
        {
          href: LIVING_DAILY_LIFE_PATH,
          label: "Daily Life Basics",
          description: "Groceries, shops, parcels, and household routines - the practical contexts where these phrases show up most often.",
        },
        {
          href: LIVING_ESSENTIAL_APPS_PATH,
          label: "Essential Apps",
          description: "Useful when phrase confidence needs the right app stack for transport, payments, maps, shopping, and short daily interactions.",
        },
        {
          href: LIVING_GETTING_AROUND_PATH,
          label: "Getting Around",
          description: "Useful when station signs, platforms, and quick transport questions are where your confidence drops first.",
        },
        {
          href: LIVING_CULTURE_ETIQUETTE_PATH,
          label: "Dutch Culture & Etiquette",
          description: "The social layer behind greetings, directness, and why a little Dutch can matter even when English is possible.",
        },
        {
          href: LIVING_WEATHER_PATH,
          label: "Weather & Seasons",
          description: "Useful when weather changes the everyday moments where short Dutch often shows up first, from commuting to neighborhood small talk.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline={languageHero.title}
        description={languageHero.subtitle}
        dateModified={LANGUAGE_PAGE_DATE_MODIFIED}
        urlPath={LIVING_LANGUAGE_PATH}
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
                    Language &amp; Phrases
                  </span>
                </nav>
              }
              eyebrow={languageHero.eyebrow}
              title={languageHero.title}
              subtitle={languageHero.subtitle}
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
                      {languageHero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                      <Link href={languageHero.primaryCta.href} className={primaryCtaClass}>
                        {languageHero.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={languageHero.secondaryCta.href}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        {languageHero.secondaryCta.label}
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
                      ,{" "}
                      <Link href={LIVING_GETTING_AROUND_PATH} className={crossLinkClass}>
                        Getting Around
                      </Link>
                      , and{" "}
                      <Link href={LIVING_CULTURE_ETIQUETTE_PATH} className={crossLinkClass}>
                        Dutch Culture &amp; Etiquette
                      </Link>
                      , and{" "}
                      <Link href={LIVING_WEATHER_PATH} className={crossLinkClass}>
                        Weather &amp; Seasons
                      </Link>
                      {" "}so this page stays tied to real daily routines rather than feeling like a language course.
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      If you want to go a little further without adding pressure, continue to{" "}
                      <Link href="/netherlands/culture/dutch-language-basics/" className={crossLinkClass}>
                        Dutch language basics
                      </Link>
                      {" "}or{" "}
                      <Link href="/netherlands/culture/learning-dutch/" className={crossLinkClass}>
                        Learning Dutch
                      </Link>
                      {" "}once the practical layer on this page feels comfortable.
                    </p>
                    <ul
                      className="mt-5 flex list-none flex-wrap gap-2 border-t border-border/80 p-0 pt-5 sm:mt-6 sm:gap-2.5 sm:pt-6"
                      aria-label="Quick orientation"
                    >
                      {languageHero.quickStrip.map(({ icon: Icon, label }) => (
                        <li key={label} className="max-w-full">
                          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/90 bg-surface-raised px-3 py-1.5 text-left text-xs font-medium text-foreground-muted shadow-card ring-1 ring-border/10">
                            <Icon className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <LanguageHeroGraphic className="min-w-0 w-full max-w-lg justify-self-center sm:max-w-none md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={LIVING_LANGUAGE_PATH}
            />
          </PillarGuideHeroRegion>
        }
        atAGlance={
          <PillarGuideAtGlanceRegion>
            <SectionBlock
              id="at-a-glance"
              className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5 md:!pt-6")}
              eyebrow={languageAtAGlance.eyebrow}
              title={languageAtAGlance.title}
              subtitle={languageAtAGlance.subtitle}
            >
              <AtAGlanceGrid />
              <AtAGlanceNote />
            </SectionBlock>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact">
            <LivingSurvivalMobileToc items={languageSectionNav} />

            <LivingPillarExplorer
              id="explore-living-pillar"
              title="Explore the wider Living pillar"
              subtitle="Use this page as one part of the Living stack: routines, apps, transport, culture, and language all work better when they stay connected."
            />

            <SectionRhythmDivider />

            <SectionBlock
              id="start-here"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Start here"
              title="What language matters first"
              subtitle="Build confidence in the order that helps most: simple greetings first, then repeatable phrases, then the situations that matter most to you."
            >
              <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
                <span className="rounded-full border border-brand/25 bg-brand-muted/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                  Priority path
                </span>
                <span className="leading-snug">Learn the phrases you will repeat this week, not the ones that simply look good on a study list.</span>
              </p>
              <LivingQuickStartCards phases={languageQuickStart} />
              <ConfidenceCallout
                eyebrow="Keep the goal realistic"
                title="Think daily confidence, not language-course pressure"
                body="Your first win is not speaking perfect Dutch. It is feeling less tense when you pay, order, ask for help, or greet the people you keep seeing every week."
                className="mt-5 sm:mt-6"
              />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="do-you-need-dutch"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Core question"
              title="Do you actually need Dutch?"
              subtitle="The reassuring answer is: often not much at first, but enough to make daily life feel easier."
            >
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                In many cities and international workplaces, English is enough for a lot of daily life. What basic Dutch gives you is not instant fluency. It
                gives you better openings, easier service moments, and more confidence when an interaction starts in Dutch before moving into English.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {languageNeedDutchCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <ConfidenceCallout
                eyebrow="Bottom line"
                title="Aim for fewer awkward moments and more confidence"
                body="You do not need perfect Dutch to function well. You need a few reliable phrases, realistic expectations, and enough calm to switch languages without treating it like failure."
                className="mt-5 sm:mt-6"
              />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="useful-phrases"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Phrase bank"
              title="Most useful Dutch phrases for daily life"
              subtitle="These are the phrases that help in real situations again and again for newcomers."
            >
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Keep pronunciation simple rather than perfect. In real life, the situation and basic politeness usually matter more than sounding textbook-correct on every
                syllable.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
                {languagePhraseGroups.map((group) => (
                  <PhraseGroupCard key={group.id} group={group} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="daily-situations"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Real life"
              title="Phrases for transport, shops, cafes, and errands"
              subtitle="Think about situations, not word lists. These are the everyday moments where a little Dutch helps quickly."
            >
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Pair these with{" "}
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
                {" "}when you want the transport, shopping, payment, and app help around the short phrases below.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
                {languageSituationCards.map((card) => (
                  <SituationCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="work-neighbors"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Everyday communication"
              title="Work, neighbors, and polite everyday communication"
              subtitle="These moments matter because a little Dutch often helps socially even when the real conversation quickly shifts to English."
            >
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                The main goal here is to sound clear, calm, and considerate. Short Dutch openings often make the exchange feel warmer even if the real problem
                solving still happens in English.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {languageWorkNeighborCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <div className="mt-5 border-t border-border/70 pt-4 sm:mt-6 sm:pt-5">
                <p className="text-sm leading-relaxed text-foreground-muted">
                  For more on workplace tone and feedback, continue to{" "}
                  <Link href="/netherlands/work/work-culture-netherlands/" className={crossLinkClass}>
                    Work culture in the Netherlands
                  </Link>
                  . If your language questions are starting to turn into a bigger integration plan, the{" "}
                  <Link href="/netherlands/integration/tools/" className={crossLinkClass}>
                    integration tools hub
                  </Link>
                  {" "}is a good next step.
                </p>
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="english-vs-dutch"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Use both well"
              title="When to use English vs Dutch"
              subtitle="The calmest pattern is usually: open in Dutch, switch when clarity matters, and do not make the switch emotionally heavy."
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {languageEnglishVsDutchCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <div className="mt-5 rounded-card border border-dashed border-border/90 bg-surface-muted/35 p-4 sm:mt-6 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Reassurance</p>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">Use Dutch as a bridge, not a test</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  If someone answers in English, that is usually a sign they want to help efficiently. Keep the Dutch opener when it feels natural, then switch
                  without apologizing for existing in a second language.
                </p>
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="common-misunderstandings"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Reality check"
              title="What newcomers often misunderstand about language in NL"
              subtitle="Bookmark the ones that explain a recent awkward moment. They usually help more than language theory ever will."
            >
              <MisunderstandingGrid />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="how-to-improve"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Keep it manageable"
              title="How to improve without pressure"
              subtitle="The best language plan for daily life is usually simple: small, repeatable, and tied to situations you actually live through."
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {languageImproveCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <ConfidenceCallout
                eyebrow="Useful next step"
                title="Let daily life choose what you learn next"
                body="If your weak spot is transport, work on station and route phrases. If it is social life, work on greetings and neighbor lines. If it is work, practice the phrases that let you ask for clarity without stress."
                className="mt-5 sm:mt-6"
              />
              <div className="mt-5 border-t border-border/70 pt-4 sm:mt-6 sm:pt-5">
                <p className="text-sm leading-relaxed text-foreground-muted">
                  When you want a bit more structure, continue to{" "}
                  <Link href="/netherlands/culture/learning-dutch/" className={crossLinkClass}>
                    Learning Dutch
                  </Link>
                  ,{" "}
                  <Link href="/netherlands/culture/practice-scenarios/" className={crossLinkClass}>
                    Dutch practice scenarios
                  </Link>
                  , or place language goals inside your wider move using the{" "}
                  <Link href="/netherlands/moving/tools/first-90-days/" className={crossLinkClass}>
                    First 90 Days Planner
                  </Link>
                  .
                </p>
              </div>
            </SectionBlock>
          </PillarJourneyStack>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id="helpful-tools"
            title="Helpful planning tools and related guides"
            subtitle="Use this guide with the wider ExpatCopilot tools: Living guides for daily life, Move planners for your setup, and Work or Integration tools when language links to bigger decisions."
          >
            <div className="col-span-full max-w-3xl">
              <p className="text-sm leading-relaxed text-foreground-muted">
                Start with the planning tools when you want help with arrival or work decisions, then use the Living guides below to make those
                plans feel easier in real daily interactions.
              </p>
            </div>
            {languagePlanningTools.map((card) => (
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
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">Related guides for daily confidence</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                These keep language attached to transport, routines, payments, apps, and social life so the page feels like part of the same Living pillar,
                not a separate course.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {languageHelpfulCards.map((card) => (
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
            <div className="col-span-full mt-6 border-t border-border/70 pt-6 sm:mt-8 sm:pt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Go a bit deeper</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">Related language, integration, and work guides</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                Use these when your questions are moving beyond survival phrases into study, integration, or work-specific communication.
              </p>
              <div className="mt-4">
                <LivingClusterLinkGrid items={languageRelatedGuides} />
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
              subtitle="Stay inside the Living pillar when you want more help with routines, apps, transport, and the social side of everyday language."
            >
              <LivingClusterLinkGrid items={LIVING_CLUSTER_SIBLING_LINKS_LANGUAGE} />
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
              subtitle="Short, practical answers for the language worries newcomers ask about most."
            >
              <Accordion
                items={languageFaq.map((item) => ({
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
