import Link from "next/link";

const BASE = "/netherlands";

/**
 * Editorial “how we estimate” block (indexable SEO body).
 */
export function CostOfLivingMethodology() {
  return (
    <div className="prose prose-slate max-w-none text-copilot-text-secondary prose-headings:text-copilot-text-primary prose-p:text-copilot-text-secondary prose-li:text-copilot-text-secondary prose-strong:text-copilot-text-primary">
      <p>
        This calculator applies <strong>fixed planning coefficients</strong> per city, household size, lifestyle tier, and rent mode. Numbers are rounded to whole euros and meant to show{" "}
        <strong>directional ranges</strong> for expats planning a move — not quotes from landlords, insurers, or schools.
      </p>
      <h3 className="text-lg font-semibold">Housing</h3>
      <p>
        We start from <strong>city rent-band midpoints</strong> (room/shared through three-bed, plus a short-stay band), then apply neighborhood and lifestyle multipliers — not live listing data.{" "}
        <Link href={`${BASE}/services/housing-platforms/`} className="font-medium text-copilot-primary hover:underline">
          Housing platforms
        </Link>{" "}
        and{" "}
        <Link href={`${BASE}/living/rental-market/`} className="font-medium text-copilot-primary hover:underline">
          rental market guides
        </Link>{" "}
        explain why real listings vary week to week.
      </p>
      <h3 className="text-lg font-semibold">Monthly living</h3>
      <p>
        Groceries use a city cost index. Utilities grow slightly with household size. Transport defaults to public transit; enabling a car adds an indicative all-in motoring bundle. Health insurance uses a simple per-adult and per-child placeholder — compare real premiums via our{" "}
        <Link href={`${BASE}/health-insurance-netherlands/`} className="font-medium text-copilot-primary hover:underline">
          health insurance guide
        </Link>{" "}
        and{" "}
        <Link href={`${BASE}/services/health-insurance/`} className="font-medium text-copilot-primary hover:underline">
          insurer listings
        </Link>
        .
      </p>
      <h3 className="text-lg font-semibold">Setup and cash timing</h3>
      <p>
        Setup combines deposit months (stricter for long-term leases), indicative agency or contract fees, furniture and admin, and a small overlap buffer — many people pay short-stay and a long-term lease at the same time for a few weeks. First-month cash need blends deposit, rent timing, and part of your monthly run-rate.
      </p>
      <h3 className="text-lg font-semibold">Salary target and savings buffer</h3>
      <p>
        The recommended net salary applies a headroom multiplier on top of recurring monthly costs so you are not living at zero margin. The savings buffer adds several months of recurring costs to one-time setup — a common planning rule for international moves. For payroll-accurate take-home, use the{" "}
        <Link href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-medium text-copilot-primary hover:underline">
          Dutch salary net calculator
        </Link>{" "}
        and{" "}
        <Link href={`${BASE}/work/tools/payslip-decoder/`} className="font-medium text-copilot-primary hover:underline">
          payslip decoder
        </Link>
        .
      </p>
    </div>
  );
}
