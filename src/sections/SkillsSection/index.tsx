import { SectionHeader } from "@/components/SectionHeader";
import { SkillTag } from "@/sections/SkillsSection/components/SkillTag";

export const SkillsSection = () => {
  return (
    <section className="box-border caret-transparent mt-16" id="skills">
      <SectionHeader title="Skills" />
      <div className="box-border caret-transparent col-end-auto col-start-auto p-4 md:col-end-[span_3] md:col-start-[span_3]">
        <div className="box-border caret-transparent gap-x-3 flex flex-wrap gap-y-3">
          <SkillTag label="C" />
          <SkillTag label="C++" />
          <SkillTag label="Python" />
          <SkillTag label="JavaScript" />
          <SkillTag label="HTML5" />
          <SkillTag label="CSS3" />
          <SkillTag label="React" />
          <SkillTag label="React Native" />
          <SkillTag label="Expo" />
          <SkillTag label="Bash" />
          <SkillTag label="Git" />
          <SkillTag label="GitHub" />
          <SkillTag label="Docker" />
          <SkillTag label="Linux" />
          <SkillTag label="Elasticsearch" />
          <SkillTag label="Logstash" />
          <SkillTag label="Kibana" />
          <SkillTag label="Grafana" />
          <SkillTag label="Prometheus" />
          <SkillTag label="Vite" />
        </div>
      </div>
    </section>
  );
};
