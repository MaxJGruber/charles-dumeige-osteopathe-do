import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const navigation = {
  patients: [
    { name: "Nourissons", href: "#" },
    { name: "Enfants", href: "#" },
    { name: "Femmes enceintes", href: "#" },
    { name: "Adultes", href: "#" },
    { name: "Séniors", href: "#" },
    { name: "Sportifs", href: "#" },
  ],
  presentation: [
    { name: "L'ostéopathie", href: "#" },
    { name: "L'art du métier", href: "#" },
    { name: "L'ostéopathe", href: "#" },
  ],
  externalLinks: [
    { name: "Doctolib (Sartrouville)", href: "#" },
    { name: "Doctolib (Paris)", href: "#" },
    { name: "Pages Jaunes", href: "#" },
    { name: "Google", href: "#" },
  ],
  legal: [{ name: "À propos", href: "#" }],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: faLinkedin,
    },
  ],
};

const Footer = () => (
  <footer className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Patients
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.patients.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Présentations
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.presentation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Liens Externes
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.externalLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Infos Légales
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
        <div className="flex space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; 2022 By Max Gruber
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
