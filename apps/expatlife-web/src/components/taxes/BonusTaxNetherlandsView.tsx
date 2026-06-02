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
  bonusTaxNetherlandsPage as page,
  DUTCH_SALARY_NET_CALCULATOR_PATH,
  GROSS_VS_NET_SALARY_PATH,
  HOLIDAY_ALLOWANCE_NETHERLANDS_PATH,
  NET_SALARY_NETHERLANDS_PATH,
  PAYROLL_TAX_NETHERLANDS_PATH,
  PAYSLIP_DECODER_PATH,
  TAXES_HUB_PATH,
  THIRTY_PERCENT_RULING_PATH,
  type BonusTaxNetherlandsLink,
} from "./bonusTaxNetherlandsPageModel";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-5 sm:space-y-6 md:space-y-7";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const linkIcons = [Calculator, ReceiptText, BadgePercent, FileText, BriefcaseBusiness, ShieldCheck, PiggyBank, Globe2] as const;
const snapshotIcons = [ReceiptText, Landmark, BriefcaseBusiness, WalletCards, ShieldCheck, Calculator] as const;

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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: BonusTaxNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
  const icons = [ReceiptText, Landmark, Calculator] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? ReceiptText;
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

function ExampleCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.exampleCards.map((card) => (
        <article key={card.role} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{card.role}</p>
          <p className="mt-2 text-lg font-bold text-foreground">{card.grossBonus}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground-muted"><span className="font-semibold text-foreground">Withholding:</span> {card.withholdingConcept}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted"><span className="font-semibold text-foreground">Annual view:</span> {card.annualPerspective}</p>
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
          <Globe2 className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-bold text-foreground">{scenario.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
        </article>
      ))}
    </div>
  );
}

function WithholdingScenarioCards({ className }: { className?: string }) {
  const icons = [PiggyBank, ReceiptText, Calculator] as const;
  return (
    <div className={cn("grid w-full gap-4 md:grid-cols-3", className)}>
      {page.withholdingScenarios.map((scenario, index) => {
        const Icon = icons[index] ?? PiggyBank;
        return (
          <article key={scenario.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{scenario.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function MockPayslipTable({ className }: { className?: string }) {
  return (
    <aside className={cn("overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-lg ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass, className)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Simplified bonus payslip</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">Typical loonstrook lines to recognise</h3>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200/90">
          {page.payslipItems.map((item, index) => (
            <div key={item.label} className={cn("grid gap-2 px-4 py-3 sm:grid-cols-[140px_1fr_auto]", index % 2 === 0 ? "bg-slate-50/80" : "bg-white")}>
              <span className="text-sm font-bold text-foreground">{item.label}</span>
              <span className="text-sm leading-relaxed text-foreground-muted">{item.value}</span>
              <span className="text-sm font-semibold text-brand-strong sm:text-right">{item.example}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-foreground-muted">* Illustrative net range only. Your payslip depends on employer payroll setup and personal circumstances.</p>
        <Link href={PAYSLIP_DECODER_PATH} className={cn(primaryCtaClass, "mt-4 w-full")}>
          Open payslip decoder
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </aside>
  );
}

function TotalCompensationLinks({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.totalCompensationItems.map((item) => (
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

function ComparisonTable({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass, className)}>
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200/90 bg-slate-50/80">
            <th scope="col" className="px-4 py-3 font-bold text-foreground sm:px-5">Component</th>
            <th scope="col" className="px-4 py-3 font-bold text-brand-strong sm:px-5">Payroll treatment</th>
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

function BonusTaxFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Read the payslip", body: "Identify gross bonus, loonheffing and bijzondere beloning lines.", Icon: ReceiptText },
    { label: "Separate withholding from final tax", body: "A high payslip percentage is often payroll withholding — not your annual rate.", Icon: Landmark },
    { label: "Model net pay", body: "Use calculators and guides for gross-to-net context — orientation only.", Icon: Calculator },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Bonus tax clarity</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Withholding on the payslip ≠ final tax outcome</h3>
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
      title="From bonus tax context to a clearer decision"
      rows={[
        { label: "Payroll basics", body: "Use the payroll tax guide for loonheffing and payslip fundamentals.", Icon: ReceiptText },
        { label: "Calculate", body: "Estimate take-home pay with the net salary calculator.", Icon: Calculator },
        { label: "Compare packages", body: "Benchmark against holiday allowance and expat salary guides.", Icon: TrendingUp },
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

export function BonusTaxNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL(TAXES_HUB_PATH, baseUrl).toString() },
    { name: "Bonus Tax", item: new URL(page.path, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Bonus tax</span>
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
            <nav aria-label="Bonus tax guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Why Does My Bonus Look So Heavily Taxed?" fullWidth>
                  <p>One of the most common questions from employees and expats in the Netherlands is: &ldquo;Why did I only receive part of my bonus?&rdquo;</p>
                  <p>In many situations, bonuses are subject to special payroll withholding calculations. Employees see withholding immediately on the payslip — but actual annual taxation may differ once your full-year position is reconciled.</p>
                  <p>
                    Start with the{" "}
                    <Link href={PAYROLL_TAX_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Payroll Tax guide</Link>
                    {" "}for loonheffing basics, then use this page for bonus-specific context — orientation only, not tax advice.
                  </p>
                </SectionIntro>
                <ConceptFlow />
                <VisualFigure visual={page.infographics.introFlow} className="mt-0" />
                <ChecklistBlock title="Before you assume your bonus was taxed at 49%" items={page.introChecklist} />
                <ProcessPanel
                  eyebrow="Practical lens"
                  title="What this guide covers"
                  rowsLayout="wide"
                  rows={[
                    { label: "Withholding vs final tax", body: "Why payslip percentages often look higher than your annual effective rate.", Icon: ReceiptText },
                    { label: "Bijzondere beloning", body: "Special wage tax context for irregular payments including many bonuses.", Icon: Landmark },
                    { label: "Expat payslips", body: "How multinational payroll and unfamiliar labels create confusion.", Icon: Globe2 },
                  ]}
                  note="This page does not provide personalized tax calculations or guarantee net bonus outcomes."
                />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Bonus Tax at a Glance" fullWidth>
                  <p>Use these cards as quick orientation before reading payslip lines or comparing bonus-inclusive offers. Bonuses are taxable employment income — the percentage on your payslip is often payroll withholding, not necessarily your final annual tax rate.</p>
                </SectionIntro>
                <SnapshotCards />
                <TipsPanel title="Snapshot — what to remember" items={page.snapshotTips} />
                <BonusTaxFlowBand className="mt-0" />
                <VisualFigure visual={page.infographics.snapshot} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="how-it-works"
              title="How Bonuses Are Taxed in the Netherlands"
              intro={
                <>
                  <p>Bonuses are generally treated as taxable employment income. Tax treatment occurs through employer payroll systems — not as separate tax-free payments in standard Dutch employment.</p>
                  <p>Annual, performance, sales, retention and sign-on bonuses all typically pass through loonheffing withholding at payment time.</p>
                </>
              }
              tips={page.howItWorksTips}
              tipsTitle="How bonus payroll usually works"
              visual={page.infographics.howItWorks}
              panel={{
                eyebrow: "Bonus flow",
                title: "From gross offer to bank transfer",
                rows: [
                  { label: "Gross bonus agreed", body: "Contract or letter states the gross amount.", Icon: FileText },
                  { label: "Payroll processed", body: "Employer applies wage tax and deductions.", Icon: ReceiptText },
                  { label: "Net paid out", body: "Remaining amount reaches your account.", Icon: WalletCards },
                ],
              }}
              extra={
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  {page.bonusTypes.map((item) => (
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
              id="special-wage-tax"
              title="What Is Special Wage Tax?"
              intro={
                <>
                  <p>Dutch payroll systems often apply special withholding rates to irregular payments — bijzondere beloning is the concept many employees encounter on bonus payslips.</p>
                  <p>Examples include bonuses, commissions, holiday allowance lump sums and one-time payments. This is one reason bonuses may appear taxed at a higher percentage than monthly salary.</p>
                  <p className="font-semibold text-foreground">Important: withholding on your payslip is not the same as your final tax bill.</p>
                </>
              }
              tips={page.specialWageTips}
              tipsTitle="Bijzondere beloning — orientation"
              visual={page.infographics.specialWageTax}
              panel={{
                eyebrow: "Why payroll withholds aggressively",
                title: "Collection mechanism, not final tax",
                rows: [
                  { label: "Irregular timing", body: "One-off payments lack monthly salary rhythm.", Icon: TrendingUp },
                  { label: "Annual estimate", body: "Payroll estimates full-year income for withholding.", Icon: Calculator },
                  { label: "Year-end protection", body: "Higher upfront withholding reduces under-collection risk.", Icon: Landmark },
                ],
              }}
            />

            <SectionWithVisual
              id="withholding"
              title="Payroll Withholding Is Not Always Your Final Tax Rate"
              intro={
                <>
                  <p>Many employees assume: &ldquo;My bonus was taxed at 49%.&rdquo; In reality, the payroll system may withhold based on estimated annual income. Actual annual tax liability is determined later through the tax process.</p>
                  <p>If too much tax was withheld during the year, annual filing may produce a refund — depending on your situation. If too little was withheld overall, you may owe additional tax after reconciliation.</p>
                </>
              }
              tips={page.withholdingTips}
              tipsTitle="Withholding vs final tax"
              visual={page.infographics.withholdingVsFinal}
              panel={{
                eyebrow: "Two-step model",
                title: "Withholding now, assessment later",
                rows: [
                  { label: "Bonus paid", body: "Payroll withholds at payment time.", Icon: ReceiptText },
                  { label: "Year continues", body: "Monthly salary and other income accumulate.", Icon: BriefcaseBusiness },
                  { label: "Annual reconciliation", body: "Final position may differ from one payslip.", Icon: PiggyBank },
                ],
                note: "Avoid exact calculations from this guide — use official sources and qualified advisers.",
              }}
              extra={<WithholdingScenarioCards />}
            />

            <SectionWithVisual
              id="gross-net"
              title="Gross Bonus vs Net Bonus"
              intro={
                <>
                  <p>A bonus offer should always be viewed as a gross amount, an estimated take-home amount and part of total compensation value — not spendable income until payroll runs.</p>
                  <p>
                    Read the{" "}
                    <Link href={GROSS_VS_NET_SALARY_PATH} className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>
                    {", "}
                    <Link href={NET_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Net Salary guide</Link>
                    {" "}and use the{" "}
                    <Link href={DUTCH_SALARY_NET_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">net salary calculator</Link>
                    {" "}for orientation — not tax advice.
                  </p>
                </>
              }
              tips={page.grossNetTips}
              tipsTitle="Gross vs net context"
              visual={page.infographics.grossNet}
              extra={
                <ProcessPanel
                  eyebrow="Take-home planning"
                  title="Why net matters more than gross bonus"
                  rowsLayout="wide"
                  rows={[
                    { label: "Payroll tax", body: "Loonheffing on bonuses often uses special withholding logic.", Icon: ReceiptText },
                    { label: "Pension", body: "Pension deductions may further reduce the net payout.", Icon: WalletCards },
                    { label: "30% ruling", body: "Eligible expats may see different payroll treatment — confirm with HR.", Icon: BadgePercent },
                  ]}
                  note="Illustrative only — confirm payslip lines with HR for your payroll setup."
                />
              }
            />

            <SectionWithVisual
              id="expats"
              title="Bonus Taxation for Expats"
              intro={
                <>
                  <p>Many expats receive bonuses through multinational employers, highly skilled migrant roles and sectors like finance, technology and consulting. The same payroll withholding principles generally apply.</p>
                  <p>Expats often misinterpret payroll deductions, payslip entries and annual tax reconciliation — especially when comparing offers across countries.</p>
                </>
              }
              tips={page.expatTips}
              tipsTitle="Expat comparison tips"
              visual={page.infographics.expatContext}
              extra={<ExpatScenarioCards />}
            />

            <SectionWithVisual
              id="thirty-ruling"
              title="How the 30% Ruling Can Affect Bonuses"
              intro={
                <>
                  <p>For eligible employees, the 30% ruling may influence taxable compensation treatment and how payroll applies the scheme to bonus payments.</p>
                  <p>
                    Read the{" "}
                    <Link href={THIRTY_PERCENT_RULING_PATH} className="font-semibold text-link hover:text-link-hover">30% Ruling guide</Link>
                    {" "}for eligibility context — confirm payroll treatment with your employer. Do not guarantee tax savings from this guide.
                  </p>
                </>
              }
              tips={page.thirtyRulingTips}
              tipsTitle="30% ruling context"
              visual={page.infographics.thirtyRuling}
              panel={{
                eyebrow: "Not tax advice",
                title: "Confirm with payroll",
                rows: [
                  { label: "Eligibility", body: "The ruling is not automatic for every expat.", Icon: ShieldCheck },
                  { label: "Payslip setup", body: "How bonuses appear may differ by employer.", Icon: ReceiptText },
                  { label: "Professional help", body: "Use tax advisers for personal situations.", Icon: Globe2 },
                ],
              }}
            />

            <SectionWithVisual
              id="variable-pay"
              title="Bonuses, RSUs and Other Variable Compensation"
              intro={
                <>
                  <p>Variable compensation may include cash bonuses, RSUs, stock options, profit-sharing and retention awards. Tax treatment may differ by award type — create awareness without treating this as tax advice.</p>
                  <p>Cash bonuses usually create one payroll moment. Equity awards often follow separate vesting, exercise or reporting rules — confirm your specific award documentation.</p>
                </>
              }
              tips={page.variableCompTips}
              tipsTitle="Variable pay — what to verify"
              visual={page.infographics.variableCompensation}
              panel={{
                eyebrow: "Variable pay map",
                title: "Cash vs equity awareness",
                rows: [
                  { label: "Cash bonus", body: "Usually one payroll event with wage tax withholding.", Icon: WalletCards },
                  { label: "RSU / stock", body: "Separate tax moments — verify award terms.", Icon: TrendingUp },
                  { label: "Specialist help", body: "Equity awards often need professional review.", Icon: ShieldCheck },
                ],
              }}
              extra={
                <div className="grid w-full gap-4 sm:grid-cols-2">
                  {page.variableCompItems.map((item) => (
                    <article key={item.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                    </article>
                  ))}
                </div>
              }
            />

            <section id="examples" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Illustrative Bonus Examples" fullWidth>
                  <p>These scenarios show bonus concepts, payroll withholding context and annual tax perspective — illustrative only, no personalized calculations or guaranteed net outcomes.</p>
                  <p>Use them to understand why a EUR 10,000 gross bonus does not mean EUR 10,000 spendable income — and why annual filing may still change the effective outcome.</p>
                </SectionIntro>
                <TipsPanel title="How to read these examples" items={page.examplesTips} />
                <ExampleCards />
                <ProcessPanel
                  eyebrow="Illustrative only"
                  title="What each example shows"
                  rowsLayout="wide"
                  rows={[
                    { label: "Gross headline", body: "The bonus amount quoted in offers or contracts.", Icon: WalletCards },
                    { label: "Withholding lens", body: "Why the payslip net may look heavily reduced at payment.", Icon: ReceiptText },
                    { label: "Annual lens", body: "Why full-year reconciliation may differ from one payslip.", Icon: Calculator },
                  ]}
                  note="No scenario guarantees a refund, balance due or specific net percentage."
                />
                <VisualFigure visual={page.infographics.examples} className="mt-0" />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Questions Expats Often Ask About Bonus Tax" fullWidth>
                  <p>Quick orientation answers — verify specifics with HR, payroll and official sources.</p>
                </SectionIntro>
                <QuestionGrid items={page.expatQuestions} />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="comparison"
              title="Bonus vs Holiday Allowance vs Salary"
              intro={
                <>
                  <p>Different compensation components can follow different payroll treatments. Compare total packages — not bonus lines in isolation.</p>
                  <p>
                    See the{" "}
                    <Link href={HOLIDAY_ALLOWANCE_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Holiday Allowance guide</Link>
                    {" "}and{" "}
                    <Link href={GROSS_VS_NET_SALARY_PATH} className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>
                    {" "}for package context.
                  </p>
                </>
              }
              tips={page.comparisonTips}
              tipsTitle="Compare components correctly"
              visual={page.infographics.comparison}
              extra={
                <>
                  <ComparisonTable />
                  <TotalCompensationLinks />
                  <VisualFigure visual={page.infographics.totalCompensation} className="mt-0" />
                </>
              }
            />

            <section id="payslip" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How Bonuses Appear on Dutch Payslips" fullWidth>
                  <p>Typical payslips may show gross bonus, wage tax withholding (loonheffing), bijzondere beloning labels, pension deductions and net payout. Reading payslip labels correctly avoids confusion between withholding and final taxation.</p>
                  <p>
                    Use the{" "}
                    <Link href={PAYSLIP_DECODER_PATH} className="font-semibold text-link hover:text-link-hover">payslip decoder tool</Link>
                    {" "}to explore bonus and tax lines on a loonstrook, and the{" "}
                    <Link href={PAYROLL_TAX_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Payroll Tax guide</Link>
                    {" "}for broader loonheffing context.
                  </p>
                </SectionIntro>
                <div className="grid w-full gap-6 lg:grid-cols-2 lg:items-start">
                  <ChecklistBlock title="What to check on your bonus payslip" items={page.payslipChecklist} columns={1} />
                  <MockPayslipTable />
                </div>
                <VisualFigure visual={page.infographics.payslip} className="mt-0" />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Salary & Tax Guides" fullWidth>
                  <p>Connect bonus context to payroll tax, net salary, holiday allowance and expat compensation guides.</p>
                  <p>
                    Start with the{" "}
                    <Link href={TAXES_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
                    {" "}for the full salary and tax topic map.
                  </p>
                </SectionIntro>
                <TipsPanel title="How to use these guides together" items={page.relatedSalaryGuideTips} />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedTaxGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
                <VisualFigure visual={page.infographics.exploreNext} className="mt-0" />
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro eyebrow="Calculator" title={page.calculatorToolCta.title} fullWidth>
                  <p>{page.calculatorToolCta.description}</p>
                  <p>{page.calculatorToolCta.supportingText}</p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Before calculating"
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
                      <h3 className="text-xl font-bold tracking-tight text-foreground">Model net pay including bonus context</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                        Open the Dutch salary net calculator to explore gross-to-net pay alongside bonus withholding and payroll tax.
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
                  <p>Most bonus tax questions are concept-level, but personal tax position, complex compensation and cross-border setups may need professional review — orientation only, not tax advice.</p>
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
                    { label: "Tax advisors", body: "Personal tax position, annual reconciliation and cross-border bonus questions.", Icon: ShieldCheck },
                    { label: "Payroll specialists", body: "Payslip interpretation and bonus withholding setup.", Icon: ReceiptText },
                    { label: "Expat tax services", body: "International employment and 30% ruling context.", Icon: Globe2 },
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
                  <p>These answers summarize common bonus tax questions for expats. Orientation only — not tax, payroll or legal advice.</p>
                  <p>If you received a bonus payslip, work through the quick checks below before relying on general answers.</p>
                </SectionIntro>
                <ChecklistBlock title="Quick checks before you decide" items={page.faqQuickChecks} />
                <QuestionGrid items={page.faq} compact />
                <ProcessPanel
                  eyebrow="Rule of thumb"
                  title="Payslip withholding explains collection — not your full tax story"
                  rowsLayout="wide"
                  rows={[
                    { label: "Read payslips", body: "Understand loonheffing and bijzondere beloning on bonus lines.", Icon: ReceiptText },
                    { label: "Use calculators", body: "Estimate take-home pay for offer comparison.", Icon: Calculator },
                    { label: "Use official sources", body: "Payroll rules and rates can change over time.", Icon: Landmark },
                  ]}
                  note="Bonus taxation is administered through payroll systems and wage tax withholding rules. Individual circumstances vary."
                />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Official Sources" fullWidth>
                  <p>Bonus taxation in the Netherlands is administered through payroll systems and wage tax withholding rules. Actual tax outcomes depend on individual circumstances and applicable tax regulations.</p>
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
                    { label: "Belastingdienst", body: "Official wage tax and payroll guidance.", Icon: ReceiptText },
                    { label: "Government.nl", body: "Work, income and tax information.", Icon: ShieldCheck },
                    { label: "Business.gov.nl", body: "Employer payroll and wage obligations.", Icon: BriefcaseBusiness },
                  ]}
                />
                <VisualFigure visual={page.infographics.officialSources} className="mt-0" />
              </div>
            </section>

            <section id="related-guides-footer" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Connect bonus tax understanding to taxes, salary, benefits and compensation guides across the site.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
                <VisualFigure visual={page.infographics.totalCompensation} className="mt-0" />
              </div>
            </section>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8")}>
              <SectionIntro title="Explore Next" tone="onDark" fullWidth>
                <p>Move from bonus tax concepts into calculation, payroll tax and compensation guides.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.exploreNextCards.map((item, index) => (
                  <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />
                ))}
              </div>
              <VisualFigure visual={page.infographics.exploreNext} className="mt-6 border-white/10 bg-white/5 ring-white/10 [&_figcaption]:border-white/10 [&_figcaption]:bg-white/5 [&_figcaption]:text-slate-300" />
            </section>

            <p className="rounded-2xl border border-amber-100 bg-amber-50/80 p-5 text-sm leading-relaxed text-amber-950">
              <strong>Disclaimer:</strong> This guide is for orientation only. It is not tax advice, accounting advice or tax planning advice. Bonus withholding and final tax outcomes depend on employer payroll setup, individual circumstances and applicable regulations. Confirm personal questions with qualified professionals and official sources.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
