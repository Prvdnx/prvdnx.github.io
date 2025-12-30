import { SectionHeader } from "@/components/SectionHeader";
import { ExperienceCard } from "@/sections/ExperienceSection/components/ExperienceCard";

export const ExperienceSection = () => {
  return (
    <section className="box-border caret-transparent mt-16" id="experience">
      <SectionHeader title="Experience" />
      <div className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_3] md:col-start-[span_3]">
        <ExperienceCard
          href="https://www.42bangkok.com/"
          title="Software Developer"
          company="42 Bangkok (Transcender - Advanced Core)"
          period="May 2023–Present"
          description="Advancing through flexible and complex projects involving web and mobile developments, scalability, performance, and security. Contributing to the 42 community by volunteering, collaborating and engaging in peer-to-peer learning."
        />
        <ExperienceCard
          href="https://www.42bangkok.com/"
          title="Cadet Software Developer"
          company="42 Bangkok (Common Core)"
          period="Jan 2023–May 2025"
          description="Collaborated with peers to enhance programming skills through hands-on projects and coding challenges. Developed software solutions within an innovative learning environment at 42 Bangkok which is a part of the global 42 network. Engaged in peer-to-peer learning, fostering a supportive community that emphasizes collaboration and creativity."
        />
      </div>
    </section>
  );
};
