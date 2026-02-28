import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate"],
  },
  {
    title: "Backend Engineering",
    skills: ["RESTful API Design", "Microservices", "API Versioning", "Design Patterns", "Layered Architecture"],
  },
  {
    title: "Distributed Systems",
    skills: ["Apache Kafka", "Event-Driven Architecture", "Dead Letter Queue", "Fault Tolerance", "Idempotent Consumers"],
  },
  {
    title: "Databases & Search",
    skills: ["Couchbase", "PostgreSQL", "MySQL", "Elasticsearch"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, EKS, S3, RDS)", "Docker", "Kubernetes", "OpenShift", "Jenkins", "Grafana"],
  },
  {
    title: "Testing & Quality",
    skills: ["JUnit", "Mockito", "Performance Tuning", "Root Cause Analysis"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12"
        >
          <span className="text-gradient">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl bg-card border border-border card-shadow"
            >
              <h3 className="text-sm font-semibold text-primary font-[family-name:var(--font-heading)] mb-3 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="text-sm text-secondary-foreground bg-secondary px-2.5 py-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
