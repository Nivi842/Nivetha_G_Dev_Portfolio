import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
