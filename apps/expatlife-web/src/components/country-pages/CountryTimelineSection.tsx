export function CountryTimelineSection({
  beforeMove,
  arrivalWeek,
  first90Days,
  narrative,
  infographicSrc,
}: {
  beforeMove: string[];
  arrivalWeek: string[];
  first90Days: string[];
  narrative: string;
  infographicSrc?: string;
}) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Typical relocation timeline</h2>
        <p className="mt-2 text-sm text-slate-600">{narrative}</p>
        {infographicSrc ? (
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-2">
            <img src={infographicSrc} alt="Moving timeline infographic" className="w-full rounded-lg object-cover" loading="lazy" />
          </div>
        ) : null}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">Before the move</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {beforeMove.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">Arrival week</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {arrivalWeek.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">First 90 days</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {first90Days.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

