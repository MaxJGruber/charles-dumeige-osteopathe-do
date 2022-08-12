import "styles/globals.css";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import { TITLE, META_DESCRIPTION, URL, META_IMAGE } from "root/config";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
