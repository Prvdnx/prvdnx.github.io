import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectGroup } from "@/sections/ProjectsSection/components/ProjectGroup";
import { HorizontalProjectScroll } from "@/sections/ProjectsSection/components/HorizontalProjectScroll";
import { portfolioData } from "@/data/portfolioData";

// Project Link Icons
import externalLinkIcon from "@/assets/icons/external-link.svg";
import githubIcon from "@/assets/icons/github-project.svg";

export const ProjectsSection = () => {
  const [expandedGroupId, setExpandedGroupId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedGroupId(expandedGroupId === id ? null : id);
  };

  const totalProjects = portfolioData.projectCategories.reduce(
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

      {portfolioData.projectCategories.map((category, index) => (
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
          href={portfolioData.socialLinks.github}
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
