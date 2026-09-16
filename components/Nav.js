import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const DOCTOLIB_URL =
  "https://www.doctolib.fr/osteopathe/sartrouville/charles-dumeige";

const navigation = [
  { name: "L'ostéopathie", href: "/presentations" },
  { name: "Les patients", href: "/patients" },
  { name: "Horaires & accès", href: "/#contact" },
];

const Logo = () => (
  <Link href="/" className="shrink-0">
    <img
      alt="Charles Dumeige, ostéopathe D.O"
      className="h-14 w-auto sm:h-16"
      src="/static/logo.png"
    />
  </Link>
);

const Nav = () => (
  <Popover as="header" className="relative z-20">
    <nav className="mx-auto flex w-full max-w-[80rem] items-center justify-between gap-6 px-5 py-5 sm:px-8">
      <Logo />

      <div className="hidden items-center gap-8 md:flex">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-[0.95rem] text-ink-soft transition-colors hover:text-teal"
          >
            {item.name}
          </Link>
        ))}
        <Link
          href={DOCTOLIB_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-teal px-5 py-2.5 text-[0.95rem] font-medium text-white transition-colors hover:bg-teal-deep"
        >
          Prendre rendez-vous
        </Link>
      </div>

      <Popover.Button className="inline-flex items-center justify-center rounded-full p-2 text-ink transition-colors hover:bg-teal-wash md:hidden">
        <span className="sr-only">Ouvrir le menu</span>
        <Bars3Icon className="h-6 w-6" />
      </Popover.Button>
    </nav>

    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right p-3 md:hidden"
      >
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-ink/10">
          <div className="flex items-center justify-between px-5 pt-4">
            <Logo />
            <Popover.Button className="-mr-2 rounded-full p-2 text-ink transition-colors hover:bg-teal-wash">
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="h-6 w-6" />
            </Popover.Button>
          </div>
          <div className="space-y-1 px-3 pb-3 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-xl px-3 py-2.5 text-base text-ink transition-colors hover:bg-paper"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block rounded-xl bg-teal px-3 py-2.5 text-center text-base font-medium text-white"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default Nav;
