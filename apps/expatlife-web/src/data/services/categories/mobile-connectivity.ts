/**
 * Mobile & connectivity category page for /netherlands/services/mobile-connectivity/.
 * Provider list is sourced from companies-registry (single source with service pages and guides).
 */

import type { ServiceCategoryPageData } from "@/src/lib/service-category/types";
import { mobileConnectivityProviders } from "@/src/data/companies-registry";
import { mobileConnectivityOfficialSources } from "@/src/data/services/official-sources/mobile-connectivity";

/* Hero image prompt for future asset/CMS:
   "Cinematic editorial image for Dutch mobile and connectivity for expats: smartphone with SIM/eSIM setup, passport and arrival documents on a desk, subtle Dutch urban window light, premium magazine aesthetic, wide 16:9 banner."
*/

export const mobileConnectivityCategoryPage: ServiceCategoryPageData = {
  slug: "mobile-connectivity",
  parentSlug: "services",
  country: "netherlands",
  path: "/netherlands/services/mobile-connectivity/",

  seo: {
    title: "Mobile & Connectivity for Expats in the Netherlands: SIM, Data & Local Numbers",
    description:
      "Why a Dutch mobile number matters for banking, DigiD, and admin; how to compare prepaid and SIM-only plans; and curated mobile providers expats often use.",
    keywords: [
      "dutch sim card expat",
      "netherlands mobile plan expat",
      "prepaid sim netherlands",
      "dutch phone number expat",
      "mobile connectivity netherlands",
      "sim only netherlands expat",
      "esim netherlands",
      "lebara netherlands",
      "simyo netherlands",
      "kpn mobile netherlands",
      "vodafone netherlands expat",
      "odido netherlands",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Mobile & Connectivity for Expats in the Netherlands",
    subtitle:
      "Get a local number and data for OTPs, DigiD, banking, housing, and day-to-day admin. Compare SIM-only and prepaid options and what to check before you choose.",
    image: {
      src: "/images/heroes/netherlands-expat-services-planning-hero.png",
      alt: "An expat planning desk with a laptop, smartphone showing connectivity setup, notebook, and passport, with a soft-focus Dutch city view through a window.",
      imagePrompt:
        "Cinematic editorial image for Dutch mobile and connectivity for expats: smartphone with SIM/eSIM setup, passport and arrival documents on a desk, subtle Dutch urban window light, premium magazine aesthetic, wide 16:9 banner.",
    },
    ctas: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/", primary: true },
      { label: "Compare mobile providers", href: "#compare-providers", primary: false },
    ],
  },

  tocItems: [
    { id: "overview", label: "Overview" },
    { id: "why-local-number", label: "Why a Dutch Number Matters" },
    { id: "coverage-types", label: "Mobile, eSIM & Home Internet" },
    { id: "comparison-factors", label: "What to Compare" },
    { id: "compare-providers", label: "Compare Providers" },
    { id: "typical-costs", label: "Typical Costs" },
    { id: "home-internet", label: "Home Internet vs Mobile" },
    { id: "who-needs-help", label: "Who Often Needs Extra Help" },
    { id: "scenarios", label: "Example Scenarios" },
    { id: "related-guides", label: "Related guides" },
    { id: "tools", label: "Tools" },
    { id: "faq", label: "FAQs" },
    { id: "official-sources", label: "Official Sources" },
  ],

  intro: {
    heading: "How Mobile Setup Fits Into Your First Weeks in the Netherlands",
    paragraphs: [
      "Many expats arrange a Dutch mobile number in the first days after arrival. Banks, insurers, municipalities, and DigiD often rely on SMS for one-time codes and notifications. A local number can reduce friction when you open accounts, register your address, and sign up for services.",
      "This page compares common SIM-only and prepaid brands expats use. Home broadband (fiber, cable, DSL) is a separate decision—compare fixed-line providers when you know your address and contract length. Always confirm coverage, plan rules, and identification requirements on the provider’s site.",
    ],
    links: [
      { label: "First 30 days in the Netherlands", href: "/netherlands/first-30-days-netherlands/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "All services hub", href: "/netherlands/services/" },
      { label: "Arrival planner", href: "/netherlands/moving/tools/arrival-planner/" },
    ],
  },

  requirementCards: [
    {
      id: "otp-banking",
      title: "OTP and verification texts",
      description:
        "Many Dutch services send login or payment codes by SMS. Check whether your existing foreign number is accepted; if not, a Dutch SIM is often the simplest fix.",
      whoItAppliesTo: "Anyone setting up banking, DigiD, or insurer portals",
      link: { label: "DigiD – apply", href: "https://www.digid.nl/en/apply-and-activate/apply-digid" },
    },
    {
      id: "prepaid-first",
      title: "Prepaid or short contract first",
      description:
        "If your stay length or housing is still uncertain, prepaid or flexible monthly SIM-only plans can avoid long lock-ins until you know your needs.",
      whoItAppliesTo: "New arrivals in temporary housing or on probation periods",
    },
    {
      id: "id-check",
      title: "ID and delivery",
      description:
        "Providers may ask for ID and a delivery or pick-up address for a physical SIM. eSIM may be available—check the provider’s current options.",
      whoItAppliesTo: "Everyone ordering a new subscription or SIM",
    },
    {
      id: "eu-roaming",
      title: "EU roaming",
      description:
        "EU roaming rules limit surcharges for periodic travel; fair-use policies still apply. Read the plan’s terms if you spend long periods outside the Netherlands.",
      whoItAppliesTo: "Commuters and frequent travellers",
      link: { label: "European Commission – roaming", href: "https://digital-strategy.ec.europa.eu/en/policies/roaming-charges" },
    },
  ],

  coverageCards: [
    {
      id: "mobile-data",
      title: "Mobile data & calls",
      description: "SIM-only, prepaid, and bundles combine data, minutes, and sometimes international minutes. Match the bundle to how you use your phone in NL and abroad.",
    },
    {
      id: "esim",
      title: "eSIM vs physical SIM",
      description: "eSIM can be faster to activate if your handset supports it. Physical SIMs are still common; confirm compatibility before you order.",
    },
    {
      id: "home-broadband",
      title: "Home internet",
      description: "Fixed broadband is separate from mobile. Once you have an address, compare fiber/cable/DSL offers; mobile hotspots are usually a temporary bridge, not a full replacement.",
    },
  ],

  comparisonFactors: [
    { id: "bundle", title: "Data and minutes", description: "How much data you need locally and whether you call abroad regularly." },
    { id: "flexibility", title: "Contract length", description: "Prepaid vs 1-month vs longer contracts; exit fees and notice periods." },
    { id: "english", title: "English support", description: "Website, app, and customer service in English if you prefer it." },
    { id: "coverage", title: "Coverage", description: "Check indoor coverage maps and experiences in your city or building." },
    { id: "esim", title: "eSIM availability", description: "Whether you can activate without waiting for postal delivery." },
    { id: "fair-use", title: "Roaming and fair use", description: "If you travel often, read EU roaming and fair-use rules in the plan." },
    { id: "price", title: "Total monthly cost", description: "Include starter packs, connection fees, and bundle renewals." },
  ],

  providers: mobileConnectivityProviders,

  comparisonSection: {
    title: "Compare mobile and SIM providers",
    intro:
      "Editorial overview of brands expats often use for a Dutch number. We do not rank providers; confirm plans, identification steps, and delivery on each site.",
  },

  costCards: [
    {
      id: "prepaid",
      title: "Prepaid starter",
      value: "~€10–20",
      note: "Initial SIM or starter pack plus first top-up; varies by retailer and promotion.",
      disclaimer: "Indicative",
    },
    {
      id: "sim-monthly",
      title: "SIM-only monthly",
      value: "~€7–25/mo",
      note: "Typical entry to mid-tier data bundles; unlimited or heavy-data plans cost more.",
      disclaimer: "Check current quote",
    },
    {
      id: "intl-addons",
      title: "International minutes or add-ons",
      value: "Varies",
      note: "Some plans bundle international calling; others charge per minute or require add-ons.",
      disclaimer: "Per provider",
    },
  ],

  whoNeedsExtraHelp: [
    {
      id: "no-bsn-yet",
      title: "You do not have a BSN yet",
      description: "Some flows are easier once you have a BSN and address; mobile is often still possible earlier—check each provider’s identification rules.",
    },
    {
      id: "heavy-roaming",
      title: "Heavy use outside the Netherlands",
      description: "Standard consumer plans assume primary residence in NL. If you spend most of the year abroad, review fair-use and permanent-roaming policies.",
    },
    {
      id: "home-office",
      title: "Home office on mobile data",
      description: "If you rely on video calls for work, check data caps and latency; fixed broadband is usually more reliable for heavy daily use.",
    },
  ],

  scenarios: [
    {
      id: "first-week",
      title: "First week after arrival",
      summary: "You need a number quickly for delivery, banking texts, and appointments.",
      whatToConfirm: ["ID you can use today", "Whether eSIM is available for your phone", "Minimum data you need for maps and OTPs"],
      whatToCompare: ["Prepaid vs monthly SIM-only", "Pickup vs postal delivery time"],
      commonMistakes: ["Assuming a foreign number works for every Dutch OTP flow"],
      links: [{ label: "After arriving", href: "/netherlands/after-arriving-netherlands/" }],
    },
    {
      id: "digid-bank",
      title: "Before DigiD and bank onboarding",
      summary: "You are lining up DigiD, bank account, and insurer portals.",
      whatToConfirm: ["Which number you will register on each service", "Whether the bank accepts your number for SMS OTPs"],
      whatToCompare: ["Stable monthly plan vs prepaid top-ups"],
      links: [
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "DigiD", href: "https://www.digid.nl/en" },
      ],
    },
    {
      id: "settled-broadband",
      title: "Address fixed, need home Wi‑Fi",
      summary: "Mobile worked for the first month; now you want reliable home internet.",
      whatToConfirm: ["What fiber or cable is available at your postcode", "Contract length vs rental lease"],
      whatToCompare: ["Fixed-line ISP offers", "Whether to keep a smaller mobile bundle"],
      links: [{ label: "Services hub", href: "/netherlands/services/" }],
    },
  ],

  faqs: [
    {
      q: "Do I need a Dutch phone number in the Netherlands?",
      a: "Not always, but it is practical. Many banks, insurers, and government-related flows use SMS. Some providers accept foreign numbers; others do not or are unreliable. A Dutch SIM is often the lowest-friction option in your first weeks.",
    },
    {
      q: "Can I use only roaming from my home country?",
      a: "Short visits may be fine. If you live in the Netherlands, long-term roaming on a foreign SIM can breach fair-use rules and some Dutch services may not accept a non-Dutch number. A local plan is usually simpler for admin and daily life.",
    },
    {
      q: "Is mobile data a substitute for home internet?",
      a: "For light use or short stays, yes. For stable work-from-home video calls, large downloads, or multiple users, fixed broadband is usually better value and reliability.",
    },
    {
      q: "What is the difference between prepaid and SIM-only?",
      a: "Prepaid means you top up credit or data bundles without a long contract. SIM-only monthly plans often renew each month or on a fixed term with a set data allowance. Choose based on how long you will stay and how predictable your usage is.",
    },
    {
      q: "Do I need a BSN to get a Dutch SIM?",
      a: "It depends on the provider and product. Some prepaid options are sold with minimal checks; subscriptions may require stronger identification. Check the provider’s current requirements.",
    },
  ],

  officialSources: mobileConnectivityOfficialSources,

  relatedGuides: [
    {
      title: "First steps in the Netherlands",
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "First 30 days", href: "/netherlands/first-30-days-netherlands/" },
        { label: "First 60 days", href: "/netherlands/first-60-days-netherlands/" },
        { label: "First 90 days planner", href: "/netherlands/first-90-days-netherlands/" },
      ],
    },
    {
      title: "Money and insurance",
      links: [
        { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
    {
      title: "Tools",
      links: [
        { label: "Arrival planner", href: "/netherlands/moving/tools/arrival-planner/" },
        { label: "Moving checklist", href: "/netherlands/moving/tools/moving-checklist/" },
      ],
    },
  ],

  relatedCategories: [
    { label: "Banks", href: "/netherlands/services/banks/" },
    { label: "Health insurance", href: "/netherlands/services/health-insurance/" },
    { label: "Relocation services", href: "/netherlands/services/relocation-services/" },
  ],

  tools: [
    { label: "Arrival planner", href: "/netherlands/moving/tools/arrival-planner/", description: "Order tasks including mobile connectivity", status: "live" },
    { label: "Moving checklist", href: "/netherlands/moving/tools/moving-checklist/", description: "Personalized relocation checklist", status: "live" },
    { label: "First 90 days", href: "/netherlands/first-90-days-netherlands/", description: "Structured first months guide", status: "live" },
  ],

  disclosure: [
    "This page is for information only and does not constitute consumer, telecom, or legal advice.",
    "Provider lists are editorial; inclusion is not an endorsement. Compare plans and confirm eligibility on each provider’s website.",
    "Some outbound links may be affiliate links where disclosed on the site; rates and offers change.",
  ],
};
