import type { ToolExplanatorySection } from "@/src/components/tools/ToolPageTemplate";

export const PAYSLIP_DECODER_CANONICAL = "/netherlands/work/tools/payslip-decoder/";
export const NETHERLANDS_BASE = "/netherlands";

export const PAYSLIP_PAGE_SEO = {
  title: "Dutch Payslip Decoder | Read Bruto, Netto, Loonheffing & 30% Ruling Lines",
  description:
    "Decode a Dutch payslip from pasted text or a text-based PDF. Understand bruto, netto, loonheffing, vakantiegeld, pension, heffingsloon, Loon ZVW, and possible 30% ruling lines. No storage, no OCR, plain-English explanations.",
  keywords: [
    "Dutch payslip decoder",
    "Netherlands payslip explained",
    "Dutch salary slip meaning",
    "loonstrook uitleg expat",
    "Dutch payroll terms explained",
    "bruto netto payslip Netherlands",
    "loonheffing explained",
    "vakantiegeld payslip",
    "heffingsloon payslip",
    "loon ZVW payslip",
    "30% ruling payslip lines",
  ],
  openGraphImage: {
    url: "/images/heroes/netherlands-payslip-decoder-hero.png",
    width: 1200,
    height: 630,
    alt: "Illustration of a stylized payslip document and euro motif for the Dutch Payslip Decoder tool.",
  },
  twitterCard: "summary_large_image" as const,
};

export const PAYSLIP_HERO = {
  eyebrow: "TOOL",
  title: "Dutch Payslip Decoder",
  subtitle:
    "Paste payslip text or upload a text-based PDF. Built for many common Dutch and English payroll layouts used in the Netherlands — we map labels to plain English, split period vs year-to-date when both appear, and show confidence when wording is ambiguous. Nothing is stored.",
  primaryCtaLabel: "Start decoding",
  primaryCtaScrollToId: "tool-inputs",
  secondaryCtaLabel: "Learn how Dutch payslips work",
  secondaryCtaHref: `${NETHERLANDS_BASE}/taxes/how-taxes-work-netherlands/`,
  image: {
    src: "/images/heroes/netherlands-payslip-decoder-hero.png",
    alt: "Stylized payslip and payroll illustration for the Dutch Payslip Decoder — no real salary data.",
  },
  imageFallback: {
    src: "/images/heroes/netherlands-dutch-salary-net-calculator-hero.png",
    alt: "Companion salary-planning hero for net pay context alongside payslip decoding.",
  },
} as const;

export type PayslipRichSegment =
  | { type: "text"; text: string }
  | { type: "link"; text: string; href: string };

export type PayslipOrientationBullet = { segments: PayslipRichSegment[] };

export const PAYSLIP_ORIENTATION_BULLETS: PayslipOrientationBullet[] = [
  {
    segments: [
      { type: "text", text: "Pair with the " },
      {
        type: "link",
        text: "Dutch net salary calculator",
        href: `${NETHERLANDS_BASE}/taxes/tools/dutch-salary-net-calculator/`,
      },
      {
        type: "text",
        text: " for indicative gross-to-net planning — this tool reads labels, not employer payroll engines.",
      },
    ],
  },
  {
    segments: [
      { type: "text", text: "Use the " },
      {
        type: "link",
        text: "30% ruling calculator",
        href: `${NETHERLANDS_BASE}/taxes/tools/30-ruling-calculator/`,
      },
      { type: "text", text: " for facility norms; it does not replace line-by-line payslip interpretation." },
    ],
  },
  {
    segments: [
      { type: "text", text: "Browse " },
      { type: "link", text: "banks for salary deposits", href: `${NETHERLANDS_BASE}/services/banks/` },
      { type: "text", text: " when you are setting up how net pay lands in your account." },
    ],
  },
];

export const PAYSLIP_AT_A_GLANCE_CARDS = [
  {
    title: "Best for",
    description: "Expats who want plain-language orientation on a Dutch loonstrook before asking payroll or an advisor.",
  },
  {
    title: "What it explains",
    description:
      "Common lines such as bruto/netto, loonheffing, vakantiegeld, pension contributions, and taxable wage — when detectable.",
  },
  {
    title: "Works with",
    description:
      "Pasted text and text-based PDFs from many Dutch payroll systems and bilingual exports — processed in memory only; always confirm amounts with your employer.",
  },
  {
    title: "What it skips",
    description: "OCR, image uploads, account storage, and certainty about employer-specific coding — ambiguity is surfaced explicitly.",
  },
] as const;

export const PAYSLIP_COMMON_LINES_SEO = {
  intro: "Real payslips vary by payroll vendor, but you will often see labels similar to:",
  items: [
    {
      term: "Bruto loon / salaris",
      description: "Contract gross for the period before employee deductions.",
    },
    {
      term: "Loonheffing / loonbelasting",
      description: "Withholding via employer toward income tax and wage-related components.",
    },
    {
      term: "Heffingsloon / belastbaar loon",
      description:
        "Taxable wage base used in payroll — it can differ from bruto when corrections, exemptions, or scheme rules apply.",
    },
    {
      term: "Loon ZVW",
      description: "Wage base used for Dutch employee health insurance (Zvw) contribution calculations in payroll — can differ from gross salary.",
    },
    {
      term: "Corr. 30% TB / BT",
      description: "Correction lines some payroll systems use alongside 30% ruling treatment; exact coding is employer-specific.",
    },
    {
      term: "Vrijgestelde vergoeding",
      description: "Often a tax-free reimbursement category; on some slips it may sit near 30% ruling components — confirm with payroll.",
    },
    {
      term: "Vakantiegeld",
      description: "Statutory holiday allowance, often accrued monthly.",
    },
    {
      term: "Pensioenpremie",
      description: "Employee and sometimes employer pension lines when a scheme applies.",
    },
    {
      term: "Netto uitbetaling",
      description: "Indicative bank payout for the period after shown deductions.",
    },
  ],
  footnote: "Official coding and year-to-date totals are always confirmed with your employer.",
} as const;

export const PAYSLIP_TOOL_DISCLOSURE =
  "This page provides general information to help you read common Dutch payslip wording. It is not payroll, tax, or legal advice, does not access employer or Belastingdienst systems, and does not create a professional client relationship. Confirm amounts and coding with your employer or a qualified adviser.";

export const PAYSLIP_OFFICIAL_SECTION_INTRO =
  "These are starting points for authoritative rules — ExpatCopilot does not represent any government body.";

export const PAYSLIP_PRIVACY_NOTE = {
  title: "Privacy & security",
  body: "Text and PDFs are processed in memory for the current request only — we do not persist payslip contents in a database in this free version, and we avoid logging full slip text on the server. Use text-based PDFs only; photo or scanned PDFs are not supported here — copy text from your viewer and paste instead, or use a future OCR option if we offer one separately. Avoid shared computers; clear downloads and browser history if needed.",
};

export const PAYSLIP_SOFTWARE_APP_DESCRIPTION =
  "Privacy-first, in-memory payslip text helper: paste or text-based PDF, extraction quality hints, conservative line parsing for common Dutch payroll labels — not payroll software and not professional advice.";

export const PAYSLIP_RELATED_NEXT_STEPS = [
  {
    href: `${NETHERLANDS_BASE}/moving-to-the-netherlands/`,
    title: "Moving to the Netherlands",
    description: "Relocation hub alongside understanding your first Dutch payslips.",
  },
  {
    href: `${NETHERLANDS_BASE}/work/tools/`,
    title: "Work tools hub",
    description: "More employment-focused utilities as they go live.",
  },
  {
    href: `${NETHERLANDS_BASE}/taxes/tools/dutch-salary-net-calculator/`,
    title: "Dutch net salary calculator",
    description: "Indicative gross-to-net planning — companion to reading a payslip, not payroll.",
  },
  {
    href: `${NETHERLANDS_BASE}/taxes/tools/30-ruling-calculator/`,
    title: "30% ruling calculator",
    description: "Separate tool for facility norms — not a payslip reader.",
  },
  {
    href: `${NETHERLANDS_BASE}/taxes/net-salary-netherlands/`,
    title: "Net salary in the Netherlands",
    description: "Editorial context once you know what your payslip shows.",
  },
  {
    href: `${NETHERLANDS_BASE}/taxes/`,
    title: "Dutch taxes hub",
    description: "Broader filing and withholding orientation.",
  },
  {
    href: `${NETHERLANDS_BASE}/taxes/how-taxes-work-netherlands/`,
    title: "How Dutch taxes work",
    description: "Payroll withholding vs annual filing — useful once you can read your payslip lines.",
  },
  {
    href: `${NETHERLANDS_BASE}/open-bank-account-netherlands/`,
    title: "Open a bank account",
    description: "Where salary deposits usually land — setup alongside payroll timing.",
  },
  {
    href: `${NETHERLANDS_BASE}/services/banks/`,
    title: "Compare banks for salary deposits",
    description: "Directory-style listings; verify products directly with providers.",
  },
] as const;

export const HERO_BULLETS = [
  "Paste text from your PDF, employer portal, or payroll export",
  "Or upload a text-based PDF (digitally generated text layer only — no OCR)",
  "See likely meanings for bruto, netto, loonheffing, vakantiegeld, heffingsloon, Loon ZVW, pension, and 30% ruling–related lines when present",
];

export const FAQ_ITEMS = [
  {
    id: "what-is-payslip",
    question: "What is a Dutch payslip (loonstrook)?",
    answer:
      "A payslip is the periodic statement your employer issues showing gross pay, withholdings, employer-side items, and net payout. Layouts differ by payroll software; labels are often Dutch even for international employers.",
  },
  {
    id: "what-can-read",
    question: "What can this tool read?",
    answer:
      "Pasted plain text and text extracted from digitally generated PDFs (a real text layer). It maps common Dutch payroll abbreviations to explanations and, when the layout shows two money columns, tries to separate this period from year-to-date. It does not read photos, scans, or image-only PDFs.",
  },
  {
    id: "loonheffing",
    question: "What does loonheffing mean?",
    answer:
      "It usually refers to payroll withholding for wage tax and related components remitted by your employer. Your annual income tax position can still differ after the tax return.",
  },
  {
    id: "netto-takehome",
    question: "Is netto loon my take-home pay?",
    answer:
      "Usually it is close to what is paid to your bank for that period, but you should still check for separate corrections, clawbacks, or benefits-in-kind that do not flow through the same line.",
  },
  {
    id: "gross-vs-taxable",
    question: "Why is my gross salary different from taxable salary?",
    answer:
      "Taxable wage in payroll can exclude certain allowances, apply corrections, or reflect scheme-specific rules. Gross contract salary and belastbaar loon are related but not always identical.",
  },
  {
    id: "vakantiegeld",
    question: "What is vakantiegeld?",
    answer:
      "Holiday allowance is often around 8% of salary. Some employers accrue monthly and pay in spring; others spread payments. Your contract states how it is built up.",
  },
  {
    id: "pension-deduction",
    question: "Why does my payslip show pension deductions?",
    answer:
      "If you participate in a pension scheme, employee contributions often appear as deductions. Employer contributions may be shown separately for transparency.",
  },
  {
    id: "heffingsloon",
    question: "What is heffingsloon?",
    answer:
      "It is a taxable wage base used inside payroll calculations. It may differ from your bruto contract salary because some components are included or excluded by payroll rules and employer setup.",
  },
  {
    id: "30-ruling-lines",
    question: "Can this show 30% ruling lines on my payslip?",
    answer:
      "When your pasted or PDF text includes typical correction or reimbursement labels (for example lines mentioning 30% TB/BT or vrijgestelde vergoeding), we surface them as ruling-related signals. That is payroll coding visibility only — it does not prove legal eligibility for the facility. Use the 30% ruling calculator for norms and confirm with your employer or adviser.",
  },
  {
    id: "period-vs-ytd",
    question: "Why do some values show “this period” and “year to date”?",
    answer:
      "Many Dutch payslip rows show two money columns: the current pay period and the cumulative year-to-date total. When we detect two amounts on a matched line, we show them separately. If only one number appears, we label it as a single detected amount and do not invent a YTD figure.",
  },
  {
    id: "unresolved-lines",
    question: "Why might some lines stay unresolved?",
    answer:
      "Employers use different payroll vendors, abbreviations, and column layouts. Lines without recognizable labels, header noise, or free-text notes may not map to our dictionary. We group those honestly rather than guessing.",
  },
  {
    id: "payroll-advice",
    question: "Is this payroll or tax advice?",
    answer:
      "No. ExpatCopilot provides educational interpretation support to help you read wording — not payroll processing, final tax calculations, or legal opinions. Your employer and qualified professionals are authoritative.",
  },
  {
    id: "scanned-pdf",
    question: "Can this tool read scanned PDFs?",
    answer:
      "No. This free version only uses embedded text from digitally generated PDFs. Scanned or image-only PDFs need manual copy-paste if your PDF viewer or portal provides selectable text.",
  },
  {
    id: "storage",
    question: "Does this tool store my payslip?",
    answer:
      "No database storage in this version: the server reads your upload or text for the current request and returns a JSON result. Do not use on shared devices if you are concerned about local browser history.",
  },
];

export const OFFICIAL_SOURCES = [
  { label: "Belastingdienst — individuals", href: "https://www.belastingdienst.nl/wps/wcm/connect/en/individuals/content/income-tax" },
  { label: "Business.gov.nl — Payroll taxes", href: "https://business.gov.nl/regulations/payroll-taxes/" },
  { label: "Government.nl — Income tax", href: "https://www.government.nl/topics/income-tax" },
  { label: "Rijksoverheid.nl (English)", href: "https://www.rijksoverheid.nl/english" },
  { label: "SVB — AOW context", href: "https://www.svb.nl/en/aow-pension" },
];

export const HOW_IT_WORKS_SECTIONS: ToolExplanatorySection[] = [
  {
    id: "step-1",
    title: "Add your payslip text",
    body: [
      "Copy text from a PDF reader or employer portal, or upload a text-based PDF. We normalize spacing and read line by line — no OCR and no cloud document services.",
    ],
  },
  {
    id: "step-2",
    title: "Check extraction quality",
    body: [
      "You will see whether extraction looks good, partial, or low-confidence. Image-only PDFs often fail here — paste manually when you can.",
    ],
  },
  {
    id: "step-3",
    title: "Review decoded lines",
    body: [
      "We map common Dutch payroll labels to plain-language explanations. Ambiguous or missing lines are called out — we do not invent amounts.",
    ],
  },
  {
    id: "step-4",
    title: "Confirm with payroll",
    body: [
      "Use output for orientation only. Employers and payroll providers are authoritative on coding, schemes, and year-to-date totals.",
    ],
  },
];

export const WHAT_CAN_CANNOT = {
  can: [
    "Explain common Dutch and English payslip labels used on Netherlands payroll exports",
    "Highlight uncertainty when lines are ambiguous or columns are unclear",
    "Extract text from many digitally generated PDFs (Dutch decimals, many US-style exports)",
    "Separate period vs year-to-date when two or more amounts appear on a recognized row",
    "Flag possible 30% ruling–related lines when typical Dutch or English wording appears",
  ],
  cannot: [
    "Replace payroll, tax, or legal advice",
    "Read scanned or photo PDFs (no OCR)",
    "Store payslips or tie results to an account",
  ],
};
