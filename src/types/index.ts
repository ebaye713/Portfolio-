export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Development' | 'Robotics & Hardware' | 'Digital Branding';
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  features: string[];
  link?: string;
  github?: string;
  highlights?: string;
  client?: string;
  year: string;
  featured?: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Robotics & Engineering' | 'Portraits' | 'Campus & Innovation';
  image: string;
  date: string;
  caption: string;
  context: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectRelation: string;
  avatar?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    description: string;
    badge: string;
  }[];
}

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge: string;
}
