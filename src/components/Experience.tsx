import { motion } from "framer-motion";

const experiences = [
  {
    company: "OpalMinds IT Solution Private Ltd",
    role: "Contract Software Engineer",
    period: "Nov 2025 – Dec 2025",
    location: "Remote",
    highlights: [
      "Designed and deployed a cloud-native Microservices platform using Java and Spring Boot to automate import/export permit workflows.",
      "Developed role-based Admin and User portals, enabling secure submissions, request tracking, and operational visibility.",
      "Designed a robust request orchestration layer to validate and transform structured form data into SDK-compliant XML payloads.",
      "Integrated with external SDK-driven systems using resilient communication patterns and error handling for reliable request delivery.",
      "Deployed services on AWS with PostgreSQL, implementing centralized logging and monitoring for production-grade stability.",
      "Managed end-to-end SDLC, translating complex logistics requirements into scalable backend solutions from design to deployment.",
    ],
  },
  {
    company: "Amdocs India Private Ltd",
    role: "Experienced Software Developer",
    period: "Aug 2023 – Sep 2025",
    location: "Pune, India",
    highlights: [
      "Implemented and maintained a Hybrid Disaster Recovery (DR) solution on AWS EKS across 70+ microservices, enabling automated failover and health checks — ensured 99.9% service uptime.",
      "Led SDK compatibility initiative across 70+ microservices, resolving version conflicts and dependency issues with zero production incidents.",
      "Automated Kafka Dead Letter Queue processing with idempotent consumers and retry mechanisms — recovered 100% failed messages, reduced manual intervention by 40%.",
      "Drove PMX version upgrade across 70+ microservices, standardizing build configurations and eliminating environment-specific failures — improved DevOps efficiency by 25%.",
      "Integrated Liquibase for PostgreSQL schema migrations across 6+ environments, eliminating manual database scripts and improving deployment consistency.",
      "Applied AI-assisted development tools for code generation and refactoring — increased coding efficiency by 30% while maintaining code quality.",
      "Delivered 5+ end-to-end backend features for telecom order management with comprehensive testing and code reviews — reduced production bug rates by 20%.",
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
