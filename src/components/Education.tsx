import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-24 px-6" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-12"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-card border border-border card-shadow flex gap-5 items-start"
        >
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
            <GraduationCap className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
              B.Tech, ECE with Specialization in Biomedical Engineering
            </h3>
            <p className="text-primary text-sm font-[family-name:var(--font-heading)]">
              Vellore Institute of Technology
            </p>
            <p className="text-muted-foreground text-xs mt-1">Mar 2019 – May 2023 · Vellore, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
