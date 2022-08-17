import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    id: 1,
    name: "A l'écoute du patient",
    description:
      "Une attitude active dans l'approche relationnelle avec le patient, toujours à l'écoute et disponible.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: '"Un mal pour un bien"',
    description:
      "Suivant l'algie du patient, il se peut qu'il ressente des douleurs durant la séance mais qui finissent par aboutir à un sentiment de bien-être à la fin de la consultation.",
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: "Résultats rapides",
    description:
      "Il faut en moyenne 2 à 3 jours de récupération après une séance pour voir les douleurs s'atténuer complétement.",
    icon: LightningBoltIcon,
  },
  {
    id: 4,
    name: "Notifications mobiles",
    description:
      "Disponible par téléphone & email pour les contacts directs. Prise de rendez-vous possible sur doctolib.fr.",
    icon: AnnotationIcon,
  },
];

const Featured = () => (
  <div className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-lightblue font-semibold tracking-wide uppercase">
          L'OSTÉOPATHIE
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Générale - Viscérale - Crânienne
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Dans son cabinet ou à domicile, Charles Dumeige prend en charge tout
          type de patient.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-lightblue text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default Featured;
