import React, { useState } from "react";
import Project from "../components/Project";
import ProjectModal from "../components/ProjectModal";
import { myProjects } from "../constants";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };

  return (
    <section id="projects" className="relative c-space section-spacing">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="mt-6 border-b border-neutral-700 w-full" />
      {myProjects.map((category) => (
        <Project
          key={category.id}
          title={category.category}
          onClick={() => handleProjectClick(category)}
        />
      ))}

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleClose}
        category={selectedCategory}
      />
    </section>
  );
};

export default Projects;
