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
    <HeroSection />
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
