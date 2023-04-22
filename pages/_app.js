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
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
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
