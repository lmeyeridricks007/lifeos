import type { ReactNode } from "react";

export type ProviderCardLogo = { src: string; alt: string };

export type ProviderCardProps = {
  name: string;
  logo: ProviderCardLogo | ReactNode;
  description: string;
  tags: string[];
  bestFor: string;
  priceHint: string;
  ctaLabel: string;
  href: string;
  isAffiliate: boolean;
  disclosureText?: string;
  featured?: boolean;
  /** Grids: avoid equal-height stretch and empty space below short content. */
  layoutDensity?: "default" | "compact";
  /** Netherlands moving / city pillar — ExpatCopilot surfaces and typography. */
  tone?: "default" | "copilot";
};
