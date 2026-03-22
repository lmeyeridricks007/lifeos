export function CountryFaq({
  items,
}: {
  items: Array<{ q: string; a: string }>;
}) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">FAQ</h2>
        <dl className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={item.q} className="rounded-xl border border-slate-200 bg-white p-4">
              <dt className="text-sm font-semibold text-slate-900">{item.q}</dt>
              <dd className="mt-2 text-sm text-slate-700">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

