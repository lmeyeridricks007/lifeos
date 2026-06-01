import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  Landmark,
  PiggyBank,
  ReceiptText,
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
  EMPLOYMENT_TYPE_SCENARIO_TOOL_PATH,
  PAYSLIP_DECODER_PATH,
  payrollTaxNetherlandsPage as page,
  TAXES_TOOLS_HUB_PATH,
  THIRTY_PERCENT_RULING_CALCULATOR_PATH,
  type PayrollTaxNetherlandsLink,
} from "./payrollTaxNetherlandsPageModel";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass);
const linkIcons = [Calculator, ReceiptText, BadgePercent, FileText, BriefcaseBusiness, ShieldCheck, PiggyBank, Globe2] as const;
const snapshotIcons = [ReceiptText, Landmark, BriefcaseBusiness, WalletCards, ShieldCheck, Calculator] as const;
const stepIcons = [FileText, ReceiptText, Landmark, WalletCards] as const;
const componentIcons = [Landmark, ShieldCheck, BriefcaseBusiness, ClipboardCheck] as const;
const questionIcons = [Calculator, ReceiptText, BadgePercent, ClipboardCheck, PiggyBank, ShieldCheck, Globe2, BriefcaseBusiness] as const;

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
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  tone?: "default" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={cn("text-xs font-bold uppercase tracking-[0.14em]", onDark ? "text-cyan-200" : "text-brand-strong")}>{eyebrow}</p> : null}
      <h2 className={cn(onDark ? movingNlSectionH2OnDarkClass : movingNlSectionH2Class, eyebrow ? "mt-2" : undefined)}>{title}</h2>
      {children ? <div className={cn("mt-3 space-y-3 text-base leading-relaxed", onDark ? "text-slate-300" : "text-foreground-muted")}>{children}</div> : null}
    </div>
  );
}

function HeroImage() {
  return (
    <figure className={citiesFunnelHeroFigureClassName()}>
      <Image
        src={page.hero.image.src}
        alt={page.hero.image.alt}
        width={1600}
        height={900}
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="h-full w-full object-cover"
      />
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
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">
        {visual.caption}
      </figcaption>
    </figure>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: PayrollTaxNetherlandsLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = linkIcons[iconIndex % linkIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative overflow-hidden p-5");
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
      <span className={cn("mt-4 inline-flex items-center gap-1 text-xs font-semibold", onDark ? "text-cyan-100" : isLive ? "text-link group-hover:text-link-hover" : "text-slate-500")}>
        {isLive ? "Open" : "Planned"} <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </span>
    </>
  );

  if (!isLive) return <article className={cn(shell, "opacity-90")}>{body}</article>;
  return (
    <Link href={item.href} className={cn(shell, "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", onDark ? "focus-visible:ring-offset-slate-950" : "focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}>
      {body}
    </Link>
  );
}

function ProcessPanel({ eyebrow, title, rows, note }: { eyebrow: string; title: string; rows: Array<{ label: string; body: string; Icon: LucideIcon }>; note?: string }) {
  return (
    <aside className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "relative p-5 sm:p-6", movingNlCardMicroLiftClass)}>
      <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">{title}</h3>
      <div className="mt-5 grid gap-3">
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

function ConceptFlow() {
  const icons = [BriefcaseBusiness, ReceiptText, WalletCards] as const;
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-3">
      {page.conceptCards.map((card, index) => {
        const Icon = icons[index] ?? Calculator;
        return (
          <article key={card.title} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <Icon className="h-6 w-6 text-brand-strong" aria-hidden />
            <h3 className="mt-3 text-base font-bold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function CalculatorCtaPanel() {
  return (
    <aside className="relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="relative flex flex-1 flex-col">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">What you can estimate</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Calculator outputs to expect</h3>
        <ul className="mt-5 space-y-3">
          {page.calculatorOutputs.map((output) => (
            <li key={output} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
              <Calculator className="mt-0.5 h-5 w-5 shrink-0 text-cyan-100" aria-hidden />
              <span className="text-sm leading-relaxed text-slate-300">{output}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto border-t border-white/10 pt-6">
          <p className="text-sm font-semibold text-white">Use the dedicated salary calculator tool</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            This guide explains payroll tax and loonheffing. For side-by-side offer comparison, open the standalone Dutch salary net calculator.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href={page.calculatorToolCta.primaryCta.href}
              className={cn(primaryCtaClass, "w-full border-white/20 bg-white text-slate-950 hover:bg-slate-100")}
            >
              {page.calculatorToolCta.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={page.calculatorToolCta.secondaryCta.href}
              className={cn(
                secondaryCtaClass,
                "w-full border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/15"
              )}
            >
              {page.calculatorToolCta.secondaryCta.label}
            </Link>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">{page.calculatorToolCta.disclaimer}</p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5">
            {page.relatedCalculators
              .filter((tool) => tool.href !== page.calculatorToolCta.primaryCta.href)
              .map((tool) => (
                <Link key={tool.href} href={tool.href} className="text-sm font-semibold text-cyan-100 hover:text-white">
                  {tool.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function ServicesVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Provider fit"
      title="Match help to the question"
      rows={[
        { label: "Tax advisors", body: "For tax position, filing and cross-border questions.", Icon: ShieldCheck },
        { label: "Payroll specialists", body: "For employer payroll setup and payslip questions.", Icon: ReceiptText },
        { label: "Relocation services", body: "For salary planning alongside move logistics.", Icon: Globe2 },
      ]}
    />
  );
}

function SnapshotCards() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {page.snapshotCards.map((card, index) => {
        const Icon = snapshotIcons[index % snapshotIcons.length];
        return (
          <article key={card.label} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-brand-strong">{card.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.value}</p>
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function PayrollStepsPanel() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {page.payrollSteps.map((item, index) => {
        const Icon = stepIcons[index % stepIcons.length];
        return (
          <article key={item.step} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">{item.step}</span>
              <span className="min-w-0">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand-strong" aria-hidden />
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function TipsList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((tip) => (
        <li key={tip} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
          <span>{tip}</span>
        </li>
      ))}
    </ul>
  );
}

function SimpleExampleVisual({ className }: { className?: string }) {
  return (
    <aside className={cn("relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6", className)}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Illustrative example</p>
        <h3 className="mt-2 text-2xl font-black tracking-tight">{page.simpleExample.grossMonthly}</h3>
        <p className="mt-1 text-sm text-slate-300">gross monthly salary</p>
        <div className="mt-5 grid gap-3">
          {["Payroll tax (loonheffing)", "Pension", "Social contributions"].map((deduction) => (
            <div key={deduction} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-3 ring-1 ring-white/10">
              <span className="text-sm font-semibold text-white">{deduction}</span>
              <span className="text-xs text-slate-300">varies</span>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-100">Estimated net salary</p>
          <p className="mt-1 text-2xl font-black">{page.simpleExample.estimatedNetRange}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">Illustrative range only. Exact results depend on payroll and personal details.</p>
        </div>
      </div>
    </aside>
  );
}

function DeductionsVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Deduction map"
      title="Group payslip lines before comparing numbers"
      rows={[
        { label: "Tax withholding", body: "Wage tax and related payroll withholding reduce gross pay.", Icon: Landmark },
        { label: "Insurance and pension", body: "Social contributions and pension can sit alongside payroll tax.", Icon: ShieldCheck },
        { label: "Employer setup", body: "Benefits and employer arrangements can change how lines appear.", Icon: BriefcaseBusiness },
      ]}
      note="Do not compare two offers from gross salary alone. Ask what deductions, pension and allowances are included."
    />
  );
}

function QuestionsVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Question triage"
      title="What to clarify first"
      rows={[
        { label: "Offer wording", body: "Find out if salary is annual or monthly and whether holiday allowance is included.", Icon: FileText },
        { label: "Payroll terms", body: "Use payslip terms like bruto loon and loonheffing to understand deductions.", Icon: ReceiptText },
        { label: "Scenario assumptions", body: "Keep pension, 30% ruling and calculator assumptions separate.", Icon: Calculator },
      ]}
    />
  );
}

function RelatedGuidesVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Next-step map"
      title="Turn payroll clarity into action"
      rows={[
        { label: "Calculate", body: "Use the net salary calculator once you know the offer structure.", Icon: Calculator },
        { label: "Check taxes", body: "Use expat tax and 30% ruling guides for personal context.", Icon: BadgePercent },
        { label: "Set up payments", body: "Use banking and moving guides before payroll starts.", Icon: WalletCards },
      ]}
    />
  );
}

function MockPayslipVisual() {
  return (
    <aside className={cn("overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-lg ring-1 ring-slate-900/[0.05]", movingNlCardMicroLiftClass)}>
      <div className={cn("h-1.5", movingNlSignatureGradientClass)} aria-hidden />
      <div className="p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Simplified payslip visual</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">Dutch salary terms to recognize</h3>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200/90">
          {page.payslipItems.map((item, index) => (
            <div key={item.label} className={cn("grid gap-2 px-4 py-3 sm:grid-cols-[140px_1fr_auto]", index % 2 === 0 ? "bg-slate-50/80" : "bg-white")}>
              <span className="text-sm font-bold text-foreground">{item.label}</span>
              <span className="text-sm leading-relaxed text-foreground-muted">{item.value}</span>
              <span className="text-sm font-semibold text-brand-strong sm:text-right">{item.example}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-foreground-muted">* Illustrative net range only. Your payslip depends on payroll setup and personal circumstances.</p>
        <Link href={PAYSLIP_DECODER_PATH} className={cn(primaryCtaClass, "mt-4 w-full")}>
          Open payslip decoder
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </aside>
  );
}

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group relative overflow-hidden block p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
      <span className="text-sm font-bold text-foreground group-hover:text-link">{source.label}</span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">Open source <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
    </a>
  );
}

export function PayrollTaxNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL("/netherlands/taxes/", baseUrl).toString() },
    { name: "Payroll Tax", item: new URL(page.path, baseUrl).toString() },
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
                    <Link href="/netherlands/taxes/" className="hover:text-foreground">Taxes</Link><span aria-hidden>/</span>
                    <span className="text-foreground" aria-current="page">Payroll tax</span>
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
            <nav aria-label="Payroll tax guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="What Is Payroll Tax in the Netherlands?">
                    <p>In the Netherlands, employers usually deduct payroll taxes directly from employee salaries before payment.</p>
                    <p>This means employees receive net salary after deductions, employers handle much of the tax withholding process, and payroll tax is an important part of the Dutch tax system.</p>
                    <p>Many expats first encounter payroll tax when receiving their first Dutch payslip, a salary offer or their first net salary payment.</p>
                    <p>
                      To model take-home pay from an offer, start with the{" "}
                      <Link href={page.calculatorToolCta.primaryCta.href} className="font-semibold text-link hover:text-link-hover">
                        Dutch salary net calculator
                      </Link>.
                    </p>
                  </SectionIntro>
                  <ConceptFlow />
                </div>
                <ProcessPanel
                  eyebrow="First payslip moment"
                  title="Why this page exists"
                  rows={[
                    { label: "Offer vs bank transfer", body: "The contract number is usually gross, not what reaches your account.", Icon: BriefcaseBusiness },
                    { label: "Loonheffing", body: "Payroll tax withholding is the main reason net salary is lower.", Icon: ReceiptText },
                    { label: "Employer role", body: "Your employer calculates and remits payroll tax through payroll.", Icon: Landmark },
                  ]}
                />
              </div>
              <VisualFigure visual={page.infographics.deductionFlow} className="mt-7 hidden lg:block" />
            </section>

            <section id="at-a-glance" className={sectionClass}>
              <SectionIntro title="Payroll Tax at a Glance">
                <p>Use these snapshot cards as a quick reference before reading payslip lines or comparing offers.</p>
              </SectionIntro>
              <SnapshotCards />
            </section>

            <section id="included" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="What Does Dutch Payroll Tax Include?">
                    <p>Belastingdienst explains that payroll taxes may include wage tax, national insurance contributions, employee insurance contributions and health-insurance-related contributions.</p>
                    <p>These categories are grouped under loonheffing in everyday payroll language. The exact mix depends on payroll setup and personal circumstances.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.payrollComponents.map((component, index) => {
                      const Icon = componentIcons[index % componentIcons.length];
                      return (
                        <article key={component.title} className={mutedCardClass}>
                          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                          <Icon className="h-6 w-6 text-brand-strong" aria-hidden />
                          <h3 className="mt-3 text-base font-bold text-foreground">{component.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{component.body}</p>
                        </article>
                      );
                    })}
                  </div>
                  <VisualFigure visual={page.infographics.components} className="mt-6" />
                </div>
                <ProcessPanel
                  eyebrow="Component map"
                  title="Read the categories before the numbers"
                  rows={[
                    { label: "Wage tax", body: "Advance withholding toward income tax.", Icon: Landmark },
                    { label: "Social contributions", body: "National and employee insurance items may appear in payroll.", Icon: ShieldCheck },
                    { label: "Health-related items", body: "Health obligations can sit within the payroll tax picture.", Icon: ClipboardCheck },
                  ]}
                  note="This page explains categories, not exact rates or personal tax advice."
                />
              </div>
            </section>

            <section id="how-it-works" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="How Payroll Tax Is Deducted">
                    <p>Typically, the employer calculates gross salary, applies payroll deductions, withholds tax and contributions, and pays net salary to the employee.</p>
                    <p>Employers send payroll tax payments to the Dutch tax authority (Belastingdienst). Employees usually do not pay this part directly.</p>
                  </SectionIntro>
                  <PayrollStepsPanel />
                  <VisualFigure visual={page.infographics.deductionFlow} className="mt-6" />
                </div>
                <ProcessPanel
                  eyebrow="Payroll rhythm"
                  title="What happens each pay cycle"
                  rows={[
                    { label: "Gross calculated", body: "Contract salary is the starting point.", Icon: FileText },
                    { label: "Deductions processed", body: "Loonheffing and related items are withheld.", Icon: ReceiptText },
                    { label: "Net paid out", body: "The remainder reaches your bank account.", Icon: WalletCards },
                  ]}
                />
              </div>
            </section>

            <section id="deductions" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)] lg:items-start">
                <div>
                  <SectionIntro title="Salary Deductions Explained">
                    <p>Payroll tax is the umbrella term for the tax and contribution package withheld through employer payroll. Pension and other employer-specific items may appear separately on a payslip but still reduce take-home pay.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.deductionItems.map((item, index) => {
                      const Icon = componentIcons[index % componentIcons.length];
                      return (
                        <article key={item.title} className={mutedCardClass}>
                          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                          <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
                          <h3 className="mt-3 text-sm font-bold text-foreground">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                        </article>
                      );
                    })}
                  </div>
                  <VisualFigure visual={page.infographics.grossToNetExample} className="mt-6 lg:hidden" />
                </div>
                <DeductionsVisualPanel />
              </div>
              <VisualFigure visual={page.infographics.grossToNetExample} className="mt-7 hidden lg:block" />
            </section>

            <section id="gross-vs-net" className={sectionClass}>
              <SectionIntro title="Why Net Salary Is Lower Than Gross Salary">
                <p>Gross salary is the amount before deductions. Net salary is what remains after payroll tax and other payroll items are processed.</p>
                <p>
                  For a deeper walkthrough, see the{" "}
                  <Link href="/netherlands/taxes/gross-vs-net-salary/" className="font-semibold text-link hover:text-link-hover">Gross vs Net Salary guide</Link>
                  {" "}and the{" "}
                  <Link href="/netherlands/taxes/net-salary-netherlands/" className="font-semibold text-link hover:text-link-hover">Net Salary in the Netherlands guide</Link>.
                </p>
              </SectionIntro>

              <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch">
                <div className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <article className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <BriefcaseBusiness className="h-6 w-6 text-brand-strong" aria-hidden />
                      <h3 className="mt-3 text-base font-bold text-foreground">Gross salary</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">The contract or offer amount before payroll deductions (bruto loon on payslips).</p>
                    </article>
                    <article className={mutedCardClass}>
                      <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                      <WalletCards className="h-6 w-6 text-brand-strong" aria-hidden />
                      <h3 className="mt-3 text-base font-bold text-foreground">Net salary</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">The amount paid into your bank account after payroll processing (netto loon).</p>
                    </article>
                  </div>
                  <div className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "flex flex-1 flex-col p-5 sm:p-6", movingNlCardMicroLiftClass)}>
                    <div className={cn("absolute inset-x-0 top-0 h-1.5 rounded-t-2xl", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Planning tip</p>
                    <h3 className="mt-2 text-lg font-bold text-foreground">Compare offers on net pay, not headline gross</h3>
                    <TipsList items={page.grossVsNetTips} />
                    <Link
                      href={page.calculatorToolCta.primaryCta.href}
                      className={cn(primaryCtaClass, "mt-5 w-full sm:w-auto")}
                    >
                      {page.calculatorToolCta.primaryCta.label}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
                <SimpleExampleVisual />
              </div>

              <VisualFigure visual={page.infographics.grossToNetExample} className="mt-6" />

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {[
                  { label: "Gross", body: "The offer number before payroll deductions.", Icon: BriefcaseBusiness },
                  { label: "Loonheffing", body: "Payroll tax withheld through employer payroll.", Icon: ReceiptText },
                  { label: "Net", body: "The amount you can plan your monthly budget around.", Icon: WalletCards },
                ].map(({ label, body, Icon }, index) => (
                  <div
                    key={label}
                    className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{index + 1}. {label}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-foreground-muted">{body}</span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">{page.simpleExample.note}</p>
            </section>

            <section id="payslip" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Understanding a Dutch Payslip">
                    <p>Dutch payslips use terms that can feel unfamiliar at first. Recognizing the main labels helps you connect payroll tax to take-home pay.</p>
                    <p>Start with <strong>bruto loon</strong> (gross), follow <strong>loonheffing</strong> (payroll tax) and other deductions, then read <strong>netto loon</strong> (what reaches your account).</p>
                    <p>
                      Paste a real loonstrook into the{" "}
                      <Link href={PAYSLIP_DECODER_PATH} className="font-semibold text-link hover:text-link-hover">
                        Dutch payslip decoder
                      </Link>{" "}
                      for line-by-line explanations.
                    </p>
                  </SectionIntro>
                  <VisualFigure visual={page.infographics.payslipAnatomy} className="mt-6" />
                </div>
                <MockPayslipVisual />
              </div>
            </section>

            <section id="expats" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Payroll Tax for Expats and International Employees">
                    <p>Expats often encounter different salary structures, relocation packages, 30% ruling considerations and international payroll setups.</p>
                    <p>Most expats employed by Dutch companies will have payroll taxes withheld automatically through employer payroll.</p>
                    <p>
                      For broader context, see the{" "}
                      <Link href="/netherlands/taxes/expat-taxes-netherlands/" className="font-semibold text-link hover:text-link-hover">Expat Taxes guide</Link>.
                    </p>
                  </SectionIntro>
                  <ul className="mt-6 space-y-3">
                    {page.expatPoints.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-strong" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <VisualFigure visual={page.infographics.expatChecklist} className="mt-6 lg:hidden" />
                </div>
                <div className="grid gap-6">
                  <ProcessPanel
                    eyebrow="Expat checklist"
                    title="Clarify before comparing offers"
                    rows={[
                      { label: "Employer setup", body: "Confirm whether payroll is handled in the Netherlands.", Icon: BriefcaseBusiness },
                      { label: "Package structure", body: "Check relocation, allowance and benefit treatment.", Icon: FileText },
                      { label: "Ruling status", body: "Do not assume 30% ruling eligibility without confirmation.", Icon: BadgePercent },
                    ]}
                  />
                  <VisualFigure visual={page.infographics.expatChecklist} className="hidden lg:block" />
                </div>
              </div>
            </section>

            <section id="thirty-ruling" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="How the 30% Ruling Affects Payroll">
                    <p>If eligible for the Dutch expat scheme (30% ruling), part of salary may be paid tax-free and payroll calculations may differ. Net salary may increase compared with a non-ruling scenario.</p>
                    <p>Eligibility is not automatic and exact savings depend on personal circumstances, employer setup and official rules.</p>
                    <p>
                      Read the{" "}
                      <Link href="/netherlands/taxes/30-percent-ruling/" className="font-semibold text-link hover:text-link-hover">30% Ruling guide</Link>
                      {" "}for eligibility framing, then use the{" "}
                      <Link href={THIRTY_PERCENT_RULING_CALCULATOR_PATH} className="font-semibold text-link hover:text-link-hover">30% ruling calculator</Link>
                      {" "}and{" "}
                      <Link href={page.calculatorToolCta.primaryCta.href} className="font-semibold text-link hover:text-link-hover">salary net calculator</Link>
                      {" "}to compare scenarios.
                    </p>
                  </SectionIntro>
                  <VisualFigure visual={page.infographics.grossToNetExample} className="mt-6 lg:hidden" />
                </div>
                <ProcessPanel
                  eyebrow="Ruling lens"
                  title="Payroll impact without guarantees"
                  rows={[
                    { label: "Eligibility first", body: "Confirm whether the scheme applies before modeling savings.", Icon: ShieldCheck },
                    { label: "Employer application", body: "Payroll must apply the ruling correctly through employer setup.", Icon: BriefcaseBusiness },
                    { label: "Compare scenarios", body: "Use the salary calculator with and without ruling assumptions.", Icon: Calculator },
                  ]}
                  note="This page does not guarantee eligibility or exact savings."
                />
              </div>
              <VisualFigure visual={page.infographics.expatChecklist} className="mt-7" />
            </section>

            <section id="payroll-vs-income" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Payroll Tax vs Income Tax">
                    <p>Payroll tax is withheld during the year through employer payroll. Income tax is settled through the final yearly tax assessment.</p>
                    <p>Many employees still file annual tax returns even though payroll tax is deducted throughout the year.</p>
                    <p>
                      Related guides:{" "}
                      <Link href="/netherlands/taxes/income-tax-netherlands/" className="font-semibold text-link hover:text-link-hover">Income Tax</Link>
                      {" "}(coming soon) and{" "}
                      <Link href="/netherlands/money/tax-return-netherlands/" className="font-semibold text-link hover:text-link-hover">Tax Return Netherlands</Link>.
                    </p>
                  </SectionIntro>
                  <VisualFigure visual={page.infographics.payrollVsIncomeTax} className="mt-6" />
                </div>
                <ProcessPanel
                  eyebrow="Two-step model"
                  title="Withholding now, assessment later"
                  rows={[
                    { label: "Payroll tax", body: "Withheld monthly through employer payroll.", Icon: ReceiptText },
                    { label: "Income tax", body: "Settled through annual assessment and return.", Icon: Landmark },
                    { label: "Possible refund", body: "Too much withholding may lead to a refund after filing.", Icon: PiggyBank },
                  ]}
                />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Questions Expats Often Have About Payroll Tax">
                    <p>Most payroll confusion comes from mixing contract wording, payslip terms and personal assumptions. Use these questions as a checklist.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {page.expatQuestions.map((item, index) => {
                      const Icon = questionIcons[index % questionIcons.length];
                      return (
                        <article key={item.q} className={mutedCardClass}>
                          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                          <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
                          <h3 className="mt-3 text-sm font-bold leading-relaxed text-foreground">{item.q}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
                        </article>
                      );
                    })}
                  </div>
                </div>
                <QuestionsVisualPanel />
              </div>
            </section>

            <section id="freelancers" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Do Freelancers Pay Payroll Tax?">
                    <p>Freelancers and ZZP&apos;ers usually handle taxes differently from employees. Instead of payroll withholding, freelancers generally manage VAT, pay income tax directly and handle bookkeeping.</p>
                    <p>
                      See the{" "}
                      <Link href="/netherlands/taxes/freelancer-zzp-taxes/" className="font-semibold text-link hover:text-link-hover">Freelancers &amp; ZZP Taxes guide</Link>
                      {" "}(coming soon) and compare structures with the{" "}
                      <Link href={EMPLOYMENT_TYPE_SCENARIO_TOOL_PATH} className="font-semibold text-link hover:text-link-hover">employment type scenario tool</Link>.
                    </p>
                  </SectionIntro>
                  <VisualFigure visual={page.infographics.employeeVsFreelancer} className="mt-6" />
                </div>
                <ProcessPanel
                  eyebrow="Employee vs freelancer"
                  title="Different tax rhythm"
                  rows={[
                    { label: "Employees", body: "Payroll tax withheld automatically through employer payroll.", Icon: BriefcaseBusiness },
                    { label: "Freelancers", body: "Invoice income, manage VAT and settle income tax separately.", Icon: ReceiptText },
                    { label: "Planning", body: "Set aside tax money as you earn; invoice totals are not spendable income.", Icon: PiggyBank },
                  ]}
                />
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <SectionIntro eyebrow="Calculator" title={page.calculatorToolCta.title}>
                <p>{page.calculatorToolCta.description}</p>
                <p>{page.calculatorToolCta.supportingText}</p>
                <p>
                  Pair calculators with the{" "}
                  <Link href="/netherlands/taxes/net-salary-netherlands/" className="font-semibold text-link hover:text-link-hover">
                    Net Salary guide
                  </Link>{" "}
                  or browse all{" "}
                  <Link href={TAXES_TOOLS_HUB_PATH} className="font-semibold text-link hover:text-link-hover">tax planning tools</Link>.
                </p>
              </SectionIntro>

              <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch">
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Before calculating</p>
                  <h3 className="text-lg font-bold tracking-tight text-foreground">Prepare better inputs</h3>
                  {page.calculatorToolCta.prepItems.map((item, index) => {
                    const Icon = [FileText, ClipboardCheck, BadgePercent][index] ?? FileText;
                    return (
                      <article
                        key={item.label}
                        className={cn(
                          "flex flex-1 gap-4 rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]",
                          movingNlCardMicroLiftClass
                        )}
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span>
                          <h4 className="text-sm font-bold text-foreground">{item.label}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{item.body}</p>
                        </span>
                      </article>
                    );
                  })}
                </div>
                <CalculatorCtaPanel />
              </div>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Related tools</p>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">Calculators for payroll and salary planning</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {page.relatedCalculators.map((item, index) => (
                    <LinkCard key={item.href} item={item} iconIndex={index} />
                  ))}
                </div>
              </div>
            </section>

            <section id="related-topics" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Related Dutch Salary and Tax Guides">
                    <p>Use these pages to move from payroll tax concepts into salary comparison, expat tax context and calculation.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.relatedTaxTopics.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
                  </div>
                </div>
                <RelatedGuidesVisualPanel />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <SectionIntro title="Professional Services That May Help">
                  <p>Most payroll tax questions are concept-level, but cross-border tax, complex compensation packages and employer payroll setup may need professional review.</p>
                </SectionIntro>
                <ServicesVisualPanel />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {page.services.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)]">
                <div>
                  <SectionIntro title="Frequently Asked Questions" />
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {page.faq.map((item) => (
                      <article key={item.q} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{item.q}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <ProcessPanel
                  eyebrow="Rule of thumb"
                  title="Payroll explains withholding, not your full tax story"
                  rows={[
                    { label: "Use payslips", body: "Understand loonheffing and net salary on each payment.", Icon: ReceiptText },
                    { label: "Use calculators", body: "Estimate take-home pay for offer comparison.", Icon: Calculator },
                    { label: "Use official sources", body: "Rates and payroll rules can change over time.", Icon: Landmark },
                  ]}
                />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)]">
                <div>
                  <SectionIntro title="Official Sources">
                    <p>Belastingdienst explains that payroll taxes can include wage tax, national insurance contributions, employee insurance contributions and health-insurance-related contributions. Use official sources for final checks.</p>
                  </SectionIntro>
                  <VisualFigure visual={page.infographics.components} className="mt-6 lg:hidden" />
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.officialSources.map((source) => <SourceLink key={source.href} source={source} />)}
                  </div>
                </div>
                <ProcessPanel
                  eyebrow="Source hierarchy"
                  title="What the sources support"
                  rows={[
                    { label: "Payroll taxes", body: "Belastingdienst explains payroll tax categories.", Icon: ReceiptText },
                    { label: "Wage tax calculations", body: "Official pages explain calculation context.", Icon: Calculator },
                    { label: "Income tax", body: "Annual assessment sits alongside payroll withholding.", Icon: Landmark },
                  ]}
                />
              </div>
              <VisualFigure visual={page.infographics.components} className="mt-7 hidden lg:block" />
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Related Guides">
                    <p>Connect payroll tax understanding to taxes, banking, relocation and the rest of your setup.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.relatedGuides.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
                  </div>
                </div>
                <RelatedGuidesVisualPanel />
              </div>
            </section>

            <section id="explore-next" className="scroll-mt-28 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-8">
              <SectionIntro title="Explore Next" tone="onDark">
                <p>Move from payroll tax concepts into calculation, tax planning and practical setup.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {page.exploreNextCards.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />)}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
