import { SectionHeader } from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolioData";

export const AboutSection = () => {
  return (
    <section className="box-border caret-transparent mt-16" id="about">
      <SectionHeader title="About" />
      <div className="box-border caret-transparent max-w-screen-lg mx-auto px-6">
        <div className="border border-white/10 rounded-xl p-6 text-zinc-400 box-border caret-transparent leading-relaxed mt-6">
          {portfolioData.about.paragraphs.map((p, i) => (
            <p key={i} className={i < portfolioData.about.paragraphs.length - 1 ? "mb-4" : ""}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
