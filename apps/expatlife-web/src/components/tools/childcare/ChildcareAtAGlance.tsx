import Link from "next/link";

const BASE = "/netherlands";

const CARDS = [
  {
    title: "What this tool is for",
    body: "Planning gross childcare invoices, an estimated childcare benefit slice, net out-of-pocket, first-month cash, and simple work-budget context — without using the official toeslag engine.",
  },
  {
    title: "Best for",
    body: "Couples and single parents comparing daycare (dagopvang), BSO, or gastouder across Dutch cities while income, hours, and quotes are still moving.",
  },
  {
    title: "What it models",
    body: "City-anchored or manual hourly rates, monthly hours, statutory hourly caps, reimbursable hours per child per month, bracketed income → estimated reimbursement %, and optional first-month / reserve toggles.",
  },
  {
    title: "What it skips",
    body: "Live provider scraping, exact Belastingdienst outcomes, waiting-list timing, and detailed school-holiday coverage — confirm with providers, schools, and official tools before you commit.",
  },
] as const;

export function ChildcareAtAGlance() {
  return (
    <div className="space-y-8">
      <div
        id="at-a-glance"
        className="scroll-mt-28 rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] md:scroll-mt-32 md:p-7 border-l-[5px] border-l-copilot-primary/55"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-copilot-primary">Family planning · Netherlands</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">
          What this page covers
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-copilot-text-secondary sm:text-[15px]">
          One place for the calculator, worked examples, how we estimate, FAQs, and links to official sources. Use it when you
          are pairing childcare with{" "}
          <Link
            href={`${BASE}/moving-to-netherlands-with-kids/`}
            className="font-semibold text-copilot-primary underline-offset-2 hover:underline"
          >
            moving with kids
          </Link>
          , stress-testing offers in the{" "}
          <Link
            href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`}
            className="font-semibold text-copilot-primary underline-offset-2 hover:underline"
          >
            Dutch net salary calculator
          </Link>
          , or fitting care into{" "}
          <Link
            href={`${BASE}/money/tools/cost-of-living-calculator/`}
            className="font-semibold text-copilot-primary underline-offset-2 hover:underline"
          >
            monthly household cash
          </Link>
          . Add{" "}
          <Link
            href={`${BASE}/housing/tools/rent-affordability-calculator/`}
            className="font-semibold text-copilot-primary underline-offset-2 hover:underline"
          >
            rent
          </Link>{" "}
          and{" "}
          <Link href={`${BASE}/tools/city-comparison/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            city choice
          </Link>{" "}
          when you are comparing{" "}
          <Link href={`${BASE}/amsterdam/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            Amsterdam
          </Link>
          ,{" "}
          <Link href={`${BASE}/utrecht/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            Utrecht
          </Link>
          , or{" "}
          <Link href={`${BASE}/the-hague/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            The Hague
          </Link>
          .
        </p>
      </div>

      <div
        id="before-you-start"
        className="scroll-mt-28 rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-5 shadow-expatos-sm md:scroll-mt-32 md:p-6"
      >
        <h3 className="text-base font-semibold text-copilot-text-primary">Before you start</h3>
        <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
          A few minutes of realistic inputs beats perfect precision you do not have yet. Gather a rough hourly quote or use
          model anchors, pick income and days honestly, then refine when contracts land.
        </p>
        <ul className="mt-4 space-y-2.5 text-sm text-copilot-text-secondary">
          <li className="flex gap-2">
            <span className="font-semibold text-copilot-primary" aria-hidden>
              •
            </span>
            <span>
              <strong className="text-copilot-text-primary">Have a care type in mind</strong> — daycare, gastouder, or BSO —
              each uses a different official hourly cap in the model.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-copilot-primary" aria-hidden>
              •
            </span>
            <span>
              <strong className="text-copilot-text-primary">Estimate household income</strong> for the tax year you selected;
              missing income triggers a conservative default that makes the benefit line rough.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-copilot-primary" aria-hidden>
              •
            </span>
            <span>
              <strong className="text-copilot-text-primary">Match working-parent assumptions</strong> to your situation —
              eligibility rules are strict; the tool only applies a simple weight when patterns are uncertain.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-copilot-primary" aria-hidden>
              •
            </span>
            <span>
              <strong className="text-copilot-text-primary">Turn on first-month toggles</strong> that mirror your contract
              (registration, deposit, timing buffer) so early cash needs are visible next to recurring net.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-copilot-primary" aria-hidden>
              •
            </span>
            <span>
              <strong className="text-copilot-text-primary">Cross-check big decisions</strong> with the{" "}
              <Link href={`${BASE}/taxes/tools/30-ruling-calculator/`} className="font-semibold text-copilot-primary hover:underline">
                30% ruling calculator
              </Link>{" "}
              if applicable,{" "}
              <Link href={`${BASE}/health-insurance-netherlands/`} className="font-semibold text-copilot-primary hover:underline">
                health insurance
              </Link>
              , and{" "}
              <Link href={`${BASE}/open-bank-account-netherlands/`} className="font-semibold text-copilot-primary hover:underline">
                banking setup
              </Link>{" "}
              — childcare rarely sits in isolation.
            </span>
          </li>
        </ul>
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
    </div>
  );
}
