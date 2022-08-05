import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill1Wave,
  faCreditCard,
  faHeadSideMask,
  faWheelchair,
  faComment,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcMastercard,
  faCcAmex,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";

const features = [
  {
    name: "Paiement en espèces ou en chèque acceptée",
    icon: faMoneyBill1Wave,
  },
  {
    name: "Paiement par carte bancaire acceptée",
    icon: faCreditCard,
    isCreditCard: true,
  },
  {
    name: "Respect des gestes barrières",
    icon: faHeadSideMask,
  },
  {
    name: "Accessible aux handicapés",
    icon: faWheelchair,
  },
  {
    name: "Consultation en anglais possible",
    icon: faComment,
  },
  {
    name: "Carte Vitale non acceptée",
    icon: faExclamationTriangle,
    isWarning: true,
  },
];

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-lightblue font-semibold tracking-wide uppercase">
            INFORMATIONS PRATIQUES
          </h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt className="flex items-center">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-lightblue text-white">
                    <FontAwesomeIcon icon={feature.icon} size="2x" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                {feature.isCreditCard && (
                  <dd class="flex items-center text-base text-gray-500">
                    <FontAwesomeIcon icon={faCcMastercard} size="1x" />
                    <FontAwesomeIcon icon={faCcVisa} size="1x" />
                    <FontAwesomeIcon icon={faCcAmex} size="1x" />
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
