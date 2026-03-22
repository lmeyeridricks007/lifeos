/**
 * Privacy policy content for /privacy/.
 * Baseline is GDPR-oriented and matches actual site use (analytics, cookies, forms, no selling data).
 * For a fuller policy, generate with Termly and paste the body sections below or replace this file.
 */
import { LEGAL_LAST_UPDATED } from "./constants";

export const privacyPage = {
  seo: {
    title: "Privacy Policy | ExpatCopilot",
    description:
      "Read the ExpatCopilot privacy policy, including how we handle analytics, cookies, contact form data, and third-party links.",
  },
  hero: {
    title: "Privacy Policy",
    subtitle: "How we collect, use, and protect information on this website.",
  },
  introNote:
    "This page explains how ExpatCopilot handles data when you use this site.",
  lastUpdated: LEGAL_LAST_UPDATED,
  /** Replace or extend sections below with Termly-generated content if desired. */
  sections: [
    {
      id: "controller",
      heading: "Who is responsible for your data",
      body: "ExpatCopilot (this website) is the data controller for the personal data we collect through the site. We do not sell your personal data.",
    },
    {
      id: "what-we-collect",
      heading: "What we collect",
      body: "We collect only what is necessary to run the website and improve the experience: (1) Technical and usage data, such as IP address, browser type, and pages visited, when you use the site; (2) Data you send via the contact form (name, email, topic, message) when you submit it; (3) Cookie and similar technologies data, as described in our Cookie Policy. We do not require you to create an account to use the guides and tools.",
    },
    {
      id: "how-we-use",
      heading: "How we use your data",
      body: "We use the data to operate the site, respond to contact form submissions, understand how the site is used (e.g. via analytics, if you have consented to analytics cookies), and to improve content and functionality. Contact form messages are used only to respond to your inquiry and are not used for marketing unless you have agreed otherwise.",
    },
    {
      id: "cookies",
      heading: "Cookies and similar technologies",
      body: "We use cookies for essential site operation, preferences, and, if you consent, analytics. You can manage your cookie preferences at any time. For details, see our Cookie Policy.",
    },
    {
      id: "third-parties",
      heading: "Third parties and links",
      body: "We may use third-party services for hosting, analytics (when consented), or form handling. Those providers process data according to their own privacy policies. Our pages also link to external sites (e.g. government, providers); we are not responsible for their data practices.",
    },
    {
      id: "retention",
      heading: "How long we keep data",
      body: "We keep contact form submissions for as long as needed to respond and handle follow-up, then delete or anonymise. Technical and analytics data are retained only as long as necessary for the purposes described, or as required by law.",
    },
    {
      id: "rights",
      heading: "Your rights",
      body: "If you are in the European Economic Area or the UK, you have rights including access, correction, erasure, restriction, and portability where applicable. You can also object to processing and lodge a complaint with a supervisory authority. To exercise your rights or ask questions, contact us via the contact page.",
    },
    {
      id: "updates",
      heading: "Changes to this policy",
      body: "We may update this policy from time to time. The \"Last updated\" date at the top will change when we do. We encourage you to review this page periodically.",
    },
  ],
  relatedLinks: [
    { label: "Cookie policy", href: "/cookies/" },
    { label: "Terms & conditions", href: "/terms/" },
    { label: "Disclaimer", href: "/disclaimer/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
