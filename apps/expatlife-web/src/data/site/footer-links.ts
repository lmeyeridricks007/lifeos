/**
 * Shared footer and HTML sitemap link data.
 * Update when adding new trust, legal, or main site pages so footer and sitemap stay in sync.
 */
import { CONTACT_TOPIC_SERVICE_LISTING } from "@/src/data/site/contact";

export type FooterLink = { label: string; href: string };

export const FOOTER_GROUPS = {
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Contact", href: "/contact/" },
      {
        label: "Request a listing",
        href: `/contact/?topic=${CONTACT_TOPIC_SERVICE_LISTING}`,
      },
      { label: "How this site works", href: "/how-this-site-works/" },
    ] as FooterLink[],
  },
  trust: {
    title: "Trust",
    links: [
      { label: "Editorial policy", href: "/editorial-policy/" },
      { label: "Methodology", href: "/methodology/" },
      { label: "How we rank services", href: "/how-we-rank-services/" },
      { label: "Sources", href: "/sources/" },
    ] as FooterLink[],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy/" },
      { label: "Terms & conditions", href: "/terms/" },
      { label: "Cookie policy", href: "/cookies/" },
      { label: "Disclaimer", href: "/disclaimer/" },
      { label: "Affiliate disclosure", href: "/affiliate-disclosure/" },
    ] as FooterLink[],
  },
  explore: {
    title: "Explore",
    links: [
      { label: "Netherlands", href: "/netherlands/" },
      { label: "Services", href: "/netherlands/services/" },
      { label: "Cities", href: "/netherlands/cities/" },
      { label: "Tools", href: "/netherlands/tools/" },
      { label: "Sitemap", href: "/sitemap/" },
    ] as FooterLink[],
  },
} as const;

/** Trust, company, and legal links for HTML sitemap “Trust & legal” (matches footer coverage). */
export const SITEMAP_TRUST_LEGAL_LINKS: FooterLink[] = [
  ...FOOTER_GROUPS.company.links,
  ...FOOTER_GROUPS.trust.links,
  ...FOOTER_GROUPS.legal.links,
];

/** Primary hubs for HTML sitemap “Main pages” (indexable structural entry points). */
export const SITEMAP_MAIN_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Netherlands", href: "/netherlands/" },
  { label: "Services hub", href: "/netherlands/services/" },
  { label: "Cities overview", href: "/netherlands/cities/" },
  { label: "Tools hub", href: "/netherlands/tools/" },
  { label: "Money & tax tools", href: "/netherlands/money/tools/" },
  { label: "Tax tools hub", href: "/netherlands/taxes/tools/" },
  { label: "Sitemap", href: "/sitemap/" },
];
