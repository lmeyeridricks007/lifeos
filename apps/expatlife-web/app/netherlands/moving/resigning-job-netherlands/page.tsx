import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { ResigningJobNetherlandsView } from "@/src/components/moving/resigning-job-netherlands/ResigningJobNetherlandsView";
import {
  RESIGNING_JOB_NETHERLANDS_CANONICAL,
  RESIGNING_JOB_NETHERLANDS_SEO_DESCRIPTION,
} from "@/src/components/moving/resigning-job-netherlands/resigningJobNetherlandsContent";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Resigning a Job in the Netherlands | ExpatCopilot";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: RESIGNING_JOB_NETHERLANDS_SEO_DESCRIPTION,
    path: RESIGNING_JOB_NETHERLANDS_CANONICAL,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "resigning job netherlands expat",
    "resignation netherlands permit salary contract",
    "leaving job netherlands expat guide",
    "notice period netherlands expat resignation",
    "resigning work netherlands practical guide",
  ],
};

export default function NetherlandsMovingResigningJobPage() {
  return <ResigningJobNetherlandsView />;
}
