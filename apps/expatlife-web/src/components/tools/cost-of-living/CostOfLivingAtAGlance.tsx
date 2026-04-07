import Link from "next/link";

const BASE = "/netherlands";

const CARDS = [
  {
    title: "What this tool is for",
    body: "A planning estimator for expat monthly expenses in the Netherlands, one-time setup cash, and how much net salary to aim for — before you sign a lease or accept an offer.",
  },
  {
    title: "Best for",
    body: "Singles, couples, and families comparing Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, or a generic Dutch baseline — with basic, balanced, or comfortable lifestyle assumptions.",
  },
  {
    title: "What it models",
    body: "Rent bands by city and location, groceries, utilities, transport (with or without a car), mandatory health insurance, optional childcare, and typical move-in costs including deposit and overlap risk.",
  },
  {
    title: "What it skips",
    body: "Exact quotes, debt payments, stock compensation, partner tax interactions, housing benefit (huurtoeslag), and anything that needs your personal tax file — use salary and tax tools for payroll detail.",
  },
] as const;

/**
 * “At a glance” orientation cards (copilot card language).
 */
export function CostOfLivingAtAGlance() {
  return (
    <div className="space-y-8">
      <div
        id="at-a-glance"
        className="scroll-mt-28 rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] md:scroll-mt-32 md:p-7 border-l-[5px] border-l-copilot-primary/55"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-copilot-primary">Cost of living Netherlands</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">
          At a glance — expat cost of living calculator
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-copilot-text-secondary sm:text-[15px]">
          Use this when you are asking how much salary you need in the Netherlands, what Amsterdam costs compared with other cities, or how much cash to hold before{" "}
          <Link href={`${BASE}/moving-to-the-netherlands/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            moving to the Netherlands
          </Link>
          . Read the{" "}
          <Link href={`${BASE}/moving-to-netherlands-cost/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            cost of moving guide
          </Link>{" "}
          for relocation-specific spends, and browse the{" "}
          <Link href={`${BASE}/cities/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            Dutch cities hub
          </Link>{" "}
          when you are still choosing a city.
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
    </div>
  );
}
