import { ToolHubTemplate } from "@/src/components/tools/ToolHubTemplate";
import { getCategoryHubData, getCategoryHubJsonLd, getCategoryHubMetadata } from "@/src/lib/tools/hubPageUtils";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
export const metadata = getCategoryHubMetadata("leaving-nl");

export default function LeavingToolsHubPage() {
  const { category, liveTools, comingSoonTools, relatedGuides } = getCategoryHubData("leaving-nl");
  const { collectionPage, breadcrumb } = getCategoryHubJsonLd("leaving-nl");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ToolHubTemplate category={category} liveTools={liveTools} comingSoonTools={comingSoonTools} relatedGuides={relatedGuides} />
    </>
  );
}
