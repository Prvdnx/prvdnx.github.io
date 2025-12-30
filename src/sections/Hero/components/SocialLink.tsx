export type SocialLinkProps = {
  href: string;
  iconSrc: string;
  label: string;
};

export const SocialLink = (props: SocialLinkProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="items-center box-border caret-transparent gap-x-3 flex gap-y-3 hover:text-zinc-400"
    >
      <img
        src={props.iconSrc}
        alt="Icon"
        className="box-border caret-transparent h-5 w-5"
      />
      <span className="text-lg font-medium box-border caret-transparent block leading-7">
        {props.label}
      </span>
    </a>
  );
};
