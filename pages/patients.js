import { NextSeo } from "next-seo";
import { URL } from "root/config";
import StructuredData from "components/StructuredData";
import HeroSection from "components/HeroSection";
import Disclaimer from "components/Disclaimer";
import BabiesSection from "components/BabiesSection";
import ChildrenSection from "components/ChildrenSection";
import PregnantSection from "components/PregnantSection";
import AdultSection from "components/AdultSection";
import SeniorSection from "components/SeniorSection";
import SportsSection from "components/SportsSection";
import Divider from "components/Divider";

const TITLE =
  "Ostéopathe pour nourrisson, enfant et femme enceinte à Sartrouville";
const DESCRIPTION =
  "L'ostéopathie s'adresse à tous : nourrissons, enfants, femmes enceintes, adultes, séniors et sportifs. Découvrez la prise en charge adaptée à chacun.";
const PAGE_URL = `${URL}patients`;

const Patients = () => (
  <>
    <NextSeo
      title={TITLE}
      description={DESCRIPTION}
      canonical={PAGE_URL}
      openGraph={{ url: PAGE_URL, title: TITLE, description: DESCRIPTION }}
    />
    <StructuredData
      page={{
        url: PAGE_URL,
        title: TITLE,
        description: DESCRIPTION,
        image: "static/patients-hero-pic.jpeg",
      }}
      breadcrumbs={[
        { name: "Accueil", url: URL },
        { name: "Les patients", url: PAGE_URL },
      ]}
    />
    <HeroSection
      title="Aller chez un ostéopathe..."
      title2="Pour qui est-ce et quand?"
      introduction="Simplement dit: l'ostéopathie s'adresse à tout le monde et elle s'adapte à tout individu. Des nouveau-nés aux personnes agées, chaque type de corps nécessite des attentions particuliéres en fonction de l'àge, le sexe, la profession, la santé mentale et physique."
      image="static/patients-hero-pic.jpeg"
      imageAlt="Ostéopathe recevant un patient en consultation"
      secondButton={{
        label: "L'ostéopathie",
        href: "/presentations",
      }}
    />
    <Disclaimer />
    <Divider />
    <BabiesSection />
    <Divider />
    <ChildrenSection />
    <Divider />
    <PregnantSection />
    <Divider />
    <AdultSection />
    <Divider />
    <SeniorSection />
    <Divider />
    <SportsSection />
    <Divider />
  </>
);

export default Patients;
