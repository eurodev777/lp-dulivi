import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Pricing } from "@/components/Pricing";
import { Results } from "@/components/Results";
import { Features } from "@/components/Features";
import { WhyChoose } from "@/components/WhyChoose";
import { Footer } from "@/components/Footer";
import Team from "@/components/Team";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Results />
      <Pricing />
      <Features />
      <WhyChoose />
      <Team />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
