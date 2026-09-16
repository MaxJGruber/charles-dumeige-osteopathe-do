import dynamic from "next/dynamic";
import {
  ADDRESS as PRACTICE_ADDRESS,
  MAPS_LINK,
  PHONE,
  PHONE_DISPLAY,
  OPENING_HOURS,
} from "root/config";

const Map = dynamic(() => import("components/Map"), { ssr: false });

const ADDRESS = `${PRACTICE_ADDRESS.street}, ${PRACTICE_ADDRESS.postalCode} ${PRACTICE_ADDRESS.locality}`;

const transport = [
  "RER A, Sartrouville",
  "Bus 5, Convention",
  "Bus 5 et 25, Turgot",
];

const access = [
  "1er sous-sol, avec ascenseur",
  "Accès handicapé",
  "Parking payant",
];

// Rendered from the same source as the opening-hours schema, so the table and
// the structured data cannot drift apart. Sourced from the Google Business
// Profile; see root/config.
const DAY_LABELS = {
  Monday: "Lundi",
  Tuesday: "Mardi",
  Wednesday: "Mercredi",
  Thursday: "Jeudi",
  Friday: "Vendredi",
  Saturday: "Samedi",
  Sunday: "Dimanche",
};

const formatTime = (time) => time.replace(":", "h").replace(/^0/, "");

const hours = OPENING_HOURS.map(({ days, opens, closes }) => ({
  days:
    days.length > 1
      ? `${DAY_LABELS[days[0]]} au ${DAY_LABELS[
          days[days.length - 1]
        ].toLowerCase()}`
      : DAY_LABELS[days[0]],
  time: `${formatTime(opens)} à ${formatTime(closes)}`,
}));

const Contact = () => (
  <section id="contact" className="bg-paper py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
          Horaires et accès
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Le centre médical Debussy est à 5 minutes à pied de la gare du RER A,
          sur la place du marché. Charles Dumeige y consulte du lundi au samedi,
          et le dimanche pour les demandes d&apos;urgence.
        </p>
      </div>

      <div
        id="sartrouville"
        className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <address className="not-italic">
            <p className="font-display text-2xl leading-snug text-teal">
              {ADDRESS}
            </p>
            <a
              href={`tel:${PHONE}`}
              className="mt-3 inline-block font-medium text-ink transition-colors hover:text-teal"
            >
              {PHONE_DISPLAY}
            </a>
          </address>

          <dl className="mt-10 space-y-8">
            <div>
              <dt className="font-medium text-ink">Horaires</dt>
              <dd className="mt-3">
                <ul className="space-y-1.5">
                  {hours.map((slot) => (
                    <li
                      key={slot.days}
                      className="flex flex-wrap justify-between gap-x-6 border-b border-rule pb-1.5 text-ink-soft sm:max-w-md"
                    >
                      <span>{slot.days}</span>
                      <span className="tabular-nums text-ink">{slot.time}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="font-medium text-ink">Y venir</dt>
                <dd className="mt-3">
                  <ul className="space-y-1.5 text-ink-soft">
                    {transport.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Sur place</dt>
                <dd className="mt-3">
                  <ul className="space-y-1.5 text-ink-soft">
                    {access.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </div>
          </dl>

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-teal px-7 py-3.5 font-medium text-white transition-colors hover:bg-teal-deep"
          >
            Ouvrir dans Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl ring-1 ring-ink/10">
          <Map coordinates={[48.93587430271724, 2.1631031634520994]} />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
