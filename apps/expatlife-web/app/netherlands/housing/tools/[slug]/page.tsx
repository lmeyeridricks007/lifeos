import {
  getPlaceholderStaticParams,
  placeholderToolRobots,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
export const metadata = {
  title: "Housing Tool (Coming Soon)",
  description: "Tool page for housing planning in the Netherlands.",
  robots: placeholderToolRobots,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPlaceholderStaticParams("housing");
}

export default async function HousingToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("housing", slug);
}
