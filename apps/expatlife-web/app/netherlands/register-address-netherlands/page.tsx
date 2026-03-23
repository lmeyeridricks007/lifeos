import { redirect } from "next/navigation";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";


export const revalidate = CONTENT_REVALIDATE;
/** Redirect to canonical municipality registration guide. */
export default function RegisterAddressPage() {
  redirect("/netherlands/municipality-registration-netherlands/");
}
