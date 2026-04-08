const cardShell =
  "rounded-2xl border border-copilot-primary/12 bg-copilot-surface p-5 shadow-expatos-md ring-1 ring-copilot-primary/[0.08] md:p-6";

const miniCard =
  "rounded-xl border border-copilot-primary/10 bg-gradient-to-br from-white via-copilot-bg-soft/40 to-white p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.05] md:p-5";

const METHODOLOGY_BLOCKS: { title: string; body: string }[] = [
  {
    title: "Hard eligibility screening",
    body:
      "We first check obvious blockers: age 18+, Dutch basic insurance (or your stated timing), living in the Netherlands, a simple entitlement flag, income under the single or combined ceiling, and 1 January assets under the matching ceiling. Failing any hard rule sets the allowance estimate to zero and explains why in plain language.",
  },
  {
    title: "Allowance taper (simplified)",
    body:
      "When you pass the screen, we scale the monthly allowance from the public maximum down to zero as model income approaches the ceiling — a plateau then linear style taper for clarity. Real awards use detailed rules; use this output to bracket expectations, not to pre-fill an application amount.",
  },
  {
    title: "Net premium after allowance",
    body:
      "We subtract the estimated monthly allowance from the gross premium you selected (average basic premium or your own entry). That is a cash-flow illustration only: payment timing, policy changes, and corrections from Dienst Toeslagen can differ.",
  },
  {
    title: "Part-year insurance",
    body:
      "If you are not insured for all twelve months, we prorate the annual allowance total by the number of months you indicate. You can override months when your situation does not match a simple start-month pattern.",
  },
  {
    title: "Income uncertainty",
    body:
      "If you toggle that you are unsure about income, we stress-test with a higher model income so estimates err on the conservative side and we show a clear warning.",
  },
];

export function HealthcareAllowanceMethodology() {
  return (
    <div className="not-prose space-y-6">
      <div className={cardShell}>
        <div className="prose prose-slate max-w-none text-copilot-text-secondary prose-headings:text-copilot-text-primary prose-p:text-copilot-text-secondary prose-strong:text-copilot-text-primary prose-a:text-copilot-primary prose-a:no-underline hover:prose-a:underline">
          <h3 className="text-lg font-semibold text-copilot-text-primary">How this estimator works (technical)</h3>
          <p>
            This page is a <strong>planning estimator</strong> for Dutch healthcare allowance (<strong>healthcare allowance expat Netherlands</strong>{" "}
            searches land here too). It applies public threshold figures for <strong>2026</strong> and a transparent taper so you can see directionally how
            income affects an indicative monthly amount — it does <strong>not</strong> replicate the full official toeslagen calculation or your personal
            Dienst Toeslagen file.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {METHODOLOGY_BLOCKS.map((block) => (
          <div key={block.title} className={miniCard}>
            <h4 className="text-base font-semibold tracking-tight text-copilot-text-primary">{block.title}</h4>
            <p className="mt-2.5 text-sm leading-relaxed text-copilot-text-secondary">{block.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
