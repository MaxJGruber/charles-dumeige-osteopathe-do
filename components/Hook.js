export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Assez entendu?</span>
          <span className="block text-lightblue">Prenez rendez-vous.</span>
        </h2>
        <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://www.doctolib.fr/osteopathe/meaux/charles-dumeige"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lightblue hover:bg-darkblue"
            >
              Prenez RDV sur doctolib.fr
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="tel:0638697716"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-lightblue hover:bg-lightblueHover hover:text-darkblue bg-white hook-btn2"
            >
              Appelez le 06 38 69 77 16
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
