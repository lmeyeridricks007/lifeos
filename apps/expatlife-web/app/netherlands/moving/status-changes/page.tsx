import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { StatusChangesView } from "@/src/components/moving/status-changes/StatusChangesView";
import { PAGE_HERO_SUBTITLE, STATUS_CHANGES_CANONICAL } from "@/src/components/moving/status-changes/statusChangesContent";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Status Changes in the Netherlands | ExpatCopilot";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: PAGE_HERO_SUBTITLE.replace(/\*\*/g, ""),
    path: STATUS_CHANGES_CANONICAL,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "status change netherlands expat",
    "change of residence basis netherlands",
    "study to work residence netherlands",
    "job change residence status netherlands",
    "family status change residence netherlands",
  ],
};

export default function NetherlandsMovingStatusChangesPage() {
  return <StatusChangesView />;
}
