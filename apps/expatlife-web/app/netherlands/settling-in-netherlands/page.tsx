import { redirect } from "next/navigation";

/**
 * Canonical post-arrival hub is /netherlands/after-arriving-netherlands/.
 * This route redirects there (also configured in next.config.js).
 */
export default function SettlingInNetherlandsPage() {
  redirect("/netherlands/after-arriving-netherlands/");
}
