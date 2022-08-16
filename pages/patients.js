import HeroSection from "components/HeroSection";
import Disclaimer from "components/Disclaimer";
import BabiesSection from "components/BabiesSection";
import ChildrenSection from "components/ChildrenSection";
import PregnantSection from "components/PregnantSection";
import AdultSection from "components/AdultSection";
import SeniorSection from "components/SeniorSection";
import SportsSection from "components/SportsSection";
import Divider from "components/Divider";

const Patients = () => (
  <>
    <HeroSection
      title="Aller chez un ostéopathe..."
      title2="Pour qui est-ce et quand?"
      introduction="Simplement dit: l'ostéopathie s'adresse à tout le monde et elle s'adapte à tout individu. Des nouveau-nés aux personnes agées, chaque type de corps nécessite des attentions particuliéres en fonction de l'àge, le sexe, la profession, la santé mentale et physique."
      image="static/patients-hero-pic.jpeg"
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
