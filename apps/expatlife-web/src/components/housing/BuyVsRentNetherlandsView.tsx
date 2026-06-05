import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Home,
  Landmark,
  MapPin,
  ReceiptText,
  Scale,
  ShieldCheck,
  Train,
  WalletCards,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
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
  buyVsRentNetherlandsPage as page,
  type BuyVsRentNetherlandsLink,
} from "./buyVsRentNetherlandsPageModel";

const sectionClass = cn(
  CITIES_FUNNEL_SECTION_SCROLL_MARGIN,
  CITIES_FUNNEL_SOFT_COPILOT_SURFACE,
  "relative isolate overflow-hidden p-6 shadow-sm ring-1 ring-slate-900/[0.03] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-cyan-400/70 before:via-brand/80 before:to-emerald-300/70 sm:p-8 lg:p-10"
);
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
const cardIcons = [Home, Landmark, WalletCards, ReceiptText, BriefcaseBusiness, Train, Banknote, Scale, ClipboardCheck, ShieldCheck] as const;
const snapshotIcons = [Home, WalletCards, Banknote, ReceiptText, Landmark, Train] as const;

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
  return (
    <div className={cn(fullWidth ? "w-full max-w-none" : "max-w-3xl")}>
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? (
        <div
          className={cn(
            "mt-3 w-full space-y-3 text-base leading-relaxed",
            fullWidth && "max-w-none lg:columns-2 lg:gap-x-10 [&>p]:break-inside-avoid",
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
      <div className={cn("absolute inset-x-0 top-0 z-10 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <Image src={page.hero.image.src} alt={page.hero.image.alt} width={1600} height={900} priority sizes="(min-width: 1024px) 42vw, 100vw" className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-white/10" aria-hidden />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" aria-hidden />
    </figure>
  );
}

function VisualFigure({ visual }: { visual: (typeof page.visuals)[keyof typeof page.visuals] }) {
  return (
    <figure className={cn("relative isolate overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white/95 shadow-expatos-xl ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-200/25 blur-3xl" aria-hidden />
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 via-white to-copilot-bg-soft p-2 sm:p-3">
        <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1024px) 900px, 100vw" className="object-contain p-2 sm:p-3 drop-shadow-sm" />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">{visual.caption}</figcaption>
    </figure>
  );
}

function StatCard({ label, value, iconIndex }: { label: string; value: string; iconIndex: number }) {
  const Icon = snapshotIcons[iconIndex % snapshotIcons.length];
  return (
    <article className={cn(mutedCardClass, "min-h-full")}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-foreground-muted">{label}</p>
          <p className="mt-1 text-base font-bold leading-snug text-foreground">{value}</p>
        </div>
      </div>
    </article>
  );
}

function FeatureCard({ title, body, iconIndex = 0 }: { title: string; body: string; iconIndex?: number }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  return (
    <article className={cn(mutedCardClass, "min-h-full")}>
      <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <div className="flex gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
        </div>
      </div>
    </article>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: BuyVsRentNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = cardIcons[iconIndex % cardIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10" : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5", movingNlCardMicroLiftClass);
  const body = (
    <>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", isLive ? movingNlSignatureGradientClass : onDark ? "bg-white/20" : "bg-slate-200")} aria-hidden />
      <div className="flex gap-3">
        <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm ring-1", onDark ? "bg-white/10 text-cyan-100 ring-white/15" : isLive ? "bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong ring-copilot-primary/10" : "bg-slate-100 text-slate-500 ring-slate-200")}>
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
  return <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas", !onDark && movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>{body}</Link>;
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

function ExampleTable({ title, columns, rows }: { title: string; columns: readonly string[]; rows: readonly Record<string, string>[] }) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <div className="border-b border-slate-200/80 px-5 py-4">
        <h3 className="text-base font-bold tracking-tight text-foreground">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/80 bg-slate-50/80">
              {columns.map((column) => <th key={column} scope="col" className="px-4 py-3 font-bold text-foreground">{column}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${title}-${rowIndex}`} className="border-b border-slate-100 last:border-0">
                {columns.map((column) => <td key={column} className="px-4 py-3 leading-relaxed text-foreground-muted">{row[column]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CityCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {page.cityCards.map((city) => (
        <Link key={city.label} href={city.href} className={cn("group relative block overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
          <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-bold tracking-tight text-foreground">{city.label}</h3>
              <p className="mt-1 text-sm text-foreground-muted">{city.affordability}</p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
          </div>
          <dl className="mt-4 grid gap-2 text-sm">
            <div className="flex justify-between gap-3 border-t border-slate-100 pt-2"><dt className="text-foreground-muted">Rental pressure</dt><dd className="text-right font-medium text-foreground">{city.rentalPressure}</dd></div>
            <div className="flex justify-between gap-3 border-t border-slate-100 pt-2"><dt className="text-foreground-muted">Buying competition</dt><dd className="text-right font-medium text-foreground">{city.buyingCompetition}</dd></div>
            <div className="border-t border-slate-100 pt-2 text-foreground-muted">{city.commuteNote}</div>
          </dl>
          <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">Open city guide <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
        </Link>
      ))}
    </div>
  );
}

function SourcesSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {page.officialSources.map((source) => (
        <a key={source.href} href={source.href} className={cn("group relative block overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-sm ring-1 ring-slate-900/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)} target="_blank" rel="noreferrer">
          <div className={cn("absolute inset-x-0 top-0 h-1 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-copilot-bg-soft to-white text-brand-strong shadow-sm ring-1 ring-copilot-primary/10"><ShieldCheck className="h-5 w-5" aria-hidden /></span>
            <span><span className="text-sm font-bold text-foreground">{source.label}</span><span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span><span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link group-hover:text-link-hover">Open official source <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span></span>
          </div>
        </a>
      ))}
    </div>
  );
}

const crumbs = [
  { name: "Home", item: "/" },
  { name: "Netherlands", item: "/netherlands/" },
  { name: "Housing", item: page.relatedGuides[0].href },
  { name: page.hero.pageTitle, item: page.path },
];

export function BuyVsRentNetherlandsView() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main className={sitePageCanvasClass}>
        <Container className={cn("w-full max-w-screen-2xl", siteGuideColumnPadYClass)}>
          <section className={cn(siteHeroFramedShellClass, "overflow-hidden p-6 shadow-expatos-xl sm:p-8 lg:p-12")}>
            <div className={siteHeroTopAccentClass} aria-hidden />
            <div className={siteHeroGlowPrimaryClass} aria-hidden />
            <div className={siteHeroGlowSecondaryClass} aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_0.78fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-strong">{page.hero.eyebrow}</p>
                <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{page.hero.pageTitle}</h1>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground-muted sm:text-xl">{page.hero.subtitle}</p>
                <div className="mt-6 flex flex-wrap gap-2">{page.hero.chips.map((chip) => <span key={chip} className={cn(CITIES_FUNNEL_INFO_CHIP, "shadow-sm ring-1 ring-slate-900/[0.03]")}>{chip}</span>)}</div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href={page.hero.primaryCta.href} className={primaryCtaClass}>{page.hero.primaryCta.label}<ArrowRight className="h-4 w-4" aria-hidden /></Link>
                  <Link href={page.hero.secondaryCta.href} className={secondaryCtaClass}>{page.hero.secondaryCta.label}</Link>
                </div>
                <p className="mt-5 max-w-3xl rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm leading-relaxed text-foreground-muted shadow-sm ring-1 ring-slate-900/[0.03]">Balanced orientation only. This page is not investment advice, mortgage advice or financial planning advice.</p>
              </div>
              <HeroImage />
            </div>
          </section>

          <nav className="sticky top-3 z-20 mt-6 flex gap-2 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/88 p-2 shadow-card ring-1 ring-slate-900/[0.03] backdrop-blur-xl" aria-label="Buy versus rent guide sections">
            {page.sectionNav.map((item) => <a key={item.href} href={item.href} className={cn("shrink-0 rounded-xl px-3 py-2 text-sm font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", transitionInteractive, activeBrightnessPress)}>{item.label}</a>)}
          </nav>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="Decision frame" title="Should Expats Buy or Rent in the Netherlands?" fullWidth>{page.introPoints.map((point) => <p key={point}>{point}</p>)}</SectionIntro>
                <VisualFigure visual={page.visuals.checklist} />
              </div>
            </section>

            <section id="snapshot" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="At a glance" title="Buying vs Renting at a Glance" />
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{page.snapshotCards.map((card, index) => <StatCard key={card.label} label={card.label} value={card.value} iconIndex={index} />)}</div>
                </div>
              </div>
              <div className="mt-6"><ExampleTable title="Stay-horizon decision examples" columns={["Horizon", "Likely bias", "Reason"]} rows={page.stayHorizonExamples.map((row) => ({ Horizon: row.horizon, "Likely bias": row.likelyBias, Reason: row.reason }))} /></div>
              <div className="mt-6"><ExampleTable title="What if you leave the Netherlands?" columns={["Scenario", "Rental exit", "Owner exit", "Decision use"]} rows={page.exitRiskExamples.map((row) => ({ Scenario: row.scenario, "Rental exit": row.rentalExit, "Owner exit": row.ownerExit, "Decision use": row.decisionUse }))} /></div>
            </section>

            <section id="buying" className={sectionClass}>
              <SectionIntro eyebrow="Buying signals" title="When Buying May Make Sense"><p>Buying may become more attractive after several years in the Netherlands, especially when work, city preference and household plans are settled.</p></SectionIntro>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <BulletPanel title="Buying may fit when..." items={page.buyReasons} />
                <BulletPanel title="Useful checks before you buy" items={page.buyingDecisionChecks} />
              </div>
            </section>

            <section id="renting" className={sectionClass}>
              <SectionIntro eyebrow="Renting signals" title="When Renting May Make Sense"><p>Many expats intentionally rent first while they learn cities, commute patterns, contract stability and family needs.</p></SectionIntro>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <BulletPanel title="Renting may fit when..." items={page.rentReasons} />
                <BulletPanel title="Use renting as a decision window" items={page.rentingDecisionChecks} />
              </div>
            </section>

            <section id="financial" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="Costs" title="Financial Differences Between Buying and Renting"><p>Compare monthly payments, upfront costs, taxes, maintenance, VvE and exit risk together. Costs differ significantly by city and market conditions.</p></SectionIntro>
                <VisualFigure visual={page.visuals.financial} />
              </div>
              <p className="mt-6 rounded-2xl border border-amber-200/70 bg-amber-50/80 px-4 py-3 text-sm leading-relaxed text-amber-950 shadow-sm">
                These examples are illustrative planning ranges, not mortgage quotes, rent forecasts or financial advice. Replace them with current listings, lender estimates and your own household costs.
              </p>
              <div className="mt-6"><ExampleTable title="Monthly budget scenarios" columns={["Profile", "Renting monthly", "Buying monthly", "Useful takeaway"]} rows={page.monthlyBudgetScenarios.map((row) => ({ Profile: row.profile, "Renting monthly": row.rentingMonthly, "Buying monthly": row.buyingMonthly, "Useful takeaway": row.usefulTakeaway }))} /></div>
              <div className="mt-6"><ExampleTable title="Buying vs renting cost shape" columns={["Cost area", "Buying example", "Renting example", "Decision point"]} rows={page.financialComparisonRows.map((row) => ({ "Cost area": row.costArea, "Buying example": row.buyingExample, "Renting example": row.rentingExample, "Decision point": row.decisionPoint }))} /></div>
            </section>

            <section id="upfront" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="Cash before move-in" title="Upfront Costs of Buying vs Renting"><p>Buying generally requires higher upfront spending. Renting usually has lower upfront cash needs, but deposits and furnishing can still be meaningful.</p></SectionIntro>
                <VisualFigure visual={page.visuals.upfrontCosts} />
              </div>
              <div className="mt-6"><ExampleTable title="Upfront cash examples" columns={["Scenario", "Deposit or tax", "Other costs", "Initial cash need"]} rows={page.upfrontCostExamples.map((row) => ({ Scenario: row.scenario, "Deposit or tax": row.depositOrTax, "Other costs": row.otherCosts, "Initial cash need": row.initialCashNeed }))} /></div>
              <div className="mt-6"><ExampleTable title="Cash buffer examples" columns={["Situation", "Cash before keys", "Buffer after move", "Why it matters"]} rows={page.cashBufferExamples.map((row) => ({ Situation: row.situation, "Cash before keys": row.cashBeforeKeys, "Buffer after move": row.bufferAfterMove, "Why it matters": row.whyItMatters }))} /></div>
            </section>

            <section id="flexibility" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="Lifestyle tradeoff" title="Flexibility vs Long-Term Stability"><p>Renting usually offers easier relocation and lower commitment. Buying can offer permanence, housing security and more personal control.</p></SectionIntro>
                <VisualFigure visual={page.visuals.flexibility} />
              </div>
              <div className="mt-6"><BulletPanel title="How to use this tradeoff" items={page.flexibilityPlanningTips} /></div>
            </section>

            <section id="market" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="Market reality" title="The Reality of the Dutch Housing Market"><p>Both buyers and renters face challenges. The goal is not to pick a side, but to understand where your risks sit.</p></SectionIntro>
                <VisualFigure visual={page.visuals.marketReality} />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{page.marketRealityCards.map((card, index) => <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />)}</div>
            </section>

            <section id="cities" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="City choice" title="How the Decision Changes by City"><p>Affordability, rental pressure, buying competitiveness and commute patterns can move the decision dramatically.</p></SectionIntro>
                <VisualFigure visual={page.visuals.cities} />
              </div>
              <div className="mt-6"><ExampleTable title="City market examples" columns={["City type", "Rent example", "Buying example", "Practical use"]} rows={page.cityScenarioExamples.map((row) => ({ "City type": row.cityType, "Rent example": row.rentExample, "Buying example": row.buyingExample, "Practical use": row.practicalUse }))} /></div>
              <div className="mt-6"><CityCards /></div>
            </section>

            <section id="hsm" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="Highly skilled migrants" title="What Highly Skilled Migrants Should Consider"><p>Many highly skilled migrants rent first, then buy after visa stability, salary growth and long-term plans become clearer.</p></SectionIntro>
                <VisualFigure visual={page.visuals.hsmReadiness} />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{page.hsmConsiderations.map((card, index) => <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />)}</div>
            </section>

            <section id="investment" className={sectionClass}>
              <SectionIntro eyebrow="Lifestyle vs investment" title="Buying for Lifestyle vs Investment"><p>Many expats buy primarily for stability, lifestyle and long-term living. Property markets can rise and fall, so avoid treating purchase decisions as guaranteed investment outcomes.</p></SectionIntro>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <BulletPanel title="Keep these separate" items={page.lifestyleInvestmentPoints} />
                <BulletPanel title="Useful reality checks" items={page.lifestyleInvestmentChecks} />
              </div>
            </section>

            <section id="checklist" className={sectionClass}>
              <div className="space-y-6">
                <div>
                  <SectionIntro eyebrow="Self-assessment" title="Quick Self-Assessment Checklist" />
                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{page.checklistCards.map((item, index) => <FeatureCard key={item.q} title={item.q} body={`Buy signal: ${item.buySignal}. Rent signal: ${item.rentSignal}.`} iconIndex={index} />)}</div>
                </div>
                <VisualFigure visual={page.visuals.checklist} />
              </div>
              <div className="mt-6"><ExampleTable title="Decision scenario examples" columns={["Profile", "Signals", "Likely next step"]} rows={page.selfAssessmentScenarios.map((row) => ({ Profile: row.profile, Signals: row.signals, "Likely next step": row.likelyNextStep }))} /></div>
            </section>

            <section id="mistakes" className={sectionClass}>
              <div className="space-y-6">
                <SectionIntro eyebrow="Avoidable mistakes" title="Common Expat Housing Mistakes" />
                <VisualFigure visual={page.visuals.mistakes} />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{page.mistakeCards.map((card, index) => <FeatureCard key={card.title} title={card.title} body={card.body} iconIndex={index} />)}</div>
            </section>

            <section id="questions" className={sectionClass}>
              <SectionIntro eyebrow="Common questions" title="Questions Expats Often Ask" />
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{page.expatQuestions.map((item, index) => <FeatureCard key={item.q} title={item.q} body={item.a} iconIndex={index} />)}</div>
              <div className="mt-6"><BulletPanel title="Turn questions into next steps" items={page.questionUseTips} /></div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <SectionIntro eyebrow="Internal planning hub" title="Related Housing Guides" />
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{page.relatedGuides.map((link, index) => <LinkCard key={link.href} item={link} iconIndex={index} />)}</div>
              <div className="mt-6"><BulletPanel title="Recommended reading order" items={page.relatedGuideUseTips} /></div>
            </section>

            <section id="services" className={sectionClass}>
              <SectionIntro eyebrow="Professional help" title="Professional Services That May Help"><p>Professionals can help translate a broad buy-versus-rent decision into a property search, mortgage estimate, rental search or relocation plan.</p></SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{page.services.map((link, index) => <LinkCard key={link.href} item={link} iconIndex={index} />)}</div>
              <div className="mt-6"><BulletPanel title="Choose the right professional for the question" items={page.serviceSelectionTips} /></div>
            </section>

            <section id="faq" className={sectionClass}>
              <SectionIntro eyebrow="FAQ" title="Frequently Asked Questions" />
              <div className="mt-6 grid gap-4 md:grid-cols-2">{page.faq.map((item, index) => <FeatureCard key={item.q} title={item.q} body={item.a} iconIndex={index} />)}</div>
              <div className="mt-6"><BulletPanel title="How to use the FAQ safely" items={page.faqUseTips} /></div>
            </section>

            <section id="sources" className={sectionClass}>
              <SectionIntro eyebrow="Official sources" title="Official Sources"><p>{page.sourcesDisclaimer}</p></SectionIntro>
              <div className="mt-6"><SourcesSection /></div>
              <div className="mt-6"><BulletPanel title="Where to verify what" items={page.sourceVerificationTips} /></div>
            </section>

            <section className={cn("relative isolate overflow-hidden rounded-[2rem] bg-slate-950 p-6 shadow-expatos-xl ring-1 ring-white/10 sm:p-8 lg:p-10")}>
              <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" aria-hidden />
              <SectionIntro eyebrow="Explore next" title="Continue Your Housing Decision" tone="onDark"><p>Move from the decision frame into buying, mortgages, renting, costs and city comparison.</p></SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">{page.exploreNextCards.map((link, index) => <LinkCard key={link.href} item={link} iconIndex={index} tone="onDark" />)}</div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
