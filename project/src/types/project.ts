export interface Technology {
  name: string;
  icon?: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  type: 'demo' | 'frontend' | 'backend';
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: Technology[];
  images: ProjectImage[];
  links: ProjectLink[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
}