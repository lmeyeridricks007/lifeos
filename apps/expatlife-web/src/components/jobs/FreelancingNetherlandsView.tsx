import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
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
import { GuidePremiumVisualFigure } from "@/src/components/guides/GuidePremiumVisualFigure";
import {
  guidePremiumIntroStackClass,
  guidePremiumSectionDetailStackClass,
  guidePremiumVisualSpacingClass,
} from "@/lib/ui/guide-premium-page-ui";
import {
  FreelancingNetherlandsRecommendedServices,
  FreelancingTaxAffiliateSupport,
  FreelancingVisaAffiliateSupport,
} from "./FreelancingNetherlandsRecommendedServices";
import {
  EMPLOYEE_RIGHTS_NETHERLANDS_PATH,
  EMPLOYMENT_CONTRACT_NETHERLANDS_PATH,
  FINANCIAL_ADVISORS_PATH,
  HSM_VISA_PATH,
  JOBS_HUB_PATH,
  VISAS_HUB_PATH,
  freelancingNetherlandsPage as page,
  type FreelancingLink,
} from "./freelancingNetherlandsPageModel";

const baseUrl = getSiteOrigin();
const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-card ring-1 ring-slate-900/[0.04] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 after:pointer-events-none after:absolute after:-right-28 after:-top-28 after:h-56 after:w-56 after:rounded-full after:bg-cyan-200/15 after:blur-3xl sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-8 space-y-6 sm:space-y-8 md:space-y-9";
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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: FreelancingLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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

function GuideLinkAside({
  title,
  description,
  href,
  linkLabel,
}: {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <aside className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-3xl", movingNlSignatureGradientClass)} aria-hidden />
      <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{description}</p>
      <Link href={href} className={cn(secondaryCtaClass, "mt-5")}>
        {linkLabel}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
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
      <div className={cn("mt-5 grid gap-3", rowsLayout === "wide" && "sm:grid-cols-2 xl:grid-cols-3")}>
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

function FreelancingPlanningPanel() {
  return (
    <aside className="relative flex flex-col overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="relative flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Planning links</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight">Connect freelancing to your wider career picture</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          ZZP setup sits alongside employment options, tax planning and permit rules — use these guides alongside KvK and official sources, not instead of qualified advice.
        </p>
        <div className="mt-5 grid gap-3">
          {page.planningLinks.map((tool) => (
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
        <Link href={FINANCIAL_ADVISORS_PATH} className={cn(primaryCtaClass, "mt-6 w-full border-white/20 bg-white text-slate-950 hover:bg-slate-100")}>
          Browse financial advisors
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </aside>
  );
}

function FreelancingOrientationFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Confirm your route", body: "Check permit rules on ind.nl and whether ZZP fits your work pattern before registering.", Icon: ShieldCheck },
    { label: "Register and bank", body: "KvK enrolment, BTW choice and business banking before substantial client invoices.", Icon: FileText },
    { label: "Plan tax buffers", body: "Set aside BTW and income tax monthly — speak with an accountant for cross-border clients.", Icon: WalletCards },
  ] as const;

  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three moves that reduce freelancing uncertainty</h3>
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

function ProsConsGrid() {
  return (
    <div className="grid w-full gap-6 lg:grid-cols-2">
      <ChecklistBlock
        title="Advantages"
        items={page.prosCons.advantages}
        columns={1}
        className="border-emerald-200/70 bg-gradient-to-br from-white via-white to-emerald-50/40 ring-emerald-100/80"
      />
      <ChecklistBlock
        title="Challenges"
        items={page.prosCons.challenges}
        columns={1}
        className="border-amber-200/70 bg-gradient-to-br from-white via-white to-amber-50/40 ring-amber-100/80"
      />
    </div>
  );
}

export function FreelancingNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Jobs", item: new URL(JOBS_HUB_PATH, baseUrl).toString() },
    { name: "Freelancing", item: new URL(page.path, baseUrl).toString() },
  ];
  const faqItems = page.faq.map((item, idx) => ({ id: `faq-${idx}`, title: item.q, content: item.a }));

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
                    <span className="text-foreground" aria-current="page">Freelancing</span>
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
                    This guide is practical orientation only — not legal, tax or immigration advice. Freelancing rules depend on your permit, client mix, registration and official regulations.
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="Freelancing guide sections" className="flex min-w-max gap-2">
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
              <GuidePremiumVisualFigure visual={page.visuals.intro} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div>
                  <SectionIntro eyebrow="Key points" title="What to know about Dutch freelancing" />
                  <div className={cn("mt-4 grid gap-4 sm:grid-cols-2")}>
                    {page.intro.keyPoints.map((item, idx) => (
                      <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                    ))}
                  </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-start">
                  <ChecklistBlock title="Three orientation moves before your first invoice" items={page.introPlanningSteps} columns={2} />
                  <FreelancingPlanningPanel />
                </div>
                <FreelancingOrientationFlowBand />
                <ScenarioTable title="When freelancing affects real plans" rows={page.intro.scenarios} />
                <FreelancingTaxAffiliateSupport />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <SectionIntro eyebrow="At a glance" title="Freelancing at a Glance">
                <p>Practical orientation on KvK registration, BTW, insurance, client contracts and permit context before you commit to ZZP.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.snapshot} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className={cn("grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                  {page.snapshotCards.map((card) => <MiniStatCard key={card.label} {...card} />)}
                </div>
                <div>
                  <SectionIntro eyebrow="Comparison" title={page.snapshotComparisonHeading} fullWidth>
                    {page.snapshotComparisonParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </SectionIntro>
                  <div className="mt-4 w-full">
                    <InfoTable
                      rows={page.snapshotComparisonRows.map((row) => ({
                        topic: row.topic,
                        dutchContext: row.dutchContext,
                        whatToConfirm: row.whatToConfirm,
                      }))}
                      columns={[
                        { key: "topic", label: "Topic" },
                        { key: "dutchContext", label: "Dutch context" },
                        { key: "whatToConfirm", label: "Confirm" },
                      ]}
                    />
                  </div>
                </div>
                <ScenarioTable title="Freelancing examples expats often see" rows={page.snapshotScenarios} />
                <ChecklistBlock title="Three moves after reading this snapshot" items={page.snapshotNextSteps} columns={2} />
              </div>
            </section>

            <section id="zzp" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="ZZP" title={page.zzpHeading} fullWidth>
                  {page.zzpParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="ZZP orientation" items={page.zzpPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.zzp} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.zzpCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="ZZP setup checklist" items={page.zzpChecklist} columns={2} />
                <ScenarioTable title="ZZP — practical examples" rows={page.zzpScenarios} />
              </div>
            </section>

            <section id="vs-employment" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Compare routes" title={page.vsEmploymentHeading} fullWidth>
                  {page.vsEmploymentParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Freelancing vs employment" items={page.vsEmploymentPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.vsEmployment} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <InfoTable
                  rows={page.vsEmploymentSimpleRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Topic" },
                    { key: "dutchContext", label: "Employment" },
                    { key: "whatToConfirm", label: "Freelancing (ZZP)" },
                  ]}
                />
                <GuideLinkAside
                  title="Employment contract guide"
                  description="Compare contractor agreements with permanent and fixed-term employment — verify classification independently."
                  href={EMPLOYMENT_CONTRACT_NETHERLANDS_PATH}
                  linkLabel="Open employment contract guide"
                />
                <GuideLinkAside
                  title="Employee rights guide"
                  description="Understand workplace protections you typically leave behind when moving from employment to ZZP."
                  href={EMPLOYEE_RIGHTS_NETHERLANDS_PATH}
                  linkLabel="Open employee rights guide"
                />
                <InfoTable
                  rows={page.vsEmploymentComparisonRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Topic" },
                    { key: "dutchContext", label: "Freelance vs employee" },
                    { key: "whatToConfirm", label: "Confirm" },
                  ]}
                />
                <ScenarioTable title="Freelancing vs employment — examples" rows={page.vsEmploymentScenarios} />
              </div>
            </section>

            <section id="registration" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Setup" title={page.registrationHeading} fullWidth>
                  {page.registrationParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Registration steps" items={page.registrationPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.registration} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Registration checklist" items={page.registrationChecklist} columns={2} />
                <ChecklistBlock title="Invoice essentials for Dutch clients" items={page.invoicingChecklist} columns={2} />
                <p className="text-sm leading-relaxed text-foreground-muted">{page.invoicingNote}</p>
                <ProcessPanel
                  eyebrow="Registration flow"
                  title="Four steps when setting up as a freelancer"
                  rows={page.registrationFlow.map((item, idx) => ({
                    label: item.title,
                    body: item.body,
                    Icon: [ShieldCheck, FileText, Landmark, WalletCards][idx % 4],
                  }))}
                  rowsLayout="wide"
                  note="Order may vary by situation — confirm permit rules on ind.nl before KvK if you are not on EU free movement."
                />
                <ScenarioTable title="Registration — practical examples" rows={page.registrationScenarios} />
              </div>
            </section>

            <section id="taxes-vat" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Tax" title={page.taxesVatHeading} fullWidth>
                  {page.taxesVatParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Tax and VAT orientation" items={page.taxesVatPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.taxesVat} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Tax planning checklist" items={page.taxesVatChecklist} columns={2} />
                <InfoTable
                  rows={page.taxesVatComparisonRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Client type" },
                    { key: "dutchContext", label: "Typical treatment" },
                    { key: "whatToConfirm", label: "Confirm with accountant" },
                  ]}
                />
                <ScenarioTable title="Tax and VAT — examples" rows={page.taxesVatScenarios} />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.taxGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <FreelancingTaxAffiliateSupport />
              </div>
            </section>

            <section id="international-clients" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Global clients" title={page.internationalClientsHeading} fullWidth>
                  {page.internationalClientsParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="International client orientation" items={page.internationalClientsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.internationalClients} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="International client checklist" items={page.internationalClientsChecklist} columns={2} />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.internationalClientGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="International clients — examples" rows={page.internationalClientsScenarios} />
              </div>
            </section>

            <section id="visas" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Permits" title={page.visasHeading} fullWidth>
                  {page.visasParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Visa and permit orientation" items={page.visasPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.visas} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Permit checklist before KvK" items={page.visasChecklist} columns={2} />
                <InfoTable
                  rows={page.visasComparisonRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Route" },
                    { key: "dutchContext", label: "Typical context" },
                    { key: "whatToConfirm", label: "Verify on ind.nl" },
                  ]}
                />
                <ScenarioTable title="Visas and freelancing — examples" rows={page.visasScenarios} />
                <div className="grid gap-4 lg:grid-cols-2">
                  <GuideLinkAside
                    title="Highly skilled migrant guide"
                    description="When employment and freelance paths intersect — verify IND rules independently."
                    href={HSM_VISA_PATH}
                    linkLabel="Open highly skilled migrant guide"
                  />
                  <GuideLinkAside
                    title="Visas & residency hub"
                    description="Broader permit orientation when self-employment affects your residency route."
                    href={VISAS_HUB_PATH}
                    linkLabel="Open visas & residency guides"
                  />
                </div>
                <FreelancingVisaAffiliateSupport />
              </div>
            </section>

            <section id="financial-planning" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Finance" title={page.financialPlanningHeading} fullWidth>
                  {page.financialPlanningParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Financial planning orientation" items={page.financialPlanningPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.financialPlanning} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Financial planning checklist" items={page.financialPlanningChecklist} columns={2} />
                <InfoTable
                  rows={page.financialPlanningRateRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Planning area" },
                    { key: "dutchContext", label: "Typical context" },
                    { key: "whatToConfirm", label: "What to model" },
                  ]}
                />
                <ScenarioTable title="Financial planning — examples" rows={page.financialPlanningScenarios} />
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.financialPlanningGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
              </div>
            </section>

            <section id="health-pension" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Insurance" title={page.healthPensionHeading} fullWidth>
                  {page.healthPensionParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Health and pension orientation" items={page.healthPensionPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.healthPension} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Health and pension checklist" items={page.healthPensionChecklist} columns={2} />
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.healthPensionGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Health and pension — examples" rows={page.healthPensionScenarios} />
              </div>
            </section>

            <section id="finding-clients" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Pipeline" title={page.findingClientsHeading} fullWidth>
                  {page.findingClientsParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Finding clients" items={page.findingClientsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.findingClients} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {page.findingClientsCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Client acquisition checklist" items={page.findingClientsChecklist} columns={2} />
                <ScenarioTable title="Finding clients — examples" rows={page.findingClientsScenarios} />
              </div>
            </section>

            <section id="cities" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Location" title={page.citiesHeading} fullWidth>
                  {page.citiesParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="What to weigh when choosing a city" items={page.citiesPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.cities} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.cityCards.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <InfoTable
                  rows={page.citiesComparisonRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Factor" },
                    { key: "dutchContext", label: "Typical pattern" },
                    { key: "whatToConfirm", label: "Confirm for your sector" },
                  ]}
                />
                <ChecklistBlock title="City choice checklist" items={page.citiesChecklist} columns={2} />
                <ScenarioTable title="Freelancing by city — examples" rows={page.citiesScenarios} />
              </div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <SectionIntro eyebrow="Avoid" title={page.mistakesHeading} fullWidth>
                {page.mistakesParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.mistakes} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.mistakeCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Reality check before you invoice" items={page.mistakesChecklist} columns={2} />
                <ScenarioTable title="Common mistakes — examples" rows={page.mistakesScenarios} />
              </div>
            </section>

            <section id="pros-cons" className={sectionClass}>
              <SectionIntro eyebrow="Balance" title={page.prosCons.heading} fullWidth>
                {page.prosCons.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.prosCons} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ProsConsGrid />
                <ScenarioTable title="Pros and cons — practical examples" rows={page.prosCons.scenarios} />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <SectionIntro eyebrow="Ask early" title="Questions Expats Often Ask" fullWidth>
                <p>Use these prompts with accountants, clients and official sources — verify your situation independently.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.questions} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <InfoTable
                  rows={page.hrConversationPrompts.map((row) => ({
                    audience: row.audience,
                    question: row.question,
                    whyAsk: row.whyAsk,
                  }))}
                  columns={[
                    { key: "audience", label: "Ask" },
                    { key: "question", label: "Question" },
                    { key: "whyAsk", label: "Why it matters" },
                  ]}
                />
                <div>
                  <SectionIntro eyebrow="Quick answers" title="Orientation answers expats often need first" />
                  <QuestionCards className="mt-4" />
                </div>
                <ScenarioTable title="When to use these questions — example situations" rows={page.questionScenarios} />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro eyebrow="Work & business" title="Related Guides">
                <p>Connect freelancing to job search, expat taxes, foreign income, financial planning and entrepreneurship.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.relatedGuides} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.relatedGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <ChecklistBlock title="Suggested reading order" items={page.relatedGuideReadingOrder} columns={2} />
                <ScenarioTable title="Which related guide when — examples" rows={page.relatedGuideScenarios} />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <SectionIntro eyebrow="Professional support" title="Professional Services That May Help">
                <p>Tax, immigration and career support may help with specific steps — this page does not replace KvK registration or qualified advice.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.services} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.serviceCategories.map((item, idx) => (
                    <LinkCard
                      key={`${item.href}-${item.label}`}
                      item={{ label: item.label, href: item.href, description: item.description, status: item.status ?? "live" }}
                      iconIndex={idx}
                    />
                  ))}
                </div>
                <BulletPanel title="When professional support may help" items={page.servicesWhenToUse} />
                <ScenarioTable title="When expats typically seek support" rows={page.serviceScenarios} />
                <FreelancingNetherlandsRecommendedServices />
                <p className="text-sm leading-relaxed text-foreground-muted">{page.servicesNote}</p>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions">
                <p>These answers help you identify what still needs verification — registration, tax, visas and insurance.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.faq} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <Accordion items={faqItems} />
                <BulletPanel title="After reading the FAQ" items={page.faqNextSteps} />
                <ScenarioTable title="FAQ topics illustrated with examples" rows={page.faqScenarios} />
              </div>
            </section>

            <section id="official-sources" className={sectionClass}>
              <SectionIntro eyebrow="Trust" title="Official Sources">
                <p>{page.officialSourcesNote}</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.officialSources} className={guidePremiumVisualSpacingClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} />
                  ))}
                </div>
                <BulletPanel title="Where to verify what" items={page.sourceVerificationTips} />
                <ScenarioTable title="Which official source when — examples" rows={page.officialSourcesScenarios} />
                <div>
                  <SectionIntro eyebrow="Explore" title="Related Work, Tax & Business Guides">
                    <p>Continue into jobs, taxes, services and future business content from this freelancing hub.</p>
                  </SectionIntro>
                  <div className={cn("mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                    {page.ecosystemLinks.map((item, idx) => (
                      <LinkCard key={item.href} item={item} iconIndex={idx} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section
              id="explore-next"
              className={cn(
                CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
                "scroll-mt-24 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-expatos-xl sm:p-8 lg:p-10"
              )}
            >
              <div className={cn("h-1.5 rounded-full", movingNlSignatureGradientClass)} aria-hidden />
              <div className="mt-6">
                <SectionIntro eyebrow="Explore next" title="Explore Next" tone="onDark">
                  <p>Move from freelancing orientation into taxes, foreign income, financial planning and entrepreneurship.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure
                  visual={page.visuals.exploreNext}
                  tone="onDark"
                  className={guidePremiumVisualSpacingClass}
                />
                <div className={guidePremiumSectionDetailStackClass}>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.exploreNextCards.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} tone="onDark" />)}
                  </div>
                  <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 ring-1 ring-white/10">
                    <h3 className="text-base font-bold tracking-tight text-white">Choose your next guide</h3>
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
