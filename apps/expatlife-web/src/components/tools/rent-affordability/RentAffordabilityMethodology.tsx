export function RentAffordabilityMethodology() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-copilot-primary/15 bg-gradient-to-br from-copilot-bg-soft to-white p-5 shadow-expatos-sm">
        <h3 className="text-base font-semibold text-copilot-text-primary">How this model works</h3>
        <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
          The calculator is deterministic and config-driven: same inputs, same outputs. Values are planning anchors for
          relocation decisions, not legal, payroll, or listing guarantees.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <section className="rounded-2xl border border-copilot-primary/12 bg-white p-4 shadow-expatos-sm">
          <h4 className="text-sm font-semibold text-copilot-text-primary">Rent anchors & area pressure</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
            <li>
              <strong className="text-copilot-text-primary">Model rent:</strong> city + housing-type anchor.
            </li>
            <li>
              <strong className="text-copilot-text-primary">Target rent:</strong> your manual rent with selected add-ons.
            </li>
            <li>Neighborhood bands and competitiveness settings reflect market tightness by area.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-copilot-primary/12 bg-white p-4 shadow-expatos-sm">
          <h4 className="text-sm font-semibold text-copilot-text-primary">Household, childcare & lifestyle</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
            <li>Household presets scale groceries, utilities, transport, and family lines.</li>
            <li>Childcare can be off, placeholder, or manual override.</li>
            <li>Essential vs comfortable represents planning margin, not lifestyle judgment.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-copilot-primary/12 bg-white p-4 shadow-expatos-sm">
          <h4 className="text-sm font-semibold text-copilot-text-primary">Landlord screening realism</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
            <li>Uses x3 / x3.5 / x4 gross screening patterns.</li>
            <li>Can discount variable bonus, temporary contracts, and foreign-income acceptance share.</li>
            <li>Represents common behavior, not legal entitlement or guaranteed acceptance.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-copilot-primary/12 bg-white p-4 shadow-expatos-sm">
          <h4 className="text-sm font-semibold text-copilot-text-primary">Monthly & setup breakdowns</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-copilot-text-secondary">
            <li>Monthly lines are grouped with subtotals to show recurring pressure points.</li>
            <li>Setup lines are grouped by lease entry, arrival, home setup, and friction buffer.</li>
            <li>Planning-only labels mark placeholders/reserves vs user-entered values.</li>
          </ul>
        </section>
      </div>

      <div className="rounded-2xl border border-copilot-primary/12 bg-copilot-bg-soft/50 p-4">
        <h4 className="text-sm font-semibold text-copilot-text-primary">Salary targets & 30% ruling assumption</h4>
        <p className="mt-2 text-sm leading-relaxed text-copilot-text-secondary">
          Salary targets convert recurring needs into net and indicative gross planning bands. The 30% ruling toggle is
          planning-only and does not confirm eligibility, employer approval, or payroll application.
        </p>
      </div>
    </div>
  );
}
