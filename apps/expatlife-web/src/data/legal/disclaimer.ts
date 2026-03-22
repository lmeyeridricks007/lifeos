/**
 * Disclaimer for /disclaimer/.
 * Protects the site and sets user expectations for informational content and provider listings.
 */
import { LEGAL_LAST_UPDATED } from "./constants";

export const disclaimerPage = {
  seo: {
    title: "Disclaimer | ExpatCopilot",
    description:
      "Read the ExpatCopilot disclaimer for important information about informational content, provider listings, and third-party links.",
  },
  hero: {
    title: "Disclaimer",
    subtitle: "Important context about how to use the information on this website.",
  },
  lastUpdated: LEGAL_LAST_UPDATED,
  summary:
    "ExpatCopilot provides general relocation information and service discovery. It is not a substitute for official sources or professional advice. You should verify important details yourself and use provider and authority links for decisions.",
  sections: [
    {
      id: "informational-only",
      heading: "Informational purposes only",
      body: "The content on this site (guides, tools, and service directories) is for general information only. It is not legal, tax, immigration, financial, medical, or other professional advice. Always verify requirements and procedures with the relevant authority or a qualified professional before making decisions.",
    },
    {
      id: "verify",
      heading: "Verify with official sources",
      body: "Rules, forms, and processes change. We link to official sources where possible, but we do not guarantee that linked pages are current or complete. For visas, registration, tax, or legal matters, use the official government or authority websites and, when appropriate, seek qualified advice.",
    },
    {
      id: "listings",
      heading: "Service and provider listings",
      body: "Inclusion of a provider or service in our directories or comparison pages does not mean we endorse or recommend them. We do not guarantee their quality, availability, or suitability for your situation. You are responsible for your own due diligence and for any agreements you enter into with third parties.",
    },
    {
      id: "external",
      heading: "External websites",
      body: "We link to external websites (e.g. government, providers, partners). We are not responsible for their content, accuracy, or practices. Use of third-party sites is at your own risk.",
    },
    {
      id: "no-guarantee",
      heading: "No guarantee of outcomes",
      body: "We do not guarantee any particular outcome from using this site or any linked service—including but not limited to visa or permit approval, rental success, or the quality of any provider. Results depend on your circumstances and on the decisions of authorities and third parties.",
    },
    {
      id: "responsibility",
      heading: "Your responsibility",
      body: "You remain responsible for your own decisions and for complying with applicable laws and requirements. Use of this site does not create a professional or advisory relationship between you and ExpatCopilot.",
    },
  ],
  relatedLinks: [
    { label: "Privacy policy", href: "/privacy/" },
    { label: "Terms & conditions", href: "/terms/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
