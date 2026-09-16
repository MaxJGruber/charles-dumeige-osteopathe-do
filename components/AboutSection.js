import Reveal from "components/Reveal";

const AboutSection = () => (
  <>
    <div className="relative bg-white py-16 sm:py-0" id="osteopathe">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          <div className="relative">
            <Reveal animation="zoom" direction="top">
              <div className="flex justify-center">
                <div className="relative w-3/4 py-72 rounded-2xl overflow-hidden ring-1 ring-ink/10">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/static/profile-pic.jpg"
                    alt="Portrait de Charles Dumeige, ostéopathe D.O à Sartrouville"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          {/* Content area */}
          <div className="mt-10 lg:mt-0">
            <h2 className="font-display text-3xl leading-tight">
              L'ostéopathe: Charles Dumeige
            </h2>
            <div className="prose prose-lg mt-6 max-w-none text-ink-soft space-y-6">
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
    <div className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8">
          <div>
            <h2 className="font-display text-2xl leading-tight">
              Son parcours professionel
            </h2>
          </div>
        </div>

        <div>
          <div className="prose prose-lg max-w-[62ch] text-ink-soft">
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
              En Novembre 2019, il s'installe en cabinet de Kiné-Ostéo dans la
              ville de Meaux (77) où il y travaillera pendant un peu plus de 2
              ans.
            </p>
            <p>
              En Janvier 2022, il travaille 4 mois en tant qu'ostéopathe en
              entreprise chez Posturite France, basée à Maisons-Lafitte,
              spécialisée dans l'ergonomie au travail. Il y apporte ses conseils
              pour la mise en place de matériel ergonomique dans les entreprises
              et permettre une meilleure installation et utilisation des postes
              de travail dans les bureaux et en télétravail.
            </p>
            <p>
              Depuis Juin 2022, Charles Dumeige est installé en pôle médical au
              sein de Sartrouville (78).
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutSection;
