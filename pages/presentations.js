import { NextSeo } from "next-seo";
import { URL } from "root/config";
import HeroSection from "components/HeroSection";
import Disclaimer from "components/Disclaimer";
import Divider from "components/Divider";
import AboutJob from "components/AboutJob";
import AboutSection from "components/AboutSection";
import PersonalSection from "components/PersonalSection";

const Presentations = () => (
  <>
    <NextSeo
      title="Qu'est-ce que l'ostéopathie ? | Charles Dumeige, ostéopathe D.O"
      description="L'ostéopathie est une pratique manuelle qui lève les blocages articulaires du corps. Découvrez le métier, le parcours et les valeurs de Charles Dumeige."
      canonical={`${URL}presentations`}
    />
    <HeroSection
      title="L'ostéopathie, l'ostéopathe..."
      title2="Qu'est ce que c'est?"
      introduction="Une technique apparue au XIXe siècle aux Etats- Unis, l'ostéopathie est une pratique exclusivement manuelle qui lève en particulier les blocages articulaires du corps pour lui permettre de mieux fonctionner."
      image="static/presentations-hero-pic.jpeg"
      imageAlt="Séance d'ostéopathie, technique manuelle sur le dos"
      secondButton={{
        label: "Les Patients",
        href: "/patients",
      }}
    />
    <Disclaimer />
    <Divider />
    <AboutJob />
    <Divider />
    <AboutSection />
    <Divider />
    <PersonalSection />
    <Divider />
  </>
);

export default Presentations;
