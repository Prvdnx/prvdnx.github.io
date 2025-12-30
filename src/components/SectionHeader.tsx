export type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="box-border caret-transparent mb-3">
      <h2 className="text-xl font-bold box-border caret-transparent leading-7 mb-1 scroll-mt-24">
        {props.title}
      </h2>
      <div className="bg-white box-border caret-transparent h-[3px] w-12 rounded-full"></div>
    </div>
  );
};
