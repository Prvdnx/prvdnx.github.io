export type ProjectGroupProps = {
    title: string;
    description: string;
    projectCount: number;
    isExpanded: boolean;
    onToggle: () => void;
};

export const ProjectGroup = (props: ProjectGroupProps) => {
    return (
        <div
            onClick={props.onToggle}
            className="bg-neutral-950/80 border border-white/[0.03] rounded-xl p-6 cursor-pointer hover:border-white/[0.08] transition-colors"
        >
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{props.title}</h3>
                        <span className="text-zinc-400 text-sm">({props.projectCount})</span>
                    </div>
                    <p className="text-zinc-400 text-sm">{props.description}</p>
                </div>
                <div className={`transition-transform duration-300 ${props.isExpanded ? 'rotate-180' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
