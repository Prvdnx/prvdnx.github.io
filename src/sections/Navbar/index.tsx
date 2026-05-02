import { useState } from "react";
import { NavLink } from "@/sections/Navbar/components/NavLink";
import { Menu, X } from "lucide-react";
import homeIcon from "@/assets/icons/home.svg?url";
import aboutIcon from "@/assets/icons/about.svg?url";
import experienceIcon from "@/assets/icons/experience.svg?url";
import projectsIcon from "@/assets/icons/projects.svg?url";
import educationIcon from "@/assets/icons/education.svg?url";
import skillsIcon from "@/assets/icons/skills.svg?url";
import emailIcon from "@/assets/icons/email.svg?url";

export const Navbar = () => {
    const navLinks = [
        { href: "#", title: "Home", label: "Home", iconSrc: homeIcon },
        { href: "#about", title: "About", label: "About", iconSrc: aboutIcon },
        { href: "#experience", title: "Experience", label: "Experience", iconSrc: experienceIcon },
        { href: "#projects", title: "Projects", label: "Projects", iconSrc: projectsIcon },
        { href: "#education", title: "Education", label: "Education", iconSrc: educationIcon },
        { href: "#skills", title: "Skills", label: "Skills", iconSrc: skillsIcon },
        { href: "#contact", title: "Contact", label: "Contact", iconSrc: emailIcon },
    ];

    return (
        <nav className="sticky backdrop-blur-sm bg-neutral-950/80 w-full z-50 border-b border-white/[0.03] top-0">
            <div className="max-w-screen-lg mx-auto px-2 md:px-8">
                <div className="flex items-center justify-center h-16 w-full">
                    <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.label}
                                href={link.href}
                                title={link.title}
                                iconSrc={link.iconSrc}
                                label={link.label}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
