export function OfficialContactsBlock({
  title,
  contacts,
}: {
  title: string;
  contacts: Array<{ label: string; name: string; website: string; contactSummary: string }>;
}) {
  if (!contacts.length) return null;
  return (
    <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {contacts.map((contact) => (
          <article key={`${contact.label}-${contact.website}`} className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{contact.label}</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{contact.name}</p>
            <p className="mt-1 text-xs text-slate-600">{contact.contactSummary}</p>
            <a
              href={contact.website}
              className="mt-2 inline-block text-xs font-medium text-brand-700 hover:underline"
              rel="noreferrer"
              target="_blank"
            >
              {contact.website}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

