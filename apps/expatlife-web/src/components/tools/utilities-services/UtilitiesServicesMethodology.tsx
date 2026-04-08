export function UtilitiesServicesMethodology() {
  return (
    <div className="prose prose-slate max-w-none text-copilot-text-secondary prose-headings:text-copilot-text-primary prose-p:text-copilot-text-secondary prose-li:text-copilot-text-secondary prose-strong:text-copilot-text-primary">
      <p>
        In plain terms: we multiply transparent baseline amounts by housing, city, usage, and heating factors, then label each line as
        something you can usually <strong>compare on the market</strong> versus something that is <strong>local or fixed</strong>. Setup cash
        is explicit buckets so month-one friction is visible. Nothing here scrapes your address or calls supplier APIs — it is a structured
        guess to support questions and budgeting.
      </p>
      <p>
        The engine starts from <strong>typed planning anchors</strong> in <code className="text-xs">UTILITIES_ASSUMPTIONS_CONFIG</code>{" "}
        (city, housing, usage, heating, and setup numerics). It derives <strong>household, housing, and usage profiles</strong> from your
        form so scaling and classification stay explainable.
      </p>
      <p>
        <strong>Energy</strong> combines a baseline with housing type/size, insulation quality, heating archetype, usage level, a
        bounded occupancy curve (adults/children), work-from-home interaction, optional EV load, city nudge, inclusion multipliers, and
        priority preference — each surfaced as <code className="text-xs">assumptionsUsed</code> strings on the card.
      </p>
      <p>
        <strong>Internet</strong> is tier-based, then scaled by household load and WFH/tier interaction; <strong>mobile</strong> is lines ×
        usage with a small household factor for families and house shares.
      </p>
      <p>
        <strong>Municipality / local charges</strong> use a city anchor and person-equivalent scaling, shown as a monthly figure with{" "}
        <strong>annual = ×12</strong> for mental accounting — still a broad band, not your assessment letter.
      </p>
      <p>
        <strong>First-month setup</strong> is split into explicit buckets (installation/activation, modem hardware, admin/overlap, invoice
        buffer, moving friction) that always sum to the headline setup total.
      </p>
      <p>
        <strong>Compare vs fixed</strong> is produced by deterministic rules in <code className="text-xs">classification.ts</code> using
        category, tenure, inclusion flags, heating/housing archetype, and move stage — not machine learning and not live tariffs.
      </p>
      <p className="text-sm">
        Everything remains <strong>rounded planning math</strong>: no address-level scraping, no supplier APIs, no legal parsing of leases.
      </p>
    </div>
  );
}
