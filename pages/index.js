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
      introduction="Installé depuis 2022 à Sartrouville (Dept 78), Charles Dumeige,
        ostéopathe D.O est à votre écoute et se charge de soulager vos
        douleurs musculo-squelettiques."
      image="static/cover.png"
      secondButton={{ label: "En Savoir Plus", href: "/presentations" }}
    />
    <Featured />
    <Contact />
    <Hook />
    <PriceList />
    <Reimbursements />
    <PracticalInfo />
  </>
);

export default Index;
