import { SectionHeader } from "@/components/SectionHeader";
import { ExperienceCard } from "@/sections/ExperienceSection/components/ExperienceCard";
import { portfolioData } from "@/data/portfolioData";

export const ExperienceSection = () => {
  return (
    <section className="box-border caret-transparent mt-16" id="experience">
      <SectionHeader title="Experience" />
      <div className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_3] md:col-start-[span_3]">
        {portfolioData.experience.map((exp, index) => (
          <ExperienceCard
            key={index}
            href={exp.href}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};
