import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

type Breadcrumb = { label: string; href?: string };
type SuggestedLink = { title: string; href: string; description: string };

type ComingSoonPageProps = {
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  suggestedLinks: SuggestedLink[];
};

export function ComingSoonPage({ title, description, breadcrumbs, suggestedLinks }: ComingSoonPageProps) {
  return (
    <Section eyebrow="Coming soon" title={title} subtitle={description}>
      <nav aria-label="Breadcrumbs" className="mb-4 flex flex-wrap gap-2 text-xs text-slate-500">
        {breadcrumbs.map((crumb, index) => (
          <span key={`${crumb.label}-${index}`} className="inline-flex items-center gap-2">
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-slate-700">
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            {index < breadcrumbs.length - 1 ? <span>/</span> : null}
          </span>
        ))}
      </nav>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-600">This route exists in navigation and is being expanded next.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/netherlands/moving-to-the-netherlands">
            <Button>Moving to the Netherlands</Button>
          </Link>
          <Link href="/netherlands/moving/tools">
            <Button variant="secondary">Moving tools</Button>
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {suggestedLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white">
            <p className="text-sm font-semibold text-slate-900">{link.title}</p>
            <p className="mt-1 text-sm text-slate-600">{link.description}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
