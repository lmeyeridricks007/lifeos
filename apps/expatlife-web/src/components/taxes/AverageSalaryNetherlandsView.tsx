import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  Landmark,
  MapPin,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  TrendingUp,
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
import { AverageSalaryRecommendedServices } from "./AverageSalaryRecommendedServices";
import {
  averageSalaryNetherlandsPage as page,
  COST_OF_LIVING_CALCULATOR_PATH,
  DUTCH_SALARY_NET_CALCULATOR_PATH,
  EMPLOYMENT_TYPE_SCENARIO_TOOL_PATH,
  PAYSLIP_DECODER_PATH,
  RENT_AFFORDABILITY_CALCULATOR_PATH,
  TAXES_TOOLS_HUB_PATH,
  THIRTY_PERCENT_RULING_CALCULATOR_PATH,
  type AverageSalaryNetherlandsLink,
} from "./averageSalaryNetherlandsPageModel";
import { averageSalaryNetherlandsBenchmarks as benchmarks } from "./averageSalaryNetherlandsBenchmarks";
import {
  SalaryBenchmarkCtaStrip,
  SalaryBenchmarkDisclaimer,
  SalaryBenchmarkHighlightCards,
  SalaryBenchmarkInline,
  SalaryBenchmarkTable,
} from "./SalaryBenchmarkDisplay";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const linkIcons = [Calculator, ReceiptText, BadgePercent, FileText, BriefcaseBusiness, ShieldCheck, PiggyBank, Globe2, TrendingUp, MapPin] as const;
const questionIcons = [Calculator, MapPin, Globe2, ReceiptText, PiggyBank, BriefcaseBusiness, TrendingUp] as const;

const EXPERIENCE_BENCHMARK_ID: Record<string, string> = {
  "Entry-level": "entry",
  "Mid-level": "mid",
  "Senior professional": "senior",
  Manager: "manager",
  "Director / specialist expert": "director",
};

const INDUSTRY_BENCHMARK_ID: Record<string, string> = {
  Technology: "tech",
  Engineering: "engineering",
  Finance: "finance",
  Consulting: "consulting",
  Healthcare: "healthcare",
  Education: "education",
  Logistics: "logistics",
  Marketing: "marketing",
  Sales: "sales",
  Legal: "legal",
};

const CITY_BENCHMARK_ID: Record<string, string> = {
  Amsterdam: "amsterdam",
  Rotterdam: "rotterdam",
  "The Hague": "the-hague",
  Utrecht: "utrecht",
  Eindhoven: "eindhoven",
  Leiden: "leiden",
  Delft: "delft",
};

const GOOD_SALARY_BENCHMARK_ID: Record<string, string> = {
  "Single professional": "single-randstad",
  Couple: "couple",
  "Family with children": "family",
};

type BenchmarkSectionKey = Exclude<keyof typeof benchmarks, "asOf" | "disclaimer">;

function benchmarkRow(section: BenchmarkSectionKey, id: string) {
  return benchmarks[section].rows.find((row) => row.id === id);
}

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
  /** When true, intro copy uses the full section width instead of a narrow column. */
  fullWidth?: boolean;
}) {
  const onDark = tone === "onDark";
  return (
    <div className={cn(fullWidth ? "w-full max-w-none" : "max-w-3xl")}>
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div
          className={cn(
            "mt-3 w-full space-y-3 text-base leading-relaxed",
            fullWidth && "max-w-none lg:columns-2 lg:gap-x-10 lg:space-y-3 [&>p]:break-inside-avoid",
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
      <Image
        src={page.hero.image.src}
        alt={page.hero.image.alt}
        width={1600}
        height={900}
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="h-full w-full object-cover"
      />
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
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">
        {visual.caption}
      </figcaption>
    </figure>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: AverageSalaryNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
      <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-100" : isLive ? "text-link group-hover:text-link-hover" : "text-slate-500")}>
        {isLive ? "Open" : "Planned"} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </>
  );

  if (!isLive) return <article className={cn(shell, "opacity-90")}>{body}</article>;
  return (
    <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
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
}: {
  eyebrow: string;
  title: string;
  rows: Array<{ label: string; body: string; Icon: LucideIcon }>;
  note?: string;
  rowsLayout?: "stack" | "wide";
}) {
  return (
    <aside className={cn("w-full", CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5 sm:p-6", movingNlCardMicroLiftClass)}>
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

function ConceptFlow({ layout = "grid" }: { layout?: "grid" | "stack" }) {
  const icons = [TrendingUp, MapPin, WalletCards] as const;
  const stacked = layout === "stack";
  return (
    <div className={cn("grid gap-3", stacked ? "grid-cols-1" : "mt-6 md:grid-cols-3")}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? Calculator;
        return (
          <article key={card.title} className={cn(mutedCardClass, stacked && "flex flex-1 gap-4")}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            {stacked ? (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
            ) : (
              <Icon className="h-6 w-6 text-brand-strong" aria-hidden />
            )}
            <span className={stacked ? "min-w-0" : undefined}>
              <h3 className={cn("text-base font-bold text-foreground", stacked ? undefined : "mt-3")}>{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
            </span>
          </article>
        );
      })}
    </div>
  );
}

function SnapshotContextCards() {
  const icons = [BriefcaseBusiness, MapPin, Landmark] as const;
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {page.snapshotContextCards.map((card, index) => {
        const Icon = icons[index] ?? BriefcaseBusiness;
        return (
          <article key={card.label} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <h3 className="text-sm font-bold text-foreground">{card.label}</h3>
                <p className="mt-1 text-lg font-bold tracking-tight text-brand-strong">{card.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-foreground-muted">{card.note}</p>
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function SalaryPlanningSteps({ className }: { className?: string }) {
  const items = [
    { label: "Benchmark", body: "Start with gross salary context, city and industry.", Icon: TrendingUp },
    { label: "Living costs", body: "Compare rent, transport and household needs.", Icon: Building2 },
    { label: "Take-home", body: "Estimate net pay before deciding if an offer works.", Icon: WalletCards },
  ] as const;

  return (
    <div
      className={cn(
        "rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/80 via-white to-slate-50/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6",
        className
      )}
    >
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Salary planning</p>
      <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">From headline salary to monthly budget</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {items.map(({ label, body, Icon }, index) => (
          <div
            key={label}
            className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]"
          >
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

function CityCard({ city }: { city: (typeof page.cityCards)[number] }) {
  const row = benchmarkRow("cities", CITY_BENCHMARK_ID[city.label] ?? "");
  return (
    <Link href={city.href} className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-foreground group-hover:text-link">{city.label}</h3>
        <MapPin className="h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
      </div>
      <SalaryBenchmarkInline row={row} />
      <div className="mt-3 flex flex-wrap gap-2">
        {city.highlights.map((highlight) => (
          <span key={highlight} className={CITIES_FUNNEL_INFO_CHIP}>{highlight}</span>
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{city.note}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
        Open city guide <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </Link>
  );
}

function ChecklistBlock({
  title,
  items,
  className,
  columns = 1,
}: {
  title: string;
  items: readonly string[];
  className?: string;
  columns?: 1 | 2;
}) {
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

function CalculatorCtaPanel() {
  const prepIcons = [FileText, MapPin, BadgePercent] as const;
  return (
    <aside className="relative flex flex-col overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Before calculating</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight">Prepare better inputs</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {page.calculatorToolCta.prepItems.map((item, index) => {
            const Icon = prepIcons[index] ?? FileText;
            return (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-cyan-100" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.body}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">What you can estimate</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Calculator outputs to expect</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {page.calculatorOutputs.map((output) => (
            <li key={output} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
              <Calculator className="mt-0.5 h-5 w-5 shrink-0 text-cyan-100" aria-hidden />
              <span className="text-sm leading-relaxed text-slate-300">{output}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="text-sm font-semibold text-white">Use the dedicated salary calculator tool</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            This guide explains salary benchmarks and context. For side-by-side offer comparison, open the standalone Dutch salary net calculator.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href={page.calculatorToolCta.primaryCta.href}
              className={cn(primaryCtaClass, "w-full border-white/20 bg-white text-slate-950 hover:bg-slate-100")}
            >
              {page.calculatorToolCta.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={page.calculatorToolCta.secondaryCta.href}
              className={cn(
                secondaryCtaClass,
                "w-full border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/15"
              )}
            >
              {page.calculatorToolCta.secondaryCta.label}
            </Link>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">{page.calculatorToolCta.disclaimer}</p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5">
            {page.relatedCalculators
              .filter((tool) => tool.href !== page.calculatorToolCta.primaryCta.href)
              .map((tool) => (
                <Link key={tool.href} href={tool.href} className="text-sm font-semibold text-cyan-100 hover:text-white">
                  {tool.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function CostOfLivingFactorCards() {
  const icons = [Building2, MapPin, PiggyBank, ShieldCheck] as const;
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {page.costOfLivingFactors.map((factor, index) => {
        const Icon = icons[index] ?? Building2;
        return (
          <article key={factor.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
            <h3 className="mt-3 text-sm font-bold text-foreground">{factor.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{factor.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function SalaryBenchmarkBand() {
  const items = [
    { label: "Benchmark", body: "Start with gross salary context, city and industry.", Icon: TrendingUp },
    { label: "Living costs", body: "Compare rent, transport and household needs.", Icon: Building2 },
    { label: "Take-home", body: "Estimate net pay before deciding if an offer works.", Icon: WalletCards },
  ];

  return (
    <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Salary planning</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">From headline salary to monthly budget</h3>
        <div className="mt-5 grid gap-3">
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
      title="Turn salary context into action"
      rows={[
        { label: "Benchmark", body: "Use this page for city, industry and experience context.", Icon: TrendingUp },
        { label: "Calculate", body: "Estimate take-home pay with the net salary calculator.", Icon: Calculator },
        { label: "Plan setup", body: "Use tax, city and relocation guides for the full picture.", Icon: Globe2 },
      ]}
    />
  );
}

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group relative overflow-hidden block p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span className="text-sm font-bold text-foreground group-hover:text-link">{source.label}</span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
    </a>
  );
}

export function AverageSalaryNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL("/netherlands/taxes/", baseUrl).toString() },
    { name: "Average Salary", item: new URL(page.path, baseUrl).toString() },
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
                    <Link href="/netherlands/taxes/" className="hover:text-foreground">Taxes</Link><span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Average salary</span>
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
            <nav aria-label="Average salary guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="What Is the Average Salary in the Netherlands?" fullWidth>
                  <p>Many expats researching the Netherlands want to understand what people earn, what salary is considered good and whether a job offer is competitive.</p>
                  <p>Average salary figures from Statistics Netherlands (CBS) can be useful, but they do not tell the full story.</p>
                  <p>Salary depends heavily on city, industry, experience, education, employer and international expertise. This guide helps you interpret benchmarks without treating any headline number as a guarantee.</p>
                  <p>
                    For take-home pay, continue to the{" "}
                    <Link href="/netherlands/taxes/net-salary-netherlands/" className="font-semibold text-link hover:text-link-hover">Net Salary guide</Link>
                    {" "}or the{" "}
                    <Link href={page.calculatorToolCta.primaryCta.href} className="font-semibold text-link hover:text-link-hover">salary net calculator</Link>.
                  </p>
                </SectionIntro>

                <ConceptFlow />

                <ChecklistBlock title="Before you compare offers" items={page.snapshotChecklist} columns={2} className="mt-0" />

                <ProcessPanel
                  eyebrow="Benchmark mindset"
                  title="Why averages alone mislead"
                  rowsLayout="wide"
                  rows={[
                    { label: "City effect", body: "Amsterdam and the Randstad often differ from smaller cities.", Icon: MapPin },
                    { label: "Industry effect", body: "Tech, finance and engineering can sit well above national medians.", Icon: BriefcaseBusiness },
                    { label: "Tax reality", body: "Gross salary is not the same as monthly take-home pay.", Icon: WalletCards },
                  ]}
                />
              </div>

              <VisualFigure visual={page.infographics.salaryFactors} className="mt-6" />

              <Link href={page.calculatorToolCta.primaryCta.href} className={cn(primaryCtaClass, "mt-6 w-full sm:w-auto")}>
                {page.calculatorToolCta.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <SalaryBenchmarkDisclaimer className="mt-6" />
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro title="Salary Snapshot" fullWidth>
                <p>National anchors first, then sector and city context. All figures are indicative gross ranges for {benchmarks.asOf}.</p>
                <p>
                  Cross-check macro numbers against{" "}
                  <a href="https://www.cbs.nl/en-gb" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">
                    CBS
                  </a>
                  {" "}wage data. Comfort still depends on city, industry, experience and take-home pay.
                </p>
              </SectionIntro>

              <SalaryBenchmarkHighlightCards
                rows={benchmarks.national.rows.filter((row) => row.grossAnnualMin > 0).slice(0, 3)}
              />

              <SalaryBenchmarkTable section={benchmarks.national} />

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Quick context</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">
                  Sector and visa benchmarks that expats often compare alongside national averages.
                </p>
                <div className="mt-4">
                  <SnapshotContextCards />
                </div>
              </div>

              <SalaryPlanningSteps className="mt-8" />
              <SalaryBenchmarkCtaStrip calculatorHref={DUTCH_SALARY_NET_CALCULATOR_PATH} className="mt-6" />
            </section>

            <section id="good-salary" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="What Is Considered a Good Salary in the Netherlands?">
                    <p>A &ldquo;good salary&rdquo; depends on household size, housing costs, city, lifestyle expectations, commuting and family situation.</p>
                    <p>These profiles are conceptual only. They are not guarantees about what any specific offer will feel like.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {page.goodSalaryProfiles.map((profile) => {
                      const row = benchmarkRow("goodSalary", GOOD_SALARY_BENCHMARK_ID[profile.title] ?? "");
                      return (
                        <article key={profile.title} className={mutedCardClass}>
                          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                          <h3 className="text-base font-bold text-foreground">{profile.title}</h3>
                          <SalaryBenchmarkInline row={row} />
                          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{profile.body}</p>
                        </article>
                      );
                    })}
                  </div>
                  <SalaryBenchmarkTable section={benchmarks.goodSalary} />
                  <ChecklistBlock title="Comfort check questions" items={page.goodSalaryChecklist} />
                  <VisualFigure visual={page.infographics.goodSalaryHouseholds} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Comfort check"
                    title="Ask beyond the headline number"
                    rows={[
                      { label: "Housing", body: "Rent often dominates monthly budgets in major cities.", Icon: Building2 },
                      { label: "Commute", body: "Transport time and cost can change how far salary goes.", Icon: MapPin },
                      { label: "Household", body: "Single, couple and family setups need different planning.", Icon: PiggyBank },
                    ]}
                    note="This page helps you interpret salary context. It is not career coaching or immigration advice."
                  />
                  <VisualFigure visual={page.infographics.goodSalaryHouseholds} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="average-vs-median" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Average Salary vs Median Salary">
                    <p><strong>Average salary</strong> is total salaries divided across workers. <strong>Median salary</strong> is the middle income point where half earn more and half earn less.</p>
                    <p>High earners can distort averages upward. Median figures often give a more realistic picture of what most workers experience.</p>
                    <p>When reading job ads or salary surveys, ask whether the figure is mean or median — and whether it is gross or net.</p>
                    <p>
                      Statistics Netherlands regularly publishes wage and earnings data. Check{" "}
                      <a href="https://www.cbs.nl/en-gb" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">CBS</a>
                      {" "}for current figures rather than relying on copied numbers from older articles.
                    </p>
                  </SectionIntro>
                  <SalaryBenchmarkTable section={benchmarks.averageVsMedian} showMonthly={false} showNet={false} />
                  <VisualFigure visual={page.infographics.averageVsMedian} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Statistics literacy"
                    title="How to read salary data"
                    rows={[
                      { label: "Average", body: "Useful for macro trends, but sensitive to top earners.", Icon: TrendingUp },
                      { label: "Median", body: "Often better for understanding a typical worker.", Icon: ReceiptText },
                      { label: "Source date", body: "Always check when wage data was published.", Icon: Landmark },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.averageVsMedian} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="experience" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Salary Expectations by Experience" fullWidth>
                  <p>Experience, specialization, international expertise and management responsibility all shape salary progression in the Netherlands.</p>
                  <p>Dutch employers often value niche skills and language ability as much as years on paper — especially in international companies.</p>
                </SectionIntro>

                <ul className="grid w-full gap-3 md:grid-cols-2">
                  {page.experienceTips.map((tip) => (
                    <li key={tip} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.experienceLevels.map((level) => {
                    const row = benchmarkRow("experience", EXPERIENCE_BENCHMARK_ID[level.title] ?? "");
                    return (
                      <article key={level.title} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{level.title}</h3>
                        <SalaryBenchmarkInline row={row} />
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{level.body}</p>
                      </article>
                    );
                  })}
                </div>

                <SalaryBenchmarkTable section={benchmarks.experience} className="mt-0 w-full" />

                <ProcessPanel
                  eyebrow="Career lens"
                  title="What usually moves pay up"
                  rowsLayout="wide"
                  rows={[
                    { label: "Specialization", body: "Scarce skills often matter more than generic experience.", Icon: BriefcaseBusiness },
                    { label: "International profile", body: "Language and cross-border expertise can lift offers.", Icon: Globe2 },
                    { label: "Scope", body: "Team size and responsibility can outweigh tenure alone.", Icon: TrendingUp },
                  ]}
                />

                <VisualFigure visual={page.infographics.experienceLadder} className="mt-0" />
              </div>
            </section>

            <section id="industry" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Average Salaries by Industry" fullWidth>
                  <p>Industry often matters more than city alone. Two professionals in Amsterdam can have very different offers depending on sector demand and specialization.</p>
                  <p>
                    Use sector context together with official{" "}
                    <a href="https://www.cbs.nl/en-gb" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">
                      CBS
                    </a>
                    {" "}industry wage data — not outdated copied figures from blog posts.
                  </p>
                </SectionIntro>

                <ul className="grid w-full gap-3 md:grid-cols-2">
                  {page.industryTips.map((tip) => (
                    <li key={tip} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.industryCards.map((industry) => {
                    const row = benchmarkRow("industry", INDUSTRY_BENCHMARK_ID[industry.title] ?? "");
                    return (
                      <article key={industry.title} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{industry.title}</h3>
                        <SalaryBenchmarkInline row={row} />
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{industry.body}</p>
                      </article>
                    );
                  })}
                </div>

                <SalaryBenchmarkTable section={benchmarks.industry} className="mt-0 w-full" />

                <VisualFigure visual={page.infographics.salaryByIndustry} className="mt-0" />
              </div>
            </section>

            <section id="roles" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Average Salaries by Role" fullWidth>
                  <p>Common expat job titles in the Netherlands — mid-level employed bands (roughly 3–7 years). Senior titles, niche skills and the 30% ruling can push offers above these ranges.</p>
                </SectionIntro>
                <SalaryBenchmarkTable section={benchmarks.roles} className="mt-0 w-full" />
                <SalaryBenchmarkCtaStrip calculatorHref={DUTCH_SALARY_NET_CALCULATOR_PATH} />
              </div>
            </section>

            <section id="cities" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Salary Differences Across Dutch Cities" fullWidth>
                  <p>City context matters for both salary levels and living costs. Compare offers against local rent, commute patterns and lifestyle needs.</p>
                  <p>
                    Use the{" "}
                    <Link href={RENT_AFFORDABILITY_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">
                      rent affordability calculator
                    </Link>
                    {" "}and{" "}
                    <Link href={COST_OF_LIVING_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">
                      cost of living calculator
                    </Link>
                    {" "}alongside the bands below.
                  </p>
                </SectionIntro>

                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {page.cityCards.map((city) => (
                    <CityCard key={city.label} city={city} />
                  ))}
                </div>

                <SalaryBenchmarkTable section={benchmarks.cities} className="mt-0 w-full" />

                <VisualFigure visual={page.infographics.salaryByCity} className="mt-0" />
              </div>
            </section>

            <section id="scenarios" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Salary Scenarios at a Glance" fullWidth>
                  <p>Fixed gross offers translated into indicative monthly gross and simplified net annual bands. Use the net salary calculator for your contract, pension and 30% ruling setup.</p>
                </SectionIntro>
                <SalaryBenchmarkHighlightCards rows={benchmarks.scenarios.rows} className="mt-0" />
                <SalaryBenchmarkTable section={benchmarks.scenarios} className="mt-0 w-full" />
                <SalaryBenchmarkCtaStrip calculatorHref={DUTCH_SALARY_NET_CALCULATOR_PATH} />
              </div>
            </section>

            <section id="expats" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Salary Expectations for Expats" fullWidth>
                  <p>Many expats arrive through highly skilled migrant programs, multinational companies, international transfers, tech employers or universities.</p>
                  <p>These salaries may differ significantly from national averages because packages can include relocation support, expat-specific benefits or 30% ruling treatment.</p>
                  <p>
                    Compare gross bands below with estimated net pay, then use the{" "}
                    <Link href="#hsm" className="font-semibold text-link hover:text-link-hover">HSM threshold table</Link>
                    {" "}if your route has a legal minimum salary.
                  </p>
                  <p>
                    Related:{" "}
                    <Link href="/netherlands/taxes/30-percent-ruling/" className="font-semibold text-link hover:text-link-hover">30% Ruling guide</Link>,{" "}
                    <Link href={THIRTY_PERCENT_RULING_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">30% ruling calculator</Link>,{" "}
                    <Link href={EMPLOYMENT_TYPE_SCENARIO_TOOL_PATH} className="font-semibold text-link hover:text-link-hover">employment type scenario tool</Link>
                    {" "}and{" "}
                    <Link href="/netherlands/moving-to-the-netherlands/" className="font-semibold text-link hover:text-link-hover">Moving to the Netherlands</Link>.
                  </p>
                </SectionIntro>

                <SalaryBenchmarkHighlightCards
                  rows={[
                    benchmarkRow("hsm", "hsm-30plus"),
                    benchmarkRow("cities", "amsterdam"),
                    benchmarkRow("industry", "tech"),
                  ].filter((row): row is NonNullable<typeof row> => row != null)}
                  className="mt-0 lg:grid-cols-3"
                />

                <ChecklistBlock title="What shapes expat pay" items={page.expatPoints} columns={2} className="mt-0" />

                <ProcessPanel
                  eyebrow="Expat lens"
                  title="Compare the full package"
                  rowsLayout="wide"
                  rows={[
                    { label: "Base salary", body: "Check whether the figure is gross and annual or monthly.", Icon: BriefcaseBusiness },
                    { label: "Benefits", body: "Pension, allowance and relocation items change real value.", Icon: ShieldCheck },
                    { label: "Tax setup", body: "30% ruling and payroll treatment affect take-home pay.", Icon: BadgePercent },
                  ]}
                />

                <SalaryBenchmarkCtaStrip calculatorHref={DUTCH_SALARY_NET_CALCULATOR_PATH} />

                <VisualFigure visual={page.infographics.expatSalaryRoutes} className="mt-0" />
              </div>
            </section>

            <section id="hsm" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
              <SectionIntro title="Highly Skilled Migrant Salaries" fullWidth>
                <p>The Dutch highly skilled migrant route has salary-related requirements that change regularly. Actual offers vary by role, employer and sector.</p>
                <p>Meeting the minimum threshold does not automatically mean an offer is competitive for your city or lifestyle — compare gross pay, benefits and estimated net salary together.</p>
                <p>Always verify current thresholds through official government sources before relying on any copied figure.</p>
                <p>
                  See the{" "}
                  <Link href="/netherlands/visa/highly-skilled-migrant/" className="font-semibold text-link hover:text-link-hover">Highly Skilled Migrant visa guide</Link>
                  {" "}and the{" "}
                  <Link href="/netherlands/taxes/30-percent-ruling/" className="font-semibold text-link hover:text-link-hover">30% Ruling guide</Link>
                  {" "}for related salary and tax context.
                </p>
              </SectionIntro>

              <SalaryBenchmarkHighlightCards rows={benchmarks.hsm.rows} className="mt-0 lg:grid-cols-3" />

              <SalaryBenchmarkTable section={benchmarks.hsm} showNet={false} className="mt-0" />
              <p className="text-xs leading-relaxed text-foreground-muted">
                IND legal minimum gross monthly thresholds for 2026 (excluding holiday allowance). Annual equivalents are for comparison only — verify on{" "}
                <a href="https://ind.nl/en/required-amounts-income-requirements" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">
                  ind.nl
                </a>
                .
              </p>

              <div
                className={cn(
                  "relative w-full overflow-hidden",
                  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
                  "flex flex-col p-5 sm:p-6",
                  movingNlCardMicroLiftClass
                )}
              >
                <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Offer check</p>
                <h3 className="mt-2 text-lg font-bold text-foreground">Benchmark HSM salary against net pay</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  Minimum thresholds are only one part of the picture. Estimate take-home pay and compare city living costs before you accept an offer.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href={page.calculatorToolCta.primaryCta.href} className={cn(primaryCtaClass, "w-full sm:w-auto")}>
                    {page.calculatorToolCta.primaryCta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <Link href={THIRTY_PERCENT_RULING_CALCULATOR_PATH} className={cn(secondaryCtaClass, "w-full sm:w-auto")}>
                    30% ruling calculator
                  </Link>
                  <Link href="/netherlands/visa/highly-skilled-migrant/" className={cn(secondaryCtaClass, "w-full sm:w-auto")}>
                    HSM visa guide
                  </Link>
                </div>
              </div>

                <ProcessPanel
                  eyebrow="Official checks"
                  title="Do not rely on outdated thresholds"
                  rowsLayout="wide"
                  rows={[
                    { label: "HSM minimums", body: "Salary thresholds are updated annually — confirm the figure that applies on your application date.", Icon: Landmark },
                    { label: "Employer role", body: "Recognized sponsors apply the route through official IND processes.", Icon: BriefcaseBusiness },
                    { label: "Tax context", body: "HSM salary and 30% ruling questions often overlap — model both together.", Icon: BadgePercent },
                  ]}
                  note="Market offers in tech and finance are often well above the legal minimum."
                />

              <VisualFigure visual={page.infographics.hsmSalaryContext} className="mt-0" />
              </div>
            </section>

            <section id="gross-vs-net" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Why Average Salary Is Not Take-Home Pay" fullWidth>
                  <p>Dutch salaries are usually quoted gross. Actual take-home pay depends on payroll tax, pension, social contributions and 30% ruling eligibility.</p>
                  <p>
                    Read the{" "}
                    <Link href="/netherlands/taxes/gross-vs-net-salary/" className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>,{" "}
                    <Link href="/netherlands/taxes/net-salary-netherlands/" className="font-semibold text-link hover:text-link-hover">Net Salary in the Netherlands guide</Link>
                    {" "}and{" "}
                    <Link href="/netherlands/taxes/payroll-tax-netherlands/" className="font-semibold text-link hover:text-link-hover">Payroll Tax guide</Link>.
                  </p>
                </SectionIntro>

              <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
                <div className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <article className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <BriefcaseBusiness className="h-6 w-6 text-brand-strong" aria-hidden />
                      <h3 className="mt-3 text-base font-bold text-foreground">Gross salary</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">The headline offer number before payroll deductions.</p>
                    </article>
                    <article className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <WalletCards className="h-6 w-6 text-brand-strong" aria-hidden />
                      <h3 className="mt-3 text-base font-bold text-foreground">Net salary</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">What reaches your bank account after payroll processing.</p>
                    </article>
                  </div>
                  <div className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "flex flex-1 flex-col p-5 sm:p-6", movingNlCardMicroLiftClass)}>
                    <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Salary translation</p>
                    <h3 className="mt-2 text-lg font-bold text-foreground">From benchmark to budget</h3>
                    <ul className="mt-4 space-y-3">
                      {[
                        "Start with the gross offer or benchmark figure.",
                        "Apply payroll tax, pension and other deductions.",
                        "Compare estimated net pay against rent and monthly costs.",
                      ].map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={page.calculatorToolCta.primaryCta.href} className={cn(primaryCtaClass, "mt-5 w-full sm:w-auto")}>
                      {page.calculatorToolCta.primaryCta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
                <SalaryBenchmarkBand />
              </div>

              <VisualFigure visual={page.infographics.grossToNet} className="mt-0" />
              </div>
            </section>

            <section id="cost-of-living" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="Salary vs Cost of Living">
                    <p>Salary should always be viewed alongside rent, transport, groceries, healthcare and childcare. The same gross offer can feel very different in Amsterdam, Rotterdam or Eindhoven.</p>
                    <p>A higher gross salary in an expensive city does not always mean more monthly flexibility than a moderate salary in a lower-cost city.</p>
                    <p>
                      Use the{" "}
                      <Link href={COST_OF_LIVING_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">
                        expat cost of living calculator
                      </Link>
                      {" "}and{" "}
                      <Link href={RENT_AFFORDABILITY_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">
                        rent affordability calculator
                      </Link>
                      {" "}alongside the{" "}
                      <Link href={page.calculatorToolCta.primaryCta.href} className="font-semibold text-link hover:text-link-hover">
                        salary net calculator
                      </Link>.
                    </p>
                  </SectionIntro>
                  <CostOfLivingFactorCards />
                  <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                    {page.costOfLivingComparisons.map((comparison) => (
                      <article key={comparison.pair} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{comparison.pair}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{comparison.body}</p>
                      </article>
                    ))}
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-foreground-muted">
                    Explore city guides on the{" "}
                    <Link href="/netherlands/cities/" className="font-semibold text-link hover:text-link-hover">Dutch Cities hub</Link>
                    {" "}for housing and lifestyle context.
                  </p>
                  <VisualFigure visual={page.infographics.salaryVsCostOfLiving} className="mt-6 lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.salaryVsCostOfLiving} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="Common Salary Questions Expats Have">
                    <p>These are orientation answers with indicative numbers, not guarantees. See the{" "}
                      <a href="#scenarios" className="font-semibold text-link hover:text-link-hover">salary scenarios</a>
                      {" "}table for €40k–€100k gross bands, or use calculators and city guides for your situation.
                    </p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {page.scenarioQuestions.map((item, index) => {
                      const Icon = questionIcons[index % questionIcons.length];
                      return (
                        <article key={item.q} className={mutedCardClass}>
                          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                          <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
                          <h3 className="mt-3 text-sm font-bold leading-relaxed text-foreground">{item.q}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
                        </article>
                      );
                    })}
                  </div>
                  <VisualFigure visual={page.infographics.expatSalaryQuestions} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Question triage"
                    title="What to clarify first"
                    rows={[
                      { label: "City", body: "Compare the offer against local rent and commute.", Icon: MapPin },
                      { label: "Gross vs net", body: "Confirm whether the number is before or after deductions.", Icon: ReceiptText },
                      { label: "Tax setup", body: "Check pension, ruling and allowance treatment.", Icon: Calculator },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.expatSalaryQuestions} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro eyebrow="Calculator" title={page.calculatorToolCta.title} fullWidth>
                  <p>{page.calculatorToolCta.description}</p>
                  <p>{page.calculatorToolCta.supportingText}</p>
                  <p>
                    Pair the calculator with the{" "}
                    <Link href="/netherlands/taxes/net-salary-netherlands/" className="font-semibold text-link hover:text-link-hover">Net Salary guide</Link>
                    {" "}or browse all{" "}
                    <Link href={TAXES_TOOLS_HUB_PATH} className="font-semibold text-link hover:text-link-hover">tax planning tools</Link>.
                  </p>
                </SectionIntro>

                <CalculatorCtaPanel />

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Related tools</p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">Calculators for salary and cost planning</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.relatedCalculators.map((item, index) => (
                      <LinkCard key={item.href} item={item} iconIndex={index} />
                    ))}
                  </div>
                </div>

                <VisualFigure visual={page.infographics.calculatorFlow} className="mt-0" />
              </div>
            </section>

            <section id="related-salary-guides" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Related Salary & Tax Guides">
                    <p>Move from salary benchmarks into take-home pay, payroll tax and expat tax planning.</p>
                    <p>
                      Start with the{" "}
                      <Link href="/netherlands/taxes/" className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
                      {" "}or open the{" "}
                      <Link href={PAYSLIP_DECODER_PATH} className="font-semibold text-link hover:text-link-hover">payslip decoder</Link>
                      {" "}when you have a Dutch loonstrook to interpret.
                    </p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.relatedSalaryGuides.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
                  </div>
                </div>
                <RelatedGuidesVisualPanel />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Professional Services That May Help" fullWidth>
                  <p>Salary benchmarking is usually concept-level, but tax advice, payroll setup, recruitment and relocation support may help with specific questions.</p>
                  <p>
                    Start with calculators for your own offer, then compare providers below if you need scoped help with tax, payroll or relocation.
                  </p>
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
                <AverageSalaryRecommendedServices />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.services.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
                </div>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="Frequently Asked Questions">
                    <p>These answers summarize common salary questions for expats and international professionals. They are orientation only — not tax, immigration or payroll advice.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {page.faq.map((item) => (
                      <article key={item.q} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{item.q}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
                      </article>
                    ))}
                  </div>
                  <VisualFigure visual={page.infographics.expatSalaryQuestions} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Rule of thumb"
                    title="Benchmarks explain context, not guarantees"
                    rows={[
                      { label: "Use CBS", body: "Check official wage data for current figures.", Icon: Landmark },
                      { label: "Use calculators", body: "Estimate take-home pay for your own offer.", Icon: Calculator },
                      { label: "Use city guides", body: "Compare salary against local living costs.", Icon: MapPin },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.expatSalaryQuestions} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Official Sources" fullWidth>
                  <p>
                    Statistics Netherlands regularly publishes wage and earnings data. Use official sources for current figures rather than outdated copied numbers.
                  </p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  {page.officialSources.map((source) => <SourceLink key={source.href} source={source} />)}
                </div>
                <ProcessPanel
                  eyebrow="Source hierarchy"
                  title="What the sources support"
                  rowsLayout="wide"
                  rows={[
                    { label: "CBS wage data", body: "National and sector wage context from official statistics.", Icon: TrendingUp },
                    { label: "Government minimum wage", body: "Legal floor for eligible workers.", Icon: Landmark },
                    { label: "Belastingdienst", body: "Payroll tax and income tax context.", Icon: ReceiptText },
                  ]}
                  note="Wage figures change over time. Always check publication date and whether data is gross, net or hourly."
                />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Related Guides">
                    <p>Connect salary benchmarking to taxes, relocation and city planning across the Netherlands.</p>
                    <p>Most users move from this page into net salary calculation, city comparison or the broader taxes hub.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.relatedGuides.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
                  </div>
                </div>
                <RelatedGuidesVisualPanel />
              </div>
            </section>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8")}>
              <SectionIntro title="Explore Next" tone="onDark">
                <p>Move from salary benchmarks into calculation, tax planning and city comparison.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.exploreNextCards.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />)}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
