/**
 * Reusable JSON-LD schema builders for Organization, WebSite, AboutPage, BreadcrumbList.
 * Only include fields that accurately reflect the site; do not invent addresses, phones, or authors.
 *
 * VALIDATION CHECKLIST (run periodically):
 * - Test Organization + WebSite with Google Rich Results Test.
 * - Confirm canonical and metadata match visible content on key pages.
 * - Verify breadcrumb JSON-LD matches visible breadcrumb on About and other pages.
 * - Ensure no invented business details (address, phone, founder, fake social links).
 * - Confirm structured data matches visible content (no misleading claims).
 */
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_LANG,
  SITE_LOGO_URL,
  SITE_SAME_AS,
  SITE_CONTACT_PAGE,
} from "@/src/data/site/siteMeta";

export type SchemaOrgObject = Record<string, unknown>;

/** Base URL for absolute URLs in schema. */
export function getBaseUrl(): string {
  return SITE_URL;
}

/**
 * Organization schema. Include only real, known fields.
 * Add logo, sameAs, contactPoint only when real values exist.
 */
export function buildOrganizationSchema(): SchemaOrgObject {
  const org: SchemaOrgObject = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
  if (SITE_LOGO_URL) {
    org.logo = SITE_LOGO_URL;
  }
  if (SITE_SAME_AS?.length) {
    org.sameAs = SITE_SAME_AS;
  }
  if (SITE_CONTACT_PAGE) {
    org.contactPoint = {
      "@type": "ContactPoint",
      url: `${SITE_URL}${SITE_CONTACT_PAGE.startsWith("/") ? SITE_CONTACT_PAGE : `/${SITE_CONTACT_PAGE}`}`,
      contactType: "customer service",
    };
  }
  return org;
}

/**
 * WebSite schema for site-wide use. Publisher references Organization.
 */
export function buildWebsiteSchema(): SchemaOrgObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANG,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export type AboutPageSchemaOptions = {
  name: string;
  description: string;
  path: string;
  /** Optional: reference Organization as mainEntity. */
  organizationSchema?: SchemaOrgObject;
};

/**
 * AboutPage schema for /about/. Use with BreadcrumbList for full page signals.
 */
export function buildAboutPageSchema(options: AboutPageSchemaOptions): SchemaOrgObject {
  const { name, description, path, organizationSchema } = options;
  const url = `${getBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
  const about: SchemaOrgObject = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
  if (organizationSchema) {
    about.mainEntity = organizationSchema;
  }
  return about;
}

export type BreadcrumbItem = { name: string; item: string };

/**
 * BreadcrumbList schema. Pass full URLs for item (or paths; we normalize to absolute).
 */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]): SchemaOrgObject {
  const base = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${base}${item.item.startsWith("/") ? item.item : `/${item.item}`}`,
    })),
  };
}
