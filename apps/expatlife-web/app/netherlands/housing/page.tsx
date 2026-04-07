import type { Metadata } from "next";
import { getNlHousingFlagshipContent } from "@expatlife/content";
import { NetherlandsFlagshipPillarPage } from "@/components/page/NetherlandsFlagshipPillarPage";
import { HousingFlagshipMonetization } from "@/src/components/monetization/HousingFlagshipMonetization";
import { getSiteOrigin } from "@/lib/site-origin";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;

const baseUrl = getSiteOrigin();

export async function generateMetadata(): Promise<Metadata> {
  const content = await getNlHousingFlagshipContent();
  return buildSocialMetadata({
    title: content.meta.seo.title,
    description: content.meta.seo.description,
    path: content.meta.canonicalPath,
    ogType: "article",
  });
}

export default async function NetherlandsHousingFlagshipPage() {
  const content = await getNlHousingFlagshipContent();
  return (
    <>
      <NetherlandsFlagshipPillarPage content={content} baseUrl={baseUrl} />
      <HousingFlagshipMonetization />
    </>
  );
}
