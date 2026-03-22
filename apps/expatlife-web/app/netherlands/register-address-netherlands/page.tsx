import { redirect } from "next/navigation";

/** Redirect to canonical municipality registration guide. */
export default function RegisterAddressPage() {
  redirect("/netherlands/municipality-registration-netherlands/");
}
