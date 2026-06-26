import type { Metadata } from "next";
import { ArticleJsonLd, FaqPageJsonLd, WebPageJsonLd } from "@/lib/seo/jsonld";
import { CONTENT_REVALIDATE } from "@/lib/content-revalidate";
import { getSiteOrigin } from "@/lib/site-origin";
import { DutchHolidaysTraditionsView } from "@/src/components/life/DutchHolidaysTraditionsView";
import { dutchHolidaysTraditionsPage as page } from "@/src/components/life/dutchHolidaysTraditionsPageModel";

const baseUrl = getSiteOrigin();

export const revalidate = CONTENT_REVALIDATE;

export const metadata: Metadata = {
  title: page.seo.title,
  description: page.seo.description,
  keywords: [...page.seo.keywords],
  alternates: { canonical: page.path },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: page.seo.title,
    description: page.seo.description,
    type: "article",
    url: new URL(page.path, baseUrl).toString(),
    images: [{ url: page.hero.image.src, alt: page.hero.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.seo.title,
    description: page.seo.description,
    images: [page.hero.image.src],
  },
};

function ItemListJsonLd({
  name,
  items,
}: {
  name: string;
  items: readonly { name: string; description: string }[];
}) {
  const url = new URL(page.path, baseUrl).toString();
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function EventJsonLd({
  events,
}: {
  events: readonly { name: string; startDate: string; location: string; description: string }[];
}) {
  const schemas = events.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: event.startDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.location,
      address: { "@type": "PostalAddress", addressCountry: "NL" },
    },
    description: event.description,
    url: new URL(page.path, baseUrl).toString(),
  }));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

export default function DutchHolidaysTraditionsPage() {
  const holidayListItems = page.publicHolidays.map((holiday) => ({
    name: holiday.name,
    description: `${holiday.datePattern}. ${holiday.paidDayOff}. ${holiday.note}`,
  }));

  return (
    <>
      <WebPageJsonLd name={page.hero.pageTitle} description={page.seo.description} urlPath={page.path} datePublished={page.publishDate} />
      <ArticleJsonLd headline={page.hero.pageTitle} description={page.seo.description} dateModified={page.publishDate} urlPath={page.path} />
      <FaqPageJsonLd items={page.faq.map((item) => ({ q: item.q, a: item.a }))} url={new URL(page.path, baseUrl).toString()} />
      <ItemListJsonLd name="Dutch public holidays" items={holidayListItems} />
      <EventJsonLd events={page.schemaEvents} />
      <DutchHolidaysTraditionsView />
    </>
  );
}
