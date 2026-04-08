/**
 * Reusable structured data for tool pages: SoftwareApplication + WebPage.
 * Use for all Netherlands relocation tools (moving checklist, arrival planner, first 90 days, document readiness).
 */

import { getSiteOrigin } from "@/lib/site-origin";

const BASE_URL = getSiteOrigin();

export type SoftwareApplicationSchemaOptions = {
  name: string;
  description: string;
  url: string;
  applicationCategory?: "PlanningApplication" | "LifestyleApplication" | "WebApplication" | "Calculator";
  operatingSystem?: string;
  offers?: { price?: string; priceCurrency?: string };
};

export function buildSoftwareApplicationSchema(options: SoftwareApplicationSchemaOptions): object {
  const {
    name,
    description,
    url,
    applicationCategory = "PlanningApplication",
    operatingSystem = "Web",
    offers = { price: "0", priceCurrency: "USD" },
  } = options;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
    applicationCategory,
    operatingSystem,
    offers: {
      "@type": "Offer",
      price: offers.price ?? "0",
      priceCurrency: offers.priceCurrency ?? "USD",
    },
  };
}

/** HowTo schema for tool pages (steps visible in body copy). */
export function buildHowToSchema(options: {
  name: string;
  description: string;
  canonicalPath: string;
  steps: readonly { name: string; text: string }[];
}): object {
  const fullUrl = options.canonicalPath.startsWith("http")
    ? options.canonicalPath
    : `${BASE_URL}${options.canonicalPath}`;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: options.name,
    description: options.description,
    totalTime: "PT15M",
    step: options.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    url: fullUrl,
  };
}

export function buildToolPageSchema(options: {
  title: string;
  description: string;
  canonicalPath: string;
}): object {
  const fullUrl = options.canonicalPath.startsWith("http")
    ? options.canonicalPath
    : `${BASE_URL}${options.canonicalPath}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.title,
    description: options.description,
    url: fullUrl,
  };
}
