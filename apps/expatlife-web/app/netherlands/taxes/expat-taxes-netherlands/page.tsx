import { permanentRedirect } from "next/navigation";

/** Legacy taxes-cluster URL — canonical content lives under Money. */
export default function ExpatTaxesNetherlandsTaxesAliasPage() {
  permanentRedirect("/netherlands/money/expat-taxes-netherlands/");
}
