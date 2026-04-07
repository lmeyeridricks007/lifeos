export function CountryOverviewCards({
  cards,
}: {
  cards: Array<{ label: string; value: string; note?: string }>;
}) {
  return (
    <section className="py-10">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        {cards.map((card) => (
          <article key={card.label} className="rounded-xl border border-border bg-surface-raised p-4">
            <h2 className="text-sm font-semibold text-foreground">{card.label}</h2>
            <p className="mt-2 text-base text-foreground">{card.value}</p>
            {card.note ? <p className="mt-2 text-xs text-foreground-muted">{card.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

