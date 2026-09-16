import Image from "next/image";
import Reveal from "components/Reveal";

const PersonalSection = () => (
  <>
    <div className="bg-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative">
          <div className="relative">
            <Reveal animation="zoom" direction="top">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-ink/10">
                <Image
                  className="object-cover"
                  src="/static/personal-section-pic.jpg"
                  alt="Cabinet d'ostéopathie de Charles Dumeige"
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
              Quelques mots sur les valeurs de l'ostéopathie selon Charles
              Dumeige
            </h2>
            <div className="prose prose-lg mt-6 max-w-none text-ink-soft space-y-6">
              <p>
                Pour moi, l'ostéopathie est une profession essentielle dans le
                domaine de la Santé. Elle est de plus en plus recommandée et
                indiquée pour la plupart des troubles fonctionnels.
              </p>
              <p>
                Dans une époque compliquée et incertaine pour l'avenir, il est
                important pour moi de répondre du mieux possible à ces troubles
                que les patients peuvent ressentir. Je me donne toujours à fond
                dans ma pratique et choisis les conseils les plus appropriés au
                patient. En effet, je considère que la pratique manuelle ne
                suffit pas, ou en tout cas qu'elle n'est pas durable sur le long
                terme. Je mets un point d'honneur pour que le patient intègre et
                applique mes conseils dans son quotidien, que ça soit pour
                reprendre des bonnes habitudes hygiéno-diététiques ou faire
                attention à sa posture (je dis souvent qu'un patient s'éduque).
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
              Tout ceci met en avant l'aspect préventif de l'Ostéopathie, je
              répète souvent que je préfère voir un patient en moyenne 2 fois
              par an pour des consultations de contrôle (sauf urgences), plutôt
              que 3-4 fois dans l'année en hyperalgie car il y'a eu attente que
              la douleur apparaisse pour venir me consulter.
            </p>
            <p>
              Dans ma pratique en consultation, je prends le temps nécessaire
              avec le patient pour discuter et apprendre à le connaître. Je
              l'interroge ainsi longuement pour comprendre pourquoi il a
              aujourd'hui une douleur. Je tente avec lui d'élucider les quelques
              pistes qui permettent de comprendre comment elle est apparue (un
              peu comme si on essayait de résoudre une enquête où chaque détail
              compte). Durant le reste de la consultation, je prends le temps
              d'observer et palper attentivement pour déceler au plus vite les
              adaptations du corps et les corriger pour que ce dernier retrouve
              la mobilité qui lui manquait. Je parle durant ma pratique pour
              plus d'interaction avec le patient et lui explique pourquoi
              j'emploie chaque technique, pour qu'il puisse comprendre ce qu'il
              se passe.
            </p>
            <p className="font-bold text-darkblue">
              "Un patient qui comprend son corps et sa douleur, est déjà un
              patient qui va mieux."
            </p>
            <p>
              Je considère que la communication avec le patient est essentielle
              que ça soit dans le verbal ou bien dans le toucher. Mon but dans
              ce dernier cas, sera de vous transmettre du bien-être. Alors
              n'hésitez pas à venir me consulter, je suis à votre disposition du
              lundi au dimanche, au cabinet ou à domicile.
            </p>
            <p>Bien à vous.</p>
            <p>Charles Dumeige</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PersonalSection;
