/**
 * Reusable copy for cookie banner and preferences modal.
 */

export const BANNER = {
  title: "We use cookies",
  body:
    "We use cookies to keep the site working, understand how people use it, and support optional partner services. You can accept all, reject non-essential cookies, or choose your preferences.",
  cookiePolicy: "Cookie policy",
  acceptAll: "Accept all",
  rejectNonEssential: "Reject non-essential",
  managePreferences: "Manage preferences",
} as const;

export const PREFERENCES_MODAL = {
  title: "Cookie preferences",
  description: "Choose which cookies you allow. Necessary cookies are always active.",
  cookiePolicyLink: "Cookie policy",
  savePreferences: "Save preferences",
  acceptAll: "Accept all",
  rejectAll: "Reject all",
  cancel: "Cancel",
  necessaryLabel: "Always on",
} as const;

export const CATEGORIES = {
  necessary: {
    title: "Necessary",
    description:
      "Required for core website functionality and security.",
    examples: "Session, security, consent storage.",
  },
  analytics: {
    title: "Analytics",
    description:
      "Helps us understand which pages and tools are useful so we can improve the site.",
    examples: "Page views, usage patterns.",
  },
  preferences: {
    title: "Preferences",
    description:
      "Remembers helpful choices such as interface or personalization settings.",
    examples: "Language, region, UI toggles.",
  },
  marketing: {
    title: "Marketing",
    description:
      "Supports optional partner and promotional services, including affiliate-related tracking where applicable.",
    examples: "Affiliate links, promotional content.",
  },
} as const;

export const FOOTER_HELPER =
  "You can change your cookie preferences at any time.";
