const PersonalSection = () => (
  <>
    <div className="relative bg-white py-16 sm:py-5">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
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
            <div className="relative pt-72 pb-20 rounded-2xl shadow-xl overflow-hidden border-2 border-solid border-lightblue">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="static/personal-section-pic.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-darkblue font-extrabold tracking-tight sm:text-2xl">
              Quelques mots sur les valeurs de l'ostéopathie selon Charles
              Dumeige
            </h2>
            <div className="prose prose-lg mt-6 text-gray-500 space-y-6">
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
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="prose prose-lg text-gray-500 lg:max-w-none">
          <div className="relative md:bg-white md:p-6">
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
