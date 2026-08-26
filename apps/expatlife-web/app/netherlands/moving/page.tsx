import { permanentRedirect } from "next/navigation";

/** Legacy mega-menu stub — live pillar is `/netherlands/moving-to-the-netherlands/`. */
export default function NetherlandsMovingStubRedirect() {
  permanentRedirect("/netherlands/moving-to-the-netherlands/");
}
