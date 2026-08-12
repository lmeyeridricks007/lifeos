import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Baby,
  BedDouble,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  HeartPulse,
  Hospital,
  Microscope,
  ShieldCheck,
  Siren,
  Stethoscope,
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
  HEALTH_HUB_PATH,
  HEALTHCARE_BASICS_PATH,
  HOSPITALS_NETHERLANDS_PATH,
  hospitalsNetherlandsPage as page,
  type ComparisonRow,
  type HospitalLink,
  type MistakeCard as MistakeCardData,
  type TimelineStep,
  type UrgencyRow,
} from "./hospitalsNetherlandsPageModel";

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
  Hospital,
  Stethoscope,
  ClipboardList,
  Building2,
  HeartPulse,
  BedDouble,
  Users,
  ShieldCheck,
  CalendarCheck,
  WalletCards,
  Microscope,
  FileText,
  Baby,
  GraduationCap,
  Activity,
  Siren,
] as const;
const snapshotIcons = [Stethoscope, Building2, BedDouble, ShieldCheck] as const;
const orientationIcons = [Stethoscope, ShieldCheck, ClipboardList, CalendarCheck] as const;

const scenarioColumns = [
  { key: "situation", label: "Situation" },
  { key: "approach", label: "How it works here" },
  { key: "firstStep", label: "First step" },
] as const;

const hospitalTypeColumns = [
  { key: "type", label: "Type" },
  { key: "focus", label: "Focus" },
  { key: "whenReferred", label: "When you are referred" },
  { key: "note", label: "Note" },
] as const;

const contactRouteColumns = [
  { key: "route", label: "Route" },
  { key: "when", label: "When" },
  { key: "how", label: "How" },
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

function NotePanel({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted ring-1 ring-slate-900/[0.04]">
      {children}
    </p>
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

function MistakeCard({ card, index }: { card: MistakeCardData; index: number }) {
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
        {card.advice}
      </p>
    </article>
  );
}

function Timeline({ steps, eyebrow }: { steps: readonly TimelineStep[]; eyebrow: string }) {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, index) => (
        <li key={`${step.phase}-${step.title}`} className="relative flex gap-4 pb-8 last:pb-0">
          {index < steps.length - 1 ? (
            <span
              className="absolute left-[1.125rem] top-10 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-brand/40 to-cyan-300/40"
              aria-hidden
            />
          ) : null}
          <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copilot-bg-soft to-white text-xs font-bold text-brand-strong shadow-sm ring-2 ring-white">
            {step.phase.length > 2 ? index + 1 : step.phase}
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
    eyebrow: "Same day / out of hours",
    title: "Urgent — your GP or the huisartsenpost",
    icon: Clock,
    shell: "border-amber-200/80 bg-amber-50/80 ring-amber-200/50",
    accent: "bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300",
    text: "text-amber-950",
    chip: "bg-white/70 text-amber-800 ring-amber-200/70",
  },
  {
    level: "routine" as const,
    eyebrow: "Planned route",
    title: "Routine — clinic secretariat or your GP",
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
        if (groupRows.length === 0) return null;
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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: HospitalLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
          "flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1",
          onDark
            ? "bg-white/10 text-cyan-100 ring-white/15"
            : "bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong ring-copilot-primary/10"
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
        <span
          className={cn(
            "mt-4 inline-flex items-center gap-1 text-xs font-semibold",
            onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover"
          )}
        >
          Open {isExternal ? <ExternalLink className="h-3.5 w-3.5" aria-hidden /> : <ArrowRight className="h-3.5 w-3.5" aria-hidden />}
        </span>
      ) : null}
    </>
  );

  if (!isLive) {
    return (
      <article className={cn(cardClass, "opacity-90", onDark && "border-white/10 bg-white/10 text-white ring-white/10")}>
        {body}
      </article>
    );
  }

  const linkClass = cn(
    cardClass,
    "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
    onDark
      ? "border-white/10 bg-white/10 ring-white/10 focus-visible:ring-offset-slate-950"
      : "focus-visible:ring-offset-canvas",
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

function SourceLink({
  source,
  tone = "default",
}: {
  source: { label: string; href: string; description: string };
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block overflow-hidden p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2",
        onDark
          ? "rounded-3xl border border-white/10 bg-white/10 text-white shadow-sm ring-1 ring-white/10 focus-visible:ring-offset-slate-950"
          : cn(
              CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
              "focus-visible:ring-offset-canvas"
            ),
        movingNlCardMicroLiftClass,
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span
        className={cn(
          "flex items-center gap-2 text-sm font-bold",
          onDark ? "text-white group-hover:text-cyan-200" : "text-foreground group-hover:text-link"
        )}
      >
        <ShieldCheck className={cn("h-4 w-4", onDark ? "text-cyan-200" : "text-brand-strong")} aria-hidden />
        {source.label}
        <ExternalLink className={cn("h-3.5 w-3.5", onDark ? "text-slate-400" : "text-foreground-muted")} aria-hidden />
      </span>
      <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
        {source.description}
      </span>
      <span
        className={cn(
          "mt-4 inline-flex items-center gap-1 text-xs font-semibold",
          onDark ? "text-cyan-200" : "text-link"
        )}
      >
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
  icon: Icon = ArrowRight,
}: {
  href: string;
  title: string;
  description: string;
  linkLabel: string;
  icon?: typeof ArrowRight;
}) {
  return (
    <aside
      className={cn(
        cardClass,
        "flex flex-col gap-4 border-brand/10 bg-gradient-to-br from-white via-white to-copilot-bg-soft/60 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex gap-3">
        <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted">{description}</p>
        </div>
      </div>
      <Link href={href} className={cn(primaryCtaClass, "w-full shrink-0 sm:w-auto")}>
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
        "relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-white/10 sm:p-6",
        className
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Four building blocks before your first hospital visit</h3>
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

function DecisionFlowStrip({ labels, eyebrow = "Care pathway" }: { labels: readonly string[]; eyebrow?: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-4 shadow-card ring-1 ring-slate-900/[0.04] sm:p-5">
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <div className={cn("mt-4 grid gap-3", guidePremiumCardGridClass(labels.length))}>
        {labels.map((label, index) => (
          <div
            key={label}
            className="relative flex items-start gap-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-copilot-bg-soft/70 p-4 shadow-sm"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-sm font-black text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
              {index + 1}
            </span>
            <span className="pt-1.5 text-sm font-semibold leading-snug text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowToStepCards({
  steps,
  title,
}: {
  steps: ReadonlyArray<{ name: string; text: string }>;
  title: string;
}) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="How to" title={title} fullWidth />
      <ol className={cn("mt-4", guidePremiumCardGridClass(steps.length))}>
        {steps.map((step, index) => (
          <li key={step.name} className={cn(cardClass, "list-none p-5")}>
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-sm font-black text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                {index + 1}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">Step {index + 1}</p>
                <h3 className="mt-1 text-base font-bold text-foreground">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
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

export function HospitalsNetherlandsView() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: new URL("/", baseUrl).toString() },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Health", item: new URL(HEALTH_HUB_PATH, baseUrl).toString() },
          { name: "Hospitals", item: new URL(HOSPITALS_NETHERLANDS_PATH, baseUrl).toString() },
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
                    <Link href={HEALTHCARE_BASICS_PATH} className="hover:text-foreground">
                      Health
                    </Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">
                      Hospitals
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
              id="quick-answer"
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
              <ChecklistBlock title="Hospital file — keep these together" items={page.safetyFileChecklist} columns={2} />
              <ScenarioTable title="Where newcomers usually start" rows={page.introScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="Snapshot" title="Six building blocks of Dutch hospital care" fullWidth>
                  <p>
                    Almost every hospital pathway expats meet is built from these six blocks. Read them once now, then use
                    the detailed sections below when you need the specifics.
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
                  <p>{page.howItWorks.intro}</p>
                  {page.howItWorks.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <DecisionFlowStrip labels={page.howItWorks.flowLabels} />
              <Timeline steps={page.howItWorks.timeline} eyebrow="Step" />
              <BulletPanel title="Routing shortcuts" items={page.howItWorks.decisionTips} />
              <HowToStepCards
                steps={page.howItWorks.howToSteps}
                title="Prepare for a hospital appointment step by step"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="hospital-types"
              tipsKey="hospitalTypes"
              visual={page.visuals.hospitalTypes}
              intro={
                <SectionIntro eyebrow="Hospital types" title={page.hospitalTypes.heading} fullWidth>
                  <p>{page.hospitalTypes.intro}</p>
                  {page.hospitalTypes.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <InfoTable
                columns={hospitalTypeColumns}
                rows={page.hospitalTypes.rows.map((row: ComparisonRow) => ({
                  type: row.type,
                  focus: row.focus,
                  whenReferred: row.whenReferred,
                  note: row.note,
                }))}
              />
              <div className={guidePremiumCardGridClass(page.hospitalTypes.cards.length)}>
                {page.hospitalTypes.cards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <ChecklistBlock title="Before you accept a referral destination" items={page.hospitalTypes.checklist} columns={2} />
              <BulletPanel title="Tips" items={page.hospitalTypes.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="finding"
              tipsKey="finding"
              visual={page.visuals.finding}
              intro={
                <SectionIntro eyebrow="Choosing a hospital" title={page.finding.heading} fullWidth>
                  {page.finding.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="What actually decides the choice" items={page.finding.points} />
              <InfoTable
                columns={contactRouteColumns}
                rows={page.finding.contrastRows.map((row) => ({
                  route: row.route,
                  when: row.when,
                  how: row.how,
                  note: row.note,
                }))}
              />
              <ChecklistBlock title="Choosing checklist" items={page.finding.checklist} columns={2} />
              <ScenarioTable title="Choosing a hospital in practice" rows={page.finding.scenarios} />
              <BulletPanel title="Tips" items={page.finding.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="outpatient"
              tipsKey="outpatient"
              visual={page.visuals.outpatient}
              intro={
                <SectionIntro eyebrow="Outpatient" title={page.outpatient.heading} fullWidth>
                  {page.outpatient.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.outpatient.cards.length)}>
                {page.outpatient.cards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="What to expect at the polikliniek" items={page.outpatient.points} />
              <ChecklistBlock title="Outpatient appointment checklist" items={page.outpatient.checklist} columns={2} />
              <ScenarioTable title="Outpatient care in practice" rows={page.outpatient.scenarios} />
              <BulletPanel title="Tips" items={page.outpatient.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="admissions"
              tipsKey="admissions"
              visual={page.visuals.admissions}
              intro={
                <SectionIntro eyebrow="Admission" title={page.admissions.heading} fullWidth>
                  {page.admissions.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <Timeline steps={page.admissions.timeline} eyebrow="Stage" />
              <BulletPanel title="Admission essentials" items={page.admissions.points} />
              <ChecklistBlock title="Admission checklist" items={page.admissions.checklist} columns={2} />
              <ScenarioTable title="Admissions in practice" rows={page.admissions.scenarios} />
              <BulletPanel title="Tips" items={page.admissions.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="specialists"
              tipsKey="specialists"
              visual={page.visuals.specialists}
              intro={
                <SectionIntro eyebrow="Specialists" title={page.specialists.heading} fullWidth>
                  {page.specialists.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.specialists.roleCards.length)}>
                {page.specialists.roleCards.map((role, index) => (
                  <FeatureCard key={role.role} title={role.role} body={role.focus} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="How specialist teams work" items={page.specialists.points} />
              <div className={guidePremiumCardGridClass(page.specialists.cards.length)}>
                {page.specialists.cards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index + 2} />
                ))}
              </div>
              <ScenarioTable title="Specialties in practice" rows={page.specialists.scenarios} />
              <BulletPanel title="Tips" items={page.specialists.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="umc"
              tipsKey="umc"
              visual={page.visuals.umc}
              intro={
                <SectionIntro eyebrow="UMCs" title={page.umc.heading} fullWidth>
                  {page.umc.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.umc.cards.length)}>
                {page.umc.cards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="What academic care means for you" items={page.umc.points} />
              <ScenarioTable title="University medical centres in practice" rows={page.umc.scenarios} />
              <WarningPanel title="When in doubt, ask" items={[page.umc.whenInDoubt]} />
              <BulletPanel title="Tips" items={page.umc.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="emergency"
              tipsKey="emergency"
              visual={page.visuals.emergency}
              intro={
                <SectionIntro eyebrow="Emergency" title={page.emergency.heading} fullWidth>
                  {page.emergency.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="Emergency department essentials" items={page.emergency.points} />
              <UrgencyBoard rows={page.emergency.urgencyRows} />
              <BulletPanel title="Tips" items={page.emergency.tips} />
              <GuideCrossLink
                href={page.emergency.crossLink.href}
                title={page.emergency.crossLink.label}
                description={page.emergency.crossLink.description}
                linkLabel="Open emergency healthcare guide"
                icon={Siren}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="children"
              tipsKey="children"
              visual={page.visuals.children}
              intro={
                <SectionIntro eyebrow="Children" title={page.children.heading} fullWidth>
                  {page.children.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.children.cards.length)}>
                {page.children.cards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="Family practicalities" items={page.children.points} />
              <ChecklistBlock title="Prepare before a children's appointment" items={page.children.prepareChecklist} columns={2} />
              <ScenarioTable title="Children in hospital in practice" rows={page.children.scenarios} />
              <BulletPanel title="Tips" items={page.children.tips} />
              <GuideCrossLink
                href={page.children.crossLink.href}
                title={page.children.crossLink.label}
                description={page.children.crossLink.description}
                linkLabel="Open children's healthcare guide"
                icon={Baby}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="maternity"
              tipsKey="maternity"
              visual={page.visuals.maternity}
              intro={
                <SectionIntro eyebrow="Maternity" title={page.maternity.heading} fullWidth>
                  {page.maternity.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <NotePanel>{page.maternity.comingSoonNote}</NotePanel>
              <div className={guidePremiumCardGridClass(page.maternity.cards.length)}>
                {page.maternity.cards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="Maternity orientation" items={page.maternity.points} />
              <ScenarioTable title="Maternity pathways in practice" rows={page.maternity.scenarios} />
              <BulletPanel title="Tips" items={page.maternity.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="private-clinics"
              tipsKey="privateClinics"
              visual={page.visuals.privateClinics}
              intro={
                <SectionIntro eyebrow="Private clinics" title={page.privateClinics.heading} fullWidth>
                  {page.privateClinics.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="Treatment centre essentials" items={page.privateClinics.points} />
              <InfoTable
                columns={contactRouteColumns}
                rows={page.privateClinics.contrastRows.map((row) => ({
                  route: row.route,
                  when: row.when,
                  how: row.how,
                  note: row.note,
                }))}
              />
              <ChecklistBlock title="Before booking outside a hospital" items={page.privateClinics.checklist} columns={2} />
              <ScenarioTable title="Treatment centres in practice" rows={page.privateClinics.scenarios} />
              <BulletPanel title="Tips" items={page.privateClinics.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="costs"
              tipsKey="costs"
              visual={page.visuals.costs}
              intro={
                <SectionIntro eyebrow="Costs" title={page.costs.heading} fullWidth>
                  {page.costs.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <NotePanel>{page.costs.indicativeNote}</NotePanel>
              <div className={guidePremiumCardGridClass(page.costs.orientationCards.length)}>
                {page.costs.orientationCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="What shapes the bill" items={page.costs.costFactors} />
              <ChecklistBlock title="Costs checklist" items={page.costs.checklist} columns={2} />
              <ScenarioTable title="Costs in practice" rows={page.costs.scenarios} />
              <BulletPanel title="Tips" items={page.costs.tips} />
              <GuideCrossLink
                href={page.costs.crossLink.href}
                title={page.costs.crossLink.label}
                description={page.costs.crossLink.description}
                linkLabel="Open health insurance guide"
                icon={WalletCards}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="patient-rights"
              tipsKey="patientRights"
              visual={page.visuals.patientRights}
              intro={
                <SectionIntro eyebrow="Patient rights" title={page.patientRights.heading} fullWidth>
                  {page.patientRights.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.patientRights.cards.length)}>
                {page.patientRights.cards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <ChecklistBlock title="Using your rights in practice" items={page.patientRights.checklist} columns={2} />
              <ScenarioTable title="Patient rights in practice" rows={page.patientRights.scenarios} />
              <BulletPanel title="Tips" items={page.patientRights.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="differences"
              tipsKey="differences"
              visual={page.visuals.differences}
              intro={
                <SectionIntro eyebrow="Differences" title={page.differences.heading} fullWidth>
                  <p>{page.differences.intro}</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.differences.cards.length)}>
                {page.differences.cards.map((card, index) => (
                  <MistakeCard key={card.title} card={card} index={index} />
                ))}
              </div>
              <BulletPanel title="How to adapt" items={page.differences.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              tipsKey="checklist"
              visual={page.visuals.checklist}
              intro={
                <SectionIntro eyebrow="Checklist" title={page.preparation.heading} fullWidth>
                  {page.preparation.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <ChecklistBlock title="Preparation checklist" items={page.preparation.checklist} columns={2} />
              <div className={guidePremiumCardGridClass(page.preparation.roleCards.length)}>
                {page.preparation.roleCards.map((role, index) => (
                  <FeatureCard key={role.role} title={role.role} body={role.focus} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="Tips" items={page.preparation.tips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              tipsKey="mistakes"
              visual={page.visuals.mistakes}
              intro={
                <SectionIntro eyebrow="Avoid" title={page.mistakes.heading} fullWidth>
                  <p>{page.mistakes.intro}</p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.mistakes.cards.length)}>
                {page.mistakes.cards.map((card, index) => (
                  <MistakeCard key={card.title} card={card} index={index} />
                ))}
              </div>
              <BulletPanel title="How to adapt without fighting the system" items={page.mistakes.adaptationTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              tipsKey="faq"
              visual={page.visuals.faq}
              intro={
                <SectionIntro eyebrow="FAQ" title="Frequently asked questions" fullWidth>
                  <p>
                    Orientation answers only — confirm your own situation with your GP, your treating specialist and your
                    insurer. Call 112 for life-threatening emergencies.
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
                <SectionIntro eyebrow="Related" title="Related guides for hospital care" fullWidth>
                  <p>
                    Hospital care connects to GP referrals, insurance, emergency routes and family pathways — read them
                    together.
                  </p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Read next by topic" items={page.relatedGuidesTips} />
              <div className={guidePremiumCardGridClass(page.relatedGuides.length)}>
                {page.relatedGuides.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="healthcare-hub"
              tipsKey="healthcareHub"
              visual={page.visuals.healthcareHub}
              intro={
                <SectionIntro eyebrow="Health hub" title="Explore the healthcare cluster" fullWidth>
                  <p>This page is the hospitals cornerstone — explore related health topics next.</p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Healthcare cluster overview" items={page.healthcareHubTips} />
              <div className={guidePremiumCardGridClass(page.healthcareHubCards.length)}>
                {page.healthcareHubCards.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} />
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
                    Pick the card that matches what is still open — GP registration, insurance, children&apos;s care or
                    dental routes — and verify specifics on the official sources below.
                  </p>
                </SectionIntro>
              }
            >
              <BulletPanel title="Choose the card matching your next need" items={page.exploreNextTips} tone="onDark" />
              <div className={guidePremiumCardGridClass(page.exploreNextCards.length)}>
                {page.exploreNextCards.map((item, idx) => (
                  <LinkCard key={`${item.href}-${item.label}`} item={item} iconIndex={idx} tone="onDark" />
                ))}
              </div>
              <div id="sources" className="mt-8 space-y-6">
                <SectionIntro eyebrow="Trust" title="Official sources" tone="onDark" fullWidth>
                  <p>{page.officialSourcesNote}</p>
                </SectionIntro>
                <BulletPanel title="How to use these sources" items={page.sourceUsageTips} tone="onDark" />
                <div className={guidePremiumCardGridClass(page.officialSources.length)}>
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} tone="onDark" />
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
