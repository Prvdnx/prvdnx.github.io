import { ProjectCard, ProjectCardProps } from "./ProjectCard";

export type HorizontalProjectScrollProps = {
    projects: ProjectCardProps[];
    isVisible: boolean;
};

export const HorizontalProjectScroll = (props: HorizontalProjectScrollProps) => {
    if (!props.isVisible) return null;

    return (
        <div className="overflow-hidden animate-in fade-in duration-300">
            <div
                className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
            >
                {props.projects.map((project, index) => (
                    <div key={`${project.imageAlt}-${index}`} className="flex-shrink-0 w-[400px]">
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
};
