import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileText,
  Globe2,
  HeartPulse,
  Home,
  Landmark,
  Plane,
  Scale,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  siteGuideColumnPadYClass,
  siteHeroFramedShellClass,
  siteHeroGlowPrimaryClass,
  siteHeroGlowSecondaryClass,
  siteHeroTopAccentClass,
  sitePageCanvasClass,
} from "@/lib/ui/site-shell-identity";
import {
  movingNlCardMicroLiftClass,
  movingNlSectionH2Class,
  movingNlSectionH2OnDarkClass,
  movingNlSignatureGradientClass,
} from "@/lib/ui/moving-nl-pillar-identity";
import {
  citiesFunnelHeroFigureClassName,
  CITIES_FUNNEL_INFO_CHIP,
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import { GuidePremiumVisualFigure } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  guidePremiumCardGridClass,
  guidePremiumIntroStackClass,
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualSpacingClass,
} from "@/lib/ui/guide-premium-page-ui";
import {
  EXIT_READINESS_PATH,
  LEAVING_NL_TAX_PATH,
  RULING_30_PATH,
  leavingNetherlandsJourneyPage as page,
  type LeavingJourneyLink,
} from "./leavingNetherlandsJourneyPageModel";

const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);
const icons = [
  Plane,
  BriefcaseBusiness,
  Home,
  Building2,
  HeartPulse,
  WalletCards,
  Landmark,
  Scale,
  Globe2,
  ClipboardCheck,
  FileText,
  ShieldCheck,
] as const;
const primaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-brand-strong/25 bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);
const secondaryCtaClass = cn(
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-5 py-2.5 text-sm font-semibold text-foreground shadow-card hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
  transitionInteractive,
  activeBrightnessPress
);

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
  fullWidth = false,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tone?: "default" | "onDark";
  fullWidth?: boolean;
}) {
  const onDark = tone === "onDark";
  const useColumnLayout = fullWidth && Children.count(children) > 1;
  return (
    <div className={cn(fullWidth ? "w-full max-w-none" : "max-w-3xl")}>
      {eyebrow ? (
        <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "mt-3 w-full space-y-3 text-base leading-relaxed",
            useColumnLayout && "max-w-none lg:columns-2 lg:gap-x-10 [&>p]:break-inside-avoid",
            onDark ? "text-slate-300" : "text-foreground-muted"
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <div className={cn("absolute inset-x-0 top-0 z-10 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <Image
        src={page.hero.image.src}
        alt={page.hero.image.alt}
        width={1600}
        height={900}
        priority
        unoptimized
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-white/10" aria-hidden />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" aria-hidden />
    </figure>
  );
}

function StatCard({ label, value, iconIndex }: { label: string; value: string; iconIndex: number }) {
  const Icon = icons[iconIndex % icons.length];
  return (
    <article className={cn(mutedCardClass, "min-h-full")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-foreground-muted">{label}</p>
          <p className="mt-1 text-base font-bold leading-snug text-foreground">{value}</p>
        </div>
      </div>
    </article>
  );
}

function FeatureCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = icons[iconIndex % icons.length];
  return (
    <article className={cn(mutedCardClass, "min-h-full")}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
        </div>
      </div>
    </article>
  );
}

function LinkCard({
  item,
  iconIndex = 0,
  tone = "default",
}: {
  item: LeavingJourneyLink;
  iconIndex?: number;
  tone?: "default" | "onDark";
}) {
  const Icon = icons[iconIndex % icons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
  const body = (
    <>
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1.5 rounded-t-2xl",
          isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200"
        )}
        aria-hidden
      />
      <div className="flex gap-3">
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ring-1",
            onDark
              ? "bg-white/10 text-cyan-100 ring-white/15"
              : isLive
                ? "bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong ring-copilot-primary/10"
                : "bg-slate-100 text-slate-500 ring-slate-200"
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className={cn("text-sm font-bold", onDark ? "text-white" : "text-foreground")}>{item.label}</span>
          {item.description ? (
            <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
              {item.description}
            </span>
          ) : null}
        </span>
      </div>
      {isLive ? (
        <span
          className={cn(
            "mt-4 inline-flex items-center gap-1 text-xs font-semibold",
            onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover"
          )}
        >
          Open <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      ) : null}
    </>
  );
  if (!isLive) return <article className={cn(shell, "opacity-90")}>{body}</article>;
  return (
    <Link
      href={item.href}
      className={cn(
        shell,
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
        onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas",
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      {body}
    </Link>
  );
}

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ExampleTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: readonly string[];
  rows: readonly Record<string, string>[];
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="border-b border-slate-200/80 px-5 py-4">
        <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/80 bg-slate-50/80">
              {columns.map((column) => (
                <th key={column} scope="col" className="px-4 py-3 font-bold text-foreground">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`} className="border-b border-slate-100 last:border-0">
                {columns.map((column) => (
                  <td key={column} className="px-4 py-3 leading-relaxed text-foreground-muted">
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PremiumSection({
  id,
  eyebrow,
  title,
  intro,
  visual,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  visual: (typeof page.visuals)[keyof typeof page.visuals];
  children?: ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className={guidePremiumIntroStackClass}>
        <SectionIntro eyebrow={eyebrow} title={title} fullWidth>
          {intro}
        </SectionIntro>
        <div className={guidePremiumVisualSpacingClass}>
          <GuidePremiumVisualFigure visual={visual} />
        </div>
      </div>
      {children ? <div className={guidePremiumSectionDetailStackClass}>{children}</div> : null}
    </section>
  );
}

const crumbs = [
  { name: "Home", item: "/" },
  { name: "Netherlands", item: "/netherlands/" },
  { name: "Move", item: "/netherlands/moving-to-the-netherlands/" },
  { name: page.hero.pageTitle, item: page.path },
];

export function LeavingNetherlandsJourneyView() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "overflow-hidden p-6 shadow-expatos-xl sm:p-8 lg:p-12")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_0.78fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-strong">{page.hero.eyebrow}</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {page.hero.pageTitle}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {page.hero.chips.map((chip) => (
                    <span key={chip} className={cn(CITIES_FUNNEL_INFO_CHIP, "shadow-sm ring-1 ring-slate-900/[0.03]")}>
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>
                    {page.hero.primaryCta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>
                    {page.hero.secondaryCta.label}
                  </Link>
                </div>
                <p className="mt-5 max-w-3xl rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm leading-relaxed text-foreground-muted shadow-sm ring-1 ring-slate-900/[0.03]">
                  Educational orientation only. This page is not legal, tax, immigration or financial advice.
                </p>
              </div>
              <HeroImage />
            </div>
          </section>

          <div className="relative mt-5 grid gap-3 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/82 p-3 shadow-card ring-1 ring-slate-900/[0.03] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-3">
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            {page.snapshotCards.map((card, index) => (
              <StatCard key={card.label} label={card.label} value={card.value} iconIndex={index} />
            ))}
          </div>

          <nav
            className="sticky top-3 z-20 mt-6 flex gap-2 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl"
            aria-label="Leaving the Netherlands journey sections"
          >
            {page.sectionNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
                  transitionInteractive,
                  activeBrightnessPress
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={sectionStackClass}>
            <PremiumSection
              id="intro"
              eyebrow="Core journey"
              title="What Leaving the Netherlands Actually Involves"
              intro={page.introPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
              visual={page.visuals.intro}
            >
              <BulletPanel
                title="This page owns the sequence — not tax depth"
                items={[
                  "Journey sequence: decide → work/housing → BRP → insurance → toeslagen → 30% end → PR checks → tax link → tools → records.",
                  "Tax return / M-form / pension tables live on the leaving-tax guide — summarize here, deep-link there.",
                  "Orientation only: confirm with gemeente, insurer, Belastingdienst, IND and qualified professionals.",
                ]}
              />
            </PremiumSection>

            <PremiumSection
              id="snapshot"
              eyebrow="At a glance"
              title="Exit Snapshot for Expats"
              intro={
                <p>
                  Use this triage view to separate logistics (housing, insurance) from status consequences (PR, permits) and
                  tax depth (dedicated guide).
                </p>
              }
              visual={page.visuals.snapshot}
            >
              <div className={guidePremiumCardGridClass(page.snapshotCards.length)}>
                {page.snapshotCards.map((card, index) => (
                  <StatCard key={card.label} label={card.label} value={card.value} iconIndex={index} />
                ))}
              </div>
            </PremiumSection>

            <PremiumSection
              id="decide"
              eyebrow="Decide & timeline"
              title="Decide Whether — and When — You Are Leaving"
              intro={
                <p>
                  A firm leave date changes which closures you trigger. Soft exploration should not look like a permanent exit
                  in BRP, insurance or permit records.
                </p>
              }
              visual={page.visuals.decide}
            >
              <BulletPanel title="Decision points" items={page.decidePoints} />
              <ExampleTable
                title="Typical exit timeline phases"
                columns={["Phase", "Focus", "Actions"]}
                rows={page.decideTimelineRows.map((row) => ({
                  Phase: row.phase,
                  Focus: row.focus,
                  Actions: row.actions,
                }))}
              />
            </PremiumSection>

            <PremiumSection
              id="job-permit"
              eyebrow="Work & permits"
              title="Job Notice, Layoffs and Permit Implications"
              intro={
                <p>
                  Ending employment can mean searching for a new Dutch role under certain permit rules — or truly exiting the
                  country. Those paths need different admin sequences.
                </p>
              }
              visual={page.visuals.jobPermit}
            >
              <BulletPanel title="Work vs exit orientation" items={page.jobPermitPoints} />
              <ExampleTable
                title="Job and permit scenarios"
                columns={["Profile", "Scenario", "What to check"]}
                rows={page.jobPermitScenarios.map((row) => ({
                  Profile: row.profile,
                  Scenario: row.scenario,
                  "What to check": row.whatToCheck,
                }))}
              />
              <div className={guidePremiumCardGridClass(3)}>
                <LinkCard
                  item={{
                    label: "Highly skilled migrant guide",
                    href: page.relatedGuides[4].href,
                    description: page.relatedGuides[4].description,
                  }}
                  iconIndex={1}
                />
                <LinkCard
                  item={{
                    label: "Layoffs guide",
                    href: page.relatedGuides[6].href,
                    description: page.relatedGuides[6].description,
                  }}
                  iconIndex={2}
                />
                <LinkCard
                  item={{
                    label: "Extensions & changes",
                    href: page.relatedGuides[5].href,
                    description: page.relatedGuides[5].description,
                  }}
                  iconIndex={3}
                />
              </div>
            </PremiumSection>

            <PremiumSection
              id="housing"
              eyebrow="Housing close-out"
              title="Housing and Lease Close-Out"
              intro={
                <p>
                  Lease end dates, inspections and utility cancellations create the paper trail that landlords, insurers and
                  municipalities often expect.
                </p>
              }
              visual={page.visuals.housing}
            >
              <div className={guidePremiumCardGridClass(page.housingCards.length)}>
                {page.housingCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <LinkCard
                item={{
                  label: "Subscriptions & cancellations",
                  href: page.relatedGuides[7].href,
                  description: page.relatedGuides[7].description,
                }}
                iconIndex={4}
              />
            </PremiumSection>

            <PremiumSection
              id="deregister"
              eyebrow="Municipality · BRP"
              title="Municipality Deregistration (Uitschrijving)"
              intro={
                <p>
                  Deregistration from the BRP is one of the most important official date trails when you leave. Many other
                  systems — tax, benefits, insurance — reference it.
                </p>
              }
              visual={page.visuals.deregister}
            >
              <BulletPanel title="Deregistration orientation" items={page.deregisterPoints} />
              <ExampleTable
                title="Deregistration scenarios"
                columns={["Situation", "Timeline", "Practical impact", "Useful record"]}
                rows={page.deregisterScenarios.map((row) => ({
                  Situation: row.situation,
                  Timeline: row.timeline,
                  "Practical impact": row.practicalImpact,
                  "Useful record": row.usefulRecord,
                }))}
              />
              <LinkCard
                item={{
                  label: "Registering your address (arrival companion)",
                  href: page.relatedGuides[8].href,
                  description: page.relatedGuides[8].description,
                }}
                iconIndex={5}
              />
            </PremiumSection>

            <PremiumSection
              id="health-insurance"
              eyebrow="Health insurance stop"
              title="Stopping Dutch Health Insurance Without a Coverage Gap"
              intro={
                <p>
                  Align Dutch policy end dates with destination cover. Get written insurer confirmation and update related
                  toeslagen.
                </p>
              }
              visual={page.visuals.healthInsurance}
            >
              <BulletPanel title="Insurance stop checks" items={page.healthInsurancePoints} />
              <ExampleTable
                title="Healthcare exit scenarios"
                columns={["Scenario", "Timeline", "Practical question", "Records"]}
                rows={page.healthInsuranceScenarios.map((row) => ({
                  Scenario: row.scenario,
                  Timeline: row.timeline,
                  "Practical question": row.practicalQuestion,
                  Records: row.records,
                }))}
              />
            </PremiumSection>

            <PremiumSection
              id="toeslagen"
              eyebrow="Allowances"
              title="Stopping or Updating Toeslagen"
              intro={
                <p>
                  Healthcare, rent, childcare and family benefits often need an explicit update when residence, income or
                  insurance changes.
                </p>
              }
              visual={page.visuals.toeslagen}
            >
              <div className={guidePremiumCardGridClass(page.toeslagenCards.length)}>
                {page.toeslagenCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
            </PremiumSection>

            <PremiumSection
              id="ruling-30"
              eyebrow="30% ruling end"
              title="When the 30% Ruling Ends"
              intro={
                <p>
                  The 30% ruling is a Belastingdienst payroll facility — not an IND permit. Leaving employment or the Dutch
                  payroll context usually ends the facility.
                </p>
              }
              visual={page.visuals.ruling30}
            >
              <div className="grid gap-4 lg:grid-cols-2">
                <BulletPanel title="Facility end orientation" items={page.ruling30Points} />
                <div className="grid gap-4">
                  <LinkCard
                    item={{
                      label: "30% ruling guide",
                      href: RULING_30_PATH,
                      description: "How the facility works while you are still employed.",
                    }}
                    iconIndex={6}
                  />
                  <LinkCard
                    item={{
                      label: "Taxes when leaving",
                      href: LEAVING_NL_TAX_PATH,
                      description: "Exit-year tax interactions with payroll and residency.",
                    }}
                    iconIndex={7}
                  />
                </div>
              </div>
            </PremiumSection>

            <PremiumSection
              id="pr-citizenship"
              eyebrow="Long-term status"
              title="Permanent Residence and Citizenship Consequences"
              intro={
                <p>
                  PR can be sensitive to long absences. Citizenship is a different status. Dual nationals abroad still need
                  country-specific awareness — link deep guides rather than guessing.
                </p>
              }
              visual={page.visuals.prCitizenship}
            >
              <BulletPanel title="Status consequences to map" items={page.prCitizenshipPoints} />
              <div className={guidePremiumCardGridClass(page.prCitizenshipCards.length)}>
                {page.prCitizenshipCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(2)}>
                <LinkCard item={page.relatedGuides[1]} iconIndex={8} />
                <LinkCard item={page.relatedGuides[2]} iconIndex={9} />
              </div>
            </PremiumSection>

            <PremiumSection
              id="tax"
              eyebrow="Tax orientation"
              title="Tax and Residency — Deep-Link, Don’t Duplicate"
              intro={
                <p>
                  Keep this page high-level on tax. Collect dates and payroll records, then open the dedicated leaving-tax
                  guide for residency, final returns, pensions and M-form orientation.
                </p>
              }
              visual={page.visuals.taxBridge}
            >
              <BulletPanel title="What to do here vs there" items={page.taxBridgePoints} />
              <Link
                href={LEAVING_NL_TAX_PATH}
                className={cn(primaryCtaClass, "w-fit")}
              >
                Open taxes when leaving the Netherlands
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </PremiumSection>

            <PremiumSection
              id="tools"
              eyebrow="Leaving tools"
              title="Tools That Help You Sequence the Exit"
              intro={
                <p>
                  Use interactive tools for readiness sequencing and logistics budgeting, then return here for status and tax
                  deep-links.
                </p>
              }
              visual={page.visuals.tools}
            >
              <div className={guidePremiumCardGridClass(page.toolsCards.length)}>
                {page.toolsCards.map((card, index) => (
                  <LinkCard
                    key={card.href}
                    item={{ label: card.title, href: card.href, description: card.body }}
                    iconIndex={index}
                  />
                ))}
              </div>
              <Link href={EXIT_READINESS_PATH} className={cn(secondaryCtaClass, "w-fit")}>
                Run the exit readiness checker
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </PremiumSection>

            <PremiumSection
              id="records"
              eyebrow="Evidence pack"
              title="Records and Evidence Pack Orientation"
              intro={
                <p>
                  Build a file before portal access patterns change. Dates and confirmations matter more than perfect
                  predictions.
                </p>
              }
              visual={page.visuals.records}
            >
              <BulletPanel title="Evidence pack checklist" items={page.recordsChecklist} />
            </PremiumSection>

            <PremiumSection
              id="mistakes"
              eyebrow="Avoidable mistakes"
              title="Common Leaving Mistakes"
              intro={
                <p>
                  Most exit stress comes from assumptions — about insurance, PR, job-search windows or postponing tax
                  records.
                </p>
              }
              visual={page.visuals.mistakes}
            >
              <div className={guidePremiumCardGridClass(page.mistakeCards.length)}>
                {page.mistakeCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
            </PremiumSection>

            <PremiumSection
              id="faq"
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              intro={
                <p>Orientation answers only — verify with official sources for your personal situation.</p>
              }
              visual={page.visuals.faq}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {page.faq.map((item, index) => (
                  <FeatureCard key={item.q} title={item.q} body={item.a} iconIndex={index} />
                ))}
              </div>
            </PremiumSection>

            <section id="sources" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Official sources" title="Trusted Starting Points">
                  <p>{page.sourcesDisclaimer}</p>
                </SectionIntro>
              </div>
              <div className={cn(guidePremiumSectionDetailStackClass, "grid gap-4 md:grid-cols-2 xl:grid-cols-3")}>
                {page.officialSources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      mutedCardClass,
                      "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
                      transitionInteractive,
                      activeBrightnessPress
                    )}
                  >
                    <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                    <span className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-link">
                      <ShieldCheck className="h-4 w-4 text-brand-strong" aria-hidden />
                      {source.label}
                      <ExternalLink className="h-3.5 w-3.5 text-foreground-muted" aria-hidden />
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
                  </a>
                ))}
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Related guides" title="Continue Through the Exit Ecosystem">
                  <p>
                    Jump to tax depth, long-term status, work endings or practical cancellations without losing the journey
                    map.
                  </p>
                </SectionIntro>
              </div>
              <div className={cn(guidePremiumSectionDetailStackClass, guidePremiumCardGridClass(page.relatedGuides.length))}>
                {page.relatedGuides.map((link, index) => (
                  <LinkCard key={link.href} item={link} iconIndex={index} />
                ))}
              </div>
            </section>

            <section className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 p-6 shadow-expatos-xl ring-1 ring-white/10 sm:p-8 lg:p-10">
              <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
              <div className="relative space-y-6">
                <div className={guidePremiumIntroStackClass}>
                  <SectionIntro eyebrow="Explore next" title="Pick Your Next Exit Step" tone="onDark">
                    <p>Tools for sequencing, tax for depth, PR for absence risk — choose by remaining question.</p>
                  </SectionIntro>
                  <div className={guidePremiumVisualSpacingClass}>
                    <GuidePremiumVisualFigure visual={page.visuals.exploreNext} tone="onDark" />
                  </div>
                </div>
                <div className={cn(guidePremiumSectionDetailStackClass, guidePremiumCardGridClass(page.exploreNextCards.length))}>
                  {page.exploreNextCards.map((link, index) => (
                    <LinkCard key={link.href} item={link} iconIndex={index} tone="onDark" />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
