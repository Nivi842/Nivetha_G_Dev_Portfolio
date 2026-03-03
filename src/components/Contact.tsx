import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  Coffee,
  Briefcase,
  Lightbulb,
  MessageSquare,
  Code2,
  Mail,
  User,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const messageTypes = [
  { id: "coffee", label: "Coffee Chat", icon: Coffee, emoji: "☕" },
  { id: "freelance", label: "Freelance Work", icon: Code2, emoji: "🚀" },
  { id: "project", label: "Project Idea", icon: Lightbulb, emoji: "💡" },
  { id: "hire", label: "Hire Me", icon: Briefcase, emoji: "💼" },
  { id: "other", label: "Just Saying Hi", icon: MessageSquare, emoji: "👋" },
];

const placeholders: Record<string, string> = {
  coffee: "I'd love to chat about…",
  freelance: "Here's the project I need help with…",
  hire: "Tell me about the role / project…",
  project: "Here's my idea…",
  other: "Hey! Just wanted to say…",
};

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState("coffee");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      // Save to database
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        message_type: selectedType,
      });
      if (error) throw error;

      // Send email notification
      try {
        await supabase.functions.invoke("notify-contact", {
          body: {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
            message_type: selectedType,
          },
        });
      } catch {
        // Email notification is best-effort, don't fail the whole submission
        console.warn("Email notification failed, but message was saved.");
      }

      const selected = messageTypes.find((t) => t.id === selectedType);
      toast({
        title: `${selected?.emoji} Message sent!`,
        description:
          selectedType === "coffee"
            ? "Let's grab that virtual coffee soon!"
            : selectedType === "freelance"
            ? "I'll review your project details and get back to you!"
            : "I'll get back to you shortly.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send message", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left side — info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Let's Build</span>
              <br />
              <span className="text-foreground">Something Together</span>
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you need a freelance developer, have a project idea, or
              just want to grab a virtual coffee — I'm all ears.
            </p>

            {/* Message type pills */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-[family-name:var(--font-heading)] mb-1">
                What's this about?
              </span>
              {messageTypes.map((type) => {
                const Icon = type.icon;
                const active = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-[family-name:var(--font-heading)]
                      transition-all duration-200 cursor-pointer text-left
                      ${
                        active
                          ? "bg-primary/15 text-primary border border-primary/30 glow-shadow"
                          : "bg-secondary/50 text-muted-foreground border border-transparent hover:border-border hover:text-foreground"
                      }
                    `}
                  >
                    <Icon size={16} className={active ? "text-primary" : ""} />
                    <span className="flex-1">{type.label}</span>
                    {active && (
                      <motion.div
                        layoutId="contact-arrow"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      >
                        <ArrowRight size={14} />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right side — form card */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 flex flex-col gap-5 p-8 rounded-2xl bg-card border border-border card-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground font-[family-name:var(--font-heading)] uppercase tracking-wider">
                Send a message
              </span>
            </div>

            <div className="relative">
              <User
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="bg-secondary border-border pl-10"
              />
            </div>

            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="bg-secondary border-border pl-10"
              />
            </div>

            <Textarea
              placeholder={placeholders[selectedType] || "Your message…"}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={6}
              className="bg-secondary border-border resize-none"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full gap-2 h-12 text-sm font-[family-name:var(--font-heading)] uppercase tracking-wider"
            >
              {loading ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </Button>

            <p className="text-[11px] text-muted-foreground text-center">
              I typically respond within 24 hours. No spam, ever.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
