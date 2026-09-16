import Image from "next/image";
import Reveal from "components/Reveal";

const SeniorSection = () => (
  <>
    <div className="bg-white pt-16 pb-12" id="seniors">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          <div className="relative lg:max-w-none lg:py-20">
            <Reveal animation="fade" direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <Image
                  className="object-cover"
                  src="/static/istock-images/seniorman_small.jpeg"
                  alt="Homme sénior lors d'une séance d'ostéopathie"
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
              La prise en charge ostéopathique des séniors
            </h2>
            <div className="prose prose-lg mt-6 max-w-none text-ink-soft space-y-6">
              <p>
                Avec les années passées, le quotidien des seniors apparaît plus
                compliqué dans les gestes de tous les jours, avec des raideurs
                naissantes et une souplesse diminuée. Il faut ajouter à cela
                l'usure osseuse et cartilagineuse et les atteintes
                musculo-ligamentaires. Tout cela amène des dysfonctions de
                mobilité et des douleurs aiguës ou chroniques.
              </p>
              <p>
                Vous pouvez consulter votre ostéopathe Charles Dumeige pour vos
                douleurs articulaires. Des séances régulières permettent un
                entretien général et de gagner en souplesse générale.
                L'ostéopathie vous accompagne dans cette période de vie et vous
                aide à bien vieillir avec des soins adaptés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="relative bg-white">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl">
        <h2 className="font-display text-2xl leading-tight">
          L'ostéopathie en prévention des douleurs
        </h2>
        <div className="prose prose-lg mt-6 max-w-[62ch] text-ink-soft">
          <p>
            Les séances d'ostéopathie peuvent diminuer les douleurs articulaires
            vertébrales ou périphériques, souvent dues à l'arthrose. Le
            processus consistera à veiller à la bonne mobilité de ces
            articulations et des conseils hygiéno-diététiques qui vont avec.
            L'ostéopathie ne pourra totalement diminuer les douleurs dues au
            vieillissement, mais celle-ci aidera à les atténuer au maximum.
          </p>
          <p>
            Votre ostéopathe Charles Dumeige vous prendra en charge le mieux
            possible et rendra votre quotidien meilleur.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-0">
            <div className="prose prose-lg mt-6 max-w-[62ch] text-ink-soft space-y-6">
              <p>
                Tout comme le système musculo-ligamentaire, les organes mous du
                système viscéral peuvent perdre en mobilité et entraîner un
                perte d'élasticité de leurs fascias associés. Dès lors, le
                système digestif sera moins performant et peut entraîner des
                désordres. Il peut en résulter un trouble du transit,
                ballonnements, et autres douleurs viscérales et de leurs
                vertèbres associées.
              </p>
              <p>
                Votre ostéopathe Charles Dumeige travaillera sur les tissus de
                cette sphère pour regagner en mobilité intrinsèque qui aura pour
                conséquence un meilleur fonctionnement digestif. Les autres
                sphères du corps pourront être travaillées avec le même objectif
                (crânienne, thoracique, pelvienne...).
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className=" inset-y-0 right-1/2 w-full bg-paper rounded-r-3xl lg:right-72" />
          </div>
          <div className="relative lg:max-w-none lg:py-20">
            <Reveal animation="fade" direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <Image
                  className="object-cover"
                  src="/static/istock-images/seniorwoman_small.jpeg"
                  alt="Femme sénior consultant un ostéopathe"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 608px"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SeniorSection;
