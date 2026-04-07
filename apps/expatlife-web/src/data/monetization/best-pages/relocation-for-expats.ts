import type { BestProvidersPageContent } from "@/src/lib/monetization/bestProvidersContent";

export const relocationForExpatsPage: BestProvidersPageContent = {
  slug: "relocation-for-expats",
  path: "/netherlands/best/relocation-for-expats/",
  seo: {
    title: "Relocation services & moving support for expats in the Netherlands",
    description:
      "Curated comparison of relocation and moving support for Netherlands-bound expats: scope, typical use-cases, and how to brief a provider without overbuying.",
    keywords: [
      "relocation services netherlands expat",
      "international moving netherlands",
      "expat relocation amsterdam",
      "corporate relocation netherlands",
    ],
  },
  hero: {
    eyebrow: "Curated comparison",
    title: "Relocation services and moving support",
    subtitle:
      "For moves where shipping, immigration timing, and housing overlap—structured notes on who each provider type suits. Always request a written scope and quote.",
    image: {
      src: "/images/guides/netherlands/moving/checklist-tool-hero.png",
      alt: "Relocation planning materials and moving checklist for the Netherlands",
      priority: false,
    },
  },
  methodology: {
    title: "How we evaluate relocation support",
    intro:
      "We look for clear service boundaries (what is in-house vs referred), geography fit for the Netherlands, and whether the model matches employer-led or self-paid moves.",
    howWeEvaluate: [
      "Scope: immigration-only vs full destination services vs shipment management.",
      "Geography: city focus (e.g. Amsterdam, The Hague) vs national or global programmes.",
      "Buyer: employer-sponsored packages vs individual quotes.",
      "Transparency: whether pricing is public or quote-only (most are quote-only).",
    ],
    goodFitTitle: "What makes a good fit",
    goodFit: [
      "You have a tight visa start date and need shipment arrival aligned with housing.",
      "Your employer offers a budget but you still choose the supplier—compare scopes apples-to-apples.",
      "You want one coordinator for BRP/BSN-adjacent admin—not legal advice, but practical sequencing.",
    ],
  },
  shortlist: {
    title: "Quick shortlist",
    subtitle: "Examples frequently referenced in Dutch expat ecosystems—not exhaustive directory coverage.",
  },
  comparison: {
    title: "Comparison at a glance",
    subtitle: "English support and onboarding are indicative; confirm with each firm.",
  },
  detailedCardsTitle: "Provider notes",
  faq: [
    {
      q: "Do I need a relocation company?",
      a: "Many people move without one, especially within the EU. Relocation support helps when immigration, shipping, and housing deadlines overlap or when your employer funds structured help.",
    },
    {
      q: "Are these legal advisors?",
      a: "Some firms include immigration coordination; legal representation is different. Verify credentials if you need formal legal work—not general relocation coaching.",
    },
    {
      q: "Why are prices rarely listed?",
      a: "Scopes vary too much (household size, origin country, visa route). Expect discovery calls and written estimates rather than checkout pricing.",
    },
    {
      q: "Does ExpatCopilot earn fees from these listings?",
      a: "Partner links may be added later and will be disclosed. Today’s list is editorial orientation for research.",
    },
  ],
  disclosure:
    "Providers are third parties. We do not guarantee service quality or outcomes. Some links may become partner links; we will label them when they do.",
  affiliateNote: "Affiliate tracking is not active on all outbound links in this comparison.",
  relatedLinks: [
    { label: "Moving to the Netherlands cost", href: "/netherlands/moving-to-netherlands-cost/" },
    { label: "Shipping household goods", href: "/netherlands/shipping-household-goods-netherlands/" },
    { label: "Relocation agencies directory", href: "/netherlands/services/relocation-agencies/" },
    { label: "Relocation cost estimator", href: "/netherlands/moving/tools/relocation-cost-estimator/" },
  ],
  rows: [
    {
      id: "expat2holland",
      name: "Expat2Holland",
      logo: {
        src: "https://www.google.com/s2/favicons?domain=www.expat2holland.com&sz=128",
        alt: "Expat2Holland",
      },
      bestFor: "Amsterdam-region settling-in",
      englishSupport: "Usually strong",
      onboardingEase: "Consultation → package",
      priceHint: "Packages often €1,500+",
      notes: "Housing + BSN-adjacent admin support",
      ctaLabel: "Visit Expat2Holland",
      ctaHref: "https://www.expat2holland.com/",
      detailDescription:
        "Frequently listed for Amsterdam-area moves where newcomers want help sequencing housing search, registration steps, and practical onboarding.",
      tags: ["Amsterdam", "Settling-in"],
    },
    {
      id: "packimpex",
      name: "Packimpex",
      logo: { src: "https://logo.clearbit.com/packimpex.com", alt: "Packimpex" },
      bestFor: "Employer-led complex moves",
      englishSupport: "Strong",
      onboardingEase: "Corporate intake",
      priceHint: "Quoted per scope",
      notes: "Immigration + housing + move coordination",
      ctaLabel: "Visit Packimpex",
      ctaHref: "https://www.packimpex.com/",
      detailDescription:
        "Useful when the same programme must coordinate immigration touchpoints, housing search, and physical move timing.",
      tags: ["Corporate", "Full-service"],
    },
    {
      id: "jimble",
      name: "Jimble",
      logo: { src: "https://logo.clearbit.com/jimble.nl", alt: "Jimble" },
      bestFor: "Amsterdam mobility boutique",
      englishSupport: "Strong",
      onboardingEase: "Consultation-led",
      priceHint: "Typically €1,000–2,500+ core",
      notes: "Regional focus—confirm coverage",
      ctaLabel: "Visit Jimble",
      ctaHref: "https://www.jimble.nl/",
      detailDescription:
        "Smaller footprint than global brands; can suit Amsterdam-focused assignees who want responsive coordination.",
      tags: ["Amsterdam", "Mobility"],
    },
    {
      id: "crown",
      name: "Crown Relocations",
      logo: { src: "https://logo.clearbit.com/crownrelo.com", alt: "Crown Relocations" },
      bestFor: "Global employer programmes",
      englishSupport: "Strong",
      onboardingEase: "Programme-based",
      priceHint: "Employer-bundled",
      notes: "Household goods + destination services",
      ctaLabel: "Visit Crown",
      ctaHref: "https://www.crownrelo.com/",
      detailDescription:
        "Typical choice when a global mobility team standardises on a single supplier for shipment and destination support.",
      tags: ["Global", "Moving"],
    },
    {
      id: "newland-chase",
      name: "Newland Chase",
      logo: { src: "https://logo.clearbit.com/newlandchase.com", alt: "Newland Chase" },
      bestFor: "Immigration compliance alongside mobility",
      englishSupport: "Strong",
      onboardingEase: "Corporate workflows",
      priceHint: "Employer-paid / quote",
      notes: "Visa/work permit focus",
      ctaLabel: "Visit Newland Chase",
      ctaHref: "https://www.newlandchase.com/",
      detailDescription:
        "Often paired with relocation when work-authorisation timelines drive the critical path for arrival.",
      tags: ["Immigration", "Corporate"],
    },
  ],
};
