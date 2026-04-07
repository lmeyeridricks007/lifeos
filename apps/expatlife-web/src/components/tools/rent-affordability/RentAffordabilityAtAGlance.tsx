import Link from "next/link";

const BASE = "/netherlands";

const CARDS = [
  {
    title: "What this tool is for",
    body: "Get a fast planning answer on rent affordability, landlord screening fit, and move-in cash before you start viewings.",
  },
  {
    title: "Best for",
    body: "Singles, couples, and families comparing Dutch cities and needing both budget reality and landlord acceptance context.",
  },
  {
    title: "What it models",
    body: "City + housing anchors, neighborhood pressure, childcare/family costs, landlord x3-x4 checks, setup cash, and salary targets.",
  },
  {
    title: "What it skips",
    body: "No eligibility or legal checks: this is planning-only and must be validated with listings, payroll, and contracts.",
  },
] as const;

const BEFORE_START = [
  "Planning only: outputs are indicative bands, not quotes or guarantees.",
  "Landlords and agencies may apply stricter rules than the multiples you select here.",
  "Real rents, schools, and childcare fees vary — treat lines as directionally right, not exact.",
  "City and commute choice often moves affordability as much as salary; use scenarios to stress-test.",
] as const;

export function RentAffordabilityAtAGlance() {
  return (
    <div className="space-y-8">
      <div
        id="at-a-glance"
        className="scroll-mt-28 rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] md:scroll-mt-32 md:p-7 border-l-[5px] border-l-copilot-primary/55"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-copilot-primary">Housing · Netherlands · Tool</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">
          At a glance
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-copilot-text-secondary sm:text-[15px]">
          Start with core inputs to get a first answer quickly, then open advanced assumptions only if needed. The{" "}
          <a href="#rent-affordability-guide" className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            rent affordability guide
          </a>{" "}
          explains assumptions in plain language. Use this with the{" "}
          <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            moving to the Netherlands
          </Link>{" "}
          guide and{" "}
          <Link href={`${BASE}/money/tools/cost-of-living-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            cost of living calculator
          </Link>
          . For payroll detail, open the{" "}
          <Link href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            Dutch salary net calculator
          </Link>
          .
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.08] md:p-5 border-l-4 border-l-copilot-primary/45"
          >
            <p className="text-sm font-semibold text-copilot-text-primary">{c.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary sm:text-sm">{c.body}</p>
          </div>
        ))}
      </div>

      <div
        id="before-you-start"
        className="scroll-mt-28 rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-5 shadow-expatos-sm ring-1 ring-copilot-primary/[0.06] md:scroll-mt-32 md:p-6"
      >
        <h3 className="text-base font-semibold text-copilot-text-primary">Before you start</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-copilot-text-secondary">
          {BEFORE_START.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
