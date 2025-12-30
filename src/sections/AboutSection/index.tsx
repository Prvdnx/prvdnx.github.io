import { SectionHeader } from "@/components/SectionHeader";

export const AboutSection = () => {
  return (
    <section className="box-border caret-transparent mt-16" id="about">
      <SectionHeader title="About" />
      <div className="box-border caret-transparent max-w-screen-lg mx-auto px-6">
        <div className="text-zinc-400 box-border caret-transparent leading-relaxed mt-6">
          <p className="mb-4">
            A dabbler in code and a <a href="https://www.42network.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">42</a> graduate currently pursuing the advanced core curriculum at <a href="https://www.42bangkok.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">42 Bangkok</a>.
            I'm passionate about new technologies and innovative solutions, actively learning and specializing in a variety of languages, frameworks, and tools that
            would allow me build robust and scalable tech solutions.
          </p>
          <p>
            I'm also currently seeking internship and on-site/remote work opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};
