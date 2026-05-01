import type { BankingProviderAffiliateCta } from "@/src/data/banking/bankingProviderAffiliateCtas";
import { getBankingProviderAffiliateCta } from "@/src/data/banking/bankingProviderAffiliateCtas";
import type { TransferCostChannelKey } from "@/src/data/tools/transferCostCalculatorAssumptions";
import wiseProvider from "@/src/content/affiliates/providers/wise.json";

export type TransferCostProviderPanelRow = {
  id: string;
  name: string;
  /** One plain sentence — not a price claim. */
  description: string;
  cta?: BankingProviderAffiliateCta;
  /**
   * Which calculator path band to show next to this name for the user’s send size —
   * not a claim this company matches that band.
   */
  costChannel: TransferCostChannelKey;
  /** Short line under the “model cost” label — clarifies archetype vs named provider. */
  costCaption: string;
};

/** Fixed editorial order — not a ranking. */
export function getTransferCostProviderPanelRows(): TransferCostProviderPanelRow[] {
  const wiseCta: BankingProviderAffiliateCta = {
    label: wiseProvider.cta.label,
    href: wiseProvider.cta.href,
    isAffiliate: wiseProvider.cta.isAffiliate,
    disclosure: wiseProvider.disclosure,
  };
  const bunq = getBankingProviderAffiliateCta("bunq");
  const n26 = getBankingProviderAffiliateCta("n26");
  const revolut = getBankingProviderAffiliateCta("revolut");

  return [
    {
      id: "wise",
      name: "Wise",
      description: "Often used for cross-border sends and holding several currencies — still compare amount received on the day you send.",
      cta: wiseCta,
      costChannel: "transfer_provider",
      costCaption: "Uses our transfer-company path band for your answers — not Wise’s live quote.",
    },
    {
      id: "revolut",
      name: "Revolut",
      description: "App-first spending and FX features; international pricing depends on your plan — read the logged-in quote.",
      cta: revolut,
      costChannel: "digital_bank",
      costCaption: "Uses our digital-bank path band — Revolut’s logged-in price may differ.",
    },
    {
      id: "bunq",
      name: "bunq",
      description: "Dutch app bank with multi-currency options — verify international send pricing on your tier before you rely on it.",
      cta: bunq,
      costChannel: "digital_bank",
      costCaption: "Uses our digital-bank path band — check bunq for your plan and route.",
    },
    {
      id: "n26",
      name: "N26",
      description: "EU app bank with standard and premium tiers — check how your membership changes non-euro sends.",
      cta: n26,
      costChannel: "digital_bank",
      costCaption: "Uses our digital-bank path band — N26 pricing depends on membership.",
    },
    {
      id: "traditional-banks",
      name: "Traditional Dutch banks",
      description:
        "ING, ABN AMRO, Rabobank, and others: strong for everyday Netherlands banking — compare their international table when you send outside the euro area.",
      costChannel: "traditional_bank",
      costCaption: "Uses our traditional-bank path band — each bank’s fee and rate table differs.",
    },
  ];
}
