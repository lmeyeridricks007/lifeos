import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Globe2,
  Landmark,
  Network,
  PiggyBank,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
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
import {
  EmploymentContractHsmAffiliateSupport,
  EmploymentContractMortgageAffiliateSupport,
  EmploymentContractNetherlandsRecommendedServices,
  EmploymentContractSalaryTaxAffiliateSupport,
} from "./EmploymentContractNetherlandsRecommendedServices";
import {
  CONTRACT_RISK_SCANNER_PATH,
  DUTCH_SALARY_NET_CALCULATOR_PATH,
  employmentContractNetherlandsPage as page,
  EXPAT_SALARY_NETHERLANDS_PATH,
  HSM_VISA_PATH,
  JOBS_HUB_PATH,
  MORTGAGES_NETHERLANDS_EXPATS_PATH,
  type EmploymentContractLink,
} from "./employmentContractNetherlandsPageModel";

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
const cardIcons = [BriefcaseBusiness, Building2, Globe2, TrendingUp, FileText, Network, Users, WalletCards, Landmark, PiggyBank, Scale, ShieldCheck] as const;
const snapshotIcons = [Globe2, BriefcaseBusiness, TrendingUp, ShieldCheck, WalletCards, FileText] as const;
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

function InfoTable({ rows, columns }: { rows: Array<Record<string, string>>; columns: Array<{ key: string; label: string }> }) {
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

function ScenarioTable({
  title,
  rows,
  className,
}: {
  title: string;
  rows: ReadonlyArray<{ profile: string; scenario: string; whatToCheck: string }>;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <SectionIntro eyebrow="Examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ profile: row.profile, scenario: row.scenario, whatToCheck: row.whatToCheck }))}
          columns={[
            { key: "profile", label: "Profile" },
            { key: "scenario", label: "Scenario" },
            { key: "whatToCheck", label: "What to check" },
          ]}
        />
      </div>
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
    <figure
      className={cn(
        "relative isolate w-full overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white/95 shadow-expatos-xl ring-1 ring-slate-900/[0.05]",
        movingNlCardMicroLiftClass,
        className
      )}
    >
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-200/25 blur-3xl" aria-hidden />
      <div className="relative aspect-[4/3] w-full min-h-[280px] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft sm:min-h-[360px] lg:min-h-[480px] xl:min-h-[560px]">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          unoptimized
          sizes="(min-width: 1280px) 1400px, 100vw"
          className="object-contain p-1 drop-shadow-sm sm:p-2"
        />
      </div>
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

function LinkedFeatureCard({
  title,
  body,
  link,
  iconIndex = 0,
}: {
  title: string;
  body: string;
  link?: { label: string; href: string };
  iconIndex?: number;
}) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  return (
    <article className={cardClass}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
      {link ? (
        <Link href={link.href} className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link hover:text-link-hover">
          {link.label} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      ) : null}
    </article>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: EmploymentContractLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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
      <div className={cn("mt-5 grid gap-3", rowsLayout === "wide" && "sm:grid-cols-2 xl:grid-cols-4")}>
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

function SalaryToolsPanel() {
  return (
    <aside className="relative flex flex-col overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="relative flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Planning tools</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight">Model contract salary before you sign</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Gross lines in your contract are only the starting point — use calculators and guides to compare offers on net pay.
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
        </div>
      </div>
    </aside>
  );
}

function ContractReviewFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Read every clause", body: "Start with duration, probation, notice and salary lines — not only the job title page.", Icon: FileText },
    { label: "Model total pay", body: "Add holiday allowance, pension and allowances before comparing offers or planning housing.", Icon: Calculator },
    { label: "Verify visa links", body: "If sponsored, cross-check salary and employer status against current IND guidance.", Icon: ShieldCheck },
  ] as const;
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Contract review flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">From offer letter to informed signing decision</h3>
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

function ContractToolPanel() {
  return (
    <aside className="relative flex flex-col overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="relative flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Planning tool</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight">{page.toolLink.label}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{page.toolLink.description}</p>
        <Link href={CONTRACT_RISK_SCANNER_PATH} className={cn(primaryCtaClass, "mt-5 w-full border-white/20 bg-white text-slate-950 hover:bg-slate-100")}>
          Open contract risk scanner
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </aside>
  );
}

export function EmploymentContractNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Jobs", item: new URL(JOBS_HUB_PATH, baseUrl).toString() },
    { name: "Employment Contracts", item: new URL(page.path, baseUrl).toString() },
  ];
  const faqItems = page.faq.map((item, idx) => ({ id: `faq-${idx}`, title: item.q, content: item.a }));
  const permanentVsTemporaryRows = page.permanentVsTemporaryComparison.map((row) => ({
    label: row.label,
    permanent: row.permanent,
    temporary: row.temporary,
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
                    <Link href={JOBS_HUB_PATH} className="hover:text-foreground">Jobs</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Employment contracts</span>
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
                    This guide is practical orientation only — not legal or employment law advice. Contract outcomes depend on employer policy, sector rules, CAO context and your specific agreement.
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white/80 p-3 shadow-sm ring-1 ring-slate-900/[0.03]">
            <nav aria-label="Employment contract guide sections" className="flex min-w-max gap-2">
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
                <SectionIntro eyebrow="Contract topics" title="What Dutch employment agreements usually cover" />
                <div className={cn(sectionStackClass, "mt-4 grid gap-4 sm:grid-cols-2")}>
                  {page.intro.contractTopics.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <SectionIntro eyebrow="Expat angles" title="Why contracts matter beyond the job title" />
                <div className={cn(sectionStackClass, "mt-4 grid gap-4 sm:grid-cols-2")}>
                  {page.intro.expatAngles.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx + 4} />
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-start">
                <ChecklistBlock title="Before you sign" items={page.snapshotNextSteps} columns={2} />
                <ContractToolPanel />
              </div>
              <ContractReviewFlowBand className="mt-6" />
              <ScenarioTable title="When contract terms change real plans" rows={page.intro.scenarios} className="mt-6" />
              <VisualFigure visual={page.visuals.intro} className={sectionVisualMtClass} />
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro eyebrow="At a glance" title="Dutch Employment Contracts at a Glance">
                <p>Practical orientation points before you compare offers, negotiate terms or plan relocation.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.snapshotCards.map((card) => <MiniStatCard key={card.label} {...card} />)}
              </div>
              <ChecklistBlock title="Three moves after reading this snapshot" items={page.snapshotNextSteps} className="mt-6" />
              <VisualFigure visual={page.visuals.snapshot} className={sectionVisualMtClass} />
            </section>

            <section id="contract-types" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro eyebrow="Contract types" title="Types of Employment Contracts in the Netherlands">
                    <p>Dutch employers use several contract structures — labels vary, but the duration and renewal expectations usually matter most.</p>
                  </SectionIntro>
                  <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                    {page.contractTypeCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground-muted">{page.contractTypesNote}</p>
                  <ChecklistBlock title="What to verify on your contract type" items={page.contractTypeReviewTips} columns={2} />
                  <VisualFigure visual={page.visuals.contractTypes} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.visuals.contractTypes} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
              <ScenarioTable title="Contract type examples expats often see" rows={page.contractTypeExamples} className="mt-8 w-full" />
              <ProcessPanel
                className="mt-8"
                eyebrow="When to expect each pattern"
                title="Common contract paths for expats"
                rows={page.contractTypeWhenToExpect.map((item, idx) => ({
                  label: item.title,
                  body: item.body,
                  Icon: [BriefcaseBusiness, Clock, Users, Network][idx % 4],
                }))}
                rowsLayout="wide"
                note="These are orientation patterns only — your employer, sector and CAO determine the exact contract you receive."
              />
            </section>

            <section id="permanent-vs-temporary" className={sectionClass}>
              <SectionIntro eyebrow="Stability" title={page.permanentVsTemporaryHeading} fullWidth>
                {page.permanentVsTemporaryParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className="mt-6">
                <SectionIntro eyebrow="Compare" title="Permanent vs temporary at a glance" />
                <div className="mt-4">
                  <InfoTable
                    rows={permanentVsTemporaryRows}
                    columns={[
                      { key: "label", label: "Factor" },
                      { key: "permanent", label: "Permanent contract" },
                      { key: "temporary", label: "Temporary / fixed-term" },
                    ]}
                  />
                </div>
              </div>
              <div className="mt-6">
                <BulletPanel title="Planning tips for fixed-term roles" items={page.permanentVsTemporaryPlanningTips} />
              </div>
              <ScenarioTable title="Permanent vs temporary planning scenarios" rows={page.permanentVsTemporaryScenarios} className="mt-6" />
              <VisualFigure visual={page.visuals.permanentVsTemporary} className={sectionVisualMtClass} />
            </section>

            <section id="probation" className={sectionClass}>
              <SectionIntro eyebrow="Probation" title={page.probationHeading} fullWidth>
                {page.probationParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <BulletPanel title="Probation period essentials" items={page.probationPoints} />
                <ChecklistBlock title="Probation review checklist" items={page.probationChecklist} />
              </div>
              <ScenarioTable title="Probation scenarios to plan for" rows={page.probationScenarios} className="mt-6" />
              <VisualFigure visual={page.visuals.probation} className={sectionVisualMtClass} />
            </section>

            <section id="salary-compensation" className={sectionClass}>
              <SectionIntro eyebrow="Compensation" title={page.salaryCompensationHeading} fullWidth>
                {page.salaryCompensationParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className={cn("mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3", sectionStackClass)}>
                {page.salaryCompensationItems.map((item, idx) => (
                  <LinkedFeatureCard key={item.title} title={item.title} body={item.body} link={item.link} iconIndex={idx} />
                ))}
              </div>
              <VisualFigure visual={page.visuals.salaryCompensation} className={sectionVisualMtClass} />
              <div className="mt-8 grid w-full gap-6 lg:grid-cols-2">
                <BulletPanel title="Salary lines to review before signing" items={page.salaryReviewTips} />
                <SalaryToolsPanel />
              </div>
              <div className="mt-8 w-full">
                <SectionIntro eyebrow="Compare offers" title="Three offer examples with different trade-offs" fullWidth />
                <div className="mt-4 w-full">
                  <InfoTable
                    rows={page.salaryOfferExamples.map((row) => ({
                      label: row.label,
                      grossMonthly: row.grossMonthly,
                      holidayAllowance: row.holidayAllowance,
                      pension: row.pension,
                      travelOrExtras: row.travelOrExtras,
                      planningNote: row.planningNote,
                    }))}
                    columns={[
                      { key: "label", label: "Offer" },
                      { key: "grossMonthly", label: "Gross / month" },
                      { key: "holidayAllowance", label: "Holiday allowance" },
                      { key: "pension", label: "Pension" },
                      { key: "travelOrExtras", label: "Travel / extras" },
                      { key: "planningNote", label: "Planning note" },
                    ]}
                  />
                </div>
              </div>
              <EmploymentContractSalaryTaxAffiliateSupport />
            </section>

            <section id="working-hours-leave" className={sectionClass}>
              <SectionIntro eyebrow="Hours & leave" title={page.workingHoursLeaveHeading} fullWidth>
                {page.workingHoursLeaveParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <BulletPanel title="What to confirm in your contract" items={page.workingHoursLeavePoints} />
                <div className="grid gap-4">
                  {page.workingHoursScenarios.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx + 2} />
                  ))}
                </div>
              </div>
              <VisualFigure visual={page.visuals.workingHoursLeave} className={sectionVisualMtClass} />
            </section>

            <section id="notice-periods" className={sectionClass}>
              <SectionIntro eyebrow="Notice" title={page.noticePeriodsHeading} fullWidth>
                {page.noticePeriodsParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <BulletPanel title="Notice period essentials" items={page.noticePeriodsPoints} />
                <ChecklistBlock title="Resignation checklist" items={page.noticeResignationChecklist} />
              </div>
              <ScenarioTable title="Notice and resignation scenarios" rows={page.noticeScenarios} className="mt-6" />
              <VisualFigure visual={page.visuals.noticePeriods} className={sectionVisualMtClass} />
            </section>

            <section id="pensions-benefits" className={sectionClass}>
              <SectionIntro eyebrow="Benefits" title={page.pensionsBenefitsHeading} fullWidth>
                {page.pensionsBenefitsParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.pensionsBenefitsCards.map((item, idx) => (
                  <LinkedFeatureCard
                    key={item.title}
                    title={item.title}
                    body={item.body}
                    link={"link" in item ? item.link : undefined}
                    iconIndex={idx}
                  />
                ))}
              </div>
              <div className="mt-6">
                <BulletPanel title="How to compare benefit packages" items={page.benefitsCompareTips} />
              </div>
              <ScenarioTable title="Benefits package examples" rows={page.benefitsPackageExamples} className="mt-6" />
              <VisualFigure visual={page.visuals.pensionsBenefits} className={sectionVisualMtClass} />
            </section>

            <section id="hsm-contracts" className={sectionClass}>
              <SectionIntro eyebrow="Highly skilled migrant" title={page.hsmContractsHeading} fullWidth>
                {page.hsmContractsParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <BulletPanel title="Contract points for sponsored routes" items={page.hsmContractsPoints} />
                <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
                  <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
                  <h3 className="text-base font-bold tracking-tight text-foreground">Highly skilled migrant guide</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    Connect contract salary, duration and employer sponsor status to current permit rules — verify independently on official IND sources.
                  </p>
                  <Link href={HSM_VISA_PATH} className={cn(secondaryCtaClass, "mt-5")}>
                    Open highly skilled migrant guide
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </aside>
              </div>
              <ScenarioTable title="Highly skilled migrant contract scenarios" rows={page.hsmContractScenarios} className="mt-6" />
              <EmploymentContractHsmAffiliateSupport />
              <VisualFigure visual={page.visuals.hsmContracts} className={sectionVisualMtClass} />
            </section>

            <section id="review-checklist" className={sectionClass}>
              <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:items-start lg:gap-8">
                <div className="flex min-w-0 flex-col gap-6">
                  <SectionIntro eyebrow="Review" title={page.reviewChecklistHeading}>
                    <p>{page.reviewChecklistIntro}</p>
                  </SectionIntro>
                  <ChecklistBlock title="Expat contract review checklist" items={page.reviewChecklist} columns={2} />
                  <BulletPanel title="Review in this order" items={page.reviewPriorityTips} />
                  <VisualFigure visual={page.visuals.reviewChecklist} className="lg:hidden" />
                </div>
                <VisualFigure visual={page.visuals.reviewChecklist} className="hidden lg:block lg:sticky lg:top-24" />
              </div>
              <div className="mt-8 w-full">
                <SectionIntro eyebrow="Clause walkthrough" title="Example contract lines and why they matter" fullWidth />
                <div className="mt-4 w-full">
                  <InfoTable
                    rows={page.contractClauseExamples.map((row) => ({
                      clause: row.clause,
                      exampleWording: row.exampleWording,
                      whyItMatters: row.whyItMatters,
                    }))}
                    columns={[
                      { key: "clause", label: "Clause" },
                      { key: "exampleWording", label: "Example wording" },
                      { key: "whyItMatters", label: "Why it matters" },
                    ]}
                  />
                </div>
                <div className="mt-6">
                  <Link href={CONTRACT_RISK_SCANNER_PATH} className={secondaryCtaClass}>
                    {page.toolLink.label}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </section>

            <section id="contracts-mortgages" className={sectionClass}>
              <SectionIntro eyebrow="Mortgages" title={page.contractsMortgagesHeading} fullWidth>
                {page.contractsMortgagesParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <BulletPanel title="How lenders may view your contract" items={page.contractsMortgagesPoints} />
                <ChecklistBlock title="Documents lenders may ask for" items={page.mortgageDocumentsChecklist} />
              </div>
              <aside className={cn("relative mt-6 overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
                <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
                <h3 className="text-base font-bold tracking-tight text-foreground">Mortgages for expats</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  Lender policy varies by contract type, probation and visa status — confirm requirements with a mortgage adviser before assuming an offer supports borrowing.
                </p>
                <Link href={MORTGAGES_NETHERLANDS_EXPATS_PATH} className={cn(secondaryCtaClass, "mt-5")}>
                  Open mortgages for expats guide
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </aside>
              <ScenarioTable title="Contract type and mortgage scenarios" rows={page.mortgageScenarios} className="mt-6" />
              <EmploymentContractMortgageAffiliateSupport />
              <VisualFigure visual={page.visuals.contractsMortgages} className={sectionVisualMtClass} />
            </section>

            <section id="mistakes" className={sectionClass}>
              <SectionIntro eyebrow="Avoidable mistakes" title="Common Employment Contract Mistakes">
                <p>Use these cards to stress-test your agreement before signing or negotiating relocation support.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-4")}>
                {page.mistakeCards.map((item, idx) => <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />)}
              </div>
              <div className="mt-6">
                <BulletPanel title="If you already signed or missed a clause" items={page.mistakeRecoveryTips} />
              </div>
              <ScenarioTable title="Mistakes in real contract situations" rows={page.mistakeScenarios} className="mt-6" />
              <VisualFigure visual={page.visuals.mistakes} className={sectionVisualMtClass} />
            </section>

            <section id="questions" className={sectionClass}>
              <SectionIntro eyebrow="Common questions" title="Questions Expats Often Ask">
                <p>Quick orientation answers — verify specifics for your industry, visa route and contract type.</p>
              </SectionIntro>
              <QuestionCards className="mt-6" />
              <VisualFigure visual={page.visuals.questions} className={sectionVisualMtClass} />
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro eyebrow="Career guides" title="Related Career Guides">
                <p>Connect contract review to job search, salary benchmarks, benefits and pension planning.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.relatedWorkGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
              <div className="mt-6">
                <BulletPanel title="How to use these guides after reading your contract" items={page.relatedGuidesUseTips} />
              </div>
              <VisualFigure visual={page.visuals.relatedGuides} className={sectionVisualMtClass} />
            </section>

            <section id="services" className={sectionClass}>
              <SectionIntro eyebrow="Services" title="Professional Services That May Help">
                <p>Recruitment, immigration, career and relocation support may help with specific steps — this page does not replace reading your contract or qualified advice.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.serviceCategories.map((item, idx) => (
                  <LinkCard
                    key={item.href}
                    item={{ label: item.label, href: item.href, description: item.description, status: "live" }}
                    iconIndex={idx}
                  />
                ))}
              </div>
              <div className="mt-6">
                <EmploymentContractNetherlandsRecommendedServices />
              </div>
              <div className="mt-6">
                <BulletPanel title="Which service fits which contract question" items={page.serviceSelectionTips} />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-foreground-muted">{page.servicesNote}</p>
              <VisualFigure visual={page.visuals.services} className={sectionVisualMtClass} />
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions">
                <p>These answers help you identify what still needs verification — contract type, probation, notice, benefits and permit links.</p>
              </SectionIntro>
              <div className={cn(sectionStackClass, "mt-6")}>
                <Accordion items={faqItems} />
              </div>
              <div className="mt-6">
                <BulletPanel title="After reading the FAQ" items={page.faqNextSteps} />
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
              <div className="mt-6">
                <BulletPanel title="Where to verify what" items={page.sourceVerificationTips} />
              </div>
              <VisualFigure visual={page.visuals.officialSources} className={sectionVisualMtClass} />
            </section>

            <section id="explore-next" className={sectionClass}>
              <SectionIntro eyebrow="Explore next" title="Plan the Next Step">
                <p>Move from contract orientation into salary guides, benefits, visa routes and relocation planning.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.exploreNextCards.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
              </div>
              <div className="mt-6">
                <BulletPanel title="Choose your next guide" items={page.exploreNextTips} />
              </div>
              <VisualFigure visual={page.visuals.exploreNext} className={sectionVisualMtClass} />
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
