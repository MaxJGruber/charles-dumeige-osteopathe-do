import Reveal from "components/Reveal";
import Values from "components/Values";

const AboutJob = () => (
  <>
    <div className="bg-white pt-16 pb-12" id="osteopathie">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          <div className="relative">
            <Reveal animation="zoom" direction="top">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/static/about-job-pic.jpeg"
                  alt="Mains d'un ostéopathe pratiquant une manipulation manuelle"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative">
          {/* Content area */}
          <div className="mt-10 lg:mt-0">
            <h2 className="font-display text-3xl leading-tight">
              L'ostéopathie: l'art du métier
            </h2>
            <div className="prose prose-lg mt-6 text-ink-soft">
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
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="prose prose-lg max-w-[62ch] text-ink-soft">
          <div>
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
