"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { aboutPillars, aboutSummary } from "@/data/site";
import {
  Database,
  GitBranch,
  ShieldCheck,
  Workflow,
  Layers,
  UploadCloud,
} from "lucide-react";

const icons = [Layers, Workflow, Database, ShieldCheck, UploadCloud, GitBranch];

export function About() {
  return (
    <section id="about" className="section">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="ERP specialist, process-first mindset"
          description={aboutSummary}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutPillars.map((pillar, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Card key={pillar.title} delay={i * 0.06}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient bg-gradient-lg text-white">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
