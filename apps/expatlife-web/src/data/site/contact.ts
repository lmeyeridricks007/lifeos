/**
 * Contact page content for /contact/.
 * Form submits via Formspree; set NEXT_PUBLIC_FORMSPREE_CONTACT_ID in env.
 */
export const contactPage = {
  seo: {
    title: "Contact ExpatCopilot",
    description:
      "Contact ExpatCopilot for feedback, corrections, service listing questions, or general inquiries about the site.",
  },
  hero: {
    title: "Contact Us",
    subtitle:
      "Questions, corrections, feedback, or partnership inquiries? Get in touch.",
  },
  intro: {
    paragraphs: [
      "You can use this form for general questions about the site, suggestions for corrections or updates, feedback on guides or tools, service or provider listing inquiries, and partnership ideas.",
      "We do not guarantee a specific response time. We do not provide personalised legal, tax, immigration, or financial advice through this form. For official or professional advice, please contact the relevant authority or a qualified professional.",
    ],
  },
  topics: [
    { value: "general", label: "General question" },
    { value: "correction", label: "Correction or update" },
    { value: "service-listing", label: "Service listing inquiry" },
    { value: "partnership", label: "Partnership" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ],
  whatToContact: {
    heading: "What to Contact Us About",
    items: [
      "Reporting outdated or incorrect information",
      "Suggesting a service or provider for our directories",
      "Feedback on guides, tools, or the site",
      "General questions about ExpatCopilot",
    ],
  },
  note: "For official immigration, tax, or legal decisions, contact the relevant authority or a qualified professional.",
  relatedLinks: [
    { label: "About", href: "/about/" },
    { label: "Privacy", href: "/privacy/" },
    { label: "Disclaimer", href: "/disclaimer/" },
  ],
} as const;
