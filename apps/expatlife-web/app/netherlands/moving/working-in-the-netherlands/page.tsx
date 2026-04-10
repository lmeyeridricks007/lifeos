import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { WorkingInTheNetherlandsView } from "@/src/components/moving/working-in-the-netherlands/WorkingInTheNetherlandsView";
import {
  PAGE_HERO_SUBTITLE,
  WORKING_IN_THE_NETHERLANDS_CANONICAL,
} from "@/src/components/moving/working-in-the-netherlands/workingInTheNetherlandsContent";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "Working in the Netherlands";
const META_DESCRIPTION = PAGE_HERO_SUBTITLE;

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: WORKING_IN_THE_NETHERLANDS_CANONICAL,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "working in the netherlands expat",
    "move to netherlands for work guide",
    "dutch job offer salary permit relocation",
    "working in netherlands practical guide",
    "moving to netherlands work setup",
  ],
};

export default function NetherlandsMovingWorkingInTheNetherlandsPage() {
  return <WorkingInTheNetherlandsView />;
}
