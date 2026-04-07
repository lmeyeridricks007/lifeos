export function CountryScenarioCards({
  countryName,
  scenarios,
}: {
  countryName: string;
  scenarios: Array<{ title: string; summary: string }>;
}) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Example scenarios</h2>
        <p className="mt-2 text-sm text-foreground-muted">
          Practical move patterns we commonly see for people relocating from {countryName}.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {scenarios.map((scenario) => (
            <article key={scenario.title} className="rounded-xl border border-border bg-surface-raised p-4">
              <h3 className="text-sm font-semibold text-foreground">{scenario.title}</h3>
              <p className="mt-2 text-sm text-foreground">{scenario.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

