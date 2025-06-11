import type { Project, Skill, TimelineEvent, SocialLink } from './types';
import { Github, Linkedin, Mail, Layers, Brain, Telescope, GitBranch, Rocket, Code, Zap, Settings, SlidersHorizontal, Package, Briefcase, ExternalLink } from 'lucide-react';

export const projectsData: Project[] = [
  {
    id: 'project-1',
    name: 'Nova Dashboard',
    shortDescription: 'Advanced analytics platform for stellar data.',
    description: 'Nova Dashboard provides real-time visualization and analysis of astronomical data feeds. Built with a modern tech stack for high performance and scalability. Features include customizable dashboards, data export, and alert systems.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Firebase'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'dashboard analytics',
    liveLink: '#',
    repoLink: '#',
    planetColor: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  },
  {
    id: 'project-2',
    name: 'Celestial API',
    shortDescription: 'RESTful API for accessing planetary information.',
    description: 'A comprehensive API service providing detailed information about celestial bodies, orbital paths, and astronomical events. Features robust authentication, rate limiting, and extensive documentation.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Docker'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'api code',
    repoLink: '#',
    planetColor: 'bg-gradient-to-br from-teal-500 to-cyan-600',
  },
  {
    id: 'project-3',
    name: 'Galaxy Explorer VR',
    shortDescription: 'Immersive VR experience for exploring galaxies.',
    description: 'Journey through stunningly rendered galaxies in this VR application. Using cutting-edge graphics technology, users can learn about cosmic structures and phenomena in an interactive way. Optimized for various VR headsets.',
    techStack: ['Unity', 'C#', 'SteamVR', 'Blender'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'virtual reality',
    liveLink: '#',
    planetColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
  },
];

export const skillsData: Skill[] = [
  { id: 'skill-1', name: 'JavaScript', proficiency: 5, category: 'Languages', icon: Code },
  { id: 'skill-2', name: 'TypeScript', proficiency: 5, category: 'Languages', icon: Code },
  { id: 'skill-3', name: 'React / Next.js', proficiency: 5, category: 'Frontend', icon: Layers },
  { id: 'skill-4', name: 'Node.js', proficiency: 4, category: 'Backend', icon: Settings },
  { id: 'skill-5', name: 'Python', proficiency: 3, category: 'Languages', icon: Code },
  { id: 'skill-6', name: 'HTML & CSS', proficiency: 5, category: 'Frontend', icon: Code },
  { id: 'skill-7', name: 'Tailwind CSS', proficiency: 5, category: 'Frontend', icon: SlidersHorizontal },
  { id: 'skill-8', name: 'SQL Databases', proficiency: 4, category: 'Backend', icon: Package },
  { id: 'skill-9', name: 'NoSQL Databases', proficiency: 3, category: 'Backend', icon: Package },
  { id: 'skill-10', name: 'Git & GitHub', proficiency: 5, category: 'Tools', icon: GitBranch },
  { id: 'skill-11', name: 'Docker', proficiency: 3, category: 'DevOps', icon: Package },
  { id: 'skill-12', name: 'Three.js', proficiency: 2, category: 'Frontend', icon: Telescope},
];

export const timelineData: TimelineEvent[] = [
  {
    id: 'event-1',
    date: '2018',
    title: 'Ignition Sequence Start',
    description: 'Began my coding journey, exploring the fundamentals of web development and programming logic.',
    skillsAcquired: ['HTML', 'CSS', 'Basic JavaScript'],
    icon: Rocket,
  },
  {
    id: 'event-2',
    date: '2020',
    title: 'Entering Orbit',
    description: 'Deep dived into JavaScript frameworks, focusing on React and building dynamic user interfaces.',
    skillsAcquired: ['React', 'Node.js', 'APIs'],
    icon: Layers,
  },
  {
    id: 'event-3',
    date: '2022',
    title: 'Deep Space Exploration',
    description: 'Expanded expertise into full-stack development, backend technologies, and cloud platforms.',
    skillsAcquired: ['TypeScript', 'Next.js', 'Databases', 'AWS/Firebase'],
    icon: Brain,
  },
  {
    id: 'event-4',
    date: 'Ongoing',
    title: 'Charting New Galaxies',
    description: 'Continuously learning new technologies, exploring AI/ML, and contributing to open source projects.',
    skillsAcquired: ['Python', 'Machine Learning', 'Advanced DevOps'],
    icon: Telescope,
  },
];

export const socialLinksData: SocialLink[] = [
  { id: 'social-1', name: 'GitHub', url: 'https://github.com', icon: Github },
  { id: 'social-2', name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { id: 'social-3', name: 'Email', url: 'mailto:contact@example.com', icon: Mail },
];
