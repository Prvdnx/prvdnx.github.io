import { portfolioData } from "@/data/portfolioData";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="box-border caret-transparent mt-16 border-t border-solid border-white/15 md:border-white/[0.03]">
      <div className="box-border caret-transparent max-w-screen-lg mx-auto px-6 py-8">
        <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-between gap-y-4 md:flex-row">
          <div className="text-zinc-400 text-sm box-border caret-transparent">
            <span className="box-border caret-transparent block">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </span>
          </div>
          <div className="flex gap-4">
            <a
              href={portfolioData.socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Discord
            </a>
            <a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
