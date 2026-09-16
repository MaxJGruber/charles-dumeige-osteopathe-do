import dynamic from "next/dynamic";

const Map = dynamic(() => import("components/Map"), { ssr: false });

const ADDRESS = "20 rue René Brûlay, 78500 Sartrouville";
const MAPS_LINK = "https://goo.gl/maps/4mhDD2yna4iP3xru9";

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

const hours = [
  { days: "Lundi au samedi", time: "8h30 à 20h30" },
  { days: "Dimanche", time: "10h30 à 15h45" },
];

const Contact = () => (
  <section id="contact" className="bg-paper py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
          Horaires et accès
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Le centre médical Debussy est à 5 minutes à pied de la gare, sur la
          place du marché. Charles Dumeige y consulte le mercredi, le jeudi,
          deux samedis par mois et tous les dimanches pour les urgences.
        </p>
      </div>

      <div
        id="sartrouville"
        className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <p className="font-display text-2xl leading-snug text-teal">
            {ADDRESS}
          </p>

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
