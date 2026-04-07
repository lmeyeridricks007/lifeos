/**
 * Card-based example scenarios for the Dutch salary net tool (editorial).
 */
export function SalaryExamples() {
  const items = [
    {
      title: "Under 30 with a qualifying master’s",
      body: "Set age under 30. Use the 30% ruling eligibility tool for reduced salary norms — here, only change taxable modelling if you already expect ruling on payroll. Compare gross-to-net with ruling on vs off.",
    },
    {
      title: "Salary just above typical ruling discussion band",
      body: "Enter gross near common thresholds. Toggle 30% ruling setting off, then statutory maximum, and Calculate — see how taxable income and net move on the same gross.",
    },
    {
      title: "Partial-year arrival",
      body: "Set months worked (1–12) under Employment context. In-year cash line prorates; tax bands still use full contract gross. Compare with a full-year scenario.",
    },
    {
      title: "Employer below statutory maximum",
      body: "Choose Employer-specific % and enter what HR quoted (e.g. 24%). Contrast with Statutory maximum to see sensitivity before you sign.",
    },
    {
      title: "Permanent vs temporary package",
      body: "Duplicate the scenario, switch contract type for your notes/export, and tweak gross or bonus if the agency quotes differ. Employment type does not change maths yet but keeps scenarios clear.",
    },
    {
      title: "Bonus-heavy offer",
      body: "Add annual bonus; decide if holiday allowance applies on salary + bonus. Watch gross and taxable jump — useful when a sign-on bonus sits outside base salary.",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((x) => (
        <div
          key={x.title}
          className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm ring-1 ring-slate-200/40 md:p-6"
        >
          <p className="text-base font-semibold text-slate-900">{x.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.body}</p>
        </div>
      ))}
    </div>
  );
}
