import { redirect } from "next/navigation";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { LIVING_EMERGENCIES_SAFETY_PATH } from "@/src/components/living/livingPillarContent";

export const revalidate = CONTENT_REVALIDATE;

export default function NetherlandsLivingEmergenciesPage() {
  redirect(LIVING_EMERGENCIES_SAFETY_PATH);
}
