// The three disciplines Charles practises, each with the plain-language
// version of what it means for the patient.
const disciplines = [
  {
    name: "Générale",
    description:
      "Le squelette, les articulations et les muscles : dos, nuque, épaules, genoux. Le motif de consultation le plus courant.",
  },
  {
    name: "Viscérale",
    description:
      "Les organes et leurs enveloppes. Utile sur les troubles digestifs, les reflux du nourrisson ou les douleurs qui reviennent sans cause mécanique.",
  },
  {
    name: "Crânienne",
    description:
      "Les os du crâne et leurs micro-mobilités. Le terrain des plagiocéphalies du nourrisson, des maux de tête et des troubles du sommeil.",
  },
];

// What a first consultation is actually like, since most people booking have
// never seen an osteopath and are quietly wondering if it will hurt.
const expectations = [
  {
    title: "Une séance dure environ 45 minutes",
    body: "Un temps d'échange sur vos douleurs et vos antécédents, puis le traitement manuel.",
  },
  {
    title: "Vous pouvez être courbaturé ensuite",
    body: "C'est normal. Comptez 2 à 3 jours pour que la douleur s'atténue complètement.",
  },
  {
    title: "Charles se déplace à domicile",
    body: "Sur rendez-vous téléphonique, quand le déplacement est difficile.",
  },
];

const Featured = () => (
  <section className="bg-white py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="max-w-2xl">
        <h2 className="font-display text-4xl leading-tight sm:text-5xl">
          Trois approches, un seul corps
        </h2>
        <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          L'ostéopathie traite le corps comme un ensemble. Charles Dumeige
          combine les trois approches selon ce que votre corps demande, au
          cabinet comme à domicile.
        </p>
      </div>

      {/* Set as a definition list: each discipline is a term and its meaning,
          which is exactly what this content is. */}
      <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-rule sm:grid-cols-3">
        {disciplines.map((item) => (
          <div key={item.name} className="bg-paper p-8">
            <dt className="font-display text-2xl text-teal">{item.name}</dt>
            <dd className="mt-3 leading-relaxed text-ink-soft">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-20 border-t border-rule pt-12">
        <h3 className="font-display text-2xl">Votre première séance</h3>
        <dl className="mt-8 grid gap-10 sm:grid-cols-3">
          {expectations.map((item) => (
            <div key={item.title}>
              <dt className="font-medium text-ink">{item.title}</dt>
              <dd className="mt-2 leading-relaxed text-ink-soft">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default Featured;
