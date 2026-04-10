import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CloudRain, TrainFront, Wallet } from "lucide-react";
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
} from "@/components/page/pillar-template";
import { SectionBlock } from "@/components/page/moving-pillar";
import { Container } from "@/components/ui/container";
import { ArticleJsonLd, FaqPageJsonLd } from "@/lib/seo/jsonld";
import { getSiteOrigin } from "@/lib/site-origin";
import {
  LIVING_CULTURE_ETIQUETTE_PATH,
  LIVING_COMING_NEXT_TEASERS,
  LIVING_DAILY_LIFE_PATH,
  LIVING_EMERGENCIES_SAFETY_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_HEALTHCARE_BASICS_PATH,
  LIVING_LANGUAGE_PATH,
  LIVING_PILLAR_BREADCRUMB_LABEL,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_QUICK_START_PHASES,
  LIVING_SURVIVAL_CONTINUE_CARDS,
  LIVING_SURVIVAL_GUIDE_PATH,
  LIVING_SURVIVAL_SECTION_NAV,
  LIVING_SURVIVAL_TOOL_SHORTCUTS,
  LIVING_SURVIVAL_TOPIC_CARDS,
  LIVING_WEATHER_PATH,
} from "@/src/components/living/livingPillarContent";
import {
  siteGuideColumnPadYClass,
  sitePillarFramedHeroGutterXClass,
  sitePillarFramedHeroTopBandClass,
} from "@/lib/ui/site-shell-identity";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import { cn } from "@/lib/cn";
import { LivingComingNextSection } from "./LivingComingNextSection";
import { LivingContinuePillarGrid } from "./LivingContinuePillarGrid";
import { LivingQuickStartCards } from "./LivingQuickStartCards";
import { LivingSectionNav } from "./LivingSectionNav";
import { LivingSurvivalMobileToc } from "./LivingSurvivalMobileToc";
import { LivingSurvivalHeroGraphic } from "./LivingSurvivalHeroGraphic";
import { LivingToolShortcutsGrid } from "./LivingToolShortcutsGrid";
import { LivingTopicCardGrid } from "./LivingTopicCardGrid";
import { SurvivalGuideFaq } from "./SurvivalGuideFaq";
import { SURVIVAL_GUIDE_FAQ_ITEMS } from "./survivalGuideFaqContent";

const DATE_MODIFIED = "2026-04-08";

/** Hash targets clear the sticky header (primary nav + safe-area). */
const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const FAQ_SCHEMA = SURVIVAL_GUIDE_FAQ_ITEMS.map((item) => ({
  q: item.question,
  a: item.answer,
}));

function EssentialsOverview() {
  const cells: Array<{ title: string; body: string; href: string; cta: string }> = [
    {
      title: "Getting around",
      body: "Full Living guide: NS, 9292, OVpay, tap-in/out discipline, multimodal commuting, and cycling context.",
      href: LIVING_GETTING_AROUND_PATH,
      cta: "Read the transport guide",
    },
    {
      title: "Essential apps",
      body: "Install-order guide: transport stack, Tikkie, bank app, supermarkets, delivery, and chat—without an app-store wall.",
      href: LIVING_ESSENTIAL_APPS_PATH,
      cta: "Open the app guide",
    },
    {
      title: "Payments",
      body: "Contactless tills, Maestro-shaped habits, and where iDEAL sneaks in early.",
      href: "/netherlands/living/payments/",
      cta: "See payment norms",
    },
    {
      title: "Shopping & groceries",
      body: "How supermarkets, self-checkout, store apps, delivery, and household basics actually work once you live here.",
      href: LIVING_SHOPPING_GROCERIES_PATH,
      cta: "Read the shopping guide",
    },
    {
      title: "Healthcare basics",
      body: "How insurance, the huisarts, pharmacies, urgent care, and 112 fit together once you need a practical healthcare map.",
      href: LIVING_HEALTHCARE_BASICS_PATH,
      cta: "Read healthcare basics",
    },
    {
      title: "Emergencies & safety",
      body: "112, urgent vs non-urgent situations, lost items, and the calm first steps worth knowing before a stressful moment.",
      href: LIVING_EMERGENCIES_SAFETY_PATH,
      cta: "Read safety basics",
    },
    {
      title: "Communication",
      body: "English-friendly contexts plus the phrases that buy goodwill fast.",
      href: "/netherlands/living/language/",
      cta: "Grab phrase starters",
    },
    {
      title: "Culture & etiquette",
      body: "Directness, invitations, neighbors, birthdays, and the social habits that often make everyday Dutch life click.",
      href: LIVING_CULTURE_ETIQUETTE_PATH,
      cta: "Read the culture guide",
    },
    {
      title: "Weather",
      body: "Wind, drizzle, heat spikes—dress so a forecast change does not wreck your day.",
      href: "/netherlands/living/weather/",
      cta: "Plan by season",
    },
    {
      title: "Admin & setup",
      body: "Utilities you own, portals, and the letters that pile up once you have an address.",
      href: "/netherlands/living/utilities/",
      cta: "Check utilities hub",
    },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
      {cells.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className="group rounded-card border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10 transition-colors hover:border-border-strong hover:shadow-card-hover"
        >
          <p className="text-sm font-semibold text-foreground group-hover:text-brand-strong">{c.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{c.body}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
            {c.cta} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
        </Link>
      ))}
    </div>
  );
}

function OftenMissedGrid() {
  const rows: Array<{ t: string; d: ReactNode }> = [
    {
      t: "PIN-shaped spending",
      d: "Tills assume chip debit and contactless—carrying only Amex or expecting signatures will slow you down.",
    },
    {
      t: "OV amnesia",
      d: (
        <>
          Forgetting to check out is an expensive hobby; set a phone reminder until tapping out is muscle memory.{" "}
          <Link href={LIVING_GETTING_AROUND_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
            Getting around in the Netherlands
          </Link>{" "}
          walks through payment flow and beginner mistakes;{" "}
          <Link href={LIVING_ESSENTIAL_APPS_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
            Essential apps
          </Link>{" "}
          lists the wider phone stack when you are still choosing what to install first.
        </>
      ),
    },
    {
      t: "Bike right-of-way",
      d: "In city cores the bike often wins the straight line—look twice before you step or turn across red asphalt.",
    },
    {
      t: "Sunday & evening retail",
      d: (
        <>
          Your old “pop out for milk” reflex needs a schedule—note which chains stay open late near you.{" "}
          <Link href={LIVING_DAILY_LIFE_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
            Daily life basics
          </Link>{" "}
          walks through errands, self-checkout, and parcel habits in one place.
        </>
      ),
    },
    {
      t: "Letters that look boring",
      d: "Water board and gemeente envelopes are easy to defer; dates inside are not.",
    },
    {
      t: "English-only blind spots",
      d: (
        <>
          You can live in English and still miss nuance in neighbour chats or official post. Keep a tiny Dutch layer active, and skim{" "}
          <Link href={LIVING_LANGUAGE_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
            Language &amp; Phrases
          </Link>
          {" "}for the practical phrase layer, then use{" "}
          <Link href={LIVING_CULTURE_ETIQUETTE_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
            Dutch Culture & Etiquette
          </Link>{" "}
          for the social context behind short answers, invitations, and direct feedback.
        </>
      ),
    },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
      {rows.map((x) => (
        <div
          key={x.t}
          className="rounded-card border border-border/80 bg-surface-muted/80 p-5 shadow-card ring-1 ring-inset ring-border/10"
        >
          <p className="text-sm font-semibold text-foreground">{x.t}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{x.d}</p>
        </div>
      ))}
    </div>
  );
}

function OfficialSourcesBlock() {
  return (
    <section
      id="official-sources"
      aria-labelledby="sg-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8 rounded-2xl border-0 bg-slate-50/90 p-6 shadow-inner sm:p-8")}
    >
      <h2 id="sg-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        Official sources & references
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
        ExpatCopilot is editorial guidance—not government advice. Use official sites for rules that depend on your address, income, or permit
        type.
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        <li>
          <a
            href="https://www.rijksoverheid.nl/en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
          >
            Dutch government (Rijksoverheid) — English portal →
          </a>
        </li>
        <li>
          <a
            href="https://www.government.nl/topics"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
          >
            Government.nl topics — living, work, and public services →
          </a>
        </li>
        <li>
          <a
            href="https://www.9292.nl/en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
          >
            9292 — nationwide public transport planner →
          </a>
        </li>
        <li>
          <a
            href="https://www.knmi.nl/en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
          >
            KNMI — Royal Netherlands Meteorological Institute →
          </a>
        </li>
      </ul>
      <p className="mt-5 text-sm text-foreground-muted">
        More on ExpatCopilot:{" "}
        <Link href={LIVING_GETTING_AROUND_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
          Getting around in the Netherlands
        </Link>
        ,{" "}
        <Link href="/netherlands/municipality-registration-netherlands/" className="font-semibold text-link hover:text-link-hover hover:underline">
          municipality registration
        </Link>
        ,{" "}
        <Link href="/netherlands/digid-awareness/" className="font-semibold text-link hover:text-link-hover hover:underline">
          DigiD awareness
        </Link>
        , and the{" "}
        <Link href="/netherlands/taxes/" className="font-semibold text-link hover:text-link-hover hover:underline">
          taxes hub
        </Link>
        .
      </p>
    </section>
  );
}

const HERO_QUICK_STRIP = [
  { Icon: TrainFront, label: "OV: tap in & out every leg" },
  { Icon: Wallet, label: "Shops: chip / PIN first" },
  { Icon: CloudRain, label: "Weather: layers beat optimism" },
] as const;

export function SurvivalGuideView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: LIVING_PILLAR_BREADCRUMB_LABEL, item: new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString() },
  ];

  const heroBullets: string[] = [
    "The minimum viable stack: pay, move, and read your post without panic",
    "OV + bike defaults that locals mix without thinking",
    "Shopping, weather, and building habits that look small until you miss them",
    "One page to bookmark while the rest of Living grows around it",
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <LivingSectionNav
      items={LIVING_SURVIVAL_SECTION_NAV}
      deepLinks={[
        {
          href: LIVING_CULTURE_ETIQUETTE_PATH,
          label: "Dutch Culture & Etiquette",
          description: "Use this alongside Survival Guide when the practical basics are fine but social tone, directness, or neighbor habits still feel unfamiliar.",
        },
        {
          href: LIVING_LANGUAGE_PATH,
          label: "Language & Phrases",
          description: "A practical Dutch layer for stations, shops, cafes, work, and neighbors when English works but a little Dutch still helps.",
        },
        {
          href: LIVING_WEATHER_PATH,
          label: "Weather & Seasons",
          description: "Wind, rain, dark days, and what to wear when daily life feels harder because the weather is more present than expected.",
        },
        {
          href: LIVING_SHOPPING_GROCERIES_PATH,
          label: "Shopping & Groceries",
          description: "Dedicated guide for supermarkets, self-checkout, household basics, store apps, and delivery habits once the grocery routine needs more than a quick mention.",
        },
        {
          href: LIVING_HEALTHCARE_BASICS_PATH,
          label: "Healthcare Basics",
          description: "Practical guide for insurance, GP registration, pharmacies, urgent care, and what to do first once healthcare stops being abstract.",
        },
        {
          href: LIVING_EMERGENCIES_SAFETY_PATH,
          label: "Emergencies & Safety",
          description: "A calm guide to 112, urgent situations, lost items, and the basic readiness habits that help under stress.",
        },
        {
          href: "/netherlands/living/housing/",
          label: "Housing in the Netherlands",
          description: "Rental market, contracts, and utilities sit in dedicated Living guides once you are past first-week survival mode.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline="Netherlands Survival Guide for Expats"
        description="Practical day-one through day-thirty guidance for the Netherlands—transport, apps, payments, groceries, weather, and the habits newcomers bookmark."
        dateModified={DATE_MODIFIED}
        urlPath={LIVING_SURVIVAL_GUIDE_PATH}
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
                  <span className="text-foreground">{LIVING_PILLAR_BREADCRUMB_LABEL}</span>
                </nav>
              }
              eyebrow="Living in the Netherlands"
              title="Netherlands Survival Guide for Expats"
              subtitle="The field guide for feeling normal fast—how people pay, ride, shop, and read a Dutch week, without wading through generic “moving abroad” noise."
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
                      {heroBullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                      <Link href="#quick-start" className={primaryCtaClass}>
                        Start with the first 48 hours
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href="#essentials"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        Map everyday systems
                      </Link>
                    </div>
                    <p className="mt-4 text-sm text-foreground-muted">
                      <Link
                        href={LIVING_GETTING_AROUND_PATH}
                        className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline"
                      >
                        Getting around in the Netherlands
                      </Link>
                      <span className="text-foreground-muted"> — trains, OVpay, and commute onboarding.</span>{" "}
                      <Link
                        href={LIVING_ESSENTIAL_APPS_PATH}
                        className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline"
                      >
                        Essential apps for life in the Netherlands
                      </Link>
                      <span className="text-foreground-muted"> — curated install order for transport, pay, shops, and delivery.</span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_DAILY_LIFE_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Daily life basics in the Netherlands
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        — groceries, opening hours, payments, deliveries, and household rhythms once you are past the one-line version above.
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_SHOPPING_GROCERIES_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Shopping &amp; Groceries in the Netherlands
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        — the dedicated Living guide for supermarkets, self-checkout, store apps, deliveries, and household buying once this hub points you in the right direction.
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_HEALTHCARE_BASICS_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Healthcare Basics in the Netherlands
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        — the Living guide for insurance, GP registration, pharmacies, urgent care, and the healthcare flow that often feels unfamiliar at first.
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_CULTURE_ETIQUETTE_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Dutch Culture & Etiquette
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        — directness, invitations, neighbors, and the everyday social expectations that make the other Living guides easier to interpret.
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_LANGUAGE_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Language &amp; Phrases for Life in the Netherlands
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        — the practical Dutch layer for shops, stations, work, and neighbors when daily confidence needs more than &quot;everyone speaks English.&quot;
                      </span>
                    </p>
                    <div
                      className="mt-5 flex flex-wrap gap-2 border-t border-border/80 pt-5 sm:mt-6 sm:gap-2.5 sm:pt-6"
                      aria-label="Quick answers"
                    >
                      {HERO_QUICK_STRIP.map(({ Icon, label }) => (
                        <span
                          key={label}
                          className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/90 bg-surface-raised px-3 py-1.5 text-left text-xs font-medium text-foreground-muted shadow-card ring-1 ring-border/10"
                        >
                          <Icon className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <LivingSurvivalHeroGraphic className="min-w-0 md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={LIVING_SURVIVAL_GUIDE_PATH}
            />
          </PillarGuideHeroRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide">
            <LivingSurvivalMobileToc items={LIVING_SURVIVAL_SECTION_NAV} />
            <SectionBlock
              id="quick-start"
              className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5 md:!pt-6")}
              eyebrow="Start here"
              title="Your first 48 hours, week, and month"
              subtitle="Ordered for urgency—each card goes deeper than the last, without repeating the topic grid below."
            >
              <LivingQuickStartCards phases={LIVING_QUICK_START_PHASES} />
            </SectionBlock>

            <div className="mx-auto hidden h-px max-w-3xl bg-gradient-to-r from-transparent via-border/80 to-transparent sm:block" aria-hidden />

            <SectionBlock
              id="categories"
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Living pillar"
              title="Browse day-to-day topics"
              subtitle="Starter pages you can open today—each one is written to stand alone while we grow the cluster."
            >
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Start with{" "}
                <Link href={LIVING_GETTING_AROUND_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
                  Getting around in the Netherlands
                </Link>{" "}
                when OV and commute rhythm need more than a single bullet,{" "}
                <Link href={LIVING_ESSENTIAL_APPS_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
                  Essential apps for life in the Netherlands
                </Link>{" "}
                for the full home-screen install order (transport, Tikkie, groceries, delivery, chat), and{" "}
                <Link href={LIVING_DAILY_LIFE_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
                  Daily life basics
                </Link>{" "}
                when shops, errands, payments, and parcels need a dedicated walkthrough, then open{" "}
                <Link href={LIVING_SHOPPING_GROCERIES_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
                  Shopping &amp; Groceries
                </Link>{" "}
                when supermarket habits, store apps, self-checkout, and household buying need their own guide, then open{" "}
                <Link href={LIVING_LANGUAGE_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
                  Language &amp; Phrases
                </Link>{" "}
                when short service interactions, transport questions, and everyday goodwill need a practical phrase layer, then continue to{" "}
                <Link href={LIVING_CULTURE_ETIQUETTE_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
                  Dutch Culture & Etiquette
                </Link>{" "}
                when the routines are clear but the social tone still needs decoding.
              </p>
              <LivingTopicCardGrid topics={LIVING_SURVIVAL_TOPIC_CARDS} />
            </SectionBlock>

            <SectionBlock
              id="often-missed"
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Reality check"
              title="Useful friction most people discover late"
              subtitle="Short hits worth skimming even if you have relocated before—Dutch defaults love to look familiar until they are not."
            >
              <OftenMissedGrid />
            </SectionBlock>

            <SectionBlock
              id="essentials"
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Orientation"
              title="Everyday essentials at a glance"
              subtitle="Core systems behind a calm week—tap through when you need depth, not another essay."
            >
              <EssentialsOverview />
            </SectionBlock>

            <SectionBlock
              id="coming-next"
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Roadmap"
              title="Coming next in Living"
              subtitle="Deep dives on routines, family life, and subscriptions—teasers below are not live pages yet."
            >
              <LivingComingNextSection items={LIVING_COMING_NEXT_TEASERS} />
            </SectionBlock>
          </PillarJourneyStack>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id="tools"
            title="Stress-test your assumptions"
            subtitle="Numbers-first helpers when rent, commute, or household lines need a reality anchor."
            gridClassName="!grid-cols-1"
          >
            <LivingToolShortcutsGrid tools={LIVING_SURVIVAL_TOOL_SHORTCUTS} />
          </PillarGuideToolsSection>
        }
        nextSteps={
          <PillarGuideNextStepsRegion>
            <SectionBlock
              id="continue"
              className={SECTION_SCROLL_MARGIN}
              compact
              eyebrow="Other pillars"
              title="Continue with Move, Work, Money & Housing"
              subtitle="When daily life is stable enough that visas, contracts, or tax context deserve the front seat."
            >
              <LivingContinuePillarGrid cards={LIVING_SURVIVAL_CONTINUE_CARDS} />
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
              subtitle="Straight answers on arrival rhythm, apps, English, banking, and the small surprises that add up."
            >
              <SurvivalGuideFaq />
            </SectionBlock>
            <OfficialSourcesBlock />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
