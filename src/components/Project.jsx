import React from "react";

const Project = ({ title, onClick }) => {
  return (
    <div
      className="flex-wrap items-center justify-between py-6 transition-all duration-200 cursor-pointer border-b border-neutral-700 sm:flex hover:bg-gradient-to-r hover:from-indigo/20 hover:to-storm/20 hover:scale-[1.02] rounded-lg px-4 -mx-4"
      onClick={onClick}
    >
      <div>
        <p className="text-2xl">{title}</p>
      </div>
    </div>
  );
};

export default Project;
