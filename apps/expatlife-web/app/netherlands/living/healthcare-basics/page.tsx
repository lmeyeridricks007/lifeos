import type { Metadata } from "next";
import { buildSocialMetadata } from "@/lib/seo/metadata";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { LIVING_HEALTHCARE_BASICS_PATH } from "@/src/components/living/livingPillarContent";
import { HealthcareBasicsView } from "@/src/components/living/healthcare-basics/HealthcareBasicsView";

export const revalidate = CONTENT_REVALIDATE;

const canonical = LIVING_HEALTHCARE_BASICS_PATH;
const META_TITLE = "Healthcare Basics in the Netherlands";
const META_DESCRIPTION =
  "A practical guide to how Dutch healthcare works in real life, from insurance and finding a GP to pharmacies, urgent care, emergencies, and the everyday things newcomers often misunderstand.";

export const metadata: Metadata = {
  ...buildSocialMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    path: canonical,
    ogType: "article",
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "healthcare netherlands expat",
    "dutch healthcare system basics",
    "huisarts gp netherlands expat",
    "urgent care netherlands expat",
    "health insurance and gp netherlands guide",
  ],
};

export default function NetherlandsLivingHealthcareBasicsPage() {
  return <HealthcareBasicsView />;
}
