import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { TwvWorkPermitView } from "@/src/components/moving/twv-work-permit/TwvWorkPermitView";
import { PAGE_HERO_SUBTITLE, TWV_WORK_PERMIT_CANONICAL } from "@/src/components/moving/twv-work-permit/twvWorkPermitContent";

export const revalidate = CONTENT_REVALIDATE;

const META_TITLE = "TWV Work Permit in the Netherlands";
const META_DESCRIPTION = PAGE_HERO_SUBTITLE;

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: TWV_WORK_PERMIT_CANONICAL,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "twv work permit netherlands",
    "tewerkstellingsvergunning expat guide",
    "twv vs gvva netherlands",
    "work permit netherlands employer guide expat",
    "who needs twv netherlands",
  ],
};

export default function NetherlandsMovingTwvWorkPermitPage() {
  return <TwvWorkPermitView />;
}
