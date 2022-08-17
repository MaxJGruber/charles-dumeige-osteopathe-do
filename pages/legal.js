import {
  CameraIcon,
  BookOpenIcon,
  SupportIcon,
} from "@heroicons/react/outline";

const supportLinks = [
  {
    name: "Contenu écrit",
    description: [
      "Tous les textes et articles sur le site ont été écrits par Charles Dumeige.",
      "Toute opinion ou avis présenté sur le site, a pour unique but d'informer les visiteurs, et n'a aucunement pour but d'offenser ou discriminer contre tout type de sexe, d'âge ou d'handicap.",
      "Toute description de type de patient ou sur l'ostéopathie, est recherché et étudier par Charles Dumeige, ostéopathe certifié et diplômé, et possède pour unique but d'informer les visiteurs.",
    ],
    icon: BookOpenIcon,
  },
  {
    name: "Politique relative aux cookies",
    description: [
      "Les cookies sont de petits fichiers texte qui sont stockés sur votre ordinateur lorsque vous visitez certains sites Web. Ce site Web utilise des cookies pour Google Analytics. Google Analytics est un outil d'analyse Web qui nous aide à comprendre comment les visiteurs interagissent avec ce site Web.",
      "Les cookies contiennent des informations qui sont transférées sur le disque dur de votre ordinateur. Ils stockent des informations, telles que l'heure à laquelle la visite en cours a eu lieu, si le visiteur a déjà visité le site et quel site a renvoyé le visiteur vers le site. Google Analytics collecte des informations de manière entièrement anonyme. Il rend compte des tendances du site Web sans identifier les visiteurs individuels.",
    ],
    icon: SupportIcon,
  },
  {
    name: "Contenu visuel",
    description: [
      "Certaines de nos photos ont été légalement acheté et téléchargé sur iStock.com avec une licence standard qui nous permet d’obtenir une utilisation personnelle, professionnelle ou commerciale du fichier, ou tout autre type d'utilisation qui n'est pas interdit par la licence.",
      "Cela signifie que nous avons le droit d'utiliser ces contenus dans les domaines suivants : publicité, marketing, applications, sites Internet, réseaux sociaux, télévision et films, présentations, journaux, magazines et livres, packaging / emballage et des centaines d'autres types d'utilisations.",
      "Certaines de nos photos ont été légalement téléchargé sur unsplash.com avec une licence standard",
    ],
    icon: CameraIcon,
  },
];

const Legal = () => (
  <div className="bg-white">
    {/* Header */}
    <div className="relative pb-32 bg-gray-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div className="absolute inset-0 bg-darkblue mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl md:tracking-tight lg:text-6xl lg:tracking-tight">
          Mentions Légales
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id
          malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
          Dui, amet, nec sit pulvinar.
        </p>
      </div>
    </div>

    {/* Overlapping cards */}
    <section
      className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        {supportLinks.map((link) => (
          <div
            key={link.name}
            className="flex flex-col bg-white rounded-2xl shadow-xl"
          >
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="absolute top-0 p-5 inline-block bg-lightblue rounded-xl shadow-lg transform -translate-y-1/2">
                <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
              {link.description.map((line) => (
                <p className="mt-4 text-base text-gray-500">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Legal;
