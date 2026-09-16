import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { DOCTOLIB_URL } from "components/Nav";

const columns = [
  {
    heading: "Patients",
    links: [
      { name: "Nourrissons", href: "/patients#nourissons" },
      { name: "Enfants", href: "/patients#enfants" },
      { name: "Femmes enceintes", href: "/patients#enceintes" },
      { name: "Adultes", href: "/patients#adultes" },
      { name: "Séniors", href: "/patients#seniors" },
      { name: "Sportifs", href: "/patients#sportifs" },
    ],
  },
  {
    heading: "En savoir plus",
    links: [
      { name: "L'ostéopathie", href: "/presentations#osteopathie" },
      { name: "L'ostéopathe", href: "/presentations#osteopathe" },
      { name: "Valeurs", href: "/presentations#valeurs" },
      { name: "Tarifs", href: "/#tarifs" },
    ],
  },
  {
    heading: "Le cabinet",
    links: [
      { name: "Horaires et accès", href: "/#contact" },
      { name: "Avis des patients", href: "/#avis" },
      { name: "Mentions légales", href: "/legal" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-rule bg-white">
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Image
            alt="Charles Dumeige, ostéopathe D.O"
            className="h-20 w-auto"
            src="/static/logo.png"
            width={706}
            height={642}
          />
          <address className="mt-6 not-italic leading-relaxed text-ink-soft">
            20 rue René Brûlay
            <br />
            78500 Sartrouville
          </address>
          <a
            href="tel:0638697716"
            className="mt-4 inline-block font-medium text-teal transition-colors hover:text-teal-deep"
          >
            06 38 69 77 16
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-display text-base text-ink">
                {column.heading}
              </h3>
              <ul role="list" className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-ink-soft transition-colors hover:text-teal"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-faint">
          © {new Date().getFullYear()} Charles Dumeige, ostéopathe D.O
        </p>
        <div className="flex items-center gap-5">
          <a
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-ink-soft transition-colors hover:text-teal"
          >
            Doctolib
          </a>
          <a
            href="https://www.linkedin.com/in/charles-dumeige-osteopathe/"
            target="_blank"
            rel="noreferrer"
            className="text-ink-faint transition-colors hover:text-teal"
          >
            <span className="sr-only">LinkedIn</span>
            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
