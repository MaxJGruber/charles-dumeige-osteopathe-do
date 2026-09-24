import "styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";
import Router from "next/router";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import {
  TITLE,
  META_DESCRIPTION,
  URL,
  META_IMAGE,
  GEO,
} from "root/config";
import Footer from "components/Footer";
import CookieConsent from "components/CookieConsent";
import * as gtag from "helpers/gtag";

// The FontAwesome stylesheet is imported above, so disable its runtime
// injection to avoid oversized icons before hydration.
config.autoAddCss = false;

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
      <Script
        id="partoo-messaging-widget"
        type="module"
        src="https://cdn.partoo.co/widget/prod/latest.js"
        data-token="a1c85f65-dfef-4160-b601-51456b0eecef"
        data-icon="message_logo_icon"
        data-color="#0F6A8F"
        data-policy-url="https://app.partoo.co/privacy/messaging/cf575e9a-27ab-4581-b61c-321e22ed0b1c?lang=fr"
        data-country="FR"
        data-avatar-image-url="https://cdn.partoo.co/avatar/prod/121527/2f029fc6-8db5-4ce6-9a80-10b60b0ade7b.jpeg"
      ></Script>
      <DefaultSeo
        title={TITLE}
        titleTemplate="%s"
        defaultTitle={TITLE}
        description={META_DESCRIPTION}
        canonical={URL}
        openGraph={{
          type: "website",
          locale: "fr_FR",
          url: URL,
          siteName: TITLE,
          images: [
            {
              url: META_IMAGE,
              width: 1200,
              height: 627,
              alt: "Charles Dumeige, ostéopathe D.O à Sartrouville",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{ cardType: "summary_large_image" }}
        additionalMetaTags={[
          // Tells crawlers they may show a full-length preview and thumbnail,
          // which is what lets a rich snippet carry the practice details.
          {
            name: "robots",
            content:
              "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
          { name: "author", content: "Charles Dumeige" },
          // Geo tags: legacy, but still read by some local directories and
          // cheap to carry for a single-location practice.
          { name: "geo.region", content: "FR-IDF" },
          { name: "geo.placename", content: "Sartrouville" },
          {
            name: "geo.position",
            content: `${GEO.latitude};${GEO.longitude}`,
          },
          { name: "ICBM", content: `${GEO.latitude}, ${GEO.longitude}` },
        ]}
      />
      <NextNProgress />
      <Component {...pageProps} />
      <Footer />
      <CookieConsent />
    </>
  );
}

export default MyApp;
