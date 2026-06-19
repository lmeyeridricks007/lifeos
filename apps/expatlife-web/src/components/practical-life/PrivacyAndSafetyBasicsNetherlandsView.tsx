import Image from "next/image";
import Link from "next/link";
import { Children, type ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Home,
  Lock,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Accordion } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { getSiteOrigin } from "@/lib/site-origin";
import { activeBrightnessPress, transitionInteractive } from "@/lib/ui/interaction";
import {
  guidePremiumCardGridClass,
  guidePremiumIntroStackClass,
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualSpacingClass,
} from "@/lib/ui/guide-premium-page-ui";
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
  CITIES_FUNNEL_INFO_CHIP,
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  citiesFunnelHeroFigureClassName,
} from "@/src/components/cities/shared/citiesFunnelPageUi";
import { GuidePremiumVisualFigure, type GuidePremiumVisual } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  privacyAndSafetyBasicsNetherlandsPage as page,
  type ContactDirectoryEntry,
  type CitySafetyCard,
  type PracticalLifeLink,
  type SafetyGuideSection,
  type SafetyScenario,
  type SafetyTask,
} from "./privacyAndSafetyBasicsNetherlandsPageModel";

const baseUrl = getSiteOrigin();
const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const cardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);
const iconPool = [ShieldCheck, Lock, Smartphone, Home, Building2, AlertTriangle, Users, GraduationCap, MapPin] as const;
const snapshotIcons = [ShieldCheck, Lock, AlertTriangle, Smartphone] as const;
const premiumVisualClass = guidePremiumVisualSpacingClass;
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

const sectionVisualMap: Record<string, GuidePremiumVisual> = {
  privacy: page.visuals.privacy,
  personalSafety: page.visuals.personalSafety,
  emergencyServices: page.visuals.emergencyServices,
  police: page.visuals.police,
  digitalSafety: page.visuals.digitalSafety,
  banking: page.visuals.banking,
  housing: page.visuals.housing,
  digitalGovernment: page.visuals.digitalGovernment,
  consumerProtection: page.visuals.consumerProtection,
  families: page.visuals.families,
  students: page.visuals.students,
};

const sectionDetailsMap: Record<string, (typeof page.visualTextDetails)[keyof typeof page.visualTextDetails]> = {
  privacy: page.visualTextDetails.privacy,
  personalSafety: page.visualTextDetails.personalSafety,
  emergencyServices: page.visualTextDetails.emergencyServices,
  police: page.visualTextDetails.police,
  digitalSafety: page.visualTextDetails.digitalSafety,
  banking: page.visualTextDetails.banking,
  housing: page.visualTextDetails.housing,
  digitalGovernment: page.visualTextDetails.digitalGovernment,
  consumerProtection: page.visualTextDetails.consumerProtection,
  families: page.visualTextDetails.families,
  students: page.visualTextDetails.students,
};

function InfoTable({
  rows,
  columns,
}: {
  rows: Array<Record<string, string>>;
  columns: Array<{ key: string; label: string }>;
}) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-4 py-3 font-bold">{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr key={idx}>
                {columns.map((column, cellIdx) => (
                  <td key={column.key} className={cn("px-4 py-4 text-foreground-muted", cellIdx === 0 && "font-semibold text-foreground")}>
                    {row[column.key]}
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

function SafetyTaskTable({ title, rows }: { title: string; rows: readonly SafetyTask[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Practical tasks" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ task: row.task, channel: row.channel, timing: row.timing }))}
          columns={[
            { key: "task", label: "Task" },
            { key: "channel", label: "How to do it" },
            { key: "timing", label: "When" },
          ]}
        />
      </div>
    </div>
  );
}

function SafetyScenarioTable({ title, rows }: { title: string; rows: readonly SafetyScenario[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ situation: row.situation, action: row.action, note: row.note }))}
          columns={[
            { key: "situation", label: "Situation" },
            { key: "action", label: "What to do" },
            { key: "note", label: "Note" },
          ]}
        />
      </div>
    </div>
  );
}

function MilestoneStatGrid({ items }: { items: readonly { label: string; value: string; note: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.label} className={cn(cardClass, "p-4 sm:p-5")}>
          <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{item.label}</p>
          <p className="mt-2 text-xl font-black tracking-tight text-foreground">{item.value}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.note}</p>
        </article>
      ))}
    </div>
  );
}

function PremiumGuideSection({
  id,
  intro,
  visual,
  children,
}: {
  id: string;
  intro: ReactNode;
  visual: GuidePremiumVisual;
  children: ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className={guidePremiumIntroStackClass}>{intro}</div>
      <GuidePremiumVisualFigure visual={visual} className={premiumVisualClass} />
      <div className={guidePremiumSectionDetailStackClass}>{children}</div>
    </section>
  );
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
            "mt-3 space-y-3 text-base leading-relaxed",
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

function VisualTextDetails({
  details,
  tone = "default",
}: {
  details: (typeof page.visualTextDetails)[keyof typeof page.visualTextDetails];
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <aside
      className={cn(
        "rounded-3xl border p-5 ring-1",
        onDark ? "border-white/10 bg-white/10 ring-white/10" : "border-slate-200/90 bg-slate-50/85 ring-slate-900/[0.03]"
      )}
    >
      <h3 className={cn("text-base font-black tracking-tight", onDark ? "text-white" : "text-foreground")}>{details.title}</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {details.items.map((item) => (
          <li key={item} className={cn("flex gap-3 text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
            <ShieldCheck className={cn("mt-0.5 h-4 w-4 shrink-0", onDark ? "text-cyan-200" : "text-brand-strong")} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
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

function QuickAnswerBox() {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-br from-copilot-bg-soft via-white to-cyan-50/50 p-5 ring-1 ring-copilot-primary/10", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-sm font-bold text-foreground">{page.quickAnswer.summary}</p>
      <ul className="mt-4 space-y-2">
        {page.quickAnswer.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-2xl bg-white/80 p-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-slate-900/[0.04]">
        <span className="font-bold text-foreground">Tip: </span>
        {page.quickAnswer.note}
      </p>
    </aside>
  );
}

function FeatureCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = iconPool[iconIndex % iconPool.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
    </article>
  );
}

function FeatureGrid({ items }: { items: ReadonlyArray<{ title: string; body: string }> }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => (
        <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={index} />
      ))}
    </div>
  );
}

function ChecklistBlock({
  title,
  items,
  columns = 1,
  className,
}: {
  title: string;
  items: readonly string[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <div className={cn("w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass, className)}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{title}</p>
      <ul className={cn("mt-4 gap-3", columns === 2 ? "grid md:grid-cols-2" : "space-y-3")}>
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GuideCrossLink({
  href,
  title,
  description,
  linkLabel,
  icon: Icon = ArrowRight,
}: {
  href: string;
  title: string;
  description: string;
  linkLabel: string;
  icon?: typeof ArrowRight;
}) {
  return (
    <aside className={cn(cardClass, "flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-6")}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div>
        <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">{description}</p>
      </div>
      <Link
        href={href}
        className={cn(
          "mt-4 inline-flex shrink-0 items-center gap-2 rounded-xl border border-brand/20 bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-strong sm:mt-0",
          transitionInteractive,
          activeBrightnessPress
        )}
      >
        {linkLabel}
        <Icon className="h-4 w-4" aria-hidden />
      </Link>
    </aside>
  );
}

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
        "group relative block overflow-hidden p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        movingNlCardMicroLiftClass,
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-link">
        <ShieldCheck className="h-4 w-4 text-brand-strong" aria-hidden />
        {source.label}
        <ExternalLink className="h-3.5 w-3.5 text-foreground-muted" aria-hidden />
      </span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">
        Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </a>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: PracticalLifeLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = iconPool[iconIndex % iconPool.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1",
          onDark ? "bg-white/10 text-cyan-100 ring-white/15" : "bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong ring-copilot-primary/10"
        )}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className={cn("mt-4 block text-sm font-bold", onDark ? "text-white" : "text-foreground")}>
        {item.label}
        {!isLive ? (
          <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500")}>
            Coming soon
          </span>
        ) : null}
      </span>
      {item.description ? (
        <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span>
      ) : null}
      {isLive ? (
        <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link")}>
          Open guide <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      ) : null}
    </>
  );

  if (!isLive) {
    return <article className={cn(cardClass, onDark && "border-white/10 bg-white/10 text-white ring-white/10", "opacity-90")}>{body}</article>;
  }

  return (
    <Link
      href={item.href}
      className={cn(
        cardClass,
        onDark && "border-white/10 bg-white/10 ring-white/10",
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      {body}
    </Link>
  );
}

function LinkCardGrid({ items }: { items: PracticalLifeLink[] }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => (
        <LinkCard key={`${item.label}-${index}`} item={item} iconIndex={index} />
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

function OrientationFlowBand({ className }: { className?: string }) {
  const stepIcons = [Phone, ShieldCheck, Lock] as const;
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three safety moves after arrival</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {page.orientationFlowSteps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-100 ring-1 ring-white/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{index + 1}.</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-300">{step}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

function HeroSignalStrip() {
  return (
    <div className="relative mt-5 grid gap-3 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/82 p-3 shadow-card ring-1 ring-slate-900/[0.03] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {page.snapshotSignals.map((signal, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <div key={signal.label} className="relative rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-copilot-bg-soft/70 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-foreground-muted">{signal.label}</span>
                <span className="mt-1 block text-sm font-bold leading-snug text-foreground">{signal.value}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-foreground-muted">{signal.note}</span>
              </span>
            </div>
          </div>
        );
      })}
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

function CitySafetyGrid({ items }: { items: readonly CitySafetyCard[] }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => {
        const Icon = iconPool[index % iconPool.length];
        return (
          <Link
            key={item.city}
            href={item.href}
            className={cn(
              cardClass,
              "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
              transitionInteractive,
              activeBrightnessPress
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-link">{item.city}</span>
            </span>
            <p className="mt-3 text-sm font-semibold text-foreground">{item.environment}</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.considerations}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">
              Open city guide <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function ContactDirectoryGrid({ items }: { items: readonly ContactDirectoryEntry[] }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item) => (
        <article key={item.name} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="flex items-center gap-2 text-base font-bold tracking-tight text-foreground">
            <ShieldCheck className="h-4 w-4 text-brand-strong" aria-hidden />
            {item.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.purpose}</p>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">When to use</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{item.whenToUse}</p>
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-link hover:text-link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
              transitionInteractive
            )}
          >
            {item.websiteLabel}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </article>
      ))}
    </div>
  );
}

function SafetyGuideSection({ section }: { section: SafetyGuideSection }) {
  const visual = sectionVisualMap[section.visualSlug];
  const details = sectionDetailsMap[section.visualSlug];
  if (!visual || !details) return null;

  return (
    <PremiumGuideSection
      id={section.id}
      intro={
        <SectionIntro title={section.heading} fullWidth>
          {section.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </SectionIntro>
      }
      visual={visual}
    >
      <VisualTextDetails details={details} />
      {section.cards ? <FeatureGrid items={[...section.cards]} /> : null}
      {section.bullets ? <BulletPanel title={section.bulletTitle ?? "Practical points"} items={section.bullets} /> : null}
      {section.tasks ? <SafetyTaskTable title={`Common tasks for ${section.heading}`} rows={section.tasks} /> : null}
      {section.scenarios ? <SafetyScenarioTable title={`Real-world examples — ${section.heading}`} rows={section.scenarios} /> : null}
      {section.crossLink ? (
        <GuideCrossLink
          href={section.crossLink.href}
          title={section.crossLink.title}
          description={section.crossLink.description}
          linkLabel={section.crossLink.linkLabel}
        />
      ) : null}
    </PremiumGuideSection>
  );
}

function ScamsSection() {
  return (
    <PremiumGuideSection
      id="scams"
      intro={
        <SectionIntro title="Common Scams Targeting Newcomers" fullWidth>
          <p>
            Scammers often target expats who are unfamiliar with Dutch government communication patterns, rental market pressure and payment habits. Recognising these patterns early helps you verify before paying or sharing documents.
          </p>
        </SectionIntro>
      }
      visual={page.visuals.scams}
    >
      <VisualTextDetails details={page.visualTextDetails.scams} />
      <FeatureGrid items={page.scamCards} />
      <SafetyScenarioTable title="How scams play out in practice" rows={page.scamScenarios} />
      <SafetyTaskTable title="If you suspect or fall victim to a scam" rows={page.scamReportingSteps} />
    </PremiumGuideSection>
  );
}

export function PrivacyAndSafetyBasicsNetherlandsView() {
  const faqAccordionItems = page.faqs.map((item, index) => ({
    id: `faq-${index}`,
    title: item.q,
    content: item.a,
  }));

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: baseUrl },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Moving to the Netherlands", item: new URL(page.hubPath, baseUrl).toString() },
          { name: "Municipality services", item: new URL(page.parentGuidePath, baseUrl).toString() },
          { name: "Privacy and Safety", item: new URL(page.path, baseUrl).toString() },
        ]}
      />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "overflow-hidden p-0")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
                <div>
                  <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
                    <Link href="/" className="hover:text-foreground">Home</Link>
                    <span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link>
                    <span aria-hidden>/</span>
                    <Link href={page.hubPath} className="hover:text-foreground">Moving to the Netherlands</Link>
                    <span aria-hidden>/</span>
                    <Link href={page.parentGuidePath} className="hover:text-foreground">Municipality services</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Privacy and Safety</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {page.hero.chips.map((chip) => (
                      <span key={chip} className={cn(CITIES_FUNNEL_INFO_CHIP, "shadow-sm ring-1 ring-slate-900/[0.03]")}>{chip}</span>
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
                  <p className="mt-5 max-w-3xl rounded-2xl border border-amber-200/70 bg-amber-50/70 px-4 py-3 text-sm leading-relaxed text-amber-950 shadow-sm ring-1 ring-amber-200/40">
                    {page.hero.disclaimer}
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="Privacy and safety page sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
                    transitionInteractive,
                    activeBrightnessPress
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <PremiumGuideSection
              id="intro"
              intro={
                <SectionIntro eyebrow="Quick answer" title={page.intro.heading} fullWidth>
                  {page.intro.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.intro}
            >
              <VisualTextDetails details={page.visualTextDetails.intro} />
              <QuickAnswerBox />
              <QuestionCards className="mt-6" />
              <OrientationFlowBand className="mt-6" />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              intro={
                <SectionIntro eyebrow="At a glance" title="Privacy and Safety at a Glance" fullWidth>
                  <p>Use these signals to orient yourself on emergency numbers, privacy norms, scam awareness and official channels before you settle in.</p>
                </SectionIntro>
              }
              visual={page.visuals.snapshot}
            >
              <VisualTextDetails details={page.visualTextDetails.snapshot} />
              <MilestoneStatGrid items={page.snapshotMilestones} />
              <FeatureGrid items={page.snapshotCards} />
              <ChecklistBlock title="How to use this snapshot" items={page.snapshotUseTips} columns={2} />
            </PremiumGuideSection>

            {page.guideSections.flatMap((section) => {
              const elements = [<SafetyGuideSection key={section.id} section={section} />];
              if (section.id === "digital-safety") {
                elements.push(<ScamsSection key="scams" />);
              }
              return elements;
            })}

            <PremiumGuideSection
              id="cities"
              intro={
                <SectionIntro title="Safety by City" fullWidth>
                  <p>Major Dutch cities share reliable services but differ in density, nightlife patterns and rental market pressure. Use city guides for neighbourhood-specific orientation.</p>
                </SectionIntro>
              }
              visual={page.visuals.cities}
            >
              <VisualTextDetails details={page.visualTextDetails.cities} />
              <CitySafetyGrid items={page.citySafetyCards} />
              <SafetyScenarioTable title="City situations expats often encounter" rows={page.citySafetyScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              intro={
                <SectionIntro title="Newcomer Safety Checklist" fullWidth>
                  <p>Complete these practical steps in your first weeks after arrival to build calm, everyday safety habits.</p>
                </SectionIntro>
              }
              visual={page.visuals.checklist}
            >
              <VisualTextDetails details={page.visualTextDetails.checklist} />
              <MilestoneStatGrid items={page.checklistMilestones} />
              <ChecklistBlock title="First-week safety checklist" items={page.safetyChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              intro={
                <SectionIntro title="Common Safety and Privacy Mistakes" fullWidth>
                  <p>Expats often increase fraud risk through rushed housing payments, weak passwords and unverified links — these patterns are easy to avoid with planning.</p>
                </SectionIntro>
              }
              visual={page.visuals.mistakes}
            >
              <VisualTextDetails details={page.visualTextDetails.mistakes} />
              <FeatureGrid items={page.mistakeCards} />
              <ChecklistBlock title="Quick fixes for each mistake pattern" items={page.mistakeFixTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="contacts"
              intro={
                <SectionIntro title="Official Safety and Privacy Contacts" fullWidth>
                  <p>Bookmark these channels for emergencies, fraud reporting, data protection questions and calm government orientation.</p>
                </SectionIntro>
              }
              visual={page.visuals.contacts}
            >
              <VisualTextDetails details={page.visualTextDetails.contacts} />
              <SafetyTaskTable title="Quick contact reference" rows={page.contactQuickReference} />
              <ContactDirectoryGrid items={page.contactDirectory} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              intro={
                <SectionIntro eyebrow="FAQ" title="Privacy and Safety FAQ" fullWidth>
                  <p>Answers to common questions about emergency numbers, fraud reporting, DigiD protection and consumer rights in the Netherlands.</p>
                </SectionIntro>
              }
              visual={page.visuals.faq}
            >
              <VisualTextDetails details={page.visualTextDetails.faq} />
              <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="sources"
              intro={
                <SectionIntro title="Official Sources" fullWidth>
                  <p>Starting points for safety information, emergency orientation, fraud alerts and privacy rights in the Netherlands.</p>
                </SectionIntro>
              }
              visual={page.visuals.sources}
            >
              <VisualTextDetails details={page.visualTextDetails.sources} />
              <ChecklistBlock title="How to use these resources" items={page.sourceUsageTips} columns={2} />
              <p className="text-sm leading-relaxed text-foreground-muted">{page.sourcesDisclaimer}</p>
              <div className={guidePremiumCardGridClass(page.officialSources.length)}>
                {page.officialSources.map((source) => (
                  <SourceLink key={source.href} source={source} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              intro={
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Continue into DigiD, government portals, housing and banking guides to complete your practical setup.</p>
                </SectionIntro>
              }
              visual={page.visuals.relatedGuides}
            >
              <VisualTextDetails details={page.visualTextDetails.relatedGuides} />
              <LinkCardGrid items={[...page.relatedGuides]} />
            </PremiumGuideSection>

            <section
              id="explore-next"
              className={cn(
                CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
                "scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10"
              )}
            >
              <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
              <div className="mt-6">
                <SectionIntro eyebrow="Explore next" title="Continue Your Practical Setup" tone="onDark" fullWidth>
                  <p>Pick the next guide that matches your current priority — DigiD security, government portals, housing or banking.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure visual={page.visuals.exploreNext} tone="onDark" className={premiumVisualClass} />
                <div className={guidePremiumSectionDetailStackClass}>
                  <VisualTextDetails details={page.visualTextDetails.exploreNext} tone="onDark" />
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.exploreNextCards.map((item, idx) => (
                      <LinkCard key={`${item.label}-${idx}`} item={item} iconIndex={idx} tone="onDark" />
                    ))}
                  </div>
                  <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10">
                    <h3 className="text-base font-bold tracking-tight text-white">Practical tips</h3>
                    <ul className="mt-4 grid gap-3">
                      {page.exploreNextTips.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-cyan-100 ring-1 ring-white/15">
                            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
