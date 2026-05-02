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
      category: "Web Development",
      description: "A collection of modern, responsive web applications built with the latest technologies.",
      projects: [
        {
          title: "E-Commerce Platform",
          description: "A full-stack e-commerce solution with real-time inventory management and secure payments.",
          technologies: ["Next.js", "TypeScript", "Stripe"],
          imageUrl: projectPlaceholder,
          imageAlt: "E-Commerce Platform",
          statusText: "Live",
          statusIndicatorClass: "bg-green-500",
          category: "Full Stack",
          websiteUrl: "https://example.com",
          githubUrl: "https://github.com/yourusername/ecommerce",
        },
        {
          title: "SaaS Dashboard",
          description: "An analytics dashboard for monitoring business metrics with interactive data visualizations.",
          technologies: ["React", "D3.js", "TailwindCSS"],
          imageUrl: projectPlaceholder,
          imageAlt: "SaaS Dashboard",
          statusText: "In Progress",
          statusIndicatorClass: "bg-yellow-500",
          category: "Frontend",
          websiteUrl: "https://example.com",
          githubUrl: "https://github.com/yourusername/dashboard",
        },
        {
          title: "Social Media API",
          description: "A high-performance RESTful API supporting millions of requests with automated testing.",
          technologies: ["Node.js", "PostgreSQL", "Docker"],
          imageUrl: projectPlaceholder,
          imageAlt: "Social Media API",
          statusText: "Completed",
          statusIndicatorClass: "bg-blue-500",
          category: "Backend",
          websiteUrl: "https://example.com",
          githubUrl: "https://github.com/yourusername/api",
        },
      ],
    },
    {
      id: 2,
      category: "Mobile Apps",
      description: "Cross-platform mobile experiences designed for performance and intuitive user interaction.",
      projects: [
        {
          title: "Fitness Tracker",
          description: "A mobile app for tracking workouts, nutrition, and health metrics with offline support.",
          technologies: ["React Native", "Expo", "Firebase"],
          imageUrl: projectPlaceholder,
          imageAlt: "Fitness Tracker",
          statusText: "Live",
          statusIndicatorClass: "bg-green-500",
          category: "Mobile",
          websiteUrl: "https://example.com",
          githubUrl: "https://github.com/yourusername/fitness",
        },
        {
          title: "Task Manager",
          description: "A minimalist productivity app featuring drag-and-drop task management and reminders.",
          technologies: ["SwiftUI", "Combine"],
          imageUrl: projectPlaceholder,
          imageAlt: "Task Manager",
          statusText: "Completed",
          statusIndicatorClass: "bg-blue-500",
          category: "iOS",
          websiteUrl: "https://example.com",
          githubUrl: "https://github.com/yourusername/tasks",
        },
        {
          title: "Language Learning App",
          description: "An interactive app for learning languages through gamified lessons and speech recognition.",
          technologies: ["Flutter", "Dart", "TensorFlow"],
          imageUrl: projectPlaceholder,
          imageAlt: "Language Learning App",
          statusText: "In Progress",
          statusIndicatorClass: "bg-yellow-500",
          category: "Mobile",
          websiteUrl: "https://example.com",
          githubUrl: "https://github.com/yourusername/lang-app",
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
