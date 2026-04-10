import type { Metadata } from "next";
import Link from "next/link";
import { MoveHero } from "@/components/page/move-shell";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { EmploymentTypeScenarioClient } from "@/src/components/tools/employment-type-scenario/EmploymentTypeScenarioClient";
import { EmploymentTypeScenarioRightRail } from "@/src/components/tools/employment-type-scenario/EmploymentTypeScenarioRightRail";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildHowToSchema, buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import {
  EMPLOYMENT_TYPE_EXAMPLE_SCENARIOS,
  EMPLOYMENT_TYPE_FAQ,
  EMPLOYMENT_TYPE_HOW_TO_STEPS,
  EMPLOYMENT_TYPE_OFFICIAL_SOURCES,
  EMPLOYMENT_TYPE_RELATED_GUIDES,
  EMPLOYMENT_TYPE_SCENARIO_AT_A_GLANCE,
  EMPLOYMENT_TYPE_SCENARIO_BEFORE_START_EXTRA,
  EMPLOYMENT_TYPE_SCENARIO_CANONICAL,
  NL_BASE,
} from "@/src/content/tools/employment-type-scenario/content";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Employment Type Scenario Tool Netherlands | Compare Employee, ZZP & Contractor | ExpatCopilot";
const META_DESCRIPTION =
  "Free Netherlands planner: compare permanent vs fixed-term employee, umbrella contractor, ZZP, and foreign-remote work. Indicative income, benefits, admin, sponsorship fit, and risk flags — with links to salary, 30% ruling, double tax, and contract scanner tools. Not legal or tax advice.";
/** On-brand hero for this tool (generated asset). Dimensions match file in `public/images/tools/`. */
const HERO_IMAGE = "/images/tools/employment-type-scenario-tool-hero.png";
const HERO_IMAGE_WIDTH = 1376;
const HERO_IMAGE_HEIGHT = 768;

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: EMPLOYMENT_TYPE_SCENARIO_CANONICAL },
  keywords: [
    "employee vs zzp Netherlands",
    "employee vs contractor Netherlands",
    "contractor vs employee Netherlands",
    "fixed-term vs permanent contract Netherlands",
    "tijdelijk contract vs vast contract Netherlands",
    "umbrella contractor Netherlands",
    "payroll contractor Netherlands",
    "best employment type for expats Netherlands",
    "easiest work model for highly skilled migrant Netherlands",
    "zzp or employee Netherlands",
    "contractor vs zzp Netherlands",
    "foreign employer living in Netherlands payroll",
    "gross salary vs net Netherlands comparison tool",
    "Dutch work model comparison",
    "employment type scenario planner",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: EMPLOYMENT_TYPE_SCENARIO_CANONICAL,
    images: [
      {
        url: HERO_IMAGE,
        width: HERO_IMAGE_WIDTH,
        height: HERO_IMAGE_HEIGHT,
        alt: "Illustration of a desk with laptop and documents for comparing employment scenarios in the Netherlands.",
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

function resolveRelatedGuides() {
  return EMPLOYMENT_TYPE_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function EmploymentTypeScenarioToolPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(EMPLOYMENT_TYPE_SCENARIO_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();
  const pageContext = EMPLOYMENT_TYPE_SCENARIO_CANONICAL;

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Work tools", url: "/netherlands/work/tools/" },
    { name: "Employment type scenario tool", url: EMPLOYMENT_TYPE_SCENARIO_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Employment Type Scenario Tool Netherlands",
    description:
      "Deterministic planning comparison for Dutch work models: indicative money, scored trade-offs, risk highlights, and export summary. Not legal, tax, payroll, or immigration advice.",
    url: EMPLOYMENT_TYPE_SCENARIO_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: META_TITLE,
    description: META_DESCRIPTION,
    canonicalPath: EMPLOYMENT_TYPE_SCENARIO_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(EMPLOYMENT_TYPE_FAQ.map((item) => ({ question: item.question, answer: item.answer })));
  const howToJsonLd = buildHowToSchema({
    name: "How to use the Employment Type Scenario Tool (Netherlands)",
    description:
      "Compare Dutch employment structures with indicative money, scored trade-offs, and risk highlights. Planning only — confirm with advisors.",
    canonicalPath: EMPLOYMENT_TYPE_SCENARIO_CANONICAL,
    steps: [...EMPLOYMENT_TYPE_HOW_TO_STEPS],
  });

  const intro = (
    <div className="space-y-6">
      <div
        id="employment-type-at-a-glance"
        className="scroll-mt-28 rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] md:scroll-mt-32 md:p-7 border-l-[5px] border-l-copilot-primary/55"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-copilot-primary">At a glance</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">
          Employment Type Scenario Tool — Netherlands
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {EMPLOYMENT_TYPE_SCENARIO_AT_A_GLANCE.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.08] md:p-5 border-l-4 border-l-copilot-primary/45"
            >
              <p className="text-sm font-semibold text-copilot-text-primary">{c.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary sm:text-sm">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />

      <ToolPageTemplate
        movingClusterHero
        introDisclaimerId="before-you-start"
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
            title="Employment Type Scenario Tool Netherlands"
            subtitle="Compare employee, fixed-term, contractor, and ZZP-style work scenarios in the Netherlands across income, benefits, security, admin burden, and expat practicality."
            introBullets={[
              "Compare permanent employee, fixed-term, contractor, and self-employed scenarios",
              "Understand trade-offs in take-home income, security, benefits, and admin",
              "Includes expat-specific considerations like 30% ruling planning and sponsorship friendliness",
              "Planning tool only — not legal, tax, payroll, or immigration advice",
            ]}
            primaryCtaLabel="Start comparing"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Read work model guide"
            secondaryCtaHref={`${NL_BASE}/work/contractor-vs-employee-netherlands/`}
            image={{
              src: HERO_IMAGE,
              alt: "Desk with laptop and contract papers — visual for comparing employee, contractor, and ZZP work in the Netherlands.",
            }}
            imageFallback={{
              src: HERO_IMAGE,
              alt: "Work planning illustration for the Netherlands employment type scenario tool.",
            }}
            shareUrl={shareUrl}
            pageId={EMPLOYMENT_TYPE_SCENARIO_CANONICAL}
          />
        }
        intro={intro}
        disclosure={
          <div className="space-y-3 [&_ul]:text-copilot-text-secondary">
            <p className="text-sm text-copilot-text-secondary">
              This page is a planning and comparison aid only. It does not provide legal, tax, payroll, or immigration advice, does not
              determine employment status or sponsor eligibility, and does not compute exact wage tax or social premiums. Modelled
              take-home figures reuse indicative salary math for employee-style paths and planning proxies for contractor and ZZP routes
              — verify all outcomes with qualified advisors, payroll providers, and official sources before you decide or sign.
            </p>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
              {EMPLOYMENT_TYPE_SCENARIO_BEFORE_START_EXTRA.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        }
        sidebar={<EmploymentTypeScenarioRightRail />}
        primarySectionTitle="Employment type scenario tool"
        primarySectionContent={
          <EmploymentTypeScenarioClient calculatorCanonicalUrl={shareUrl} pageContext={pageContext} />
        }
        mainSectionTitle="Employment type comparison tool"
        examplesCollapsibleDefaultOpen
        examplesSection={
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              These presets are editorial walk-throughs — map them to your own inputs and priorities. They are not personalised legal,
              tax, or immigration advice.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {EMPLOYMENT_TYPE_EXAMPLE_SCENARIOS.map((ex) => (
                <article
                  key={ex.title}
                  className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 text-sm shadow-expatos-sm"
                >
                  <p className="font-semibold text-copilot-text-primary">{ex.title}</p>
                  {"whoFor" in ex && ex.whoFor ? (
                    <p className="mt-2 text-copilot-text-secondary">
                      <span className="font-medium text-copilot-text-primary">Who it is for: </span>
                      {ex.whoFor}
                    </p>
                  ) : null}
                  <p className="mt-2 text-copilot-text-secondary">
                    <span className="font-medium text-copilot-text-primary">When useful: </span>
                    {ex.whenUseful}
                  </p>
                  {"demonstrate" in ex && ex.demonstrate ? (
                    <p className="mt-2 text-copilot-text-secondary">
                      <span className="font-medium text-copilot-text-primary">What the tool demonstrates: </span>
                      {ex.demonstrate}
                    </p>
                  ) : null}
                  {"keyInputs" in ex && ex.keyInputs ? (
                    <p className="mt-2 text-copilot-text-secondary">
                      <span className="font-medium text-copilot-text-primary">Inputs that matter most: </span>
                      {ex.keyInputs}
                    </p>
                  ) : null}
                  <p className="mt-2 text-copilot-text-secondary">
                    <span className="font-medium text-copilot-text-primary">Trade-offs: </span>
                    {ex.tradeOffs}
                  </p>
                  <p className="mt-2 text-copilot-text-secondary">
                    <span className="font-medium text-copilot-text-primary">What often wins: </span>
                    {ex.oftenWins}
                  </p>
                </article>
              ))}
            </div>
          </div>
        }
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "compare-models",
            title: "How we compare work models",
            bullets: [
              "Each scenario gets dimension scores for income, stability, flexibility, admin burden, benefits alignment, and expat practicality (including sponsorship and tax-complexity hints).",
              "Your priority sliders are normalised to weights and combined into an overall fit score — so the same numbers can rank differently if you stress income vs security.",
              "Compare-all mode ranks every structure; compare-two isolates the offers you are negotiating.",
            ],
          },
          {
            id: "money-layer",
            title: "What the money layer is doing",
            bullets: [
              "Permanent and fixed-term employees use the same indicative Dutch net engine as the salary net calculator, including optional 30% ruling planning assumptions.",
              "Contractors subtract umbrella-style monthly and percentage fees, then reuse payroll-style take-home assumptions on the remainder.",
              "ZZP applies billable presets, downtime, and business cost knobs, then a simplified tax proxy — not a full MKB or SME return.",
            ],
          },
          {
            id: "risk-questions",
            title: "Risk highlights and question lists",
            body: [
              "When several topics fire at once — sponsorship tension, cross-border payroll, fixed-term uncertainty, or heavy admin — the UI surfaces risk cards and suggested questions for HR, payroll, or immigration counsel. That pattern also drives which recommended service blocks appear first.",
            ],
          },
          {
            id: "not-advice",
            title: "Why this is not advice",
            bullets: [
              "Employment status, DBA-style relationship tests, CAO coverage, IND decisions, and treaty withholding sit outside this page.",
              "Use the output to narrow scenarios and brief advisors — not to file taxes, choose a permit route alone, or treat indicative net as payroll truth.",
            ],
          },
        ]}
        seoContentSectionTitle="Employee vs contractor vs ZZP in the Netherlands"
        seoContent={
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              Choosing between{" "}
              <strong className="text-copilot-text-primary">employment, fixed-term employment, contractor payroll, and ZZP</strong> in
              the Netherlands is rarely a pure math problem. Visa sponsorship, pension accrual, paid leave, insurance, bench time, and
              provider fees can move the “real” answer away from headline rates. This tool keeps the comparison structured and
              explainable so you can align offers with your risk tolerance before you invest in professional review.
            </p>
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              Continue with the{" "}
              <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-brand-600 hover:underline">
                Dutch salary net calculator
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-brand-600 hover:underline">
                30% ruling calculator
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/taxes/tools/double-tax-awareness-tool/`} className="font-semibold text-brand-600 hover:underline">
                double tax awareness tool
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/work/tools/employment-contract-risk-scanner/`} className="font-semibold text-brand-600 hover:underline">
                employment contract risk scanner
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/money/tools/cost-of-living-calculator/`} className="font-semibold text-brand-600 hover:underline">
                cost of living calculator
              </Link>
              , and{" "}
              <Link href={`${NL_BASE}/housing/tools/rent-affordability-calculator/`} className="font-semibold text-brand-600 hover:underline">
                rent affordability calculator
              </Link>
              . For context, read the{" "}
              <Link href={`${NL_BASE}/taxes/`} className="font-semibold text-brand-600 hover:underline">
                Netherlands taxes hub
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/moving-to-the-netherlands/`} className="font-semibold text-brand-600 hover:underline">
                expat moving hub
              </Link>
              , and the{" "}
              <Link href={`${NL_BASE}/work/working-in-netherlands/`} className="font-semibold text-brand-600 hover:underline">
                working in the Netherlands guide
              </Link>
              .
            </p>

            <div id="comparison-education" className="scroll-mt-28 space-y-4 md:scroll-mt-32">
              <h3 className="text-base font-semibold text-copilot-text-primary">Comparison topics (educational)</h3>
              <p className="text-sm text-copilot-text-secondary">
                Short, search-friendly explainers that mirror what expats type when comparing offers. They support the tool — they do
                not replace advisors.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="font-semibold text-copilot-text-primary">Employee vs ZZP in the Netherlands</p>
                  <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
                    Employment puts you on Dutch payroll with wage tax withholding, built-in sick pay and holiday pay norms, and usually
                    simpler mortgage and sponsor narratives. ZZP means KvK-style entrepreneurship, VAT and income tax responsibilities,
                    and income that swings with clients and bench time. The same gross story rarely carries over — compare net after
                    costs and after{" "}
                    <Link href={`${NL_BASE}/taxes/gross-vs-netherlands-salary/`} className="font-medium text-brand-600 hover:underline">
                      gross vs net
                    </Link>{" "}
                    effects.
                  </p>
                </article>
                <article className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="font-semibold text-copilot-text-primary">Fixed-term vs permanent contract</p>
                  <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
                    Pay can look identical while renewal risk, notice periods, pension vesting, and “income certainty” for renting differ.
                    For housing budgets, pair contract length with the{" "}
                    <Link href={`${NL_BASE}/housing/tools/rent-affordability-calculator/`} className="font-medium text-brand-600 hover:underline">
                      rent affordability tool
                    </Link>
                    . For clauses, run the{" "}
                    <Link href={`${NL_BASE}/work/tools/employment-contract-risk-scanner/`} className="font-medium text-brand-600 hover:underline">
                      contract scanner
                    </Link>
                    .
                  </p>
                </article>
                <article className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="font-semibold text-copilot-text-primary">Contractor vs employee</p>
                  <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
                    “Contractor” here includes umbrella / payroll-style arrangements where a provider withholds wage tax. That is not
                    the same as ZZP invoicing. Employees sit directly on the client payroll. Misclassification risk is a legal topic —
                    start from our{" "}
                    <Link href={`${NL_BASE}/work/contractor-vs-employee-netherlands/`} className="font-medium text-brand-600 hover:underline">
                      contractor vs employee guide
                    </Link>{" "}
                    and professional advice.
                  </p>
                </article>
                <article className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="font-semibold text-copilot-text-primary">Which option is easiest for expats needing sponsorship?</p>
                  <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
                    Many skilled routes expect a Dutch recognised sponsor, an employment contract, and stable salary evidence. Independent
                    or foreign-employer setups can work in specific cases but are usually more documentation-heavy. Read{" "}
                    <Link href={`${NL_BASE}/work/working-in-netherlands/`} className="font-medium text-brand-600 hover:underline">
                      work permits in the Netherlands
                    </Link>{" "}
                    and confirm with immigration counsel — the tool only scores practicality, not IND outcomes.
                  </p>
                </article>
                <article className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm md:col-span-2">
                  <p className="font-semibold text-copilot-text-primary">Why higher gross does not always mean better fit</p>
                  <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
                    Headline salary or day rate ignores umbrella fees, unpaid gaps, lost employer pension, insurance, relocation timing,
                    and tax residency complexity. This tool’s overall score can rank a lower-net scenario higher if you weight stability,
                    benefits, or sponsorship simplicity — matching how people actually experience a move. Cross-check indicative money
                    with the{" "}
                    <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-brand-600 hover:underline">
                      salary calculator
                    </Link>{" "}
                    and{" "}
                    <Link href={`${NL_BASE}/taxes/expat-taxes-netherlands/`} className="font-medium text-brand-600 hover:underline">
                      expat taxes guide
                    </Link>
                    .
                  </p>
                </article>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "30% ruling planning",
                  text: "Ruling assumptions here are planning-only. Eligibility and payroll application belong in the dedicated calculator and with your employer’s payroll team.",
                },
                {
                  title: "Foreign employer + NL residence",
                  text: "Cross-border social security, withholding, and filing can dominate the decision even when gross looks fine. Use double-tax awareness and expect complexity flags in the tool.",
                },
                {
                  title: "Benefits and CAO context",
                  text: "Pension match, travel allowance, and collective agreement coverage can flip value when two offers look similar in base salary — mark what matters in your profile inputs.",
                },
                {
                  title: "Recommended services follow your lean",
                  text: "After you calculate, provider blocks emphasise tax and mobility support for contractor/ZZP-style wins, or relocation and immigration support for payroll wins — with legal/tax review surfaced sooner when risk flags stack up.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="font-semibold text-copilot-text-primary">{item.title}</p>
                  <p className="mt-2 text-sm text-copilot-text-secondary">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        }
        relatedGuidesSectionTitle="Related tools / guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        faqItems={EMPLOYMENT_TYPE_FAQ}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related work, taxes, and moving links">
            <Link href={`${NL_BASE}/work/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Work tools hub
            </Link>
            <Link href={`${NL_BASE}/work/working-in-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Working in the Netherlands
            </Link>
            <Link href={`${NL_BASE}/work/working-in-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Work permit Netherlands
            </Link>
            <Link href={`${NL_BASE}/taxes/`} className="font-medium text-brand-600 hover:text-brand-700">
              Taxes hub
            </Link>
            <Link href={`${NL_BASE}/taxes/expat-taxes-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Expat taxes guide
            </Link>
            <Link href={`${NL_BASE}/moving-to-the-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Moving to the Netherlands hub
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch salary net calculator
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              30% ruling calculator
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/double-tax-awareness-tool/`} className="font-medium text-brand-600 hover:text-brand-700">
              Double tax awareness tool
            </Link>
            <Link href={`${NL_BASE}/work/tools/employment-contract-risk-scanner/`} className="font-medium text-brand-600 hover:text-brand-700">
              Employment contract risk scanner
            </Link>
            <Link href={`${NL_BASE}/money/tools/cost-of-living-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Cost of living calculator
            </Link>
            <Link href={`${NL_BASE}/housing/tools/rent-affordability-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Rent affordability calculator
            </Link>
          </nav>
        }
        extraSection={
          <section id="official-sources" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
            <h3 className="text-lg font-semibold text-copilot-text-primary">Official sources</h3>
            <p className="text-sm text-copilot-text-secondary">
              Use these for authoritative rules; combine with professional advice for your situation.
            </p>
            <ul className="space-y-2">
              {EMPLOYMENT_TYPE_OFFICIAL_SOURCES.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-brand-600 hover:underline">
                    {source.label} →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}
