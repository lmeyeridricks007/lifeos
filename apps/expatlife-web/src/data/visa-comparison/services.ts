/**
 * Recommended services for the Netherlands visa comparison page.
 * Shown in the "Recommended services" section; may help at different stages depending on route.
 */

export type ComparisonService = {
  name: string;
  useFor: string;
  url: string;
  logo?: { src: string; alt: string };
};

export const COMPARISON_SERVICES: ComparisonService[] = [
  {
    name: "Everaert Immigration Lawyers",
    useFor: "Complex route comparison and legal support.",
    url: "https://www.everaert.nl/",
  },
  {
    name: "Wise",
    useFor: "Moving money and international transfers.",
    url: "https://wise.com",
    logo: { src: "/images/affiliates/logos/wise.svg", alt: "Wise logo" },
  },
  {
    name: "bunq",
    useFor: "Banking after arrival.",
    url: "https://www.bunq.com",
    logo: { src: "/images/affiliates/logos/bunq.svg", alt: "bunq logo" },
  },
  {
    name: "HousingAnywhere",
    useFor: "Temporary housing.",
    url: "https://www.housinganywhere.com",
    logo: { src: "/images/affiliates/logos/housinganywhere.svg", alt: "HousingAnywhere logo" },
  },
  {
    name: "Simyo",
    useFor: "Mobile setup.",
    url: "https://www.simyo.nl",
    logo: { src: "/images/affiliates/logos/simyo.svg", alt: "Simyo logo" },
  },
  {
    name: "Independer",
    useFor: "Insurance comparison.",
    url: "https://www.independer.nl",
    logo: { src: "/images/affiliates/logos/independer.svg", alt: "Independer logo" },
  },
  {
    name: "ACCESS NL",
    useFor: "Information and support for international residents in the Netherlands.",
    url: "https://www.access-nl.org/",
  },
];
