export type EducationCardProps = {
  institution: string;
  period: string;
  degree: string;
  variant?: string;
};

export const EducationCard = (props: EducationCardProps) => {
  return (
    <div
      className={`text-zinc-400 box-border caret-transparent border p-4 rounded-lg border-solid border-transparent hover:bg-blue-600/10 hover:border-white/0 ${props.variant || ""}`}
    >
      <div className="box-border caret-transparent mb-4">
        <div className="box-border caret-transparent">
          <p className="text-white text-xl font-semibold box-border caret-transparent leading-7">
            {props.institution}
          </p>
          <p className="text-sm box-border caret-transparent leading-5">
            {props.period}
          </p>
        </div>
      </div>
      <div className="box-border caret-transparent leading-[26px]">
        <p className="box-border caret-transparent">{props.degree}</p>
      </div>
    </div>
  );
};
