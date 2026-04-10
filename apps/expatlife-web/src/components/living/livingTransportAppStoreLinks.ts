/**
 * Official web + app store URLs for core Dutch transport apps (NS, 9292, OVpay).
 * Used on Getting around and Essential apps so links stay in sync.
 */
export const LIVING_TRANSPORT_APP_DOWNLOADS = {
  ns: {
    web: "https://www.ns.nl/en",
    appStore: "https://apps.apple.com/app/ns-travel-planner/id370362301",
    playStore: "https://play.google.com/store/apps/details?id=nl.ns.android.activity",
  },
  "9292": {
    web: "https://www.9292.nl/en",
    appStore: "https://apps.apple.com/app/9292-reisplanner-ov-e-ticket/id556557690",
    playStore: "https://play.google.com/store/apps/details?id=nl.negentwee",
  },
  ovpay: {
    web: "https://www.ovpay.nl/en",
    appStore: "https://apps.apple.com/app/ovpay/id1542164084",
    playStore: "https://play.google.com/store/apps/details?id=nl.tls.ovpay",
  },
} as const;
