import HeroSection from "@/components/landing/HeroSection";
import UVPSection from "@/components/landing/UVPSection";
import BenefitsSection from "@/components/landing/BenefitsSection";

import GuaranteeSection from "@/components/landing/GuaranteeSection";
import NotForSection from "@/components/landing/NotForSection";
import DeliverablesSection from "@/components/landing/DeliverablesSection";
import BonusSection from "@/components/landing/BonusSection";
import AnchorSection from "@/components/landing/AnchorSection";
import FAQSection from "@/components/landing/FAQSection";
import UrgencySection from "@/components/landing/UrgencySection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FooterSection from "@/components/landing/FooterSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <UVPSection />
      <BenefitsSection />
      
      <GuaranteeSection />
      <NotForSection />
      <DeliverablesSection />
      <BonusSection />
      <AnchorSection />
      <FAQSection />
      <UrgencySection />
      <FinalCTASection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
