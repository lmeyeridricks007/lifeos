import type { MoveTwvWorkPermitMisunderstanding } from "./moveTwvWorkPermit.types";

export const moveTwvMisunderstandingsRegion = {
  eyebrow: "Reality check",
  title: "What people often misunderstand",
  subtitle: "Short reminders that keep the TWV conversation practical instead of abstract.",
} as const;

export const moveTwvMisunderstandings: MoveTwvWorkPermitMisunderstanding[] = [
  {
    id: "one-work-permit",
    title: "“Work permit” is not one single universal Dutch route",
    intro: "Different work situations use different structures, and TWV is only one of them.",
    whatMattersNext: "Start by naming the route structure, not only the topic.",
    visualKey: "route",
  },
  {
    id: "non-eu-automatic",
    title: "TWV is not automatically the right answer in every non-EU work case",
    intro: "Category, permit wording, and route setup matter more than one broad label.",
    whatMattersNext: "Use route context before assuming the acronym.",
    visualKey: "twv",
  },
  {
    id: "employer-minor",
    title: "Employer involvement often matters more than people expect",
    intro: "In TWV-relevant cases, employer action and employer understanding can be central to timing and certainty.",
    whatMattersNext: "Ask early what the employer has really confirmed.",
    visualKey: "employer",
  },
  {
    id: "wording-interacts",
    title: "Work route, residence route, and permit wording can all interact",
    intro: "It is easy to miss the answer if you only look at one piece in isolation.",
    whatMattersNext: "Keep work authorization and residence context in the same picture.",
    visualKey: "permitOnly",
  },
  {
    id: "job-change-new-questions",
    title: "Changing jobs later can create new questions",
    intro: "A settled situation today does not automatically answer what happens after an employer or role change.",
    whatMattersNext: "Treat later work changes as route questions early, not only when urgent.",
    visualKey: "change",
  },
  {
    id: "vague-language",
    title: "Vague recruiter or employer language is not enough",
    intro: "“It should be fine” is not the same as route clarity, timing clarity, or real relocation certainty.",
    whatMattersNext: "Push for a specific route answer and what it means for the timeline.",
    visualKey: "employee",
  },
];
