import { permanentRedirect } from "next/navigation";

/** Legacy Money URL — canonical 30% guide lives under Taxes. */
export default function ThirtyPercentRulingMoneyAliasPage() {
  permanentRedirect("/netherlands/taxes/30-percent-ruling/");
}
