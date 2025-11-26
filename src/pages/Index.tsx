import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Partners } from "@/components/Partners";
import { Results } from "@/components/Results";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Partners />
      <Results />
      <Features />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
