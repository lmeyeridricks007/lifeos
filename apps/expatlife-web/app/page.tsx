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
      "Practical relocation platform with guides, tools, and routes for moving to the Netherlands."
  );
  return buildSocialMetadata({
    title: "ExpatCopilot | Move to the Netherlands",
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
