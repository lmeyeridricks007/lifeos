import type { CitiesBestForExpatsReferencesConfig } from "./citiesBestForExpats.types";
import { citiesBestForExpatsRoutes as R } from "./citiesBestForExpats.routes";

export const citiesBestForExpatsReferences: CitiesBestForExpatsReferencesConfig = {
  sectionId: "official-sources",
  sectionTitle: "Official sources & useful references",
  disclaimer:
    "City choice touches **housing markets** and **daily life**, not just immigration law. Use these **orientation links** — municipality pages stay authoritative for **registration rules** in your chosen city.",
  groups: [
    {
      id: "newcomer-centres",
      title: "Official newcomer / expat centres (orientation)",
      links: [
        {
          type: "external",
          label: "IN Amsterdam – international newcomers",
          href: "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/international-newcomers/how-in-amsterdam-helps-international-newcomers",
        },
        {
          type: "external",
          label: "Rotterdam International Center",
          href: "https://www.rotterdam.nl/en/rotterdam-international-center",
        },
        {
          type: "external",
          label: "The Hague International Centre",
          href: "https://www.thehagueinternationalcentre.nl/",
        },
        {
          type: "external",
          label: "IWCN – International Welcome Center North",
          href: "https://iwcn.nl/",
        },
      ],
    },
    {
      id: "transport",
      title: "Travel planning (national)",
      links: [
        {
          type: "external",
          label: "NS journey planner",
          href: "https://www.ns.nl/en/journey-planner",
        },
        {
          type: "external",
          label: "9292 door-to-door travel",
          href: "https://9292.nl/en",
        },
      ],
    },
    {
      id: "government",
      title: "Government newcomer orientation",
      links: [
        {
          type: "external",
          label: "Netherlands Worldwide – relocating checklist",
          href: "https://www.netherlandsworldwide.nl/checklist-relocating-netherlands-immigration",
        },
        {
          type: "external",
          label: "Government.nl – moving to the Netherlands",
          href: "https://www.government.nl/topics/immigration-to-the-netherlands",
        },
      ],
    },
    {
      id: "internal",
      title: "On ExpatCopilot",
      links: [
        { type: "internal", label: "Cities hub", href: R.citiesHub },
        {
          type: "internal",
          label: "Municipality registration guide",
          href: "/netherlands/municipality-registration-netherlands/",
        },
        { type: "internal", label: "After arriving in the Netherlands", href: R.afterArriving },
      ],
    },
  ],
};
