import { SectionHeader } from "@/components/SectionHeader";
import { EducationCard } from "@/sections/EducationSection/components/EducationCard";

export const EducationSection = () => {
  return (
    <section className="box-border caret-transparent mt-16" id="education">
      <SectionHeader title="Education" />
      <div className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_3] md:col-start-[span_3]">
        <EducationCard
          institution="42 Bangkok - King Mongkut's Institute of Technology"
          period="2023 – 2025"
          degree={<>Software Engineering. <a href="https://www.42bangkok.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">42 Bangkok</a> is part of the <a href="https://www.42network.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">42 Global Network</a>, a coding school built to find and create the best programmers using a gamified, project-based, and peer-to-peer learning method. My relevant coursework included Data Structures and Algorithms, Object-Oriented Programming, Web Development, Database Management, Software Engineering Principles, and Operating Systems.</>}
        />
        <EducationCard
          institution="University of Benin"
          period="2012 - 2017"
          degree="Bachelor of Arts in French/Foreign Languages"
        />
      </div>
    </section>
  );
};
