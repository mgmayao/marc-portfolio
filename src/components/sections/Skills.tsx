"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { skillGroups } from "@/data/skills";
import { Database, Code2, LifeBuoy } from "lucide-react";

const groupIcons = [Database, Code2, LifeBuoy];

export function Skills() {
  return (
    <section id="skills" className="section">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools I rely on"
          description="A mix of ERP-specific expertise and the technical skills that support it."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[i % groupIcons.length];
            return (
              <Card key={group.title} delay={i * 0.08}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient bg-gradient-lg text-white">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
