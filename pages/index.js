import { NextSeo } from "next-seo";
import { URL } from "root/config";
import HeroSection from "components/HeroSection";
import Featured from "components/Featured";
import Hook from "components/Hook";
import Contact from "components/Contact";
import PriceList from "components/PriceList";
import Reimbursements from "components/Reimbursements";
import PracticalInfo from "components/PracticalInfo";
import Reviews from "components/Reviews";
import Faq from "components/Faq";
import StructuredData from "components/StructuredData";
import { FAQ } from "helpers/faq";
import { fetchReviews, GOOGLE_REVIEW_URL } from "helpers/googleReviews";

const TITLE = "Ostéopathe à Sartrouville (78) | Charles Dumeige D.O";
const DESCRIPTION =
  "Charles Dumeige, ostéopathe D.O à Sartrouville (78). Consultations au cabinet ou à domicile, 7j/7. Prise de rendez-vous en ligne.";

const Index = ({ summary, reviews, reviewUrl }) => (
  <>
    <NextSeo
      title={TITLE}
      description={DESCRIPTION}
      canonical={URL}
      openGraph={{ url: URL, title: TITLE, description: DESCRIPTION }}
    />
    <StructuredData
      page={{
        url: URL,
        title: TITLE,
        description: DESCRIPTION,
        image: "static/cover.png",
      }}
      breadcrumbs={[{ name: "Accueil", url: URL }]}
      faq={FAQ}
      summary={summary}
    />
    <HeroSection
      title="Bienvenue sur le site de votre ostéopathe..."
      title2="Charles Dumeige"
      introduction="Installé depuis 2022 à Sartrouville (Dept 78), Charles Dumeige,
        ostéopathe D.O est à votre écoute et se charge de soulager vos
        douleurs musculo-squelettiques."
      image="static/cover.png"
      imageAlt="Charles Dumeige, ostéopathe D.O à Sartrouville"
      secondButton={{ label: "En Savoir Plus", href: "/presentations" }}
    />
    <Featured />
    <Reviews summary={summary} reviews={reviews} reviewUrl={reviewUrl} />
    <PriceList />
    <Reimbursements />
    <Contact />
    <PracticalInfo />
    <Faq />
    <Hook />
  </>
);

export async function getStaticProps() {
  const { summary, reviews } = await fetchReviews();
  return {
    props: { summary, reviews, reviewUrl: GOOGLE_REVIEW_URL },
    revalidate: 86400,
  };
}

export default Index;
