import Link from "next/link";
import Nav, { DOCTOLIB_URL } from "components/Nav";

// Facts someone in pain wants before anything else: can I be seen, and how do
// I get there. Kept to three so the row stays scannable.
const reassurances = [
  "Consultations 7j/7",
  "À 5 min à pied du RER A",
  "Cabinet ou domicile",
];

const HeroSection = ({
  image,
  imageAlt,
  title,
  title2,
  introduction,
  secondButton,
}) => (
  <div className="relative bg-paper">
    <Nav />

    {/* The text column keeps the 7xl grid every other section uses, while the
        photo runs off the right edge of the window. */}
    <div className="grid items-center gap-12 pb-16 pl-5 pr-5 pt-6 sm:pl-8 sm:pr-8 lg:grid-cols-[minmax(0,34rem)_minmax(0,1fr)] lg:gap-16 lg:pb-24 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-0 lg:pt-10">
      <div className="max-w-xl">
        <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-[-0.02em] sm:text-6xl">
          {title}
          <span className="mt-2 block text-teal">{title2}</span>
        </h1>

        <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-ink-soft">
          {introduction}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href={DOCTOLIB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-teal px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-teal-deep"
          >
            Prendre rendez-vous
          </Link>
          <Link
            href={secondButton.href}
            className="rounded-full px-7 py-3.5 text-base font-medium text-ink ring-1 ring-ink/20 transition-colors hover:bg-white hover:ring-ink/40"
          >
            {secondButton.label}
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-[0.95rem] text-ink-faint">
          {reassurances.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-leaf"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* The photo runs to the container edge on large screens so the page
          opens on the practice itself rather than on a framed card. */}
      <div className="relative">
        <img
          className="h-64 w-full rounded-3xl object-cover sm:h-96 lg:h-[34rem] lg:rounded-l-3xl lg:rounded-r-none"
          src={image}
          alt={imageAlt}
        />
      </div>
    </div>
  </div>
);

export default HeroSection;
