import { CITY_COMPARISON_SEO_LEAD } from "@/src/content/tools/city-comparison/content";

export function CityComparisonAtAGlance() {
  return (
    <div className="space-y-5">
      <p className="text-sm leading-relaxed text-copilot-text-secondary md:text-base">{CITY_COMPARISON_SEO_LEAD}</p>

      <div id="at-a-glance" className="scroll-mt-28 grid gap-3 sm:grid-cols-2 xl:grid-cols-4 md:scroll-mt-32">
        {[
          {
            title: "What this tool is for",
            body: "A deterministic planning comparison of Dutch cities using your household, net salary, work mode, office city, and lifestyle sliders — with monthly cost anchors from the same model as our cost-of-living calculator.",
          },
          {
            title: "Best for",
            body: "Expats and international workers shortlisting Amsterdam, Rotterdam, Utrecht, The Hague, Eindhoven, and smaller hubs — or commuter-belt proxies — before deep housing search and school research.",
          },
          {
            title: "What it models",
            body: "Editorial city signals (career depth, family fit, expat ease, nightlife vs calm), commute practicality by city pair, affordability bands vs your net pay, and scenario lenses (budget-first, family-first, etc.).",
          },
          {
            title: "What it is not",
            body: "Not live rental listings, not legal or tax advice, not exact commute times, not school admissions, and not payroll math. Rankings are directional planning fit — not objective “best city” truth.",
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
