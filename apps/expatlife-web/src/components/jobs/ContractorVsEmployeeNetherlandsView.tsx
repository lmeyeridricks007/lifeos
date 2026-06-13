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
  guidePremiumVisualAfterIntroClass,
} from "@/lib/ui/guide-premium-page-ui";
import {
  ContractorVsEmployeeNetherlandsRecommendedServices,
  ContractorVsEmployeeTaxAffiliateSupport,
  ContractorVsEmployeeVisaAffiliateSupport,
} from "./ContractorVsEmployeeNetherlandsRecommendedServices";
import {
  EMPLOYMENT_CONTRACT_NETHERLANDS_PATH,
  EMPLOYEE_BENEFITS_NETHERLANDS_PATH,
  EMPLOYEE_RIGHTS_NETHERLANDS_PATH,
  EXPAT_TAXES_NETHERLANDS_PATH,
  FINANCIAL_ADVISORS_PATH,
  FOREIGN_INCOME_NETHERLANDS_PATH,
  FREELANCING_NETHERLANDS_PATH,
  HSM_VISA_PATH,
  JOBS_HUB_PATH,
  MORTGAGES_NETHERLANDS_EXPATS_PATH,
  PENSION_NETHERLANDS_EXPATS_PATH,
  ZZP_NETHERLANDS_PATH,
  contractorVsEmployeeNetherlandsPage as page,
  type ContractorVsEmployeeLink,
} from "./contractorVsEmployeeNetherlandsPageModel";

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
const premiumVisualClass = cn(guidePremiumVisualAfterIntroClass, "mt-6 sm:mt-8");

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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: ContractorVsEmployeeLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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

function ComparisonPlanningPanel() {
  return (
    <aside className="relative flex flex-col overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="relative flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Planning links</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight">Connect structure choice to your wider career picture</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Employment and contractor routes sit alongside tax planning and permit rules — use these guides alongside official sources.
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

function ComparisonOrientationFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Confirm your route", body: "List what you value — stability, flexibility, pension and permit fit.", Icon: ShieldCheck },
    { label: "Register and bank", body: "Gather both offers in writing with benefit breakdowns and billable hours.", Icon: FileText },
    { label: "Plan tax buffers", body: "Bookmark KvK, Belastingdienst and ind.nl if registration or permits may apply.", Icon: WalletCards },
  ] as const;

  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three moves that reduce structure comparison uncertainty</h3>
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

function EmployeeContractorProsConsGrid() {
  return (
    <div className="grid w-full gap-6 xl:grid-cols-2">
      <div className="space-y-4">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-strong">Employee route</p>
        <ChecklistBlock
          title="Advantages"
          items={page.prosCons.employee.advantages}
          columns={1}
          className="border-emerald-200/70 bg-gradient-to-br from-white via-white to-emerald-50/40 ring-emerald-100/80"
        />
        <ChecklistBlock
          title="Challenges"
          items={page.prosCons.employee.challenges}
          columns={1}
          className="border-amber-200/70 bg-gradient-to-br from-white via-white to-amber-50/40 ring-amber-100/80"
        />
      </div>
      <div className="space-y-4">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-strong">Contractor route</p>
        <ChecklistBlock
          title="Advantages"
          items={page.prosCons.contractor.advantages}
          columns={1}
          className="border-emerald-200/70 bg-gradient-to-br from-white via-white to-emerald-50/40 ring-emerald-100/80"
        />
        <ChecklistBlock
          title="Challenges"
          items={page.prosCons.contractor.challenges}
          columns={1}
          className="border-amber-200/70 bg-gradient-to-br from-white via-white to-amber-50/40 ring-amber-100/80"
        />
      </div>
    </div>
  );
}

export function ContractorVsEmployeeNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Jobs", item: new URL(JOBS_HUB_PATH, baseUrl).toString() },
    { name: "Contractor vs employee", item: new URL(page.path, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Contractor vs employee</span>
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

                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="Contractor vs employee guide sections" className="flex min-w-max gap-2">
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
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Overview" title={page.intro.heading} fullWidth>
                  {page.intro.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.intro} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div>
                  <SectionIntro eyebrow="Key points" title="What to compare before you choose" />
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {page.intro.keyPoints.map((item, idx) => (
                      <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                    ))}
                  </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-start">
                  <ChecklistBlock title="Three orientation moves" items={page.introPlanningSteps} columns={2} />
                  <ComparisonPlanningPanel />
                </div>
                <ComparisonOrientationFlowBand />
                <GuideLinkAside
                  title="Employee rights Netherlands"
                  description="Sick pay, leave and workplace protections when employment is part of your comparison."
                  href={EMPLOYEE_RIGHTS_NETHERLANDS_PATH}
                  linkLabel="Open employee rights guide"
                />
                <ScenarioTable title="When structure choice affects real plans" rows={page.intro.scenarios} />
                <ContractorVsEmployeeTaxAffiliateSupport />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="At a glance" title="Employee vs Contractor Snapshot">
                  <p>Six quick signals split between employment stability and contractor flexibility — use alongside the full comparison table.</p>
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.snapshot} className={premiumVisualClass} />
              <div className={cn(sectionStackClass, "grid gap-4 sm:grid-cols-2 xl:grid-cols-3")}>
                {page.snapshotCards.map((card) => <MiniStatCard key={card.label} {...card} />)}
              </div>
              <div className="mt-8">
                <SectionIntro eyebrow="Start here" title={page.snapshotComparisonHeading} fullWidth>
                  {page.snapshotComparisonParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <div className="mt-4 w-full">
                  <InfoTable
                    rows={page.comparisonTable.slice(0, 4).map((row) => ({
                      topic: row.topic,
                      employee: row.employee,
                      contractor: row.contractor,
                    }))}
                    columns={[
                      { key: "topic", label: "Topic" },
                      { key: "employee", label: "Employee" },
                      { key: "contractor", label: "Contractor" },
                    ]}
                  />
                </div>
              </div>
              <div className={guidePremiumSectionDetailStackClass}>
                <ScenarioTable title="Snapshot examples expats often see" rows={page.comparisonScenarios} />
                <ChecklistBlock title="Three moves after this snapshot" items={page.snapshotNextSteps} columns={2} />
              </div>
            </section>

            <section id="comparison" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Compare" title={page.comparisonHeading} fullWidth>
                  {page.comparisonParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.comparison} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <InfoTable
                  rows={page.comparisonTable.map((row) => ({
                    topic: row.topic,
                    employee: row.employee,
                    contractor: row.contractor,
                  }))}
                  columns={[
                    { key: "topic", label: "Topic" },
                    { key: "employee", label: "Employee" },
                    { key: "contractor", label: "Contractor" },
                  ]}
                />
                <BulletPanel title="How to use this comparison" items={page.comparisonUseTips} />
                <ScenarioTable title="Comparison — practical examples" rows={page.comparisonScenarios} />
              </div>
            </section>

            <section id="employee" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Employment" title={page.employeeHeading} fullWidth>
                  {page.employeeParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Employment orientation" items={page.employeePoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.employee} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.employeeCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Employment checklist" items={page.employeeChecklist} columns={2} />
                <GuideLinkAside
                  title="Employment contract guide"
                  description="Read contract types, proeftijd, notice and benefits before comparing with a contractor offer."
                  href={EMPLOYMENT_CONTRACT_NETHERLANDS_PATH}
                  linkLabel="Open employment contract guide"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.employeeGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Employment — practical examples" rows={page.employeeScenarios} />
              </div>
            </section>

            <section id="contractor" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Contractor" title={page.contractorHeading} fullWidth>
                  {page.contractorParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Contractor orientation" items={page.contractorPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.contractor} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.contractorCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Contractor checklist" items={page.contractorChecklist} columns={2} />
                <GuideLinkAside
                  title="ZZP in the Netherlands"
                  description="Registration, invoicing and tax orientation when the contractor path means Dutch ZZP self-employment."
                  href={ZZP_NETHERLANDS_PATH}
                  linkLabel="Open ZZP guide"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.contractorGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Contractor — practical examples" rows={page.contractorScenarios} />
              </div>
            </section>

            <section id="income" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Income" title={page.incomeHeading} fullWidth>
                  {page.incomeParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Income orientation" items={page.incomePoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.income} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.incomeCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Income planning checklist" items={page.incomeChecklist} columns={2} />
                <GuideLinkAside
                  title="Financial advisors"
                  description="Cash-flow buffers and planning when contractor income varies month to month."
                  href={FINANCIAL_ADVISORS_PATH}
                  linkLabel="Browse financial advisors"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.incomeGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Income — practical examples" rows={page.incomeScenarios} />
              </div>
            </section>

            <section id="benefits" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Benefits" title={page.benefitsHeading} fullWidth>
                  {page.benefitsParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Benefits orientation" items={page.benefitsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.benefits} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.benefitsCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Benefits checklist" items={page.benefitsChecklist} columns={2} />
                <GuideLinkAside
                  title="Employee benefits Netherlands"
                  description="Typical perks, insurance and pension beyond base salary on the employment path."
                  href={EMPLOYEE_BENEFITS_NETHERLANDS_PATH}
                  linkLabel="Open employee benefits guide"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.benefitsGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Benefits — practical examples" rows={page.benefitsScenarios} />
              </div>
            </section>

            <section id="taxes" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Taxes" title={page.taxesHeading} fullWidth>
                  {page.taxesParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Tax orientation" items={page.taxesPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.taxes} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.taxesCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Tax planning checklist" items={page.taxesChecklist} columns={2} />
                <GuideLinkAside
                  title="Expat taxes Netherlands"
                  description="Broader tax orientation when employment and contractor income sit in the same planning year."
                  href={EXPAT_TAXES_NETHERLANDS_PATH}
                  linkLabel="Open expat taxes guide"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.taxesGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Taxes — practical examples" rows={page.taxesScenarios} />
                <ContractorVsEmployeeTaxAffiliateSupport />
              </div>
            </section>

            <section id="flexibility" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Flexibility" title={page.flexibilityHeading} fullWidth>
                  {page.flexibilityParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Flexibility orientation" items={page.flexibilityPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.flexibility} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.flexibilityCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Flexibility checklist" items={page.flexibilityChecklist} columns={2} />
                <GuideLinkAside
                  title="Freelancing Netherlands"
                  description="Client choice, remote work and schedule control when the contractor path offers more flexibility."
                  href={FREELANCING_NETHERLANDS_PATH}
                  linkLabel="Open freelancing guide"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.flexibilityGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Flexibility — practical examples" rows={page.flexibilityScenarios} />
              </div>
            </section>

            <section id="pensions" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Pensions" title={page.pensionsHeading} fullWidth>
                  {page.pensionsParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Pension orientation" items={page.pensionsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.pensions} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.pensionsCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Pension checklist" items={page.pensionsChecklist} columns={2} />
                <GuideLinkAside
                  title="Pension for expats"
                  description="Employer schemes, gaps on contractor routes and cross-border pension context."
                  href={PENSION_NETHERLANDS_EXPATS_PATH}
                  linkLabel="Open pension guide"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.pensionsGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Pensions — practical examples" rows={page.pensionsScenarios} />
              </div>
            </section>

            <section id="expats" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Expats" title={page.expatsHeading} fullWidth>
                  {page.expatsParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Permit orientation" items={page.expatsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.expats} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.expatsCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Permit checklist" items={page.expatsChecklist} columns={2} />
                <GuideLinkAside
                  title="Highly skilled migrant visa"
                  description="Sponsored employment context when comparing contractor work with a permit tied to an employer."
                  href={HSM_VISA_PATH}
                  linkLabel="Open HSM guide"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.expatsGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Expats — practical examples" rows={page.expatsScenarios} />
                <ContractorVsEmployeeVisaAffiliateSupport />
              </div>
            </section>

            <section id="mortgages" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Mortgages" title={page.mortgagesHeading} fullWidth>
                  {page.mortgagesParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Mortgage orientation" items={page.mortgagesPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.mortgages} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.mortgagesCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Mortgage planning checklist" items={page.mortgagesChecklist} columns={2} />
                <GuideLinkAside
                  title="Mortgages for expats"
                  description="How employment stability and contractor income history affect Dutch lender conversations."
                  href={MORTGAGES_NETHERLANDS_EXPATS_PATH}
                  linkLabel="Open mortgages guide"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.mortgagesGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Mortgages — practical examples" rows={page.mortgagesScenarios} />
              </div>
            </section>

            <section id="international" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="International" title={page.internationalHeading} fullWidth>
                  {page.internationalParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="International orientation" items={page.internationalPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.international} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.internationalCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="International checklist" items={page.internationalChecklist} columns={2} />
                <GuideLinkAside
                  title="Foreign income Netherlands"
                  description="Cross-border clients, VAT and tax residency when contractor work spans multiple countries."
                  href={FOREIGN_INCOME_NETHERLANDS_PATH}
                  linkLabel="Open foreign income guide"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.internationalGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="International — practical examples" rows={page.internationalScenarios} />
              </div>
            </section>

            <section id="who-chooses" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Profiles" title={page.whoChoosesHeading} fullWidth>
                  {page.whoChoosesParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Common patterns expats recognise" items={page.whoChoosesPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.whoChooses} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.whoChoosesCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Who chooses which route — examples" rows={page.whoChoosesScenarios} />
              </div>
            </section>

            <section id="pros-cons" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Balance" title={page.prosCons.heading} fullWidth>
                  {page.prosCons.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="How to weigh pros and cons" items={page.prosConsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.prosCons} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <EmployeeContractorProsConsGrid />
                <ScenarioTable title="Pros and cons — practical examples" rows={page.prosCons.scenarios} />
              </div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Avoid" title={page.mistakesHeading} fullWidth>
                  {page.mistakesParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Mistakes to catch early" items={page.mistakesPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.mistakes} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.mistakeCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Reality check before you sign" items={page.mistakesChecklist} columns={2} />
                <ScenarioTable title="Common mistakes — examples" rows={page.mistakesScenarios} />
              </div>
            </section>

            <section id="self-assessment" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Self-check" title={page.selfAssessmentHeading} fullWidth>
                  {page.selfAssessmentParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="How to use this self-check" items={page.selfAssessmentPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.selfAssessment} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Eight questions to work through" items={page.checklistQuestions} columns={2} />
                <ScenarioTable title="Self-assessment — example situations" rows={page.selfAssessmentScenarios} />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Ask early" title="Questions Expats Often Ask" fullWidth>
                  <p>Use these prompts with HR, accountants and official sources when comparing routes.</p>
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.questions} className={premiumVisualClass} />
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
                <ScenarioTable title="When to use these questions — examples" rows={page.questionScenarios} />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Work & business" title="Related Guides" fullWidth>
                  <p>Connect this comparison to freelancing, ZZP, employment contracts, employee rights, expat taxes and financial planning.</p>
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.relatedGuides} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.relatedGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <ChecklistBlock title="Suggested reading order" items={page.relatedGuideReadingOrder} columns={2} />
                <ScenarioTable title="Which related guide when — examples" rows={page.relatedGuideScenarios} />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Professional support" title="Professional Services That May Help" fullWidth>
                  <p>Tax, mortgage, immigration and business support may help with specific comparison steps.</p>
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.services} className={premiumVisualClass} />
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
                <ContractorVsEmployeeNetherlandsRecommendedServices />
                <p className="text-sm leading-relaxed text-foreground-muted">{page.servicesNote}</p>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions" fullWidth>
                  <p>These answers help identify what still needs verification — structure, tax, permits and financial planning.</p>
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.faq} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <Accordion items={faqItems} />
                <BulletPanel title="After reading the FAQ" items={page.faqNextSteps} />
                <ScenarioTable title="FAQ topics illustrated with examples" rows={page.faqScenarios} />
              </div>
            </section>

            <section id="official-sources" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Trust" title="Official Sources" fullWidth>
                  <p>{page.officialSourcesNote}</p>
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.officialSources} className={premiumVisualClass} />
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
                    <p>Continue into jobs, taxes, services and housing guides from this comparison hub.</p>
                  </SectionIntro>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
                  <p>Move from this comparison into freelancing, ZZP, employment contracts, expat taxes and financial planning.</p>
                </SectionIntro>
                <GuidePremiumVisualFigure
                  visual={page.visuals.exploreNext}
                  tone="onDark"
                  className={premiumVisualClass}
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
