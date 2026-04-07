/**
 * Netherlands move cluster: which JSON guides get a light post-FAQ provider surface
 * (setup/admin intent) vs commercial blocks (GuideMonetizationAfterContent) vs soft-only (default).
 */

const SETUP_ADMIN_SELECTIVE_MONETIZATION_SLUGS = new Set([
  "municipality-registration-netherlands",
  "register-address-netherlands",
  "bsn-registration",
  "can-i-open-bank-account-before-bsn",
]);

export function shouldRenderSelectiveSetupMonetization(slug: string): boolean {
  return SETUP_ADMIN_SELECTIVE_MONETIZATION_SLUGS.has(slug);
}
