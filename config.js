// The page title
export const TITLE = "Charles Dumeige: ostéopathe D.O";

// The description shown in Google Search results and on social media networks
// Should be max ~150 characters.
export const META_DESCRIPTION =
  "Charles Dumeige, ostéopathe D.O à Sartrouville (78). Prise en charge des nourrissons, enfants, femmes enceintes, adultes, séniors et sportifs.";

// The URL of the deployed page (used in meta tags for SMO)
// Example: https://www.domain.com/
export const URL = "https://charles-dumeige-osteopathe.fr/";

// The preview image shown in social networks and when sharing on messengers,
// like WhatsApp and others
// The URL should be absolute, e.g.: https//www.domain.com/static/preview.jpg
// Recommended size: 1200 x 627
export const META_IMAGE =
  "https://charles-dumeige-osteopathe.fr/static/preview.png";

// The Google Analytics tracking ID
export const GA_TRACKING_ID = "G-RP4YW4NXQN";

// ---------------------------------------------------------------------------
// Practice facts
//
// Single source of truth for everything a search engine or an AI answer engine
// needs to state about the practice. The JSON-LD in components/StructuredData
// is generated from these values, so the structured data can never drift away
// from what the pages render. Change a fact here, not in two places.
// ---------------------------------------------------------------------------

export const PRACTITIONER_NAME = "Charles Dumeige";

// A stable @id for the practice, used to tie every JSON-LD graph together so
// crawlers resolve them to one entity rather than several look-alikes.
export const ENTITY_ID = `${URL}#osteopathe`;

export const PHONE = "+33638697716";
// The same number in the form the pages display it.
export const PHONE_DISPLAY = "06 38 69 77 16";

export const ADDRESS = {
  street: "20 rue René Brûlay",
  locality: "Sartrouville",
  region: "Île-de-France",
  postalCode: "78500",
  country: "FR",
};

// Coordinates as Google itself geocodes the listing, so the schema agrees with
// the Business Profile rather than with the hand-placed map marker.
export const GEO = { latitude: 48.9354726, longitude: 2.1632963 };

// The Business Profile listing, verified 2026-09-16 via the Places API.
export const GOOGLE_MAPS_LISTING = "https://maps.google.com/?cid=15244724885710187857";

export const DOCTOLIB_URL =
  "https://www.doctolib.fr/osteopathe/sartrouville/charles-dumeige";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/charles-dumeige-osteopathe/";

export const MAPS_LINK = "https://goo.gl/maps/4mhDD2yna4iP3xru9";

// Taken from the Google Business Profile (verified 2026-09-16 via the Places
// API), which is the listing Google itself ranks in the local pack. Keep these
// in step with the Business Profile: when the two disagree, Google trusts the
// profile and the mismatch costs local visibility. Times are 24h so they can be
// emitted as schema.org openingHoursSpecification without reformatting.
export const OPENING_HOURS = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:30",
    closes: "20:30",
  },
  { days: ["Sunday"], opens: "10:30", closes: "15:45" },
];

// Mirrors components/PriceList. Prices are indicative, which the page states.
export const CONSULTATIONS = [
  {
    name: "Consultation d'ostéopathie générale",
    description: "Adulte, au cabinet.",
    price: "60",
  },
  {
    name: "Consultation nourrisson et enfant",
    description: "Moins de 10 ans.",
    price: "50",
  },
  {
    name: "Consultation le dimanche et les jours fériés",
    description: "Pour les demandes d'urgence.",
    price: "75",
  },
  {
    name: "Consultation à domicile",
    description: "À convenir par téléphone uniquement.",
    price: "80",
  },
];

// The areas the practice actually serves, which is what "ostéopathe près de
// chez moi" style queries resolve against.
export const AREAS_SERVED = [
  "Sartrouville",
  "Maisons-Laffitte",
  "Houilles",
  "Le Mesnil-le-Roi",
  "Montesson",
  "Carrières-sur-Seine",
  "Bezons",
  "Le Vésinet",
];

// The techniques practised, phrased the way a patient would search for them.
export const SPECIALTIES = [
  "Ostéopathie structurelle",
  "Ostéopathie viscérale",
  "Ostéopathie crânienne",
  "Ostéopathie pédiatrique",
  "Ostéopathie de la femme enceinte",
  "Ostéopathie du sport",
];
