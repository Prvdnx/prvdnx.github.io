import externalLinkIcon from "@/assets/icons/external-link.svg";

export type ExperienceCardProps = {
  href: string;
  title: string;
  company: string;
  period: string;
  description: string;
  className?: string;
};

export const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`box-border caret-transparent block ${props.className || ""}`}
    >
      <div className="text-zinc-400 box-border caret-transparent border p-4 rounded-lg border-solid border-transparent hover:bg-blue-600/10 hover:border-white/0">
        <div className="items-start box-border caret-transparent flex justify-between">
          <div className="items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow gap-y-2">
            <h3 className="text-white text-xl font-semibold box-border caret-transparent leading-7">
              {props.title}
            </h3>
            <img
              src={externalLinkIcon}
              alt="Icon"
              className="text-white box-border caret-transparent h-5 w-5"
            />
          </div>
        </div>
        <div className="box-border caret-transparent mb-4">
          <p className="text-white font-medium box-border caret-transparent">
            {props.company}
          </p>
          <p className="text-sm box-border caret-transparent leading-5">
            {props.period}
          </p>
        </div>
        <div className="box-border caret-transparent leading-[26px]">
          <p className="box-border caret-transparent">{props.description}</p>
        </div>
      </div>
    </a>
  );
};
