import {
  getPlaceholderStaticParams,
  placeholderToolRobots,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
export const metadata = {
  title: "Healthcare Tool (Coming Soon)",
  description: "Tool page for healthcare and insurance planning in the Netherlands.",
  robots: placeholderToolRobots,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPlaceholderStaticParams("healthcare");
}

export default async function HealthToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("healthcare", slug);
}
