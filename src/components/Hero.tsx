import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-heading)] text-primary text-sm tracking-widest uppercase mb-4">
            Software Engineer - Backend
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-[family-name:var(--font-heading)]">
            Nivetha <span className="text-gradient">G</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Building high-performance Microservices with Java, Spring Boot, Kafka & AWS. 
            Delivering scalable backend solutions from design to deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {["Java", "Spring Boot", "Microservices", "Kafka", "AWS", "Kubernetes", "REST APIs"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-[family-name:var(--font-heading)] border border-border"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-5 text-sm text-muted-foreground"
        >
          <a href="mailto:nivethag.dev@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} /> nivethag.dev@gmail.com
          </a>
          <a href="tel:+919344644126" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={16} /> +91 9344644126
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Chennai, Tamil Nadu
          </span>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Github size={16} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
