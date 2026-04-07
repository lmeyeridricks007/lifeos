import type { PageMonetizationMetadata } from "./pageMonetizationMetadata";

/**
 * Default monetization metadata per guide slug. Co-located route files re-export the same entry as
 * `export const monetization = NETHERLANDS_GUIDE_PAGE_MONETIZATION["<slug>"];` for discoverability.
 */
export const NETHERLANDS_GUIDE_PAGE_MONETIZATION: Partial<Record<string, PageMonetizationMetadata>> = {
  "open-bank-account-netherlands": { disabled: true },
  "health-insurance-netherlands": { disabled: true },
  "moving-to-netherlands-cost": { disabled: true },
  "shipping-household-goods-netherlands": { disabled: true },
  "municipality-registration-netherlands": { disabled: true },
  "visa-documents-netherlands": { disabled: true },
  "digid-awareness": { disabled: true },

  "first-30-days-netherlands": {
    categories: ["insurance", "banking"],
    endCategories: ["recommended"],
  },
  "first-60-days-netherlands": {
    categories: ["insurance", "banking"],
    endCategories: ["recommended"],
  },
  "first-90-days-netherlands": {
    categories: ["insurance", "banking"],
    endCategories: ["recommended"],
  },
  "after-arriving-netherlands": {
    categories: ["insurance", "banking"],
    endCategories: ["housing"],
  },
  "settling-in-netherlands": {
    categories: ["utilities"],
    endCategories: ["recommended"],
  },
  "moving-checklist-netherlands": {
    categories: ["insurance", "banking"],
    endCategories: ["recommended"],
  },
  "documents-needed-to-move-netherlands": {
    categories: ["insurance", "banking"],
    endCategories: ["recommended"],
  },
  "moving-requirements-netherlands": {
    categories: ["insurance", "banking"],
    endCategories: ["recommended"],
  },
  "moving-documents-checklist": {
    categories: ["insurance", "banking"],
    endCategories: ["recommended"],
  },
  "move-to-netherlands-without-job": {
    categories: ["recommended"],
    endCategories: ["insurance"],
  },
  "moving-to-netherlands-with-family": {
    categories: ["insurance", "housing"],
    endCategories: ["recommended"],
  },
  "moving-to-netherlands-with-partner": {
    categories: ["insurance", "housing"],
    endCategories: ["recommended"],
  },
  "moving-to-netherlands-with-kids": {
    categories: ["insurance", "housing"],
    endCategories: ["recommended"],
  },
  "eu-vs-non-eu-moving-to-netherlands": {
    categories: ["recommended"],
    endCategories: ["insurance", "banking"],
  },
  "document-translation-netherlands": {
    endCategories: ["recommended"],
  },
  "document-legalization-netherlands": {
    endCategories: ["recommended"],
  },
  "apostille-documents-netherlands": {
    endCategories: ["recommended"],
  },
  "bringing-pets-to-netherlands": {
    endCategories: ["recommended"],
  },
  "moving-mistakes-netherlands": {
    categories: ["insurance", "banking"],
    endCategories: ["recommended"],
  },
  "moving-to-netherlands-timeline": {
    categories: ["recommended"],
  },
  "moving-to-netherlands-steps": {
    categories: ["recommended"],
  },
};
