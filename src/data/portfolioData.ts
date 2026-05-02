import React from 'react';
import projectPlaceholder from "@/assets/projects/placeholder.png";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
  statusText: string;
  statusIndicatorClass: string;
  category: string;
  websiteUrl: string;
  githubUrl: string;
  imageFit?: 'cover' | 'contain';
}

export interface ProjectCategory {
  id: number;
  category: string;
  description: string;
  projects: Project[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  href: string;
}

export interface Education {
  institution: string;
  period: string;
  degree: string | React.ReactNode;
}

export const portfolioData = {
  name: "[Your Name]",
  role: "Software Developer",
  location: "City, Country",
  email: "your.email@example.com",
  socialLinks: {
    email: "mailto:your.email@example.com",
    discord: "https://discord.com/users/yourid",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  about: {
    paragraphs: [
      "I am a passionate software developer with a focus on building robust and scalable solutions. I love learning new technologies and solving complex problems.",
      "Currently seeking new opportunities to contribute to innovative projects."
    ],
  },
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Company Name",
      period: "Jan 2022 – Present",
      description: "Leading the development of core features and improving system performance.",
      href: "https://example.com",
    },
    {
      title: "Software Developer",
      company: "Previous Company",
      period: "Jun 2019 – Dec 2021",
      description: "Developed and maintained various web applications using modern frameworks.",
      href: "https://example.com",
    },
  ] as Experience[],
  education: [
    {
      institution: "University Name",
      period: "2015 – 2019",
      degree: "Bachelor of Science in Computer Science",
    },
  ] as Education[],
  skills: [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Docker", "Git", "CSS", "HTML"
  ],
  projectCategories: [
    {
      id: 1,
      category: "Featured Projects",
      description: "A showcase of my best work and significant contributions.",
      projects: [
        {
          title: "Project One",
          description: "Detailed description of your amazing project and what it accomplishes.",
          technologies: ["React", "TailwindCSS"],
          imageUrl: projectPlaceholder,
          imageAlt: "Project One",
          statusText: "Completed",
          statusIndicatorClass: "bg-blue-500",
          category: "Web App",
          websiteUrl: "https://example.com",
          githubUrl: "https://github.com/yourusername/project-one",
        },
      ],
    },
  ] as ProjectCategory[],
  contact: {
    emailJsServiceId: "service_id",
    emailJsTemplateId: "template_id",
    emailJsPublicKey: "public_key",
    toName: "Your Name",
  },
};
