import Image from "next/image";
import Reveal from "components/Reveal";

const AdultSection = () => (
  <>
    <div className="relative bg-white" id="adultes">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          {/* Content area */}
          <div className="mt-10 lg:mt-0">
            <h2 className="font-display text-3xl leading-tight">
              La prise en charge ostéopathique des adultes
            </h2>
            <div className="prose prose-lg mt-6 max-w-none text-ink-soft space-y-6">
              <p>
                L'adulte peut consulter en ostéopathie pour de nombreux motifs
                autre que le mal de dos, même s' il reste très récurent. Dans la
                limite de son champ d'application, l'ostéopathie s'intéressera à
                un domaine plus large en termes de prise en charge.
              </p>
              <p>
                Votre ostéopathe Charles Dumeige vous procurera des séances
                d'ostéopathie générale mais aussi pour les sphères crâniennes ou
                encore viscérales.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className=" inset-y-0 right-1/2 w-full bg-paper rounded-r-3xl lg:right-72" />
          </div>
          <div className="relative lg:max-w-none lg:pt-20">
            <Reveal animation="fade" direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <Image
                  className="object-cover"
                  src="/static/istock-images/adultspine_small.jpeg"
                  alt="Ostéopathe manipulant la colonne vertébrale d'un adulte"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 608px"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
    <div className="py-16 xl:py-7 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8">
          <div>
            <h2 className="font-display text-2xl leading-tight">
              Les motifs les plus fréquents:
            </h2>
          </div>
        </div>
        <div>
          <div className="prose prose-lg max-w-[62ch] text-ink-soft">
            <ul role="list">
              <li>
                Le mal de dos à tous les niveaux rachidiens (cervicaux, dorsaux,
                lombaires). Le motif le plus récurrent en consultation.
              </li>
              <li>
                Lombalgie ou lumbago, souvent déclenché par un port de charge
                lourde ou faux mouvement au niveau des lombaires.
              </li>
              <li>
                Le torticolis est une douleur dans le cou, souvent qui apparaît
                avec un gros stress, mauvaise position ou changement de
                température important
              </li>
              <li>
                La sciatique, si elle n'est pas contre indiqué par avis médical,
                l'ostéopathe pourra soulager les atteintes du nerfs sciatique
                dans les motifs de sciatalgie ou de syndrome du piriforme
              </li>
              <li>
                Douleurs articulaires au niveau des articulations du membre
                supérieur ou inférieur
              </li>
              <li>
                Les tendinites, dues à une sursollicitations du tendon à cause
                de gestes répétitifs ou bien une mauvaise habitude
                hygiéno-diététique.
              </li>
              <li>
                Les traumatismes après une chute ou les AVP (accidents de la
                voie publique).
              </li>
              <li>
                Après une entorse de cheville ou genou pour retrouver en
                mobilité et stabilité. Le même procédé pourra être effectué
                après une fracture une fois la consolidation de l'os concerné.
              </li>
              <li>
                Les douleurs à l'estomac, RGO (remontées acides vers la bouche)
                et ballonnements. Les troubles du transit peuvent également être
                un motif de consultation. L'ostéopathie aura de très bon
                résultats sur la sphère viscérale.
              </li>
              <li>
                Les douleurs à la mâchoire survenant à la mastication ou encore
                les bruxismes (grincement des dents). Il peut y avoir un niveau
                de stress à prendre en compte pour ce type de douleurs.
              </li>
              <li>
                Les acouphènes (sifflements ou bourdonnements dans l'oreille).
                Les maux de tête ou migraines sont également des motifs très
                fréquents.
              </li>
              <li>
                Les troubles gynécologiques, sans contre-indication médicale.
                L'ostéopathie peut atténuer les douleurs de règles, dyspareunies
                (douleurs aux rapports) et aider à la conception.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="relative bg-white py-16 sm:pt-0 sm:pb-5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          <div className="relative lg:max-w-none lg:pt-0">
            <Reveal animation="fade" direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <Image
                  className="object-cover"
                  src="/static/istock-images/adultman_small.jpeg"
                  alt="Homme adulte souffrant de douleurs de dos"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 608px"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-0">
            <h2 className="font-display text-2xl leading-tight">
              Le mal de dos
            </h2>
            <div className="prose prose-lg mt-6 max-w-none text-ink-soft space-y-6">
              <p>
                Les origines du mal de dos ou encore d'autres motifs (lumbago,
                torticolis et cervicalgies, sciatalgies...) peuvent s'expliquer
                par les pressions subies au quotidien avec le niveau de stress
                ou les mauvaises postures au travail.
              </p>
              <p>
                Le corps n'arrivera plus à s'adapter et perdra son équilibre.
                C'est alors que se manifeste le mal de dos et autres motifs
                évoqués et qui peuvent souvent être liés à ce dernier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-16 xl:pt-12  px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8">
          <div>
            <h2 className="font-display text-2xl leading-tight">
              L'ostéopathie en prévention des douleurs
            </h2>
          </div>
        </div>
        <div>
          <div className="prose prose-lg max-w-[62ch] text-ink-soft">
            <p>
              Votre ostéopathe Charles Dumeige aide votre corps à retrouver son
              harmonie. Il est recommandé de consulter régulièrement pour
              prévenir l'apparition de douleurs et d'inconforts. Il est
              conseillé une à deux séances par an, il est possible même de venir
              sans motifs de consultation pour faire un bilan complet et éviter
              les douleurs chroniques. Évidemment ce sera sans prendre en compte
              les motifs d'urgences, de décompensations aiguës aléatoires et le
              niveau de stress quotidien propre à chacun.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AdultSection;
