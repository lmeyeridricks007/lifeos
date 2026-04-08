import type { Metadata } from "next";
import Link from "next/link";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { MoveHero } from "@/components/page/move-shell";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import {
  DOUBLE_TAX_CANONICAL,
  DOUBLE_TAX_FAQ_ITEMS,
  DOUBLE_TAX_OFFICIAL_SOURCES,
  DOUBLE_TAX_RELATED_GUIDES,
  NL_BASE,
} from "@/src/content/tools/double-tax-awareness/content";
import { DoubleTaxAwarenessAtAGlance } from "@/src/components/tools/double-tax-awareness/DoubleTaxAwarenessAtAGlance";
import { DoubleTaxAwarenessCalculatorClient } from "@/src/components/tools/double-tax-awareness/DoubleTaxAwarenessCalculatorClient";
import { DoubleTaxAwarenessRightRail } from "@/src/components/tools/double-tax-awareness/DoubleTaxAwarenessRightRail";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Double Tax Awareness Tool Netherlands | ExpatCopilot";
const META_DESCRIPTION =
  "Check whether you may need to file tax in more than one country when moving to or working in the Netherlands. Understand residency signals, foreign income, treaty relief, and next steps.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: DOUBLE_TAX_CANONICAL },
  keywords: [
    "double tax awareness Netherlands",
    "tax residency Netherlands expat",
    "dual residency risk Netherlands",
    "foreign income declaration Netherlands",
    "tax treaty relief Netherlands expat",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: DOUBLE_TAX_CANONICAL,
    images: [
      {
        url: "/images/tools/expatlife-netherlands-budget-planning.png",
        width: 1200,
        height: 630,
        alt: "International tax planning documents and salary paperwork for expats moving to the Netherlands.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/images/tools/expatlife-netherlands-budget-planning.png"],
  },
};

function resolveRelatedGuides() {
  return DOUBLE_TAX_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function DoubleTaxAwarenessToolPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(DOUBLE_TAX_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Tax tools", url: "/netherlands/taxes/tools/" },
    { name: "Double tax awareness tool", url: DOUBLE_TAX_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Double Tax Awareness Tool Netherlands",
    description:
      "Deterministic planning tool for expats: likely Dutch residency signals, dual-residency risk, income-type jurisdiction map, likely treaty relief category, filing checklist, and export summary. Not legal advice.",
    url: DOUBLE_TAX_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: META_TITLE,
    description: META_DESCRIPTION,
    canonicalPath: DOUBLE_TAX_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(DOUBLE_TAX_FAQ_ITEMS.map((item) => ({ question: item.question, answer: item.answer })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}

      <ToolPageTemplate
        movingClusterHero
        introDisclaimerId="before-you-start"
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
            title="Double Tax Awareness Tool Netherlands"
            subtitle="Understand whether you may need to file in more than one country, which income types may be taxed where, and what treaty relief may typically apply when you move to or work in the Netherlands."
            introBullets={[
              "Residency planning signals: likely Dutch, likely foreign, or possible dual-residency risk",
              "Income-type map for salary, freelance, rental, pension, and investment scenarios",
              "Treaty-awareness guidance in plain English: exemption, credit, and when review is needed",
              "Action checklist for filings, documents, payroll checks, and advisor escalation",
            ]}
            primaryCtaLabel="Start tool"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Read Dutch taxes guide"
            secondaryCtaHref={`${NL_BASE}/taxes/`}
            image={{
              src: "/images/tools/expatlife-netherlands-budget-planning.png",
              alt: "Tax documents, salary papers, and planning notes for an international move to the Netherlands.",
            }}
            imageFallback={{
              src: "/images/tools/expatlife-netherlands-budget-planning.png",
              alt: "International move and Dutch tax planning illustration.",
            }}
            shareUrl={shareUrl}
            pageId={DOUBLE_TAX_CANONICAL}
          />
        }
        intro={<DoubleTaxAwarenessAtAGlance />}
        disclosure="Planning view only — not tax or legal advice. This tool does not compute exact tax due, does not determine tax residency conclusively, and does not replace treaty analysis by a qualified advisor. Do not submit returns based on this page alone. Treaty and tie-breaker outcomes depend on your detailed facts and timelines; use this output to spot risk, likely direction, and questions to raise — then verify filing positions with official sources and a qualified advisor before deadlines."
        sidebar={<DoubleTaxAwarenessRightRail />}
        primarySectionTitle="Calculator"
        primarySectionContent={<DoubleTaxAwarenessCalculatorClient calculatorCanonicalUrl={new URL(DOUBLE_TAX_CANONICAL, origin).toString()} />}
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "residency-signals-explained",
            title: "How we estimate residency signals",
            body: [
              "We use deterministic factors such as BRP registration, time in the Netherlands, home/family anchors, and where work is physically performed. The output is a likely planning signal, not a legal residency verdict.",
            ],
          },
          {
            id: "double-filing-explained",
            title: "Why filing in two countries does not always mean double tax",
            body: [
              "Expats often need more than one tax return. That can still lead to relief through exemption or tax-credit methods when domestic law and treaty rules permit.",
            ],
          },
          {
            id: "treaty-relief-explained",
            title: "What treaties usually do",
            body: [
              "Treaties usually allocate taxing rights by income type and may offer relief to reduce overlap. Real outcomes depend on your facts, documentation, and the treaty article that applies.",
            ],
          },
          {
            id: "common-mistakes",
            title: "Common expat mistakes",
            body: [
              "Assuming one payroll country means one filing country, not keeping foreign tax evidence, and skipping early tie-breaker review when homes/work are split are common avoidable mistakes.",
            ],
          },
          {
            id: "ruling-fit",
            title: "How 30% ruling fits in",
            body: [
              "30% ruling may change Dutch payroll taxable salary but does not remove treaty logic, foreign source taxation, or potential foreign filing duties.",
            ],
          },
          {
            id: "awareness-not-advice",
            title: "Why this is awareness, not legal advice",
            body: [
              "We intentionally use cautious wording such as likely, typically, often, and may. Use the output to prepare questions, records, and advisor conversations.",
            ],
          },
        ]}
        seoContentSectionTitle="Double-tax planning guide for expats in the Netherlands"
        seoContent={
          <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Deterministic signal scoring",
                  text: "Residency and risk are based on explicit factual signals, not black-box AI outputs. Every section maps to explainable reason bullets.",
                },
                {
                  title: "Income-type tax map",
                  text: "Each selected income type gets a practical line for likely jurisdiction, Dutch declaration relevance, risk level, and a short “what this means for you” takeaway.",
                },
                {
                  title: "Relief method categories",
                  text: "The tool points to exemption, tax credit, treaty review, or unclear/domestic categories without claiming article-level treaty certainty.",
                },
                {
                  title: "Action-first output",
                  text: "Results prioritize filing steps, records checklist, and escalation flags so users can prepare before filing deadlines.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 shadow-expatos-sm">
                  <p className="font-semibold text-copilot-text-primary">{item.title}</p>
                  <p className="mt-2 text-sm text-copilot-text-secondary">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/60 p-4 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]">
              <p className="font-semibold text-copilot-text-primary">Common double taxation situations for expats</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Salary from a Dutch employer while you still have ties or income abroad.</li>
                <li>Remote work for a foreign employer while living in the Netherlands.</li>
                <li>Rental or investment income in another country while you are likely Dutch resident.</li>
                <li>A mid-year move with months split across two countries.</li>
                <li>Cross-border commuting or mixed workdays between the Netherlands and a neighbour country.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm text-copilot-text-secondary">
              <p className="font-semibold text-copilot-text-primary">Do you need to file taxes in two countries?</p>
              <p className="mt-2">
                Often, maybe. Many expats file in more than one country when they have residency ties, source income abroad, or work physically performed in more than one place. Whether you must file depends on domestic rules, source rules, and sometimes treaty allocation — this tool only gives a planning signal and questions to verify.
              </p>
            </div>
            <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm text-copilot-text-secondary">
              <p className="font-semibold text-copilot-text-primary">Why filing in two countries is not the same as paying tax twice</p>
              <p className="mt-2">
                A second return often exists to report income and claim relief (exemption or credit) where domestic law and treaties allow. The hard part is usually timing, documentation, and getting payroll and declarations aligned — not automatically paying full tax in both places.
              </p>
            </div>
            <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm text-copilot-text-secondary">
              <p className="font-semibold text-copilot-text-primary">Common records to keep for cross-border tax questions</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Payslips, annual statements, and employer or assignment letters.</li>
                <li>Foreign tax assessments, withholding certificates, and bank proof of tax paid.</li>
                <li>Travel and workday logs when work spans borders.</li>
                <li>Property rental statements and mortgage or cost summaries.</li>
                <li>Registration dates and address history (BRP and abroad).</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/60 p-4 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]">
              <p className="font-semibold text-copilot-text-primary">Examples of situations this tool is designed for</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "Salary in NL + rental income abroad", d: "Typical split between Dutch residency reporting and property-country sourcing." },
                  { t: "Remote worker, foreign employer, living in NL", d: "Payroll country may differ from where work is performed — filing friction is common." },
                  { t: "Move to NL mid-year", d: "Split-year facts often need clear timelines and document trails." },
                  { t: "Dutch resident with foreign dividends", d: "Withholding abroad plus Dutch declaration context often needs mapping." },
                  { t: "Cross-border commuter", d: "Workday location can drive which country leads on salary tax for parts of the year." },
                ].map((x) => (
                  <article key={x.t} className="rounded-xl border border-copilot-primary/10 bg-copilot-surface p-3">
                    <p className="font-semibold text-copilot-text-primary">{x.t}</p>
                    <p className="mt-1 text-xs">{x.d}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/60 p-4 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]">
              <p className="font-semibold text-copilot-text-primary">Common planning mistakes this tool helps reduce</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Assuming one payroll country always means one filing country.</li>
                <li>Ignoring foreign-source income because tax was already withheld abroad.</li>
                <li>Missing tie-breaker preparation when homes or work patterns are split.</li>
                <li>Mixing up 30% ruling payroll impact with treaty relief logic.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm text-copilot-text-secondary">
              <p className="font-semibold text-copilot-text-primary">You may still need to declare income even if taxed abroad</p>
              <p className="mt-2">
                Foreign tax paid does not always remove Dutch declaration duties when you are likely Dutch tax resident. In many cases, the sequence is: declare income, then apply likely exemption or credit logic if available.
              </p>
            </div>
            <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm text-copilot-text-secondary">
              <p className="font-semibold text-copilot-text-primary">What people usually misunderstand</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Filing in two countries is not the same as paying full tax twice.</li>
                <li>183-day references are useful signals, not full legal analysis by themselves.</li>
                <li>30% ruling payroll treatment does not decide treaty relief or foreign filing obligations.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-copilot-primary/10 bg-copilot-surface p-4 text-sm text-copilot-text-secondary">
              <p>
                Continue with related tools for payroll context and salary planning:{" "}
                <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-copilot-primary hover:underline">
                  30% ruling calculator
                </Link>
                ,{" "}
                <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-copilot-primary hover:underline">
                  Dutch salary net calculator
                </Link>
                , and{" "}
                <Link href={`${NL_BASE}/work/tools/payslip-decoder/`} className="font-semibold text-copilot-primary hover:underline">
                  payslip decoder
                </Link>
                .
              </p>
            </div>
          </div>
        }
        relatedGuidesSectionTitle="Related guides"
        relatedGuidesSectionId="related-guides"
        relatedGuides={relatedGuides}
        beforeFaq={
          <section className="rounded-2xl border border-copilot-primary/12 bg-copilot-bg-soft/60 p-5 text-sm text-copilot-text-secondary ring-1 ring-copilot-primary/[0.06]">
            <p className="font-semibold text-copilot-text-primary">Trust and method transparency</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Rules are deterministic and explainable, not generated case-by-case by AI guesses.</li>
              <li>Outputs intentionally use cautious language: likely, typically, often, may, and depends on your facts.</li>
              <li>No country-specific treaty article engine is assumed in this version; escalation flags are explicit when detail is needed.</li>
            </ul>
          </section>
        }
        faqItems={DOUBLE_TAX_FAQ_ITEMS}
        internalLinkStrip={
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Related tax links">
            <Link href={`${NL_BASE}/taxes/`} className="font-medium text-brand-600 hover:text-brand-700">
              Dutch taxes hub
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/`} className="font-medium text-brand-600 hover:text-brand-700">
              Tax tools hub
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              30% ruling calculator
            </Link>
            <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-brand-600 hover:text-brand-700">
              Salary net calculator
            </Link>
            <Link href={`${NL_BASE}/work/tools/payslip-decoder/`} className="font-medium text-brand-600 hover:text-brand-700">
              Payslip decoder
            </Link>
            <Link href={`${NL_BASE}/moving-to-the-netherlands/`} className="font-medium text-brand-600 hover:text-brand-700">
              Moving to the Netherlands guide
            </Link>
          </nav>
        }
        extraSection={
          <section id="official-sources" className="scroll-mt-28 space-y-3 md:scroll-mt-32">
            <h3 className="text-lg font-semibold text-copilot-text-primary">Official sources</h3>
            <p className="text-sm text-copilot-text-secondary">
              Verify final filing positions with official sources and professional advice, especially when residency or treaty allocation is uncertain.
            </p>
            <ul className="space-y-2">
              {DOUBLE_TAX_OFFICIAL_SOURCES.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-brand-600 hover:underline">
                    {source.label} →
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-copilot-text-secondary">
              Source links are provided for verification and education. They are not a substitute for country-specific professional advice on your facts.
            </p>
          </section>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}
