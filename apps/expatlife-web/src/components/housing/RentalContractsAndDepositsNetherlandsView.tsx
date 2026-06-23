import Image from "next/image";
import Link from "next/link";
import { Children, type ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  ExternalLink,
  FileText,
  Home,
  Key,
  Landmark,
  MapPin,
  Receipt,
  Scale,
  ShieldCheck,
  Users,
  Wallet,
  Zap,
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
  ENERGY_AND_WATER_NETHERLANDS_PATH,
  HOUSING_COSTS_NETHERLANDS_PATH,
  INTERNET_AND_MOBILE_NETHERLANDS_PATH,
  RENTING_NETHERLANDS_PATH,
  UTILITIES_NETHERLANDS_PATH,
} from "./housingNetherlandsPageModel";
import { REGISTERING_YOUR_ADDRESS_NETHERLANDS_PATH } from "../practical-life/registeringYourAddressNetherlandsPageModel";
import {
  rentalContractsAndDepositsNetherlandsPage as page,
  type ComparisonRow,
  type ClauseRow,
  type ContractTypeRow,
  type InventoryExampleRow,
  type MistakeFixRow,
  type RentalGuideLink,
  type RentalScenario,
  type SplitRow,
  type TaskDetailRow,
  type TimelineStep,
} from "./rentalContractsAndDepositsNetherlandsPageModel";

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
const iconPool = [Key, FileText, Home, ShieldCheck, Camera, Building2, Landmark, MapPin, Wallet, Receipt, Scale, Zap, Users] as const;
const snapshotIcons = [Key, FileText, Camera, ShieldCheck] as const;
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
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1",
                onDark ? "bg-white/10 text-cyan-100 ring-white/15" : "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10"
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

function InfoTable({
  rows,
  columns,
}: {
  rows: Array<Record<string, ReactNode>>;
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

function FurnishedComparisonTable({ rows }: { rows: readonly ComparisonRow[] }) {
  return (
    <InfoTable
      rows={rows.map((row) => ({
        factor: row.factor,
        furnished: row.furnished,
        semiFurnished: row.semiFurnished,
        unfurnished: row.unfurnished,
      }))}
      columns={[
        { key: "factor", label: "Factor" },
        { key: "furnished", label: "Furnished" },
        { key: "semiFurnished", label: "Semi-furnished" },
        { key: "unfurnished", label: "Unfurnished" },
      ]}
    />
  );
}

function UtilityLineTable({ title, rows }: { title: string; rows: typeof page.utilityRows }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Responsibility map" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ item: row.item, range: row.range, note: row.note }))}
          columns={[
            { key: "item", label: "Service" },
            { key: "range", label: "Typical arrangement" },
            { key: "note", label: "Notes" },
          ]}
        />
      </div>
    </div>
  );
}

function RentalScenarioTable({ title, rows }: { title: string; rows: readonly RentalScenario[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ situation: row.situation, practice: row.practice, note: row.note }))}
          columns={[
            { key: "situation", label: "Situation" },
            { key: "practice", label: "Typical practice" },
            { key: "note", label: "Note" },
          ]}
        />
      </div>
    </div>
  );
}

function MistakeFixTable({ title, rows }: { title: string; rows: readonly MistakeFixRow[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Fixes" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ mistake: row.mistake, fix: row.fix }))}
          columns={[
            { key: "mistake", label: "Mistake" },
            { key: "fix", label: "What to do instead" },
          ]}
        />
      </div>
    </div>
  );
}

function ClauseTable({ title, rows }: { title: string; rows: readonly ClauseRow[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Lease clauses" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ clause: row.clause, whatToCheck: row.whatToCheck, whyItMatters: row.whyItMatters }))}
          columns={[
            { key: "clause", label: "Clause" },
            { key: "whatToCheck", label: "What to check" },
            { key: "whyItMatters", label: "Why it matters" },
          ]}
        />
      </div>
    </div>
  );
}

function ContractTypeTable({ title, rows }: { title: string; rows: readonly ContractTypeRow[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Compare types" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ type: row.type, typicalTerm: row.typicalTerm, noticeOrientation: row.noticeOrientation }))}
          columns={[
            { key: "type", label: "Contract type" },
            { key: "typicalTerm", label: "Typical term" },
            { key: "noticeOrientation", label: "Notice orientation" },
          ]}
        />
      </div>
    </div>
  );
}

function SplitTable({ title, rows }: { title: string; rows: readonly SplitRow[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Who handles what" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ topic: row.topic, tenant: row.tenant, landlord: row.landlord }))}
          columns={[
            { key: "topic", label: "Topic" },
            { key: "tenant", label: "Tenant" },
            { key: "landlord", label: "Landlord" },
          ]}
        />
      </div>
    </div>
  );
}

function InventoryExampleTable({ title, rows }: { title: string; rows: readonly InventoryExampleRow[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Example record" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ item: row.item, condition: row.condition, note: row.note }))}
          columns={[
            { key: "item", label: "Item" },
            { key: "condition", label: "Condition" },
            { key: "note", label: "Practical note" },
          ]}
        />
      </div>
    </div>
  );
}

function TaskDetailGrid({ title, rows }: { title: string; rows: readonly TaskDetailRow[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Step-by-step" title={title} fullWidth />
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {rows.map((row) => (
          <article key={row.task} className={cardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{row.timing}</p>
            <h3 className="mt-1 text-base font-bold text-foreground">{row.task}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{row.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function TimelineStepGrid({ steps }: { steps: readonly TimelineStep[] }) {
  return (
    <div className="relative">
      <div className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-brand/40 via-cyan-300/50 to-emerald-300/40 md:left-[1.375rem]" aria-hidden />
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li key={step.phase} className="relative flex gap-4 md:gap-5">
            <span
              className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copilot-bg-soft to-white text-sm font-black text-brand-strong shadow-sm ring-2 ring-white"
              aria-hidden
            >
              {index + 1}
            </span>
            <article className={cn(cardClass, "min-w-0 flex-1")}>
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">Phase {index + 1}</p>
              <h3 className="mt-1 text-base font-bold text-foreground">{step.phase}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.detail}</p>
            </article>
          </li>
        ))}
      </ol>
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

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
        movingNlCardMicroLiftClass
      )}
    >
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
          "mt-4 inline-flex shrink-0 items-center gap-2 rounded-xl border border-brand/20 bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-strong sm:mt-0",
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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: RentalGuideLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = iconPool[iconIndex % iconPool.length];
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
      </span>
      {item.description ? (
        <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>
          {item.description}
        </span>
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

function LinkCardGrid({ items }: { items: readonly RentalGuideLink[] }) {
  return (
    <div className={guidePremiumCardGridClass(items.length)}>
      {items.map((item, index) => (
        <LinkCard key={`${item.label}-${index}`} item={item} iconIndex={index} />
      ))}
    </div>
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

function OrientationFlowBand({ className }: { className?: string }) {
  const stepIcons = [FileText, Camera, Key] as const;
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
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three moves before you sign</h3>
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

export function RentalContractsAndDepositsNetherlandsView() {
  const faqAccordionItems = page.faq.map((item, index) => ({
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
          { name: "Housing", item: new URL(page.hubPath, baseUrl).toString() },
          { name: "Rental Contracts and Deposits", item: new URL(page.path, baseUrl).toString() },
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
                    <Link href={page.hubPath} className="hover:text-foreground">
                      Housing
                    </Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">
                      Rental Contracts and Deposits
                    </span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
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
            <nav aria-label="Rental contracts page sections" className="flex min-w-max gap-2">
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
                <SectionIntro eyebrow="At a glance" title="Rental Contracts at a Glance" fullWidth>
                  <p>
                    Use these signals to orient yourself on deposits, inventory documentation, utility separation and contract types before you sign.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.snapshot}
            >
              <VisualTextDetails details={page.visualTextDetails.snapshot} />
              <MilestoneStatGrid items={page.snapshotMilestones} />
              <FeatureGrid items={page.snapshotCards} />
              <ChecklistBlock title="How to use this snapshot" items={page.snapshotUseTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="understanding-contracts"
              intro={
                <SectionIntro eyebrow="Agreements" title="How Rental Agreements Work" fullWidth>
                  <p>
                    A Dutch rental agreement (huurcontract) defines monthly rent, lease duration, maintenance split, notice rules and permitted use — not just the headline price. Servicekosten, borg deposits and registration permission should also appear in writing.
                  </p>
                  <p>
                    Read every clause and appendix before transferring any deposit. If something is unclear, email questions and keep the replies with your signed file.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.understandingContracts}
            >
              <VisualTextDetails details={page.visualTextDetails.understandingContracts} />
              <ClauseTable title="Clauses to verify in your huurcontract" rows={page.contractClauseRows} />
              <BulletPanel title="What your lease should spell out" items={page.documentsChecklist.slice(0, 5)} />
              <GuideCrossLink
                href={RENTING_NETHERLANDS_PATH}
                title="Renting in the Netherlands"
                description="Go deeper on search, viewings and tenant orientation for expats."
                linkLabel="Open renting guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="contract-types"
              intro={
                <SectionIntro eyebrow="Contract types" title="Types of Rental Contracts" fullWidth>
                  <p>
                    Fixed-term, indefinite, student, temporary, corporate and shared arrangements use different notice and renewal patterns. Confirm which type applies before you sign.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.contractTypes}
            >
              <VisualTextDetails details={page.visualTextDetails.contractTypes} />
              <FeatureGrid items={page.contractTypes} />
              <ContractTypeTable title="Contract type comparison at a glance" rows={page.contractTypeComparison} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="deposits"
              intro={
                <SectionIntro eyebrow="Deposits" title="Rental Deposits in the Netherlands" fullWidth>
                  <p>
                    Security deposits are commonly requested before key handover. Amount, payment method and return conditions should be explicit in your contract — document property condition at move-in.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.deposits}
            >
              <VisualTextDetails details={page.visualTextDetails.deposits} />
              <BulletPanel title="Deposit orientation" items={page.depositBullets} />
              <RentalScenarioTable title="How deposits play out in practice" rows={page.rentalScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="furnished-vs-unfurnished"
              intro={
                <SectionIntro eyebrow="Furnishing" title="Furnished vs Unfurnished Rentals" fullWidth>
                  <p>
                    Furnishing level changes both monthly rent and upfront setup cash. Compare total first-year cost — not headline rent alone — when choosing between furnished, semi-furnished and unfurnished options.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.furnishedVsUnfurnished}
            >
              <VisualTextDetails details={page.visualTextDetails.furnishedVsUnfurnished} />
              <FurnishedComparisonTable rows={page.furnishedComparison} />
              <BulletPanel title="Furnishing setup tips" items={page.furnishedSetupBullets} />
              <GuideCrossLink
                href={HOUSING_COSTS_NETHERLANDS_PATH}
                title="Housing costs in the Netherlands"
                description="Compare total monthly stack — rent, servicekosten, utilities and setup cash."
                linkLabel="Open housing costs guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="inventory-lists"
              intro={
                <SectionIntro eyebrow="Inventory" title="Inventory Lists" fullWidth>
                  <p>
                    A detailed inventory records furniture, appliances and property condition at handover. Signed lists paired with photos protect both parties when you move out.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.inventoryLists}
            >
              <VisualTextDetails details={page.visualTextDetails.inventoryLists} />
              <InventoryExampleTable title="Example inventarisatielijst entries" rows={page.inventoryExampleRows} />
              <BulletPanel title="Inventory best practices" items={page.inventoryBullets} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="move-in-inspection"
              intro={
                <SectionIntro eyebrow="Move-in" title="Move-In Inspection" fullWidth>
                  <p>
                    Walk through the property on day one — before unpacking fully. Photograph existing wear, record meter readings and report new issues promptly in writing.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.moveInInspection}
            >
              <VisualTextDetails details={page.visualTextDetails.moveInInspection} />
              <TaskDetailGrid title="Move-in inspection steps" rows={page.inspectionDetailRows} />
              <ChecklistBlock title="Room-by-room checklist" items={page.inspectionChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="utilities"
              intro={
                <SectionIntro eyebrow="Utilities" title="Utilities in Rental Contracts" fullWidth>
                  <p>
                    Electricity, gas, water, internet and waste charges are frequently separate from headline rent. Confirm who arranges and pays each service before signing.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.utilities}
            >
              <VisualTextDetails details={page.visualTextDetails.utilities} />
              <UtilityLineTable title="Utility responsibility orientation" rows={page.utilityRows} />
              <BulletPanel title="Understanding servicekosten" items={page.serviceCostBullets} />
              <LinkCardGrid
                items={[
                  { label: "Utilities in the Netherlands", href: UTILITIES_NETHERLANDS_PATH, description: "Energy, water, internet and setup after moving.", status: "live" },
                  { label: "Energy and water", href: ENERGY_AND_WATER_NETHERLANDS_PATH, description: "Electricity, gas, water and district heating setup.", status: "live" },
                  { label: "Internet and mobile", href: INTERNET_AND_MOBILE_NETHERLANDS_PATH, description: "Broadband, mobile and connectivity after move-in.", status: "live" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="tenant-responsibilities"
              intro={
                <SectionIntro eyebrow="Tenant" title="Tenant Responsibilities" fullWidth>
                  <p>
                    Practical tenant duties include day-to-day property care, reporting defects, paying agreed utilities and following building rules. Verify specifics in your lease.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.tenantResponsibilities}
            >
              <VisualTextDetails details={page.visualTextDetails.tenantResponsibilities} />
              <FeatureGrid items={page.tenantResponsibilityCards} />
              <SplitTable title="Tenant vs landlord — common topics" rows={page.tenantLandlordSplit} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="landlord-responsibilities"
              intro={
                <SectionIntro eyebrow="Landlord" title="Landlord Responsibilities" fullWidth>
                  <p>
                    Landlords typically handle major structural repairs and building systems. For apartments, shared elements may involve the VvE (owners association) or the landlord — disputes may involve Huurcommissie or advice services.
                  </p>
                  <p>
                    This section is high-level orientation only. Your huurcontract and Dutch housing law define the split for your property type.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.landlordResponsibilities}
            >
              <VisualTextDetails details={page.visualTextDetails.landlordResponsibilities} />
              <FeatureGrid items={page.landlordResponsibilityCards} />
              <BulletPanel title="When to escalate to landlord" items={page.landlordReportBullets} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="rent-increases"
              intro={
                <SectionIntro eyebrow="Rent changes" title="Rent Increases" fullWidth>
                  <p>
                    Rent adjustment rules depend on property sector and contract clauses. Read indexation formulas in your lease and verify current orientation through official sources.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.rentIncreases}
            >
              <VisualTextDetails details={page.visualTextDetails.rentIncreases} />
              <BulletPanel title="Stay informed on rent changes" items={page.rentIncreaseBullets} />
              <RentalScenarioTable title="Rent change scenarios expats encounter" rows={page.rentIncreaseOrientationRows} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="ending-lease"
              intro={
                <SectionIntro eyebrow="Ending lease" title="Ending Your Lease" fullWidth>
                  <p>
                    Plan notice deadlines, move-out inspection timing and deposit discussions before your last month. Follow contract notice rules in writing.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.endingLease}
            >
              <VisualTextDetails details={page.visualTextDetails.endingLease} />
              <BulletPanel title="End-of-lease orientation" items={page.endingLeaseBullets} />
              <RentalScenarioTable title="Ending your lease — common situations" rows={page.endingLeaseScenarios} />
              <GuideCrossLink
                href={REGISTERING_YOUR_ADDRESS_NETHERLANDS_PATH}
                title="Registering your address"
                description="Plan gemeente inschrijving when moving out and updating your registration."
                linkLabel="Open address registration guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="move-out-checklist"
              intro={
                <SectionIntro eyebrow="Move out" title="Move-Out Checklist" fullWidth>
                  <p>
                    Structured move-out preparation reduces deposit disputes and forgotten utility accounts. Document final condition and retain correspondence about deposit return.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.moveOutChecklist}
            >
              <VisualTextDetails details={page.visualTextDetails.moveOutChecklist} />
              <TaskDetailGrid title="Move-out timing and tasks" rows={page.moveOutDetailRows} />
              <ChecklistBlock title="Move-out preparation checklist" items={page.moveOutChecklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              intro={
                <SectionIntro eyebrow="Avoidable mistakes" title="Common Rental Contract Mistakes" fullWidth>
                  <p>
                    Most disputes trace back to skipped documentation, unclear utilities or assumptions about furnishing. Review these patterns before signing.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.mistakes}
            >
              <VisualTextDetails details={page.visualTextDetails.mistakes} />
              <FeatureGrid items={page.mistakeCards} />
              <MistakeFixTable title="Practical fixes for common contract mistakes" rows={page.mistakeFixRows} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="documents-checklist"
              intro={
                <SectionIntro eyebrow="Before signing" title="Documents to Review Before Signing" fullWidth>
                  <p>Run this list before transferring any deposit — not after move-in surprises.</p>
                </SectionIntro>
              }
              visual={page.visuals.documentsChecklist}
            >
              <VisualTextDetails details={page.visualTextDetails.documentsChecklist} />
              <ChecklistBlock title="Pre-signing document checklist" items={page.documentsChecklist} columns={2} />
              <BulletPanel title="Signing red flags — pause and ask" items={page.signingRedFlags} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="timeline"
              intro={
                <SectionIntro eyebrow="Process" title="Rental Process Timeline" fullWidth>
                  <p>
                    Typical rental flow from search through move-out inspection. Your agency or landlord process may add steps — use this as orientation, not a guarantee.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.timeline}
            >
              <VisualTextDetails details={page.visualTextDetails.timeline} />
              <TimelineStepGrid steps={page.rentalTimeline} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              intro={
                <SectionIntro eyebrow="FAQ" title="Rental Contracts FAQ" fullWidth>
                  <p>Quick answers to common expat questions — verify live rules for your contract type and city.</p>
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
                  <p>Rental regulations evolve — check publication dates on official sites before making decisions.</p>
                </SectionIntro>
              }
              visual={page.visuals.sources}
            >
              <VisualTextDetails details={page.visualTextDetails.sources} />
              <p className="text-sm leading-relaxed text-foreground-muted">{page.sourcesDisclaimer}</p>
              <div className={guidePremiumCardGridClass(page.officialSources.length)}>
                {page.officialSources.map((source) => (
                  <SourceLink key={source.href} source={source} />
                ))}
              </div>
              <ChecklistBlock title="How to use these resources" items={page.sourceUsageTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="related-guides"
              intro={
                <SectionIntro title="Related Housing Guides" fullWidth>
                  <p>Continue into renting, housing costs, utilities, registration and insurance guides to complete your rental setup.</p>
                </SectionIntro>
              }
              visual={page.visuals.relatedGuides}
            >
              <VisualTextDetails details={page.visualTextDetails.relatedGuides} />
              <LinkCardGrid items={page.relatedGuides} />
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
                <SectionIntro eyebrow="Explore next" title="Continue Your Rental Setup" tone="onDark" fullWidth>
                  <p>Pick the guide that matches your next rental step — search, budget, utilities, registration or insurance.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure visual={page.visuals.exploreNext} tone="onDark" className={premiumVisualClass} />
                <div className={guidePremiumSectionDetailStackClass}>
                  <VisualTextDetails details={page.visualTextDetails.exploreNext} tone="onDark" />
                  <div className={guidePremiumCardGridClass(page.exploreNextCards.length)}>
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
