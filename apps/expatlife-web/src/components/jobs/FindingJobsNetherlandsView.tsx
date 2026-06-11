import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe2,
  Landmark,
  Laptop,
  MapPin,
  Network,
  PiggyBank,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { Accordion } from "@/components/ui/accordion";
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
import { FindingJobsNetherlandsRecommendedServices, FindingJobsVisaAffiliateSupport } from "./FindingJobsNetherlandsRecommendedServices";
import {
  findingJobsNetherlandsPage as page,
  type FindingJobsLink,
  type JobPlatform,
  type RecruitmentAgency,
  COST_OF_LIVING_CALCULATOR_PATH,
  DUTCH_SALARY_NET_CALCULATOR_PATH,
  EXPAT_SALARY_NETHERLANDS_PATH,
  FINDING_JOBS_NETHERLANDS_PATH,
} from "./findingJobsNetherlandsPageModel";
import { buildTrackedOutboundLink, trackedOutboundAnchorProps } from "@/lib/analytics/tracked-outbound";

const baseUrl = getSiteOrigin();
const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
const sectionVisualMtClass = "mt-8 w-full sm:mt-10";
const cardClass = cn(
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative overflow-hidden bg-white/90 p-5 shadow-sm ring-1 ring-slate-900/[0.04]",
  movingNlCardMicroLiftClass
);
const focusTagClass =
  "rounded-full bg-copilot-bg-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-strong ring-1 ring-copilot-primary/10";
const cardIcons = [BriefcaseBusiness, Building2, Globe2, TrendingUp, Search, Network, Laptop, FileText, Users, WalletCards, Landmark, MapPin] as const;
const snapshotIcons = [Globe2, BriefcaseBusiness, TrendingUp, ShieldCheck, WalletCards, MapPin] as const;
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
        <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
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

function HeroSignalStrip() {
  return (
    <div className="relative mt-5 grid gap-3 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/82 p-3 shadow-card ring-1 ring-slate-900/[0.03] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      {page.snapshotCards.slice(0, 4).map((card, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <div
            key={card.label}
            className="relative rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-copilot-bg-soft/70 p-4 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-foreground-muted">{card.label}</span>
                <span className="mt-1 block text-sm font-bold leading-snug text-foreground">{card.value}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ChecklistBlock({ title, items, columns = 1, className }: { title: string; items: readonly string[]; columns?: 1 | 2; className?: string }) {
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
    <aside className={cn("relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6", movingNlCardMicroLiftClass, className)}>
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

function JobSearchFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Target roles", body: "Shortlist industries and cities before applying broadly.", Icon: Search },
    { label: "Verify visa path", body: "Confirm sponsor capacity and permit type with realistic employers.", Icon: ShieldCheck },
    { label: "Stress-test pay", body: "Model gross offers against net pay and local housing costs.", Icon: Calculator },
  ] as const;
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Job search planning</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">From vacancy list to realistic move decision</h3>
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

function CalculatorToolsPanel() {
  return (
    <aside className="relative flex flex-col overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="relative flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Planning tools</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight">Compare offers with salary and living-cost tools</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Job hunting connects to compensation and relocation math — use calculators for orientation, not guarantees.
        </p>
        <div className="mt-5 grid gap-3">
          {page.relatedCalculators.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10 transition hover:border-white/20 hover:bg-white/15"
            >
              <span className="block text-sm font-semibold text-white">{tool.label}</span>
              {tool.description ? <span className="mt-1 block text-sm leading-relaxed text-slate-300">{tool.description}</span> : null}
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
          <Link href={DUTCH_SALARY_NET_CALCULATOR_PATH} className={cn(primaryCtaClass, "w-full border-white/20 bg-white text-slate-950 hover:bg-slate-100")}>
            Open Dutch salary net calculator
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href={EXPAT_SALARY_NETHERLANDS_PATH} className={cn(secondaryCtaClass, "w-full border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/15")}>
            Read expat salary guide
          </Link>
          <Link href={COST_OF_LIVING_CALCULATOR_PATH} className="text-sm font-semibold text-cyan-100 hover:text-white">
            Open cost of living calculator
          </Link>
        </div>
      </div>
    </aside>
  );
}

function InfoTable({ rows, columns }: { rows: Array<Record<string, string>>; columns: Array<{ key: string; label: string }> }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-card">
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="overflow-x-auto">
        <table className="min-w-[760px] divide-y divide-slate-200 text-left text-sm">
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
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group relative block overflow-hidden p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}
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

function VisualFigure({ visual, className }: { visual: (typeof page.visuals)[keyof typeof page.visuals]; className?: string }) {
  return (
    <figure className={cn("overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-xl ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass, className)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <Image
        src={visual.src}
        alt={visual.alt}
        width={1600}
        height={900}
        unoptimized
        sizes="(min-width: 1024px) 980px, 100vw"
        className="h-auto w-full bg-slate-50"
      />
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">
        {visual.caption}
      </figcaption>
    </figure>
  );
}

function MiniStatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <article className={cn(cardClass, "p-4 sm:p-5")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{label}</p>
      <p className="mt-2 text-2xl font-black tracking-tight text-foreground">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{note}</p>
    </article>
  );
}

function FeatureCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: FindingJobsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
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
          <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300" : "bg-slate-100 text-slate-500")}>Coming soon</span>
        ) : null}
      </span>
      {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
      {isLive ? (
        <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover")}>
          Open <ArrowRight className="h-3.5 w-3.5" aria-hidden />
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

function BulletPanel({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <ul className="mt-4 grid gap-3">
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

function PlatformCard({ platform }: { platform: JobPlatform }) {
  const outbound = buildTrackedOutboundLink(platform.website, {
    pagePath: FINDING_JOBS_NETHERLANDS_PATH,
    partnerSlug: platform.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    linkText: "Visit website",
    isAffiliate: false,
  });

  return (
    <article className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-expatos-xl ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-xl font-black tracking-tight text-foreground">{platform.name}</h3>
        <span className={focusTagClass}>Job platform</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{platform.summary}</p>
      <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3">
          <p className="font-bold text-foreground">Best for</p>
          <p className="mt-1 text-foreground-muted">{platform.focus.join(" · ")}</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3">
          <p className="font-bold text-foreground">Industries</p>
          <p className="mt-1 text-foreground-muted">{platform.industries.join(" · ")}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {platform.expatFriendly ? <span className={CITIES_FUNNEL_INFO_CHIP}>Expat-friendly</span> : null}
        {platform.englishRoles ? <span className={CITIES_FUNNEL_INFO_CHIP}>English roles</span> : null}
      </div>
      <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-200/80 pt-4">
        <a {...trackedOutboundAnchorProps(outbound)} target="_blank" className={secondaryCtaClass}>
          Visit website <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </article>
  );
}

function RecruiterCard({ agency }: { agency: RecruitmentAgency }) {
  const outbound = buildTrackedOutboundLink(agency.website, {
    pagePath: FINDING_JOBS_NETHERLANDS_PATH,
    partnerSlug: agency.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    linkText: "Visit website",
    isAffiliate: false,
  });

  return (
    <article className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-expatos-xl ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-xl font-black tracking-tight text-foreground">{agency.name}</h3>
        <span className={focusTagClass}>Recruitment agency</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{agency.summary}</p>
      <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3">
          <p className="font-bold text-foreground">Focus</p>
          <p className="mt-1 text-foreground-muted">{agency.focus.join(" · ")}</p>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3">
          <p className="font-bold text-foreground">Industries</p>
          <p className="mt-1 text-foreground-muted">{agency.industries.join(" · ")}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {agency.expatFriendly ? <span className={CITIES_FUNNEL_INFO_CHIP}>Expat-friendly</span> : null}
        {agency.englishRoles ? <span className={CITIES_FUNNEL_INFO_CHIP}>English roles</span> : null}
      </div>
      <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-200/80 pt-4">
        <a {...trackedOutboundAnchorProps(outbound)} target="_blank" className={secondaryCtaClass}>
          Visit website <ExternalLink className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </article>
  );
}

function CityCard({ city }: { city: (typeof page.cityCards)[number] }) {
  return (
    <Link
      href={city.href}
      className={cn(
        cardClass,
        "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        transitionInteractive,
        activeBrightnessPress
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex items-center gap-2 text-lg font-bold text-foreground group-hover:text-link">
        <MapPin className="h-5 w-5 text-brand-strong" aria-hidden />
        {city.city}
      </span>
      <dl className="mt-4 grid gap-2 text-sm text-foreground-muted">
        <div>
          <dt className="font-semibold text-foreground">Major industries</dt>
          <dd>{city.industries}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">International presence</dt>
          <dd>{city.internationalPresence}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Salary positioning</dt>
          <dd>{city.salaryPositioning}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Work culture vibe</dt>
          <dd>{city.vibe}</dd>
        </div>
      </dl>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">
        Open city guide <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </Link>
  );
}

export function FindingJobsNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Jobs", item: new URL("/netherlands/moving/working-in-the-netherlands/", baseUrl).toString() },
    { name: "Finding Jobs", item: new URL(page.path, baseUrl).toString() },
  ];
  const faqItems = page.faq.map((item, idx) => ({ id: `faq-${idx}`, title: item.q, content: item.a }));
  const platformTableRows = page.jobPlatforms.map((platform) => ({
    name: platform.name,
    bestFor: platform.focus.slice(0, 2).join(", "),
    industries: platform.industries.slice(0, 2).join(", "),
    english: platform.englishRoles ? "Often" : "Varies",
  }));
  const recruiterTableRows = page.recruitmentAgencies.map((agency) => ({
    name: agency.name,
    focus: agency.focus.slice(0, 2).join(", "),
    industries: agency.industries.slice(0, 2).join(", "),
    english: agency.englishRoles ? "Often" : "Varies",
  }));
  const cityTableRows = page.cityCards.map((city) => ({
    city: city.city,
    industries: city.industries.join(", "),
    international: city.internationalPresence.split(" — ")[0],
    salary: city.salaryPositioning.split(";")[0],
  }));

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
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
                    <Link href="/netherlands/moving/working-in-the-netherlands/" className="hover:text-foreground">Jobs</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Finding jobs</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {page.hero.chips.map((chip) => (
                      <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>
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
                    This guide is practical orientation only — not immigration advice, job placement or visa sponsorship guarantees. Outcomes depend on industry, experience, employer policy and market conditions.
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white/80 p-3 shadow-sm ring-1 ring-slate-900/[0.03]">
            <nav aria-label="Finding jobs guide sections" className="flex min-w-max gap-2">
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
            <section id="intro" className={sectionClass}>
              <SectionIntro eyebrow="Overview" title={page.intro.heading} fullWidth>
                {page.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className="mt-6">
                <SectionIntro eyebrow="Why the Netherlands" title="What attracts international professionals" />
                <div className={cn(sectionStackClass, "mt-4 grid gap-4 sm:grid-cols-2")}>
                  {page.intro.attractors.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <SectionIntro eyebrow="Reality check" title="What your outcome still depends on" />
                <div className={cn(sectionStackClass, "mt-4 grid gap-4 sm:grid-cols-2")}>
                  {page.intro.dependsOn.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx + 4} />
                  ))}
                </div>
              </div>
              <ChecklistBlock title="Before you apply widely" items={page.jobSearchChecklist} columns={2} className="mt-6" />
              <ProcessPanel
                eyebrow="Practical lens"
                title="A realistic Dutch job search usually follows three moves"
                rowsLayout="wide"
                className="mt-6"
                rows={[
                  { label: "Target", body: "Pick industries, cities and role titles that match your visa route.", Icon: Search },
                  { label: "Localize", body: "Adapt CV, LinkedIn and salary expectations to Dutch hiring norms.", Icon: FileText },
                  { label: "Multiply channels", body: "Combine platforms, recruiters, networking and direct employer outreach.", Icon: Network },
                ]}
                note="No channel guarantees an offer — treat this as a planning lens, not a promise."
              />
              <VisualFigure visual={page.visuals.intro} className={sectionVisualMtClass} />
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro eyebrow="At a glance" title="Dutch Job Market at a Glance">
                <p>Practical orientation points before you shortlist roles, cities or recruiters.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.snapshotCards.map((card) => <MiniStatCard key={card.label} {...card} />)}
              </div>
              <ChecklistBlock title="Three moves after reading this snapshot" items={page.snapshotNextSteps} className="mt-6" />
              <VisualFigure visual={page.visuals.snapshot} className={sectionVisualMtClass} />
            </section>

            <section id="job-market" className={sectionClass}>
              <SectionIntro eyebrow="Job market" title={page.jobMarketHeading} fullWidth>
                {page.jobMarketParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2")}>
                {page.jobMarketCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <div className="mt-6"><BulletPanel title="How the Dutch market often works" items={page.jobMarketPoints} /></div>
              <VisualFigure visual={page.visuals.jobMarket} className={sectionVisualMtClass} />
            </section>

            <section id="industries" className={sectionClass}>
              <SectionIntro eyebrow="Industries" title="Industries Hiring International Professionals">
                <p>Demand changes over time and by city — use these cards to identify where your profile may fit, then verify live vacancies.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.industryCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-foreground-muted">{page.industryNote}</p>
              <ChecklistBlock title="How to verify demand in your sector" items={page.industrySearchTips} columns={2} className="mt-6" />
              <VisualFigure visual={page.visuals.industries} className={sectionVisualMtClass} />
            </section>

            <section id="english-jobs" className={sectionClass}>
              <SectionIntro eyebrow="Language" title={page.englishJobsHeading}>
                <p>English can open doors in international employers — Dutch skills may still improve long-term mobility.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.englishJobsScenarios.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <BulletPanel title="Where English-only roles are most common" items={page.englishJobsPoints} />
                <div>
                  <SectionIntro eyebrow="Compare sectors" title="English vs Dutch expectations by sector" />
                  <div className="mt-4">
                    <InfoTable
                      rows={page.englishJobsComparison.map((row) => ({
                        sector: row.sector,
                        english: row.englishLikelihood,
                        dutch: row.dutchUse,
                        note: row.note,
                      }))}
                      columns={[
                        { key: "sector", label: "Sector" },
                        { key: "english", label: "English often enough?" },
                        { key: "dutch", label: "Dutch value" },
                        { key: "note", label: "Reality check" },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <VisualFigure visual={page.visuals.englishJobs} className={sectionVisualMtClass} />
            </section>

            <section id="visa-sponsorship" className={sectionClass}>
              <SectionIntro eyebrow="Visa sponsorship" title={page.visaSponsorship.heading} fullWidth>
                {page.visaSponsorship.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {page.visaSponsorship.routes.map((route, idx) => (
                  <FeatureCard key={route.title} title={route.title} body={route.body} iconIndex={idx} />
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-foreground-muted">{page.visaSponsorship.disclaimer}</p>
              <ChecklistBlock title="What to verify before you rely on sponsorship" items={page.visaSponsorship.verificationChecklist} columns={2} className="mt-6" />
              <div className="mt-6 flex flex-wrap gap-3">
                {page.visaSponsorship.links.map((link) => (
                  <Link key={link.href} href={link.href} className={secondaryCtaClass}>{link.label}</Link>
                ))}
              </div>
              <FindingJobsVisaAffiliateSupport />
              <VisualFigure visual={page.visuals.visaSponsorship} className={sectionVisualMtClass} />
            </section>

            <section id="cities" className={sectionClass}>
              <SectionIntro eyebrow="Cities" title="Best Cities for Expats Seeking Work">
                <p>Compare industry mix, international presence and salary positioning — not just headline vacancy counts.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {page.cityCards.map((city) => <CityCard key={city.city} city={city} />)}
              </div>
              <div className="mt-8">
                <SectionIntro eyebrow="Compare cities" title="At-a-glance city comparison for job seekers" />
                <div className="mt-4">
                  <InfoTable
                    rows={cityTableRows}
                    columns={[
                      { key: "city", label: "City" },
                      { key: "industries", label: "Major industries" },
                      { key: "international", label: "International presence" },
                      { key: "salary", label: "Salary positioning" },
                    ]}
                  />
                </div>
              </div>
              <VisualFigure visual={page.visuals.cities} className={sectionVisualMtClass} />
            </section>

            <section id="cv-culture" className={sectionClass}>
              <SectionIntro eyebrow="Applications" title={page.cvCultureHeading}>
                <p>Dutch hiring culture often favours concise CVs, direct communication and realistic salary expectations.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <BulletPanel title="CV and application culture" items={page.cvCulturePoints} />
                <BulletPanel title="LinkedIn tips" items={page.linkedInTips} />
                <BulletPanel title={page.interviewCulture.heading} items={page.interviewCulture.points} />
              </div>
              <ChecklistBlock title="Application checklist before you submit" items={page.applicationChecklist} columns={2} className="mt-6" />
              <VisualFigure visual={page.visuals.cvCulture} className={sectionVisualMtClass} />
            </section>

            <section id="salaries" className={sectionClass}>
              <SectionIntro eyebrow="Salaries" title={page.salaries.heading} fullWidth>
                {page.salaries.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-start">
                <div>
                  <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-4")}>
                    {page.salaries.factors.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
                  </div>
                  <div className={cn(sectionStackClass, "mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                    {page.salaries.links.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                  </div>
                  <JobSearchFlowBand className="mt-6" />
                </div>
                <CalculatorToolsPanel />
              </div>
              <VisualFigure visual={page.visuals.salaries} className={sectionVisualMtClass} />
            </section>

            <section id="platforms-directory" className={sectionClass}>
              <SectionIntro eyebrow="Directory" title="Job Platforms and Recruiters for Expats">
                <p>Real platforms and agencies used by international professionals — inclusion is informational, not a ranking or endorsement.</p>
              </SectionIntro>
              <div className="mt-8">
                <SectionIntro eyebrow="Job platforms" title="Where to search for roles" />
                <div className={cn(sectionStackClass, "grid gap-5 xl:grid-cols-2")}>
                  {page.jobPlatforms.map((platform) => <PlatformCard key={platform.name} platform={platform} />)}
                </div>
              </div>
              <div className="mt-8">
                <SectionIntro eyebrow="Recruitment agencies" title="Recruiters that may help expats" />
                <div className={cn(sectionStackClass, "grid gap-5 xl:grid-cols-2")}>
                  {page.recruitmentAgencies.map((agency) => <RecruiterCard key={agency.name} agency={agency} />)}
                </div>
              </div>
              <div className="mt-8 grid gap-6 xl:grid-cols-2">
                <div>
                  <SectionIntro eyebrow="Compare platforms" title="At-a-glance platform comparison" />
                  <div className="mt-4">
                    <InfoTable
                      rows={platformTableRows}
                      columns={[
                        { key: "name", label: "Platform" },
                        { key: "bestFor", label: "Best for" },
                        { key: "industries", label: "Industries" },
                        { key: "english", label: "English" },
                      ]}
                    />
                  </div>
                </div>
                <div>
                  <SectionIntro eyebrow="Compare recruiters" title="At-a-glance recruiter comparison" />
                  <div className="mt-4">
                    <InfoTable
                      rows={recruiterTableRows}
                      columns={[
                        { key: "name", label: "Agency" },
                        { key: "focus", label: "Focus" },
                        { key: "industries", label: "Industries" },
                        { key: "english", label: "English" },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-foreground-muted">{page.platformsDirectoryNote}</p>
              <ChecklistBlock title="How to use platforms effectively" items={page.platformSearchTips} columns={2} className="mt-6" />
              <VisualFigure visual={page.visuals.platformsDirectory} className={sectionVisualMtClass} />
            </section>

            <section id="networking" className={sectionClass}>
              <SectionIntro eyebrow="Networking" title={page.networkingHeading}>
                <p>Many roles are filled through referrals, communities and professional networks — not only public job boards.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.networkingChannels.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <BulletPanel title="Why networking matters in the Netherlands" items={page.networkingPoints} />
                <ChecklistBlock title="Weekly networking actions" items={page.networkingWeeklyActions} />
              </div>
              <VisualFigure visual={page.visuals.networking} className={sectionVisualMtClass} />
            </section>

            <section id="remote-work" className={sectionClass}>
              <SectionIntro eyebrow="Remote work" title={page.remoteWork.heading} fullWidth>
                {page.remoteWork.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2")}>
                {page.remoteWork.scenarios.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <BulletPanel title="Remote and hybrid considerations" items={page.remoteWork.points} />
                <ProcessPanel
                  eyebrow="Before you accept"
                  title="Three questions for remote or hybrid offers"
                  rows={[
                    { label: "Which entity pays you?", body: "Dutch entity vs foreign payroll affects permits, tax and benefits.", Icon: Building2 },
                    { label: "Where must you work?", body: "Clarify office days, cross-border days and residency expectations.", Icon: MapPin },
                    { label: "What triggers reporting?", body: "Cross-border income may need treaty and foreign-income review.", Icon: FileText },
                  ]}
                  note="Remote work is not a workaround for Dutch work-authorization rules if you live in the Netherlands."
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {page.remoteWork.links.map((link) => (
                  <Link key={link.href} href={link.href} className={secondaryCtaClass}>{link.label}</Link>
                ))}
              </div>
              <VisualFigure visual={page.visuals.remoteWork} className={sectionVisualMtClass} />
            </section>

            <section id="mistakes" className={sectionClass}>
              <SectionIntro eyebrow="Avoidable mistakes" title="Common Mistakes Expats Make">
                <p>Use these cards to stress-test your search strategy before investing months in the wrong approach.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-4")}>
                {page.mistakeCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <VisualFigure visual={page.visuals.mistakes} className={sectionVisualMtClass} />
            </section>

            <section id="experience-levels" className={sectionClass}>
              <SectionIntro eyebrow="Career stages" title="Finding Work at Different Career Stages">
                <p>Graduates, specialists and executives often need different platforms, networks and visa conversations.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.experienceLevelCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <VisualFigure visual={page.visuals.experienceLevels} className={sectionVisualMtClass} />
            </section>

            <section id="questions" className={sectionClass}>
              <SectionIntro eyebrow="Common questions" title="Questions Expats Often Ask">
                <p>Quick orientation answers — verify specifics for your industry, visa route and target city.</p>
              </SectionIntro>
              <QuestionCards className="mt-6" />
              <VisualFigure visual={page.visuals.questions} className={sectionVisualMtClass} />
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro eyebrow="Career guides" title="Related Career Guides">
                <p>Connect job search context to salary benchmarks, visa routes, cities and relocation planning.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.relatedGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
              <VisualFigure visual={page.visuals.relatedGuides} className={sectionVisualMtClass} />
            </section>

            <section id="services" className={sectionClass}>
              <SectionIntro eyebrow="Services" title="Professional Services That May Help">
                <p>Recruitment, immigration, CV and relocation support may help with specific questions — this page does not replace personalised advice.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.servicesWhenToUse.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <div className="mt-6">
                <FindingJobsNetherlandsRecommendedServices />
              </div>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.services.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
              <VisualFigure visual={page.visuals.services} className={sectionVisualMtClass} />
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions">
                <p>These answers help you identify what still needs verification — employer policy, visa route, salary bands and language requirements.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "mt-6")}>
                <Accordion items={faqItems} />
              </div>
              <VisualFigure visual={page.visuals.faq} className={sectionVisualMtClass} />
            </section>

            <section id="official-sources" className={sectionClass}>
              <SectionIntro eyebrow="Trust" title="Official Sources">
                <p>{page.officialSourcesNote}</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.officialSources.map((source) => (
                  <SourceLink key={source.href} source={source} />
                ))}
              </div>
              <VisualFigure visual={page.visuals.officialSources} className={sectionVisualMtClass} />
            </section>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10")}>
              <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
              <div className="mt-6">
                <SectionIntro eyebrow="Explore next" title="Plan the Next Step" tone="onDark">
                  <p>Move from job market orientation into salary guides, visa routes, city comparison and relocation planning.</p>
                </SectionIntro>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.exploreNextCards.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} tone="onDark" />)}
                </div>
              </div>
              <VisualFigure visual={page.visuals.exploreNext} className={sectionVisualMtClass} />
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
