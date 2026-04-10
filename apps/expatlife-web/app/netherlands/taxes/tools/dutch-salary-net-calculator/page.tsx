import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero, MoveToolSidebar } from "@/components/page/move-shell";
import { DutchSalaryNetCalculatorClient } from "@/src/components/tools/dutch-salary-net/DutchSalaryNetCalculatorClient";
import { SalaryExplainer } from "@/src/components/tools/dutch-salary-net/SalaryExplainer";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import {
  getDutchSalaryNetBankCards,
  getDutchSalaryNetPayrollServiceCards,
  getDutchSalaryNetRelocationConsultantCards,
  getThirtyPercentRulingTaxAdvisorCards,
} from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { PayrollPlanningToolTrio } from "@/src/components/tools/PayrollPlanningToolTrio";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { cn } from "@/lib/cn";
import {
  movingNlCardMicroLiftClass,
  movingNlSignatureGradientClass,
  movingNlSidebarModuleAccentClass,
  movingNlSidebarModuleClass,
  movingNlSidebarModuleTitleClass,
} from "@/lib/ui/moving-nl-pillar-identity";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/taxes/tools/dutch-salary-net-calculator/";
const BASE = "/netherlands";
const PAYSLIP_DECODER_HREF = `${BASE}/work/tools/payslip-decoder/`;

const META_TITLE = "Dutch Salary Net Calculator 2026 | Gross to Net Netherlands & 30% Ruling Impact";
const META_DESCRIPTION =
  "Plan Dutch take-home pay: gross-to-net calculator with optional 30% ruling on taxable wages, bonus and holiday allowance, pension and social toggles, up to four offer scenarios, export. Indicative only — not payroll, eligibility, or legal advice.";
const HERO_IMAGE = "/images/heroes/netherlands-dutch-salary-net-calculator-hero.png";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical },
  keywords: [
    "net salary Netherlands",
    "Dutch salary calculator",
    "gross to net Netherlands",
    "expat salary Netherlands",
    "take home pay Netherlands",
    "salary after tax Netherlands",
    "30% ruling net salary",
    "30% ruling salary impact",
    "salary after tax Netherlands expat",
    "dutch net salary expat",
    "gross to net salary Netherlands",
    "bruto netto calculator Netherlands",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: canonical,
    images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: "Illustration: desk with laptop and salary planning visuals." }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

const SalaryNetBelowFold = dynamic(() => import("@/src/components/tools/dutch-salary-net/SalaryNetBelowFold"), {
  loading: () => (
    <div className="space-y-10 py-6" aria-busy="true" aria-label="Loading additional sections">
      <div className="min-h-[12rem] w-full rounded-2xl bg-slate-100/70" />
      <div className="min-h-[16rem] w-full rounded-2xl bg-slate-100/70" />
      <div className="min-h-[10rem] w-full rounded-2xl bg-slate-100/70" />
    </div>
  ),
});

const FAQ_ITEMS = [
  {
    id: "accurate",
    question: "Is this calculator payroll-accurate?",
    answer:
      "No. It applies simplified marginal bands (~36.97% up to about €75k taxable, then ~49.5%) and approximate tax credits. Real Dutch payroll uses loonbelasting tables, employer settings, insurance slices, pension rules, and personal circumstances. Use the output for planning and conversations — then confirm with payroll or a tax adviser.",
  },
  {
    id: "ruling",
    question: "Does this confirm my 30% ruling eligibility?",
    answer:
      "No. This tool only reduces taxable wages when you choose a ruling option. Eligibility, employer application, and payroll treatment are separate — use the dedicated 30% ruling eligibility calculator and official Belastingdienst guidance.",
  },
  {
    id: "max-27",
    question: "What does “Statutory maximum” with 30% vs 27% mean?",
    answer:
      "Under “Apply statutory maximum”, we model the facility on your gross up to the salary cap: 30% through 2026, and 27% as a legislative preview for comparisons. It is a planning switch only — not what your employer or the Belastingdienst will apply. Verify current rules on Belastingdienst.nl.",
  },
  {
    id: "net-comparison-meaning",
    question: "What does the net comparison with the 30% ruling actually show?",
    answer:
      "It shows indicative take-home if taxable income is reduced by the ruling settings you chose, versus the same gross with no ruling structure in this model. The increase in net comes from lower taxable wages, not from a higher gross offer. Payroll, pension, and credits can change the real payslip.",
  },
  {
    id: "when-not-to-use",
    question: "When should I not rely on this calculator alone?",
    answer:
      "Do not use it for final payroll validation, contract certainty, or eligibility decisions. It skips exact withholding tables, partner effects, benefits in kind, stock compensation, and employer-specific payroll. Confirm with payroll and, when needed, a qualified tax advisor.",
  },
  {
    id: "holiday",
    question: "How do you handle holiday allowance (8%)?",
    answer:
      "When enabled, we add 8% on top of annual salary plus any bonus you enter, which matches a common gross-up pattern. Contracts differ on whether your figure already includes vakantiegeld — align the toggle with your offer letter.",
  },
  {
    id: "social",
    question: "What does “include social contributions” mean here?",
    answer:
      "We optionally deduct a single simplified employee levy (Zvw-style) on gross up to a ceiling. It is not a full social-premium breakdown and excludes many real payroll items.",
  },
  {
    id: "compare",
    question: "How does scenario comparison work?",
    answer:
      "Enable compare mode for up to four scenarios with different gross levels, 30% ruling settings, pension %, or employer-applied %. Cards on mobile and a full table on desktop show gross, taxable, tax, net, ruling mode, and monthly delta versus the first scenario.",
  },
  {
    id: "export",
    question: "Can I download or print my results?",
    answer:
      "Yes. Use Download HTML or Print / Save as PDF for a self-contained summary with inputs, indicative results, comparison, disclaimer, and timestamp.",
  },
  {
    id: "months",
    question: "What if I only work part of the year?",
    answer:
      "Set months worked (1–12). The tax model still uses your full contract gross as entered; we multiply indicative annual net by months ÷ 12 for a rough in-year cash figure. Mid-year starts and true annualisation rules are more nuanced — confirm with payroll.",
  },
  {
    id: "free-tool",
    question: "Is this Dutch net salary calculator free to use?",
    answer:
      "Yes. It runs in your browser with no sign-up. There is no client–adviser relationship; outputs are indicative planning figures only — not a substitute for payroll, the Belastingdienst, or professional advice.",
  },
];

const OFFICIAL_SOURCES = [
  { label: "Belastingdienst — Income tax", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/income-tax" },
  { label: "Government.nl — Income tax", href: "https://www.government.nl/topics/income-tax" },
  { label: "Business.gov.nl — Payroll taxes", href: "https://business.gov.nl/regulations/payroll-taxes/" },
  { label: "Belastingdienst — 30% facility overview", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/coming-to-work-in-the-netherlands-30-percent-facility" },
];

const RELATED_NEXT_STEPS = [
  {
    href: `${BASE}/living/survival-guide/`,
    title: "Netherlands Survival Guide",
    description: "What take-home pay feels like in practice: transport, apps, and daily spend norms.",
  },
  {
    href: `${BASE}/taxes/net-salary-netherlands/`,
    title: "Net salary in the Netherlands",
    description: "Gross-to-net context and payslip concepts once payroll facts are fixed.",
  },
  {
    href: `${BASE}/taxes/gross-vs-netherlands-salary/`,
    title: "Gross vs net in the Netherlands",
    description: "How employers quote packages and what lands in your bank account.",
  },
  {
    href: `${BASE}/taxes/tools/30-ruling-calculator/`,
    title: "30% ruling eligibility calculator",
    description: "Separate tool for norms, distance checks, and allowance — not gross-to-net.",
  },
  {
    href: `${BASE}/taxes/30-percent-ruling/`,
    title: "30% ruling guide",
    description: "What the facility is, who it is for, and employer dependence.",
  },
  {
    href: `${BASE}/money/taxes/employment-overview/`,
    title: "Employment & tax overview",
    description: "How salary, payroll tax, and benefits fit together at a high level.",
  },
  {
    href: PAYSLIP_DECODER_HREF,
    title: "Dutch payslip decoder",
    description:
      "Plain-language explanations for common Dutch payslip lines and deductions (companion to gross-to-net planning, not payroll).",
  },
  {
    href: `${BASE}/taxes/expat-taxes-netherlands/`,
    title: "Expat taxes Netherlands",
    description: "Broader filing and residency context for internationals.",
  },
  {
    href: `${BASE}/moving-to-the-netherlands/`,
    title: "Moving to the Netherlands",
    description: "Relocation hub alongside compensation planning.",
  },
  {
    href: `${BASE}/services/`,
    title: "Expat services directory",
    description: "Advisors, relocation, and payroll-related providers when you need hands-on help.",
  },
];

const TOC = [
  { id: "salary-planning-orientation", label: "Overview" },
  { id: "tool-inputs", label: "Calculator" },
  { id: "tool-results", label: "Results" },
  { id: "comparison", label: "Compare scenarios" },
  { id: "download-summary", label: "Download" },
  { id: "optimize-salary-setup", label: "Next steps" },
  { id: "how-the-tool-works", label: "How salary tax works" },
  { id: "seo-content", label: "How we estimate" },
  { id: "example-scenarios", label: "Examples" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
];

const QUICK = [
  { label: "Start calculator", href: "#tool-inputs" },
  { label: "See results", href: "#tool-results" },
  { label: "Compare scenarios", href: "#comparison" },
  { label: "Download summary", href: "#download-summary" },
  { label: "Decode a Dutch payslip", href: `${BASE}/work/tools/payslip-decoder/` },
  { label: "Check 30% ruling eligibility", href: `${BASE}/taxes/tools/30-ruling-calculator/` },
  { label: "Compare Dutch banks", href: `${BASE}/services/banks/` },
  { label: "Tax tools hub", href: `${BASE}/taxes/tools/` },
];

function relatedGuidesFromRouteStatus(
  items: typeof RELATED_NEXT_STEPS
): Array<{ href: string; title: string; description: string; status?: "coming_soon" }> {
  const out: Array<{ href: string; title: string; description: string; status?: "coming_soon" }> = [];
  for (const r of items) {
    const st = getRouteStatus(r.href);
    if (st === "hidden") continue;
    if (st === "coming-soon") {
      out.push({ href: r.href, title: r.title, description: r.description, status: "coming_soon" });
    } else {
      out.push({ href: r.href, title: r.title, description: r.description });
    }
  }
  return out;
}

export default function DutchSalaryNetCalculatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(canonical, origin).toString();
  const taxAdvisorCards = getThirtyPercentRulingTaxAdvisorCards();
  const payrollCards = getDutchSalaryNetPayrollServiceCards();
  const relocationCards = getDutchSalaryNetRelocationConsultantCards();
  const bankCards = getDutchSalaryNetBankCards();
  const salaryOptimizeMonetization = {
    taxAdvisors: taxAdvisorCards.slice(0, 3),
    payrollServices: payrollCards.slice(0, 3),
    relocationSpecialists: relocationCards.slice(0, 3),
    banks: bankCards.slice(0, 3),
    bankComparisonHref: `${BASE}/services/banks/`,
    servicesDirectoryHref: `${BASE}/services/`,
  };
  const relatedGuidesResolved = relatedGuidesFromRouteStatus(RELATED_NEXT_STEPS);

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Tax tools", url: "/netherlands/taxes/tools/" },
    { name: "Dutch salary net calculator", url: canonical },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Dutch Salary Net Calculator (Netherlands)",
    description:
      "General-information gross-to-net planner for the Netherlands: simplified 2026-style tax bands (not official withholding), optional 30%/27% ruling on taxable income, pension and social toggles, approximate credits, up to four scenarios, in-year cash estimate, HTML export. Not payroll software and not professional advice.",
    url: canonical,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));
  const webPageJsonLd = buildToolPageSchema({
    title: META_TITLE,
    description: META_DESCRIPTION,
    canonicalPath: canonical,
  });

  const intro = (
    <div className="space-y-8">
      <div
        id="salary-planning-orientation"
        className="scroll-mt-28 rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] md:scroll-mt-32 md:p-7 border-l-[5px] border-l-copilot-primary/55"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-copilot-primary">Gross-to-net planning tool</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">
          Dutch salary net calculator — what you can do here
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary sm:text-[15px]">
          <li>Estimate <strong>gross vs net</strong> for Dutch salary planning with simplified 2026-style tax assumptions.</li>
          <li>
            Optionally model <strong>with or without the 30% ruling on taxable wages</strong> — this only changes taxable income in the spreadsheet;
            it does <strong>not</strong> verify eligibility.
          </li>
          <li>
            <strong>Compare up to four scenarios</strong> (offers, ruling assumptions, pension levels) side by side for relocation or negotiation
            prep.
          </li>
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            href={`${BASE}/taxes/tools/30-ruling-calculator/`}
            className="inline-flex min-h-11 items-center rounded-xl bg-copilot-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          >
            Check 30% ruling eligibility
          </Link>
          <span className="text-sm text-copilot-text-secondary">
            Separate tool for distance, norms, and employer context — use it before you assume the ruling on payroll.
          </span>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold tracking-tight text-copilot-text-primary sm:text-xl">When to use this tool</h2>
        <p className="mt-2 text-sm text-copilot-text-secondary">
          Pair with the{" "}
          <Link href={`${BASE}/taxes/`} className="font-medium text-copilot-primary hover:underline">
            Dutch taxes hub
          </Link>
          ,{" "}
          <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-medium text-copilot-primary hover:underline">
            moving guide
          </Link>
          , and{" "}
          <Link href={`${BASE}/services/banks/`} className="font-medium text-copilot-primary hover:underline">
            bank listings
          </Link>{" "}
          when you are building a relocation picture.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            {
              t: "What this tool is for",
              d: "Comparing offers, sanity-checking a package, and budgeting relocation — orientational numbers for talks with HR or an advisor.",
            },
            {
              t: "Best for",
              d: "Expats and candidates who want indicative take-home, ruling on/off stress tests, and pension/social sensitivity before payroll confirms anything.",
            },
            {
              t: "What it models",
              d: "Taxable income after your 30% ruling setting, two indicative tax bands, optional credits, employee pension %, and a simplified Zvw-style levy.",
            },
            {
              t: "What it skips",
              d: "Exact loonbelasting tables, partner and household credits, benefits in kind, stock compensation, full pension rules, full social insurance, and employer-specific payroll engines.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.08] md:p-5 border-l-4 border-l-copilot-primary/45"
            >
              <p className="text-sm font-semibold text-copilot-text-primary">{c.t}</p>
              <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary sm:text-sm">{c.d}</p>
            </div>
          ))}
        </div>
        <PayrollPlanningToolTrio highlight="net" className="pt-2" />
      </div>
    </div>
  );

  const sidebar = (
    <div className="space-y-6">
      <MoveToolSidebar tocItems={TOC} quickLinks={QUICK} />
      <div className={cn(movingNlSidebarModuleClass, movingNlCardMicroLiftClass)}>
        <div className={cn(movingNlSidebarModuleAccentClass, movingNlSignatureGradientClass)} aria-hidden />
        <p className={cn(movingNlSidebarModuleTitleClass, "relative z-[2]")}>Related tools</p>
        <ul className="relative z-[2] mt-4 space-y-2 text-sm text-copilot-text-secondary">
          <li>
            <Link href={`${BASE}/taxes/tools/30-ruling-calculator/`} className="font-medium text-copilot-primary hover:underline">
              Check 30% ruling eligibility →
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/services/banks/`} className="font-medium text-copilot-primary hover:underline">
              Compare Dutch banks →
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/taxes/net-salary-netherlands/`} className="font-medium text-copilot-primary hover:underline">
              Net salary guide →
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/taxes/`} className="font-medium text-copilot-primary hover:underline">
              Dutch taxes hub →
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-medium text-copilot-primary hover:underline">
              Moving to the Netherlands →
            </Link>
          </li>
          <li>
            <Link href={PAYSLIP_DECODER_HREF} className="font-medium text-copilot-primary hover:underline">
              Payslip decoder →
            </Link>
          </li>
        </ul>
        <p className="relative z-[2] mt-4 text-xs leading-relaxed text-copilot-text-secondary">
          Need a human review before you sign? Browse tax advisors and relocation help in{" "}
          <Link href={`${BASE}/services/`} className="font-semibold text-copilot-primary hover:underline">
            services
          </Link>
          .
        </p>
      </div>
    </div>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}

      <ToolPageTemplate
        movingClusterHero
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
            title="Dutch Salary Net Calculator (2026)"
            subtitle="Plan indicative take-home in the Netherlands: gross-to-net with optional 30% ruling on taxable wages, scenario compare, and export — not payroll, not eligibility, not legal advice."
            introBullets={[
              "Gross-to-net with simplified 2026-style tax bands",
              "30% ruling setting affects taxable income only (eligibility is a separate tool)",
              "Compare up to four offers or assumptions",
              "Download or print a planning summary",
            ]}
            primaryCtaLabel="Start calculator"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Learn about Dutch taxes"
            secondaryCtaHref={`${BASE}/taxes/how-taxes-work-netherlands/`}
            image={{
              src: HERO_IMAGE,
              alt: "Illustration of a workspace with laptop, calculator, and salary planning theme for the Netherlands.",
            }}
            imageFallback={{
              src: "/images/tools/expatlife-netherlands-budget-planning.png",
              alt: "Netherlands expat salary planning workspace.",
            }}
            shareUrl={shareUrl}
            pageId={canonical}
          />
        }
        intro={intro}
        disclosure="This page provides general, indicative information for planning conversations only. It is not legal, tax, or payroll advice, does not access Belastingdienst or employer systems, and does not create a client–adviser relationship. Confirm outcomes with payroll or a qualified adviser before you rely on them."
        explanatorySectionsOuterTitle="How Dutch salary tax works"
        contentOrder="default"
        explanatorySections={[
          {
            id: "progressive",
            title: "Progressive income tax",
            body: [
              "Dutch box-1 wages are taxed progressively — higher slices of taxable income face higher marginal rates. This calculator uses two indicative bands so you can see directionally how a raise or bonus changes tax exposure, without loading official withholding tables.",
            ],
          },
          {
            id: "net-vs-taxable",
            title: "Taxable income vs take-home",
            body: [
              "Lowering taxable income (for example with the 30% ruling setting) is not the same as earning a higher gross salary. Net pay rises because less income is taxed at the margin — if payroll actually applies the facility. Always confirm with HR; use the eligibility calculator for qualification signals, not this gross-to-net tool.",
            ],
          },
          {
            id: "credits",
            title: "Tax credits (heffingskortingen)",
            body: [
              "General and labour credits reduce tax for many earners and phase out as income rises. You can toggle approximate credits in Advanced to see how sensitive your net is to credit modelling — still not identical to the annual tax return.",
            ],
          },
          {
            id: "social-pension",
            title: "Social contributions & pension",
            body: [
              "Real payslips split employee insurance, pension, and savings choices. Here, pension is a simple % of gross you control, and social is an optional flat Zvw-style levy — enough for offer comparison, not enough for compliance planning.",
            ],
          },
          {
            id: "ruling-effect",
            title: "30% ruling on taxable wages (not eligibility)",
            body: [
              "When you turn on a ruling setting, we reduce taxable wages by an untaxed share up to the statutory salary cap, then tax the remainder. “Statutory maximum” can use 30% (through 2026) or 27% as a legislative preview — your employer may apply less. The facility requires employer application and Belastingdienst context; this page never replaces the dedicated eligibility tool.",
            ],
          },
          {
            id: "includes-excludes",
            title: "What this calculator includes / excludes",
            body: [
              "Includes: optional holiday allowance gross-up, indicative marginal tax, optional credits, optional employee pension %, optional simplified social, multi-scenario compare, export, planning notes.",
              "Excludes: exact payroll, benefits-in-kind, partner and household effects, stock options, 30% eligibility tests, and final Belastingdienst outcomes.",
            ],
          },
        ]}
        sidebar={sidebar}
        primarySectionTitle="Gross-to-net calculator"
        primarySectionContent={
          <DutchSalaryNetCalculatorClient
            monetization={salaryOptimizeMonetization}
            calculatorCanonicalUrl={new URL(canonical, origin).toString()}
          />
        }
        seoContentSectionTitle="How we estimate your result"
        seoContent={<SalaryExplainer />}
        relatedGuidesSectionTitle="Related guides and next steps"
        relatedGuides={relatedGuidesResolved}
        faqItems={FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Hubs and related tools">
            <Link href={`${BASE}/taxes/`} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch taxes hub
            </Link>
            <Link href={`${BASE}/taxes/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Tax tools hub
            </Link>
            <Link href={`${BASE}/taxes/tools/30-ruling-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Check 30% ruling eligibility
            </Link>
            <Link href={`${BASE}/services/banks/`} className="font-medium text-brand-600 hover:text-brand-700">
              Compare Dutch banks
            </Link>
            <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Moving to the Netherlands
            </Link>
            <Link href={`${BASE}/money/`} className="font-medium text-brand-600 hover:text-brand-700">
              Money hub
            </Link>
            <Link href={`${BASE}/services/`} className="font-medium text-brand-600 hover:text-brand-700">
              Services directory
            </Link>
            <Link href={PAYSLIP_DECODER_HREF} className="font-medium text-brand-600 hover:text-brand-700">
              Payslip decoder
            </Link>
          </nav>
        }
        extraSection={
          <SalaryNetBelowFold
            basePath={BASE}
            taxAdvisorCards={taxAdvisorCards}
            payrollCards={payrollCards}
            relocationCards={relocationCards}
            officialSources={OFFICIAL_SOURCES}
          />
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}
