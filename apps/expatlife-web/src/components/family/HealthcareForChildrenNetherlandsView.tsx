import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Ambulance,
  ArrowRight,
  Baby,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  ExternalLink,
  FileText,
  Globe2,
  HeartPulse,
  Hospital,
  Pill,
  School,
  ShieldCheck,
  Siren,
  Smile,
  Stethoscope,
  Syringe,
  Thermometer,
  Users,
  WalletCards,
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
  HEALTHCARE_FOR_CHILDREN_PATH,
  PARENTING_NETHERLANDS_PATH,
  healthcareForChildrenNetherlandsPage as page,
  type HealthcareLink,
  type SurpriseCard as SurpriseCardData,
  type TimelineStep,
  type UrgencyRow,
} from "./healthcareForChildrenNetherlandsPageModel";

const baseUrl = getSiteOrigin();

const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionClassOnDark = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  "relative isolate overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-white/10 sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const cardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);

const iconPool = [
  Stethoscope,
  HeartPulse,
  Baby,
  Syringe,
  Hospital,
  Siren,
  Smile,
  Brain,
  Pill,
  ClipboardList,
  ShieldCheck,
  CalendarCheck,
  Users,
  School,
  FileText,
  Globe2,
  Thermometer,
  Activity,
] as const;
const snapshotIcons = [WalletCards, Stethoscope, Baby, Siren] as const;
const orientationIcons = [WalletCards, Stethoscope, HeartPulse, Siren] as const;
const contactIcons = [Ambulance, Stethoscope, Clock, Pill] as const;

const scenarioColumns = [
  { key: "situation", label: "Situation" },
  { key: "approach", label: "How it works here" },
  { key: "firstStep", label: "First step" },
] as const;

const serviceColumns = [
  { key: "service", label: "Service" },
  { key: "purpose", label: "What it does" },
  { key: "whenToUse", label: "When to use it" },
  { key: "access", label: "Access & cost" },
] as const;

const coverageColumns = [
  { key: "careType", label: "Care type" },
  { key: "coverage", label: "Cover for under-18s" },
  { key: "note", label: "Note" },
] as const;

const ageMomentColumns = [
  { key: "moment", label: "Moment" },
  { key: "focus", label: "Focus" },
  { key: "note", label: "Parent note" },
] as const;

const vaccinationColumns = [
  { key: "phase", label: "Phase" },
  { key: "typicallyOffered", label: "Typically offered" },
  { key: "parentAction", label: "What you do" },
] as const;

const hospitalColumns = [
  { key: "setting", label: "Setting" },
  { key: "covers", label: "What it covers" },
  { key: "howYouGetThere", label: "How you get there" },
] as const;

const illnessColumns = [
  { key: "whatYouNotice", label: "What you notice" },
  { key: "firstContact", label: "First contact" },
  { key: "note", label: "Note" },
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

function PremiumGuideSection({
  id,
  intro,
  visual,
  children,
  visualTone = "default",
  sectionTone = "default",
  tipsKey,
}: {
  id: string;
  intro: ReactNode;
  visual: GuidePremiumVisual;
  children: ReactNode;
  visualTone?: "default" | "onDark";
  sectionTone?: "default" | "onDark";
  tipsKey?: keyof typeof page.visualTextDetails;
}) {
  const onDark = sectionTone === "onDark";
  return (
    <section id={id} className={onDark ? sectionClassOnDark : sectionClass}>
      {onDark ? (
        <div
          className={cn("absolute inset-x-6 top-0 h-1.5 rounded-full sm:inset-x-8 lg:inset-x-10", movingNlSignatureGradientClass)}
          aria-hidden
        />
      ) : null}
      <div className={cn(guidePremiumIntroStackClass, onDark && "relative mt-2")}>{intro}</div>
      <GuidePremiumVisualFigure visual={visual} tone={visualTone} className={guidePremiumVisualSpacingClass} />
      <div className={guidePremiumSectionDetailStackClass}>
        {tipsKey ? <VisualTextDetails tipsKey={tipsKey} tone={onDark ? "onDark" : "default"} /> : null}
        {children}
      </div>
    </section>
  );
}

function VisualTextDetails({
  tipsKey,
  tone = "default",
}: {
  tipsKey: keyof typeof page.visualTextDetails;
  tone?: "default" | "onDark";
}) {
  const details = page.visualTextDetails[tipsKey];
  return <BulletPanel title={details.title} items={details.items} tone={tone} />;
}

function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "default",
  fullWidth = true,
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

function BulletPanel({
  title,
  items,
  tone = "default",
}: {
  title: string;
  items: readonly string[];
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl p-5 shadow-sm ring-1",
        onDark
          ? "border-white/10 bg-white/10 text-white ring-white/10"
          : "border border-slate-200/90 bg-white/95 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className={cn("text-base font-bold tracking-tight", onDark ? "text-white" : "text-foreground")}>{title}</h3>
      <ul className={cn("mt-4 grid gap-3", onDark ? undefined : "md:grid-cols-2")}>
        {items.map((item) => (
          <li
            key={item}
            className={cn("flex gap-3 text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}
          >
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1",
                onDark
                  ? "bg-white/10 text-cyan-200 ring-white/15"
                  : "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10"
              )}
            >
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
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

function InfoTable({
  rows,
  columns,
}: {
  rows: Array<Record<string, ReactNode>>;
  columns: ReadonlyArray<{ key: string; label: string }>;
}) {
  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.12em] text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-4 py-3 font-bold">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, idx) => (
              <tr key={idx}>
                {columns.map((column, cellIdx) => (
                  <td
                    key={column.key}
                    className={cn("px-4 py-4 text-foreground-muted", cellIdx === 0 && "font-semibold text-foreground")}
                  >
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

function ScenarioTable({
  title,
  rows,
}: {
  title: string;
  rows: ReadonlyArray<{ situation: string; approach: string; firstStep: string }>;
}) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          columns={scenarioColumns}
          rows={rows.map((row) => ({ situation: row.situation, approach: row.approach, firstStep: row.firstStep }))}
        />
      </div>
    </div>
  );
}

function NotePanel({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-slate-900/[0.04]">
      {children}
    </p>
  );
}

function WarningPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-amber-200/80 bg-amber-50/80 p-5 shadow-sm ring-1 ring-amber-200/50",
        movingNlCardMicroLiftClass
      )}
      role="note"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-300" aria-hidden />
      <h3 className="flex items-center gap-2 text-base font-bold tracking-tight text-amber-950">
        <AlertTriangle className="h-4 w-4 text-amber-700" aria-hidden />
        {title}
      </h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-amber-950">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/70 text-amber-800 ring-1 ring-amber-200/70">
              <AlertTriangle className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
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

function MiniStatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <article className={cn(cardClass, "p-4 sm:p-5")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{label}</p>
      <p className="mt-2 text-xl font-black tracking-tight text-foreground">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{note}</p>
    </article>
  );
}

function ContactCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = contactIcons[iconIndex % contactIcons.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-base font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
    </article>
  );
}

function SurpriseCard({ card, index }: { card: SurpriseCardData; index: number }) {
  const Icon = iconPool[index % iconPool.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
      <p className="mt-3 rounded-2xl bg-copilot-bg-soft/70 p-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-copilot-primary/10">
        <span className="font-bold text-foreground">Fix: </span>
        {card.tip}
      </p>
    </article>
  );
}

function Timeline({ steps, eyebrow }: { steps: readonly TimelineStep[]; eyebrow: string }) {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, index) => (
        <li key={step.phase} className="relative flex gap-4 pb-8 last:pb-0">
          {index < steps.length - 1 ? (
            <span
              className="absolute left-[1.125rem] top-10 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-brand/40 to-cyan-300/40"
              aria-hidden
            />
          ) : null}
          <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copilot-bg-soft to-white text-xs font-bold text-brand-strong shadow-sm ring-2 ring-white">
            {step.phase}
          </span>
          <div className={cn(cardClass, "flex-1 p-4")}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">
              {eyebrow} {step.phase}
            </p>
            <h3 className="mt-1 text-base font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

const urgencyGroups = [
  {
    level: "emergency" as const,
    eyebrow: "Call 112 now",
    title: "Life-threatening — emergency services",
    icon: Siren,
    shell: "border-rose-200/80 bg-rose-50/80 ring-rose-200/50",
    accent: "bg-gradient-to-r from-rose-500 via-rose-400 to-orange-300",
    text: "text-rose-950",
    chip: "bg-white/70 text-rose-800 ring-rose-200/70",
  },
  {
    level: "urgent" as const,
    eyebrow: "Same day",
    title: "Urgent — your GP or the huisartsenpost",
    icon: Clock,
    shell: "border-amber-200/80 bg-amber-50/80 ring-amber-200/50",
    accent: "bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300",
    text: "text-amber-950",
    chip: "bg-white/70 text-amber-800 ring-amber-200/70",
  },
  {
    level: "routine" as const,
    eyebrow: "Next working day",
    title: "Routine — a normal GP or JGZ appointment",
    icon: CalendarCheck,
    shell: "border-emerald-200/80 bg-emerald-50/70 ring-emerald-200/50",
    accent: "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300",
    text: "text-emerald-950",
    chip: "bg-white/70 text-emerald-800 ring-emerald-200/70",
  },
];

function UrgencyBoard({ rows }: { rows: readonly UrgencyRow[] }) {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {urgencyGroups.map((group) => {
        const groupRows = rows.filter((row) => row.level === group.level);
        const Icon = group.icon;
        return (
          <div
            key={group.level}
            className={cn(
              "relative overflow-hidden rounded-3xl border p-5 shadow-sm ring-1",
              group.shell,
              movingNlCardMicroLiftClass
            )}
          >
            <div className={cn("absolute inset-x-0 top-0 h-1.5", group.accent)} aria-hidden />
            <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", group.text)}>{group.eyebrow}</p>
            <h3 className={cn("mt-2 flex items-start gap-2 text-lg font-bold leading-snug tracking-tight", group.text)}>
              <span className={cn("mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ring-1", group.chip)}>
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              {group.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {groupRows.map((row) => (
                <li key={row.situation} className="rounded-2xl bg-white/75 p-3 ring-1 ring-white/60">
                  <p className={cn("text-sm font-semibold leading-snug", group.text)}>{row.situation}</p>
                  <p className={cn("mt-1 text-sm leading-relaxed", group.text, "opacity-90")}>{row.action}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function LinkCard({
  item,
  iconIndex = 0,
  tone = "default",
}: {
  item: HealthcareLink;
  iconIndex?: number;
  tone?: "default" | "onDark";
}) {
  const Icon = iconPool[iconIndex % iconPool.length];
  const isExternal = item.status === "external";
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const body = (
    <>
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1.5 rounded-t-2xl",
          isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200"
        )}
        aria-hidden
      />
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10",
          onDark && "from-white/10 to-white/5 text-cyan-200 ring-white/10"
        )}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className={cn("mt-4 block text-sm font-bold", onDark ? "text-white" : "text-foreground")}>
        {item.label}
        {!isLive ? (
          <span
            className={cn(
              "ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]",
              onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500"
            )}
          >
            Coming soon
          </span>
        ) : null}
        {isExternal ? (
          <span
            className={cn(
              "ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]",
              onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500"
            )}
          >
            External
          </span>
        ) : null}
      </span>
      {item.description ? (
        <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
          {item.description}
        </span>
      ) : null}
      {isLive ? (
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
          Open {isExternal ? <ExternalLink className="h-3.5 w-3.5" aria-hidden /> : <ArrowRight className="h-3.5 w-3.5" aria-hidden />}
        </span>
      ) : null}
    </>
  );

  if (!isLive) {
    return (
      <article className={cn(cardClass, "opacity-90", onDark && "border-slate-700/80 bg-slate-900/40 ring-slate-600/30")}>
        {body}
      </article>
    );
  }

  const linkClass = cn(
    cardClass,
    "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
    onDark && "border-slate-700/80 bg-slate-900/40 ring-slate-600/30",
    transitionInteractive,
    activeBrightnessPress
  );

  if (isExternal) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {body}
      </a>
    );
  }

  return (
    <Link href={item.href} className={linkClass}>
      {body}
    </Link>
  );
}

function SourceLink({ source }: { source: { label: string; href: string; description: string } }) {
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

function GuideCrossLink({
  href,
  title,
  description,
  linkLabel,
}: {
  href: string;
  title: string;
  description: string;
  linkLabel: string;
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
          "mt-4 inline-flex shrink-0 items-center gap-2 rounded-xl border border-brand/20 bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:mt-0",
          transitionInteractive,
          activeBrightnessPress
        )}
      >
        {linkLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </aside>
  );
}

function QuickAnswerBox() {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-brand/15 bg-gradient-to-br from-copilot-bg-soft via-white to-cyan-50/50 p-5 ring-1 ring-copilot-primary/10",
        movingNlCardMicroLiftClass
      )}
    >
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

function OrientationFlowBand({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Four building blocks before your first appointment</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {page.orientationFlowSteps.map((step, index) => {
            const Icon = orientationIcons[index % orientationIcons.length];
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

function HeroSignalStrip() {
  return (
    <div className="relative mt-5 grid gap-3 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/82 p-3 shadow-card ring-1 ring-slate-900/[0.03] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {page.snapshotSignals.map((signal, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <div
            key={signal.label}
            className="relative rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-copilot-bg-soft/70 p-4 shadow-sm"
          >
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

const faqAccordionItems = page.faq.map((item, index) => ({
  id: `faq-${index}`,
  title: item.q,
  content: item.a,
}));

export function HealthcareForChildrenNetherlandsView() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: new URL("/", baseUrl).toString() },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Family", item: new URL(PARENTING_NETHERLANDS_PATH, baseUrl).toString() },
          { name: "Healthcare for Children", item: new URL(HEALTHCARE_FOR_CHILDREN_PATH, baseUrl).toString() },
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
                    <Link href="/" className="hover:text-foreground">
                      Home
                    </Link>
                    <span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">
                      Netherlands
                    </Link>
                    <span aria-hidden>/</span>
                    <Link href={PARENTING_NETHERLANDS_PATH} className="hover:text-foreground">
                      Family
                    </Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">
                      Healthcare for Children
                    </span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    {page.hero.pageTitle}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
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
            <nav aria-label="Page sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
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
              tipsKey="intro"
              visual={page.visuals.intro}
              intro={
                <SectionIntro eyebrow="Quick answer" title={page.quickAnswer.heading} fullWidth>
                  {page.introParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <QuickAnswerBox />
              <OrientationFlowBand />
              <BulletPanel title="What this overview is for" items={page.introHighlights} />
              <ChecklistBlock title="Safety file — keep these together" items={page.safetyFileChecklist} columns={2} />
              <ScenarioTable title="Where families usually start" rows={page.introScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="Snapshot" title="Six building blocks of children's healthcare" fullWidth>
                  <p>
                    Almost every question expat parents ask fits into one of these six blocks. Read them once now, then use the
                    detailed sections below when you need the specifics.
                  </p>
                </SectionIntro>
              }
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {page.snapshotSignals.map((signal) => (
                  <MiniStatCard key={signal.label} label={signal.label} value={signal.value} note={signal.note} />
                ))}
              </div>
              <div className={guidePremiumCardGridClass(page.snapshotCards.length)}>
                {page.snapshotCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="How to use this snapshot" items={page.snapshotTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="how-it-works"
              tipsKey="howItWorks"
              visual={page.visuals.howItWorks}
              intro={
                <SectionIntro eyebrow="How it works" title={page.howItWorks.heading} fullWidth>
                  {page.howItWorks.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <Timeline steps={page.howItWorks.timeline} eyebrow="Step" />
              <BulletPanel title="Principles worth knowing early" items={page.howItWorks.principles} />
              <SectionIntro eyebrow="Who does what" title={page.serviceComparison.heading} fullWidth>
                <p>{page.serviceComparison.intro}</p>
              </SectionIntro>
              <InfoTable
                columns={serviceColumns}
                rows={page.serviceComparison.rows.map((row) => ({
                  service: row.service,
                  purpose: row.purpose,
                  whenToUse: row.whenToUse,
                  access: row.access,
                }))}
              />
              <NotePanel>{page.serviceComparison.note}</NotePanel>
              <NotePanel>{page.howItWorks.gatekeeperNote}</NotePanel>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="health-insurance"
              tipsKey="healthInsurance"
              visual={page.visuals.healthInsurance}
              intro={
                <SectionIntro eyebrow="Insurance" title={page.healthInsurance.heading} fullWidth>
                  {page.healthInsurance.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="Insurance essentials for children" items={page.healthInsurance.points} />
              <InfoTable
                columns={coverageColumns}
                rows={page.healthInsurance.coverageRows.map((row) => ({
                  careType: row.careType,
                  coverage: row.coverage,
                  note: row.note,
                }))}
              />
              <ChecklistBlock title="Insurance setup checklist" items={page.healthInsurance.setupChecklist} columns={2} />
              <GuideCrossLink
                href={page.healthInsurance.crossLink.href}
                title={page.healthInsurance.crossLink.label}
                description={page.healthInsurance.crossLink.description}
                linkLabel="Open insurance guide"
              />
              <NotePanel>{page.healthInsurance.disclaimer}</NotePanel>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="gp"
              tipsKey="gp"
              visual={page.visuals.gp}
              intro={
                <SectionIntro eyebrow="First contact" title={page.gp.heading} fullWidth>
                  {page.gp.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="What the GP handles for children" items={page.gp.whatGpDoes} />
              <ChecklistBlock
                title="How to register your child with a GP — step by step"
                items={page.gp.howToSteps.map((step) => `${step.name}: ${step.text}`)}
                columns={2}
              />
              <BulletPanel title="Getting the most out of a ten-minute appointment" items={page.gp.appointmentTips} />
              <ChecklistBlock title="Have this ready when you call the practice" items={page.gp.callChecklist} columns={2} />
              <ScenarioTable title="Common GP situations for expat families" rows={page.gp.scenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="jgz"
              tipsKey="jgz"
              visual={page.visuals.jgz}
              intro={
                <SectionIntro eyebrow="Preventive care" title={page.jgz.heading} fullWidth>
                  {page.jgz.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.jgz.whatJgzDoes.length)}>
                {page.jgz.whatJgzDoes.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <SectionIntro eyebrow="Contact moments" title="When JGZ sees your child" fullWidth />
              <InfoTable
                columns={ageMomentColumns}
                rows={page.jgz.ageMoments.map((row) => ({ moment: row.moment, focus: row.focus, note: row.note }))}
              />
              <BulletPanel title="JGZ versus your GP — the difference in one panel" items={page.jgz.jgzVsGp} />
              <BulletPanel title="How to prepare for a JGZ appointment" items={page.jgz.preparationTips} />
              <NotePanel>{page.jgz.contactNote}</NotePanel>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="consultation-bureaus"
              tipsKey="consultationBureaus"
              visual={page.visuals.consultationBureaus}
              intro={
                <SectionIntro eyebrow="Ages 0–4" title={page.consultationBureaus.heading} fullWidth>
                  {page.consultationBureaus.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="What happens at an appointment" items={page.consultationBureaus.whatHappens} />
              <div className={guidePremiumCardGridClass(page.consultationBureaus.teamRoles.length)}>
                {page.consultationBureaus.teamRoles.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index + 2} />
                ))}
              </div>
              <ChecklistBlock title="What to bring" items={page.consultationBureaus.appointmentPrep} columns={2} />
              <BulletPanel title="If Dutch is not your first language" items={page.consultationBureaus.languageTips} />
              <NotePanel>{page.consultationBureaus.missedAppointmentNote}</NotePanel>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="vaccinations"
              tipsKey="vaccinations"
              visual={page.visuals.vaccinations}
              intro={
                <SectionIntro eyebrow="Vaccinations" title={page.vaccinations.heading} fullWidth>
                  {page.vaccinations.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="What to know about the programme" items={page.vaccinations.keyPoints} />
              <InfoTable
                columns={vaccinationColumns}
                rows={page.vaccinations.phases.map((row) => ({
                  phase: row.phase,
                  typicallyOffered: row.typicallyOffered,
                  parentAction: row.parentAction,
                }))}
              />
              <WarningPanel title="Check the current schedule before planning" items={[page.vaccinations.verifyNote]} />
              <BulletPanel title="Keeping vaccination records usable" items={page.vaccinations.recordTips} />
              <a
                href="https://www.rivm.nl/en/national-immunisation-programme"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(secondaryCtaClass, "w-fit")}
              >
                RIVM — current immunisation programme
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="hospitals-specialists"
              tipsKey="hospitalsSpecialists"
              visual={page.visuals.hospitalsSpecialists}
              intro={
                <SectionIntro eyebrow="Specialist care" title={page.hospitalsSpecialists.heading} fullWidth>
                  {page.hospitalsSpecialists.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <InfoTable
                columns={hospitalColumns}
                rows={page.hospitalsSpecialists.settings.map((row) => ({
                  setting: row.setting,
                  covers: row.covers,
                  howYouGetThere: row.howYouGetThere,
                }))}
              />
              <BulletPanel title="Making referrals work smoothly" items={page.hospitalsSpecialists.referralPoints} />
              <ChecklistBlock title="What to take to a hospital appointment" items={page.hospitalsSpecialists.visitPrep} columns={2} />
              <NotePanel>{page.hospitalsSpecialists.waitingTimeNote}</NotePanel>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="emergency-care"
              tipsKey="emergencyCare"
              visual={page.visuals.emergencyCare}
              intro={
                <SectionIntro eyebrow="Emergencies" title={page.emergencyCare.heading} fullWidth>
                  {page.emergencyCare.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <UrgencyBoard rows={page.emergencyCare.urgencyRows} />
              <div className={guidePremiumCardGridClass(page.emergencyCare.numbers.length)}>
                {page.emergencyCare.numbers.map((card, index) => (
                  <ContactCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="Quick tips from the triage board" items={page.emergencyCare.quickTips} />
              <ChecklistBlock title="What to say when you call" items={page.emergencyCare.whatToSay} columns={2} />
              <ChecklistBlock title="Prepare before you need it" items={page.emergencyCare.preparednessChecklist} columns={2} />
              <WarningPanel title="When in doubt, call" items={[page.emergencyCare.note]} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="dental-care"
              tipsKey="dentalCare"
              visual={page.visuals.dentalCare}
              intro={
                <SectionIntro eyebrow="Dental" title={page.dentalCare.heading} fullWidth>
                  {page.dentalCare.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <InfoTable
                columns={coverageColumns}
                rows={page.dentalCare.coverageRows.map((row) => ({
                  careType: row.careType,
                  coverage: row.coverage,
                  note: row.note,
                }))}
              />
              <ChecklistBlock title="Registering with a dental practice" items={page.dentalCare.registrationChecklist} columns={2} />
              <BulletPanel title="Practical dental habits" items={page.dentalCare.habitTips} />
              <NotePanel>{page.dentalCare.note}</NotePanel>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mental-health"
              tipsKey="mentalHealth"
              visual={page.visuals.mentalHealth}
              intro={
                <SectionIntro eyebrow="Wellbeing" title={page.mentalHealth.heading} fullWidth>
                  {page.mentalHealth.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.mentalHealth.routes.length)}>
                {page.mentalHealth.routes.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index + 7} />
                ))}
              </div>
              <BulletPanel title="Worth discussing with a professional" items={page.mentalHealth.worthDiscussing} />
              <BulletPanel title="Relocation-specific support tips" items={page.mentalHealth.relocationTips} />
              <NotePanel>{page.mentalHealth.note}</NotePanel>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="childhood-illnesses"
              tipsKey="childhoodIllnesses"
              visual={page.visuals.childhoodIllnesses}
              intro={
                <SectionIntro eyebrow="Everyday illness" title={page.childhoodIllnesses.heading} fullWidth>
                  {page.childhoodIllnesses.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <InfoTable
                columns={illnessColumns}
                rows={page.childhoodIllnesses.responseRows.map((row) => ({
                  whatYouNotice: row.whatYouNotice,
                  firstContact: row.firstContact,
                  note: row.note,
                }))}
              />
              <BulletPanel title="How the Dutch approach works" items={page.childhoodIllnesses.culturalPoints} />
              <BulletPanel title="How to be heard in a short appointment" items={page.childhoodIllnesses.advocacyTips} />
              <WarningPanel title="No treatment guidance here — by design" items={[page.childhoodIllnesses.note]} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="medications"
              tipsKey="medications"
              visual={page.visuals.medications}
              intro={
                <SectionIntro eyebrow="Medicines" title={page.medications.heading} fullWidth>
                  {page.medications.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="Pharmacy essentials" items={page.medications.points} />
              <ChecklistBlock title="Medication continuity when you move" items={page.medications.continuityChecklist} columns={2} />
              <BulletPanel title="Practical tips" items={page.medications.practicalTips} />
              <NotePanel>{page.medications.note}</NotePanel>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="moving-checklist"
              tipsKey="movingChecklist"
              visual={page.visuals.movingChecklist}
              intro={
                <SectionIntro eyebrow="Relocating" title={page.movingChecklist.heading} fullWidth>
                  {page.movingChecklist.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Before you leave — collect and translate" items={page.movingChecklist.beforeMove} columns={2} />
              <ChecklistBlock title="Week 1 after arrival" items={page.movingChecklist.firstWeek} columns={2} />
              <ChecklistBlock title="First month after arrival" items={page.movingChecklist.firstMonth} columns={2} />
              <ScenarioTable title="Relocation situations and first steps" rows={page.movingChecklist.scenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="healthcare-checklist"
              tipsKey="healthcareChecklist"
              visual={page.visuals.healthcareChecklist}
              intro={
                <SectionIntro eyebrow="Checklist" title={page.healthcareChecklist.heading} fullWidth>
                  <p>{page.healthcareChecklist.intro}</p>
                </SectionIntro>
              }
            >
              <BulletPanel title="How to use this checklist" items={page.healthcareChecklist.checklistTips} />
              <ChecklistBlock title="Block 1 — essentials" items={page.healthcareChecklist.essentials} columns={2} />
              <ChecklistBlock title="Block 2 — routine setup" items={page.healthcareChecklist.routineSetup} columns={2} />
              <ChecklistBlock title="Block 3 — ongoing and annual" items={page.healthcareChecklist.ongoing} columns={2} />
              <ChecklistBlock title="Block 4 — records to keep in one place" items={page.healthcareChecklist.records} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="expat-surprises"
              tipsKey="expatSurprises"
              visual={page.visuals.expatSurprises}
              intro={
                <SectionIntro eyebrow="Surprises" title={page.expatSurprises.heading} fullWidth>
                  <p>{page.expatSurprises.intro}</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.expatSurprises.cards.length)}>
                {page.expatSurprises.cards.map((card, index) => (
                  <SurpriseCard key={card.title} card={card} index={index} />
                ))}
              </div>
              <BulletPanel title="How to adapt without fighting the system" items={page.expatSurprises.adaptationTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              tipsKey="faq"
              visual={page.visuals.faq}
              intro={
                <SectionIntro eyebrow="FAQ" title="Frequently asked questions" fullWidth>
                  <p>
                    Orientation answers for the questions expat parents ask most. Confirm your own situation with your insurer,
                    your GP and your local JGZ team — and call 112 in an emergency.
                  </p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Quick reference" items={page.faqQuickReference} />
              <Accordion items={faqAccordionItems} allowMultiple initialOpenId="faq-0" density="comfortable" tone="copilot" />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              tipsKey="relatedGuides"
              visual={page.visuals.relatedGuides}
              intro={
                <SectionIntro eyebrow="Related" title="Related guides for expat families" fullWidth>
                  <p>
                    Healthcare decisions rarely stand alone — insurance, childcare, schools and relocation planning all connect to
                    what is on this page.
                  </p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Read next by need" items={page.relatedGuidesTips} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.relatedGuides.map((item, index) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={index} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="family-hub"
              tipsKey="familyHub"
              visual={page.visuals.familyHub}
              intro={
                <SectionIntro eyebrow="Family hub" title="Explore the family cluster" fullWidth>
                  <p>
                    This page is the children's healthcare cornerstone. Use the family cluster to sequence childcare, schools,
                    benefits and relocation around it.
                  </p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Family cluster overview" items={page.familyHubTips} />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.familyHubCards.map((item, index) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={index} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="explore-next"
              tipsKey="exploreNext"
              visual={page.visuals.exploreNext}
              visualTone="onDark"
              sectionTone="onDark"
              intro={
                <SectionIntro eyebrow="Explore next" title="Plan the next step" tone="onDark" fullWidth>
                  <p>
                    Pick the card that matches what is still open — insurance, childcare, benefits or the wider relocation
                    checklist — and verify specifics on the official sources below.
                  </p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Choose the card matching your next family need" items={page.exploreNextTips} tone="onDark" />
              <div className={guidePremiumCardGridClass(page.exploreNextCards.length)}>
                {page.exploreNextCards.map((item, index) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={index} tone="onDark" />
                ))}
              </div>
              <div id="sources" className="mt-8 space-y-6">
                <SectionIntro eyebrow="Trust" title="Official sources" tone="onDark" fullWidth>
                  <p>{page.officialSourcesNote}</p>
                </SectionIntro>
                <BulletPanel title="How to use these sources" items={page.sourceUsageTips} tone="onDark" />
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} />
                  ))}
                </div>
              </div>
            </PremiumGuideSection>
          </div>
        </Container>
      </main>
    </>
  );
}
