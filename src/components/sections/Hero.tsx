"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-24"
    >
      {/* ambient gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/25 animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[380px] w-[380px] rounded-full bg-accent-500/20 blur-3xl dark:bg-accent-500/20 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <Container>
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:border-brand-400/20 dark:bg-brand-400/10 dark:text-brand-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Open to NetSuite support & admin opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            {site.fullName}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl font-semibold text-gradient md:text-2xl"
          >
            {site.jobTitle}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-200 md:text-lg"
          >
            {site.intro}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient bg-gradient-lg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-transform hover:scale-105"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-6 py-3 text-sm font-semibold text-ink-800 backdrop-blur transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-ink-900/60 dark:text-ink-100 dark:hover:text-brand-300"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-400 hover:text-brand-500 dark:text-ink-500"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
