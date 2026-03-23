import {
  getPlaceholderStaticParams,
  placeholderToolRobots,
  renderPlaceholderPage,
} from "@/src/lib/tools/placeholderRouteFactory";

import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";

export const revalidate = CONTENT_REVALIDATE;
export const metadata = {
  title: "Money & Tax Tool (Coming Soon)",
  description: "Tool page for money and tax planning in the Netherlands.",
  robots: placeholderToolRobots,
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPlaceholderStaticParams("money-tax");
}

export default async function MoneyToolPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  return renderPlaceholderPage("money-tax", slug);
}
