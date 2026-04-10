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
import { CultureEtiquetteHeroGraphic } from "./CultureEtiquetteHeroGraphic";
import {
  livingCultureFaq,
  livingCultureMisunderstandings,
  livingCultureQuickStart,
  livingCultureReferences,
  livingCultureRelatedTools,
  livingCultureSections,
  livingCultureTips,
  resolveLivingCultureIcon,
  type LivingCultureSectionCard,
} from "./config";
import {
  CULTURE_ETIQUETTE_DATE_MODIFIED,
  cultureEtiquetteAtAGlance,
  cultureEtiquetteCanonical,
  cultureEtiquetteDeeperLinks,
  cultureEtiquetteHero,
  cultureEtiquetteMeta,
  cultureEtiquetteRelatedLinks,
  cultureEtiquetteSectionNav,
} from "./cultureEtiquetteContent";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const crossLinkClass =
  "font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm";

const FAQ_SCHEMA = livingCultureFaq.map((item) => ({
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

function IconInfoCard({ card }: { card: LivingCultureSectionCard }) {
  const Icon = resolveLivingCultureIcon(card.iconKey);
  return (
    <div
      className={cn(
        "flex h-full gap-3 rounded-card border bg-surface-raised p-4 shadow-card ring-1 sm:gap-4 sm:p-5",
        card.tone === "accent"
          ? "border-brand/20 bg-gradient-to-br from-brand-muted/25 via-surface-raised to-surface-raised ring-brand/10"
          : "border-border ring-border/10",
        card.gridClassName
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{card.badge}</p>
        <h3 className="mt-1.5 text-sm font-semibold tracking-tight text-foreground sm:text-base">{card.title}</h3>
        {card.body ? <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p> : null}
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
        {card.tip ? (
          <div className="mt-3 rounded-lg border border-border/70 bg-surface-muted/45 px-3 py-2.5 ring-1 ring-border/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Practical tip</p>
            <p className="mt-1 text-sm leading-snug text-foreground-muted">{card.tip}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function AtAGlanceGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {cultureEtiquetteAtAGlance.cells.map((cell) => (
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
  const note = cultureEtiquetteAtAGlance.note;
  return (
    <div className="mt-4 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:mt-5 sm:p-5">
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
        <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
          {note.badge}
        </span>
        {note.headline}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{note.body}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
        Pair it with{" "}
        <Link href={LIVING_SURVIVAL_GUIDE_PATH} className={crossLinkClass}>
          Survival Guide
        </Link>
        ,{" "}
        <Link href={LIVING_DAILY_LIFE_PATH} className={crossLinkClass}>
          Daily Life Basics
        </Link>
        , and{" "}
        <Link href={cultureEtiquetteDeeperLinks.workCultureGuide} className={crossLinkClass}>
          the deeper work-culture guide
        </Link>
        {" "}
        when you want practical context around specific situations.
      </p>
    </div>
  );
}

function MisunderstandingGrid() {
  return (
    <ol className="grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-3" aria-label="Common misunderstandings for newcomers">
      {livingCultureMisunderstandings.map((item, index) => (
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

function InlineLinkList({ links }: { links: Array<{ href: string; label: string }> }) {
  return (
    <>
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 ? (index === links.length - 1 ? " and " : ", ") : null}
          <Link href={link.href} className={crossLinkClass}>
            {link.label}
          </Link>
        </span>
      ))}
    </>
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

function OfficialSourcesBlock() {
  const references = livingCultureReferences;
  return (
    <section
      id="official-sources"
      aria-labelledby="ce-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8 rounded-2xl border-0 bg-slate-50/90 p-6 shadow-inner sm:p-8")}
    >
      <h2 id="ce-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        {references.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
        {references.intro}
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {references.links.map((link) => (
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
      <p className="mt-5 text-sm text-foreground-muted">
        {references.footerIntro} <InlineLinkList links={references.footerLinks} /> when you want the practical routines behind the social cues.
      </p>
    </section>
  );
}

export function CultureEtiquetteView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(cultureEtiquetteCanonical, baseUrl).toString();
  const quickStartPhases = livingCultureQuickStart.map(({ iconKey, ...rest }) => ({
    ...rest,
    icon: resolveLivingCultureIcon(iconKey),
  }));
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: LIVING_PILLAR_BREADCRUMB_LABEL, item: new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString() },
    { name: "Dutch Culture & Etiquette", item: new URL(LIVING_CULTURE_ETIQUETTE_PATH, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <LivingSectionNav
      items={cultureEtiquetteSectionNav}
      deepLinks={[
        {
          href: LIVING_SURVIVAL_GUIDE_PATH,
          label: "Netherlands Survival Guide",
          description: "Your wider Living guide for first-week priorities, apps, transport, and other practical basics.",
        },
        {
          href: LIVING_DAILY_LIFE_PATH,
          label: "Daily life basics in the Netherlands",
          description: "Shops, payments, parcels, and routines that make the advice on this page easier to apply.",
        },
        {
          href: LIVING_ESSENTIAL_APPS_PATH,
          label: "Essential apps for life in the Netherlands",
          description: "The main apps for splitting bills, planning trips, and handling everyday tasks more easily.",
        },
        {
          href: LIVING_GETTING_AROUND_PATH,
          label: "Getting around in the Netherlands",
          description: "Bikes, public-space habits, and commuting when etiquette meets everyday travel.",
        },
        {
          href: LIVING_LANGUAGE_PATH,
          label: "Language & phrases for life in the Netherlands",
          description: "Useful Dutch for greetings, short service moments, and social confidence when etiquette and language overlap.",
        },
        {
          href: LIVING_WEATHER_PATH,
          label: "Weather & Seasons in the Netherlands",
          description: "Helpful when social plans, commuting habits, and daily mood are all being shaped by wind, rain, and darker periods.",
        },
        {
          href: cultureEtiquetteDeeperLinks.workCultureGuide,
          label: "Work culture in the Netherlands",
          description: "A deeper look at office norms, feedback style, and meetings if the section here is not enough.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline={cultureEtiquetteMeta.articleHeadline}
        description={cultureEtiquetteMeta.articleDescription}
        dateModified={CULTURE_ETIQUETTE_DATE_MODIFIED}
        urlPath={LIVING_CULTURE_ETIQUETTE_PATH}
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
                    Dutch Culture & Etiquette
                  </span>
                </nav>
              }
              eyebrow={cultureEtiquetteHero.eyebrow}
              title={cultureEtiquetteHero.title}
              subtitle={cultureEtiquetteHero.subtitle}
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
                      {cultureEtiquetteHero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                      <Link href={cultureEtiquetteHero.primaryCta.href} className={primaryCtaClass}>
                        {cultureEtiquetteHero.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={cultureEtiquetteHero.secondaryCta.href}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        {cultureEtiquetteHero.secondaryCta.label}
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
                      {" "}for more practical context around the norms described here.
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      For workplace depth beyond this introduction, continue to{" "}
                      <Link href={cultureEtiquetteDeeperLinks.workCultureGuide} className={crossLinkClass}>
                        the deeper Dutch work-culture guide
                      </Link>
                      {" "}or use the{" "}
                      <Link href="/netherlands/work/tools/job-offer-comparison/" className={crossLinkClass}>
                        job offer comparison tool
                      </Link>
                      {" "}when deciding between roles with different team styles or commuting needs.
                    </p>
                    <ul
                      className="mt-5 flex list-none flex-wrap gap-2 border-t border-border/80 p-0 pt-5 sm:mt-6 sm:gap-2.5 sm:pt-6"
                      aria-label="Quick orientation"
                    >
                      {cultureEtiquetteHero.quickStrip.map(({ icon: Icon, label }) => (
                        <li key={label} className="max-w-full">
                          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/90 bg-surface-raised px-3 py-1.5 text-left text-xs font-medium text-foreground-muted shadow-card ring-1 ring-border/10">
                            <Icon className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <CultureEtiquetteHeroGraphic className="min-w-0 w-full max-w-md justify-self-center pt-1 sm:max-w-none sm:pt-0 md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={LIVING_CULTURE_ETIQUETTE_PATH}
            />
          </PillarGuideHeroRegion>
        }
        atAGlance={
          <PillarGuideAtGlanceRegion>
            <SectionBlock
              id="at-a-glance"
              className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5 md:!pt-6")}
              eyebrow={cultureEtiquetteAtAGlance.eyebrow}
              title={cultureEtiquetteAtAGlance.title}
              subtitle={cultureEtiquetteAtAGlance.subtitle}
            >
              <AtAGlanceGrid />
              <AtAGlanceNote />
            </SectionBlock>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact">
            <LivingSurvivalMobileToc items={cultureEtiquetteSectionNav} />

            <LivingPillarExplorer
              id="explore-living-pillar"
              title="Explore the wider Living pillar"
              subtitle="Read this alongside the Survival Guide, transport, daily-life basics, and essential apps so the social advice always connects to real everyday life."
              items={[
                {
                  label: "Netherlands Survival Guide",
                  href: LIVING_SURVIVAL_GUIDE_PATH,
                  description: "Your first-week guide with priorities, topic cards, FAQs, and the wider newcomer basics.",
                },
                {
                  label: "Daily life basics",
                  href: LIVING_DAILY_LIFE_PATH,
                  description: "Groceries, payments, parcels, and household routines that sit behind a lot of everyday etiquette.",
                },
                {
                  label: "Essential apps",
                  href: LIVING_ESSENTIAL_APPS_PATH,
                  description: "The phone setup for transport, Tikkie, groceries, delivery, and chat once social plans become real logistics.",
                },
                {
                  label: "Getting around",
                  href: LIVING_GETTING_AROUND_PATH,
                  description: "Bike-lane habits, public-space habits, and commuting when etiquette meets everyday travel.",
                },
              ]}
            />

            <SectionRhythmDivider />

            <SectionBlock
              id="start-here"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Start here"
              title="What matters most in the first weeks"
              subtitle="Build confidence in sequence: interpret tone first, then let context and repetition do the rest."
            >
              <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
                <span className="rounded-full border border-brand/25 bg-brand-muted/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                  {livingCultureTips.startHere.badge}
                </span>
                <span className="leading-snug">{livingCultureTips.startHere.text}</span>
              </p>
              <LivingQuickStartCards phases={quickStartPhases} />
              <ConfidenceCallout
                eyebrow={livingCultureTips.firstWeeks.eyebrow}
                title={livingCultureTips.firstWeeks.title}
                body={livingCultureTips.firstWeeks.body}
                className="mt-5 sm:mt-6"
              />
            </SectionBlock>

            {livingCultureSections.map((section) => (
              <div key={section.id}>
                <SectionRhythmDivider />
                <SectionBlock
                  id={section.id}
                  compact
                  className={SECTION_SCROLL_MARGIN}
                  eyebrow={section.eyebrow}
                  title={section.title}
                  subtitle={section.subtitle}
                >
                  {section.intro ? (
                    <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">{section.intro}</p>
                  ) : null}
                  {section.bullets?.length ? (
                    <ul className="mb-4 space-y-2 text-sm text-foreground-muted sm:mb-5" role="list">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" aria-hidden />
                          <span className="leading-snug sm:leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4", section.id === "how-to-adapt" && "md:grid-cols-3 md:gap-4")}>
                    {section.cards.map((card) => (
                      <IconInfoCard key={card.title} card={card} />
                    ))}
                  </div>
                  {section.callout ? (
                    <ConfidenceCallout
                      eyebrow={section.callout.eyebrow}
                      title={section.callout.title}
                      body={section.callout.body}
                      className="mt-5 sm:mt-6"
                    />
                  ) : null}
                  {section.checklist ? (
                    <div className="mt-5 rounded-card border border-border bg-surface-muted/40 p-4 shadow-card ring-1 ring-border/10 sm:mt-6 sm:p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{section.checklist.eyebrow}</p>
                      <ul className="mt-3 space-y-2.5 text-sm text-foreground-muted" role="list">
                        {section.checklist.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" aria-hidden />
                            <span className="leading-snug sm:leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {section.supportingLinks?.length ? (
                    <div className="mt-5 border-t border-border/70 pt-4 sm:mt-6 sm:pt-5">
                      <p className="text-sm leading-relaxed text-foreground-muted">
                        {section.supportingText} <InlineLinkList links={section.supportingLinks} />.
                      </p>
                    </div>
                  ) : null}
                  {section.id === "how-to-adapt" ? (
                    <div className="mt-5 rounded-card border border-dashed border-border/90 bg-surface-muted/35 p-4 sm:mt-6 sm:p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{livingCultureTips.reassurance.eyebrow}</p>
                      <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">{livingCultureTips.reassurance.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{livingCultureTips.reassurance.body}</p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                        {livingCultureTips.reassurance.linksIntro} <InlineLinkList links={livingCultureTips.reassurance.links} /> to place cultural adjustment inside the rest of your move and settling-in timeline.
                      </p>
                    </div>
                  ) : null}
                </SectionBlock>
              </div>
            ))}

            <SectionRhythmDivider />

            <SectionBlock
              id="common-misunderstandings"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Reality check"
              title="What newcomers often misunderstand"
              subtitle="Bookmark the ones that explain a recent interaction. They usually matter more than abstract cultural theory."
            >
              <MisunderstandingGrid />
            </SectionBlock>
          </PillarJourneyStack>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id="helpful-tools"
            title={livingCultureRelatedTools.sectionTitle}
            subtitle={livingCultureRelatedTools.sectionSubtitle}
          >
            <div className="col-span-full max-w-3xl">
              <p className="text-sm leading-relaxed text-foreground-muted">{livingCultureRelatedTools.intro}</p>
            </div>
            {livingCultureRelatedTools.cards.map((tool) => {
              const Icon = resolveLivingCultureIcon(tool.iconKey);
              return (
                <ToolCard
                  key={tool.href}
                  title={tool.title}
                  description={tool.description}
                  href={tool.href}
                  ctaLabel={tool.ctaLabel}
                  compact
                  icon={<Icon className="h-5 w-5" aria-hidden />}
                />
              );
            })}
            <div className="col-span-full mt-6 border-t border-border/70 pt-6 sm:mt-8 sm:pt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{livingCultureRelatedTools.roundOutEyebrow}</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                {livingCultureRelatedTools.roundOutBody} <InlineLinkList links={livingCultureRelatedTools.roundOutLinks} /> when you want related advice on daily routines, transport, and work.
              </p>
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
              subtitle={cultureEtiquetteMeta.relatedLivingSubtitle}
            >
              <LivingClusterLinkGrid items={cultureEtiquetteRelatedLinks} />
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
              subtitle={cultureEtiquetteMeta.faqSubtitle}
            >
              <Accordion
                items={livingCultureFaq.map((item) => ({
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
