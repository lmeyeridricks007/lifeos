import { redirect } from "next/navigation";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";


export const revalidate = CONTENT_REVALIDATE;
/**
 * Canonical post-arrival hub is /netherlands/after-arriving-netherlands/.
 * This route redirects there (also configured in next.config.js).
 */
export default function SettlingInNetherlandsPage() {
  redirect("/netherlands/after-arriving-netherlands/");
}
