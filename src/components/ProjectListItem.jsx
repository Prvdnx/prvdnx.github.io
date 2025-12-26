import React from "react";

const ProjectListItem = ({ project }) => {
    return (
        <div className="grid grid-cols-1 gap-6 p-6 mb-6 border md:grid-cols-3 rounded-xl border-white/10 bg-gradient-to-r from-indigo to-storm hover-animation">
            {/* Left: Project Image */}
            <div className="flex flex-col">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-32 rounded-lg"
                />
                {/* Tech Stack Logos */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                        <div
                            key={tag.id}
                            className="flex items-center gap-1 px-2 py-1 rounded bg-white/10"
                        >
                            <img src={tag.path} alt={tag.name} className="w-4 h-4" />
                            <span className="text-xs text-neutral-300">{tag.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Project Details */}
            <div className="flex flex-col justify-between md:col-span-2">
                <div>
                    <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                    <p className="mb-4 text-neutral-300">{project.description}</p>
                </div>

                {/* Links Container */}
                <div className="flex flex-wrap gap-4 mt-4">
                    {/* Demo Link */}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm transition-colors text-neutral-300 hover:text-white w-fit"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>View Site →</span>
                        </a>
                    )}

                    {/* GitHub Link */}
                    {project.href && (
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm transition-colors text-neutral-300 hover:text-white w-fit"
                        >
                            <img src="/assets/logos/github.svg" alt="GitHub" className="w-5 h-5" />
                            <span>See Sourcecode →</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectListItem;
