import {
  getPlaceholderStaticParams,
  placeholderToolRobots,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
export const metadata = {
  title: "Integration Tool (Coming Soon)",
  description: "Tool page for integration planning in the Netherlands.",
  robots: placeholderToolRobots,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPlaceholderStaticParams("integration");
}

export default async function IntegrationToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("integration", slug);
}
