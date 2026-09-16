import Image from "next/image";
import Reveal from "components/Reveal";

const ChildrenSection = () => (
  <>
    <div className="relative bg-white py-16 sm:py-0" id="enfants">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          <div className="relative">
            <Reveal animation="fade" direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <Image
                  className="object-cover"
                  src="/static/istock-images/childelbow_small.jpeg"
                  alt="Examen ostéopathique du coude d'un enfant"
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
              L'ostéopathie pour les enfants & adolescents
            </h2>
            <div className="prose prose-lg mt-6 max-w-none text-ink-soft space-y-6">
              <p>
                L'ostéopathie chez les enfants et adolescents est adaptée et
                recommandée pour différents motifs semblables à l'adulte.
              </p>
              <p>
                Cependant les troubles de la statique sont plus fréquents à ces
                âges et peuvent entraîner des dysfonctions au niveau des
                courbures rachidiennes (cyphoses et lordoses).
              </p>
              <p>
                Elles sont souvent dues à une mauvaise adaptation du corps par
                rapport à la croissance ou bien encore des troubles posturaux
                avec les sacs à dos lourd et mauvaise assise pendant les cours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-16 xl:py-0 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative">
          <div>
            <div className="prose prose-lg max-w-[62ch] text-ink-soft">
              <p>
                Votre ostéopathe Charles Dumeige emploiera des techniques
                ostéopathiques adaptées en fonction de l'âge (3-14 ans pour les
                enfants et 14-18 ans pour les adolescents). Il vous procurera
                des conseils au niveau hygiéno-diététique (pratiquer un sport
                régulier par exemple) ou encore vous expliquera les gestes et
                postures afin d'éviter ses troubles de la statique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-5">
            <div className="prose prose-lg mt-6 max-w-none text-ink-soft space-y-6">
              <p>
                Il est recommandé de consulter une fois par an maximum, en
                fonction des besoins de l'enfant (bien rester attentif à ses
                plaintes et anticiper l'apparition de douleurs associées). Un
                parent devra être obligatoirement présent lors de la
                consultation et des conseils lui seront donnés également pour
                sensibiliser à surveiller l'évolution de la croissance de
                l'enfant.
              </p>
              <p>
                En effet, il devra surveiller l'évolution des courbures
                rachidiennes afin de détecter des possibles apparition de
                scoliose, pour qu'une prise en charge multidisciplinaire adaptée
                soit mise en place avant un stade trop avancé (séances de
                kinésithérapeute fortement recommandées à ce moment là en
                complément). L'ostéopathie participe à l'efficacité et à la
                stabilité du traitement.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className=" inset-y-0 right-1/2 w-full bg-paper rounded-r-3xl lg:right-72" />
          </div>
          <div className="relative lg:max-w-none lg:pt-10">
            <Reveal animation="fade" direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <Image
                  className="object-cover"
                  src="/static/istock-images/childleg_small.jpeg"
                  alt="Ostéopathe examinant la jambe d'un enfant"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 608px"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
    <div className="py-16 xl:py-0 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div>
          <div className="prose prose-lg max-w-[62ch] text-ink-soft">
            <p>
              La vie de l'enfant et adolescents est mouvementée, elle est sujet
              à la pratique d'activités sportives, où ils peuvent subir des
              traumatismes et chutes à répétition. Suites à cela, il peut y
              avoir des tensions tissulaires qui restent et peuvent se réveiller
              plus tard à cause de la mémoire traumatique.
            </p>
            <p>
              Pour que la croissance se fasse plus harmonieuse, et aider le
              corps à se rétablir face aux traumatismes, un suivi ostéopathique
              régulier est important lors d'une pratique d'activité sportive
              régulière ou une activité source de micro-traumatismes (rugby,
              arts martiaux, équitation).
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ChildrenSection;
