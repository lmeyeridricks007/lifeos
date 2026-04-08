export function DoubleTaxAwarenessAtAGlance() {
  return (
    <div className="space-y-5">
      <div id="at-a-glance" className="scroll-mt-28 grid gap-3 sm:grid-cols-2 xl:grid-cols-4 md:scroll-mt-32">
        {[
          {
            title: "What this tool is for",
            body: "A practical first-pass planning tool for expats with cross-border income, remote work, foreign assets, or mixed-country filing questions.",
          },
          {
            title: "Best for",
            body: "Employees, remote workers, freelancers, landlords, and international movers who want a structured briefing before speaking to an advisor.",
          },
          {
            title: "What it models",
            body: "Likely residency signals, possible dual-residency risk, tax-jurisdiction mapping by income type, likely relief category, and practical filing actions.",
          },
          {
            title: "What it skips",
            body: "Exact tax due, legal residency determinations, treaty article-by-article analysis, payroll implementation, and country-specific filing calculations.",
          },
        ].map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border-0 bg-copilot-surface p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.08] md:p-5 border-l-4 border-l-copilot-primary/45"
          >
            <p className="text-sm font-semibold text-copilot-text-primary">{card.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-copilot-text-secondary sm:text-sm">{card.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
