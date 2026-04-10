import Link from "next/link";
import { AlertTriangle, ArrowRight, Building2, FileText, HeartPulse } from "lucide-react";
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
  LIVING_CLUSTER_SIBLING_LINKS_EMERGENCIES_SAFETY,
  LIVING_DAILY_LIFE_PATH,
  LIVING_EMERGENCIES_SAFETY_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_HEALTHCARE_BASICS_PATH,
  LIVING_PILLAR_BREADCRUMB_LABEL,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import { LivingQuickStartCards } from "@/src/components/living/survival-guide/LivingQuickStartCards";
import { LivingSectionNav } from "@/src/components/living/survival-guide/LivingSectionNav";
import { LivingSurvivalMobileToc } from "@/src/components/living/survival-guide/LivingSurvivalMobileToc";
import { LivingToolShortcutsGrid } from "@/src/components/living/survival-guide/LivingToolShortcutsGrid";
import { ContextualAffiliateSection } from "@/src/components/monetization/ContextualAffiliateSection";
import { EmergenciesSafetyHeroGraphic } from "./EmergenciesSafetyHeroGraphic";
import {
  EMERGENCIES_SAFETY_DATE_MODIFIED,
  emergenciesSafetyAtAGlance,
  emergenciesSafetyContactRoles,
  emergenciesSafetyEmergencyVsUrgentCards,
  emergenciesSafetyFaq,
  emergenciesSafetyHero,
  emergenciesSafetyIncidentCards,
  emergenciesSafetyMedicalCallout,
  emergenciesSafetyMedicalCards,
  emergenciesSafetyMeta,
  emergenciesSafetyPreparednessCallout,
  emergenciesSafetyPreparednessCards,
  emergenciesSafetyQuickStart,
  emergenciesSafetyReferences,
  emergenciesSafetyRelatedToolsConfig,
  emergenciesSafetySectionNav,
  emergenciesSafetyShortcuts,
  emergenciesSafetyStartHereCallout,
  emergenciesSafetySurprises,
  emergenciesSafetySurprisesCallout,
  emergenciesSafetyToolCards,
  emergenciesSafetyUrgencyLanes,
  emergenciesSafetyDailySafetyCards,
  type EmergenciesContactRole,
  type EmergenciesInfoCard,
} from "./emergenciesSafetyContent";

const HEALTHCARE_ALLOWANCE_TOOL_PATH = "/netherlands/taxes/tools/healthcare-allowance-estimator/";
const CHILDCARE_TOOL_PATH = "/netherlands/family/tools/childcare-cost-estimator/";
const FIRST_90_DAYS_GUIDE_PATH = "/netherlands/first-90-days-netherlands/";
const MOVING_WITH_FAMILY_GUIDE_PATH = "/netherlands/moving-to-netherlands-with-family/";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const crossLinkClass =
  "font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm";

const FAQ_SCHEMA = emergenciesSafetyFaq.map((item) => ({
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
      {emergenciesSafetyAtAGlance.cells.map((cell) => (
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
  const note = emergenciesSafetyAtAGlance.note;
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

function QuickReferenceContacts() {
  const items = [
    {
      title: "112",
      body: "True emergency. Immediate danger or a serious situation that cannot wait.",
      icon: AlertTriangle,
      tone: "emergency",
    },
    {
      title: "Urgent health",
      body: "Needs quick action, but not every urgent health problem is a 112 case.",
      icon: HeartPulse,
      tone: "urgent",
    },
    {
      title: "GP / huisarts",
      body: "Normal first contact for many non-emergency health questions.",
      icon: Building2,
      tone: "default",
    },
    {
      title: "Reports and follow-up",
      body: "Lost items, admin, insurer, landlord, or other practical next steps.",
      icon: FileText,
      tone: "default",
    },
  ] as const;

  const toneClass = {
    default: "border-border/80 bg-surface-raised ring-border/10",
    urgent: "border-amber-200/80 bg-amber-50/60 ring-amber-100",
    emergency: "border-rose-200/80 bg-rose-50/70 ring-rose-100",
  } as const;

  return (
    <div className="mb-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className={cn("rounded-card border p-3.5 shadow-card ring-1", toneClass[item.tone])}>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/85 text-brand-strong ring-1 ring-border/10">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-sm font-semibold tracking-tight text-foreground">{item.title}</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}

function UrgencyLanesGrid() {
  const toneClass: Record<NonNullable<(typeof emergenciesSafetyUrgencyLanes)[number]["tone"]>, string> = {
    default: "border-border/80 bg-surface-raised ring-border/10",
    non_urgent: "border-emerald-200/80 bg-emerald-50/55 ring-emerald-100",
    urgent: "border-amber-200/80 bg-amber-50/60 ring-amber-100",
    emergency: "border-rose-200/80 bg-rose-50/70 ring-rose-100",
  };

  return (
    <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
      {emergenciesSafetyUrgencyLanes.map((lane) => (
        <div
          key={lane.title}
          className={cn("rounded-card border p-4 shadow-card ring-1", toneClass[lane.tone ?? "default"])}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">{lane.badge}</p>
          <h3 className="mt-2 text-sm font-semibold tracking-tight text-foreground">{lane.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{lane.body}</p>
        </div>
      ))}
    </div>
  );
}

function InfoCard({ card }: { card: EmergenciesInfoCard }) {
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
        {card.callout ? (
          <div className="mt-3 rounded-lg border border-brand/15 bg-brand-muted/20 px-3 py-3 ring-1 ring-brand/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{card.callout.eyebrow}</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{card.callout.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{card.callout.body}</p>
          </div>
        ) : null}
        {card.internalLink ? (
          <p className="mt-3 text-sm">
            <Link href={card.internalLink.href} className={crossLinkClass}>
              {card.internalLink.label}
            </Link>
            {card.internalLink.description ? <span className="text-foreground-muted"> {" "}({card.internalLink.description})</span> : null}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function ContactRoleCard({ card }: { card: EmergenciesContactRole }) {
  const Icon = card.icon;
  return (
    <div className="flex h-full flex-col rounded-card border border-border bg-surface-raised p-4 shadow-card ring-1 ring-border/10 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted/80 text-brand-strong sm:h-11 sm:w-11">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <span className="inline-flex rounded-full border border-brand/20 bg-brand-muted/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
            {card.badge}
          </span>
          <h3 className="mt-2 text-sm font-semibold tracking-tight text-foreground sm:text-base">{card.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{card.intro}</p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 text-sm text-foreground-muted sm:grid-cols-2">
        <div className="rounded-lg border border-border/70 bg-surface-muted/35 px-3 py-3 ring-1 ring-border/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">Best for</p>
          <ul className="mt-1.5 space-y-1.5">
            {card.bestFor.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/80" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-border/70 bg-surface-muted/35 px-3 py-3 ring-1 ring-border/5">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-foreground-muted">When to use it</p>
          <p className="mt-1.5 leading-relaxed">{card.whenToUse}</p>
        </div>
        <div className="rounded-lg border border-brand/15 bg-brand-muted/25 px-3 py-3 ring-1 ring-brand/5 sm:col-span-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Practical tip</p>
          <p className="mt-1.5 leading-relaxed text-foreground-muted">{card.practicalTip}</p>
          {card.internalLink ? (
            <p className="mt-2 text-sm">
              <Link href={card.internalLink.href} className={crossLinkClass}>
                {card.internalLink.label}
              </Link>
              {card.internalLink.description ? <span className="text-foreground-muted"> {" "}({card.internalLink.description})</span> : null}
            </p>
          ) : null}
        </div>
      </div>
    </div>
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
    <div className="rounded-xl border border-brand/25 bg-gradient-to-br from-brand-muted/30 via-surface-muted/50 to-surface-raised p-4 shadow-sm ring-1 ring-brand/10 sm:p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
    </div>
  );
}

function SurprisesGrid() {
  return (
    <ol className="grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-3" aria-label="Common safety surprises for newcomers">
      {emergenciesSafetySurprises.map((item, index) => (
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
      aria-labelledby="emergencies-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8 rounded-2xl border-0 bg-slate-50/90 p-6 shadow-inner sm:p-8")}
    >
      <h2 id="emergencies-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        {emergenciesSafetyReferences.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{emergenciesSafetyReferences.intro}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {emergenciesSafetyReferences.links.map((link) => (
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
      <p className="mt-5 text-sm leading-relaxed text-foreground-muted">{emergenciesSafetyReferences.footer}</p>
    </section>
  );
}

export function EmergenciesSafetyView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(LIVING_EMERGENCIES_SAFETY_PATH, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: LIVING_PILLAR_BREADCRUMB_LABEL, item: new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString() },
    { name: "Emergencies & Safety", item: new URL(LIVING_EMERGENCIES_SAFETY_PATH, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <LivingSectionNav
      items={emergenciesSafetySectionNav}
      deepLinks={[
        {
          href: LIVING_SURVIVAL_GUIDE_PATH,
          label: "Netherlands Survival Guide",
          description: "Your wider Living hub for first-week priorities, everyday systems, and the practical context around this page.",
        },
        {
          href: LIVING_HEALTHCARE_BASICS_PATH,
          label: "Healthcare Basics",
          description: "The wider Dutch care flow for GP contact, urgent care, pharmacies, and emergency-health context.",
        },
        {
          href: LIVING_GETTING_AROUND_PATH,
          label: "Getting Around",
          description: "Transport and cycling guidance when daily travel awareness matters as much as knowing the emergency routes.",
        },
        {
          href: LIVING_DAILY_LIFE_PATH,
          label: "Daily Life Basics",
          description: "Buildings, local routines, services, and home setup that make safety readiness feel more practical and less abstract.",
        },
        {
          href: LIVING_ESSENTIAL_APPS_PATH,
          label: "Essential Apps",
          description: "Useful when maps, payments, and saved contacts are part of the wider readiness setup on your phone.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline={emergenciesSafetyMeta.title}
        description={emergenciesSafetyMeta.description}
        dateModified={EMERGENCIES_SAFETY_DATE_MODIFIED}
        urlPath={LIVING_EMERGENCIES_SAFETY_PATH}
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
                    Emergencies & Safety
                  </span>
                </nav>
              }
              eyebrow={emergenciesSafetyHero.eyebrow}
              title={emergenciesSafetyHero.title}
              subtitle={emergenciesSafetyHero.subtitle}
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
                      {emergenciesSafetyHero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                      <Link href={emergenciesSafetyHero.primaryCta.href} className={primaryCtaClass}>
                        {emergenciesSafetyHero.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={emergenciesSafetyHero.secondaryCta.href}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        {emergenciesSafetyHero.secondaryCta.label}
                      </Link>
                    </div>
                    <p className="mt-4 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      Read this alongside{" "}
                      <Link href={LIVING_SURVIVAL_GUIDE_PATH} className={crossLinkClass}>
                        Survival Guide
                      </Link>
                      ,{" "}
                      <Link href={LIVING_HEALTHCARE_BASICS_PATH} className={crossLinkClass}>
                        Healthcare Basics
                      </Link>
                      , and{" "}
                      <Link href={LIVING_GETTING_AROUND_PATH} className={crossLinkClass}>
                        Getting Around
                      </Link>
                      {" "}so emergency readiness stays connected to healthcare, transport, and the practical side of daily life.
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      For the wider arrival picture, pair this with{" "}
                      <Link href={FIRST_90_DAYS_GUIDE_PATH} className={crossLinkClass}>
                        First 90 Days
                      </Link>
                      {" "}and{" "}
                      <Link href={LIVING_DAILY_LIFE_PATH} className={crossLinkClass}>
                        Daily Life Basics
                      </Link>
                      . If family setup changes what you need to keep ready, the{" "}
                      <Link href={CHILDCARE_TOOL_PATH} className={crossLinkClass}>
                        Childcare Cost Estimator
                      </Link>
                      {" "}and{" "}
                      <Link href={MOVING_WITH_FAMILY_GUIDE_PATH} className={crossLinkClass}>
                        family move guide
                      </Link>
                      {" "}help keep emergency readiness inside the wider household plan.
                    </p>
                    <ul
                      className="mt-5 flex list-none flex-wrap gap-2 border-t border-border/80 p-0 pt-5 sm:mt-6 sm:gap-2.5 sm:pt-6"
                      aria-label="Quick safety truths"
                    >
                      {emergenciesSafetyHero.quickStrip.map(({ icon: Icon, label }) => (
                        <li key={label} className="max-w-full">
                          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/90 bg-surface-raised px-3 py-1.5 text-left text-xs font-medium text-foreground-muted shadow-card ring-1 ring-border/10">
                            <Icon className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <EmergenciesSafetyHeroGraphic className="min-w-0 w-full max-w-md justify-self-center sm:max-w-none md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={LIVING_EMERGENCIES_SAFETY_PATH}
            />
          </PillarGuideHeroRegion>
        }
        atAGlance={
          <PillarGuideAtGlanceRegion>
            <SectionBlock
              id="at-a-glance"
              className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5 md:!pt-6")}
              eyebrow={emergenciesSafetyAtAGlance.eyebrow}
              title={emergenciesSafetyAtAGlance.title}
              subtitle={emergenciesSafetyAtAGlance.subtitle}
            >
              <AtAGlanceGrid />
              <AtAGlanceNote />
            </SectionBlock>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact">
            <LivingSurvivalMobileToc items={emergenciesSafetySectionNav} />

            <LivingPillarExplorer
              id="explore-living-pillar"
              title="Explore the wider Living pillar"
              subtitle="Safety confidence gets stronger when it stays connected to the same Living stack: healthcare, transport, practical routines, and the first-week systems around them."
            />

            <SectionRhythmDivider />

            <SectionBlock
              id="start-here"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Start here"
              title="What to know in your first days"
              subtitle="Focus on the setup that helps most under stress. You do not need a giant safety manual to start well."
            >
              <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
                <span className="rounded-full border border-brand/25 bg-brand-muted/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                  Simple first plan
                </span>
                <span className="leading-snug">112, your address, the right healthcare route, and a few saved contacts are enough to build real early confidence.</span>
              </p>
              <LivingQuickStartCards phases={emergenciesSafetyQuickStart} />
              <div className="mt-4 sm:mt-5">
                <ConfidenceCallout {...emergenciesSafetyStartHereCallout} />
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="emergency-vs-urgent"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Core orientation"
              title="Emergency vs urgent vs non-urgent: how to think about it"
              subtitle="This is the main mental model. Once these lanes feel clear, the rest of the page becomes much easier to use."
            >
              <PracticalChipRow chips={["112 for emergencies", "Urgent is different", "Normal routes still matter"]} />
              <UrgencyLanesGrid />
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                The key idea is simple: some situations need emergency help right now, some need quick action without being a 112 situation, and some can still follow a normal route. This page stays high-level on purpose so you can choose a calm first step without turning it into a diagnosis checklist.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {emergenciesSafetyEmergencyVsUrgentCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="emergency-numbers"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Quick-reference block"
              title="Emergency numbers and who to contact"
              subtitle="Keep this section simple: know who handles what, and keep the most useful contacts easy to reach."
            >
              <PracticalChipRow chips={["112", "Urgent healthcare", "GP", "Reports", "Household contacts"]} />
              <QuickReferenceContacts />
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                The right contact depends on the type of problem. In real emergencies, use official emergency guidance first. Outside that, the main win is knowing the basic route before you need it.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
                {emergenciesSafetyContactRoles.map((card) => (
                  <ContactRoleCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="medical-emergencies"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Healthcare connection"
              title="Medical emergencies and urgent health situations"
              subtitle="This section stays practical and structural. It is about the route, not about diagnosis."
            >
              <PracticalChipRow chips={["112 for true emergencies", "After-hours care", "GP role", "Keep details ready"]} />
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                If the situation is a true emergency, the emergency route comes first. For many other health situations, knowing the Dutch healthcare flow makes things much less confusing. Pair this section with{" "}
                <Link href={LIVING_HEALTHCARE_BASICS_PATH} className={crossLinkClass}>
                  Healthcare Basics
                </Link>
                {" "}for the wider system, and use the{" "}
                <Link href={HEALTHCARE_ALLOWANCE_TOOL_PATH} className={crossLinkClass}>
                  Healthcare Allowance Estimator
                </Link>
                {" "}only for the budget side of the setup rather than for urgent-care decisions.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {emergenciesSafetyMedicalCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <div className="mt-4 sm:mt-5">
                <ConfidenceCallout {...emergenciesSafetyMedicalCallout} />
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <div
              id="health-insurance-partners"
              className={cn(SECTION_SCROLL_MARGIN, "scroll-mt-28 md:scroll-mt-32")}
            >
              <ContextualAffiliateSection
                config={{ type: "insurance" }}
                pageSlugPath={LIVING_EMERGENCIES_SAFETY_PATH}
                className="!py-4 sm:!py-5 md:!py-6"
              />
            </div>

            <SectionRhythmDivider />

            <SectionBlock
              id="everyday-safety"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Daily-life realism"
              title="Safety in daily life: transport, street, cycling, and home basics"
              subtitle="The tone here is simple and calm: normal awareness, a few good habits, and enough preparation to avoid avoidable stress."
            >
              <PracticalChipRow chips={["Transport", "Cycling", "Street awareness", "Home basics"]} />
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                Most everyday safety questions are not dramatic. They are about moving through the city, keeping access and belongings sensible, and having a few fallback habits ready.
              </p>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                For the fuller transport side, use{" "}
                <Link href={LIVING_GETTING_AROUND_PATH} className={crossLinkClass}>
                  Getting Around
                </Link>
                . For the wider home and routine side, pair this with{" "}
                <Link href={LIVING_DAILY_LIFE_PATH} className={crossLinkClass}>
                  Daily Life Basics
                </Link>
                {" "}so safety habits stay connected to ordinary Dutch life rather than feeling like a separate topic.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {emergenciesSafetyDailySafetyCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="lost-items-reports"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="After something goes wrong"
              title="Lost items, police, reports, and practical admin after an incident"
              subtitle="This is where many newcomers feel most unsure. A simple sequence helps more than trying to solve everything at once."
            >
              <PracticalChipRow chips={["Lost phone", "Lost wallet", "Lost keys", "Secure access first"]} />
              <div className="mb-5 rounded-card border border-brand/15 bg-brand-muted/20 p-4 shadow-card ring-1 ring-brand/5 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">Simple order</p>
                <div className="mt-2 grid gap-2.5 sm:grid-cols-3">
                  {[
                    "Make sure you are okay",
                    "Secure access and important accounts",
                    "Then report, replace, or contact the right service",
                  ].map((step, index) => (
                    <div key={step} className="rounded-lg border border-white/70 bg-white/80 px-3 py-3 ring-1 ring-brand/5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">Step {index + 1}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                If the incident affects normal routines as much as the immediate problem, keep{" "}
                <Link href={LIVING_DAILY_LIFE_PATH} className={crossLinkClass}>
                  Daily Life Basics
                </Link>
                {" "}and{" "}
                <Link href={LIVING_SURVIVAL_GUIDE_PATH} className={crossLinkClass}>
                  Survival Guide
                </Link>
                {" "}close too. They help with the broader local-service, access, and first-month context around the admin that follows.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {emergenciesSafetyIncidentCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="surprises"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="What catches people off guard"
              title="What surprises newcomers most"
              subtitle="A lot of confidence comes from understanding the system, not from trying to expect the worst."
            >
              <PracticalChipRow chips={["112 is clear", "Preparation matters", "Admin matters too"]} />
              <SurprisesGrid />
              <div className="mt-4 sm:mt-5">
                <ConfidenceCallout {...emergenciesSafetySurprisesCallout} />
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="feel-prepared"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Confidence layer"
              title="How to feel prepared without becoming anxious"
              subtitle="You are aiming for a calm first plan, not for expert-level emergency knowledge."
            >
              <PracticalChipRow chips={["Save numbers", "Keep details handy", "Know the broad routes", "Do not overcomplicate it"]} />
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                This is the practical version of safety confidence: know the emergency number, know the urgent lane, know the normal route, and keep your important details within easy reach.
              </p>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                If family life shapes your readiness plan, pair this with{" "}
                <Link href={MOVING_WITH_FAMILY_GUIDE_PATH} className={crossLinkClass}>
                  Moving to the Netherlands with family
                </Link>
                {" "}and the{" "}
                <Link href={CHILDCARE_TOOL_PATH} className={crossLinkClass}>
                  Childcare Cost Estimator
                </Link>
                . If you are still organizing your first-month setup,{" "}
                <Link href={FIRST_90_DAYS_GUIDE_PATH} className={crossLinkClass}>
                  First 90 Days
                </Link>
                {" "}keeps this inside the wider move plan.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {emergenciesSafetyPreparednessCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
              <div className="mt-4 sm:mt-5">
                <ConfidenceCallout {...emergenciesSafetyPreparednessCallout} />
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <div
              id="banking-partners"
              className={cn(SECTION_SCROLL_MARGIN, "scroll-mt-28 md:scroll-mt-32")}
            >
              <ContextualAffiliateSection
                config={{ type: "banking" }}
                pageSlugPath={LIVING_EMERGENCIES_SAFETY_PATH}
                className="!py-4 sm:!py-5 md:!py-6"
              />
            </div>

            <SectionRhythmDivider />

            <div
              id="relocation-partners"
              className={cn(SECTION_SCROLL_MARGIN, "scroll-mt-28 md:scroll-mt-32")}
            >
              <ContextualAffiliateSection
                config={{ type: "recommended" }}
                pageSlugPath={LIVING_EMERGENCIES_SAFETY_PATH}
                className="!py-4 sm:!py-5 md:!py-6"
              />
            </div>

            <SectionRhythmDivider />

            <PillarGuideToolsSection
              id="helpful-tools"
              title={emergenciesSafetyRelatedToolsConfig.sectionTitle}
              subtitle={emergenciesSafetyRelatedToolsConfig.sectionSubtitle}
            >
              <div className="col-span-full max-w-3xl space-y-3">
                <p className="text-sm leading-relaxed text-foreground-muted">{emergenciesSafetyRelatedToolsConfig.intro}</p>
                <p className="text-sm leading-relaxed text-foreground-muted">
                  Think of this as the wider product family around the page: Living guides for day-to-day systems, healthcare and transport guides for the main pathways, and Move pages for first-month timing and family setup.
                </p>
                <p className="text-sm leading-relaxed text-foreground-muted">
                  If you are deciding what to read next, start with{" "}
                  <Link href={LIVING_SURVIVAL_GUIDE_PATH} className={crossLinkClass}>
                    Survival Guide
                  </Link>
                  ,{" "}
                  <Link href={LIVING_HEALTHCARE_BASICS_PATH} className={crossLinkClass}>
                    Healthcare Basics
                  </Link>
                  ,{" "}
                  <Link href={LIVING_GETTING_AROUND_PATH} className={crossLinkClass}>
                    Getting Around
                  </Link>
                  , and{" "}
                  <Link href={LIVING_DAILY_LIFE_PATH} className={crossLinkClass}>
                    Daily Life Basics
                  </Link>
                  . For admin and family planning around readiness, use the{" "}
                  <Link href={HEALTHCARE_ALLOWANCE_TOOL_PATH} className={crossLinkClass}>
                    Healthcare Allowance Estimator
                  </Link>
                  {" "}and{" "}
                  <Link href={CHILDCARE_TOOL_PATH} className={crossLinkClass}>
                    Childcare Cost Estimator
                  </Link>
                  .
                </p>
              </div>
              <div className="col-span-full mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {emergenciesSafetyToolCards.map((tool) => (
                  <ToolCard
                    key={tool.href}
                    title={tool.title}
                    description={tool.description}
                    href={tool.href}
                    ctaLabel={tool.ctaLabel}
                    icon={<tool.icon className="h-5 w-5" aria-hidden />}
                  />
                ))}
              </div>
              <div className="col-span-full mt-6 rounded-card border border-border bg-surface-raised p-5 shadow-card ring-1 ring-border/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-strong">
                  {emergenciesSafetyRelatedToolsConfig.shortcutEyebrow}
                </p>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                  {emergenciesSafetyRelatedToolsConfig.shortcutTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {emergenciesSafetyRelatedToolsConfig.shortcutBody}
                </p>
                <div className="mt-4">
                  <LivingToolShortcutsGrid tools={[...emergenciesSafetyShortcuts]} />
                </div>
              </div>
            </PillarGuideToolsSection>

            <PillarGuideNextStepsRegion>
              <SectionBlock
                id="related-guides"
                compact
                className={SECTION_SCROLL_MARGIN}
                eyebrow="Keep exploring"
                title="More Living guides that support this page"
                subtitle="Emergency readiness gets easier when it sits inside the same practical Living stack as healthcare, transport, routines, and first-week planning."
              >
                <LivingClusterLinkGrid items={LIVING_CLUSTER_SIBLING_LINKS_EMERGENCIES_SAFETY} />
              </SectionBlock>
            </PillarGuideNextStepsRegion>
          </PillarJourneyStack>
        }
        faq={
          <PillarGuideFaqRegion>
            <SectionBlock
              id="faq"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="FAQ"
              title="Emergency and safety questions newcomers usually ask first"
              subtitle="Short answers for the practical questions that usually come up first."
            >
              <Accordion
                items={emergenciesSafetyFaq.map((item) => ({
                  id: item.id,
                  title: item.question,
                  content: item.answer,
                }))}
                tone="copilot"
                density="comfortable"
              />
              <OfficialSourcesBlock />
            </SectionBlock>
          </PillarGuideFaqRegion>
        }
      />
    </>
  );
}
