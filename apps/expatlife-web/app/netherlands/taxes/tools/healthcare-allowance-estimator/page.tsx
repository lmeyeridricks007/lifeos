import type { Metadata } from "next";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { HealthcareAllowanceCalculatorClient } from "@/src/components/tools/healthcare-allowance/HealthcareAllowanceCalculatorClient";
import { HealthcareAllowancePageGuide } from "@/src/components/tools/healthcare-allowance/HealthcareAllowancePageGuide";
import { HealthcareAllowanceOfficialSources } from "@/src/components/tools/healthcare-allowance/HealthcareAllowanceOfficialSources";
import { HealthcareAllowanceRecommendedSections } from "@/src/components/tools/healthcare-allowance/HealthcareAllowanceRecommendedSections";
import { HealthcareAllowanceScenarioCards } from "@/src/components/tools/healthcare-allowance/HealthcareAllowanceScenarioCards";
import { MoveHero, MoveToolSidebar } from "@/components/page/move-shell";
import { getHealthcareAllowanceServiceBundles } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { healthcareFaqItems } from "@/src/lib/tools/healthcare-allowance/config/healthcareFaq";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
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

const canonical = "/netherlands/taxes/tools/healthcare-allowance-estimator/";
const BASE = "/netherlands";
const GUIDE_HREF = `${BASE}/taxes/healthcare-allowance/`;

const META_TITLE =
  "Zorgtoeslag Calculator & Healthcare Allowance Netherlands 2026 | Income & Asset Limits | ExpatCopilot";
const META_DESCRIPTION =
  "Healthcare allowance Netherlands planner for expats: zorgtoeslag calculator-style estimates with 2026 income limit and asset limit screening, tapered monthly allowance, net premium after allowance, part-year insurance, export and shareable URL. Planning only — not Dienst Toeslagen or legal advice.";

const HERO_IMAGE = "/images/heroes/netherlands-healthcare-allowance-estimator-hero.png";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical },
  keywords: [
    "zorgtoeslag calculator",
    "healthcare allowance Netherlands",
    "healthcare allowance expat Netherlands",
    "zorgtoeslag income limit",
    "zorgtoeslag asset limit",
    "income limit zorgtoeslag",
    "asset limit zorgtoeslag",
    "Netherlands health insurance allowance",
    "Dutch health insurance subsidy",
    "toeslagen planning",
    "zorgtoeslag estimate",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: canonical,
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Illustration: Dutch healthcare allowance planning — insurance card, income bands, and premium relief theme.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

const RELATED_NEXT_STEPS = [
  {
    href: `${BASE}/living/survival-guide/`,
    title: "Netherlands Survival Guide",
    description: "How day-to-day costs and Dutch payment habits interact with household cash flow.",
  },
  {
    href: `${BASE}/living/healthcare-basics/`,
    title: "Healthcare Basics in the Netherlands",
    description: "Understand insurance, GP registration, pharmacies, urgent care, and the wider healthcare flow beside this estimator.",
  },
  {
    href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`,
    title: "Dutch salary net calculator",
    description: "Gross-to-net planning to align income assumptions with this allowance estimate.",
  },
  {
    href: `${BASE}/money/tools/cost-of-living-calculator/`,
    title: "Cost of living calculator",
    description: "Monthly budget bands alongside insurance and allowance planning.",
  },
  {
    href: `${BASE}/housing/tools/rent-affordability-calculator/`,
    title: "Rent affordability calculator",
    description: "Housing cost stress test next to healthcare cash flow.",
  },
  {
    href: `${BASE}/taxes/tools/30-ruling-calculator/`,
    title: "30% ruling calculator",
    description: "Separate eligibility planner for the expat tax facility.",
  },
  {
    href: `${BASE}/moving-to-the-netherlands/`,
    title: "Moving to the Netherlands",
    description: "Relocation hub for first-year practicalities.",
  },
  {
    href: `${BASE}/taxes/`,
    title: "Dutch taxes hub",
    description: "Broader tax context for internationals.",
  },
  {
    href: `${BASE}/services/health-insurance/`,
    title: "Health insurance services",
    description: "Compare providers when you are choosing a basic policy.",
  },
  {
    href: `${BASE}/services/compare-health-insurance/`,
    title: "Compare Dutch health insurance",
    description: "Side-by-side context before you lock in a premium and apply for allowance.",
  },
  {
    href: `${BASE}/health-insurance-netherlands/`,
    title: "Health insurance in the Netherlands",
    description: "How basic cover works for internationals — useful next to allowance planning.",
  },
  {
    href: GUIDE_HREF,
    title: "Healthcare allowance guide",
    description: "Editorial walkthrough of how zorgtoeslag fits expat budgets.",
  },
  {
    href: `${BASE}/health/tools/`,
    title: "Health tools hub",
    description: "Other Netherlands health planning tools on ExpatCopilot.",
  },
  {
    href: `${BASE}/family/tools/`,
    title: "Family tools",
    description: "Childcare and partner-work planners when household composition matters.",
  },
  {
    href: `${BASE}/settling-in-netherlands/`,
    title: "Settling in the Netherlands",
    description: "First months checklist alongside insurance and toeslagen timing.",
  },
  {
    href: `${BASE}/bsn-registration/`,
    title: "BSN registration",
    description: "Registration steps that often sit upstream of insurance and benefits.",
  },
] as const;

const TOC = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "before-you-start", label: "Before you start" },
  { id: "tool-inputs", label: "Calculator" },
  { id: "tool-results", label: "Results" },
  { id: "eligibility-diagnosis", label: "Eligibility" },
  { id: "net-premium-after-allowance", label: "Net premium" },
  { id: "income-impact", label: "Income impact" },
  { id: "asset-impact", label: "Asset impact" },
  { id: "example-scenarios", label: "Worked examples" },
  { id: "how-healthcare-allowance-works", label: "How allowance works" },
  { id: "what-counts-as-income", label: "Income in this tool" },
  { id: "why-assets-matter", label: "Why assets matter" },
  { id: "zorgtoeslag-planning-context", label: "Planning context" },
  { id: "how-estimator-works", label: "Estimator logic" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "related-guides", label: "What to do next" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
];

const QUICK = [
  { label: "Start estimator", href: "#tool-inputs" },
  { label: "See results", href: "#tool-results" },
  { label: "Check eligibility", href: "#eligibility-diagnosis" },
  { label: "Compare premium", href: "#net-premium-after-allowance" },
  { label: "Download summary", href: "#download-summary" },
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

export default function HealthcareAllowanceEstimatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(canonical, origin).toString();
  const bundles = getHealthcareAllowanceServiceBundles();
  const relatedGuidesResolved = relatedGuidesFromRouteStatus(RELATED_NEXT_STEPS);

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Tax tools", url: "/netherlands/taxes/tools/" },
    { name: "Healthcare allowance estimator", url: canonical },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Healthcare Allowance Estimator Netherlands",
    description:
      "Browser-based zorgtoeslag / healthcare allowance planning for the Netherlands: 2026 income and asset limit screening, tapered estimate, net premium after allowance, part-year proration, URL state, HTML export. Not Dienst Toeslagen and not legal or tax advice.",
    url: canonical,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const faqJsonLd = buildFaqSchema(healthcareFaqItems.map((q) => ({ question: q.question, answer: q.answer })));
  const webPageJsonLd = buildToolPageSchema({
    title: META_TITLE,
    description: META_DESCRIPTION,
    canonicalPath: canonical,
  });

  const intro = (
    <div className="space-y-8">
      <div
        id="at-a-glance"
        className="scroll-mt-28 rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] md:scroll-mt-32 md:p-7 border-l-[5px] border-l-copilot-primary/55"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-copilot-primary">DESTINATION PAGE</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">At a glance</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-copilot-text-secondary sm:text-[0.95rem]">
          This is a <strong className="text-copilot-text-primary">zorgtoeslag calculator–style planner</strong> for{" "}
          <strong className="text-copilot-text-primary">healthcare allowance in the Netherlands</strong> — built for internationals who need to
          understand <strong className="text-copilot-text-primary">income limits</strong>, <strong className="text-copilot-text-primary">asset limits on 1 January</strong>, partner rules, and how{" "}
          <strong className="text-copilot-text-primary">net premium after allowance</strong> might look before they choose an insurer or apply to Dienst
          Toeslagen. Everything here is <strong className="text-copilot-text-primary">planning-oriented</strong>; only the government confirms entitlement.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "What you can learn",
              d: "Whether obvious blockers might apply, how sensitive allowance is to income near the ceiling, how combined partner income tests against the higher limit, and how part-year insurance changes annual totals.",
            },
            {
              t: "Who it is for",
              d: "Expats comparing gross insurer quotes, couples deciding how to model household income, newcomers arriving mid-year, and anyone pairing allowance with salary, rent, and cost-of-living planning.",
            },
            {
              t: "How it relates to official rules",
              d: "We use transparent 2026 thresholds and a simplified taper — useful for questions and budgeting, not a copy of the live toeslagen engine.",
            },
            {
              t: "Pair with other tools",
              d: "Link out to net salary, rent affordability, cost of living, and the 30% ruling planner so your allowance assumptions match the rest of your monthly picture.",
            },
            {
              t: "Exports & sharing",
              d: "Download an HTML summary or share a URL with your scenario — handy when discussing options with a partner or adviser.",
            },
            {
              t: "What it cannot do",
              d: "Prove entitlement, file for you, or capture every legal edge case. Always verify income definitions, asset categories, and current limits on official sites.",
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
            <Link href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-copilot-primary hover:underline">
              Dutch salary net calculator →
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/money/tools/cost-of-living-calculator/`} className="font-medium text-copilot-primary hover:underline">
              Cost of living calculator →
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/housing/tools/rent-affordability-calculator/`} className="font-medium text-copilot-primary hover:underline">
              Rent affordability calculator →
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/taxes/tools/30-ruling-calculator/`} className="font-medium text-copilot-primary hover:underline">
              30% ruling calculator →
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-medium text-copilot-primary hover:underline">
              Moving to the Netherlands →
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/health-insurance-netherlands/`} className="font-medium text-copilot-primary hover:underline">
              Health insurance in the Netherlands →
            </Link>
          </li>
          <li>
            <Link href={`${BASE}/services/compare-health-insurance/`} className="font-medium text-copilot-primary hover:underline">
              Compare Dutch health insurance →
            </Link>
          </li>
        </ul>
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
        introDisclaimerId="before-you-start"
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
            title="Healthcare Allowance Estimator Netherlands"
            subtitle="Plan Dutch healthcare allowance (zorgtoeslag) like a destination guide: income and asset limit screening, calculator-style estimates for expats, net premium after allowance, and links to salary, rent, and cost-of-living tools — planning only, not Dienst Toeslagen."
            introBullets={[
              "Check likely eligibility using income, assets, partner status, and insurance setup",
              "Estimate monthly and annual healthcare allowance",
              "See your likely net health-insurance premium after allowance",
              "Planning guidance only — final entitlement comes from Dienst Toeslagen",
            ]}
            primaryCtaLabel="Start estimator"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Read healthcare allowance guide"
            secondaryCtaHref={GUIDE_HREF}
            image={{
              src: HERO_IMAGE,
              alt: "Illustration of Dutch zorgtoeslag planning: health cover, thresholds, and net premium after allowance.",
            }}
            imageFallback={{
              src: "/images/heroes/health-insurance-netherlands.png",
              alt: "Netherlands health insurance planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={canonical}
          />
        }
        intro={intro}
        disclosure={
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
            <li>
              <strong>Planning only</strong> — not an official zorgtoeslag determination, legal benefit decision, tax advice, or substitute for Dienst
              Toeslagen, Mijn Toeslagen, or your award letters.
            </li>
            <li>
              <strong>Income and asset tests</strong> in real life use precise legal definitions. Use this page to explore direction and ask better
              questions; confirm categories, exemptions, and current <strong>income limit</strong> / <strong>asset limit</strong> figures on government
              sources.
            </li>
            <li>
              <strong>Repayment risk</strong> exists if you receive allowance based on incomplete information. When unsure, model a higher income and
              update Dienst Toeslagen when payroll or household circumstances change.
            </li>
            <li>
              <strong>Partner status</strong> changes both ceilings and what income counts. If you are uncertain whether someone is a toeslagpartner for
              the allowance year, verify on official information or with qualified advice before treating results as final.
            </li>
            <li>
              Thresholds in the engine follow <strong>2026 planning figures</strong> in our configuration — they can drift from policy; double-check
              before major financial decisions.
            </li>
          </ul>
        }
        sidebar={sidebar}
        primarySectionTitle="Healthcare allowance estimator"
        primarySectionContent={
          <HealthcareAllowanceCalculatorClient calculatorCanonicalUrl={new URL(canonical, origin).toString()} siteName="ExpatCopilot" />
        }
        mainSectionTitle="Worked examples"
        examplesCollapsibleDefaultOpen
        examplesCollapsibleTitle="Worked examples"
        examplesSection={<HealthcareAllowanceScenarioCards />}
        seoContentSectionTitle="Healthcare allowance guide & how we estimate"
        seoContent={
          <>
            <HealthcareAllowancePageGuide />
            <div id="recommended-services" className="not-prose mt-12 scroll-mt-28 border-t border-copilot-primary/10 pt-10 md:scroll-mt-32">
              <h3 className="text-lg font-semibold tracking-tight text-copilot-text-primary">Recommended services & next steps</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-copilot-text-secondary">
                External providers for insurance comparison, tax help, relocation, and banking; plus on-site budget tools. None of this replaces official
                toeslagen channels.
              </p>
              <div className="mt-4">
                <HealthcareAllowanceRecommendedSections bundles={bundles} />
              </div>
            </div>
          </>
        }
        relatedGuidesSectionTitle="What to do next"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuidesResolved}
        faqItems={healthcareFaqItems}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Hubs and related tools">
            <Link href={`${BASE}/taxes/`} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch taxes hub
            </Link>
            <Link href={`${BASE}/taxes/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Tax tools hub
            </Link>
            <Link href={GUIDE_HREF} className="font-medium text-brand-600 hover:text-brand-700">
              Healthcare allowance guide
            </Link>
            <Link href={`${BASE}/health-insurance-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Health insurance (NL)
            </Link>
            <Link href={`${BASE}/services/health-insurance/`} className="font-medium text-brand-600 hover:text-brand-700">
              Health insurance services
            </Link>
            <Link href={`${BASE}/health/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Health tools
            </Link>
            <Link href={`${BASE}/health/`} className="font-medium text-brand-600 hover:text-brand-700">
              Health hub
            </Link>
            <Link href={`${BASE}/money/`} className="font-medium text-brand-600 hover:text-brand-700">
              Money hub
            </Link>
            <Link href={`${BASE}/family/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Family tools
            </Link>
            <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Moving guide
            </Link>
            <Link href={`${BASE}/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              All tools
            </Link>
          </nav>
        }
        extraSection={
          <section id="official-sources" className="scroll-mt-28 md:scroll-mt-32">
            <h2 className="text-lg font-semibold tracking-tight text-copilot-text-primary">Official sources</h2>
            <div className="mt-4">
              <HealthcareAllowanceOfficialSources />
            </div>
          </section>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}
