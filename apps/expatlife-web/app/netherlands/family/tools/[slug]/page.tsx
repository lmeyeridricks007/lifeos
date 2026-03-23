import {
  getPlaceholderStaticParams,
  placeholderToolRobots,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
export const metadata = {
  title: "Family Tool (Coming Soon)",
  description: "Tool page for partner and family planning in the Netherlands.",
  robots: placeholderToolRobots,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPlaceholderStaticParams("partner-family");
}

export default async function FamilyToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("partner-family", slug);
}
