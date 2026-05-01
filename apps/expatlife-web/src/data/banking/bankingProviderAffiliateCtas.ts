import type { BankId } from "@/src/data/banking/banks";
import abnAmroProvider from "@/src/content/affiliates/providers/abn-amro.json";
import bunqProvider from "@/src/content/affiliates/providers/bunq.json";
import ingProvider from "@/src/content/affiliates/providers/ing.json";
import n26Provider from "@/src/content/affiliates/providers/n26.json";
import rabobankProvider from "@/src/content/affiliates/providers/rabobank.json";
import revolutProvider from "@/src/content/affiliates/providers/revolut.json";

export type BankingProviderAffiliateCta = {
  label: string;
  href: string;
  isAffiliate: boolean;
  disclosure?: string;
};

const BANK_AFFILIATE_CTAS: Partial<Record<BankId, BankingProviderAffiliateCta>> = {
  "abn-amro": { ...abnAmroProvider.cta, disclosure: abnAmroProvider.disclosure },
  bunq: { ...bunqProvider.cta, disclosure: bunqProvider.disclosure },
  ing: { ...ingProvider.cta, disclosure: ingProvider.disclosure },
  n26: { ...n26Provider.cta, disclosure: n26Provider.disclosure },
  rabobank: { ...rabobankProvider.cta, disclosure: rabobankProvider.disclosure },
  revolut: { ...revolutProvider.cta, disclosure: revolutProvider.disclosure },
};

/** Affiliate / outbound CTA for a shortlist bank id — shared by fee-pattern and low-cost cards. */
export function getBankingProviderAffiliateCta(bankId: BankId): BankingProviderAffiliateCta | undefined {
  return BANK_AFFILIATE_CTAS[bankId];
}
