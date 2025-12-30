export type ProjectLinksProps = {
  websiteUrl: string;
  websiteIconUrl: string;
  githubUrl?: string;
  githubIconUrl?: string;
  showWebsite?: boolean;
};

export const ProjectLinks = (props: ProjectLinksProps) => {
  return (
    <div className="box-border caret-transparent gap-x-3 flex flex-wrap gap-y-3 mt-auto pt-4 border-t border-solid border-white/[0.03]">
      {props.showWebsite && props.websiteUrl && (
        <a
          href={props.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-medium items-center box-border caret-transparent gap-x-1 flex leading-5 gap-y-1 hover:underline"
        >
          <img
            src={props.websiteIconUrl}
            alt="Icon"
            className="box-border caret-transparent h-3.5 w-3.5"
          />{" "}
          Website
        </a>
      )}
      {props.githubUrl && (
        <a
          href={props.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-sm font-medium items-center box-border caret-transparent gap-x-1 flex leading-5 gap-y-1 hover:text-blue-600"
        >
          <img
            src={props.githubIconUrl}
            alt="Icon"
            className="box-border caret-transparent h-3.5 w-3.5 group-hover:[filter:brightness(0)_saturate(100%)_invert(42%)_sepia(93%)_saturate(1352%)_hue-rotate(202deg)_brightness(97%)_contrast(96%)]"
          />{" "}
          GitHub
        </a>
      )}
    </div>
  );
};
