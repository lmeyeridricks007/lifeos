import { permanentRedirect } from "next/navigation";

/** Canonical Living pillar entry is the Survival Guide hub. */
export default function NetherlandsLivingRedirectPage() {
  permanentRedirect("/netherlands/living/survival-guide/");
}
