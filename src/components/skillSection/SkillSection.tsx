import { skillGroups } from "@/app/skills/data/skills";
import { ContentCard } from "@/components/cards/ContentCard";

export const SkillsSection = () => {
    return (
        <div className="relative overflow-hidden rounded-[32px] border border-orange-500/10 bg-zinc-950/40 backdrop-blur-xl p-8">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-black/10 to-zinc-950/30 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
                <h2 className="text-3xl font-bold tracking-tight mb-8 border-b border-orange-500/10 pb-4 text-white">
                    Tecnologías
                </h2>

                <div className="space-y-10">
                    {skillGroups.map((group) => (
                        <div key={group.title}>

                            {/* Título de la categoría */}
                            <div className="flex items-center gap-4 mb-5">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                                    {group.title}
                                </h3>

                                <div className="flex-1 h-px bg-orange-500/20" />
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-5">
                                {group.skills.map((skill) => (
                                    <ContentCard
                                        key={skill.id}
                                        className="w-[190px] p-5 hover:border-orange-400/30 hover:bg-zinc-900/60 transition-all duration-300 cursor-default group"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <skill.icon
                                                className={`text-2xl ${skill.color} group-hover:scale-110 transition`}
                                            />

                                            <span className="font-semibold text-zinc-100">
                                                {skill.label}
                                            </span>
                                        </div>

                                        <span className="inline-block text-xs px-2 py-1 rounded-full bg-zinc-800 text-orange-300 border border-orange-500/20">
                                            {skill.level}
                                        </span>
                                    </ContentCard>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};