import { ProjectLinks } from "@/sections/ProjectsSection/components/ProjectLinks";

export type ProjectCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  statusText: string;
  statusIndicatorClass: string;
  category: string;
  date: string;
  description: string;
  technologies: string[];
  websiteUrl: string;
  websiteIconUrl: string;
  githubUrl?: string;
  githubIconUrl?: string;
  imageFit?: 'contain' | 'cover'; // Optional: 'contain' shows full image, 'cover' fills/crops to fit
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="box-border caret-transparent h-full">
      <div className="bg-neutral-950/80 box-border caret-transparent flex flex-col h-full border overflow-hidden rounded-xl border-solid border-white/[0.03]">
        <div className="relative box-border caret-transparent h-48 overflow-hidden border-b border-solid border-white/[0.03]">
          <img
            alt={props.imageAlt}
            sizes="100vw"
            src={props.imageUrl}
            className={`absolute text-transparent box-border h-full max-w-full ${props.imageFit === 'cover' ? 'object-cover' : 'object-contain'} w-full inset-0 bg-neutral-900`}
          />
        </div>
        <div className="box-border caret-transparent flex flex-col grow p-5">
          <div className="items-start box-border caret-transparent flex justify-between mb-2">
            <h3 className="text-xl font-bold box-border caret-transparent leading-7">
              {props.title}
            </h3>
            <div className="text-zinc-400 text-xs font-medium items-center box-border caret-transparent gap-x-1.5 flex leading-4 gap-y-1.5 px-2 py-1 rounded-full">
              <span
                className={`box-border caret-transparent block h-2 w-2 rounded-full ${props.statusIndicatorClass} ${props.statusIndicatorClass.includes('green') ? 'animate-pulse' : ''}`}
              ></span>
              {props.statusText}
            </div>
          </div>
          <div className="text-zinc-400 text-xs items-center box-border caret-transparent gap-x-3 flex leading-4 opacity-80 gap-y-3 mb-3">
            <span className="box-border caret-transparent block">
              {props.category}
            </span>
            <span className="box-border caret-transparent block">•</span>
            <span className="box-border caret-transparent block">
              {props.date}
            </span>
          </div>
          <p className="text-zinc-400 text-sm box-border caret-transparent flow-root grow leading-[22.75px] overflow-hidden mb-4">
            {props.description}
          </p>
          <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2 mb-4">
            {props.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-zinc-400 text-xs box-border caret-transparent block leading-4 border px-2 py-1 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-white/[0.03]"
              >
                {tech}
              </span>
            ))}
          </div>
          <ProjectLinks
            websiteUrl={props.websiteUrl}
            websiteIconUrl={props.websiteIconUrl}
            githubUrl={props.githubUrl}
            githubIconUrl={props.githubIconUrl}
            showWebsite={props.statusText === "Live"}
          />
        </div>
      </div>
    </div>
  );
};
