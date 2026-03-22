/**
 * Terms & conditions for /terms/.
 * Site-specific: informational content, service listings, no advice, limitation of liability.
 * Optionally seed or replace sections with generated legal text and adapt to this platform.
 */
import { LEGAL_LAST_UPDATED } from "./constants";

export const termsPage = {
  seo: {
    title: "Terms & Conditions | ExpatCopilot",
    description:
      "Read the terms and conditions for using ExpatCopilot and its relocation guides, tools, and service listings.",
  },
  hero: {
    title: "Terms & Conditions",
    subtitle: "The basic terms that apply when you use this website.",
  },
  lastUpdated: LEGAL_LAST_UPDATED,
  intro:
    "By using ExpatCopilot you agree to these terms. If you do not agree, please do not use the site.",
  sections: [
    {
      id: "use",
      heading: "Use of the website",
      body: "You may use this website for personal, non-commercial use to access relocation guides, tools, and service information. You must not use it in a way that is unlawful, harmful, or that could disrupt the site or others’ use of it.",
    },
    {
      id: "informational",
      heading: "Informational nature of content",
      body: "The content on this site (guides, tools, and service directories) is for general information only. It is not legal, immigration, tax, medical, or financial advice. You should not rely on it as a substitute for professional advice or official sources.",
    },
    {
      id: "accuracy",
      heading: "No guarantee of accuracy or outcomes",
      body: "We aim to keep information accurate and up to date but do not guarantee completeness, accuracy, or that any particular outcome (e.g. visa approval, rental, or provider result) will follow from using the site. Rules and processes change; always verify with the relevant authority or provider.",
    },
    {
      id: "listings",
      heading: "Service and provider listings",
      body: "Inclusion of a provider or service in our directories or comparison pages does not constitute endorsement or recommendation. We do not guarantee the quality, availability, or suitability of any third-party provider. Your dealings with them are at your own risk.",
    },
    {
      id: "links",
      heading: "External links",
      body: "We link to external websites (e.g. government, providers). We are not responsible for their content, privacy practices, or terms. Use of third-party sites is at your own risk.",
    },
    {
      id: "ip",
      heading: "Content and intellectual property",
      body: "The content and design of this site are owned by ExpatCopilot or our licensors. You may not copy, scrape, or reuse substantial parts of the site for commercial purposes without permission.",
    },
    {
      id: "liability",
      heading: "Limitation of liability",
      body: "To the fullest extent permitted by law, we are not liable for any direct, indirect, or consequential loss arising from your use of or reliance on this website or its content. This includes but is not limited to decisions made on the basis of guides, tools, or provider listings.",
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      body: "We may update these terms. The \"Last updated\" date will change when we do. Continued use of the site after changes constitutes acceptance of the updated terms.",
    },
    {
      id: "contact",
      heading: "Contact",
      body: "For questions about these terms, please contact us via the contact page.",
    },
  ],
  relatedLinks: [
    { label: "Privacy policy", href: "/privacy/" },
    { label: "Cookie policy", href: "/cookies/" },
    { label: "Disclaimer", href: "/disclaimer/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
