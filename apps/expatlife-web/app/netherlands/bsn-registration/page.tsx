import { redirect } from "next/navigation";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";


export const revalidate = CONTENT_REVALIDATE;
/** Redirect to canonical municipality registration guide (BSN is received at registration). */
export default function BsnRegistrationPage() {
  redirect("/netherlands/municipality-registration-netherlands/");
}
