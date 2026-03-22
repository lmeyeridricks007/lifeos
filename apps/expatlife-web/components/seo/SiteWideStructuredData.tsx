/**
 * Site-wide Organization and WebSite JSON-LD. Rendered in root layout.
 * Do not add Organization/WebSite on every page; once in layout is enough.
 */
import { StructuredData } from "./StructuredData";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/src/lib/seo/schema";

export function SiteWideStructuredData() {
  const organization = buildOrganizationSchema();
  const website = buildWebsiteSchema();
  return (
    <>
      <StructuredData data={organization} />
      <StructuredData data={website} />
    </>
  );
}
