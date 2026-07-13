"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14 max-w-2xl"
    >
      <span className="mb-3 inline-block rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:border-brand-400/20 dark:bg-brand-400/10 dark:text-brand-300">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-ink-600 dark:text-ink-200 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
