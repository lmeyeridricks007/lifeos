import { getSeoPublicOrigin } from "@/lib/site-origin";
import { normalizeSitePath, toAbsoluteCanonicalUrl } from "@/lib/seo/site-url";

export type BreadcrumbItem = { name: string; url: string };

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): object {
  const baseUrl = getSeoPublicOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? toAbsoluteCanonicalUrl(baseUrl, new URL(item.url).pathname)
        : toAbsoluteCanonicalUrl(baseUrl, item.url),
    })),
  };
}

/** Standard breadcrumb for Netherlands moving tools: Home → Netherlands → Moving → Tools → [Tool Name]. */
export function getToolBreadcrumbItems(toolName: string, toolPath: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: "/" },
    { name: "Netherlands", url: "/netherlands" },
    { name: "Moving to the Netherlands", url: "/netherlands/moving-to-the-netherlands" },
    { name: "Tools", url: "/netherlands/moving/tools" },
    { name: toolName, url: normalizeSitePath(toolPath) },
  ];
}
