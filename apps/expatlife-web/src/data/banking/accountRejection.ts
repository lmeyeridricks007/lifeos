/**
 * Config-driven copy for Dutch bank onboarding friction: rejection, delay, or stuck applications.
 * Reusable from Money · Banking and Move setup flows. Calm tone; no approval guarantees.
 */

import type { MoveVisaResidencyReferences } from "@/src/components/moving/visas-residency/config/moveVisaResidency.types";
import type { SafeBankingHabitItem } from "@/components/banking/SafeBankingHabits";
import { BANK_COMPARISON_TOOL_PATH, BANKING_COST_ESTIMATOR_PATH } from "@/src/components/tools/banking-cost/bankingCostPageModel";
import { BEST_BANKS_EXPATS_PATH } from "@/src/components/money/best-banks-expats/bestBanksExpatsPageModel";
import { BANKING_FEES_PAGE_PATH } from "@/src/data/banking/bankingFeesContent";
import {
  BANKING_SECURITY_PATH,
  BANKING_SECURITY_HOW_PAYMENTS_PATH,
  BANKING_SECURITY_INTL_TRANSFERS_PATH,
  BANKING_SECURITY_TRANSFER_CALC_PATH,
} from "@/src/data/banking/bankingSafety";

// ——— canonical route ———

export const BANKING_ACCOUNT_REJECTION_PATH = "/netherlands/money/banking/account-rejection/" as const;

// ——— internal paths (single source for links + labels) ———

const H = {
  openBank: "/netherlands/open-bank-account-netherlands/" as const,
  residencePermits: "/netherlands/moving/residence-permits/" as const,
  first90: "/netherlands/moving/tools/first-90-days/" as const,
  arrivalPlanner: "/netherlands/moving/tools/arrival-planner/" as const,
  tradDigital: "/netherlands/money/banking/traditional-vs-digital/" as const,
  typesAccounts: "/netherlands/money/banking/types-of-accounts/" as const,
  cheapest: "/netherlands/money/banking/cheapest-accounts/" as const,
  dailyLife: "/netherlands/living/daily-life/" as const,
  essentialApps: "/netherlands/living/apps/" as const,
  survivalGuide: "/netherlands/living/survival-guide/" as const,
  bankingHub: "/netherlands/money/banking/" as const,
} as const;

/** Default labels for `relatedLinks` href strings — extend when you add new internal targets. */
const BANKING_REJECTION_LINK_LABELS: Readonly<Record<string, string>> = {
  [H.openBank]: "Open a bank account in the Netherlands",
  [H.residencePermits]: "Residence permits (Move)",
  [H.first90]: "First 90 days planner",
  [H.arrivalPlanner]: "Arrival planner",
  [H.tradDigital]: "Traditional vs digital banks",
  [H.typesAccounts]: "Types of bank accounts",
  [H.cheapest]: "Cheapest bank accounts",
  [H.dailyLife]: "Daily life basics",
  [H.essentialApps]: "Essential apps",
  [H.survivalGuide]: "Survival guide",
  [H.bankingHub]: "Banking hub",
  [BEST_BANKS_EXPATS_PATH]: "Best banks for expats",
  [BANKING_SECURITY_PATH]: "Banking safety & fraud",
  [BANKING_SECURITY_HOW_PAYMENTS_PATH]: "How payments work",
  [BANKING_SECURITY_INTL_TRANSFERS_PATH]: "International transfers",
  [BANKING_SECURITY_TRANSFER_CALC_PATH]: "Transfer cost calculator",
  [BANK_COMPARISON_TOOL_PATH]: "Bank comparison tool",
  [BANKING_COST_ESTIMATOR_PATH]: "Banking cost estimator",
  [BANKING_FEES_PAGE_PATH]: "Banking fees & costs",
  [BANKING_ACCOUNT_REJECTION_PATH]: "Bank account rejected or delayed",
};

export function resolveBankingRejectionLinkLabel(href: string): string {
  return BANKING_REJECTION_LINK_LABELS[href] ?? "Related page";
}

export function resolveBankingRejectionLinkEntries(hrefs: readonly string[] | undefined): ReadonlyArray<{ href: string; label: string }> {
  if (!hrefs?.length) return [];
  return hrefs.map((href) => ({ href, label: resolveBankingRejectionLinkLabel(href) }));
}

// ——— types (reusable for future onboarding checklist / tool) ———

export type BankingRejectionReason = {
  id: string;
  title: string;
  plainEnglishMeaning: string;
  whatToCheck: readonly string[];
  nextAction: string;
  /** Internal site paths only in config; use {@link resolveBankingRejectionLinkLabel} in UI. */
  relatedLinks?: readonly string[];
};

export type BankingRejectionRecoveryUrgency = "immediate" | "same_day" | "when_possible";

export type BankingRejectionRecoveryStep = {
  id: string;
  title: string;
  description: string;
  urgency: BankingRejectionRecoveryUrgency;
  relatedLinks?: readonly string[];
};

export type BankingRejectionWorkaround = {
  id: string;
  title: string;
  whenItHelps: string;
  watchOuts: readonly string[];
  relatedLinks?: readonly string[];
};

export type BankingRejectionDontDo = { title: string; body: string };
export type BankingRejectionMisunderstanding = { title: string; body: string };
export type BankingRejectionFaqItem = { q: string; a: string };

export type BankingRejectionRelatedGuide = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export function bankingRejectionRecoveryUrgencyLabel(urgency: BankingRejectionRecoveryUrgency): string {
  switch (urgency) {
    case "immediate":
      return "Do first";
    case "same_day":
      return "Same day";
    case "when_possible":
      return "When you can";
  }
}

// ——— at-a-glance & first steps ———

export const bankingRejectionAtAGlance = {
  sectionTitle: "At a glance",
  subtitle: "A calm guide when opening a Dutch account does not work the first time. Many problems can be fixed or need a different bank.",
  cells: [
    {
      title: "What this page is for",
      bullets: [
        "Simple help if your Dutch bank account was rejected, slow, blocked, or stuck — and what to check next.",
      ] as const,
    },
    {
      title: "Who it helps",
      bullets: [
        "New arrivals, people waiting for a BSN or address papers, students, employees, freelancers, and anyone applying from outside the Netherlands.",
      ] as const,
    },
    {
      title: "What it covers",
      bullets: [
        "Common causes, paper checks, BSN and address timing, extra bank questions, what to ask support, short-term options, and other banks to compare.",
      ] as const,
    },
    {
      title: "What it does not do",
      bullets: [
        "It is not legal or tax advice. It does not promise approval. It does not list every rule for every bank — your bank’s messages and official website are the real source.",
      ] as const,
    },
  ],
  note: "A “no” from a bank does not always mean you can never get an account. Often the bank could not check something, your details did not match, or you need another bank or a later date.",
} as const;

/** Decision helper: which pattern matches the bank’s messages or app status. */
export type BankingRejectionSituationCard = {
  id: string;
  title: string;
  signs: readonly string[];
  whatToDo: readonly string[];
};

export const bankingRejectionApplicationSituationCards: readonly BankingRejectionSituationCard[] = [
  {
    id: "rejected",
    title: "Rejected",
    signs: ["Clear “no” message", "They say the account cannot open", "Application declined"],
    whatToDo: ["Read any reason they gave", "Get your papers ready", "Ask if you can apply again", "Look at other banks"],
  },
  {
    id: "delayed",
    title: "Slow / under review",
    signs: ["Waiting for checks", "They asked for more papers", "No final answer yet"],
    whatToDo: [
      "Reply only through the real bank website or app",
      "Send the papers they asked for",
      "Do not send many applications with different details",
    ],
  },
  {
    id: "stuck",
    title: "Stuck / tech problem",
    signs: ["App keeps looping", "Selfie or ID upload fails", "Status never changes"],
    whatToDo: ["Contact support", "Check photo quality", "Use the support channel from the bank’s website", "Save screenshots and ticket numbers"],
  },
];

export const bankingRejectionFirstSteps: readonly SafeBankingHabitItem[] = [
  {
    title: "Read the bank’s reason slowly",
    whyItMatters: "They often email you, send an app message, or give a ticket number. If they already said what is missing, guessing wastes time.",
    practicalHabit: "Check inbox and spam. Open bank app alerts. Copy any case or ticket number before you call or chat.",
  },
  {
    title: "Check your name and address",
    whyItMatters: "Small spelling or date mistakes can fail automatic checks or a person’s review.",
    practicalHabit: "Compare your application line by line with your passport or ID and your address proof.",
  },
  {
    title: "Check BSN and town hall (gemeente) steps",
    whyItMatters: "Some banks want your BSN or more Dutch registration papers sooner than others. New arrivals often wait between housing, gemeente, BSN letter, and first pay.",
    practicalHabit: "See what you already sent, what the bank asked for next, and what you can show today from the gemeente or your permit.",
  },
  {
    title: "Talk to the bank only through safe channels",
    whyItMatters: "Criminals pretend to be bank support. Fake phone numbers can steal your data.",
    practicalHabit: "Use chat or phone numbers from the bank’s official app or website — not a link in a random text or email.",
  },
  {
    title: "Compare backup banks calmly",
    whyItMatters: "If pay day or rent is soon, you may need another bank or a short-term way to pay — without picking the wrong product in a panic.",
    practicalHabit: "Write your deadlines (salary, rent, iDEAL). Then open one big-bank site and one app-bank site and read what each asks for.",
  },
];

// ——— reasons (patterns — not sourced bank rules) ———

export const bankingRejectionReasons: readonly BankingRejectionReason[] = [
  {
    id: "id-verify-fail",
    title: "ID verification did not pass",
    plainEnglishMeaning: "The app may say your ID check failed, or your photo could not be read.",
    whatToCheck: ["Blurry or cropped photos", "Glare on the document", "Selfie or liveness step skipped or timed out"],
    nextAction:
      "Take new photos in good light. Follow the frame in the app. Try again when your Wi-Fi or data is stable. If it still fails, ask support which ID types they accept.",
  },
  {
    id: "address-verify",
    title: "Address could not be verified",
    plainEnglishMeaning: "The bank may say your address proof does not match their rules or the address you typed.",
    whatToCheck: ["Different address on proof vs application", "Landlord letter not accepted", "Document too old for their policy"],
    nextAction:
      "Read the bank’s list of accepted address papers and dates. Ask your gemeente (town hall) or landlord for an official letter if you need one.",
  },
  {
    id: "bsn-missing",
    title: "BSN missing or not accepted yet",
    plainEnglishMeaning: "The form may stop at “add BSN” or the bank may wait until you have one.",
    whatToCheck: ["You have not registered at the gemeente", "BSN letter not uploaded", "Temporary status without a number yet"],
    nextAction:
      "Finish your registration steps, then type or upload the BSN exactly as on the letter. If you have no BSN yet, you may need a bank with different rules — check each bank’s own website, not only forums.",
    relatedLinks: [H.openBank],
  },
  {
    id: "doc-mismatch",
    title: "Document mismatch",
    plainEnglishMeaning: "Your name, birth date, or nationality may not match across your ID, the form, and other files.",
    whatToCheck: ["Middle names dropped or added", "Different date format", "Old passport number used"],
    nextAction:
      "Match spelling and dates to your main ID before you upload again. Use the same name your employer or gemeente uses if that matters for you.",
  },
  {
    id: "doc-expired-unsupported",
    title: "Expired or unsupported ID",
    plainEnglishMeaning: "The bank may reject an old passport or an ID type they do not accept for your country.",
    whatToCheck: ["Expiry date in the past", "Only a residence card is uploaded when they asked for a passport", "Country not on their list for new customers"],
    nextAction:
      "Renew your ID if it is expired, then apply again. If this bank does not accept your country mix, another bank might — check each bank’s own list of who can apply.",
  },
  {
    id: "permit-uncertainty",
    title: "Residence or permit questions",
    plainEnglishMeaning: "You may get more questions when your permit type, end date, or employer is part of the application.",
    whatToCheck: ["Short time left on a permit", "Employer or university details do not match what you typed", "Student vs work status unclear"],
    nextAction:
      "Prepare clear permit copies and any employer or school letters the bank asked for. For stay rules, use official immigration pages (IND) — the bank’s checks are not the same as IND approval.",
    relatedLinks: [H.residencePermits],
  },
  {
    id: "compliance-review",
    title: "Long risk review",
    plainEnglishMeaning: "The status may say “under review” for a long time with few details.",
    whatToCheck: ["Large incoming transfers expected", "Money moving across countries", "Extra questions for public figures or similar roles"],
    nextAction: "Answer honestly and only through the bank’s official channels. Fake details can get your case closed for good.",
  },
  {
    id: "source-of-funds",
    title: "Source of income or funds questions",
    plainEnglishMeaning: "You may be asked where money comes from, especially for large deposits or freelance income.",
    whatToCheck: ["Requests for contracts, payslips, or invoices", "Questions about foreign accounts or gifts"],
    nextAction:
      "Gather simple proof: job contract, recent payslips, student letter, or Chamber of Commerce (KvK) paper if you are freelance — only what they asked for.",
  },
  {
    id: "prior-flag",
    title: "Prior account, fraud, or security flag",
    plainEnglishMeaning: "A bank may say no if their internal checks show high risk — they may not tell you everything.",
    whatToCheck: ["Past chargebacks or scam reports", "Shared contact details with a blocked case", "Identity theft reports elsewhere"],
    nextAction:
      "Use official support to ask what you can fix. If you suspect identity misuse, use fraud reporting routes and consider a police report where appropriate.",
    relatedLinks: [BANKING_SECURITY_PATH],
  },
  {
    id: "country-combo",
    title: "Country or residency combination not supported",
    plainEnglishMeaning: "The website may stop early or say this product is not for people in your situation.",
    whatToCheck: ["Non-EU nationality with certain addresses", "Tax residency outside NL while applying for a local-only product"],
    nextAction:
      "Try another licensed bank’s website and read who can apply. A transfer app may help for a while but may not replace a full Dutch account for salary or iDEAL.",
    relatedLinks: [H.tradDigital],
  },
  {
    id: "tech-issue",
    title: "Technical or app verification issue",
    plainEnglishMeaning: "The app may crash, repeat the same step, or show a vague error.",
    whatToCheck: ["Outdated app version", "VPN on during video ID", "Phone OS too old for their security module"],
    nextAction: "Update the app and OS, turn off VPN, switch network, and retry. If it persists, contact support with screenshots and device model.",
  },
];

/** Grouped for {@link DocumentCheckList}; flat list derived for reuse in tools. */
export const bankingRejectionDocumentChecklistGroups = [
  {
    id: "identity-uploads",
    title: "Identity and uploads",
    items: [
      "Name spelling matches passport or national ID",
      "Birth date is correct in the format the form expects",
      "Nationality and country of residence match your documents",
      "ID or passport is not expired",
      "Uploaded photos are sharp and fully visible",
      "Selfie or liveness step finished successfully",
    ],
  },
  {
    id: "address-contact",
    title: "Address and contact",
    items: [
      "Proof of address matches the address you typed in the application",
      "Email and phone numbers are active and match what you gave the bank",
    ],
  },
  {
    id: "linked-records",
    title: "Employer, school, and gemeente",
    items: ["Employer, school, or gemeente details match when the form links to them"],
  },
] as const;

export const bankingRejectionDocumentChecklist = bankingRejectionDocumentChecklistGroups.flatMap((g) => [...g.items]);

export const bankingRejectionDocumentTip =
  "Small mistakes can cause long delays — spend ten minutes checking carefully before you upload again." as const;

export const bankingRejectionBsnIntroParagraphs = [
  "Different banks want different papers at different times. Some let you start with part of the paperwork; others want a BSN or Dutch address proof before they finish.",
  "New arrivals often wait between steps: housing, gemeente (town hall) registration, BSN letter, first pay, first rent. That wait can feel like a “bank problem” when it is really timing.",
  "Your stay permit may be part of what the bank checks. That is separate from IND (immigration) approval — the bank runs its own safety checks.",
] as const;

export const bankingRejectionBsnCrossLinks = [
  { href: H.openBank, label: "Open a bank account in the Netherlands →" },
  { href: H.residencePermits, label: "Residence permits (Move) →" },
  { href: H.first90, label: "First 90 days planner →" },
  { href: H.arrivalPlanner, label: "Arrival planner →" },
  { href: BEST_BANKS_EXPATS_PATH, label: "Best banks for expats →" },
] as const;

export const bankingRejectionRiskIntroParagraphs = [
  "Dutch banks must run checks before they open or fully open accounts. That is normal — it is not a personal attack on you.",
  "Some applications get extra review, especially with income from abroad, a new business, or large money movements.",
  "People from abroad may get more questions than someone who has lived in the Netherlands a long time.",
  "Never make up answers to go faster — mixed stories are a common reason accounts stay blocked or get closed later.",
] as const;

export const bankingRejectionRiskExamplesTitle = "Papers you might need ready (only if they apply to you)" as const;

export const bankingRejectionRiskExamples = [
  "Employment contract or employer letter",
  "Proof of address that meets the bank’s date and format rules",
  "Residence permit or ID showing your legal stay",
  "Recent payslips or payroll contact if salary is starting soon",
  "Student enrollment letter",
  "KvK (Chamber of Commerce) paper if you are freelance or have a small business",
  "Short honest note about income or savings from abroad if they ask",
] as const;

export const bankingRejectionRecoverySteps: readonly BankingRejectionRecoveryStep[] = [
  {
    id: "read-message",
    title: "Read the bank’s message slowly",
    description: "Note deadlines, missing items, and ticket numbers before you do anything else.",
    urgency: "immediate",
  },
  {
    id: "check-mismatches",
    title: "Check obvious mismatches",
    description: "Compare name, date of birth, address, and document expiry against your ID and proof files.",
    urgency: "same_day",
  },
  {
    id: "prepare-docs",
    title: "Prepare only what they asked for",
    description: "Clear scans or photos that are easy to read on a phone — do not upload files they did not ask for.",
    urgency: "same_day",
  },
  {
    id: "contact-official",
    title: "Contact the bank through official channels",
    description: "Use the app, website chat, or phone number you found on the bank’s real site — not a number from a random message.",
    urgency: "immediate",
    relatedLinks: [BANKING_SECURITY_PATH],
  },
  {
    id: "reapply-policy",
    title: "Ask about fixing vs restarting",
    description: "Ask if you can fix the same application, need a new one, or must wait before you apply again.",
    urgency: "when_possible",
  },
  {
    id: "compare-providers",
    title: "Compare another licensed bank if you need one",
    description: "Read each bank’s “who can apply” pages before you try again — rules differ and can change.",
    urgency: "when_possible",
    relatedLinks: [BEST_BANKS_EXPATS_PATH, H.tradDigital, BANK_COMPARISON_TOOL_PATH],
  },
  {
    id: "urgent-workaround",
    title: "If rent or salary is urgent, plan a short-term path",
    description: "See the short-term options below. If pay or rent is involved, get agreement from your employer or landlord in writing.",
    urgency: "same_day",
    relatedLinks: [BANKING_SECURITY_HOW_PAYMENTS_PATH],
  },
  {
    id: "keep-log",
    title: "Keep a simple communication log",
    description: "Write down dates, who you spoke to, ticket numbers, and what you uploaded — useful if you need to complain later.",
    urgency: "when_possible",
  },
];

export const bankingRejectionWorkarounds: readonly BankingRejectionWorkaround[] = [
  {
    id: "foreign-sepa",
    title: "Use a foreign account that already works with SEPA for a while",
    whenItHelps:
      "Some employers can pay a foreign IBAN for a while. Some landlords accept payments from abroad. Rules differ — always confirm before you rely on it.",
    watchOuts: [
      "Get payroll and housing acceptance in writing or email when possible.",
      "iDEAL and many Dutch utilities still work best with a local Dutch account long term.",
    ],
    relatedLinks: [BANKING_SECURITY_HOW_PAYMENTS_PATH, BANKING_SECURITY_INTL_TRANSFERS_PATH],
  },
  {
    id: "digital-route",
    title: "Try another digital or traditional bank",
    whenItHelps:
      "Each bank has its own rules. If one bank says no, another may still say yes — but every bank still runs its own safety checks.",
    watchOuts: [
      "Read each bank’s website for who can apply and which papers they want before you spend time on a new application.",
      "No bank can skip the law — easy marketing is not the same as approval.",
    ],
    relatedLinks: [BEST_BANKS_EXPATS_PATH, H.tradDigital],
  },
  {
    id: "employer-payroll",
    title: "Ask payroll what account formats they accept",
    whenItHelps: "HR often knows which countries’ IBANs payroll can use and if there is a short-term option.",
    watchOuts: [
      "Ask about timing for the next pay run if you switch accounts mid-month.",
      "Do not use someone else’s account for your salary unless you understand tax and fraud risk.",
    ],
    relatedLinks: [BANKING_SECURITY_HOW_PAYMENTS_PATH],
  },
  {
    id: "landlord-alts",
    title: "Ask landlord or provider about payment alternatives",
    whenItHelps: "Sometimes you can pay by international transfer, card, or a short delay — sometimes you cannot.",
    watchOuts: [
      "Get clear written agreement for any non-standard rent path.",
      "Upfront “agent” offers to route rent through a stranger’s account are a major red flag.",
    ],
    relatedLinks: [H.openBank],
  },
  {
    id: "transfer-oneoff",
    title: "Use a licensed transfer company for a one-off payment",
    whenItHelps: "Can help move money between countries while you wait for a local account.",
    watchOuts: [
      "Compare full cost (fee + exchange rate) on the provider’s own calculator.",
      "Transfer apps are not a full Dutch bank for every landlord or bill company — check if they will accept it.",
    ],
    relatedLinks: [BANKING_SECURITY_TRANSFER_CALC_PATH],
  },
  {
    id: "cash-card-buffer",
    title: "Keep a small cash or card buffer for daily life",
    whenItHelps: "Cards from your home country may still work in shops for a while. A small amount of cash can help in an emergency if that feels safe for you.",
    watchOuts: [
      "Watch foreign transaction fees and daily limits on your existing cards.",
      "Do not carry unsafe amounts of cash; use secure storage when needed.",
    ],
    relatedLinks: [H.dailyLife],
  },
];

export const bankingRejectionWorkaroundWarnings = [
  "Do not use another person’s bank account for your salary or rent unless you understand tax, fraud, and contract risk.",
  "Avoid strangers on social media who say they can “fix” your bank problem — use real banks and known transfer companies only.",
  "Check salary, rent, and iDEAL needs before you assume a short-term plan will work all year.",
  "Remember: moving to another bank or app does not remove ID checks or anti-fraud rules — only which company runs them.",
] as const;

export const bankingRejectionDontDos: readonly BankingRejectionDontDo[] = [
  {
    title: "Do not submit fake or edited documents",
    body: "Edited PDFs or someone else’s bills can get you blocked for good and may be illegal. Use only real documents.",
  },
  {
    title: "Do not reapply many times with conflicting details",
    body: "Each try may stay on file. Fix the main mistake first, then apply once with the same facts everywhere.",
  },
  {
    title: "Do not trust unofficial phone numbers or links",
    body: "Scammers target people who feel stressed. Open the bank site yourself or use the number printed on an official letter.",
  },
  {
    title: "Do not pay “agents” who promise guaranteed approval",
    body: "No honest service can promise you a Dutch bank account. Real sign-up always goes through the bank’s own checks.",
  },
  {
    title: "Do not ignore fraud or identity theft signs",
    body: "If someone opened an account in your name or your ID was leaked, use your bank’s fraud line and official reporting sites.",
  },
  {
    title: "Do not rely on a single payment path during a move",
    body: "Keep a backup card or account with fair fees until your Dutch money routine feels stable.",
  },
  {
    title: "Do not rush into a premium plan for “faster” sign-up",
    body: "Read monthly fees and how to cancel on the bank’s real website before you pay for a premium plan.",
  },
];

export const bankingRejectionMisunderstandings: readonly BankingRejectionMisunderstanding[] = [
  {
    title: "A decline is not always permanent",
    body: "It may mean “not now”, “wrong product”, or “one paper is missing.” Fixing the problem or trying another bank often works later.",
  },
  {
    title: "No BSN can mean friction — depending on the bank",
    body: "Some banks let you start without a BSN; others do not. Read each bank’s newcomer pages — do not assume one rule for every bank.",
  },
  {
    title: "A foreign IBAN can work sometimes — but can still cause practical friction",
    body: "Payroll might accept a foreign IBAN while a landlord wants a Dutch IBAN for rent. Always ask each side.",
  },
  {
    title: "Opening a bank account is not the same as immigration approval",
    body: "IND may approve your stay while a bank still wants extra money checks — these are two different things.",
  },
  {
    title: "Digital banks are not automatically easier for every profile",
    body: "Apps can feel fast for simple cases and still ask hard questions for tricky income or stay situations. A nice app does not mean easier rules — banks still check ID and risk by law.",
  },
  {
    title: "Cheapest is not always the best backup when you are stuck",
    body: "English help, which papers they accept, and whether salary fits may matter more than the lowest monthly fee while you fix things.",
  },
  {
    title: "Banks may not explain every rule in detail",
    body: "You might only get a short message. Stay polite, ask what is missing, and use the bank’s official complaint path if you need to.",
  },
  {
    title: "Support can only help when your details stay consistent",
    body: "If each chat hears a different story or address, checks take longer. Keep one simple list of facts and use it every time.",
  },
];

export const bankingRejectionFaq: readonly BankingRejectionFaqItem[] = [
  {
    q: "Why was my Dutch bank account application rejected?",
    a: "Common reasons: ID check failed, address proof does not fit the bank’s rules, missing BSN, details do not match between papers, extra review, or this product is not for your country mix. Start with the bank’s own message — it is the best clue.",
  },
  {
    q: "Can I open a Dutch bank account without a BSN?",
    a: "Sometimes yes, for some banks — rules change and differ. If you are stuck, read the “new in the Netherlands” pages on several bank websites instead of assuming one answer for everyone.",
  },
  {
    q: "What should I do if my application is stuck on review?",
    a: "Wait at least as long as they said, then contact support through the real app or website with your ticket number. Check email and spam for requests you missed. Do not send many different uploads unless they ask.",
  },
  {
    q: "Can I apply with another bank?",
    a: "Yes, many people do. Start a new application with the same facts everywhere, and read who can apply on the bank’s site first so you do not repeat the same mistake.",
  },
  {
    q: "Are digital banks easier for expats?",
    a: "They can feel easier for simple cases, but they still run the same kind of checks as other banks — you just use an app. A branch bank can be better if you want in-person help or certain loans later.",
  },
  {
    q: "Can my employer pay salary into a foreign account?",
    a: "Sometimes — it depends on your employer’s payroll system and country rules. Ask HR early and ask for email or paper in writing so you can plan before pay day.",
  },
  {
    q: "What documents should I check first?",
    a: "Passport or ID (not expired), address proof that matches the form, BSN if they asked for it, and any permit or job letter they requested. Spell your name the same on every paper.",
  },
  {
    q: "Should I use a paid agent to open a bank account?",
    a: "Be careful. Some relocation help is real, but nobody can promise you a bank account. If someone wants a big fee up front or remote control of your phone or laptop, stop.",
  },
  {
    q: "Is a bank rejection the same as a legal problem?",
    a: "Usually no — it is a business decision by the bank. Legal trouble is different unless there is fraud or stolen identity; then use the police and the bank’s fraud line.",
  },
  {
    q: "What should I do if I suspect fraud or identity misuse?",
    a: "Call your bank’s fraud line, change passwords from a safe device, and use official reporting sites. Our Banking safety guide has more on phishing and what to do next.",
  },
];

export const bankingRejectionOfficialSources = {
  sectionId: "official-sources",
  sectionTitle: "Official sources",
  disclaimer:
    "These links help you learn and report problems. They do not replace your bank’s support, IND decisions, or a lawyer for your own case.",
  groups: [
    {
      id: "supervision",
      title: "Bank oversight in the Netherlands",
      links: [{ type: "external" as const, label: "De Nederlandsche Bank (DNB) — English", href: "https://www.dnb.nl/en/" }],
    },
    {
      id: "eu-payments",
      title: "EU payment accounts and consumer help",
      links: [
        {
          type: "external" as const,
          label: "Your Europe — payment accounts",
          href: "https://europa.eu/youreurope/citizens/consumers/finance-and-insurance/bank-account/index_en.htm",
        },
        { type: "external" as const, label: "Consuwijzer — English consumer topics", href: "https://www.consuwijzer.nl/english" },
      ],
    },
    {
      id: "fraud",
      title: "Fraud & identity misuse",
      links: [
        { type: "external" as const, label: "Fraudehelpdesk — English", href: "https://www.fraudehelpdesk.nl/en" },
        { type: "external" as const, label: "Police.nl — Report a crime online (English)", href: "https://www.politie.nl/en/report-a-crime-online" },
      ],
    },
    {
      id: "immigration",
      title: "Stay and permits (general info)",
      links: [
        { type: "external" as const, label: "IND — residence permits", href: "https://ind.nl/en/residence-permits" },
        { type: "internal" as const, label: "Residence permits hub (ExpatCopilot)", href: H.residencePermits },
      ],
    },
    {
      id: "internal",
      title: "More on ExpatCopilot",
      links: [
        { type: "internal" as const, label: "Open a bank account in the Netherlands", href: H.openBank },
        { type: "internal" as const, label: "Banking hub", href: H.bankingHub },
        { type: "internal" as const, label: "Banking safety & fraud", href: BANKING_SECURITY_PATH },
      ],
    },
  ],
} satisfies MoveVisaResidencyReferences;

export const bankingRejectionRelatedGuides: readonly BankingRejectionRelatedGuide[] = [
  { title: "Best banks for expats", description: "Short list of banks expats often use — read each bank’s rules before you apply again.", href: BEST_BANKS_EXPATS_PATH, ctaLabel: "Open guide" },
  { title: "Traditional vs digital banks", description: "When people use branch banks, app banks, or both.", href: H.tradDigital, ctaLabel: "Read guide" },
  { title: "Types of bank accounts", description: "Everyday, student, joint, and business accounts in plain language.", href: H.typesAccounts, ctaLabel: "Read guide" },
  { title: "How payments work", description: "Salary, rent, iDEAL, and bank transfers in the Netherlands.", href: BANKING_SECURITY_HOW_PAYMENTS_PATH, ctaLabel: "Read guide" },
  { title: "Banking fees & costs", description: "Common fee types before you pick a second bank.", href: BANKING_FEES_PAGE_PATH, ctaLabel: "Open fee guide" },
  { title: "Cheapest bank accounts", description: "Lower-fee options — still check each bank’s site for who can apply.", href: H.cheapest, ctaLabel: "Open guide" },
  { title: "Banking safety & fraud", description: "Stay safe while you fix account problems and read messages.", href: BANKING_SECURITY_PATH, ctaLabel: "Read safety guide" },
  { title: "Bank comparison tool", description: "Answer a few questions for rough fit ideas — then check each bank’s site.", href: BANK_COMPARISON_TOOL_PATH, ctaLabel: "Open tool" },
  { title: "Banking cost estimator", description: "Rough monthly costs in euros for everyday banking.", href: BANKING_COST_ESTIMATOR_PATH, ctaLabel: "Open estimator" },
  { title: "Open a bank account in the Netherlands", description: "Papers, BSN, and what landlords or bosses often expect.", href: H.openBank, ctaLabel: "Move guide" },
  { title: "First 90 days planner", description: "Early tasks in order when time is tight.", href: H.first90, ctaLabel: "Open planner" },
  { title: "Arrival planner", description: "First-week tasks next to banking setup.", href: H.arrivalPlanner, ctaLabel: "Open tool" },
  { title: "Essential apps", description: "Bank apps and daily Dutch tools in one list.", href: H.essentialApps, ctaLabel: "Living guide" },
  { title: "Daily life basics", description: "Shops, errands, and how people pay day to day.", href: H.dailyLife, ctaLabel: "Open guide" },
  { title: "Survival guide", description: "Simple hub for people who just arrived in the Netherlands.", href: H.survivalGuide, ctaLabel: "Open hub" },
];
