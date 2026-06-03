import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  HeartHandshake,
  Landmark,
  PiggyBank,
  ReceiptText,
  School,
  ShieldCheck,
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
  childcareAllowanceNetherlandsPage as page,
  BONUS_TAX_NETHERLANDS_PATH,
  BSN_REGISTRATION_PATH,
  CHILDCARE_COST_ESTIMATOR_PATH,
  EXPAT_SALARY_NETHERLANDS_PATH,
  FAMILY_TOOLS_PATH,
  HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH,
  MUNICIPALITY_REGISTRATION_PATH,
  MOVING_TO_NETHERLANDS_PATH,
  MOVING_WITH_FAMILY_PATH,
  RENT_ALLOWANCE_NETHERLANDS_PATH,
  TAXES_HUB_PATH,
  type ChildcareAllowanceNetherlandsLink,
} from "./childcareAllowanceNetherlandsPageModel";
import {
  ChildcareAllowancePlanningCtaStrip,
} from "./ChildcareAllowancePlanningDisplay";
import {
  ChildcareAllowanceIncomeBandTable,
  ChildcareAllowanceReferenceDisclaimer,
  ChildcareAllowanceReferenceHighlightCards,
  ChildcareAllowanceReferenceTable,
  ChildcareAllowanceWorkedExampleCards,
} from "./ChildcareAllowanceReferenceDisplay";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-5 sm:space-y-6 md:space-y-7";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const linkIcons = [Baby, Users, ReceiptText, FileText, BriefcaseBusiness, ShieldCheck, PiggyBank, Globe2] as const;
const snapshotIcons = [Baby, Landmark, BriefcaseBusiness, WalletCards, ShieldCheck, Calculator] as const;

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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: ChildcareAllowanceNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
  const icons = [Baby, Landmark, ShieldCheck] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? Baby;
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

function ChildcareTypeCards({ className }: { className?: string }) {
  const icons = [Baby, School, Users, HeartHandshake, Globe2] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.childcareTypes.map((item, index) => {
        const Icon = icons[index] ?? Baby;
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

function QualificationCriteriaCards({ className }: { className?: string }) {
  const icons = [ShieldCheck, BriefcaseBusiness, WalletCards, Baby, Users, Globe2] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.qualificationCriteria.map((item, index) => {
        const Icon = icons[index] ?? ShieldCheck;
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

function EmploymentCards({ className }: { className?: string }) {
  const icons = [BriefcaseBusiness, WalletCards, ClipboardCheck, Users] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2", className)}>
      {page.employmentFactors.map((item, index) => {
        const Icon = icons[index] ?? BriefcaseBusiness;
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

function ChildcareSystemConcepts({ className }: { className?: string }) {
  const icons = [School, Baby, Calculator, HeartHandshake] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.childcareSystemConcepts.map((item, index) => {
        const Icon = icons[index] ?? School;
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

function ExpatFamilyConcepts({ className }: { className?: string }) {
  const icons = [Globe2, Users, HeartHandshake, BriefcaseBusiness] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.expatFamilyConcepts.map((item, index) => {
        const Icon = icons[index] ?? Globe2;
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

function HowMuchFactorCards({ className }: { className?: string }) {
  const icons = [WalletCards, ReceiptText, ClipboardCheck, Baby] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2", className)}>
      {page.howMuchFactors.map((item, index) => {
        const Icon = icons[index] ?? WalletCards;
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

function ChildcareCostsConcepts({ className }: { className?: string }) {
  const icons = [PiggyBank, Globe2, WalletCards, Users] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {page.childcareCostsConcepts.map((item, index) => {
        const Icon = icons[index] ?? PiggyBank;
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

function ExpatFamilyLinksGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.expatFamilyLinks.map((item, index) => (
        <LinkCard key={item.href} item={item} iconIndex={index + 1} />
      ))}
    </div>
  );
}

function CityLinksGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.cityLinks.map((item, index) => (
        <LinkCard key={item.href} item={item} iconIndex={index} />
      ))}
    </div>
  );
}

function AllowanceFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Check childcare type", body: "Confirm your provider and care arrangement may meet official kinderopvangtoeslag rules.", Icon: Baby },
    { label: "Model income & hours", body: "Use conservative figures for household income and registered childcare hours before applying.", Icon: Calculator },
    { label: "Apply officially", body: "Submit through Dienst Toeslagen — update records when circumstances change.", Icon: ShieldCheck },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Kinderopvangtoeslag planning</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Childcare + income + work = eligibility picture</h3>
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
      title="From kinderopvangtoeslag context to clearer family budgeting"
      rows={[
        { label: "Family tools", body: "Use the childcare cost estimator alongside official toeslagen guidance.", Icon: Baby },
        { label: "Official tools", body: "Use Belastingdienst and toeslagen.nl for planning ranges.", Icon: Calculator },
        { label: "City context", body: "Connect allowance planning to local childcare costs across Dutch cities.", Icon: Globe2 },
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
  visual?: (typeof page.infographics)[keyof typeof page.infographics];
  panel?: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string };
  extra?: ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className="flex w-full flex-col gap-6">
        <SectionIntro title={title} fullWidth>{intro}</SectionIntro>
        <SectionGuideBand tips={tips} tipsTitle={tipsTitle} panel={panel} />
        {extra}
        {visual ? <VisualFigure visual={visual} className="mt-0" /> : null}
      </div>
    </section>
  );
}

export function ChildcareAllowanceNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL(TAXES_HUB_PATH, baseUrl).toString() },
    { name: "Childcare allowance", item: new URL(page.path, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Childcare allowance</span>
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
            <nav aria-label="Childcare allowance guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="What Is Childcare Allowance (Kinderopvangtoeslag)?" fullWidth>
                  <p>Childcare allowance — <strong>kinderopvangtoeslag</strong> in Dutch — is a government benefit that can help eligible working parents pay registered childcare costs.</p>
                  <p>Many expat families are surprised to learn that Dutch childcare can be expensive, not every provider or care type qualifies, and kinderopvangtoeslag may help reduce costs — but only for eligible households who apply through official channels.</p>
                  <p>It is administered through <strong>Dienst Toeslagen</strong> (part of Belastingdienst), separate from payroll tax on your payslip. Eligibility depends on income, registered childcare hours, care type and household work situation — not nationality alone.</p>
                  <p>
                    Use the{" "}
                    <Link href={CHILDCARE_COST_ESTIMATOR_PATH} className="font-semibold text-link hover:text-link-hover">Childcare Cost Estimator</Link>
                    {" "}for family budgeting context, then verify income and care rules on official Belastingdienst toeslagen guidance — orientation only, not an official determination.
                  </p>
                </SectionIntro>
                <TipsPanel title="What surprises many newcomer families" items={page.newcomerSurprises} />
                <ConceptFlow />
                <VisualFigure visual={page.infographics.introFlow} className="mt-0" />
                <ChecklistBlock title="Before you apply or sign a childcare contract" items={page.introChecklist} />
                <ProcessPanel
                  eyebrow="Practical lens"
                  title="What this guide covers"
                  rowsLayout="wide"
                  rows={[
                    { label: "Eligibility basics", body: "Income, childcare hours, care type and work requirements for kinderopvangtoeslag.", Icon: Baby },
                    { label: "Expat scenarios", body: "Move timing, partner work setup and conservative income planning.", Icon: Globe2 },
                    { label: "Official application", body: "How to apply and update through Dienst Toeslagen.", Icon: ShieldCheck },
                  ]}
                  note="This page does not provide personalized entitlement decisions or guarantee allowance amounts."
                />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Childcare Allowance at a Glance" fullWidth>
                  <p>
                    Key 2026 reference figures from Rijksoverheid and Belastingdienst — hourly caps, hour limits and reimbursement percentages before you run the official proefberekening.
                    Allowance is calculated on the statutory hourly maximum per care type, not necessarily your full provider invoice.
                  </p>
                </SectionIntro>
                <SnapshotCards />
                <ChildcareAllowanceReferenceHighlightCards />
                <TipsPanel title="Snapshot — what to remember" items={page.snapshotTips} />
                <AllowanceFlowBand className="mt-0" />
                <VisualFigure visual={page.infographics.snapshot} className="mt-0" />
                <ChildcareAllowanceReferenceDisclaimer />
              </div>
            </section>

            <section id="thresholds-2026" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="2026 Kinderopvangtoeslag Thresholds & Caps" fullWidth>
                  <p>
                    Published 2026 parameters: maximum hourly rates per care type, reimbursable hour limits and how provider quotes above the cap affect your out-of-pocket cost.
                    These are the numbers Dienst Toeslagen uses — not simplified forum percentages.
                  </p>
                  <p>
                    Combined toetsingsinkomen up to <strong>€56,412</strong> can qualify working parents for the maximum <strong>96%</strong> reimbursement rate in 2026.
                    There is no single income line where allowance always drops to zero — but the percentage tapers and a <strong>36.5%</strong> floor applies for high earners on the first child.
                  </p>
                </SectionIntro>
                <ChildcareAllowanceReferenceTable subtitle="Official-style 2026 reference table — verify on toeslagen.nl before applying." />
                <ChildcareAllowanceIncomeBandTable subtitle="Selected rows from the 2026 vergoedingspercentage table (toetsingsinkomen → reimbursement %)." />
                <ChildcareAllowanceReferenceDisclaimer />
              </div>
            </section>

            <SectionWithVisual
              id="childcare-system"
              title="Understanding Childcare in the Netherlands"
              intro={
                <>
                  <p>The Netherlands combines regulated childcare providers, parental work requirements and targeted toeslag support. Childcare costs can represent a significant monthly burden — especially in major cities with long waiting lists.</p>
                  <p>Kinderopvangtoeslag exists to help make registered childcare more affordable for eligible working parents. It is a targeted toeslag benefit, not payroll tax credit, not kinderbijslag and not the same as healthcare allowance or rent allowance.</p>
                </>
              }
              tips={page.childcareSystemTips}
              tipsTitle="System context"
              visual={page.infographics.childcareSystem}
              panel={{
                eyebrow: "Childcare affordability",
                title: "Support for qualifying registered care",
                rows: [
                  { label: "Regulated providers", body: "Daycare, out-of-school care and registered childminders follow official frameworks.", Icon: School },
                  { label: "Work-linked support", body: "Allowance reduces pressure on registered childcare costs for eligible working parents.", Icon: PiggyBank },
                  { label: "Separate admin", body: "Managed through Dienst Toeslagen — not your childcare provider.", Icon: Landmark },
                ],
              }}
              extra={<ChildcareSystemConcepts />}
            />

            <SectionWithVisual
              id="who-qualifies"
              title="Who Can Qualify?"
              intro={
                <>
                  <p>Qualification is a bundle of conditions: lawful residence, income within statutory rules, registered childcare with a qualifying provider, and work or study requirements for the applying parent(s).</p>
                  <p>Legal residence and registration context also matter — confirm your personal situation on official Belastingdienst and Government.nl guidance.</p>
                </>
              }
              tips={page.whoQualifiesTips}
              tipsTitle="Qualification gates"
              visual={page.infographics.whoQualifies}
              panel={{
                eyebrow: "Checklist lens",
                title: "Four gates before you count on allowance",
                rows: [
                  { label: "LRK registration", body: "Provider must appear on the official childcare register with a valid contract.", Icon: ShieldCheck },
                  { label: "Work or study link", body: "Eligible hours follow parental activity — not every household member needs full-time work.", Icon: BriefcaseBusiness },
                  { label: "Income test", body: "Household toetsingsinkomen sets the reimbursement percentage when toeslagpartner rules apply.", Icon: WalletCards },
                  { label: "Residence", body: "Lawful residence and registration context for the allowance period.", Icon: Globe2 },
                ],
                note: "Missing any gate can mean zero allowance — verify each on official toeslagen guidance before signing contracts.",
              }}
              extra={
                <>
                  <QualificationCriteriaCards />
                  <ChildcareTypeCards className="mt-0" />
                </>
              }
            />

            <SectionWithVisual
              id="expats"
              title="Can Expats Receive Kinderopvangtoeslag?"
              intro={
                <>
                  <p>Expats can qualify for kinderopvangtoeslag when they meet the same residence, income, childcare and work conditions. Nationality or expat status alone does not determine eligibility.</p>
                  <p>International families often face extra planning complexity: move timing, partner work abroad, waiting lists and provider contracts that may not align with allowance months. Plan conservatively and confirm on official toeslagen channels.</p>
                </>
              }
              tips={page.expatTips}
              tipsTitle="Expat planning tips"
              visual={page.infographics.expats}
              panel={{
                eyebrow: "Expat confirmation",
                title: "Same framework — extra planning steps",
                rows: [
                  { label: "BSN & registration", body: "Municipality registration and BSN unlock toeslagen and provider contracts.", Icon: FileText },
                  { label: "Provider contract", body: "LRK-registered care with eligible hours — not informal or unregistered arrangements.", Icon: Baby },
                  { label: "Official check", body: "Use toeslagen.nl and Mijn Toeslagen — not forum advice alone.", Icon: ShieldCheck },
                ],
              }}
              extra={<ScenarioCards items={page.expatScenarios} />}
            />

            <SectionWithVisual
              id="employment"
              title="Employment and Childcare Allowance"
              intro={
                <>
                  <p>
                    Kinderopvangtoeslag is designed for parents who work, study or follow qualifying integration programmes — not as a general childcare subsidy without activity.
                    Eligible childcare hours typically link to the work or study hours of the least-working parent in the household.
                  </p>
                  <p>
                    Self-employment, part-time work and phased returns from parental leave each have specific rules. A non-working partner does not automatically disqualify the household — but the applying parent&apos;s activity and household type still matter.
                    For income context, see the{" "}
                    <Link href={EXPAT_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Expat Salary guide</Link>
                    {" "}and{" "}
                    <Link href={BONUS_TAX_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Bonus Tax guide</Link>
                    {" "}— use conservative inputs when uncertain.
                  </p>
                </>
              }
              tips={page.employmentTips}
              tipsTitle="Work-linked eligibility"
              visual={page.infographics.employment}
              panel={{
                eyebrow: "Activity tests",
                title: "Work, study and eligible hours",
                rows: [
                  { label: "Work hours", body: "Eligible childcare hours follow parental activity — confirm before booking full-time daycare.", Icon: BriefcaseBusiness },
                  { label: "Self-employment", body: "Freelancers may qualify with evidence of working hours — keep records.", Icon: ClipboardCheck },
                  { label: "Study & integration", body: "Certain education and inburgering programmes may count — verify officially.", Icon: School },
                ],
              }}
              extra={
                <>
                  <EmploymentCards />
                  <ScenarioCards items={page.employmentScenarios} className="mt-0" />
                </>
              }
            />

            <SectionWithVisual
              id="how-much"
              title="How Much Childcare Allowance Can You Receive?"
              intro={
                <>
                  <p>
                    Allowance equals your reimbursement percentage (from the 2026 income table) applied to the reimbursable hourly base — statutory cap × eligible hours, per child.
                    A daycare contract at €11.90/h only uses €11.23/h in the formula; the difference stays out of pocket.
                  </p>
                  <p>{page.officialCalculatorCta.description}</p>
                </>
              }
              tips={page.howMuchTips}
              tipsTitle="Planning your amount"
              visual={page.infographics.howMuch}
              panel={{
                eyebrow: "Planning tools",
                title: page.officialCalculatorCta.title,
                rows: [
                  { label: "Official proefberekening", body: "Belastingdienst calculator for your personal toeslag amount.", Icon: Landmark },
                  { label: "ExpatCopilot estimator", body: "Budget gross provider costs and planning-range benefit alongside rent and salary.", Icon: Calculator },
                  { label: "Provider contract", body: "Your invoice shows registered hours — allowance follows official caps and income.", Icon: ReceiptText },
                ],
                note: page.officialCalculatorCta.disclaimer,
              }}
              extra={
                <>
                  <HowMuchFactorCards />
                  <ChildcareAllowanceIncomeBandTable
                    subtitle="How to read this: find your household toetsingsinkomen band, then apply that % to the reimbursable base (capped hourly rate × eligible hours)."
                    className="mt-0"
                  />
                  <ChildcareAllowanceWorkedExampleCards className="mt-0" />
                  <ScenarioCards items={page.howMuchScenarios} className="mt-0" />
                  <ChildcareAllowancePlanningCtaStrip />
                  <ChildcareAllowanceReferenceDisclaimer className="mt-0" />
                </>
              }
            />

            <SectionWithVisual
              id="childcare-costs"
              title="Childcare Costs Across Dutch Cities"
              intro={
                <>
                  <p>Childcare affordability varies significantly between Amsterdam, Utrecht, Rotterdam and smaller cities. Kinderopvangtoeslag may help eligible families — but high provider rates and waiting lists in Randstad cities still require careful budgeting.</p>
                  <p>
                    Use the{" "}
                    <Link href={CHILDCARE_COST_ESTIMATOR_PATH} className="font-semibold text-link hover:text-link-hover">Childcare Cost Estimator</Link>
                    {" "}and city guides to connect allowance planning to local childcare reality — not as a substitute for official entitlement.
                  </p>
                </>
              }
              tips={page.childcareCostsTips}
              tipsTitle="City context + allowance"
              visual={page.infographics.childcareCosts}
              panel={{
                eyebrow: "Budget reality",
                title: "Gross invoice vs net out-of-pocket",
                rows: [
                  { label: "Provider quote", body: "Daycare and BSO invoices show gross monthly fees before allowance.", Icon: ReceiptText },
                  { label: "Planning-range benefit", body: "Model net cost with the estimator and official proefberekening.", Icon: Calculator },
                  { label: "City premium", body: "Randstad rates and waiting lists add pressure beyond allowance alone.", Icon: Globe2 },
                ],
              }}
              extra={
                <>
                  <ChildcareCostsConcepts />
                  <CityLinksGrid className="mt-0" />
                </>
              }
            />

            <section id="apply" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How to Apply for Childcare Allowance" fullWidth>
                  <p>Applications and updates go through Dienst Toeslagen — often via Mijn Toeslagen. Childcare providers cannot grant kinderopvangtoeslag on your behalf.</p>
                  <p>Gather income estimates, registered childcare hours and household work details before applying. Keep copies of submitted figures and your provider contract — update records when circumstances change.</p>
                  <p>
                    You typically need a{" "}
                    <Link href={BSN_REGISTRATION_PATH} className="font-semibold text-link hover:text-link-hover">BSN</Link>
                    {" "}and{" "}
                    <Link href={MUNICIPALITY_REGISTRATION_PATH} className="font-semibold text-link hover:text-link-hover">municipality registration</Link>
                    {" "}for your household before applying — plan these steps in your first weeks after arrival.
                  </p>
                </SectionIntro>
                <TipsPanel title="Application orientation" items={page.applyTips} />
                <ApplicationSteps />
                <ProcessPanel
                  eyebrow="Official channel"
                  title="Dienst Toeslagen — not third-party sites"
                  rowsLayout="wide"
                  rows={[
                    { label: "Mijn Toeslagen", body: "Official portal for applications and updates.", Icon: ShieldCheck },
                    { label: "Documentation", body: "Keep income, childcare hours and household figures you submit.", Icon: FileText },
                    { label: "Timely updates", body: "Report changes during the year — not only at application.", Icon: ClipboardCheck },
                  ]}
                  note="This guide does not submit applications or read government systems."
                />
                <VisualFigure visual={page.infographics.apply} className="mt-0" />
              </div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Common Expat Mistakes" fullWidth>
                  <p>These patterns appear often among international families planning kinderopvangtoeslag. Conservative planning and official confirmation reduce repayment and correspondence surprises.</p>
                </SectionIntro>
                <TipsPanel title="Avoid these planning traps" items={page.mistakesTips} />
                <MistakeCards />
                <ProcessPanel
                  eyebrow="Recovery risk"
                  title="Why mistakes matter later"
                  rowsLayout="wide"
                  rows={[
                    { label: "Overpayment", body: "Too much allowance based on optimistic income can be recovered by Dienst Toeslagen.", Icon: PiggyBank },
                    { label: "Missed allowance", body: "Eligible families who never apply leave support unclaimed.", Icon: Baby },
                    { label: "Household errors", body: "Wrong work-hour or partner status changes which income and hours count.", Icon: Globe2 },
                  ]}
                />
                <VisualFigure visual={page.infographics.mistakes} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="situation-changes"
              title="Life Changes That Affect Childcare Allowance"
              intro={
                <>
                  <p>Salary increases, job changes, partner income shifts, childcare hour changes and provider switches can reduce or remove allowance during the year. Report changes to Dienst Toeslagen promptly.</p>
                  <p>If you received too much based on later income or hours, overpayments may be recovered. Use official calculators to stress-test higher income or hour changes before assuming allowance will continue unchanged.</p>
                </>
              }
              tips={page.situationChangeTips}
              tipsTitle="Keep records updated"
              visual={page.infographics.situationChanges}
              panel={{
                eyebrow: "Report promptly",
                title: "Changes that trigger recalculation",
                rows: [
                  { label: "Income shifts", body: "Salary, bonus or partner income changes can lower reimbursement mid-year.", Icon: WalletCards },
                  { label: "Hour changes", body: "Reduced work hours may reduce eligible childcare hours.", Icon: BriefcaseBusiness },
                  { label: "Provider switch", body: "Update LRK details in Mijn Toeslagen when changing daycare or BSO.", Icon: Baby },
                ],
                note: "Late updates can lead to recovery of overpaid allowance — report through Mijn Toeslagen, not only at year-end.",
              }}
              extra={<ScenarioCards items={page.situationChangeScenarios} className="lg:grid-cols-2 xl:grid-cols-3" />}
            />

            <SectionWithVisual
              id="compare-benefits"
              title="Childcare Allowance vs Kinderbijslag, Zorgtoeslag and Huurtoeslag"
              intro={
                <>
                  <p>Kinderopvangtoeslag is one of several Dutch benefits (toeslagen) and family supports. Each has separate rules — qualifying for one does not automatically mean qualifying for others.</p>
                  <p>
                    See the{" "}
                    <Link href={HEALTHCARE_ALLOWANCE_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Healthcare Allowance guide</Link>
                    {" "}for zorgtoeslag rules, the{" "}
                    <Link href={RENT_ALLOWANCE_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Rent Allowance guide</Link>
                    {" "}for huurtoeslag, and the{" "}
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
                  <ProcessPanel
                    eyebrow="Side-by-side"
                    title="Kinderopvangtoeslag vs other family benefits at a glance"
                    rowsLayout="wide"
                    rows={[
                      { label: "Childcare allowance", body: "Supports registered childcare costs — work and income tests apply.", Icon: Baby },
                      { label: "Kinderbijslag", body: "Child benefit paid by SVB — separate from toeslag childcare support.", Icon: Users },
                      { label: "Healthcare allowance", body: "Supports basic health insurance premiums — insurance and asset tests apply.", Icon: ShieldCheck },
                      { label: "Rent allowance", body: "Supports qualifying housing costs — property and rent tests apply.", Icon: WalletCards },
                    ]}
                  />
                  <div className="grid w-full gap-4 sm:grid-cols-2">
                    {page.futureBenefitLinks.map((item, index) => (
                      <LinkCard key={item.href} item={item} iconIndex={index + 2} />
                    ))}
                  </div>
                </>
              }
            />

            <SectionWithVisual
              id="expat-family"
              title="Expat Families and Childcare Planning"
              intro={
                <>
                  <p>International families often juggle relocation timing, partner work eligibility, school choices and childcare waiting lists in the same year. Kinderopvangtoeslag planning sits alongside — not instead of — those decisions.</p>
                  <p>
                    Start with the{" "}
                    <Link href={MOVING_WITH_FAMILY_PATH} className="font-semibold text-link hover:text-link-hover">Moving with family guide</Link>
                    {" "}for relocation sequencing, then explore the{" "}
                    <Link href={FAMILY_TOOLS_PATH} className="font-semibold text-link hover:text-link-hover">Family tools hub</Link>
                    {" "}for budgeting calculators and partner-work context.
                  </p>
                </>
              }
              tips={page.expatFamilyTips}
              tipsTitle="Expat family planning"
              visual={page.infographics.expatFamily}
              panel={{
                eyebrow: "Family timeline",
                title: "Plan childcare search in parallel with housing",
                rows: [
                  { label: "Waiting lists", body: "Register with multiple LRK providers before your move date when possible.", Icon: Baby },
                  { label: "School path", body: "International school fees are separate — Dutch registered care is the toeslag route.", Icon: School },
                  { label: "Partner work", body: "Household activity and income both affect eligible hours and reimbursement.", Icon: BriefcaseBusiness },
                ],
              }}
              extra={
                <>
                  <ExpatFamilyConcepts />
                  <ExpatFamilyLinksGrid className="mt-0" />
                </>
              }
            />

            <section id="questions" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Questions Expats Often Ask" fullWidth>
                  <p>These are the questions international professionals and families ask most often about kinderopvangtoeslag — from eligibility and care types to partners, hours and application channels.</p>
                  <p>Answers below are orientation only. Verify your personal situation on official toeslagen guidance or with qualified advisers.</p>
                </SectionIntro>
                <TipsPanel title="Start with these prompts" items={page.questionsSectionTips} />
                <QuestionGrid items={page.expatQuestions} />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Family and Tax Guides" fullWidth>
                  <p>Connect kinderopvangtoeslag planning to family tools, tax guides and broader relocation context.</p>
                  <p>
                    Start with the{" "}
                    <Link href={FAMILY_TOOLS_PATH} className="font-semibold text-link hover:text-link-hover">Family tools hub</Link>
                    {" "}before comparing childcare costs and allowance eligibility.
                  </p>
                </SectionIntro>
                <TipsPanel title="How to use these guides together" items={page.relatedGuideTips} />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
                <VisualFigure visual={page.infographics.relatedGuides} className="mt-0" />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Professional Services That May Help" fullWidth>
                  <p>Most kinderopvangtoeslag questions are concept-level, but complex household situations, provider contracts and correspondence with Dienst Toeslagen may need professional review — orientation only, not benefit advice.</p>
                </SectionIntro>
                <TipsPanel title="When professional help makes sense" items={page.servicesTips} />
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
                    { label: "Relocation services", body: "Move-year registration and family orientation.", Icon: Globe2 },
                    { label: "Childcare search", body: "Provider search — confirm allowance eligibility separately.", Icon: Baby },
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
                  <p>These answers summarize common childcare allowance questions for expats. Orientation only — not tax, benefit or legal advice.</p>
                  <p>If you plan to apply, work through the quick checks below before relying on general answers.</p>
                </SectionIntro>
                <ChecklistBlock title="Quick checks before you decide" items={page.faqQuickChecks} />
                <QuestionGrid items={page.faq} compact />
                <ProcessPanel
                  eyebrow="Rule of thumb"
                  title="Plan conservatively — confirm officially"
                  rowsLayout="wide"
                  rows={[
                    { label: "Verify care type", body: "Confirm your provider and hours may meet official kinderopvangtoeslag rules.", Icon: Baby },
                    { label: "Use planning tools", body: "Connect allowance planning to local childcare costs and family budget.", Icon: Calculator },
                    { label: "Use official sources", body: "Rules and caps change with policy.", Icon: Landmark },
                  ]}
                  note="Childcare allowance is administered by Dienst Toeslagen. Individual circumstances vary."
                />
                <VisualFigure visual={page.infographics.questions} className="mt-0" />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Official Sources" fullWidth>
                  <p>Childcare allowance rules, hourly caps and application requirements are set by Dutch government policy. Verify current figures on official sources before applying or updating records.</p>
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
                  <p>Connect kinderopvangtoeslag planning to family tools, tax benefits and relocation guides across the site.</p>
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
                <p>Move from kinderopvangtoeslag concepts into family tools, city comparison and relocation planning.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.exploreNextCards.map((item, index) => (
                  <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />
                ))}
              </div>
              <VisualFigure visual={page.infographics.exploreNext} className="mt-6 border-white/10 bg-white/5 ring-white/10 [&_figcaption]:border-white/10 [&_figcaption]:bg-white/5 [&_figcaption]:text-slate-300" />
            </section>

            <p className="rounded-2xl border border-amber-100 bg-amber-50/80 p-5 text-sm leading-relaxed text-amber-950">
              <strong>Disclaimer:</strong> This guide is for orientation only. It is not tax advice, benefit advice or legal advice. Childcare allowance eligibility and amounts depend on individual circumstances, household type, care rules and applicable regulations. Only Dienst Toeslagen determines official awards. Confirm personal questions with qualified professionals and official sources.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
