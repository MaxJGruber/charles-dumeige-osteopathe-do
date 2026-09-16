import Reveal from "components/Reveal";

const PregnantSection = () => (
  <>
    <div className="bg-white pt-16 pb-12" id="enceintes">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          <div className="relative">
            <Reveal animation="fade" direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/static/istock-images/pregnant_small.jpeg"
                  alt="Femme enceinte lors d'une consultation d'ostéopathie"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          {/* Content area */}
          <div className="mt-10 lg:mt-0">
            <h2 className="font-display text-3xl leading-tight">
              La prise en charge ostéopathique de la femme enceinte
            </h2>
            <div className="prose prose-lg mt-6 max-w-none text-ink-soft space-y-6">
              <p>
                Durant la grossesse, le corps s'adapte en fonction du
                développement de l'enfant in utéro. Cela aura un impact sur les
                forces réparties dans le corps au niveau des charnières, des
                vertèbres pivot ainsi que sur les courbures (lordoses,
                cyphoses).
              </p>
              <p>
                Le bassin aussi se modèle et d'autres changements mécaniques et
                physiologiques se manifestent. L'ostéopathie est recommandée
                pour rééquilibrer le corps face à ces changements, en utilisant
                des techniques adaptées en fonction des trimestres de grossesse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-16 xl:py-0  px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8">
          <div>
            <h2 className="font-display text-2xl leading-tight">
              L'ostéopathie durant la grossesse et prévenir l'apparition de
              douleurs
            </h2>
          </div>
        </div>
        <div className="relative">
          <div>
            <div className="prose prose-lg max-w-[62ch] text-ink-soft">
              <p>
                Parfois le corps n'arrive pas à s'adapter face à ces changements
                et les douleurs apparaissent. Elles peuvent être sous-jacentes à
                des adaptations avant la grossesse qui se décompensent à un
                moment donné de cette dernière. En général, il s'agit de
                douleurs au niveau lombaire, de sciatalgies et de douleurs au
                niveau du bassin (sacrum-coccyx). Il peut y avoir des également
                des dysfonctionnements sur la sphère viscérale (troubles du
                transit, ballonnements, douleurs abdominales) et sur la sphère
                crânienne (céphalées, migraines).
              </p>
              <p>
                Dans ces cas, il est recommandé de consulter durant la
                grossesse, chaque trimestre pour faire des suivis et s'orienter
                vers un axe de prévention pré et post accouchement.
              </p>
              <p>
                On ne pense pas forcément à la phase de post partum pour la
                femme et son bien-être. Il est pourtant primordial de rester sur
                une bonne impression pour de nouvelles expériences à l'avenir et
                de soulager dans le nouveau rôle de maman.
              </p>
              <p>
                Durant la phase de grossesse, le corps de la femme enceinte
                change constamment et même après l'accouchement il subit encore
                des modifications sur les mêmes sphères précédemment évoquées et
                il peut y avoir des douleurs persistantes. Il est recommandé de
                consulter un mois après l'accouchement ou après la rééducation
                périnéale (sans se substituer à un suivi gynéco-obstétrical).
              </p>
              <p>
                Votre ostéopathe Charles Dumeige prend en charge les premières
                consultations de femmes enceintes ainsi que les suivis de
                grossesse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PregnantSection;
