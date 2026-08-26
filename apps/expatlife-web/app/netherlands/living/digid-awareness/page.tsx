import { permanentRedirect } from "next/navigation";

/** Living cluster stub — canonical expat DigiD guide is `/netherlands/digid-awareness/`. */
export default function LivingDigiDAwarenessRedirect() {
  permanentRedirect("/netherlands/digid-awareness/");
}
