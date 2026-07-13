"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section bg-ink-50/60 dark:bg-ink-900/20">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've put this into practice"
          description="A timeline of the roles where I've supported, administered, and improved ERP and IT systems."
        />

        <div className="relative">
          {/* vertical timeline line */}
          <div className="absolute left-[18px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-500/60 via-brand-400/30 to-transparent md:block" />

          <div className="space-y-16">
            {experience.map((job, idx) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative pl-0 md:pl-12"
              >
                {/* timeline dot */}
                <span className="absolute left-1.5 top-1.5 hidden h-4 w-4 items-center justify-center rounded-full bg-brand-gradient bg-gradient-lg ring-4 ring-white dark:ring-ink-950 md:flex" />

                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient bg-gradient-lg text-white">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-brand-600 dark:text-brand-300">
                      {job.company}
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex flex-wrap gap-4 text-sm text-ink-500 dark:text-ink-400">
                  <span>{job.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {job.location}
                  </span>
                </div>

                <ul className="mb-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {job.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300">
                      <CheckCircle2 size={15} className="mt-0.5 flex-none text-brand-500" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                {job.tags && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                )}

                {job.projects && (
                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-400 dark:text-ink-500">
                      Projects Delivered
                    </p>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {job.projects.map((project, i) => (
                        <Card key={project.title} delay={i * 0.05}>
                          <h4 className="font-display text-base font-semibold text-ink-900 dark:text-white">
                            {project.title}
                          </h4>
                          <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                            {project.description}
                          </p>
                          <ul className="mt-3 space-y-1.5">
                            {project.highlights.map((h) => (
                              <li
                                key={h}
                                className="flex items-start gap-2 text-xs text-ink-500 dark:text-ink-400"
                              >
                                <span className="mt-1 h-1 w-1 flex-none rounded-full bg-brand-500" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
