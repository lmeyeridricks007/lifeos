import Link from "next/link";

const BASE = "/netherlands";

/**
 * SEO-friendly methodology and planning context for the childcare estimator.
 */
export function ChildcareMethodology() {
  return (
    <div className="prose prose-sm max-w-none text-copilot-text-secondary prose-p:leading-relaxed prose-headings:text-copilot-text-primary">
      <p>
        This page helps expat families <strong>plan</strong> gross childcare invoices, a transparent{" "}
        <strong>estimated</strong> childcare benefit slice, and net out-of-pocket — without pretending to be the official
        kinderopvangtoeslag calculator.
      </p>

      <h3>Why net childcare cost beats gross invoice alone</h3>
      <p>
        Provider quotes are real and stressful, but household cash flow usually cares about{" "}
        <strong>what you pay after subsidy</strong>. Two families with similar gross invoices can have very different nets if
        income bands, care type, or hourly caps differ. The tool shows gross, estimated benefit, and net side by side so you are
        not comparing apples with oranges when you negotiate hours or choose a city.
      </p>

      <h3>Why hourly rates above the official cap matter</h3>
      <p>
        The Dutch system uses a <strong>maximum hourly rate</strong> per care type when calculating the reimbursable slice. If
        your contract rate is higher, the gap is often <strong>not</strong> covered by the benefit in the same way — you still
        owe the provider, but the modelled subsidy stops at the cap. That is why cap-aware mode can show a large gross invoice
        with a smaller benefit than you might expect from headline percentages alone.
      </p>

      <h3>Why first-month cash can spike</h3>
      <p>
        Early months combine <strong>recurring</strong> care with <strong>one-off</strong> items (registration, deposits) and
        sometimes awkward <strong>invoice timing</strong> (partial months, overlap between providers, or delayed benefit
        payments). The tool separates these conceptually so you do not mistake a first-month pile-up for your long-run monthly
        norm.
      </p>

      <h3>Why childcare affects job decisions more than people expect</h3>
      <p>
        Adding a work day usually raises contracted hours — gross childcare goes up — but your household income may also move
        into a different planning band for the estimated benefit. The interaction is easy to underestimate if you only look at
        gross salary. Modelling both sides here, then cross-checking with the{" "}
        <Link href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-copilot-primary hover:underline">
          Dutch salary net calculator
        </Link>
        , keeps the conversation grounded in take-home cash.
      </p>

      <h3>Why BSO can still be a serious cost</h3>
      <p>
        After-school care (<strong>BSO</strong>) often has a lower official hourly cap and fewer hours per day than full
        daycare, so <strong>gross</strong> lines can look smaller. School holidays, study days, and optional camps can still
        add meaningful spend that a simple monthly hour model only partly captures — treat BSO as a real budget line, not a
        trivial add-on.
      </p>

      <h3>Provider cost in the model</h3>
      <p>
        For each child we combine hourly provider rates (model anchors by city and cost tier, or your manual override) with
        monthly hours from days-per-week (using typical hours per day by care type) or a direct hours-per-month entry. Fixed
        per-child monthly lines (meals, reserves you enter) add to the bill.
      </p>

      <h3>City anchors</h3>
      <p>
        Model rates are <strong>indicative</strong> and tiered (low / standard / premium). They are a starting point for major
        cities — always confirm quotes from providers. If you are still choosing a city, the{" "}
        <Link href={`${BASE}/tools/city-comparison/`} className="font-semibold text-copilot-primary hover:underline">
          Netherlands city comparison
        </Link>{" "}
        and city hubs such as{" "}
        <Link href={`${BASE}/amsterdam/`} className="font-semibold text-copilot-primary hover:underline">
          Amsterdam
        </Link>
        ,{" "}
        <Link href={`${BASE}/utrecht/`} className="font-semibold text-copilot-primary hover:underline">
          Utrecht
        </Link>
        , and{" "}
        <Link href={`${BASE}/the-hague/`} className="font-semibold text-copilot-primary hover:underline">
          The Hague
        </Link>{" "}
        help frame rent and commute trade-offs next to childcare.
      </p>

      <h3>Official caps in the model</h3>
      <p>
        When “cap-aware estimate” is on, reimbursable value uses{" "}
        <code>min(provider hourly rate, statutory max hourly rate)</code> ×{" "}
        <code>min(monthly hours, 230)</code> per child, matching the broad shape of Dutch childcare benefit limits (not every
        edge case).
      </p>

      <h3>Estimated reimbursement bands (planning only)</h3>
      <p>
        Config files define <strong>childcareBenefitBandsByYear</strong>: for each tax year, stepped income ranges map to a
        planning percentage of the reimbursable base. The first child and additional children can use different percentages
        (both editable). This is explicitly <strong>not</strong> official entitlement — see{" "}
        <code>CHILDCARE_BENEFIT_PLANNING_META</code> in code. If income is missing, the engine substitutes a high default
        income so the model assumes a <strong>lower</strong> subsidy rate (conservative for out-of-pocket planning).
      </p>

      <h3>First-month cash</h3>
      <p>
        We start from monthly net childcare, then optionally add registration fees, a partial-month invoice risk slice, a
        deposit placeholder, and global reserve toggles. This isolates <strong>recurring</strong> cost from{" "}
        <strong>timing-heavy</strong> cash needs.
      </p>

      <h3>Why results stay directional</h3>
      <p>
        Real life adds waiting lists, holiday weeks, collective labour agreements, and invoice timing. Pair this tool with the{" "}
        <Link href={`${BASE}/money/tools/cost-of-living-calculator/`} className="font-semibold text-copilot-primary hover:underline">
          cost of living calculator
        </Link>
        ,{" "}
        <Link href={`${BASE}/housing/tools/rent-affordability-calculator/`} className="font-semibold text-copilot-primary hover:underline">
          rent affordability tool
        </Link>
        , and{" "}
        <Link href={`${BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-copilot-primary hover:underline">
          30% ruling calculator
        </Link>{" "}
        (if relevant) for a fuller picture. For arrival sequencing, see{" "}
        <Link href={`${BASE}/moving-to-netherlands-with-kids/`} className="font-semibold text-copilot-primary hover:underline">
          moving to the Netherlands with kids
        </Link>{" "}
        and{" "}
        <Link href={`${BASE}/moving/tools/relocation-cost-estimator/`} className="font-semibold text-copilot-primary hover:underline">
          relocation cost estimator
        </Link>
        .
      </p>
    </div>
  );
}
