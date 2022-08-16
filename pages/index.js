import HeroSection from "components/HeroSection";
import Featured from "components/Featured";
import Hook from "components/Hook";
import Contact from "components/Contact";
import PriceList from "components/PriceList";
import Reimbursements from "components/Reimbursements";
import PracticalInfo from "components/PracticalInfo";

const Index = () => (
  <>
    <HeroSection
      title="Bienvenue sur le site de votre ostéopathe..."
      title2="Charles Dumeige"
      introduction="Installé depuis 2021 à Sartrouville (Dept 78), Charles Dumeige,
        ostéopathe D.O est à votre écoute et se charge de soulager vos
        douleurs musculo-squelettiques. Il prend en charge ses patients
        au cabinet à Sartrouville ou à Paris."
      image="static/cover.png"
    />
    <Featured />
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="elfsight-app-031e24ce-32e0-4a8b-9699-4264ab6d6b01"></div>
      </div>
    </div>
    <Hook />
    <Contact />
    <PriceList />
    <Reimbursements />
    <PracticalInfo />
  </>
);

export default Index;
