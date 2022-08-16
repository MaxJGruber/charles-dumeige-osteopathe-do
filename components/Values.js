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
  <div className="bg-white">
    <div className="max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:flex-col sm:align-center">
        <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-xl sm:text-center">
          Les quatres principes fondateurs de l'ostéopathie
        </h2>
      </div>
      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"
          >
            <div className="p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                {tier.name}
              </h2>
              {tier.description.map((line) => (
                <p key={line} className="mt-4 text-md text-gray-500">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Values;
