export function CountryFaq({
  items,
}: {
  items: Array<{ q: string; a: string }>;
}) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">FAQ</h2>
        <dl className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={item.q} className="rounded-xl border border-border bg-surface-raised p-4">
              <dt className="text-sm font-semibold text-foreground">{item.q}</dt>
              <dd className="mt-2 text-sm text-foreground">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

