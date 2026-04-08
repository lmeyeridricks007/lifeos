import Link from "next/link";

const BASE = "/netherlands";

const CARDS = [
  {
    title: "What this page is for",
    body: "A Netherlands-focused destination: short guides on what to arrange, what is fixed locally, landlord questions, and how utilities sit in your move budget — plus a calculator for monthly bands, setup cash, compare vs fixed labels, and a move-in checklist.",
  },
  {
    title: "Best for",
    body: "Renters, buyers, families, remote workers, and house shares comparing Dutch cities or reading an “exclusive” lease who want a structured setup story — not a live switching engine.",
  },
  {
    title: "What the planner models",
    body: "Recurring monthly bands, first-month setup buckets, deterministic compare-vs-fixed classification, scenario comparisons, and an exportable summary. Assumptions are visible on every category card.",
  },
  {
    title: "What it deliberately skips",
    body: "Live tariffs, address-specific fiber quotes, parsing your lease, and legal advice. Confirm every line with contracts, gemeente letters, and provider confirmations.",
  },
] as const;

const BEFORE_START = [
  "Have your lease or draft handy: “inclusive” vs “exclusive” changes whether you model self-contracted energy, water, or internet.",
  "Energy, internet, and mobile are usually worth comparing when you hold the contracts — water and many gemeente-linked lines are regional or rule-based instead.",
  "First-month cash often exceeds a “normal” month because of activation, overlap, hardware, and odd invoice timing — budget it next to rent deposit and moving costs.",
  "Pair this page with cost of living, rent affordability, and (if needed) childcare or healthcare allowance tools so household services are not planned in isolation.",
  "Worked presets load example profiles through the URL — you still need to click Calculate to see numbers; nothing is sent to a server for the estimate.",
] as const;

export function UtilitiesServicesAtAGlance() {
  return (
    <div className="space-y-8">
      <div
        id="at-a-glance"
        className="scroll-mt-28 rounded-2xl border-0 bg-gradient-to-br from-copilot-bg-soft via-white to-sky-50/40 p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.12] md:scroll-mt-32 md:p-7 border-l-[5px] border-l-copilot-primary/55"
      >
        <p className="text-xs font-bold uppercase tracking-wider text-copilot-primary">Living · Netherlands · Guide + tool</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-copilot-text-primary sm:text-2xl">At a glance</h2>
        <p className="mt-3 text-sm leading-relaxed text-copilot-text-secondary sm:text-[15px]">
          Use <strong className="text-copilot-text-primary">Quick estimate</strong> for a fast band, then{" "}
          <strong className="text-copilot-text-primary">Detailed planner</strong> when you know heating, insulation, and inclusion flags. Below
          the calculator you will find a full <strong className="text-copilot-text-primary">planning guide</strong>, worked presets, FAQs, and
          official sources. Cross-link to the{" "}
          <Link href={`${BASE}/living/utilities/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            utilities hub
          </Link>
          ,{" "}
          <Link href={`${BASE}/money/tools/cost-of-living-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            cost of living calculator
          </Link>
          ,{" "}
          <Link href={`${BASE}/housing/tools/rent-affordability-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            rent affordability calculator
          </Link>
          ,{" "}
          <Link href={`${BASE}/tools/city-comparison/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            city comparison tool
          </Link>
          , and{" "}
          <Link href={`${BASE}/cities/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            cities overview
          </Link>{" "}
          when you are still choosing where to live.
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
        <p className="mt-4 text-sm text-copilot-text-secondary">
          Moving timeline:{" "}
          <Link href={`${BASE}/moving/tools/moving-checklist/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            moving checklist
          </Link>{" "}
          ·{" "}
          <Link href={`${BASE}/moving/tools/first-90-days/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            first 90 days planner
          </Link>{" "}
          ·{" "}
          <Link href={`${BASE}/taxes/tools/dutch-salary-net-calculator/`} className="font-semibold text-copilot-primary underline-offset-2 hover:underline">
            Dutch salary (net) calculator
          </Link>
        </p>
      </div>
    </div>
  );
}
