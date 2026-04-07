import { OfficialContactsBlock } from "./OfficialContactsBlock";

export function CountryContacts({
  contacts,
}: {
  contacts: Array<{ label: string; name: string; website: string; contactSummary: string }>;
}) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Official contacts and references</h2>
        <OfficialContactsBlock title="Trusted official sources" contacts={contacts} />
      </div>
    </section>
  );
}

