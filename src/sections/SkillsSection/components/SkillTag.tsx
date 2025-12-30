export type SkillTagProps = {
  label: string;
};

export const SkillTag = (props: SkillTagProps) => {
  return (
    <span className="text-sm font-medium bg-neutral-950/80 box-border caret-transparent block leading-5 border px-4 py-1 rounded-full border-solid border-white/[0.03]">
      {props.label}
    </span>
  );
};
