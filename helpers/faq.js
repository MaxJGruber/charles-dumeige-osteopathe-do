import { PHONE_DISPLAY } from "root/config";

/**
 * The questions patients actually ask before booking.
 *
 * This is the source for both the rendered FAQ section and the FAQPage JSON-LD,
 * so the two can never disagree — Google requires the answer to be visible on
 * the page for the schema to be legitimate.
 *
 * Answers are written to be quotable on their own: an AI answer engine lifts a
 * single answer out of context, so each one repeats enough detail ("à
 * Sartrouville", "chez Charles Dumeige") to stand up alone, and none of them
 * promises a medical outcome.
 */
export const FAQ = [
  {
    question: "Combien coûte une séance d'ostéopathie à Sartrouville ?",
    answer:
      "Au cabinet de Charles Dumeige à Sartrouville, la consultation générale pour un adolescent, un adulte, " +
      "une femme enceinte, un sénior ou un sportif est à 60 €. " +
      "Elle est à 50 € pour un nourrisson ou un enfant de moins de 10 ans, à 75 € le dimanche et les jours fériés " +
      "pour les demandes d'urgence, et à 80 € à domicile. Ces honoraires sont indicatifs et peuvent varier selon " +
      "les soins réalisés ; le praticien vous avertit au préalable en cas de dépassement.",
  },
  {
    question: "L'ostéopathie est-elle remboursée ?",
    answer:
      "La consultation d'ostéopathie n'est pas prise en charge par l'Assurance Maladie et la carte Vitale n'est " +
      "donc pas acceptée. En revanche, la plupart des mutuelles la remboursent en partie ou en totalité : " +
      "vérifiez le forfait « médecines douces » ou « ostéopathie » de votre contrat.",
  },
  {
    question: "Combien de temps dure une séance d'ostéopathie ?",
    answer:
      "Une séance dure environ 45 minutes. Elle commence par un temps d'échange sur vos douleurs et vos " +
      "antécédents, puis se poursuit par le traitement manuel.",
  },
  {
    question: "Est-ce que l'ostéopathie fait mal ?",
    answer:
      "Le traitement est manuel et adapté à chaque patient. Il est fréquent d'être courbaturé après une séance : " +
      "c'est normal, et il faut compter 2 à 3 jours pour que la douleur s'atténue complètement.",
  },
  {
    question: "À partir de quel âge peut-on consulter un ostéopathe ?",
    answer:
      "L'ostéopathie s'adresse à tous les âges, du nouveau-né à la personne âgée. Charles Dumeige reçoit les " +
      "nourrissons, les enfants, les adolescents, les femmes enceintes, les adultes, les séniors et les " +
      "sportifs, en adaptant les " +
      "techniques à chaque type de corps.",
  },
  {
    question: "Faut-il une ordonnance pour consulter un ostéopathe ?",
    answer:
      "Non. L'ostéopathie est une profession à accès direct : vous pouvez prendre rendez-vous sans passer par " +
      "votre médecin traitant. L'ostéopathie ne se substitue toutefois pas aux traitements médicaux en cours, " +
      "que seul votre médecin peut modifier ou suspendre.",
  },
  {
    question: "Quels sont les horaires du cabinet ?",
    answer:
      "Le cabinet est ouvert du lundi au samedi de 8h30 à 20h30, et le dimanche de 10h30 à 15h45 pour les " +
      "demandes d'urgence. La prise de rendez-vous se fait en ligne sur Doctolib ou au " +
      PHONE_DISPLAY +
      ".",
  },
  {
    question: "Où se trouve le cabinet et comment s'y rendre ?",
    answer:
      "Le cabinet est au centre médical Debussy, 20 rue René Brûlay à Sartrouville (78500), sur la place du " +
      "marché, à 5 minutes à pied de la gare du RER A. Il est desservi par le bus 5 (arrêt Convention) et les " +
      "bus 5 et 25 (arrêt Turgot). Il se situe au 1er sous-sol, avec ascenseur et accès handicapé ; un parking " +
      "payant est disponible.",
  },
  {
    question: "Charles Dumeige se déplace-t-il à domicile ?",
    answer:
      "Oui. Les consultations à domicile se font sur rendez-vous téléphonique uniquement, au " +
      PHONE_DISPLAY +
      ", quand le déplacement jusqu'au cabinet est difficile. La consultation à domicile est facturée 80 €.",
  },
  {
    question: "Comment régler la consultation ?",
    answer:
      "Le cabinet accepte les espèces, les chèques et la carte bancaire (Visa, Mastercard, American Express). " +
      "La carte Vitale n'est pas acceptée, l'ostéopathie n'étant pas remboursée par l'Assurance Maladie.",
  },
];
