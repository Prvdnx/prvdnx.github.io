import { ProjectCard, ProjectCardProps } from "./ProjectCard";

export type HorizontalProjectScrollProps = {
    projects: any[]; // Changed to any to handle raw data from portfolioData
    isVisible: boolean;
    websiteIconUrl: string;
    githubIconUrl: string;
};

export const HorizontalProjectScroll = (props: HorizontalProjectScrollProps) => {
    if (!props.isVisible) return null;

    return (
        <div className="relative overflow-hidden animate-in fade-in duration-300">
            <div
                className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-none md:scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 snap-x snap-mandatory"
            >
                {props.projects.map((project, index) => (
                    <div key={`${project.imageAlt}-${index}`} className="flex-shrink-0 w-[85%] md:w-[400px] snap-center">
                        <ProjectCard 
                            {...project} 
                            websiteIconUrl={props.websiteIconUrl}
                            githubIconUrl={props.githubIconUrl}
                        />
                    </div>
                ))}
                {/* Extra padding at the end to ensure the last card can center */}
                <div className="flex-shrink-0 w-[7.5%] md:hidden"></div>
            </div>
            
            {/* Mobile Scroll Indicator Fade */}
            <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none md:hidden"></div>
        </div>
    );
};
