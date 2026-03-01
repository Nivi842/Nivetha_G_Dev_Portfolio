import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
