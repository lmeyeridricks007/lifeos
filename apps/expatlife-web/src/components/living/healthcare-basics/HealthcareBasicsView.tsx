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
  LIVING_CLUSTER_SIBLING_LINKS_HEALTHCARE_BASICS,
  LIVING_DAILY_LIFE_PATH,
  LIVING_EMERGENCIES_SAFETY_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_HEALTHCARE_BASICS_PATH,
  LIVING_PILLAR_BREADCRUMB_LABEL,
  LIVING_SHOPPING_GROCERIES_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import { LivingQuickStartCards } from "@/src/components/living/survival-guide/LivingQuickStartCards";
import { LivingSectionNav } from "@/src/components/living/survival-guide/LivingSectionNav";
import { LivingSurvivalMobileToc } from "@/src/components/living/survival-guide/LivingSurvivalMobileToc";
import { LivingToolShortcutsGrid } from "@/src/components/living/survival-guide/LivingToolShortcutsGrid";
import { ContextualAffiliateSection } from "@/src/components/monetization/ContextualAffiliateSection";
import { HealthcareBasicsHeroGraphic } from "./HealthcareBasicsHeroGraphic";
import {
  HEALTHCARE_BASICS_DATE_MODIFIED,
  healthcareBasicsAtAGlance,
  healthcareBasicsCareRoles,
  healthcareBasicsEasierCallout,
  healthcareBasicsEasierCards,
  healthcareBasicsEmergencyCards,
  healthcareBasicsFaq,
  healthcareBasicsGpCallout,
  healthcareBasicsGpCards,
  healthcareBasicsHero,
  healthcareBasicsHowItWorksCards,
  healthcareBasicsInsuranceCards,
  healthcareBasicsEmergencyLanes,
  healthcareBasicsMeta,
  healthcareBasicsQuickStart,
  healthcareBasicsReferences,
  healthcareBasicsRelatedToolsConfig,
  healthcareBasicsSectionNav,
  healthcareBasicsShortcuts,
  healthcareBasicsStartHereCallout,
  healthcareBasicsSurprises,
  healthcareBasicsSurprisesCallout,
  healthcareBasicsSystemFlowSteps,
  healthcareBasicsToolCards,
  type HealthcareInfoCard,
  type HealthcareServiceRole,
} from "./healthcareBasicsContent";

const HEALTH_INSURANCE_GUIDE_PATH = "/netherlands/health-insurance-netherlands/";
const HEALTHCARE_ALLOWANCE_TOOL_PATH = "/netherlands/taxes/tools/healthcare-allowance-estimator/";
const COST_OF_LIVING_TOOL_PATH = "/netherlands/money/tools/cost-of-living-calculator/";
const CHILDCARE_TOOL_PATH = "/netherlands/family/tools/childcare-cost-estimator/";
const FIRST_90_DAYS_GUIDE_PATH = "/netherlands/first-90-days-netherlands/";

const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-32";

const crossLinkClass =
  "font-semibold text-link underline-offset-2 hover:text-link-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded-sm";

const FAQ_SCHEMA = healthcareBasicsFaq.map((item) => ({
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
      {healthcareBasicsAtAGlance.cells.map((cell) => (
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
  const note = healthcareBasicsAtAGlance.note;
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

function SystemFlowGrid() {
  return (
    <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {healthcareBasicsSystemFlowSteps.map((step) => (
        <div
          key={step.title}
          className="rounded-card border border-border/80 bg-surface-raised p-4 shadow-card ring-1 ring-border/10"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">{step.badge}</p>
          <h3 className="mt-2 text-sm font-semibold tracking-tight text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.body}</p>
        </div>
      ))}
    </div>
  );
}

function EmergencyLanesGrid() {
  const toneClass: Record<NonNullable<(typeof healthcareBasicsEmergencyLanes)[number]["tone"]>, string> = {
    default: "border-border/80 bg-surface-raised ring-border/10",
    non_emergency: "border-emerald-200/80 bg-emerald-50/55 ring-emerald-100",
    urgent: "border-amber-200/80 bg-amber-50/60 ring-amber-100",
    emergency: "border-rose-200/80 bg-rose-50/70 ring-rose-100",
  };

  return (
    <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
      {healthcareBasicsEmergencyLanes.map((lane) => (
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

function InfoCard({ card }: { card: HealthcareInfoCard }) {
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

function CareRoleCard({ card }: { card: HealthcareServiceRole }) {
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
    <ol className="grid list-none grid-cols-1 gap-2.5 p-0 sm:grid-cols-2 sm:gap-3" aria-label="Common healthcare surprises for newcomers">
      {healthcareBasicsSurprises.map((item, index) => (
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
      aria-labelledby="healthcare-official-heading"
      className={cn(SECTION_SCROLL_MARGIN, "mt-8 rounded-2xl border-0 bg-slate-50/90 p-6 shadow-inner sm:p-8")}
    >
      <h2 id="healthcare-official-heading" className="text-xl font-bold tracking-tight text-foreground">
        {healthcareBasicsReferences.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{healthcareBasicsReferences.intro}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {healthcareBasicsReferences.links.map((link) => (
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
      <p className="mt-5 text-sm leading-relaxed text-foreground-muted">{healthcareBasicsReferences.footer}</p>
    </section>
  );
}

export function HealthcareBasicsView() {
  const baseUrl = getSiteOrigin();
  const shareUrl = new URL(LIVING_HEALTHCARE_BASICS_PATH, baseUrl).toString();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: LIVING_PILLAR_BREADCRUMB_LABEL, item: new URL(LIVING_SURVIVAL_GUIDE_PATH, baseUrl).toString() },
    { name: "Healthcare Basics", item: new URL(LIVING_HEALTHCARE_BASICS_PATH, baseUrl).toString() },
  ];

  const primaryCtaClass = cn(
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    transitionInteractive,
    activeBrightnessPress
  );

  const sidebar = (
    <LivingSectionNav
      items={healthcareBasicsSectionNav}
      deepLinks={[
        {
          href: LIVING_SURVIVAL_GUIDE_PATH,
          label: "Netherlands Survival Guide",
          description: "Your wider Living hub for first-week priorities, tools, and the everyday context around this page.",
        },
        {
          href: LIVING_DAILY_LIFE_PATH,
          label: "Daily Life Basics",
          description: "The broader setup around local services, routines, apps, and the ordinary systems that make settling in smoother.",
        },
        {
          href: LIVING_ESSENTIAL_APPS_PATH,
          label: "Essential Apps",
          description: "The phone layer for maps, payments, deliveries, and the practical admin habits around everyday Dutch life.",
        },
        {
          href: LIVING_EMERGENCIES_SAFETY_PATH,
          label: "Emergencies & Safety",
          description: "A calm guide to 112, urgent situations, lost items, and the simple first-response habits that sit beside healthcare confidence.",
        },
        {
          href: LIVING_SHOPPING_GROCERIES_PATH,
          label: "Shopping & Groceries",
          description: "A companion Living guide for weekly routines, local services, and the ordinary rhythm around your home setup.",
        },
      ]}
    />
  );

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ArticleJsonLd
        headline={healthcareBasicsMeta.title}
        description={healthcareBasicsMeta.description}
        dateModified={HEALTHCARE_BASICS_DATE_MODIFIED}
        urlPath={LIVING_HEALTHCARE_BASICS_PATH}
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
                    Healthcare Basics
                  </span>
                </nav>
              }
              eyebrow={healthcareBasicsHero.eyebrow}
              title={healthcareBasicsHero.title}
              subtitle={healthcareBasicsHero.subtitle}
              heroMediaSlot={
                <div
                  className={cn(
                    "grid gap-5 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,400px)] md:items-center md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]",
                    sitePillarFramedHeroGutterXClass
                  )}
                >
                  <div className="min-w-0">
                    <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-foreground-muted sm:space-y-2.5 sm:text-[0.9375rem]" role="list">
                      {healthcareBasicsHero.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                      <Link href={healthcareBasicsHero.primaryCta.href} className={primaryCtaClass}>
                        {healthcareBasicsHero.primaryCta.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                      <Link
                        href={healthcareBasicsHero.secondaryCta.href}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                      >
                        {healthcareBasicsHero.secondaryCta.label}
                      </Link>
                    </div>
                    <p className="mt-4 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      Read this alongside{" "}
                      <Link href={LIVING_SURVIVAL_GUIDE_PATH} className={crossLinkClass}>
                        Survival Guide
                      </Link>
                      ,{" "}
                      <Link href={HEALTH_INSURANCE_GUIDE_PATH} className={crossLinkClass}>
                        Health Insurance in the Netherlands
                      </Link>
                      , and{" "}
                      <Link href={HEALTHCARE_ALLOWANCE_TOOL_PATH} className={crossLinkClass}>
                        Healthcare Allowance Estimator
                      </Link>
                      {" "}so the healthcare system stays connected to real setup decisions rather than feeling like a disconnected FAQ. For first-response basics outside the care system, use{" "}
                      <Link href={LIVING_EMERGENCIES_SAFETY_PATH} className={crossLinkClass}>
                        Emergencies & Safety
                      </Link>
                      .
                    </p>
                    <p className="mt-2 text-sm leading-snug text-foreground-muted sm:leading-relaxed">
                      For the wider first-month picture, use{" "}
                      <Link href={FIRST_90_DAYS_GUIDE_PATH} className={crossLinkClass}>
                        First 90 Days
                      </Link>
                      {" "}and{" "}
                      <Link href={LIVING_DAILY_LIFE_PATH} className={crossLinkClass}>
                        Daily Life Basics
                      </Link>
                      . If family planning affects the healthcare setup, the{" "}
                      <Link href={CHILDCARE_TOOL_PATH} className={crossLinkClass}>
                        Childcare Cost Estimator
                      </Link>
                      {" "}helps put care admin inside the broader household picture.
                    </p>
                    <ul
                      className="mt-5 flex list-none flex-wrap gap-2 border-t border-border/80 p-0 pt-5 sm:mt-6 sm:gap-2.5 sm:pt-6"
                      aria-label="Quick healthcare truths"
                    >
                      {healthcareBasicsHero.quickStrip.map(({ icon: Icon, label }) => (
                        <li key={label} className="max-w-full">
                          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/90 bg-surface-raised px-3 py-1.5 text-left text-xs font-medium text-foreground-muted shadow-card ring-1 ring-border/10">
                            <Icon className="h-3.5 w-3.5 shrink-0 text-brand-strong" aria-hidden />
                            {label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <HealthcareBasicsHeroGraphic className="min-w-0 w-full max-w-md justify-self-center sm:max-w-none md:justify-self-end" />
                </div>
              }
              shareUrl={shareUrl}
              pageId={LIVING_HEALTHCARE_BASICS_PATH}
            />
          </PillarGuideHeroRegion>
        }
        atAGlance={
          <PillarGuideAtGlanceRegion>
            <SectionBlock
              id="at-a-glance"
              className={cn(SECTION_SCROLL_MARGIN, "!pt-4 sm:!pt-5 md:!pt-6")}
              eyebrow={healthcareBasicsAtAGlance.eyebrow}
              title={healthcareBasicsAtAGlance.title}
              subtitle={healthcareBasicsAtAGlance.subtitle}
            >
              <AtAGlanceGrid />
              <AtAGlanceNote />
            </SectionBlock>
          </PillarGuideAtGlanceRegion>
        }
        keySections={
          <PillarJourneyStack variant="guide" density="compact">
            <LivingSurvivalMobileToc items={healthcareBasicsSectionNav} />

            <LivingPillarExplorer
              id="explore-living-pillar"
              title="Explore the wider Living pillar"
              subtitle="Healthcare gets easier when it stays connected to the same Living stack: your first-week hub, local routines, practical apps, and the everyday systems around them."
            />

            <SectionRhythmDivider />

            <SectionBlock
              id="start-here"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Start here"
              title="Your first healthcare steps after arriving"
              subtitle="Focus on the setup that reduces stress first. You can learn the deeper details once daily life settles."
            >
              <p className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
                <span className="rounded-full border border-brand/25 bg-brand-muted/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-strong">
                  Priority path
                </span>
                <span className="leading-snug">Insurance clarity, GP awareness, saved emergency info, and one practical local care setup are enough to start well.</span>
              </p>
              <div className="flex flex-col gap-4 sm:gap-5">
                <LivingQuickStartCards phases={healthcareBasicsQuickStart} />
                <ConfidenceCallout {...healthcareBasicsStartHereCallout} />
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="how-it-works"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Core orientation"
              title="How Dutch healthcare works in practice"
              subtitle="The system feels calmer once the main lanes are clear: insurance, GP first, then further care when needed."
            >
              <PracticalChipRow chips={["Insurance matters", "GP first for many issues", "Urgent is not always emergency"]} />
              <SystemFlowGrid />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                In daily life, the system usually feels simpler than it first sounds. The part newcomers most need to understand is not every rule, but the normal route:
                insurance in place, GP first for many issues, then the right next step from there.
              </p>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                If you are still in arrival mode, pair this with{" "}
                <Link href={LIVING_SURVIVAL_GUIDE_PATH} className={crossLinkClass}>
                  Survival Guide
                </Link>
                {" "}for first-week priorities and{" "}
                <Link href={FIRST_90_DAYS_GUIDE_PATH} className={crossLinkClass}>
                  First 90 Days
                </Link>
                {" "}for the wider settling-in timeline.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {healthcareBasicsHowItWorksCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="insurance-basics"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Early admin"
              title="Health insurance basics"
              subtitle="This page orients you to the role of insurance. Use the dedicated insurance and allowance pages when you need the detailed admin side."
            >
              <PracticalChipRow chips={["Arrange early", "Keep details handy", "Use the allowance tool separately"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Dutch health insurance is not just background paperwork. For many residents, it sits close to the center of how care access and costs work, which is why it
                shows up so early in arrival planning.
              </p>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                Use the{" "}
                <Link href={HEALTHCARE_ALLOWANCE_TOOL_PATH} className={crossLinkClass}>
                  Healthcare Allowance Estimator
                </Link>
                {" "}for planning support with premiums, and the{" "}
                <Link href={HEALTH_INSURANCE_GUIDE_PATH} className={crossLinkClass}>
                  Health Insurance guide
                </Link>
                {" "}for a deeper explanation of the insurance side itself. If you want to place premiums and everyday setup inside the rest of your monthly plan,
                the{" "}
                <Link href={COST_OF_LIVING_TOOL_PATH} className={crossLinkClass}>
                  Cost of Living Calculator
                </Link>
                {" "}helps connect healthcare to the wider household budget.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {healthcareBasicsInsuranceCards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <div id="compare-insurers" className={cn(SECTION_SCROLL_MARGIN, "scroll-mt-28 md:scroll-mt-32")}>
              <ContextualAffiliateSection
                config={{ type: "insurance" }}
                pageSlugPath={LIVING_HEALTHCARE_BASICS_PATH}
                className="!py-4 sm:!py-5 md:!py-6"
              />
            </div>

            <SectionRhythmDivider />

            <SectionBlock
              id="gp-huisarts"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Most important role"
              title="The GP (huisarts) and why it matters"
              subtitle="This is the section most likely to make the system click. Once you understand the GP role, Dutch healthcare often feels much less random."
            >
              <PracticalChipRow chips={["First contact", "Register early", "Referrals sit here"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                Many non-emergency questions start with the GP. That can feel different if you are used to going more directly to a specialist or hospital, but it is one of
                the main organizing ideas in Dutch healthcare.
              </p>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                The earlier you understand this, the easier it becomes to decide what to do in an ordinary week, an after-hours problem, or a moment when you are already tired
                and do not want to guess.
              </p>
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {healthcareBasicsGpCards.map((card) => (
                    <InfoCard key={card.title} card={card} />
                  ))}
                </div>
                <ConfidenceCallout {...healthcareBasicsGpCallout} />
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="care-settings"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Which part is for what"
              title="Pharmacies, hospitals, and urgent care"
              subtitle="The goal here is not medical detail. It is simply knowing which part of the system usually handles which kind of need."
            >
              <PracticalChipRow chips={["Pharmacy", "Hospital", "After-hours GP", "Referral logic"]} />
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:mb-5">
                One of the biggest confidence gains is knowing that each part of the system has a different job. That alone removes a lot of second-guessing.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
                {healthcareBasicsCareRoles.map((card) => (
                  <CareRoleCard key={card.title} card={card} />
                ))}
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="emergencies"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Safety-conscious guidance"
              title="Emergencies: what to do and who to contact"
              subtitle="Keep this simple: know the main lanes before you ever need them under stress."
            >
              <PracticalChipRow chips={["112", "After-hours urgent GP", "Non-urgent care", "Prepare once"]} />
              <EmergencyLanesGrid />
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                This section is intentionally high-level. It is here to help you understand the route structure, not to give diagnosis advice. If something feels truly serious or
                life-threatening, prioritize proper emergency help. If you want the broader first-response picture beyond healthcare alone, open{" "}
                <Link href={LIVING_EMERGENCIES_SAFETY_PATH} className={crossLinkClass}>
                  Emergencies & Safety
                </Link>
                .
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {healthcareBasicsEmergencyCards.map((card) => (
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
              subtitle="Most confusion comes from expectation mismatch, not from the system being impossible to understand."
            >
              <PracticalChipRow chips={["GP is central", "Hospital is not always first", "Setup helps a lot"]} />
              <div className="flex flex-col gap-4 sm:gap-5">
                <SurprisesGrid />
                <ConfidenceCallout {...healthcareBasicsSurprisesCallout} />
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <SectionBlock
              id="make-it-easier"
              compact
              className={SECTION_SCROLL_MARGIN}
              eyebrow="Confidence layer"
              title="How to make healthcare easier in daily life"
              subtitle="You are aiming for a workable setup, not perfect expertise. A little structure early removes a lot of future stress."
            >
              <PracticalChipRow chips={["Sort insurance", "Register with a GP", "Save key contacts", "Connect admin to budget"]} />
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                This is the practical version of healthcare confidence: know your first contact, know the emergency lane, keep your details accessible, and stop trying to solve
                every possible scenario in advance.
              </p>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-foreground-muted">
                For family-life setup, use the{" "}
                <Link href={CHILDCARE_TOOL_PATH} className={crossLinkClass}>
                  Childcare Cost Estimator
                </Link>
                {" "}and{" "}
                <Link href="/netherlands/moving-to-netherlands-with-family/" className={crossLinkClass}>
                  Moving to the Netherlands with family
                </Link>
                {" "}guide. If you are still sequencing your arrival tasks,{" "}
                <Link href={FIRST_90_DAYS_GUIDE_PATH} className={crossLinkClass}>
                  First 90 Days
                </Link>
                {" "}keeps healthcare admin inside the wider move plan.
              </p>
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {healthcareBasicsEasierCards.map((card) => (
                    <InfoCard key={card.title} card={card} />
                  ))}
                </div>
                <ConfidenceCallout {...healthcareBasicsEasierCallout} />
              </div>
            </SectionBlock>

            <SectionRhythmDivider />

            <PillarGuideToolsSection
              id="helpful-tools"
              title={healthcareBasicsRelatedToolsConfig.sectionTitle}
              subtitle={healthcareBasicsRelatedToolsConfig.sectionSubtitle}
            >
              <div className="col-span-full max-w-3xl">
                <p className="text-sm leading-relaxed text-foreground-muted">{healthcareBasicsRelatedToolsConfig.intro}</p>
              </div>
              <div className="col-span-full mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {healthcareBasicsToolCards.map((tool) => (
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
                  {healthcareBasicsRelatedToolsConfig.shortcutEyebrow}
                </p>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                  {healthcareBasicsRelatedToolsConfig.shortcutTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {healthcareBasicsRelatedToolsConfig.shortcutBody}
                </p>
                <div className="mt-4">
                  <LivingToolShortcutsGrid tools={[...healthcareBasicsShortcuts]} />
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
                subtitle="Healthcare is easier when it sits inside the same practical Living stack as your routines, services, shopping, and first-week planning."
              >
                <LivingClusterLinkGrid items={LIVING_CLUSTER_SIBLING_LINKS_HEALTHCARE_BASICS} />
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
              title="Healthcare questions newcomers usually ask first"
              subtitle="Short answers for the practical questions that come up before you know the system well."
            >
              <Accordion
                items={healthcareBasicsFaq.map((item) => ({
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
