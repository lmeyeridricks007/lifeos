import type { ReactNode } from "react";
import Link from "next/link";

const BASE = "/netherlands";

const guideNav = [
  { href: "#affordable-rent-nl", label: "Affordable rent" },
  { href: "#landlord-rejections", label: "Landlord screening" },
  { href: "#city-comparison", label: "City comparison" },
  { href: "#expat-forgets", label: "Budget blind spots" },
  { href: "#monthly-vs-setup", label: "Monthly vs move-in" },
  { href: "#net-vs-gross", label: "Net vs gross" },
  { href: "#thirty-percent-ruling", label: "30% ruling" },
  { href: "#first-month-costs", label: "First-month costs" },
] as const;

function InLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-copilot-primary hover:underline">
      {children}
    </Link>
  );
}

/**
 * Long-form, indexable guide for the rent affordability tool page (SEO + internal linking).
 * Headings stay under the page-level H2 from `ToolPageTemplate` SectionBlock.
 */
export function RentAffordabilityGuide() {
  return (
    <div
      id="rent-affordability-guide"
      className="prose prose-slate max-w-none text-copilot-text-secondary prose-p:leading-relaxed prose-headings:text-copilot-text-primary prose-li:marker:text-copilot-primary prose-a:text-copilot-primary"
    >
      <p className="text-base leading-relaxed">
        This page pairs a practical calculator with a grounded overview of how people actually plan rent in the Netherlands.
        Use it to build a bracket you can defend in conversations with employers, agents, and housemates — then validate every
        line against real listings and your own documents. For the full monthly picture beyond rent, the{" "}
        <InLink href={`${BASE}/money/tools/cost-of-living-calculator/`}>Netherlands cost of living calculator</InLink> is the
        natural next step.
      </p>

      <nav className="not-prose my-8 rounded-2xl border border-copilot-primary/10 bg-copilot-bg-soft/60 p-4 shadow-expatos-sm" aria-label="Guide sections">
        <p className="text-xs font-semibold uppercase tracking-wide text-copilot-text-secondary">On this guide</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm">
          {guideNav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex rounded-full border border-copilot-primary/15 bg-white px-3 py-1 font-medium text-copilot-primary hover:bg-copilot-primary/5"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <h3 id="affordable-rent-nl">How much rent is considered affordable in the Netherlands?</h3>
      <p>
        There is no single national “affordable rent” number that fits every household. In practice, people combine three
        ideas: what is left in their account after tax and fixed costs, what share of net income they are willing to put
        toward housing, and whether a landlord will accept their file against a gross-income rule. Many rental conversations
        still reference rough multiples of gross monthly salary versus rent (often discussed around three to four times
        rent), but policies differ by landlord, fund, and city.
      </p>
      <p>
        The calculator on this page turns that into explicit bands (safer, balanced, and stretch) using indicative
        non-rent costs, buffers, and your inputs — not a guarantee of approval. For payroll detail, cross-check with the{" "}
        <InLink href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`}>Dutch salary net calculator</InLink> and, once you
        are hired, the <InLink href={`${BASE}/work/tools/payslip-decoder/`}>payslip decoder</InLink>.
      </p>

      <h3 id="landlord-rejections">Why Dutch landlords may reject you even if the rent feels affordable</h3>
      <p>
        Affordability on paper is only one gate. Landlords and agencies often look at contract type and length, probation,
        employer sector, guarantors, savings, and documentation completeness. Self-employed and recent arrivals can face
        extra scrutiny even when net cash flow is healthy. A gross multiple that clears a simple ×3 story does not replace
        those checks.
      </p>
      <p>
        Treat the gross-vs-rent table in the tool as a screening story, not a prediction. For how the market behaves day to
        day — viewings, competition, platforms — read the{" "}
        <InLink href={`${BASE}/living/rental-market/`}>housing and rental market guide</InLink> and browse{" "}
        <InLink href={`${BASE}/services/housing-platforms/`}>housing platforms</InLink> and{" "}
        <InLink href={`${BASE}/services/rental-agencies/`}>rental agencies</InLink> once you have a budget range.
      </p>

      <h3 id="city-comparison">Amsterdam vs Rotterdam vs The Hague vs Utrecht affordability</h3>
      <p>
        <InLink href={`${BASE}/amsterdam/`}>Amsterdam</InLink> typically shows higher advertised rents and tighter
        competition than <InLink href={`${BASE}/rotterdam/`}>Rotterdam</InLink> or{" "}
        <InLink href={`${BASE}/the-hague/`}>The Hague</InLink>, but your commute, housing type, and household costs often
        matter as much as the city label. <InLink href={`${BASE}/utrecht/`}>Utrecht</InLink> frequently sits in a similar
        “tight market” conversation to Amsterdam for many segments. The calculator encodes city- and neighborhood-style
        planning anchors so you can compare bands without pretending any model is a listing feed.
      </p>
      <p>
        For other hubs — <InLink href={`${BASE}/eindhoven/`}>Eindhoven</InLink>,{" "}
        <InLink href={`${BASE}/groningen/`}>Groningen</InLink>, <InLink href={`${BASE}/breda/`}>Breda</InLink>, and more —
        use the city pages alongside the scenario comparison in the tool. The{" "}
        <InLink href={`${BASE}/cities/`}>Netherlands city hubs overview</InLink> helps if you are still choosing a base.
      </p>

      <h3 id="expat-forgets">What expats forget when budgeting rent</h3>
      <ul>
        <li>
          <strong>Move-in cash</strong> — deposit, first month timing, agency or contract fees, furniture, and relocation
          are not the same as monthly affordability. See the setup section in the calculator and the{" "}
          <InLink href={`${BASE}/moving-to-netherlands-cost/`}>cost of moving to the Netherlands</InLink> guide.
        </li>
        <li>
          <strong>Mandatory health insurance</strong> — basic zorgverzekering is a fixed line for most adults; compare
          options via our <InLink href={`${BASE}/services/health-insurance/`}>health insurance hub</InLink>.
        </li>
        <li>
          <strong>Commuting and parking</strong> — a cheaper suburb only saves money if the total commute and parking story
          still works.
        </li>
        <li>
          <strong>Childcare and schools</strong> — for families, daycare or after-school costs can rival rent in impact;
          model them explicitly rather than hoping they average out.
        </li>
        <li>
          <strong>Banking readiness</strong> — paying rent from a Dutch account is routine; plan early with the{" "}
          <InLink href={`${BASE}/services/banks/`}>banks hub</InLink>.
        </li>
      </ul>

      <h3 id="monthly-vs-setup">Monthly affordability vs move-in cash</h3>
      <p>
        Monthly affordability answers whether recurring income can carry rent, utilities-style costs, insurance, transport,
        and lifestyle lines after buffers. Move-in cash answers whether you can time the deposit, first month, relocation,
        and surprises without emptying your emergency fund. Confusing the two is one of the main ways plans break in the
        first weeks after arrival.
      </p>
      <p>
        The <InLink href={`${BASE}/moving-to-the-netherlands/`}>moving to the Netherlands</InLink> pillar ties timeline,
        documents, and first months together — use it next to this calculator, not instead of it.
      </p>

      <h3 id="net-vs-gross">When to use net salary vs gross salary</h3>
      <p>
        Use <strong>net</strong> when you are asking what life feels like after tax and premiums: what hits your account
        each month. Use <strong>gross</strong> when you are mirroring landlord or agent screening, or when your offer
        conversation is in contract gross. This page supports both: enter the basis that matches the question you are trying
        to answer, and read the indicative conversion as planning-only, not payroll advice.
      </p>

      <h3 id="thirty-percent-ruling">How the 30% ruling may change affordability planning</h3>
      <p>
        If the 30% facility applies to your payroll, the same gross can produce a higher net on your payslip than without
        it — which changes how much rent feels sustainable after tax. Eligibility and rules are separate from this planner;
        use the <InLink href={`${BASE}/taxes/tools/30-ruling-calculator/`}>30% ruling calculator</InLink> for structured
        eligibility context, and stress-test “with vs without ruling” when your gross is uncertain or the facility might
        end.
      </p>

      <h3 id="first-month-costs">Common first-month rental costs in the Netherlands</h3>
      <p>
        Patterns vary by landlord and contract, but many renters plan for: a deposit (often discussed around one to two
        months’ rent for longer private leases), first month’s rent as a timing item, possible agency or contract fees,
        utility and internet connection buffers, basic furniture if the home is unfurnished, and a contingency slice for
        things that slip through the cracks.
      </p>
      <p>
        The calculator’s setup toggles model those buckets as <strong>planning estimates</strong>, not quotes. Always align
        with your actual draft contract and landlord terms. For broader relocation spend, keep{" "}
        <InLink href={`${BASE}/moving-to-netherlands-cost/`}>cost of moving to the Netherlands</InLink> open alongside your
        spreadsheet.
      </p>

      <p className="text-sm text-copilot-text-secondary/90 not-prose border-t border-copilot-primary/10 pt-6">
        More tools and explainers live in the{" "}
        <InLink href={`${BASE}/housing/tools/`}>housing tools hub</InLink> and the general{" "}
        <InLink href={`${BASE}/tools/`}>Netherlands tools directory</InLink>.
      </p>
    </div>
  );
}
