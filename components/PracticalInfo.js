import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill1Wave,
  faCreditCard,
  faWheelchair,
  faComment,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcMastercard,
  faCcAmex,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";

const features = [
  { name: "Espèces et chèques acceptés", icon: faMoneyBill1Wave },
  { name: "Carte bancaire acceptée", icon: faCreditCard, isCreditCard: true },
  { name: "Cabinet accessible aux personnes handicapées", icon: faWheelchair },
  { name: "Consultation possible en anglais", icon: faComment },
  {
    name: "Carte Vitale non acceptée",
    icon: faCircleExclamation,
    isWarning: true,
  },
];

const PracticalInfo = () => (
  <section className="bg-paper py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">
        Sur place
      </h2>

      <ul className="mt-12 grid max-w-4xl gap-x-12 gap-y-5 sm:grid-cols-2">
        {features.map((feature) => (
          <li key={feature.name} className="flex items-start gap-4">
            <FontAwesomeIcon
              icon={feature.icon}
              className={`mt-1 h-5 w-5 shrink-0 ${
                feature.isWarning ? "text-vertebra" : "text-leaf"
              }`}
            />
            <span
              className={feature.isWarning ? "text-ink" : "text-ink-soft"}
            >
              {feature.name}
              {feature.isCreditCard && (
                <span className="ml-2 inline-flex items-center gap-1.5 align-middle text-ink-faint">
                  <FontAwesomeIcon icon={faCcVisa} className="h-4 w-4" />
                  <FontAwesomeIcon icon={faCcMastercard} className="h-4 w-4" />
                  <FontAwesomeIcon icon={faCcAmex} className="h-4 w-4" />
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default PracticalInfo;
