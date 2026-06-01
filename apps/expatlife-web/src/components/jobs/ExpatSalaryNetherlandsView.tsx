import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
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
import {
  SalaryBenchmarkCtaStrip,
  SalaryBenchmarkDisclaimer,
  SalaryBenchmarkHighlightCards,
  SalaryBenchmarkInline,
  SalaryBenchmarkTable,
} from "@/src/components/taxes/SalaryBenchmarkDisplay";
import { ExpatSalaryRecommendedServices } from "./ExpatSalaryRecommendedServices";
import {
  expatSalaryNetherlandsPage as page,
  type ExpatSalaryNetherlandsLink,
  AVERAGE_SALARY_NETHERLANDS_PATH,
  COST_OF_LIVING_CALCULATOR_PATH,
  DUTCH_SALARY_NET_CALCULATOR_PATH,
  GROSS_VS_NET_SALARY_PATH,
  NET_SALARY_NETHERLANDS_PATH,
  PAYROLL_TAX_NETHERLANDS_PATH,
  RENT_AFFORDABILITY_CALCULATOR_PATH,
  SALARY_NEGOTIATION_NETHERLANDS_PATH,
  TAXES_HUB_PATH,
  HSM_VISA_PATH,
  THIRTY_PERCENT_RULING_PATH,
  THIRTY_PERCENT_RULING_CALCULATOR_PATH,
} from "./expatSalaryNetherlandsPageModel";
import {
  averageSalaryNetherlandsBenchmarks as benchmarks,
} from "./expatSalaryNetherlandsBenchmarks";

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
const snapshotIcons = [Landmark, Users, TrendingUp, WalletCards, BadgePercent, MapPin] as const;

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
  "Data & AI": "tech",
  Healthcare: "healthcare",
  Biotech: "healthcare",
  Academia: "education",
  Logistics: "logistics",
  Marketing: "marketing",
};

const CITY_BENCHMARK_ID: Record<string, string> = {
  Amsterdam: "amsterdam",
  Rotterdam: "rotterdam",
  "The Hague": "the-hague",
  Utrecht: "utrecht",
  Eindhoven: "eindhoven",
  Leiden: "leiden",
  Delft: "delft",
  Haarlem: "amsterdam",
  Groningen: "groningen",
};

const GOOD_SALARY_BENCHMARK_ID: Record<string, string> = {
  "Single professional": "single-randstad",
  Couple: "couple",
  "Family with children": "family",
};

const SCENARIO_ROLE_BENCHMARK_ID: Record<string, string> = {
  "Junior international professional": "entry",
  "Senior software engineer": "swe",
  "Engineering specialist": "mech-eng",
  "Finance professional": "fin-analyst",
  "Academic researcher": "research",
  "International consultant": "consultant",
};

type BenchmarkSectionKey = Exclude<keyof typeof benchmarks, "asOf" | "disclaimer">;

function benchmarkRow(section: BenchmarkSectionKey, id: string) {
  return benchmarks[section].rows.find((row) => row.id === id);
}

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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: ExpatSalaryNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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

function SalaryPlanningSteps({ className }: { className?: string }) {
  const items = [
    { label: "Verify offer", body: "Confirm gross basis, holiday allowance and contract type before comparing.", Icon: FileText },
    { label: "Compare city", body: "Match salary bands against local rent, commute and household needs.", Icon: MapPin },
    { label: "Estimate net", body: "Model take-home pay with pension and 30% ruling assumptions.", Icon: WalletCards },
  ] as const;

  return (
    <div
      className={cn(
        "rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/80 via-white to-slate-50/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6",
        className
      )}
    >
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Salary planning</p>
      <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">From expat offer to monthly budget</h3>
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

function ExpatSalaryFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Understand gross", body: "Dutch offers are usually quoted gross before payroll deductions.", Icon: BriefcaseBusiness },
    { label: "Compare city", body: "The same gross salary can feel different once rent and commute are included.", Icon: MapPin },
    { label: "Model net", body: "Estimate take-home pay before deciding if relocation works financially.", Icon: Calculator },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Offer evaluation</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">From headline salary to realistic budget</h3>
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
      title="Turn expat salary context into action"
      rows={[
        { label: "Benchmark", body: "Compare with average salary, city and industry guides.", Icon: TrendingUp },
        { label: "Calculate", body: "Estimate take-home pay with the net salary calculator.", Icon: Calculator },
        { label: "Plan setup", body: "Use tax, visa and city guides for the full relocation picture.", Icon: Globe2 },
      ]}
    />
  );
}

function ConceptFlow({ className }: { className?: string }) {
  const icons = [Globe2, WalletCards, MapPin] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? Globe2;
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

function SnapshotContextCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.snapshotContextCards.map((card) => (
        <article key={card.label} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-brand-strong">{card.label}</h3>
          <p className="mt-2 text-base font-semibold text-foreground">{card.value}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.note}</p>
        </article>
      ))}
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

function CityCard({ city }: { city: (typeof page.cityComparisons)[number] }) {
  const row = benchmarkRow("cities", CITY_BENCHMARK_ID[city.label] ?? "");
  return (
    <Link href={city.href} className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-foreground group-hover:text-link">{city.label}</h3>
        <MapPin className="h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
      </div>
      <SalaryBenchmarkInline row={row} />
      {"highlights" in city && city.highlights?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {city.highlights.map((highlight) => (
            <span key={highlight} className={CITIES_FUNNEL_INFO_CHIP}>{highlight}</span>
          ))}
        </div>
      ) : null}
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{city.note}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
        Open city guide <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </Link>
  );
}

function SalaryBenchmarkBand() {
  const items = [
    { label: "Benchmark", body: "Start with expat salary context by city, industry and experience.", Icon: TrendingUp },
    { label: "Living costs", body: "Compare rent, transport and household needs before relocating.", Icon: Building2 },
    { label: "Take-home", body: "Estimate net pay before deciding if an expat offer works.", Icon: WalletCards },
  ];

  return (
    <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Expat salary planning</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">From headline offer to monthly budget</h3>
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

function CalculatorCtaPanel() {
  const prepIcons = [FileText, BadgePercent, MapPin] as const;
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
            This guide explains expat salary context. For side-by-side offer comparison, open the standalone Dutch salary net calculator.
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

function CityComparisonCards() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {page.cityComparisons.map((city) => (
        <CityCard key={city.label} city={city} />
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

export function ExpatSalaryNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Jobs", item: new URL("/netherlands/moving/working-in-the-netherlands/", baseUrl).toString() },
    { name: "Expat Salary", item: new URL(page.path, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Expat salary</span>
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
            <nav aria-label="Expat salary guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="What Expats Earn in the Netherlands" fullWidth>
                  <p>International professionals moving to the Netherlands often ask what salary to expect — and whether an offer is competitive for their city, industry and family situation.</p>
                  <p>There is no single expat salary. Outcomes vary by employer route, experience, sector demand, tax setup and housing costs. This guide helps you interpret benchmarks without treating any headline figure as a guarantee.</p>
                  <p>
                    For take-home pay, continue to the{" "}
                    <Link href={NET_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Net Salary guide</Link>
                    {" "}or the{" "}
                    <Link href={DUTCH_SALARY_NET_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">salary net calculator</Link>.
                  </p>
                </SectionIntro>
                <ConceptFlow />
                <ChecklistBlock title="Before you accept an expat offer" items={page.snapshotChecklist} columns={2} className="mt-0" />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Practical lens"
                    title="What this guide covers"
                    rowsLayout="wide"
                    rows={[
                      { label: "Market context", body: "How expat salaries differ from national averages by city and industry.", Icon: TrendingUp },
                      { label: "Tax & visa", body: "HSM thresholds, 30% ruling and gross-vs-net planning.", Icon: BadgePercent },
                      { label: "Living costs", body: "Why the same gross offer can feel different across Dutch cities.", Icon: MapPin },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.expatRoutes} className="mt-0 h-full" />
                </div>
                <SalaryPlanningSteps />
                <SalaryBenchmarkDisclaimer className="mt-0" />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro title="Expat Salary at a Glance" fullWidth>
                <p>Use these anchors as quick orientation before comparing offers, visa thresholds and city living costs.</p>
                <p>
                  Indicative gross bands for {benchmarks.asOf} — professional and knowledge-worker context, not a single expat headline number. Cross-check macro numbers against{" "}
                  <a href="https://www.cbs.nl/en-gb" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">CBS</a>
                  {" "}wage data.
                </p>
              </SectionIntro>

              <SalaryBenchmarkHighlightCards
                rows={benchmarks.national.rows.filter((row) => row.grossAnnualMin > 0).slice(0, 3)}
                className="mt-6"
              />

              <SalaryBenchmarkTable section={benchmarks.national} className="mt-6" />

              <SnapshotCards />

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Expat context</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">
                  Sector and visa benchmarks that international professionals often compare alongside national averages.
                </p>
                <SnapshotContextCards className="mt-4" />
              </div>

              <ExpatSalaryFlowBand className="mt-6" />
              <VisualFigure visual={page.infographics.snapshot} className="mt-6" />
              <SalaryBenchmarkCtaStrip calculatorHref={DUTCH_SALARY_NET_CALCULATOR_PATH} className="mt-6" />
            </section>

            <section id="good-salary" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="What Is a Good Expat Salary?">
                    <p>A good salary depends on household size, city, rent, lifestyle and commute — not the headline gross figure alone.</p>
                    <p>These household profiles are conceptual planning ranges. They are not guarantees about what any specific offer will feel like.</p>
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
                  <SalaryBenchmarkTable section={benchmarks.goodSalary} className="mt-6" />
                  <ChecklistBlock title="Comfort check questions" items={page.goodSalaryChecklist} className="mt-6" />
                  <VisualFigure visual={page.infographics.goodSalary} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Comfort check"
                    title="Ask beyond the headline number"
                    rows={[
                      { label: "Housing", body: "Rent often dominates monthly budgets in major expat hubs.", Icon: Building2 },
                      { label: "Commute", body: "Transport time and cost can change how far salary goes.", Icon: MapPin },
                      { label: "Household", body: "Single, couple and family setups need different planning.", Icon: PiggyBank },
                    ]}
                    note="This page helps you interpret expat salary context. It is not career coaching or immigration advice."
                  />
                  <VisualFigure visual={page.infographics.goodSalary} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="vs-average" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Expat Salary vs Dutch Average">
                    <p>Many expat roles in tech, finance and engineering sit above national medians — but comfort still depends on city rent and household setup.</p>
                    <p>
                      See the{" "}
                      <Link href={AVERAGE_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Average Salary Netherlands guide</Link>
                      {" "}for broader labour market benchmarks beyond expat headlines.
                    </p>
                    <p>
                      Statistics Netherlands publishes wage data regularly. Check{" "}
                      <a href="https://www.cbs.nl/en-gb" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">CBS</a>
                      {" "}for current figures rather than relying on copied numbers from older articles.
                    </p>
                  </SectionIntro>
                  <SalaryBenchmarkTable section={benchmarks.averageVsMedian} showMonthly={false} showNet={false} className="mt-6" />
                  <VisualFigure visual={page.infographics.vsAverage} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Comparison lens"
                    title="Why expat and national figures diverge"
                    rows={[
                      { label: "Sector mix", body: "International hiring clusters in higher-paying knowledge sectors.", Icon: BriefcaseBusiness },
                      { label: "City premium", body: "Randstad roles often pay more — but housing absorbs much of it.", Icon: Building2 },
                      { label: "Package extras", body: "Relocation, pension and 30% ruling change real take-home value.", Icon: ShieldCheck },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.vsAverage} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="industry" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Expat Salaries by Industry" fullWidth>
                  <p>Industry often matters more than headline national averages for international professionals. Two expats in Amsterdam can have very different offers depending on sector demand.</p>
                  <p>
                    Use sector context together with official{" "}
                    <a href="https://www.cbs.nl/en-gb" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">CBS</a>
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
                <VisualFigure visual={page.infographics.industry} className="mt-0" />
              </div>
            </section>

            <section id="cities" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Expat Salaries by City" fullWidth>
                  <p>City salary levels and living costs do not move in lockstep. Compare offers against local rent, commute patterns and lifestyle needs.</p>
                  <p>
                    Use the{" "}
                    <Link href={RENT_AFFORDABILITY_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">rent affordability calculator</Link>
                    {" "}and{" "}
                    <Link href={COST_OF_LIVING_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">cost of living calculator</Link>
                    {" "}alongside city guides below.
                  </p>
                </SectionIntro>
                <CityComparisonCards />
                <SalaryBenchmarkTable section={benchmarks.cities} className="mt-0 w-full" />
                <VisualFigure visual={page.infographics.cities} className="mt-0" />
              </div>
            </section>

            <section id="hsm" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Highly Skilled Migrant Salary Context" fullWidth>
                  <p>The Dutch highly skilled migrant route has salary-related requirements that change regularly. Actual market offers often sit above legal minimums.</p>
                  <p>Always verify current thresholds through the{" "}
                    <a href="https://ind.nl/en/required-amounts-income-requirements" target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-link-hover">IND income requirements page</a>
                    {" "}before relying on copied figures.
                  </p>
                  <p>
                    See the{" "}
                    <Link href={HSM_VISA_PATH} className="font-semibold text-link hover:text-link-hover">Highly Skilled Migrant visa guide</Link>
                    {" "}and{" "}
                    <Link href={THIRTY_PERCENT_RULING_PATH} className="font-semibold text-link hover:text-link-hover">30% Ruling guide</Link>
                    {" "}for related context.
                  </p>
                </SectionIntro>
                <SalaryBenchmarkHighlightCards
                  rows={[
                    benchmarkRow("hsm", "hsm-30plus"),
                    benchmarkRow("cities", "amsterdam"),
                    benchmarkRow("industry", "tech"),
                  ].flatMap((row) => (row ? [row] : []))}
                  className="mt-0 lg:grid-cols-3"
                />
                <SalaryBenchmarkTable section={benchmarks.hsm} showMonthly showNet={false} className="mt-0" />
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Visa vs market"
                    title="Separate legal minimums from competitive offers"
                    rowsLayout="wide"
                    rows={[
                      { label: "IND threshold", body: "Legal gross minimums update annually — confirm the figure for your application date.", Icon: Landmark },
                      { label: "Market rate", body: "Tech and finance offers are often well above the statutory HSM floor.", Icon: TrendingUp },
                      { label: "Net planning", body: "Model take-home pay before judging whether an HSM offer works financially.", Icon: Calculator },
                    ]}
                    note="Meeting the minimum threshold does not automatically mean an offer is competitive for your city or lifestyle."
                  />
                  <VisualFigure visual={page.infographics.hsm} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="thirty-ruling" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div className="flex w-full flex-col gap-6">
                  <SectionIntro title="How the 30% Ruling Affects Expat Pay">
                    <p>For some eligible international employees, the 30% ruling can materially improve take-home pay during the qualifying period.</p>
                    <p>
                      Eligibility is not automatic and rules change — read the{" "}
                      <Link href={THIRTY_PERCENT_RULING_PATH} className="font-semibold text-link hover:text-link-hover">30% Ruling guide</Link>
                      {" "}and official Belastingdienst guidance before assuming it applies to your offer.
                    </p>
                  </SectionIntro>
                  <ChecklistBlock title="Before you rely on the 30% ruling in your budget" items={page.thirtyRulingChecklist} columns={1} />
                  <ProcessPanel
                    eyebrow="Tax scheme"
                    title="Three angles on the 30% ruling"
                    rowsLayout="wide"
                    rows={[
                      { label: "Eligibility", body: "Specific distance, expertise and payroll conditions must be met — not every expat qualifies.", Icon: ShieldCheck },
                      { label: "Employer role", body: "Application and payroll setup are handled through your employer and Belastingdienst processes.", Icon: BriefcaseBusiness },
                      { label: "Net impact", body: "Model with and without ruling assumptions when comparing offers.", Icon: WalletCards },
                    ]}
                  />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link href={THIRTY_PERCENT_RULING_CALCULATOR_PATH} className={primaryCtaClass}>
                      Open 30% ruling calculator
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link href={THIRTY_PERCENT_RULING_PATH} className={secondaryCtaClass}>Read 30% ruling guide</Link>
                  </div>
                  <VisualFigure visual={page.infographics.thirtyRuling} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.thirtyRuling} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="gross-vs-net" className={sectionClass}>
              <SectionIntro title="Gross vs Net Expat Salary" fullWidth>
                <p>Dutch employment offers are usually quoted gross. Actual take-home pay depends on payroll tax, pension, social contributions and personal circumstances.</p>
                <p>
                  Read the{" "}
                  <Link href={GROSS_VS_NET_SALARY_PATH} className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>,{" "}
                  <Link href={NET_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Net Salary in the Netherlands guide</Link>
                  {" "}and{" "}
                  <Link href={PAYROLL_TAX_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Payroll Tax guide</Link>.
                </p>
              </SectionIntro>

              <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch">
                <div className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <article className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <BriefcaseBusiness className="h-6 w-6 text-brand-strong" aria-hidden />
                      <h3 className="mt-3 text-base font-bold text-foreground">Gross salary</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">The headline offer number before payroll deductions — usually what recruiters quote.</p>
                    </article>
                    <article className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <WalletCards className="h-6 w-6 text-brand-strong" aria-hidden />
                      <h3 className="mt-3 text-base font-bold text-foreground">Net take-home pay</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">What reaches your bank account after payroll processing — what actually funds rent and daily costs.</p>
                    </article>
                  </div>
                  <div className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "flex flex-1 flex-col p-5 sm:p-6", movingNlCardMicroLiftClass)}>
                    <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Salary translation</p>
                    <h3 className="mt-2 text-lg font-bold text-foreground">From expat offer to budget</h3>
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
                    <Link href={DUTCH_SALARY_NET_CALCULATOR_PATH} className={cn(primaryCtaClass, "mt-5 w-full sm:w-auto")}>
                      Open Dutch salary net calculator
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
                <SalaryBenchmarkBand />
              </div>

              <VisualFigure visual={page.infographics.grossVsNet} className="mt-6" />
              <SalaryBenchmarkCtaStrip calculatorHref={DUTCH_SALARY_NET_CALCULATOR_PATH} className="mt-6" />
            </section>

            <section id="scenarios" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Expat Salary Scenarios" fullWidth>
                  <p>Common professional profiles international workers compare when evaluating Dutch offers. Experience bands below are indicative gross planning ranges.</p>
                </SectionIntro>

                <ul className="grid w-full gap-3 md:grid-cols-2">
                  {page.experienceTips.map((tip) => (
                    <li key={tip} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid w-full gap-4 sm:grid-cols-2">
                  {page.scenarioCards.map((scenario) => {
                    const experienceRow = benchmarkRow("experience", SCENARIO_ROLE_BENCHMARK_ID[scenario.title] ?? "");
                    const roleRow = benchmarkRow("roles", SCENARIO_ROLE_BENCHMARK_ID[scenario.title] ?? "");
                    const row = roleRow ?? experienceRow;
                    return (
                      <article key={scenario.title} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{scenario.title}</h3>
                        <SalaryBenchmarkInline row={row} />
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
                      </article>
                    );
                  })}
                </div>

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

                <SalaryBenchmarkHighlightCards rows={benchmarks.scenarios.rows} className="mt-0" />
                <SalaryBenchmarkTable section={benchmarks.experience} className="mt-0 w-full" />
                <SalaryBenchmarkTable section={benchmarks.scenarios} className="mt-0 w-full" />
                <VisualFigure visual={page.infographics.scenarios} className="mt-0" />
                <SalaryBenchmarkCtaStrip calculatorHref={DUTCH_SALARY_NET_CALCULATOR_PATH} className="mt-0" />
              </div>
            </section>

            <section id="living-costs" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Salary vs Cost of Living for Expats" fullWidth>
                  <p>The same gross salary can feel very different in Amsterdam versus Groningen once rent, transport and household costs are included.</p>
                  <p>
                    Use the{" "}
                    <Link href={COST_OF_LIVING_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">cost of living calculator</Link>
                    {" "}and{" "}
                    <Link href={RENT_AFFORDABILITY_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">rent affordability calculator</Link>
                    {" "}alongside city guides below.
                  </p>
                </SectionIntro>

                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.costOfLivingFactors.map((factor) => (
                    <article key={factor.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-base font-bold text-foreground">{factor.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{factor.body}</p>
                    </article>
                  ))}
                </div>

                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.livingCostCities.map((city) => {
                    const row = benchmarkRow("cities", CITY_BENCHMARK_ID[city.label] ?? "");
                    return (
                      <Link
                        key={city.label}
                        href={city.href}
                        className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}
                      >
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground group-hover:text-link">{city.label}</h3>
                        <SalaryBenchmarkInline row={row} />
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{city.note}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-link">City guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
                      </Link>
                    );
                  })}
                </div>
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ExpatSalaryFlowBand className="mt-0" />
                  <VisualFigure visual={page.infographics.livingCosts} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Common Expat Salary Questions" fullWidth>
                  <p>Quick orientation answers for frequent search questions. Verify rates and tax treatment for your own situation.</p>
                </SectionIntro>
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-start">
                  <QuestionCards className="sm:grid-cols-1 lg:grid-cols-1" />
                  <VisualFigure visual={page.infographics.questions} className="mt-0 lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="negotiation" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div className="flex w-full flex-col gap-6">
                  <SectionIntro title="Negotiating Expat Salary in the Netherlands">
                    <p>Negotiation is common for skilled roles — especially when employers compete for scarce international talent. Focus on total compensation, not the headline base alone.</p>
                    <p>
                      Read the{" "}
                      <Link href={SALARY_NEGOTIATION_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Salary Negotiation guide</Link>
                      {" "}for deeper tactics on pension, holiday allowance and relocation support.
                    </p>
                  </SectionIntro>
                  <TipsList items={page.negotiationTips} />
                  <div className="grid w-full gap-4 sm:grid-cols-2">
                    {page.negotiationTopics.map((topic) => (
                      <article key={topic.title} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{topic.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{topic.body}</p>
                      </article>
                    ))}
                  </div>
                  <ProcessPanel
                    eyebrow="Negotiation checklist"
                    title="Items to clarify before signing"
                    rowsLayout="wide"
                    rows={[
                      { label: "Base salary", body: "Confirm monthly vs annual gross and whether vakantiegeld is included.", Icon: ReceiptText },
                      { label: "Benefits", body: "Pension, bonus, allowance and relocation items change total value.", Icon: PiggyBank },
                      { label: "Tax setup", body: "Ask about 30% ruling process and payroll timing if relevant.", Icon: BadgePercent },
                    ]}
                  />
                  <Link href={SALARY_NEGOTIATION_NETHERLANDS_PATH} className={cn(primaryCtaClass, "w-full sm:w-auto")}>
                    Read full salary negotiation guide
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <VisualFigure visual={page.infographics.negotiation} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.infographics.negotiation} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <SectionIntro eyebrow="Calculator" title={page.calculatorToolCta.title} fullWidth>
                <p>{page.calculatorToolCta.description}</p>
                <p>{page.calculatorToolCta.supportingText}</p>
              </SectionIntro>

              <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch">
                <CalculatorCtaPanel />
                <VisualFigure visual={page.infographics.calculatorFlow} className="mt-0 h-full" />
              </div>
            </section>

            <section id="related-salary-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Salary & Tax Guides" fullWidth>
                  <p>Move from expat salary context into take-home pay, payroll tax and negotiation guides.</p>
                  <p>
                    Start with the{" "}
                    <Link href={TAXES_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
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
                <SectionIntro title="Services That May Help Expats" fullWidth>
                  <p>Salary benchmarking is concept-level, but tax advice, relocation support and immigration help may be useful when an offer depends on visa route, housing or cross-border tax setup.</p>
                  <p>Use professionals for specific questions — this guide helps you interpret context, not replace personalised tax or immigration advice.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.servicesWhenToUse.map((item) => (
                    <article key={item.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                    </article>
                  ))}
                </div>
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <VisualFigure visual={page.infographics.services} className="mt-0 h-full" />
                  <ProcessPanel
                    eyebrow="When to seek help"
                    title="Match the service to your question"
                    rows={[
                      { label: "Offer evaluation", body: "Tax advisors help with 30% ruling and net pay modelling.", Icon: Calculator },
                      { label: "Move planning", body: "Relocation services when salary depends on housing and timing.", Icon: MapPin },
                      { label: "Visa route", body: "Immigration lawyers when salary and permit thresholds are linked.", Icon: Landmark },
                    ]}
                  />
                </div>
                <ExpatSalaryRecommendedServices />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.services.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div className="flex w-full flex-col gap-6">
                  <SectionIntro title="Frequently Asked Questions">
                    <p>These answers summarize common expat salary questions. Orientation only — not tax, payroll or immigration advice.</p>
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
                      { label: "Official data", body: "Check CBS wage statistics and IND thresholds for current figures.", Icon: Landmark },
                      { label: "Your offer", body: "Compare written contract terms against benchmarks and calculators.", Icon: FileText },
                      { label: "Net reality", body: "Model take-home pay before committing to relocation.", Icon: Calculator },
                    ]}
                    note="Expat salary and tax rules change over time. This guide is orientation only — not payroll, tax or immigration advice."
                  />
                </div>
                <VisualFigure visual={page.infographics.questions} className="lg:sticky lg:top-24" />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Official Sources" fullWidth>
                  <p>Use official government and statistics sources for current wage data, immigration thresholds and tax context rather than outdated copied numbers.</p>
                  <p>Official salary thresholds, immigration requirements and tax rules may change regularly and should always be verified through government sources.</p>
                </SectionIntro>
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-start">
                  <div className="grid w-full gap-4 sm:grid-cols-2">
                    {page.officialSources.map((source) => (
                      <SourceLink key={source.href} source={source} />
                    ))}
                  </div>
                  <div className="grid gap-6">
                    <ProcessPanel
                      eyebrow="Source hierarchy"
                      title="What the sources support"
                      rows={[
                        { label: "CBS wage data", body: "National and sector wage context from official statistics.", Icon: TrendingUp },
                        { label: "IND thresholds", body: "Highly skilled migrant salary requirements.", Icon: Landmark },
                        { label: "Belastingdienst", body: "Payroll tax, income tax and 30% ruling context.", Icon: ReceiptText },
                      ]}
                      note="Wage figures change over time. Always check publication date and whether data is gross, net or hourly."
                    />
                    <VisualFigure visual={page.infographics.expatRoutes} className="mt-0 lg:sticky lg:top-24" />
                  </div>
                </div>
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Connect expat salary context to taxes, visa routes, city planning and negotiation across the Netherlands.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
              </div>
            </section>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8")}>
              <SectionIntro title="Explore Next" tone="onDark">
                <p>Move from expat salary into benchmarks, calculators and city comparison.</p>
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
