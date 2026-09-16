import { DOCTOLIB_URL } from "components/Nav";

const Hook = () => (
  <section className="bg-ink py-20 text-white lg:py-24">
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-xl">
        <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
          Vous avez mal ? Prenez rendez-vous.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-white/70">
          Créneaux disponibles 7j/7, y compris le dimanche pour les urgences.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={DOCTOLIB_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white px-7 py-3.5 font-medium text-ink transition-colors hover:bg-teal-wash"
        >
          Réserver sur Doctolib
        </a>
        <a
          href="tel:0638697716"
          className="rounded-full px-7 py-3.5 font-medium text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
        >
          06 38 69 77 16
        </a>
      </div>
    </div>
  </section>
);

export default Hook;
