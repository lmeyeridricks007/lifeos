import Link from "next/link";
import { OfficialContactsBlock } from "./OfficialContactsBlock";

export function CountryVisaAwareness({
  commonRoutes,
  notes,
  disclaimer,
  visaHubPath,
  officialContacts,
}: {
  commonRoutes: string[];
  notes: string[];
  disclaimer: string;
  visaHubPath: string;
  officialContacts: Array<{ label: string; name: string; website: string; contactSummary: string }>;
}) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Visa awareness</h2>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground">
          {commonRoutes.map((route) => (
            <li key={route}>{route}</li>
          ))}
        </ul>
        {notes.length ? (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground-muted">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
        <p className="mt-4 text-sm text-foreground-muted">{disclaimer}</p>
        <Link href={visaHubPath} className="mt-3 inline-block text-sm font-semibold text-brand-700 hover:underline">
          Explore visa guidance hub
        </Link>
        <OfficialContactsBlock title="Official contacts" contacts={officialContacts} />
      </div>
    </section>
  );
}

