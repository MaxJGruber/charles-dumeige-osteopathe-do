import dynamic from "next/dynamic";
import { Fade } from "react-awesome-reveal";
import { CheckIcon } from "@heroicons/react/outline";

const Map = dynamic(() => import("components/Map"), {
  ssr: false,
});

const PARIS_ADDRESS = [
  {
    id: 1,
    name: "49 Rue de la Tour, 75116, Paris",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    googleMapsLink: "https://goo.gl/maps/ziF1d5N5TbuS1VA59",
  },
];
const SARTROUVILLE_ADDRESS = [
  {
    id: 1,
    name: "20 Rue René Brûlay, 78500, Sartrouville",
    googleMapsLink: "https://goo.gl/maps/4mhDD2yna4iP3xru9",
  },
];

const Featured = () => (
  <div id="contact" className="py-16 bg-white overflow-hidden lg:py-24">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={784}
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div className="relative lg:text-center">
        <h2 className="text-base text-lightblue font-semibold tracking-wide uppercase">
          Horaires et accès
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Charles Dumeige prend en charge ses patients dans 2 cabinets.
        </p>
      </div>

      <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="relative">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            À Sartrouville...
          </h3>
          <p className="mt-3 text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            minima sequi recusandae, porro maiores officia assumenda aliquam
            laborum ab aliquid veritatis impedit odit adipisci optio iste
            blanditiis facere. Totam, velit.
          </p>

          <dl className="mt-10 space-y-10">
            {SARTROUVILLE_ADDRESS.map((item) => (
              <div key={item.id} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" />
                  <p className="ml-9 text-xl leading-6 font-medium text-gray-900">
                    {item.name}
                  </p>
                </dt>
                <div className="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-5 lg:items-start">
                  <dd className="mt-2 ml-9 text-base prose text-gray-500">
                    <p className="font-bold">Moyens de transport:</p>
                    <ul role="list">
                      <li>RER - Sartrouville (ligne A)</li>
                      <li>Bus - Convention (ligne 5)</li>
                      <li>Bus - Turgot (lignes 25 et 5)</li>
                    </ul>
                  </dd>
                  <dd className="mt-2 ml-9 text-base prose text-gray-500">
                    <p className="font-bold">Informations pratiques:</p>
                    <ul role="list">
                      <li>1er sous-sol avec ascenseur</li>
                      <li>Accès handicapé</li>
                      <li>Parking payant</li>
                    </ul>
                  </dd>
                </div>
                <a href={item.googleMapsLink}>
                  <button
                    type="button"
                    className="mt-2 ml-9 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue"
                  >
                    Plannifiez votre itinéraire
                  </button>
                </a>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 -mx-4 relative lg:mt-0">
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width={784}
            height={404}
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={784}
              height={404}
              fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
            />
          </svg>
          <div className="relative mx-auto">
            <Fade direction="right">
              <div className="relative rounded-2xl shadow-xl overflow-hidden border-2 border-solid border-lightblue">
                <Map coordinates={[48.93587430271724, 2.1631031634520994]} />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <svg
        className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={784}
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>

      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              ...et à Paris!
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ex obcaecati natus eligendi delectus, cum deleniti sunt in labore
              nihil quod quibusdam expedita nemo.
            </p>
            <dl className="mt-10 space-y-10">
              {PARIS_ADDRESS.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <CheckIcon className="absolute h-6 w-6 text-green-500" />
                    <p className="ml-9 text-xl leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <div className="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-5 lg:items-start">
                    <dd className="mt-2 ml-9 text-base prose text-gray-500">
                      <p className="font-bold">Moyens de transport:</p>
                      <ul role="list">
                        <li>
                          Métro - Rue de la Pompe (Avenue Georges Mandel) (ligne
                          9)
                        </li>
                        <li>RER - Boulainvilliers (ligne C)</li>
                        <li>RER - Avenue Henri Martin (ligne C)</li>
                      </ul>
                    </dd>
                    <dd className="mt-2 ml-9 text-base prose text-gray-500">
                      <p className="font-bold">Informations pratiques:</p>
                      <ul role="list">
                        <li>Rez-de-chaussée</li>
                        <li>
                          Parking public: Passy Plaza 3 Rue Jean Bologne, 75016
                          Paris
                        </li>
                      </ul>
                    </dd>
                  </div>
                  <a href={item.googleMapsLink}>
                    <button
                      type="button"
                      className="mt-2 ml-9 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue"
                    >
                      Plannifiez votre itinéraire
                    </button>
                  </a>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
              />
            </svg>
            <div className="relative mx-auto">
              <Fade direction="left">
                <div className="relative rounded-2xl shadow-xl overflow-hidden border-2 border-solid border-lightblue">
                  <Map coordinates={[48.860504499146764, 2.2801899629124613]} />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Featured;
