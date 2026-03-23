import { getNlPortalContent } from "@expatlife/content";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { PortalNetherlandsTemplate } from "@/src/components/content/PortalNetherlandsTemplate";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();

export const metadata = buildSocialMetadata({
  title: "Move to the Netherlands",
  description:
    "Practical relocation platform with guides, tools, and country-specific routes for moving to the Netherlands. Step-by-step clarity for expats.",
  path: "/netherlands/",
  ogType: "website",
});

export default async function NetherlandsHomePage() {
  const content = await getNlPortalContent();
  const breadcrumbCrumbs = content.breadcrumbs.map((b) => ({
    name: b.label,
    item: new URL(b.href, baseUrl).toString(),
  }));

  return (
    <>
      <BreadcrumbJsonLd crumbs={breadcrumbCrumbs} />
      <PortalNetherlandsTemplate content={JSON.parse(JSON.stringify(content))} />
    </>
  );
}
