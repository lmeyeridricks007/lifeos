import type { AccountSetupScenarioCardVm } from "@/components/banking/AccountSetupScenarioCards";
import type { BankingAccountRelatedGuideKey } from "@/src/data/banking/accountTypes";
import { bankingAccountRelatedGuides } from "@/src/data/banking/accountTypes";

/**
 * Canonical Dutch / EU payment concepts for ExpatCopilot — reusable on How payments work,
 * Living, Shopping, and future tools. Education only; confirm products and rules on official sites.
 */

// ——— Official sources (keys only; URLs live here for reuse) ———

export const bankingPaymentOfficialSources = {
  ideal: { label: "iDEAL — scheme overview", href: "https://www.ideal.nl/en/" },
  sepaEpc: { label: "European Payments Council — SEPA", href: "https://www.europeanpayments.eu/" },
  dnb: { label: "De Nederlandsche Bank (DNB)", href: "https://www.dnb.nl/en/" },
  yourEuropeAccounts: {
    label: "Your Europe — bank accounts & payments",
    href: "https://europa.eu/youreurope/citizens/consumers/financial-products-and-services/bank-accounts-and-payments/index_en.htm",
  },
  ecbSepa: { label: "ECB — SEPA overview", href: "https://www.ecb.europa.eu/paym/intro/mip-online/sepa/html/index.en.html" },
} as const;

export type BankingPaymentOfficialSourceKey = keyof typeof bankingPaymentOfficialSources;

export function resolveBankingPaymentOfficialLinks(keys: readonly BankingPaymentOfficialSourceKey[]) {
  return keys.map((k) => bankingPaymentOfficialSources[k]);
}

// ——— Payment concepts ———

export type BankingPaymentConcept = {
  readonly id: string;
  readonly name: string;
  readonly plainEnglish: string;
  readonly detailParagraphs?: readonly string[];
  readonly usedFor: readonly string[];
  readonly commonSituations: readonly string[];
  readonly expatWatchOuts: readonly string[];
  readonly relatedGuideKeys: readonly BankingAccountRelatedGuideKey[];
  readonly officialSourceKeys: readonly BankingPaymentOfficialSourceKey[];
};

export const bankingPaymentConcepts: readonly BankingPaymentConcept[] = [
  {
    id: "iban",
    name: "IBAN",
    plainEnglish:
      "An IBAN (International Bank Account Number) is the standard account identifier used for bank transfers and many direct debits in the Netherlands and across SEPA.",
    detailParagraphs: [
      "Dutch IBANs are common for salary, rent, utilities, refunds, and official payouts. You will copy them from your banking app, contract, or invoice when you set up payments.",
      "In principle, SEPA is designed so euro accounts in participating countries can work together. In practice, some Dutch counterparties still create friction for certain foreign IBANs (for example around direct debit templates or internal risk rules). EU consumer guidance discourages IBAN discrimination for euro payment accounts — if you believe you are refused only because of IBAN country, consider official complaint routes and documentation.",
      "Having a Dutch-friendly current account often reduces day-to-day friction for iDEAL, local debit habits, and templates employers or landlords expect — compare options on Best banks for expats after you know account types.",
    ],
    usedFor: ["Salary and payroll payouts", "Rent and utilities setup", "Refunds and merchant payouts", "Government or municipality payments when they ask for your IBAN"],
    commonSituations: ["First day at work — HR asks for your IBAN", "Signing a lease — landlord publishes IBAN + payment reference", "Connecting utilities or insurance to your account"],
    expatWatchOuts: [
      "Some contracts still assume a Dutch IBAN or local rails for direct debit or iDEAL — confirm what your counterpart accepts.",
      "Do not confuse IBAN with your card number — forms ask for one or the other.",
    ],
    relatedGuideKeys: ["types-of-accounts", "best-banks-expats", "open-bank-account"],
    officialSourceKeys: ["yourEuropeAccounts", "dnb"],
  },
  {
    id: "ideal",
    name: "iDEAL",
    plainEnglish: "iDEAL is a widely used online payment method in the Netherlands.",
    detailParagraphs: [
      "At checkout you choose iDEAL, pick your bank, then approve the payment in your bank app or online banking.",
      "You will encounter it for webshops, tickets, utilities, municipality-style payments, and many services. It is one reason credit cards are not always the default online path here.",
      "When choosing a bank, check that your intended account supports iDEAL on the official feature list — especially if you rely on digital onboarding or a non-traditional package.",
    ],
    usedFor: ["Webshop checkout", "Bills and tickets", "Public-sector-style portals that route you to your bank"],
    commonSituations: ["Buying something online and being sent to your bank to approve", "Paying a municipality or provider invoice with iDEAL"],
    expatWatchOuts: [
      "Your bank must support iDEAL on the account you want — verify before you rely on one package.",
      "If you only know card checkout, the first iDEAL flow can feel unfamiliar — that is normal.",
    ],
    relatedGuideKeys: ["best-banks-expats", "traditional-vs-digital"],
    officialSourceKeys: ["ideal", "yourEuropeAccounts"],
  },
  {
    id: "sepa-transfer",
    name: "SEPA transfer",
    plainEnglish:
      "SEPA (Single Euro Payments Area) covers euro bank-to-bank transfers between participating countries using IBAN details — standard for paying rent, friends, or invoices in euros.",
    detailParagraphs: [
      "Cut-off times and fees are bank-specific — read your bank’s help for same-day vs next-day.",
    ],
    usedFor: ["One-off euro payments inside the SEPA zone", "Rent when you send manually each month", "Paying back a friend with a manual transfer"],
    commonSituations: ["You copy an IBAN from an invoice and send euros once", "You schedule a future-dated transfer for rent"],
    expatWatchOuts: ["A SEPA label does not guarantee every merchant accepts every foreign IBAN pattern — confirm with the counterparty when it matters."],
    relatedGuideKeys: ["banking-fees", "how-payments-work"],
    officialSourceKeys: ["sepaEpc", "ecbSepa"],
  },
  {
    id: "direct-debit-incasso",
    name: "Direct debit / incasso",
    plainEnglish:
      "A direct debit lets an approved creditor pull money from your account on a schedule after you sign a mandate — in Dutch paperwork you often see incasso.",
    detailParagraphs: [
      "Utilities, insurance, gyms, and subscriptions often use direct debit once set up. You should know who can pull money, how much variability is allowed, and how to revoke or update the mandate when you move or switch providers.",
      "Refunds and reversals depend on scheme rules, timelines, and the merchant — read your bank’s dispute help for specifics.",
    ],
    usedFor: ["Recurring household bills", "Insurance premiums", "Memberships and subscriptions"],
    commonSituations: ["Authorising a supplier once, then money leaves automatically each period", "Moving flat — update or cancel old mandates"],
    expatWatchOuts: [
      "Keep a balance buffer before debit dates — failed debits can trigger fees or disconnections.",
      "Review mandates in your banking app periodically — old ones can keep charging.",
    ],
    relatedGuideKeys: ["banking-fees", "utilities-services-comparison"],
    officialSourceKeys: ["sepaEpc", "yourEuropeAccounts"],
  },
  {
    id: "standing-order-recurring-transfer",
    name: "Standing order / recurring transfer",
    plainEnglish:
      "A standing order (or recurring transfer you set yourself) sends a fixed or instructed amount from your account on a schedule you control — unlike direct debit, the bank pushes money because you set the rule.",
    usedFor: ["Rent when the landlord prefers you to push payment each month", "Savings transfers to another of your accounts", "Fixed support to family when you choose the timing"],
    commonSituations: ["Your lease says you must transfer rent by the 1st with a set reference", "You automate savings without giving a merchant a pull mandate"],
    expatWatchOuts: [
      "If you change IBAN or amount, update the standing order — it will not follow contract changes by itself.",
    ],
    relatedGuideKeys: ["open-bank-account", "banking-fees"],
    officialSourceKeys: ["yourEuropeAccounts"],
  },
  {
    id: "debit-card-pinpas",
    name: "Debit card / pinpas",
    plainEnglish:
      "A pinpas is the debit card on your betaalrekening — the usual way to pay in supermarkets, cafés, and transport in the Netherlands.",
    detailParagraphs: [
      "Mobile wallets (bank apps or phone wallets) can sometimes substitute at terminals — acceptance rules vary by merchant and terminal generation.",
    ],
    usedFor: ["Chip and PIN payments", "ATM withdrawals where your package allows", "Linking to mobile wallet flows your bank supports"],
    commonSituations: ["Daily groceries and coffee", "OV or parking top-ups at terminals that expect debit-first behaviour"],
    expatWatchOuts: ["Foreign debit cards may work less consistently than a Dutch card for some local templates."],
    relatedGuideKeys: ["types-of-accounts", "best-banks-expats"],
    officialSourceKeys: ["yourEuropeAccounts"],
  },
  {
    id: "contactless-payment",
    name: "Contactless payment",
    plainEnglish:
      "Contactless (tap) lets you pay small amounts quickly at many terminals; you may still be asked for PIN after limits or for certain merchants.",
    usedFor: ["Fast checkout in shops", "Public transport gates where contactless is supported"],
    commonSituations: ["Tapping for lunch under the floor limit", "Being prompted for PIN on larger totals"],
    expatWatchOuts: ["Dynamic currency conversion at a terminal can be expensive — choose euros in the Netherlands when in doubt."],
    relatedGuideKeys: ["banking-fees", "how-payments-work"],
    officialSourceKeys: [],
  },
  {
    id: "credit-card",
    name: "Credit card",
    plainEnglish:
      "A credit card is a credit-line product — useful for some travel, car-hire deposits, and international websites; everyday Dutch spend is often debit-led.",
    usedFor: ["Travel bookings", "Deposits that expect a card hold", "Some foreign online checkouts"],
    commonSituations: ["Hiring a car abroad", "Paying a non-EU merchant that does not offer iDEAL"],
    expatWatchOuts: [
      "Acceptance varies by merchant — do not assume every Dutch shop takes every brand.",
      "Treat it as borrowed money with fees and interest — read repayment dates.",
    ],
    relatedGuideKeys: ["types-of-accounts", "banking-fees"],
    officialSourceKeys: ["yourEuropeAccounts"],
  },
  {
    id: "payment-request-betaalverzoek",
    name: "Payment request / betaalverzoek",
    plainEnglish:
      "Betaalverzoek means payment request — someone sends you a link or in-app request so you can pay your share from your bank environment.",
    detailParagraphs: [
      "Etiquette is mostly practical: send a clear description, use trusted chat channels, and verify the recipient before you approve.",
    ],
    usedFor: ["Splitting dinner or drinks", "Household cost sharing", "Club fees and informal IOUs"],
    commonSituations: ["A friend sends a request after they paid the whole bill", "Your bank app lets you request money without a third-party brand"],
    expatWatchOuts: ["Verify who sent the request and what it is for — treat unknown links carefully."],
    relatedGuideKeys: ["living-apps", "living-daily-life"],
    officialSourceKeys: [],
  },
  {
    id: "tikkie-example",
    name: "Tikkie (common example)",
    plainEnglish:
      "Tikkie is a well-known Dutch app for small group splits — a common example of payment-request culture, not a requirement for every person.",
    detailParagraphs: [
      "You still need a bank path that can pay or receive requests in practice; etiquette matters as much as which app name appears in the chat.",
    ],
    usedFor: ["Casual split bills in chat groups", "Small amounts where speed matters"],
    commonSituations: ["After dinner when one person paid and everyone sends €10–€30 back the same day"],
    expatWatchOuts: ["You still need a Dutch bank path that can pay or receive requests — check your bank’s rules.", "It is one brand among several request flows — etiquette matters more than the app name."],
    relatedGuideKeys: ["living-apps", "living-daily-life"],
    officialSourceKeys: [],
  },
  {
    id: "international-transfer",
    name: "International transfer",
    plainEnglish:
      "International transfers move money across borders or currencies — pricing can combine fees, FX, and intermediary bank charges.",
    detailParagraphs: [
      "SEPA euro transfers are usually the simple rail for euro accounts inside the SEPA area. Non-euro or non-SEPA corridors may use SWIFT-style messaging with separate fee and FX components.",
      "People often keep a Dutch account for local life and add a specialist or digital layer for cross-border sends — each has its own fee table and protections.",
    ],
    usedFor: ["Sending savings to family abroad", "Receiving income from outside the euro zone", "Paying invoices in another currency"],
    commonSituations: ["Comparing bank vs app vs specialist for the same corridor", "Checking amount received not only headline fee"],
    expatWatchOuts: ["Compare total cost on the same day using each provider’s official calculator."],
    relatedGuideKeys: ["banking-fees", "living-payments-hub", "traditional-vs-digital"],
    officialSourceKeys: ["sepaEpc", "yourEuropeAccounts"],
  },
  {
    id: "currency-conversion-fx",
    name: "Currency conversion / FX",
    plainEnglish:
      "FX (foreign exchange) is where one currency becomes another — the exchange rate and any markup can matter more than a small transfer fee.",
    usedFor: ["Salary in one currency and spending in another", "Moving large amounts between countries"],
    commonSituations: ["Sending non-euro home monthly", "Holding travel balances in an app"],
    expatWatchOuts: [
      "A low fee can still be expensive if the rate is wide — compare amount received.",
      "Weekend or out-of-hours rules on some apps can change pricing — read the official schedule.",
    ],
    relatedGuideKeys: ["banking-fees", "traditional-vs-digital"],
    officialSourceKeys: ["yourEuropeAccounts"],
  },
];

const conceptById = new Map(bankingPaymentConcepts.map((c) => [c.id, c]));

export function getBankingPaymentConcept(id: string): BankingPaymentConcept | undefined {
  return conceptById.get(id);
}

export function getBankingPaymentConceptsByIds(ids: readonly string[]): BankingPaymentConcept[] {
  return ids.map((id) => conceptById.get(id)).filter((c): c is BankingPaymentConcept => Boolean(c));
}

/** Curated order for the How payments work reference grid (all core rails + social + cross-border). */
export const howPaymentsWorkConceptGridIds = [
  "iban",
  "ideal",
  "sepa-transfer",
  "direct-debit-incasso",
  "standing-order-recurring-transfer",
  "debit-card-pinpas",
  "contactless-payment",
  "credit-card",
  "payment-request-betaalverzoek",
  "tikkie-example",
  "international-transfer",
  "currency-conversion-fx",
] as const;

export function getHowPaymentsWorkConceptGridConcepts(): readonly BankingPaymentConcept[] {
  return howPaymentsWorkConceptGridIds.map((id) => conceptById.get(id)!);
}

/** Stable ordering for tools that want the full set. */
export const bankingPaymentConceptIds = bankingPaymentConcepts.map((c) => c.id) as readonly string[];

// ——— Quick answer band (How Payments Work hero region) ———

export type BankingPaymentQuickAnswerRow =
  | { type: "single"; conceptId: string; cardTitle: string; anchorId: string; ctaLabel: string; scanLines: readonly string[] }
  | { type: "pair"; conceptIds: readonly [string, string]; cardTitle: string; anchorId: string; ctaLabel: string; scanLines: readonly string[] };

export const bankingPaymentQuickAnswerRows: readonly BankingPaymentQuickAnswerRow[] = [
  {
    type: "single",
    conceptId: "iban",
    cardTitle: "IBAN is your account number for transfers",
    anchorId: "iban-explained",
    ctaLabel: "Read IBAN section",
    scanLines: [
      "Your IBAN is what you put on forms for salary, rent, refunds, and many automatic bills.",
      "It is not your card number — contracts and apps ask for one or the other.",
    ],
  },
  {
    type: "single",
    conceptId: "ideal",
    cardTitle: "iDEAL is the common online checkout method",
    anchorId: "ideal-explained",
    ctaLabel: "Read iDEAL section",
    scanLines: [
      "At many Dutch checkouts you pick iDEAL, choose your bank, then approve in your bank app.",
      "Confirm your account package actually lists iDEAL before you rely on it for shopping.",
    ],
  },
  {
    type: "pair",
    conceptIds: ["sepa-transfer", "direct-debit-incasso"],
    cardTitle: "Euro bank transfers and bills that leave automatically",
    anchorId: "sepa-direct-debit",
    ctaLabel: "Read transfers & bills section",
    scanLines: [
      "SEPA transfers: you send euros to another IBAN yourself — typical for rent you push each month.",
      "Direct debit (incasso): after a mandate, a supplier can pull on a schedule — typical for utilities and subscriptions.",
    ],
  },
  {
    type: "pair",
    conceptIds: ["debit-card-pinpas", "contactless-payment"],
    cardTitle: "Debit and contactless are central for daily spending",
    anchorId: "cards-contactless",
    ctaLabel: "Read cards section",
    scanLines: [
      "Your pinpas spends from your current account in shops, cafés, and transport.",
      "Contactless still debits that same account — keep a buffer before automatic pulls land.",
    ],
  },
];

function joinBullets(lines: readonly string[], sep: string): string {
  return lines.map((s) => s.trim()).filter(Boolean).join(sep);
}

export function buildBankingPaymentQuickAnswerCards(): readonly AccountSetupScenarioCardVm[] {
  return bankingPaymentQuickAnswerRows.map((row) => {
    if (row.type === "single") {
      const c = conceptById.get(row.conceptId)!;
      return {
        id: `qa-${row.conceptId}`,
        title: row.cardTitle,
        recommendedSetup: row.scanLines.join("\n\n"),
        why: joinBullets(c.usedFor.slice(0, 4), " · "),
        watchOut: joinBullets(c.expatWatchOuts.slice(0, 2), " · "),
        cta: { href: `#${row.anchorId}`, label: row.ctaLabel },
      };
    }
    const [a, b] = row.conceptIds.map((id) => conceptById.get(id)!) as [BankingPaymentConcept, BankingPaymentConcept];
    return {
      id: `qa-${a.id}-${b.id}`,
      title: row.cardTitle,
      recommendedSetup: row.scanLines.join("\n\n"),
      why: joinBullets([...a.usedFor.slice(0, 2), ...b.usedFor.slice(0, 2)], " · "),
      watchOut: joinBullets([...a.expatWatchOuts.slice(0, 1), ...b.expatWatchOuts.slice(0, 2)], " · "),
      cta: { href: `#${row.anchorId}`, label: row.ctaLabel },
    };
  });
}

// ——— Scenario cards (expat situations) ———

export type BankingPaymentScenarioCardDefinition = {
  readonly id: string;
  readonly title: string;
  readonly typicalMethod: string;
  readonly whatToWatch: string;
  readonly watchOut?: string;
  readonly nextStep?: string;
  readonly relatedGuideKeys: readonly BankingAccountRelatedGuideKey[];
  readonly primaryCta: { readonly guideKey: BankingAccountRelatedGuideKey; readonly label: string } | { readonly href: string; readonly label: string };
  readonly moreGuideKeys?: readonly BankingAccountRelatedGuideKey[];
};

export const bankingPaymentScenarioCards: readonly BankingPaymentScenarioCardDefinition[] = [
  {
    id: "paying-rent",
    title: "Paying rent for the first time",
    typicalMethod: "Transfer or standing order to the landlord IBAN — use the contract reference.",
    whatToWatch: "They match incoming payments using IBAN + reference text.",
    watchOut:
      "Wrong IBAN or a missing reference delays allocation — double-check digits; ask for written instructions if unsure.",
    nextStep: "Pair with Open a bank account when you are still choosing where salary and rent will settle.",
    relatedGuideKeys: ["open-bank-account", "types-of-accounts"],
    primaryCta: { guideKey: "open-bank-account", label: "Open bank account guide" },
    moreGuideKeys: ["types-of-accounts"],
  },
  {
    id: "receiving-salary",
    title: "Receiving Dutch salary",
    typicalMethod: "Payroll credits the IBAN you give — often a Dutch current account.",
    whatToWatch: "HR may need IBAN, BIC if asked, and name matching their records.",
    watchOut: "Confirm spelling and IBAN country rules before the first pay run — templates vary.",
    relatedGuideKeys: ["best-banks-expats", "banking-fees"],
    primaryCta: { guideKey: "best-banks-expats", label: "Compare banks for expats" },
    moreGuideKeys: ["banking-fees"],
  },
  {
    id: "paying-utilities",
    title: "Paying utilities",
    typicalMethod: "Usually direct debit after a mandate, or an approved recurring pull.",
    whatToWatch: "Amount and pull date normally appear on an invoice or email beforehand.",
    watchOut: "Old mandates survive moves — cancel with the supplier and check your bank list when you switch accounts.",
    relatedGuideKeys: ["utilities-services-comparison", "banking-fees"],
    primaryCta: { guideKey: "utilities-services-comparison", label: "Utilities & services comparison" },
    moreGuideKeys: ["banking-fees"],
  },
  {
    id: "online-shopping",
    title: "Shopping online with iDEAL",
    typicalMethod: "iDEAL → pick your bank → approve in the bank app (common checkout path).",
    whatToWatch: "Many Dutch shops prefer iDEAL over typing card details on the site.",
    watchOut: "If iDEAL is missing on your package, fix that before urgent purchases — merchants differ.",
    relatedGuideKeys: ["traditional-vs-digital", "living-shopping-groceries"],
    primaryCta: { guideKey: "traditional-vs-digital", label: "Traditional vs digital banks" },
    moreGuideKeys: ["living-shopping-groceries"],
  },
  {
    id: "splitting-costs",
    title: "Splitting costs with friends",
    typicalMethod: "Betaalverzoek links or apps like Tikkie for small group splits.",
    whatToWatch: "Typical for dinners, clubs, and shared households.",
    watchOut: "Confirm sender and purpose — unknown links are still payment links.",
    relatedGuideKeys: ["living-apps", "living-daily-life"],
    primaryCta: { guideKey: "living-apps", label: "Essential apps" },
    moreGuideKeys: ["living-daily-life"],
  },
  {
    id: "sending-money-abroad",
    title: "Sending money abroad",
    typicalMethod: "SEPA euro bank send, transfer app, or specialist — depends on corridor.",
    whatToWatch: "Compare amount received on the same day, not only headline fee.",
    watchOut: "A tiny fee plus a wide FX spread can still be costly — use each provider’s official calculator.",
    relatedGuideKeys: ["living-payments-hub", "banking-fees", "traditional-vs-digital"],
    primaryCta: { guideKey: "living-payments-hub", label: "Living: payments & rails" },
    moreGuideKeys: ["banking-fees", "traditional-vs-digital"],
  },
  {
    id: "government-municipality-bills",
    title: "Paying government or municipality bills",
    typicalMethod: "iDEAL, transfer, or direct debit — follow the official letter or portal for that bill.",
    whatToWatch: "Agencies route you to authorised channels with clear references.",
    watchOut: "Ignore cold messages — pay only from bookmarked portals or letters you trust.",
    nextStep: "Use the Tax guide for expats for orientation when bills touch tax context.",
    relatedGuideKeys: ["tax-advisors", "living-daily-life"],
    primaryCta: { href: "/netherlands/money/tax-guide-for-expats/", label: "Tax guide for expats (orientation)" },
    moreGuideKeys: ["living-daily-life"],
  },
  {
    id: "managing-subscriptions",
    title: "Managing recurring subscriptions",
    typicalMethod: "Direct debit after a mandate — gyms, streaming, insurance, memberships.",
    whatToWatch: "Money leaves on a schedule until you cancel with the merchant and clean up the mandate if needed.",
    watchOut: "Trials that auto-renew — set reminders; review mandates after downsizing or moving.",
    relatedGuideKeys: ["banking-fees", "best-banks-expats"],
    primaryCta: { guideKey: "banking-fees", label: "Banking fees & costs" },
    moreGuideKeys: ["best-banks-expats"],
  },
];

function scenarioToVm(s: BankingPaymentScenarioCardDefinition): AccountSetupScenarioCardVm {
  const primary =
    "guideKey" in s.primaryCta
      ? { href: bankingAccountRelatedGuides[s.primaryCta.guideKey].href, label: s.primaryCta.label }
      : { href: s.primaryCta.href, label: s.primaryCta.label };
  const more =
    s.moreGuideKeys?.map((k) => ({
      href: bankingAccountRelatedGuides[k].href,
      label: bankingAccountRelatedGuides[k].label,
    })) ?? [];
  return {
    id: s.id,
    title: s.title,
    recommendedSetup: s.typicalMethod,
    why: s.whatToWatch,
    watchOut: s.watchOut,
    nextStep: s.nextStep,
    cta: primary,
    moreLinks: more.length ? more : undefined,
  };
}

export function buildBankingPaymentSituationCards(): readonly AccountSetupScenarioCardVm[] {
  return bankingPaymentScenarioCards.map(scenarioToVm);
}

// ——— Guide section blocks (How Payments Work long-form) ———

export type BankingPaymentGuideSectionBlock = {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly links: readonly { readonly href: string; readonly label: string }[];
  /** Empty when the section has no bullet watch-outs (only the cards block uses non-empty today). */
  readonly watchOuts: readonly string[];
};

function paragraphsForConcept(c: BankingPaymentConcept): string[] {
  return [c.plainEnglish, ...(c.detailParagraphs ?? [])];
}

function dedupeGuideLinks(keys: readonly BankingAccountRelatedGuideKey[]) {
  const seen = new Set<string>();
  const out: { href: string; label: string }[] = [];
  for (const k of keys) {
    const l = bankingAccountRelatedGuides[k];
    if (seen.has(l.href)) continue;
    seen.add(l.href);
    out.push({ href: l.href, label: l.label });
  }
  return out;
}

/** Single-concept sections (IBAN, iDEAL). */
function sectionSingle(
  conceptId: string,
  overrides: Pick<BankingPaymentGuideSectionBlock, "id" | "eyebrow" | "title">,
  extraGuideKeys?: readonly BankingAccountRelatedGuideKey[]
): BankingPaymentGuideSectionBlock {
  const c = conceptById.get(conceptId)!;
  const keys = [...c.relatedGuideKeys, ...(extraGuideKeys ?? [])];
  return {
    ...overrides,
    paragraphs: paragraphsForConcept(c),
    links: dedupeGuideLinks(keys),
    watchOuts: [],
  };
}

function sectionComposite(
  overrides: Pick<BankingPaymentGuideSectionBlock, "id" | "eyebrow" | "title">,
  conceptIds: readonly string[],
  linkKeys: readonly BankingAccountRelatedGuideKey[],
  watchOuts?: readonly string[]
): BankingPaymentGuideSectionBlock {
  const paragraphs = conceptIds.flatMap((id) => paragraphsForConcept(conceptById.get(id)!));
  const linkMap = new Map<string, { href: string; label: string }>();
  for (const k of linkKeys) {
    const g = bankingAccountRelatedGuides[k];
    linkMap.set(g.href, { href: g.href, label: g.label });
  }
  return {
    ...overrides,
    paragraphs,
    links: Array.from(linkMap.values()),
    watchOuts: watchOuts ?? [],
  };
}

/**
 * Pre-built sections for `/netherlands/money/banking/how-payments-work/`.
 * Other surfaces can import {@link bankingPaymentConcepts} directly for lighter UI.
 */
export const howPaymentsWorkGuideSections = {
  iban: sectionSingle("iban", { id: "iban-explained", eyebrow: "Identifiers", title: "IBAN explained" }),
  ideal: sectionSingle("ideal", { id: "ideal-explained", eyebrow: "Online checkout", title: "iDEAL explained" }),
  sepa: sectionComposite(
    { id: "sepa-direct-debit", eyebrow: "Transfers & mandates", title: "SEPA transfers and direct debits" },
    ["sepa-transfer", "direct-debit-incasso", "standing-order-recurring-transfer"],
    ["banking-fees", "utilities-services-comparison"]
  ),
  cards: sectionComposite(
    { id: "cards-contactless", eyebrow: "In stores", title: "Debit cards, contactless, and credit cards" },
    ["debit-card-pinpas", "contactless-payment", "credit-card"],
    ["types-of-accounts", "best-banks-expats"],
    [
      "Dynamic currency conversion at a terminal can be expensive — choose euros in the Netherlands when in doubt.",
      "If a merchant does not take your card brand, have a backup (another card or cash where accepted).",
    ]
  ),
  paymentRequests: sectionComposite(
    { id: "payment-requests", eyebrow: "Social payments", title: "Payment requests and everyday transfers" },
    ["payment-request-betaalverzoek", "tikkie-example"],
    ["living-apps", "living-daily-life"]
  ),
  international: sectionComposite(
    { id: "international", eyebrow: "Cross-border", title: "International payments and transfer basics" },
    ["international-transfer", "currency-conversion-fx"],
    ["banking-fees", "living-payments-hub", "traditional-vs-digital"]
  ),
} as const satisfies Record<string, BankingPaymentGuideSectionBlock>;
