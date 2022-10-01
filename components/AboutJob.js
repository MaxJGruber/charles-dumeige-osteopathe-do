import { Zoom } from "react-awesome-reveal";
import Values from "components/Values";

const AboutJob = () => (
  <>
    <div className="relative bg-white py-16 sm:py-5" id="osteopathie">
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
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:pt-20 lg:pb-12">
            <Zoom direction="top">
              <div className="relative pt-72 pb-20 rounded-2xl shadow-xl overflow-hidden border-2 border-solid border-lightblue">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="static/about-job-pic.jpeg"
                  alt=""
                />
              </div>
            </Zoom>
          </div>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-2xl">
              L'ostéopathie: l'art du métier
            </h2>
            <div className="prose prose-lg mt-6 text-gray-500">
              <p>
                L'Ostéopathie est l'art de diagnostiquer et traiter par des
                techniques manuelles. Elle permet de déceler les dysfonctions de
                la mobilité des tissus du corps, qui entraînent des troubles
                fonctionnels.
              </p>
              <p>
                L'Ostéopathie se pratique par rapport à la globalité du corps
                humain. Elle prend en compte la relation entre la structure et
                la fonction alimentée par le système neurologique et la
                vascularisation, soutenus par le régulateur hormonal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-10 xl:pt-0 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="prose prose-lg text-gray-500 lg:max-w-none">
          <div className="relative md:bg-white md:p-6">
            <p>
              L'Ostéopathie est soutenue par l'Organisation Mondiale de la Santé
              au titre de médecine préventive et conservatrice de la Santé. En
              France, elle est aujourd'hui réglementée, mais considérée comme
              non-scientifique.
            </p>
            <p>
              Elle ne prétend pas tout solutionner en matière de Santé mais
              soulage un grand nombre de troubles fonctionnels. Le praticien se
              réserve le droit d'orienter à tout moment vers un autre
              professionnel de santé, si besoin.
            </p>
            <p>
              L'Ostéopathie connaît un vaste champs d'application dans de
              nombreux domaines:
            </p>
            <ul role="list">
              <li>
                <p>
                  <span className="font-semibold">
                    Le système locomoteur et orthopédique:
                  </span>{" "}
                  Maux de dos, cervicalgies, lumbago, tendinopathies, douleurs
                  intercostales, scolioses, douleurs des membres supérieurs et
                  inférieurs.
                </p>
              </li>
              <li>
                <span className="font-semibold">Le système neurologique:</span>{" "}
                Céphalées, tout type de névralgies, sciatiques et cruralgies.
              </li>
              <li>
                <span className="font-semibold">Le système digestif:</span>{" "}
                Ballonnements, troubles du transit, gastrites et
                Reflux-Gastro-Œsophagiens.
              </li>
              <li>
                <span className="font-semibold">
                  Le système cardio-vasculaire:
                </span>{" "}
                Troubles circulatoires et migraines.
              </li>
              <li>
                <span className="font-semibold">
                  Le système respiratoire et ORL:
                </span>{" "}
                Dyspnée, troubles fonctionnels respiratoires, vertiges,
                sinusites.
              </li>
              <li>
                <span className="font-semibold">Le système gynécologique:</span>{" "}
                Suivi ostéopathique de la grossesse, troubles urinaires,
                douleurs et troubles gynécologiques.
              </li>
              <li>
                <span className="font-semibold">Le système végétatif:</span>{" "}
                Stress, troubles du sommeil, anxiété, oppressions et
                palpitations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Values />
  </>
);

export default AboutJob;
