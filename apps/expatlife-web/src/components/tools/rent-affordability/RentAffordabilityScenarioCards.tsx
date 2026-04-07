export function RentAffordabilityScenarioCards() {
  const scenarios = [
    {
      title: "Single professional in Amsterdam",
      body: "Preset single, Amsterdam, standard or premium neighborhood band, 1-bedroom model rent, landlord ×3.5. Useful when you need a quick bracket before filtering listings — then switch to target rent once you have real numbers.",
    },
    {
      title: "Couple renting in Rotterdam",
      body: "Preset couple, Rotterdam, compare standard vs commuter belt. Shows how much the same gross can stretch when rent anchor and competitiveness moderation shift — helpful when job is in Zuid-Holland but housing search is flexible.",
    },
    {
      title: "Family with childcare in The Hague",
      body: "Family preset, The Hague, add childcare under fixed obligations (or enable placeholder if still pricing daycare). Use this when rent and daycare compete for the same net — the tool reduces affordable rent accordingly.",
    },
    {
      title: "Commuter-belt renter near Utrecht",
      body: "Utrecht city with commuter neighborhood band, or pair commuter band with a nearby city preset. Good for testing whether a longer commute buys enough rent relief to matter in your scenario table.",
    },
    {
      title: "With 30% ruling vs without",
      body: "Enter gross, toggle the 30% ruling planning uplift, then read the “same gross without ruling” comparison when shown. Stress-tests payroll structure — not eligibility; confirm with the 30% ruling calculator and your employer.",
    },
    {
      title: "High rent but landlord rejection risk",
      body: "Use target rent mode with a listing figure and open the gross vs rent table. Even when net budgeting feels fine, ×3.5 or ×4 may fail — this scenario is for negotiating salary, guarantors, or adjusting rent expectations before you pay application fees.",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="text-sm text-copilot-text-secondary">
        Each card is a way to use the tool — not a preset button. Copy the idea into the form, then refine with your real contract and listing.
      </p>
      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2">
        {scenarios.map((s) => (
          <li
            key={s.title}
            className="rounded-2xl border-0 bg-copilot-bg-soft/90 p-4 shadow-expatos-sm ring-1 ring-copilot-primary/[0.07] md:p-5 border-l-4 border-l-copilot-accent/45"
          >
            <p className="text-sm font-semibold text-copilot-text-primary">{s.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">{s.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
