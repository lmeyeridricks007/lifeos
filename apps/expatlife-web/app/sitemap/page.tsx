import type { Metadata } from "next";
import Link from "next/link";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { TrustPageLayout } from "@/components/layout/TrustPageLayout";
import { SITEMAP_MAIN_LINKS, SITEMAP_TRUST_LEGAL_LINKS } from "@/src/data/site/footer-links";
import { NETHERLANDS_SERVICES_CATEGORIES } from "@/src/data/services/categories";
import { loadGuideRegistry } from "@/src/lib/guides/loadGuide";
import { loadToolRegistry } from "@/src/lib/tools/loadToolRegistry";
import { loadAllEnabledCountries } from "@/src/lib/countries/loadCountries";
import { ROUTING_ORIGIN_COUNTRY_SLUGS } from "@/src/data/site/route-registry";
import { filterLiveInternalLinks } from "@/src/lib/routes/routeStatus";

/** Align with `/sitemap.xml` and registry-driven guides so lists refresh on ISR (e.g. after publish rules). */
export const revalidate = CONTENT_REVALIDATE;

/** City hubs — filtered by `isRouteLive` (publish gates); list kept aligned with `netherlandsCityHubPages`. */
const CITY_PAGES = [
  { label: "Amsterdam", href: "/netherlands/amsterdam/" },
  { label: "Rotterdam", href: "/netherlands/rotterdam/" },
  { label: "Utrecht", href: "/netherlands/utrecht/" },
  { label: "The Hague", href: "/netherlands/the-hague/" },
  { label: "Eindhoven", href: "/netherlands/eindhoven/" },
  { label: "Haarlem", href: "/netherlands/haarlem/" },
  { label: "Groningen", href: "/netherlands/groningen/" },
  { label: "Delft", href: "/netherlands/delft/" },
  { label: "Leiden", href: "/netherlands/leiden/" },
  { label: "Maastricht", href: "/netherlands/maastricht/" },
  { label: "Breda", href: "/netherlands/breda/" },
  { label: "Tilburg", href: "/netherlands/tilburg/" },
  { label: "Arnhem", href: "/netherlands/arnhem/" },
  { label: "Nijmegen", href: "/netherlands/nijmegen/" },
  { label: "Amstelveen", href: "/netherlands/amstelveen/" },
] as const;

export const metadata: Metadata = {
  title: "Sitemap | ExpatCopilot",
  description:
    "Browse the main pages across ExpatCopilot: guides, services, cities, tools, and trust pages.",
  alternates: { canonical: "/sitemap/" },
};

function SitemapSection({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  const live = filterLiveInternalLinks(links);
  if (!live.length) return null;
  return (
    <section className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <ul className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
        {live.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-slate-700 hover:text-slate-900 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function SitemapPage() {
  const registry = loadGuideRegistry();
  const guideLinks =
    registry?.guides.map((g) => ({
      label: g.title?.trim() || g.slug,
      href: g.path,
    })) ?? [];
  const serviceLinks = NETHERLANDS_SERVICES_CATEGORIES.map((c) => ({
    label: c.name,
    href: c.href,
  }));
  const toolLinks = loadToolRegistry()
    .filter((t) => t.status === "live")
    .map((t) => ({ label: t.title, href: t.route }));

  const routingSlugSet = new Set<string>(ROUTING_ORIGIN_COUNTRY_SLUGS);
  const originGuideLinks = loadAllEnabledCountries()
    .filter((c) => routingSlugSet.has(c.slug))
    .map((c) => ({
      label: `Moving to the Netherlands from ${c.name}`,
      href: `/netherlands/moving/moving-to-netherlands-from/${c.slug}/`,
    }));

  return (
    <TrustPageLayout
      breadcrumbLabel="Sitemap"
      title="Sitemap"
      subtitle="Browse indexable pages on ExpatCopilot. Lists are filtered to live routes only (see route registry)."
    >
      <div className="space-y-6">
        <SitemapSection title="Main pages" links={[...SITEMAP_MAIN_LINKS]} />
        <SitemapSection title="Guides (moving hub)" links={guideLinks} />
        <SitemapSection title="Origin country guides" links={originGuideLinks} />
        <SitemapSection title="Services" links={serviceLinks} />
        <SitemapSection
          title="Cities"
          links={[
            { label: "Dutch cities hub — compare & guides", href: "/netherlands/cities/" },
            ...CITY_PAGES,
          ]}
        />
        <SitemapSection title="Tools" links={toolLinks} />
        <SitemapSection title="Trust & legal" links={[...SITEMAP_TRUST_LEGAL_LINKS]} />
      </div>
    </TrustPageLayout>
  );
}
