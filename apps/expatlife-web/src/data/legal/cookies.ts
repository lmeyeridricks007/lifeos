/**
 * Cookie policy for /cookies/.
 * Align with actual cookie/consent implementation (e.g. consent banner, analytics only if consented).
 * For a fuller policy, generate with Termly cookie policy generator and paste body content here.
 */
import { LEGAL_LAST_UPDATED } from "./constants";

export const cookiesPage = {
  seo: {
    title: "Cookie Policy | ExpatCopilot",
    description:
      "Read how ExpatCopilot uses cookies and similar technologies, including analytics and site functionality.",
  },
  hero: {
    title: "Cookie Policy",
    subtitle: "How cookies and similar technologies are used on this website.",
  },
  intro:
    "This page explains what cookies we use and how you can manage your preferences. We use cookies to make the site work, remember your choices, and, if you consent, to understand how the site is used.",
  lastUpdated: LEGAL_LAST_UPDATED,
  sections: [
    {
      id: "what-are",
      heading: "What are cookies",
      body: "Cookies are small text files stored on your device when you visit a website. They allow the site to remember your actions and preferences (e.g. cookie consent, language) and can be used for analytics or advertising depending on the type.",
    },
    {
      id: "categories",
      heading: "Cookie categories we use",
      body: "We use the following categories. You can change your preferences at any time via the cookie settings link in the footer or in our cookie banner.",
    },
    {
      id: "necessary",
      heading: "Necessary cookies",
      body: "These are required for the site to function (e.g. security, load balancing, storing your cookie consent choice). They cannot be disabled if you want to use the site.",
    },
    {
      id: "preferences",
      heading: "Preference cookies",
      body: "These remember your settings, such as which cookie categories you have accepted or other preferences you set on the site. They are only set if you have agreed to them.",
    },
    {
      id: "analytics",
      heading: "Analytics cookies",
      body: "If you accept analytics cookies, we may use them to understand how visitors use the site (e.g. which pages are viewed, how you navigate). This helps us improve the site. We do not use analytics to identify you personally unless the tool we use requires it and we have disclosed it.",
    },
    {
      id: "marketing",
      heading: "Marketing cookies",
      body: "If you accept marketing cookies, third-party cookies may be used for advertising or affiliate-related tracking (e.g. when you follow a partner link). You can decline marketing cookies and still use the site.",
    },
    {
      id: "manage",
      heading: "Managing your preferences",
      body: "You can change your cookie preferences at any time. Use the \"Cookie settings\" link in the footer to reopen the consent panel. Your choice is stored for a set period, after which we may ask again. You can also use your browser settings to block or delete cookies; some site features may not work correctly if you block necessary cookies.",
    },
  ],
  relatedLinks: [
    { label: "Privacy policy", href: "/privacy/" },
    { label: "Terms & conditions", href: "/terms/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
