import { Children, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  Home,
  KeyRound,
  Landmark,
  MapPin,
  PiggyBank,
  ReceiptText,
  Scale,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
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
  buyingHouseNetherlandsPage as page,
  BUYING_HOUSE_NETHERLANDS_PATH,
  CITIES_HUB_PATH,
  EXPAT_SALARY_NETHERLANDS_PATH,
  HOUSING_HUB_PATH,
  MOVING_TO_NETHERLANDS_PATH,
  NET_SALARY_NETHERLANDS_PATH,
  RENT_AFFORDABILITY_TOOL_PATH,
  RENTING_NETHERLANDS_PATH,
  TAXES_HUB_PATH,
  type BuyingHouseNetherlandsLink,
} from "./buyingHouseNetherlandsPageModel";
import {
  BuyingHouseReferenceDisclaimer,
  BuyingHouseReferenceHighlightCards,
  BuyingHouseReferenceTable,
  BuyingHouseOverbiddingTable,
  BuyingHousePurchasePriceTable,
  BuyingHouseWorkedExampleCards,
} from "./BuyingHouseReferenceDisplay";
import {
  BuyingHouseHubCtaStrip,
  BuyingHousePlanningCtaStrip,
} from "./BuyingHousePlanningDisplay";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-5 sm:space-y-6 md:space-y-7";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const linkIcons = [Home, Building2, ReceiptText, FileText, BriefcaseBusiness, ShieldCheck, PiggyBank, Globe2] as const;
const snapshotIcons = [Home, Landmark, BriefcaseBusiness, WalletCards, ShieldCheck, Calculator] as const;

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
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div
          className={cn(
            "mt-3 w-full space-y-3 text-base leading-relaxed",
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

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <Image src={page.hero.image.src} alt={page.hero.image.alt} width={1600} height={900} priority sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" aria-hidden />
    </figure>
  );
}

function VisualFigure({ visual, className }: { visual: (typeof page.infographics)[keyof typeof page.infographics]; className?: string }) {
  return (
    <figure className={cn("overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-xl ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass, className)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft">
        <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-contain" />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">{visual.caption}</figcaption>
    </figure>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: BuyingHouseNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = linkIcons[iconIndex % linkIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <div className="flex gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1", onDark ? "bg-white/10 text-cyan-100 ring-white/15" : isLive ? "bg-copilot-bg-soft text-brand-strong ring-copilot-primary/10" : "bg-slate-100 text-slate-500 ring-slate-200")}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className={cn("text-sm font-bold", onDark ? "text-white" : "text-foreground")}>{item.label}</span>
          {!isLive ? <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em]", onDark ? "bg-white/10 text-slate-300 ring-1 ring-white/10" : "bg-slate-100 text-slate-500")}>Coming soon</span> : null}
          {item.description ? <span className={cn("mt-2 block text-sm leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{item.description}</span> : null}
        </span>
      </div>
      {isLive ? <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-200" : "text-link group-hover:text-link-hover")}>Open <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span> : null}
    </>
  );
  if (!isLive) return <article className={cn(shell, "opacity-90")}>{body}</article>;
  return (
    <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas", !onDark && movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function TipsPanel({ title = "Key points", items, className, embedded = false }: { title?: string; items: readonly string[]; className?: string; embedded?: boolean }) {
  return (
    <div className={cn(embedded ? "w-full" : cn("w-full rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass), className)}>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{title}</p>
      <ul className={cn("mt-4 grid gap-3", items.length >= 4 ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-2")}>
        {items.map((tip) => (
          <li key={tip} className="flex gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-sm leading-relaxed text-foreground-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
            <span>{tip}</span>
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
  embedded = false,
}: {
  eyebrow: string;
  title: string;
  rows: Array<{ label: string; body: string; Icon: LucideIcon }>;
  note?: string;
  rowsLayout?: "stack" | "wide";
  className?: string;
  embedded?: boolean;
}) {
  return (
    <aside className={cn("relative w-full", !embedded && CITIES_FUNNEL_SOFT_COPILOT_SURFACE, !embedded && "overflow-hidden p-5 sm:p-6", !embedded && movingNlCardMicroLiftClass, className)}>
      {!embedded ? <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden /> : null}
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

function SectionGuideBand({ tips, tipsTitle, panel }: { tips?: readonly string[]; tipsTitle?: string; panel?: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string } }) {
  if (!tips?.length && !panel) return null;
  return (
    <div className={cn("relative w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50/90 via-white to-copilot-bg-soft/40 p-5 shadow-sm ring-1 ring-slate-900/[0.04] sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="relative flex flex-col gap-6">
        {tips?.length ? <TipsPanel title={tipsTitle} items={tips} embedded /> : null}
        {panel ? <ProcessPanel {...panel} embedded rowsLayout={panel.rows.length >= 3 ? "wide" : "stack"} className={cn("mt-0", tips?.length && "border-t border-slate-200/80 pt-6")} /> : null}
      </div>
    </div>
  );
}

function ChecklistBlock({ title, items, columns = 2, className }: { title: string; items: readonly string[]; columns?: 1 | 2; className?: string }) {
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

function QuestionGrid({ items, compact = false }: { items: readonly { q: string; a: string }[]; compact?: boolean }) {
  return (
    <div className={cn("grid w-full gap-4", compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4")}>
      {items.map((item) => (
        <article key={item.q} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className={cn("font-bold text-foreground", compact ? "text-sm" : "text-base")}>{item.q}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
        </article>
      ))}
    </div>
  );
}

function SectionWithVisual({
  id,
  title,
  intro,
  tips,
  tipsTitle,
  visual,
  panel,
  extra,
}: {
  id: string;
  title: string;
  intro: ReactNode;
  tips?: readonly string[];
  tipsTitle?: string;
  /** Omit on closing sections — E4 HTML payload pass. */
  visual?: (typeof page.infographics)[keyof typeof page.infographics];
  panel?: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string };
  extra?: ReactNode;
}) {
  return (
    <section id={id} className={sectionClass}>
      <div className="flex w-full flex-col gap-6">
        <SectionIntro title={title} fullWidth>{intro}</SectionIntro>
        <SectionGuideBand tips={tips} tipsTitle={tipsTitle} panel={panel} />
        {extra}
        {visual ? <VisualFigure visual={visual} className="mt-0" /> : null}
      </div>
    </section>
  );
}

function ScenarioCards({ items, className }: { items: readonly { title: string; body: string }[]; className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((scenario) => (
        <article key={scenario.title} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <Globe2 className="h-5 w-5 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-bold text-foreground">{scenario.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{scenario.body}</p>
        </article>
      ))}
    </div>
  );
}

function MistakeCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {page.mistakeCards.map((card) => (
        <article key={card.title} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

function BuyOrRentComparisonTable({ className }: { className?: string }) {
  return (
    <div className={cn("w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass, className)}>
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200/90 bg-slate-50/80">
            <th scope="col" className="px-4 py-3 font-bold text-foreground sm:px-5">Factor</th>
            <th scope="col" className="px-4 py-3 font-bold text-brand-strong sm:px-5">Buying</th>
            <th scope="col" className="px-4 py-3 font-bold text-foreground sm:px-5">Renting</th>
          </tr>
        </thead>
        <tbody>
          {page.buyOrRentComparison.map((row) => (
            <tr key={row.factor} className="border-b border-slate-100 last:border-0">
              <th scope="row" className="px-4 py-3 font-semibold text-foreground sm:px-5">{row.factor}</th>
              <td className="px-4 py-3 leading-relaxed text-foreground-muted sm:px-5">{row.buy}</td>
              <td className="px-4 py-3 leading-relaxed text-foreground-muted sm:px-5">{row.rent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ConceptFlow({ className }: { className?: string }) {
  const icons = [Home, WalletCards, KeyRound] as const;
  return (
    <div className={cn("grid w-full gap-3 md:grid-cols-3", className)}>
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? Home;
        return (
          <article key={card.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function SnapshotCards() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {page.snapshotCards.map((card, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <article key={card.label} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-brand-strong">{card.label}</p>
            <p className="mt-2 text-base font-semibold text-foreground">{card.value}</p>
          </article>
        );
      })}
    </div>
  );
}

function BuyOrRentCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-6 lg:grid-cols-2", className)}>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Reasons to buy</p>
        <div className="mt-4 grid gap-4">
          {page.buyReasons.map((item) => (
            <article key={item.title} className={mutedCardClass}>
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <Home className="h-5 w-5 text-brand-strong" aria-hidden />
              <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Reasons to rent</p>
        <div className="mt-4 grid gap-4">
          {page.rentReasons.map((item) => (
            <article key={item.title} className={mutedCardClass}>
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <Building2 className="h-5 w-5 text-brand-strong" aria-hidden />
              <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessSteps({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", className)}>
      {page.processSteps.map((step) => (
        <article key={step.step} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Step {step.step}</p>
          <h3 className="mt-2 text-base font-bold text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.body}</p>
        </article>
      ))}
    </div>
  );
}

function FactorCards({ items, className }: { items: readonly { title: string; body: string }[]; className?: string }) {
  const icons = [BriefcaseBusiness, ShieldCheck, WalletCards, Globe2, Calculator, Landmark] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <article key={item.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function CostItemsCards({ className }: { className?: string }) {
  const icons = [ReceiptText, Scale, BriefcaseBusiness, Calculator, ClipboardCheck, Building2, Landmark, FileText] as const;
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {page.costItems.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <article key={item.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function CityCard({ city }: { city: (typeof page.cityCards)[number] }) {
  return (
    <Link href={city.href} className={cn(mutedCardClass, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", transitionInteractive, activeBrightnessPress)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <MapPin className="h-5 w-5 text-brand-strong" aria-hidden />
      <h3 className="mt-3 text-base font-bold text-foreground group-hover:text-link">{city.label}</h3>
      <dl className="mt-3 space-y-2 text-sm">
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.1em] text-brand-strong">Vibe</dt>
          <dd className="mt-0.5 leading-relaxed text-foreground-muted">{city.vibe}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.1em] text-brand-strong">Pricing pressure</dt>
          <dd className="mt-0.5 leading-relaxed text-foreground-muted">{city.pricing}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.1em] text-brand-strong">Expat popularity</dt>
          <dd className="mt-0.5 leading-relaxed text-foreground-muted">{city.expat}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.1em] text-brand-strong">Commute</dt>
          <dd className="mt-0.5 leading-relaxed text-foreground-muted">{city.commute}</dd>
        </div>
      </dl>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">Open city guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
    </Link>
  );
}

function CityCardsGrid({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", className)}>
      {page.cityCards.map((city) => (
        <CityCard key={city.href} city={city} />
      ))}
    </div>
  );
}

function ChallengeCards({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {page.challengeCards.map((card) => (
        <article key={card.title} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <h3 className="text-base font-bold text-foreground">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

function ApartmentVsHouseComparison({ className }: { className?: string }) {
  return (
    <div className={cn("grid w-full gap-6 lg:grid-cols-2", className)}>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Apartment</p>
        <div className="mt-4 grid gap-4">
          {page.apartmentPoints.map((item) => (
            <article key={item.title} className={mutedCardClass}>
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <Building2 className="h-5 w-5 text-brand-strong" aria-hidden />
              <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">House</p>
        <div className="mt-4 grid gap-4">
          {page.housePoints.map((item) => (
            <article key={item.title} className={mutedCardClass}>
              <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
              <Home className="h-5 w-5 text-brand-strong" aria-hidden />
              <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
  return (
    <a href={source.href} target="_blank" rel="noopener noreferrer" className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group relative overflow-hidden block p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span className="text-sm font-bold text-foreground group-hover:text-link">{source.label}</span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
    </a>
  );
}

function BuyingFlowBand({ className }: { className?: string }) {
  const items = [
    { label: "Get mortgage advice", body: "Book AFM-regulated hypotheekadviseur review before intensive viewings and bidding.", Icon: Calculator },
    { label: "Budget kosten koper", body: "Plan ~€13,500 own funds at €400,000 (€8k transfer tax + ~€5.5k fees) — not always covered by the mortgage.", Icon: WalletCards },
    { label: "Search with a ceiling", body: "Set a max bid including overbid buffer — appraisal may cap what the bank finances.", Icon: KeyRound },
  ];
  return (
    <aside className={cn("relative w-full overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Home buying planning</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Advice + own funds + bid ceiling = realistic purchase plan</h3>
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

function RelatedGuidesVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Next-step map"
      title="From buying concepts to a clearer housing decision"
      rows={[
        { label: "Housing hub", body: "Read the Netherlands housing guide before comparing purchase and rent options.", Icon: Home },
        { label: "Salary context", body: "Connect mortgage capacity to expat salary and net pay planning.", Icon: Calculator },
        { label: "City context", body: "Compare price pressure, commute and expat community before you bid.", Icon: Globe2 },
      ]}
    />
  );
}

export function BuyingHouseNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Housing", item: new URL(HOUSING_HUB_PATH, baseUrl).toString() },
    { name: "Buying a house", item: new URL(page.path, baseUrl).toString() },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "p-0")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative z-[1] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
                <div>
                  <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-foreground-muted">
                    <Link href="/" className="hover:text-foreground">Home</Link><span aria-hidden>/</span>
                    <Link href="/netherlands/" className="hover:text-foreground">Netherlands</Link><span aria-hidden>/</span>
                    <Link href={HOUSING_HUB_PATH} className="hover:text-foreground">Housing</Link><span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Buying a house</span>
                  </nav>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-brand-strong">{page.hero.eyebrow}</p>
                  <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{page.hero.chips.map((chip) => <span key={chip} className={CITIES_FUNNEL_INFO_CHIP}>{chip}</span>)}</div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>{page.hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                    <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>{page.hero.secondaryCta.label}</Link>
                  </div>
                </div>
                <HeroImage />
              </div>
            </div>
          </section>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-white/80 p-3 shadow-sm ring-1 ring-slate-900/[0.03]">
            <nav aria-label="Buying a house guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Can Expats Buy a House in the Netherlands?" fullWidth>
                  <p>Foreign nationals and international residents can own Dutch property — mortgage eligibility, residency rules and lender policy apply per case, not nationality alone.</p>
                  <p>Many newcomers are surprised by how quickly the Dutch buying process moves, how competitive Randstad bidding can be, and how <strong>kosten koper</strong> (buyer costs) sit on top of the purchase price.</p>
                  <p>Mortgage advice through AFM-regulated hypotheekadviseurs is standard before serious bidding. This guide is orientation only — not mortgage, legal or investment advice.</p>
                  <p>
                    Read the{" "}
                    <Link href={HOUSING_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Housing hub</Link>
                    {" "}for broader housing context, then confirm personal questions with regulated mortgage advisers and official sources.
                  </p>
                </SectionIntro>
                <TipsPanel title="What surprises many newcomers" items={page.newcomerSurprises} />
                <ConceptFlow />
                <VisualFigure visual={page.infographics.introFlow} className="mt-0" />
                <ChecklistBlock title="Before you search or bid" items={page.introChecklist} />
                <ProcessPanel
                  eyebrow="Practical lens"
                  title="What this guide covers"
                  rowsLayout="wide"
                  rows={[
                    { label: "Buying basics", body: "Expat eligibility, kosten koper and competitive market context.", Icon: Home },
                    { label: "Process & mortgages", body: "Ten-step process, mortgage factors and borrowing capacity.", Icon: Landmark },
                    { label: "City & tax context", body: "Overbidding, city comparison and transfer tax orientation.", Icon: Globe2 },
                  ]}
                  note="This page does not provide personalized mortgage approvals, legal contract review or investment recommendations."
                />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Buying Property at a Glance" fullWidth>
                  <p>
                    Key 2026 planning reference for expats buying in the Netherlands — transfer tax at 2% owner-occupied (€8,000 at €400,000),
                    NHG cap €470,000, and kosten koper often ~€13,500 at €400,000 before any overbid gap.
                  </p>
                </SectionIntro>
                <SnapshotCards />
                <BuyingHouseReferenceHighlightCards />
                <TipsPanel title="Snapshot — what to remember" items={page.snapshotTips} />
                <BuyingFlowBand className="mt-0" />
                <VisualFigure visual={page.infographics.snapshot} className="mt-0" />
                <BuyingHouseReferenceDisclaimer />
              </div>
            </section>

            <section id="costs-reference" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="2026 Buyer Cost Reference" fullWidth>
                  <p>
                    Published 2026 reference parameters for transfer tax, notary fees, valuation, NHG limits and typical kosten koper planning ranges.
                    These are planning figures — verify current rates on Belastingdienst and with your mortgage adviser before purchasing.
                  </p>
                  <p>{page.officialPlanningCta.description}</p>
                </SectionIntro>
                <BuyingHouseReferenceTable subtitle="Official-style 2026 reference table — verify on Belastingdienst and with regulated mortgage advice before purchasing." />
                <BuyingHousePurchasePriceTable
                  subtitle="Owner-occupied transfer tax at 2% plus mid-range notary, valuation, inspection and mortgage advice — own funds required before the mortgage covers the property price."
                />
                <BuyingHouseWorkedExampleCards />
                <ProcessPanel
                  eyebrow="Planning tools"
                  title={page.officialPlanningCta.title}
                  rowsLayout="wide"
                  rows={[
                    { label: "Affordability calculator", body: "Stress-test housing budget alongside kosten koper planning.", Icon: Calculator },
                    { label: "Belastingdienst", body: "Confirm transfer tax rate and owner-occupied vs investment classification.", Icon: Landmark },
                    { label: "Kadaster", body: "Property ownership records and cadastral information.", Icon: ShieldCheck },
                  ]}
                  note={page.officialPlanningCta.disclaimer}
                />
                <BuyingHousePlanningCtaStrip />
                <BuyingHouseHubCtaStrip />
                <BuyingHouseReferenceDisclaimer className="mt-0" />
              </div>
            </section>

            <section id="buy-or-rent" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Should Expats Buy or Rent?" fullWidth>
                  <p>Neither choice is universally better — match housing strategy to your relocation horizon, employment stability and local market conditions.</p>
                  <p>
                    Compare total cost of ownership (mortgage, taxes, maintenance, VvE) with rent — not purchase price alone. See the{" "}
                    <Link href={RENTING_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Renting in the Netherlands guide</Link>
                    {" "}for the rental alternative.
                  </p>
                </SectionIntro>
                <TipsPanel title="Buy vs rent — key points" items={page.buyOrRentTips} />
                <BuyOrRentCards />
                <BuyOrRentComparisonTable />
                <ProcessPanel
                  eyebrow="Decision lens"
                  title="Match housing choice to relocation horizon"
                  rowsLayout="wide"
                  rows={[
                    { label: "Buy when stable", body: "Multi-year employment, family roots and savings for kosten koper.", Icon: Home },
                    { label: "Rent when uncertain", body: "Probation, short assignment or still comparing cities.", Icon: Building2 },
                    { label: "Compare total cost", body: "Mortgage + taxes + maintenance vs rent + flexibility — not price alone.", Icon: Calculator },
                  ]}
                />
                <VisualFigure visual={page.infographics.buyOrRent} className="mt-0" />
              </div>
            </section>

            <section id="process" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How the Dutch Home Buying Process Works" fullWidth>
                  <p>From budget planning to notarial transfer, the Dutch buying process often moves quickly once you find a property — prepare mortgage advice and documents early.</p>
                  <p>Purchase agreements may include financing and inspection conditions — understand deadlines before signing.</p>
                </SectionIntro>
                <TipsPanel title="Process orientation" items={page.processTips} />
                <ProcessSteps />
                <ProcessPanel
                  eyebrow="Mandatory steps"
                  title="Notary transfer is required"
                  rowsLayout="wide"
                  rows={[
                    { label: "Mortgage advice", body: "Indicative capacity before intensive viewings and bidding.", Icon: Calculator },
                    { label: "Purchase agreement", body: "Koopovereenkomst with resolutieve voorwaarden — legal review recommended.", Icon: FileText },
                    { label: "Notarial transfer", body: "Civil-law notary executes levering — ownership and mortgage registration.", Icon: Scale },
                  ]}
                  note="This guide does not replace legal or mortgage advice for your specific purchase."
                />
                <VisualFigure visual={page.infographics.process} className="mt-0" />
              </div>
            </section>

            <SectionWithVisual
              id="mortgages"
              title="Can Expats Get a Mortgage in the Netherlands?"
              intro={
                <>
                  <p>Many expats may qualify depending on employment contract, income, residency status and creditworthiness — but approval is never guaranteed and lender policy varies.</p>
                  <p>Highly skilled migrants with stable employment are commonly approved. Temporary contracts, probation and cross-border income may need extra documentation or reduce options.</p>
                </>
              }
              tips={page.mortgageTips}
              tipsTitle="Mortgage planning tips"
              visual={page.infographics.mortgages}
              panel={{
                eyebrow: "Lender checklist",
                title: "Documents expats often prepare",
                rows: [
                  { label: "Employment proof", body: "Contract, employer letter and recent payslips in lender format.", Icon: BriefcaseBusiness },
                  { label: "Residency", body: "Valid permit, BSN and registration context for stay horizon.", Icon: ShieldCheck },
                  { label: "Financial picture", body: "Bank statements, existing debts and partner income documentation.", Icon: WalletCards },
                ],
                note: "Approval is never guaranteed — each lender assesses individually.",
              }}
              extra={
                <>
                  <FactorCards items={page.mortgageFactors} />
                  <ScenarioCards items={page.expatMortgageScenarios} className="lg:grid-cols-2 xl:grid-cols-4" />
                </>
              }
            />

            <section id="capacity" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="How Much Can You Borrow?" fullWidth>
                  <p>Dutch banks use affordability tests (toetsrente / Nibud-style norms) — not gross salary alone. Partner income can increase capacity; debts and student loans reduce it.</p>
                  <p>
                    Connect salary planning to purchase range via the{" "}
                    <Link href={EXPAT_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Expat Salary guide</Link>
                    {" "}and{" "}
                    <Link href={NET_SALARY_NETHERLANDS_PATH} className="font-semibold text-link hover:text-link-hover">Net Salary guide</Link>
                    {" "}— or use the{" "}
                    <Link href={RENT_AFFORDABILITY_TOOL_PATH} className="font-semibold text-link hover:text-link-hover">Rent affordability calculator</Link>
                    {" "}for housing budget stress-testing.
                  </p>
                </SectionIntro>
                <TipsPanel title="Borrowing capacity — key points" items={page.capacityTips} />
                <FactorCards items={page.capacityFactors} />
                <ProcessPanel
                  eyebrow="Salary context"
                  title="Connect income to purchase range"
                  rowsLayout="wide"
                  rows={[
                    { label: "Expat salary guide", body: "City and industry salary context for gross income planning.", Icon: BriefcaseBusiness },
                    { label: "Net salary guide", body: "Take-home pay picture for monthly affordability.", Icon: WalletCards },
                    { label: "Affordability tool", body: "Stress-test housing budget alongside kosten koper.", Icon: Calculator },
                  ]}
                  note="Affordability tests use regulatory assumptions — not your quoted mortgage rate alone."
                />
                <VisualFigure visual={page.infographics.capacity} className="mt-0" />
              </div>
            </section>

            <section id="costs" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Additional Costs When Buying a House" fullWidth>
                  <p>
                    <strong>Kosten koper</strong> covers transfer tax, notary fees, valuation, mortgage advice, technical inspection and possible buyer&apos;s agent fees.
                    At €400,000 owner-occupied: ~€8,000 transfer tax + ~€5,500 other buyer costs ≈ <strong>€13,500</strong> own funds before you move in.
                  </p>
                  <p>
                    See the purchase-price table below for €300k–€600k scenarios, or the{" "}
                    <a href="#costs-reference" className="font-semibold text-link hover:text-link-hover">2026 cost reference</a>
                    {" "}for NHG limits (€470,000), investment transfer tax (10.4%) and worked examples.
                  </p>
                </SectionIntro>
                <TipsPanel title="Cost planning tips" items={page.costsTips} />
                <BuyingHousePurchasePriceTable
                  subtitle="Four common purchase prices with calculated transfer tax and total kosten koper — buyer's agent (~1%) and NHG fee (0.4% of loan) not included."
                />
                <CostItemsCards />
                <BuyingHouseWorkedExampleCards />
                <ProcessPanel
                  eyebrow="Own funds"
                  title="What banks usually do not finance"
                  rowsLayout="wide"
                  rows={[
                    { label: "Transfer tax", body: "Overdrachtsbelasting — major kosten koper line item at transfer.", Icon: ReceiptText },
                    { label: "Notary & valuation", body: "Mandatory notary deed and lender taxatierapport fees.", Icon: Scale },
                    { label: "Overbid gap", body: "Difference between your offer and appraised value — from savings.", Icon: PiggyBank },
                  ]}
                />
                <VisualFigure visual={page.infographics.costs} className="mt-0" />
              </div>
            </section>

            <section id="overbidding" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Overbidding in the Dutch Housing Market" fullWidth>
                  <p>
                    In competitive markets buyers bid above asking — but lenders typically finance up to the appraised value, not your offer.
                    Example: offer €425,000 with €410,000 appraisal → <strong>€15,000 from savings</strong> before the mortgage covers the rest.
                  </p>
                  <p>
                    Amsterdam/Utrecht hot markets can see 10% over asking on €550,000 listings — a €30,000+ appraisal gap is realistic. Adjust max bid by city.
                  </p>
                </SectionIntro>
                <TipsPanel title="Overbidding orientation" items={page.overbiddingTips} />
                <BuyingHouseOverbiddingTable
                  subtitle="Three worked overbid scenarios — gap from savings is on top of kosten koper (e.g. ~€13,500 at €400,000)."
                />
                <FactorCards items={page.overbiddingConcepts} className="lg:grid-cols-3" />
                <VisualFigure visual={page.infographics.overbidding} className="mt-0" />
              </div>
            </section>

            <section id="cities" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Buying Property in Dutch Cities" fullWidth>
                  <p>City choice shapes price pressure, commute and expat community — compare before you bid. Each city below links to a dedicated expat city guide.</p>
                  <p>
                    Browse the{" "}
                    <Link href={CITIES_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Dutch Cities hub</Link>
                    {" "}for broader city comparison beyond purchase context.
                  </p>
                </SectionIntro>
                <TipsPanel title="City comparison — practical prompts" items={page.cityTips} />
                <FactorCards items={page.cityMarketConcepts} className="lg:grid-cols-3" />
                <CityCardsGrid />
                <ProcessPanel
                  eyebrow="Before you bid"
                  title="Neighbourhood checks that matter"
                  rowsLayout="wide"
                  rows={[
                    { label: "Commute reality", body: "Test door-to-door travel time at rush hour — not map estimates alone.", Icon: MapPin },
                    { label: "Schools & noise", body: "Visit evenings and weekends; check flight paths and nightlife.", Icon: Building2 },
                    { label: "Future supply", body: "New developments nearby can affect price and rental competition.", Icon: Globe2 },
                  ]}
                />
                <VisualFigure visual={page.infographics.cities} className="mt-0" />
              </div>
            </section>

            <section id="mortgage-types" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Mortgage Types in the Netherlands" fullWidth>
                  <p>Fixed vs variable interest, repayment structure and mortgage term are personal choices — AFM-regulated advisers explain product fit for your situation.</p>
                  <p>Do not treat blog examples as quotes — lender offers change with market conditions.</p>
                </SectionIntro>
                <TipsPanel title="Mortgage type orientation" items={page.mortgageTypeTips} />
                <FactorCards items={page.mortgageTypeCards} className="lg:grid-cols-4" />
                <ProcessPanel
                  eyebrow="Product choice"
                  title="Fixed vs variable — planning lens"
                  rowsLayout="wide"
                  rows={[
                    { label: "Fixed rate", body: "Payment predictability for a set period — early repayment rules apply.", Icon: ShieldCheck },
                    { label: "Variable rate", body: "Can fall or rise with market — understand review periods and caps.", Icon: Calculator },
                    { label: "NHG option", body: "May apply under price caps — verify current limits on nhg.nl annually.", Icon: Landmark },
                  ]}
                  note="AFM-regulated advisers explain product fit — this guide does not recommend specific products."
                />
                <VisualFigure visual={page.infographics.mortgageTypes} className="mt-0" />
              </div>
            </section>

            <section id="taxes" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Taxes and Financial Considerations" fullWidth>
                  <p>Transfer tax applies at purchase — rate depends on owner-occupied vs investment use classification. Mortgage interest deduction may reduce taxable income for qualifying owner-occupiers.</p>
                  <p>
                    See the{" "}
                    <Link href={TAXES_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Taxes hub</Link>
                    {" "}for broader tax and payroll context — orientation only, not tax advice.
                  </p>
                </SectionIntro>
                <TipsPanel title="Tax planning orientation" items={page.taxTips} />
                <FactorCards items={page.taxTopics} className="lg:grid-cols-4" />
                <ProcessPanel
                  eyebrow="2026 reference"
                  title="Transfer tax at purchase"
                  rowsLayout="wide"
                  rows={[
                    { label: "Owner-occupied", body: `${page.reference2026.transferTax.ownerOccupiedPercent}% of purchase price — verify exemptions on Belastingdienst.`, Icon: Home },
                    { label: "Non-owner-occupied", body: `${page.reference2026.transferTax.nonOwnerOccupiedPercent}% for investment/second home — confirm classification.`, Icon: Building2 },
                    { label: "Ongoing OZB", body: "Municipal property tax continues after transfer — varies by gemeente.", Icon: Landmark },
                  ]}
                  note="Tax rules change — confirm classification with a notary or tax adviser before you bid."
                />
                <VisualFigure visual={page.infographics.taxes} className="mt-0" />
              </div>
            </section>

            <section id="challenges" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Common Challenges for Expat Home Buyers" fullWidth>
                  <p>Language barriers, contract complexity, viewing competition and temporary employment are common expat buying challenges — professional advisors and neighbourhood research reduce mistakes.</p>
                </SectionIntro>
                <TipsPanel title="Avoid these planning traps" items={page.mistakesTips} />
                <ChallengeCards />
                <MistakeCards />
                <ProcessPanel
                  eyebrow="Risk reduction"
                  title="Why preparation matters"
                  rowsLayout="wide"
                  rows={[
                    { label: "Language & contracts", body: "Koopovereenkomst and VvE documents may need translation and legal review.", Icon: FileText },
                    { label: "Competition", body: "Popular properties attract many bidders — set a ceiling with your advisor.", Icon: Building2 },
                    { label: "Trusted advisors", body: "Use AFM-regulated mortgage advisers and registered agents — compare fees.", Icon: ShieldCheck },
                  ]}
                />
                <VisualFigure visual={page.infographics.challenges} className="mt-0" />
              </div>
            </section>

            <section id="apartment-vs-house" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Buying an Apartment vs a House" fullWidth>
                  <p>Apartments involve owners associations (VvE) — monthly bijdrage, maintenance plans and reserve fund health affect long-term cost. Houses involve direct maintenance and renovation responsibility.</p>
                  <p>Review VvE documents before bidding on an apartment — weak reserve funds or pending major works can raise costs sharply after purchase.</p>
                </SectionIntro>
                <TipsPanel title="Apartment vs house — key points" items={page.apartmentVsHouseTips} />
                <ApartmentVsHouseComparison />
                <ChecklistBlock title="VvE document checklist (apartments)" items={page.vveChecklist} columns={1} />
                <ProcessPanel
                  eyebrow="Due diligence"
                  title="Inspection priorities by property type"
                  rowsLayout="wide"
                  rows={[
                    { label: "Apartment", body: "VvE finances, MJOP, building envelope and shared installations.", Icon: Building2 },
                    { label: "House", body: "Foundation, roof, damp, energy label and asbestos (older builds).", Icon: Home },
                    { label: "Both", body: "Bouwkundige keuring before waiving inspection conditions.", Icon: ClipboardCheck },
                  ]}
                />
                <VisualFigure visual={page.infographics.apartmentVsHouse} className="mt-0" />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Questions Expats Often Ask" fullWidth>
                  <p>These are the questions international professionals and families ask most often about buying Dutch property — from eligibility and deposits to overbidding and city choice.</p>
                  <p>Answers below are orientation only. Verify your personal situation with regulated mortgage advisers and official sources.</p>
                </SectionIntro>
                <TipsPanel title="Start with these prompts" items={page.questionsSectionTips} />
                <QuestionGrid items={page.expatQuestions} />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Housing Guides" fullWidth>
                  <p>Connect buying plans to renting alternatives, salary context and city comparison.</p>
                  <p>
                    Start with the{" "}
                    <Link href={HOUSING_HUB_PATH} className="font-semibold text-link hover:text-link-hover">Netherlands Housing hub</Link>
                    {" "}before comparing purchase and rent options.
                  </p>
                </SectionIntro>
                <TipsPanel title="How to use these guides together" items={page.relatedGuideTips} />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedHousingGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
                <RelatedGuidesVisualPanel />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Professional Services That May Help" fullWidth>
                  <p>Mortgage advice, contract review, technical inspection and relocation orientation may need professional support — orientation only, not mortgage or legal advice.</p>
                </SectionIntro>
                <TipsPanel title="When professional help makes sense" items={page.servicesTips} />
                <ProcessPanel
                  eyebrow="Match the service"
                  title="Which professional for which question"
                  rowsLayout="wide"
                  rows={[
                    { label: "Mortgage adviser", body: "Indicative capacity, lender selection and application — AFM-regulated.", Icon: Calculator },
                    { label: "Property lawyer", body: "Koopovereenkomst, VvE review and notary process questions.", Icon: Scale },
                    { label: "Technical inspector", body: "Bouwkundige keuring before waiving inspection conditions.", Icon: ClipboardCheck },
                  ]}
                  note="This guide does not endorse specific providers — orientation only."
                />
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.servicesWhenToUse.map((item) => (
                    <article key={item.title} className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                    </article>
                  ))}
                </div>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.services.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Frequently Asked Questions" fullWidth>
                  <p>These answers summarize common buying questions for expats. Orientation only — not legal, mortgage or investment advice.</p>
                  <p>If you plan to purchase, work through the quick checks below before relying on general answers.</p>
                </SectionIntro>
                <ChecklistBlock title="Quick checks before you decide" items={page.faqQuickChecks} />
                <QuestionGrid items={page.faq} compact />
                <ProcessPanel
                  eyebrow="Rule of thumb"
                  title="Plan conservatively — confirm officially"
                  rowsLayout="wide"
                  rows={[
                    { label: "Budget kosten koper", body: "Plan buyer costs separately from the mortgage amount.", Icon: WalletCards },
                    { label: "Get mortgage advice", body: "Know indicative capacity before aggressive bidding.", Icon: Calculator },
                    { label: "Use official sources", body: "Transfer tax and mortgage rules change with policy.", Icon: Landmark },
                  ]}
                  note="Individual circumstances vary. Confirm personal questions with regulated mortgage advisers and official sources."
                />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Official Sources" fullWidth>
                  <p>Property regulations, mortgage rules, transfer tax rates and exemptions are set by Dutch government policy. Verify current requirements on official sources before purchasing.</p>
                  <p>{page.sourcesDisclaimer}</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.officialSources.map((source) => (
                    <SourceLink key={source.href} source={source} />
                  ))}
                </div>
                <ProcessPanel
                  eyebrow="Source hierarchy"
                  title="What the sources support"
                  rowsLayout="wide"
                  rows={[
                    { label: "Belastingdienst", body: "Transfer tax, mortgage interest deduction and property tax guidance.", Icon: ReceiptText },
                    { label: "Government.nl", body: "English-language housing and residency overview.", Icon: ShieldCheck },
                    { label: "AFM", body: "Mortgage adviser regulation and consumer information.", Icon: Landmark },
                  ]}
                />
              </div>
            </section>

            <section id="related-guides-footer" className={sectionClass}>
              <div className="flex w-full flex-col gap-6">
                <SectionIntro title="Related Guides" fullWidth>
                  <p>Connect buying plans to housing, taxes, salary and relocation guides across the site.</p>
                </SectionIntro>
                <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.relatedGuides.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="explore-next" className={cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, "overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8")}>
              <SectionIntro title="Explore Next" tone="onDark" fullWidth>
                <p>Move from buying concepts into renting alternatives, salary planning, city choice and relocation timelines.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.exploreNextCards.map((item, index) => (
                  <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />
                ))}
              </div>
            </section>

            <p className="rounded-2xl border border-amber-100 bg-amber-50/80 p-5 text-sm leading-relaxed text-amber-950">
              <strong>Disclaimer:</strong> This guide is for orientation only. It is not legal advice, mortgage advice or investment advice. Property purchase decisions depend on individual circumstances, lender policy, contract terms and applicable regulations. Confirm personal questions with qualified professionals and official sources.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
