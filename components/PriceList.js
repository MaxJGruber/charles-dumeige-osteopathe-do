const consultations = [
  {
    price: "60",
    name: "Consultation générale",
    detail: "Adulte, au cabinet.",
  },
  {
    price: "50",
    name: "Nourrisson et enfant",
    detail: "Moins de 10 ans.",
  },
  {
    price: "75",
    name: "Dimanche et jours fériés",
    detail: "Pour les demandes d'urgence.",
  },
  {
    price: "80",
    name: "À domicile",
    detail: "À convenir par téléphone uniquement.",
  },
];

const PriceList = () => (
  <section className="bg-white py-20 lg:py-28" id="tarifs">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">
        Tarifs
      </h2>

      <dl className="mt-12 max-w-4xl">
        {consultations.map((item) => (
          <div
            key={item.name}
            className="flex items-baseline gap-6 border-t border-rule py-6 last:border-b"
          >
            <dt className="min-w-0 flex-1">
              <span className="block text-lg font-medium text-ink">
                {item.name}
              </span>
              <span className="mt-1 block text-ink-soft">{item.detail}</span>
            </dt>
            {/* Tabular figures keep the column of prices optically aligned. */}
            <dd className="font-display text-3xl tabular-nums text-teal">
              {item.price}
              <span className="ml-0.5 text-xl">€</span>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-8 max-w-[62ch] text-sm leading-relaxed text-ink-faint">
        Ces honoraires vous sont communiqués à titre indicatif. Ils peuvent
        varier selon le type de soins finalement réalisés en cabinet, le nombre
        de consultations et les actes additionnels nécessaires. En cas de
        dépassement, le praticien vous en avertit au préalable.
      </p>
    </div>
  </section>
);

export default PriceList;
