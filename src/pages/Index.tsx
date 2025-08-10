import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SubjectsSection } from "@/components/SubjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { NewsSection } from "@/components/NewsSection";
import { ForumSection } from "@/components/ForumSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";
import { SeparatorDivider } from "@/components/SeparatorDivider";
import { Navigation } from "@/components/Navigation";
import { SidebarNavigation } from "@/components/SidebarNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SidebarNavigation />
      <HeroSection />
      <SeparatorDivider />
      <ServicesSection />
      <SeparatorDivider variant="light" />
      <SubjectsSection />
      <SeparatorDivider />
      <ReviewsSection />
      <SeparatorDivider variant="light" />
      <NewsSection />
      <SeparatorDivider />
      <ForumSection />
      <SeparatorDivider variant="light" />
      <TestimonialsSection />
      <SeparatorDivider />
      <ContactSection />
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Index;
