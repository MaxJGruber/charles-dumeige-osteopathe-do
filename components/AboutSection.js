const AboutSection = () => (
  <>
    <div className="relative bg-white py-16 sm:py-0">
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
            <div class="flex justify-center">
              <div className="relative w-3/4 py-72 rounded-2xl shadow-xl overflow-hidden border-2 border-solid border-lightblue">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="static/profile-pic.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-2xl">
              L'ostéopathe: Charles Dumeige
            </h2>
            <div className="prose prose-lg mt-6 text-gray-500 space-y-6">
              <p>
                Né le 9 juin 1994 à Paris, Charles Dumeige, passionné depuis
                l'enfance envers le milieu de la santé, avec un père chirurgien
                vasculaire et viscéral et professeur de chirurgie au
                Val-de-Grâce.
              </p>
              <p>Il a obtenu un bac scientifique en 2013.</p>
              <p>
                Passé par la PACES à l'université Pierre et Marie Curie, il
                s'oriente vers des études d'ostéopathie et rentre en 2ème année
                à l'école de Pantin.
              </p>
              <p>
                Avec la fusion de cette école et le COS, il finit la fin de son
                cursus à l'Ecole d'Ostéopathie de Paris (15e).
              </p>
              <p>Il est diplômé en septembre 2019.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-16 xl:pt-0 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-xl">
              Son parcours professionel
            </h2>
          </div>
        </div>

        <div className="relative md:bg-white md:p-6">
          <div className="prose prose-lg text-gray-500 lg:max-w-none">
            <p>
              Pendant ses études, il a pu prendre en charge des patients
              régulièrement à la clinique intégrée à l'école, depuis sa 3ème
              année. Il a également participé à des stages d'évènements
              sportifs, en entreprise et en hôpital:
            </p>
            <ul role="list">
              <li>Marathon de Fontenay-sous-Bois (2018).</li>
              <li>Championnats d'Europe de Muay-thai (2018).</li>
              <li>Salon du running à la Porte de Versailles (2018).</li>
              <li>
                Prise en charge d'employés de la Société Générale à La Défense
                (2018).
              </li>
              <li>Prise en charge d'employés du Parisien (2019).</li>
              <li>
                Prise en charge de patients au plus grand CHU d'Europe, à
                Orléans (2019).
              </li>
              <li>
                Prise en charge de patients au Centre d'Accueil et de Soins
                Hospitaliers de Nanterre (2019).
              </li>
            </ul>
            <p>
              Charles Dumeige a pu donc se forger une expérience en ostéopathie
              multidisciplinaire et avec la prise en charge de plus de 400
              patients avant la fin de ses études.
            </p>
            <p>
              En parallèle de ses études, il a travaillé en tant que préparateur
              de commande pour Lidl à la DR19, à Chauconin-Neufmontiers (77). Il
              a effectué son mémoire de fin de cursus avec une étude sur le
              métier de préparateur grâce à ses collègues volontaires. Il a pu
              apporter une analyse sur le métier de manutention et les
              influences de ce dernier dans les douleurs qu'il pouvait
              engendrer.
            </p>
            <p>
              En Novembre 2019, il s'installe en cabinet de kiné-ostéo dans la
              ville de Meaux (77).
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutSection;
