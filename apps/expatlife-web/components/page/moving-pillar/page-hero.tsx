import {
  EditorialContentHeader,
  type EditorialContentHeaderProps,
} from "@/src/components/content/EditorialContentHeader";

/** Editorial hero for the Moving NL hub; optional `movingPillarIdentity` enables the premium pillar treatment. */
export function PageHero({ heroLayout = "reference", ...props }: EditorialContentHeaderProps) {
  return <EditorialContentHeader heroLayout={heroLayout} {...props} />;
}
