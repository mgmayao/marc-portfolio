export interface DeliveredProject {
  title: string;
  description: string;
  highlights: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  projects?: DeliveredProject[];
  tags?: string[];
}

export interface FeaturedProject {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface SiteInfo {
  fullName: string;
  jobTitle: string;
  intro: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}
