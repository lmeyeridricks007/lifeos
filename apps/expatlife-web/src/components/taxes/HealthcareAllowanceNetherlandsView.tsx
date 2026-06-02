import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  HeartPulse,
  Landmark,
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
import {
  healthcareAllowanceNetherlandsPage as page,
  BONUS_TAX_NETHERLANDS_PATH,
  EXPAT_SALARY_NETHERLANDS_PATH,
  HEALTHCARE_ALLOWANCE_ESTIMATOR_PATH,
  HEALTHCARE_HUB_PATH,
  HEALTH_INSURANCE_NETHERLANDS_PATH,
  TAXES_HUB_PATH,
  type HealthcareAllowanceNetherlandsLink,
} from "./healthcareAllowanceNetherlandsPageModel";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-5 sm:space-y-6 md:space-y-7";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const linkIcons = [HeartPulse, Calculator, ReceiptText, FileText, BriefcaseBusiness, ShieldCheck, PiggyBank, Globe2] as const;
const snapshotIcons = [HeartPulse, Landmark, BriefcaseBusiness, WalletCards, ShieldCheck, Calculator] as const;

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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: HealthcareAllowanceNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
      {isLive ? <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover")}>Open <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span> : null}
    </>
  );
  if (!isLive) return <article className={cn(shell, "opacity-90")}>{body}</article>;
  return (
    <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas", !onDark && movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function TipsPanel({ title = "Key points", items, className, embedded = false }: { title?: string; items: readonly string[]; className?: string; embedded?: boolean }) {
  return (
    <div className={cn(embedded ? "w-full" : cn("w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass), className)}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{title}</p>
      <ul className={cn("mt-4 grid gap-3", items.length >= 4 ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-2")}>
        {items.map((tip) => (
          <li key={tip} className="flex gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessPanel({
  eyebrow,
  title,
  rows,
  note,
  rowsLayout = "stack",
  className,
  embedded = false,
}: {
  eyebrow: string;
  title: string;
  rows: Array<{ label: string; body: string; Icon: LucideIcon }>;
  note?: string;
  rowsLayout?: "stack" | "wide";
  className?: string;
  embedded?: boolean;
}) {
  return (
    <aside className={cn("relative w-full", !embedded && CITIES_FUNNEL_SOFT_COPILOT_SURFACE, !embedded && "overflow-hidden p-5 sm:p-6", !embedded && movingNlCardMicroLiftClass, className)}>
      {!embedded ? <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden /> : null}
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

function SectionGuideBand({ tips, tipsTitle, panel }: { tips?: readonly string[]; tipsTitle?: string; panel?: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string } }) {
  if (!tips?.length && !panel) return null;
  return (
    <div className={cn("relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50/90 via-white to-copilot-bg-soft/40 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative flex flex-col gap-6">
        {tips?.length ? <TipsPanel title={tipsTitle} items={tips} embedded /> : null}
        {panel ? <ProcessPanel {...panel} embedded rowsLayout={panel.rows.length >= 3 ? "wide" : "stack"} className={cn("mt-0", tips?.length && "border-t border-slate-200/80 pt-6")} /> : null}
      </div>
    </div>
  );
}

function ChecklistBlock({ title, items, columns = 2, className }: { title: string; items: readonly string[]; columns?: 1 | 2; className?: string }) {
  return (
    <div className={cn("w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass, className)}>
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

function ConceptFlow({ className }: { className?: string }) {
  const icons = [HeartPulse, Landmark, ShieldCheck] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? HeartPulse;
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

function SnapshotCards() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {page.snapshotCards.map((card, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <article key={card.label} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{card.label}</p>
            <p className="mt-2 text-base font-semibold text-foreground">{card.value}</p>
          </article>
        );
      })}
    </div>
  );
}

function QuestionGrid({ items, compact = false }: { items: readonly { q: string; a: string }[]; compact?: boolean }) {
  return (
    <div className={cn("grid w-full gap-4", compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4")}>
      {items.map((item) => (
        <article key={item.q} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className={cn("font-bold text-foreground", compact ? "text-sm" : "text-base")}>{item.q}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
        </article>
      ))}
    </div>
  );
}

function ScenarioCards({ items, className }: { items: readonly { title: string; body: string }[]; className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((scenario) => (
        <article key={scenario.title} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <Globe2 className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-bold text-foreground">{scenario.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
        </article>
      ))}
    </div>
  );
}

function MistakeCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.mistakeCards.map((card) => (
        <article key={card.title} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

function ApplicationSteps({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.applicationSteps.map((step) => (
        <article key={step.step} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Step {step.step}</p>
          <h3 className="mt-2 text-base font-bold text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.body}</p>
        </article>
      ))}
    </div>
  );
}

function ComparisonTable({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass, className)}>
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200/90 bg-slate-50/80">
            <th scope="col" className="px-4 py-3 font-bold text-foreground sm:px-5">Benefit</th>
            <th scope="col" className="px-4 py-3 font-bold text-brand-strong sm:px-5">Purpose</th>
            <th scope="col" className="px-4 py-3 font-bold text-foreground sm:px-5">Note</th>
          </tr>
        </thead>
        <tbody>
          {page.comparisonRows.map((row) => (
            <tr key={row.component} className="border-b border-slate-100 last:border-0">
              <th scope="row" className="px-4 py-3 font-semibold text-foreground sm:px-5">{row.component}</th>
              <td className="px-4 py-3 leading-relaxed text-foreground-muted sm:px-5">{row.treatment}</td>
              <td className="px-4 py-3 leading-relaxed text-foreground-muted sm:px-5">{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HealthInsuranceConcepts({ className }: { className?: string }) {
  const icons = [HeartPulse, WalletCards, ShieldCheck] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.healthInsuranceConcepts.map((item, index) => {
        const Icon = icons[index] ?? HeartPulse;
        return (
          <article key={item.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function HealthInsuranceLinks({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.healthInsuranceLinks.map((item) => (
        <Link key={item.href} href={item.href} className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground group-hover:text-link">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-link">Open guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
        </Link>
      ))}
    </div>
  );
}

function AllowanceFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Check insurance", body: "Confirm Dutch basic health insurance for the months you plan to claim.", Icon: HeartPulse },
    { label: "Model income & assets", body: "Use conservative figures for income and 1 January assets before applying.", Icon: Calculator },
    { label: "Apply officially", body: "Submit through Dienst Toeslagen — update records when circumstances change.", Icon: ShieldCheck },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Zorgtoeslag planning</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Insurance + income + assets = eligibility picture</h3>
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
      title="From zorgtoeslag context to a clearer decision"
      rows={[
        { label: "Estimate", body: "Use the healthcare allowance estimator for planning ranges.", Icon: Calculator },
        { label: "Insurance", body: "Read the health insurance guide before comparing premium posters.", Icon: HeartPulse },
        { label: "Tax context", body: "Separate toeslagen benefits from payroll tax on payslips.", Icon: ReceiptText },
      ]}
    />
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

function SectionWithVisual({
  id,
  title,
  intro,
  tips,
  tipsTitle,
  visual,
  panel,
  extra,
}: {
  id: string;
  title: string;
  intro: ReactNode;
  tips?: readonly string[];
  tipsTitle?: string;
  visual: (typeof page.infographics)[keyof typeof page.infographics];
  panel?: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string };
  extra?: ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className="flex w-full flex-col gap-6">
        <SectionIntro title={title} fullWidth>{intro}</SectionIntro>
        <SectionGuideBand tips={tips} tipsTitle={tipsTitle} panel={panel} />
        {extra}
        <VisualFigure visual={visual} className="mt-0" />
      </div>
    </section>
  );
}

export function HealthcareAllowanceNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL(TAXES_HUB_PATH, baseUrl).toString() },
    { name: "Healthcare allowance", item: new URL(page.path, baseUrl).toString() },
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
                    <Link href={TAXES_HUB_PATH} className="hover:text-foreground">Taxes</Link><span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Healthcare allowance</span>
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
            <nav aria-label="Healthcare allowance guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="What Is Healthcare Allowance (Zorgtoeslag)?" fullWidth>
                  <p>Healthcare allowance — <strong>zorgtoeslag</strong> in Dutch — is a government benefit that can reduce the cost of mandatory basic health insurance for qualifying residents.</p>
                  <p>Many newcomers are surprised to learn that Dutch health insurance is compulsory, premiums are paid privately to insurers, and zorgtoeslag may help reduce costs — but only for eligible households who apply through official channels.</p>
                  <p>It is administered through <strong>Dienst Toeslagen</strong> (part of Belastingdienst), separate from payroll tax on your payslip. Eligibility depends on income, assets on 1 January, household type and insurance — not nationality alone.</p>
                  <p>
                    Read the{" "}
                    <Link href={HEALTH_INSURANCE_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Health Insurance guide</Link>
                    {" "}for mandatory insurance context, then use the{" "}
                    <Link href={HEALTHCARE_ALLOWANCE_ESTIMATOR_PATH} className="font-semibold text-link hover:text-link-hover">healthcare allowance estimator</Link>
                    {" "}for planning ranges — orientation only, not an official determination.
                  </p>
                </SectionIntro>
                <TipsPanel title="What surprises many newcomers" items={page.newcomerSurprises} />
                <ConceptFlow />
                <VisualFigure visual={page.infographics.introFlow} className="mt-0" />
                <ChecklistBlock title="Before you apply or choose a policy" items={page.introChecklist} />
                <ProcessPanel
                  eyebrow="Practical lens"
                  title="What this guide covers"
                  rowsLayout="wide"
                  rows={[
                    { label: "Eligibility basics", body: "Insurance, income, assets and household type for zorgtoeslag.", Icon: HeartPulse },
                    { label: "Expat scenarios", body: "Move timing, partner setup and conservative income planning.", Icon: Globe2 },
                    { label: "Official application", body: "How to apply and update through Dienst Toeslagen.", Icon: ShieldCheck },
                  ]}
                  note="This page does not provide personalized entitlement decisions or guarantee allowance amounts."
                />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Healthcare Allowance at a Glance" fullWidth>
                  <p>Use these cards as quick orientation before applying or comparing health insurance premiums. Zorgtoeslag supports basic insurance costs — thresholds change with policy and only official sources determine entitlement.</p>
                </SectionIntro>
                <SnapshotCards />
                <TipsPanel title="Snapshot — what to remember" items={page.snapshotTips} />
                <AllowanceFlowBand className="mt-0" />
                <VisualFigure visual={page.infographics.snapshot} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="why-exists"
              title="Why Healthcare Allowance Exists"
              intro={
                <>
                  <p>The Netherlands requires residents to hold basic health insurance. Premiums can represent a significant monthly cost — especially for lower-income households.</p>
                  <p>Zorgtoeslag exists to keep mandatory insurance affordable for qualifying residents. It is a targeted toeslag benefit, not a payroll tax credit and not the same as rent allowance or child budget.</p>
                </>
              }
              tips={page.whyExistsTips}
              tipsTitle="Policy context"
              visual={page.infographics.whyExists}
              panel={{
                eyebrow: "Mandatory insurance",
                title: "Affordability bridge",
                rows: [
                  { label: "Basic insurance", body: "Residents must hold basisverzekering when required.", Icon: HeartPulse },
                  { label: "Premium support", body: "Allowance reduces pressure on the basic premium for qualifying households.", Icon: PiggyBank },
                  { label: "Separate admin", body: "Managed through Dienst Toeslagen — not your insurer.", Icon: Landmark },
                ],
              }}
            />

            <SectionWithVisual
              id="who-qualifies"
              title="Who Can Qualify?"
              intro={
                <>
                  <p>Qualification is a bundle of conditions: Dutch basic health insurance for the relevant period, income within statutory ceilings, assets on 1 January within limits, and correct household type (single or toeslagpartner).</p>
                  <p>Legal residence and registration context also matter — confirm your personal situation on official Belastingdienst and Rijksoverheid guidance.</p>
                </>
              }
              tips={page.whoQualifiesTips}
              tipsTitle="Qualification gates"
              visual={page.infographics.whoQualifies}
              extra={
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.qualificationCriteria.map((item) => (
                    <article key={item.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                    </article>
                  ))}
                </div>
              }
            />

            <SectionWithVisual
              id="expats"
              title="Can Expats Receive Healthcare Allowance?"
              intro={
                <>
                  <p>Expats can qualify for zorgtoeslag when they meet the same insurance, income, asset and residence conditions. Nationality or expat status alone does not determine eligibility.</p>
                  <p>International hires often face extra planning complexity: move timing, partner abroad, package pay and cross-border employment. Plan conservatively and confirm on official toeslagen channels.</p>
                </>
              }
              tips={page.expatTips}
              tipsTitle="Expat planning tips"
              visual={page.infographics.expats}
              extra={<ScenarioCards items={page.expatScenarios} />}
            />

            <SectionWithVisual
              id="students"
              title="Healthcare Allowance for Students"
              intro={
                <>
                  <p>Students in the Netherlands must still hold Dutch basic health insurance when required. Student status alone does not guarantee maximum allowance — income, assets and household type still apply.</p>
                  <p>Part-time work, internships, grants and parental support can all affect the income and asset picture. Update Dienst Toeslagen when circumstances change during the academic year.</p>
                </>
              }
              tips={page.studentTips}
              tipsTitle="Student context"
              visual={page.infographics.students}
              extra={<ScenarioCards items={page.studentScenarios} />}
            />

            <SectionWithVisual
              id="how-much"
              title="How Much Is Healthcare Allowance?"
              intro={
                <>
                  <p>Allowance amounts depend on income, household type and current policy thresholds. Amounts typically taper as income approaches the statutory ceiling — they are not fixed figures you can copy from a guide.</p>
                  <p>
                    Use the{" "}
                    <Link href={HEALTHCARE_ALLOWANCE_ESTIMATOR_PATH} className="font-semibold text-link hover:text-link-hover">healthcare allowance estimator</Link>
                    {" "}to model planning ranges from your income, assets and household inputs. Only Dienst Toeslagen determines official awards.
                  </p>
                </>
              }
              tips={page.howMuchTips}
              tipsTitle="Amount planning — no hardcoded figures"
              visual={page.infographics.howMuch}
              panel={{
                eyebrow: "Planning only",
                title: "Use the estimator — not blog numbers",
                rows: [
                  { label: "Taper zone", body: "Allowance reduces as income rises toward the ceiling.", Icon: TrendingUp },
                  { label: "Policy changes", body: "Public thresholds update with law — verify on official sources.", Icon: Landmark },
                  { label: "Personal estimate", body: "Open the site estimator with your own inputs.", Icon: Calculator },
                ],
                note: "This guide intentionally avoids hardcoded allowance amounts — they change and depend on personal circumstances.",
              }}
              extra={
                <div className="relative overflow-hidden rounded-3xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-indigo-50/40 p-5 shadow-expatos-lg ring-1 ring-copilot-primary/[0.08] sm:p-6">
                  <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                      Model planning ranges from your income, assets and household type — not hardcoded blog figures.
                    </p>
                    <Link href={HEALTHCARE_ALLOWANCE_ESTIMATOR_PATH} className={cn(primaryCtaClass, "w-full shrink-0 sm:w-auto")}>
                      Open healthcare allowance estimator
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              }
            />

            <SectionWithVisual
              id="income"
              title="Why Income Matters"
              intro={
                <>
                  <p>Zorgtoeslag uses official income definitions that may differ from payslip gross or expat package headlines. With a toeslagpartner, combined income is tested against a higher ceiling.</p>
                  <p>
                    Bonuses, variable pay and cross-border income can move the real test. See the{" "}
                    <Link href={BONUS_TAX_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Bonus Tax guide</Link>
                    {" "}and{" "}
                    <Link href={EXPAT_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Expat Salary guide</Link>
                    {" "}for payroll and package context — use conservative inputs when uncertain.
                  </p>
                </>
              }
              tips={page.incomeTips}
              tipsTitle="Income and assets — both matter"
              visual={page.infographics.income}
              extra={
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  {page.incomeFactors.map((item) => (
                    <article key={item.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                    </article>
                  ))}
                </div>
              }
            />

            <section id="apply" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How to Apply" fullWidth>
                  <p>Applications and updates go through Dienst Toeslagen — often via Mijn Toeslagen. Insurers cannot grant zorgtoeslag on your behalf.</p>
                  <p>Gather income estimates, 1 January asset totals and household type before applying. Keep copies of submitted figures and update records when circumstances change.</p>
                </SectionIntro>
                <TipsPanel title="Application orientation" items={page.applyTips} />
                <ApplicationSteps />
                <ProcessPanel
                  eyebrow="Official channel"
                  title="Dienst Toeslagen — not third-party sites"
                  rowsLayout="wide"
                  rows={[
                    { label: "Mijn Toeslagen", body: "Official portal for applications and updates.", Icon: ShieldCheck },
                    { label: "Documentation", body: "Keep income and asset figures you submit.", Icon: FileText },
                    { label: "Timely updates", body: "Report changes during the year — not only at application.", Icon: ClipboardCheck },
                  ]}
                  note="This guide does not submit applications or read government systems."
                />
                <VisualFigure visual={page.infographics.apply} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="income-changes"
              title="Income Changes and Adjustments"
              intro={
                <>
                  <p>Salary increases, job changes, partner income shifts and household changes can reduce or remove allowance during the year. Report changes to Dienst Toeslagen promptly.</p>
                  <p>If you received too much based on later income, overpayments may be recovered. Use the estimator to stress-test higher income before assuming allowance will continue unchanged.</p>
                </>
              }
              tips={page.incomeChangeTips}
              tipsTitle="Keep records updated"
              visual={page.infographics.incomeChanges}
              extra={<ScenarioCards items={page.incomeChangeScenarios} />}
            />

            <section id="mistakes" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Common Expat Mistakes" fullWidth>
                  <p>These patterns appear often among international residents planning zorgtoeslag. Conservative planning and official confirmation reduce repayment and correspondence surprises.</p>
                </SectionIntro>
                <TipsPanel title="Avoid these planning traps" items={page.mistakesTips} />
                <MistakeCards />
                <ProcessPanel
                  eyebrow="Recovery risk"
                  title="Why mistakes matter later"
                  rowsLayout="wide"
                  rows={[
                    { label: "Overpayment", body: "Too much allowance based on optimistic income can be recovered by Dienst Toeslagen.", Icon: PiggyBank },
                    { label: "Missed allowance", body: "Eligible residents who never apply leave support unclaimed.", Icon: HeartPulse },
                    { label: "Household errors", body: "Wrong toeslagpartner status changes which income and assets count.", Icon: Globe2 },
                  ]}
                />
                <VisualFigure visual={page.infographics.mistakes} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="compare-benefits"
              title="Healthcare Allowance vs Other Dutch Benefits"
              intro={
                <>
                  <p>Zorgtoeslag is one of several Dutch benefits (toeslagen) and tax-related supports. Each has separate rules — qualifying for one does not automatically mean qualifying for others.</p>
                  <p>
                    See the{" "}
                    <Link href={TAXES_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
                    {" "}for broader tax and benefits context.
                  </p>
                </>
              }
              tips={page.comparisonTips}
              tipsTitle="Separate benefits — separate rules"
              visual={page.infographics.compareBenefits}
              extra={
                <>
                  <ComparisonTable />
                  <div className="grid w-full gap-4 sm:grid-cols-2">
                    {page.futureBenefitLinks.map((item, index) => (
                      <LinkCard key={item.href} item={item} iconIndex={index + 2} />
                    ))}
                  </div>
                </>
              }
            />

            <SectionWithVisual
              id="health-insurance"
              title="Healthcare Allowance and Dutch Health Insurance"
              intro={
                <>
                  <p>Zorgtoeslag reduces pressure on the mandatory basic premium — it does not replace the insurance obligation. You still choose an insurer and hold basisverzekering when required.</p>
                  <p>
                    Read the{" "}
                    <Link href={HEALTH_INSURANCE_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Health Insurance guide</Link>
                    {" "}and{" "}
                    <Link href={HEALTHCARE_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Healthcare basics</Link>
                    {" "}before comparing gross premium posters — net cost after allowance may differ.
                  </p>
                </>
              }
              tips={page.healthInsuranceTips}
              tipsTitle="Insurance + allowance"
              visual={page.infographics.healthInsurance}
              extra={
                <>
                  <HealthInsuranceConcepts />
                  <HealthInsuranceLinks />
                </>
              }
            />

            <section id="questions" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Questions Expats Often Ask" fullWidth>
                  <p>These are the questions international professionals, students and families ask most often about zorgtoeslag — from eligibility and partners to savings, application channels and income changes.</p>
                  <p>Answers below are orientation only. Verify your personal situation on official toeslagen guidance or with qualified advisers.</p>
                </SectionIntro>
                <TipsPanel title="Start with these prompts" items={page.questionsSectionTips} />
                <QuestionGrid items={page.expatQuestions} />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Tax & Healthcare Guides" fullWidth>
                  <p>Connect zorgtoeslag planning to health insurance, payroll tax and salary guides.</p>
                  <p>
                    Start with the{" "}
                    <Link href={TAXES_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
                    {" "}for the full tax and benefits topic map.
                  </p>
                </SectionIntro>
                <TipsPanel title="How to use these guides together" items={page.relatedGuideTips} />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedTaxGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
                <VisualFigure visual={page.infographics.relatedGuides} className="mt-0" />
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro eyebrow="Estimator" title={page.calculatorToolCta.title} fullWidth>
                  <p>{page.calculatorToolCta.description}</p>
                  <p>{page.calculatorToolCta.supportingText}</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Before estimating"
                  title="Prepare better inputs"
                  rowsLayout="wide"
                  rows={page.calculatorToolCta.prepItems.map((item, index) => ({
                    label: item.label,
                    body: item.body,
                    Icon: [FileText, ClipboardCheck, BadgePercent][index] ?? FileText,
                  }))}
                  note={page.calculatorToolCta.disclaimer}
                />
                <VisualFigure visual={page.infographics.calculatorFlow} className="mt-0" />
                <div className="relative overflow-hidden rounded-3xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft/90 via-white to-indigo-50/40 p-6 shadow-expatos-lg ring-1 ring-copilot-primary/[0.08] sm:p-8">
                  <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground">Plan zorgtoeslag from your own figures</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                        Open the healthcare allowance estimator to explore planning ranges from income, assets and household type — orientation only.
                      </p>
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
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Professional Services That May Help" fullWidth>
                  <p>Most zorgtoeslag questions are concept-level, but complex household situations, cross-border employment and correspondence with Dienst Toeslagen may need professional review — orientation only, not benefit advice.</p>
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
                <ProcessPanel
                  eyebrow="When to seek help"
                  title="Match the service to your question"
                  rowsLayout="wide"
                  rows={[
                    { label: "Tax advisors", body: "Income picture and toeslagpartner questions.", Icon: ShieldCheck },
                    { label: "Expat services", body: "Move-year insurance and allowance orientation.", Icon: Globe2 },
                    { label: "Insurance brokers", body: "Policy choice — not official toeslag grants.", Icon: HeartPulse },
                  ]}
                />
                <VisualFigure visual={page.infographics.services} className="mt-0" />
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
                  <p>These answers summarize common healthcare allowance questions for expats. Orientation only — not tax, benefit or legal advice.</p>
                  <p>If you plan to apply, work through the quick checks below before relying on general answers.</p>
                </SectionIntro>
                <ChecklistBlock title="Quick checks before you decide" items={page.faqQuickChecks} />
                <QuestionGrid items={page.faq} compact />
                <ProcessPanel
                  eyebrow="Rule of thumb"
                  title="Plan conservatively — confirm officially"
                  rowsLayout="wide"
                  rows={[
                    { label: "Use the estimator", body: "Model ranges from your own income and asset inputs.", Icon: Calculator },
                    { label: "Read insurance guide", body: "Understand mandatory basic insurance first.", Icon: HeartPulse },
                    { label: "Use official sources", body: "Thresholds and rules change with policy.", Icon: Landmark },
                  ]}
                  note="Healthcare allowance is administered by Dienst Toeslagen. Individual circumstances vary."
                />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Official Sources" fullWidth>
                  <p>Healthcare allowance thresholds, asset caps and application rules are set by Dutch government policy. Verify current figures on official sources before applying or updating records.</p>
                  <p>{page.sourcesDisclaimer}</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} />
                  ))}
                </div>
                <ProcessPanel
                  eyebrow="Source hierarchy"
                  title="What the sources support"
                  rowsLayout="wide"
                  rows={[
                    { label: "Belastingdienst Toeslagen", body: "Applications, updates and official documentation.", Icon: ReceiptText },
                    { label: "Government.nl", body: "English-language eligibility overview.", Icon: ShieldCheck },
                    { label: "Mijn Toeslagen", body: "Official portal for managing allowances.", Icon: Landmark },
                  ]}
                />
                <VisualFigure visual={page.infographics.officialSources} className="mt-0" />
              </div>
            </section>

            <section id="related-guides-footer" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Connect healthcare allowance planning to taxes, insurance, benefits and relocation guides across the site.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
                <VisualFigure visual={page.infographics.relatedGuides} className="mt-0" />
              </div>
            </section>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8")}>
              <SectionIntro title="Explore Next" tone="onDark" fullWidth>
                <p>Move from zorgtoeslag concepts into estimation, health insurance choice and salary planning.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.exploreNextCards.map((item, index) => (
                  <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />
                ))}
              </div>
              <VisualFigure visual={page.infographics.exploreNext} className="mt-6 border-white/10 bg-white/5 ring-white/10 [&_figcaption]:border-white/10 [&_figcaption]:bg-white/5 [&_figcaption]:text-slate-300" />
            </section>

            <p className="rounded-2xl border border-amber-100 bg-amber-50/80 p-5 text-sm leading-relaxed text-amber-950">
              <strong>Disclaimer:</strong> This guide is for orientation only. It is not tax advice, benefit advice or legal advice. Healthcare allowance entitlement and amounts depend on individual circumstances, household type and applicable regulations. Only Dienst Toeslagen determines official awards. Confirm personal questions with qualified professionals and official sources.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
