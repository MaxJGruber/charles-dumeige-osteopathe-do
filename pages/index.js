import HeroSection from "components/HeroSection";
import Featured from "components/Featured";
import Hook from "components/Hook";
import Contact from "components/Contact";
import PriceList from "components/PriceList";
import Reimbursements from "components/Reimbursements";
import PracticalInfo from "components/PracticalInfo";

const Index = () => {
  return (
    <>
      <HeroSection />
      <Featured />
      <Hook />
      <Contact />
      <PriceList />
      <Reimbursements />
      <PracticalInfo />
    </>
  );
};

export default Index;
