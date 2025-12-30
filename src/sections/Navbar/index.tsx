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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
            <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16 w-full">
                    {/* Mobile: Hamburger Button */}
                    <div className="md:hidden ml-auto">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-zinc-400 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-center w-full">
                        <div className="flex items-center gap-1">
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

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-white/[0.03] animate-in slide-in-from-top-2 duration-200">
                        <div className="flex flex-col py-4 gap-2">
                            {navLinks.map((link) => (
                                <div key={link.label} onClick={() => setIsMenuOpen(false)}>
                                    <NavLink
                                        href={link.href}
                                        title={link.title}
                                        iconSrc={link.iconSrc}
                                        label={link.label}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
