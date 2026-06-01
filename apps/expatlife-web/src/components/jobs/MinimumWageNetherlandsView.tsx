import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  Landmark,
  MapPin,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
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
import { MinimumWageRecommendedServices } from "@/src/components/jobs/MinimumWageRecommendedServices";
import { SalaryBenchmarkCtaStrip } from "@/src/components/taxes/SalaryBenchmarkDisplay";
import {
  minimumWageNetherlandsPage as page,
  type MinimumWageNetherlandsLink,
  AVERAGE_SALARY_NETHERLANDS_PATH,
  COST_OF_LIVING_CALCULATOR_PATH,
  DUTCH_SALARY_NET_CALCULATOR_PATH,
  GROSS_VS_NET_SALARY_PATH,
  NET_SALARY_NETHERLANDS_PATH,
  PAYROLL_TAX_NETHERLANDS_PATH,
  RENT_AFFORDABILITY_CALCULATOR_PATH,
} from "./minimumWageNetherlandsPageModel";
import { MINIMUM_WAGE_RATES_DISCLAIMER, minimumWageNetherlandsRates as rates } from "./minimumWageNetherlandsRates";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
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
const linkIcons = [BriefcaseBusiness, Calculator, Globe2, ReceiptText, PiggyBank, MapPin, TrendingUp, ShieldCheck] as const;
const snapshotIcons = [Landmark, Users, Clock, TrendingUp, WalletCards, MapPin] as const;

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
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
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
      <Image src={page.hero.image.src} alt={page.hero.image.alt} width={1600} height={900} priority sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden />
    </figure>
  );
}

function VisualFigure({ visual, className }: { visual: (typeof page.infographics)[keyof typeof page.infographics]; className?: string }) {
  return (
    <figure className={cn("overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-xl ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass, className)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft">
        <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-contain" />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">{visual.caption}</figcaption>
    </figure>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: MinimumWageNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = linkIcons[iconIndex % linkIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <div className="flex gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", onDark ? "bg-white/10 text-cyan-100 ring-white/15" : isLive ? "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10" : "bg-slate-100 text-slate-500 ring-slate-200")}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className={cn("text-sm font-bold", onDark ? "text-white" : "text-foreground")}>{item.label}</span>
          {!isLive ? <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300 ring-1 ring-white/10" : "bg-slate-100 text-slate-500")}>Coming soon</span> : null}
          {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
        </span>
      </div>
      {isLive ? <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link")}>Open <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span> : null}
    </>
  );
  if (!isLive) return <div className={shell}>{body}</div>;
  return (
    <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function ProcessPanel({
  eyebrow,
  title,
  rows,
  note,
  rowsLayout = "stack",
  className,
}: {
  eyebrow: string;
  title: string;
  rows: Array<{ label: string; body: string; Icon: LucideIcon }>;
  note?: string;
  rowsLayout?: "stack" | "wide";
  className?: string;
}) {
  return (
    <aside className={cn("w-full", CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5 sm:p-6", movingNlCardMicroLiftClass, className)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <div className={cn("mt-5 grid gap-3", rowsLayout === "wide" && "md:grid-cols-3")}>
        {rows.map(({ label, body, Icon }) => (
          <div key={label} className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">{label}</span>
              <span className="mt-1 block text-sm leading-relaxed text-foreground-muted">{body}</span>
            </span>
          </div>
        ))}
      </div>
      {note ? <p className="mt-4 rounded-2xl bg-amber-50/80 p-4 text-sm leading-relaxed text-amber-950 ring-1 ring-amber-100">{note}</p> : null}
    </aside>
  );
}

function ChecklistBlock({ title, items, columns = 1, className }: { title: string; items: readonly string[]; columns?: 1 | 2; className?: string }) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass,
        className
      )}
    >
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{title}</p>
      <ul className={cn("mt-4 gap-3", columns === 2 ? "grid md:grid-cols-2" : "space-y-3")}>
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WagePlanningSteps({ className }: { className?: string }) {
  const items = [
    { label: "Verify rate", body: "Check Government.nl for current statutory minimum by age.", Icon: Landmark },
    { label: "Living costs", body: "Compare rent, transport and household needs by city.", Icon: Building2 },
    { label: "Take-home", body: "Estimate net pay before deciding if an offer works.", Icon: WalletCards },
  ] as const;

  return (
    <div
      className={cn(
        "rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/80 via-white to-slate-50/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6",
        className
      )}
    >
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Wage planning</p>
      <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">From statutory minimum to monthly budget</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {items.map(({ label, body, Icon }, index) => (
          <div key={label} className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">
                {index + 1}. {label}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-foreground-muted">{body}</span>
            </span>
          </div>
        ))}
      </div>
      <Link href={DUTCH_SALARY_NET_CALCULATOR_PATH} className={cn(primaryCtaClass, "mt-5 w-full sm:w-auto")}>
        Open Dutch salary net calculator
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}

function MinimumWageFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Understand gross", body: "Minimum wage is quoted gross before payroll deductions.", Icon: BriefcaseBusiness },
    { label: "Check age band", body: "Younger workers may have lower statutory minimum levels.", Icon: Users },
    { label: "Model net", body: "Compare take-home pay against rent and city living costs.", Icon: Calculator },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Wage evaluation</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">From statutory minimum to realistic budget</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {items.map(({ label, body, Icon }, index) => (
            <div key={label} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-100 ring-1 ring-white/15">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">{index + 1}. {label}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-300">{body}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function RelatedGuidesVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Next-step map"
      title="Turn minimum wage context into action"
      rows={[
        { label: "Benchmark", body: "Compare with average salary and industry context.", Icon: TrendingUp },
        { label: "Calculate", body: "Estimate take-home pay with the net salary calculator.", Icon: Calculator },
        { label: "Plan setup", body: "Use tax, city and relocation guides for the full picture.", Icon: Globe2 },
      ]}
    />
  );
}

function ConceptFlow({ className }: { className?: string }) {
  const icons = [ShieldCheck, Users, WalletCards] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? ShieldCheck;
        return (
          <article key={card.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function RateHighlightCards({ className }: { className?: string }) {
  const cards = [
    { label: "Adult hourly minimum (21+)", value: rates.indicativeAdultHourlyGross, note: rates.indicativeAdultHourlyNote },
    { label: "Illustrative full-time monthly gross", value: rates.indicativeFullTimeMonthlyGross, note: rates.indicativeFullTimeMonthlyNote },
    { label: "Holiday allowance (typical)", value: `${rates.holidayAllowancePercent}% on top`, note: "Usually paid separately — confirm whether your contract quote includes vakantiegeld." },
  ] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {cards.map((card) => (
        <article key={card.label} className={cn("relative overflow-hidden", CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-4", movingNlCardMicroLiftClass)}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{card.label}</p>
          <p className="mt-2 text-xl font-bold tracking-tight text-foreground">{card.value}</p>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{card.note}</p>
        </article>
      ))}
    </div>
  );
}

function WhatIsKeyFacts({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2", className)}>
      {page.whatIsKeyFacts.map((fact) => (
        <article key={fact.label} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{fact.label}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{fact.value}</p>
        </article>
      ))}
    </div>
  );
}

function WorkedExamples({ examples, className }: { examples: typeof page.monthlyHourlyExamples; className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {examples.map((example) => (
        <article key={example.label} className={cn("relative overflow-hidden", CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-4", movingNlCardMicroLiftClass)}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{example.label}</p>
          <p className="mt-2 text-lg font-bold text-foreground">{example.value}</p>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{example.note}</p>
        </article>
      ))}
    </div>
  );
}

function ExpatScenarioCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 md:grid-cols-3", className)}>
      {page.expatScenarios.map((scenario) => (
        <article key={scenario.title} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground">{scenario.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
        </article>
      ))}
    </div>
  );
}

function VsAverageComparison({ className }: { className?: string }) {
  const { vsAverageSnapshot } = rates;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2", className)}>
      <article className={cn("relative overflow-hidden", CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass)}>
        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
        <ShieldCheck className="h-6 w-6 text-brand-strong" aria-hidden />
        <h3 className="mt-3 text-base font-bold text-foreground">Minimum wage (full-time gross)</h3>
        <p className="mt-2 text-2xl font-bold tracking-tight text-brand-strong">{vsAverageSnapshot.minimumWageFullTimeGross}</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">Legal pay floor for eligible work — age and hours dependent.</p>
      </article>
      <article className={cn("relative overflow-hidden", CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass)}>
        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
        <TrendingUp className="h-6 w-6 text-brand-strong" aria-hidden />
        <h3 className="mt-3 text-base font-bold text-foreground">National average salary (gross)</h3>
        <p className="mt-2 text-2xl font-bold tracking-tight text-brand-strong">{vsAverageSnapshot.averageSalaryNationalGross}</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{vsAverageSnapshot.note}</p>
      </article>
    </div>
  );
}

function SnapshotCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.snapshotCards.map((card, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <article key={card.label} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-brand-strong">{card.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.value}</p>
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function TipsList({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={cn("grid w-full gap-3 md:grid-cols-2", className)}>
      {items.map((tip) => (
        <li key={tip} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
          <span>{tip}</span>
        </li>
      ))}
    </ul>
  );
}

function RatesDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("rounded-xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted", className)}>
      {MINIMUM_WAGE_RATES_DISCLAIMER} Current official rates:{" "}
      <a href={rates.officialSource.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">
        {rates.officialSource.label}
      </a>
      {" "}(as of {rates.asOf} orientation).
    </p>
  );
}

function AgeBandsTable() {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]">
      <p className="border-b border-slate-200/90 bg-slate-50/90 px-4 py-3 text-xs leading-relaxed text-foreground-muted">
        Indicative hourly gross rates from {rates.effectiveFrom} ({rates.asOf} orientation). Verify current figures on{" "}
        <a href={rates.officialSource.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">
          {rates.officialSource.label}
        </a>.
      </p>
      <table className="w-full min-w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200/90 bg-slate-50/90">
            <th className="px-4 py-3 font-bold text-foreground">Age</th>
            <th className="px-4 py-3 font-bold text-foreground">% of adult rate</th>
            <th className="px-4 py-3 font-bold text-foreground">Indicative hourly gross</th>
            <th className="hidden px-4 py-3 font-bold text-foreground md:table-cell">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rates.ageBands.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
              <td className="px-4 py-3 font-semibold text-foreground">{row.label}</td>
              <td className="px-4 py-3 text-foreground-muted">{row.percentOfAdult ?? "—"}</td>
              <td className="px-4 py-3 font-semibold text-brand-strong">{row.indicativeHourlyGross}</td>
              <td className="hidden px-4 py-3 text-foreground-muted md:table-cell">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NetExamplesCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {rates.illustrativeNetExamples.map((example) => (
        <article key={example.id} className={cn("relative overflow-hidden", CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-4", movingNlCardMicroLiftClass)}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{example.label}</p>
          <p className="mt-2 text-xl font-bold tracking-tight text-foreground">{example.grossAnnual}</p>
          <p className="mt-1 text-sm text-foreground-muted">Indicative net: {example.indicativeNet}</p>
          <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{example.note}</p>
        </article>
      ))}
    </div>
  );
}

function CityComparisonCards() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {page.cityComparisons.map((city) => (
        <Link
          key={city.label}
          href={city.href}
          className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}
        >
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground group-hover:text-link">{city.label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{city.note}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-link">City guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
        </Link>
      ))}
    </div>
  );
}

function QuestionCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2", className)}>
      {page.expatQuestions.map((item) => (
        <article key={item.q} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground">{item.q}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
        </article>
      ))}
    </div>
  );
}

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
  return (
    <a href={source.href} target="_blank" rel="noopener noreferrer" className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group relative overflow-hidden block p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span className="text-sm font-bold text-foreground group-hover:text-link">{source.label}</span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
    </a>
  );
}

export function MinimumWageNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Jobs", item: new URL("/netherlands/moving/working-in-the-netherlands/", baseUrl).toString() },
    { name: "Minimum Wage", item: new URL(page.path, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "p-0")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
                <div>
                  <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
                    <Link href="/" className="hover:text-foreground">Home</Link><span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link><span aria-hidden>/</span>
                    <Link href="/netherlands/moving/working-in-the-netherlands/" className="hover:text-foreground">Jobs</Link><span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Minimum wage</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{page.hero.chips.map((chip) => <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>)}</div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>{page.hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                    <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>{page.hero.secondaryCta.label}</Link>
                  </div>
                </div>
                <HeroImage />
              </div>
            </div>
          </section>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white/80 p-3 shadow-sm ring-1 ring-slate-900/[0.03]">
            <nav aria-label="Minimum wage guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How Minimum Wage Works in the Netherlands" fullWidth>
                  <p>The Netherlands has a legal minimum wage designed to ensure employees receive a minimum level of compensation for work. Rates change periodically and depend on age — they may be expressed monthly or hourly.</p>
                  <p>Expats often compare minimum wage with living costs, rent, taxes, student jobs and entry-level employment. This guide explains the system clearly — it is practical orientation, not financial or immigration advice.</p>
                  <p>
                    For take-home pay, continue to the{" "}
                    <Link href={NET_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Net Salary guide</Link>
                    {" "}or the{" "}
                    <Link href={DUTCH_SALARY_NET_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">salary net calculator</Link>.
                  </p>
                </SectionIntro>
                <ConceptFlow />
                <ChecklistBlock title="Before you accept a minimum-wage-level role" items={page.snapshotChecklist} columns={2} className="mt-0" />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Practical lens"
                    title="What this guide covers"
                    rowsLayout="wide"
                    rows={[
                      { label: "Statutory floor", body: "How government minimum wage applies to eligible employees.", Icon: Landmark },
                      { label: "Age bands", body: "Why younger workers may have different minimum levels.", Icon: Users },
                      { label: "Net reality", body: "Why gross minimum wage is not the same as take-home pay.", Icon: WalletCards },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.howItWorks} className="mt-0 h-full" />
                </div>
                <WagePlanningSteps />
                <RatesDisclaimer />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Minimum Wage at a Glance" fullWidth>
                  <p>Use these cards as a quick orientation before comparing contracts, student jobs or part-time offers.</p>
                  <p>Since 2024, Dutch minimum wage is an hourly rate — there is no fixed government monthly amount. Monthly pay follows your contracted hours.</p>
                </SectionIntro>
                <RateHighlightCards />
                <SnapshotCards />
                <MinimumWageFlowBand className="mt-0" />
                <VisualFigure visual={page.infographics.snapshot} className="mt-0" />
              </div>
            </section>

            <section id="what-is" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="What Is the Dutch Minimum Wage?" fullWidth>
                  <p>The Netherlands sets a statutory minimum hourly wage. Employers must pay at least the published rate for eligible employees aged 15 and over.</p>
                  <p>Because minimum wage changes regularly (often in January and sometimes mid-year), always verify current figures on{" "}
                    <a href="https://www.government.nl/topics/minimum-wage" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">Government.nl</a>
                    {" "}rather than relying on copied numbers from older articles.
                  </p>
                </SectionIntro>
                <WhatIsKeyFacts />
                <RatesDisclaimer />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Official rates"
                    title="Where to verify current pay floors"
                    rowsLayout="wide"
                    rows={[
                      { label: "Government.nl", body: "Primary English guidance on minimum wage rules and updates.", Icon: Landmark },
                      { label: "Rijksoverheid", body: "Dutch-language official minimum wage schedules.", Icon: FileText },
                      { label: "Business.gov.nl", body: "Employer compliance context for statutory minimum pay.", Icon: BriefcaseBusiness },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.howItWorks} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="age-based" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Minimum Wage Depends on Age" fullWidth>
                  <p>The Dutch system uses age-based minimum wage levels. Younger workers may receive lower statutory minimums until the full adult rate generally applies from age 21.</p>
                  <p>Illustrative tiers below are for orientation only — confirm the current published schedule on official government sources.</p>
                </SectionIntro>
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <AgeBandsTable />
                  <VisualFigure visual={page.infographics.ageBands} className="mt-0 h-full" />
                </div>
                <RatesDisclaimer />
              </div>
            </section>

            <section id="monthly-hourly" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Monthly Salary vs Hourly Wage" fullWidth>
                  <p>Minimum wage is set hourly. Actual monthly earnings depend on contracted hours, contract type, industry and any overtime or allowance arrangements.</p>
                  <p>Multiply the statutory hourly minimum by your weekly hours, then by ~4.33 for a rough monthly gross — then add holiday allowance if it is quoted separately.</p>
                </SectionIntro>
                <TipsList items={page.monthlyHourlyTips} />
                <WorkedExamples examples={page.monthlyHourlyExamples} />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Contract check"
                    title="Questions to ask before signing"
                    rows={[
                      { label: "Pay basis", body: "Is the offer hourly, weekly or monthly gross?", Icon: ReceiptText },
                      { label: "Hours", body: "How many contracted hours per week — and is overtime paid separately?", Icon: Clock },
                      { label: "Allowance", body: "Is holiday allowance included in the quoted figure?", Icon: PiggyBank },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.hourlyMonthly} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="gross-vs-net" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Gross vs Net Minimum Wage" fullWidth>
                  <p>Minimum wage is usually discussed as gross salary. Actual take-home pay depends on payroll tax, social contributions, pension deductions and individual circumstances.</p>
                  <p>
                    Read the{" "}
                    <Link href={GROSS_VS_NET_SALARY_PATH} className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>,{" "}
                    <Link href={NET_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Net Salary in the Netherlands guide</Link>
                    {" "}and{" "}
                    <Link href={PAYROLL_TAX_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Payroll Tax guide</Link>.
                  </p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  <article className={mutedCardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                      <BriefcaseBusiness className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-3 text-base font-bold text-foreground">Gross minimum wage</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">The statutory headline before payroll deductions.</p>
                  </article>
                  <article className={mutedCardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                      <WalletCards className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-3 text-base font-bold text-foreground">Net take-home pay</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">What reaches your bank account after payroll processing.</p>
                  </article>
                </div>
                <MinimumWageFlowBand className="mt-0" />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Salary translation"
                    title="From gross minimum to budget"
                    rows={[
                      { label: "Start gross", body: "Use the statutory minimum as your gross starting point.", Icon: BriefcaseBusiness },
                      { label: "Apply payroll", body: "Payroll tax and pension reduce take-home pay.", Icon: ReceiptText },
                      { label: "Plan net", body: "Compare estimated net pay against rent and monthly costs.", Icon: WalletCards },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.grossVsNet} className="mt-0 h-full" />
                </div>
                <SalaryBenchmarkCtaStrip calculatorHref={DUTCH_SALARY_NET_CALCULATOR_PATH} className="mt-0" />
              </div>
            </section>

            <section id="after-tax" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Minimum Wage After Tax" fullWidth>
                  <p>Take-home pay depends on tax withholding, payroll setup, pension contributions and personal tax situation. The examples below are illustrative only — not guarantees.</p>
                  <p>Holiday allowance, tax credits and pension opt-outs can shift net pay. Use the calculator with your contract inputs rather than assuming a single fixed net figure.</p>
                </SectionIntro>
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-start">
                  <NetExamplesCards className="sm:grid-cols-1 lg:grid-cols-1" />
                  <VisualFigure visual={page.infographics.afterTax} className="mt-0 h-full" />
                </div>
                <RatesDisclaimer />
                <Link href={DUTCH_SALARY_NET_CALCULATOR_PATH} className={cn(primaryCtaClass, "w-full sm:w-auto")}>
                  Open net salary calculator
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </section>

            <section id="living-costs" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Can You Live on Minimum Wage in the Netherlands?" fullWidth>
                  <p>The answer depends on city, housing costs, shared accommodation, lifestyle and household size. Minimum wage alone is often tight in expensive Randstad cities without additional income or careful budgeting.</p>
                  <p>
                    Use the{" "}
                    <Link href={COST_OF_LIVING_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">cost of living calculator</Link>
                    {" "}and{" "}
                    <Link href={RENT_AFFORDABILITY_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">rent affordability calculator</Link>
                    {" "}alongside city guides below.
                  </p>
                </SectionIntro>
                <TipsList items={page.livingCostsTips} />
                <CityComparisonCards />
                <MinimumWageFlowBand className="mt-0" />
                <VisualFigure visual={page.infographics.livingCosts} className="mt-0" />
              </div>
            </section>

            <section id="expats" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="What Expats Should Know About Minimum Wage" fullWidth>
                  <p>Many expats arrive through highly skilled migrant routes, multinational companies, university positions or internal transfers — salaries are often significantly above minimum wage.</p>
                  <p>However, students, hospitality workers, entry-level employees and newcomers may encounter minimum-wage-level roles. Minimum wage is not the same as visa salary thresholds.</p>
                </SectionIntro>
                <ExpatScenarioCards />
                <TipsList items={page.expatTips} />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Expat checklist"
                    title="Separate minimum wage from visa rules"
                    rows={[
                      { label: "Visa threshold", body: "Highly skilled migrant routes have gross salary requirements — not the statutory minimum.", Icon: Globe2 },
                      { label: "Written offer", body: "Confirm hourly rate, hours and whether holiday allowance is included.", Icon: FileText },
                      { label: "City budget", body: "Model net pay against rent before accepting a lower-paid role.", Icon: MapPin },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.expats} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="students" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Students, Part-Time Jobs and Minimum Wage" fullWidth>
                  <p>Many students work retail, hospitality, delivery or service jobs alongside studies. Actual earnings depend on age, hours worked, employer and contract type.</p>
                </SectionIntro>
                <TipsList items={page.studentTips} />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Student jobs"
                    title="Common part-time contexts"
                    rowsLayout="wide"
                    rows={[
                      { label: "Retail & hospitality", body: "Often hourly contracts at statutory minimum tiers.", Icon: Building2 },
                      { label: "Delivery & logistics", body: "Confirm employment status and hourly minimum compliance.", Icon: MapPin },
                      { label: "Age rules", body: "Youth minimum wage and working-hour limits may apply.", Icon: Users },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.students} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="vs-average" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Minimum Wage vs Average Salary" fullWidth>
                  <p>Minimum wage is the legal floor for eligible work. Average salaries for employed professionals are typically much higher and vary by city, industry and experience.</p>
                  <p>
                    See the{" "}
                    <Link href={AVERAGE_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Average Salary Netherlands guide</Link>
                    {" "}for labour market benchmarks beyond the statutory minimum.
                  </p>
                </SectionIntro>
                <VsAverageComparison />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Labour market context"
                    title="Why the gap matters"
                    rows={[
                      { label: "Legal floor", body: "Minimum wage protects eligible employees — it is not a typical professional salary.", Icon: ShieldCheck },
                      { label: "Market rate", body: "Average salaries reflect city, sector and experience — often well above the floor.", Icon: TrendingUp },
                      { label: "Your offer", body: "Compare written offers against both minimum wage and market benchmarks.", Icon: BriefcaseBusiness },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.vsAverage} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="industries" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Industries Where Minimum Wage Roles Are More Common" fullWidth>
                  <p>Actual wages may vary significantly by employer, CAO (collective labour agreement) and role seniority. These sectors often hire at or near the statutory minimum for entry roles.</p>
                  <p>CAO agreements in some sectors set wages above the legal minimum — always read your contract and sector rules.</p>
                </SectionIntro>
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {page.industryCards.map((industry) => (
                      <article key={industry.title} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{industry.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{industry.body}</p>
                      </article>
                    ))}
                  </div>
                  <VisualFigure visual={page.infographics.industries} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Questions Expats Often Have About Minimum Wage" fullWidth>
                  <p>Quick answers to common search questions. Orientation only — verify rates and tax treatment for your situation.</p>
                </SectionIntro>
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-start">
                  <QuestionCards className="sm:grid-cols-1 lg:grid-cols-1" />
                  <VisualFigure visual={page.infographics.commonQuestions} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro eyebrow="Calculator" title={page.calculatorToolCta.title} fullWidth>
                  <p>{page.calculatorToolCta.description}</p>
                  <p>{page.calculatorToolCta.supportingText}</p>
                </SectionIntro>
                <MinimumWageFlowBand className="mt-0" />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Before calculating"
                    title="Prepare better inputs"
                    rows={page.calculatorToolCta.prepItems.map((item, index) => ({
                      label: item.label,
                      body: item.body,
                      Icon: [FileText, MapPin, ReceiptText][index] ?? FileText,
                    }))}
                    note={page.calculatorToolCta.disclaimer}
                  />
                  <VisualFigure visual={page.infographics.calculatorFlow} className="mt-0 h-full" />
                </div>
              </div>
              <div className="relative mt-7 overflow-hidden rounded-3xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-indigo-50/40 p-6 shadow-expatos-lg ring-1 ring-copilot-primary/[0.08] sm:p-8">
                <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">Model take-home from gross pay</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">Open the Dutch salary net calculator to estimate what may reach your bank account after payroll deductions.</p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[240px] lg:flex-col">
                    <Link href={page.calculatorToolCta.primaryCta.href} className={cn(primaryCtaClass, "w-full sm:w-auto lg:w-full")}>
                      {page.calculatorToolCta.primaryCta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link href={page.calculatorToolCta.secondaryCta.href} className={cn(secondaryCtaClass, "w-full sm:w-auto lg:w-full")}>
                      {page.calculatorToolCta.secondaryCta.label}
                    </Link>
                  </div>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-foreground-muted sm:text-sm">{page.calculatorToolCta.disclaimer}</p>
              </div>
            </section>

            <section id="related-salary-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Salary & Tax Guides" fullWidth>
                  <p>Move from minimum wage context into salary benchmarks, take-home pay and negotiation guides.</p>
                  <p>
                    Start with the{" "}
                    <Link href="/netherlands/taxes/" className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
                    {" "}for the full salary and tax topic map.
                  </p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedSalaryGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Services That May Help Job Seekers" fullWidth>
                  <p>Minimum wage roles still touch payroll, housing and relocation questions. Compare providers below if you need scoped help — not as a substitute for official wage guidance.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-3">
                  {page.servicesWhenToUse.map((item) => (
                    <article key={item.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                    </article>
                  ))}
                </div>
                <MinimumWageRecommendedServices />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.services.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Frequently Asked Questions" fullWidth>
                  <p>These answers summarize common minimum wage questions for expats and international workers. Orientation only — not tax, payroll or immigration advice.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 lg:grid-cols-2">
                  {page.faq.map((item) => (
                    <article key={item.q} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-base font-bold text-foreground">{item.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
                    </article>
                  ))}
                </div>
                <ProcessPanel
                  eyebrow="Rule of thumb"
                  title="When in doubt, verify"
                  rows={[
                    { label: "Official rates", body: "Always check Government.nl for current statutory minimums.", Icon: Landmark },
                    { label: "Payslip", body: "Compare your contract and payslip lines against the published floor.", Icon: ReceiptText },
                    { label: "Net reality", body: "Use the calculator to model take-home before budgeting.", Icon: Calculator },
                  ]}
                  note="Minimum wage and tax rules change over time. This guide is orientation only — not payroll, tax or immigration advice."
                />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Official Sources" fullWidth>
                  <p>The Dutch government publishes official minimum wage rates and updates them periodically. Use these sources for current figures rather than outdated copied numbers.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} />
                  ))}
                </div>
                <ProcessPanel
                  eyebrow="Source hierarchy"
                  title="What the sources support"
                  rowsLayout="wide"
                  rows={[
                    { label: "Government minimum wage", body: "Current statutory rates and age bands.", Icon: Landmark },
                    { label: "Belastingdienst", body: "Payroll tax and income tax context for net pay.", Icon: ReceiptText },
                    { label: "CBS", body: "Broader wage and labour market statistics.", Icon: TrendingUp },
                  ]}
                  note="Minimum wage and tax rules change over time. Always check publication date and whether figures are gross or net."
                />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Connect minimum wage context to taxes, salary benchmarks, negotiation and city planning across the Netherlands.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8")}>
              <SectionIntro title="Explore Next" tone="onDark">
                <p>Move from minimum wage into benchmarks, calculators and city comparison.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {page.exploreNextCards.map((item, index) => (
                  <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
