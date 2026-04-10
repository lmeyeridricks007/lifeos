import {
  LIVING_DAILY_LIFE_PATH,
  LIVING_ESSENTIAL_APPS_PATH,
  LIVING_GETTING_AROUND_PATH,
  LIVING_SURVIVAL_GUIDE_PATH,
} from "@/src/components/living/livingPillarContent";
import type {
  LivingWeatherFaqItem,
  LivingWeatherMisunderstanding,
  LivingWeatherQuickStartStage,
  LivingWeatherReferences,
  LivingWeatherRelatedTools,
  LivingWeatherSeason,
  LivingWeatherTips,
} from "./livingWeather.types";

export const livingWeatherQuickStart: LivingWeatherQuickStartStage[] = [
  {
    title: "First week",
    badge: "Start here",
    priority: "high",
    iconKey: "umbrella",
    intro: "Do not try to predict the weather perfectly. Just stop it from catching you out in simple daily moments.",
    bullets: [
      "Assume one day can feel different morning to evening",
      "Carry a light rain layer or a small backup umbrella",
      "Treat wind seriously, even on mild-looking days",
      "Check the weather before your first real commute",
      "Leave extra time if you are walking or biking in rough weather",
    ],
    footHref: LIVING_SURVIVAL_GUIDE_PATH,
    footLabel: "Pair this with the Survival Guide",
  },
  {
    title: "First month",
    badge: "Build a routine",
    iconKey: "bike",
    intro: "After the first week, weather becomes more about comfort and planning than surprise.",
    bullets: [
      "Notice how wind and rain change bike and walking comfort",
      "Buy one good outer layer instead of lots of extra clothing",
      "Pay attention to how grey days affect your energy",
      "Use one weather app and check it before leaving home",
      "Have a simpler travel option for rough-weather days",
    ],
    footHref: LIVING_ESSENTIAL_APPS_PATH,
    footLabel: "See the app guide",
  },
  {
    title: "Once you are settled",
    badge: "Keep it simple",
    iconKey: "cloudSun",
    intro: "Once you settle in, you stop waiting for perfect weather and start preparing for normal Dutch weather instead.",
    bullets: [
      "Dress for wind and rain more than the temperature number",
      "Let route choice and timing matter as much as the weather app",
      "Treat rough weather as normal, not as a disaster day",
      "Keep one reliable jacket, one good bag setup, and one backup commute plan",
      "Use the weather app to adjust, not run your whole day",
    ],
    footHref: "/netherlands/first-90-days-netherlands/",
    footLabel: "Place it in your first 90 days",
  },
];

export const livingWeatherSeasons: LivingWeatherSeason[] = [
  {
    title: "Spring",
    badge: "Mixed and changeable",
    intro: "Brighter than winter, but still cool, windy, and hard to trust.",
    whatItFeelsLike: "Spring often feels nicer than winter, but not steady yet.",
    whatChanges: "Days start feeling easier again, but the same week can swing between pleasant and surprisingly cold.",
    whatToWear: "Use light layers plus a proper outer layer rather than dressing for sunshine alone.",
    newcomerSurprise: "One bright afternoon does not mean spring has fully arrived.",
    iconKey: "leaf",
  },
  {
    title: "Summer",
    badge: "Pleasant, but not always hot",
    intro: "Often pleasant and bright, but not perfect summer weather every day.",
    whatItFeelsLike: "Lighter and easier, but still not always hot or dry.",
    whatChanges: "Long daylight helps commuting and after-work plans, but rain and wind can still cut through the day.",
    whatToWear: "Lighter clothes help, but it still makes sense to keep a layer or rain option nearby.",
    newcomerSurprise: "A warm morning does not mean the whole day will stay that way.",
    iconKey: "sun",
  },
  {
    title: "Autumn",
    badge: "Windy and routine-heavy",
    intro: "Wetter, windier, and much more about getting on with normal life.",
    whatItFeelsLike: "This is often when Dutch weather starts feeling more tiring and more noticeable.",
    whatChanges: "Commutes feel rougher, evenings darken quickly, and small weather annoyances start stacking up.",
    whatToWear: "This is when a solid jacket, better shoes, and a useful bag setup really start paying off.",
    newcomerSurprise: "Autumn is usually when weather starts shaping your day much more.",
    iconKey: "cloudRain",
  },
  {
    title: "Winter",
    badge: "Often dark, damp, and grey",
    intro: "Usually more dark, wet, and grey than snowy or extreme.",
    whatItFeelsLike: "Winter often feels harder because of low light and wet days rather than very cold weather.",
    whatChanges: "Short daylight affects mood, energy, and routine more than temperature alone for many newcomers.",
    whatToWear: "Warm layers still matter, but staying dry and blocking wind often matters even more.",
    newcomerSurprise: "The hard part is often the repeated dark and damp, not extreme cold.",
    iconKey: "snowflake",
  },
];

export const livingWeatherTips: LivingWeatherTips = {
  quickStartCallout: {
    eyebrow: "Keep it realistic",
    title: "You do not need to become a weather expert",
    body: "You just need a few simple habits: check once, dress for change, and know when rough weather means a different route or an easier way to travel.",
  },
  feelLikeCards: [
    {
      title: "Why weather matters more than newcomers expect",
      badge: "Daily-life reality",
      body: "In the Netherlands, weather affects biking, walking, public transport, and time outside. That makes it feel like a bigger part of daily life than in places where people mostly drive from place to place.",
      bullets: [
        "You are outside more during normal errands and commuting",
        "Wind and rain affect comfort fast",
        "Daily plans often include walking, biking, or waiting outdoors",
      ],
      iconKey: "mapPinned",
    },
    {
      title: "Wind and rain often matter more than temperature",
      badge: "What catches people out",
      body: "A day can look mild and still feel unpleasant because of wind, wet air, and steady rain. That is why newcomers often read the weather wrong at first.",
      bullets: [
        "Mild does not always feel easy",
        "Wet and windy can feel harder than colder but calmer weather",
        "The outside number does not tell the whole story",
      ],
      iconKey: "wind",
      tone: "accent",
    },
    {
      title: "Commuting changes your experience of weather",
      badge: "Big difference",
      body: "The same weather feels very different if you are biking for twenty minutes, walking to a tram, or only going a short distance.",
      bullets: [
        "Bike commutes make wind matter more",
        "Walking plus waiting makes rain matter more",
        "Door-to-door planning matters more than newcomers expect",
      ],
      iconKey: "bike",
    },
    {
      title: "Mild weather can still feel tiring",
      badge: "Good to know",
      body: "The Netherlands is usually not about extreme cold or extreme heat. The tiring part is often repeated grey days, wet air, and how often weather interrupts small everyday moments.",
      iconKey: "cloudRain",
    },
  ],
  feelLikeCallout: {
    eyebrow: "Bottom line",
    title: "Mild does not always mean easy",
    body: "That is the main thing to understand early. Weather matters because it affects commuting, walking, biking, and energy more than many newcomers expect.",
  },
  commuteCards: [
    {
      title: "Cycling in wind and rain",
      badge: "Bike reality",
      body: "Wind can matter more than rain when you are biking. A route that feels easy on a calm day can feel slow, tiring, or exposed in rough weather.",
      bullets: [
        "Headwind changes effort more than newcomers expect",
        "Rain changes comfort, visibility, and confidence",
        "Bad weather days are when route choice matters most",
      ],
      iconKey: "bike",
      tone: "accent",
    },
    {
      title: "Public transport on rough-weather days",
      badge: "OV usually feels easier",
      body: "Train, tram, and bus days often feel much easier when the weather is rough, especially if your normal plan includes biking or longer walks.",
      bullets: [
        "Rough weather makes waiting outdoors feel longer",
        "Door-to-door planning matters more than usual",
        "A small weather change can make public transport the better choice",
      ],
      iconKey: "trainFront",
    },
    {
      title: "Your commute changes how weather feels",
      badge: "Big difference",
      body: "Two people in the same city can experience the same day very differently depending on whether they bike, walk, change trains, or work mostly from home.",
      bullets: [
        "Weather matters more on exposed routes",
        "Longer outdoor transfers add stress fast",
        "Housing choice and commute design affect comfort all year",
      ],
      iconKey: "briefcaseBusiness",
    },
    {
      title: "Good route habits help more than checking the weather all day",
      badge: "Practical planning",
      body: "Checking the weather helps, but what matters most is knowing your backup route, your easier travel option, and how much extra time rough weather usually adds.",
      iconKey: "mapPinned",
    },
  ],
  commuteCallout: {
    eyebrow: "Useful habit",
    title: "Plan the route, not just the clothes",
    body: "On rough-weather days, the smart move is often changing how you get somewhere, giving yourself more time, or accepting that public transport is the better choice.",
  },
  clothingCards: [
    {
      title: "Good first purchases",
      badge: "Start here",
      body: "A good outer layer, comfortable shoes for wet days, and a bag that keeps your things dry usually matter more than lots of extra clothing.",
      bullets: [
        "A windproof or waterproof outer layer",
        "Shoes you can trust in wet weather",
        "A bag that handles rain without drama",
      ],
      iconKey: "shoppingBag",
      tone: "accent",
    },
    {
      title: "Layers help more than bulk",
      badge: "Easy win",
      body: "Dutch weather usually works better with flexible layers than one heavy outfit. Conditions change, and inside can feel very different from outside.",
      bullets: [
        "Layer for wind, rain, and changing temperatures",
        "Avoid dressing only for the weather at one moment of the day",
        "A useful outer layer often matters more than extra thickness",
      ],
      iconKey: "cloudSun",
    },
    {
      title: "Rain jacket vs umbrella",
      badge: "What usually works",
      body: "Umbrellas can help, but wind often makes a good rain jacket more useful for everyday travel. Many people keep an umbrella as backup, not as the main plan.",
      bullets: [
        "Umbrellas are less helpful in strong wind",
        "Rain gear is often better when biking or walking farther",
        "The most useful setup depends on your commute",
      ],
      iconKey: "umbrella",
    },
    {
      title: "What to keep with you",
      badge: "Everyday carry",
      body: "A small weather-ready setup makes normal Dutch days easier without making you feel overprepared.",
      bullets: [
        "A compact rain backup or outer layer",
        "A bag that handles wet conditions well",
        "One extra layer when the day looks changeable",
      ],
      iconKey: "backpack",
    },
  ],
  routineCards: [
    {
      title: "Dark days can change your energy",
      badge: "This is normal",
      body: "For many newcomers, darker months affect energy, mood, and routine more than cold itself. That does not mean something is wrong. It often means you need a bit more structure.",
      iconKey: "moonStar",
    },
    {
      title: "Lighter months can feel much easier",
      badge: "Season shift",
      body: "Longer daylight often makes commuting, social plans, and day-to-day energy feel easier. Many people notice a real difference in how the week feels.",
      iconKey: "sun",
      tone: "accent",
    },
    {
      title: "Simple routines help",
      badge: "Keep it calm",
      body: "Getting outside when you can, keeping a clear routine, and using light where helpful are often enough to make darker weeks feel easier.",
      bullets: [
        "Get daylight when possible",
        "Keep a steady routine on darker weeks",
        "Do not wait for perfect weather to leave the house",
      ],
      iconKey: "sparkles",
    },
  ],
  adaptCards: [
    {
      title: "Check the weather, but do not overthink it",
      badge: "Good default",
      body: "A quick check before you leave helps. Checking the weather all day usually does not.",
      iconKey: "cloudSun",
    },
    {
      title: "Dress for wind and rain more than the temperature number",
      badge: "What matters most",
      body: "The number alone usually tells you less than newcomers expect. Wind, wet air, and how long you are outside matter more.",
      iconKey: "wind",
      tone: "accent",
    },
    {
      title: "Adapt the commute, not just the clothes",
      badge: "Often overlooked",
      body: "On rough days, the smarter move is often changing your route or how you travel rather than trying to fight the weather with clothes alone.",
      iconKey: "trainFront",
    },
    {
      title: "Let weather adaptation become routine",
      badge: "Keep it simple",
      body: "The aim is not to beat Dutch weather. It is to make it normal enough that it stops taking up so much space in your head.",
      iconKey: "sparkles",
    },
  ],
  adaptCallout: {
    eyebrow: "Useful reminder",
    title: "You can handle this without checking the weather all day",
    body: "One good jacket, one quick check before leaving, and one backup plan for rough days usually do more than lots of complicated planning.",
  },
};

export const livingWeatherMisunderstandings: LivingWeatherMisunderstanding[] = [
  {
    chip: "Wind",
    title: "Wind matters more than the temperature number.",
    body: "A mild day can still feel rough when you are biking or walking in strong wind.",
  },
  {
    chip: "Rain",
    title: "Mild weather can still feel uncomfortable if you are outside a lot.",
    body: "The weather can look fine on your app and still feel tiring when your day includes walking, biking, and waiting outside.",
  },
  {
    chip: "Darkness",
    title: "Dark afternoons can affect your energy more than you expect.",
    body: "For many newcomers, the shorter days feel like the bigger change rather than the cold itself.",
  },
  {
    chip: "Clothing",
    title: "A good jacket matters more than lots of random extra clothes.",
    body: "The right outer layer often does more for comfort than just adding more things underneath.",
  },
  {
    chip: "Routine",
    title: "Your commute changes how you experience weather.",
    body: "Biking, walking, and public transport can make the same weather feel very different from person to person.",
  },
  {
    chip: "Culture",
    title: "Dutch daily life keeps moving in weather many newcomers would avoid.",
    body: "That does not mean people enjoy rough weather. It usually means they are used to dressing for it and getting on with the day.",
  },
];

export const livingWeatherFaq: LivingWeatherFaqItem[] = [
  {
    id: "weather-like",
    question: "What is the weather really like in the Netherlands?",
    answer:
      "Usually more changeable, windy, wet, and grey than very hot or very cold. For many newcomers, the main change is not the temperature. It is how often weather affects normal daily life.",
  },
  {
    id: "always-rainy",
    question: "Is Dutch weather always rainy?",
    answer:
      "No, but rain is common enough that it affects plans and what you carry. The bigger point is that conditions change quickly and often feel wetter or windier than newcomers expect.",
  },
  {
    id: "too-windy-bike",
    question: "Is it too windy to bike?",
    answer:
      "Usually not, but wind can make biking much harder or slower than you expect. On rough days, many people simply change their route, timing, or how they travel.",
  },
  {
    id: "what-to-wear",
    question: "What should I wear in the Netherlands?",
    answer:
      "Layers plus one good outer layer usually matter most. Dress for wind and rain more than the temperature number, and use shoes and a bag that work well in wet weather.",
  },
  {
    id: "winter-cold",
    question: "Is winter in the Netherlands very cold?",
    answer:
      "Often not extremely cold. For many people it feels more dark, wet, and grey than deeply freezing.",
  },
  {
    id: "why-weather-matters",
    question: "Why do people say Dutch weather affects daily life so much?",
    answer:
      "Because daily life often includes biking, walking, waiting outside, and changing travel plans. Weather matters more when more of normal life happens outdoors.",
  },
  {
    id: "special-gear",
    question: "Do I need special gear for commuting?",
    answer:
      "Not usually special gear, but a good outer layer, decent shoes, and a bag that works in the rain help a lot. How you travel matters more than buying lots of extra things.",
  },
  {
    id: "dark-days",
    question: "How do people handle dark winter days?",
    answer:
      "Usually with routine, getting outside when possible, using light where helpful, and accepting that lower-energy weeks can be part of the season.",
  },
];

export const livingWeatherReferences: LivingWeatherReferences = {
  title: "Official sources and useful references",
  intro:
    "Use this section for official weather and travel updates. For day-to-day weather habits, use the guide above. For live conditions and warnings, use the sources below.",
  links: [
    {
      href: "https://www.knmi.nl/over-het-knmi/about",
      label: "KNMI - Royal Netherlands Meteorological Institute",
    },
    {
      href: "https://www.knmi.nl/nederland-nu/weer/waarschuwingen",
      label: "KNMI - official weather warnings",
    },
    {
      href: "https://www.ns.nl/reisinformatie/actuele-situatie-op-het-spoor/",
      label: "NS - current rail situation",
    },
    {
      href: "https://9292.nl/en",
      label: "9292 - public transport planner",
    },
  ],
  footer:
    "Pair official weather and transport updates with ExpatCopilot's Getting Around, Essential Apps, Daily Life Basics, and Survival Guide pages when you want the everyday-life side of the same situation.",
};

export const livingWeatherRelatedTools: LivingWeatherRelatedTools = {
  planningTools: [
    {
      title: "City Comparison Tool",
      description: "Helpful when you want to compare cities, commuting differences, and how location can change everyday weather life.",
      href: "/netherlands/tools/city-comparison/",
      ctaLabel: "Compare cities",
      iconKey: "mapPinned",
    },
    {
      title: "Rent Affordability Calculator",
      description: "Useful when weather and commute comfort affect where you want to live and how far you want to travel each day.",
      href: "/netherlands/housing/tools/rent-affordability-calculator/",
      ctaLabel: "Check rent headroom",
      iconKey: "shoppingBag",
    },
    {
      title: "Job Offer Comparison Tool",
      description: "Good when commuting, office days, and time outside all affect how a job will feel each week.",
      href: "/netherlands/work/tools/job-offer-comparison/",
      ctaLabel: "Compare job offers",
      iconKey: "briefcaseBusiness",
    },
    {
      title: "Cost of Living Calculator",
      description: "Helpful when weather affects travel choices, clothing costs, and everyday spending.",
      href: "/netherlands/money/tools/cost-of-living-calculator/",
      ctaLabel: "Estimate monthly costs",
      iconKey: "sparkles",
    },
  ],
  livingGuides: [
    {
      title: "Netherlands Survival Guide",
      description: "Start here for the wider first-week picture: transport, apps, payments, weather, and the rest of the Living stack.",
      href: LIVING_SURVIVAL_GUIDE_PATH,
      ctaLabel: "Open Survival Guide",
      iconKey: "sparkles",
    },
    {
      title: "Getting Around",
      description: "Use this when wind, rain, and route planning are changing how your commute actually feels.",
      href: LIVING_GETTING_AROUND_PATH,
      ctaLabel: "Read transport guide",
      iconKey: "trainFront",
    },
    {
      title: "Essential Apps",
      description: "Useful when you want the weather, transport, map, and planning apps that make rough-weather days easier to manage.",
      href: LIVING_ESSENTIAL_APPS_PATH,
      ctaLabel: "Open the app guide",
      iconKey: "cloudRain",
    },
    {
      title: "Daily Life Basics",
      description: "Helpful when weather starts affecting errands, shopping habits, and the shape of an ordinary Dutch week.",
      href: LIVING_DAILY_LIFE_PATH,
      ctaLabel: "Read Daily Life Basics",
      iconKey: "shoppingBag",
    },
  ],
};
