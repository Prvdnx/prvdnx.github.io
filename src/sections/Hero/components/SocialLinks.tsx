import { SocialLink } from "@/sections/Hero/components/SocialLink";
import discordIcon from "@/assets/icons/discord.svg";
import emailIcon from "@/assets/icons/email.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import githubIcon from "@/assets/icons/github.svg";

export const SocialLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 flex flex-wrap justify-center gap-y-8 mt-12 md:gap-x-12 md:gap-y-12">
      <SocialLink
        href="mailto:mr.okamonu@gmail.com"
        iconSrc={emailIcon}
        label="Email"
      />
      <SocialLink
        href="https://discord.com/users/967592597767983158"
        iconSrc={discordIcon}
        label="Discord"
      />
      <SocialLink
        href="https://github.com/Prvdnx"
        iconSrc={githubIcon}
        label="GitHub"
      />
      <SocialLink
        href="https://www.linkedin.com/in/oghenefega-o-530894273"
        iconSrc={linkedinIcon}
        label="LinkedIn"
      />
    </div>
  );
};
