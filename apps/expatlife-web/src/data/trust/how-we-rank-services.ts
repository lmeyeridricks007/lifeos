/**
 * How we rank / review services page for /how-we-rank-services/.
 * Explains provider inclusion, featured placements, and future monetization labels.
 * Future: connect sponsored-treatment hooks and paid-placement labels here.
 */
export const howWeRankServicesPage = {
  seo: {
    title: "How We Rank and Review Services | ExpatCopilot",
    description:
      "Learn how ExpatCopilot structures service directories, compares providers, and approaches featured placements and future reviews.",
  },
  hero: {
    title: "How We Rank and Review Services",
    subtitle:
      "How ExpatCopilot approaches provider directories, comparisons, featured placements, and future service reviews.",
  },
  sections: [
    {
      id: "why",
      heading: "Why This Page Exists",
      paragraphs: [
        "Service pages can influence important decisions—which bank, insurer, or relocation support you consider. Transparency matters. We want you to understand how providers are selected, grouped, and displayed, and how that might change if we introduce sponsored or paid placements in the future.",
      ],
    },
    {
      id: "inclusion",
      heading: "How Providers Are Included",
      intro: "We use different inclusion models depending on the category:",
      items: [
        {
          title: "Official or trusted-source directories",
          body: "Some provider lists are built from official registers or trusted public-support ecosystems (e.g. IND recognised sponsors, RVO startup facilitators). In those cases, inclusion follows the criteria of the official or trusted source.",
        },
        {
          title: "Editorially selected providers",
          body: "Some providers are included because they are commonly relevant to expats and have real, reviewable public-facing services. We may consider factors such as relevance for expats, clarity of offering, and practical usefulness.",
        },
        {
          title: "Future expanded coverage",
          body: "Some categories may start with a limited set and expand over time. Inclusion does not automatically mean endorsement; absence does not necessarily mean a provider is low quality.",
        },
      ],
    },
    {
      id: "featured",
      heading: "How Featured Providers Are Chosen",
      paragraphs: [
        "Featured placement may be based on practical relevance, visibility within trusted ecosystems, category usefulness, or editorial judgment. If sponsored or paid placements are ever introduced, they will be clearly labeled so you can tell them apart from editorial choices. Editorial and commercial treatment will be kept distinct.",
      ],
    },
    {
      id: "evaluation",
      heading: "What We Look At",
      intro: "We may consider factors such as:",
      factors: [
        "Relevance for expats",
        "Clarity of service offering",
        "Transparency (e.g. pricing, terms where visible)",
        "Practical usefulness for relocation and settling in",
        "City or route relevance where applicable",
        "Presence in official or trusted-source lists where relevant",
        "Specialisation (e.g. expat banking, international health)",
        "Onboarding and sign-up clarity",
        "English-language accessibility where relevant",
      ],
    },
    {
      id: "rankings-meaning",
      heading: "What Rankings and Comparisons Mean",
      paragraphs: [
        "Rankings are contextual, not universal. The best provider for one user may not be the best for another. Comparisons are decision-support tools, not guarantees. Your situation—category, city, budget, and needs—matters. Use our directories and comparison content to narrow options and ask the right questions; always verify directly with the provider before committing.",
      ],
    },
    {
      id: "independence",
      heading: "Editorial Independence and Commercial Relationships",
      paragraphs: [
        "If the site earns money from referrals, affiliate links, sponsored placements, or partnerships, that must not silently rewrite rankings. Any sponsored treatment will be clearly labeled. We aim for editorial trust to matter more than short-term monetization.",
      ],
      link: { label: "Affiliate disclosure", href: "/affiliate-disclosure/" },
    },
    {
      id: "user-reviews",
      heading: "User Reviews and Feedback",
      paragraphs: [
        "We may add user reviews or feedback in the future. If we do, we will apply moderation and authenticity standards and explain how they work. User reviews would complement, not replace, our editorial structuring of categories and provider information.",
      ],
    },
  ],
  relatedLinks: [
    { label: "Editorial policy", href: "/editorial-policy/" },
    { label: "Affiliate disclosure", href: "/affiliate-disclosure/" },
    { label: "Disclaimer", href: "/disclaimer/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
