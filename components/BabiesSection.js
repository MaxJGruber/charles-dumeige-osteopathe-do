import { Fade } from "react-awesome-reveal";

const BabiesSection = () => (
  <>
    <div className="relative bg-white py-16 sm:py-5">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:pt-20 lg:pb-12">
            <Fade direction="left">
              <div className="relative pt-72 pb-20 rounded-2xl shadow-xl overflow-hidden border-2 border-solid border-lightblue">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="static/istock-images/baby_small.jpeg"
                  alt=""
                />
              </div>
            </Fade>
          </div>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-2xl">
              La prise en charge ostéopathique des nourissons
            </h2>
            <div className="prose prose-lg mt-6 text-gray-500 space-y-6">
              <p>
                L'accouchement est un moment important pour les structures
                corporelles de votre bébé. Elles subissent de nombreuses
                contraintes au niveau du crâne et bassin notamment avec ou sans
                utilisation d'instruments pour aider à l'accouchement (forceps,
                ventouses...).
              </p>
              <p>
                Votre ostéopathe Charles Dumeige prend en charge les nourrissons
                pour tout type de motifs (essentiellement crânien ou viscéral).
                Il faudra un certificat de non contre indication à l'ostéopathie
                pour les bébés de moins de 6 mois.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-16 xl:pt-0 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-2xl">
              Les motifs de consultation pour votre nourrisson
            </h2>
            <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-xl">
              Les principales indications:
            </h2>
          </div>
        </div>

        <div className="relative md:bg-white md:p-6">
          <div className="prose prose-lg text-gray-500 lg:max-w-none">
            <ul role="list">
              <li>
                <p>
                  <span className="font-semibold">
                    Les plagiocéphalies et torticolis:
                  </span>{" "}
                  Il s'agit d'une asymétrie crânienne, apparaissant chez
                  l'enfant durant la grossesse ou dans les premières semaines de
                  vie. Cette déformation du crâne se caractérise par un
                  aplatissement asymétrique arrière ou latéral de la tête. Dans
                  75% des cas, cette déformation sera accompagnée d'un
                  torticolis.
                </p>
                <p>
                  Ce dernier se caractérise par la tête du bébé tournée du même
                  côté que la plagiocéphalie. Le torticolis peut engendrer des
                  douleurs pour le nourrisson, des difficultés à la position du
                  coucher ou encore des troubles de la succion en cas
                  d'allaitement notamment.
                </p>
                <p>
                  L'ostéopathie va aider le crâne à se remodeler et éviter des
                  déformations crâniennes qui peuvent rester durant la
                  croissance. Il s'agit de motifs bénins mais qui doivent
                  rapidement être pris en charge pour plus d'efficacité.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  Les ROG ou reflux gastriques:
                </span>{" "}
                Considérés comme normaux chez le nourrisson, l'ostéopathie peut
                aider à diminuer leur fréquence et soulager votre bébé.
              </li>
              <li>
                <span className="font-semibold">Les coliques:</span> Motifs
                bénins mais très embêtants pour votre bébé, elles disparaissent
                avec le temps. Votre ostéopathe va aider tout de même à les
                soulager et vous donnera des conseils en tant que parent pour
                l'aider à être soulagé au quotidien.
              </li>
            </ul>
            <p>
              En cas de trouble du sommeil, l'ostéopathie pourra aider votre
              bébé à mieux dormir et avoir un sommeil réparateur en travaillant
              sur ces sphères. Les cas d'otites peuvent être également pris en
              charge.
            </p>
            <p>
              Il est conseillé de consulter votre ostéopathe dans le mois après
              l'accouchement, que ce soit par voie basse ou césarienne et
              quelque soit sa durée. Un suivi pédiatrique est indispensable en
              parallèle.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default BabiesSection;
