const features = [
  {
    price: "60€",
    description: "Consultation générale d'ostéopathie",
  },
  {
    price: "75€",
    description: "Consultation d'ostéopathie le dimanche",
  },
  {
    price: "80€",
    description:
      "Consultation d'ostéopathie à domicile (à prévoir par contact téléphonique uniquement)",
  },
];

const PriceList = () => (
  <div className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-lightblue font-semibold tracking-wide uppercase">
          Tarifs
        </h2>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {features.map((feature, i) => (
            <div key={i} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-lightblue text-white">
                  {feature.price}
                </div>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="lg:text-center">
        <p className="mt-10 max-w-2xl text-sm text-gray-500 lg:mx-auto">
          Ces honoraires vous sont communiqués à titre indicatif par le
          praticien. Ils peuvent varier selon le type de soins finalement
          réalisés en cabinet, le nombre de consultations et les actes
          additionnels nécessaires. En cas de dépassement des tarifs, le
          praticien doit en avertir préalablement le patient.
        </p>
      </div>
    </div>
  </div>
);

export default PriceList;
