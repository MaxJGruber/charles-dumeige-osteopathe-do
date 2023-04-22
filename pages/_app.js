import "styles/globals.css";
import { useEffect } from "react";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import { TITLE, META_DESCRIPTION, URL, META_IMAGE } from "root/config";
import Footer from "components/Footer";
import * as gtag from "helpers/gtag";

function MyApp({ Component, pageProps }) {
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
