import Image from "next/image";
import Reveal from "components/Reveal";

const BabiesSection = () => (
  <>
    <div className="bg-white pt-16 pb-12" id="nourissons">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          <div className="relative">
            <Reveal animation="fade" direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <Image
                  className="object-cover"
                  src="/static/istock-images/baby_small.jpeg"
                  alt="Nourrisson allongé lors d'une séance d'ostéopathie pédiatrique"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 608px"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative">
          {/* Content area */}
          <div className="mt-10 lg:mt-0">
            <h2 className="font-display text-3xl leading-tight">
              La prise en charge ostéopathique des nourissons
            </h2>
            <div className="prose prose-lg mt-6 max-w-none text-ink-soft space-y-6">
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
    <div className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8">
          <div>
            <h2 className="font-display text-3xl leading-tight">
              Les motifs de consultation pour votre nourrisson
            </h2>
          </div>
        </div>

        <div>
          <div className="prose prose-lg max-w-[62ch] text-ink-soft">
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
