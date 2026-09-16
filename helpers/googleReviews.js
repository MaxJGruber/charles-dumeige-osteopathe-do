// Reviews come from the Places API: a plain API key, capped at 5 reviews.
const PLACE_DETAILS_URL = (placeId, apiKey) =>
  "https://maps.googleapis.com/maps/api/place/details/json" +
  `?place_id=${placeId}` +
  "&fields=rating,user_ratings_total,reviews" +
  "&reviews_sort=newest" +
  "&language=fr" +
  `&key=${apiKey}`;

export const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID || "";

// Link behind the "Laissez-nous un avis" call to action. With a place id it
// opens the review form for the listing; without one it falls back to a
// search so the button is never broken.
export const GOOGLE_REVIEW_URL = GOOGLE_PLACE_ID
  ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
  : "https://www.google.com/maps/search/?api=1&query=Charles+Dumeige+ost%C3%A9opathe+Sartrouville";

// Used for the header summary when a call succeeds but omits the aggregate.
const FALLBACK_SUMMARY = { rating: 5, total: 94 };

// Deterministic per-author avatar colour, so a given patient always keeps
// the same badge across rebuilds.
const AVATAR_COLORS = [
  "#7C3AED",
  "#9D544F",
  "#198F9B",
  "#43AD7D",
  "#0B4D71",
  "#B45309",
  "#BE185D",
];

export const avatarColor = (name) => {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) % 997;
  }
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
};

const DIVISIONS = [
  { unit: "year", ms: 365 * 24 * 60 * 60 * 1000 },
  { unit: "month", ms: 30 * 24 * 60 * 60 * 1000 },
  { unit: "week", ms: 7 * 24 * 60 * 60 * 1000 },
  { unit: "day", ms: 24 * 60 * 60 * 1000 },
];

// Google returns absolute timestamps; the widget shows "il y a 20 jours".
export const relativeTime = (createTime, now = Date.now()) => {
  const timestamp = new Date(createTime).getTime();
  // An unparseable date would compare false against every division below and
  // fall through to "aujourd'hui", dating an old review as posted today.
  if (Number.isNaN(timestamp)) return "";

  const elapsed = timestamp - now;
  const formatter = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });
  for (const { unit, ms } of DIVISIONS) {
    if (Math.abs(elapsed) >= ms) {
      return formatter.format(Math.round(elapsed / ms), unit);
    }
  }
  return "aujourd'hui";
};

const buildReview = ({ id, author, rating, text, createTime, url }) => ({
  id,
  author,
  initial: author.charAt(0).toUpperCase(),
  avatarColor: avatarColor(author),
  rating,
  text,
  createTime,
  relativeTime: relativeTime(createTime),
  url: url || GOOGLE_REVIEW_URL,
});

// The API does not guarantee an order, so sort newest first for display.
const newestFirst = (reviews) =>
  [...reviews].sort(
    (a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
  );

// Last resort: no reviews means the section renders nothing, which is better
// than showing a stale snapshot that drifts out of date.
const fallback = () => ({ summary: FALLBACK_SUMMARY, reviews: [] });

/**
 * Places API: one API key, at most 5 reviews.
 *
 * Uses the legacy Place Details endpoint because it accepts
 * `reviews_sort=newest`. The v1 endpoint has no sort parameter and returns
 * Google's "most relevant" five, which are not the most recent ones.
 */
const fetchFromPlaces = async (apiKey, placeId) => {
  const response = await fetch(PLACE_DETAILS_URL(placeId, apiKey));
  const payload = await response.json();
  if (payload.status !== "OK") {
    throw new Error(
      `Places request failed (${payload.status}): ${
        payload.error_message || "unknown error"
      }`
    );
  }

  const reviews = (payload.result?.reviews || [])
    .map((review, index) =>
      buildReview({
        id: `place-review-${review.time || index}`,
        author: review.author_name?.trim() || "Patient",
        rating: review.rating || 0,
        text: review.text?.trim() || "",
        // The legacy endpoint returns seconds since the epoch.
        createTime: new Date((review.time || 0) * 1000).toISOString(),
        url: review.author_url,
      })
    )
    .filter((review) => review.text && review.rating >= 4);

  if (!reviews.length) {
    throw new Error("Places returned no usable reviews");
  }

  return {
    summary: {
      rating: payload.result?.rating || FALLBACK_SUMMARY.rating,
      total: payload.result?.user_ratings_total || reviews.length,
    },
    reviews: newestFirst(reviews),
  };
};

/**
 * Fetches the Google reviews for the practice.
 *
 * Resolves with no reviews when the API key is missing or the call fails, in
 * which case the section is omitted from the page.
 */
export const fetchReviews = async () => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (apiKey && GOOGLE_PLACE_ID) {
    try {
      return await fetchFromPlaces(apiKey, GOOGLE_PLACE_ID);
    } catch (error) {
      console.warn(`[googleReviews] places: ${error.message}`);
    }
  }

  return fallback();
};
