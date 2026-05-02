import { SectionHeader } from "@/components/SectionHeader";
import { EducationCard } from "@/sections/EducationSection/components/EducationCard";
import { portfolioData } from "@/data/portfolioData";

export const EducationSection = () => {
  return (
    <section className="box-border caret-transparent mt-16" id="education">
      <SectionHeader title="Education" />
      <div className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_3] md:col-start-[span_3]">
        {portfolioData.education.map((edu, index) => (
          <EducationCard
            key={index}
            institution={edu.institution}
            period={edu.period}
            degree={edu.degree}
          />
        ))}
      </div>
    </section>
  );
};
