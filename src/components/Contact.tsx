import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Coffee, Briefcase, Lightbulb, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const messageTypes = [
  { id: "coffee", label: "Coffee Chat ☕", icon: Coffee, emoji: "☕" },
  { id: "project", label: "Project Idea", icon: Lightbulb, emoji: "💡" },
  { id: "hire", label: "Hire Me", icon: Briefcase, emoji: "💼" },
  { id: "other", label: "Just Saying Hi", icon: MessageSquare, emoji: "👋" },
];

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
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        message_type: selectedType,
      });
      if (error) throw error;
      const selected = messageTypes.find((t) => t.id === selectedType);
      toast({
        title: `${selected?.emoji} Message sent!`,
        description:
          selectedType === "coffee"
            ? "Let's grab that virtual coffee soon!"
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
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-heading)] text-3xl font-bold mb-4"
        >
          <span className="text-gradient">Let's Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-10"
        >
          Pick a reason, drop a message — I'd love to hear from you.
        </motion.p>

        {/* Message type selector */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {messageTypes.map((type) => {
            const Icon = type.icon;
            const active = selectedType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedType(type.id)}
                className={`
                  relative flex flex-col items-center gap-2 p-4 rounded-xl border text-sm font-[family-name:var(--font-heading)]
                  transition-all duration-200 cursor-pointer
                  ${
                    active
                      ? "border-primary bg-primary/10 text-primary glow-shadow"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }
                `}
              >
                <Icon size={20} />
                <span className="text-xs">{type.label}</span>
                {active && (
                  <motion.div
                    layoutId="active-type"
                    className="absolute inset-0 rounded-xl border-2 border-primary pointer-events-none"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4 p-6 rounded-2xl bg-card border border-border card-shadow"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="bg-secondary border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="bg-secondary border-border"
            />
          </div>
          <Textarea
            placeholder={
              selectedType === "coffee"
                ? "I'd love to chat about…"
                : selectedType === "hire"
                ? "Tell me about the role / project…"
                : selectedType === "project"
                ? "Here's my idea…"
                : "Hey! Just wanted to say…"
            }
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            rows={5}
            className="bg-secondary border-border"
          />
          <Button type="submit" disabled={loading} className="w-full gap-2 h-11">
            {selectedType === "coffee" ? <Coffee size={16} /> : <Send size={16} />}
            {loading
              ? "Sending..."
              : selectedType === "coffee"
              ? "Send & Grab Coffee ☕"
              : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
