/**
 * Affiliate disclosure for /affiliate-disclosure/.
 * Future-ready: when affiliate link tooling or sponsored placements are added,
 * wire labels and “sponsored” flags here so they stay consistent site-wide.
 */
export const affiliateDisclosurePage = {
  seo: {
    title: "Affiliate Disclosure | ExpatCopilot",
    description:
      "Read how ExpatCopilot may use affiliate or referral links and how commercial relationships are handled transparently.",
  },
  hero: {
    title: "Affiliate Disclosure",
    subtitle:
      "How ExpatCopilot may earn money from certain links or provider relationships, and how commercial transparency is handled.",
  },
  sections: [
    {
      id: "why",
      heading: "Why We Disclose This",
      paragraphs: [
        "Transparency matters. You should know when a site may benefit commercially from a link or a placement. Clear disclosure helps build trust and lets you make informed decisions.",
      ],
    },
    {
      id: "how-links-work",
      heading: "How Affiliate or Referral Links Work",
      paragraphs: [
        "Some links on this site may lead to third-party providers (e.g. banks, insurers, housing or relocation services). In some cases we may earn a commission or referral fee if you click a link or sign up through a tracked path. This usually does not increase the price you pay; the provider pays us a fee for the referral. You should always verify pricing and terms directly with the provider.",
      ],
    },
    {
      id: "what-not",
      heading: "What This Does Not Mean",
      paragraphs: [
        "Not every provider link is an affiliate link. Not every featured provider is paid. Affiliate relationships do not automatically mean we endorse a provider—we may include both affiliate and non-affiliate options in the same category. We still aim for the site to be useful and selective.",
      ],
    },
    {
      id: "commercial",
      heading: "How We Handle Commercial Relationships",
      paragraphs: [
        "If we introduce sponsored placements or paid partnerships, they will be clearly labeled so you can see when content or placement is commercially linked. Editorial and commercial decisions will be kept distinct. You should be able to tell whether content is editorial, sponsored, or commercially linked.",
      ],
    },
    {
      id: "no-guarantees",
      heading: "Provider Responsibility and User Decisions",
      paragraphs: [
        "Providers are third parties. We do not control their service quality, policies, pricing, or outcomes. We do not guarantee any result from using a linked provider. You remain responsible for evaluating suitability and for your own decisions.",
      ],
    },
  ],
  relatedLinks: [
    { label: "How we rank services", href: "/how-we-rank-services/" },
    { label: "Editorial policy", href: "/editorial-policy/" },
    { label: "Disclaimer", href: "/disclaimer/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
