import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { ChangingJobsNetherlandsView } from "@/src/components/moving/changing-jobs-netherlands/ChangingJobsNetherlandsView";
import {
  CHANGING_JOBS_NETHERLANDS_CANONICAL,
  PAGE_HERO_SUBTITLE,
} from "@/src/components/moving/changing-jobs-netherlands/changingJobsNetherlandsContent";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Changing Jobs in the Netherlands | ExpatCopilot";
const META_DESCRIPTION = PAGE_HERO_SUBTITLE;

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: CHANGING_JOBS_NETHERLANDS_CANONICAL,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "changing jobs netherlands expat",
    "switch jobs netherlands permit salary contract",
    "dutch job change guide expat",
    "changing employer netherlands expat",
    "new job netherlands relocation planning",
  ],
};

export default function NetherlandsMovingChangingJobsPage() {
  return <ChangingJobsNetherlandsView />;
}
