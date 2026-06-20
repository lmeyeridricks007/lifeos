import Image from "next/image";
import Link from "next/link";
import { Children, type ReactNode } from "react";
import {
  ArrowRight,
  Banknote,
  Building2,
  Calculator,
  CheckCircle2,
  ExternalLink,
  Home,
  Key,
  Landmark,
  MapPin,
  PiggyBank,
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
import { PROPERTY_TAX_NETHERLANDS_PATH } from "../taxes/propertyTaxNetherlandsPageModel";
import { ENERGY_AND_WATER_NETHERLANDS_PATH } from "../utilities/energyAndWaterNetherlandsPageModel";
import { INTERNET_AND_MOBILE_NETHERLANDS_PATH } from "../utilities/internetAndMobileNetherlandsPageModel";
import { UTILITIES_NETHERLANDS_PATH } from "../utilities/utilitiesNetherlandsPageModel";
import { INSURANCE_PROVIDERS_NETHERLANDS_PATH } from "../services/insurance-providers/insuranceProvidersNetherlandsPageModel";
import {
  BUYING_HOUSE_NETHERLANDS_PATH,
  BUY_VS_RENT_NETHERLANDS_PATH,
  MORTGAGES_NETHERLANDS_EXPATS_PATH,
  RENTING_NETHERLANDS_PATH,
} from "./housingNetherlandsPageModel";
import {
  housingCostsNetherlandsPage as page,
  type ChecklistDetailItem,
  type CityCostRow,
  type CostLineRow,
  type HousingCostsLink,
  type HousingScenario,
  type MistakeFixRow,
} from "./housingCostsNetherlandsPageModel";

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
const iconPool = [Home, Building2, Key, Landmark, MapPin, Wallet, Receipt, PiggyBank, Scale, ShieldCheck, Zap, Calculator, Banknote, Users] as const;
const snapshotIcons = [Home, Zap, Landmark, PiggyBank] as const;
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
            <Home className={cn("mt-0.5 h-4 w-4 shrink-0", onDark ? "text-cyan-200" : "text-brand-strong")} aria-hidden />
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

function CityComparisonTable({ rows }: { rows: readonly CityCostRow[] }) {
  return (
    <InfoTable
      rows={rows.map((row) => ({
        city: row.href ? (
          <Link href={row.href} className="text-link hover:text-link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30">
            {row.city}
          </Link>
        ) : (
          row.city
        ),
        typicalRent: row.typicalRent,
        purchasePrices: row.purchasePrices,
        competition: row.competition,
        expatPopularity: row.expatPopularity,
      }))}
      columns={[
        { key: "city", label: "City" },
        { key: "typicalRent", label: "Typical rent" },
        { key: "purchasePrices", label: "Purchase prices" },
        { key: "competition", label: "Competition" },
        { key: "expatPopularity", label: "Expat popularity" },
      ]}
    />
  );
}

function CostLineTable({
  title,
  rows,
  itemLabel = "Item",
}: {
  title: string;
  rows: readonly CostLineRow[];
  itemLabel?: string;
}) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Cost breakdown" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ item: row.item, range: row.range, note: row.note }))}
          columns={[
            { key: "item", label: itemLabel },
            { key: "range", label: "Orientation range" },
            { key: "note", label: "Notes" },
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

function ChecklistDetailGrid({ items }: { items: readonly ChecklistDetailItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.task} className={cardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <CheckCircle2 className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{item.timing}</p>
              <h3 className="mt-1 text-base font-bold text-foreground">{item.task}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.detail}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function HousingScenarioTable({ title, rows }: { title: string; rows: readonly HousingScenario[] }) {
  return (
    <div className="w-full">
      <SectionIntro eyebrow="Examples" title={title} fullWidth />
      <div className="mt-4 w-full">
        <InfoTable
          rows={rows.map((row) => ({ situation: row.situation, cost: row.cost, note: row.note }))}
          columns={[
            { key: "situation", label: "Situation" },
            { key: "cost", label: "Orientation cost" },
            { key: "note", label: "Note" },
          ]}
        />
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

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: HousingCostsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
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

function LinkCardGrid({ items }: { items: readonly HousingCostsLink[] }) {
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
  const stepIcons = [Calculator, MapPin, Wallet] as const;
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
        <h3 className="mt-2 text-xl font-bold tracking-tight">Three budget moves before you search</h3>
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

export function HousingCostsNetherlandsView() {
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
          { name: "Housing Costs", item: new URL(page.path, baseUrl).toString() },
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
                      Housing Costs
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
            <nav aria-label="Housing costs page sections" className="flex min-w-max gap-2">
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
                <SectionIntro eyebrow="At a glance" title="Housing Costs at a Glance" fullWidth>
                  <p>
                    Use these signals to orient yourself on rent variance, utility separation, buyer fees and regional city costs before you narrow your search.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.snapshot}
            >
              <VisualTextDetails details={page.visualTextDetails.snapshot} />
              <MilestoneStatGrid items={page.snapshotMilestones} />
              <FeatureGrid items={page.snapshotCards} />
              <BulletPanel title="Track your housing budget" items={page.budgetTrackingTips} />
              <ChecklistBlock title="How to use this snapshot" items={page.snapshotUseTips} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="factors"
              intro={
                <SectionIntro eyebrow="Cost drivers" title="What Drives Housing Costs in the Netherlands?" fullWidth>
                  <p>
                    Location, property type, energy efficiency and market demand combine to create wide spreads — even within the same city. Compare total monthly stack, not headline rent alone.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.factors}
            >
              <VisualTextDetails details={page.visualTextDetails.factors} />
              <FeatureGrid items={page.costFactorCards} />
              <CostLineTable title="Energy label and furnishing impact on monthly costs" rows={page.energyLabelRows} />
              <BulletPanel title="Compare listings fairly" items={page.factorComparisonBullets} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="rental-costs"
              intro={
                <SectionIntro eyebrow="Rent" title="Rental Costs in the Netherlands" fullWidth>
                  <p>
                    Orientation rent bands vary by city, neighbourhood and furnishing. Service costs and utilities are frequently separate from headline rent — always confirm what is included.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.rentalCosts}
            >
              <VisualTextDetails details={page.visualTextDetails.rentalCosts} />
              <InfoTable
                rows={page.rentalCostRows.map((row) => ({
                  type: row.type,
                  range: row.range,
                  note: row.note,
                }))}
                columns={[
                  { key: "type", label: "Property type" },
                  { key: "range", label: "Orientation range" },
                  { key: "note", label: "Notes" },
                ]}
              />
              <BulletPanel title="Rental cost context" items={page.rentalBullets} />
              <HousingScenarioTable title="How rental costs play out in practice" rows={page.rentalScenarios} />
              <GuideCrossLink
                href={RENTING_NETHERLANDS_PATH}
                title="Renting in the Netherlands"
                description="Go deeper on contracts, deposits, viewings and tenant orientation for expats."
                linkLabel="Open renting guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="purchase-costs"
              intro={
                <SectionIntro eyebrow="Buying" title="Purchase Costs and Buyer Fees" fullWidth>
                  <p>
                    Buying adds kosten koper on top of the mortgage — transfer tax, notary, valuation and advice are cash needs before you bid. Ongoing owner costs follow after transfer.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.purchaseCosts}
            >
              <VisualTextDetails details={page.visualTextDetails.purchaseCosts} />
              <FeatureGrid items={page.purchaseCostCards} />
              <CostLineTable title="Kosten koper orientation by purchase price" rows={page.purchaseCostBreakdown} />
              <HousingScenarioTable title="Buyer scenarios expats encounter" rows={page.purchaseScenarios} />
              <BulletPanel title="Buyer planning tips" items={page.purchaseBullets} />
              <GuideCrossLink
                href={BUY_VS_RENT_NETHERLANDS_PATH}
                title="Buy vs rent in the Netherlands"
                description="Compare total cost over your stay horizon before committing to purchase."
                linkLabel="Open buy vs rent guide"
              />
              <GuideCrossLink
                href={BUYING_HOUSE_NETHERLANDS_PATH}
                title="Buying a house in the Netherlands"
                description="Purchase process, kosten koper and Dutch buyer orientation for expats."
                linkLabel="Open buying guide"
              />
              <GuideCrossLink
                href={MORTGAGES_NETHERLANDS_EXPATS_PATH}
                title="Mortgages for expats"
                description="Borrowing capacity, lender requirements and application steps for international residents."
                linkLabel="Open mortgage guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="city-comparison"
              intro={
                <SectionIntro eyebrow="Cities" title="Housing Costs by City" fullWidth>
                  <p>
                    City choice often matters more than property type for your monthly budget. Compare rent bands, purchase pressure and expat demand across major Dutch markets.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.cityComparison}
            >
              <VisualTextDetails details={page.visualTextDetails.cityComparison} />
              <CityComparisonTable rows={page.cityComparison} />
              <BulletPanel title="How to use the city comparison" items={page.cityComparisonBullets} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="amsterdam-vs"
              intro={
                <SectionIntro eyebrow="Amsterdam" title="Amsterdam vs Other Dutch Cities" fullWidth>
                  <p>
                    Amsterdam is usually among the priciest markets — compare commute, lifestyle and availability before assuming it is your only option.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.amsterdamVs}
            >
              <VisualTextDetails details={page.visualTextDetails.amsterdamVs} />
              <InfoTable
                rows={page.amsterdamComparisonRows.map((row) => ({
                  factor: row.factor,
                  amsterdam: row.amsterdam,
                  rotterdam: row.rotterdam,
                  theHague: row.theHague,
                  utrecht: row.utrecht,
                  eindhoven: row.eindhoven,
                }))}
                columns={[
                  { key: "factor", label: "Factor" },
                  { key: "amsterdam", label: "Amsterdam" },
                  { key: "rotterdam", label: "Rotterdam" },
                  { key: "theHague", label: "The Hague" },
                  { key: "utrecht", label: "Utrecht" },
                  { key: "eindhoven", label: "Eindhoven" },
                ]}
              />
              <BulletPanel title="When to choose Amsterdam vs alternatives" items={page.amsterdamDecisionBullets} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="utilities"
              intro={
                <SectionIntro eyebrow="Utilities" title="Utilities Beyond Rent or Mortgage" fullWidth>
                  <p>
                    Electricity, gas, water, internet and municipal charges often add €150–€350+ monthly beyond headline housing costs. Energy label and household size matter materially.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.utilities}
            >
              <VisualTextDetails details={page.visualTextDetails.utilities} />
              <CostLineTable title="Monthly utility line items (orientation)" rows={page.utilityCostRows} />
              <FeatureGrid items={page.utilityCostCards} />
              <LinkCardGrid
                items={[
                  { label: "Utilities in the Netherlands", href: UTILITIES_NETHERLANDS_PATH, description: "Energy, water, internet and setup after moving.", status: "live" },
                  { label: "Energy and water", href: ENERGY_AND_WATER_NETHERLANDS_PATH, description: "Electricity, gas, water and district heating setup.", status: "live" },
                  { label: "Internet and mobile", href: INTERNET_AND_MOBILE_NETHERLANDS_PATH, description: "Broadband, mobile and connectivity after move-in.", status: "live" },
                ]}
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="insurance"
              intro={
                <SectionIntro eyebrow="Insurance" title="Home and Contents Insurance Costs" fullWidth>
                  <p>
                    Contents insurance is common for renters; owners add building cover and higher liability buffers. Compare providers before move-in deadlines.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.insurance}
            >
              <VisualTextDetails details={page.visualTextDetails.insurance} />
              <CostLineTable title="Insurance cost orientation" rows={page.insuranceCostRows} itemLabel="Cover type" />
              <FeatureGrid items={page.insuranceCards} />
              <GuideCrossLink
                href={INSURANCE_PROVIDERS_NETHERLANDS_PATH}
                title="Insurance providers in the Netherlands"
                description="Compare contents, liability and home insurance orientation for expats."
                linkLabel="Open insurance guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="property-taxes"
              intro={
                <SectionIntro eyebrow="Taxes" title="Property Taxes and Municipal Charges" fullWidth>
                  <p>
                    Owners face recurring municipal levies on property; renters may still pay waste collection and water board charges depending on contract structure.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.propertyTaxes}
            >
              <VisualTextDetails details={page.visualTextDetails.propertyTaxes} />
              <CostLineTable title="Municipal charges orientation" rows={page.propertyTaxRows} />
              <BulletPanel title="Tax and charge context" items={page.propertyTaxBullets} />
              <GuideCrossLink
                href={PROPERTY_TAX_NETHERLANDS_PATH}
                title="Property tax in the Netherlands"
                description="OZB, WOZ value and owner-occupied vs rental investment context."
                linkLabel="Open property tax guide"
              />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="life-stage"
              intro={
                <SectionIntro eyebrow="Life stages" title="Housing Costs by Life Stage" fullWidth>
                  <p>
                    Students, professionals, couples, families and retirees face different cost shapes — household size, contract stability and city choice all shift the monthly stack.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.lifeStage}
            >
              <VisualTextDetails details={page.visualTextDetails.lifeStage} />
              <FeatureGrid items={page.lifeStageCards} />
              <HousingScenarioTable title="Housing stacks by life stage" rows={page.lifeStageScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="housing-types"
              intro={
                <SectionIntro eyebrow="Property types" title="Costs by Housing Type" fullWidth>
                  <p>
                    Studios minimise rent but limit growth; houses add garden maintenance and higher utilities. Parking is often a separate monthly charge in cities.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.housingTypes}
            >
              <VisualTextDetails details={page.visualTextDetails.housingTypes} />
              <CostLineTable title="Rent bands by property type" rows={page.housingTypeRows} itemLabel="Property type" />
              <FeatureGrid items={page.housingTypeCards} />
              <BulletPanel title="Property type trade-offs" items={page.housingTypeBullets} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="affordability"
              intro={
                <SectionIntro eyebrow="Affordability" title={page.affordabilitySection.heading} fullWidth>
                  {page.affordabilitySection.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </SectionIntro>
              }
              visual={page.visuals.affordability}
            >
              <VisualTextDetails details={page.visualTextDetails.affordability} />
              <BulletPanel title="Key inputs for your budget" items={page.affordabilitySection.inputs} />
              <BulletPanel title="Affordability tips" items={page.affordabilitySection.tips} />
              <HousingScenarioTable title="Affordability in real household examples" rows={page.affordabilityScenarios} />
              <LinkCardGrid items={page.calculatorLinks} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="sample-budgets"
              intro={
                <SectionIntro eyebrow="Budgets" title="Sample Monthly Housing Budgets" fullWidth>
                  <p>
                    Illustrative stacks for common expat profiles — adjust for your city, energy label and commute pattern. These are planning examples, not quotes.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.sampleBudgets}
            >
              <VisualTextDetails details={page.visualTextDetails.sampleBudgets} />
              <InfoTable
                rows={page.budgetExamples.map((row) => ({
                  profile: row.profile,
                  housing: row.housing,
                  utilities: row.utilities,
                  insurance: row.insurance,
                  transport: row.transport,
                  note: row.note,
                }))}
                columns={[
                  { key: "profile", label: "Profile" },
                  { key: "housing", label: "Housing" },
                  { key: "utilities", label: "Utilities" },
                  { key: "insurance", label: "Insurance" },
                  { key: "transport", label: "Transport" },
                  { key: "note", label: "Notes" },
                ]}
              />
              <BulletPanel title="Adapt these examples to your situation" items={page.budgetAdaptationTips} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="hidden-costs"
              intro={
                <SectionIntro eyebrow="Hidden costs" title="Hidden and Setup Housing Costs" fullWidth>
                  <p>
                    First-month cash needs often exceed rent alone — deposits, furniture, moving, insurance and municipal charges commonly surprise newcomers who budget only headline rent.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.hiddenCosts}
            >
              <VisualTextDetails details={page.visualTextDetails.hiddenCosts} />
              <FeatureGrid items={page.hiddenCostCards} />
              <HousingScenarioTable title="Hidden costs in real move-in scenarios" rows={page.hiddenCostScenarios} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="mistakes"
              intro={
                <SectionIntro eyebrow="Avoidable mistakes" title="Common Housing Budget Mistakes" fullWidth>
                  <p>
                    Rent-only budgeting is the most common gap — utilities, insurance, taxes and setup cash follow quickly after signing.
                  </p>
                </SectionIntro>
              }
              visual={page.visuals.mistakes}
            >
              <VisualTextDetails details={page.visualTextDetails.mistakes} />
              <FeatureGrid items={page.mistakeCards} />
              <MistakeFixTable title="Common mistakes and practical fixes" rows={page.mistakeFixRows} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="checklist"
              intro={
                <SectionIntro eyebrow="Checklist" title="Pre-Signing Housing Cost Checklist" fullWidth>
                  <p>Run this list before lease or mortgage commitment — not after moving in.</p>
                </SectionIntro>
              }
              visual={page.visuals.checklist}
            >
              <VisualTextDetails details={page.visualTextDetails.checklist} />
              <ChecklistDetailGrid items={page.checklistDetailItems} />
              <ChecklistBlock title="Quick checklist summary" items={page.checklist} columns={2} />
            </PremiumGuideSection>

            <PremiumGuideSection
              id="faq"
              intro={
                <SectionIntro eyebrow="FAQ" title="Housing Costs FAQ" fullWidth>
                  <p>Quick answers to the questions expats ask before relocating — verify live listings and official data for your target city.</p>
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
                  <p>Market data changes quarterly — check publication dates on official statistics before making decisions.</p>
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
                  <p>Continue into renting, buying, mortgages, utilities and insurance guides to complete your housing setup.</p>
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
                <SectionIntro eyebrow="Explore next" title="Continue Your Housing Setup" tone="onDark" fullWidth>
                  <p>Pick the guide that matches your next housing decision — renting, buying, mortgage, utilities or insurance.</p>
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
