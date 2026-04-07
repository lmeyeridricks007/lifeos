/**
 * Example scenarios copy for the collapsible “Example scenarios” panel.
 */
export function CostOfLivingScenarioCards() {
  const scenarios = [
    {
      title: "Single highly skilled hire, Amsterdam (outside center)",
      body: "Use household “Single”, long-term rent, balanced lifestyle, no car. Compare the recommended net salary to an offer you are negotiating — then run the same gross through the Dutch salary net calculator.",
    },
    {
      title: "Couple, Rotterdam, one car",
      body: "Pick “Couple”, enable car, outside center. Check how transport and rent trade off versus living closer to work with only public transit.",
    },
    {
      title: "Family with two children, Utrecht, childcare on",
      body: "Choose “Family”, set children to 2, enable childcare. Review monthly total and savings buffer before the move — childcare is often the largest swing item after rent.",
    },
    {
      title: "Student / short-stay first months",
      body: "Select “Study” context, short-stay rent mode, basic lifestyle. Use this to stress-test first-month cash while you hunt for a long-term rental.",
    },
  ];
  return (
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
  );
}
