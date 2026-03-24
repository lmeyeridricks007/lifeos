/**
 * Netherlands services hub page data for /netherlands/services/.
 * Single source of truth for copy, SEO, and section content.
 */

import type { ServicesHubPageData } from "@/src/lib/services-hub/types";
import { NETHERLANDS_SERVICES_CATEGORIES } from "./categories";
import { NETHERLANDS_FEATURED_HIGHLIGHTS } from "./featured";

/* Hero image prompt for future asset/CMS:
   "Cinematic editorial image for a services hub for expats in the Netherlands, showing organized relocation planning materials, comparison notes, service categories, phone or tablet with provider comparison interface, subtle Dutch urban context, premium magazine aesthetic, natural daylight, wide 16:9 hero banner."
*/

export const netherlandsServicesPage: ServicesHubPageData = {
  slug: "services",
  country: "netherlands",
  path: "/netherlands/services/",

  seo: {
    title: "Best Services for Expats in the Netherlands: Banks, Insurance, Housing & More",
    description:
      "Explore trusted services for expats in the Netherlands, including banking, insurance, housing, immigration, tax, healthcare, and relocation providers.",
    keywords: [
      "services for expats in the netherlands",
      "best services for expats netherlands",
      "expat providers netherlands",
      "relocation services netherlands",
      "trusted providers for expats netherlands",
      "expat services directory netherlands",
      "best banks for expats netherlands",
      "best health insurance for expats netherlands",
      "relocation agencies netherlands",
      "immigration lawyers netherlands",
      "tax advisors for expats netherlands",
      "housing platforms netherlands expat",
      "dutch services for internationals",
    ],
  },

  hero: {
    eyebrow: "SERVICES",
    title: "Services for Expats in the Netherlands",
    subtitle:
      "Browse trusted provider categories for banking, insurance, immigration, housing, taxes, healthcare, documents, and everyday life in the Netherlands.",
    image: {
      src: "/images/heroes/netherlands-expat-services-planning-hero.png",
      alt: "Cinematic editorial image of an expat planning services in the Netherlands. A person writes in a notebook at a desk with a laptop displaying service categories and a comparison interface. Documents, a passport, and a map are spread on the desk. Through a large window, a sunny Dutch canal scene with bicycles and buildings is visible, conveying organized relocation planning.",
      imagePrompt:
        "Cinematic editorial image for a services hub for expats in the Netherlands, showing organized relocation planning materials, comparison notes, service categories, phone or tablet with provider comparison interface, subtle Dutch urban context, premium magazine aesthetic, natural daylight, wide 16:9 hero banner.",
    },
    ctas: [
      { label: "Explore Service Categories", href: "#service-categories", primary: true },
      { label: "Start With Banking & Insurance", href: "#popular-providers", primary: false },
    ],
  },

  tocItems: [
    { id: "intro", label: "How to Use This Directory" },
    { id: "featured-services", label: "Featured Services" },
    { id: "service-categories", label: "Service Categories" },
    { id: "by-stage", label: "Services by Relocation Stage" },
    { id: "popular-needs", label: "Most Common Service Needs" },
    { id: "popular-providers", label: "Popular Provider Categories" },
    { id: "how-it-works", label: "How We Organize Providers" },
    { id: "trust-methodology", label: "Trust & methodology" },
    { id: "related-guides", label: "Useful Netherlands Guides" },
    { id: "tools", label: "Useful Tools" },
    { id: "faq", label: "FAQs" },
    { id: "browse-all", label: "Browse All Categories" },
  ],

  intro: {
    heading: "How to Use This Expat Services Directory",
    paragraphs: [
      "Relocating to the Netherlands usually means choosing multiple service providers—some essential early on, others as you settle in. Banking, health insurance, housing, document translation, and tax support are among the first; schools, utilities, legal support, and transport often follow.",
      "This section helps you browse by category and find provider options for each step of your move. Use it as your entry point into our guides and, where available, provider comparisons and reviews.",
      "This page is not legal, financial, or medical advice. Category pages are editorial overviews and comparison entry points. Always confirm details, requirements, and pricing directly with the provider.",
    ],
    links: [
      { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
      { label: "Dutch cities overview", href: "/netherlands/cities/" },
      { label: "Open a bank account", href: "/netherlands/open-bank-account-netherlands/" },
      { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
    ],
    disclaimer:
      "Provider inclusion does not imply endorsement. Suitability depends on your situation; always verify with the provider.",
  },

  categories: NETHERLANDS_SERVICES_CATEGORIES,

  stages: [
    {
      id: "before-you-move",
      title: "Before You Move",
      description: "Immigration support, documents, and housing search.",
      categorySlugs: ["immigration-legal", "housing-relocation"],
      categoryHrefs: [
        { label: "Relocation Services", href: "/netherlands/services/relocation-services/" },
        { label: "Visa Consultants", href: "/netherlands/services/visa-consultants/" },
        { label: "Immigration Lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Highly Skilled Migrant Sponsors", href: "/netherlands/services/highly-skilled-migrant-sponsors/" },
        { label: "Relocation Agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Housing Platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Rental Agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Startup Visa Advisors", href: "/netherlands/services/startup-visa-advisors/" },
      ],
    },
    {
      id: "first-weeks",
      title: "First Weeks After Arrival",
      description: "Bank accounts, insurance, registration, and basics.",
      categorySlugs: ["banking-insurance"],
      categoryHrefs: [
        { label: "Banks", href: "/netherlands/services/banks/" },
        { label: "Health Insurance", href: "/netherlands/services/health-insurance/" },
        { label: "Mobile & connectivity", href: "/netherlands/services/mobile-connectivity/" },
        { label: "Relocation Services", href: "/netherlands/services/relocation-services/" },
      ],
    },
    {
      id: "settling-in",
      title: "Settling In",
      description: "Housing, legal, and ongoing support.",
      categorySlugs: ["housing-relocation", "immigration-legal"],
      categoryHrefs: [
        { label: "Housing Platforms", href: "/netherlands/services/housing-platforms/" },
        { label: "Rental Agencies", href: "/netherlands/services/rental-agencies/" },
        { label: "Relocation Agencies", href: "/netherlands/services/relocation-agencies/" },
        { label: "Immigration Lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Visa Consultants", href: "/netherlands/services/visa-consultants/" },
      ],
    },
    {
      id: "long-term",
      title: "Long-Term Life in the Netherlands",
      description: "Banking, immigration, and relocation support.",
      categorySlugs: ["banking-insurance", "immigration-legal", "housing-relocation"],
      categoryHrefs: [
        { label: "Banks", href: "/netherlands/services/banks/" },
        { label: "Health Insurance", href: "/netherlands/services/health-insurance/" },
        { label: "Immigration Lawyers", href: "/netherlands/services/immigration-lawyers/" },
        { label: "Relocation Services", href: "/netherlands/services/relocation-services/" },
      ],
    },
  ],

  popularNeeds: [
    {
      title: "Best services for opening a Dutch bank account",
      description: "Compare expat-friendly banks and digital options for your first account and iDEAL.",
      href: "/netherlands/services/banks/",
      linkLabel: "Compare Banks",
    },
    {
      title: "Best health insurance for expats",
      description: "Understand mandatory health insurance and compare provider types.",
      href: "/netherlands/services/health-insurance/",
      linkLabel: "Compare Health Insurance",
    },
    {
      title: "Dutch mobile number and SIM for expats",
      description: "Why a local number matters for banking and DigiD, and SIM-only or prepaid options to compare.",
      href: "/netherlands/services/mobile-connectivity/",
      linkLabel: "Mobile & connectivity",
    },
    {
      title: "When to use a relocation agency",
      description: "When a relocation agency can help with housing, registration, and settling in.",
      href: "/netherlands/services/relocation-services/",
      linkLabel: "Browse Relocation Services",
    },
    {
      title: "Visa and immigration support",
      description: "Visa consultants and immigration lawyers for permits and family migration.",
      href: "/netherlands/services/visa-consultants/",
      linkLabel: "Visa Consultants & Immigration",
    },
    {
      title: "Housing platforms used by internationals",
      description: "Rental platforms and agencies commonly used by expats in the Netherlands.",
      href: "/netherlands/services/housing-platforms/",
      linkLabel: "Browse Housing Platforms",
    },
    {
      title: "Rental agencies and housing search",
      description: "Expat-friendly rental agencies and housing-search support.",
      href: "/netherlands/services/rental-agencies/",
      linkLabel: "Browse Rental Agencies",
    },
  ],

  highlights: NETHERLANDS_FEATURED_HIGHLIGHTS,

  howItWorks: {
    heading: "How We Organize Providers",
    paragraphs: [
      "Providers are grouped by category so you can quickly see which types of services exist and when they tend to matter in your relocation. Category pages are written to help expats understand the options and, where relevant, compare providers.",
      "Information may change over time. We focus on practical editorial guidance; you should always verify current terms, eligibility, and pricing directly with the provider. User ratings or expert scores may be added in the future.",
    ],
    disclosure: [
      "This directory does not provide legal, financial, or medical advice.",
      "Categories and provider mentions are for information only and do not guarantee suitability for your situation.",
      "Always confirm requirements, coverage, and costs with the provider before committing.",
    ],
  },

  trustLinks: [
    { label: "Editorial policy", href: "/editorial-policy/" },
    { label: "How we rank services", href: "/how-we-rank-services/" },
    { label: "Methodology", href: "/methodology/" },
    { label: "Affiliate disclosure", href: "/affiliate-disclosure/" },
  ],

  publisherNote:
    "ExpatCopilot is a relocation platform focused on helping expats move to the Netherlands with practical guides, tools, city insights, and services directories.",

  relatedGuides: [
    {
      title: "Banking & Insurance Guides",
      links: [
        { label: "Open a bank account in the Netherlands", href: "/netherlands/open-bank-account-netherlands/" },
        { label: "Health insurance in the Netherlands", href: "/netherlands/health-insurance-netherlands/" },
      ],
    },
    {
      title: "Documents & Admin Guides",
      links: [
        { label: "Document translation in the Netherlands", href: "/netherlands/document-translation-netherlands/" },
        { label: "Document legalization", href: "/netherlands/document-legalization-netherlands/" },
        { label: "Apostille documents", href: "/netherlands/apostille-documents-netherlands/" },
        { label: "Municipality registration", href: "/netherlands/municipality-registration-netherlands/" },
      ],
    },
    {
      title: "Arrival & Cities",
      links: [
        { label: "After arriving in the Netherlands", href: "/netherlands/after-arriving-netherlands/" },
        { label: "Cities overview", href: "/netherlands/cities/" },
        { label: "Amsterdam", href: "/netherlands/amsterdam/" },
        { label: "Rotterdam", href: "/netherlands/rotterdam/" },
        { label: "Utrecht", href: "/netherlands/utrecht/" },
        { label: "The Hague", href: "/netherlands/the-hague/" },
        { label: "Eindhoven", href: "/netherlands/eindhoven/" },
      ],
    },
  ],

  tools: [
    {
      label: "Moving Checklist",
      href: "/netherlands/moving/tools/moving-checklist/",
      description: "Personalized checklist for your move",
      status: "live",
    },
    {
      label: "Document Readiness Checker",
      href: "/netherlands/document-readiness-checker/",
      description: "Check which documents you need",
      status: "live",
    },
    {
      label: "Visa Timeline Estimator",
      href: "/netherlands/visa-timeline-estimator/",
      description: "Estimate visa processing and move timing",
      status: "live",
    },
    {
      label: "Visa Cost Calculator",
      href: "/netherlands/visa-cost-calculator/",
      description: "Estimate visa and move costs",
      status: "live",
    },
    {
      label: "Visa Comparison Tool",
      href: "/netherlands/visa/compare-visas/",
      description: "Compare visa routes",
      status: "live",
    },
  ],

  faqs: [
    {
      q: "What services do most expats need in the Netherlands?",
      a: "Most expats need banking (salary account, iDEAL), mandatory health insurance, housing, document translation or legalization for visas and registration, and often tax advice—especially if they qualify for the 30% ruling. Later, childcare, schools, utilities, and transport become relevant.",
    },
    {
      q: "Which services should I arrange before moving?",
      a: "Before you move, focus on immigration and visa support if required, document translation and apostille/legalization, and housing search (or temporary accommodation). Some expats also engage relocation agencies early to coordinate registration and first steps.",
    },
    {
      q: "When do I need Dutch health insurance?",
      a: "If you are working or living in the Netherlands as a resident, you are generally required to take out Dutch basic health insurance within four months of registration. There are exceptions for some short stays and cross-border workers; check official sources or an advisor for your situation.",
    },
    {
      q: "Can I open a bank account before I get a BSN?",
      a: "Some banks allow you to start the process or open an account with a BSN appointment confirmation; others require a BSN. Our banking guide and the Banking & Finance category list options so you can compare and confirm with the bank.",
    },
    {
      q: "Do I need a relocation agency to move to the Netherlands?",
      a: "No. Many expats arrange everything themselves using guides, tools, and provider comparisons. A relocation agency can help with housing search, registration appointments, and settling-in support if you prefer a single point of contact.",
    },
    {
      q: "Where can I find sworn translators for Dutch documents?",
      a: "Sworn translators (beëdigde vertalers) are listed in the Documents & Legal category. You can also find them via the Dutch courts’ register. Our document translation and legalization guides explain when sworn translations are required.",
    },
    {
      q: "Should I use an expat tax advisor?",
      a: "If you have cross-border income, the 30% ruling, or complex residency situations, an expat tax advisor or 30% ruling specialist can help you comply and optimize. The Tax & Accounting category points to the types of providers that serve expats.",
    },
    {
      q: "Are provider pages recommendations or reviews?",
      a: "Category pages are editorial overviews to help you understand options and compare. We do not provide personal recommendations; inclusion does not mean endorsement. Where we add comparisons or scores in the future, we will explain our methodology. Always verify with the provider.",
    },
    {
      q: "Which categories matter most in the first month?",
      a: "In the first month, banking, health insurance, municipality registration, and often mobile/internet and temporary or permanent housing are priorities. Documents & Legal is important if you still need translations or apostilles for registration.",
    },
    {
      q: "Are these services available in English?",
      a: "Many banks, insurers, relocation agencies, and expat-focused advisors offer English. Public services (e.g. municipality, tax office) may have limited English; our guides and category pages note where English support is commonly available.",
    },
    {
      q: "What is the best place to start if I just arrived?",
      a: "Start with our After arriving in the Netherlands guide, then use this services hub to find providers for banking, insurance, and registration. The Relocation stage section on this page shows which categories match your first weeks.",
    },
    {
      q: "Do service options differ by city?",
      a: "Some providers are nationwide (banks, insurers, many online services); others are local (e.g. municipal registration, some relocation agencies, schools). Our city pages (Amsterdam, Rotterdam, Utrecht, The Hague, Eindhoven) link to local resources and back to this services hub.",
    },
  ],
};
