import { redirect } from "next/navigation";
import { buildSocialMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

export const metadata = buildSocialMetadata({
  title: "Tools hub",
  description: "Browse calculators, checklists, and planners for life in the Netherlands — you will be redirected to the main tools hub.",
  path: "/tools/",
  ogType: "website",
});

export default function ToolsHubPage() {
  redirect("/netherlands/tools/");
}
