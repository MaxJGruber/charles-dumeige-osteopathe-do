import {
  TITLE,
  URL,
  META_IMAGE,
  ENTITY_ID,
  PRACTITIONER_NAME,
  PHONE,
  ADDRESS,
  GEO,
  OPENING_HOURS,
  CONSULTATIONS,
  AREAS_SERVED,
  SPECIALTIES,
  DOCTOLIB_URL,
  LINKEDIN_URL,
  GOOGLE_MAPS_LISTING,
} from "root/config";

// JSON-LD is what search engines read for rich results and what AI answer
// engines parse when they need to state a fact about the practice. Every value
// here comes from root/config, which mirrors what the pages actually render:
// structured data that contradicts the visible page is a guideline violation,
// not a shortcut.

const absolute = (path = "") => `${URL}${path.replace(/^\//, "")}`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: ADDRESS.street,
  addressLocality: ADDRESS.locality,
  addressRegion: ADDRESS.region,
  postalCode: ADDRESS.postalCode,
  addressCountry: ADDRESS.country,
};

const openingHours = OPENING_HOURS.map(({ days, opens, closes }) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: days,
  opens,
  closes,
}));

/**
 * The practice itself.
 *
 * Typed as both MedicalBusiness and LocalBusiness: the first is what Google
 * uses to understand a health practice, the second is what most AI answer
 * engines look for when resolving "near me" queries.
 */
const practice = (summary) => ({
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": ENTITY_ID,
  name: `${PRACTITIONER_NAME} — Ostéopathe D.O`,
  url: URL,
  description:
    "Cabinet d'ostéopathie de Charles Dumeige, ostéopathe D.O à Sartrouville (78). " +
    "Nourrissons, enfants, femmes enceintes, adultes, séniors et sportifs, au cabinet ou à domicile.",
  image: META_IMAGE,
  logo: absolute("static/logo.png"),
  telephone: PHONE,
  priceRange: "50€–80€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Espèces, Chèque, Carte bancaire",
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  hasMap: GOOGLE_MAPS_LISTING,
  openingHoursSpecification: openingHours,
  areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name })),
  medicalSpecialty: "Osteopathic",
  availableLanguage: [
    { "@type": "Language", name: "Français" },
    { "@type": "Language", name: "Anglais" },
  ],
  isAccessibleForFree: false,
  publicAccess: true,
  // Stated on the page as "Cabinet accessible aux personnes handicapées".
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Accès handicapé",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Ascenseur",
      value: true,
    },
  ],
  sameAs: [DOCTOLIB_URL, LINKEDIN_URL, GOOGLE_MAPS_LISTING],
  // Doctolib is where a booking actually happens, so point the action there
  // rather than at a page that only links onwards.
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: DOCTOLIB_URL,
      inLanguage: "fr-FR",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "Reservation", name: "Rendez-vous d'ostéopathie" },
  },
  makesOffer: CONSULTATIONS.map((item) => ({
    "@type": "Offer",
    name: item.name,
    description: item.description,
    price: item.price,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    // The page states these honoraria are indicative, so the schema says so
    // too rather than presenting them as fixed.
    priceSpecification: {
      "@type": "PriceSpecification",
      price: item.price,
      priceCurrency: "EUR",
      valueAddedTaxIncluded: true,
    },
  })),
  // Only emitted when the Places API actually returned an aggregate, since
  // inventing review counts is both wrong and a manual-action risk.
  ...(summary?.rating && summary?.total
    ? {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: summary.rating,
          reviewCount: summary.total,
          bestRating: 5,
          worstRating: 1,
        },
      }
    : {}),
});

/** The practitioner, linked to the practice so both resolve to one entity. */
const practitioner = {
  "@type": ["Physician", "Person"],
  "@id": `${URL}#charles-dumeige`,
  name: PRACTITIONER_NAME,
  honorificSuffix: "D.O",
  jobTitle: "Ostéopathe D.O",
  description:
    "Ostéopathe D.O diplômé, installé à Sartrouville depuis 2022. " +
    "Prise en charge des douleurs musculo-squelettiques du nourrisson au sénior.",
  image: absolute("static/profile-pic.jpg"),
  telephone: PHONE,
  address: postalAddress,
  medicalSpecialty: "Osteopathic",
  knowsAbout: SPECIALTIES,
  knowsLanguage: ["fr", "en"],
  worksFor: { "@id": ENTITY_ID },
  workLocation: { "@id": ENTITY_ID },
  sameAs: [DOCTOLIB_URL, LINKEDIN_URL],
};

const website = {
  "@type": "WebSite",
  "@id": `${URL}#website`,
  url: URL,
  name: TITLE,
  inLanguage: "fr-FR",
  publisher: { "@id": ENTITY_ID },
};

/**
 * Renders the JSON-LD graph for a page.
 *
 * `breadcrumbs` and `faq` are per page; the practice, practitioner and site
 * nodes are emitted everywhere so any single page is enough for a crawler to
 * resolve the whole entity.
 */
const StructuredData = ({ page, breadcrumbs = [], faq = [], summary }) => {
  const graph = [practice(summary), practitioner, website];

  if (page) {
    graph.push({
      "@type": "WebPage",
      "@id": `${page.url}#webpage`,
      url: page.url,
      name: page.title,
      description: page.description,
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${URL}#website` },
      about: { "@id": ENTITY_ID },
      primaryImageOfPage: page.image ? absolute(page.image) : undefined,
    });
  }

  if (breadcrumbs.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${page?.url || URL}#breadcrumbs`,
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    });
  }

  // Google requires every answer here to be visible on the page itself, so the
  // FAQ array is always built from the same source as the rendered section.
  if (faq.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${page?.url || URL}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      // The payload is built from our own config, never from user input.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
};

export default StructuredData;
