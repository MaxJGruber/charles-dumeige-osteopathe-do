import Link from "next/link";
import { NextSeo } from "next-seo";
import { URL } from "root/config";
import Nav from "components/Nav";
import { openCookieSettings } from "helpers/consent";

const supportLinks = [
  {
    name: "Contenu écrit",
    description: [
      "Tous les textes et articles sur le site ont été écrits par Charles Dumeige.",
      "Toute opinion ou avis présenté sur le site, a pour unique but d'informer les visiteurs, et n'a aucunement pour but d'offenser ou discriminer contre tout type de sexe, d'âge ou d'handicap.",
      "Toute description de type de patient ou sur l'ostéopathie, est recherché et étudier par Charles Dumeige, ostéopathe certifié et diplômé, et possède pour unique but d'informer les visiteurs.",
    ],
  },
  {
    id: "cookies",
    name: "Politique relative aux cookies",
    description: [
      "Les cookies sont de petits fichiers texte déposés sur votre appareil lorsque vous visitez un site. Ce site n'utilise des cookies que pour la mesure d'audience, avec Google Analytics, qui nous aide à comprendre comment les visiteurs consultent le site.",
      "Ces cookies (_ga et _ga_*) ne sont déposés qu'avec votre accord, donné via le bandeau affiché lors de votre première visite. Ils sont conservés 13 mois au maximum. Si vous refusez, Google Analytics n'est pas chargé et aucun cookie de mesure n'est déposé.",
      "Votre choix est conservé 6 mois, après quoi il vous sera à nouveau demandé. Vous pouvez le modifier à tout moment :",
    ],
    manageCookies: true,
  },
  {
    name: "Contenu visuel",
    description: [
      "Certaines de nos photos ont été légalement acheté et téléchargé sur iStock.com avec une licence standard qui nous permet d’obtenir une utilisation personnelle, professionnelle ou commerciale du fichier, ou tout autre type d'utilisation qui n'est pas interdit par la licence.",
      "Cela signifie que nous avons le droit d'utiliser ces contenus dans les domaines suivants : publicité, marketing, applications, sites Internet, réseaux sociaux, télévision et films, présentations, journaux, magazines et livres, packaging / emballage et des centaines d'autres types d'utilisations.",
      "Certaines de nos photos ont été légalement téléchargé sur unsplash.com avec une licence standard",
    ],
  },
];

const Legal = () => (
  <div className="bg-white">
    <NextSeo
      title="Mentions légales"
      description="Mentions légales du site de Charles Dumeige, ostéopathe D.O à Sartrouville."
      canonical={`${URL}legal`}
      noindex
    />
    <div className="bg-paper">
      <Nav />
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-6 sm:px-8">
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">
          Mentions légales
        </h1>
        <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-soft">
          Site développé par Maximilian Gruber, hébergé par nos soins, nom de
          domaine acheté chez GoDaddy.
        </p>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-x-12 gap-y-12 lg:grid-cols-3">
        {supportLinks.map((link) => (
          <section key={link.name} id={link.id} className="scroll-mt-8">
            <h2 className="border-t border-rule pt-6 font-display text-xl leading-snug">
              {link.name}
            </h2>
            {link.description.map((line, i) => (
              <p key={i} className="mt-4 leading-relaxed text-ink-soft">
                {line}
              </p>
            ))}
            {link.manageCookies && (
              <button
                type="button"
                onClick={openCookieSettings}
                className="mt-4 rounded-full border border-teal px-5 py-2.5 text-[0.95rem] font-medium text-teal transition-colors hover:bg-teal-wash"
              >
                Gérer mes cookies
              </button>
            )}
          </section>
        ))}
      </div>
    </div>
  </div>
);

export default Legal;
