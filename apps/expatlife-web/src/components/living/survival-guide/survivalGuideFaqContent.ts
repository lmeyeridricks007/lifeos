/** Single source for Survival Guide FAQ (accordion + FAQ JSON-LD). */
export const SURVIVAL_GUIDE_FAQ_ITEMS = [
  {
    id: "faq-first-days",
    question: "What do I actually need in the first days after landing?",
    answer:
      "A phone that works, a payment method shops will accept, and a transit app so you are not guessing at gates. Then line up registration → BSN → bank → insurance in the order your gemeente and employer allow—nothing else matters until you can move, pay, and receive post.",
  },
  {
    id: "faq-apps",
    question: "Which apps should I download first?",
    answer:
      "Open Essential apps for life in the Netherlands (/netherlands/living/apps/) for the curated install order (transport, Tikkie, groceries, delivery, chat). In short: NS and 9292 when trains and multimodal legs matter, OVpay once you tap, maps, your bank app when live, then supermarket and delivery apps when you know your chains and postcode. Add parking or gemeente apps only when the errand exists.",
  },
  {
    id: "faq-dutch",
    question: "Can I get around without speaking Dutch?",
    answer:
      "In most cities and international offices, yes for day-to-day errands. The pain points are official letters, some phone trees, and neighbour small talk—ten polite phrases plus Google Translate for post gets you surprisingly far.",
  },
  {
    id: "faq-bank-card",
    question: "Do I need a Dutch bank card immediately?",
    answer:
      "You need a way to pay the way tills expect—usually debit or contactless on a Dutch account. Foreign cards bridge a short window, but rent, iDEAL checkouts, and subscriptions get calmer once local banking is live.",
  },
  {
    id: "faq-ov",
    question: "Is public transport hard to figure out?",
    answer:
      "The network is excellent; the gotcha is discipline—check in and out, know your peak rules, and trust live departures in an app. For short hops, a bike often beats waiting—most locals mix both without thinking.",
  },
  {
    id: "faq-surprises",
    question: "What catches people off guard in ordinary Dutch life?",
    answer:
      "PIN-first tills, weather that flips in an hour, how much right-of-way bikes expect, grocery hours (especially Sundays), and the flood of letters that suddenly make sense once DigiD is active. None of it is exotic—just different defaults.",
  },
  {
    id: "faq-after-move-in",
    question: "Right after I get keys, what should I tackle first?",
    answer:
      "Meter readings, any utilities you—not the landlord—must register, internet if you work from home, and the waste calendar for your address. Snap a photo of the sorting rules on the bin room door; it saves arguments later.",
  },
  {
    id: "faq-english-daily",
    question: "Can I rely on English for everything?",
    answer:
      "For shopping, dining, and many jobs, often yes. Still assume important post is Dutch—machine translation is fine for a first pass, but tax and housing letters deserve a slow read or a second pair of eyes.",
  },
] as const;
