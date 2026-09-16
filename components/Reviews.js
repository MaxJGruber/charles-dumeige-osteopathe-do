import { GOOGLE_REVIEW_FALLBACK_URL } from "helpers/googleReviews";

const GoogleLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
    />
    <path
      fill="#34A853"
      d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
    />
    <path
      fill="#FBBC05"
      d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
    />
    <path
      fill="#EA4335"
      d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
    />
  </svg>
);

const Stars = ({ rating, className = "h-4 w-4" }) => (
  <span className="inline-flex" role="img" aria-label={`${rating} sur 5`}>
    {[0, 1, 2, 3, 4].map((index) => (
      <svg
        key={index}
        className={`${className} ${
          index < Math.round(rating) ? "text-amber-400" : "text-rule"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.19h4.4c.97 0 1.37 1.24.59 1.81l-3.57 2.59 1.37 4.19c.3.92-.76 1.69-1.54 1.12L10 14.24l-3.56 2.59c-.78.57-1.84-.2-1.54-1.12l1.36-4.19-3.56-2.59c-.79-.57-.38-1.81.58-1.81h4.41l1.36-4.19z" />
      </svg>
    ))}
  </span>
);

// Patients sign their reviews with a full name; a first name and an initial is
// enough to feel personal without republishing the whole name on the site.
const shortName = (author) => {
  const [first, ...rest] = author.trim().split(/\s+/);
  const last = rest[rest.length - 1];
  return last ? `${first} ${last.charAt(0).toUpperCase()}.` : first;
};

const Attribution = ({ review, className = "" }) => (
  <footer className={`flex items-center gap-3 ${className}`}>
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-wash text-sm font-semibold text-teal"
      aria-hidden="true"
    >
      {review.initial}
    </span>
    <div className="min-w-0">
      <cite className="block truncate not-italic font-semibold text-ink">
        {shortName(review.author)}
      </cite>
      {review.relativeTime && (
        <span className="block text-sm text-ink-faint">
          {review.relativeTime}
        </span>
      )}
    </div>
  </footer>
);

// The longest review, given room to run in full: it carries the most detail
// and does the most to reassure someone deciding whether to book.
const FeaturedReview = ({ review }) => (
  <figure className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-paper p-8 pt-16 sm:p-10 sm:pt-20">
    <span
      className="pointer-events-none absolute -top-6 left-6 select-none font-serif text-[9rem] leading-none text-teal/15"
      aria-hidden="true"
    >
      &ldquo;
    </span>
    <Stars rating={review.rating} className="relative h-5 w-5" />
    <blockquote className="relative mt-6 flex-1 text-lg leading-relaxed text-ink-soft sm:text-xl sm:leading-relaxed">
      {review.text}
    </blockquote>
    <Attribution review={review} className="relative mt-8 pt-2" />
  </figure>
);

const CompactReview = ({ review }) => (
  <figure className="flex flex-col rounded-2xl bg-paper p-6">
    <Stars rating={review.rating} />
    <blockquote className="mt-3 flex-1 leading-relaxed text-ink-soft">
      {review.text}
    </blockquote>
    <Attribution review={review} className="mt-5" />
  </figure>
);

const Reviews = ({ summary, reviews, reviewUrl = GOOGLE_REVIEW_FALLBACK_URL }) => {
  if (!reviews?.length) return null;

  // Content decides the layout: the longest review anchors the section, and
  // the shortest three stack beside it, so the column heights stay close and
  // no quote has to be truncated.
  const byLength = [...reviews].sort((a, b) => b.text.length - a.text.length);
  const [featured] = byLength;
  const shortest = new Set(byLength.slice(1).slice(-3));
  // `reviews` arrives newest first, so filtering it preserves that order.
  const secondary = reviews.filter((review) => shortest.has(review));
  const formattedRating = summary.rating.toFixed(1).replace(".", ",");

  return (
    <section className="bg-white py-20 lg:py-28" id="avis">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Ils sont repartis soulagés
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="font-display text-2xl text-ink">
              {formattedRating}
            </span>
            <Stars rating={summary.rating} className="h-5 w-5" />
            <span className="text-ink-faint">
              {summary.total} avis sur Google
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FeaturedReview review={featured} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {secondary.map((review) => (
              <CompactReview key={review.id} review={review} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="max-w-md text-center text-ink-soft">
            Vous avez consulté récemment ? Votre retour aide les futurs
            patients à franchir le pas.
          </p>
          <a
            href={reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-ink ring-1 ring-ink/20 transition-colors hover:bg-paper"
          >
            <GoogleLogo className="h-5 w-5" />
            Laisser un avis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
