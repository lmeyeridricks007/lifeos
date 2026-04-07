import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero, MoveToolSidebar } from "@/components/page/move-shell";
import { SectionBlock } from "@/components/page/pillar-template";
import { CardLink } from "@/components/ui/card-link";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";
import { LastUpdated } from "@/components/ui/LastUpdated";
import { PayrollPlanningToolTrio } from "@/src/components/tools/PayrollPlanningToolTrio";
import { ThirtyPercentRulingCalculatorClient } from "@/src/components/tools/thirty-percent-ruling/ThirtyPercentRulingCalculatorClient";
import { AffiliateDisclosure } from "@/src/components/affiliates/AffiliateDisclosure";
import { buildSoftwareApplicationSchema } from "@/src/lib/seo/toolSchema";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { getThirtyPercentRulingTaxAdvisorCards } from "@/src/lib/recommended-services/pageRegistryRecommendations";
import { filterLiveInternalLinks, mapRelatedGuideLinks } from "@/src/lib/routes/routeStatus";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const canonical = "/netherlands/taxes/tools/30-ruling-calculator/";
const BASE = "/netherlands";

export const metadata: Metadata = {
  title: "30% Ruling Eligibility Calculator Netherlands 2026 | Allowance & Planning",
  description:
    "Check likely 30% ruling eligibility for the Netherlands: salary norms, recruitment and distance self-checks, estimated tax-free allowance, optional 2027 preview, indicative net comparison, and a printable summary for HR or advisors — planning only.",
  alternates: { canonical },
  keywords: [
    "30% ruling eligibility calculator Netherlands",
    "30 ruling calculator",
    "30 ruling salary threshold",
    "30 percent ruling calculator 2026",
    "30% ruling benefit estimate",
    "30 ruling 2027 preview",
    "30 procent regeling calculator",
  ],
  openGraph: {
    title: "30% Ruling Eligibility Calculator Netherlands | Planning Tool",
    description:
      "Likely eligibility checklist, allowance estimate on 2026 norms, optional indicative net comparison, scenarios, and export — not a tax office decision.",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "30% Ruling Eligibility Calculator Netherlands | Planning Tool",
    description:
      "Likely eligibility checklist, allowance estimate, optional net comparison, and export — planning only.",
  },
};

const FAQ_ITEMS = [
  {
    id: "who-qualify",
    question: "Who can qualify for the 30% ruling?",
    answer:
      "Typically incoming employees recruited from abroad who meet specific expertise and salary rules, pass the distance / prior-residence tests, and obtain approval via a joint employer filing. Scientific researchers and doctors in specialist training can follow different norm rules. This tool gives a planning signal from your answers — not a final determination.",
  },
  {
    id: "150km",
    question: "What is the 150 km rule?",
    answer:
      "The Dutch rules include a distance condition tied to where you lived before starting work in the Netherlands (often summarized as living more than 150 km from the Dutch border for a defined part of a 24-month lookback). Evidence and border cases matter — read the Belastingdienst guidance and confirm your timeline with an advisor.",
  },
  {
    id: "employer-apply",
    question: "Do I need my employer to apply?",
    answer:
      "Yes. The facility is requested with the Dutch tax office through the employer. Without employer cooperation you generally cannot receive the benefit on payroll, even if your salary looks sufficient on paper.",
  },
  {
    id: "masters-norm",
    question: "Does a qualifying master’s degree reduce the salary threshold?",
    answer:
      "If you are under 30 and meet the master’s condition, a reduced planning norm applies in this model (€36,497 in 2026 vs €48,013 standard). Always confirm how payroll counts holiday allowance and variable pay.",
  },
  {
    id: "change-employer",
    question: "Can I still qualify if I change employer?",
    answer:
      "Sometimes, with a new application and timing rules. Continuity is not automatic — mention a Dutch employer change to HR or a tax advisor early so deadlines and documentation stay on track.",
  },
  {
    id: "calculator-confirm",
    question: "Does the calculator confirm my eligibility?",
    answer:
      "No. It compares your inputs to planning norms and cap figures, applies your self-reported eligibility answers, and estimates an allowance. Only the Belastingdienst and an approved employer application determine eligibility and payroll treatment.",
  },
  {
    id: "2027-final",
    question: "Is the 2027 percentage already final?",
    answer:
      "We show a 27% legislative preview for comparison. Final percentages, transitions, and exceptions should be confirmed on Belastingdienst.nl and official government channels before you rely on them.",
  },
  {
    id: "net-indicative",
    question: "Why is the net comparison only indicative?",
    answer:
      "It applies simplified tax bands to estimated taxable wages — not official loonbelasting tables. Pension, insurance, credits, partner effects, and employer payroll settings are not modeled. Use it for planning conversations, not to predict your payslip. A dedicated Dutch net salary calculator is better for gross-to-net once your payroll facts are fixed.",
  },
  {
    id: "mid-year",
    question: "What if I start halfway through the year?",
    answer:
      "Set “months applicable” to the months the ruling covers in that calendar year. The estimated untaxed allowance is prorated by that factor.",
  },
  {
    id: "compare-scenarios",
    question: "Can I compare multiple offers or salaries?",
    answer:
      "Yes. Under Advanced assumptions, enable scenario compare for up to four packages, duplicate rows to tweak inputs, and see eligibility headlines, allowance, and estimated monthly net delta side by side.",
  },
  {
    id: "download",
    question: "Can I download or print my results?",
    answer:
      "Use Download HTML or Print / Save as PDF for an eligibility-first summary: assumptions, primary result, checklist, allowance, optional net comparison, next steps, disclaimer, and timestamp — suitable to share with HR or a tax advisor.",
  },
];

const OFFICIAL_SOURCES = [
  {
    label: "Belastingdienst — 30% facility (employees / overview)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/coming-to-work-in-the-netherlands-30-percent-facility",
  },
  {
    label: "Belastingdienst — 30% facility (employers / payroll)",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/payroll_taxes/you_hire_an_employee/the-30-facility-for-expatriates",
  },
  { label: "Business.gov.nl — Payroll taxes", href: "https://business.gov.nl/regulations/payroll-taxes/" },
  { label: "Government.nl — Income tax", href: "https://www.government.nl/topics/income-tax" },
];

const RELATED_NEXT_STEPS = [
  {
    href: `${BASE}/taxes/30-percent-ruling/`,
    title: "30% ruling guide",
    description: "Overview of the facility, who it is for, and how it fits your move.",
  },
  {
    href: `${BASE}/taxes/30-ruling-eligibility/`,
    title: "30% ruling eligibility",
    description: "Deeper eligibility angles to confirm with an advisor or employer.",
  },
  {
    href: `${BASE}/taxes/30-ruling-application/`,
    title: "30% ruling application",
    description: "Employer process and timing expectations at a high level.",
  },
  {
    href: `${BASE}/taxes/net-salary-netherlands/`,
    title: "Net salary in the Netherlands",
    description: "Dedicated gross-to-net context once payroll facts are fixed.",
  },
  {
    href: `${BASE}/taxes/tools/dutch-salary-net-calculator/`,
    title: "Dutch salary net calculator",
    description: "Use when you want gross-to-net planning outside this ruling-focused tool.",
  },
  {
    href: `${BASE}/work/tools/payslip-decoder/`,
    title: "Dutch payslip decoder",
    description: "Plain-language readout for bruto/netto and payroll lines — companion to ruling and net estimates.",
  },
  {
    href: `${BASE}/visa-checker/`,
    title: "Visa checker",
    description: "Clarify residence route before you lock compensation assumptions.",
  },
  {
    href: `${BASE}/taxes/expat-taxes-netherlands/`,
    title: "Expat taxes Netherlands",
    description: "Broader filing and residency context for internationals.",
  },
  {
    href: `${BASE}/moving-to-the-netherlands/`,
    title: "Moving to the Netherlands",
    description: "Onboarding hub for your relocation alongside tax planning.",
  },
  {
    href: `${BASE}/services/`,
    title: "Expat services directory",
    description: "Find advisors, relocation help, and other providers when you need hands-on support.",
  },
  {
    href: `${BASE}/work/working-in-netherlands/`,
    title: "Working in the Netherlands",
    description: "Employment basics that pair with compensation conversations.",
  },
];

const TOC = [
  { id: "tool-inputs", label: "Calculator" },
  { id: "tool-results", label: "Results" },
  { id: "how-the-tool-works", label: "How eligibility works" },
  { id: "seo-content", label: "Benefit estimate" },
  { id: "example-scenarios", label: "Examples" },
  { id: "recommended-services", label: "Advisors" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
];

const QUICK = [
  { label: "Check eligibility", href: "#tool-inputs" },
  { label: "See results", href: "#tool-results" },
  { label: "Decode a Dutch payslip", href: `${BASE}/work/tools/payslip-decoder/` },
  { label: "Tax tools hub", href: `${BASE}/taxes/tools/` },
  { label: "Netherlands taxes hub", href: `${BASE}/taxes/` },
];

export default function ThirtyPercentRulingCalculatorPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(canonical, origin).toString();
  const taxAdvisorCards = getThirtyPercentRulingTaxAdvisorCards();
  const relatedLive = filterLiveInternalLinks(
    RELATED_NEXT_STEPS.map((r) => ({
      label: r.title,
      href: r.href,
      title: r.title,
      description: r.description,
    }))
  );
  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Tax tools", url: "/netherlands/taxes/tools/" },
    { name: "30% ruling eligibility calculator", url: canonical },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "30% Ruling Eligibility Calculator Netherlands",
    description:
      "Eligibility-first planning tool for the Dutch 30% ruling: self-reported recruitment and distance checks, salary norm comparison, researcher routes, capped tax-free allowance with proration, optional 2027 preview, secondary indicative net comparison, multi-scenario compare, and HTML export / print.",
    url: canonical,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const faqJsonLd = buildFaqSchema(FAQ_ITEMS.map((q) => ({ question: q.question, answer: q.answer })));

  const intro = (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            t: "What this is for",
            d: "Planning only — likely eligibility signal, allowance estimate, and what still needs confirmation. Not a legal or payroll decision.",
          },
          {
            t: "Best for",
            d: "Expats comparing offers, HR & recruiters sanity-checking norms, and relocation planning before filing.",
          },
          {
            t: "What it checks",
            d: "Salary norm, under-30 master’s path, category route, employer intent, recruitment & 150 km self-checks, cap, months in scope, tax-free allowance.",
          },
          {
            t: "What it does not confirm",
            d: "Belastingdienst approval, precise payroll, border-distance evidence, or employer filing outcomes.",
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
      <PayrollPlanningToolTrio highlight="30ruling" className="pt-1" />
    </div>
  );

  const roadmapLinks = mapRelatedGuideLinks(RELATED_NEXT_STEPS.map((r) => ({ label: r.title, href: r.href })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}

      <ToolPageTemplate
        movingClusterHero
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
            title="30% Ruling Eligibility Calculator Netherlands"
            subtitle="Check likely eligibility for the Dutch 30% ruling, understand the key conditions, estimate the tax-free allowance, and optionally compare indicative net impact."
            introBullets={[
              "2026 rules + 2027 preview",
              "Eligibility-first result with why / why not",
              "Allowance estimate + optional net comparison",
              "Exportable planning summary",
            ]}
            primaryCtaLabel="Check eligibility"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Read the 30% ruling guide"
            secondaryCtaHref={`${BASE}/taxes/30-percent-ruling/`}
            image={{
              src: "/images/tools/expatlife-netherlands-budget-planning.png",
              alt: "Laptop and documents on a desk for Netherlands tax and salary planning.",
            }}
            imageFallback={{
              src: "/images/tools/expatlife-netherlands-budget-planning.png",
              alt: "Netherlands expat finance planning workspace.",
            }}
            shareUrl={shareUrl}
            pageId={canonical}
          />
        }
        intro={intro}
        disclosure="This tool is for planning only. It does not replace the Belastingdienst, your employer, or a qualified tax adviser."
        explanatorySectionsOuterTitle="How eligibility usually works"
        contentOrder="tool-first"
        explanatorySections={[
          {
            id: "norm-salary",
            title: "Salary norm",
            body: [
              "The facility is tied to minimum taxable salary levels that change over time. This tool uses 2026 planning figures unless you focus on the 2027 percentage preview.",
            ],
          },
          {
            id: "norm-masters",
            title: "Reduced norm for qualifying under-30 master’s",
            body: [
              "A lower threshold can apply when you are under 30 and meet the master’s condition — confirm degree recognition and timing with HR.",
            ],
          },
          {
            id: "employer-app",
            title: "Employer application",
            body: ["The employer requests the facility jointly with the tax office. Without that path, you generally cannot receive the benefit on payroll."],
          },
          {
            id: "recruited",
            title: "Recruited from abroad",
            body: ["Official rules look at whether you were hired or assigned from abroad for Dutch work — evidence matters beyond a simple yes/no in the tool."],
          },
          {
            id: "150km-block",
            title: "150 km rule",
            body: [
              "A distance and prior-residence test applies for many employees. Use Belastingdienst guidance and maps; border regions can fail even when you lived outside the Netherlands.",
            ],
          },
          {
            id: "special-cats",
            title: "Researcher & specialist-training routes",
            body: [
              "Scientific researchers and doctors in specialist training can follow different norm logic. Select the category that fits and confirm with payroll or a tax advisor.",
            ],
          },
        ]}
        sidebar={<MoveToolSidebar tocItems={TOC} quickLinks={QUICK} />}
        primarySectionTitle="Check likely 30% ruling eligibility"
        primarySectionContent={<ThirtyPercentRulingCalculatorClient />}
        seoContentSectionTitle="How we estimate the benefit"
        seoContent={
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                h: "Salary norm",
                p: "We compare your combined gross (salary plus optional bonus) to €48,013 or, if you are under 30 with a qualifying master’s, €36,497 (2026 planning figures).",
              },
              {
                h: "Cap",
                p: `Allowance calculations use a maximum salary base of €262,000 (2026 planning cap). Above that, only the capped portion counts.`,
              },
              {
                h: "Proration",
                p: "Untaxed allowance is multiplied by months applicable ÷ 12 when you are not in the ruling for the full calendar year.",
              },
              {
                h: "2027 preview",
                p: "When enabled, we recalculate with a 27% facility percentage as a legislative preview, without changing your primary year choice.",
              },
              {
                h: "Employer variation",
                p: "If you enter an employer allowance % under Advanced assumptions, we cap it at the statutory maximum for that year. Blank means “use the maximum”.",
              },
            ].map((x) => (
              <div
                key={x.h}
                className="rounded-2xl border-0 bg-copilot-bg-soft/90 p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.07]"
              >
                <p className="font-semibold text-copilot-text-primary">{x.h}</p>
                <p className="mt-2 text-sm text-copilot-text-secondary">{x.p}</p>
              </div>
            ))}
            <p className="md:col-span-2 text-sm text-copilot-text-secondary">
              Official norms and percentages change — verify on{" "}
              <a
                href="https://www.belastingdienst.nl/"
                className="font-semibold text-copilot-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Belastingdienst.nl
              </a>{" "}
              and{" "}
              <a
                href="https://business.gov.nl/"
                className="font-semibold text-copilot-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Business.gov.nl
              </a>{" "}
              before making decisions.
            </p>
          </div>
        }
        relatedGuidesSectionTitle="Related guides and next steps"
        relatedGuides={relatedLive.map((r) => ({
          href: r.href,
          title: r.title,
          description: r.description,
        }))}
        faqItems={FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Hubs and related tools">
            <Link href={`${BASE}/taxes/`} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch taxes hub
            </Link>
            <Link href={`${BASE}/taxes/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Tax tools hub
            </Link>
            <Link href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch net salary calculator
            </Link>
            <Link href={`${BASE}/work/tools/payslip-decoder/`} className="font-medium text-brand-600 hover:text-brand-700">
              Payslip decoder
            </Link>
            <Link href={`${BASE}/taxes/net-salary-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Net salary guide
            </Link>
            <Link href={`${BASE}/visa-checker/`} className="font-medium text-brand-600 hover:text-brand-700">
              Visa checker
            </Link>
            <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Moving to the Netherlands
            </Link>
            <Link href={`${BASE}/services/`} className="font-medium text-brand-600 hover:text-brand-700">
              Services directory
            </Link>
          </nav>
        }
        extraSection={
          <>
            <SectionBlock id="example-scenarios" title="Example situations" compact className="scroll-mt-24 pt-2">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    h: "Under 30 with a qualifying master’s",
                    p: "Set age below 30 and confirm the master’s box so the model uses the reduced €36,497 planning norm instead of €48,013.",
                  },
                  {
                    h: "Salary just above the norm",
                    p: "Use scenario compare to contrast €48k vs €52k and watch the eligibility headline — then confirm holiday allowance treatment with payroll.",
                  },
                  {
                    h: "Partial-year arrival",
                    p: "Lower months applicable to reflect only the months the ruling covers in that calendar year; the untaxed allowance prorates automatically.",
                  },
                  {
                    h: "Employer below full statutory %",
                    p: "Enter e.g. 27% in the employer allowance field to mirror payroll that does not apply the maximum tax-free percentage.",
                  },
                  {
                    h: "Researcher route",
                    p: "Pick scientific researcher to see how the tool signals category-specific norm handling — still confirm the exact Belastingdienst category.",
                  },
                  {
                    h: "Border-distance uncertainty",
                    p: "Mark the 150 km question as “Not sure” to see how uncertainty downgrades the signal — then collect addresses and dates for an advisor.",
                  },
                ].map((x) => (
                  <div
                    key={x.h}
                    className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm ring-1 ring-slate-200/40"
                  >
                    <p className="font-semibold text-slate-900">{x.h}</p>
                    <p className="mt-2 text-sm text-slate-600">{x.p}</p>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock id="recommended-services" title="Recommended advisors / tax support" compact className="scroll-mt-24 pt-2">
              <p className="mb-4 text-sm text-slate-600">
                Independent advice helps when you are <strong>close to the threshold</strong>, your <strong>employer is unsure</strong>, you are{" "}
                <strong>changing employer</strong>, you have <strong>prior ruling history</strong>, or you want help with the{" "}
                <strong>application and annual return</strong>. Fees and fit vary — confirm scope and pricing directly with any firm.
              </p>
              <div className="mb-6 flex flex-wrap gap-3">
                <Link
                  href={`${BASE}/services/`}
                  className="inline-flex min-h-10 items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
                >
                  Compare expat tax advisors
                </Link>
                <a
                  href="https://www.belastingdienst.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:border-brand-300"
                >
                  Official Belastingdienst →
                </a>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {taxAdvisorCards.map((service) => {
                  const initials =
                    service.name
                      .split(/[\s-]+/)
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((p) => p[0])
                      .join("")
                      .toUpperCase() || service.name.slice(0, 2).toUpperCase();
                  return (
                    <a
                      key={service.name}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col rounded-xl border-2 border-slate-200 bg-white p-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-2 group-hover:bg-brand-50">
                          {service.logo ? (
                            <Image
                              src={service.logo.src}
                              alt={service.logo.alt}
                              width={80}
                              height={48}
                              className="h-10 w-auto max-w-[72px] object-contain"
                            />
                          ) : (
                            <span
                              className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-sm font-semibold text-slate-600"
                              aria-hidden
                            >
                              {initials}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-slate-900 group-hover:text-brand-700">{service.name}</p>
                          <p className="mt-0.5 text-sm text-slate-600">{service.useFor}</p>
                        </div>
                      </div>
                      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">Best for: expat tax &amp; 30% ruling</p>
                      <p className="mt-3 border-t border-slate-100 pt-3 text-xs font-medium text-slate-700">
                        {service.priceRange ?? "Confirm fees directly with the provider."}
                      </p>
                      <span className="mt-2 inline-block text-xs font-medium text-brand-600 group-hover:text-brand-700">
                        Speak to a specialist →
                      </span>
                    </a>
                  );
                })}
              </div>
              <AffiliateDisclosure
                variant="copilot"
                text="We may earn a commission from some partners listed elsewhere on ExpatCopilot. Provider links here are editorial picks for 30% ruling support — not paid placement in this block."
              />
              <p className="mt-3 text-sm text-slate-600">
                <Link href={`${BASE}/taxes/tax-advisors-netherlands/`} className="font-semibold text-brand-600 hover:text-brand-700">
                  Tax advisors guide (roadmap)
                </Link>{" "}
                <ComingSoonBadge className="ml-1 align-middle" />
              </p>
            </SectionBlock>

            <SectionBlock
              id="net-comparison-explainer"
              title="What the net salary comparison means (and what it does not)"
              compact
              className="scroll-mt-24 pt-2"
            >
              <div className="prose prose-slate max-w-none text-sm text-slate-600">
                <p>
                  The tool estimates payroll-style tax on your <strong>taxable wages</strong> in two cases: treating your full gross as
                  taxable (no ruling structure) versus subtracting the estimated tax-free allowance first (with ruling structure). The{" "}
                  <strong>difference in estimated net</strong> highlights how lowering the taxable base can affect take-home, holding gross
                  constant.
                </p>
                <p>
                  It does <strong>not</strong> reproduce your payslip: we skip precise loonbelasting tables, employee insurance slices,
                  pension deductions, full heffingskorting logic, partner effects, 30%-vs-non-30% payroll setups, and holiday-allowance
                  reporting choices. Use the numbers for <strong>planning conversations</strong>, then validate with payroll or a Dutch tax
                  advisor.
                </p>
              </div>
            </SectionBlock>

            <SectionBlock id="roadmap-guides" title="More 30% ruling & tax topics" compact className="scroll-mt-24 pt-2">
              <p className="mb-4 text-sm text-slate-600">
                Some guides are still on the roadmap — labels show what is live today.
              </p>
              <ul className="space-y-2">
                {roadmapLinks.map((link, i) => (
                  <li key={link.kind === "live" ? link.href : `${link.label}-${i}`}>
                    {link.kind === "live" ? (
                      <Link href={link.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                        {link.label}
                      </Link>
                    ) : (
                      <span className="inline-flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {link.label}
                        <ComingSoonBadge />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <SectionBlock id="official-sources" title="Official sources & methodology" className="scroll-mt-24">
              <LastUpdated date="April 2026" className="mb-4 text-slate-600" />
              <p className="mb-4 text-sm text-slate-600">
                This calculator applies published planning figures for norms and cap; it does not access your tax file or employer payroll.
              </p>
              <ul className="space-y-2">
                {OFFICIAL_SOURCES.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-600 hover:underline"
                    >
                      {s.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}
