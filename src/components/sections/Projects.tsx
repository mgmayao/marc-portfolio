"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { Award, Layers } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="section bg-ink-50/60 dark:bg-ink-900/20">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Workflows & automations delivered"
          description="Selected NetSuite projects, each covering the technologies used and the impact delivered."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card key={project.title} delay={i * 0.06} className="flex flex-col">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient bg-gradient-lg text-white">
                  <Layers size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-ink-600 dark:text-ink-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-5 border-t border-ink-200/60 pt-4 dark:border-white/5">
                <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-ink-400 dark:text-ink-500">
                  <Award size={13} /> Key Achievements
                </p>
                <ul className="space-y-1.5">
                  {project.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand-500" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
