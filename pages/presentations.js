import HeroSection from "components/HeroSection";
import Disclaimer from "components/Disclaimer";
import Divider from "components/Divider";
import AboutJob from "components/AboutJob";
import AboutSection from "components/AboutSection";
import PersonalSection from "components/PersonalSection";

const Presentations = () => (
  <>
    <HeroSection
      title="L'ostéopathie, l'ostéopathe..."
      title2="Qu'est ce que c'est?"
      introduction="Une technique apparue au XIXe siècle aux Etats- Unis, l'ostéopathie est une pratique exclusivement manuelle qui lève en particulier les blocages articulaires du corps pour lui permettre de mieux fonctionner."
      image="static/presentations-hero-pic.jpeg"
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
