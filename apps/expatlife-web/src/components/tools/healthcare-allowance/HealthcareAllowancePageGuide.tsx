import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { HealthcareAllowanceMethodology } from "@/src/components/tools/healthcare-allowance/HealthcareAllowanceMethodology";

const NL = "/netherlands" as const;

const sectionScroll = "scroll-mt-28 md:scroll-mt-32";

const guideCardClass =
  "rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] md:p-6";

const proseClass =
  "prose prose-slate max-w-none text-copilot-text-secondary prose-headings:text-copilot-text-primary prose-p:text-copilot-text-secondary prose-li:text-copilot-text-secondary prose-strong:text-copilot-text-primary prose-a:text-copilot-primary prose-a:no-underline hover:prose-a:underline [&_ul>li]:pl-0 [&_ul>li::marker]:text-copilot-primary/45";

const expatSubBlockClass =
  "rounded-xl border border-copilot-primary/8 bg-gradient-to-br from-copilot-bg-soft/50 to-white/80 p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.04] md:p-5";

function GuideCard({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn(guideCardClass, sectionScroll, className)}>
      <div className={proseClass}>{children}</div>
    </section>
  );
}

/**
 * Long-form, indexable guide content for the healthcare allowance estimator page.
 * Framed as planning orientation — not official entitlement.
 */
export function HealthcareAllowancePageGuide() {
  return (
    <div className="not-prose space-y-6">
      <GuideCard id="how-healthcare-allowance-works">
        <h3 className="text-lg font-semibold text-copilot-text-primary">How healthcare allowance (zorgtoeslag) works</h3>
        <p>
          <strong>Zorgtoeslag</strong> is a Dutch benefit that can reduce what you pay for mandatory basic health insurance. It is means-tested:{" "}
          <strong>income</strong> and <strong>assets on 1 January</strong> sit alongside rules about insurance, residence, and household type. Only{" "}
          <a href="https://www.belastingdienst.nl/" target="_blank" rel="noopener noreferrer">
            Dienst Toeslagen
          </a>{" "}
          can determine your official award; this page helps you <strong>plan ranges</strong>, compare scenarios, and prepare questions before you apply or
          choose a policy.
        </p>
        <p>
          Internationals often search for a <strong>zorgtoeslag calculator</strong> or <strong>healthcare allowance Netherlands</strong> explainer because
          posters show a high <strong>gross premium</strong> while net cost after allowance may be lower — or zero if you are outside the income and asset
          limits. Thresholds move with policy; our tool uses <strong>2026 planning figures</strong> from site configuration, not a live government feed.
        </p>
        <ul className="mt-4 space-y-2">
          <li>You usually need qualifying Dutch basic insurance for the months you claim.</li>
          <li>
            Income is checked against a <strong>single</strong> or <strong>combined (toeslagpartner)</strong> ceiling — the partner ceiling is higher, but
            both incomes count.
          </li>
          <li>
            Assets on <strong>1 January</strong> are checked against a separate cap — it is not the same as your monthly salary.
          </li>
          <li>Amounts taper down as income approaches the ceiling; above the limit, allowance hits zero in our screening model.</li>
        </ul>
        <p>
          For a narrative walkthrough (not the calculator), see the{" "}
          <Link href={`${NL}/taxes/healthcare-allowance/`}>healthcare allowance guide</Link> and the{" "}
          <Link href={`${NL}/health-insurance-netherlands/`}>health insurance in the Netherlands</Link> overview — then return here to plug in numbers.
        </p>
      </GuideCard>

      <GuideCard id="what-counts-as-income">
        <h3 className="text-lg font-semibold text-copilot-text-primary">What counts as income in this tool</h3>
        <p>
          Official toeslagen use precise income definitions that can differ from your payslip headline or expat package framing. This estimator asks for a{" "}
          <strong>planning figure</strong> — typically your best guess at annual taxable employment income for the allowance year, or a monthly gross you
          convert mentally — so you can see how sensitive results are to the <strong>zorgtoeslag income limit</strong> and taper.
        </p>
        <p>
          <strong>Why that matters for expats:</strong> bonuses, RSUs, allowances, and cross-border setups can move the real test away from a simple
          gross-to-net story. Use our{" "}
          <Link href={`${NL}/taxes/tools/dutch-salary-net-calculator/`}>Dutch salary net calculator</Link> to sanity-check take-home, then treat allowance
          as a <em>separate</em> benefits question — not something the payroll calculator proves.
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            When you add a <strong>toeslagpartner</strong>, we combine incomes against the higher <strong>combined income limit</strong> — partner status
            changes both the ceiling and the income that counts.
          </li>
          <li>
            If income is missing or left at zero, the tool may assume a conservative placeholder — read the on-page warning; do not treat that as “no
            income” for real filing.
          </li>
          <li>
            Use the <strong>income uncertain</strong> toggle to stress-test a higher income and avoid optimistic allowance planning.
          </li>
        </ul>
      </GuideCard>

      <GuideCard id="why-assets-matter">
        <h3 className="text-lg font-semibold text-copilot-text-primary">Why assets matter (1 January)</h3>
        <p>
          The <strong>zorgtoeslag asset limit</strong> is a separate gate from income. Savings, investments, and similar wealth held on{" "}
          <strong>1 January</strong> can disqualify you even when your monthly pay looks modest — the test is about <strong>balance-sheet</strong> levels,
          not whether you feel “cash poor” after rent.
        </p>
        <p>
          <strong>Why income and assets both matter:</strong> the policy intent is to target support at people with lower means overall. High assets can
          indicate capacity to pay the gross premium without allowance, even if this year’s income is temporarily lower (career break, part-time year, or
          move timing).
        </p>
        <p>
          This tool cannot see your bank accounts. Enter honest planning figures, then confirm categories and exemptions on{" "}
          <a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/hoofdscherm-toeslagen" target="_blank" rel="noopener noreferrer">
            official toeslagen information
          </a>
          .
        </p>
      </GuideCard>

      <GuideCard id="zorgtoeslag-planning-context">
        <h3 className="text-lg font-semibold text-copilot-text-primary">Planning context for expats</h3>
        <div className="not-prose mt-5 space-y-4">
          <div className={expatSubBlockClass}>
            <h4 className="text-base font-semibold text-copilot-text-primary">Why your premium can still feel high with allowance</h4>
            <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
              Allowance reduces the <strong className="text-copilot-text-primary">basic premium</strong> slice of your costs in our illustration. You may
              still pay the full insurer invoice first and receive toeslag separately, or face voluntary cover, dental add-ons, or a policy with a higher
              nominal premium. The <strong className="text-copilot-text-primary">net after allowance</strong> in the tool is a{" "}
              <strong className="text-copilot-text-primary">cash-flow model</strong>, not a promise of what your bank statement shows each month.
            </p>
          </div>
          <div className={expatSubBlockClass}>
            <h4 className="text-base font-semibold text-copilot-text-primary">Why underestimating income can mean repayment</h4>
            <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
              If you receive allowance based on income that turns out too low on file, later corrections can create{" "}
              <strong className="text-copilot-text-primary">repayment</strong>. Raises, job changes, or late updates to Dienst Toeslagen are common
              triggers. Planning with a <strong className="text-copilot-text-primary">higher stress-test income</strong> in this tool is deliberately
              conservative — official recovery rules and timelines are only on government channels.
            </p>
          </div>
          <div className={expatSubBlockClass}>
            <h4 className="text-base font-semibold text-copilot-text-primary">Why partner status changes the picture</h4>
            <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
              A <strong className="text-copilot-text-primary">toeslagpartner</strong> switches you to <strong className="text-copilot-text-primary">combined income</strong> against a higher ceiling and combines{" "}
              <strong className="text-copilot-text-primary">1 January assets</strong>. One partner’s raise can shrink or remove allowance for the household;
              treating the household as single when rules say otherwise is a common planning mistake. When in doubt, confirm household type on official
              sites or with qualified advice — this tool only reflects what you select.
            </p>
          </div>
          <div className={expatSubBlockClass}>
            <h4 className="text-base font-semibold text-copilot-text-primary">Why use this before choosing an insurer</h4>
            <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
              Comparison sites advertise <strong className="text-copilot-text-primary">gross monthly premiums</strong>. If you are likely eligible for
              zorgtoeslag, the meaningful number for budgeting is closer to <strong className="text-copilot-text-primary">premium minus expected allowance</strong> — still uncertain until Dienst Toeslagen decides. Use the estimator to bracket outcomes, then compare policies on{" "}
              <Link href={`${NL}/services/health-insurance/`} className="font-semibold text-copilot-primary hover:underline">
                health insurance services
              </Link>
              ,{" "}
              <Link href={`${NL}/services/compare-health-insurance/`} className="font-semibold text-copilot-primary hover:underline">
                compare health insurance
              </Link>
              , or your broker — <strong className="text-copilot-text-primary">planning only</strong>, not a quote for allowance.
            </p>
          </div>
        </div>
      </GuideCard>

      <div id="how-estimator-works" className={sectionScroll}>
        <HealthcareAllowanceMethodology />
      </div>
    </div>
  );
}
