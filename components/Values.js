const tiers = [
  {
    name: "La structure gouverne la fonction",
    description: [
      "Le principe biomécanique qui connecte structure et fonction s'appuyant sur la notion de globalité.",
      '"Une entité organique fonctionne correctement si sa situation dans un espace tridimensionnel et ses paramètres de mobilité normaux".',
    ],
  },
  {
    name: "L'unité du corps humain",
    description: [
      "Le corps humain est considéré dans son ensemble. Il comprend os, articulations, muscles, fascias, vascularisation et innervation.",
      "Ces éléments interagissent entre eux, l'atteinte de l'un entraîne des perturbations sur l'ensemble des autres.",
    ],
  },
  {
    name: "La loi de l'artère est suprême",
    description: [
      "La circulation du sang assure l'intégralité des systèmes du corps et assure l'homéostasie.",
      "Le phénomène par lequel un facteur clé est maintenu autour d’une valeur bénéfique pour le corps grace à un processus de régulation.",
    ],
  },
  {
    name: "La capacité d'auto guérison",
    description: [
      "Le corps élabore et synthétise ses propres substances pour lutter contre les maladies et troubles toxémiques.",
      "L'adaptation et l'immunité corporelle dépendent de l'intégrité mécanique du corps et du système hormonal.",
    ],
  },
];

const Values = () => (
  <section className="bg-white pb-20 lg:pb-28" id="valeurs">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <h2 className="font-display text-3xl leading-tight">
        Les quatre principes fondateurs de l'ostéopathie
      </h2>

      {/* A closed set of four numbered principles, so the numbers are part of
          the content rather than ornament. */}
      <ol className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {tiers.map((tier, i) => (
          <li key={tier.name} className="border-t border-rule pt-6">
            <span
              className="font-display text-sm text-vertebra"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <h3 className="mt-1 font-display text-xl leading-snug">
              {tier.name}
            </h3>
            {tier.description.map((line) => (
              <p
                key={line}
                className="mt-3 max-w-[62ch] leading-relaxed text-ink-soft"
              >
                {line}
              </p>
            ))}
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Values;
