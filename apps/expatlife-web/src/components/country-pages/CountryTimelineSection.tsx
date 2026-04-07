import Image from "next/image";

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
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Typical relocation timeline</h2>
        <p className="mt-2 text-sm text-foreground-muted">{narrative}</p>
        {infographicSrc ? (
          <div className="mt-4 rounded-card border border-border bg-surface-raised p-2">
            <Image
              src={infographicSrc}
              alt="Moving timeline infographic"
              width={960}
              height={540}
              className="h-auto w-full rounded-lg object-cover"
              unoptimized={!infographicSrc.startsWith("/")}
            />
          </div>
        ) : null}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-border bg-surface-raised p-4">
            <h3 className="text-sm font-semibold text-foreground">Before the move</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground">
              {beforeMove.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-border bg-surface-raised p-4">
            <h3 className="text-sm font-semibold text-foreground">Arrival week</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground">
              {arrivalWeek.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-xl border border-border bg-surface-raised p-4">
            <h3 className="text-sm font-semibold text-foreground">First 90 days</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground">
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

