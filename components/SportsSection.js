import { Fade } from "react-awesome-reveal";

const SportsSection = () => (
  <>
    <div className="relative bg-white py-16 sm:py-5">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
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
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            <Fade direction="left">
              <div className="relative pt-72 pb-20 rounded-2xl shadow-xl overflow-hidden border-2 border-solid border-lightblue">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="static/istock-images/sportsman_small.jpeg"
                />
              </div>
            </Fade>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-2xl">
              La prise en charge ostéopathique des sportifs
            </h2>
            <div className="prose prose-lg mt-6 text-gray-500 space-y-6">
              <p>
                Votre ostéopathe Charles Dumeige reçoit les sportifs de tout
                niveau à son cabinet. Il est recommandé de consulter
                régulièrement suite à un nombre de contraintes subies à plus ou
                moins forte intensité et fréquence de pratique.
              </p>
              <p>
                Les séances auront un deuxième objectif parallèle de prévention,
                c'est-à-dire de prévenir l'apparition de blessures, renforcer la
                capacité de récupération, ou encore de favoriser l'augmentation
                des performances du sportif concerné.
              </p>
              <p>
                Il sera important d'être le plus précis possible auprès de votre
                ostéopathe sur la pratique du sport, pour une prise en charge la
                plus adaptée que ce soit au niveau débutant ou expérimenté.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-16 xl:py-0 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-xl">
              L'ostéopathie est adaptée à tous les sports
            </h2>
          </div>
        </div>
        <div className="relative md:bg-white md:p-6">
          <div className="prose prose-lg text-gray-500 lg:max-w-none">
            <p>
              Pendant la pratique de sport, tout le corps sera déséquilibré et
              l'ensemble des structures est sollicité (articulations, muscles,
              ligaments). Suite à cela, il peut y avoir des sursollicitations
              qui entraîneront des décompensations et provoquent des blessures.
              Dans ce cas là, il est recommandé de consulter votre ostéopathe.
            </p>
            <p>
              Votre ostéopathe Charles Dumeige a connaissance d'une multitude de
              sports et de leur pratique et les zones qui s'adaptent le plus en
              fonction de chacun.
            </p>
            <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-xl">
              L'ostéopathie pour se dépasser et préparer les compétitions
            </h2>
            <p>
              Un bon équilibre corporel permet de mieux gérer ces
              sursollicitations face aux efforts demandés, ce qui entraînera une
              meilleure récupération. La séance favorise un bon fonctionnement
              physiologique indispensable au sportif, il pourra également
              libérer les structures liées à la respiration en travaillant sur
              les diaphragmes ou les muscles inspirateurs.
            </p>
            <p>
              Une bonne séance de rééquilibration juste avant une compétition
              favorise les performances afin d'obtenir de meilleurs résultats,
              en plus du suivi régulier.
            </p>
            <p>
              Votre ostéopathe Charles Dumeige a traité de nombreux sportifs de
              tout type pendant des stages lors de compétitions à visée
              nationale et européenne.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SportsSection;
