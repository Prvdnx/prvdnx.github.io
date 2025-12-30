import { ProfileImage } from "@/sections/Hero/components/ProfileImage";
import { SocialLinks } from "@/sections/Hero/components/SocialLinks";
import badgeIcon from "@/assets/icons/badge.svg";
import locationIcon from "@/assets/icons/location.svg";

export const Hero = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col">
      <ProfileImage />
      <div className="box-border caret-transparent text-center">
        <h1 className="text-3xl font-semibold box-border caret-transparent tracking-[-0.75px] leading-9 break-words md:text-4xl md:tracking-[-1.2px] md:leading-[48px]">
          Oghenefega Okamonu
        </h1>
        <div className="items-center bg-neutral-950/80 box-border caret-transparent gap-x-2 inline-flex gap-y-2 border mt-3 px-4 py-2 rounded-full border-solid border-white/[0.03]">
          <img
            src={badgeIcon}
            alt="Icon"
            className="text-zinc-400 box-border caret-transparent h-4 w-4"
          />
          <span
            title="Software Developer"
            className="text-sm font-medium box-border caret-transparent block leading-5 max-w-full md:text-base md:leading-6"
          >
            Software Developer
          </span>
        </div>
        <div className="text-zinc-400 items-center box-border caret-transparent gap-x-2 flex justify-center gap-y-2 mt-3">
          <img
            src={locationIcon}
            alt="Icon"
            className="box-border caret-transparent h-4 w-4"
          />
          <span className="text-sm box-border caret-transparent block leading-5 md:text-base md:leading-6">
            Bangkok, Thailand
          </span>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};
