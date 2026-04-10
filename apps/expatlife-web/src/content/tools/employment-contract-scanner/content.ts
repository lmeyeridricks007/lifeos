export const NL_BASE = "/netherlands";

export const CONTRACT_SCANNER_CANONICAL = `${NL_BASE}/work/tools/employment-contract-risk-scanner/`;

export const CONTRACT_SCANNER_TOC = [
  { id: "contract-scanner-at-a-glance", label: "At a glance" },
  { id: "before-you-start", label: "Before you start" },
  { id: "tool-inputs", label: "Scanner" },
  { id: "tool-results", label: "Results summary" },
  { id: "contract-scanner-key-risks", label: "Key risks" },
  { id: "contract-scanner-clauses", label: "Clause findings" },
  { id: "contract-scanner-questions", label: "Questions for HR" },
  { id: "contract-scanner-missing", label: "Missing / unclear" },
  { id: "contract-scanner-glossary", label: "Dutch terms" },
  { id: "contract-scanner-examples", label: "Example scenarios" },
  { id: "recommended-services", label: "Recommended services" },
  { id: "how-the-tool-works", label: "How this scanner works" },
  { id: "faq", label: "FAQ" },
  { id: "official-sources", label: "Official sources" },
  { id: "related-guides", label: "Related guides" },
] as const;

export const CONTRACT_SCANNER_QUICK_LINKS = [
  { label: "Start scanner", href: "#tool-inputs" },
  { label: "Results (after scan)", href: "#tool-results" },
  { label: "Questions for HR", href: "#contract-scanner-questions" },
  { label: "Export summary", href: "#contract-scanner-export" },
  { label: "Privacy & PDF limits", href: "#privacy-session" },
] as const;

export const CONTRACT_SCANNER_RELATED_TOOLS = [
  { href: `${NL_BASE}/taxes/tools/dutch-salary-net-calculator/`, label: "Dutch salary net calculator" },
  { href: `${NL_BASE}/taxes/tools/30-ruling-calculator/`, label: "30% ruling calculator" },
  { href: `${NL_BASE}/work/tools/payslip-decoder/`, label: "Payslip decoder" },
  { href: `${NL_BASE}/taxes/tools/double-tax-awareness-tool/`, label: "Double tax awareness tool" },
  { href: `${NL_BASE}/housing/tools/rent-affordability-calculator/`, label: "Rent affordability calculator" },
] as const;

export const CONTRACT_SCANNER_AT_A_GLANCE = [
  {
    title: "What this tool is for",
    description:
      "A planning scan for expats reviewing Dutch employment contracts or offer letters before signing — not a legal verdict on clauses.",
  },
  {
    title: "What it can do",
    description:
      "Surface pattern-based flags, heuristic “missing / unclear” topics, expat-relevant cues (permits, 30% wording, relocation repayment), and concrete questions to ask HR — from the text you paste or extract.",
  },
  {
    title: "What it cannot do",
    description:
      "It does not judge validity or enforceability, read scanned PDFs without a text layer (no OCR here), see annexes you did not paste, or replace advice from an employment lawyer or official sources.",
  },
  {
    title: "Best for",
    description: "Anyone who wants a structured first pass, a checklist of gaps, and language to use with HR before signing.",
  },
] as const;

export const CONTRACT_SCANNER_RELATED_GUIDES = [
  {
    href: `${NL_BASE}/moving/working-in-the-netherlands/`,
    title: "Working in the Netherlands",
    description: "Move-focused bridge from offers and contract clauses to salary, permits, payroll, and relocation setup.",
  },
  {
    href: `${NL_BASE}/moving/twv-work-permit/`,
    title: "TWV work permit",
    description: "Helpful when contract timing, employer action, and work authorization route need clarifying together.",
  },
  {
    href: `${NL_BASE}/work/employment-contract-netherlands/`,
    title: "Employment contract in the Netherlands",
    description: "Context on typical contract structure and what expats often negotiate.",
  },
  {
    href: `${NL_BASE}/work/contracts/checklist/`,
    title: "Contract checklist",
    description: "Practical checklist themes to complement this scanner.",
  },
  {
    href: `${NL_BASE}/work/`,
    title: "Work in the Netherlands",
    description: "Broader work hub for payroll, benefits, and contract topics.",
  },
] as const;

export const CONTRACT_SCANNER_OFFICIAL_SOURCES = [
  {
    label: "Business.gov.nl — employment contracts",
    href: "https://business.gov.nl/regulation/employment-contracts/",
    note: "General rules on contract types and employer obligations (Dutch business portal).",
  },
  {
    label: "Government.nl — working in the Netherlands",
    href: "https://www.government.nl/topics/working-in-the-netherlands",
    note: "High-level overview of work, contracts, and permits.",
  },
  {
    label: "Rijksoverheid — arbeidsvoorwaarden (NL)",
    href: "https://www.rijksoverheid.nl/onderwerpen/arbeidsvoorwaarden",
    note: "Government hub on pay, leave, and working conditions (general reference, not case advice).",
  },
  {
    label: "Belastingdienst — 30% facility",
    href: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/business/payroll_taxes/30_percent_facility/",
    note: "Authoritative conditions for the payroll tax facility — contract wording alone does not prove eligibility.",
  },
  {
    label: "IND — Highly skilled migrant scheme",
    href: "https://ind.nl/en/work/working_in_the_netherlands/Pages/Highly-skilled-migrant.aspx",
    note: "Official immigration rules when your stay depends on employer sponsorship.",
  },
] as const;

export const CONTRACT_SCANNER_FAQ = [
  {
    id: "legal-advice",
    question: "Is this legal advice?",
    answer:
      "No. ExpatCopilot provides planning and awareness support only. It does not determine whether a clause is valid, enforceable, or fair. For binding advice, consult a qualified employment lawyer.",
  },
  {
    id: "accuracy",
    question: "How accurate is the scan?",
    answer:
      "It only reacts to wording present in the text you provide. It can miss topics if they use unusual phrasing, appear only in an annex you did not paste, or live in a handbook referenced but not attached. Treat flags as prompts to verify, not conclusions.",
  },
  {
    id: "scanned-pdf",
    question: "Can this tool read scanned PDFs?",
    answer:
      "Not in this free version. We extract text from PDFs that already contain a selectable text layer. Image-only scans look like very little text or garbage characters — use “Paste text” instead, or export a text-based PDF from your employer’s portal. OCR may be offered in a future paid tier.",
  },
  {
    id: "storage",
    question: "Does this tool store my contract?",
    answer:
      "We do not save your contract to a database for this tool. PDF uploads are read on the server for the extract request and discarded afterward; pattern matching runs in your browser from the extracted or pasted text. Clear the page or close the tab when you are done on a shared device. Normal website analytics may still run (see site privacy policy).",
  },
  {
    id: "what-to-check",
    question: "What should I check in a Dutch employment contract?",
    answer:
      "Usually: contract type and dates, salary basis and holiday allowance, pension, probation and notice, overtime, leave, non-compete or client restrictions, confidentiality and IP, handbook references, relocation or signing-bonus repayment, and any visa or 30% ruling wording.",
  },
  {
    id: "non-compete-normal",
    question: "Are non-compete clauses normal in the Netherlands?",
    answer:
      "They appear in some roles but scope, duration, geography, and role definition matter. This tool flags wording that looks broad or underspecified so you can confirm details — not whether a court would uphold it.",
  },
  {
    id: "30-in-contract",
    question: "Does the 30% ruling need to be written in the contract?",
    answer:
      "Employers often mention it, but eligibility depends on tax rules and timing, not wording alone. Check whether support is described as discretionary or committed, and align with official Belastingdienst guidance.",
  },
  {
    id: "handbook",
    question: "What if the contract references a handbook?",
    answer:
      "Ask for the handbook and relevant annexes before signing. Material rules may live outside the main contract PDF.",
  },
  {
    id: "offer-letter-only",
    question: "What if I only have an offer letter?",
    answer:
      "Paste the offer text — the same heuristics apply, but expect more “missing / unclear” flags until you receive the full contract and policies.",
  },
  {
    id: "lawyer",
    question: "Should I ask a lawyer to review my contract?",
    answer:
      "Consider it when non-compete, repayment, immigration, or broad policy incorporation clauses appear, or when core pay and notice terms are unclear.",
  },
  {
    id: "risk-labels",
    question: "What do the risk labels mean?",
    answer:
      "They describe practical planning concern from pattern matching, not court outcomes. “Review before signing” means the wording deserves extra scrutiny (for example repayment or very broad restrictions). “Worth confirming” is routine follow-up with HR. “Common / standard” means the phrase is often seen — you should still confirm your situation.",
  },
  {
    id: "cao-handbook",
    question: "The scanner did not flag my issue — could it still be in the CAO or handbook?",
    answer:
      "Yes. Many Dutch roles are governed by a CAO or internal policies that are not repeated in your individual contract. If the contract references a handbook, CAO, or intranet rules, request those documents (dated version) before you rely on the scan.",
  },
] as const;

export const CONTRACT_TERMS_GLOSSARY = [
  {
    term: "Proeftijd",
    explainer: "Probation period — often shorter notice rules apply until it ends.",
    expatNote: "Double-check length (commonly one or two months) and how it interacts with your notice expectations.",
  },
  {
    term: "Opzegtermijn",
    explainer: "Notice period before employment ends.",
    expatNote: "Employee and employer notice can differ; CAO may add rules.",
  },
  {
    term: "Concurrentiebeding",
    explainer: "Non-compete — limits working for competitors or in a sector after you leave.",
    expatNote: "Geography, duration, and scope should be explicit; impacts next job planning.",
  },
  {
    term: "Relatiebeding",
    explainer: "Non-solicitation of clients or relations.",
    expatNote: "Important in sales or consulting roles; clarify who and what is covered.",
  },
  {
    term: "Vakantiegeld",
    explainer: "Holiday allowance — often ~8% of gross salary.",
    expatNote: "Confirm whether your quoted salary is inclusive or exclusive and payout timing.",
  },
  {
    term: "Pensioenpremie",
    explainer: "Pension contribution — employee and employer shares.",
    expatNote: "Affects total rewards; ask for scheme name and waiting periods.",
  },
  {
    term: "CAO",
    explainer: "Collective labour agreement that may govern pay, leave, and notice.",
    expatNote: "Many details may not be repeated in your individual contract.",
  },
  {
    term: "30%-regeling",
    explainer: "Tax facility for eligible incoming expats — payroll tax benefit when conditions are met.",
    expatNote: "Contract mention does not guarantee approval; timing and salary thresholds matter.",
  },
  {
    term: "Nevenwerkzaamheden",
    explainer: "Side work — employers may require consent for other paid activities.",
    expatNote: "Relevant if you freelance, advise, or build a side project.",
  },
  {
    term: "Boetebeding",
    explainer: "Penalty clause — fixed sums or damages for certain breaches.",
    expatNote: "Understand triggers and whether obligations are mutual.",
  },
] as const;

export const CONTRACT_SCANNER_SCENARIO_CARDS = [
  {
    title: "Fixed-term with probation, no bonus",
    body: "Flags: end date and renewal path, shorter notice in probation, confirm holiday allowance and pension even when bonus is absent.",
  },
  {
    title: "Permanent contract with broad non-compete",
    body: "Flags: unclear geography or duration, ask for carve-outs and whether compensation applies during restriction.",
  },
  {
    title: "Expat package with relocation repayment + 30% wording",
    body: "Flags: repayment triggers and proration, whether 30% support is best-efforts vs committed, visa dependency if role changes.",
  },
  {
    title: "Offer letter missing pension / handbook",
    body: "Flags: missing-information section fills up; request annexes and CAO summary before signing.",
  },
  {
    title: "Remote / hybrid clause",
    body: "Flags: minimum office days, location changes, and how expenses or cross-border work are handled.",
  },
] as const;
