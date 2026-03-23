import { redirect } from "next/navigation";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

export const metadata = buildSocialMetadata({
  title: "Tools hub",
  description: "Browse calculators, checklists, and planners for life in the Netherlands — you will be redirected to the main tools hub.",
  path: "/tools/",
  ogType: "website",
});

export default function ToolsHubPage() {
  redirect("/netherlands/tools/");
}
