import Image from "next/image";
import Link from "next/link";
import { OfficialContactsBlock } from "./OfficialContactsBlock";

export function CountryDocumentSection({
  documents,
  notes,
  sources,
  ctaHref,
  infographicSrc,
}: {
  documents: string[];
  notes: string[];
  sources: Array<{ label: string; name: string; website: string; contactSummary: string }>;
  ctaHref: string;
  infographicSrc?: string;
}) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Document preparation starter list</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-[1fr_280px]">
          <div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-foreground">
              {documents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {notes.length ? (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground-muted">
                {notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            ) : null}
            <Link href={ctaHref} className="mt-5 inline-block text-sm font-semibold text-link hover:text-link-hover hover:underline">
              Check document readiness
            </Link>
          </div>
          {infographicSrc ? (
            <div className="rounded-card border border-border bg-surface-raised p-2">
              <Image
                src={infographicSrc}
                alt="Document preparation overview"
                width={560}
                height={420}
                className="h-auto w-full rounded-lg object-cover"
                unoptimized={!infographicSrc.startsWith("/")}
              />
            </div>
          ) : null}
        </div>
        <OfficialContactsBlock title="Document sources and contacts" contacts={sources} />
      </div>
    </section>
  );
}

