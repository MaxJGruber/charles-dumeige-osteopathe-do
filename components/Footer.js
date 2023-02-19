import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const navigation = {
  patients: [
    { name: "Nourissons", href: "nourissons" },
    { name: "Enfants", href: "enfants" },
    { name: "Femmes enceintes", href: "enceintes" },
    { name: "Adultes", href: "adultes" },
    { name: "Séniors", href: "seniors" },
    { name: "Sportifs", href: "sportifs" },
  ],
  presentation: [
    { name: "L'ostéopathie", href: "osteopathie" },
    { name: "L'ostéopathe", href: "osteopathe" },
    { name: "Valeurs", href: "valeurs" },
  ],
  contact: [
    {
      name: "Sartrouville",
      href: "/#sartrouville",
    },
  ],
  externalLinks: [
    {
      name: "Doctolib",
      href: "https://www.doctolib.fr/osteopathe/sartrouville/charles-dumeige",
    },
  ],
  other: [{ name: "Mentions légales", href: "/legal" }],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/charles-dumeige-osteopathe/",
      icon: faLinkedin,
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Patients
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.patients.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={`/patients#${item.href}`}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
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
                      <Link
                        href={`/presentations#${item.href}`}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Contacts
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
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
                      <Link
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Autres
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.other.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
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
};

export default Footer;
