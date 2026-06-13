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
  StartingBusinessNetherlandsRecommendedServices,
  StartingBusinessTaxAffiliateSupport,
  StartingBusinessVisaAffiliateSupport,
} from "./StartingBusinessNetherlandsRecommendedServices";
import {
  BUSINESS_HUB_PATH,
  FINANCIAL_ADVISORS_PATH,
  startingBusinessNetherlandsPage as page,
  type StartingBusinessLink,
} from "./startingBusinessNetherlandsPageModel";

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
const registrationIcons = [ShieldCheck, Scale, FileText, Landmark, WalletCards, Users, TrendingUp] as const;
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
const premiumVisualClass = guidePremiumVisualSpacingClass;

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

function WorkedExampleTable({
  title,
  rows,
  className,
}: {
  title: string;
  rows: ReadonlyArray<{ profile: string; keyFigures: string; exampleMath: string; whatToConfirm: string }>;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <SectionIntro eyebrow="Worked examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({
            profile: row.profile,
            keyFigures: row.keyFigures,
            exampleMath: row.exampleMath,
            whatToConfirm: row.whatToConfirm,
          }))}
          columns={[
            { key: "profile", label: "Profile" },
            { key: "keyFigures", label: "Key figures" },
            { key: "exampleMath", label: "Example calculation" },
            { key: "whatToConfirm", label: "What to confirm" },
          ]}
        />
      </div>
    </div>
  );
}

function TimelineTable({
  title,
  rows,
  className,
}: {
  title: string;
  rows: ReadonlyArray<{ step: string; typicalTiming: string; example: string }>;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <SectionIntro eyebrow="Typical timing" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ step: row.step, typicalTiming: row.typicalTiming, example: row.example }))}
          columns={[
            { key: "step", label: "Step" },
            { key: "typicalTiming", label: "Typical timing" },
            { key: "example", label: "Example" },
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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: StartingBusinessLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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

function StartingBusinessPlanningPanel() {
  return (
    <aside className="relative flex flex-col overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="relative flex flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Planning links</p>
        <h3 className="mt-2 text-lg font-bold tracking-tight">Connect business setup to your wider picture</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Registration sits alongside structure choice, permit rules, tax planning and banking — use these guides alongside KvK and official sources, not instead of qualified advice.
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

function StartingBusinessOrientationFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Validate your concept", body: "Clarify activity, clients and whether entrepreneurship fits your permit and income needs before registering.", Icon: ShieldCheck },
    { label: "Register and bank", body: "KvK enrolment, tax choices and business banking before substantial client revenue or hiring.", Icon: FileText },
    { label: "Plan admin buffers", body: "Set aside tax reserves and bookkeeping time monthly — speak with an accountant for cross-border plans.", Icon: WalletCards },
  ] as const;

  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Orientation flow</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three moves that reduce startup uncertainty</h3>
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

export function StartingBusinessNetherlandsView() {
  const breadcrumbCrumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Business", item: new URL(BUSINESS_HUB_PATH, baseUrl).toString() },
    { name: "Starting a business", item: new URL(page.path, baseUrl).toString() },
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
                    <Link href={BUSINESS_HUB_PATH} className="hover:text-foreground">Business</Link>
                    <span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Starting a business</span>
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
                    This guide is practical orientation only — not tax, legal or immigration advice. Business rules depend on your structure, nationality, registration and official regulations.
                  </p>
                </div>
                <HeroImage />
              </div>
              <HeroSignalStrip />
            </div>
          </section>

          <div className="sticky top-3 z-20 mt-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-card ring-1 ring-slate-900/[0.04] backdrop-blur-xl">
            <nav aria-label="Starting a business guide sections" className="flex min-w-max gap-2">
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
                  <SectionIntro eyebrow="Key points" title="What to know before you register" />
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {page.intro.keyPoints.map((item, idx) => (
                      <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                    ))}
                  </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-start">
                  <ChecklistBlock title="Three orientation moves before registration" items={page.introPlanningSteps} columns={2} />
                  <StartingBusinessPlanningPanel />
                </div>
                <StartingBusinessOrientationFlowBand />
                <WorkedExampleTable title="Startup math expats often model first" rows={page.introWorkedExamples} />
                <ScenarioTable title="When starting a business affects real plans" rows={page.intro.scenarios} />
                <StartingBusinessTaxAffiliateSupport />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="At a glance" title={page.snapshotHeading} fullWidth>
                  {page.snapshotParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.snapshot} className={premiumVisualClass} />
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
                        { key: "dutchContext", label: "Typical context" },
                        { key: "whatToConfirm", label: "What to confirm" },
                      ]}
                    />
                  </div>
                </div>
                <WorkedExampleTable title="Employment vs entrepreneurship — figure comparison" rows={page.snapshotWorkedExamples} />
                <ScenarioTable title="Startup examples expats often see" rows={page.snapshotScenarios} />
                <ChecklistBlock title="Three moves after reading this snapshot" items={page.snapshotNextSteps} columns={2} />
              </div>
            </section>

            <section id="why-netherlands" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Location" title={page.whyNetherlandsHeading} fullWidth>
                  {page.whyNetherlandsParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Why entrepreneurs choose the Netherlands" items={page.whyNetherlandsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.whyNetherlands} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {page.whyNetherlandsCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Why the Netherlands — practical examples" rows={page.whyNetherlandsScenarios} />
                <ChecklistBlock title="Three moves after reading this section" items={page.whyNetherlandsNextSteps} columns={2} />
              </div>
            </section>

            <section id="structures" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Legal forms" title={page.structuresHeading} fullWidth>
                  {page.structuresParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Structure orientation" items={page.structuresPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.structures} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.businessStructures.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <InfoTable
                  rows={page.structuresComparisonRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Structure" },
                    { key: "dutchContext", label: "Typical use" },
                    { key: "whatToConfirm", label: "Confirm with adviser" },
                  ]}
                />
                <WorkedExampleTable title="Structure choice — cost and revenue examples" rows={page.structuresWorkedExamples} />
                <ScenarioTable title="Choosing a structure — practical examples" rows={page.structuresScenarios} />
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.structuresGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ChecklistBlock title="Three moves after comparing structures" items={page.structuresNextSteps} columns={2} />
              </div>
            </section>

            <section id="kvk" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="KvK" title={page.kvkHeading} fullWidth>
                  {page.kvkParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="KvK orientation" items={page.kvkPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.kvk} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="KvK checklist" items={page.kvkChecklist} columns={2} />
                <WorkedExampleTable title="KvK registration — fees and timing examples" rows={page.kvkWorkedExamples} />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.kvkGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="KvK — practical examples" rows={page.kvkScenarios} />
                <ChecklistBlock title="Three moves after reading KvK orientation" items={page.kvkNextSteps} columns={2} />
              </div>
            </section>

            <section id="registration" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Setup" title={page.registrationHeading} fullWidth>
                  {page.registrationParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Registration orientation" items={page.registrationPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.registration} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ProcessPanel
                  eyebrow="Registration timeline"
                  title="Typical steps when starting a business"
                  rows={page.registrationSteps.map((item, idx) => ({
                    label: item.title,
                    body: item.body,
                    Icon: registrationIcons[idx % registrationIcons.length],
                  }))}
                  rowsLayout="wide"
                  note={page.registrationNote}
                />
                <TimelineTable title="Example registration timeline for a solo founder" rows={page.registrationTimeline} />
                <ChecklistBlock title="Registration checklist" items={page.registrationChecklist} columns={2} />
                <ScenarioTable title="Registration — practical examples" rows={page.registrationScenarios} />
                <ChecklistBlock title="Three moves after mapping your registration order" items={page.registrationNextSteps} columns={2} />
              </div>
            </section>

            <section id="taxes" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Tax" title={page.taxesHeading} fullWidth>
                  {page.taxesParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Tax orientation" items={page.taxesPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.taxes} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Tax planning checklist" items={page.taxesChecklist} columns={2} />
                <InfoTable
                  rows={page.taxesComparisonRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Tax area" },
                    { key: "dutchContext", label: "Typical context" },
                    { key: "whatToConfirm", label: "Confirm with accountant" },
                  ]}
                />
                <WorkedExampleTable title="Business taxes — invoice and reserve examples" rows={page.taxesWorkedExamples} />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.taxGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Business taxes — practical examples" rows={page.taxesScenarios} />
                <ChecklistBlock title="Three tax planning moves for year one" items={page.taxesNextSteps} columns={2} />
                <StartingBusinessTaxAffiliateSupport />
              </div>
            </section>

            <section id="banking" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Banking" title={page.bankingHeading} fullWidth>
                  {page.bankingParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Business banking orientation" items={page.bankingPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.banking} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Business banking checklist" items={page.bankingChecklist} columns={2} />
                <InfoTable
                  rows={page.bankingComparisonRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Banking context" },
                    { key: "dutchContext", label: "Typical pattern" },
                    { key: "whatToConfirm", label: "What to confirm" },
                  ]}
                />
                <WorkedExampleTable title="Business banking — setup and fee examples" rows={page.bankingWorkedExamples} />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.bankingGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Business banking — practical examples" rows={page.bankingScenarios} />
                <ChecklistBlock title="Three moves after comparing banks" items={page.bankingNextSteps} columns={2} />
              </div>
            </section>

            <section id="administration" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Admin" title={page.administrationHeading} fullWidth>
                  {page.administrationParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Administration orientation" items={page.administrationPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.administration} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Administration checklist" items={page.administrationChecklist} columns={2} />
                <InfoTable
                  rows={page.administrationComparisonRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Admin area" },
                    { key: "dutchContext", label: "Typical rhythm" },
                    { key: "whatToConfirm", label: "What to confirm" },
                  ]}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.administrationGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Administration — practical examples" rows={page.administrationScenarios} />
                <ChecklistBlock title="Three admin moves for month one" items={page.administrationNextSteps} columns={2} />
              </div>
            </section>

            <section id="visas" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Permits" title={page.visasHeading} fullWidth>
                  {page.visasParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Permit orientation" items={page.visasPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.visas} className={premiumVisualClass} />
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
                <div className="grid gap-4 lg:grid-cols-2">
                  {page.visaGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Permits and entrepreneurship — practical examples" rows={page.visasScenarios} />
                <ChecklistBlock title="Three permit moves before relying on business income" items={page.visasNextSteps} columns={2} />
                <StartingBusinessVisaAffiliateSupport />
              </div>
            </section>

            <section id="ecosystem" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Ecosystem" title={page.ecosystemHeading} fullWidth>
                  {page.ecosystemParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Startup ecosystem orientation" items={page.ecosystemPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.ecosystem} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.ecosystemCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.ecosystemLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Startup ecosystem — practical examples" rows={page.ecosystemScenarios} />
                <ChecklistBlock title="Three moves when exploring the ecosystem" items={page.ecosystemNextSteps} columns={2} />
              </div>
            </section>

            <section id="cities" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Location" title={page.citiesHeading} fullWidth>
                  {page.citiesParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="What to weigh when choosing a city" items={page.citiesPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.cities} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.cityCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                {page.cityGuideLinks.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {page.cityGuideLinks.map((item, idx) => (
                      <LinkCard key={item.href} item={item} iconIndex={idx} />
                    ))}
                  </div>
                ) : null}
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
                <WorkedExampleTable title="City choice — rent and co-working examples" rows={page.cityCostExamples} />
                <ChecklistBlock title="City choice checklist" items={page.citiesChecklist} columns={2} />
                <ScenarioTable title="Entrepreneurship by city — examples" rows={page.citiesScenarios} />
              </div>
            </section>

            <section id="freelancing-vs-business" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Compare routes" title={page.freelancingVsBusinessHeading} fullWidth>
                  {page.freelancingVsBusinessParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Freelancing vs business ownership" items={page.freelancingVsBusinessPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.freelancingVsBusiness} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <InfoTable
                  rows={page.freelancingVsBusinessRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Topic" },
                    { key: "dutchContext", label: "Freelancing / ZZP" },
                    { key: "whatToConfirm", label: "Broader business" },
                  ]}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.freelancingVsBusinessGuideLinks.map((item, idx) => (
                    <LinkCard key={item.href} item={item} iconIndex={idx} />
                  ))}
                </div>
                <ScenarioTable title="Freelancing vs business — practical examples" rows={page.freelancingVsBusinessScenarios} />
                <ChecklistBlock title="Three moves when choosing your route" items={page.freelancingVsBusinessNextSteps} columns={2} />
              </div>
            </section>

            <section id="costs" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Budget" title={page.costsHeading} fullWidth>
                  {page.costsParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
                <BulletPanel title="Cost categories to model" items={page.costsPoints} />
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.costs} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.costCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <InfoTable
                  rows={page.costsComparisonRows.map((row) => ({
                    topic: row.topic,
                    dutchContext: row.dutchContext,
                    whatToConfirm: row.whatToConfirm,
                  }))}
                  columns={[
                    { key: "topic", label: "Cost area" },
                    { key: "dutchContext", label: "Typical range / context" },
                    { key: "whatToConfirm", label: "What to verify" },
                  ]}
                />
                <WorkedExampleTable title="First-year budget — worked examples" rows={page.costsWorkedExamples} />
                <ScenarioTable title="Startup costs — practical examples" rows={page.costsScenarios} />
                <ChecklistBlock title="Three budget moves before you launch" items={page.costsNextSteps} columns={2} />
              </div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Avoid" title={page.mistakesHeading} fullWidth>
                  {page.mistakesParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.mistakes} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.mistakeCards.map((item, idx) => (
                    <FeatureCard key={item.title} title={item.title} body={item.body} iconIndex={idx} />
                  ))}
                </div>
                <BulletPanel title="Prevention moves before launch" items={page.mistakePreventionTips} />
                <ChecklistBlock title="Reality check before you launch" items={page.mistakesChecklist} columns={2} />
                <ScenarioTable title="Common mistakes — practical examples" rows={page.mistakesScenarios} />
                <ChecklistBlock title="Three moves after reading this section" items={page.mistakesNextSteps} columns={2} />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Professional support" title={page.servicesHeading} fullWidth>
                  {page.servicesIntroParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
                <ScenarioTable title="When entrepreneurs typically seek support" rows={page.serviceScenarios} />
                <StartingBusinessNetherlandsRecommendedServices />
                <p className="text-sm leading-relaxed text-foreground-muted">{page.servicesNote}</p>
              </div>
            </section>

            <section id="checklist" className={sectionClass}>
              <div className={guidePremiumIntroStackClass}>
                <SectionIntro eyebrow="Launch" title={page.checklistHeading} fullWidth>
                  {page.checklistParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </SectionIntro>
              </div>
              <GuidePremiumVisualFigure visual={page.visuals.checklist} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <ChecklistBlock title="Business launch checklist" items={page.startupChecklist} columns={2} />
                <ScenarioTable title="Checklist in practice — examples" rows={page.checklistScenarios} />
                <ChecklistBlock title="Three moves after working through the checklist" items={page.checklistNextSteps} columns={2} />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <SectionIntro eyebrow="Ask early" title="Questions Expats Often Ask" fullWidth>
                <p>Use these prompts with accountants, KvK, IND and advisers — verify your situation independently.</p>
              </SectionIntro>
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
                <ScenarioTable title="When to use these questions — example situations" rows={page.questionScenarios} />
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions">
                <p>These answers help you identify what still needs verification — registration, tax, permits and financial planning.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.faq} className={premiumVisualClass} />
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
              <GuidePremiumVisualFigure visual={page.visuals.officialSources} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} />
                  ))}
                </div>
                <BulletPanel title="Where to verify what" items={page.sourceVerificationTips} />
                <ScenarioTable title="Which official source when — examples" rows={page.officialSourcesScenarios} />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro eyebrow="Business & work" title="Related Guides">
                <p>Connect business setup to ZZP, freelancing, taxes, services and financial planning.</p>
              </SectionIntro>
              <GuidePremiumVisualFigure visual={page.visuals.relatedGuides} className={premiumVisualClass} />
              <div className={guidePremiumSectionDetailStackClass}>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {page.relatedGuides.map((item, idx) => <LinkCard key={item.href} item={item} iconIndex={idx} />)}
                </div>
                <ChecklistBlock title="Suggested reading order" items={page.relatedGuideReadingOrder} columns={2} />
                <ScenarioTable title="Which related guide when — examples" rows={page.relatedGuideScenarios} />
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
                  <p>Move from business orientation into ZZP, freelancing, taxes, banking and professional support.</p>
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
