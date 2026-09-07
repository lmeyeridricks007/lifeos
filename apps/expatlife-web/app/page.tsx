import { redirect } from "next/navigation";
import { getHomeContent } from "@expatlife/content";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";


export const revalidate = CONTENT_REVALIDATE;
/** Plain, clone-safe metadata with Open Graph + Twitter for link previews (before redirect). */
export async function generateMetadata() {
  const content = await getHomeContent();
  const description = String(
    content.seo?.description ??
      "ExpatCopilot helps you plan a Netherlands move with practical guides, calculators, and country-specific routes—start from your situation, not a generic checklist."
  );
  return buildSocialMetadata({
    // Brand/product entry — distinct from the Netherlands hub title ("Move to the Netherlands").
    title: "ExpatCopilot | Guides and tools for Netherlands relocation",
    description,
    path: "/",
    ogType: "website",
    absoluteTitle: true,
  });
}

export default async function HomePage() {
  const content = await getHomeContent();
  redirect(content.redirectTarget);
}
