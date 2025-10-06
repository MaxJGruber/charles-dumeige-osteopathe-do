import "styles/globals.css";
import { useEffect } from "react";
import Router from "next/router";
import Script from "next/script";
import { enableStaticRendering } from "mobx-react-lite";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import {
  TITLE,
  META_DESCRIPTION,
  URL,
  META_IMAGE,
  GA_TRACKING_ID,
} from "root/config";
import Footer from "components/Footer";
import * as gtag from "helpers/gtag";

function MyApp({ Component, pageProps }) {
  // use static rendering in SSR mode
  if (typeof window === "undefined") {
    enableStaticRendering(true);
  }
  // Track pages
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Script src="https://apps.elfsight.com/p/platform.js" defer></Script>
      <Script
        id="partoo-messaging-widget"
        type="module"
        src="https://cdn.partoo.co/widget/prod/latest.js"
        data-token="a1c85f65-dfef-4160-b601-51456b0eecef"
        data-icon="message_logo_icon"
        data-color="#39BFD6"
        data-policy-url="https://app.partoo.co/privacy/messaging/cf575e9a-27ab-4581-b61c-321e22ed0b1c?lang=fr"
        data-country="FR"
      ></Script>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        strategy="lazyOnload"
        id="gtm-url"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      ></Script>
      <Script strategy="lazyOnload" id="gtm-script">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
    `}</Script>
      <DefaultSeo
        title={TITLE}
        description={META_DESCRIPTION}
        openGraph={{ url: URL, images: [{ url: META_IMAGE }] }}
      />
      <NextNProgress />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
