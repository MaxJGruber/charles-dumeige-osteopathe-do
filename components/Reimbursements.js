const Reimbursements = () => (
  <section className="bg-white pb-20 lg:pb-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="rounded-2xl bg-leaf-wash p-8 sm:p-12">
        <div className="max-w-[60ch]">
          <h2 className="font-display text-2xl sm:text-3xl">Remboursements</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            La consultation d'ostéopathie n'est pas prise en charge par
            l'Assurance Maladie, mais la plupart des mutuelles la remboursent,
            en partie ou en totalité.
          </p>
        </div>
        {/* Was a <button href>, which does nothing; this needs to be a link. */}
        <a
          href="https://www.osteopathie.org/mutuelles.html"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-leaf px-7 py-3.5 font-medium text-white transition-colors hover:bg-teal-deep"
        >
          Vérifier votre mutuelle
        </a>
      </div>
    </div>
  </section>
);

export default Reimbursements;
