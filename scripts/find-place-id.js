#!/usr/bin/env node
/**
 * One-off helper: resolves the Google Place ID for the practice and checks
 * that the Places API key can read reviews.
 *
 * Usage:
 *   node scripts/find-place-id.js <places-api-key>
 */
const SEARCH_URL = "https://places.googleapis.com/v1/places:searchText";
const QUERY = "Charles Dumeige ostéopathe, 20 Rue René Brûlay, 78500 Sartrouville";

const apiKey = process.argv[2];

if (!apiKey) {
  console.error("Usage: node scripts/find-place-id.js <places-api-key>");
  process.exit(1);
}

(async () => {
  const response = await fetch(SEARCH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount",
    },
    body: JSON.stringify({ textQuery: QUERY, languageCode: "fr" }),
  });

  const payload = await response.json();

  if (!response.ok) {
    console.error(`\n✗ ${response.status}: ${payload.error?.message || ""}`);
    process.exit(1);
  }

  const places = payload.places || [];
  if (!places.length) {
    console.error("\n✗ No match. Try a broader query.");
    process.exit(1);
  }

  console.log("\nMatches:\n");
  for (const place of places) {
    console.log(`  ${place.displayName?.text}`);
    console.log(`  ${place.formattedAddress}`);
    console.log(`  rating ${place.rating} (${place.userRatingCount} avis)`);
    console.log(`  GOOGLE_PLACE_ID=${place.id}\n`);
  }

  console.log("Add the matching line above to .env.local, alongside:");
  console.log(`GOOGLE_PLACES_API_KEY=${apiKey.slice(0, 6)}…\n`);
})();
