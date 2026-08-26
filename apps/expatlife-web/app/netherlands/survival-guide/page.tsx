import { permanentRedirect } from "next/navigation";

/** Legacy mega-menu stub — live pillar is `/netherlands/living/survival-guide/`. */
export default function NetherlandsSurvivalGuideStubRedirect() {
  permanentRedirect("/netherlands/living/survival-guide/");
}
