import { permanentRedirect } from "next/navigation";
import { PAYSLIP_DECODER_CANONICAL } from "@/src/content/tools/payslip-decoder/pageContent";

/** Legacy / alternate URL — canonical tool lives under Work tools. */
export default function DutchPayslipDecoderTaxesAliasRedirect() {
  permanentRedirect(PAYSLIP_DECODER_CANONICAL);
}
