/**
 * Health insurance category page data for /netherlands/services/health-insurance/.
 * Official facts from Government.nl and Zorginstituut Nederland; no invented rules.
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { healthInsuranceProviders } from "@/src/data/services/providers/health-insurance";
import { internationalHealthInsuranceProviders } from "@/src/data/services/providers/international-health-insurance";
import { healthInsuranceOfficialSources } from "@/src/data/services/official-sources/health-insurance";

/* Hero image prompt for future asset/CMS:
   "Cinematic editorial image for a Dutch health insurance category page for expats, showing organized relocation planning materials, policy comparison notes, passport, healthcare documents, smartphone or laptop with insurance comparison interface, subtle Dutch setting, natural daylight, premium magazine aesthetic, wide 16:9 banner."
*/

export const healthInsuranceCategoryPage: ServiceCategoryPageData = {
  slug: "health-insurance",
  parentSlug: "insurance",
  country: "netherlands",
  path: "/netherlands/services/health-insurance/",

  seo: {
    title: "Health Insurance for Expats in the Netherlands: Compare Providers, Costs & Rules",
    description:
      "Learn how Dutch health insurance works for expats, when it is required, what basic insurance covers, and how to compare providers, costs, and extras.",
    keywords: [
      "health insurance for expats netherlands",
      "dutch health insurance expats",
      "best health insurance netherlands expat",
      "compare health insurance netherlands expat",
      "mandatory health insurance netherlands expat",
      "netherlands health insurance providers expats",
      "dutch basic health insurance",
      "eigen risico netherlands",
      "expat health insurance netherlands",
      "international health insurance netherlands expat",
      "health insurance residence permit netherlands",
      "health insurance students netherlands",
      "health insurance after moving to netherlands",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Health Insurance for Expats in the Netherlands",
    subtitle:
      "Understand when Dutch health insurance is required, what basic insurance covers, and how to compare providers, costs, excess, and extras.",
    image: {
      src: "/images/heroes/health-insurance-category-hero.png",
      alt: "A wide, cinematic editorial image showing a desk laden with health insurance documents, a passport, and a tablet displaying an insurance comparison interface. In the blurred background, two people interact at a modern office reception, with subtle Dutch city elements visible through a large window, conveying a sense of organized expat relocation planning.",
      imagePrompt:
        "Cinematic editorial image for a Dutch health insurance category page for expats, showing organized relocation planning materials, policy comparison notes, passport, healthcare documents, smartphone or laptop with insurance comparison interface, subtle Dutch setting, natural daylight, premium magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "Read Health Insurance Guide", href: "/netherlands/health-insurance-netherlands/", primary: true },
      { label: "Compare Health Insurance Providers", href: "#compare-providers", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "when-required", label: "When You Need Dutch Health Insurance" },
    { id: "what-covers", label: "What Basic Insurance Covers" },
    { id: "comparing-providers", label: "Comparing Providers" },
    { id: "compare-providers", label: "Compare Providers" },
    { id: "international-health", label: "International Health Insurance" },
    { id: "costs-excess", label: "Costs & Excess" },
    { id: "who-needs-help", label: "Who Usually Needs Extra Help" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Dutch Health Insurance Works for Expats",
    paragraphs: [
      "This page helps you understand the health insurance category in the Netherlands. Standard (basic) health insurance is mandatory for everyone who lives or works in the Netherlands. The government defines what the basic package covers; all Dutch insurers offer the same core coverage. Differences between insurers are usually in price, policy type, contracted care, customer service, supplementary packages, and digital experience—not in the government-defined basic package.",
      "Our health insurance guide and provider comparison pages are for information and decision support. Always confirm details, premiums, and coverage directly with the insurer.",
    ],
    links: [
      { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Dutch cities overview", href: "/netherlands/cities/" },
    ],
  },

  requirementCards: [
    {
      id: "moving-for-work",
      title: "Moving for work",
      description: "If you come to live or work in the Netherlands, you usually need Dutch health insurance as quickly as possible and no later than 4 months after arrival. This applies even if you already have medical insurance in another country.",
      whoItAppliesTo: "Employees, self-employed, and others who live or work in the Netherlands",
      link: { label: "Government.nl – When do I need health insurance?", href: "https://www.government.nl/topics/health-insurance/question-and-answer/when-do-i-need-to-take-out-health-insurance-if-i-come-to-live-in-the-netherlands" },
    },
    {
      id: "residence-permit",
      title: "Moving with a residence permit",
      description: "If you have a residence permit, you must take out Dutch health insurance within 4 months of the permit coming into force. The insurance must be effective from the date the residence permit comes into force. Premium may need to be paid retroactively if the policy starts retroactively.",
      whoItAppliesTo: "Anyone with a Dutch residence permit",
      link: { label: "Government.nl – Health insurance and residence permit", href: "https://www.government.nl/topics/health-insurance/health-insurance-and-residence-permit" },
    },
    {
      id: "student-only",
      title: "Student – study only",
      description: "International students who only study may have different insurance situations depending on their nationality and length of stay. Official student guidance applies.",
      whoItAppliesTo: "Students who do not work",
      link: { label: "Study in NL – Healthcare insurance", href: "https://www.studyinnl.org/plan-your-stay/healthcare-insurance" },
    },
    {
      id: "student-work",
      title: "Student + part-time work",
      description: "If you study and also work in the Netherlands, Dutch health insurance may be compulsory. Check official student and employment guidance.",
      whoItAppliesTo: "Students who work part-time",
      link: { label: "Study in NL – Healthcare insurance", href: "https://www.studyinnl.org/plan-your-stay/healthcare-insurance" },
    },
    {
      id: "ehic-temporary",
      title: "Temporary stay with EHIC",
      description: "The European Health Insurance Card (EHIC) covers essential medical care during a temporary stay in the EU. It does not replace compulsory Dutch health insurance if you live or work in the Netherlands long term.",
      whoItAppliesTo: "Short-term visitors; not long-term residents or workers",
      link: { label: "Netherlands Worldwide – EHIC", href: "https://www.netherlandsworldwide.nl/health-insurance-abroad/ehic" },
    },
    {
      id: "international-insurance",
      title: "International health insurance",
      description: "International (expat) health insurance can cover you before you move, in addition to Dutch insurance for travel and treatment abroad, or in some employer packages. It does not replace mandatory Dutch basic insurance if you live or work in the Netherlands.",
      whoItAppliesTo: "Expats before relocation; those with employer international plans; people wanting global cover alongside Dutch insurance",
      link: { label: "Government.nl – When do I need health insurance?", href: "https://www.government.nl/topics/health-insurance/question-and-answer/when-do-i-need-to-take-out-health-insurance-if-i-come-to-live-in-the-netherlands" },
    },
    {
      id: "unsure",
      title: "Unsure or special case",
      description: "If your situation is unclear (e.g. cross-border worker, specific visa, short contract), check the official Q&As and consider asking the insurer or a qualified advisor.",
      whoItAppliesTo: "Cross-border, short-term, or exceptional situations",
      link: { label: "Government.nl – More Q&As about health insurance", href: "https://www.government.nl/topics/health-insurance/question-and-answer/more-qas-about-health-insurance-in-the-netherlands" },
    },
  ],

  coverageCards: [
    {
      id: "basic",
      title: "Basic insurance",
      description: "The standard package is government-defined and the same for all insurers. It covers GP visits, hospital care, prescription medicine, and other care set out in the Health Insurance Act. All Dutch insurers must offer this same basic package.",
    },
    {
      id: "additional",
      title: "Additional insurance",
      description: "Supplementary insurance (e.g. dental, physiotherapy, glasses) is optional. Coverage and premiums vary by insurer and package.",
    },
    {
      id: "excess",
      title: "Excess (eigen risico)",
      description: "The mandatory excess is €385 per year for most care in the standard package. You pay this amount first before the insurer pays. Some policies allow you to choose a higher voluntary excess in exchange for a lower premium.",
    },
    {
      id: "copay",
      title: "Co-payments (eigen bijdrage)",
      description: "For some care or products, you pay a fixed contribution (eigen bijdrage). This is separate from the excess. Amounts are set by law or policy.",
    },
  ],

  comparisonFactors: [
    { id: "premium", title: "Monthly premium", description: "Premiums vary by insurer and policy type. Compare like-for-like (e.g. same excess choice) where possible." },
    { id: "excess", title: "Excess / deductible", description: "The mandatory excess is €385. Some insurers offer a higher voluntary excess for a lower premium." },
    { id: "policy-type", title: "Policy type / contracted care", description: "Restricted (natura) vs reimbursement (restitutie) or a combination. Affects which care providers you can use and how you claim." },
    { id: "supplementary", title: "Supplementary insurance", description: "Optional add-ons (dental, physio, etc.). Compare packages and limits if you need extras." },
    { id: "english", title: "English-language support", description: "Not all insurers offer full English. Check the provider’s website or contact them if this matters to you." },
    { id: "digital", title: "Digital experience", description: "App, online portal, and self-service for claims and policy changes can make day-to-day use easier." },
    { id: "claims", title: "Reimbursement and claims", description: "How and how quickly you get reimbursed depends on policy type and insurer. Worth checking before you choose." },
    { id: "situation", title: "Your situation", description: "The right provider depends on your situation, risk tolerance, preferred providers, and whether you want additional cover. There is no single “best” provider for everyone." },
  ],

  providers: healthInsuranceProviders,

  internationalHealthBlock: {
    heading: "International Health Insurance for Expats",
    paragraphs: [
      "International health insurance (expat or global health insurance) is designed for people who live, work, or travel across countries. It is not the same as Dutch basic health insurance. If you live or work in the Netherlands, you are still required to take out Dutch basic insurance; international plans may sit alongside it—for example for treatment abroad, pre-departure cover, or employer-sponsored packages.",
      "International insurance can be relevant if you are not yet resident in the Netherlands and need cover before you move, if your employer offers an international plan as part of your assignment, or if you want additional worldwide cover in addition to your Dutch policy. Always check whether an international policy is accepted as meeting Dutch legal requirements; in most cases it does not replace the compulsory Dutch basic package once you are resident.",
      "Below are examples of international health insurance providers that expats often consider. We do not rank or endorse; suitability depends on your situation, destination, and whether you also need Dutch basic insurance.",
    ],
    linkLabel: "Government.nl – When do I need health insurance?",
    linkHref: "https://www.government.nl/topics/health-insurance/question-and-answer/when-do-i-need-to-take-out-health-insurance-if-i-come-to-live-in-the-netherlands",
    providers: internationalHealthInsuranceProviders,
  },

  comparisonSection: {
    title: "Compare health insurance providers",
    intro: "Below: what each insurer does, typical costs, pros and cons, and who should consider them. Always confirm current premiums and terms with the provider.",
  },

  costCards: [
    {
      id: "premium",
      title: "Monthly premium",
      value: "~€130–165/mo (basic package)",
      note: "Typical range for basic (mandatory) package; varies by insurer, policy type, and excess choice.",
      disclaimer: "Check current quote with the insurer.",
    },
    {
      id: "excess",
      title: "Mandatory excess (eigen risico)",
      value: "€385 per year",
      note: "Official national rule for most care in the standard package.",
      disclaimer: "Government.nl",
    },
    {
      id: "additional",
      title: "Additional insurance",
      value: "~€10–50+/mo (optional)",
      note: "Supplementary cover (dental, physio, glasses, etc.) adds cost depending on the package level.",
    },
    {
      id: "zorgtoeslag",
      title: "Healthcare allowance (zorgtoeslag)",
      value: "Up to ~€154/mo (income-dependent)",
      note: "If your income is below the threshold, you may be eligible for a healthcare allowance to offset part of the premium. Amount depends on income and situation.",
      link: { label: "Zorgtoeslag (planned guide)", href: "/netherlands/zorgtoeslag-netherlands/" },
    },
  ],

  whoNeedsExtraHelp: [
    { id: "new-arrivals", title: "New arrivals with a residence permit", description: "You must take out insurance from the date your permit starts. Getting a policy and understanding excess and claims in the first months can be confusing; our guide and official sources help." },
    { id: "students", title: "Students unsure whether Dutch insurance applies", description: "Rules depend on whether you only study or also work. Use official student guidance (e.g. Study in NL) and confirm with your institution or insurer." },
    { id: "families", title: "Families comparing child/family setups", description: "Children are often included in a parent’s policy; family packages and supplementary options vary. Compare with your household in mind." },
    { id: "high-usage", title: "People with high healthcare usage expectations", description: "If you expect regular care, policy type (restitution vs natura), contracted providers, and claims process may matter more than the lowest premium." },
    { id: "english", title: "People who want English-language support", description: "Not all insurers offer full English. Check provider websites and contact them before committing." },
    { id: "supplementary", title: "People comparing supplementary packages", description: "Dental, physiotherapy, glasses, and other extras vary by insurer. Compare limits and exclusions if you need them." },
    { id: "international", title: "Expats considering international health insurance", description: "International (expat) insurance can cover you before you move or alongside Dutch insurance for travel. It does not replace mandatory Dutch basic insurance once you live or work in the Netherlands. See the International Health Insurance section for providers and when it applies." },
  ],

  scenarios: [
    {
      id: "hsm",
      title: "Highly skilled migrant starting work in the Netherlands",
      summary: "You have a residence permit and will work. You need Dutch basic health insurance from the start of your permit.",
      whatToConfirm: ["Start date of residence permit", "Whether your employer offers any group or advice"],
      whatToCompare: ["Monthly premium", "Policy type (natura/restitutie)", "English support if needed", "Supplementary if you want dental/physio"],
      commonMistakes: ["Delaying beyond 4 months", "Assuming home-country insurance is enough"],
      links: [
        { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
        { label: "After arriving", href: "/netherlands/after-arriving-netherlands/" },
      ],
    },
    {
      id: "eu-worker",
      title: "EU citizen relocating for work",
      summary: "You are an EU citizen moving to the Netherlands for work. Dutch health insurance is compulsory once you live or work here.",
      whatToConfirm: ["Date you start living or working in the Netherlands", "Whether EHIC covers you for a short transition (it does not replace compulsory insurance for residents)"],
      whatToCompare: ["Premium and excess", "Policy type", "Supplementary if needed"],
      commonMistakes: ["Relying on EHIC for long-term residence", "Missing the 4-month deadline"],
      links: [
        { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
        { label: "Government.nl – Health insurance", href: "https://www.government.nl/topics/health-insurance" },
      ],
    },
    {
      id: "student-only",
      title: "Student who only studies",
      summary: "You are an international student and do not work. Your insurance obligation may depend on nationality and length of stay.",
      whatToConfirm: ["Official student insurance rules (Study in NL, your institution)", "Whether your home insurance or a student policy is sufficient"],
      whatToCompare: ["Official guidance first", "Then any Dutch policy if required"],
      commonMistakes: ["Assuming you don’t need any insurance", "Missing deadlines if you start working"],
      links: [
        { label: "Study in NL – Healthcare insurance", href: "https://www.studyinnl.org/plan-your-stay/healthcare-insurance" },
      ],
    },
    {
      id: "student-work",
      title: "Student who studies and works",
      summary: "You study and have a part-time job. Dutch health insurance is often compulsory once you work.",
      whatToConfirm: ["Study in NL and government Q&As", "Whether your employer has a preferred insurer or advice"],
      whatToCompare: ["Basic premium", "Policy type", "Student-friendly options if any"],
      commonMistakes: ["Assuming student status alone exempts you once you work", "Missing the 4-month rule"],
      links: [
        { label: "Study in NL – Healthcare insurance", href: "https://www.studyinnl.org/plan-your-stay/healthcare-insurance" },
        { label: "Government.nl – When do I need health insurance?", href: "https://www.government.nl/topics/health-insurance/question-and-answer/when-do-i-need-to-take-out-health-insurance-if-i-come-to-live-in-the-netherlands" },
      ],
    },
    {
      id: "family",
      title: "Couple or family moving together",
      summary: "You are moving as a couple or family. Each adult needs their own basic insurance; children are often included in a parent’s policy.",
      whatToConfirm: ["Start date for each adult", "How children are covered under your chosen policy"],
      whatToCompare: ["Family or multi-person options", "Supplementary for dental/physio for the family", "Premium total for the household"],
      commonMistakes: ["Only one partner taking out insurance", "Not checking child inclusion rules"],
      links: [
        { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
      ],
    },
    {
      id: "premium-vs-convenience",
      title: "New resident choosing between lower premium vs broader convenience",
      summary: "You want to balance cost with ease of use, English support, or preferred care network.",
      whatToConfirm: ["Your expected healthcare use", "Whether you prefer natura (contracted) or restitution (free choice) for claiming"],
      whatToCompare: ["Premium vs excess choice", "Policy type", "English support", "App and claims process"],
      commonMistakes: ["Choosing only on price without checking policy type and support", "Ignoring excess and co-payments"],
      links: [
        { label: "Health insurance guide", href: "/netherlands/health-insurance-netherlands/" },
        { label: "Compare providers above", href: "#compare-providers" },
      ],
    },
  ],

  faqs: [
    { q: "Is Dutch health insurance mandatory for expats?", a: "Yes. Everyone who lives or works in the Netherlands is legally obliged to take out standard Dutch health insurance. This includes expats and international workers. You must do so as quickly as possible and no later than 4 months after you come to live or work in the Netherlands. Additional (supplementary) insurance is optional." },
    { q: "When do I need to arrange health insurance after moving?", a: "As soon as possible, and no later than 4 months after you arrive. If you have a residence permit, the insurance must generally be effective from the date the permit comes into force. Premium may be due retroactively if the policy starts from that date." },
    { q: "Do I still need Dutch insurance if I already have insurance abroad?", a: "Yes. Even if you have medical insurance in another country, you are still required to take out Dutch basic health insurance once you live or work in the Netherlands. Your foreign policy does not replace the compulsory Dutch one." },
    { q: "What is included in Dutch basic health insurance?", a: "The basic package is defined by the government and is the same for all insurers. It includes GP visits, hospital care, prescription medicine, and other care set out in the Health Insurance Act. The National Health Care Institute (Zorginstituut Nederland) explains the system in English." },
    { q: "What is eigen risico?", a: "Eigen risico is the mandatory excess. It is €385 per year for most care in the standard package. You pay this amount first before the insurer pays. Some insurers let you choose a higher voluntary excess in return for a lower premium. It is separate from co-payments (eigen bijdrage) for specific care or products." },
    { q: "Are all basic health insurance packages the same?", a: "Yes. All Dutch insurers must offer the same government-defined basic package. The core coverage is standardized. Differences are in premium, policy type (e.g. natura vs restitution), customer service, supplementary packages, and digital experience." },
    { q: "Why do premiums still differ if the basic package is standardized?", a: "Insurers set their own premiums and may offer different policy types (e.g. restricted network vs reimbursement), optional higher excess, and different levels of service. So the price and how you use the same basic cover can vary." },
    { q: "Do I need extra insurance for dental or physiotherapy?", a: "Basic insurance covers limited dental (e.g. up to age 18) and limited physio in some cases. For broader dental or physiotherapy, you need optional supplementary insurance. Coverage and cost vary by insurer and package." },
    { q: "Does EHIC replace Dutch insurance?", a: "No. The European Health Insurance Card (EHIC) covers essential medical care during a temporary stay in the EU. It does not replace compulsory Dutch health insurance if you live or work in the Netherlands long term." },
    { q: "What if I have a residence permit?", a: "You must take out Dutch health insurance within 4 months of the permit coming into force, and the policy must be effective from the date the permit comes into force. You may need to pay premium retroactively if the start date is backdated." },
    { q: "Do students need Dutch health insurance?", a: "It depends. International students who only study may have different rules (e.g. home insurance or a student policy may apply). If you also work, Dutch health insurance is usually compulsory. Check Study in NL and official government Q&As for your situation." },
    { q: "Which provider is best for expats?", a: "There is no single “best” provider. The right choice depends on your situation: premium, policy type, need for English support, preferred care network, supplementary needs, and how you prefer to manage claims. Compare options and confirm terms directly with insurers." },
    { q: "What is international health insurance and when do I need it?", a: "International (expat or global) health insurance covers you across countries and is often used before you move, for employer-sponsored assignees, or as a supplement to Dutch insurance for travel and treatment abroad. If you live or work in the Netherlands, you still need Dutch basic health insurance; an international policy alone does not usually fulfil that legal requirement. Use international insurance for pre-arrival cover, global travel, or alongside your Dutch policy as needed." },
    { q: "Can I use international health insurance instead of Dutch insurance?", a: "Generally no. If you are resident or working in the Netherlands, you must take out Dutch basic health insurance. International policies are not a substitute for this legal requirement. They can be used before you relocate, for treatment outside the Netherlands, or in addition to your Dutch policy. Check Government.nl and your insurer for your specific situation." },
  ],

  officialSources: healthInsuranceOfficialSources,

  relatedGuides: [
    {
      title: "Essential Guides",
      links: [
        { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      ],
    },
    {
      title: "Document Preparation",
      links: [
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Document translation", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
      ],
    },
    {
      title: "City Pages",
      links: [
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
      ],
    },
    {
      title: "Services Hub",
      links: [
        { label: "All services", href: "/netherlands/services/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Insurance overview", href: "/netherlands/services/insurance/" },
    { label: "Liability insurance", href: "/netherlands/services/insurance/#liability" },
    { label: "Home insurance", href: "/netherlands/services/insurance/#home" },
    { label: "Travel insurance", href: "/netherlands/services/insurance/#travel" },
  ],

  tools: [
    { label: "Moving Checklist", href: "/netherlands/moving/tools/moving-checklist/", description: "Personalized checklist for your move", status: "live" },
    { label: "Document Readiness Checker", href: "/netherlands/document-readiness-checker/", description: "Check which documents you need", status: "live" },
    { label: "Visa Timeline Estimator", href: "/netherlands/visa-timeline-estimator/", description: "Estimate visa processing and move timing", status: "live" },
    { label: "Visa Cost Calculator", href: "/netherlands/visa-cost-calculator/", description: "Estimate visa and move costs", status: "live" },
    { label: "Visa Comparison Tool", href: "/netherlands/visa/compare-visas/", description: "Compare visa routes", status: "live" },
  ],

  disclosure: [
    "This page is for information only and does not constitute medical, legal, tax, or insurance advice.",
    "Provider comparisons are editorial guidance. We do not recommend a specific insurer; suitability depends on your situation.",
    "Always verify premiums, terms, coverage, and deadlines directly with the insurer or an authorised advisor.",
    "Rules and amounts (e.g. excess, allowances) can change; check official sources for current information.",
  ],
};
