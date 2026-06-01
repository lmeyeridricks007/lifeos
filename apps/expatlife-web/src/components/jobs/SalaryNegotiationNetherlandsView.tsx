import { Children, type ReactNode } from "react";
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
  Handshake,
  Landmark,
  MapPin,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  TrendingUp,
  WalletCards,
  XCircle,
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
import { SalaryNegotiationRecommendedServices } from "@/src/components/jobs/SalaryNegotiationRecommendedServices";
import {
  salaryNegotiationNetherlandsPage as page,
  type SalaryNegotiationNetherlandsLink,
} from "./salaryNegotiationNetherlandsPageModel";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const linkIcons = [Calculator, ReceiptText, BadgePercent, FileText, BriefcaseBusiness, ShieldCheck, PiggyBank, Globe2, Handshake, MapPin] as const;
const snapshotIcons = [WalletCards, Handshake, BriefcaseBusiness, BadgePercent, PiggyBank, Globe2] as const;

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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: SalaryNegotiationNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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

function ConceptFlow({ className }: { className?: string }) {
  const icons = [Handshake, BriefcaseBusiness, WalletCards] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? Handshake;
        return (
          <article key={card.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <Icon className="h-6 w-6 text-brand-strong" aria-hidden />
            <h3 className="mt-3 text-base font-bold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
          </article>
        );
      })}
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

function TopicCards() {
  const icons = [WalletCards, BadgePercent, PiggyBank, BriefcaseBusiness, Globe2, MapPin, ReceiptText, Globe2, TrendingUp, FileText, Handshake] as const;
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {page.negotiationTopics.map((topic, index) => {
        const Icon = icons[index % icons.length];
        return (
          <article key={topic.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
            <h3 className="mt-3 text-sm font-bold text-foreground">{topic.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{topic.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function TipsList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((tip) => (
        <li key={tip} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
          <span>{tip}</span>
        </li>
      ))}
    </ul>
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

function CityCard({ city }: { city: (typeof page.cityCards)[number] }) {
  return (
    <Link href={city.href} className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-foreground group-hover:text-link">{city.label}</h3>
        <MapPin className="h-5 w-5 shrink-0 text-brand-strong" aria-hidden />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{city.note}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
        Open city guide <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </Link>
  );
}

function ScenarioCard({ scenario }: { scenario: (typeof page.scenarioCards)[number] }) {
  return (
    <Link href={scenario.href} className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold text-foreground group-hover:text-link">{scenario.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
        Related guide <ArrowRight className="h-3.5 w-3.5" aria-hidden />
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

function CultureLists({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 md:grid-cols-2", className)}>
      <div className={cn("rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Employers often appreciate</p>
        <ul className="mt-4 space-y-3">
          {page.cultureDoItems.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={cn("rounded-2xl border border-amber-100 bg-amber-50/50 p-5 shadow-sm ring-1 ring-amber-100/80", movingNlCardMicroLiftClass)}>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-900">Usually best to avoid</p>
        <ul className="mt-4 space-y-3">
          {page.cultureAvoidItems.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-amber-950">
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RelatedGuidesVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Next-step map"
      title="Turn negotiation into a clear decision"
      rows={[
        { label: "Benchmark", body: "Compare the offer with market and city context before you counter.", Icon: TrendingUp },
        { label: "Calculate", body: "Estimate take-home pay with the net salary calculator.", Icon: Calculator },
        { label: "Plan setup", body: "Use tax, visa and relocation guides for the full picture.", Icon: Globe2 },
      ]}
    />
  );
}

function NegotiationFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Understand gross", body: "Dutch offers are usually quoted gross before payroll deductions.", Icon: BriefcaseBusiness },
    { label: "Estimate net", body: "Model take-home pay before judging whether a counter-offer works.", Icon: Calculator },
    { label: "Compare package", body: "Pension, allowance and relocation can outweigh a small base gap.", Icon: WalletCards },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Offer evaluation</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">From headline salary to realistic decision</h3>
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

export function SalaryNegotiationNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Jobs", item: new URL("/netherlands/moving/working-in-the-netherlands/", baseUrl).toString() },
    { name: "Salary Negotiation", item: new URL(page.path, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Salary negotiation</span>
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
            <nav aria-label="Salary negotiation guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How Salary Negotiation Works in the Netherlands" fullWidth>
                  <p>Salary negotiation exists in the Netherlands, but Dutch negotiation culture is often more direct, practical and structured than in some other countries.</p>
                  <p>Many employers already work within salary bands, prefer realistic negotiation and value transparency and professionalism.</p>
                  <p>Negotiation is normal, but extreme negotiation tactics are usually not well received. This guide helps expats evaluate offers calmly — not aggressive salary hacking or legal advice.</p>
                </SectionIntro>

                <ConceptFlow className="mt-0" />

                <ProcessPanel
                  eyebrow="Practical lens"
                  title="What this guide covers"
                  rowsLayout="wide"
                  rows={[
                    { label: "Culture", body: "How Dutch employers typically expect negotiation to feel.", Icon: Handshake },
                    { label: "Package", body: "What can realistically move beyond base salary.", Icon: BriefcaseBusiness },
                    { label: "Net pay", body: "Why gross headline numbers are incomplete.", Icon: WalletCards },
                  ]}
                />

                <VisualFigure visual={page.infographics.howItWorks} className="mt-0" />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Dutch Salary Negotiation at a Glance" fullWidth>
                  <p>Use these cards as a quick orientation before you respond to an offer or prepare a counter-proposal.</p>
                </SectionIntro>

                <SnapshotCards className="mt-0" />

                <ChecklistBlock title="Before you respond to an offer" items={page.snapshotChecklist} columns={2} className="mt-0" />

                <NegotiationFlowBand className="mt-0" />

                <VisualFigure visual={page.infographics.negotiationSnapshot} className="mt-0" />
              </div>
            </section>

            <section id="what-to-negotiate" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="What Can You Negotiate in the Netherlands?">
                    <p>Not all companies offer flexibility in every area. Ask which components are open for discussion before focusing only on base salary.</p>
                    <p>Dutch employers often expect you to understand the full package — pension and holiday allowance are as important as the headline figure.</p>
                  </SectionIntro>
                  <TipsList items={page.whatToNegotiateTips} />
                  <TopicCards />
                  <VisualFigure visual={page.infographics.whatToNegotiate} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Offer review"
                    title="Questions worth asking HR"
                    rows={[
                      { label: "Gross basis", body: "Monthly or annual? Is holiday allowance included in the quoted figure?", Icon: ReceiptText },
                      { label: "Pension", body: "What is the employer contribution and which scheme applies?", Icon: PiggyBank },
                      { label: "Flex items", body: "Which benefits are standard vs negotiable for this role?", Icon: BriefcaseBusiness },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.whatToNegotiate} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="gross-vs-net" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Why Gross Salary Is Not the Full Picture" fullWidth>
                  <p>Dutch salaries are usually quoted gross. Your actual take-home pay depends on payroll tax, pension deductions, tax credits, 30% ruling eligibility and social contributions.</p>
                  <p>
                    Read the{" "}
                    <Link href="/netherlands/taxes/gross-vs-net-salary/" className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>,{" "}
                    <Link href="/netherlands/taxes/net-salary-netherlands/" className="font-semibold text-link hover:text-link-hover">Net Salary in the Netherlands guide</Link>
                    {" "}and{" "}
                    <Link href="/netherlands/taxes/payroll-tax-netherlands/" className="font-semibold text-link hover:text-link-hover">Payroll Tax guide</Link>.
                  </p>
                </SectionIntro>

                <ul className="grid w-full gap-3 md:grid-cols-2">
                  {page.grossVsNetTips.map((tip) => (
                    <li key={tip} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid w-full gap-4 sm:grid-cols-2">
                  <article className={mutedCardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <BriefcaseBusiness className="h-6 w-6 text-brand-strong" aria-hidden />
                    <h3 className="mt-3 text-base font-bold text-foreground">Gross salary</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">The headline offer before payroll deductions — what recruiters and contracts usually reference.</p>
                  </article>
                  <article className={mutedCardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <WalletCards className="h-6 w-6 text-brand-strong" aria-hidden />
                    <h3 className="mt-3 text-base font-bold text-foreground">Net salary</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">What reaches your bank account after payroll processing — use this for monthly budgeting.</p>
                  </article>
                </div>

                <NegotiationFlowBand className="mt-0" />

                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Salary translation"
                    title="From offer headline to budget"
                    rows={[
                      { label: "Start gross", body: "Use the written offer as your gross starting point.", Icon: BriefcaseBusiness },
                      { label: "Apply payroll", body: "Payroll tax and pension reduce take-home pay.", Icon: ReceiptText },
                      { label: "Plan net", body: "Compare estimated net pay against rent and monthly costs.", Icon: WalletCards },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.grossToNet} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="thirty-ruling" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How the 30% Ruling Can Affect Negotiation" fullWidth>
                  <p>For some international employees, eligibility for the Dutch expat scheme (30% ruling) can significantly affect take-home salary.</p>
                  <p>Expats sometimes negotiate support with the application process, salary structure or relocation support. Eligibility is not automatic and depends on official rules and personal circumstances — do not treat it as guaranteed.</p>
                  <p>
                    See the{" "}
                    <Link href="/netherlands/taxes/30-percent-ruling/" className="font-semibold text-link hover:text-link-hover">30% Ruling guide</Link>
                    {" "}and the{" "}
                    <Link href="/netherlands/taxes/average-salary-netherlands/" className="font-semibold text-link hover:text-link-hover">Average Salary guide</Link>
                    {" "}for broader context.
                  </p>
                </SectionIntro>

                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Expat offers"
                    title="Clarify before you counter"
                    rows={[
                      { label: "Ruling status", body: "Ask whether the employer supports the application — not whether approval is certain.", Icon: BadgePercent },
                      { label: "Gross structure", body: "Understand how the offer is quoted before estimating net pay.", Icon: ReceiptText },
                      { label: "Relocation", body: "Moving support may matter as much as a small base increase.", Icon: Globe2 },
                    ]}
                    note="This is orientation only — not tax or immigration advice."
                  />
                  <VisualFigure visual={page.infographics.thirtyRulingNegotiation} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="culture" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Dutch Negotiation Culture" fullWidth>
                  <p>Dutch workplace culture is often direct, practical, transparent and relatively non-hierarchical. Employers usually appreciate preparation, realistic expectations, market awareness and calm confidence.</p>
                  <p>Think of negotiation as a structured conversation about fit and value — not a battle to “win” the highest number.</p>
                </SectionIntro>

                <CultureLists className="mt-0" />

                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Conversation style"
                    title="How to show up in the discussion"
                    rows={[
                      { label: "Be direct", body: "State your ask clearly and explain the market or role context briefly.", Icon: Handshake },
                      { label: "Stay factual", body: "Use benchmarks and net-pay estimates rather than emotional pressure.", Icon: FileText },
                      { label: "Stay collaborative", body: "Frame requests as solving a mutual fit problem, not issuing demands.", Icon: Globe2 },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.negotiationCulture} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="Common Salary Negotiation Mistakes Expats Make">
                    <p>These pitfalls are common when comparing international offers to Dutch packages without local tax and benefits context.</p>
                    <p>Most are fixable with a net-salary estimate, a city cost check and a written summary of the full package.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {page.mistakeCards.map((card) => (
                      <article key={card.title} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-sm font-bold text-foreground">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
                      </article>
                    ))}
                  </div>
                  <VisualFigure visual={page.infographics.negotiationMistakes} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Quick recovery"
                    title="If you already made one of these mistakes"
                    rows={[
                      { label: "Recalculate net", body: "Run the offer through a net calculator before replying.", Icon: Calculator },
                      { label: "Request clarity", body: "Ask HR for a one-page package breakdown in writing.", Icon: FileText },
                      { label: "Re-prioritize", body: "Focus the next message on two clear, realistic asks.", Icon: Handshake },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.negotiationMistakes} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="total-compensation" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="Total Compensation Matters More Than Base Salary">
                    <p>A Dutch offer may include pension contributions, holiday allowance, mobility budget, bonus, stock or equity, remote work support, training budget and relocation package.</p>
                    <p>A slightly lower gross salary can sometimes result in a better overall package once benefits are included.</p>
                  </SectionIntro>
                  <TipsList items={page.totalCompTips} />
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.totalCompensationItems.map((item) => (
                      <article key={item.title} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                      </article>
                    ))}
                  </div>
                  <VisualFigure visual={page.infographics.totalCompensation} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Package compare"
                    title="Line items to put side by side"
                    rows={[
                      { label: "Cash", body: "Base, bonus targets and signing payments.", Icon: WalletCards },
                      { label: "Recurring benefits", body: "Pension, allowance, mobility and insurance-related perks.", Icon: PiggyBank },
                      { label: "Move support", body: "Relocation, temporary housing and family-related costs.", Icon: Globe2 },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.totalCompensation} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="industry" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="Salary Negotiation Expectations by Industry">
                    <p>Negotiation flexibility varies significantly. Use industry context together with role demand — not outdated copied salary figures.</p>
                    <p>
                      For benchmarks, see the{" "}
                      <Link href="/netherlands/taxes/average-salary-netherlands/" className="font-semibold text-link hover:text-link-hover">Average Salary guide</Link>.
                    </p>
                  </SectionIntro>
                  <TipsList items={page.industryTips} />
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {page.industryCards.map((industry) => (
                      <article key={industry.title} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{industry.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{industry.body}</p>
                      </article>
                    ))}
                  </div>
                  <VisualFigure visual={page.infographics.negotiationByIndustry} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Sector lens"
                    title="Where negotiation usually focuses"
                    rows={[
                      { label: "Corporate tech/finance", body: "Base pay, bonus and sometimes equity or mobility.", Icon: TrendingUp },
                      { label: "Consulting", body: "Title, travel expectations and variable pay.", Icon: BriefcaseBusiness },
                      { label: "Regulated sectors", body: "Scale step, allowances and role grade more than open bidding.", Icon: Landmark },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.negotiationByIndustry} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="scenarios" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="Common Expat Salary Negotiation Scenarios">
                    <p>Your negotiation priorities depend on how you are entering the Dutch labour market.</p>
                    <p>Each scenario below links to a related guide for visa, tax or city context — use them after you understand the offer structure.</p>
                  </SectionIntro>
                  <TipsList items={page.scenarioTips} />
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.scenarioCards.map((scenario) => <ScenarioCard key={scenario.title} scenario={scenario} />)}
                  </div>
                  <VisualFigure visual={page.infographics.expatScenarios} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Scenario triage"
                    title="What to clarify first"
                    rows={[
                      { label: "Visa path", body: "Does the offer meet permit salary rules if applicable?", Icon: ShieldCheck },
                      { label: "Tax setup", body: "Will you need ruling support or cross-border advice?", Icon: BadgePercent },
                      { label: "City fit", body: "Does net pay work after rent and commute in that city?", Icon: MapPin },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.expatScenarios} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="cost-of-living" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="Salary vs Cost of Living">
                    <p>Salary should always be evaluated alongside rent, transport, healthcare, childcare, taxes and commute costs. The same gross offer can feel very different across cities.</p>
                    <p>
                      Explore city guides on the{" "}
                      <Link href="/netherlands/cities/" className="font-semibold text-link hover:text-link-hover">Dutch Cities hub</Link>.
                    </p>
                  </SectionIntro>
                  <CostOfLivingFactorCards />
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.cityCards.map((city) => <CityCard key={city.label} city={city} />)}
                  </div>
                  <VisualFigure visual={page.infographics.offerVsLivingCosts} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <NegotiationFlowBand />
                  <VisualFigure visual={page.infographics.offerVsLivingCosts} className="hidden lg:block lg:sticky lg:top-24" />
                </div>
              </div>
            </section>

            <section id="when-to-negotiate" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="When Should You Negotiate?" fullWidth>
                  <p>Typically after receiving a verbal or written offer and before signing the contract — once you understand the full package.</p>
                  <p>Negotiation should usually be clear, concise and evidence-based. Avoid lengthy back-and-forth over minor points.</p>
                </SectionIntro>

                <ul className="grid w-full gap-3 md:grid-cols-2">
                  {page.whenToNegotiateTips.map((tip) => (
                    <li key={tip} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid w-full gap-4 md:grid-cols-3">
                  {page.whenToNegotiateSteps.map((step) => (
                    <article key={step.step} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Step {step.step}</p>
                      <h3 className="mt-2 text-base font-bold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.body}</p>
                    </article>
                  ))}
                </div>

                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Timing"
                    title="Usually avoid negotiating"
                    rows={[
                      { label: "Too early", body: "Before you have role clarity or a formal offer.", Icon: XCircle },
                      { label: "After signing", body: "Once the contract is signed, changes are harder.", Icon: FileText },
                      { label: "Without data", body: "Before you understand gross, net and benefits.", Icon: Calculator },
                    ]}
                    note="If something material was omitted from the contract, seek HR clarification promptly — that is not the same as re-opening base pay."
                  />
                  <VisualFigure visual={page.infographics.whenToNegotiate} className="mt-0 h-full" />
                </div>
              </div>
            </section>

            <section id="prepare" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="How to Prepare for Salary Negotiation">
                    <p>Decide your priorities before the conversation so the discussion stays focused and professional.</p>
                    <p>Strong preparation usually means market context, a net-pay estimate and a short list of trade-offs you accept.</p>
                  </SectionIntro>
                  <TipsList items={page.prepareTips} />
                  <ChecklistBlock title="Preparation checklist" items={page.preparationChecklist} />
                  <VisualFigure visual={page.infographics.preparation} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Counter-offer draft"
                    title="Keep your ask simple"
                    rows={[
                      { label: "One paragraph", body: "Thank them, state appreciation, then your clear ask.", Icon: FileText },
                      { label: "Two priorities", body: "Lead with the most important item, offer a fallback.", Icon: Handshake },
                      { label: "Evidence", body: "Brief market or net-pay context — not a long justification.", Icon: TrendingUp },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.preparation} className="hidden lg:block lg:sticky lg:top-24" />
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
                    {" "}for gross-to-net context.
                  </p>
                </SectionIntro>

                <NegotiationFlowBand className="mt-0" />

                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch">
                  <ProcessPanel
                    eyebrow="Before calculating"
                    title="Prepare better inputs"
                    rows={page.calculatorToolCta.prepItems.map((item, index) => ({
                      label: item.label,
                      body: item.body,
                      Icon: [FileText, MapPin, BadgePercent][index] ?? FileText,
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
                    <h3 className="text-xl font-bold tracking-tight text-foreground">Estimate take-home before you negotiate</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">Open the Dutch salary net calculator to model gross offers alongside tax and pension assumptions.</p>
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
                  <p>Move from negotiation context into salary benchmarks, take-home pay and expat tax planning.</p>
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
                <SectionIntro title="Professional Services That May Help" fullWidth>
                  <p>Negotiation itself is usually between you and the employer, but recruitment, relocation, tax and immigration specialists may help with specific questions.</p>
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

                <SalaryNegotiationRecommendedServices />

                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.services.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)] lg:items-start">
                <div>
                  <SectionIntro title="Frequently Asked Questions">
                    <p>These answers summarize common negotiation questions for expats. Orientation only — not tax, immigration or legal advice.</p>
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
                  <VisualFigure visual={page.infographics.negotiationMistakes} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Rule of thumb"
                    title="Negotiate with context, not hype"
                    rows={[
                      { label: "Use benchmarks", body: "Check market and city context before countering.", Icon: TrendingUp },
                      { label: "Use calculators", body: "Estimate net pay for your specific offer.", Icon: Calculator },
                      { label: "Use the full package", body: "Pension, allowance and relocation can matter as much as base pay.", Icon: WalletCards },
                    ]}
                    note="This guide is practical orientation — not legal, tax or immigration advice."
                  />
                </div>
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Useful Salary & Employment Resources" fullWidth>
                  <p>Use official and reputable sources for wage data and tax context rather than outdated copied figures.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  {page.officialSources.map((source) => <SourceLink key={source.href} source={source} />)}
                </div>
                <ProcessPanel
                  eyebrow="Source hierarchy"
                  title="What the sources support"
                  rowsLayout="wide"
                  className="w-full"
                  rows={[
                    { label: "CBS wage data", body: "Market research and sector wage context from official statistics.", Icon: TrendingUp },
                    { label: "Government work", body: "Employment rights and working-in-NL orientation.", Icon: Landmark },
                    { label: "Belastingdienst", body: "Payroll tax and income tax context for net pay estimates.", Icon: ReceiptText },
                  ]}
                  note="Wage and tax rules change over time. Always check publication date and whether data is gross or net."
                />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Connect salary negotiation to taxes, relocation and city planning across the Netherlands.</p>
                  <p>Most readers move from this page into net salary calculation, benchmarks or city comparison.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedGuides.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
                </div>
              </div>
            </section>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8")}>
              <SectionIntro title="Explore Next" tone="onDark">
                <p>Move from negotiation into calculation, benchmarks and city comparison.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {page.exploreNextCards.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />)}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
