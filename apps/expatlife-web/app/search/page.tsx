import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SearchPageClient } from "@/src/components/search/SearchPageClient";
import { runSearch } from "@/src/lib/search/runSearch";
import { getLiveSearchQuickLinks, getLiveSearchRecoveryLinks } from "@/src/lib/search/liveQuickLinks";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";


export const revalidate = CONTENT_REVALIDATE;
/** Query variants are not indexed; canonical points to clean /search/ to avoid duplicate SERP URLs. */
export const metadata: Metadata = {
  title: "Search",
  description:
    "Find live Netherlands relocation guides, tools, visa pages, expat services, and city hubs. Results only include published pages.",
  alternates: { canonical: "/search/" },
  robots: { index: false, follow: true },
};

type SearchPageProps = { searchParams: Promise<{ q?: string }> | { q?: string } };

export default async function SearchPage(props: SearchPageProps) {
  const raw = props.searchParams;
  const searchParams: { q?: string } =
    raw !== undefined && raw !== null ? await Promise.resolve(raw) : {};
  const q = typeof searchParams.q === "string" ? searchParams.q.trim() : "";
  const results = q ? runSearch(q) : [];
  const quickLinks = getLiveSearchQuickLinks();
  const recoveryLinks = getLiveSearchRecoveryLinks();

  return (
    <Section
      eyebrow="Search"
      title={q ? `Search: "${q}"` : "Search"}
      subtitle={
        q
          ? results.length > 0
            ? `${results.length} result${results.length === 1 ? "" : "s"} for "${q}".`
            : `No results found for "${q}". Try another term or use the quick links below.`
          : "Search live guides, tools, visa pages, services, cities, and hubs. Use the header search or the form below."
      }
    >
      <Container className="px-0">
        <SearchPageClient
          initialQuery={q}
          results={results}
          quickLinks={quickLinks}
          recoveryLinks={recoveryLinks}
        />
      </Container>
    </Section>
  );
}
