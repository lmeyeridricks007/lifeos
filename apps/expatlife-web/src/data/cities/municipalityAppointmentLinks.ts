/**
 * City-specific municipality registration appointment entry points.
 * Used where booking routes genuinely differ (Amsterdam / The Hague / Eindhoven).
 * Do not expand into thin per-gemeente pages — link live official booking only.
 */

export type MunicipalityAppointmentLink = {
  city: string;
  cityGuideHref: string;
  /** What is different about this gemeente's booking path */
  routeDifference: string;
  waitOrientation: string;
  /** Primary official booking / registration entry URLs */
  bookings: ReadonlyArray<{ label: string; url: string }>;
};

export const AMSTERDAM_APPOINTMENT_LINKS = {
  cityOfficeImmigration:
    "https://formulieren.amsterdam.nl/TriplEforms/DirectRegelen/formulier/nl-NL/evAmsterdam/AfspraakImmigratieENG.aspx/",
  firstRegistration: "https://www.amsterdam.nl/en/civil-affairs/first-registration/",
  inAmsterdamIndividuals:
    "https://www.iamsterdam.com/en/live-work-study/in-amsterdam/international-newcomers/make-an-appointment-individuals",
} as const;

export const THE_HAGUE_APPOINTMENT_LINKS = {
  movingAndImmigration: "https://www.denhaag.nl/en/moving-and-immigration/",
  euFirstBrp:
    "https://www.denhaag.nl/en/moving-and-immigration/1st-brp-registration-for-eu-eea-and-swiss-nationals-coming-from-abroad-you-do-not-have-a-bsn/",
  residencePermitFirstBrp:
    "https://www.denhaag.nl/en/moving-and-immigration/1st-brp-registration-when-coming-from-abroad-with-residence-permit-you-do-not-have-a-bsn/",
  internationalCentreRegistration:
    "https://www.thehagueinternationalcentre.nl/make-an-appointment-for-registration",
} as const;

export const EINDHOVEN_APPOINTMENT_LINKS = {
  onlineBooking: "https://eindhoven.mijnafspraakmaken.nl/client/",
  moveFromAbroad: "https://www.eindhoven.nl/stad-en-wonen/verhuizen-concept/verhuizen-vanuit-het-buitenland",
  expatCenterAppointment: "https://www.hollandexpatcenter.com/appointment-at-the-expat-center",
} as const;

export const MUNICIPALITY_APPOINTMENT_BY_CITY: readonly MunicipalityAppointmentLink[] = [
  {
    city: "Amsterdam",
    cityGuideHref: "/netherlands/amsterdam/",
    routeDifference:
      "City Office (Stadsloket) immigration booking vs IN Amsterdam combined route for eligible EU / highly skilled newcomers.",
    waitOrientation: "Often 2–6 weeks; peaks can run longer — check all City Office locations.",
    bookings: [
      { label: "Book City Office immigration appointment", url: AMSTERDAM_APPOINTMENT_LINKS.cityOfficeImmigration },
      { label: "First registration guidance", url: AMSTERDAM_APPOINTMENT_LINKS.firstRegistration },
      { label: "IN Amsterdam appointment (eligible profiles)", url: AMSTERDAM_APPOINTMENT_LINKS.inAmsterdamIndividuals },
    ],
  },
  {
    city: "The Hague",
    cityGuideHref: "/netherlands/the-hague/",
    routeDifference:
      "Separate BRP pages by status (EU/EEA/Swiss, residence permit, Dutch citizen, re-registration, HSM) plus The Hague International Centre for eligible internationals.",
    waitOrientation: "Often 2–4 weeks; International Centre has its own eligibility and slots.",
    bookings: [
      { label: "Moving and immigration hub (pick your BRP route)", url: THE_HAGUE_APPOINTMENT_LINKS.movingAndImmigration },
      { label: "EU/EEA/Swiss – first BRP registration", url: THE_HAGUE_APPOINTMENT_LINKS.euFirstBrp },
      {
        label: "The Hague International Centre – registration appointment",
        url: THE_HAGUE_APPOINTMENT_LINKS.internationalCentreRegistration,
      },
    ],
  },
  {
    city: "Eindhoven",
    cityGuideHref: "/netherlands/eindhoven/",
    routeDifference:
      "Inwonersplein online booking (mijnafspraakmaken) vs Holland Expat Center South combined municipal + IND appointment for eligible knowledge workers.",
    waitOrientation: "Often 1–2 weeks municipally; Expat Center can be faster than standard municipal alone.",
    bookings: [
      { label: "Book Inwonersplein appointment online", url: EINDHOVEN_APPOINTMENT_LINKS.onlineBooking },
      { label: "Moving from abroad (documents + booking)", url: EINDHOVEN_APPOINTMENT_LINKS.moveFromAbroad },
      { label: "Holland Expat Center South appointment", url: EINDHOVEN_APPOINTMENT_LINKS.expatCenterAppointment },
    ],
  },
] as const;
