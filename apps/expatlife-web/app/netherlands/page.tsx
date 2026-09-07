import { getNlPortalContent } from "@expatlife/content";
import { BreadcrumbJsonLd } from "@/components/content/breadcrumb-jsonld";
import { PortalNetherlandsTemplate } from "@/src/components/content/PortalNetherlandsTemplate";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { getSiteOrigin } from "@/lib/site-origin";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();

export const metadata = buildSocialMetadata({
  // Country hub — distinct from homepage brand title ("ExpatCopilot | Guides and tools…").
  title: "Move to the Netherlands",
  description:
    "Netherlands relocation hub: step-by-step guides, planning tools, city routes, and origin-country paths for expats preparing to move.",
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
