import profileImg from "@/assets/prvdnxProfile.jpg";

export const ProfileImage = () => {
  return (
    <div className="relative box-border caret-transparent mb-8">
      <div className="relative shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent h-32 w-32 border-gray-50 overflow-hidden rounded-full border-4 border-solid md:h-40 md:w-40">
        <img
          alt="Oghenefega Okamonu"
          sizes="100vw"
          src={profileImg}
          className="absolute text-transparent box-border h-full max-w-full object-cover w-full inset-0"
        />
      </div>
      <div className="absolute bg-neutral-950/80 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent border p-1 rounded-full border-solid border-white/[0.03] -right-2 -bottom-2">
        <div className="items-center bg-neutral-950/80 box-border caret-transparent gap-x-2 flex gap-y-2 px-3 py-1.5 rounded-full">
          <div className="bg-green-500 box-border caret-transparent h-2 w-2 rounded-full animate-pulse"></div>
          <span className="text-zinc-400 text-xs font-medium box-border caret-transparent block leading-4">
            Open to work
          </span>
        </div>
      </div>
    </div>
  );
};
