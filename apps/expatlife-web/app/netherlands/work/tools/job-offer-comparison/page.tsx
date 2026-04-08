import type { Metadata } from "next";
import Link from "next/link";
import { MoveHero } from "@/components/page/move-shell";
import { ToolPageTemplate } from "@/src/components/tools/ToolPageTemplate";
import { JobOfferComparisonClient } from "@/src/components/tools/job-offer-comparison/JobOfferComparisonClient";
import { JobOfferComparisonOfficialSources } from "@/src/components/tools/job-offer-comparison/JobOfferComparisonOfficialSources";
import { JobOfferComparisonRightRail } from "@/src/components/tools/job-offer-comparison/JobOfferComparisonRightRail";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import {
  JOB_OFFER_AT_A_GLANCE,
  JOB_OFFER_BEFORE_START_BULLETS,
  JOB_OFFER_BEFORE_START_LEAD,
  JOB_OFFER_EXAMPLE_SCENARIOS,
  JOB_OFFER_FAQ,
  JOB_OFFER_HOW_TO_STEPS,
  JOB_OFFER_COMPARISON_CANONICAL,
  JOB_OFFER_RELATED_GUIDES,
  NL_BASE,
} from "@/src/content/tools/job-offer-comparison/content";
import { getRouteStatus } from "@/src/lib/routes/routeStatus";
import { buildBreadcrumbSchema } from "@/src/lib/seo/breadcrumbSchema";
import { buildFaqSchema } from "@/src/lib/seo/faqSchema";
import { buildHowToSchema, buildSoftwareApplicationSchema, buildToolPageSchema } from "@/src/lib/seo/toolSchema";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Job Offer Comparison Tool Netherlands | Salary, Benefits & Expat Fit | ExpatCopilot";
const META_DESCRIPTION =
  "Free planner: compare two or three Dutch job offers (or current vs new) on estimated take-home pay, vakantiegeld and bonus handling, 30% ruling support, visa and relocation help, pension and benefits, rent and commute, and contract checklist signals — with topic-by-topic winners, questions to ask employers, and HTML export. Not legal, tax, or immigration advice.";

const HERO_IMAGE = "/images/tools/netherlands-job-offer-comparison-tool-hero.png";
const HERO_IMAGE_WIDTH = 1376;
const HERO_IMAGE_HEIGHT = 768;

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: JOB_OFFER_COMPARISON_CANONICAL },
  keywords: [
    "compare job offers Netherlands",
    "Dutch job offer comparison",
    "expat offer comparison Netherlands",
    "salary vs benefits job offer Netherlands",
    "compare Dutch offers after tax and rent",
    "which job offer is better Netherlands",
    "Netherlands offer negotiation",
    "30% ruling compare offers",
    "Amsterdam vs Rotterdam job offer",
    "vakantiegeld included in gross",
    "fixed-term vs permanent contract Netherlands",
    "Dutch payroll vs remote foreign employer",
    "job offer negotiation Netherlands expat",
    "total compensation Netherlands",
    "commute cost job offer comparison",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: JOB_OFFER_COMPARISON_CANONICAL,
    images: [
      {
        url: HERO_IMAGE,
        width: HERO_IMAGE_WIDTH,
        height: HERO_IMAGE_HEIGHT,
        alt: "Illustration: desk with laptop showing a side-by-side offer comparison — Dutch job offer planning.",
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
  return JOB_OFFER_RELATED_GUIDES.flatMap((guide) => {
    const status = getRouteStatus(guide.href);
    if (status === "hidden") return [];
    if (status === "coming-soon") return [{ ...guide, status: "coming_soon" as const }];
    return [guide];
  });
}

export default function JobOfferComparisonToolPage() {
  const origin = getSiteOrigin();
  const shareUrl = new URL(JOB_OFFER_COMPARISON_CANONICAL, origin).toString();
  const relatedGuides = resolveRelatedGuides();
  const pageContext = JOB_OFFER_COMPARISON_CANONICAL;

  const breadcrumbJsonLd = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands/" },
    { name: "Work tools", url: "/netherlands/work/tools/" },
    { name: "Job offer comparison tool", url: JOB_OFFER_COMPARISON_CANONICAL },
  ]);
  const softwareAppJsonLd = buildSoftwareApplicationSchema({
    name: "Job Offer Comparison Tool Netherlands",
    description:
      "Planning comparison for Dutch job offers: estimated take-home, benefits and expat-support scores, money left after typical rent and costs, commute, questions you can send to HR, and HTML export. Not legal, tax, payroll, or immigration advice.",
    url: JOB_OFFER_COMPARISON_CANONICAL,
    applicationCategory: "Calculator",
    offers: { price: "0", priceCurrency: "EUR" },
  });
  const webPageJsonLd = buildToolPageSchema({
    title: META_TITLE,
    description: META_DESCRIPTION,
    canonicalPath: JOB_OFFER_COMPARISON_CANONICAL,
  });
  const faqJsonLd = buildFaqSchema(JOB_OFFER_FAQ.map((item) => ({ question: item.question, answer: item.answer })));
  const howToJsonLd = buildHowToSchema({
    name: "How to use the Job Offer Comparison Tool (Netherlands)",
    description: "Compare Dutch offers with your own priority mix, affordability after rent and commute, and negotiation prompts. Planning only.",
    canonicalPath: JOB_OFFER_COMPARISON_CANONICAL,
    steps: [...JOB_OFFER_HOW_TO_STEPS],
  });

  const intro = (
    <div className="space-y-6">
      <div
        id="job-offer-at-a-glance"
        className="scroll-mt-28 rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] md:scroll-mt-32 md:p-7 border-l-[5px] border-l-copilot-primary/55"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-copilot-primary">At a glance</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">
          What this page covers before you use the calculator
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {JOB_OFFER_AT_A_GLANCE.map((c) => (
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

      <div
        id="before-you-start"
        className="scroll-mt-28 rounded-2xl border border-amber-400/35 bg-amber-50/50 p-4 text-sm text-amber-950 shadow-expatos-sm md:scroll-mt-32 md:p-5"
      >
        <p className="font-semibold text-amber-950">Before you start</p>
        <p className="mt-2 text-sm leading-snug text-amber-950">{JOB_OFFER_BEFORE_START_LEAD}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-snug text-amber-950">
          {JOB_OFFER_BEFORE_START_BULLETS.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
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
        hero={
          <MoveHero
            variant="tool"
            eyebrow="TOOL"
            title="Job Offer Comparison Tool Netherlands"
            subtitle="Compare Dutch job offers across salary, benefits, contract quality, relocation support, city costs, commute, and expat fit — not just headline pay."
            introBullets={[
              "Compare gross pay, estimated net pay, bonus, benefits, and support",
              "See how rent, commute, and city costs change real-life affordability",
              "Factor in 30% ruling support, sponsorship, relocation help, and contract risk",
              "Planning tool only — not legal, payroll, tax, or immigration advice",
            ]}
            primaryCtaLabel="Start comparing offers"
            primaryCtaScrollToId="tool-inputs"
            secondaryCtaLabel="Read Dutch job offer guide"
            secondaryCtaHref={`${NL_BASE}/work/contracts/offer-comparison/`}
            image={{
              src: HERO_IMAGE,
              alt: "Illustration of a workspace comparing two Dutch job offers on a laptop, with notes and coffee.",
            }}
            imageFallback={{
              src: HERO_IMAGE,
              alt: "Job offer comparison tool hero — planning desk with laptop and documents.",
            }}
            shareUrl={shareUrl}
            pageId={JOB_OFFER_COMPARISON_CANONICAL}
          />
        }
        intro={intro}
        sidebar={<JobOfferComparisonRightRail />}
        primarySectionTitle="Job offer comparison tool"
        primarySectionContent={<JobOfferComparisonClient calculatorCanonicalUrl={shareUrl} pageContext={pageContext} />}
        mainSectionTitle="Compare Dutch job offers"
        examplesCollapsibleDefaultOpen
        examplesSection={
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              Editorial walk-throughs — not personalised advice. Map them to your own numbers and priorities.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {JOB_OFFER_EXAMPLE_SCENARIOS.map((ex) => (
                <article
                  key={ex.title}
                  className="rounded-xl border border-copilot-primary/10 bg-copilot-bg-soft/50 p-4 text-sm shadow-expatos-sm"
                >
                  <p className="font-semibold text-copilot-text-primary">{ex.title}</p>
                  <p className="mt-2 text-copilot-text-secondary">
                    <span className="font-medium text-copilot-text-primary">When useful: </span>
                    {ex.whenUseful}
                  </p>
                  <p className="mt-2 text-copilot-text-secondary">
                    <span className="font-medium text-copilot-text-primary">What this scenario shows: </span>
                    {ex.demonstrate}
                  </p>
                  <p className="mt-2 text-copilot-text-secondary">
                    <span className="font-medium text-copilot-text-primary">Trade-offs: </span>
                    {ex.tradeOffs}
                  </p>
                  <p className="mt-2 text-copilot-text-secondary">
                    <span className="font-medium text-copilot-text-primary">Why results surprise people: </span>
                    {ex.oftenWins}
                  </p>
                  <p className="mt-3 rounded-lg border border-copilot-primary/10 bg-copilot-surface/80 p-3 text-copilot-text-secondary">
                    <span className="font-medium text-copilot-text-primary">Try in the tool: </span>
                    {ex.tryInTool}
                  </p>
                </article>
              ))}
            </div>
          </div>
        }
        explanatorySectionsOuterTitle="How this tool works"
        explanatorySections={[
          {
            id: "normalize-salary",
            title: "How salary and recurring cash are lined up for comparison",
            bullets: [
              "You choose annual or monthly gross per offer; the tool converts to a yearly figure for comparison and uses the same take-home rules as the Dutch salary calculator.",
              "Optional 13th month and bonus fields are merged carefully: discretionary bonuses use a conservative fraction so you do not accidentally treat targets as guaranteed pay.",
              "Vakantiegeld: “included in gross” avoids double-counting; “separate” or “not sure” follows the salary calculator’s holiday-pay handling so two offers stay comparable.",
              "Sign-on and relocation lump sums count as one-off cash — not monthly salary — so they do not hide weaker pension, leave, or job security.",
            ],
          },
          {
            id: "net-pay",
            title: "How estimated take-home pay is calculated",
            bullets: [
              "Standard Dutch payroll offers use the site’s salary calculator with your per-offer 30% ruling support level (yes / best efforts / no / not mentioned).",
              "Contractor and foreign-remote employer paths start from the same baseline, then apply conservative adjustments for typical extra hassle — illustrative only, not a quote from payroll.",
              "Estimated net is for direction and side-by-side comparison; real payslips, pensionable salary, and personal tax credits can still differ.",
            ],
          },
          {
            id: "city-affordability",
            title: "How city, commute, and affordability interact",
            bullets: [
              "Job city and optional home/target city use the same typical rent figures as the cost-of-living calculator unless you enter your own monthly rent.",
              "Commute days and travel mode use simple monthly cost bands — five office days cost more than two hybrid days on the same gross.",
              "Money left after costs is not a full household budget; it shows when a higher gross still feels tight after estimated rent and commute.",
            ],
          },
          {
            id: "scoring-priorities",
            title: "Benefits, expat support, contract checklist, and your priorities",
            bullets: [
              "Benefits, expat/relocation, and contract sections are scored from what you type and select — useful for comparing offers, not a market price for every perk.",
              "Risk flags and hidden-cost notes highlight things you may want to negotiate (clawbacks, fixed-term renewal, overtime, non-compete mentions).",
              "Low / Medium / High settings are turned into weights; the topic-by-topic cards then show who wins on pay, security, commute, expat support, and so on — even when the overall favourite is hard to call.",
            ],
          },
          {
            id: "outputs-exports",
            title: "Outputs, export, and shareable setup",
            bullets: [
              "Top pick, topic cards, affordability, negotiation questions, and “what would change the result” refresh whenever you change inputs and recalculate.",
              "HTML download and share links save your setup so you can revisit the same comparison or send it to a partner — still planning-only, not advice.",
            ],
          },
          {
            id: "not-known",
            title: "What the tool does not know",
            body: [
              "Collective agreement (CAO) minima for your sector, exact pension accrual formulas, equity vesting schedules, immigration (IND) processing times, and whether a clause is enforceable are out of scope. Cross-check with HR, fund documents, the employment contract risk scanner, immigration counsel, and official sources before you rely on any single score.",
            ],
          },
        ]}
        faqItems={JOB_OFFER_FAQ.map((f) => ({ id: f.id, question: f.question, answer: f.answer }))}
        relatedGuides={relatedGuides}
        extraSection={
          <section id="official-sources" className="scroll-mt-28 md:scroll-mt-32">
            <h2 className="text-lg font-semibold text-copilot-text-primary">Official sources</h2>
            <div className="mt-4">
              <JobOfferComparisonOfficialSources />
            </div>
          </section>
        }
        seoContentSectionTitle="Guide: Dutch job offers, net pay, city costs & negotiation"
        seoContent={
          <div className="space-y-8">
            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              If you are searching for{" "}
              <strong className="text-copilot-text-primary">compare job offers Netherlands</strong>,{" "}
              <strong className="text-copilot-text-primary">Dutch job offer comparison</strong>, or{" "}
              <strong className="text-copilot-text-primary">salary vs benefits Netherlands</strong>, you usually already have two PDFs
              and still cannot tell which life they buy. This hub pairs the calculator above with the same long-form context we use on our{" "}
              <Link href={`${NL_BASE}/work/contracts/offer-comparison/`} className="font-semibold text-brand-600 hover:underline">
                Dutch job offer comparison guide
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/work/working-in-netherlands/`} className="font-semibold text-brand-600 hover:underline">
                working in the Netherlands
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/moving-to-the-netherlands/`} className="font-semibold text-brand-600 hover:underline">
                moving to the Netherlands
              </Link>
              , and{" "}
              <Link href={`${NL_BASE}/taxes/expat-taxes-netherlands/`} className="font-semibold text-brand-600 hover:underline">
                expat taxes in the Netherlands
              </Link>{" "}
              — so the page works as a destination, not only an embed.
            </p>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-copilot-text-primary">Why headline salary misleads in the Netherlands</h3>
              <p className="text-sm leading-relaxed text-copilot-text-secondary">
                Dutch offers are often quoted as “annual gross” without spelling out whether{" "}
                <strong className="text-copilot-text-primary">vakantiegeld</strong> is inside that figure or paid on top. The same nominal
                salary can mean different take-home if one letter includes 8% holiday pay and the other stacks it separately. Add{" "}
                <strong className="text-copilot-text-primary">bonus targets vs guarantees</strong>, pension employer text, travel and WFH
                allowances, and sign-on or relocation payments, and two headlines that look €5k apart can be much closer — or farther — in
                annual cash. Use the{" "}
                <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-brand-600 hover:underline">
                  Dutch salary net calculator
                </Link>{" "}
                for single-offer depth and this comparison tool when you need side-by-side structure.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-copilot-text-primary">Why 30% ruling support in the offer letter matters</h3>
              <p className="text-sm leading-relaxed text-copilot-text-secondary">
                Eligibility is personal and time-bound, but <strong className="text-copilot-text-primary">employer cooperation</strong>{" "}
                still changes your planning: who prepares documentation, how payroll applies the facility, and whether HR has done this
                before for your hire type. A slightly lower gross with clear support can beat a higher gross where the answer is “we will
                see”. Model the difference with the{" "}
                <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-brand-600 hover:underline">
                  30% ruling calculator
                </Link>{" "}
                and treat “best efforts” as a middle scenario in this tool, not a promise from the Dutch tax office (Belastingdienst).
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-copilot-text-primary">Why city, commute, and rent reorder “the winner”</h3>
              <p className="text-sm leading-relaxed text-copilot-text-secondary">
                A higher <strong className="text-copilot-text-primary">Amsterdam</strong> gross often meets a higher{" "}
                <strong className="text-copilot-text-primary">rent anchor</strong> and, when the role is office-heavy, higher monthly
                commute spend than the same career level in <strong className="text-copilot-text-primary">Rotterdam</strong>,{" "}
                <strong className="text-copilot-text-primary">Utrecht</strong>, or{" "}
                <strong className="text-copilot-text-primary">Eindhoven</strong>. Hybrid two days per week changes the picture again. Use
                the{" "}
                <Link href={`${NL_BASE}/money/tools/cost-of-living-calculator/`} className="font-semibold text-brand-600 hover:underline">
                  cost of living calculator
                </Link>
                ,{" "}
                <Link href={`${NL_BASE}/housing/tools/rent-affordability-calculator/`} className="font-semibold text-brand-600 hover:underline">
                  rent affordability calculator
                </Link>
                , and{" "}
                <Link href={`${NL_BASE}/tools/city-comparison/`} className="font-semibold text-brand-600 hover:underline">
                  city comparison tool
                </Link>{" "}
                when you are still choosing where to live, then feed honest office days into the comparison above.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-copilot-text-primary">What expats often forget when comparing offers</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-copilot-text-secondary">
                <li>
                  <strong className="text-copilot-text-primary">Relocation clawbacks</strong> — a generous moving budget with a 12-month
                  repayment rule is not the same as cash in hand.
                </li>
                <li>
                  <strong className="text-copilot-text-primary">Probation and notice</strong> — short probation plus long employer notice
                  is a different risk profile than the reverse.
                </li>
                <li>
                  <strong className="text-copilot-text-primary">“Discretionary” bonus culture</strong> — model it conservatively; ask HR for
                  written targets and past payout ranges.
                </li>
                <li>
                  <strong className="text-copilot-text-primary">Foreign payroll</strong> — who withholds wage tax, where social security
                  sits, and how you prove income to a landlord. The{" "}
                  <Link href={`${NL_BASE}/work/tools/employment-type-scenario-tool/`} className="font-semibold text-brand-600 hover:underline">
                    employment type scenario tool
                  </Link>{" "}
                  and{" "}
                  <Link href={`${NL_BASE}/taxes/tools/double-tax-awareness-tool/`} className="font-semibold text-brand-600 hover:underline">
                    double tax awareness tool
                  </Link>{" "}
                  help when the offer is cross-border.
                </li>
                <li>
                  <strong className="text-copilot-text-primary">Housing timing</strong> — an offer you cannot start because you cannot
                  register or rent is not a practical win; see{" "}
                  <Link href={`${NL_BASE}/moving/tools/moving-checklist/`} className="font-semibold text-brand-600 hover:underline">
                    moving checklist
                  </Link>{" "}
                  and{" "}
                  <Link href={`${NL_BASE}/moving/tools/first-90-days/`} className="font-semibold text-brand-600 hover:underline">
                    first 90 days
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-base font-semibold text-copilot-text-primary">What to negotiate before you accept</h3>
              <p className="text-sm leading-relaxed text-copilot-text-secondary">
                Put the big rocks in writing before you sign: vakantiegeld presentation, base salary review timing, pension employer
                contribution, probation length, hybrid policy (fixed days vs manager discretion), travel and home-office allowances,
                equipment, relocation budget and repayment, 30% ruling and visa support, and sign-on when you are walking away from a
                bonus elsewhere. Run ambiguous contract language through the{" "}
                <Link href={`${NL_BASE}/work/tools/employment-contract-risk-scanner/`} className="font-semibold text-brand-600 hover:underline">
                  employment contract risk scanner
                </Link>{" "}
                and escalate non-compete, overtime, and repayment clauses to an employment lawyer when the stakes justify it. Our{" "}
                <Link href={`${NL_BASE}/work/employment-contract-netherlands/`} className="font-semibold text-brand-600 hover:underline">
                  employment contract Netherlands
                </Link>{" "}
                guide explains what typically appears in Dutch paperwork so you know which questions are normal — and which are red flags.
              </p>
            </section>

            <p className="text-sm leading-relaxed text-copilot-text-secondary">
              <strong className="text-copilot-text-primary">Tool stack recap:</strong>{" "}
              <Link href={`${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-brand-600 hover:underline">
                Dutch salary net calculator
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-brand-600 hover:underline">
                30% ruling calculator
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/work/tools/employment-contract-risk-scanner/`} className="font-semibold text-brand-600 hover:underline">
                employment contract risk scanner
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/work/tools/employment-type-scenario-tool/`} className="font-semibold text-brand-600 hover:underline">
                employment type scenario tool
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/taxes/tools/double-tax-awareness-tool/`} className="font-semibold text-brand-600 hover:underline">
                double tax awareness tool
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/money/tools/cost-of-living-calculator/`} className="font-semibold text-brand-600 hover:underline">
                cost of living calculator
              </Link>
              ,{" "}
              <Link href={`${NL_BASE}/housing/tools/rent-affordability-calculator/`} className="font-semibold text-brand-600 hover:underline">
                rent affordability calculator
              </Link>
              , and{" "}
              <Link href={`${NL_BASE}/tools/city-comparison/`} className="font-semibold text-brand-600 hover:underline">
                city comparison tool
              </Link>
              .
            </p>
          </div>
        }
      >
        {null}
      </ToolPageTemplate>
    </>
  );
}
