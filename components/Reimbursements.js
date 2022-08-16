import React from "react";

export default function Reimbursements() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-lightblue font-semibold tracking-wide uppercase">
            Remboursements
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Les consultations ostéopathiques peuvent être prises en charge
            partiellement ou totalement selon les mutuelles
          </p>
          <p className="mt-5 mb-5 max-w-2xl text-sm text-gray-500 lg:mx-auto">
            (mis à jour au 23/08/2019)
          </p>
          <button
            type="button"
            href="https://www.osteopathie.org/mutuelles.html"
            target="_blank"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lightblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue"
          >
            Voir les mutuelles qui remboursent
          </button>
        </div>
      </div>
    </div>
  );
}
