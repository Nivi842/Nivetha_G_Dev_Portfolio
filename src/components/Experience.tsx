import { motion } from "framer-motion";

const experiences = [
  {
    company: "OpalMinds IT Solution Pvt Ltd",
    role: "Contract Software Engineer",
    period: "Nov 2025 – Dec 2025",
    location: "Remote",
    highlights: [
      "Designed cloud-native Microservices platform using Java & Spring Boot for import/export permit workflows.",
      "Developed role-based Admin and User portals with secure submissions and request tracking.",
      "Built request orchestration layer transforming structured form data into SDK-compliant XML payloads.",
      "Deployed on AWS with PostgreSQL, centralized logging, and monitoring.",
    ],
  },
  {
    company: "Amdocs India Pvt Ltd",
    role: "Experienced Software Developer",
    period: "Aug 2023 – Sep 2025",
    location: "Pune, India",
    highlights: [
      "Implemented Hybrid Disaster Recovery on AWS EKS across 70+ microservices — 99.9% uptime.",
      "Led SDK compatibility initiative across 70+ microservices with zero production incidents.",
      "Automated Kafka DLQ processing — recovered 100% failed messages, reduced manual work by 40%.",
      "Drove PMX version upgrade across 70+ microservices — improved DevOps efficiency by 25%.",
      "Delivered 5+ end-to-end backend features — reduced production bug rates by 20%.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary glow-shadow" />
              <div className="mb-1">
                <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)]">{exp.role}</h3>
                <p className="text-primary text-sm font-[family-name:var(--font-heading)]">{exp.company}</p>
                <p className="text-muted-foreground text-xs mt-1">{exp.period} · {exp.location}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-secondary-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
