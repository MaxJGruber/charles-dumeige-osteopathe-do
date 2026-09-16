// A medical caveat, not a marketing block: set it as a quiet aside so it
// reads as information rather than a section heading competing for attention.
const Disclaimer = () => (
  <section className="bg-white pb-16 pt-4">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="max-w-[62ch] border-l-2 border-vertebra pl-6">
        <p className="font-display text-xl leading-snug text-ink">
          L'ostéopathie ne se substitue pas aux traitements médicaux. Seul votre
          médecin peut envisager de les modifier ou de les suspendre.
        </p>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Dans le cadre de maladies graves (maladies organiques ou
          dégénératives, génétiques ou infectieuses), l'ostéopathie ne guérit
          pas, mais elle peut jouer un rôle en soins complémentaires et
          palliatifs : soulager momentanément les douleurs articulaires ou
          musculaires et apporter un meilleur confort de vie.
        </p>
      </div>
    </div>
  </section>
);

export default Disclaimer;
