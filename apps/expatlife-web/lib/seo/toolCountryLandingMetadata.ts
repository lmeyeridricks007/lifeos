import type { Metadata } from "next";
import { cloneSafeMetadata } from "@/lib/metadata";
import { buildSocialMetadata } from "@/lib/seo/metadata";

/** Per-country tool landing pages: canonical, OG, Twitter aligned with `buildSocialMetadata`. */
export function buildToolCountryLandingPageMetadata(input: {
  canonicalPath: string;
  title: string;
  description: string;
}): Metadata {
  return cloneSafeMetadata(
    buildSocialMetadata({
      title: input.title,
      description: input.description,
      path: input.canonicalPath,
      ogType: "website",
    })
  );
}
