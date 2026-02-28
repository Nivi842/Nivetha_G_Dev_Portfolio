import { motion } from "framer-motion";
import { Send, Terminal, Sparkles } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"message" | "coffee">("message");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4"
        >
          <span className="text-gradient">Let's Connect</span>
        </motion.h2>
        <p className="text-muted-foreground mb-10 max-w-lg">
          Got an exciting project or opportunity? I'd love to hear from you.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-8"
        >
          {/* Creative side panel */}
          <div className="md:col-span-2 space-y-4">
            <div className="p-5 rounded-xl bg-card border border-border card-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={16} className="text-primary" />
                <span className="text-xs font-[family-name:var(--font-heading)] text-muted-foreground">~/nivetha</span>
              </div>
              <div className="font-[family-name:var(--font-heading)] text-sm space-y-1.5">
                <p><span className="text-primary">$</span> cat status.txt</p>
                <p className="text-secondary-foreground">Open to opportunities ✓</p>
                <p><span className="text-primary">$</span> echo $LOCATION</p>
                <p className="text-secondary-foreground">Chennai, India</p>
                <p><span className="text-primary">$</span> echo $RESPONSE_TIME</p>
                <p className="text-secondary-foreground">{"< 24 hours"}</p>
                <p className="text-primary animate-pulse">█</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border card-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-primary" />
                <span className="text-xs font-[family-name:var(--font-heading)] text-primary uppercase tracking-wider">What I bring</span>
              </div>
              <ul className="text-sm text-secondary-foreground space-y-2">
                <li className="flex gap-2"><span className="text-primary">▸</span> Scalable backend systems</li>
                <li className="flex gap-2"><span className="text-primary">▸</span> Production-grade reliability</li>
                <li className="flex gap-2"><span className="text-primary">▸</span> Clean, maintainable code</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {/* Tabs */}
            <div className="flex gap-1 mb-6 bg-secondary rounded-lg p-1 w-fit">
              <button
                onClick={() => setActiveTab("message")}
                className={`px-4 py-2 rounded-md text-sm font-[family-name:var(--font-heading)] transition-all ${
                  activeTab === "message"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab("coffee")}
                className={`px-4 py-2 rounded-md text-sm font-[family-name:var(--font-heading)] transition-all ${
                  activeTab === "coffee"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                ☕ Chat over Coffee
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-8 rounded-xl bg-card border border-primary/30 card-shadow text-center glow-shadow"
              >
                <p className="text-2xl mb-2">🚀</p>
                <p className="font-[family-name:var(--font-heading)] text-primary font-semibold">Message sent!</p>
                <p className="text-sm text-muted-foreground mt-1">I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                </div>
                <textarea
                  placeholder={activeTab === "coffee" ? "Suggest a time & place (or virtual link)..." : "Your message..."}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold font-[family-name:var(--font-heading)] bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow-shadow"
                >
                  <Send size={16} />
                  {activeTab === "coffee" ? "Send Invite" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
