"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { site } from "@/data/site";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: site.linkedin,
    href: `https://linkedin.com/in/${site.linkedin}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: site.github,
    href: `https://github.com/${site.github}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Wire this up to your form handler of choice (Formspree, Resend, an API route, etc.)
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your NetSuite setup"
          description="Whether it's a support backlog, a workflow to automate, or a data migration to plan — reach out."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {contactLinks.map((link, i) => (
              <Card key={link.label} delay={i * 0.05} className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-gradient bg-gradient-lg text-white">
                  <link.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-400 dark:text-ink-500">
                    {link.label}
                  </p>
                  <a
                    href={link.href}
                    target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="block truncate text-sm font-medium text-ink-800 hover:text-brand-600 dark:text-ink-100 dark:hover:text-brand-300"
                  >
                    {link.value}
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 lg:col-span-3 md:p-8"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
                <CheckCircle2 size={40} className="text-brand-500" />
                <p className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  Thanks — your email client should be open.
                </p>
                <p className="text-sm text-ink-500 dark:text-ink-400">
                  If it didn&apos;t open, email {site.email} directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-ink-200 bg-white/70 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500 dark:border-white/10 dark:bg-ink-900/60 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-ink-200 bg-white/70 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500 dark:border-white/10 dark:bg-ink-900/60 dark:text-white"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-ink-200 bg-white/70 px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500 dark:border-white/10 dark:bg-ink-900/60 dark:text-white"
                    placeholder="Tell me about your NetSuite project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient bg-gradient-lg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-transform hover:scale-105"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
