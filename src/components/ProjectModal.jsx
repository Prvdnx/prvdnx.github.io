import React from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectListItem from "./ProjectListItem";

const ProjectModal = ({ isOpen, onClose, category }) => {
    if (!category) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/70"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-6xl h-[95vh] overflow-hidden rounded-2xl bg-primary"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header with Close Button */}
                        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b bg-primary/95 backdrop-blur-lg border-white/10">
                            <div>
                                <h2 className="text-3xl font-bold">{category.category}</h2>
                                <p className="mt-1 text-sm text-neutral-400">{category.description}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 transition-colors rounded-full bg-white/10 hover:bg-white/20"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable Project List */}
                        <div className="h-full p-8 pb-32 overflow-y-auto">
                            <div className="space-y-8">
                                {category.projects?.map((project) => (
                                    <ProjectListItem key={project.id} project={project} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
