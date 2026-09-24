import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import { GA_TRACKING_ID } from "root/config";
import {
  GRANTED,
  DENIED,
  readConsent,
  writeConsent,
  subscribeConsent,
  setAnalyticsDisabled,
  deleteAnalyticsCookies,
  onOpenCookieSettings,
} from "helpers/consent";

// Google Analytics is only loaded once the visitor has accepted: until then no
// request reaches Google and no cookie is set, as the CNIL requires.
const CookieConsent = () => {
  // undefined during the server render and hydration, since the stored choice
  // only exists in the browser; null once read if the visitor has not chosen.
  const consent = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    () => undefined
  );
  const [reopened, setReopened] = useState(false);
  const open = consent === null || reopened;

  useEffect(() => onOpenCookieSettings(() => setReopened(true)), []);

  // Keeps the ga-disable flag in step with the stored choice, including one
  // made in another tab while gtag.js is already loaded here.
  useEffect(() => {
    if (consent !== undefined) setAnalyticsDisabled(consent !== GRANTED);
  }, [consent]);

  const choose = (value) => {
    if (value === DENIED) deleteAnalyticsCookies();
    writeConsent(value);
    setReopened(false);
  };

  return (
    <>
      {consent === GRANTED && (
        <>
          <Script
            strategy="afterInteractive"
            id="gtm-url"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script strategy="afterInteractive" id="gtm-script">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}</Script>
        </>
      )}

      {open && (
        <div
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-text"
          className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-rule bg-white p-6 shadow-xl sm:flex sm:items-end sm:gap-8">
            <div className="flex-1">
              <h2
                id="cookie-consent-title"
                className="font-display text-lg text-ink"
              >
                Cookies de mesure d&apos;audience
              </h2>
              <p
                id="cookie-consent-text"
                className="mt-2 text-sm leading-relaxed text-ink-soft"
              >
                Avec votre accord, nous utilisons Google Analytics pour
                mesurer la fréquentation du site. Vous pouvez changer
                d&apos;avis à tout moment via le lien « Gestion des cookies »
                en bas de page.{" "}
                <Link
                  href="/legal#cookies"
                  className="font-medium text-teal underline underline-offset-2 hover:text-teal-deep"
                >
                  En savoir plus
                </Link>
              </p>
            </div>
            {/* Refusing must be as easy as accepting: same size, same weight. */}
            <div className="mt-5 flex gap-3 sm:mt-0 sm:shrink-0">
              <button
                type="button"
                onClick={() => choose(DENIED)}
                className="flex-1 rounded-full border border-teal px-5 py-2.5 text-[0.95rem] font-medium text-teal transition-colors hover:bg-teal-wash sm:flex-none"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => choose(GRANTED)}
                className="flex-1 rounded-full border border-teal bg-teal px-5 py-2.5 text-[0.95rem] font-medium text-white transition-colors hover:bg-teal-deep sm:flex-none"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
