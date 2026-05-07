/**
 * Shared banking safety & fraud copy for ExpatCopilot (Netherlands).
 * Single source for the Banking Safety guide and for cross-links from Living / Survival Guide.
 * Tone: practical, calm, no guarantees — reusable for a future “Scams in the Netherlands” page.
 */

import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import { BANK_COMPARISON_TOOL_PATH, BANKING_COST_ESTIMATOR_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";

/** Living pillar paths referenced from Money · Banking safety copy — keep aligned with `livingPillarContent.ts`. */
const PATH_LIVING_APPS = "/netherlands/living/apps/" as const;
const PATH_LIVING_DAILY_LIFE = "/netherlands/living/daily-life/" as const;
const PATH_LIVING_EMERGENCIES = "/netherlands/living/emergencies-safety/" as const;
const PATH_LIVING_SHOPPING = "/netherlands/living/shopping-groceries/" as const;

// ——— paths (imported by guides that should not duplicate strings) ———

export const BANKING_SECURITY_PATH = "/netherlands/money/banking/security/" as const;
export const BANKING_SECURITY_HOW_PAYMENTS_PATH = "/netherlands/money/banking/how-payments-work/" as const;
export const BANKING_SECURITY_INTL_TRANSFERS_PATH = "/netherlands/money/banking/international-transfers/" as const;
export const BANKING_SECURITY_TRANSFER_CALC_PATH = "/netherlands/tools/transfer-cost-calculator/" as const;
export const BANKING_SECURITY_OPEN_BANK_PATH = "/netherlands/open-bank-account-netherlands/" as const;
export const BANKING_SECURITY_HUB_PATH = "/netherlands/money/banking/" as const;

/** In-page anchor for the “if something feels wrong” checklist (Banking Safety + deep links). */
export const BANKING_FEELS_WRONG_FIRST_SECTION_ID = "feels-wrong-first" as const;

/** Short order of protective steps — placed high on the Banking Safety guide for quick access. */
export const bankingFeelsWrongFirstChecklist = [
  "Stop replying to the message, caller, or link",
  "Open your bank app yourself, or call the number on your card",
  "Block your card or account if you need to",
  "Save screenshots and details",
  "Tell your bank and use official fraud or police links when it fits",
  "Watch out for a second scam that pretends to “help” you get money back",
] as const;

export const bankingFeelsWrongFirstCalmNote =
  "You do not need to be sure it is fraud before you protect yourself." as const;

/** Compact card for Survival Guide, Essential Apps sidebar, Emergencies related tools, etc. */
export const bankingSecurityCrossLink = {
  href: BANKING_SECURITY_PATH,
  title: "Banking safety & fraud",
  description:
    "Learn about fake messages, payment links, marketplaces, and what to do first if something feels wrong. Same calm style as our other Money guides.",
  ctaLabel: "Read the safety guide",
} as const;

/** Emergencies & safety related-tools row — same destination, framing next to lost phone / stress. */
export const bankingSecurityEmergenciesRelatedCard = {
  href: BANKING_SECURITY_PATH,
  title: "Banking safety & fraud",
  description:
    "If your phone, messages, or payments feel wrong, read this guide for simple checks—next to the steps for emergencies.",
  ctaLabel: "Read banking safety guide",
  iconKey: "shield" as const,
};

/** Shopping & groceries “helpful tools” row — marketplace angle. */
export const bankingSecurityShoppingRelatedCard = {
  href: BANKING_SECURITY_PATH,
  title: "Banking safety & fraud",
  description:
    "Shopping and delivery often use payment links—learn simple habits so you are not tricked, without scare stories.",
  ctaLabel: "Read safety guide",
  iconKey: "wallet" as const,
};

/** Essential Apps related-tools row — bank apps + scam awareness. */
export const bankingSecurityEssentialAppsRelatedCard = {
  href: BANKING_SECURITY_PATH,
  title: "Banking safety & fraud",
  description:
    "After you install bank apps, learn how to spot fake messages and fake payment links for everyday money in the Netherlands.",
  ctaLabel: "Read safety guide",
  compact: true as const,
  iconKey: "shield" as const,
};

// ——— types ———

export type BankingFraudType = {
  id: string;
  title: string;
  whatItLooksLike: string;
  warningSigns: readonly string[];
  saferAction: string;
  relatedLinks?: readonly { href: string; label: string }[];
};

export type BankingScamResponseUrgency = "immediate" | "same_day" | "soon";

/** Short labels for step cards — practical, not alarmist. */
export function bankingScamResponseUrgencyLabel(urgency: BankingScamResponseUrgency): string {
  switch (urgency) {
    case "immediate":
      return "Do first";
    case "same_day":
      return "Same day";
    case "soon":
      return "Follow up";
  }
}

export type BankingScamResponseStep = {
  id: string;
  title: string;
  description: string;
  urgency: BankingScamResponseUrgency;
  /** Keys into {@link bankingSecurityOfficialSourceRegistry} for optional footnotes. */
  officialSourceKeys?: readonly string[];
};

export type BankingSecurityFaqItem = { q: string; a: string };

export type BankingSecurityRelatedGuide = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

// ——— official source registry (for steps + future pages) ———

export const bankingSecurityOfficialSourceRegistry = {
  dnb: {
    type: "external" as const,
    label: "De Nederlandsche Bank (DNB) — English",
    href: "https://www.dnb.nl/en/",
  },
  police_report_en: {
    type: "external" as const,
    label: "Police.nl — Report a crime online (English)",
    href: "https://www.politie.nl/en/report-a-crime-online",
  },
  police_en: {
    type: "external" as const,
    label: "Police.nl — English information",
    href: "https://www.politie.nl/en",
  },
  fraudehelpdesk: {
    type: "external" as const,
    label: "Fraudehelpdesk — English",
    href: "https://www.fraudehelpdesk.nl/en",
  },
  consuwijzer: {
    type: "external" as const,
    label: "Consuwijzer — English consumer topics",
    href: "https://www.consuwijzer.nl/english",
  },
  acm: {
    type: "external" as const,
    label: "Authority for Consumers & Markets (ACM)",
    href: "https://www.acm.nl/en",
  },
  ideal_consumers: {
    type: "external" as const,
    label: "iDEAL — consumer information",
    href: "https://www.ideal.nl/en/consumers/",
  },
  expat_banking_hub: {
    type: "internal" as const,
    label: "Banking hub — guides and glossary",
    href: BANKING_SECURITY_HUB_PATH,
  },
} as const;

export type BankingSecurityOfficialSourceKey = keyof typeof bankingSecurityOfficialSourceRegistry;

export function resolveBankingSecurityOfficialLinks(keys: readonly string[] | undefined) {
  if (!keys?.length) return [] as Array<{ type: "external" | "internal"; label: string; href: string }>;
  const out: Array<{ type: "external" | "internal"; label: string; href: string }> = [];
  for (const key of keys) {
    const entry = bankingSecurityOfficialSourceRegistry[key as BankingSecurityOfficialSourceKey];
    if (entry) out.push({ type: entry.type, label: entry.label, href: entry.href });
  }
  return out;
}

// ——— content exports ———

export const bankingSafeHabits = [
  {
    title: "Never share login codes or bank app approval codes",
    whyItMatters:
      "Those codes can move money or change your account. A real bank does not ask for them by phone, chat, or email.",
    practicalHabit:
      "Treat codes like cash—do not give them out. If someone rushes you, hang up. Call your bank using the number on your card, or open the app you already trust.",
  },
  {
    title: "Do not click urgent bank links in messages",
    whyItMatters: "Scammers use “act now” stress. Links can open fake login pages that look real on your phone.",
    practicalHabit:
      "Open your bank app yourself, or type the bank website you know. Skip “verify now” links in texts or emails you did not expect.",
  },
  {
    title: "Check payment requests before you pay",
    whyItMatters:
      "Payment requests (like betaalverzoek) are normal in the Netherlands. Scammers copy that habit so you click without thinking.",
    practicalHabit:
      "Check who sent it, the amount, and why you are paying. Confirm in a second way—in person, a number you already have, or a chat you started.",
  },
  {
    title: "Use your own phone or computer and strong sign-in",
    whyItMatters: "A stolen password or a shared device can undo careful habits.",
    practicalHabit:
      "Update your phone and bank app. Use a screen lock and fingerprints or Face ID if you can. Avoid banking on shared PCs.",
  },
  {
    title: "Act fast if something looks wrong",
    whyItMatters: "Telling your bank early can limit damage. Waiting usually makes cleanup harder.",
    practicalHabit: "Use your bank’s fraud line or secure in-app chat. If you may lose access, start recovery the same day.",
  },
] as const;

export const bankingFraudTypes: readonly BankingFraudType[] = [
  {
    id: "phish-email-sms",
    title: "Phishing emails and texts",
    whatItLooksLike: "A message that looks like your bank, iDEAL, or a delivery firm, with a login or “confirm” link.",
    warningSigns: ["Says “Dear customer” only", "Strange sender address", "Attachment you did not expect", "Web address almost like the real one"],
    saferAction:
      "Open your bank app yourself, or call the number on your card. Tell your bank if you need to report a fake message.",
    relatedLinks: [{ href: BANKING_SECURITY_HOW_PAYMENTS_PATH, label: "How payments work" }],
  },
  {
    id: "fake-bank-calls",
    title: "Fake bank calls (fake caller ID)",
    whatItLooksLike:
      "Someone says they are the fraud team, your account is blocked, and you must “prove” who you are—or send money to a “safe” account.",
    warningSigns: [
      "They want you to stay on the line",
      "They ask for PINs or codes",
      "They tell you to ignore warnings from your real app",
    ],
    saferAction:
      "Hang up. Look up your bank’s number yourself—on your card or the real website—and call back. Do not use a “call back” number they give you.",
  },
  {
    id: "whatsapp-family",
    title: "WhatsApp “family emergency” scams",
    whatItLooksLike: "A text that looks like a family member or friend who needs money right away.",
    warningSigns: ["New or odd number", "Sounds unlike them", "No quick voice or video check", "Only wants an instant transfer"],
    saferAction: "Call or message them on a number or app you already use with them before you send money.",
  },
  {
    id: "payment-request-scam",
    title: "Fake payment requests",
    whatItLooksLike:
      "A betaalverzoek or payment link for something you never agreed to—sometimes after a fake chat on a marketplace.",
    warningSigns: [
      "Wrong name on the request",
      "Strange amount or decimals",
      "Story does not match your chat",
      "They ask for a small “test” payment first",
    ],
    saferAction:
      "Match the request to a real chat and invoice. When you buy from a person, use steps you can prove later when possible.",
    relatedLinks: [{ href: BANKING_SECURITY_HOW_PAYMENTS_PATH, label: "How payments work" }],
  },
  {
    id: "marketplace",
    title: "Marketplace scams",
    whatItLooksLike:
      "A buyer or seller moves you to email or WhatsApp, sends a fake “paid” screenshot, or adds surprise shipping fees.",
    warningSigns: ["Will not meet safely for local pickup", "Odd shipping company", "Fees only through a strange link"],
    saferAction: "Keep chat and payment on the platform when you can. Say no to rushed deals.",
    relatedLinks: [{ href: PATH_LIVING_SHOPPING, label: "Shopping & groceries" }],
  },
  {
    id: "fake-delivery",
    title: "Fake parcel or customs links",
    whatItLooksLike: "A text or email says your parcel is on hold and you must pay a small fee by link or card.",
    warningSigns: ["You are not waiting for a parcel", "Company name looks slightly wrong", "Link does not match the real carrier site"],
    saferAction: "Open the track page from the carrier’s real website—not from the message link.",
  },
  {
    id: "investment-crypto",
    title: "Investment and crypto scams",
    whatItLooksLike:
      "Someone promises sure profits, “secret” tips, or a romance that ends with you sending money to a stranger’s account.",
    warningSigns: [
      "Rush to decide",
      "“Do not tell anyone”",
      "They want you to install remote-control software",
      "They only want a bank transfer to a private name",
    ],
    saferAction: "Treat cold offers as risky. Use known, regulated services and paperwork you can check yourself.",
  },
  {
    id: "rental-deposit",
    title: "Rental deposit scams",
    whatItLooksLike: "A landlord or agent wants a deposit to a personal IBAN before a signed contract or a real viewing.",
    warningSigns: [
      "Will not prove a real address",
      "Rent looks too cheap for the area",
      "“Pay today only” pressure",
    ],
    saferAction:
      "Use normal rental steps: signed contract, real viewing when you can, and check the agent and IBAN through a second contact—not email alone.",
  },
] as const;

export const bankingFraudRedFlags = [
  "Strong pressure: “today only”, “account blocked”, “police will call”",
  "They say your account is blocked—but your app still works",
  "They ask you to send money to a new or “safe” IBAN",
  "They ask for passwords, codes, or your PIN",
  "Links or files you did not expect",
  "They keep you on the phone while you install software or approve payments",
] as const;

/** Narrative + cross-links for payment-request and marketplace context. */
export const bankingPaymentRequestSafetyTips = {
  paragraphs: [
    "Payment requests are normal in the Netherlands—friends split bills, clubs collect money, and shops send betaalverzoek links. Because they are common, you should still check before you pay—you do not need to stop using them.",
    "Scammers may send fake links, ask for a small “test” payment that is really theft, or chat on a marketplace and then ask you to pay outside the site.",
    "Before you pay, check who is asking, the amount, the note, and whether the link or app screen matches the person or business you know.",
    "For rent deposits, do not send large sums to someone you only know from chat or email. Use a signed contract and checks you can repeat.",
    "Apps like Tikkie are fine for small splits between friends. The risk is usually a fake link or someone pretending to be a friend—check the same way you would for any bank payment request.",
  ] as const,
  crossLinks: [
    { href: BANKING_SECURITY_HOW_PAYMENTS_PATH, label: "How payments work →" },
    { href: PATH_LIVING_SHOPPING, label: "Shopping & groceries →" },
    { href: PATH_LIVING_DAILY_LIFE, label: "Daily life basics →" },
  ] as const,
};

export const bankingPhishingContent = {
  leadParagraphs: [
    "Real Dutch banks do not usually ask you to say your password, PIN, or one-time code out loud to “prove” it is you. They also do not ask you to move money to a “safe” account you have never used.",
    "If a message pushes you with a link and a scary story—like “your account closes in hours”—slow down. Most real problems can wait until you open your bank app or type the bank website yourself.",
    "Caller ID can be faked. The number on your screen can look like your bank and still be a scam. Treat unknown calls as not trusted until you call back through a number you find yourself.",
    "For help, use your bank app, the bank website you know, or the phone number on your card. Do not use links or “call this number back” from the same suspicious message.",
  ] as const,
  redFlagChecklistTitle: "Warning signs to watch for",
};

export const bankingAccountProtectionChecklist = [
  "Lock your phone and laptop (PIN or password; turn on encryption and remote wipe if your device offers it)",
  "Install phone and bank app updates soon—updates often fix known security holes",
  "Protect your email (its own strong password; recovery options you control)—many account resets go through email",
  "Turn on two-step sign-in if your bank offers more than SMS alone",
  "Turn on alerts for payments and transfers above an amount you pick",
  "Check your daily and per-transfer limits—lower limits can limit damage if something goes wrong",
  "Only use your own devices for banking; log out on shared computers",
  "Keep a second card or account for basics if one card is frozen while the bank checks a problem",
  "Look at your transactions often; small repeat charges can mean a fake subscription or a stolen card test",
] as const;

export const bankingCardAtmSafety = {
  intro:
    "Using your card in the Netherlands is usually easy. A few habits help you avoid theft, fake card readers, and bad surprises when you travel.",
  points: [
    "If you lose it or it is stolen, block your card fast—use your bank app or the phone number on the back of the card.",
    "Hide your PIN at shops and ATMs. Watch for odd plastic on the slot, a loose reader, or someone standing too close.",
    "Use your bank app to freeze the card, cap spending, or turn off online pay or the magnetic stripe if you do not need them.",
    "Pick safer ATMs—inside a bank branch or a busy, well-lit place is often better than a lonely machine.",
    "Check your payments with alerts or a weekly look; tiny charges can mean someone is testing a stolen card.",
    "Abroad: “pay in your home currency” at the machine often gives a bad rate. Paying in the local currency is often cheaper—still read every screen before you confirm.",
  ] as const,
};

export const bankingInternationalTransferSafety = {
  intro:
    "Big sends—or sends when you feel stressed—need extra care. Use official sites and calculators, not a photo someone sends you.",
  points: [
    "Check every letter and number—name spelling, IBAN or account number, and payment note. One typo can send money to the wrong person, and getting it back is hard.",
    "Slow down on large amounts when you can. If a story feels urgent or “once in a lifetime,” sleep on it before you wire money.",
    "Check the company is real—honest firms show a clear legal name, address, and how to complain. A vague “finance desk” only on WhatsApp is a red flag.",
    "Watch for “sure profit,” crypto, or high returns tied to the transfer—often the next step after someone gains your trust.",
    "Watch for romance or “family emergency” money that must go to a stranger’s account “because it is faster.”",
    "On the last app screen, check the full amount and payee name again before you approve with your finger or face—some scams change details at the last second.",
  ] as const,
  crossLinks: [
    { href: BANKING_SECURITY_INTL_TRANSFERS_PATH, label: "International transfers guide →" },
    { href: BANKING_SECURITY_TRANSFER_CALC_PATH, label: "Transfer cost calculator →" },
    { href: BANKING_FEES_PAGE_PATH, label: "Banking fees & costs →" },
  ] as const,
};

export const bankingScamResponseSteps: readonly BankingScamResponseStep[] = [
  {
    id: "contact-bank",
    title: "Call or message your bank through a channel you trust",
    description:
      "Use the number on your card, the bank app’s secure chat, or a branch you know is real. Say what happened and ask what they can freeze or check. Whether money can come back depends on time and rules—your bank will say what is possible for you.",
    urgency: "immediate",
  },
  {
    id: "block-access",
    title: "Block your card or sign-ins if you need to",
    description:
      "If someone might still be using your account, freeze cards and sign out other devices in your app while you do what the bank tells you.",
    urgency: "immediate",
  },
  {
    id: "secure-credentials",
    title: "Change passwords and check email or phone settings",
    description:
      "If you typed a password on a fake page or gave codes to a scammer, change passwords on a device you trust. Check that your email or phone recovery options were not changed.",
    urgency: "same_day",
  },
  {
    id: "save-evidence",
    title: "Keep screenshots, chats, and payment details",
    description:
      "Save chats, IBANs, links (if you can do it safely), and bank reference numbers. Police and fraud help desks often need this in order.",
    urgency: "same_day",
  },
  {
    id: "official-report",
    title: "Report to official fraud or police sites when it fits",
    description:
      "Use the national online fraud reporting steps; your bank can point you to the right Dutch pages. Reports help even when your money cannot be returned.",
    urgency: "same_day",
    officialSourceKeys: ["police_report_en", "fraudehelpdesk", "police_en"] as const,
  },
  {
    id: "recovery-scams",
    title: "Watch for fake “help” after a loss",
    description:
      "Say no to strangers who offer to recover your money for a fee, want remote access to your PC, or tell you to keep it secret. Real help does not push new urgent transfers.",
    urgency: "soon",
    officialSourceKeys: ["fraudehelpdesk"] as const,
  },
] as const;

export const bankingScamResponseNotes = {
  actQuickly:
    "Move fast on blocking and telling your bank if money or your account may be at risk. Speed often limits damage, but it does not mean you will always get your money back.",
  followUpScams:
    "Watch for second scams—someone later says they can get your money back if you pay a fee up front. Report those the same way you report other fraud.",
} as const;

export const bankingSecurityMisunderstandings = [
  {
    title: "Caller ID can be faked",
    body: "A number that looks like your bank does not prove it is your bank. Hang up and call back using a number you find yourself.",
  },
  {
    title: "A known app name on a link does not prove the link is safe",
    body: "Scammers copy famous brands. Check who sent it, the amount, and the story—not only the logo in the preview.",
  },
  {
    title: "A small “test” payment can still be a scam",
    body: "A tiny amount can be theft, a test on your card, or a way to gain your trust. Treat surprise payment asks like big ones: check first.",
  },
  {
    title: "Bank transfers are often hard to undo",
    body: "SEPA payments can settle fast. Getting money back depends on time, what you agreed to, and bank rules—so stopping fraud early matters most.",
  },
  {
    title: "Scammers use rush and shame on purpose",
    body: "Taking a pause helps. Real banks and government offices usually let you call back through official numbers when you are ready.",
  },
  {
    title: "A slick-looking website can still be fake",
    body: "Logos and padlocks can be copied. The web address, how you got there, and whether it matches what you expected matter more than a pretty page.",
  },
  {
    title: "People who lost money can be targeted again",
    body: "After a scam, fake “helpers” may appear in chats or ads. Be as careful with “recovery” offers as you were with the first contact.",
  },
] as const;

export const bankingSecurityFaq: readonly BankingSecurityFaqItem[] = [
  {
    q: "Are Dutch banks safe?",
    a: "Yes—everyday banking here follows strong rules and oversight. That still does not stop scams. You also stay safer when you check messages and payments yourself, not only when you pick a licensed bank.",
  },
  {
    q: "What should I do if I clicked a fake bank link?",
    a: "Close the page. Do not type more details. Contact your bank using your app or the number on your card. If you already entered a password or approved a payment, say so clearly so they can block cards and watch your account.",
  },
  {
    q: "Will my bank ask for my PIN or login code?",
    a: "A real bank does not usually ask you to say your full PIN or one-time approval code to someone on the phone or in normal chat. If they push you, treat it as a scam and call your bank yourself.",
  },
  {
    q: "Are payment requests safe?",
    a: "Payment requests are normal and legit in the Netherlands. The risk is fake links, wrong amounts, someone pretending to be a friend, or pressure to pay fast—check who you pay and why before you tap approve.",
  },
  {
    q: "How do I spot a fake Tikkie-style link?",
    a: "Compare the web address to the real service, read the payee name and amount, and if you are unsure, ask the friend or shop through a second channel you already trust. Treat surprise links like any surprise bill.",
  },
  {
    q: "What should I do after a suspicious transfer?",
    a: "Call your bank as soon as you can with what you know. Ask if they can recall the payment or start a dispute for your case. Keep screenshots and reference numbers, and use official fraud reporting if they tell you to.",
  },
  {
    q: "Can bank transfers be reversed?",
    a: "Sometimes, with luck and bank cooperation—but many approved transfers settle fast. Do not count on a refund. Prevention and quick reporting matter most.",
  },
  {
    q: "How can expats avoid rental deposit scams?",
    a: "Pay a deposit only with a signed contract when you can, check the agent and IBAN through a second contact, avoid “pay today only” pressure, and try to view the home or prove the landlord is real before you send a large sum.",
  },
];

export const bankingSecurityOfficialSources = {
  sectionId: "official-sources",
  sectionTitle: "Official sources",
  disclaimer:
    "These links help you learn and report. They do not replace your bank’s fraud team, the police for your case, or a lawyer if you need one.",
  groups: [
    {
      id: "supervision",
      title: "Bank oversight & stability (Netherlands)",
      links: [{ ...bankingSecurityOfficialSourceRegistry.dnb }],
    },
    {
      id: "reporting",
      title: "Report fraud & contact police (Netherlands)",
      links: [{ ...bankingSecurityOfficialSourceRegistry.police_report_en }, { ...bankingSecurityOfficialSourceRegistry.police_en }],
    },
    {
      id: "fraudehelpdesk",
      title: "Fraud helpdesk & scam tips",
      links: [{ ...bankingSecurityOfficialSourceRegistry.fraudehelpdesk }],
    },
    {
      id: "consumer",
      title: "Consumer rights & marketplaces",
      links: [{ ...bankingSecurityOfficialSourceRegistry.consuwijzer }, { ...bankingSecurityOfficialSourceRegistry.acm }],
    },
    {
      id: "payments",
      title: "iDEAL & payment safety (official)",
      links: [{ ...bankingSecurityOfficialSourceRegistry.ideal_consumers }],
    },
    {
      id: "internal",
      title: "More guides on ExpatCopilot",
      links: [{ ...bankingSecurityOfficialSourceRegistry.expat_banking_hub }],
    },
  ],
} satisfies MoveVisaResidencyReferences;

export const bankingSecurityRelatedGuides: readonly BankingSecurityRelatedGuide[] = [
  { title: "Best banks for expats", description: "Our comparison list—use it together with the safety habits on this page.", href: BEST_BANKS_EXPATS_PATH, ctaLabel: "Open guide" },
  { title: "How payments work", description: "IBAN, iDEAL, SEPA, betaalverzoek, and how people pay day to day.", href: BANKING_SECURITY_HOW_PAYMENTS_PATH, ctaLabel: "Read guide" },
  {
    title: "International transfers",
    description: "Ways to send money abroad and what to check before a large send.",
    href: BANKING_SECURITY_INTL_TRANSFERS_PATH,
    ctaLabel: "Open guide",
  },
  { title: "Transfer cost calculator", description: "Rough cost bands for sends abroad—not a live price from a bank.", href: BANKING_SECURITY_TRANSFER_CALC_PATH, ctaLabel: "Open calculator" },
  { title: "Banking fees & costs", description: "How common bank fees show up next to cards and transfers.", href: BANKING_FEES_PAGE_PATH, ctaLabel: "Open fee guide" },
  { title: "Bank comparison tool", description: "Short quiz plus our editorial fit notes—always double-check on each bank’s site.", href: BANK_COMPARISON_TOOL_PATH, ctaLabel: "Open tool" },
  { title: "Banking cost estimator", description: "Simple monthly and yearly euro ranges for everyday banking.", href: BANKING_COST_ESTIMATOR_PATH, ctaLabel: "Open estimator" },
  { title: "Essential apps", description: "Which apps to install first—banks, travel, and daily Dutch tools.", href: PATH_LIVING_APPS, ctaLabel: "Open Living guide" },
  { title: "Daily life basics", description: "Groceries, errands, and how payments fit into a normal week.", href: PATH_LIVING_DAILY_LIFE, ctaLabel: "Open guide" },
  { title: "Emergencies & safety", description: "What to do if your phone, card, or papers go missing.", href: PATH_LIVING_EMERGENCIES, ctaLabel: "Open safety guide" },
  {
    title: "Open a bank account in the Netherlands",
    description: "Papers you need, BSN timing, and what landlords or bosses often expect.",
    href: BANKING_SECURITY_OPEN_BANK_PATH,
    ctaLabel: "Move guide",
  },
  {
    title: "Bank account rejected or delayed",
    description: "When onboarding stalls — causes, document checks, next banks to compare, and short-term options.",
    href: "/netherlands/money/banking/account-rejection/",
    ctaLabel: "Open guide",
  },
];

export const bankingSecurityAtAGlance = {
  sectionTitle: "At a glance",
  subtitle: "You do not need to worry all the time—a few steady habits stop most problems before they start.",
  cells: [
    {
      title: "What this page is for",
      bullets: [
        "Simple words on common Dutch banking scams, how they show up, and everyday habits that lower your risk.",
      ] as const,
    },
    {
      title: "Best for",
      bullets: [
        "Newcomers learning Dutch payment habits—payment links, online buying, and WhatsApp—and who want clear, practical steps.",
      ] as const,
    },
    {
      title: "What it covers",
      bullets: [
        "Fake messages and calls, payment-request and marketplace scams, card and ATM tips, checks before foreign transfers, account basics, and what to do first if something feels off.",
      ] as const,
    },
    {
      title: "What it skips",
      bullets: [
        "Legal rulings, screenshots of each bank’s settings, live scam links, or promises that any step will return your money—your bank and official sites handle those.",
      ] as const,
    },
  ],
  note: "Banking in the Netherlands is generally safe and well supervised. Scams still work best when people feel rushed, confused, or new to how payments work here.",
} as const;
