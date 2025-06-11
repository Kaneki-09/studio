import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  imageHint: string; // For data-ai-hint attribute
  liveLink?: string;
  repoLink?: string;
  planetColor: string; // hex or tailwind color for planet bg
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number; // 0-5
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools' | 'Languages';
  icon?: LucideIcon; // Optional specific icon for the skill
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  skillsAcquired?: string[];
  icon?: LucideIcon;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: LucideIcon;
}
