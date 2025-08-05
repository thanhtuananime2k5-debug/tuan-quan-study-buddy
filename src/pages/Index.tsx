import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SubjectsSection } from "@/components/SubjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <SubjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Index;
