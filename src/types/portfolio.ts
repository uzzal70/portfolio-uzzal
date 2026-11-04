export type ThemeMode = 'light' | 'dark';

export type SkillLevel = 'Primary' | 'Working Knowledge' | 'Familiarity';

export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype' | 'Concept';

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  level: SkillLevel;
  iconName?: string;
  description?: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  overview: string;
  problemStatement: string;
  technicalSolution: string;
  technologies: string[];
  responsibilities: string[];
  keyFeatures: { title: string; description: string }[];
  architectureDecisions: string[];
  challengesSolved: { challenge: string; solution: string }[];
  liveDemoUrl?: string;
  githubUrl?: string;
  previewImage?: string;
  accentColor?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  majorContributions: string[];
}

export interface EngineeringStrength {
  id: string;
  title: string;
  icon: string;
  points: string[];
  summary: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string[];
}

export interface RepositoryItem {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars?: number;
  forks?: number;
  url: string;
  isFeatured?: boolean;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
