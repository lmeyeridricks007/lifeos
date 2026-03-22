export function CountryCostSection({
  currency,
  ranges,
  narrative,
}: {
  currency?: string;
  ranges: Array<{ key: string; label: string; value: string; note: string }>;
  narrative: string;
}) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Estimated relocation costs</h2>
        {currency ? <p className="mt-2 text-sm text-slate-600">Planning ranges in {currency}.</p> : null}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {ranges.map((range) => (
            <article key={range.key} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-900">{range.label}</h3>
              <p className="mt-2 text-lg font-semibold text-slate-900">{range.value}</p>
              <p className="mt-2 text-xs text-slate-600">{range.note}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600">{narrative}</p>
      </div>
    </section>
  );
}

