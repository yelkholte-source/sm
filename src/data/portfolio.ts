/**
 * Portfolio Data - Single source of truth for all portfolio content
 * Update this file to change the portfolio content
 */

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
}

export interface Statistic {
  label: string;
  value: string | number;
}

export interface TechSkill {
  category: string;
  icon: string;
  skills: string[];
}

export interface SoftSkill {
  name: string;
  description: string;
  icon: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  institutionUrl: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  type?: 'job' | 'internship' | 'freelance' | 'associative';
}

export interface Publication {
  title: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  authors: string[];
  firstAuthor?: boolean;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  image?: string;
  type?: 'personal' | 'academic' | 'professional';
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills?: string[];
  credentialUrl?: string;
  credentialId?: string;
  type?: 'certificate' | 'course' | 'specialization';
}

export interface SocialProfile {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  statistics: Statistic[];
  about: string[];
  technicalSkills: TechSkill[];
  softSkills: SoftSkill[];
  education: Education[];
  experience: Experience[];
  publications: Publication[];
  projects: Project[];
  certifications: Certification[];
  socialProfiles: SocialProfile[];
  navItems: NavItem[];
}

// Portfolio Data for Yasmine El Kholte
export const portfolioData: PortfolioData = {
  personal: {
    firstName: 'Yasmine',
    lastName: 'El Kholte',
    title: 'Software Engineer',
    subtitle: 'Esprit curieux coeur passionné toujours en apprentissage',
    email: 'y.elkholte@esisa.ac.ma',
    phone: '+212 6 56 60 13 13',
    location: 'Maroc',
    avatar: '/avatar.jpg', // Update with actual photo path
  },

  statistics: [
    { label: 'Projects Completed', value: 5 },
    { label: 'Technologies Mastered', value: 8 },
    { label: 'Years of Study', value: 2 },
  ],

  about: [
    'Étudiante en ingénierie informatique motivée et ambitieuse, reconnue pour ses compétences en communication, en argumentation et en prise de parole en public.',
    'Membre active d\'un club de débat compétitif avec plusieurs participations et victoires dans des compétitions d\'éloquence et d\'argumentation. Capable de défendre des idées avec rigueur, de travailler en équipe et d\'analyser des problématiques complexes.',
    'Objectif : développer mes compétences en ingénierie, leadership et communication afin de contribuer à des projets innovants et à fort impact.',
  ],

  technicalSkills: [
    {
      category: 'Programming Languages',
      icon: 'code',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'HTML/CSS'],
    },
    {
      category: 'Web Technologies',
      icon: 'globe',
      skills: ['React', 'Astro', 'Node.js', 'REST APIs', 'Web Design'],
    },
    {
      category: 'Tools & Platforms',
      icon: 'tool',
      skills: ['Git/GitHub', 'VS Code', 'Linux', 'Docker', 'npm'],
    },
  ],

  softSkills: [
    {
      name: 'Communication',
      description: 'Prise de parole en public et argumention persuasive',
      icon: 'message-square',
    },
    {
      name: 'Leadership',
      description: 'Capacité à guider et inspirer les autres',
      icon: 'users',
    },
    {
      name: 'Problem Solving',
      description: 'Pensée critique et analyse de problématiques complexes',
      icon: 'lightbulb',
    },
    {
      name: 'Teamwork',
      description: 'Collaboration efficace et adaptabilité en équipe',
      icon: 'users',
    },
  ],

  education: [
    {
      degree: 'Cycle d\'ingénierie informatique',
      field: 'Computer Science & Information Technology',
      institution: 'École Supérieure d\'Ingénierie en Sciences Appliquées (ESISA)',
      institutionUrl: 'https://esisa.ac.ma',
      startDate: '2023',
      endDate: '2026',
      description:
        'Formation axée sur la programmation, la logique algorithmique, la résolution de problèmes et les technologies informatiques modernes.',
    },
  ],

  experience: [
    {
      role: 'Member - Debate Club',
      company: 'ESISA Debate Team',
      startDate: '2023',
      current: true,
      description:
        'Participation régulière à des compétitions de débat et d\'éloquence. Gagnante de plusieurs compétitions d\'argumentation. Développement de compétences en rhétorique, persuasion et analyse critique à travers la préparation de débats et stratégies argumentatives.',
      type: 'associative',
    },
  ],

  publications: [],

  projects: [
    {
      title: 'Portfolio Website',
      description:
        'Modern, responsive portfolio built with Astro, featuring dynamic theme switching, AI chatbot, and resume export functionality.',
      technologies: ['Astro', 'TypeScript', 'CSS3', 'JavaScript'],
      url: 'https://github.com/yelkholte-source/sm',
      type: 'personal',
    },
    {
      title: 'Debate Management System',
      description:
        'Academic project for organizing and tracking debate competitions with participant management.',
      technologies: ['JavaScript', 'HTML/CSS', 'Database'],
      type: 'academic',
    },
  ],

  certifications: [],

  socialProfiles: [
    {
      name: 'GitHub',
      url: 'https://github.com/yelkholte-source/sm',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yasmine-el-kholte-4247323a5',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:y.elkholte@esisa.ac.ma',
      icon: 'mail',
    },
  ],

  navItems: [
    { label: 'Home', href: '#home', icon: 'home' },
    { label: 'About', href: '#about', icon: 'user' },
    { label: 'Skills', href: '#skills', icon: 'code' },
    { label: 'Education', href: '#education', icon: 'book' },
    { label: 'Experience', href: '#experience', icon: 'briefcase' },
    { label: 'Projects', href: '#projects', icon: 'folder' },
    { label: 'Contact', href: '#contact', icon: 'mail' },
  ],
};

/**
 * Helper function to get active navigation items (only sections with data)
 */
export function getActiveNavItems(): NavItem[] {
  const active: NavItem[] = [
    { label: 'Home', href: '#home', icon: 'home' },
    { label: 'About', href: '#about', icon: 'user' },
    { label: 'Skills', href: '#skills', icon: 'code' },
  ];

  if (portfolioData.education.length > 0) {
    active.push({ label: 'Education', href: '#education', icon: 'book' });
  }

  if (portfolioData.experience.length > 0) {
    active.push({ label: 'Experience', href: '#experience', icon: 'briefcase' });
  }

  if (portfolioData.publications.length > 0) {
    active.push({ label: 'Publications', href: '#publications', icon: 'file-text' });
  }

  if (portfolioData.projects.length > 0) {
    active.push({ label: 'Projects', href: '#projects', icon: 'folder' });
  }

  if (portfolioData.certifications.length > 0) {
    active.push({ label: 'Certifications', href: '#certifications', icon: 'award' });
  }

  active.push({ label: 'Contact', href: '#contact', icon: 'mail' });

  return active;
}

/**
 * Helper function to format resume data for export
 */
export function getResumeData() {
  const fullName = `${portfolioData.personal.firstName} ${portfolioData.personal.lastName}`;
  return {
    fullName,
    title: portfolioData.personal.title,
    email: portfolioData.personal.email,
    phone: portfolioData.personal.phone,
    location: portfolioData.personal.location,
    summary: portfolioData.about.join('\n'),
    education: portfolioData.education,
    experience: portfolioData.experience,
    technicalSkills: portfolioData.technicalSkills,
    softSkills: portfolioData.softSkills,
    projects: portfolioData.projects,
    publications: portfolioData.publications,
    certifications: portfolioData.certifications,
    socialProfiles: portfolioData.socialProfiles,
  };
}
