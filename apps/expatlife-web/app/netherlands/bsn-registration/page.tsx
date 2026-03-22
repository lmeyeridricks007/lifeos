import { redirect } from "next/navigation";

/** Redirect to canonical municipality registration guide (BSN is received at registration). */
export default function BsnRegistrationPage() {
  redirect("/netherlands/municipality-registration-netherlands/");
}
