import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpFromLine,
  Bike,
  Building2,
  Bell,
  Bus,
  CheckCircle2,
  CloudRain,
  CreditCard,
  DoorOpen,
  Eye,
  Hand,
  HelpCircle,
  Landmark,
  Link2,
  ListChecks,
  Lock,
  MapPinned,
  Route,
  Shield,
  Signpost,
  Smartphone,
  Sparkles,
  Ticket,
  TrainFront,
  Users,
} from "lucide-react";
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
  LIVING_CLUSTER_SIBLING_LINKS_GETTING_AROUND,
  LIVING_DAILY_LIFE_PATH,
  LIVING_EMERGENCIES_SAFETY_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_GETTING_AROUND_SUPPLEMENTAL_TOOLS,
  LIVING_LANGUAGE_PATH,
  LIVING_PILLAR_BREADCRUMB_LABEL,
  LIVING_SURVIVAL_GUIDE_PATH,
  LIVING_WEATHER_PATH,
} from "@/src/components/living/livingPillarContent";
import { LIVING_TRANSPORT_APP_DOWNLOADS } from "@/src/components/living/livingTransportAppStoreLinks";
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
import { ContextualAffiliateSection } from "@/src/components/monetization/ContextualAffiliateSection";
import { GettingAroundFaq } from "./GettingAroundFaq";
import { GettingAroundHeroGraphic } from "./GettingAroundHeroGraphic";
import {
  GETTING_AROUND_COMMUTING_CHECKLIST,
  GETTING_AROUND_COMMUTING_INSIGHTS,
  GETTING_AROUND_COMMUTING_PLANNING_HOOKS,
  GETTING_AROUND_COMMUTING_SUBTITLE,
  GETTING_AROUND_CYCLING_GUIDE_CARDS,
  GETTING_AROUND_CYCLING_INTRO,
  GETTING_AROUND_CYCLING_OFFICIAL_LINKS,
  GETTING_AROUND_CYCLING_RULES_REMINDERS,
  GETTING_AROUND_CYCLING_SUBTITLE,
  GETTING_AROUND_FAQ_ITEMS,
  GETTING_AROUND_HOW_TO_PAY_CONCEPT_CARDS,
  GETTING_AROUND_HOW_TO_PAY_FLOW_STEPS,
  GETTING_AROUND_HOW_TO_PAY_MISTAKES,
  GETTING_AROUND_HOW_TO_PAY_PURCHASE_INTRO,
  GETTING_AROUND_HOW_TO_PAY_PURCHASE_LINKS,
  GETTING_AROUND_HOW_TO_PAY_QUICK_TIPS,
  GETTING_AROUND_HOW_TO_PAY_REAL_TRIPS,
  GETTING_AROUND_HOW_TO_PAY_SUBTITLE,
  GETTING_AROUND_BOARDING_STOP_TIPS,
  GETTING_AROUND_QUICK_START,
  GETTING_AROUND_SECTION_NAV,
  type GettingAroundBoardingStopTip,
  type GettingAroundRichSegment,
} from "./gettingAroundContent";

const BOARDING_STOP_TIP_ICONS: Record<GettingAroundBoardingStopTip["id"], typeof Hand> = {
  "bus-hand": Hand,
  "stop-request": Bell,
  "visible-wait": Eye,
  "boarding-doors": DoorOpen,
};

const DATE_MODIFIED = "2026-04-08";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const appOfficialLinkClass =
  "font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm";

function AppOfficialSiteLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={appOfficialLinkClass}>
      {children}
    </a>
  );
}

function SectionRhythmDivider() {
  return (
    <div
      className="mx-auto my-2 h-px max-w-3xl bg-gradient-to-r from-transparent via-border/70 to-transparent sm:my-2.5"
      aria-hidden
    />
  );
}

const FAQ_SCHEMA = GETTING_AROUND_FAQ_ITEMS.map((item) => ({
  q: item.question,
  a: item.answer,
}));

const HERO_QUICK_STRIP = [
  { Icon: Smartphone, label: "NS · 9292 · OVpay" },
  { Icon: CreditCard, label: "Same card in & out" },
  { Icon: TrainFront, label: "Train + tram + metro" },
  { Icon: Bike, label: "Bike = last mile" },
] as const;

function AtAGlanceGrid() {
  const cells: Array<{ title: string; body: string }> = [
    {
      title: "What this page is for",
      body: "Day-to-day transport behaviour: apps, tapping, modes, and commute reality—not live delays or fare tables.",
    },
    {
      title: "Best for",
      body: "Anyone new to NL who needs to move confidently this week, not read a transit encyclopedia.",
    },
    {
      title: "What it covers",
      body: "Rail, local transit, bikes, contactless pay, and the three apps people actually keep installed.",
    },
    {
      title: "What it skips",
      body: "Disruption feeds, per-fare math, and city-by-city operator fine print—use official apps when that matters.",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {cells.map((c) => (
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
  return (
    <div className="mt-4 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:mt-5 sm:p-5">
      <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
        <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
          Live data
        </span>
        Operators stay authoritative
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
        Platforms, products, and tap rules move—check{" "}
        <AppOfficialSiteLink href="https://www.ns.nl/en">NS</AppOfficialSiteLink>,{" "}
        <AppOfficialSiteLink href="https://www.9292.nl/en">9292</AppOfficialSiteLink>, or{" "}
        <AppOfficialSiteLink href="https://www.ovpay.nl/en">OVpay</AppOfficialSiteLink> the week you rely on a line. This page is the mental model;
        they are the timetable. Wider day-one life (pay, weather, week one) lives in the{" "}
        <Link href={LIVING_SURVIVAL_GUIDE_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
          Survival Guide
        </Link>
        ; the full phone stack—groceries,{" "}
        <AppOfficialSiteLink href="https://www.tikkie.me/en">Tikkie</AppOfficialSiteLink>, delivery—lives in{" "}
        <Link href={LIVING_ESSENTIAL_APPS_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
          Essential apps for life in the Netherlands
        </Link>
        . For shops, errands, parcels, and off-transit routines, open{" "}
        <Link href={LIVING_DAILY_LIFE_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
          Daily life basics
        </Link>
        . For the shared-space and social side of transport, add{" "}
        <Link href={LIVING_CULTURE_ETIQUETTE_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
          Dutch Culture & Etiquette
        </Link>
        .
      </p>
    </div>
  );
}

function AppEssentialsGrid() {
  const apps: Array<{
    title: string;
    officialHref: string;
    appStoreHref: string;
    playStoreHref: string;
    tag: string;
    bestFor: string;
    when: string;
    why: string;
    action: string;
    icon: typeof Smartphone;
  }> = [
    {
      title: "NS",
      officialHref: LIVING_TRANSPORT_APP_DOWNLOADS.ns.web,
      appStoreHref: LIVING_TRANSPORT_APP_DOWNLOADS.ns.appStore,
      playStoreHref: LIVING_TRANSPORT_APP_DOWNLOADS.ns.playStore,
      tag: "Trains",
      bestFor: "Departures, platforms, delays, and anything that lives on rails.",
      when: "Intercity days, station commutes, or when the yellow-blue board is your boss.",
      why: "Train-specific truth shows up here before generic planners catch up.",
      action: "Install first if rail is more than half your week.",
      icon: TrainFront,
    },
    {
      title: "9292",
      officialHref: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].web,
      appStoreHref: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].appStore,
      playStoreHref: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].playStore,
      tag: "All modes",
      bestFor: "One plan that strings train + tram + bus + metro into a single timeline.",
      when: "Door-to-door questions, new cities, or any trip with a transfer.",
      why: "You stop guessing which local operator app matters today.",
      action: "Install first if you still do not know your city’s stitching.",
      icon: Route,
    },
    {
      title: "OVpay",
      officialHref: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.web,
      appStoreHref: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.appStore,
      playStoreHref: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.playStore,
      tag: "Tap & history",
      bestFor: "Trips paid by card or phone—history, receipts, and “did I check out?”",
      when: "After contactless travel is real for you, not theoretical.",
      why: "Catch missed check-outs before they become expensive surprises.",
      action: "Add when tapping is already your habit.",
      icon: CreditCard,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
      {apps.map((a) => (
        <div
          key={a.title}
          className="flex h-full flex-col rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5 md:p-6"
        >
          <div className="flex items-start gap-3">
            <a
              href={a.officialHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 flex-1 items-start gap-3 rounded-lg text-left outline-none transition-colors hover:bg-surface-muted/40 focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              aria-label={`${a.title} — official website (opens in new tab)`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/90 text-brand-strong transition-colors group-hover:bg-brand-muted sm:h-11 sm:w-11">
                <a.icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-base font-semibold tracking-tight text-foreground underline-offset-2 group-hover:underline group-hover:decoration-link">
                    {a.title}
                  </span>
                  <span className="rounded-full border border-brand/20 bg-brand-muted/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-strong">
                    {a.tag}
                  </span>
                </span>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.08em] text-foreground-muted">Best for</span>
                <span className="mt-0.5 block text-sm leading-snug text-foreground-muted">{a.bestFor}</span>
              </span>
            </a>
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-foreground-muted">When</p>
          <p className="mt-0.5 text-sm leading-snug text-foreground-muted">{a.when}</p>
          <p className="mt-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-foreground-muted">Why</p>
          <p className="mt-0.5 text-sm leading-snug text-foreground-muted">{a.why}</p>
          <div className="mt-3 rounded-lg border border-border/60 bg-surface-muted/35 px-3 py-2.5 sm:px-3.5">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Get the app</p>
            <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
              <a
                href={a.appStoreHref}
                target="_blank"
                rel="noopener noreferrer"
                className={appOfficialLinkClass}
                aria-label={`${a.title} — App Store (opens in new tab)`}
              >
                App Store
              </a>
              <span className="text-foreground-faint" aria-hidden>
                ·
              </span>
              <a
                href={a.playStoreHref}
                target="_blank"
                rel="noopener noreferrer"
                className={appOfficialLinkClass}
                aria-label={`${a.title} — Google Play (opens in new tab)`}
              >
                Google Play
              </a>
              <span className="text-foreground-faint" aria-hidden>
                ·
              </span>
              <a
                href={a.officialHref}
                target="_blank"
                rel="noopener noreferrer"
                className={appOfficialLinkClass}
                aria-label={`${a.title} — official website (opens in new tab)`}
              >
                Website
              </a>
            </p>
          </div>
          <p className="mt-4 border-t border-border/70 pt-3 text-sm font-semibold leading-snug text-foreground">
            <span className="font-medium text-foreground-muted">First move · </span>
            {a.action}
          </p>
        </div>
      ))}
    </div>
  );
}

const howToPayFlowIcons = [ArrowDownToLine, TrainFront, ArrowUpFromLine] as const;

const HOW_TO_PAY_CONCEPT_ICONS = {
  "one-medium": Link2,
  "start-simple": Sparkles,
  "dutch-vs-foreign": Landmark,
  troubleshoot: HelpCircle,
} as const;

const HOW_TO_PAY_PURCHASE_ICONS = [TrainFront, CreditCard, Ticket] as const;

function HowToPaySection() {
  return (
    <div className="flex flex-col gap-6 lg:grid lg:max-w-none lg:grid-cols-[minmax(0,1fr)_minmax(0,min(100%,340px))] lg:items-start lg:gap-8">
      <div className="min-w-0 max-w-4xl space-y-6 lg:max-w-none">
        <div className="rounded-xl border border-brand/25 bg-gradient-to-br from-brand-muted/30 via-surface-muted/50 to-surface-raised p-4 shadow-sm ring-1 ring-brand/10 sm:p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">The basic loop</p>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
            {GETTING_AROUND_HOW_TO_PAY_FLOW_STEPS.map((step, i) => {
              const Icon = howToPayFlowIcons[i] ?? TrainFront;
              return (
                <div
                  key={step.title}
                  className="flex gap-3 rounded-lg border border-border/80 bg-surface-raised/90 p-3 shadow-sm ring-1 ring-border/10 sm:flex-col sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/85 text-brand-strong sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{step.title}</p>
                    <p className="mt-1.5 text-sm leading-snug text-foreground-muted sm:leading-relaxed">{step.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">What to remember</h3>
          <p className="mt-1 text-sm text-foreground-muted">Plain rules that stop most payment surprises.</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {GETTING_AROUND_HOW_TO_PAY_CONCEPT_CARDS.map((card) => {
              const Icon = HOW_TO_PAY_CONCEPT_ICONS[card.id];
              return (
                <div
                  key={card.id}
                  className="flex gap-3 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:gap-4 sm:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{card.title}</h4>
                    <div className="mt-2 space-y-2 text-sm leading-snug text-foreground-muted sm:space-y-2.5 sm:leading-relaxed">
                      {card.paragraphs.map((p, pi) => (
                        <p key={pi}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-card border border-dashed border-border/90 bg-surface-muted/40 p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <Smartphone className="h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <h3 className="text-sm font-semibold text-foreground sm:text-base">Real trips (examples)</h3>
          </div>
          <p className="mt-1 text-sm text-foreground-muted">Concrete situations—compare with how you actually move.</p>
          <ul className="mt-4 space-y-3" role="list">
            {GETTING_AROUND_HOW_TO_PAY_REAL_TRIPS.map((ex) => (
              <li
                key={ex.title}
                className="rounded-lg border border-border/70 bg-surface-raised px-3 py-3 shadow-sm ring-1 ring-border/10 sm:px-4 sm:py-3.5"
              >
                <p className="text-sm font-semibold text-foreground">{ex.title}</p>
                <p className="mt-1.5 text-sm leading-snug text-foreground-muted sm:leading-relaxed">{ex.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border/80 bg-surface-muted/35 px-4 py-3.5 sm:px-5 sm:py-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Quick reminders</p>
          <ul className="mt-2 space-y-2 text-sm text-foreground-muted" role="list">
            {GETTING_AROUND_HOW_TO_PAY_QUICK_TIPS.map((tip) => (
              <li key={tip} className="flex gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand/80" aria-hidden />
                <span className="leading-snug sm:leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">{GETTING_AROUND_HOW_TO_PAY_PURCHASE_INTRO}</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {GETTING_AROUND_HOW_TO_PAY_PURCHASE_LINKS.map((lnk, i) => {
              const Icon = HOW_TO_PAY_PURCHASE_ICONS[i] ?? Ticket;
              return (
                <div
                  key={lnk.href}
                  className="flex flex-col rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-muted/70 text-brand-strong">
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>
                  <div className="mt-3">
                    <AppOfficialSiteLink href={lnk.href}>{lnk.label}</AppOfficialSiteLink>
                  </div>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-foreground-muted sm:text-sm">{lnk.hint}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <aside
        className="rounded-card border border-amber-200/90 bg-amber-50/60 p-4 shadow-card ring-1 ring-amber-900/10 sm:p-5 lg:sticky lg:top-28"
        aria-labelledby="ga-mistakes-heading"
      >
        <h3 id="ga-mistakes-heading" className="flex flex-wrap items-center gap-2 text-sm font-semibold text-foreground">
          <AlertTriangle className="h-4 w-4 shrink-0 text-amber-700" aria-hidden />
          Common mistakes
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-foreground-muted sm:text-sm">
          These are the ones that create wrong charges or stress at the gate.
        </p>
        <ul className="mt-3 space-y-2.5 text-sm leading-snug text-foreground-muted" role="list">
          {GETTING_AROUND_HOW_TO_PAY_MISTAKES.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-600/80" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

const commutingInsightIconClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11";

const commutingAppPillClass = cn(
  "inline-flex min-h-9 items-center justify-center rounded-full border border-brand/20 bg-surface-raised px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm ring-1 ring-border/10",
  transitionInteractive,
  "hover:border-brand/35 hover:bg-brand-muted/40 hover:text-foreground"
);

function RichSegmentParagraph({
  segments,
  className,
}: {
  segments: GettingAroundRichSegment[];
  className?: string;
}) {
  return (
    <p className={cn("text-sm leading-snug text-foreground-muted sm:leading-relaxed", className)}>
      {segments.map((s, i) =>
        s.kind === "text" ? (
          <Fragment key={i}>{s.text}</Fragment>
        ) : (
          <AppOfficialSiteLink key={i} href={s.href}>
            {s.text}
          </AppOfficialSiteLink>
        )
      )}
    </p>
  );
}

const COMMUTING_INSIGHT_ICONS = {
  planners: MapPinned,
  rush: Users,
  weather: CloudRain,
  transfers: Route,
} as const;

const CYCLING_GUIDE_ICONS = {
  law: Shield,
  flow: Signpost,
  locks: Lock,
  "first-rides": Bike,
} as const;

function CommutingSection() {
  return (
    <div className="min-w-0">
      <div
        className="mb-4 flex flex-col gap-3 rounded-xl border border-border/90 bg-gradient-to-br from-brand-muted/25 via-surface-muted/50 to-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:mb-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:p-5"
        aria-label="Open commute planners"
      >
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Open when you plan</p>
          <p className="mt-1 text-sm font-medium text-foreground">NS and 9292 carry live platform and connection truth—tap through to the real apps.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:shrink-0">
          <a
            href={LIVING_TRANSPORT_APP_DOWNLOADS.ns.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className={commutingAppPillClass}
            aria-label="NS app on the App Store (opens in new tab)"
          >
            NS · App Store
          </a>
          <a
            href={LIVING_TRANSPORT_APP_DOWNLOADS.ns.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className={commutingAppPillClass}
            aria-label="NS app on Google Play (opens in new tab)"
          >
            NS · Play
          </a>
          <a
            href={LIVING_TRANSPORT_APP_DOWNLOADS["9292"].appStore}
            target="_blank"
            rel="noopener noreferrer"
            className={commutingAppPillClass}
            aria-label="9292 app on the App Store (opens in new tab)"
          >
            9292 · App Store
          </a>
          <a
            href={LIVING_TRANSPORT_APP_DOWNLOADS["9292"].playStore}
            target="_blank"
            rel="noopener noreferrer"
            className={commutingAppPillClass}
            aria-label="9292 app on Google Play (opens in new tab)"
          >
            9292 · Play
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {GETTING_AROUND_COMMUTING_INSIGHTS.map((insight) => {
          const Icon = COMMUTING_INSIGHT_ICONS[insight.id];
          return (
            <div
              key={insight.id}
              className="flex gap-3 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:gap-4 sm:p-5"
            >
              <div className={commutingInsightIconClass} aria-hidden>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{insight.title}</h3>
                <RichSegmentParagraph className="mt-1.5 sm:mt-2" segments={insight.segments} />
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="mt-5 rounded-card border border-border bg-gradient-to-b from-surface-muted/70 to-surface-muted/40 p-4 shadow-card ring-1 ring-border/10 sm:mt-6 sm:p-5"
        id="before-first-commute"
      >
        <h3 className="flex flex-wrap items-center gap-2 text-base font-semibold text-foreground">
          <span className="rounded border border-brand/25 bg-brand-muted/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-strong">
            Checklist
          </span>
          Before your first real commute
        </h3>
        <ul className="mt-4 space-y-3 text-sm leading-snug text-foreground-muted sm:space-y-3.5 sm:leading-relaxed" role="list">
          {GETTING_AROUND_COMMUTING_CHECKLIST.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 border-t border-border/70 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Planning hooks</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {GETTING_AROUND_COMMUTING_PLANNING_HOOKS.map((hook) => (
              <Link
                key={hook.href}
                href={hook.href}
                className={cn(
                  "inline-flex min-h-9 items-center rounded-full border border-border bg-surface-raised px-3 py-1.5 text-sm font-semibold text-link shadow-sm ring-1 ring-border/10",
                  transitionInteractive,
                  "hover:border-border-strong hover:bg-surface-muted hover:text-link-hover"
                )}
              >
                {hook.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CyclingGuideSection() {
  return (
    <div className="min-w-0 space-y-5 sm:space-y-6">
      <div className="rounded-xl border border-brand/25 bg-gradient-to-br from-brand-muted/35 via-surface-muted/40 to-surface-raised px-4 py-3.5 shadow-sm ring-1 ring-brand/10 sm:px-5 sm:py-4">
        <p className="text-sm leading-relaxed text-foreground-muted">{GETTING_AROUND_CYCLING_INTRO}</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {GETTING_AROUND_CYCLING_GUIDE_CARDS.map((card) => {
          const Icon = CYCLING_GUIDE_ICONS[card.id];
          return (
            <div
              key={card.id}
              className="flex gap-3 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:gap-4 sm:p-5"
            >
              <div className={commutingInsightIconClass} aria-hidden>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{card.title}</h3>
                <div className="mt-2 space-y-2 sm:space-y-2.5">
                  {card.paragraphs.map((para, i) => (
                    <RichSegmentParagraph key={i} segments={para} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-card border border-border bg-gradient-to-b from-surface-muted/70 to-surface-muted/40 p-4 shadow-card ring-1 ring-border/10 sm:p-5">
        <h3 className="flex flex-wrap items-center gap-2 text-sm font-semibold text-foreground sm:text-base">
          <ListChecks className="h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
          Rules of thumb
        </h3>
        <p className="mt-1 text-xs text-foreground-muted sm:text-sm">Quick reflexes that match how Dutch streets actually behave.</p>
        <ul className="mt-3 space-y-2.5 text-sm text-foreground-muted sm:mt-4" role="list">
          {GETTING_AROUND_CYCLING_RULES_REMINDERS.map((line) => (
            <li key={line} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" aria-hidden />
              <span className="leading-snug sm:leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-dashed border-border/90 bg-surface-muted/30 px-4 py-3.5 sm:px-5 sm:py-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Official & practical references</p>
        <ul className="mt-2 space-y-2 text-sm leading-snug" role="list">
          {GETTING_AROUND_CYCLING_OFFICIAL_LINKS.map((link) => (
            <li key={link.href}>
              <AppOfficialSiteLink href={link.href}>{link.label}</AppOfficialSiteLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PtBasicsGrid() {
  const blocks: Array<{ title: string; body: ReactNode; icon: typeof TrainFront }> = [
    {
      title: "Train = backbone",
      body: "City to city, the default is often rail. If the map shows a long straight run, start with the train in your head.",
      icon: TrainFront,
    },
    {
      title: "Tram, bus, metro = local fabric",
      body: "Inside town and for last hops, local modes finish the job. Transfers are boring and normal—plan them once.",
      icon: Bus,
    },
    {
      title: "Bike is infrastructure",
      body: "Home → bike → train → bike → desk is a commute shape, not a sport. Stations expect bikes; streets expect you to look left for red lanes.",
      icon: Bike,
    },
    {
      title: "Multimodal by default",
      body: (
        <>
          Nobody runs one app for everything.{" "}
          <AppOfficialSiteLink href="https://www.ns.nl/en">NS</AppOfficialSiteLink>
          {" + "}
          <AppOfficialSiteLink href="https://www.9292.nl/en">9292</AppOfficialSiteLink>
          {" + a checked-out tap habit is the realistic stack."}
        </>
      ),
      icon: MapPinned,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {blocks.map((b) => (
        <div
          key={b.title}
          className="flex gap-3 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:gap-4 sm:p-5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11">
            <b.icon className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{b.title}</h3>
            <p className="mt-1.5 text-sm leading-snug text-foreground-muted sm:mt-2 sm:leading-relaxed">{b.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function BoardingStopTipsGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {GETTING_AROUND_BOARDING_STOP_TIPS.map((tip) => {
        const Icon = BOARDING_STOP_TIP_ICONS[tip.id];
        return (
          <div
            key={tip.id}
            className="flex gap-3 rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:gap-4 sm:p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{tip.title}</h3>
              <p className="mt-1.5 text-sm leading-snug text-foreground-muted sm:mt-2 sm:leading-relaxed">{tip.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ModeDecisionGrid() {
  const modes = [
    {
      id: "mode-train",
      heading: "Use the train when…",
      icon: TrainFront,
      bullets: [
        "Distance between places is “rail-shaped,” not a short hop",
        "You want frequency and spine routes you can memorise",
        "Water, sprawl, or time pressure makes bus-only feel silly",
      ],
      examples: "Utrecht ↔ Amsterdam; Eindhoven ↔ Schiphol.",
    },
    {
      id: "mode-local",
      heading: "Use tram, bus, or metro when…",
      icon: Bus,
      bullets: [
        "Both ends sit in one urban network",
        "You need stops closer than the nearest station",
        "Rain, bags, or tired legs make a short ride worth it",
      ],
      examples: "Neighbourhood → centre; station → campus.",
    },
    {
      id: "mode-bike",
      heading: "Use a bike when…",
      icon: Bike,
      bullets: [
        "A few km that maps call “walkable” feel long in Dutch weather",
        "Station parking + wait time kills the train’s headline minutes",
        "You want to leave when you are ready, not when the board says go",
      ],
      examples: "Short suburb loops; inner-ring errands.",
    },
    {
      id: "mode-combo",
      heading: "Use train + bike when…",
      icon: Route,
      bullets: [
        "Neither mode covers door-to-door alone",
        "You can park or store a bike at both ends without drama",
        "The bike leg is short enough that weather risk is tolerable",
      ],
      examples: "Suburb → hub station → office inside the ring.",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {modes.map((m) => (
        <div
          key={m.id}
          className="rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-muted text-brand-strong sm:h-10 sm:w-10">
              <m.icon className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" aria-hidden />
            </span>
            <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">{m.heading}</h3>
          </div>
          <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-snug text-foreground-muted sm:mt-4 sm:space-y-2 sm:pl-5 sm:leading-relaxed" role="list">
            {m.bullets.map((b) => (
              <li key={b} className="marker:text-brand/70">
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-3 border-t border-border/60 pt-3 text-xs font-medium leading-snug text-foreground-muted sm:mt-4">{m.examples}</p>
        </div>
      ))}
    </div>
  );
}

function SurprisesGrid() {
  const items = [
    "Tap-to-pay gets you moving before you understand every ticket product.",
    "Real trips mix modes; calm transfers beat heroic single-mode fantasy.",
    "Bikes are commute infrastructure—station racks fill for a reason.",
    "Missed check-outs are a tax on inattention; fix the habit early.",
    "“25 min by train” ≠ 25 min door-to-door—stairs, bikes, and rain disagree.",
    "Apps are load-bearing; locals use them to think less on bad mornings.",
  ];
  return (
    <ol className="grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-3">
      {items.map((t, i) => (
        <li
          key={t}
          className="flex gap-3 rounded-card border border-border border-l-[3px] border-l-brand bg-surface-raised p-3.5 shadow-card ring-1 ring-border/10 sm:p-4"
        >
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-muted/80 text-xs font-bold text-brand-strong"
            aria-hidden
          >
            {i + 1}
          </span>
          <span className="min-w-0 text-sm font-medium leading-snug text-foreground sm:leading-relaxed">{t}</span>
        </li>
      ))}
    </ol>
  );
}

function OfficialSourcesBlock() {
  return (
    <section
      id="official-sources"
      aria-labelledby="ga-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8 rounded-2xl border-0 bg-slate-50/90 p-6 shadow-inner sm:p-8")}
    >
      <h2 id="ga-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        Official sources
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
        When the answer must be exact—fares, zones, products—use these, not a blog.
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        <li>
          <a
            href="https://www.ns.nl/en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
          >
            NS — Dutch Railways (English) →
          </a>
        </li>
        <li>
          <a
            href="https://www.9292.nl/en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
          >
            9292 — nationwide journey planner →
          </a>
        </li>
        <li>
          <a
            href="https://www.ovpay.nl/en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-link underline-offset-2 hover:text-link-hover hover:underline"
          >
            OVpay — contactless travel information →
          </a>
        </li>
      </ul>
      <p className="mt-5 text-sm text-foreground-muted">
        Back to{" "}
        <Link href={LIVING_SURVIVAL_GUIDE_PATH} className="font-semibold text-link hover:text-link-hover hover:underline">
          Netherlands Survival Guide
        </Link>{" "}
        for the wider day-one stack.
      </p>
    </section>
  );
}

export function GettingAroundView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(LIVING_GETTING_AROUND_PATH, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: LIVING_PILLAR_BREADCRUMB_LABEL, item: new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString() },
    { name: "Getting around", item: new URL(LIVING_GETTING_AROUND_PATH, baseUrl).toString() },
  ];

  const heroBullets: string[] = [
    "Which three apps to install first (and why two beats one)",
    "Tap-in / tap-out: same card or phone, every leg—no mixing",
    "When train, tram, bus, metro, or bike wins—and when people combine them",
    "First-week habits so your real commute is not your first experiment",
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <LivingSectionNav
      items={GETTING_AROUND_SECTION_NAV}
      deepLinks={[
        {
          href: LIVING_SURVIVAL_GUIDE_PATH,
          label: "Netherlands Survival Guide",
          description: "The wider Living hub covers payments, weather, groceries, and first-month sequencing—open when you want the full field guide.",
        },
        {
          href: LIVING_ESSENTIAL_APPS_PATH,
          label: "Essential apps for life in the Netherlands",
          description: "Curated install order for transport, pay, shops, delivery, and chat—pairs with this transport deep dive.",
        },
        {
          href: LIVING_DAILY_LIFE_PATH,
          label: "Daily life basics in the Netherlands",
          description: "Groceries, errands, payments, deliveries, and household rhythms when you are off the train and into ordinary weeks.",
        },
        {
          href: LIVING_EMERGENCIES_SAFETY_PATH,
          label: "Emergencies & Safety in the Netherlands",
          description: "A calm guide to 112, urgent situations, lost items, and practical first steps when something goes wrong on the move or at home.",
        },
        {
          href: LIVING_WEATHER_PATH,
          label: "Weather & Seasons in the Netherlands",
          description: "Wind, rain, dark days, and what to wear when commuting comfort depends on more than the route itself.",
        },
        {
          href: LIVING_LANGUAGE_PATH,
          label: "Language & phrases for life in the Netherlands",
          description: "Useful Dutch for platforms, quick route questions, and short service moments when transport confidence needs a language layer too.",
        },
        {
          href: LIVING_CULTURE_ETIQUETTE_PATH,
          label: "Dutch Culture & Etiquette",
          description: "Directness, queueing, bike-lane awareness, neighbor norms, and the social side of public-space behavior.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline="Getting Around in the Netherlands"
        description="Practical Dutch transport for newcomers: NS, 9292, OVpay, tap-in discipline, modes, commuting reality, and bikes—without living in other Living subpages."
        dateModified={DATE_MODIFIED}
        urlPath={LIVING_GETTING_AROUND_PATH}
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
                    Getting around
                  </span>
                </nav>
              }
              eyebrow="Living in the Netherlands"
              title="Getting Around in the Netherlands"
              subtitle="Trains, local transit, bikes, and contactless pay—how it actually works on a Tuesday, plus the three apps that keep you out of trouble."
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-snug text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem] sm:leading-relaxed" role="list">
                      {heroBullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                      <Link href="#start-here" className={primaryCtaClass}>
                        Start here — first days
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href="#apps"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        App stack
                      </Link>
                      <Link
                        href="#pt-basics"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border/80 bg-transparent px-4 py-2.5 text-sm font-semibold text-foreground-muted hover:border-border hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        How the system layers
                      </Link>
                    </div>
                    <p className="mt-3 text-sm leading-snug text-foreground-muted sm:mt-4 sm:leading-relaxed">
                      <Link
                        href={LIVING_SURVIVAL_GUIDE_PATH}
                        className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline"
                      >
                        Survival Guide
                      </Link>
                      <span className="text-foreground-muted"> for pay, weather, and week-one rhythm beyond transport.</span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link
                        href={LIVING_ESSENTIAL_APPS_PATH}
                        className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline"
                      >
                        Essential apps for life in the Netherlands
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        for the wider home-screen stack—Tikkie, supermarkets, delivery, and chat beside{" "}
                        <AppOfficialSiteLink href="https://www.ns.nl/en">NS</AppOfficialSiteLink>
                        {" and "}
                        <AppOfficialSiteLink href="https://www.9292.nl/en">9292</AppOfficialSiteLink>.
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_DAILY_LIFE_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Daily life basics in the Netherlands
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        for groceries, errands, payments, and parcel habits when you are not on a platform or bike lane.
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_EMERGENCIES_SAFETY_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Emergencies &amp; Safety in the Netherlands
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        for 112, urgent situations, lost items, and the calm fallback steps that matter if something goes wrong on the move.
                      </span>
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      <Link href={LIVING_CULTURE_ETIQUETTE_PATH} className="font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline">
                        Dutch Culture & Etiquette
                      </Link>
                      <span className="text-foreground-muted">
                        {" "}
                        explains the public-space side of transport too: queueing, bike-lane awareness, short direct interactions, and everyday shared-space expectations.
                      </span>
                    </p>
                    <ul
                      className="mt-4 flex list-none flex-wrap gap-1.5 border-t border-border/80 p-0 pt-4 sm:mt-5 sm:gap-2 sm:pt-5"
                      aria-label="Quick orientation"
                    >
                      {HERO_QUICK_STRIP.map(({ Icon, label }) => (
                        <li key={label} className="max-w-full">
                          <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-border/90 bg-surface-raised px-2.5 py-1 text-left text-[11px] font-medium text-foreground-muted shadow-sm ring-1 ring-border/10 sm:px-3 sm:py-1.5 sm:text-xs">
                            <Icon className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <GettingAroundHeroGraphic className="min-w-0 w-full pt-1 md:justify-self-end md:pt-0" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={LIVING_GETTING_AROUND_PATH}
            />
          </PillarGuideHeroRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact">
            <LivingSurvivalMobileToc items={GETTING_AROUND_SECTION_NAV} />

            <SectionBlock
              id="at-a-glance"
              className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5 md:!pt-6")}
              eyebrow="Orientation"
              title="At a glance"
              subtitle="Enough to commute confidently on this page alone—other Living guides add pay, weather, and shops when you want them."
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
              title="First day, first week, then rhythm"
              subtitle="Do the column that matches where you are—each builds on the last."
            >
              <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
                <span className="rounded-full border border-brand/25 bg-brand-muted/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                  Priority path
                </span>
                <span className="leading-snug">Install apps and save a route before your first hard deadline.</span>
              </p>
              <LivingQuickStartCards phases={GETTING_AROUND_QUICK_START} />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="apps"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Stack"
              title="Essential transport apps"
              subtitle="Three names, three jobs—most people run at least two. For groceries, Tikkie, delivery, and chat on the same home screen, open Essential apps (Living)."
            >
              <AppEssentialsGrid />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="pt-basics"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="System"
              title="How Dutch public transport works"
              subtitle="Rail spans cities; local modes fill gaps; bikes connect stations—treat all three as normal."
            >
              <PtBasicsGrid />
              <SectionRhythmDivider />
              <div id="boarding-stops" className={SECTION_SCROLL_MARGIN}>
                <h3 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
                  Boarding, stops, and street habits
                </h3>
                <p className="mt-1 max-w-3xl text-sm leading-snug text-foreground-muted sm:mt-1.5 sm:leading-relaxed">
                  Small gestures that decide whether you actually get on—or off—the bus or tram. Easy to miss if you only read about tickets.
                </p>
                <div className="mt-4">
                  <BoardingStopTipsGrid />
                </div>
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="how-to-pay"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Confidence"
              title="How to pay"
              subtitle={GETTING_AROUND_HOW_TO_PAY_SUBTITLE}
            >
              <HowToPaySection />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="which-mode"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Decide faster"
              title="Which mode to use when"
              subtitle="Heuristics locals use without thinking—pick one, try it, adjust."
            >
              <ModeDecisionGrid />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="commuting"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Real life"
              title="Commuting in real life"
              subtitle={GETTING_AROUND_COMMUTING_SUBTITLE}
            >
              <CommutingSection />
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="cycling"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Fiets reality"
              title="Cycling basics"
              subtitle={GETTING_AROUND_CYCLING_SUBTITLE}
            >
              <CyclingGuideSection />
            </SectionBlock>

            <SectionRhythmDivider />

            <ContextualAffiliateSection
              config={{ type: "mobility" }}
              pageSlugPath={LIVING_GETTING_AROUND_PATH}
              className="!py-4 sm:!py-5 md:!py-6"
            />

            <SectionRhythmDivider />

            <SectionBlock
              id="surprises"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Reality check"
              title="What surprises newcomers most"
              subtitle="Short punches—bookmark the ones that would have saved you a fine."
            >
              <SurprisesGrid />
            </SectionBlock>
          </PillarJourneyStack>
        }
        tools={
          <PillarGuideToolsSection
            compact
            id="helpful-tools"
            title="Helpful planning tools"
            subtitle="Same product strip as the Moving pillar and Survival Guide—commute decisions sit next to rent, city choice, net pay, and household lines."
          >
            <ToolCard
              title="City comparison tool"
              description="Compare commute friction, cost anchors, and lifestyle fit before you lock a neighbourhood."
              href="/netherlands/tools/city-comparison/"
              ctaLabel="Compare cities"
              compact
              icon={<MapPinned className="h-5 w-5" aria-hidden />}
            />
            <ToolCard
              title="Rent affordability calculator"
              description="Stress-test rent with realistic monthly headroom—commute spend included in the story you tell yourself."
              href="/netherlands/housing/tools/rent-affordability-calculator/"
              ctaLabel="Check rent headroom"
              compact
              icon={<Building2 className="h-5 w-5" aria-hidden />}
            />
            <ToolCard
              title="Cost of living calculator"
              description="Turn city + lifestyle into monthly bands so OV, bike, and car choices sit inside a real budget."
              href="/netherlands/money/tools/cost-of-living-calculator/"
              ctaLabel="Run the numbers"
              compact
            />
            <ToolCard
              title="Job offer comparison tool"
              description="Blend commute days, modes, and net pay when two offers look equal on paper."
              href="/netherlands/work/tools/job-offer-comparison/"
              ctaLabel="Compare offers"
              compact
            />
            <ToolCard
              title="Transport tools hub"
              description="OV- and bike-oriented tools in one hub when you are still choosing a rhythm or comparing modes."
              href="/netherlands/transport/tools/"
              ctaLabel="Open transport tools"
              compact
              icon={<Route className="h-5 w-5" aria-hidden />}
            />
            <ToolCard
              title="Netherlands Survival Guide"
              description="The broader Living hub for payments, apps, weather, and first-week sequencing."
              href={LIVING_SURVIVAL_GUIDE_PATH}
              ctaLabel="Open Survival Guide"
              compact
              icon={<TrainFront className="h-5 w-5" aria-hidden />}
            />
            <div className="col-span-full mt-6 border-t border-border/70 pt-6 sm:mt-8 sm:pt-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Round out the month</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">Utilities, salary, childcare, and allowances</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                These use the same CardLink pattern as the Survival Guide tool strip—handy once housing and commute direction are clear.
              </p>
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
              title="Related Living guides"
              subtitle="Transport touches almost every other daily system—stay inside the Living cluster when you want depth without leaving the pillar."
            >
              <LivingClusterLinkGrid items={LIVING_CLUSTER_SIBLING_LINKS_GETTING_AROUND} />
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
              subtitle="Cards, apps, chipkaart, check-outs, English—fast answers."
            >
              <GettingAroundFaq />
            </SectionBlock>
            <OfficialSourcesBlock />
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
