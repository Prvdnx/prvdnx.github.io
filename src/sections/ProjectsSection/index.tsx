import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGroup } from "@/sections/ProjectsSection/components/ProjectGroup";
import { HorizontalProjectScroll } from "@/sections/ProjectsSection/components/HorizontalProjectScroll";
import { ProjectCardProps } from "@/sections/ProjectsSection/components/ProjectCard";

// Project Images
import libftImg from "@/assets/projects/libfte.png";
import ftPrintfImg from "@/assets/projects/ft_printfe.png";
import getNextLineImg from "@/assets/projects/get_next_linee.png";
import pushSwapImg from "@/assets/projects/push_swape.png";
import minitalkImg from "@/assets/projects/minitalke.png";
import philosophersImg from "@/assets/projects/philosopherse.png";
import fdfImg from "@/assets/projects/fdfe.png";
import minirtImg from "@/assets/projects/minirte.png";
import netpracticeImg from "@/assets/projects/netpracticee.png";
import ftIrcImg from "@/assets/projects/ft_irce.png";
import cppModulesImg from "@/assets/projects/cppe.png";
import inceptionImg from "@/assets/projects/inceptione.png";
import ftTranscendenceImg from "@/assets/projects/ft_transcendencee.png";
import born2berootImg from "@/assets/projects/born2beroote.png";
import linearRegressionImg from "@/assets/projects/linear-regression.png";
import mobilePiscineImg from "@/assets/projects/mobile-piscine.png";
import calculatorAppImg from "@/assets/projects/calculator-app.png";
import weatherAppImg from "@/assets/projects/weather-app.png";
import moodDiaryImg from "@/assets/projects/mood-diary.png";
import webPracticeImg from "@/assets/projects/web-practice.png";
import portfolioWebsiteImg from "@/assets/projects/portfolio_website.png";

// Project Link Icons
import websiteIcon from "@/assets/icons/website.svg";
import githubIcon from "@/assets/icons/github-project.svg";
import externalLinkIcon from "@/assets/icons/external-link.svg";

interface ProjectCategory {
  id: number;
  category: string;
  description: string;
  projects: ProjectCardProps[];
}

const projectCategories: ProjectCategory[] = [
  {
    id: 1,
    category: "42 Projects",
    description: "A deep dive into the 42 curriculum, mastering C, C++, systems programming, and full-stack development through rigorous peer-to-peer learning.",
    projects: [
      {
        imageUrl: linearRegressionImg,
        imageAlt: "ft_linear_regression",
        title: "ft_linear_regression",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Machine Learning",
        date: "",
        description: "Introduction to machine learning implementing linear regression from scratch with gradient descent.",
        technologies: ["Python", "Machine Learning"],
        websiteUrl: "https://github.com/Prvdnx/42-CORE/tree/main/Advanced%20Core/ft_linear_regression",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-CORE/tree/main/Advanced%20Core/ft_linear_regression",
        githubIconUrl: githubIcon,
        imageFit: 'cover',
      },
      {
        imageUrl: mobilePiscineImg,
        imageAlt: "Mobile Piscine",
        title: "Mobile Piscine",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Mobile",
        date: "",
        description: "Mobile application development bootcamp covering iOS and Android fundamentals with native frameworks.",
        technologies: ["React Native", "Expo"],
        websiteUrl: "https://github.com/Prvdnx/42-CORE/tree/main/Advanced%20Core/MOBILE%20PISCINE",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-CORE/tree/main/Advanced%20Core/MOBILE%20PISCINE",
        githubIconUrl: githubIcon,
        imageFit: 'cover',
      },
      {
        imageUrl: ftTranscendenceImg,
        imageAlt: "ft_transcendence",
        title: "ft_transcendence",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Full Stack",
        date: "",
        description: "Full-stack web application featuring real-time multiplayer Pong, chat system, and user authentication.",
        technologies: ["Docker", "JavaScript", "Python", "HTML5", "CSS3"],
        websiteUrl: "https://github.com/bpassael/transcendence",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/bpassael/transcendence",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: minirtImg,
        imageAlt: "miniRT",
        title: "miniRT",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Ray Tracing",
        date: "",
        description: "Ray tracing engine rendering 3D scenes with geometric objects, lighting, and realistic camera effects.",
        technologies: ["C"],
        websiteUrl: "https://github.com/gs313/miniRT",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/gs313/miniRT",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: ftIrcImg,
        imageAlt: "ft_irc",
        title: "ft_irc",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Server",
        date: "",
        description: "IRC (Internet Relay Chat) server implementation following RFC specifications with multi-client support.",
        technologies: ["C++"],
        websiteUrl: "https://github.com/TanawatJukmongkol/ft_irc",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/TanawatJukmongkol/ft_irc",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: cppModulesImg,
        imageAlt: "CPP Modules",
        title: "CPP Modules",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "C++ OOP",
        date: "",
        description: "Series of C++ exercises (00-09) covering OOP, polymorphism, templates, STL, and advanced C++ concepts.",
        technologies: ["C++"],
        websiteUrl: "https://github.com/Prvdnx/42-CPP_MODULES",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-CPP_MODULES",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: inceptionImg,
        imageAlt: "Inception",
        title: "Inception",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "DevOps",
        date: "",
        description: "DevOps infrastructure project using Docker to set up WordPress, MariaDB, and Nginx in isolated containers.",
        technologies: ["Docker", "Linux"],
        websiteUrl: "https://github.com/Prvdnx/42_Inception",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42_Inception",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: philosophersImg,
        imageAlt: "Philosophers",
        title: "Philosophers",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Concurrency",
        date: "",
        description: "Classic dining philosophers problem solved with threads and mutexes, exploring concurrency and deadlock prevention.",
        technologies: ["C", "Pthreads"],
        websiteUrl: "https://github.com/Prvdnx/42-Philosophers",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-Philosophers",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: netpracticeImg,
        imageAlt: "NetPractice",
        title: "NetPractice",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Networking",
        date: "",
        description: "Network configuration exercises covering IP addressing, subnetting, routing, and TCP/IP fundamentals.",
        technologies: ["Networking"],
        websiteUrl: "https://github.com/Prvdnx/42-NetPractice",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-NetPractice",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: minitalkImg,
        imageAlt: "minitalk",
        title: "minitalk",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Systems",
        date: "",
        description: "Client-server communication program using UNIX signals to transmit strings between processes.",
        technologies: ["C"],
        websiteUrl: "https://github.com/Prvdnx/42-minitalk",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-minitalk",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: pushSwapImg,
        imageAlt: "push_swap",
        title: "push_swap",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Algorithms",
        date: "",
        description: "Sorting algorithm implementation using two stacks with optimized operations to minimize instruction count.",
        technologies: ["C"],
        websiteUrl: "https://github.com/Prvdnx/42-push_swap",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-push_swap",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: fdfImg,
        imageAlt: "FdF",
        title: "FdF",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Graphics",
        date: "",
        description: "3D wireframe visualization of terrain maps using isometric projection and graphics programming fundamentals.",
        technologies: ["C"],
        websiteUrl: "https://github.com/Prvdnx/42-FdF",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-FdF",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: getNextLineImg,
        imageAlt: "get_next_line",
        title: "get_next_line",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "File I/O",
        date: "",
        description: "Function that reads a line from a file descriptor efficiently, one line at a time with dynamic memory management.",
        technologies: ["C"],
        websiteUrl: "https://github.com/Prvdnx/42-get_next_line",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-get_next_line",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: ftPrintfImg,
        imageAlt: "ft_printf",
        title: "ft_printf",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "C Library",
        date: "",
        description: "Recreation of the printf function with support for multiple format specifiers and advanced formatting.",
        technologies: ["C"],
        websiteUrl: "https://github.com/Prvdnx/42-ft_printf",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-ft_printf",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: libftImg,
        imageAlt: "Libft",
        title: "Libft",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "C Library",
        date: "",
        description: "Custom C library implementing standard functions from scratch - the foundation for all future 42 projects.",
        technologies: ["C"],
        websiteUrl: "https://github.com/Prvdnx/42-ft_libft",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-ft_libft",
        githubIconUrl: githubIcon,
      },
      {
        imageUrl: born2berootImg,
        imageAlt: "Born2beroot",
        title: "Born2beroot",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "System Admin",
        date: "",
        description: "Introduction to virtualization and system administration. Setting up a strict machine environment using a virtual machine.",
        technologies: ["VirtualBox", "Debian", "Bash"],
        websiteUrl: "https://github.com/Prvdnx/42-born2beroot",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-born2beroot",
        githubIconUrl: githubIcon,
      },
    ],
  },
  {
    id: 2,
    category: "Web Dev",
    description: "Modern, responsive, and performant web applications built with the latest technologies.",
    projects: [
      {
        imageUrl: webPracticeImg,
        imageAlt: "HTML/CSS/JS Practice Projects",
        title: "HTML/CSS/JS Practice Projects",
        statusText: "Live",
        statusIndicatorClass: "bg-green-500",
        category: "Web Application",
        date: "",
        description: "Collection of 16 interactive web applications showcasing frontend fundamentals and API integrations.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        websiteUrl: "https://prvdnxpractice.netlify.app/practice%20-%20html%20%7C%20css%20%7C%20js/",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/BE_CODESISTENT/tree/main/Practice%20-%20HTML%20%7C%20CSS%20%7C%20JS",
        githubIconUrl: githubIcon,
        imageFit: 'cover',
      },
      {
        imageUrl: portfolioWebsiteImg,
        imageAlt: "Portfolio Website",
        title: "Portfolio Website",
        statusText: "Live",
        statusIndicatorClass: "bg-green-500",
        category: "Web Application",
        date: "",
        description: "Personal portfolio showcasing projects with interactive 3D elements and modern design.",
        technologies: ["React", "TailwindCSS"],
        websiteUrl: "https://prvdnx.github.io/",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/prvdnx.github.io",
        githubIconUrl: githubIcon,
      },
    ],
  },
  {
    id: 3,
    category: "Mobile",
    description: "Cross-platform mobile applications delivering native performance and feel.",
    projects: [
      {
        imageUrl: moodDiaryImg,
        imageAlt: "Mood Diary App",
        title: "Mood Diary App",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Mobile App",
        date: "",
        description: "Personal diary application with authentication, calendar views, and secure entry storage.",
        technologies: ["React Native", "Expo", "Auth"],
        websiteUrl: "https://github.com/Prvdnx/42-CORE/tree/main/Advanced%20Core/MOBILE%20PISCINE/mobileModule05/advanced_diary_app",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-CORE/tree/main/Advanced%20Core/MOBILE%20PISCINE/mobileModule05/advanced_diary_app",
        githubIconUrl: githubIcon,
        imageFit: 'cover',
      },
      {
        imageUrl: weatherAppImg,
        imageAlt: "Weather App",
        title: "Weather App",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Mobile App",
        date: "",
        description: "Real-time weather application with API integration, geolocation, and dynamic backgrounds.",
        technologies: ["React Native", "Expo", "API"],
        websiteUrl: "https://github.com/Prvdnx/42-CORE/tree/main/Advanced%20Core/MOBILE%20PISCINE/mobileModule03/advanced_weather_app",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-CORE/tree/main/Advanced%20Core/MOBILE%20PISCINE/mobileModule03/advanced_weather_app",
        githubIconUrl: githubIcon,
        imageFit: 'cover',
      },
      {
        imageUrl: calculatorAppImg,
        imageAlt: "Calculator App",
        title: "Calculator App",
        statusText: "Completed",
        statusIndicatorClass: "bg-blue-500",
        category: "Mobile App",
        date: "",
        description: "Feature-rich calculator built with React Native supporting portrait and landscape modes.",
        technologies: ["React Native", "Expo"],
        websiteUrl: "https://github.com/Prvdnx/42-CORE/tree/main/Advanced%20Core/MOBILE%20PISCINE/mobileModule00/calculator_app",
        websiteIconUrl: websiteIcon,
        githubUrl: "https://github.com/Prvdnx/42-CORE/tree/main/Advanced%20Core/MOBILE%20PISCINE/mobileModule00/calculator_app",
        githubIconUrl: githubIcon,
        imageFit: 'cover',
      },
    ],
  },
];

export const ProjectsSection = () => {
  const [expandedGroupId, setExpandedGroupId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedGroupId(expandedGroupId === id ? null : id);
  };

  const totalProjects = projectCategories.reduce(
    (sum, cat) => sum + cat.projects.length,
    0
  );

  return (
    <section className="box-border caret-transparent mt-16" id="projects">
      <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3 mb-8">
        <SectionHeader title="Projects" />
        <span className="text-zinc-400 text-lg font-medium box-border caret-transparent block leading-7">
          ({totalProjects})
        </span>
      </div>

      {projectCategories.map((category, index) => (
        <div key={category.id} className={index > 0 ? "mt-4" : ""}>
          <ProjectGroup
            title={category.category}
            description={category.description}
            projectCount={category.projects.length}
            isExpanded={expandedGroupId === category.id}
            onToggle={() => handleToggle(category.id)}
          />
          <HorizontalProjectScroll
            projects={category.projects}
            isVisible={expandedGroupId === category.id}
          />
        </div>
      ))}

      {/* View All Projects Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/Prvdnx"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/10 rounded-lg text-white font-medium hover:border-white/20 hover:bg-blue-600/10 transition-all"
        >
          <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
          View All Projects on GitHub
          <img
            src={externalLinkIcon}
            alt="External link"
            className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </section>
  );
};
