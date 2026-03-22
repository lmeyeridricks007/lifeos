import Link from "next/link";

type LinkItem = { label: string; href: string };

export function RelatedTrustLinks({
  links,
  heading = "Related",
}: {
  links: readonly LinkItem[];
  heading?: string;
}) {
  if (!links?.length) return null;
  return (
    <section className="mt-12 border-t border-slate-200 pt-8">
      <h2 className="text-lg font-semibold text-slate-900">{heading}</h2>
      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-medium text-slate-700 hover:text-slate-900 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
