import {
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import { LIVING_TRANSPORT_APP_DOWNLOADS } from "@/src/components/living/livingTransportAppStoreLinks";
import type { LivingEssentialAppsConfig } from "./livingEssentialApps.types";

/**
 * Single config bundle for the Essential Apps Living page.
 * Prefer editing this file (and types) over scattering copy in JSX.
 */
export const livingEssentialAppsPageConfig: LivingEssentialAppsConfig = {
  supplementalToolsTitleId: "ea-supplemental-tools",

  copy: {
    dateModified: "2026-04-08",
    heroBullets: [
      "What to install first—and what each app actually does",
      "Transport, pay, shops, delivery, radar, chat, language apps—nothing you do not need yet",
      "Must-haves stand out; the rest waits until the errand exists",
      "48 hours → week → month, in that order",
    ],
    heroQuickStrip: [
      { iconKey: "trainFront", label: "OV & trains" },
      { iconKey: "creditCard", label: "Bank · Tikkie" },
      { iconKey: "cloudRain", label: "Rain radar" },
      { iconKey: "smartphone", label: "Maps · chat" },
      { iconKey: "mapPinned", label: "Shops · delivery" },
    ],
    atAGlanceCells: [
      {
        title: "What this page is for",
        body: "Install order and roles—not a store directory. Pick what you run, ignore the rest until you need it.",
      },
      {
        title: "Best for",
        body: "New arrivals who want a working phone before admin piles up—students, hires, families alike.",
      },
      {
        title: "What it covers",
        body: "OV, rideshare, bank apps (incl. ING/Rabo/ABN examples), Tikkie & Klarna, groceries (AH, Jumbo, Picnic, Lidl Plus), Too Good To Go, bol/Coolblue/Marktplaats/Vinted, WhatsApp, KNMI & Buienradar, translation & language apps, DigiD & MijnGegevens, streaming (NPO Start, Ziggo, Videoland), Pathé, bins, investing, city apps—install what matches your life.",
      },
      {
        title: "What it skips",
        body: "Ratings wars and live fares—use operator and bank apps when the answer must be exact.",
      },
    ],
    atAGlanceNote: {
      badge: "Heads-up",
      title: "Stores and features move",
      paragraphs: [
        [
          {
            kind: "text",
            text: "App availability, English toggles, and payment flows change with updates—treat bank and operator apps as the source of truth. This page focuses on practical use, not side-by-side spec sheets. Wider day-one rhythm lives in the ",
          },
          { kind: "link", text: "Netherlands Survival Guide", href: LIVING_SURVIVAL_GUIDE_PATH },
          { kind: "text", text: "." },
        ],
        [
          { kind: "text", text: "For tap discipline and mode choice beyond install tips, read " },
          { kind: "link", text: "Getting around in the Netherlands", href: LIVING_GETTING_AROUND_PATH },
          { kind: "text", text: ". When you want calculators next, skip to " },
          { kind: "link", text: "Helpful planning tools", href: "#helpful-tools" },
          { kind: "text", text: " on this page or open the full " },
          { kind: "link", text: "Netherlands tools hub", href: "/netherlands/tools/" },
          { kind: "text", text: "." },
        ],
      ],
    },
    startHereFooter: [
      { kind: "text", text: "Once installs are sane, stress-test money and place: the " },
      { kind: "link", text: "cost of living calculator", href: "/netherlands/money/tools/cost-of-living-calculator/" },
      { kind: "text", text: ", " },
      { kind: "link", text: "rent affordability calculator", href: "/netherlands/housing/tools/rent-affordability-calculator/" },
      { kind: "text", text: ", " },
      { kind: "link", text: "utilities & services comparison", href: "/netherlands/living/tools/utilities-services-comparison/" },
      { kind: "text", text: ", and " },
      { kind: "link", text: "city comparison tool", href: "/netherlands/tools/city-comparison/" },
      { kind: "text", text: " use the same ToolCard pattern as the Move pillar—you will see them again in " },
      { kind: "link", text: "Survival Guide → planning tools", href: `${LIVING_SURVIVAL_GUIDE_PATH}#tools` },
      { kind: "text", text: "." },
    ],
    surprisesFooter: [
      { kind: "text", text: "Turn opinion into numbers with the " },
      { kind: "link", text: "cost of living calculator", href: "/netherlands/money/tools/cost-of-living-calculator/" },
      { kind: "text", text: ", " },
      { kind: "link", text: "city comparison tool", href: "/netherlands/tools/city-comparison/" },
      { kind: "text", text: ", and the rent and utilities tools below—the same family of calculators we surface on Move guides and the " },
      { kind: "link", text: "Survival Guide", href: LIVING_SURVIVAL_GUIDE_PATH },
      { kind: "text", text: "." },
    ],
    toolsIntro: [
      { kind: "text", text: "These entries mirror the " },
      { kind: "link", text: "Moving to the Netherlands", href: "/netherlands/moving-to-the-netherlands/" },
      { kind: "text", text: " hub and " },
      { kind: "link", text: "Netherlands Survival Guide", href: LIVING_SURVIVAL_GUIDE_PATH },
      { kind: "text", text: " strips—open the full " },
      { kind: "link", text: "Netherlands tools hub", href: "/netherlands/tools/" },
      { kind: "text", text: " when you want every calculator by category." },
    ],
    supplementalToolsEyebrow: "Round out the month",
    supplementalToolsTitle: "Salary, childcare, allowances",
    supplementalToolsDescription: [
      {
        kind: "text",
        text: "Same CardLink pattern as the Survival Guide strip—open when household cash flow needs more than groceries and rides.",
      },
    ],
  },

  sectionNav: [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#start-here", label: "Start here" },
    { href: "#app-categories", label: "App categories" },
    { href: "#transport-apps", label: "Transport apps" },
    { href: "#payment-apps", label: "Payment apps" },
    { href: "#shopping-food-apps", label: "Shopping & food" },
    { href: "#everyday-apps", label: "Everyday life" },
    { href: "#marketplace-apps", label: "Marketplaces" },
    { href: "#media-apps", label: "TV & cinema" },
    { href: "#services-local-apps", label: "DigiD & local" },
    { href: "#optional-apps", label: "Optional apps" },
    { href: "#surprises", label: "What surprises expats" },
    { href: "#helpful-tools", label: "Helpful tools" },
    { href: "#faq", label: "FAQ" },
    { href: "#official-sources", label: "Official sources" },
  ],

  quickStart: [
    {
      title: "First 48 hours",
      badge: "Must-have",
      priority: "high",
      iconKey: "moon",
      intro: "Move, pay at the till, close every OV leg—nothing else competes with these three jobs.",
      bullets: [
        "NS — trains, platforms, rail-first disruption",
        "9292 — any trip that mixes tram, bus, or metro with rail",
        "OVpay — trip history once you actually tap",
        "Maps — walk, bike, offline pins for home and groceries",
        "Bank app (if live) — balance, blocks, alerts while everything is moving",
        "Know Tikkie exists — split bills land in chat; details can wait",
      ],
      footHref: LIVING_GETTING_AROUND_PATH,
      footLabel: "OV deep dive: Getting around",
    },
    {
      title: "First week",
      badge: "Helpful",
      iconKey: "calendarRange",
      intro: "Make the week repeatable: shops, sky, and food when you are too tired to cook.",
      bullets: [
        "Your supermarket app — bonus card + list (AH, Jumbo, or whichever you actually use)",
        "One delivery app that serves your postcode (often Thuisbezorgd)",
        "Weather / rain radar — plans flip fast here",
        "Bank extras — card freeze, secure chat when the account is stable",
        "City operator app — only if 9292 is not enough for your line",
      ],
      footHref: "/netherlands/living/payments/",
      footLabel: "How paying works (Living)",
    },
    {
      title: "First month",
      badge: "Optional",
      iconKey: "home",
      intro: "Add when paperwork forces it—internet, insurer, gemeente—not because lists say so.",
      bullets: [
        "ISP / utility app — after contract + login exist",
        "Insurer / health portal — when claims or cards need your phone",
        "DigiD app — once your username and codes work",
        "Afvalwijzer or your city’s waste app — when the bins multiply",
        "Family planners — when schedules are real, not aspirational",
      ],
      footHref: "/netherlands/living/tools/utilities-services-comparison/",
      footLabel: "Utilities & services comparison",
    },
  ],

  categoryOverview: [
    {
      anchorId: "transport-apps",
      title: "Transport",
      summary: "NS, 9292, OVpay, maps, Uber & Bolt when OV is not enough.",
      iconKey: "trainFront",
      jumpLabel: "See transport apps",
    },
    {
      anchorId: "payment-apps",
      title: "Payments & money",
      summary: "Tikkie, bank, ING / Rabo / ABN examples, Klarna—split, spend, and pay-later with eyes open.",
      iconKey: "wallet",
      jumpLabel: "See payment apps",
    },
    {
      anchorId: "shopping-food-apps",
      title: "Shopping & groceries",
      summary: "AH, Jumbo, Lidl Plus, Picnic, Thuisbezorgd, Too Good To Go—bonus, delivery, and surprise bags.",
      iconKey: "shoppingCart",
      jumpLabel: "See grocery apps",
    },
    {
      anchorId: "shopping-food-apps",
      title: "Food delivery",
      summary: "One platform that really delivers to your postcode.",
      iconKey: "utensilsCrossed",
      jumpLabel: "See delivery apps",
    },
    {
      anchorId: "everyday-apps",
      title: "Communication & everyday life",
      summary: "WhatsApp, weather, translation—the quiet daily layer.",
      iconKey: "messageCircle",
      jumpLabel: "See everyday apps",
    },
    {
      anchorId: "marketplace-apps",
      title: "Bol, Coolblue, Marktplaats & Vinted",
      summary: "Webshop, tech, NL classifieds #1, and fashion resale.",
      iconKey: "package",
      jumpLabel: "See marketplaces",
    },
    {
      anchorId: "media-apps",
      title: "Streaming & cinema",
      summary: "NPO Start (public TV), Ziggo, Videoland, Pathé bios.",
      iconKey: "tv",
      jumpLabel: "See media apps",
    },
    {
      anchorId: "services-local-apps",
      title: "DigiD, bins & city",
      summary: "Government login, waste calendar, investing, hyperlocal rain—plus your gemeente app.",
      iconKey: "shield",
      jumpLabel: "See official & local",
    },
    {
      anchorId: "optional-apps",
      title: "Optional / nice-to-have",
      summary: "Yellowbrick, Komoot, Ticketmaster—plus links back to DigiD & bins.",
      iconKey: "sparkles",
      jumpLabel: "See optional apps",
    },
  ],

  categories: [
    {
      variant: "apps",
      anchorId: "transport-apps",
      eyebrow: "Move first",
      title: "Transport apps",
      subtitle: "Must-haves first—then maps. Tap discipline matters more than downloading everything.",
      appGridClassName: "md:grid-cols-2 xl:grid-cols-3",
      apps: [
        {
          name: "NS",
          category: "transport",
          bestFor: "Trains only—platforms, delays, and anything on yellow-blue rail.",
          whyItMatters: "Rail-specific updates usually show here first.",
          installWhen: "Before your first real train commute or long-distance trip.",
          quickTip: "Keep 9292 for legs that are not rail-shaped end-to-end.",
          badge: "must-have",
          iconKey: "trainFront",
          outbound: { href: LIVING_TRANSPORT_APP_DOWNLOADS.ns.web, label: "NS official site" },
          storeLinks: {
            appStore: { href: LIVING_TRANSPORT_APP_DOWNLOADS.ns.appStore, label: "NS on the App Store" },
            playStore: { href: LIVING_TRANSPORT_APP_DOWNLOADS.ns.playStore, label: "NS on Google Play" },
          },
        },
        {
          name: "9292",
          category: "transport",
          bestFor: "One timeline for train + tram + bus + metro door-to-door.",
          whyItMatters: "NL commutes mix modes; one planner beats guessing the local operator du jour.",
          installWhen: "Day one—once you care about two places (home, work, school).",
          quickTip: "Save one route and rehearse it on a quiet afternoon.",
          badge: "must-have",
          iconKey: "mapPin",
          outbound: { href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].web, label: "9292 official site" },
          storeLinks: {
            appStore: { href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].appStore, label: "9292 on the App Store" },
            playStore: { href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].playStore, label: "9292 on Google Play" },
          },
        },
        {
          name: "OVpay",
          category: "transport",
          bestFor: "Contactless trips—history, receipts, “did I check out?”",
          whyItMatters: "Missed check-outs cost money; OVpay is the paper trail.",
          installWhen: "As soon as tapping is real, not hypothetical.",
          quickTip: "Same card or same phone wallet for the whole leg—never mix.",
          badge: "must-have",
          iconKey: "creditCard",
          outbound: { href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.web, label: "OVpay official site" },
          storeLinks: {
            appStore: { href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.appStore, label: "OVpay on the App Store" },
            playStore: { href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.playStore, label: "OVpay on Google Play" },
          },
        },
        {
          name: "Google Maps",
          category: "transport",
          bestFor: "Walking, biking, place search, rough time-to-walk checks.",
          whyItMatters: "Universal—not NL-specific—but most newcomers lean on it hard week one.",
          installWhen: "First day; pin home, work, grocery offline if possible.",
          quickTip: "Use 9292 for serious multimodal routing in the Netherlands.",
          badge: "strongly-useful",
          iconKey: "mapPinned",
          outbound: { href: "https://maps.google.com/", label: "Google Maps" },
        },
        {
          name: "Uber",
          category: "transport",
          bestFor: "Rides and often Uber Eats in bigger cities—one account for both when coverage exists.",
          whyItMatters:
            "Pricing is dynamic; the app is free. Compare with OV, bike, and Bolt before you make it a habit—surge and tunnel fees add up.",
          installWhen: "Before a late train miss, airport run, or when you want food delivery from the same stack.",
          quickTip: "Check pickup zones at stations—some Dutch hubs only allow taxi stands, not random kerbs.",
          badge: "optional",
          iconKey: "car",
          outbound: { href: "https://www.uber.com/nl/en/", label: "Uber Netherlands" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/uber-request-a-ride/id368677368", label: "Uber on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.ubercab",
              label: "Uber on Google Play",
            },
          },
        },
        {
          name: "Bolt",
          category: "transport",
          bestFor: "Ride-hailing alternative where Bolt operates—often price-competitive with Uber and taxis.",
          whyItMatters:
            "Same caveats as any gig platform: free app, trip pricing in the quote, and city-by-city availability. Cash or card options vary—set payment before you book.",
          installWhen: "When Uber feels thin in your area or you want a second quote on the same route.",
          quickTip: "Verify the plate and name in-app before you open the door—standard safety anywhere.",
          badge: "optional",
          iconKey: "car",
          outbound: { href: "https://bolt.eu/nl/", label: "Bolt Netherlands" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/bolt-een-rit-aanvragen/id675033630", label: "Bolt on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=ee.mtakso.client",
              label: "Bolt on Google Play",
            },
          },
        },
      ],
      footerParagraphs: [
        [
          { kind: "text", text: "Modes, mistakes, and commute depth → " },
          { kind: "link", text: "Getting around in the Netherlands", href: LIVING_GETTING_AROUND_PATH },
          { kind: "text", text: "." },
        ],
      ],
    },
    {
      variant: "apps",
      betweenDividerLabel: "Payments & money",
      anchorId: "payment-apps",
      eyebrow: "Daily money",
      title: "Payment and money apps",
      subtitle: "Debit and contactless rule; Tikkie is how small amounts move in chat.",
      appGridClassName: "md:grid-cols-2 xl:grid-cols-3",
      introMultiClassName: "space-y-2.5 text-sm leading-relaxed text-foreground-muted sm:space-y-3",
      introParagraphs: [
        [
          {
            kind: "text",
            text: "Tills expect chip debit; your bank app runs limits, cards, and alerts. iDEAL-shaped flows appear for bills once your Dutch account exists.",
          },
        ],
        [
          { kind: "link", text: "Tikkie", href: "https://www.tikkie.me/en" },
          {
            kind: "text",
            text: " is the casual split-bill layer—requests in WhatsApp-style threads are normal.",
          },
        ],
        [
          { kind: "text", text: "Buy-now-pay-later (" },
          { kind: "link", text: "Klarna", href: "https://www.klarna.com/nl/" },
          {
            kind: "text",
            text: ") appears at many online checkouts—treat it as structured credit with due dates, not “extra budget.”",
          },
        ],
      ],
      apps: [
        {
          name: "Tikkie",
          category: "payments",
          bestFor: "Splitting tabs and casual IOUs in WhatsApp-style groups.",
          whyItMatters: "Payment requests in chat are normal; this is how many people settle small amounts.",
          installWhen: "Before your first group dinner or shared household buy.",
          quickTip: "You still need a Dutch bank path that can pay or receive requests.",
          badge: "must-have",
          iconKey: "wallet",
          outbound: { href: "https://www.tikkie.me/en", label: "Tikkie official site" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/tikkie/id1112935685", label: "Tikkie on the App Store" },
            playStore: { href: "https://play.google.com/store/apps/details?id=com.abnamro.nl.tikkie", label: "Tikkie on Google Play" },
          },
        },
        {
          name: "Your bank’s app",
          category: "payments",
          bestFor: "Debit, contactless limits, iDEAL-ish flows, fraud alerts.",
          whyItMatters:
            "Money here is app-first; the terminal is only half the workflow. Typical names include ING, Rabobank, ABN AMRO, bunq, Knab, and SNS (Volksbank)—in the store, the publisher must match your bank exactly.",
          installWhen: "The day the account opens—turn notifications on before a busy shop week.",
          quickTip: "Use one medium for OV and shops per leg—mixed card vs phone trips you up.",
          badge: "must-have",
          iconKey: "creditCard",
        },
        {
          name: "ING Bank app",
          category: "payments",
          bestFor: "Concrete App Store / Play links if ING is your bank—cards, limits, iDEAL confirmations, alerts.",
          whyItMatters:
            "One worked example next to the generic “your bank” row; Rabobank, ABN AMRO, bunq, and others publish their own listings with the same jobs.",
          installWhen: "After your ING current account is live—skip if you bank elsewhere.",
          quickTip: "Search your bank’s exact legal name if it is not ING; impostor apps exist.",
          badge: "strongly-useful",
          iconKey: "building2",
          outbound: { href: "https://www.ing.nl/en", label: "ING Netherlands" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/ing-netherlands/id474495017",
              label: "ING on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.ing.mobile",
              label: "ING on Google Play",
            },
          },
        },
        {
          name: "Klarna",
          category: "payments",
          bestFor: "Pay-later and slice-it flows at participating webshops—common beside fashion, electronics, and big retailers.",
          whyItMatters:
            "The app is free; costs depend on the plan you accept at checkout (invoice, instalments, etc.). Read fees and due dates every time—it is not a replacement for a Dutch bank account.",
          installWhen: "When a shop you already use offers Klarna and you are disciplined about repayment.",
          quickTip: "Turn reminders on; missed Klarna deadlines hurt the same way any bill does.",
          badge: "optional",
          iconKey: "sparkles",
          outbound: { href: "https://www.klarna.com/nl/", label: "Klarna Netherlands" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/klarna-shop-now-pay-later/id1115120118",
              label: "Klarna on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.myklarnamobile",
              label: "Klarna on Google Play",
            },
          },
        },
        {
          name: "Rabobank app",
          category: "payments",
          bestFor: "Concrete store links if Rabobank is your bank—same jobs as any major Dutch retail app.",
          whyItMatters:
            "ING and ABN AMRO cards sit beside this one; bunq, Knab, SNS, and others publish their own listings—always match publisher name to your bank.",
          installWhen: "After your Rabo account is active—ignore if you bank elsewhere.",
          quickTip: "Rabobank’s scanner / approval flows sometimes differ from other banks—read the first login mail carefully.",
          badge: "strongly-useful",
          iconKey: "creditCard",
          outbound: { href: "https://www.rabobank.nl/", label: "Rabobank" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/rabobank/id346790636", label: "Rabobank on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.rabomobiel",
              label: "Rabobank on Google Play",
            },
          },
        },
        {
          name: "ABN AMRO app",
          category: "payments",
          bestFor: "Concrete store links if ABN AMRO is your bank—includes iDEAL flows and card controls.",
          whyItMatters:
            "Tikkie originated with ABN AMRO branding in many people’s heads; the banking app is separate from the Tikkie consumer app everyone shares.",
          installWhen: "After your ABN AMRO package is live—skip if you are with another institution.",
          quickTip: "English in the app is usually fine; some mortgage or business menus may stay Dutch.",
          badge: "strongly-useful",
          iconKey: "landmark",
          outbound: { href: "https://www.abnamro.nl/", label: "ABN AMRO" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/abn-amro/id439728011", label: "ABN AMRO on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.abnamro.nl.mobile.payments",
              label: "ABN AMRO on Google Play",
            },
          },
        },
      ],
      footerParagraphs: [
        [
          { kind: "text", text: "Wider payment culture (PIN, iDEAL, tills) sits in " },
          { kind: "link", text: "Payments basics", href: "/netherlands/living/payments/" },
          { kind: "text", text: " when you want editorial depth beyond the home-screen stack." },
        ],
      ],
    },
    {
      variant: "apps",
      betweenDividerLabel: "Groceries & delivery",
      anchorId: "shopping-food-apps",
      eyebrow: "Eat & stock up",
      title: "Shopping, groceries & food delivery",
      subtitle: "Bonus apps for the chain you use; one delivery app that actually serves your door.",
      appGridClassName: "md:grid-cols-2 xl:grid-cols-3",
      introMultiClassName:
        "space-y-2.5 text-sm leading-relaxed text-foreground-muted sm:mb-5 sm:space-y-3",
      introParagraphs: [
        [
          { kind: "text", text: "Supermarket apps save time at self-checkout and replace hunting for a bonus card. For the wider editorial guide to store types, household basics, and shopping rhythm, read " },
          { kind: "link", text: "Shopping & groceries in the Netherlands", href: "/netherlands/living/shopping-groceries/" },
          { kind: "text", text: "." },
        ],
        [
          { kind: "text", text: "Delivery coverage varies by postcode—" },
          { kind: "link", text: "Thuisbezorgd", href: "https://www.thuisbezorgd.nl/en" },
          {
            kind: "text",
            text: " is a common default; check what actually reaches you before you are hungry.",
          },
        ],
        [
          { kind: "text", text: "Sanity-check spend with the " },
          { kind: "link", text: "cost of living calculator", href: "/netherlands/money/tools/cost-of-living-calculator/" },
          { kind: "text", text: " and household lines in the " },
          { kind: "link", text: "utilities & services comparison", href: "/netherlands/living/tools/utilities-services-comparison/" },
          { kind: "text", text: "." },
        ],
        [
          { kind: "link", text: "bol.com", href: "https://www.bol.com/nl/nl/" },
          {
            kind: "text",
            text: " and ",
          },
          { kind: "link", text: "Coolblue", href: "https://www.coolblue.nl/" },
          {
            kind: "text",
            text: " sit in the marketplaces block below; ",
          },
          { kind: "link", text: "Picnic", href: "https://www.picnic.nl/" },
          {
            kind: "text",
            text: " is grocery delivery with its own warehouse rhythm if it serves your postcode.",
          },
        ],
      ],
      footerParagraphs: [
        [
          { kind: "text", text: "Full routine around supermarkets, self-checkout, household basics, and delivery trade-offs → " },
          { kind: "link", text: "Shopping & groceries in the Netherlands", href: "/netherlands/living/shopping-groceries/" },
          { kind: "text", text: "." },
        ],
      ],
      apps: [
        {
          name: "Albert Heijn",
          category: "shopping",
          bestFor: "Digital bonus card, lists, faster self-checkout where AH is your chain.",
          whyItMatters: "Bonus and offers add up; the app replaces digging for a plastic card.",
          installWhen: "Before your second big shop if AH is your default.",
          quickTip: "Open the bonus QR before you start scanning at busy tills.",
          badge: "strongly-useful",
          iconKey: "shoppingCart",
          outbound: { href: "https://www.ah.nl/", label: "Albert Heijn official site" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/albert-heijn-supermarkt/id327535329",
              label: "Albert Heijn on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.icemobile.albertheijn",
              label: "Albert Heijn on Google Play",
            },
          },
        },
        {
          name: "Jumbo",
          category: "shopping",
          bestFor: "Same playbook as AH if Jumbo is your nearest or cheapest option.",
          whyItMatters: "One less friction point at self-checkout and for weekly offers.",
          installWhen: "Only if Jumbo is actually in your rotation.",
          quickTip: "Two chain apps max—more is clutter.",
          badge: "optional",
          iconKey: "shoppingBag",
          outbound: { href: "https://www.jumbo.com/", label: "Jumbo official site" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/jumbo/id936150402", label: "Jumbo on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.icemobile.jumboclient",
              label: "Jumbo on Google Play",
            },
          },
        },
        {
          name: "Thuisbezorgd",
          category: "shopping",
          bestFor: "Delivery aggregation with broad NL coverage—sort by time and reviews.",
          whyItMatters: "Exhausted arrival weeks happen; one trusted app beats five sign-ups.",
          installWhen: "The week you know you will order in.",
          quickTip: "Verify your postcode first—coverage is not uniform outside big cities.",
          badge: "strongly-useful",
          iconKey: "utensilsCrossed",
          outbound: { href: "https://www.thuisbezorgd.nl/en", label: "Thuisbezorgd official site" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/thuisbezorgd-nl/id329472759",
              label: "Thuisbezorgd on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.takeaway.android",
              label: "Thuisbezorgd on Google Play",
            },
          },
        },
        {
          name: "Picnic",
          category: "shopping",
          bestFor: "App-only grocery runs with scheduled delivery slots where Picnic operates.",
          whyItMatters:
            "No shop floor—prices and assortment differ from AH/Jumbo. Free to browse; you pay per order. Check picnic.nl for coverage and any delivery or service fees in your area.",
          installWhen: "When Picnic lists your postcode and you want another grocery channel besides restaurant delivery.",
          quickTip: "Compare basket totals with your usual supermarket for a week before you switch habits.",
          badge: "optional",
          iconKey: "package",
          outbound: { href: "https://www.picnic.nl/", label: "Picnic Netherlands" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/picnic-online-supermarket/id1018175041",
              label: "Picnic on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.picnic.android",
              label: "Picnic on Google Play",
            },
          },
        },
        {
          name: "Lidl Plus",
          category: "shopping",
          bestFor: "Digital Lidl card, scratch coupons, and weekly folder—same idea as AH/Jumbo bonus, different chain.",
          whyItMatters:
            "Free; discounts activate when you scan the in-app card. You only need it if Lidl is in your rotation—skip if you never pass those blue-yellow stores.",
          installWhen: "Before your third Lidl run if you already default there for produce or staples.",
          quickTip: "Activate coupons before checkout—they do not always auto-apply.",
          badge: "optional",
          iconKey: "shoppingCart",
          outbound: { href: "https://www.lidl.nl/", label: "Lidl Netherlands" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/lidl-plus/id1238611143", label: "Lidl Plus on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.lidl.eci.lidlplus",
              label: "Lidl Plus on Google Play",
            },
          },
        },
        {
          name: "Too Good To Go",
          category: "shopping",
          bestFor: "Surprise bags from bakeries, supermarkets, and restaurants—popular in Dutch cities against food waste.",
          whyItMatters:
            "You pay in-app per bag; pickup windows are strict. Not a full grocery substitute—more for experiments, treats, and learning which local shops participate.",
          installWhen: "When you are flexible on contents and can reach the pickup window on time.",
          quickTip: "Favourite good sellers; bags sell out fast after push notifications.",
          badge: "optional",
          iconKey: "utensilsCrossed",
          outbound: { href: "https://www.toogoodtogo.com/nl", label: "Too Good To Go Netherlands" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/too-good-to-go-end-food-waste/id1060683933",
              label: "Too Good To Go on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.app.tgtg",
              label: "Too Good To Go on Google Play",
            },
          },
        },
      ],
    },
    {
      variant: "apps",
      betweenDividerLabel: "Everyday life",
      anchorId: "everyday-apps",
      eyebrow: "Stay reachable",
      title: "Communication & everyday life",
      subtitle: "WhatsApp, radar, translation, and language-learning apps—what makes Tuesday tolerable after maps and OV work.",
      appGridClassName: "md:grid-cols-2 xl:grid-cols-3",
      introMultiClassName: "mb-4 space-y-2.5 text-sm leading-relaxed text-foreground-muted sm:mb-5 sm:space-y-3",
      introParagraphs: [
        [
          {
            kind: "text",
            text: "You already have a map from the transport stack—this block is people, sky, and words you do not know yet.",
          },
        ],
        [
          {
            kind: "text",
            text: "For Dutch beyond quick translation, course apps help: Duolingo has a strong free tier plus optional Super (paid); Babbel is subscription-first after a sample. Memrise, Busuu, and italki are other common adds—prices and trials change, so confirm on each site before you pay.",
          },
        ],
      ],
      apps: [
        {
          name: "WhatsApp",
          category: "everyday",
          bestFor: "Building threads, clubs, schools—where logistics actually happen.",
          whyItMatters: "Many groups skip email for day-to-day coordination.",
          installWhen: "Before you join your first local or housing chat.",
          quickTip: "Star messages with door codes, pickup times, or trash rules.",
          badge: "must-have",
          iconKey: "messageCircle",
          outbound: { href: "https://www.whatsapp.com/", label: "WhatsApp official site" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/whatsapp-messenger/id310633997",
              label: "WhatsApp on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.whatsapp",
              label: "WhatsApp on Google Play",
            },
          },
        },
        {
          name: "Rain radar / weather",
          category: "everyday",
          bestFor: "Next-hour rain and wind—bike vs OV vs umbrella calls.",
          whyItMatters: "Skies change fast; locals glance at radar like they check the clock.",
          installWhen: "Week one—before you trust a sunny morning blindly.",
          quickTip: "Pair with your transport stack when weather flips your mode. RTL’s Buienradar (minute-style graphs) is also listed under DigiD & local if you want both.",
          badge: "strongly-useful",
          iconKey: "cloudRain",
          outbound: { href: "https://www.knmi.nl/en", label: "KNMI — Dutch weather authority" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/knmi-weer/id1225568094",
              label: "KNMI Weer on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.knmi.weer",
              label: "KNMI Weer on Google Play",
            },
          },
        },
        {
          name: "Translation",
          category: "everyday",
          bestFor: "Menus, letters, quick phrases when Dutch outpaces your lessons.",
          whyItMatters: "English works in many places; translation saves tills and official post.",
          installWhen: "Before your first gemeente envelope or Dutch-only menu week.",
          quickTip: "Download offline packs—basement shops and lifts kill signal.",
          badge: "strongly-useful",
          iconKey: "languages",
          outbound: { href: "https://translate.google.com/", label: "Google Translate" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/google-translate/id414706506",
              label: "Google Translate on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.google.android.apps.translate",
              label: "Google Translate on Google Play",
            },
          },
        },
        {
          name: "Duolingo",
          category: "everyday",
          bestFor: "Daily Dutch (or other) drills—short sessions that fit commutes and lunch breaks.",
          whyItMatters:
            "Core lessons are free with ads; good for habit and basics. Super Duolingo (no ads, unlimited hearts, a few extras) is usually advertised around roughly €8–13/month or lower effective monthly on annual plans in the EU—check duolingo.com or the in-app paywall for your current price.",
          installWhen: "When you want structured practice beyond one-off translation.",
          quickTip: "Dutch from English is available; pick a realistic daily goal so the streak does not become a second job.",
          badge: "strongly-useful",
          iconKey: "graduationCap",
          outbound: { href: "https://www.duolingo.com/", label: "Duolingo" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/duolingo-language-lessons/id570060128",
              label: "Duolingo on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.duolingo",
              label: "Duolingo on Google Play",
            },
          },
        },
        {
          name: "Babbel",
          category: "everyday",
          bestFor: "Conversation-style courses—including Dutch—with compact lessons and review loops.",
          whyItMatters:
            "You typically get a free first lesson; full access needs a subscription. Retail pricing is often in the ballpark of about €6–15/month depending on language bundle and how long you commit—babbel.com shows live offers for your region.",
          installWhen: "When you are ready to pay for a course layer and want speaking prompts in the flow.",
          quickTip: "Try Babbel’s sample, run Duolingo’s free path, then decide—you rarely need two paid stacks on day one.",
          badge: "optional",
          iconKey: "bookOpen",
          outbound: { href: "https://www.babbel.com/", label: "Babbel" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/babbel-language-learning/id829587759",
              label: "Babbel on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.babbel.mobile.android.en",
              label: "Babbel on Google Play",
            },
          },
        },
      ],
    },
    {
      variant: "apps",
      betweenDividerLabel: "Nationwide shops & resale",
      anchorId: "marketplace-apps",
      eyebrow: "Delivered or second-hand",
      title: "Bol.com, Coolblue, Marktplaats & Vinted",
      subtitle: "Nationwide webshop, tech retailer, the Dutch classifieds default (cars to couches), and fashion resale—install the lanes you actually use.",
      appGridClassName: "md:grid-cols-2 xl:grid-cols-4",
      introSingleClassName: "mb-4 text-sm leading-relaxed text-foreground-muted sm:mb-5",
      introParagraphs: [
        [
          {
            kind: "text",
            text: "Marktplaats is where much of the Netherlands sells bikes, sofas, and cars peer-to-peer—meet in safe places and use the platform payment guidance when offered.",
          },
        ],
      ],
      apps: [
        {
          name: "bol.com",
          category: "shopping",
          bestFor: "Broad catalog, wish lists, barcode scan in store, pickup points beside many towns.",
          whyItMatters:
            "Often the first place people check after Amazon muscle memory. Free app; you pay per order—watch shipping thresholds and return windows on the product page.",
          installWhen: "When you are furnishing, replacing cables, or ordering books and baby gear online.",
          quickTip: "Check the seller (bol v. marketplace) before you assume return rules.",
          badge: "strongly-useful",
          iconKey: "package",
          outbound: { href: "https://www.bol.com/nl/nl/", label: "bol.com" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/bol/id904894760", label: "bol.com on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.bol.shop",
              label: "bol.com on Google Play",
            },
          },
        },
        {
          name: "Coolblue",
          category: "shopping",
          bestFor: "Laptops, screens, appliances—often same-day or next-day delivery slots and store pickup in bigger cities.",
          whyItMatters:
            "Dutch shoppers know the blue vans. App is free; prices are on the site—delivery windows and install add-ons vary by product.",
          installWhen: "Before you buy a monitor, router, or white good and want tracking that matches local expectations.",
          quickTip: "Their “CoolbluePromise” and delivery communication are the reason people keep the app—not just price.",
          badge: "strongly-useful",
          iconKey: "smartphone",
          outbound: { href: "https://www.coolblue.nl/", label: "Coolblue" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/coolblue/id1174047097", label: "Coolblue on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=eu.coolblue.shop",
              label: "Coolblue on Google Play",
            },
          },
        },
        {
          name: "Vinted",
          category: "shopping",
          bestFor: "Second-hand clothes, kids’ gear, homeware—buyer protection and in-app chat.",
          whyItMatters:
            "Listing is free for private sellers; buyers pay a small protection fee on many orders. Shipping labels are usually prepaid through the app—factor that into your price.",
          installWhen: "When you need to kit out a season cheaply or clear a closet before a move.",
          quickTip: "Read the item thread carefully; disputes are easier when both sides documented condition up front.",
          badge: "optional",
          iconKey: "shoppingBag",
          outbound: { href: "https://www.vinted.nl/", label: "Vinted Netherlands" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/vinted-preloved-marketplace/id632064380",
              label: "Vinted on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=fr.vinted",
              label: "Vinted on Google Play",
            },
          },
        },
        {
          name: "Marktplaats",
          category: "shopping",
          bestFor: "NL’s largest classifieds—furniture, bikes, cars, services, and odd jobs in one feed.",
          whyItMatters:
            "Free to browse; listing fees or bumps may apply for sellers—check marktplaats.nl for current rules. Scams exist; prefer verified flows and in-person handover for high-value items.",
          installWhen: "When you need second-hand furniture fast or want to sell before a move.",
          quickTip: "Save searches with alerts; good deals move in hours on popular categories.",
          badge: "strongly-useful",
          iconKey: "tag",
          outbound: { href: "https://www.marktplaats.nl/", label: "Marktplaats" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/marktplaats-koop-en-verkoop/id373963365",
              label: "Marktplaats on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.marktplaats.android",
              label: "Marktplaats on Google Play",
            },
          },
        },
      ],
    },
    {
      variant: "apps",
      betweenDividerLabel: "Screens & nights out",
      anchorId: "media-apps",
      eyebrow: "When you subscribe",
      title: "NPO Start, Ziggo GO, Videoland & Pathé",
      subtitle: "Public broadcaster streaming, ISP TV app, RTL subscription VOD, and Pathé cinema—match the subscriptions you already pay for.",
      appGridClassName: "md:grid-cols-2 xl:grid-cols-4",
      introSingleClassName: "mb-4 text-sm leading-relaxed text-foreground-muted sm:mb-5",
      introParagraphs: [
        [
          {
            kind: "text",
            text: "Netflix, Disney+, and RTL Play-style bundles also compete—this block focuses on fixtures you hear about in Dutch lunch rooms. Some programmes are geo-restricted abroad; NPO Start Plus is optional inside the same app.",
          },
        ],
      ],
      apps: [
        {
          name: "NPO Start",
          category: "services",
          bestFor: "Catch-up and live NPO 1/2/3, regional channels, and Dutch public-service catalogue on phone or cast.",
          whyItMatters:
            "Core streaming is free with ads; NPO Start Plus removes ads and unlocks extra catalogue for a small monthly fee—check npo.nl/start for current Dutch pricing.",
          installWhen: "When you want Dutch news, Zapp, or talk shows without another paid subscription.",
          quickTip: "Create an optional NPO account to sync favourites across devices.",
          badge: "strongly-useful",
          iconKey: "tv",
          outbound: { href: "https://www.npo.nl/start", label: "NPO Start" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/npo-start/id323998316", label: "NPO Start on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.uitzendinggemist",
              label: "NPO Start on Google Play",
            },
          },
        },
        {
          name: "Ziggo GO",
          category: "services",
          bestFor: "Live TV and on-demand from a Ziggo internet/TV subscription on phone, tablet, or cast.",
          whyItMatters:
            "Useless without an active Ziggo TV package—the app is free for subscribers; your contract sets channel access and any replay rules.",
          installWhen: "After Ziggo is live in your home and you want TV off the big screen.",
          quickTip: "Wi-Fi on your own connection behaves better than random café hotspots for live streams.",
          badge: "optional",
          iconKey: "tv",
          outbound: { href: "https://www.ziggo.nl/", label: "Ziggo" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/ziggo-go/id1156417365", label: "Ziggo GO on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.lgi.ziggotv",
              label: "Ziggo GO on Google Play",
            },
          },
        },
        {
          name: "Videoland",
          category: "services",
          bestFor: "RTL series, Dutch reality, and some films—streaming subscription separate from Ziggo hardware.",
          whyItMatters:
            "Often billed monthly after a trial; pricing tiers differ by resolution and screens—videoland.nl lists current Dutch offers.",
          installWhen: "When you want Dutch-language catalogue depth beyond global streamers.",
          quickTip: "Download-for-offline helps on trains; check rights on the programme page.",
          badge: "optional",
          iconKey: "tv",
          outbound: { href: "https://www.videoland.com/nl/", label: "Videoland" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/videoland/id1570409180", label: "Videoland on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.rtl.videoland.v2",
              label: "Videoland on Google Play",
            },
          },
        },
        {
          name: "Pathé Netherlands",
          category: "services",
          bestFor: "Showtimes, seat pick, Club Pathé pass, and e-tickets for Pathé cinemas nationwide.",
          whyItMatters:
            "Free app; you pay per ticket and upsell. Pathé Thuis is a separate streaming product—do not confuse the cinema app with at-home rental unless that is what you want.",
          installWhen: "Before your first big-screen night or when you use Pathé often enough that queues annoy you.",
          quickTip: "Link the same email as Club Pathé so points and refunds stay in one place.",
          badge: "optional",
          iconKey: "ticket",
          outbound: { href: "https://www.pathe.nl/", label: "Pathé Netherlands" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/path%C3%A9-netherlands/id503092645", label: "Pathé on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=net.sharewire.Pathe2",
              label: "Pathé on Google Play",
            },
          },
        },
      ],
    },
    {
      variant: "apps",
      betweenDividerLabel: "Official NL & hyperlocal",
      anchorId: "services-local-apps",
      eyebrow: "DigiD, bins, money, rain",
      title: "Government, health claims, investing & your street",
      subtitle: "DigiD and MijnGegevens first; then insurer, broker, rain, bins, and your gemeente app.",
      appGridClassName: "md:grid-cols-2 xl:grid-cols-3",
      introMultiClassName: "mb-4 space-y-2.5 text-sm leading-relaxed text-foreground-muted sm:mb-5 sm:space-y-3",
      introParagraphs: [
        [
          {
            kind: "text",
            text: "HollandZorg and DEGIRO are concrete examples—swap in Menzis, Zilveren Kruis, CZ, or your broker if those are your providers.",
          },
        ],
        [
          {
            kind: "text",
            text: "MijnGegevens (MijnOverheid) shows government-held data about you once DigiD is working—Berichtenbox for official mail still lives in the browser for many flows.",
          },
        ],
        [
          {
            kind: "text",
            text: "City apps differ: Amsterdam publishes De Amsterdam App; Rotterdam, Utrecht, The Hague, and others ship their own—search your gemeente name in the store and verify the developer.",
          },
        ],
      ],
      apps: [
        {
          name: "DigiD",
          category: "services",
          bestFor: "Logging into Belastingdienst, DUO, UWV, gemeente portals, and dozens of other Dutch services with the official government app.",
          whyItMatters:
            "Free from Rijksoverheid. You still activate DigiD through the normal registration flow—the app is the convenience layer once you are set up.",
          installWhen: "As soon as you have DigiD credentials—before a letter forces a rushed login.",
          quickTip: "Treat the app PIN like a banking PIN; screenshots of QR login flows are a bad idea.",
          badge: "must-have",
          iconKey: "shield",
          outbound: { href: "https://www.digid.nl/en", label: "DigiD" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/digid/id1208460960", label: "DigiD on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.rijksoverheid.digid.pub",
              label: "DigiD on Google Play",
            },
          },
        },
        {
          name: "MijnGegevens",
          category: "services",
          bestFor: "Official MijnOverheid app to view personal data the government holds—passport reminders, vehicle, income snapshots where exposed.",
          whyItMatters:
            "Free from Rijksoverheid; you log in with DigiD on the same phone. It complements DigiD—it does not replace logging into Belastingdienst or gemeente sites for every task.",
          installWhen: "Soon after DigiD works—useful before ID or car paperwork surprises you.",
          quickTip: "Not every dataset is in the app yet; deep letters may still land in Berichtenbox online.",
          badge: "strongly-useful",
          iconKey: "shield",
          outbound: { href: "https://www.mijnoverheid.nl/", label: "MijnOverheid" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/mijngegevens/id1504052262", label: "MijnGegevens on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.rijksoverheid.mijngegevens.pub",
              label: "MijnGegevens on Google Play",
            },
          },
        },
        {
          name: "HollandZorg Claims",
          category: "services",
          bestFor: "Submitting care invoices quickly if HollandZorg is your Dutch health insurer.",
          whyItMatters:
            "Free app focused on claims photos and status—not a full policy admin console. Other insurers (VGZ, CZ, Menzis, …) publish their own apps with similar jobs.",
          installWhen: "After you are insured with HollandZorg and expect physio, dental, or other reimbursable bills.",
          quickTip: "If you are not on HollandZorg, search your insurer’s exact trade name in the store instead.",
          badge: "optional",
          iconKey: "heartPulse",
          outbound: { href: "https://www.hollandzorg.com/", label: "HollandZorg" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/hollandzorg-claims-app/id1069801091",
              label: "HollandZorg Claims on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.hollandzorg.declaraties",
              label: "HollandZorg Claims on Google Play",
            },
          },
        },
        {
          name: "DEGIRO",
          category: "services",
          bestFor: "Checking positions, placing trades, and reading fills on a Dutch-accessible retail broker.",
          whyItMatters:
            "App download is free; trading carries fees and market risk per DEGIRO’s tariff PDF—not investment advice. Use only if you already chose this broker.",
          installWhen: "After you have opened and funded a DEGIRO account—not before you understand fees and risk.",
          quickTip: "Enable two-factor authentication in the web portal before you rely on the app abroad.",
          badge: "optional",
          iconKey: "trendingUp",
          outbound: { href: "https://www.degiro.nl/", label: "DEGIRO Netherlands" },
          storeLinks: {
            appStore: {
              href: "https://apps.apple.com/nl/app/degiro-mobiel-beleggen/id1099174456",
              label: "DEGIRO on the App Store",
            },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.degiro.trader",
              label: "DEGIRO on Google Play",
            },
          },
        },
        {
          name: "Buienradar",
          category: "services",
          bestFor: "RTL’s minute-by-minute rain graphs—many people pair it with KNMI for a second opinion.",
          whyItMatters:
            "Free with ads; a paid tier (often advertised around a few euros per month) removes ads—check in-app for the current Dutch price.",
          installWhen: "Week one if you bike or walk and want obsessive now-cast style charts.",
          quickTip: "Notifications for “rain starting soon” drain battery—toggle per location.",
          badge: "strongly-useful",
          iconKey: "cloudRain",
          outbound: { href: "https://www.buienradar.nl/", label: "Buienradar" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/buienradar-weer/id621542526", label: "Buienradar on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.supportware.Buienradar",
              label: "Buienradar on Google Play",
            },
          },
        },
        {
          name: "Afvalwijzer",
          category: "services",
          bestFor: "Which bin goes out when for many Dutch addresses—residual, paper, glass, organic, textile.",
          whyItMatters:
            "Free; data comes from your gemeente rules piped into one UI. If your city uses a different app, follow the local letter instead.",
          installWhen: "The week you move into a house with four coloured bins and no intuition yet.",
          quickTip: "Set your exact postcode + house number; collection days are not uniform nationally.",
          badge: "strongly-useful",
          iconKey: "trash2",
          outbound: { href: "https://www.afvalwijzer.nl/", label: "Afvalwijzer" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/afvalwijzer/id479597294", label: "Afvalwijzer on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.addcomm.afvalwijzer",
              label: "Afvalwijzer on Google Play",
            },
          },
        },
        {
          name: "De Amsterdam App",
          category: "services",
          bestFor: "Waste dates, meldingen (street issues), Stadspas, and gemeente shortcuts—if Amsterdam is your gemeente.",
          whyItMatters:
            "Free from Gemeente Amsterdam. Other cities publish different names and feature sets; this row is a concrete store example, not a claim that every burg works the same.",
          installWhen: "After you have an Amsterdam address and want official reminders instead of guessing grey-bin week.",
          quickTip: "Rotterdam, Utrecht, and Den Haag have their own listings—search “gemeente + your city”.",
          badge: "optional",
          iconKey: "mapPinned",
          outbound: { href: "https://www.amsterdam.nl/", label: "Gemeente Amsterdam" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/de-amsterdam-app/id1624518847", label: "De Amsterdam App on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=nl.amsterdam.app",
              label: "De Amsterdam App on Google Play",
            },
          },
        },
      ],
    },
    {
      variant: "optional-blurbs",
      betweenDividerLabel: "Nice-to-have",
      anchorId: "optional-apps",
      eyebrow: "Later / situational",
      title: "Nice-to-have & optional setup",
      subtitle: "Install when you have the car, ticket, or letter—not because lists say so.",
      callout: {
        badge: "Optional",
        title: "Later is fine",
        body: "Parking and ticket wallets still wait until you need them—DigiD, Afvalwijzer, and gemeente examples now have their own block above so you are not guessing.",
      },
      blurbs: [
        {
          title: "Parking",
          body: "Yellowbrick covers on-street and many garage flows across NL; meters often show their brand. ANWB Onderweg and Parkmobile also show up—match the logo on the pole or ticket machine, not a random search result.",
          iconKey: "mapPin",
          outbound: { href: "https://yellowbrick.nl/", label: "Yellowbrick" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/yellowbrick-parkeren/id394867179", label: "Yellowbrick on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.oneshoe.yellowbrick",
              label: "Yellowbrick on Google Play",
            },
          },
        },
        {
          title: "Bike navigation",
          body: "Komoot is widely used for Dutch bike touring and voice turn-by-turn on paths Google barely labels. The first region is free; extra maps or Premium are paid—check komoot.com. Short urban hops still work fine in Google Maps’ bike layer.",
          iconKey: "bike",
          outbound: { href: "https://www.komoot.com/", label: "Komoot" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/komoot-hike-bike-run/id447374873", label: "Komoot on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=de.komoot.android",
              label: "Komoot on Google Play",
            },
          },
        },
        {
          title: "Events & tickets",
          body: "Ticketmaster NL covers many concerts and shows; some venues push Eventim, See Tickets, or their own wallet—install the issuer the confirmation email names. Keep tickets offline once downloaded; door scanners do not care about your inbox.",
          iconKey: "ticket",
          outbound: { href: "https://www.ticketmaster.nl/", label: "Ticketmaster Netherlands" },
          storeLinks: {
            appStore: { href: "https://apps.apple.com/nl/app/ticketmaster-koop-tickets/id500003565", label: "Ticketmaster on the App Store" },
            playStore: {
              href: "https://play.google.com/store/apps/details?id=com.ticketmaster.tickets.international",
              label: "Ticketmaster on Google Play",
            },
          },
        },
        {
          title: "Municipality & waste",
          body: "Afvalwijzer, DigiD, MijnGegevens, and De Amsterdam App already sit in the official block with store links. For other cities, search “gemeente + city name” in your store and match the developer to your burgemeester’s site.",
          iconKey: "home",
          outbound: { href: "https://www.gemeente.nl/", label: "gemeente.nl — find your municipality" },
          seeAlsoOnPage: {
            href: `${LIVING_ESSENTIAL_APPS_PATH}#services-local-apps`,
            label: "Open DigiD, bins & city apps",
          },
        },
      ],
    },
  ],

  surprises: [
    "Fewer apps, chosen well, beat a home screen of half-used icons.",
    "Transport + tap discipline earn a slot before any productivity toy.",
    "People live in bank apps here more than some cultures live in cash or credit.",
    "Supermarket bonus apps pay off fast once you shop the same chain twice a week.",
    "Radar beats optimism—Dutch plans bend around rain and wind.",
    "The boring stack (maps, bank, OV) outsizes flashy “expat” apps most weeks.",
    "Marktplaats is the unofficial national attic—furniture and bikes move fast if you are patient with messages.",
  ],

  faq: [
    {
      id: "first-downloads",
      question: "Which apps should I download first after moving to the Netherlands?",
      answer:
        "NS, 9292, maps, and your bank app if it works. Add OVpay when you start tapping. Add Tikkie before the first shared bill. Install the official DigiD app once your login exists, then MijnGegevens when you want government data snapshots on your phone. Supermarket and delivery apps in week one once you know your chain and postcode. Add a course-style language app (Duolingo, Babbel, or similar) when you want structured Dutch practice beyond quick translation.",
    },
    {
      id: "ns-and-9292",
      question: "Do I need both NS and 9292?",
      answer:
        "Usually yes if you ride trains: NS for rail detail, 9292 when the trip mixes modes. Tram-only lifers might skip NS—most newcomers are not tram-only.",
    },
    {
      id: "pt-payment-app",
      question: "Do I need an app to pay for public transport?",
      answer:
        "You need a valid tap (card or supported wallet) and clean check-in/out—not necessarily a ticket app on day one. OVpay helps once history and receipts matter.",
    },
    {
      id: "split-bills",
      question: "Which app is best for splitting bills?",
      answer:
        "Tikkie is the everyday default for small groups, if your bank can send or pay requests. Bigger or formal splits may stay in your bank app or a sheet.",
    },
    {
      id: "grocery-apps",
      question: "Which grocery apps are most useful?",
      answer:
        "The app for the chain you actually use—often AH or Jumbo for bonus and lists. Two apps only if you really split shops.",
    },
    {
      id: "dutch-language",
      question: "Do I need Dutch to use these apps?",
      answer:
        "Many bank, travel, and delivery apps offer English or clear UI. Some insurer or gemeente flows stay Dutch—translation offline packs help.",
    },
    {
      id: "learn-dutch-apps",
      question: "Which apps help me learn Dutch?",
      answer:
        "Use Google Translate for instant lookups. Duolingo gives a long free path plus optional Super (paid, pricing varies—check the app or duolingo.com). Babbel is subscription-first after a sample; Memrise, Busuu, and tutors (e.g. italki) are common adds. Always confirm current prices and trials on the official site before you subscribe.",
    },
    {
      id: "first-week",
      question: "What apps matter most in the first week?",
      answer:
        "Transport stack, maps, working pay path, your supermarket app, one delivery app with real coverage, and weather/radar before you bet on bike-only commuting.",
    },
    {
      id: "weather-rain",
      question: "Are there apps for weather and rain planning?",
      answer:
        "Yes—radar is part of commute culture. KNMI Weer is the official institute app; Buienradar adds RTL-style minute graphs. Many people run one or both; pair either with your transport stack when rain changes the plan.",
    },
    {
      id: "digid-app",
      question: "Do I need the DigiD app?",
      answer:
        "You need a working DigiD login for many government sites; the app is the easiest way to approve logins on your phone once your account is active. Download only the Rijksoverheid-published listing and keep the app PIN private. MijnGegevens is a separate official app for viewing some government-held data about you once DigiD works.",
    },
  ],

  references: {
    sectionId: "official-sources",
    heading: "Official sources & useful references",
    description: [
      {
        kind: "text",
        text: "For exact fares, tap rules, and forecasts, use official sources—this page stays practical, not a data feed.",
      },
    ],
    links: [
      { href: LIVING_TRANSPORT_APP_DOWNLOADS.ns.web, label: "NS — Dutch Railways (English) →" },
      { href: LIVING_TRANSPORT_APP_DOWNLOADS["9292"].web, label: "9292 — journey planner →" },
      { href: LIVING_TRANSPORT_APP_DOWNLOADS.ovpay.web, label: "OVpay — contactless travel →" },
      { href: "https://www.knmi.nl/en", label: "KNMI — Royal Netherlands Meteorological Institute →" },
      { href: "https://www.digid.nl/en", label: "DigiD — government login →" },
      { href: "https://www.mijnoverheid.nl/", label: "MijnOverheid — personal government portal →" },
      { href: "https://www.afvalwijzer.nl/", label: "Afvalwijzer — waste calendar (many municipalities) →" },
      { href: "https://www.marktplaats.nl/", label: "Marktplaats — classifieds →" },
    ],
    footnote: [
      { kind: "text", text: "Bank apps, Tikkie, and supermarket downloads ship through your platform store—verify publisher names before you install. For transport depth beyond apps, open " },
      { kind: "link", text: "Getting around in the Netherlands", href: LIVING_GETTING_AROUND_PATH },
      { kind: "text", text: "." },
    ],
  },

  relatedTools: [
    {
      title: "Cost of living calculator",
      description: "Anchor monthly bands so grocery, delivery, and OV choices sit inside a budget you can defend.",
      href: "/netherlands/money/tools/cost-of-living-calculator/",
      ctaLabel: "Run the numbers",
      compact: true,
    },
    {
      title: "Rent affordability calculator",
      description: "Stress-test rent with realistic headroom—before delivery apps become emotional support.",
      href: "/netherlands/housing/tools/rent-affordability-calculator/",
      ctaLabel: "Check rent headroom",
      compact: true,
      iconKey: "building2",
    },
    {
      title: "Utilities & services comparison",
      description: "Line up internet and household packages so month-two bills match what you assumed in week one.",
      href: "/netherlands/living/tools/utilities-services-comparison/",
      ctaLabel: "Compare packages",
      compact: true,
    },
    {
      title: "City comparison tool",
      description: "Compare commute, cost, and lifestyle fit—useful before you hard-pin every local app.",
      href: "/netherlands/tools/city-comparison/",
      ctaLabel: "Compare cities",
      compact: true,
      iconKey: "mapPinned",
    },
    {
      title: "Netherlands Survival Guide",
      description: "The broader Living hub for first-week rhythm, topic cards, and FAQs beside this app guide.",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      ctaLabel: "Open Survival Guide",
      compact: true,
      iconKey: "trainFront",
    },
    {
      title: "Getting around in the Netherlands",
      description: "NS, 9292, OVpay, modes, and commuting reality when transport needs more than install tips.",
      href: LIVING_GETTING_AROUND_PATH,
      ctaLabel: "Read transport guide",
      compact: true,
      iconKey: "route",
    },
  ],
};
