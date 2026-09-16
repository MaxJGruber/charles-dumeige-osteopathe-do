import Image from "next/image";
import Reveal from "components/Reveal";

const SportsSection = () => (
  <>
    <div className="bg-white pt-16 pb-12" id="sportifs">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          <div className="relative lg:max-w-none lg:py-20">
            <Reveal animation="fade" direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <Image
                  className="object-cover"
                  src="/static/istock-images/sportsman_small.jpeg"
                  alt="Sportif en pleine activité physique"
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
              La prise en charge ostéopathique des sportifs
            </h2>
            <div className="prose prose-lg mt-6 max-w-none text-ink-soft space-y-6">
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
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8">
          <div>
            <h2 className="font-display text-2xl leading-tight">
              L'ostéopathie est adaptée à tous les sports
            </h2>
          </div>
        </div>
        <div>
          <div className="prose prose-lg max-w-[62ch] text-ink-soft">
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
            <h2 className="font-display text-2xl leading-tight">
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
