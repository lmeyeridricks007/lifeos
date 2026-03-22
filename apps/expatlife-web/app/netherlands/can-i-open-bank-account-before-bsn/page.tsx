import { redirect } from "next/navigation";

/**
 * Redirect to the canonical Open Bank Account guide (BSN section).
 * This page is consolidated into /netherlands/open-bank-account-netherlands/#bsn
 */
export default function CanIOpenBankAccountBeforeBsnPage() {
  redirect("/netherlands/open-bank-account-netherlands/#bsn");
}
