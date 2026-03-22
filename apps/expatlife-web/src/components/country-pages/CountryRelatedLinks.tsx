import Link from "next/link";

export function CountryRelatedLinks({
  links,
}: {
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Related guides</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href} className="rounded-lg border border-slate-200 bg-white p-3">
              <Link href={link.href} className="text-sm font-medium text-brand-700 hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

