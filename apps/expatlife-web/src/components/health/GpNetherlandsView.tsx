import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Ambulance,
  ArrowRight,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  ExternalLink,
  FileText,
  HeartPulse,
  Home,
  Hospital,
  Pill,
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
  EMERGENCY_HEALTHCARE_NETHERLANDS_PATH,
  GP_NETHERLANDS_PATH,
  HEALTH_HUB_PATH,
  HEALTHCARE_BASICS_PATH,
  gpNetherlandsPage as page,
  type GpLink,
  type MistakeCard as MistakeCardData,
  type TimelineStep,
  type UrgencyRow,
} from "./gpNetherlandsPageModel";

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
  ClipboardList,
  Hospital,
  Siren,
  Pill,
  Brain,
  Home,
  Users,
  FileText,
  ShieldCheck,
  CalendarCheck,
  Clock,
  Activity,
  WalletCards,
  Ambulance,
] as const;
const snapshotIcons = [Stethoscope, ClipboardList, Hospital, Siren] as const;
const orientationIcons = [WalletCards, Stethoscope, CalendarCheck, Siren] as const;

const scenarioColumns = [
  { key: "situation", label: "Situation" },
  { key: "approach", label: "How it works here" },
  { key: "firstStep", label: "First step" },
] as const;

const referralColumns = [
  { key: "topic", label: "Topic" },
  { key: "withReferral", label: "With GP referral" },
  { key: "withoutReferral", label: "Without referral" },
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
    eyebrow: "Next working day",
    title: "Routine — a normal GP appointment",
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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: GpLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
          : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "focus-visible:ring-offset-canvas"),
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

export function GpNetherlandsView() {
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", item: new URL("/", baseUrl).toString() },
          { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
          { name: "Health", item: new URL(HEALTH_HUB_PATH, baseUrl).toString() },
          { name: "General Practitioner (GP)", item: new URL(GP_NETHERLANDS_PATH, baseUrl).toString() },
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
                      General Practitioner (GP)
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
              <ChecklistBlock title="Safety file — keep these together" items={page.safetyFileChecklist} columns={2} />
              <ScenarioTable title="Where newcomers usually start" rows={page.introScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="snapshot"
              tipsKey="snapshot"
              visual={page.visuals.snapshot}
              intro={
                <SectionIntro eyebrow="Snapshot" title="Six building blocks of the Dutch GP system" fullWidth>
                  <p>
                    Almost every question expats ask about the huisarts fits into one of these six blocks. Read them once now,
                    then use the detailed sections below when you need the specifics.
                  </p>
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.snapshotSignals.length)}>
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
              <div className="flex flex-wrap gap-2">
                {page.howItWorks.flowLabels.map((label, index) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-copilot-bg-soft text-[10px] font-bold text-brand-strong">
                      {index + 1}
                    </span>
                    {label}
                  </span>
                ))}
              </div>
              <Timeline steps={page.howItWorks.timeline} eyebrow="Step" />
              <BulletPanel title="Principles worth knowing early" items={page.howItWorks.principles} />
              <NotePanel>{page.howItWorks.gatekeeperNote}</NotePanel>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="what-gp-does"
              tipsKey="whatGpDoes"
              visual={page.visuals.whatGpDoes}
              intro={
                <SectionIntro eyebrow="Role" title={page.whatGpDoes.heading} fullWidth>
                  {page.whatGpDoes.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="What your GP typically handles" items={page.whatGpDoes.responsibilities} />
              <BulletPanel title="Useful boundaries to expect" items={page.whatGpDoes.limitations} />
              <div className={guidePremiumCardGridClass(page.whatGpDoes.teamRoles.length)}>
                {page.whatGpDoes.teamRoles.map((role, index) => (
                  <FeatureCard key={role.role} title={role.role} body={role.focus} iconIndex={index} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="registering"
              tipsKey="registering"
              visual={page.visuals.registering}
              intro={
                <SectionIntro eyebrow="Registering" title={page.registering.heading} fullWidth>
                  {page.registering.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <Timeline steps={page.registering.timeline} eyebrow="Phase" />
              <ChecklistBlock title="Registration checklist" items={page.registering.checklist} columns={2} />
              <ol className="space-y-3">
                {page.registering.howToSteps.map((step, index) => (
                  <li key={step.name} className={cn(cardClass, "p-4")}>
                    <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">Step {index + 1}</p>
                    <h3 className="mt-1 text-base font-bold text-foreground">{step.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.text}</p>
                  </li>
                ))}
              </ol>
              <BulletPanel title="If nearby practices are full" items={page.registering.closedListTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="booking"
              tipsKey="booking"
              visual={page.visuals.booking}
              intro={
                <SectionIntro eyebrow="Booking" title={page.booking.heading} fullWidth>
                  {page.booking.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="Booking tips that save time" items={page.booking.tips} />
              <BulletPanel title="What to say on the phone" items={page.booking.callScript} />
              <ChecklistBlock title="Have this ready when you call" items={page.booking.haveReady} columns={2} />
              <div className={guidePremiumCardGridClass(page.booking.channels.length)}>
                {page.booking.channels.map((channel, index) => (
                  <FeatureCard key={channel.channel} title={channel.channel} body={channel.bestFor} iconIndex={index} />
                ))}
              </div>
              <ScenarioTable title="Common booking situations" rows={page.booking.scenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="consultation"
              tipsKey="consultation"
              visual={page.visuals.consultation}
              intro={
                <SectionIntro eyebrow="Consultation" title={page.consultation.heading} fullWidth>
                  {page.consultation.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="Three-sentence script" items={page.consultation.threeSentenceScript} />
              <ChecklistBlock title="Prepare before you go" items={page.consultation.prepareChecklist} columns={2} />
              <BulletPanel title="During the visit" items={page.consultation.duringVisit} />
              <BulletPanel title="Leave with these clarified" items={page.consultation.leaveWith} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="referrals"
              tipsKey="referrals"
              visual={page.visuals.referrals}
              intro={
                <SectionIntro eyebrow="Referrals" title={page.referrals.heading} fullWidth>
                  {page.referrals.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <InfoTable
                columns={referralColumns}
                rows={page.referrals.comparisonRows.map((row) => ({
                  topic: row.topic,
                  withReferral: row.withReferral,
                  withoutReferral: row.withoutReferral,
                }))}
              />
              <BulletPanel title="Referral practicalities" items={page.referrals.tips} />
              <ChecklistBlock title="After the referral letter" items={page.referrals.afterReferralChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="prescriptions"
              tipsKey="prescriptions"
              visual={page.visuals.prescriptions}
              intro={
                <SectionIntro eyebrow="Prescriptions" title={page.prescriptions.heading} fullWidth>
                  {page.prescriptions.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="Prescription essentials" items={page.prescriptions.points} />
              <BulletPanel title="Practical pharmacy tips" items={page.prescriptions.practicalTips} />
              <ChecklistBlock title="Medication continuity checklist" items={page.prescriptions.continuityChecklist} columns={2} />
              <ChecklistBlock title="Pharmacy setup checklist" items={page.prescriptions.pharmacyChecklist} columns={2} />
              <GuideCrossLink
                href={page.prescriptions.crossLink.href}
                title={page.prescriptions.crossLink.label}
                description={page.prescriptions.crossLink.description}
                linkLabel="Open prescriptions guide"
              />
              <GuideCrossLink
                href={page.prescriptions.pharmaciesCrossLink.href}
                title={page.prescriptions.pharmaciesCrossLink.label}
                description={page.prescriptions.pharmaciesCrossLink.description}
                linkLabel="Open pharmacies guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="home-visits"
              tipsKey="homeVisits"
              visual={page.visuals.homeVisits}
              intro={
                <SectionIntro eyebrow="Home visits" title={page.homeVisits.heading} fullWidth>
                  {page.homeVisits.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="When home visits are more typical" items={page.homeVisits.whenTypical} />
              <BulletPanel title="When another route usually fits better" items={page.homeVisits.whenNotTypical} />
              <BulletPanel title="How to request sensibly" items={page.homeVisits.tips} />
              <BulletPanel title="What to say when requesting a visit" items={page.homeVisits.requestScript} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="out-of-hours"
              tipsKey="outOfHours"
              visual={page.visuals.outOfHours}
              intro={
                <SectionIntro eyebrow="Out of hours" title={page.outOfHours.heading} fullWidth>
                  {page.outOfHours.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <BulletPanel title="Huisartsenpost essentials" items={page.outOfHours.points} />
              <BulletPanel title="Find your number and what to say" items={page.outOfHours.findNumberTips} />
              <InfoTable
                columns={contactRouteColumns}
                rows={page.outOfHours.contrastRows.map((row) => ({
                  route: row.route,
                  when: row.when,
                  how: row.how,
                  note: row.note,
                }))}
              />
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
              <div className={guidePremiumCardGridClass(page.emergencyCare.numbers.length)}>
                {page.emergencyCare.numbers.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <UrgencyBoard rows={page.emergencyCare.urgencyRows} />
              <BulletPanel title="Decision shortcuts" items={page.emergencyCare.decisionTips} />
              <ChecklistBlock title="What to say when you call" items={page.emergencyCare.whatToSay} columns={2} />
              <ChecklistBlock title="Prepare before you need it" items={page.emergencyCare.preparednessChecklist} columns={2} />
              <WarningPanel title="When in doubt, call" items={[page.emergencyCare.whenInDoubt]} />
              <GuideCrossLink
                href={EMERGENCY_HEALTHCARE_NETHERLANDS_PATH}
                title="Emergency Healthcare in the Netherlands"
                description="Flagship guide for 112, Huisartsenpost, SEH, ambulance and urgent-care pathways — keep the living Emergencies & Safety guide for broader day-to-day readiness."
                linkLabel="Open emergency healthcare guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="expat-differences"
              tipsKey="expatDifferences"
              visual={page.visuals.expatDifferences}
              intro={
                <SectionIntro eyebrow="For expats" title={page.expatDifferences.heading} fullWidth>
                  {page.expatDifferences.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <BulletPanel title="Advantages of the huisarts model" items={page.expatDifferences.advantages} />
                <BulletPanel title="Limitations to plan around" items={page.expatDifferences.limitations} />
              </div>
              <div className={guidePremiumCardGridClass(page.expatDifferences.cards.length)}>
                {page.expatDifferences.cards.map((card, index) => (
                  <MistakeCard key={card.title} card={card} index={index} />
                ))}
              </div>
            </PremiumGuideSection>

            <PremiumGuideSection
              id="children-family"
              tipsKey="childrenFamily"
              visual={page.visuals.childrenFamily}
              intro={
                <SectionIntro eyebrow="Family" title={page.childrenFamily.heading} fullWidth>
                  {page.childrenFamily.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.childrenFamily.splitCards.length)}>
                {page.childrenFamily.splitCards.map((card, index) => (
                  <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="Family GP practicalities" items={page.childrenFamily.points} />
              <GuideCrossLink
                href={page.childrenFamily.crossLink.href}
                title={page.childrenFamily.crossLink.label}
                description={page.childrenFamily.crossLink.description}
                linkLabel="Open children's healthcare guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mental-health"
              tipsKey="mentalHealth"
              visual={page.visuals.mentalHealth}
              intro={
                <SectionIntro eyebrow="Mental health" title={page.mentalHealth.heading} fullWidth>
                  {page.mentalHealth.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </SectionIntro>
              }
            >
              <div className={guidePremiumCardGridClass(page.mentalHealth.routes.length)}>
                {page.mentalHealth.routes.map((route, index) => (
                  <FeatureCard key={route.title} title={route.title} body={route.body} iconIndex={index} />
                ))}
              </div>
              <BulletPanel title="Orientation points only" items={page.mentalHealth.points} />
              <BulletPanel title="Worth discussing with your GP" items={page.mentalHealth.worthDiscussing} />
              <NotePanel>{page.mentalHealth.disclaimer}</NotePanel>
              <NotePanel>{page.mentalHealth.comingSoonNote}</NotePanel>
              <GuideCrossLink
                href={page.mentalHealth.crossLink.href}
                title={page.mentalHealth.crossLink.label}
                description={page.mentalHealth.crossLink.description}
                linkLabel="Open mental healthcare guide"
              />
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
              id="checklist"
              tipsKey="checklist"
              visual={page.visuals.checklist}
              intro={
                <SectionIntro eyebrow="Checklist" title={page.checklist.heading} fullWidth>
                  <p>{page.checklist.intro}</p>
                </SectionIntro>
              }
            >
              <BulletPanel title="How to use this checklist" items={page.checklist.tips} />
              <ChecklistBlock title="Phase 1 — early research" items={page.checklist.early} columns={2} />
              <ChecklistBlock title="Phase 2 — registration" items={page.checklist.registration} columns={2} />
              <ChecklistBlock title="Phase 3 — readiness" items={page.checklist.readiness} columns={2} />
              <ChecklistBlock title="Full GP setup checklist" items={page.checklist.full} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              tipsKey="faq"
              visual={page.visuals.faq}
              intro={
                <SectionIntro eyebrow="FAQ" title="Frequently asked questions" fullWidth>
                  <p>Orientation answers only — confirm practice rules, insurer contracting and your own clinical situation with professionals.</p>
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
                <SectionIntro eyebrow="Related" title="Related guides for healthcare setup" fullWidth>
                  <p>Connect GP registration with insurance, family healthcare, emergencies and living healthcare basics.</p>
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
                  <p>This page is the GP cornerstone — explore related health topics next.</p>
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
                    Pick the card that matches what is still open — insurance, system basics, children&apos;s care or emergencies —
                    and verify specifics on the official sources below.
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
