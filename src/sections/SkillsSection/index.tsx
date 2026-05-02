import { SectionHeader } from "@/components/SectionHeader";
import { SkillTag } from "@/sections/SkillsSection/components/SkillTag";
import { portfolioData } from "@/data/portfolioData";

export const SkillsSection = () => {
  return (
    <section className="box-border caret-transparent mt-16" id="skills">
      <SectionHeader title="Skills" />
      <div className="box-border caret-transparent col-end-auto col-start-auto p-4 md:col-end-[span_3] md:col-start-[span_3]">
        <div className="box-border caret-transparent gap-x-3 flex flex-wrap gap-y-3">
          {portfolioData.skills.map((skill, index) => (
            <SkillTag key={index} label={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
