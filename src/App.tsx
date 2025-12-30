import { BackgroundImage } from "@/components/BackgroundImage";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { EducationSection } from "@/sections/EducationSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ContactSection } from "@/sections/ContactSection";

import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc min-h-[1000px] pointer-events-auto scroll-smooth text-start indent-[0px] normal-case visible border-separate font-work_sans bg-transparent">
      <div className="box-border caret-transparent hidden"></div>
      <div className="box-border caret-transparent min-h-[1000px]">
        <div className="text-white box-border caret-transparent min-h-[1000px] w-full">
          <BackgroundImage />
          <div className="relative box-border caret-transparent z-10">
            <div className="box-border caret-transparent flex justify-end pr-4 pt-8 md:pr-8"></div>
            <div className="box-border caret-transparent flex justify-center">
              <div className="box-border caret-transparent max-w-screen-lg w-full px-4 md:px-8">
                <Navbar />
                <div className="box-border caret-transparent mt-4 md:mt-8">
                  <div className="relative box-border caret-transparent overflow-hidden">
                    <div className="relative box-border caret-transparent px-6 py-8">
                      <div className="box-border caret-transparent max-w-4xl mx-auto">
                        <Hero />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent mt-8">
                  <AboutSection />
                  <ExperienceSection />
                  <ProjectsSection />
                  <EducationSection />
                  <SkillsSection />
                  <ContactSection />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <section
        aria-label="Notifications alt+T"
        className="box-border caret-transparent"
      ></section>
      <div className="absolute box-border caret-transparent block"></div>
    </div>
  );
};
