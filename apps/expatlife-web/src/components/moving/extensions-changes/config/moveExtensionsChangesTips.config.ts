import type { MoveExtensionsChangesTips } from "./moveExtensionsChanges.contentTypes";

/** Reassurance band + Start here region and cards. */
export const moveExtensionsChangesTips = {
  reassurance: [
    {
      id: "one-thread",
      title: "You don’t have to solve everything tonight",
      body: "Pick **one thread**: what changed (or what date is coming), **when**, then **one** official page or guide. You’re building clarity — not closing every loop in an evening.",
    },
  ],
  startHere: {
    region: {
      id: "start-here",
      eyebrow: "Start here",
      title: "When extensions or changes usually matter",
      subtitle: "Three anchors — **purpose**, **time**, and **life admin** — so the rest of the page clicks faster.",
    },
    cards: [
      {
        id: "status-stable",
        iconKey: "statusStable",
        title: "Permits usually assume a stable “story”",
        intro:
          "Work, study, family, and self-employment routes are built around a **purpose**. When the facts behind that purpose shift, it’s worth asking **early** if anything needs updating.",
        keyPoints: [
          "**Who pays you, where you study, who you live with, or how you trade** can matter as much as the plastic card.",
          "Changes can creep (**hours, contract type**) or arrive fast (**job ends, graduation**).",
          "Goal: notice **material** shifts — you don’t need the full playbook on day one.",
        ],
      },
      {
        id: "expiry",
        iconKey: "expiry",
        title: "Dates feel quiet until they aren’t",
        intro:
          "Renewals and many transitions need **appointments, documents, and sometimes a sponsor**. **Months of buffer** beats racing the clock.",
        keyPoints: [
          "Surface **permit end**, **contract end**, and **study finish** dates where you’ll see them.",
          "If **HR, payroll, or a school** must act, add **their** lead time to your own.",
          "A quarterly **five-minute skim** of dates prevents most “how is it already due?” moments.",
        ],
      },
      {
        id: "life-planning",
        iconKey: "lifePlanning",
        title: "Immigration and daily life move together",
        intro:
          "IND isn’t the only inbox involved. **Income proof, address, insurance, and gemeente** often need to stay aligned when circumstances change.",
        keyPoints: [
          "Expect **BSN / address** and **payslip-shaped proof** to show up outside immigration alone.",
          "**Rent and zorg** don’t pause for paperwork — plan both tracks.",
          "Use our **tools and Living guides** next to permit reading — not instead of it.",
        ],
      },
    ],
  },
} satisfies MoveExtensionsChangesTips;
