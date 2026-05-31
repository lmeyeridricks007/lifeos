import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
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
import { DutchSalaryNetCalculatorClient } from "@/src/components/tools/dutch-salary-net/DutchSalaryNetCalculatorClient";
import {
  DUTCH_SALARY_NET_CALCULATOR_PATH,
  netSalaryNetherlandsPage as page,
  type NetSalaryGuideLink,
} from "./netSalaryNetherlandsPageModel";

const sectionClass = cn(CITIES_FUNNEL_SECTION_SCROLL_MARGIN, CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-6 sm:p-8");
const sectionStackClass = "mt-6 space-y-6 sm:space-y-8 md:space-y-9";
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
const mutedCardClass = cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5", movingNlCardMicroLiftClass);

const linkIcons = [ReceiptText, BadgePercent, Calculator, FileText, BriefcaseBusiness, ShieldCheck, PiggyBank, Globe2] as const;
const questionIcons = [Calculator, ReceiptText, BadgePercent, ClipboardCheck, PiggyBank, ShieldCheck, Globe2, BriefcaseBusiness] as const;

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
    <figure className={cn("overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-expatos-lg ring-1 ring-slate-900/[0.05]", className)}>
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-contain"
        />
      </div>
      <figcaption className="border-t border-slate-200/80 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-foreground-muted sm:px-5">
        {visual.caption}
      </figcaption>
    </figure>
  );
}

function LinkCard({ item, iconIndex = 0, tone = "default" }: { item: NetSalaryGuideLink; iconIndex?: number; tone?: "default" | "onDark" }) {
  const Icon = linkIcons[iconIndex % linkIcons.length];
  const isLive = item.status !== "comingSoon";
  const onDark = tone === "onDark";
  const shell = onDark
    ? "relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-sm ring-1 ring-white/10"
    : cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5");
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
    <aside className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "p-5 sm:p-6", movingNlCardMicroLiftClass)}>
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

function ConceptStrip() {
  const items = [
    { label: "Gross offer", body: "The number in your contract or recruiter conversation.", Icon: BriefcaseBusiness },
    { label: "Payroll withholding", body: "Employer-run deductions before salary reaches your account.", Icon: ReceiptText },
    { label: "Net pay", body: "The cash amount you can compare with rent, savings and daily costs.", Icon: PiggyBank },
  ];
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-3">
      {items.map(({ label, body, Icon }) => (
        <article key={label} className={mutedCardClass}>
          <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
          <Icon className="h-6 w-6 text-brand-strong" aria-hidden />
          <h3 className="mt-3 text-base font-bold text-foreground">{label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
        </article>
      ))}
    </div>
  );
}

function CalculatorPreviewPanel() {
  return (
    <ProcessPanel
      eyebrow="Calculator-ready"
      title="Inputs and outputs this page supports"
      rows={[
        { label: "Inputs", body: page.calculatorConfig.fields.join(", "), Icon: Calculator },
        { label: "Results", body: page.calculatorConfig.results.join(", "), Icon: ClipboardCheck },
        { label: "Use carefully", body: "Treat estimates as planning context before payroll or professional confirmation.", Icon: AlertTriangle },
      ]}
      note={page.calculatorConfig.disclaimer}
    />
  );
}

function CalculatorPrepCards() {
  const items = [
    { label: "Contract amount", body: "Check whether your salary is monthly or yearly before entering it.", Icon: FileText },
    { label: "Allowance and pension", body: "Confirm if holiday allowance is included and whether pension is deducted.", Icon: PiggyBank },
    { label: "30% ruling status", body: "Use the ruling option as a scenario unless eligibility is already confirmed.", Icon: BadgePercent },
  ];

  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
      {items.map(({ label, body, Icon }) => (
        <article key={label} className={cn("rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-sm ring-1 ring-slate-900/[0.04]", movingNlCardMicroLiftClass)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="mt-3 text-sm font-bold text-foreground">{label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
        </article>
      ))}
    </div>
  );
}

function TaxBracketVisualPanel() {
  const rows = [
    { label: "Progressive system", body: "Higher income can face higher marginal rates.", Icon: Landmark },
    { label: "Rates change", body: "Use official current-year pages for thresholds and rates.", Icon: ShieldCheck },
    { label: "Net pay is wider", body: "Credits, payroll and pension can change the final take-home result.", Icon: CheckCircle2 },
  ];

  return (
    <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-5 text-white shadow-expatos-xl ring-1 ring-black/20 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand via-cyan-300 to-emerald-300" aria-hidden />
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-orange-400/15 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-200">Tax-bracket lens</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">Use brackets as context, not a shortcut</h3>
        <div className="mt-5 grid gap-3">
          {rows.map(({ label, body, Icon }) => (
            <div key={label} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 ring-1 ring-white/10">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-100 ring-1 ring-white/15">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">{label}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-300">{body}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function SalarySystemVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Offer checklist"
      title="Read the offer before comparing net pay"
      rows={[
        { label: "Salary basis", body: "Confirm whether the offer is monthly, yearly, full-time or pro-rated.", Icon: FileText },
        { label: "Allowance treatment", body: "Check whether holiday allowance and bonus are included in the quoted number.", Icon: ClipboardCheck },
        { label: "Package value", body: "Pension, relocation support and benefits can change the real value.", Icon: PiggyBank },
      ]}
    />
  );
}

function FreelancerVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="ZZP income lens"
      title="Freelancer net income is not payroll net salary"
      rows={[
        { label: "Invoice income", body: "Gross business income usually arrives before income tax is settled.", Icon: ReceiptText },
        { label: "Business costs", body: "Expenses, deductions and bookkeeping can change taxable profit.", Icon: BriefcaseBusiness },
        { label: "VAT rhythm", body: "VAT and income tax planning sit outside a normal employee payslip.", Icon: Calculator },
      ]}
      note="Set aside tax money as you earn. A high invoice total is not the same as spendable income."
    />
  );
}

function CostOfLivingVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Budget context"
      title="Turn net salary into a monthly plan"
      rows={[
        { label: "Fixed costs", body: "Rent, insurance, transport and childcare usually decide how salary feels.", Icon: PiggyBank },
        { label: "City choice", body: "The same net pay can feel different in Amsterdam, Utrecht, Rotterdam or The Hague.", Icon: Globe2 },
        { label: "Offer comparison", body: "Compare both take-home pay and realistic monthly costs before accepting.", Icon: CheckCircle2 },
      ]}
    />
  );
}

function RelatedTopicVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Learning path"
      title="Use related topics in this order"
      rows={[
        { label: "First, salary", body: "Understand gross-to-net pay and payroll deductions.", Icon: Calculator },
        { label: "Then, expat taxes", body: "Check residency, foreign income and annual return context.", Icon: Globe2 },
        { label: "Finally, specialist pages", body: "Use 30% ruling, payroll tax and tax-return guides for deeper questions.", Icon: FileText },
      ]}
    />
  );
}

function ServicesVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="When to get help"
      title="Match the provider to the problem"
      rows={[
        { label: "Salary offer review", body: "Payroll or HR can clarify payslip and contract details.", Icon: BriefcaseBusiness },
        { label: "Tax uncertainty", body: "A tax advisor can review cross-border, 30% ruling or filing questions.", Icon: ShieldCheck },
        { label: "Move logistics", body: "Relocation services help when salary planning connects to housing and setup.", Icon: CheckCircle2 },
      ]}
    />
  );
}

function RelatedGuidesVisualPanel() {
  return (
    <ProcessPanel
      eyebrow="Next steps"
      title="Connect salary to setup"
      rows={[
        { label: "Tax path", body: "Start with taxes, expat taxes and 30% ruling guides.", Icon: Landmark },
        { label: "Money setup", body: "Open a Dutch bank account before salary and direct debits matter.", Icon: PiggyBank },
        { label: "Relocation path", body: "Use the moving guide to connect job offers with arrival tasks.", Icon: ArrowRight },
      ]}
    />
  );
}

function PayslipLensSection() {
  const rows = [
    { label: "Withheld by payroll", body: "Employees usually see salary after employer withholding, so your bank transfer is already after payroll processing.", Icon: ReceiptText },
    { label: "Not final advice", body: "A payslip estimate is not the same as a tax return outcome, especially when personal deductions or foreign income apply.", Icon: AlertTriangle },
    { label: "Confirm edge cases", body: "Bonuses, relocation support, taxable benefits and foreign workdays may need extra payroll or tax review.", Icon: ShieldCheck },
  ];

  return (
    <section id="payslip-lens" className={sectionClass}>
      <SectionIntro eyebrow="Payslip lens" title="Read Deductions as Categories">
        <p>A Dutch payslip can feel technical because several tax and contribution items may be combined in payroll. Start by grouping each line into a category before trying to calculate exact take-home pay.</p>
      </SectionIntro>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {rows.map(({ label, body, Icon }) => (
          <article key={label} className={mutedCardClass}>
            <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-copilot-bg-soft text-brand-strong ring-1 ring-copilot-primary/10">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-4 text-base font-bold text-foreground">{label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SourceLink({ source }: { source: (typeof page.officialSources)[number] }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(CITIES_FUNNEL_SOFT_COPILOT_SURFACE, "group block p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas", movingNlCardMicroLiftClass, transitionInteractive, activeBrightnessPress)}
    >
      <span className="text-sm font-bold text-foreground group-hover:text-link">{source.label}</span>
      <span className="mt-2 block text-sm leading-relaxed text-foreground-muted">{source.description}</span>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-link">Open official/source page <ArrowRight className="h-3.5 w-3.5" aria-hidden /></span>
    </a>
  );
}

export function NetSalaryNetherlandsView() {
  const baseUrl = getSiteOrigin();
  const crumbs = [
    { name: "Home", item: new URL("/", baseUrl).toString() },
    { name: "Netherlands", item: new URL("/netherlands/", baseUrl).toString() },
    { name: "Taxes", item: new URL("/netherlands/taxes/", baseUrl).toString() },
    { name: "Net Salary", item: new URL(page.path, baseUrl).toString() },
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
                    <span className="text-foreground" aria-current="page">Net salary</span>
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
            <nav aria-label="Net salary guide sections" className="flex min-w-max gap-2">
              {page.sectionNav.map((item) => (
                <a key={item.href} href={item.href} className={cn("rounded-full px-3 py-2 text-xs font-semibold text-foreground-muted hover:bg-copilot-bg-soft hover:text-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2", transitionInteractive, activeBrightnessPress)}>{item.label}</a>
              ))}
            </nav>
          </div>

          <div className={sectionStackClass}>
            <section id="intro" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)]">
                <div>
                  <SectionIntro title="Why Gross Salary and Net Salary Are Different">
                    <p>Many expats moving to the Netherlands focus on the gross salary offer. That is the number recruiters, contracts and job posts usually discuss.</p>
                    <p>Your actual take-home pay depends on payroll tax, income tax, social contributions, tax credits, pension and personal circumstances. A EUR 60,000 gross salary does not mean EUR 60,000 reaches your bank account.</p>
                    <p>This guide is beginner-friendly salary orientation, not financial advice, exact salary calculation or tax filing guidance.</p>
                  </SectionIntro>
                  <ConceptStrip />
                  <VisualFigure visual={page.infographics.grossToNetFlow} className="mt-6" />
                </div>
                <ProcessPanel
                  eyebrow="What changes take-home pay"
                  title="The main moving parts"
                  rows={page.introFactors.map((factor, index) => ({
                    label: factor,
                    body: "Check this before comparing Dutch salary offers with another country or employer package.",
                    Icon: [ReceiptText, Landmark, ShieldCheck, PiggyBank, BadgePercent][index % 5],
                  }))}
                />
              </div>
            </section>

            <section id="calculator" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)] lg:items-start">
                <div>
                  <SectionIntro eyebrow="Utility" title={page.calculatorConfig.title}>
                    <p>{page.calculatorConfig.description}</p>
                    <p>Many calculators use current Dutch payroll tax and income tax rules, but results should still be treated as planning estimates rather than payroll certainty.</p>
                  </SectionIntro>
                  <CalculatorPrepCards />
                </div>
                <CalculatorPreviewPanel />
              </div>
              <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 shadow-expatos-lg ring-1 ring-slate-900/[0.04] sm:p-5">
                <DutchSalaryNetCalculatorClient calculatorCanonicalUrl={new URL(DUTCH_SALARY_NET_CALCULATOR_PATH, baseUrl).toString()} />
              </div>
            </section>

            <section id="salary-system" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="How Salary Works in the Netherlands">
                    <p>Netherlands salaries are often quoted before tax. To compare job offers properly, separate the gross amount from payroll deductions, holiday allowance, pension, bonus rules and employer benefits.</p>
                    <p>A good salary comparison starts with the contract wording: yearly salary, monthly salary, holiday allowance, bonus, pension and whether the employer has included relocation or mobility benefits.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {page.salarySystemCards.map((card) => (
                      <article key={card.title} className={mutedCardClass}>
                        <div className={cn("absolute inset-x-0 top-0 h-1", movingNlSignatureGradientClass)} aria-hidden />
                        <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <SalarySystemVisualPanel />
              </div>
            </section>

            <section id="deductions" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] lg:items-start">
                <div>
                  <SectionIntro title="What Is Taken Out of Your Salary?">
                    <p>Payroll taxes may include wage tax, national insurance contributions, employee insurance contributions and health-insurance-related contributions.</p>
                    <p>Belastingdienst defines payroll taxes as including wage tax, national insurance contributions, employee insurance contributions and health-insurance-related contributions. The practical result is that your payslip is more than one simple income-tax line.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.deductionCards.map((card) => (
                      <article key={card.title} className={mutedCardClass}>
                        <ReceiptText className="h-5 w-5 text-brand-strong" aria-hidden />
                        <h3 className="mt-3 text-base font-bold text-foreground">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.body}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <VisualFigure visual={page.infographics.payrollDeductions} className="lg:sticky lg:top-24" />
              </div>
            </section>

            <PayslipLensSection />

            <section id="tax-brackets" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <SectionIntro title="Dutch Income Tax Brackets">
                  <p>The Netherlands uses a progressive tax system, which means higher income levels can be taxed at higher rates. This is one reason a higher gross salary can have a lower take-home percentage than a lower salary.</p>
                  <p>Rates and thresholds change regularly, so this page does not hardcode large rate tables. Use official Belastingdienst rate pages for current-year figures.</p>
                </SectionIntro>
                <TaxBracketVisualPanel />
              </div>
            </section>

            <section id="thirty-ruling" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <SectionIntro title="How the 30% Ruling Can Affect Net Salary">
                  <p>Some international employees may qualify for the Dutch expat scheme commonly called the 30% ruling. If eligible and applied correctly, part of compensation may be paid tax-free, which can increase net salary.</p>
                  <p>This page does not guarantee eligibility or exact savings. Use the dedicated guide to understand conditions, employer involvement and recent changes.</p>
                  <p>
                    <Link href="/netherlands/taxes/30-percent-ruling/" className="font-semibold text-link hover:text-link-hover">Read the 30% ruling guide</Link>
                  </p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Ruling impact"
                  title="What to check before assuming savings"
                  rows={[
                    { label: "Eligibility", body: "The scheme is not automatic for every international employee.", Icon: ShieldCheck },
                    { label: "Employer setup", body: "The employer must be involved in practical payroll treatment.", Icon: BriefcaseBusiness },
                    { label: "Salary comparison", body: "Compare the same gross offer with and without ruling assumptions.", Icon: Calculator },
                  ]}
                />
              </div>
            </section>

            <section id="examples" className={sectionClass}>
              <SectionIntro title="Example Salary Scenarios">
                <p>These examples are conceptual, not guaranteed calculations. Use them to understand how different gross salaries can behave, then run the calculator with your own inputs.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.salaryExamples.map((example) => (
                  <article key={example.grossSalary} className={mutedCardClass}>
                    <div className={cn("absolute inset-x-0 top-0 h-1.5", movingNlSignatureGradientClass)} aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-strong">Gross salary</p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-foreground">{example.grossSalary}</h3>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground">{example.takeHomeConcept}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{example.explanation}</p>
                  </article>
                ))}
              </div>
              <VisualFigure visual={page.infographics.scenarioComparison} className="mt-6" />
            </section>

            <section id="highly-skilled" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)]">
                <SectionIntro title="Highly Skilled Migrants and Net Salary">
                  <p>Many expats arrive through highly skilled migrant routes, international transfers, tech jobs, engineering roles and finance roles. Salary expectations often depend on expat scheme eligibility, pension arrangements, benefits and tax credits.</p>
                  <p>When comparing offers, look beyond the gross number: relocation support, employer pension, holiday allowance, bonus timing and 30% ruling handling can all change the practical value.</p>
                  <p>
                    <Link href="/netherlands/moving-to-the-netherlands/" className="font-semibold text-link hover:text-link-hover">Plan your move to the Netherlands</Link>
                  </p>
                </SectionIntro>
                <ProcessPanel
                  eyebrow="Offer comparison"
                  title="Ask these before accepting"
                  rows={[
                    { label: "Is holiday allowance included?", body: "The same gross figure can mean different monthly cash flow.", Icon: ClipboardCheck },
                    { label: "What pension applies?", body: "Employee pension contributions can reduce net monthly salary.", Icon: PiggyBank },
                    { label: "Is 30% ruling support included?", body: "Confirm whether the employer supports the application and payroll setup.", Icon: BadgePercent },
                  ]}
                />
              </div>
            </section>

            <section id="questions" className={sectionClass}>
              <SectionIntro title="Questions Expats Often Have About Salary" />
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {page.expatQuestions.map((question, index) => {
                  const Icon = questionIcons[index % questionIcons.length];
                  return (
                    <article key={question} className={mutedCardClass}>
                      <Icon className="h-5 w-5 text-brand-strong" aria-hidden />
                      <h3 className="mt-3 text-sm font-bold leading-relaxed text-foreground">{question}</h3>
                    </article>
                  );
                })}
              </div>
            </section>

            <section id="freelancers" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <SectionIntro title="Net Income for Freelancers and ZZP'ers">
                  <p>Freelancers calculate income differently from employees. Instead of a standard payroll path, ZZP income depends on invoices, VAT, business expenses, deductions, income tax and bookkeeping discipline.</p>
                  <p>For freelance comparisons, focus on taxable profit and cash reserved for taxes, not only the hourly rate or invoice total.</p>
                  <p>
                    The detailed freelancer tax page is planned here: <span className="font-semibold text-foreground">/netherlands/taxes/freelancer-zzp-taxes/</span>.
                  </p>
                </SectionIntro>
                <FreelancerVisualPanel />
              </div>
            </section>

            <section id="cost-of-living" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)]">
                <div>
                  <SectionIntro title="Salary vs Cost of Living">
                    <p>A salary should be viewed alongside housing, transport, health insurance, childcare and taxes. A higher net salary in one city may still feel tighter if rent, commuting or childcare costs are higher.</p>
                    <p>Use city pages to ground salary expectations in real local context.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {page.costOfLivingCities.map((city, index) => <LinkCard key={city.href} item={city} iconIndex={index} />)}
                  </div>
                </div>
                <CostOfLivingVisualPanel />
              </div>
            </section>

            <section id="related-tax-topics" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Related Dutch Tax Topics">
                    <p>Use these topics to move from salary planning into the wider Dutch tax system. Some pages are live and some are planned future cluster pages.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.relatedTaxTopics.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
                  </div>
                </div>
                <RelatedTopicVisualPanel />
              </div>
            </section>

            <section id="services" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Professional Services That May Help">
                    <p>Most salary questions are simple enough to understand conceptually, but personal tax, payroll or cross-border cases may need professional review.</p>
                    <p>Choose a provider based on the question you actually need answered: payroll setup, tax filing, 30% ruling, ZZP bookkeeping or relocation logistics.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {page.services.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} />)}
                  </div>
                </div>
                <ServicesVisualPanel />
              </div>
            </section>

            <section id="faq" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)]">
                <div>
                  <SectionIntro title="Frequently Asked Questions" />
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {page.faq.map((item) => (
                      <article key={item.q} className={mutedCardClass}>
                        <h3 className="text-base font-bold text-foreground">{item.q}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.a}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <ProcessPanel
                  eyebrow="Before you calculate"
                  title="Prepare better inputs"
                  rows={[
                    { label: "Contract salary", body: "Know whether the amount is monthly, yearly and including holiday allowance.", Icon: FileText },
                    { label: "Ruling status", body: "Use the 30% ruling switch only as a scenario unless eligibility is confirmed.", Icon: BadgePercent },
                    { label: "Pension percentage", body: "Employer pension can materially change the net monthly amount.", Icon: PiggyBank },
                  ]}
                />
              </div>
            </section>

            <section id="sources" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)]">
                <div>
                  <SectionIntro title="Official Sources">
                    <p>Use official sources for final checks. Supporting expat-friendly sources can help with plain-English orientation, but official pages should drive current tax-year decisions.</p>
                  </SectionIntro>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {page.officialSources.map((source) => <SourceLink key={source.href} source={source} />)}
                  </div>
                </div>
                <ProcessPanel
                  eyebrow="Source hierarchy"
                  title="What the sources support"
                  rows={[
                    { label: "Payroll taxes", body: "Belastingdienst explains the categories included in payroll taxes.", Icon: ReceiptText },
                    { label: "Income tax", body: "Current rates and thresholds should be checked with official pages.", Icon: Landmark },
                    { label: "General guidance", body: "Use government and supporting sources to frame questions.", Icon: ShieldCheck },
                  ]}
                />
              </div>
            </section>

            <section id="related-guides" className={sectionClass}>
              <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.65fr)] lg:items-start">
                <div>
                  <SectionIntro title="Related Guides">
                    <p>These pages help connect take-home pay to the practical setup work around banking, relocation, taxes and services.</p>
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
                <p>Move from a salary estimate into the tax and setup topics that usually change real take-home pay.</p>
              </SectionIntro>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {page.exploreNextCards.map((item, index) => <LinkCard key={item.href} item={item} iconIndex={index} tone="onDark" />)}
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
